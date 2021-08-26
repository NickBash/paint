import './App.css';
import Canvas from "./components/Canvas";
import ToolBar from "./UI/ToolBar";
import Menu from "./UI/Menu";

function App() {
  return (
    <div className="min-w-screen min-h-screen flex justify-content-center align-items-center">
      <Menu />
      <Canvas />
      <ToolBar />
    </div>
  );
}

export default App;
