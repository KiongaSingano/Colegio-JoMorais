import { Target, Eye, Heart } from "lucide-react";
import escola from "../assets/escola.jpg";


export default function About(){


return(

<section
id="sobre"
className="
py-24
px-6
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
mb-16
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
Sobre o CEIPP Jerma
</h2>


<p
className="
mt-4
text-gray-600
max-w-2xl
mx-auto
"
>
Uma instituição comprometida com a formação académica,
profissional e humana dos seus estudantes.
</p>


</div>






{/* Conteúdo principal */}

<div
className="
grid
md:grid-cols-2
gap-12
items-center
"
>



{/* Imagem */}

<div>

<img

src={escola}

alt="Colégio Jerma"

className="
rounded-3xl
shadow-xl
w-full
h-[400px]
object-cover
"

/>

</div>







{/* Texto */}

<div>


<h3
className="
text-3xl
font-bold
text-purple-900
mb-6
"
>

Educação para transformar futuros

</h3>


<p
className="
text-gray-600
leading-relaxed
"
>

O CEIPP Jerma tem como compromisso oferecer
uma educação de qualidade, preparando os estudantes
com conhecimentos, competências e valores necessários
para enfrentar os desafios do futuro.

</p>



</div>


</div>








{/* Missão Visão Valores */}

<div
className="
grid
md:grid-cols-3
gap-8
mt-20
"
>




{/* Missão */}

<div
className="
bg-gray-50
rounded-2xl
p-8
shadow-lg
border-t-4
border-red-600
hover:-translate-y-2
transition
"
>


<div
className="
w-14
h-14
bg-red-100
rounded-full
flex
items-center
justify-center
mb-5
"
>

<Target
className="text-red-600"
size={30}
/>

</div>



<h3
className="
text-2xl
font-bold
text-purple-900
"
>
Missão
</h3>


<p
className="
mt-4
text-gray-600
"
>

Proporcionar uma educação de excelência,
formando cidadãos responsáveis, preparados
e capazes de contribuir para a sociedade.

</p>


</div>








{/* Visão */}

<div
className="
bg-gray-50
rounded-2xl
p-8
shadow-lg
border-t-4
border-purple-700
hover:-translate-y-2
transition
"
>


<div
className="
w-14
h-14
bg-purple-100
rounded-full
flex
items-center
justify-center
mb-5
"
>

<Eye
className="text-purple-700"
size={30}
/>

</div>



<h3
className="
text-2xl
font-bold
text-purple-900
"
>
Visão
</h3>


<p
className="
mt-4
text-gray-600
"
>

Ser uma instituição de referência no ensino,
inovação e desenvolvimento integral dos estudantes.

</p>


</div>








{/* Valores */}

<div
className="
bg-gray-50
rounded-2xl
p-8
shadow-lg
border-t-4
border-red-600
hover:-translate-y-2
transition
"
>


<div
className="
w-14
h-14
bg-red-100
rounded-full
flex
items-center
justify-center
mb-5
"
>

<Heart
className="text-red-600"
size={30}
/>

</div>



<h3
className="
text-2xl
font-bold
text-purple-900
"
>
Valores
</h3>


<p
className="
mt-4
text-gray-600
"
>

Disciplina, respeito, responsabilidade,
excelência, inovação, ética e compromisso
com a comunidade.

</p>


</div>





</div>




</div>


</section>


)

}