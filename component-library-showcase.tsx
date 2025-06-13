"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  Box,
  Code,
  FileText,
  Gauge,
  GitBranch,
  WebhookIcon as Hook,
  Layers,
  Palette,
  Play,
  Scale,
  User,
  FileCode,
  CheckCircle,
} from "lucide-react"

export default function ComponentLibraryShowcase() {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [activeIcon, setActiveIcon] = useState(0)
  const [animatePerformance, setAnimatePerformance] = useState(false)

  const handleMouseEnter = (id: string) => {
    setIsHovered(id)
    if (id === "performance") {
      setAnimatePerformance(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  // Animate progress bars when performance card is hovered
  useEffect(() => {
    if (animatePerformance) {
      setProgress(0)
      const timer = setTimeout(() => {
        setProgress(100)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [animatePerformance])

  // Rotate through icons
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 8)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto p-4 bg-gray-950 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {/* Overview Card */}
        <Card
          className={`col-span-1 md:col-span-2 rounded-xl bg-gradient-to-br from-orange-600 to-red-700 text-white transition-all duration-300 ${isHovered === "overview" ? "scale-[0.98]" : ""}`}
          onMouseEnter={() => handleMouseEnter("overview")}
          onMouseLeave={handleMouseLeave}
        >
          <CardHeader>
            <Badge variant="outline" className="w-fit border-white/20 bg-white/10 text-white mb-2">
              v1.0.0
            </Badge>
            <CardTitle className="text-3xl font-bold">Component Library</CardTitle>
            <CardDescription className="text-white/80 text-lg">
              A modern, accessible component library for building beautiful interfaces
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white/10 text-white">
                React
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white">
                Tailwind CSS
              </Badge>
              <Badge variant="outline" className="bg-white/10 text-white">
                Accessible
              </Badge>
            </div>
            <p className="text-white/80">
              Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open
              Source.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" className="bg-white text-red-700 hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Components Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "components" ? "scale-[0.98] shadow-lg shadow-primary/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("components")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "components" ? "linear-gradient(to bottom right, #1a1a2e, #16213e)" : "",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Box className={`h-5 w-5 ${isHovered === "components" ? "text-primary animate-pulse" : ""}`} /> Components
            </CardTitle>
            <CardDescription>UI building blocks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 relative z-10">
            <div className="grid grid-cols-3 gap-2">
              {["Button", "Card", "Modal", "Form", "Table", "Menu"].map((item, index) => (
                <div
                  key={item}
                  className={`h-8 rounded flex items-center justify-center text-xs transition-all duration-300 ${
                    isHovered === "components"
                      ? `animate-fadeIn bg-gradient-to-br from-primary/30 to-primary/10 shadow-sm`
                      : "bg-primary/20"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-primary">50+</span> accessible, customizable components
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 transition-all duration-1000 ease-in-out ${
                isHovered === "components" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Blocks Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "blocks" ? "scale-[0.98] shadow-lg shadow-blue-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("blocks")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "blocks" ? "linear-gradient(to bottom right, #0f172a, #1e293b)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className={`h-5 w-5 ${isHovered === "blocks" ? "text-blue-500 animate-bounce" : ""}`} /> Blocks
            </CardTitle>
            <CardDescription>Pre-built section templates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 relative">
            <div
              className={`space-y-2 transition-all duration-500 ${
                isHovered === "blocks" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-90"
              }`}
            >
              <div
                className={`h-4 w-3/4 rounded transition-all duration-300 ${
                  isHovered === "blocks" ? "bg-blue-500/40" : "bg-primary/20"
                }`}
              ></div>
              <div
                className={`h-3 w-full rounded transition-all duration-500 delay-100 ${
                  isHovered === "blocks" ? "bg-blue-500/30" : "bg-primary/10"
                }`}
              ></div>
              <div
                className={`h-3 w-5/6 rounded transition-all duration-500 delay-200 ${
                  isHovered === "blocks" ? "bg-blue-500/30" : "bg-primary/10"
                }`}
              ></div>
              <div
                className={`h-8 w-1/3 rounded transition-all duration-500 delay-300 ${
                  isHovered === "blocks" ? "bg-blue-500/40" : "bg-primary/20"
                }`}
              ></div>
            </div>
            <div
              className={`flex justify-between mt-2 transition-all duration-500 ${
                isHovered === "blocks" ? "translate-x-0 opacity-100" : "translate-x-4 opacity-90"
              }`}
            >
              <div
                className={`h-12 w-[30%] rounded transition-all duration-500 ${
                  isHovered === "blocks" ? "bg-blue-500/40" : "bg-primary/20"
                }`}
              ></div>
              <div
                className={`h-12 w-[65%] rounded transition-all duration-500 delay-100 ${
                  isHovered === "blocks" ? "bg-blue-500/30" : "bg-primary/10"
                }`}
              ></div>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className={`font-bold ${isHovered === "blocks" ? "text-blue-500" : ""}`}>20+</span> ready-to-use
              section blocks
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "blocks" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Icons Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "icons" ? "scale-[0.98] shadow-lg shadow-purple-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("icons")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "icons" ? "linear-gradient(to bottom right, #2d1b69, #1e1033)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode className={`h-5 w-5 ${isHovered === "icons" ? "text-purple-500" : ""}`} /> Icons
            </CardTitle>
            <CardDescription>Customizable icon library</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid grid-cols-4 gap-3">
              {[Box, Code, FileText, Gauge, GitBranch, Layers, Palette, Play].map((Icon, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center transition-all duration-300 ${
                    isHovered === "icons" && activeIcon === index
                      ? "scale-125 text-purple-400"
                      : isHovered === "icons"
                        ? "text-purple-300/70"
                        : ""
                  }`}
                >
                  <Icon className="h-6 w-6 mx-auto" />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <span className={`font-bold ${isHovered === "icons" ? "text-purple-500" : ""}`}>300+</span> vector icons
              in multiple styles
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-purple-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "icons" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Hooks Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "hooks" ? "scale-[0.98] shadow-lg shadow-green-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("hooks")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "hooks" ? "linear-gradient(to bottom right, #0f2922, #1a3d35)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hook className={`h-5 w-5 ${isHovered === "hooks" ? "text-green-500 animate-spin-slow" : ""}`} /> Hooks
            </CardTitle>
            <CardDescription>Reusable React logic</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-2 font-mono text-xs">
              {["useMediaQuery()", "useLocalStorage()", "useDebounce()"].map((hook, index) => (
                <div
                  key={hook}
                  className={`bg-black/90 p-2 rounded-md transition-all duration-500 ${
                    isHovered === "hooks"
                      ? "text-green-400 translate-x-0 opacity-100 shadow-md shadow-green-500/10"
                      : "text-green-400/70 -translate-x-2 opacity-90"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <p>{hook}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              <span className={`font-bold ${isHovered === "hooks" ? "text-green-500" : ""}`}>25+</span> custom React
              hooks
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "hooks" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Theme Generator Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "theme" ? "scale-[0.98] shadow-lg shadow-cyan-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("theme")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "theme" ? "linear-gradient(to bottom right, #042f2e, #134e4a)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className={`h-5 w-5 ${isHovered === "theme" ? "text-cyan-500" : ""}`} /> Theme Generator
            </CardTitle>
            <CardDescription>Create custom design systems</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 relative">
            <div className="flex gap-2">
              {["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500"].map((color, index) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full ${color} transition-all duration-300 ${
                    isHovered === "theme" ? "animate-pulse-slow shadow-lg shadow-cyan-500/20" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                "bg-gray-200 dark:bg-gray-800",
                "bg-gray-300 dark:bg-gray-700",
                "bg-gray-100 dark:bg-gray-900",
                "bg-gray-400 dark:bg-gray-600",
              ].map((color, index) => (
                <div
                  key={color}
                  className={`h-6 rounded ${color} transition-all duration-500 ${
                    isHovered === "theme" ? "scale-y-110 shadow-sm" : ""
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Generate and export{" "}
              <span className={`font-bold ${isHovered === "theme" ? "text-cyan-500" : ""}`}>custom themes</span>
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "theme" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Resume Generator Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "resume" ? "scale-[0.98] shadow-lg shadow-amber-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("resume")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "resume" ? "linear-gradient(to bottom right, #422006, #713f12)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className={`h-5 w-5 ${isHovered === "resume" ? "text-amber-500" : ""}`} /> Resume Generator
            </CardTitle>
            <CardDescription>Create professional resumes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 relative">
            <div
              className={`border rounded p-2 space-y-2 transition-all duration-500 ${
                isHovered === "resume" ? "border-amber-500/30 shadow-md" : ""
              }`}
            >
              <div
                className={`h-4 w-1/2 rounded transition-all duration-300 ${
                  isHovered === "resume" ? "bg-amber-500/40" : "bg-primary/20"
                }`}
              ></div>
              <div
                className={`h-3 w-3/4 rounded transition-all duration-300 delay-100 ${
                  isHovered === "resume" ? "bg-amber-500/30" : "bg-primary/10"
                }`}
              ></div>
              <div
                className={`h-3 w-full rounded transition-all duration-300 delay-200 ${
                  isHovered === "resume" ? "bg-amber-500/30" : "bg-primary/10"
                }`}
              ></div>
              <div
                className={`h-3 w-2/3 rounded transition-all duration-300 delay-300 ${
                  isHovered === "resume" ? "bg-amber-500/30" : "bg-primary/10"
                }`}
              ></div>
            </div>
            <div className="flex justify-between">
              <Button
                size="sm"
                variant="outline"
                className={`text-xs transition-all duration-300 ${
                  isHovered === "resume" ? "border-amber-500/50 text-amber-500" : ""
                }`}
              >
                Preview
              </Button>
              <Button
                size="sm"
                className={`text-xs transition-all duration-300 ${
                  isHovered === "resume" ? "bg-amber-500 hover:bg-amber-600" : ""
                }`}
              >
                Export PDF
              </Button>
            </div>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-amber-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "resume" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* README Generator Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "readme" ? "scale-[0.98] shadow-lg shadow-indigo-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("readme")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "readme" ? "linear-gradient(to bottom right, #1e1b4b, #312e81)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className={`h-5 w-5 ${isHovered === "readme" ? "text-indigo-500" : ""}`} /> README Generator
            </CardTitle>
            <CardDescription>GitHub documentation made easy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 relative">
            <div
              className={`bg-black/90 p-2 rounded-md text-xs font-mono transition-all duration-500 ${
                isHovered === "readme" ? "shadow-md shadow-indigo-500/20" : ""
              }`}
            >
              <p className={`${isHovered === "readme" ? "text-indigo-400" : "text-white"}`}># Project Title</p>
              <p
                className={`transition-all duration-300 delay-100 ${
                  isHovered === "readme" ? "text-indigo-300" : "text-white"
                }`}
              >
                ## Features
              </p>
              <p
                className={`transition-all duration-300 delay-200 ${
                  isHovered === "readme" ? "text-indigo-300" : "text-white"
                }`}
              >
                - Feature one
              </p>
              <p
                className={`transition-all duration-300 delay-300 ${
                  isHovered === "readme" ? "text-indigo-300" : "text-white"
                }`}
              >
                - Feature two
              </p>
              <p
                className={`transition-all duration-300 delay-400 ${
                  isHovered === "readme" ? "text-indigo-300" : "text-white"
                }`}
              >
                ## Installation
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Generate{" "}
              <span className={`font-bold ${isHovered === "readme" ? "text-indigo-500" : ""}`}>
                professional README files
              </span>
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "readme" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Video Tutorials Card */}
        <Card
          className={`col-span-1 md:col-span-2 row-span-1 rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "video" ? "scale-[0.98] shadow-lg shadow-rose-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("video")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "video" ? "linear-gradient(to bottom right, #4c0519, #881337)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className={`h-5 w-5 ${isHovered === "video" ? "text-rose-500" : ""}`} /> Video Tutorials
            </CardTitle>
            <CardDescription>Learn how to use the library</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative">
            <div
              className={`aspect-video w-full rounded-md overflow-hidden transition-all duration-500 ${
                isHovered === "video" ? "shadow-lg shadow-rose-500/20 scale-[1.02]" : "scale-100"
              }`}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0"
                title="Component Library Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className={`h-4 w-4 ${isHovered === "video" ? "text-rose-500" : ""}`} />
                <span className={`text-sm font-medium ${isHovered === "video" ? "text-rose-300" : ""}`}>
                  Getting Started
                </span>
              </div>
              <Badge
                variant="outline"
                className={`transition-all duration-300 ${
                  isHovered === "video" ? "bg-rose-500/20 text-rose-300 border-rose-500/30" : ""
                }`}
              >
                10:42
              </Badge>
            </div>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-rose-500 to-rose-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "video" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Performance Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "performance" ? "scale-[0.98] shadow-lg shadow-emerald-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("performance")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "performance" ? "linear-gradient(to bottom right, #064e3b, #065f46)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge
                className={`h-5 w-5 transition-transform duration-500 ${
                  isHovered === "performance" ? "text-emerald-500 rotate-180" : ""
                }`}
              />{" "}
              Performance
            </CardTitle>
            <CardDescription>Optimized for speed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 relative">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Bundle Size</span>
                <span className={isHovered === "performance" ? "text-emerald-500 font-bold" : ""}>12kb</span>
              </div>
              <Progress
                value={isHovered === "performance" ? 15 : 0}
                className={`h-2 transition-all duration-1000 ${isHovered === "performance" ? "bg-emerald-950" : ""}`}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Load Time</span>
                <span className={isHovered === "performance" ? "text-emerald-500 font-bold" : ""}>0.3s</span>
              </div>
              <Progress
                value={isHovered === "performance" ? 30 : 0}
                className={`h-2 transition-all duration-1000 delay-200 ${
                  isHovered === "performance" ? "bg-emerald-950" : ""
                }`}
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Lighthouse Score</span>
                <span className={isHovered === "performance" ? "text-emerald-500 font-bold" : ""}>98/100</span>
              </div>
              <Progress
                value={isHovered === "performance" ? 98 : 0}
                className={`h-2 transition-all duration-1000 delay-400 ${
                  isHovered === "performance" ? "bg-emerald-950" : ""
                }`}
              />
            </div>
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "performance" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>

        {/* Scalability Card */}
        <Card
          className={`rounded-xl overflow-hidden transition-all duration-500 ${
            isHovered === "scalability" ? "scale-[0.98] shadow-lg shadow-fuchsia-500/20" : ""
          }`}
          onMouseEnter={() => handleMouseEnter("scalability")}
          onMouseLeave={handleMouseLeave}
          style={{
            background: isHovered === "scalability" ? "linear-gradient(to bottom right, #4a044e, #701a75)" : "",
          }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className={`h-5 w-5 ${isHovered === "scalability" ? "text-fuchsia-500" : ""}`} /> Scalability
            </CardTitle>
            <CardDescription>Built for growth</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 relative">
            {["Tree-shakable exports", "Modular architecture", "Extensible API", "Enterprise ready"].map(
              (feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    isHovered === "scalability" ? "translate-x-0 opacity-100" : "translate-x-2 opacity-90"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle
                    className={`w-4 h-4 transition-all duration-300 ${
                      isHovered === "scalability" ? "text-fuchsia-500 scale-110" : "text-green-500"
                    }`}
                  />
                  <span className="text-sm">{feature}</span>
                </div>
              ),
            )}
            <div
              className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-fuchsia-500 to-fuchsia-500/50 transition-all duration-1000 ease-in-out ${
                isHovered === "scalability" ? "w-full" : "w-0"
              }`}
            ></div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
