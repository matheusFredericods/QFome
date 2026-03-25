import HomeFoto from "../assets/Home-foto.jpg"
import { Button } from "../components/Button"

export function Home() {
    return(
       <section id="inicio" style={{backgroundImage: `url(${HomeFoto})`}} className="lg:w-full h-[98vh] bg-cover bg-center">
        <div className="flex flex-col justify-start text-center h-full p-2  pt-28 md:p-4 md:justify-center  md:text-left md:items-start md:ml-5 ">
            <h1 className="text-white font-bold text-3xl lg:text-4xl ">
                O delivery que chega rápido, quentinho  <br/> e sempre do jeito que você gosta.
            </h1>
            <p className="text-[#D0C3C3] mt-3 text-lg">
            Peça seus pratos favoritos com rapidez, praticidade e entrega garantida.
            </p>

            <div className="mt-5 flex gap-3 lg:gap-5 justify-center items-center ">
            <input placeholder=" Digite seu Endereço"
             type="text" 
             className="bg-white w-full max-w-xs lg:w-72 p-2 rounded-xl outline-none focus:ring-2 focus:ring-[#FFB00A]"
            />
            <Button text="Buscar"/> 
            </div>

          
       
        </div>

       
       </section>
    )
}