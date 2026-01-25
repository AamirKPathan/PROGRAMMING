import { currentLesson, currentProject } from "./lessonSelector.js";

// Dynamically import the selected lesson or project
let SelectedComponent = () => <h1>No lesson or project selected</h1>;

try {
  if (currentLesson > 0) {
    SelectedComponent = require(`./Basics/${currentLesson}.reactTutorialForBeginners/App.jsx`).default;
  } else if (currentProject) {
    SelectedComponent = require(`./Projects/${currentProject}/App.jsx`).default;
  }
} catch (error) {
  console.error("Component load error:", error);
  SelectedComponent = () => <h1>Component not found</h1>;
}

function App() {
  return (
    <div>
      <SelectedComponent />
    </div>
  );
}

export default App;
