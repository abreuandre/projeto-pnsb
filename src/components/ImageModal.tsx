import { useEffect } from "react";

interface ImageModalProps {
  imageUrl: string;
  alt?: string;
  onClose: () => void;
}

export function ImageModal({ imageUrl, alt = "", onClose }: ImageModalProps) {
  // Fecha com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl leading-none hover:opacity-70"
        aria-label="Fechar"
      >
        &times;
      </button>
      <img
        src={imageUrl}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar na imagem
      />
    </div>
  );
}