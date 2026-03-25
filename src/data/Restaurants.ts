import restauranteImg from "../assets/restaurante.jpg";
import bistroImg from "../assets/bistro.jpg";
import rangoImg from "../assets/rango.jpg";

export type Restaurant = {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
}

export const restaurants: Restaurant[] = [
    {
        id: 1,
        name: "Restaurante Sabor & Arte",
        image: restauranteImg, 
        location: "Avenida Central 3000 Campo Grande - MS",
        price: 49.90
    },
    {
        id: 2,
        name: "Bistrô Aurora",
        image: bistroImg, 
        location: "Rua das Hortênsias Campo Grande - MS",
        price: 70.00
    },
    {
        id: 3,
        name: "Rango do Zeca",
        image: rangoImg,
        location: "Travessa São Miguel Campo Grande - MS",
        price: 19.90 
    }
]