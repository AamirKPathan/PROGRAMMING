# React Learning — BroCode Course Setup

This directory contains my complete React learning environment for following the BroCode React tutorial series. The structure keeps every lesson and project organized, modular, and easy to run.

## Folder Structure

REACT/
  REACT/                ← Vite React project
    src/
      Basics/           ← 20 BroCode lessons
      Projects/         ← Practice projects
      lessonSelector.js ← Controls which lesson/project runs
      App.jsx           ← Smart switcher
      main.jsx

## Purpose

This setup allows me to:
- Keep each lesson in its own folder
- Keep each project in its own folder
- Switch between lessons and projects instantly
- Avoid renaming or moving files
- Maintain a clean, scalable learning environment

## Running the Project

Inside the inner `REACT` folder:

npm run dev

The browser will open automatically.

## Selecting Lessons or Projects

Inside `src/lessonSelector.js`:

export const currentLesson = 1;     // 1–20 for Basics
export const currentProject = "";   // "colorPickerApp", etc.

Set one value and leave the other empty.

## Requirements

- Node.js
- npm
- Vite
- VS Code (recommended)
