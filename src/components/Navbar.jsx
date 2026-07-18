import { useState } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Users,
  Phone,
  ClipboardEdit
} from "lucide-react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      nome: "Início",
      icon: <Home size={18} />,
      url: "#inicio"
    },
    {
      nome: "Cursos",
      icon: <BookOpen size={18} />,
      url: "#cursos"
    },
    {
      nome: "Sobre",
      icon: <Users size={18} />,
      url: "#sobre"
    },
    {
      nome: "Contactos",
      icon: <Phone size={18} />,
      url: "#contactos"
    }
  ];

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-green-900/95
      backdrop-blur-lg
      shadow-xl
      border-b
      border-green-700/40
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-8
        py-3
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-3
          "
        >

          <img
            src={logo}
            alt="CEIPP JoMorais"
            className="
            w-14
            h-14
            md:w-16
            md:h-16
            object-contain
            "
          />

          <div>

            <h1
              className="
              text-lg
              sm:text-xl
              md:text-2xl
              font-extrabold
              text-white
              leading-none
              "
            >

              CEIPP

              <span className="text-yellow-400">
                {" "}JoMorais
              </span>

            </h1>

            <p
              className="
              text-[11px]
              sm:text-xs
              text-green-100
              "
            >
              Apostando na Educação Progressiva
            </p>

          </div>

        </div>

        {/* Desktop */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          {
            links.map((link, index) => (

              <a

                key={index}

                href={link.url}

                className="
                group
                relative
                flex
                items-center
                gap-2
                text-green-100
                hover:text-white
                font-medium
                transition
                "

              >

                {link.icon}

                <span>
                  {link.nome}
                </span>

                <span
                  className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  bottom-[-8px]
                  h-[3px]
                  w-0
                  rounded-full
                  bg-yellow-400
                  transition-all
                  duration-300
                  group-hover:w-[70%]
                  "
                ></span>

              </a>

            ))
          }

          <Link

            to="/inscricao"

            className="
            flex
            items-center
            gap-2
            bg-yellow-400
            text-green-950
            px-6
            py-3
            rounded-full
            font-bold
            hover:bg-yellow-300
            transition
            shadow-lg
            hover:scale-105
            "

          >

            <ClipboardEdit size={18} />

            Matrícula

          </Link>

        </div>

        {/* Mobile */}

        <button

          onClick={() => setMenuOpen(!menuOpen)}

          className="
          md:hidden
          text-white
          "

        >

          {
            menuOpen
              ? <X size={30} />
              : <Menu size={30} />
          }

        </button>

      </div>

      {/* Menu Mobile */}

      {

        menuOpen && (

          <div
            className="
            md:hidden
            bg-green-900
            border-t
            border-green-700
            px-6
            py-5
            "
          >

            <div className="space-y-4">

              {

                links.map((link, index) => (

                  <a

                    key={index}

                    href={link.url}

                    className="
                    flex
                    items-center
                    gap-3
                    text-green-100
                    hover:text-yellow-400
                    transition
                    "

                  >

                    {link.icon}

                    {link.nome}

                  </a>

                ))

              }

              <Link

                to="/inscricao"

                className="
                mt-6
                flex
                justify-center
                items-center
                gap-2
                bg-yellow-400
                text-green-950
                py-3
                rounded-xl
                font-bold
                "

              >

                <ClipboardEdit size={18} />

                Fazer Matrícula

              </Link>

            </div>

          </div>

        )

      }

    </nav>

  );

}