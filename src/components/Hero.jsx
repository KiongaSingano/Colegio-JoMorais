import { TypeAnimation } from "react-type-animation";
import { ClipboardPen, Search } from "lucide-react";
import { Link } from "react-router-dom";
import escola from "../assets/escola.jpg";

export default function Hero({ abrirConsulta }) {

  return (

    <section
      id="inicio"
      className="
      relative
      min-h-[550px]
      sm:min-h-[650px]
      lg:min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      bg-cover
      bg-center
      pt-24
      pb-10
      "
      style={{
        backgroundImage: `url(${escola})`
      }}
    >

      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
bg-gradient-to-b
from-green-950/80
via-green-900/70
to-green-950/80
        "
      ></div>

      {/* Conteúdo */}

      <div
        className="
        relative
        z-10
        max-w-6xl
        w-full
        mx-auto
        px-4
        sm:px-8
        "
      >

<div
className="
text-center
px-3
sm:px-8
lg:px-14
"
>

          {/* Badge */}

          <div className="flex justify-center">

            <span
              className="
              bg-yellow-400
              text-green-900
              px-5
              py-2
              sm:px-8
              sm:py-3
              rounded-full
              font-extrabold
              uppercase
              tracking-widest
              text-xs
              sm:text-lg
              shadow-xl
              animate-pulse
              "
            >

              Matrículas Abertas

            </span>

          </div>

          {/* Nome */}



          {/* Texto principal */}

          <TypeAnimation

  sequence={[
    "Garanta já a sua vaga no CEIPP JoMorais",
    3500,
    "",
    1200
  ]}

  wrapper="h1"

  speed={45}

  repeat={Infinity}

  className="
  mt-5
  block
  whitespace-nowrap
  font-black
  text-white
  leading-tight
  text-[14px]
  sm:text-xl
  md:text-4xl
  lg:text-5xl
  "

/>
          {/* Slogan */}



          {/* Descrição */}

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-gray-100
            leading-8
            text-sm
            sm:text-lg
            "
          >

            Faça a sua matrícula totalmente online,
            envie os seus documentos, acompanhe o estado
            da inscrição e prepare o seu futuro com mais
            rapidez, segurança e comodidade.

          </p>

 {/* Botões */}

<div
className="
mt-8
flex
flex-row
justify-center
items-center
gap-2
sm:gap-5
w-full
"
>

{/* Fazer inscrição */}

<Link

to="/inscricao"

className="
flex
items-center
justify-center
gap-1
bg-yellow-400
text-green-950
px-3
py-3
sm:px-8
sm:py-4
rounded-full
font-bold
text-[11px]
sm:text-lg
shadow-xl
hover:scale-105
transition
whitespace-nowrap
"

>

<ClipboardPen 
size={16}
className="sm:w-[22px] sm:h-[22px]"
/>

<span>
Fazer Inscrição
</span>

</Link>





{/* Consultar inscrição */}

<button

onClick={abrirConsulta}

className="
flex
items-center
justify-center
gap-1
border-2
border-white
text-white
px-3
py-3
sm:px-8
sm:py-4
rounded-full
font-bold
text-[11px]
sm:text-lg
hover:bg-white
hover:text-green-900
transition
whitespace-nowrap
"

>

<Search

size={16}

className="sm:w-[22px] sm:h-[22px]"

/>

<span>
Consultar Inscrição
</span>


</button>


</div>

          {/* Estatísticas */}

          <div
            className="
            mt-12
            grid
            grid-cols-3
            gap-6
            text-white
            "
          >

            <div>

              <h2 className="text-3xl font-black text-yellow-400">

                +5

              </h2>

              <p className="text-sm text-green-100">

                Anos de Ensino

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-black text-yellow-400">

                +5000

              </h2>

              <p className="text-sm text-green-100">

                Estudantes

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-black text-yellow-400">

                100%

              </h2>

              <p className="text-sm text-green-100">

                Matrícula Online

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}