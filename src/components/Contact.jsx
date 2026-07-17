import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact(){

return(

<section 
id="contactos" 
className="py-20 px-6 bg-gray-50"
>

<div className="max-w-6xl mx-auto">


<div className="text-center mb-12">

<h2 className="text-4xl md:text-5xl font-bold text-blue-900">
Entre em Contacto
</h2>

<p className="mt-4 text-gray-600">
Estamos disponíveis para esclarecer dúvidas sobre matrículas e informações académicas.
</p>

</div>



<div className="grid md:grid-cols-2 gap-10">



{/* Informações */}

<div className="bg-white rounded-2xl shadow-lg p-8">


<h3 className="text-2xl font-bold text-blue-900 mb-6">
Informações da Instituição
</h3>



<div className="space-y-6">


<div className="flex items-center gap-4">

<div className="bg-blue-100 p-3 rounded-full">
<MapPin className="text-blue-900"/>
</div>

<div>
<p className="font-semibold">
Localização
</p>

<p className="text-gray-600">
Huambo, Angola
</p>
</div>

</div>



<div className="flex items-center gap-4">

<div className="bg-blue-100 p-3 rounded-full">
<Phone className="text-blue-900"/>
</div>

<div>

<p className="font-semibold">
Telefone
</p>

<p className="text-gray-600">
+244 900 000 000
</p>

</div>

</div>



<div className="flex items-center gap-4">

<div className="bg-blue-100 p-3 rounded-full">
<Mail className="text-blue-900"/>
</div>

<div>

<p className="font-semibold">
Email
</p>

<p className="text-gray-600">
contacto@colegiojerma.com
</p>

</div>

</div>



<div className="flex items-center gap-4">

<div className="bg-blue-100 p-3 rounded-full">
<Clock className="text-blue-900"/>
</div>

<div>

<p className="font-semibold">
Horário
</p>

<p className="text-gray-600">
Segunda - Sexta: 07h às 17h
</p>

</div>

</div>



</div>


</div>





{/* Formulário */}

<div className="bg-white rounded-2xl shadow-lg p-8">


<h3 className="text-2xl font-bold text-blue-900 mb-6">
Envie uma mensagem
</h3>



<form className="space-y-5">


<input

type="text"

placeholder="Nome completo"

className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"

/>



<input

type="email"

placeholder="Email"

className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"

/>



<input

type="tel"

placeholder="Telefone"

className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"

/>



<textarea

rows="4"

placeholder="Mensagem"

className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"

></textarea>




<button

className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"

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