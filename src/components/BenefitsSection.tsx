import { BenefitCard } from "./benefitsCard";
import { benefitData } from "../data/benefits";


export function BenefitsSection(){
    return(
        <section id="beneficios" className="bg-[#141414] text-white p-5">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold">
                    Benefícios
                </h2>
                <p className="mb-3 mt-2  text-center max-w-lg">
                   O QFome foi criado para oferecer a melhor experiência em delivery da sua cidade — rápida, simples e confiável. 
                </p>

                <div className="flex flex-col">
                    {benefitData.map((item) =>
                    <BenefitCard key={item.id} data={item}/>
                    )}
                </div>
            </div>
            
        </section>
    )
}