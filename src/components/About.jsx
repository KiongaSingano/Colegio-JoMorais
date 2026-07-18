import { Target, Eye, Heart } from "lucide-react";
import escola from "../assets/escola.jpg";


export default function About(){


return(

<section

id="sobre"

className="
py-20
px-4
sm:px-6
bg-white
"

>


<div

className="
max-w-7xl
mx-auto
"

>




{/* Título */}

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
font-extrabold
text-green-800
"

>

Sobre o CEIPP JoMorais

</h2>



<p

className="
mt-4
max-w-2xl
mx-auto
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>

Uma instituição dedicada à educação progressiva,
formando estudantes preparados para os desafios
académicos, profissionais e sociais.

</p>



</div>









{/* Conteúdo principal */}


<div

className="
grid
md:grid-cols-2
gap-10
lg:gap-14
items-center
"

>






{/* Imagem */}


<div

className="
relative
"

>


<div

className="
absolute
-rotate-3
inset-0
bg-yellow-400
rounded-3xl
"

></div>




<img


src={escola}


alt="CEIPP JoMorais"


className="
relative
w-full
h-[280px]
sm:h-[350px]
lg:h-[430px]
object-cover
rounded-3xl
shadow-2xl
"





/>


</div>









{/* Texto */}


<div>


<h3

className="
text-2xl
sm:text-3xl
font-bold
text-green-800
mb-5
"

>

Educação para transformar gerações

</h3>




<p

className="
text-gray-600
text-sm
sm:text-base
leading-relaxed
"

>


O CEIPP JoMorais aposta numa educação moderna
e progressiva, proporcionando aos estudantes
conhecimentos, competências e valores essenciais
para construir um futuro melhor.


</p>






<div

className="
mt-6
border-l-4
border-yellow-500
pl-5
"

>


<p

className="
italic
text-gray-700
text-sm
sm:text-base
"

>

"Apostando na Educação Progressiva
para preparar os líderes do amanhã."

</p>


</div>





</div>







</div>









{/* Missão Visão Valores */}


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
mt-16
"

>









{/* Missão */}


<div

className="
bg-gray-50
rounded-3xl
p-6
shadow-lg
border-t-4
border-yellow-500
hover:-translate-y-2
transition
"

>


<div

className="
w-12
h-12
rounded-full
bg-yellow-100
flex
items-center
justify-center
mb-5
"

>


<Target

size={27}

className="
text-yellow-600
"

/>


</div>




<h3

className="
text-xl
font-bold
text-green-800
"

>

Missão

</h3>



<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>


Oferecer uma educação de excelência,
formando cidadãos responsáveis,
criativos e preparados para contribuir
positivamente na sociedade.


</p>



</div>









{/* Visão */}



<div

className="
bg-gray-50
rounded-3xl
p-6
shadow-lg
border-t-4
border-green-700
hover:-translate-y-2
transition
"

>



<div

className="
w-12
h-12
rounded-full
bg-green-100
flex
items-center
justify-center
mb-5
"

>


<Eye

size={27}

className="
text-green-700
"

/>


</div>





<h3

className="
text-xl
font-bold
text-green-800
"

>

Visão

</h3>




<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>


Ser uma instituição de referência,
reconhecida pela inovação,
qualidade de ensino e desenvolvimento
integral dos estudantes.


</p>



</div>









{/* Valores */}



<div

className="
bg-gray-50
rounded-3xl
p-6
shadow-lg
border-t-4
border-yellow-500
hover:-translate-y-2
transition
"

>


<div

className="
w-12
h-12
rounded-full
bg-yellow-100
flex
items-center
justify-center
mb-5
"

>


<Heart

size={27}

className="
text-yellow-600
"

/>


</div>




<h3

className="
text-xl
font-bold
text-green-800
"

>

Valores

</h3>




<p

className="
mt-3
text-sm
sm:text-base
text-gray-600
leading-relaxed
"

>


Respeito, disciplina, inovação,
responsabilidade, ética e compromisso
com uma educação transformadora.


</p>




</div>







</div>






</div>


</section>


)

}