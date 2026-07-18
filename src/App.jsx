import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { useEffect, useState } from "react";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ConsultaInscricao from "./components/ConsultaInscricao";

import Inscricao from "./pages/Inscricao";







function ScrollToTop(){

const {pathname}=useLocation();


useEffect(()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});


},[pathname]);


return null;

}









function PaginaInicial(){



const [consultaAberta,setConsultaAberta]=useState(false);





return(

<>


<Navbar/>




<main>


<Hero

abrirConsulta={()=>setConsultaAberta(true)}

/>



<Courses/>

<About/>

<Contact/>


</main>





<Footer/>








{

consultaAberta &&


<ConsultaInscricao

fechar={()=>setConsultaAberta(false)}

/>


}



</>


)


}









function Layout(){



return(

<>


<ScrollToTop/>


<Routes>


<Route

path="/"

element={<PaginaInicial/>}

/>





<Route

path="/inscricao"

element={<Inscricao/>}

/>





</Routes>


</>


)

}









export default function App(){



return(


<BrowserRouter>


<Layout/>


</BrowserRouter>



)


}