import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Footer from "~/pages/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "~/pages/navbar/Navbar";

const theme = createTheme({
  palette: {
    mode: "dark", // đặt chế độ dark mode
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header></header>
        <main className="main">
          <Navbar />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
