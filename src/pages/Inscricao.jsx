import {
ArrowLeft,
User,
Phone,
GraduationCap,
FileText,
Upload,
CheckCircle
} from "lucide-react";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";



export default function Inscricao(){


return(


<section

className="
min-h-screen
bg-gray-50
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
text-green-700
font-semibold
hover:text-yellow-600
transition
mb-6
"

>

<ArrowLeft size={20}/>

Voltar para página inicial

</Link>








{/* Cabeçalho */}

<div

className="
bg-white
rounded-3xl
shadow-xl
p-6
sm:p-8
text-center
mb-8
border
border-gray-100
"

>


<img

src={logo}

alt="JoMorais"

className="
w-24
h-24
mx-auto
object-contain
mb-4
"

/>




<h1

className="
text-3xl
sm:text-4xl
font-extrabold
text-green-700
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

CEIPP JoMorais

</p>


<p

className="
text-sm
text-gray-500
mt-1
"

>

Apostando na Educação Progressiva

</p>




<div

className="
w-20
h-1
bg-yellow-500
mx-auto
mt-5
rounded-full
"

></div>


</div>









<form

className="
space-y-7
"

>









{/* Função de estilo dos campos */}







{/* Dados pessoais */}

<div

className="
bg-white
rounded-3xl
shadow-lg
p-5
sm:p-7
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


<div

className="
w-11
h-11
rounded-full
bg-green-100
flex
items-center
justify-center
"

>

<User className="text-green-700"/>

</div>



<h2

className="
text-xl
sm:text-2xl
font-bold
text-green-800
"

>

Dados Pessoais

</h2>


</div>






<div

className="
grid
sm:grid-cols-2
gap-4
"

>


<input

placeholder="Nome completo"

className="campo"

/>



<input

type="date"

className="campo"

/>



<input

placeholder="Bilhete de Identidade"

className="campo"

/>



<input

placeholder="Naturalidade"

className="campo"

/>



</div>


</div>









{/* Contactos */}


<div

className="
bg-white
rounded-3xl
shadow-lg
p-5
sm:p-7
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


<div

className="
w-11
h-11
rounded-full
bg-yellow-100
flex
items-center
justify-center
"

>

<Phone className="text-yellow-600"/>

</div>




<h2

className="
text-xl
sm:text-2xl
font-bold
text-green-800
"

>

Contactos

</h2>


</div>





<div

className="
grid
sm:grid-cols-2
gap-4
"

>


<input

placeholder="Número de telefone"

className="campo"

/>



<input

type="email"

placeholder="Email"

className="campo"

/>



<input

placeholder="Morada"

className="campo"

/>



<input

placeholder="Nome do encarregado"

className="campo"

/>


</div>


</div>









{/* Dados académicos */}


<div

className="
bg-white
rounded-3xl
shadow-lg
p-5
sm:p-7
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

<div

className="
w-11
h-11
rounded-full
bg-green-100
flex
items-center
justify-center
"

>


<GraduationCap className="text-green-700"/>


</div>



<h2

className="
text-xl
sm:text-2xl
font-bold
text-green-800
"

>

Dados Académicos

</h2>


</div>






<select

className="campo"

>

<option>
Selecione o curso
</option>

<option>Análises Clínicas</option>

<option>Enfermagem Geral</option>

<option>Ciências Físicas e Biológicas</option>

<option>Ciências Económicas e Jurídicas</option>

<option>Informática</option>

<option>Eletrónica e Telecomunicações</option>

<option>Mecânica (Máquinas e Motores)</option>

<option>Eletrónica Industrial e Automação</option>

<option>Petroquímica</option>


</select>



</div>









{/* Documentos */}


<div

className="
bg-white
rounded-3xl
shadow-lg
p-5
sm:p-7
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


<div

className="
w-11
h-11
rounded-full
bg-yellow-100
flex
items-center
justify-center
"

>


<FileText className="text-yellow-600"/>


</div>



<h2

className="
text-xl
sm:text-2xl
font-bold
text-green-800
"

>

Documentos

</h2>


</div>







<div className="space-y-5">





<div>

<label className="tituloUpload">

Foto tipo passe

</label>


<div className="uploadBox">


<Upload/>


<input

type="file"

accept="image/*"

/>


</div>


</div>








<div>

<label className="tituloUpload">

Bilhete de Identidade (PDF)

</label>


<div className="uploadBox">


<Upload/>


<input

type="file"

accept="application/pdf"

/>


</div>


</div>








<div>

<label className="tituloUpload">

Certificado ou Declaração (PDF)

</label>



<div className="uploadBox">


<Upload/>


<input

type="file"

accept="application/pdf"

/>


</div>



</div>





</div>




</div>









<button

type="submit"

className="
w-full
bg-green-700
hover:bg-green-800
text-white
py-4
rounded-2xl
font-bold
text-lg
shadow-xl
flex
items-center
justify-center
gap-2
transition
"

>


<CheckCircle/>

Enviar Inscrição


</button>






</form>





</div>





</section>


)

}