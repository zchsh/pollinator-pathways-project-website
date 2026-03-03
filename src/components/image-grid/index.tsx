"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import s from "./style.module.css";
import clsx from "clsx";

export function ImageGrid({ images }: { images: (string | null)[] }) {
  const [lightboxImageIdx, setLightboxImageIdx] = useState(-1);
  const closeLightbox = () => setLightboxImageIdx(-1);

  const validImages = images.filter((image) => image !== null);
  const imageCount = validImages.length;

  const lightboxNext = useCallback(() => {
    setLightboxImageIdx((currentIdx) =>
      Math.min(currentIdx + 1, validImages.length - 1)
    );
  }, [validImages.length]);
  const lightboxPrev = useCallback(() => {
    setLightboxImageIdx((currentIdx) => Math.max(currentIdx - 1, 0));
  }, []);

  /**
   * Listen for escape and arrow keys.
   * On escape key, close lightbox.
   * On arrow keys, navigate lightbox images, but
   * only if the lightbox is open.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImageIdx < 0) {
        return;
      }
      if (e.key === "Escape") {
        closeLightbox();
      }
      if (e.key === "ArrowLeft") {
        lightboxPrev();
      } else if (e.key === "ArrowRight") {
        lightboxNext();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImageIdx, lightboxPrev, lightboxNext]);

  if (imageCount === 0) return null;

  return (
    <>
      <div className={s.photoGridRoot}>
        {validImages.map((image, idx) => {
          return (
            <div className={s.photoGridItem} key={idx}>
              <img
                className={s.image}
                src={image}
                alt=""
                onClick={() => setLightboxImageIdx(idx)}
              />
            </div>
          );
        })}
      </div>

      {lightboxImageIdx !== -1 && (
        <ModalPortal>
          <div className={s.lightbox}>
            <img
              className={clsx(s.lightboxImage)}
              src={validImages[lightboxImageIdx]}
              alt=""
            />
            <button
              className={clsx(s.lightboxButton, s.lightboxClose)}
              onClick={closeLightbox}
            >
              <span aria-hidden>×</span>
            </button>
            {lightboxImageIdx > 0 ? (
              <button
                className={clsx(s.lightboxButton, s.lightboxPrev)}
                onClick={lightboxPrev}
              >
                <span aria-hidden>←</span>
              </button>
            ) : null}
            {lightboxImageIdx < imageCount - 1 ? (
              <button
                className={clsx(s.lightboxButton, s.lightboxNext)}
                onClick={lightboxNext}
              >
                <span aria-hidden>→</span>
              </button>
            ) : null}

            {/*<img
            className={s.lightboxImage}
            src={validImages[lightboxImageIdx]}
            alt=""
            onClick={closeLightbox}
          />*/}
          </div>
        </ModalPortal>
      )}
    </>
  );
}

function ModalPortal({ children }: { children: React.ReactNode }) {
  return <>{createPortal(children, document.body)}</>;
}
