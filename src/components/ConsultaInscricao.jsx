import { useState } from "react";
import {
  X,
  Search,
  Download,
  CheckCircle,
  CreditCard,
  FileText,
  Loader2
} from "lucide-react";


export default function ConsultaInscricao({ fechar }) {


const [tipoConsulta,setTipoConsulta] = useState("bi");

const [valor,setValor] = useState("");

const [resultado,setResultado] = useState(null);

const [carregando,setCarregando] = useState(false);





function fecharConsulta(){

setResultado(null);

setValor("");

fechar();

}







async function consultarInscricao(){


if(!valor.trim()) return;



setCarregando(true);



setTimeout(()=>{


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



setCarregando(false);


},1200);



}







return(



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
bg-black/40
backdrop-blur-sm
"

></div>









{/* Modal */}

<div

className="
relative
z-10
w-full
max-w-lg
bg-white
rounded-3xl
shadow-2xl
p-5
sm:p-8
animate-[scale_.25s_ease]
"

>







<button

onClick={fecharConsulta}

className="
absolute
top-4
right-4
w-10
h-10
rounded-full
bg-gray-100
flex
items-center
justify-center
hover:bg-red-100
hover:text-red-600
transition
"

>

<X size={22}/>

</button>








{

!resultado || resultado.erro ?


(


<>



<div className="
text-center
"
>


<div

className="
mx-auto
w-16
h-16
rounded-full
bg-green-100
flex
items-center
justify-center
"

>


<Search

size={30}

className="text-green-700"

/>


</div>



<h2

className="
mt-4
text-2xl
sm:text-3xl
font-extrabold
text-green-800
"

>

Consultar Inscrição

</h2>



<p

className="
mt-2
text-gray-600
text-sm
"

>

Consulte a sua inscrição através do
Bilhete de Identidade ou Código.

</p>


</div>









{/* Tipo */}

<div className="mt-7">


<label

className="
font-semibold
text-gray-700
"

>

Pesquisar por

</label>



<div

className="
relative
mt-2
"

>

<select


value={tipoConsulta}

onChange={(e)=>{

setTipoConsulta(e.target.value);

setValor("");

}}


className="
w-full
appearance-none
rounded-xl
border
border-gray-200
px-4
py-3
outline-none
focus:ring-2
focus:ring-green-600
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



</div>









{/* Campo */}

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

"Código da inscrição"


}


</label>






<div

className="
relative
mt-2
"

>


{

tipoConsulta==="bi"

?

<CreditCard

className="
absolute
left-4
top-3.5
text-gray-400
"

/>

:

<FileText

className="
absolute
left-4
top-3.5
text-gray-400
"

/>

}





<input


value={valor}


onChange={(e)=>setValor(e.target.value)}


placeholder={

tipoConsulta==="bi"

?

"Digite o número do BI"

:

"INS-2026-0001"

}


className="
w-full
rounded-xl
border
border-gray-200
py-3
pl-12
pr-4
outline-none
focus:ring-2
focus:ring-green-600
"

/>


</div>


</div>









<button


onClick={consultarInscricao}


disabled={carregando}


className="
mt-7
w-full
bg-green-700
hover:bg-green-800
disabled:opacity-70
text-white
py-3.5
rounded-xl
font-bold
flex
items-center
justify-center
gap-2
transition
shadow-lg
"

>


{

carregando

?

<>

<Loader2 className="animate-spin"/>

A consultar...

</>


:

<>

<Search size={20}/>

Consultar

</>

}



</button>








{

resultado?.erro &&


<div

className="
mt-5
bg-red-50
border
border-red-200
text-red-600
rounded-xl
p-4
text-center
font-semibold
"

>

Nenhuma inscrição encontrada.

</div>


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

size={60}

className="
mx-auto
text-green-600
"

/>


<h2

className="
mt-3
text-2xl
font-extrabold
text-green-800
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
text-sm
sm:text-base
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

<strong>Ano:</strong> {resultado.ano}

</p>


<p>

<strong>Data:</strong> {resultado.data}

</p>



<div

className="
flex
items-center
"

>

<strong>Estado:</strong>


<span

className="
ml-2
px-3
py-1
rounded-full
bg-green-100
text-green-700
font-bold
text-sm
"

>

{resultado.estado}

</span>


</div>



</div>








<div

className="
grid
grid-cols-1
sm:grid-cols-2
gap-3
mt-6
"

>



<button

className="
bg-yellow-500
hover:bg-yellow-600
text-white
py-3
rounded-xl
font-bold
flex
items-center
justify-center
gap-2
"

>

<Download size={18}/>

Baixar Ficha

</button>







<button

onClick={fecharConsulta}

className="
border-2
border-green-700
text-green-700
py-3
rounded-xl
font-bold
hover:bg-green-50
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