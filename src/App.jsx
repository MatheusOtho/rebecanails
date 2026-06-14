import './App.css'
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Galeria from "./components/galeria";
import Servicos from "./components/servicos";
import Clientes from "./components/clientes";
import Contato from "./components/contato";

function App() {

  return (
    <>
      <Header />
        <Hero />
        <Servicos />
        <Galeria />
        <Clientes />
        <Contato />
      <Footer />
    </>
  )
}

export default App
