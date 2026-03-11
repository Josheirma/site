import React, {useEffect} from 'react';
import PanAndDrag from '../components/PanAndDrag';
import styles from '../styles/Home.module.css';


const features = [
  { title: "Calendar", text: "Pinpoint your starting date on a built-in graphical calendar — no manual entry required." },
  { title: "Files", text: "Organize your work across multiple named databases. Create, save, rename, and delete scheduling files with ease." },
  { title: "Rules", text: "Define conflict rules that automatically alert you when employees are double-booked or overlap during the same hours." },
  { title: "Print", text: "Generate clean, professional printouts of your full team schedule across any date range — or focus on individual employees between selected days." },
];

const leftCol = [
  { title: "See your team at a glance", text: "A live employee graph sits alongside a scrollable employee list — so you always know who's working and when." },
  { title: "Scheduling made visual", text: "Hover any event bar to reveal exact times down to the quarter hour. Bars align vertically so overlapping shifts are instantly obvious." },
];

const rightCol = [
  { title: "Built for speed", text: "Copy any shift or full day in one action. Drag and drop employees into place. Sort your entire team alphabetically in one click." },
  { title: "Flexible by design", text: "Each employee supports multiple shifts. The employee list stays fixed while the schedule grid scrolls beneath it." },
];






export default function Home() {

 useEffect(() => {
  let lastWidth = window.innerWidth;

  const log = () => {
    const width = window.innerWidth;
    if (width === lastWidth) return;
    lastWidth = width;
    console.log(`width: ${width}px  |  font-size: ${getComputedStyle(document.documentElement).fontSize}`);
  };

  window.addEventListener('resize', log);
  return () => window.removeEventListener('resize', log);
}, []);


  return (
    <div className={styles.homeWrapper}>

      {/* Title */}
      <div className={styles.title}>
        <span className={styles.titleWord}>Super Easy</span>
       
        <span className={styles.titleWord}>Employee Scheduler</span>
        
      </div>

      {/* Feature grid — 4 cols desktop, 2 cols mobile */}
      <div className={styles.featureGrid}>
        {features.map(({ title, text }) => (
          <div key={title} className={styles.featureItem}>
            <h4 className={styles.featureHeading}>{title}</h4>
            <p className={styles.featurePara}>{text}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Left col on top */}
      <div className={styles.sideCol}>
        {leftCol.map(({ title, text }) => (
          <div key={title} className={styles.sideItem}>
            <h4 className={styles.featureHeading}>{title}</h4>
            <p className={styles.featurePara}>{text}</p>
          </div>
        ))}
      </div>

      {/* Image in the middle */}
      <div className={styles.panDragWrapper}>
        <PanAndDrag />
      </div>

      {/* Right col on bottom */}
      <div className={styles.sideCol}>
        {rightCol.map(({ title, text }) => (
          <div key={title} className={styles.sideItem}>
            <h4 className={styles.featureHeading}>{title}</h4>
            <p className={styles.featurePara}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
