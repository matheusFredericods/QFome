import employ from "../assets/employ.png"
import { Button } from "./Button"
export function Employee(){
    return(
       <section id="entregador" className="flex items-center justify-center p-6">
            <div className="hidden md:block md:w-1/2">
                <img src={employ} alt="Funcionário"
                 />
            </div>
            <div className=" md:w-1/2">
                <h2 className=" text-2xl  md:text-3xl font-bold">
                    Faça Parte do Time de Entregadores QFome!
                    </h2>
                <p className="text-sm md:text-lg  mb-3 mt-2 "
                >O QFome conecta entregadores a centenas de pedidos todos os dias, oferecendo liberdade, praticidade e uma forma rápida de aumentar sua renda. Aqui, você escolhe quando quer trabalhar, recebe suporte e ainda tem acesso às melhores rotas e oportunidades da sua região.
                </p>
            <Button
            text="Saiba mais"
            className=" text-white bg-black font-medium" disableHover={true}/>
            </div>
       </section>
    )
}