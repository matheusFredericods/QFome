import { type Benefit } from "../data/benefits";
import { Check } from "lucide-react";

interface BenefitCardProps{
    data: Benefit
}

export  function BenefitCard({data}: BenefitCardProps){
    return(
        <div className="flex mb-12 items-center gap-3">
            <div className="shrink-0 w-20 h-20 rounded-full bg-[#FFB00A] flex items-center justify-center border-4 border-[#FFB00A]">
                <Check className="text-black w-12 h-12"/>
            </div>

            <div className="flex flex-col">
                <h3 className=" font-semibold text-base md:text-lg ">
                    {data.title}
                </h3>

                <p className="text-sm md:text-lg">
                    {data.description}
                </p>
            </div>
        </div>
    )
        
}