import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Portfolio</h3>
              <p className="text-slate-400">
                B.Tech Computer Science Student passionate about creating innovative solutions and building impactful
                applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2">
                <p>
                  <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </p>
                <p>
                  <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Skills
                  </a>
                </p>
                <p>
                  <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Projects
                  </a>
                </p>
                <p>
                  <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-cyan-400">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-cyan-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-cyan-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Your Name © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
