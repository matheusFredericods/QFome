import { BenefitsSection } from "./components/BenefitsSection";
import { BestRestaurants } from "./components/BestRestaurants";
import { Employee } from "./components/Employee";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { RepeatOrders } from "./components/RepeatOrders";
import {Home} from "./pages/Home"


 export function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <RepeatOrders/>
      <BestRestaurants/>
     <Employee/>
     <BenefitsSection/>
     <Footer/>
    </div>
  )
  

}


