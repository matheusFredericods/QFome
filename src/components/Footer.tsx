import logo from "../assets/Logo.png"
export function Footer(){
    return(
       <footer className="bg-zinc-500">
        <div className="p-4">
            <div className="flex justify-between">
                <img src={logo} alt="Logo" className="w-44" />
                <ul className=" hidden md:flex flex-wrap items-center gap-4 font-medium">
                    <li>
                        <a href="#inicio" className="hover:text-[#FFB00A] transition duration-300">Início</a>
                    </li>
                    <li>
                        <a href="#restaurantes" className="hover:text-[#FFB00A] transition duration-300">Restaurantes</a>
                    </li>
                    <li>
                        <a href="#entregador" className="hover:text-[#FFB00A] transition duration-300">Entregador</a>
                    </li>
                    <li>
                        <a href="beneficios" className="hover:text-[#FFB00A] transition duration-300">Benefícios</a>
                    </li>
                </ul>
            </div>
            <hr className="my-2 " />
            <span className="block text-center">© 2026 QFome. Todos os direitos reservados.</span>
        </div>
       </footer>
    )
}