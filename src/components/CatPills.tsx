import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";


type CatPillProps = {
    categories: string[]
    selectedCat: string
    onSelect: (category: string) => void
}

const   TRANSLATE_VALUE = 200;


export function CatPills({ categories, selectedCat, onSelect } : CatPillProps) {
    const [isLeftVisible, setIsLeftVisible] = useState(true)
    const [isRightVisible, setIsRightVisible] = useState(true)
    const [translate, setTranslate] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)   

    useEffect(()  => {
        if (containerRef.current == null) return

        const observer = new ResizeObserver(entries => {
            const container = entries[0]?.target
            if (container == null) return

            setIsLeftVisible(translate > 0) 
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth)
        })

        observer.observe(containerRef.current)
        
        return() => {
            observer.disconnect()
        }
    }, [categories, translate])

    return (
        

    <div ref={containerRef} className="overflow-x-hidden relative">
        <div 
        style={{ transform: `translateX(-${translate}px)`}}className="flex whitespace-nowrap gap-3 tranistion-transform w-[max-content]">
            {categories.map(category => (
                <Button key={category} 
                onClick={() => onSelect(category)}
                variant={selectedCat === category ? "dark" : "default"}
                 className="py-1 px-3 rounded-lg whitespace-nowrap"> 
                {category} 
                </Button>
             
            ))}
            
        </div>
        { isLeftVisible && (
             <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
             <Button variant="ghost" size="icon" className="h-full aspect-square w-auto p-1.5"
                onClick={() => {
                    setTranslate(translate => {
                        const newTranslate = translate - TRANSLATE_VALUE
                        if (newTranslate <= 0) return 0
                        return newTranslate
                    })
                }}
                >
                 <ChevronLeft />
             </Button>
         </div>
        )
        }
         { isRightVisible && (
             <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
             <Button 
             onClick={() => {
                setTranslate(translate => {
                    if (containerRef.current == null) {
                        return translate
                    }
                    const newTranslate = translate + TRANSLATE_VALUE
                    const edge = containerRef.current.scrollWidth
                    const width = containerRef.current.clientWidth
                    if (newTranslate + width >= edge) { 
                        return edge - width
                    }
                    return newTranslate
                })
            }}
             variant="ghost" size="icon" className="h-full aspect-square w-auto p-1.5">
                 <ChevronRight/>
             </Button>
         </div>
        )
        }
    </div>
    )
}