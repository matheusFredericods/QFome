import {OrderCard} from "./OrderCard"
import {orders} from "../data/Order"
import { useRef } from "react"

export function RepeatOrders() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) =>{
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  }

  const handleMouseUp = () =>{
    isDown.current = false;
  }

  const handleMouseLeave = () =>{
    isDown.current = false;
  }

  const handleMouseMove = (e: React.MouseEvent) =>{
    if(!isDown.current) return

    e.preventDefault()

    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.2;

    if(scrollRef.current){
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }
  }

  return (
    <section className="px-6 py-4 h-72 ">
      <h2 className="text-2xl font-bold mb-5 md:text-3xl "
      >Mais Pedidos
      </h2>

      <div 
       ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      className="flex gap-4 overflow-x-auto  no-scrollbar cursor-grab active:cursor-grabbing select-none ">
        {orders.map(order =>(
          <OrderCard 
            key={order.id}
            name={order.name}
            restaurant={order.restaurant}
            price={order.price}
            image={order.image}
          />
        ))}
      </div>
    </section>
  )
}