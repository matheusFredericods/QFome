import { useState } from "react"
import logo from "../assets/Logo.png"
import { Button } from "./Button"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className=" relative bg-black flex items-center justify-between p-3 lg:p-2  top-0 left-0 w-full z-50 ">
      
      <div>
        <a href="/">
          <img src={logo} alt="Logo" className="w-36 md:w-52" />
        </a>    
      </div>


      <nav className="hidden lg:flex text-white gap-10 text-xl">
        <a className="hover:underline hover:text-[#FFB00A] transition duration-300" href="#inicio">Início</a>
        <a className="hover:underline hover:text-[#FFB00A] transition duration-300" href="#restaurantes">Restaurantes</a>
        <a className="hover:underline hover:text-[#FFB00A] transition duration-300" href="#entregador">Entregador</a>
        <a className="hover:underline hover:text-[#FFB00A] transition duration-300" href="#beneficios">Benefícios</a>
      </nav>

      <div className="hidden lg:flex gap-6 text-xl items-center px-6">
        <a className="text-white hover:underline hover:text-[#FFB00A] transition duration-300" href="/">
          Entrar
        </a>
        <Button text="Criar Conta" />
      </div>

      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

     
      <div
        className={`absolute top-full left-0 w-full bg-black/80 backdrop-blur-md text-white flex flex-col items-center gap-2 py-4 lg:hidden z-50 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <a
          className="block w-full text-center py-4 px-4 hover:bg-[#FFB00A] transition duration-300"
          href="#inicio"
          onClick={() => setIsOpen(false)}
        >
          Início
        </a>

        <a
          className="block w-full text-center py-4 px-4 hover:bg-[#FFB00A] transition duration-300"
          href="#restaurantes"
          onClick={() => setIsOpen(false)}
        >
          Restaurantes
        </a>

        <a
          className="block w-full text-center py-4 px-4 hover:bg-[#FFB00A] transition duration-300"
          href="#entregador"
          onClick={() => setIsOpen(false)}
        >
          Entregador
        </a>

        <a
          className="block w-full text-center py-4 px-4 hover:bg-[#FFB00A] transition duration-300"
          href="#beneficios"
          onClick={() => setIsOpen(false)}
        >
          Benefícios
        </a>

        <a
          className="block w-full text-center py-4 px-4 hover:bg-[#FFB00A] transition duration-300"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          Entrar
        </a>

        <div className="text-black py-4">
          <Button text="Criar Conta" />
        </div>
      </div>
    </header>
  )
}