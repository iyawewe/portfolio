import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Graphic Era Hill University ,Haldwani",
      duration: "2022 - 2026",
      cgpa: "7/10",
      description:
        "Relevant coursework: Data Structures, Algorithms, Database Management, Software Engineering, Machine Learning, Web Development",
    },
    {
      degree: "Higher Secondary (12th)",
      field: "Science (PCM)",
      institution: "St. Theresa Sr. Sec. School,kathgodam",
      duration: "2008 - 2022",
      cgpa: "72%",
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical skills development",
    },
  ]

  const achievements = [
    "24-hour Hackathon Winner (2023-2024)",
    "Winner of Gehu football league x2",
    "winner of science exhibition",
    "Active member of college football team",
    "Runner up in spradha nation level football tournament",
  ]

  const certifications = [
    "GoLang - Udemy",
    "AWS Cloud Practitioner",
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Education & Achievements</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 mr-2 text-cyan-400" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg text-white">{edu.degree}</h4>
                          <p className="text-cyan-400 font-medium">{edu.field}</p>
                        </div>
                        <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300">
                          {edu.cgpa}
                        </Badge>
                      </CardTitle>
                      <div className="text-slate-300">
                        <p>{edu.institution}</p>
                        <p>{edu.duration}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-400">{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="space-y-8">
              {/* Achievements */}
              <div>
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 mr-2 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Achievements</h3>
                </div>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="text-sm flex items-start text-slate-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 mr-2 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      {certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="mr-2 mb-2 border-slate-600 text-slate-300">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
