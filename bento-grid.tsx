"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart, Calendar, FileText, Image, Mail, Music, Settings, Star, Users, Video, Zap } from "lucide-react"

type GridItem = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  className: string
  color: string
  stats?: { label: string; value: string }[]
  buttonText?: string
  content?: React.ReactNode
}

export default function BentoGrid() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const handleMouseEnter = (id: string) => {
    setIsHovered(id)
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  const gridItems: GridItem[] = [
    {
      id: "card-1",
      title: "Welcome to Our Component Library",
      description: "Crafting exceptional digital experiences with passion and precision.",
      icon: null,
      className: "col-span-2 p-8 bg-red-500 rounded-2xl flex items-center justify-center text-center",
      color: "bg-red-500",
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Welcome to Our Component Library
          </h2>
          <p className="text-red-100 text-lg">
            Crafting exceptional digital experiences with passion and precision.
          </p>
          <button className="bg-white text-red-600 font-medium px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      )
    },
    {
      id: "card-2",
      title: "Media Gallery",
      description: "Your latest uploads",
      icon: <Image className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      buttonText: "View All"
    },
    {
      id: "card-3",
      title: "Upcoming Events",
      description: "Next on your calendar",
      icon: <Calendar className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      buttonText: "View Calendar"
    },
    {
      id: "card-4",
      title: "Recent Documents",
      description: "Recently opened files",
      icon: <FileText className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
      buttonText: "Open"
    },
    {
      id: "card-5",
      title: "Team Members",
      description: "Active collaborators",
      icon: <Users className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-rose-500 to-pink-600",
      buttonText: "Message All"
    },
    {
      id: "card-6",
      title: "Quick Actions",
      description: "Common tasks",
      icon: <Zap className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-indigo-500 to-blue-600",
      buttonText: "Get Started"
    },
    {
      id: "card-7",
      title: "Settings",
      description: "Account preferences",
      icon: <Settings className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-gray-600 to-gray-800",
      buttonText: "Configure"
    },
    {
      id: "card-8",
      title: "Favorites",
      description: "Your saved items",
      icon: <Star className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-yellow-500 to-amber-500",
      buttonText: "View All"
    },
    {
      id: "card-9",
      title: "Messages",
      description: "Unread conversations",
      icon: <Mail className="w-5 h-5" />,
      className: "aspect-[1/1]",
      color: "bg-gradient-to-br from-blue-400 to-cyan-500",
      buttonText: "View Inbox"
    },
    {
      id: "card-10",
      title: "Media Player",
      description: "Now playing",
      icon: <Music className="w-6 h-6" />,
      className: "col-span-2 row-span-1 aspect-auto",
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
      buttonText: "Play All"
    }
  ]

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Welcome back! Here's what's happening today.</p>
        
        <div className="grid grid-cols-4 gap-4">
          {gridItems.map((item) => (
            <Card
              key={item.id}
              className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${item.className} ${
                isHovered === item.id ? "scale-[0.98]" : ""
              }`}
              style={{ background: item.color }}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.content ? (
                item.content
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        {item.icon}
                      </div>
                      {item.buttonText && (
                        <button className="text-xs bg-white/20 hover:bg-white/30 text-black px-3 py-1 rounded-full transition-colors">
                          {item.buttonText}
                        </button>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-1">{item.title}</h3>
                    <p className="text-black/80 text-sm mb-4">{item.description}</p>
                    
                    {item.stats && (
                      <div className="mt-auto grid grid-cols-3 gap-2">
                        {item.stats.map((stat, index) => (
                          <div key={index} className="bg-white/30 p-2 rounded-lg text-center">
                            <div className="text-black font-bold text-sm">{stat.value}</div>
                            <div className="text-black/70 text-xs">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
