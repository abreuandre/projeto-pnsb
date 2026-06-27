/**
 * scripts/translate.js
 *
 * Lê src/i18n/locales/pt/translation.json (idioma fonte),
 * compara com en/it, e traduz automaticamente apenas as chaves
 * que forem NOVAS ou que tiverem sido ALTERADAS no pt.
 *
 * Uso:
 *   node scripts/translate.js
 *
 * Instalação necessária:
 *   npm install google-translate-api-x --save-dev
 */

const fs = require("fs");
const path = require("path");
const translate = require("google-translate-api-x");

const LOCALES_DIR = path.join(__dirname, "..", "src", "i18n", "locales");

const SOURCE_LANG = "pt";
const TARGET_LANGS = ["en", "it"];

// Chaves ou termos que NUNCA devem ser traduzidos automaticamente
// (nomes próprios, termos litúrgicos específicos, etc.)
// Usa um marcador __NOTRANSLATE__ para protegê-los durante a tradução.
const PROTECTED_TERMS = [
  "Nossa Senhora do Bonsucesso",
  "Pe. Marcos Antônio Silva",
  "Pe. João Batista Ferreira",
  "Dc. Roberto Almeida",
  "Ave Maria, Gratia Plena",
];

function readJSON(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

// Cache para não retraduzir o que já foi traduzido e não mudou
const CACHE_PATH = path.join(__dirname, ".translate-cache.json");
function readCache() {
  return readJSON(CACHE_PATH);
}
function writeCache(cache) {
  writeJSON(CACHE_PATH, cache);
}

// Percorre um objeto aninhado e retorna pares { "a.b.c": "valor" }
function flatten(obj, prefix = "") {
  const result = {};
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(result, flatten(value, fullKey));
    } else {
      result[fullKey] = value;
    }
  }
  return result;
}

// Reconstrói o objeto aninhado a partir de pares { "a.b.c": "valor" }
function unflatten(flat) {
  const result = {};
  for (const flatKey of Object.keys(flat)) {
    const parts = flatKey.split(".");
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      current[parts[i]] = current[parts[i]] || {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = flat[flatKey];
  }
  return result;
}

function protectTerms(text) {
  if (typeof text !== "string") return text;
  let protectedText = text;
  PROTECTED_TERMS.forEach((term, i) => {
    protectedText = protectedText.split(term).join(`__PROTECTED_${i}__`);
  });
  return protectedText;
}

function restoreTerms(text) {
  let restored = text;
  PROTECTED_TERMS.forEach((term, i) => {
    restored = restored.split(`__PROTECTED_${i}__`).join(term);
  });
  return restored;
}

async function translateText(text, targetLang) {
  if (typeof text !== "string" || text.trim() === "") return text;

  try {
    const protectedText = protectTerms(text);
    const res = await translate(protectedText, { from: "pt", to: targetLang });
    return restoreTerms(res.text);
  } catch (err) {
    console.error(
      `  ⚠ Erro ao traduzir "${text.slice(0, 40)}..." para ${targetLang}:`,
      err.message,
    );
    return text; // fallback: mantém o texto original se a tradução falhar
  }
}

// Traduz arrays (ex: content: string[]) item por item
async function translateValue(value, targetLang) {
  if (Array.isArray(value)) {
    const translated = [];
    for (const item of value) {
      translated.push(await translateValue(item, targetLang));
    }
    return translated;
  }
  return translateText(value, targetLang);
}

async function main() {
  const sourcePath = path.join(LOCALES_DIR, SOURCE_LANG, "translation.json");
  const sourceData = readJSON(sourcePath);
  const sourceFlat = flatten(sourceData);

  const cache = readCache();

  for (const targetLang of TARGET_LANGS) {
    console.log(`\n🌍 Traduzindo para "${targetLang}"...`);

    const targetPath = path.join(LOCALES_DIR, targetLang, "translation.json");
    const targetData = readJSON(targetPath);
    const targetFlat = flatten(targetData);

    let translatedCount = 0;
    let skippedCount = 0;

    for (const key of Object.keys(sourceFlat)) {
      const sourceValue = sourceFlat[key];
      const cacheKey = `${targetLang}::${key}`;
      const cachedSourceValue = cache[cacheKey]?.source;

      const sourceValueStr = JSON.stringify(sourceValue);
      const alreadyTranslated = targetFlat[key] !== undefined;
      const sourceUnchanged = cachedSourceValue === sourceValueStr;

      if (alreadyTranslated && sourceUnchanged) {
        skippedCount++;
        continue; // já traduzido e o texto em pt não mudou desde a última vez
      }

      console.log(`  ↳ Traduzindo chave: ${key}`);
      const translatedValue = await translateValue(sourceValue, targetLang);
      targetFlat[key] = translatedValue;

      cache[cacheKey] = { source: sourceValueStr };
      translatedCount++;
    }

    // Remove do destino chaves que não existem mais no source (limpeza)
    for (const key of Object.keys(targetFlat)) {
      if (!(key in sourceFlat)) {
        delete targetFlat[key];
        delete cache[`${targetLang}::${key}`];
      }
    }

    const rebuilt = unflatten(targetFlat);
    writeJSON(targetPath, rebuilt);

    console.log(
      `✅ ${targetLang}: ${translatedCount} chave(s) traduzida(s), ${skippedCount} já estavam atualizadas.`,
    );
  }

  writeCache(cache);
  console.log("\n✨ Tradução automática concluída!");
  console.log(
    "⚠️  Revise sempre o resultado — tradução automática pode errar termos litúrgicos/religiosos específicos.",
  );
}

main().catch((err) => {
  console.error("Erro fatal no script de tradução:", err);
  process.exit(1);
});
