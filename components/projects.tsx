import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  // 👈 CUSTOMIZE: Replace these projects with your actual projects
  const projects = [
    {
      title: "Water Quality Analysis", // 👈 REPLACE: Your project title
      description:
        "Developed a machine learning model using python - This machine learning model takes various physical and chemical features present in water and analyse whether the water is portable for drinking or not using various algorithms such as Random Forest Classifier, XGB classifier, hyperparameter tuning resulting in an accuracy of 80%.", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: ["Python", "Random Forest Classifier", "XGBoost", "Hyperparameter Tuning","jupyter","Scikit-learn", "Pandas"], // 👈 REPLACE: Technologies you used
      githubUrl: "https://github.com/iyawewe/waterQualityAnalysis", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "https://yourproject1.vercel.app", // 👈 REPLACE: Your live project link
    },
    {
      title: "Codefolio", // 👈 REPLACE: Your project title
      description:
        "Developed a web-based platform for programmers to share their code, experiences, and learning journeys. The platform enables users to create profiles, post code snippets, write blogs, and interact with the community through comments and likes. Built using modern web development technologies.", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: ["Next.js", "React.js","MongoB", "Tailwind"], // 👈 REPLACE: Technologies you used
      //githubUrl: "https://github.com/yourusername/project2", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "https://yourproject2.vercel.app", // 👈 REPLACE: Your live project link
    },
    {
      title: "Hotel Management System", // 👈 REPLACE: Your project title
      description:
        "Developed a Hotel Management System using Java Core and SQL to streamline front desk operations, including guest check-ins, check-outs, room reservations, and customer record management. The system featured an intuitive interface for efficient handling of data and ensured secure, scalable, and reliable database management, enhancing overall operational efficiency and customer service.", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: ["JAVA", "MySQL"], // 👈 REPLACE: Technologies you used
      githubUrl: "https://github.com/iyawewe/HotelManagementSystem", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "https://yourproject3.vercel.app", // 👈 REPLACE: Your live project link
    },
    {
      title: "Mini Compiler", // 👈 REPLACE: Your project title
      description:
        "Developed a web based online  compiler that allows user to write ,compile and execute code in C++,Java and Python. Developed using modern web development technologies", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"], // 👈 REPLACE: Technologies you used
      //githubUrl: "https://github.com/yourusername/project4", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "#", // 👈 REPLACE: Your live project link (or remove if not applicable)
    },
    {
      title: "expense Tracker- ai travel planner", // 👈 REPLACE: Your project title
      description:
        "–	Developed a web based expense tracker using modern web development technologies and MongoDB which let us manage and track our monthly expenses with Ai trip planner which let us manage our trip under a certain budget and with certain number of people.", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: ["html","css","react.js","node.js","mongoDB"], // 👈 REPLACE: Technologies you used
      githubUrl: "https://github.com/iyawewe/expenseTracker", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "#", // 👈 REPLACE: Your live project link (or remove if not applicable)
    },
    {
      title: "CLI todo list", // 👈 REPLACE: Your project title
      description:
        "Developedd a CLI todo list application with go lang which help us add ,delete and update the task", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: ["Golang"], // 👈 REPLACE: Technologies you used
      githubUrl: "https://github.com/iyawewe/toddolist_GoLang", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "#", // 👈 REPLACE: Your live project link (or remove if not applicable)
    },
    {
      title: "ChatBot", // 👈 REPLACE: Your project title
      description:
        "Developed a chat bot which takes action accourding to the given input and give voice responses and opens applications when commanded ", // 👈 REPLACE: Your project description
      image: "/placeholder.svg?height=200&width=300", // 👈 REPLACE: Add your project screenshot
      technologies: [], // 👈 REPLACE: Technologies you used
      githubUrl: "https://github.com/iyawewe/chat-bot", // 👈 REPLACE: Your GitHub repo link
      //liveUrl: "#", // 👈 REPLACE: Your live project link (or remove if not applicable)
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border-cyan-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
