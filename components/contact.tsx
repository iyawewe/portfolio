"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-slate-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-slate-300">lilfootballer14@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-slate-300">+91 6395787796</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-slate-300">Uttarakhand, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xeokpnkk"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    />
                  </div>

                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />

                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
