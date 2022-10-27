import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import { GlobalStyles } from "./components/styles/Global.styled";

const style= {
  colors: {
    header: "#fff",
    body: "#eee",
    footer: "#8A1CC4A"
  },
  margins: {},
  responsive: "768px",
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
    <GlobalStyles />
    <Header />
    <Card />
    </ThemeProvider>
  );
};

export default App;
