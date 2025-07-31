import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, MessageSquare, Users, Clock, Star, Brain, Heart, GraduationCap, Globe, Dumbbell } from "lucide-react";
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

  const features = [
    {
      icon: MessageSquare,
      title: "Tell us your problem",
      description: "Share your struggle anonymously in a safe space"
    },
    {
      icon: Users,
      title: "Get personalized help",
      description: "Receive suggestions or connect with expert mentors"
    },
    {
      icon: Heart,
      title: "Feel supported",
      description: "Grow stronger every day with ongoing support"
    }
  ];

  const stats = [
    { number: "500+", label: "Problems Solved" },
    { number: "100+", label: "Happy Users" },
    { number: "100%", label: "Anonymous & Safe" },
    { number: "24h", label: "Response Time" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-6">
              Every Problem Has a{" "}
              <span className="text-primary">Solution</span>
            </h1>
            <p className="text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
              Get help for your mental, physical, emotional, and personal struggles — safely and confidentially.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <a href="#submit-problem">
                  Start Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary sm:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-20 sm:py-32 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What's Troubling You?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We're here to help with all kinds of problems
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Brain,
                  title: "Mental Health",
                  description: "Stress, anxiety, overthinking, loneliness",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: Dumbbell,
                  title: "Physical Wellness",
                  description: "Sleep, body pain, fatigue, energy issues",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: Heart,
                  title: "Relationships",
                  description: "Family stress, breakups, misunderstandings",
                  color: "bg-red-100 text-red-600"
                },
                {
                  icon: GraduationCap,
                  title: "Career & Student Life",
                  description: "Exam pressure, confusion, burnout",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Globe,
                  title: "Other Issues",
                  description: "Identity, motivation, addiction, etc.",
                  color: "bg-orange-100 text-orange-600"
                }
              ].map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/80">
                    <CardContent className="p-8 text-center">
                      <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${category.color} mb-6`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Getting help is simple and safe
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-12 md:gap-8 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center relative">
                    {index < features.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    )}
                    <div className="relative">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-6 relative z-10">
                        <Icon className="h-8 w-8" />
                        <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Step {index + 1}: {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Submission Form */}
      <section id="submit-problem" className="py-20 sm:py-32 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Submit Your Problem
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Share your struggle anonymously. We're here to listen and help.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Tell Us What's Wrong</CardTitle>
                <CardDescription className="text-base">
                  Your privacy is our priority. All submissions are anonymous.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base">What's the main issue? *</Label>
                    <Input
                      id="title"
                      placeholder="Brief summary of your problem"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-base">Category *</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="What type of problem is this?" />
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
                    <Label htmlFor="description" className="text-base">Tell us more *</Label>
                    <Textarea
                      id="description"
                      placeholder="Share as much or as little as you're comfortable with. What's been happening? How are you feeling? What would help?"
                      rows={6}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                      className="min-h-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-base">How urgent is this? *</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)} required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Let us know the urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Not urgent - I can wait</SelectItem>
                        <SelectItem value="medium">Moderately urgent - within a few days</SelectItem>
                        <SelectItem value="high">Urgent - need help soon</SelectItem>
                        <SelectItem value="critical">Critical - need immediate support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Only if you want us to follow up"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      className="h-12"
                    />
                    <p className="text-sm text-muted-foreground">
                      We respect your anonymity. Email is only for follow-up if you want it.
                    </p>
                  </div>

                  <Button type="submit" className="w-full h-12 text-lg" size="lg">
                    Submit Your Problem
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              You're Not Alone
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from people who found help
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                content: "I finally felt heard. Thank you for creating this.",
                author: "Student",
                rating: 5
              },
              {
                content: "SamasyaSamadhan helped me when I had no one to talk to.",
                author: "Working Woman",
                rating: 5
              },
              {
                content: "It's like having a silent friend who listens.",
                author: "Anonymous user",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-sm text-muted-foreground font-medium">
                    — {testimonial.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-primary">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Ready to Feel Better?
            </h2>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Take the first step towards feeling stronger
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <a href="#submit-problem">Submit Your Problem</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/mentor">Talk to a Mentor (Coming Soon)</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
