"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-700" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Portfolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
