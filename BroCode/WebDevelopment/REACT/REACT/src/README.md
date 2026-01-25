# Lesson & Project Picker — Instructions

This folder contains all lesson and project files for the BroCode React course. The project uses a switching system that allows me to run any lesson or project by changing one file.

## How the Picker Works

Inside `lessonSelector.js`:

export const currentLesson = 1;     // Choose a lesson (1–20)
export const currentProject = "";   // Choose a project by name

Only one should be active at a time.

## Running a Lesson

Example:

export const currentLesson = 7;
export const currentProject = "";

This loads:

src/Basics/7.updateState/App.jsx

## Running a Project

Example:

export const currentLesson = 0;
export const currentProject = "toDoListApp";

This loads:

src/Projects/toDoListApp/App.jsx

## Folder Structure

src/
  Basics/
    1.reactTutorialForBeginners/
    2.cardComponents/
    ...
    20.stopwatchApp/

  Projects/
    colorPickerApp/
    toDoListApp/
    digitalClockApp/
    stopwatchApp/

  App.jsx
  lessonSelector.js
  main.jsx

## Running the App

Start the development server:

npm run dev

The browser will automatically load whichever lesson or project is selected.

## Why This System Exists

- Keeps all lessons separate  
- Keeps all projects separate  
- No renaming files  
- No moving components  
- Easy to scale  
- Perfect for learning React step-by-step
