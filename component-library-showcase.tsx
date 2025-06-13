"use client"

import { useState, useEffect } from "react"
import { motion, Variants } from "framer-motion"
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
  const [animatePerformance, setAnimatePerformance] = useState(false)

  const cardVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
         },
    }

  return (
    <div className="container mx-auto p-4 bg-gray-950 min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Overview Card */}
        <motion.div
          className="col-span-1 md:col-span-2"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <Card className="rounded-2xl bg-gradient-to-br from-orange-600 to-red-700 text-white h-full flex flex-col">
            <CardHeader>
              <Badge variant="outline" className="w-fit border-white/20 bg-white/10 text-white mb-2">
                v1.0.0
              </Badge>
              <CardTitle className="text-3xl font-bold">Component Library</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                A modern, accessible component library for building beautiful interfaces
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
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
        </motion.div>

        {/* Components Card */}
        <motion.div variants={cardVariants} initial="initial" whileHover="hover">
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Box className="h-5 w-5 text-primary" /> Components
              </CardTitle>
              <CardDescription>UI building blocks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {["Button", "Card", "Modal", "Form", "Table", "Menu"].map((item) => (
                  <div key={item} className="h-8 rounded-md flex items-center justify-center text-xs bg-primary/20 text-primary-foreground">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">50+</span> accessible, customizable components
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Blocks Card */}
        <motion.div variants={cardVariants} initial="initial" whileHover="hover">
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-blue-500" /> Blocks
              </CardTitle>
              <CardDescription>Pre-built section templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded-md bg-blue-500/20"></div>
                <div className="h-3 w-full rounded-md bg-blue-500/10"></div>
                <div className="h-3 w-5/6 rounded-md bg-blue-500/10"></div>
                <div className="h-8 w-1/3 rounded-md bg-blue-500/20"></div>
              </div>
              <p className="text-sm text-muted-foreground pt-2">
                <span className="font-bold text-blue-500">10+</span> responsive blocks
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Theming Card */}
        <motion.div variants={cardVariants} initial="initial" whileHover="hover">
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-500" /> Theming
              </CardTitle>
              <CardDescription>Customizable design system</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center space-x-2 pt-6">
              <motion.div className="h-12 w-12 rounded-full bg-purple-500/20" whileHover={{ scale: 1.2, backgroundColor: "rgba(168, 85, 247, 0.4)" }}></motion.div>
              <motion.div className="h-12 w-12 rounded-full bg-purple-500/20" whileHover={{ scale: 1.2, backgroundColor: "rgba(168, 85, 247, 0.4)" }} transition={{ delay: 0.1 }}></motion.div>
              <motion.div className="h-12 w-12 rounded-full bg-purple-500/20" whileHover={{ scale: 1.2, backgroundColor: "rgba(168, 85, 247, 0.4)" }} transition={{ delay: 0.2 }}></motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Card */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
          onHoverStart={() => setAnimatePerformance(true)}
          onHoverEnd={() => setAnimatePerformance(false)}
        >
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-green-500" /> Performance
              </CardTitle>
              <CardDescription>Optimized for speed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm w-24">Bundle Size</span>
                <div className="w-full bg-green-500/20 rounded-full h-2.5">
                  <motion.div className="bg-green-500 h-2.5 rounded-full" style={{ width: animatePerformance ? "80%" : "0%" }} transition={{ duration: 0.5 }}></motion.div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-24">Load Time</span>
                 <div className="w-full bg-green-500/20 rounded-full h-2.5">
                  <motion.div className="bg-green-500 h-2.5 rounded-full" style={{ width: animatePerformance ? "95%" : "0%" }} transition={{ duration: 0.5, delay: 0.1 }}></motion.div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-24">Render Time</span>
                 <div className="w-full bg-green-500/20 rounded-full h-2.5">
                  <motion.div className="bg-green-500 h-2.5 rounded-full" style={{ width: animatePerformance ? "90%" : "0%" }} transition={{ duration: 0.5, delay: 0.2 }}></motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Documentation Card */}
        <motion.div variants={cardVariants} initial="initial" whileHover="hover">
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-yellow-500" /> Documentation
              </CardTitle>
              <CardDescription>Comprehensive guides</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center pt-6">
              <FileCode className="h-16 w-16 text-yellow-500/30" />
            </CardContent>
          </Card>
        </motion.div>

        {/* Code Integration Card */}
        <motion.div className="col-span-1 md:col-span-2" variants={cardVariants} initial="initial" whileHover="hover">
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-gray-400" /> Code Integration
              </CardTitle>
              <CardDescription>Easy to use in any project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black/50 rounded-md p-4 font-mono text-sm text-gray-400 overflow-x-auto">
                <pre>
                  <code>
                    <span className="text-purple-400">import</span>{" "}
                    <span className="text-yellow-400">{`{ Button }`}</span> <span className="text-purple-400">from</span>{" "}
                    <span className="text-green-400">"@/components/ui/button"</span>;
                    {`

`}
                    <span className="text-blue-400">export default function</span>{" "}
                    <span className="text-yellow-400">MyComponent</span>() {`{`}
                    {`
  `}<span className="text-purple-400">return</span> {`<Button>Click me</Button>`};
                    {`
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community Card */}
        <motion.div variants={cardVariants} initial="initial" whileHover="hover">
          <Card className="rounded-2xl overflow-hidden h-full bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-pink-500" /> Community
              </CardTitle>
              <CardDescription>Join the conversation</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-around items-center pt-6">
              <motion.div whileHover={{ scale: 1.2, rotate: -10 }}><GitBranch className="h-8 w-8 text-pink-500/50" /></motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }}><Hook className="h-8 w-8 text-pink-500/50" /></motion.div>
              <motion.div whileHover={{ scale: 1.2 }}><CheckCircle className="h-8 w-8 text-pink-500/50" /></motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action Card */}
        <motion.div
          className="col-span-1 md:col-span-2"
          variants={cardVariants}
          initial="initial"
          whileHover="hover"
        >
          <Card className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-white h-full flex flex-col justify-center items-center text-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Ready to build?</CardTitle>
              <CardDescription className="text-white/80">Start using the library today.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="secondary" className="bg-white text-purple-700 hover:bg-white/90">
                Explore Components <Play className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
