"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export default function BentoGrid() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setIsHovered(id)
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  return (
    <div className="container mx-auto p-4 bg-black min-h-screen">
      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* First row */}
        <Card
          className={`col-span-2 aspect-[2/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-1" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-1")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-2" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-2")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-3" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-3")}
          onMouseLeave={handleMouseLeave}
        />

        {/* Second row */}
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-4" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-4")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-5" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-5")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-6" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-6")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-7" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-7")}
          onMouseLeave={handleMouseLeave}
        />

        {/* Third row */}
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-8" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-8")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-9" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-9")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-2 row-span-2 aspect-auto rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-10" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-10")}
          onMouseLeave={handleMouseLeave}
        />

        {/* Fourth row */}
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-11" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-11")}
          onMouseLeave={handleMouseLeave}
        />
        <Card
          className={`col-span-1 aspect-[1/1] rounded-xl bg-[#e84c2b] transition-all duration-300 ${isHovered === "card-12" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("card-12")}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  )
}
