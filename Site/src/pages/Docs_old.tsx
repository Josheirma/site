import styles from '../styles/shared.module.css';

export default function Docs(){
   
    return(
        <>
        <div className={styles.container}>
        <div className= {styles.heading}>Contacts</div>
        </div>
        <div className = {styles.content}>
            body
        </div>
        </>
    )
}





// DOCS:  CLAUDE:  Building production-level workmate full-stack application

// Employee Graph and Scheduler 

// To make a record: enter an employee's name with or without a shift. You can add shifts later with the shift button. Usernames must be original. When the user is setup with shifts they will be shown on the grid with a blue event bar. Different shifts are allowed, but they must not be overlapping. To remove an employees event-bars, press the delete button. You may alphabetize lists, and you can drag and drop them. You may delete a shift or the entire item completely. The graphical event bars make it easier to see when employees are working and working together. *You can hover over the timeline to see the time of that position. *Hovering over the event bar shows the shift start and end time, and which employee it represents HOVERING IS HOW YOU DETERMINE WHOM THE EVENT_BARS REPRESENT EFFICIENTLY. Scrolling allows the user to see different sections of the grid, use scrollbars to scroll side ways, and up-and-down. When making Rules (see rules section), the employee scheduler will display a conflicting employee message in bold red. Files This screen allows you to create, delete, and load database files. Each database file is one year from the starting date. THE TOP DISPLAYS A MESSAGE SHOWING THE NAME OF THE CURRENT DATABASE OR NONE IF ONE HAS NOT BEEN CREATED/LOADED YET.

// Rules

// When making Rules (see rules section), the employee scheduler will display a conflicting employee message in bold red. Files This screen allows you to create, delete, and load database files. Each database file is one year from the starting date. THE TOP DISPLAYS A MESSAGE SHOWING THE NAME OF THE CURRENT DATABASE OR NONE IF ONE HAS NOT BEEN CREATED/LOADED YET. Rules To make rules select any of the active members  Rules allow for the prevention of two users to not be scheduled during the same shift.  To make rules select any two active members.  To remove a member re-click on it.  When two rules are selected press the, "make rules" button and their conflict will be displayed on the right in the rules box.  The order button presents all the conflicting rules first.  TO STAY ORGANIZED, THE RULES AND CONFLICTING RULES CAN BE ORDERED WITH DRAG-AND-DROP.  THE CONFLICTING RULES CAN BE ORDERED SO THAT CONFLICTING RULES THAT DO CONFLICT WILL BE DISPALYED ON TOP.

// Printing 

// Print allows you to print from two calendar's start and end range. You can select a single employee, or all employees together or on separate sheets of paper. Separated printing can be used to handout employee scheduling.

//Hours

// Hours Worked displays the total hours in the selected range, worked by each worker.  Values can be cleared, that is set all starts to today and ends one week later.  Each employee can also have their own selected range.  Finally, all dates may be assigned to the starting range, with "Change All Dates" 

//Files

//Files This screen allows you to create, delete, and load database files. Each database file is one year from the starting date. THE TOP DISPLAYS A MESSAGE SHOWING THE NAME OF THE CURRENT DATABASE OR NONE IF ONE HAS NOT BEEN CREATED/LOADED YET.

// Calendar

// The calendar allows you to jump to any date, without manually selecting in the Employee Graph and Scheduler screen.  The calendar is graphical for easy selecting.

//Save Database

//Save Database allows all changes to be saved on any page, instead of having to go to the files page and saving there. This allows for more efficient saving, and less chance of losing data.


///////////////////////////////////////////DOCS ///////////////////////////////////////////

// Employee Graph & Scheduler
// The scheduler gives you a visual overview of when your employees are working. Each employee's shifts appear as blue bars on a timeline, making it easy to see who is working and when — including when shifts overlap between team members.

// Creating a record: Enter an employee's name to get started. Shifts are optional at this stage and can be added later using the shift button. Each employee name must be unique.
// Adding shifts: Multiple shifts per employee are supported, as long as they don't overlap with each other.
// Reading the timeline: Hover over any point on the timeline to see the time at that position. Hover over a shift bar to see the employee's name along with their shift start and end times.
// Navigating the grid: Use the scrollbars to move left and right through the timeline, or up and down through your employee list.
// Managing records: You can alphabetize the list, drag and drop employees to reorder them, delete individual shifts, or remove an employee's record entirely.
// Conflict alerts: If a scheduling conflict is detected based on your rules, a warning will appear in bold red directly on the scheduler.


// Rules
// Rules let you flag pairs of employees who should never be scheduled at the same time.

// Creating a rule: Select any two active employees from the list. Click an employee again to deselect them. Once two are selected, click Make Rule to save the conflict pair.
// Viewing conflicts: All active rules and any detected conflicts are displayed in the rules panel on the right.
// Staying organized: Both the rules list and the conflicts list support drag and drop reordering. You can move conflicting rules to the top so the most important ones are always visible first. The Order button will also automatically sort conflicts to the top.


// Files
// The Files screen is where you manage your schedule databases.

// Each database file covers one full year from its starting date.
// You can create, load, or delete database files from this screen.
// The name of the currently loaded database is always shown at the top of the screen. If no database has been created or loaded yet, it will display None.


// Printing
// The Print screen lets you generate schedule printouts for any date range.

// Select a start and end date using the two calendars to define your print range.
// Choose to print a single employee or all employees together on one sheet, or on separate sheets — useful for distributing individual schedules to each team member.


// Hours Worked
// The Hours screen shows the total hours worked by each employee within a selected date range.

// Each employee can have their own custom date range, or you can apply a shared range to everyone at once using Change All Dates.
// Use the Clear button to reset all date ranges back to the default: starting today, ending one week later.


// Calendar
// The Calendar gives you a quick, visual way to jump to any date — without having to scroll through the scheduler manually. Simply click a date on the calendar and the scheduler will update instantly.

// Save Database
// The Save Database button lets you save your work from any screen at any time, so you don't have to navigate back to the Files page to save. This reduces the risk of losing unsaved changes as you work.