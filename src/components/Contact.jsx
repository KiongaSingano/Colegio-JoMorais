import { 
  PhoneCall,
  Mail,
  MapPin,
  Clock3,
  Send
} from "lucide-react";


export default function Contact(){


const contactos = [

{
titulo:"Telefone",
texto:"+244 945 287 061",
icon:<PhoneCall size={28}/>,
cor:"bg-green-100",
iconColor:"text-green-700"
},


{
titulo:"Email",
texto:"colegiojomorais@gmail.com",
icon:<Mail size={28}/>,
cor:"bg-yellow-100",
iconColor:"text-yellow-600"
},


{
titulo:"Localização",
texto:"1º de Maio, Zona do Zangoio, Rua 3x3, Cabinda - Angola",
icon:<MapPin size={28}/>,
cor:"bg-green-100",
iconColor:"text-green-700"
},


{
titulo:"Horário",
texto:"Segunda - Sexta | 07h00 - 18h00",
icon:<Clock3 size={28}/>,
cor:"bg-yellow-100",
iconColor:"text-yellow-600"
}

];





return (


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
font-extrabold
text-green-700
"

>

Contactos

</h2>



<p

className="
mt-4
max-w-2xl
mx-auto
text-gray-600
text-sm
sm:text-base
"

>

Entre em contacto com o CEIPP JoMorais
para obter informações sobre inscrições,
cursos e serviços.

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









<div

className="
grid
lg:grid-cols-2
gap-10
items-start
"

>






{/* Informações de contacto */}


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
bg-white
rounded-2xl
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
w-14
h-14
rounded-2xl
flex
items-center
justify-center
${item.cor}
`}

>


<span

className={item.iconColor}

>

{item.icon}

</span>


</div>







<div>


<h3

className="
font-bold
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
sm:p-8
border
border-gray-100
"

>


<h3

className="
text-2xl
font-bold
text-green-700
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



<div>


<label

className="
block
text-sm
font-semibold
text-gray-700
mb-2
"

>

Nome completo

</label>


<input

type="text"

placeholder="Digite o seu nome"

className="
w-full
px-5
py-3
rounded-xl
border
border-gray-200
outline-none
focus:ring-2
focus:ring-green-600
transition
"

/>


</div>







<div>


<label

className="
block
text-sm
font-semibold
text-gray-700
mb-2
"

>

Email

</label>


<input

type="email"

placeholder="Digite o seu email"

className="
w-full
px-5
py-3
rounded-xl
border
border-gray-200
outline-none
focus:ring-2
focus:ring-green-600
transition
"

/>


</div>







<div>


<label

className="
block
text-sm
font-semibold
text-gray-700
mb-2
"

>

Telefone

</label>


<input

type="text"

placeholder="Digite o seu contacto"

className="
w-full
px-5
py-3
rounded-xl
border
border-gray-200
outline-none
focus:ring-2
focus:ring-green-600
transition
"

/>


</div>








<div>


<label

className="
block
text-sm
font-semibold
text-gray-700
mb-2
"

>

Mensagem

</label>



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
focus:ring-2
focus:ring-green-600
transition
"

></textarea>


</div>







<button

type="submit"

className="
w-full
py-3
rounded-xl
bg-green-700
hover:bg-green-800
text-white
font-bold
flex
items-center
justify-center
gap-2
shadow-lg
hover:shadow-xl
transition-all
duration-300
"


>


<Send size={20}/>

Enviar Mensagem


</button>






</form>




</div>






</div>






</div>



</section>


)


}