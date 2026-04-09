import { useState, useRef, useEffect, useCallback } from "react";
import monthImg from "../images/month.png";
import styles from "../styles/PanAndDrag.module.css";

// shape for x/y coordinates
interface Point { x: number; y: number; }

// image data — add more objects here for more slides
const images = [
  { src: monthImg, title: "Monthly Schedule" },
];

export default function PanAndDrag() {
  // which slide is showing
  const [currentIndex, setCurrentIndex] = useState(0);

  // how far the image has been dragged from center
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // true while mouse/finger is held down
  const [isDragging, setIsDragging] = useState(false);

  // width of the circle in px — measured from the DOM
  const [diameter, setDiameter] = useState(0);

  // stores where the drag started — useRef so it doesn't cause re-renders
  const dragStart = useRef<Point | null>(null);

  // reference to the .content div so we can measure its width
  const wrapperRef = useRef<HTMLDivElement>(null);

  // max distance image can be dragged — 30% of circle width
  const maxPan = diameter * 0.3;

  // keeps a number between min and max
  const clamp = (val: number, min: number, max: number) =>
    Math.min(max, Math.max(min, val));

  // measure the circle width on mount, and again whenever it resizes
  useEffect(() => {
    if (!wrapperRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setDiameter(entry.contentRect.width); // entry = info about the resized element
    });
    ro.observe(wrapperRef.current); // start watching
    return () => ro.disconnect();   // cleanup when component unmounts
  }, []); // [] = only run once on mount

  // reset pan offset whenever the slide changes
  useEffect(() => {
    setOffset({ x: 0, y: 0 });
  }, [currentIndex]);

  // mouse pressed down on circle — start drag
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // prevents text selection while dragging
    setIsDragging(true);
    // store where drag started, accounting for current offset
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  // mouse moving — update offset (only fires if dragging)
  // useCallback so the function reference stays stable between renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    setOffset({
      // clamp keeps the image from sliding too far
      x: clamp(e.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(e.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  }, [isDragging, maxPan]);

  // mouse released — stop drag
  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  // attach/detach window-level mouse listeners while dragging
  // window-level so drag still works if mouse leaves the circle
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      // always cleanup to avoid stale listeners
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // touch equivalent of mouseDown
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0]; // first finger
    setIsDragging(true);
    dragStart.current = { x: t.clientX - offset.x, y: t.clientY - offset.y };
  };

  // touch equivalent of mouseMove
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart.current) return;
    const t = e.touches[0];
    setOffset({
      x: clamp(t.clientX - dragStart.current.x, -maxPan, maxPan),
      y: clamp(t.clientY - dragStart.current.y, -maxPan, maxPan),
    });
  };

  // touch equivalent of mouseUp
  const handleTouchEnd = () => setIsDragging(false);

  // previous slide (wraps around)
  const goLeft = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  // next slide (wraps around)
  const goRight = () => setCurrentIndex((i) => (i + 1) % images.length);

  // use measured diameter if available, otherwise fallback CSS size
  const size = diameter || "min(70vw, 350px)";

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        {/* slide title */}
        <div className={styles.title}>{images[currentIndex].title}</div>

        {/* wrapperRef measures this div's width to set the circle diameter */}
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
              draggable={false} // prevents browser's native image drag
              className={styles.image}
              style={{
                // offset shifts the image as user drags
                top: `calc(-30% + ${offset.y}px)`,
                left: `calc(-30% + ${offset.x}px)`,
                // smooth snap back when not dragging, instant while dragging
                transition: isDragging ? "none" : "top 0.05s, left 0.05s",
              }}
            />
          </div>
        </div>

        {/* dot indicators — one per image */}
        <div className={styles.dots}>
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              // active dot gets wider and purple, inactive stays grey
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : styles.dotInactive}`}
            />
          ))}
        </div>

        {/* prev / counter / next */}
        <div className={styles.controls}>
          <button onClick={goLeft} className={styles.btn}>←</button>

          {/* padStart formats "1" as "01" */}
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