import styles from '../styles/docs.module.css';

export default function Docs() {
  return (
    <>
      <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>Documentation</div>
      

      <div className={styles.content}>

        {/* ── Table of Contents ── */}
        <h2>Overview</h2>
        <ul>
          <li><a href="#scheduler">Employee Graph & Scheduler</a></li>
          <li><a href="#rules">Rules</a></li>
          <li><a href="#files">Files</a></li>
          <li><a href="#printing">Printing</a></li>
          <li><a href="#hours">Hours Worked</a></li>
          <li><a href="#calendar">Calendar</a></li>
          <li><a href="#save">Save Database</a></li>
        </ul>

        {/* ── Scheduler ── */}
        <h2 id="scheduler">Employee Graph & Scheduler</h2>
        <p>
          The scheduler gives you a visual overview of when your employees are working. 
          Each employee's shifts appear as blue bars on a timeline, making it easy to 
          see who is working and when — including overlaps between team members.
        </p>

        <ul>
          <li><strong>Creating a record:</strong> Enter a unique employee name. Shifts can be added later.</li>
          <li><strong>Adding shifts:</strong> Multiple shifts are allowed as long as they don’t overlap.</li>
          <li><strong>Reading the timeline:</strong> Hover to see time positions and shift details.</li>
          <li><strong>Navigation:</strong> Scroll horizontally for time and vertically for employees.</li>
          <li><strong>Managing records:</strong> Reorder, delete shifts, or remove employees entirely.</li>
          <li><strong>Conflict alerts:</strong> Rule violations appear in bold red on the scheduler.</li>
          <li><strong>Date navigation:</strong> Use the ← → buttons at the top to step through dates one day at a time.</li>
        </ul>

        {/* ── Rules ── */}
        <h2 id="rules">Rules</h2>
        <p>
          Rules allow you to prevent specific employees from being scheduled at the same time.
        </p>

        <ul>
          <li>Select two employees to create a conflict rule.</li>
          <li>Click an employee again to deselect them.</li>
          <li>Press <strong>Make Rule</strong> to save the rule.</li>
          <li>Conflicts appear in the rules panel.</li>
          <li>Drag and drop rules to reorder them.</li>
          <li>The <strong>Order</strong> button moves conflicts to the top.</li>
        </ul>

        {/* ── Files ── */}
        <h2 id="files">Files</h2>
        <p>
          The Files screen is where you manage your schedule databases.
        </p>

        <ul>
          <li>Each database represents one full year.</li>
          <li>Create, load, or delete databases.</li>
          <li>The active database name is always shown at the top.</li>
          <li>If none is loaded, it will display <strong>None</strong>.</li>
        </ul>

        {/* ── Printing ── */}
        <h2 id="printing">Printing</h2>
        <p>
          Print schedules for any selected date range.
        </p>

        <ul>
          <li>Select a start and end date.</li>
          <li>Print one employee or all employees.</li>
          <li>Choose combined or separate pages for distribution.</li>
        </ul>

        {/* ── Hours ── */}
        <h2 id="hours">Hours Worked</h2>
        <p>
          View total hours worked by each employee within a selected range.
        </p>

        <ul>
          <li>Each employee can have a custom date range.</li>
          <li>Use <strong>Change All Dates</strong> to apply one range to everyone.</li>
          <li><strong>Clear</strong> resets ranges to today through one week ahead.</li>
        </ul>

        {/* ── Calendar ── */}
        <h2 id="calendar">Calendar</h2>
        <p>
          Jump instantly to any date using a visual calendar.
        </p>

        <ul>
          <li>Select a date to update the scheduler immediately.</li>
          <li>No need to scroll manually through the timeline.</li>
        </ul>

        {/* ── Save ── */}
        <h2 id="save">Save Database</h2>
        <p>
          Save your work from anywhere in the app.
        </p>

        <ul>
          <li>No need to return to the Files page.</li>
          <li>Reduces risk of losing unsaved changes.</li>
        </ul>

      </div>
      </div>
      </div>
    </>
  );
}