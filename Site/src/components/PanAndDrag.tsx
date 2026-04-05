import { useState, useRef, useEffect, useCallback } from "react";
import monthImg from "../images/month.png";
import styles from "../styles/PanAndDrag.module.css";

interface Point { x: number; y: number; }

const images = [
  { src: monthImg, title: "Monthly Schedule" },
];

export default function PanAndDrag() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [diameter, setDiameter] = useState(0);

  const dragStart = useRef<Point | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const maxPan = diameter * 0.3;

  const clamp = (val: number, min: number, max: number) =>
    Math.min(max, Math.max(min, val));

  useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setDiameter(entry.contentRect.width);
    });
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    setOffset({
      x: clamp(e.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(e.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  }, [isDragging, maxPan]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    setIsDragging(true);
    dragStart.current = { x: t.clientX - offset.x, y: t.clientY - offset.y };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart.current) return;
    const t = e.touches[0];
    setOffset({
      x: clamp(t.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(t.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const goLeft = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const goRight = () => setCurrentIndex((i) => (i + 1) % images.length);

  const size = diameter || "min(70vw, 350px)";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <div className={styles.title}>{images[currentIndex].title}</div>

      <div ref={wrapperRef} className={styles.content}>
        <div
          className={`${styles.circle} ${isDragging ? styles.grabbing : styles.grab}`}
          style={{ width: size, height: size }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex].src}
            draggable={false}
            className={styles.image}
            style={{
              top: `calc(-30% + ${offset.y}px)`,
              left: `calc(-30% + ${offset.x}px)`,
              transition: isDragging ? "none" : "top 0.05s, left 0.05s",
            }}
          />
        </div>
      </div>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`${styles.dot} ${i === currentIndex ? styles.dotActive : styles.dotInactive}`}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={goLeft} className={styles.btn}>←</button>
        <div className={styles.counter}>
          {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </div>
        <button onClick={goRight} className={styles.btn}>→</button>
      </div>

      <p className={styles.hint}>DRAG TO PAN</p>
    </div>
    </div>
  );
}