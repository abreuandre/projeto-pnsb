import { Link } from 'react-router-dom'
import { ChevronDown, BookOpen, Clock, Users, Newspaper } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import NewsCard from '../components/NewsCard'
import { newsData } from '../data/news'

const massTimes = [
  { day: 'Seg – Sex', times: ['07h00'] },
  { day: 'Sábado', times: ['08h00', '18h00'] },
  { day: 'Domingo', times: ['07h00', '09h00', '11h00', '19h00'] },
]

const highlights = [
  {
    icon: <BookOpen size={28} className="text-parish-blue" />,
    title: 'Fé e Tradição',
    desc: 'Mais de 70 anos de história, celebrando os sacramentos e transmitindo a fé católica.',
  },
  {
    icon: <Users size={28} className="text-parish-blue" />,
    title: 'Comunidade Ativa',
    desc: 'Pastorais, grupos de oração e movimentos para todas as idades e vocações.',
  },
  {
    icon: <Clock size={28} className="text-parish-blue" />,
    title: 'Missas Diárias',
    desc: 'Celebrações eucarísticas todos os dias para nutrir a vida espiritual da comunidade.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/img2.avif" alt="Igreja" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(160deg, rgba(10,50,120,0.80) 0%, rgba(26,127,212,0.65) 50%, rgba(255,183,226,0.55) 100%)'
          }} />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: '#FFB7E2' }} />
        <div className="absolute bottom-32 right-16 w-56 h-56 rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: '#3AA3FF', animationDelay: '2s' }} />

        {/* Top rainbow bar */}
        <div className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2, #3AA3FF)' }} />

        <div className="relative z-10 px-6 max-w-3xl mx-auto animate-fadeInUp">
          <p className="font-latin text-pink-200 text-base md:text-lg italic tracking-widest mb-4">
            Ave Maria, Gratia Plena
          </p>
          <h1 className="font-serif text-white text-4xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-lg">
            Paróquia Nossa Senhora
          </h1>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight italic mb-6 drop-shadow-lg"
            style={{ color: '#FFB7E2' }}>
            do Bonsucesso
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #3AA3FF, #FFB7E2)' }} />
          <p className="font-body text-blue-50 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto drop-shadow">
            Uma comunidade de fé viva, acolhendo a todos na graça de Deus.
            Venha celebrar, rezar e servir conosco. Todos são bem-vindos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/historia" className="btn-primary rounded-full">
              Conheça Nossa História
            </Link>
            <Link to="/noticias" className="btn-outline rounded-full border-white text-white hover:border-transparent">
              Próximos Eventos
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 text-white animate-bounce opacity-70">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* ── MASS TIMES ── */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #0d4f8c, #1a7fd4)' }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Horários de Missa" subtitle="Venha celebrar a Eucaristia conosco" light />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {massTimes.map((m) => (
              <div key={m.day}
                className="border border-white/20 bg-white/10 backdrop-blur p-6 text-center rounded-xl hover:bg-white/20 transition-colors">
                <p className="font-serif text-pink-200 text-xl mb-3">{m.day}</p>
                {m.times.map((t) => (
                  <p key={t} className="font-body text-white text-lg">{t}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WELCOME ── */}
      <section className="py-20 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-latin text-parish-blue text-base italic mb-2">Bem-vindos</p>
              <h2 className="section-title text-left mb-4">Uma casa aberta para todos</h2>
              <div className="blue-divider" />
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                A Paróquia Nossa Senhora do Bonsucesso é uma comunidade eclesial que, há mais de
                sete décadas, acolhe fiéis de todas as idades, origens e histórias de vida. Aqui,
                o Evangelho é vivido no cotidiano, na partilha e no serviço ao próximo.
              </p>
              <p className="font-body text-gray-600 leading-relaxed mb-8">
                Seja você alguém que busca se aproximar da fé, retomar uma caminhada espiritual
                ou apenas encontrar uma comunidade acolhedora — nossa porta está sempre aberta.
                Como disse Jesus: <em>"Vinde a mim."</em> (Mt 11,28)
              </p>
              <Link to="/equipe" className="btn-primary inline-block rounded-full">
                Conheça Nossa Equipe
              </Link>
            </div>
            <div className="relative">
              <img src="/img1.avif" alt="Interior da paróquia"
                className="w-full h-80 object-cover shadow-xl rounded-2xl" />
              {/* Decorative blob */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full -z-10 opacity-40"
                style={{ background: 'linear-gradient(135deg, #3AA3FF, #FFB7E2)' }} />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full -z-10 opacity-30"
                style={{ background: '#FFB7E2' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="py-16 px-4" style={{ background: '#f0f8ff' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-50 group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(58,163,255,0.15), rgba(255,183,226,0.25))' }}>
                  {h.icon}
                </div>
              </div>
              <h3 className="font-serif text-parish-blueDeep text-xl mb-3">{h.title}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-20 px-4 bg-parish-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-latin text-parish-blue italic text-base mb-1">Fique por dentro</p>
              <h2 className="section-title text-left mb-2">Últimas Notícias</h2>
              <div className="blue-divider" />
            </div>
            <Link to="/noticias"
              className="hidden sm:flex items-center gap-2 text-parish-blue font-body text-sm uppercase tracking-widest hover:underline">
              <Newspaper size={16} /> Ver todas
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsData.slice(0, 3).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #3AA3FF 0%, #a8d8ff 50%, #FFB7E2 100%)' }} />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-latin text-white/80 italic text-lg mb-3 drop-shadow">"Amai-vos uns aos outros"</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Faça parte da nossa comunidade
          </h2>
          <p className="font-body text-white/90 mb-8 leading-relaxed drop-shadow">
            Descubra os grupos, movimentos e pastorais que transformam vidas e fortalecem a fé.
          </p>
          <Link to="/noticias"
            className="inline-block bg-white font-body font-bold px-8 py-3 rounded-full tracking-wide uppercase text-sm transition-all hover:shadow-lg hover:scale-105"
            style={{ color: '#1a7fd4' }}>
            Ver Próximos Eventos
          </Link>
        </div>
      </section>
    </>
  )
}
