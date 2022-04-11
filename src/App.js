import "./App.css";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import RouterComonent from "./Components/Router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      <div style={{display: "flex"}}>
        <Sidebar className="sidebar" />
        <RouterComonent className="route" />
      </div>
    </div>
  );
}

export default App;
