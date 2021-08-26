import './App.css';
import Canvas from "./components/Canvas";
import ToolBar from "./UI/ToolBar";
import Menu from "./UI/Menu";
import {Switch, Route, Redirect} from "react-router-dom";
import Modal from "./UI/Modal";

function App() {
  return (
    <div className="min-w-screen min-h-screen flex justify-content-center align-items-center">
      <Switch>
        <Route path='/:id'>
          <Menu />
          <Canvas />
          <ToolBar />
          <Modal />
        </Route>
        <Redirect to={`f${(+new Date).toString(16)}`} />
      </Switch>
    </div>
  );
}

export default App;
