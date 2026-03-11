import { useState, useRef, useEffect, useCallback } from "react";
import monthImg from "../images/month.png";

const images = [
  { src: monthImg, title: "Monthly Schedule" },
];

export default function PanAndDrag() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [diameter, setDiameter] = useState(0);
  const [maxPan, setMaxPan] = useState(0);
 
  const dragStart = useRef(null);
  const containerRef = useRef(null);

  const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
  //const diameter = 400;

  // Measure responsive diameter and derive maxPan together
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const d = containerRef.current.offsetWidth;
        setDiameter(d);
        setMaxPan(d * 0.3);
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Reset pan when image changes
  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [currentIndex]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !dragStart.current) return;
    setOffset({
      x: clamp(e.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(e.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  }, [isDragging, maxPan]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

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

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    dragStart.current = {
      x: touch.clientX - offset.x,
      y: touch.clientY - offset.y,
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !dragStart.current) return;
    const touch = e.touches[0];
    setOffset({
      x: clamp(touch.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(touch.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const goLeft = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  const goRight = () =>
    setCurrentIndex((i) => (i + 1) % images.length);

  
  
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
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "white",
          letterSpacing: "0.05em",
        }}
      >
        {images[currentIndex].title}
      </div>

      {/* Circular viewport */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "min(70vw, 350px)",
          height: "min(70vw, 350px)",
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
            pointerEvents: "none",
            transition: isDragging ? "none" : "top 0.05s, left 0.05s",
          }}
        />
      </div>

      {/* Dots */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: i === currentIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background:
                i === currentIndex ? "#6c63ff" : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Nav buttons */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button onClick={goLeft} style={btnStyle}>←</button>
        <span
          style={{
            color: "#aaa",
            fontSize: "12px",
            letterSpacing: "0.2em",
            fontFamily: "monospace",
            minWidth: 60,
            textAlign: "center",
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} /
          {String(images.length).padStart(2, "0")}
        </span>
        <button onClick={goRight} style={btnStyle}>→</button>
      </div>

      <p
        style={{
          color: "#aaa",
          fontSize: "11px",
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