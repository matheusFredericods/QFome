import{BestRestaurantsCard} from "../components/BestRestaurantsCard"
import {restaurants} from"../data/Restaurants"

export function BestRestaurants() {
    return (
       <section id="restaurantes" className="bg-[#141414]">
       <div className="flex flex-col text-center md:justify-center ">
        <h2 className=" text-2xl font-bold text-white mt-4  md:text-3xl "
        >Melhores Restaurantes</h2>
        <p className=" text-sm text-[#D0C3C3] mb-5 md:text-lg  ">
            Os restaurantes mais bem avaliados pelos clientes.
        </p>
            <div className="flex flex-col gap-8 md:justify-center md:flex-row md:flex-wrap">
            {restaurants.map((item) => (
            <BestRestaurantsCard
            key={item.id}
            name={item.name}
            image={item.image}
            location={item.location}
             price={item.price}
            />
  ))}
            </div>
       </div>

       
       </section>
    )
}