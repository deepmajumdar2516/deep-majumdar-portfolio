import { useState } from 'react'

export default function ImageCarousel({ images, altPrefix = 'Screenshot' }) {
  const [index, setIndex] = useState(0)
  if (!images?.length) return null

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="carousel">
      <img src={images[index]} alt={`${altPrefix} ${index + 1}`} className="carousel-img" />
      {images.length > 1 && (
        <>
          <button type="button" className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button type="button" className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
            ›
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={i === index ? 'active' : ''}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
