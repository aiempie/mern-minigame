import "./App.css";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      <header></header>
      <Login isRegister={false} />
    </div>
  );
}

export default App;
