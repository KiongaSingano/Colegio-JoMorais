import { useState } from "react";
import { X, Search, Download, CheckCircle } from "lucide-react";


export default function ConsultaInscricao({ fechar }) {


const [tipoConsulta,setTipoConsulta] = useState("bi");

const [valor,setValor] = useState("");

const [resultado,setResultado] = useState(null);





function fecharConsulta(){

setResultado(null);

setValor("");

fechar();

}








function consultarInscricao(){


if(valor.trim()===""){

return;

}




/*
 Futuramente:

 API
 |
 Backend
 |
 Neon PostgreSQL

*/


// Simulação temporária

if(

(tipoConsulta==="bi" && valor==="123456789")

||

(tipoConsulta==="codigo" && valor==="INS-2026-0001")

){



setResultado({

nome:"João Manuel Silva",

curso:"Informática",

codigo:"INS-2026-0001",

estado:"Confirmada",

ano:"2026/2027",

data:"17/07/2026"

});


}

else{


setResultado({

erro:true

});


}



}







return (


<div

className="
fixed
inset-0
z-50
flex
items-center
justify-center
px-4
"

>


{/* Fundo */}

<div

onClick={fecharConsulta}

className="
absolute
inset-0
bg-black/50
backdrop-blur-md
"

>

</div>









{/* Modal */}

<div

className="
relative
z-10
bg-white
w-full
max-w-md
rounded-3xl
shadow-2xl
p-6
animate-[fadeIn_.3s_ease]
"

>





{/* fechar */}

<button

onClick={fecharConsulta}

className="
absolute
right-5
top-5
text-gray-500
hover:text-red-600
transition
"

>

<X size={26}/>

</button>








{

!resultado || resultado.erro ?



(



<>


<h2

className="
text-2xl
font-extrabold
text-purple-900
text-center
"

>

Consultar Inscrição

</h2>



<p

className="
text-gray-600
text-center
mt-3
"

>

Consulte a sua inscrição usando o BI
ou código de inscrição.

</p>







<div className="mt-6">


<label

className="
font-semibold
text-gray-700
"

>

Método de consulta

</label>



<select

value={tipoConsulta}

onChange={(e)=>{

setTipoConsulta(e.target.value);

setValor("");

}}

className="
w-full
mt-2
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-purple-700
"

>


<option value="bi">

Bilhete de Identidade

</option>


<option value="codigo">

Código de Inscrição

</option>



</select>



</div>









<div className="mt-5">


<label

className="
font-semibold
text-gray-700
"

>


{

tipoConsulta==="bi"

?

"Número do BI"

:

"Código de Inscrição"


}


</label>




<input

type="text"

value={valor}

onChange={(e)=>setValor(e.target.value)}

placeholder={

tipoConsulta==="bi"

?

"Ex: 123456789"

:

"Ex: INS-2026-0001"

}

className="
w-full
mt-2
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-purple-700
"

/>



</div>








<button

onClick={consultarInscricao}

className="
w-full
mt-6
bg-purple-900
hover:bg-purple-950
text-white
py-3
rounded-xl
font-bold
flex
justify-center
items-center
gap-2
transition
"

>


<Search size={20}/>

Consultar


</button>







{

resultado?.erro &&


<p

className="
mt-4
text-center
text-red-600
font-semibold
"

>

Nenhuma inscrição encontrada.

</p>


}



</>



)

:




(



<>


<div

className="
text-center
"

>


<CheckCircle

size={50}

className="
mx-auto
text-green-600
"

/>


<h2

className="
text-2xl
font-extrabold
text-purple-900
mt-3
"

>

Inscrição Encontrada

</h2>


</div>








<div

className="
mt-6
bg-gray-50
rounded-2xl
p-5
space-y-3
text-gray-700
"

>


<p>

<strong>Nome:</strong> {resultado.nome}

</p>


<p>

<strong>Curso:</strong> {resultado.curso}

</p>


<p>

<strong>Código:</strong> {resultado.codigo}

</p>


<p>

<strong>Ano Lectivo:</strong> {resultado.ano}

</p>


<p>

<strong>Data:</strong> {resultado.data}

</p>



<p>

<strong>Estado:</strong>

<span

className="
ml-2
text-green-600
font-bold
"

>

{resultado.estado}

</span>


</p>


</div>









<div

className="
flex
gap-3
mt-6
"

>



<button

className="
flex-1
bg-red-600
hover:bg-red-700
text-white
py-3
rounded-xl
font-bold
flex
justify-center
items-center
gap-2
"

>


<Download size={18}/>

Ficha PDF


</button>






<button

onClick={fecharConsulta}

className="
flex-1
border-2
border-purple-900
text-purple-900
py-3
rounded-xl
font-bold
hover:bg-purple-50
"

>


Fechar


</button>




</div>



</>


)



}



</div>


</div>


)

}