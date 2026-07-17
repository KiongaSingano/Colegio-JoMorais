import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const cursos = [

  {
    titulo: "Ciências Físicas e Biológicas",
    descricao:
      "Formação científica nas áreas de física, biologia e preparação para estudos superiores."
  },

  {
    titulo: "Ciências Económicas e Jurídicas",
    descricao:
      "Curso voltado para economia, gestão, direito e conhecimentos empresariais."
  },

  {
    titulo: "Electricidade",
    descricao:
      "Formação técnica em instalações elétricas, energia, manutenção e sistemas elétricos."
  },

  {
    titulo: "Informática",
    descricao:
      "Aprendizagem de programação, redes, sistemas operativos e tecnologias digitais."
  },

  {
    titulo: "Desenho e Projecto",
    descricao:
      "Desenvolvimento de competências em desenho técnico e elaboração de projetos."
  },

  {
    titulo: "Gestão de Recursos Humanos",
    descricao:
      "Preparação para gestão de pessoas, recrutamento e organização empresarial."
  },

  {
    titulo: "Finanças",
    descricao:
      "Estudo de gestão financeira, contabilidade e administração de recursos."
  }

];



export default function Courses(){


const [inicio,setInicio] = useState(0);

const [direcao,setDirecao] = useState(1);



const cursosVisiveis = [

cursos[inicio],
cursos[(inicio + 1) % cursos.length],
cursos[(inicio + 2) % cursos.length],
cursos[(inicio + 3) % cursos.length]

];




function avancar(){

setDirecao(1);

setInicio((prev)=>
(prev + 1) % cursos.length
);

}




function voltar(){

setDirecao(-1);

setInicio((prev)=>
(prev - 1 + cursos.length) % cursos.length
);

}





return(

<section
id="cursos"
className="
py-24
px-6
bg-gray-50
overflow-hidden
"
>


<div
className="
max-w-7xl
mx-auto
"
>


<div
className="
text-center
mb-14
"
>

<h2
className="
text-4xl
md:text-5xl
font-extrabold
text-purple-900
"
>
Cursos Disponíveis
</h2>


<p
className="
mt-4
text-gray-600
"
>
Conheça as formações disponíveis no CEIPP Jerma
</p>


</div>





<div
className="
flex
items-center
gap-5
"
>



{/* Botão voltar */}

<button

onClick={voltar}

className="
hidden
md:flex
w-14
h-14
items-center
justify-center
rounded-full
bg-purple-700
text-white
hover:bg-purple-900
transition
shadow-lg
"

>

<ChevronLeft size={30}/>

</button>







{/* Cards */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
flex-1
"
>


<AnimatePresence
mode="popLayout"
initial={false}
>


{

cursosVisiveis.map((curso)=>(


<motion.div

key={curso.titulo}

layout

initial={{
x: direcao === 1 ? 100 : -100,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

exit={{
x: direcao === 1 ? -100 : 100,
opacity:0
}}

transition={{
duration:0.4
}}

className="
bg-white
rounded-2xl
shadow-lg
p-7
border-b-4
border-red-600
"

>



<div
className="
w-14
h-14
rounded-full
bg-purple-100
flex
items-center
justify-center
mb-5
"
>

<BookOpen
size={30}
className="text-purple-700"
/>

</div>



<h3
className="
text-xl
font-bold
text-purple-900
"
>

{curso.titulo}

</h3>



<p
className="
mt-4
text-gray-600
leading-relaxed
"
>

{curso.descricao}

</p>



</motion.div>


))


}



</AnimatePresence>


</div>








{/* Botão avançar */}

<button

onClick={avancar}

className="
hidden
md:flex
w-14
h-14
items-center
justify-center
rounded-full
bg-purple-700
text-white
hover:bg-purple-900
transition
shadow-lg
"

>

<ChevronRight size={30}/>

</button>



</div>






{/* Mobile */}

<div
className="
flex
md:hidden
justify-center
gap-5
mt-8
"
>


<button
onClick={voltar}
className="
bg-purple-700
text-white
p-3
rounded-full
"
>

<ChevronLeft/>

</button>



<button
onClick={avancar}
className="
bg-purple-700
text-white
p-3
rounded-full
"
>

<ChevronRight/>

</button>


</div>



</div>


</section>


)


}