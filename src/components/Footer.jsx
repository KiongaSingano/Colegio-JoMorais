import { 
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";


export default function Footer(){


return (

<footer
className="
bg-green-950
text-white
py-12
"
>


<div
className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
"
>


<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-10
"
>


{/* Instituição */}

<div>


<h2
className="
text-3xl
font-extrabold
"
>

CEIPP

<span
className="
text-yellow-400
"
>

 JoMorais

</span>


</h2>



<p
className="
mt-4
text-green-100
leading-relaxed
text-sm
sm:text-base
"
>

Sistema de Inscrições e Matrículas Online.
Apostando na Educação Progressiva e preparando
estudantes para o futuro.

</p>


</div>







{/* Links */}

<div>


<h3
className="
text-xl
font-bold
text-yellow-400
mb-5
"
>

Links rápidos

</h3>



<div
className="
space-y-3
text-green-100
"
>


<a
href="#inicio"
className="
block
hover:text-yellow-400
transition
"
>
Início
</a>



<a
href="#sobre"
className="
block
hover:text-yellow-400
transition
"
>
Sobre
</a>




<a
href="#cursos"
className="
block
hover:text-yellow-400
transition
"
>
Cursos
</a>




<a
href="#contactos"
className="
block
hover:text-yellow-400
transition
"
>
Contactos
</a>



</div>


</div>









{/* Contactos */}

<div>


<h3
className="
text-xl
font-bold
text-yellow-400
mb-5
"
>

Contactos

</h3>



<div
className="
space-y-4
text-green-100
text-sm
sm:text-base
"
>



<p
className="
flex
items-center
gap-3
"
>

<FaPhone
className="
text-yellow-400
"
/>

+244 946 614 043

</p>





<p
className="
flex
items-center
gap-3
"
>

<FaEnvelope
className="
text-yellow-400
"
/>

colegiojomorais@gmail.com

</p>





<p
className="
flex
items-center
gap-3
"
>

<FaMapMarkerAlt
className="
text-yellow-400
"
/>

Angola

</p>



</div>







{/* Redes sociais */}

<div
className="
flex
gap-3
mt-7
"
>



<a
href="#"
className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-blue-600
transition
"
>

<FaFacebookF/>

</a>





<a
href="#"
className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-pink-600
transition
"
>

<FaInstagram/>

</a>





<a
href="#"
className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-red-600
transition
"
>

<FaYoutube/>

</a>





<a
href="#"
className="
w-11
h-11
rounded-full
bg-white/10
flex
items-center
justify-center
hover:bg-green-600
transition
"
>

<FaWhatsapp/>

</a>




</div>



</div>



</div>







{/* Rodapé inferior */}

<div
className="
border-t
border-white/20
mt-10
pt-6
text-center
text-green-200
text-xs
sm:text-sm
"
>


© {new Date().getFullYear()} 
Complexo Escola e Instituto Politécnico Privado JoMorais.
<br/>

Todos os direitos reservados.


</div>



</div>


</footer>


)

}