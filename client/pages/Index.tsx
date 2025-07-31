import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, MessageSquare, Users, Clock, Star, Brain, Heart, GraduationCap, Globe, Dumbbell, Sparkles, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    urgency: "",
    contactEmail: ""
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const features = [
    {
      icon: MessageSquare,
      title: "Tell us your problem",
      description: "Share your struggle anonymously in a safe space",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Get personalized help",
      description: "Receive suggestions or connect with expert mentors",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Feel supported",
      description: "Grow stronger every day with ongoing support",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Problems Solved", icon: CheckCircle, color: "text-green-500" },
    { number: "100+", label: "Happy Users", icon: Users, color: "text-blue-500" },
    { number: "100%", label: "Anonymous & Safe", icon: Shield, color: "text-purple-500" },
    { number: "24h", label: "Response Time", icon: Zap, color: "text-orange-500" }
  ];

  return (
    <Layout>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 animate-gradient"></div>
        
        {/* Hero Content */}
        <div className="container relative z-10 py-20">
          <div className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            {/* Main Heading */}
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 animate-bounce-in">
                <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-700">Safe • Anonymous • Caring</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                Every{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    Problem
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-lg blur-xl -z-10"></div>
                </span>{" "}
                Has a{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    Solution
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-lg blur-xl -z-10"></div>
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-600 max-w-4xl mx-auto mb-12">
              Get help for your <span className="font-semibold text-purple-600">mental</span>, 
              <span className="font-semibold text-pink-600"> physical</span>, 
              <span className="font-semibold text-blue-600"> emotional</span>, and 
              <span className="font-semibold text-green-600"> personal</span> struggles — 
              safely and confidentially.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 animate-pulse-glow rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105" 
                asChild
              >
                <a href="#submit-problem">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Start Your Journey
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-6 border-2 border-purple-300 hover:bg-purple-50 rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/mentor">
                  <Heart className="mr-3 h-5 w-5" />
                  Talk to Mentor
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className={`text-center animate-bounce-in`} style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="glass-effect rounded-2xl p-6 card-hover">
                      <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              What's Troubling You?
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help with all kinds of problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Mental Health",
                description: "Stress, anxiety, overthinking, loneliness",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-100 to-pink-100"
              },
              {
                icon: Dumbbell,
                title: "Physical Wellness",
                description: "Sleep, body pain, fatigue, energy issues",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-100 to-emerald-100"
              },
              {
                icon: Heart,
                title: "Relationships",
                description: "Family stress, breakups, misunderstandings",
                gradient: "from-red-500 to-pink-500",
                bgGradient: "from-red-100 to-pink-100"
              },
              {
                icon: GraduationCap,
                title: "Career & Student Life",
                description: "Exam pressure, confusion, burnout",
                gradient: "from-blue-500 to-indigo-500",
                bgGradient: "from-blue-100 to-indigo-100"
              },
              {
                icon: Globe,
                title: "Other Issues",
                description: "Identity, motivation, addiction, etc.",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-100 to-red-100"
              }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="group border-0 bg-white/80 backdrop-blur-sm card-hover cursor-pointer overflow-hidden relative animate-slide-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient} mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {category.description}
                    </p>
                    
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
                        Get Help
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl text-white/80">
              Getting help is simple and safe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center relative animate-slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Connection Line */}
                  {index < features.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/50 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-8 relative shadow-2xl animate-pulse-glow`}>
                      <Icon className="h-12 w-12 text-white" />
                      <div className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/80 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Submission Form */}
      <section id="submit-problem" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              Submit Your Problem
            </h2>
            <p className="text-xl text-gray-600">
              Share your struggle anonymously. We're here to listen and help.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Card className="border-0 shadow-2xl glass-effect overflow-hidden animate-slide-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
              
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                  Tell Us What's Wrong
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-4">
                  Your privacy is our priority. All submissions are anonymous.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-8 pb-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="title" className="text-lg font-semibold text-gray-700">What's the main issue? *</Label>
                    <Input
                      id="title"
                      placeholder="Brief summary of your problem"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                      className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="category" className="text-lg font-semibold text-gray-700">Category *</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)} required>
                      <SelectTrigger className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl">
                        <SelectValue placeholder="What type of problem is this?" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="text-lg py-3">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="description" className="text-lg font-semibold text-gray-700">Tell us more *</Label>
                    <Textarea
                      id="description"
                      placeholder="Share as much or as little as you're comfortable with. What's been happening? How are you feeling? What would help?"
                      rows={6}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                      className="text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl resize-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="urgency" className="text-lg font-semibold text-gray-700">How urgent is this? *</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)} required>
                      <SelectTrigger className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl">
                        <SelectValue placeholder="Let us know the urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low" className="text-lg py-3">Not urgent - I can wait</SelectItem>
                        <SelectItem value="medium" className="text-lg py-3">Moderately urgent - within a few days</SelectItem>
                        <SelectItem value="high" className="text-lg py-3">Urgent - need help soon</SelectItem>
                        <SelectItem value="critical" className="text-lg py-3">Critical - need immediate support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-lg font-semibold text-gray-700">Email (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Only if you want us to follow up"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      className="h-14 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl"
                    />
                    <p className="text-sm text-gray-500">
                      We respect your anonymity. Email is only for follow-up if you want it.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-16 text-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 animate-pulse-glow"
                  >
                    <Heart className="mr-3 h-6 w-6" />
                    Submit Your Problem
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900"></div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              You're Not Alone
            </h2>
            <p className="text-xl text-white/80">
              Real stories from people who found help
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                content: "I finally felt heard. Thank you for creating this.",
                author: "Student",
                rating: 5,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                content: "SamasyaSamadhan helped me when I had no one to talk to.",
                author: "Working Woman",
                rating: 5,
                gradient: "from-blue-500 to-purple-500"
              },
              {
                content: "It's like having a silent friend who listens.",
                author: "Anonymous user",
                rating: 5,
                gradient: "from-pink-500 to-red-500"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 glass-effect card-hover animate-slide-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-10`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl text-white mb-8 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="text-white/80 font-semibold">
                      — {testimonial.author}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 animate-gradient"></div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Ready to Feel Better?
            </h2>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed">
              Take the first step towards feeling stronger and more supported
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-xl px-12 py-6 bg-white text-purple-600 hover:bg-gray-100 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105" 
                asChild
              >
                <a href="#submit-problem">
                  <Sparkles className="mr-3 h-6 w-6" />
                  Submit Your Problem
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-purple-600 rounded-full transition-all duration-300 hover:scale-105" 
                asChild
              >
                <Link to="/mentor">
                  <Heart className="mr-3 h-6 w-6" />
                  Talk to a Mentor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
