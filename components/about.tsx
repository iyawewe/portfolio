import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "Love tackling complex challenges with clean, efficient code",
    },
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Enjoy collaborating and contributing to team success",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality results on time",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">My Journey</h3>
              {/* 👈 CUSTOMIZE: Replace with your actual story */}
              <p className="text-slate-300 mb-4">
                I'm a final-year B.Tech Computer Science student with a passion for technology and innovation.
                Throughout my academic journey, I've developed strong programming skills and worked on various projects
                that have shaped my understanding of software development.
              </p>
              <p className="text-slate-300 mb-4">
                My interests span across web development, mobile applications, and emerging technologies. I believe in
                continuous learning and staying updated with the latest industry trends.
              </p>
              <p className="text-slate-300">
                I'm actively seeking opportunities to apply my skills in a professional environment and contribute to
                meaningful projects that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="text-center p-4 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <CardContent className="pt-4">
                    <highlight.icon className="h-8 w-8 mx-auto mb-2 text-cyan-400" />
                    <h4 className="font-semibold mb-2 text-white">{highlight.title}</h4>
                    <p className="text-sm text-slate-400">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
