import logo from "./logo.svg";
import "./App.css";
// import { Button } from "react-bootstrap";
import EnteryPage from "./page/EnteryPage";
import DefaultLayOut from "./layout/DefaultLayOut";
import DashboardPage from "./page/DashboardPage";
function App() {
  return (
    <div className="App">
      {/* <EnteryPage/> */}
      <DefaultLayOut>
        <DashboardPage />
      </DefaultLayOut>
    </div>
  );
}

export default App;
