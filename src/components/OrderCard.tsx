import { Button } from "./Button"

type Props = {
    name: string,
    restaurant: string,
    price: number,
    image: string
}

export function OrderCard({name, restaurant, price, image}: Props) {
    return (
        <div className="flex gap-1 border  p-5 rounded-md md:min-w-112.5 shrink-0 text-center justify-between">
            <img
             src={image} 
             alt={name} 
            draggable={false}
            className=" w-40 h-auto  md:w-50"
            />

            <div className="flex flex-col text-center items-center justify-center ">
                <h3 className=" text-base md:text-lg font-semibold">{name}</h3>
                <p className=" text-sm md:text-lg font-bold">{restaurant} </p>
                <p>R${price.toFixed(2)}</p>    
                <Button text="Comprar"
               className="mt-1"
                />
                
            </div>
            
        </div>
       
    )
}