import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home.component";
import Navigation from "./components/navigation/Navigation.componenet";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
