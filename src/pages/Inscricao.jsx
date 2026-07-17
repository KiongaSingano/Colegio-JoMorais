import { ArrowLeft, User, Phone, GraduationCap, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";


export default function Inscricao(){


return (

<section
className="
min-h-screen
bg-gray-100
py-8
px-4
"
>


<div
className="
max-w-5xl
mx-auto
"
>


{/* Voltar */}

<Link

to="/"

className="
inline-flex
items-center
gap-2
text-purple-900
font-semibold
hover:text-red-600
transition
mb-8
"

>

<ArrowLeft size={22}/>

Voltar à Página Inicial

</Link>






{/* Cabeçalho */}

<div
className="
bg-white
rounded-3xl
shadow-xl
p-6
text-center
mb-8
"
>


<img

src={logo}

alt="CEIPP Jerma"

className="
w-24
h-24
object-contain
mx-auto
mb-4
"

/>


<h1
className="
text-3xl
md:text-4xl
font-extrabold
text-purple-900
"
>

Inscrição Online

</h1>


<p
className="
mt-3
text-gray-600
"
>

Complexo Escolar e Instituto Politécnico Privado Jerma

</p>


</div>








<form
className="
space-y-8
"
>






{/* Dados pessoais */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>


<div
className="
flex
items-center
gap-3
mb-6
"
>

<User
className="text-red-600"
/>


<h2
className="
text-2xl
font-bold
text-purple-900
"
>

Dados Pessoais

</h2>


</div>





<div
className="
grid
md:grid-cols-2
gap-5
"
>


<input

type="text"

placeholder="Nome completo"

className="
input
"

/>


<input

type="date"

className="
input
"

/>


<input

type="text"

placeholder="Bilhete de Identidade"

className="
input
"

/>


<input

type="text"

placeholder="Naturalidade"

className="
input
"

/>


</div>


</div>










{/* Contactos */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>


<div
className="
flex
items-center
gap-3
mb-6
"
>

<Phone
className="text-red-600"
/>


<h2
className="
text-2xl
font-bold
text-purple-900
"
>

Contactos

</h2>


</div>




<div
className="
grid
md:grid-cols-2
gap-5
"
>


<input

type="tel"

placeholder="Número de telefone"

className="
input
"

/>



<input

type="email"

placeholder="Email"

className="
input
"

/>



<input

type="text"

placeholder="Morada"

className="
input
"

/>



<input

type="text"

placeholder="Nome do encarregado"

className="
input
"

/>


</div>


</div>









{/* Dados académicos */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>


<div
className="
flex
items-center
gap-3
mb-6
"
>

<GraduationCap
className="text-red-600"
/>


<h2
className="
text-2xl
font-bold
text-purple-900
"
>

Dados Académicos

</h2>


</div>





<select

className="
input
"

>

<option>

Selecione o curso

</option>


<option>

Informática

</option>


<option>

Electricidade

</option>


<option>

Ciências Económicas e Jurídicas

</option>


<option>

Gestão de Recursos Humanos

</option>


</select>



</div>









{/* Documentos */}

<div
className="
bg-white
rounded-3xl
shadow-lg
p-6
"
>


<div
className="
flex
items-center
gap-3
mb-6
"
>

<FileText
className="text-red-600"
/>


<h2
className="
text-2xl
font-bold
text-purple-900
"
>

Documentos

</h2>


</div>





{/* Foto tipo passe */}

<div className="mb-5">


<label
className="
block
font-semibold
text-gray-700
mb-2
"
>

Foto tipo passe

</label>


<input

type="file"

accept="image/*"

className="
w-full
border
rounded-xl
p-3
"

>


</input>


<p className="
text-sm
text-gray-500
mt-2
">

Formato permitido: JPG ou PNG

</p>


</div>







{/* Bilhete de Identidade */}

<div className="mb-5">


<label

className="
block
font-semibold
text-gray-700
mb-2
"

>

Bilhete de Identidade

</label>



<input

type="file"

accept="application/pdf"

className="
w-full
border
rounded-xl
p-3
"

>


</input>


<p

className="
text-sm
text-gray-500
mt-2
"

>

Enviar somente ficheiro PDF

</p>



</div>








{/* Certificado */}

<div>


<label

className="
block
font-semibold
text-gray-700
mb-2
"

>

Certificado ou Declaração

</label>




<input

type="file"

accept="application/pdf"

className="
w-full
border
rounded-xl
p-3
"

>


</input>



<p

className="
text-sm
text-gray-500
mt-2
"

>

Enviar certificado ou declaração em PDF

</p>



</div>




</div>

{/* Botão */}

<button

type="submit"

className="
w-full
bg-red-600
hover:bg-red-700
text-white
py-4
rounded-2xl
font-bold
text-lg
shadow-lg
transition
"

>

Enviar Inscrição

</button>





</form>


</div>


</section>

)

}