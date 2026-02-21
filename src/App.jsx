// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <BrowserRouter>
      <MainNavBar />
      {/* other routes/components */}
    </BrowserRouter>
  );
}

export default App;