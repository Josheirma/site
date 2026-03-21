import { useState, useRef, useEffect, useCallback } from "react";
import monthImg from "../images/month.png";

interface Point {
  x: number;
  y: number;
}

const images = [{ src: monthImg, title: "Monthly Schedule" }];

export default function PanAndDrag() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [diameter, setDiameter] = useState(0);

  const dragStart = useRef<Point | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const maxPan = diameter * 0.3;

  const clamp = (val: number, min: number, max: number) =>
    Math.min(max, Math.max(min, val));

  // ResizeObserver to track wrapper size
  useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setDiameter(w);
    });
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [currentIndex]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !dragStart.current) return;
      setOffset({
        x: clamp(e.clientX - dragStart.current.x, -maxPan, maxPan),
        y: clamp(e.clientY - dragStart.current.y, -maxPan, maxPan),
      });
    },
    [isDragging, maxPan]
  );

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

  // Touch events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setIsDragging(true);
    dragStart.current = { x: touch.clientX - offset.x, y: touch.clientY - offset.y };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart.current) return;
    const touch = e.touches[0];
    setOffset({
      x: clamp(touch.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(touch.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Navigation
  const goLeft = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const goRight = () => setCurrentIndex((i) => (i + 1) % images.length);

  // Button style
  const btnStyle = {
    width: 56,
    height: 56,
    borderRadius: "50%",
    border: "1px solid rgba(0,0,0,0.2)",
    background: "rgba(255,255,255,0.6)",
    color: "#333",
    fontSize: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(8px)",
    transition: "all 0.2s ease",
  };

  return (
    <div
      style={{
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Georgia', serif",
        gap: "16px",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "white",
          letterSpacing: "0.05em",
        }}
      >
        {images[currentIndex].title}
      </div>

      {/* Wrapper */}
      <div
        ref={wrapperRef}
        style={{
          width: "clamp(250px, calc(10px + 30.88vw), 570px)",
          alignSelf: "center",
        }}
      >
        {/* Circle */}
        <div
          style={{
            position: "relative",
            width: diameter || "min(70vw, 350px)",
            height: diameter || "min(70vw, 350px)",
            borderRadius: "50%",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
            userSelect: "none",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex].src}
            draggable={false}
            style={{
              position: "absolute",
              width: "160%",
              height: "160%",
              maxWidth: "none",
              objectFit: "cover",
              top: `calc(-30% + ${offset.y}px)`,
              left: `calc(-30% + ${offset.x}px)`,
              pointerEvents: "none", // only parent receives events
              transition: isDragging ? "none" : "top 0.05s, left 0.05s",
            }}
          />
        </div>
      </div>

      {/* Pagination dots */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? "2rem" : ".5rem",
              height: ".7rem",
              borderRadius: 4,
              background: i === currentIndex ? "#6c63ff" : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Arrows + counter */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "nowrap",
          justifyContent: "center",
        }}
      >
        <button onClick={goLeft} style={btnStyle}>
          ←
        </button>

        <div
          style={{
            color: "#aaa",
            fontSize: "1.3rem",
            letterSpacing: "0.1em",
            fontFamily: "monospace",
            minWidth: 60,
            textAlign: "center",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        <button onClick={goRight} style={btnStyle}>
          →
        </button>
      </div>

      <p
        style={{
          color: "#aaa",
          fontSize: "1rem",
          letterSpacing: "0.15em",
          fontFamily: "monospace",
          margin: 0,
        }}
      >
        DRAG TO PAN
      </p>
    </div>
  );
}