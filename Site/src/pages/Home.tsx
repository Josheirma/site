import React from 'react';
import PanAndDrag from '../components/PanAndDrag';
/*
Both server and client need their own npm install. Run:
bash# install server dependencies
cd server
npm install

# install client dependencies
cd ../client
npm install

# go back to root and run
cd ..
npm run dev
*/
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

const headingStyle = { margin: "0 0 4px", fontSize: "13px", fontWeight: "600", color: "white" };
const paraStyle   = { margin: 0, fontSize: "12px", lineHeight: 1.7, color: "#aaa" };
const colStyle    = { width: "180px", display: "flex", flexDirection: "column", gap: "24px" };

export default function Home() {
  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", overflow: "hidden"  }}>

      {/* Title */}
      <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: ".0rem", marginBottom: ".8rem" }}>Super Easy Employee Scheduler</div>

      {/* Feature grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "900px", width: "100%" }}>
     {features.map(({ title, text }) => (
  <div key={title} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <h4 style={headingStyle}>{title}</h4>
    <p style={paraStyle}>{text}</p>
  </div>
))}
      </div>

      {/* Divider */}
      <div style={{ width: "100%", maxWidth: "900px", borderTop: "1px solid #e0e0e0" }} />

      {/* Image + side columns */}
      <div style={{ display: "flex", alignItems: "center", gap: "80px" }}>

        <div style={colStyle}>
          {leftCol.map(({ title, text }) => (
            <div key={title}>
              <h4 style={headingStyle}>{title}</h4>
              <p style={paraStyle}>{text}</p>
            </div>
          ))}
        </div>

        <div style={{ flexShrink: 0 }}>
          <PanAndDrag />
        </div>

        <div style={colStyle}>
          {rightCol.map(({ title, text }) => (
            <div key={title}>
              <h4 style={headingStyle}>{title}</h4>
              <p style={paraStyle}>{text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}