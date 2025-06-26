import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/placeholder-user.jpeg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="w-72 h-72 object-cover rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-2xl shadow-cyan-500/25"
            />

          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              LOVENEET SINGH
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6">
            B.Tech Computer Science Student | Software Engineer
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building impactful applications. Currently in my final
            year of B.Tech, eager to contribute to the tech industry with cutting-edge web technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/25"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 bg-slate-800/50"
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/iyawewe" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12 text-cyan-400 hover:bg-cyan-400/10">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/loveneet-singh" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-12 w-12 text-cyan-400 hover:bg-cyan-400/10">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:loveneet1914@outlook.com">
              <Button variant="ghost" size="icon" className="h-12 w-12 text-cyan-400 hover:bg-cyan-400/10">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
