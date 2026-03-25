type Props = {
    name: string;
    image: string;
    location: string;
    price: number;
}

export function BestRestaurantsCard({ name, image, location, price }: Props) {
    return (
        <div className="p-5 mb-5">
            <div className="relative overflow-hidden flex justify-center items-center">
                <img src={image} alt={name}
                draggable={false}
                className=" md:h-125 w-full  object-contain rounded-t-md"
                 />
                 
             <div className=" text-sm md:text-lg absolute  left-1/2 -translate-x-1/2 bottom-2 w-64  text-white text-center bg-black/60 px-1 md:px-2 py-1 rounded-md">
                {location}
            </div>
            </div>


            <div className="bg-white rounded-b-md p-2">
               <h3 className="text-base md:text-lg font-semibold">
                {name}
               </h3>
               <p className="text-sm md:text-lg font-bold" >
                Pratos a partir de R$ {price.toFixed(2)}
               </p>
            </div>
        </div>
    )
}