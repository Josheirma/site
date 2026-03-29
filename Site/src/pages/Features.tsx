import styles from '../styles/features.module.css';


export default function Features() {
  return (

<div className={styles.wrapper}>
<div className={styles.container}>
  <div className ={styles.title}>Features of Workmate</div>
  <div className={styles.heading}>Workmate makes managing your team's schedule simple. Here's everything you can do:</div>

  <div className={styles.content}>
    <div className = {styles.firstHeading} >Scheduling</div>
    <ul>
      <li>View each employee's shifts at a glance on a visual timeline — including multiple shifts in a single day.</li>
      <li>Drag and drop shifts to move them to a different day instantly.</li>
      <li>Spot scheduling conflicts automatically, with clear visual warnings before they become a problem.</li>
      <li>Set up yearly rules to prevent the same conflicts from happening again.</li>
    </ul>

    <div className = {styles.heading}>Managing Employees</div>
    <ul>
      <li>Add, copy, or remove employees easily — with or without carrying their shifts over.</li>
      <li>Sort your employee list alphabetically to find anyone fast.</li>
      <li>Rearrange the order of employees on the schedule by dragging them into place.</li>
    </ul>

    <div className = {styles.heading}>Navigating Your Schedule</div>
    <ul>
      <li>Jump to any date using a built-in visual calendar.</li>
      <li>Store and manage multiple yearly schedules — and delete the ones you no longer need.</li>
    </ul>

    <div className = {styles.heading}>Printing & Saving</div>
    <ul>
      <li>Print a full schedule for any single day or select multiple days to print at once.</li>
      <li>Your data saves automatically and stays consistent across all your screens.</li>
    </ul>
  </div>
</div>
</div>
  )}