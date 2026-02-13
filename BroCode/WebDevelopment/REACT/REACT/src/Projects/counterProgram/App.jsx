import Counter from "./Counter.jsx";
import "./index.css"; // This makes your CSS actually load

function App() {
  return (
    <div className="app-root">
      <div className="app-card">
        <h1 className="app-title">Neon Counter</h1>
        <p className="app-subtitle">Click, glow, repeat.</p>
        <Counter />
      </div>

      <p className="app-footer">Built with React & a bit of neon.</p>
    </div>
  );
}

export default App;
