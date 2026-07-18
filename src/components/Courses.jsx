import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const cursos = [

{
titulo:"Análises Clínicas",
descricao:
"Formação na área da saúde com conhecimentos em laboratório, análises biológicas, técnicas laboratoriais e diagnóstico clínico."
},


{
titulo:"Enfermagem Geral",
descricao:
"Preparação de profissionais de saúde com conhecimentos em cuidados de enfermagem, assistência ao paciente e promoção da saúde."
},


{
titulo:"Ciências Físicas e Biológicas",
descricao:
"Formação científica abrangendo física, química, biologia e bases essenciais para estudos superiores e áreas científicas."
},


{
titulo:"Ciências Económicas e Jurídicas",
descricao:
"Curso orientado para economia, gestão, administração, direito e compreensão dos processos empresariais."
},


{
titulo:"Informática",
descricao:
"Formação em tecnologias digitais, programação, redes de computadores, sistemas operativos e desenvolvimento tecnológico."
},


{
titulo:"Eletrónica e Telecomunicações",
descricao:
"Estudo de sistemas eletrónicos, comunicação, redes, equipamentos digitais e tecnologias de transmissão de informação."
},


{
titulo:"Mecânica (Máquinas e Motores)",
descricao:
"Formação técnica em máquinas, motores, manutenção mecânica e funcionamento de sistemas industriais."
},


{
titulo:"Eletrónica Industrial e Automação",
descricao:
"Preparação técnica em controlo industrial, sistemas automatizados, sensores, robótica e processos produtivos."
},


{
titulo:"Petroquímica",
descricao:
"Formação voltada para processos petroquímicos, derivados do petróleo, indústria química e operações industriais."
}

];





export default function Courses(){


const [inicio,setInicio]=useState(0);

const [direcao,setDirecao]=useState(1);

const [quantidade,setQuantidade]=useState(4);





useEffect(()=>{


function verificarTela(){


if(window.innerWidth < 480){

setQuantidade(1);

}

else if(window.innerWidth < 900){

setQuantidade(2);

}

else{

setQuantidade(4);

}


}


verificarTela();


window.addEventListener(
"resize",
verificarTela
);


return()=>{

window.removeEventListener(
"resize",
verificarTela
);

}


},[]);







function avancar(){

setDirecao(1);

setInicio(
(prev)=>
(prev+1)%cursos.length
);

}






function voltar(){

setDirecao(-1);

setInicio(
(prev)=>
(prev-1+cursos.length)%cursos.length
);

}







const cursosVisiveis=[];


for(let i=0;i<quantidade;i++){

cursosVisiveis.push(
cursos[(inicio+i)%cursos.length]
);

}








return(

<section

id="cursos"

className="
py-20
px-4
sm:px-6
bg-white
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
"

>


{/* Cabeçalho */}

<div

className="
text-center
mb-14
"

>


<h2

className="
text-3xl
sm:text-4xl
md:text-5xl
font-black
text-green-900
"

>

Cursos Disponíveis

</h2>



<p

className="
mt-4
text-gray-600
text-sm
sm:text-base
"

>

Conheça as formações disponíveis no CEIPP JoMorais

</p>


<div

className="
w-24
h-1
bg-yellow-400
mx-auto
mt-5
rounded-full
"

></div>


</div>








{/* Slider */}


<div

className="
flex
items-center
gap-3
"

>



{/* Anterior */}


<button

onClick={voltar}

className="
w-10
h-10
sm:w-12
sm:h-12
rounded-full
bg-green-900
text-yellow-400
flex
items-center
justify-center
shadow-lg
hover:bg-green-800
transition
shrink-0
"

>

<ChevronLeft/>

</button>










{/* Cards */}

<div

className="
flex-1
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
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


initial={{
x:direcao===1?70:-70,
opacity:0
}}


animate={{
x:0,
opacity:1
}}


exit={{
x:direcao===1?-70:70,
opacity:0
}}


transition={{
duration:.4
}}



className="
group
bg-white
rounded-3xl
p-6
shadow-md
border
border-gray-100
border-b-4
border-yellow-400
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
min-h-[260px]
"

>


{/* Icone */}


<div

className="
w-14
h-14
rounded-2xl
bg-green-100
flex
items-center
justify-center
mb-5
group-hover:bg-green-900
transition
"

>


<BookOpen

size={30}

className="
text-green-900
group-hover:text-yellow-400
transition
"

/>


</div>






<h3

className="
text-lg
font-extrabold
text-green-900
leading-snug
"

>

{curso.titulo}

</h3>





<p

className="
mt-4
text-gray-600
text-sm
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










{/* Próximo */}


<button

onClick={avancar}

className="
w-10
h-10
sm:w-12
sm:h-12
rounded-full
bg-green-900
text-yellow-400
flex
items-center
justify-center
shadow-lg
hover:bg-green-800
transition
shrink-0
"

>

<ChevronRight/>

</button>







</div>





</div>


</section>


)


}