import "./App.css";
import { Inputform } from "./components/projects/form";
import { Projects } from "./components/projects/projects";
import AllRoutes from "./routers/allRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Projects/>
      <Inputform/> */}
    </div>
  );
}

export default App;
