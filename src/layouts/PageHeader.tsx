import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react"
import logo from "../assets/Logo.png"
import { Button } from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";


export function PageHeader() {
    const [showSearch, setShowSearch] = useState(false);

    return <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showSearch} />
        <form className={`md:flex  gap-4 flex-grow justify-center ${showSearch ? "flex" : "hidden md:flex"}`}>
            <Button onClick={() => setShowSearch(false)} className={`hover:bg-gray-300 flex-shrink-0 ${showSearch ? "flex" : "hidden"}`} size="icon" variant="ghost">
                <ArrowLeft /> 
            </Button>
            <div className="flex flex-grow max-w-[600px] ">
                <input type="search" placeholder="Search" className=" w-full pl-4 rounded-l-full border border-secondary-border shadow-inner shadow-secondary text-lg focus:border-blue-500 outline-none"/>
                <Button className="rounded-r-full py-2 px-4 border-secondary-border border border-l-0 flex-shrink-0 hover:bg-gray-300">
                    <Search /> 
                </Button>
            </div>
            <Button className="hover:bg-gray-300" size="icon">
                <Mic /> 
            </Button>
        </form>    

        <div className={`flex flex-shrink-0 md:gap-2 ${showSearch ? "hidden" : "flex"}`}>
            <Button onClick={() => setShowSearch(true)} size="icon" variant="ghost" className="md:hidden">
                <Search />
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
                <Mic />
            </Button>
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

type PageHeaderFirstSectionProps = {
    hidden?: boolean
}

export function PageHeaderFirstSection({ hidden = false } : PageHeaderFirstSectionProps) {
    const { toggle } = useSidebarContext()

    return <div className={`gap-4 items-center flex-shrink-0 ${hidden ? "hidden" : "flex"}`}>
    <Button onClick={toggle} variant="ghost" size="icon" > 
    <Menu />
    </Button>
    <a href="">
      <img src={logo} alt="" className="h-6"/>
    </a>
    </div>
}