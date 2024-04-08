import { useState } from "react";

import { PageHeader } from "./layouts/PageHeader";
import { CatPills } from "./components/CatPills";

import { categories } from "./data/home";

function App() {
  const [selectedCat, setSelectedCat] = useState(categories[0])

  return (
    <>
      <div className="max-h-screen flex flex-col">
        <PageHeader /> 
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto" >
          <div> Sidebar</div>
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4"> 
              <CatPills categories={categories}
              selectedCat={selectedCat} 
              onSelect={setSelectedCat}/> 
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
