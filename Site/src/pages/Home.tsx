import { useEffect } from 'react';
import PanAndDrag from '../components/PanAndDrag';
import styles from '../styles/Home.module.css';

// list of 4 feature cards shown in the grid
const features = [
  { title: "Calendar", text: "Pinpoint your starting date on a built-in graphical calendar — no manual entry required." },
  { title: "Files", text: "Organize your work across multiple named databases. Create, save, rename, and delete scheduling files with ease." },
  { title: "Rules", text: "Define conflict rules that automatically alert you when employees are double-booked or overlap during the same hours." },
  { title: "Print", text: "Generate clean, professional printouts of your full team schedule across any date range — or focus on individual employees between selected days." },
];

// 2 items shown on the left side (or top on mobile)
const leftCol = [
  { title: "See your team at a glance", text: "A live employee graph sits alongside a scrollable employee list — so you always know who's working and when." },
  { title: "Scheduling made visual", text: "Hover any event bar to reveal exact times down to the quarter hour. Bars align vertically so overlapping shifts are instantly obvious." },
];

// 2 items shown on the right side (or bottom on mobile)
const rightCol = [
  { title: "Built for speed", text: "Copy any shift or full day in one action. Drag and drop employees into place. Sort your entire team alphabetically in one click." },
  { title: "Flexible by design", text: "Each employee supports multiple shifts. The employee list stays fixed while the schedule grid scrolls beneath it." },
];

export default function Home() {

  // this runs when the page loads
  // it listens for window resizes and logs the width + font size
  // useful for debugging responsive design
  useEffect(() => {
    let lastWidth = window.innerWidth; // remember the starting width

    const log = () => {
      const width = window.innerWidth; // check current width
      if (width === lastWidth) return;  // only height changed? ignore it
      lastWidth = width;                // update our memory of the width
      console.log(`width: ${width}px  |  font-size: ${getComputedStyle(document.documentElement).fontSize}`);
    };

    window.addEventListener('resize', log); // start listening for resizes
    return () => window.removeEventListener('resize', log); // stop listening when page unmounts

  }, []); // [] = only set up the listener once

  return (
    <div className={styles.homeWrapper}>

      {/* outer container that centers everything */}
      <div className={styles.container}>

        {/* big title at the top */}
        <div className={styles.title}>
          <h1 className={styles.titleWord}>Super Easy</h1>
          <h1 className={styles.titleWord}>Employee Scheduler</h1>
        </div>

        <div className={styles.content}>

          {/* 4 feature cards in a grid — 4 columns on desktop, 2 on mobile */}
          <div className={styles.featureGrid}>
            {features.map(({ title, text }) => (
              <div key={title} className={styles.featureItem}>
                <h4 className={styles.featureHeading}>{title}</h4>
                <p className={styles.featurePara}>{text}</p>
              </div>
            ))}
          </div>

          {/* horizontal line between sections */}
          <div className={styles.divider} />

          {/* left column — shows above the image on mobile */}
          <div className={styles.sideCol}>
            {leftCol.map(({ title, text }) => (
              <div key={title} className={styles.sideItem}>
                <h4 className={styles.featureHeading}>{title}</h4>
                <p className={styles.featurePara}>{text}</p>
              </div>
            ))}
          </div>

          {/* draggable circle image in the middle */}
          <div className={styles.panDragWrapper}>
            <PanAndDrag />
          </div>

          {/* right column — shows below the image on mobile */}
          <div className={styles.sideCol}>
            {rightCol.map(({ title, text }) => (
              <div key={title} className={styles.sideItem}>
                <h4 className={styles.featureHeading}>{title}</h4>
                <p className={styles.featurePara}>{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}