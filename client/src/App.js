import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./pages/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" data-bs-theme="dark">
        <header>
          <Navbar />
        </header>
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
