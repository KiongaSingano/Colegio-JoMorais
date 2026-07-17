import { Phone, Mail, MapPin, Clock } from "lucide-react";


export default function Contact(){


return (

<section
id="contactos"
className="
py-24
px-6
bg-gray-50
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
text-4xl
md:text-5xl
font-extrabold
text-purple-900
"
>
Contactos
</h2>


<p
className="
mt-4
text-gray-600
"
>
Entre em contacto com o Colégio Jerma para mais informações.
</p>


</div>





<div
className="
grid
lg:grid-cols-2
gap-10
items-start
"
>





{/* Informações */}

<div
className="
space-y-5
"
>


<div className="
bg-white
rounded-2xl
p-6
shadow-md
flex
items-center
gap-5
hover:shadow-xl
transition
"
>

<div
className="
w-14
h-14
rounded-full
bg-red-100
flex
items-center
justify-center
"
>

<Phone
className="text-red-600"
/>

</div>


<div>

<h3 className="
font-bold
text-purple-900
"
>
Telefone
</h3>

<p className="
text-gray-600
"
>
+244 946 614 043
</p>

</div>


</div>





<div className="
bg-white
rounded-2xl
p-6
shadow-md
flex
items-center
gap-5
hover:shadow-xl
transition
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
"
>

<Mail
className="text-purple-700"
/>

</div>


<div>

<h3 className="
font-bold
text-purple-900
"
>
Email
</h3>

<p className="
text-gray-600
"
>
ceippjerma@gmail.com
</p>

</div>


</div>







<div className="
bg-white
rounded-2xl
p-6
shadow-md
flex
items-center
gap-5
hover:shadow-xl
transition
"
>

<div
className="
w-14
h-14
rounded-full
bg-red-100
flex
items-center
justify-center
"
>

<MapPin
className="text-red-600"
/>

</div>


<div>

<h3 className="
font-bold
text-purple-900
"
>
Localização
</h3>

<p className="
text-gray-600
"
>
1º de Maio, Cainda - Angola
</p>


</div>


</div>







<div className="
bg-white
rounded-2xl
p-6
shadow-md
flex
items-center
gap-5
hover:shadow-xl
transition
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
"
>

<Clock
className="text-purple-700"
/>

</div>


<div>

<h3 className="
font-bold
text-purple-900
"
>
Horário
</h3>

<p className="
text-gray-600
"
>
Segunda - Sexta | 07h00 - 18h00
</p>


</div>


</div>




</div>









{/* Formulário */}

<div
className="
bg-white
rounded-3xl
shadow-xl
p-8
"
>


<h3
className="
text-2xl
font-bold
text-purple-900
mb-6
"
>
Envie uma mensagem
</h3>




<form
className="
space-y-5
"
>


<input

type="text"

placeholder="Nome completo"

className="
w-full
px-5
py-3
rounded-xl
border
outline-none
focus:ring-2
focus:ring-purple-600
"
/>



<input

type="email"

placeholder="Email"

className="
w-full
px-5
py-3
rounded-xl
border
outline-none
focus:ring-2
focus:ring-purple-600
"

/>





<input

type="text"

placeholder="Telefone"

className="
w-full
px-5
py-3
rounded-xl
border
outline-none
focus:ring-2
focus:ring-purple-600
"

/>





<textarea

rows="5"

placeholder="Mensagem"

className="
w-full
px-5
py-3
rounded-xl
border
outline-none
focus:ring-2
focus:ring-purple-600
"

></textarea>




<button

className="
w-full
py-3
rounded-xl
bg-purple-700
text-white
font-bold
hover:bg-purple-900
transition
"

>

Enviar Mensagem

</button>



</form>


</div>




</div>


</div>


</section>


)

}