type Order={
    id:number,
    name:string,
    restaurant:string,
    price:number,
    image:string
}


export const orders: Order[]=[

    {
        id:1,
        name:"Mega Smash",
        restaurant:"Burguer House",
        price:49.90,
        image:"src/assets/burguer.jpg"
    },

     {
        id:2,
        name:"Prime Dog",
        restaurant:"Master Dog",
        price:35.00,
        image:"src/assets/dog.jpg"
    },

    {
        id:3,
        name:"Pizza de Calabresa",
        restaurant:"Pizão",
        price:50.00,
        image:"src/assets/pizza.jpg"
    },
    {
        id:4,
        name:"Sushi",
        restaurant:"Samurai Sushi",
        price:60.00,
        image:"src/assets/sushi.jpg"
    },
    {
        id:5,
        name:"Taco",
        restaurant:"Taco Tuesday",
        price:30.00,
        image:"src/assets/taco.jpg"
    },
    {
        id:6,
        name:"Macarrão",
        restaurant:"Noodle House",
        price:30.00,
        image:"src/assets/noodle.jpg"
    },
]

    
