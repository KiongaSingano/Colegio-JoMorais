import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { useState } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ConsultaInscricao from "./components/ConsultaInscricao";

import Inscricao from "./pages/Inscricao";





function PaginaInicial(){


const [consultaAberta,setConsultaAberta] = useState(false);



return(

<>


<Navbar/>




<Hero

abrirConsulta={()=>
setConsultaAberta(true)
}

/>





<Courses/>

<About/>

<Contact/>

<Footer/>






{

consultaAberta &&


<ConsultaInscricao

fechar={()=>
setConsultaAberta(false)
}

/>


}




</>


)


}









export default function App(){


return(

<BrowserRouter>


<Routes>



<Route

path="/"

element={

<PaginaInicial/>

}

/>






<Route

path="/inscricao"

element={

<Inscricao/>

}

/>




</Routes>


</BrowserRouter>


)


}