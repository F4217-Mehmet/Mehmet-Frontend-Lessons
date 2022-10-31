import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const style={
  color:{
    header:"#fff",
    body:"#eee",
    footer:"#8A1c4a"
  },
  margins:{},
  "max-width":"1000px",
  width: "95vw",
  responsive:"768px",
}

const App = () => {
  return (
    <>
      <ThemeProvider theme={style}>  
        <Header />
        <Card />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
