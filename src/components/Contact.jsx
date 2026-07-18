import {
  PhoneCall,
  MailCheck,
  MapPinned,
  Clock3,
  SendHorizontal
} from "lucide-react";


export default function Contact(){


const contactos=[

{
titulo:"Telefone",
texto:"+244 945 287 061",
icon:<PhoneCall size={28}/>,
bg:"bg-green-100",
color:"text-green-700"
},

{
titulo:"Email",
texto:"colegiojomorais@gmail.com",
icon:<MailCheck size={28}/>,
bg:"bg-yellow-100",
color:"text-yellow-600"
},

{
titulo:"Localização",
texto:"1º de Maio, Zona do Zangoio, Rua 3x3, Cabinda - Angola",
icon:<MapPinned size={28}/>,
bg:"bg-green-100",
color:"text-green-700"
},

{
titulo:"Horário",
texto:"Segunda - Sexta | 07h00 - 18h00",
icon:<Clock3 size={28}/>,
bg:"bg-yellow-100",
color:"text-yellow-600"
}

];





return(

<section

id="contactos"

className="
py-20
px-4
sm:px-6
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
text-3xl
sm:text-4xl
md:text-5xl
font-black
text-green-800
"

>

Contactos

</h2>



<p

className="
mt-4
text-gray-600
max-w-2xl
mx-auto
"

>

Entre em contacto com o CEIPP JoMorais para
informações sobre inscrições, cursos e serviços.

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







<div

className="
grid
lg:grid-cols-2
gap-10
"

>






{/* Informações */}


<div

className="
space-y-5
"

>


{
contactos.map((item,index)=>(


<div

key={index}

className="
group
bg-white
rounded-3xl
p-6
shadow-md
border
border-gray-100
flex
items-center
gap-5
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
"

>


<div

className={`
w-16
h-16
rounded-2xl
flex
items-center
justify-center
${item.bg}
group-hover:scale-110
transition
`}

>


<span className={item.color}>

{item.icon}

</span>


</div>




<div>


<h3

className="
font-extrabold
text-green-800
text-lg
"

>

{item.titulo}

</h3>



<p

className="
text-gray-600
text-sm
sm:text-base
mt-1
"

>

{item.texto}

</p>


</div>



</div>


))

}


</div>










{/* Formulário */}


<div

className="
bg-white
rounded-3xl
shadow-xl
p-6
sm:p-10
border
border-gray-100
"

>


<h3

className="
text-2xl
font-black
text-green-800
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
border-gray-200
outline-none
focus:border-green-600
focus:ring-2
focus:ring-green-100
transition
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
border-gray-200
outline-none
focus:border-green-600
focus:ring-2
focus:ring-green-100
transition
"

/>





<input

type="tel"

placeholder="Telefone"

className="
w-full
px-5
py-3
rounded-xl
border
border-gray-200
outline-none
focus:border-green-600
focus:ring-2
focus:ring-green-100
transition
"

/>






<textarea

rows="5"

placeholder="Escreva a sua mensagem..."

className="
w-full
px-5
py-3
rounded-xl
border
border-gray-200
outline-none
focus:border-green-600
focus:ring-2
focus:ring-green-100
transition
"

></textarea>







<button

type="submit"

className="
w-full
py-4
rounded-xl
bg-green-700
hover:bg-green-800
text-white
font-bold
flex
items-center
justify-center
gap-3
shadow-lg
hover:shadow-xl
transition
"

>


<SendHorizontal size={20}/>

Enviar Mensagem


</button>



</form>



</div>






</div>



</div>


</section>


)

}