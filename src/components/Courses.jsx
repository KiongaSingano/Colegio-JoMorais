const cursos=[

"Ciências Físicas e Biológicas",
"Ciências Económicas",
"Ciências Humanas",
"Informática"

];


export default function Courses(){

return(

<section id="cursos" className="py-20 px-6">

<h2 className="text-4xl font-bold text-center">
Cursos Disponíveis
</h2>


<div className="grid md:grid-cols-4 gap-6 mt-10">

{
cursos.map((curso,index)=>(

<div 
key={index}
className="p-6 rounded-xl shadow-lg bg-white hover:scale-105 transition"
>

<h3 className="font-bold text-xl">
{curso}
</h3>

</div>

))
}


</div>

</section>

)

}