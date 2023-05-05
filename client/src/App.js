import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <header>
        <Navbar />
      </header>
      <AppRouter />
    </div>
  );
}

export default App;
