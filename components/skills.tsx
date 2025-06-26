import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "C++", level: 70 },
        { name: "GoLang", level: 70 },
        { name: "JavaScript", level: 50 },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 90 },
        // { name: "React.js", level: 40 },
        // { name: "Node.js", level: 30 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Git/GitHub", level: 40 },
        { name: "AWS", level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-slate-700" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
