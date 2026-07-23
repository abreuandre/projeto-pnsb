import { useState } from "react";
import { ImageModal } from "./ImageModal";

export function ClickableImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ImageModal
          imageUrl={src}
          alt={alt}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}