import React, {useState} from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Icerik from './components/Icerik';

const tema = {
  dark: {
    color: "white",
    backgroundColor: "green",
  },
  light: {
    color: "green",
    backgroundColor: "white",
  },
};

export const TemaVerisi= React.createContext();

//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.

//! Bir componentin return () kismi ise JSX kodlari icerir.

//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b
//! herhangi bir element kullanilabilir.

//? App componentinin function declaration ile tanimlanmasi
function App() {
  const [deger, setDeger]=useState(tema.dark);
  function degistir(){
    if(tema.dark===deger){
      setDeger(tema.light)
    }
    else{
      setDeger(tema.dark)
    }
  }

  return (
    //* JSX
    //? stillendirme yapilmayacaksa container icin <> kullanilabilir
    <>
      <Header />
      <button onClick={degistir}>
        {tema.dark===deger? "Açık" : "Koyu"}
      </button>
      <TemaVerisi.Provider value={deger}>
        <Icerik/>
      </TemaVerisi.Provider>
      <Content />
      <Footer />

    </>
  );
}

export default App;
