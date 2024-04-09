import { useState } from "react";

import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";
import { CatPills } from "./components/CatPills";
import { VideoGridItem } from "./components/VideoGridItem";


import { categories, videos } from "./data/home";
import { SidebarProvider } from "./contexts/SidebarContext";


function App() {
  const [selectedCat, setSelectedCat] = useState(categories[0])

  return (
    <SidebarProvider>
      <div className="max-h-screen flex flex-col">
        <PageHeader /> 
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto" >
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 bg-white z-10 pb-4"> 
              <CatPills categories={categories}
              selectedCat={selectedCat} 
              onSelect={setSelectedCat}/> 
            </div>
            <div className="grid gap-4 grid-cols-2">
              {videos.map(video => (
                <VideoGridItem key={video.id} {...video} />
              ))}
              
            </div>
          </div>
        </div>
      </div>
      </SidebarProvider>
  )
}

export default App
