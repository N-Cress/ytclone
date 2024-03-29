import { Menu, Upload, Bell, User, Mic } from "lucide-react"
import logo from "../assets/Logo.png"
import { Button } from "../components/Button";

export function PageHeader() {
    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
       <div className=" flex gap-2 items-center flex-shrink-0">
        <Button variant="ghost" size="icon" > 
        <Menu />
        </Button>
        <a href="">
          <img src={logo} alt="" className="h-6"/>
        </a>
        </div>
        <div>
        <form className="flex gap-4 flex-grow justify-center" action="">
            <div className="flex flex-grow">

            </div>
            <Button size="icon">
                <Mic /> 
            </Button>
        </form>    
        </div> 
        <div className="flex flex-shrink-0 md:gap-2">
            <Button size="icon" variant="ghost">
                <Upload /> 
            </Button>
            <Button size="icon" variant="ghost">
                <Bell /> 
            </Button>
            <Button size="icon" variant="ghost">
                <User /> 
            </Button>
        </div>
        
    </div>
}