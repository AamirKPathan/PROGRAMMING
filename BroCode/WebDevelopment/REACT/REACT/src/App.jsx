import { useState, useEffect } from "react";
import { currentLesson, currentProject, lessonFolders } from "./lessonSelector";

export default function App() {
  const [Component, setComponent] = useState(() => () => <h1>Component not found</h1>);

  useEffect(() => {
    async function load() {
      try {
        if (currentLesson > 0) {
          const folder = lessonFolders[currentLesson];
          console.log("Loading lesson folder:", folder);

          const module = await import(`./Basics/${folder}/App.jsx`);
          setComponent(() => module.default);
        } else if (currentProject) {
          const module = await import(`./Projects/${currentProject}/App.jsx`);
          setComponent(() => module.default);
        }
      } catch (err) {
        console.error("Load error:", err);
        setComponent(() => () => <h1>Component not found</h1>);
      }
    }

    load();
  }, []);

  return <Component />;
}
