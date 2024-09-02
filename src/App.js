// src/App.js
import TourList from "./TourList";
import { tours } from "./ToursData";
import "./App.css";

function App() {
  return (
    <main>
      <TourList tours={tours} />
    </main>
  );
}

export default App;