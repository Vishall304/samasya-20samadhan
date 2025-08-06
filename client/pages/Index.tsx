import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, MessageSquare, Users, Clock, Star, Brain, Heart, GraduationCap, Globe, Dumbbell, Smile, Coffee } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    urgency: "",
    contactEmail: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Problem submitted:", formData);
    // Show success message or redirect
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const categories = [
    "Mental Health",
    "Physical Wellness", 
    "Relationships",
    "Career & Student Life",
    "Other Issues"
  ];

  const stats = [
    { number: "500+", label: "Problems Solved" },
    { number: "100+", label: "Happy People" },
    { number: "100%", label: "Safe & Private" },
    { number: "24h", label: "Quick Response" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            {/* Friendly Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 border border-purple-200 mb-8">
              <Smile className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Safe, Anonymous & Caring</span>
            </div>
            
            {/* Main Heading - More Casual */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Hey, we get it.{" "}
              <span className="text-purple-600">Every problem</span>{" "}
              has a solution
            </h1>

            {/* Quick Input Prompt */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200 p-8 shadow-lg">
                <p className="text-gray-600 mb-4 text-center">
                  What's on your mind today?
                </p>
                <div className="flex flex-col gap-4">
                  <textarea
                    placeholder="Type anything... stress, family issues, work problems, or whatever's bothering you. We're here to listen."
                    className="w-full h-24 px-4 py-3 rounded-xl border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none resize-none text-gray-700 placeholder-gray-400"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3"
                      onClick={() => {
                        // Scroll to full form
                        document.getElementById('submit-problem')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Help With This
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-300 text-purple-600 hover:bg-purple-50 rounded-xl py-3"
                      asChild
                    >
                      <Link to="/mentor">Browse Mentors</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mb-16">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>100% Anonymous</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>No Judgment</span>
                </div>
              </div>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/60 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Categories - Casual */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              What's on your mind?
            </h2>
            <p className="text-lg text-gray-600">
              Whatever it is, we've probably helped someone with something similar
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Mental Health",
                description: "Stress, anxiety, feeling overwhelmed, or just need someone to listen",
                color: "bg-purple-100 text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                icon: Dumbbell,
                title: "Physical Wellness",
                description: "Sleep problems, energy issues, body pain, or health concerns",
                color: "bg-green-100 text-green-600",
                borderColor: "border-green-200"
              },
              {
                icon: Heart,
                title: "Relationships",
                description: "Family drama, breakups, friendship issues, or feeling lonely",
                color: "bg-red-100 text-red-600",
                borderColor: "border-red-200"
              },
              {
                icon: GraduationCap,
                title: "Work & Study",
                description: "Job stress, exam pressure, career confusion, or burnout",
                color: "bg-blue-100 text-blue-600",
                borderColor: "border-blue-200"
              },
              {
                icon: Globe,
                title: "Life Stuff",
                description: "Identity questions, motivation, bad habits, or just figuring things out",
                color: "bg-orange-100 text-orange-600",
                borderColor: "border-orange-200"
              }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className={`hover:shadow-md transition-shadow cursor-pointer border-2 ${category.borderColor} bg-gray-50/50`}>
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${category.color} mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="mt-4 text-purple-600 hover:bg-purple-50">
                      Get help with this
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Simple */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              How it works
            </h2>
            <p className="text-lg text-gray-600">
              It's pretty simple, actually
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Tell us what's up",
                description: "Share what's bothering you - as much or as little as you want. It's completely anonymous."
              },
              {
                step: "2", 
                title: "We match you up",
                description: "Our team finds the right person to help based on what you're going through."
              },
              {
                step: "3",
                title: "Get the support you need",
                description: "Chat with someone who gets it, get advice, or just have someone listen."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-white mb-6 text-xl font-bold">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Submission Form - Casual */}
      <section id="submit-problem" className="py-20 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              What's going on?
            </h2>
            <p className="text-lg text-gray-600">
              Tell us what's happening. We're here to listen and help however we can.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card className="border-2 border-purple-100 bg-purple-50/30">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base font-medium">What's the main thing bothering you?</Label>
                    <Input
                      id="title"
                      placeholder="e.g., I'm really stressed about work lately..."
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                      className="h-12 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-base font-medium">What category does this fall under?</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)} required>
                      <SelectTrigger className="h-12 bg-white">
                        <SelectValue placeholder="Pick the closest one" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base font-medium">Want to tell us more?</Label>
                    <Textarea
                      id="description"
                      placeholder="Share whatever feels comfortable. What's been happening? How are you feeling? What kind of help would be useful?"
                      rows={5}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                      className="bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-base font-medium">How urgent is this?</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)} required>
                      <SelectTrigger className="h-12 bg-white">
                        <SelectValue placeholder="No rush? Or need help soon?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Not urgent - I can wait</SelectItem>
                        <SelectItem value="medium">Pretty urgent - within a few days would be great</SelectItem>
                        <SelectItem value="high">Urgent - really need help soon</SelectItem>
                        <SelectItem value="critical">Critical - need support right now</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">Email (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Only if you want us to follow up"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      className="h-12 bg-white"
                    />
                    <p className="text-sm text-gray-500">
                      Totally optional - we'll only email if you want us to keep in touch
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                    size="lg"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send it over
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials - Casual */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Real talk from real people
            </h2>
            <p className="text-lg text-gray-600">
              Here's what some folks have said about getting help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                content: "Honestly, I finally felt heard. Thank you for creating this space.",
                author: "College student"
              },
              {
                content: "SamasyaSamadhan helped me when I literally had no one else to talk to.",
                author: "Working professional"
              },
              {
                content: "It's like having a friend who really listens without judging.",
                author: "Someone who needed support"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="text-sm text-gray-500">
                    — {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Casual */}
      <section className="py-20 bg-purple-600">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to feel a bit better?
            </h2>
            <p className="text-lg text-purple-100 mb-10">
              Sometimes just talking about stuff helps. We're here when you're ready.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3" 
                asChild
              >
                <a href="#submit-problem">
                  Let's start talking
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3" 
                asChild
              >
                <Link to="/mentor">
                  Find a mentor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
