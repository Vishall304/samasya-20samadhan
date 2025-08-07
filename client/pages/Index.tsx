import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, MessageSquare, Users, Clock, Star, Brain, Heart, GraduationCap, Globe, Dumbbell, Smile, Coffee, DollarSign } from "lucide-react";
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
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            {/* Friendly Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-purple-300 mb-8 shadow-lg">
              <Smile className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Safe, Anonymous & Caring</span>
            </div>
            
            {/* Main Heading - More Casual */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Hey, we get it.{" "}
              <span className="text-purple-300">Every problem</span>{" "}
              has a solution
            </h1>

            {/* Engaging subtitle */}
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                Life throws curveballs, and sometimes you need someone in your corner.
                Whether it's stress keeping you up at night, relationship drama, work pressure,
                or just feeling stuck – you don't have to figure it out alone.
              </p>
              <p className="text-lg text-purple-200 font-medium">
                Share what's on your mind. Connect with caring experts. Feel supported again. ✨
              </p>
            </div>

            {/* Quick Input Prompt - Ultra Enhanced Styling */}
            <div className="max-w-4xl mx-auto mb-10 relative group">
              {/* Advanced Floating Background Elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

              {/* Main Card with Advanced Effects */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] border-2 border-white/50 p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] group-hover:border-purple-300/50">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 via-blue-500/20 to-purple-500/20 rounded-[2rem] opacity-100 animate-gradient-shift"></div>

                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  {/* Ultra Enhanced Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                      What's on your mind today?
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                      Share anything that's bothering you. We're here to listen with care and understanding.
                    </p>
                  </div>

                  {/* Ultra Enhanced Textarea */}
                  <div className="relative mb-8">
                    <div className="relative overflow-hidden rounded-3xl border-2 border-purple-200/50 bg-gradient-to-br from-purple-50/50 to-pink-50/50 p-1 shadow-inner">
                      <textarea
                        placeholder="Type anything... stress, family issues, work problems, exam pressure, relationship troubles, or whatever's on your mind. No judgment, just support. ✨"
                        className="w-full h-36 px-8 py-6 rounded-[1.4rem] border-0 bg-white/80 focus:bg-white focus:shadow-lg outline-none resize-none text-gray-700 placeholder-gray-400 transition-all duration-300 text-lg leading-relaxed focus:ring-4 focus:ring-purple-200/50"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                      />
                      {/* Enhanced floating label effect */}
                      <div className="absolute top-4 left-8 text-xs font-medium text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        💭 Your thoughts are safe here
                      </div>
                      <div className="absolute bottom-4 right-6 text-xs text-gray-400 flex items-center gap-2">
                        <span>Press Enter for new line</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Ultra Enhanced Buttons */}
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Button
                      className="flex-1 relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white rounded-3xl py-5 px-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 text-lg font-bold group"
                      onClick={() => {
                        document.getElementById('submit-problem')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {/* Button shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <Heart className="mr-3 h-6 w-6 animate-pulse" />
                      Get Help With This
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-3 border-purple-400/50 text-purple-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-purple-500 rounded-3xl py-5 px-8 transition-all duration-500 hover:scale-105 text-lg font-bold backdrop-blur-sm bg-white/50 hover:shadow-xl"
                      asChild
                    >
                      <Link to="/mentor">
                        <Users className="mr-3 h-6 w-6" />
                        Browse Experts
                      </Link>
                    </Button>
                  </div>

                  {/* Enhanced Trust Indicators */}
                  <div className="mt-8 pt-8 border-t border-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
                    <div className="flex flex-wrap items-center justify-center gap-8">
                      <div className="flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full border border-green-200">
                        <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-md animate-pulse"></div>
                        <span className="text-sm font-semibold text-green-700">Completely Anonymous</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-md animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-sm font-semibold text-blue-700">Safe & Secure</span>
                      </div>
                      <div className="flex items-center gap-3 px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-md animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-sm font-semibold text-purple-700">Expert Support 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mb-16">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
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
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-purple-300 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Categories - Casual */}
      <section className="py-20 relative">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What's on your mind?
            </h2>
            <p className="text-lg text-white/80">
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
                icon: DollarSign,
                title: "Financial Stress",
                description: "Money worries, debt issues, budgeting problems, or financial planning",
                color: "bg-emerald-100 text-emerald-600",
                borderColor: "border-emerald-200"
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
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 cursor-pointer border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${category.color} mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {category.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    
                    <Button variant="ghost" size="sm" className="mt-4 text-purple-300 hover:bg-white/20 hover:text-white">
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
      <section className="py-20 relative">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How it works
            </h2>
            <p className="text-lg text-white/80">
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white mb-6 text-xl font-bold shadow-lg">
                  {step.step}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Submission Form - Casual */}
      <section id="submit-problem" className="py-20 relative">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What's going on?
            </h2>
            <p className="text-lg text-white/80">
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
      <section className="py-20 relative">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Real talk from real people
            </h2>
            <p className="text-lg text-white/80">
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
              <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-white mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="text-sm text-white/70">
                    — {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
