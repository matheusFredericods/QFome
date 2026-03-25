// 1. Importe todas as imagens primeiro
import burgerImg from "../assets/burguer.jpg";
import dogImg from "../assets/dog.jpg";
import pizzaImg from "../assets/pizza.jpg";
import sushiImg from "../assets/sushi.jpg";
import tacoImg from "../assets/taco.jpg";
import noodleImg from "../assets/noodle.jpg";

export type Order = {
    id: number;
    name: string;
    restaurant: string;
    price: number;
    image: string;
}

export const orders: Order[] = [
    {
        id: 1,
        name: "Mega Smash",
        restaurant: "Burguer House",
        price: 49.90,
        image: burgerImg 
    },
    {
        id: 2,
        name: "Prime Dog",
        restaurant: "Master Dog",
        price: 35.00,
        image: dogImg
    },
    {
        id: 3,
        name: "Pizza de Calabresa",
        restaurant: "Pizão",
        price: 50.00,
        image: pizzaImg
    },
    {
        id: 4,
        name: "Sushi",
        restaurant: "Samurai Sushi",
        price: 60.00,
        image: sushiImg
    },
    {
        id: 5,
        name: "Taco",
        restaurant: "Taco Tuesday",
        price: 30.00,
        image: tacoImg
    },
    {
        id: 6,
        name: "Macarrão",
        restaurant: "Noodle House",
        price: 30.00,
        image: noodleImg
    },
]