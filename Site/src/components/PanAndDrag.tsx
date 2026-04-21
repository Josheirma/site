import { useState, useRef, useEffect, useCallback } from "react";
import monthImg from "../images/month.png";
import styles from "../styles/PanAndDrag.module.css";

interface Point { x: number; y: number; }

const images = [
  { src: monthImg, title: "Monthly Schedule" },
];

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

export default function PanAndDrag() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [diameter, setDiameter] = useState(0);

  const dragStart = useRef<Point | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // image is 160% wide/tall — overflows 30% each side when centered
  // so exact edge-to-edge horizontal travel = 30% of diameter per side
  const maxPanX = 1000; //diameter * 1.0;

  // fixed 200px vertical travel in both directions
  const maxPanY = 200;

  // useEffect(() => {
  //   if (!wrapperRef.current) return;
  //   const ro = new ResizeObserver(([entry]) => {
  //     setDiameter(entry.contentRect.width);
  //   });
  //   ro.observe(wrapperRef.current);
  //   return () => ro.disconnect();
  // }, []);

  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [currentIndex]);

  // ── Mouse ──────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    setOffset({
      x: clamp(e.clientX - dragStart.current.x, -maxPanX, maxPanX),
      y: clamp(e.clientY - dragStart.current.y, -maxPanY, maxPanY),
    });
  }, [isDragging, maxPanX]);

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

  // ── Touch ──────────────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    setIsDragging(true);
    dragStart.current = {
      x: t.clientX - offset.x,
      y: t.clientY - offset.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart.current) return;
    const t = e.touches[0];
    setOffset({
      x: clamp(t.clientX - dragStart.current.x, -maxPanX, maxPanX),
      y: clamp(t.clientY - dragStart.current.y, -maxPanY, maxPanY),
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // ── Navigation ─────────────────────────────────────────
  const goLeft  = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const goRight = () => setCurrentIndex((i) => (i + 1) % images.length);

  const size = diameter || "min(32vw, 403px)";

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
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: isDragging ? "none" : "transform 0.05s",
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
          <button onClick={goLeft}  className={styles.btn}>←</button>
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
