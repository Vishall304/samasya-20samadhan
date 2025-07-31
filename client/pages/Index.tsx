import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, MessageSquare, Users, Clock, Star, Brain, GraduationCap, Briefcase, Heart, Gavel, TrendingUp, User, Home, Lightbulb, Code } from "lucide-react";
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
    "Technology & Software",
    "Business & Finance", 
    "Health & Wellness",
    "Education & Learning",
    "Legal Advice",
    "Marketing & Sales",
    "Career & Professional",
    "Personal Development",
    "Home & Lifestyle",
    "Others"
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Submit Your Problem",
      description: "Describe your challenge in detail and get matched with the right expert"
    },
    {
      icon: Users,
      title: "Expert Matching",
      description: "Our AI connects you with verified experts in your specific field"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get initial expert feedback within 24 hours"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Problems Solved" },
    { number: "2,500+", label: "Expert Advisors" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24h", label: "Average Response" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Get Expert Solutions to Your{" "}
              <span className="text-primary">Problems</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Connect with verified experts who understand your challenges. Submit your problem and receive personalized advice within 24 hours.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href="#submit-problem">
                  Submit Your Problem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/experts">Browse Experts</Link>
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
                  <div className="text-2xl font-bold text-primary sm:text-3xl">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
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
              Getting expert help has never been easier
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-20 sm:py-32 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Problems Can We Solve?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our experts cover a wide range of fields to help you with any challenge
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Brain,
                  title: "Mental Health",
                  description: "Anxiety, stress management, counseling, therapy guidance",
                  color: "bg-pink-100 text-pink-600"
                },
                {
                  icon: GraduationCap,
                  title: "Education & Learning",
                  description: "Study strategies, career guidance, skill development",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  icon: Code,
                  title: "Technology",
                  description: "Software development, IT solutions, tech consulting",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  icon: Heart,
                  title: "Health & Wellness",
                  description: "Fitness planning, nutrition advice, lifestyle changes",
                  color: "bg-red-100 text-red-600"
                },
                {
                  icon: Home,
                  title: "Home & Lifestyle",
                  description: "Interior design, home improvement, lifestyle coaching",
                  color: "bg-indigo-100 text-indigo-600"
                },
                {
                  icon: User,
                  title: "Personal Development",
                  description: "Self-improvement, goal setting, productivity coaching",
                  color: "bg-teal-100 text-teal-600"
                },
                {
                  icon: Lightbulb,
                  title: "Creative & Innovation",
                  description: "Creative projects, innovation consulting, artistic guidance",
                  color: "bg-yellow-100 text-yellow-600"
                }
              ].map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-white/50">
                    <CardContent className="p-6 text-center">
                      <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-lg ${category.color} mb-4`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see your problem category? We have experts for almost everything!
              </p>
              <Button size="lg" asChild>
                <a href="#submit-problem">
                  Submit Any Problem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
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
              Tell us about your challenge and we'll connect you with the right expert
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Describe Your Problem</CardTitle>
                <CardDescription>
                  Provide detailed information to help us match you with the best expert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Problem Title *</Label>
                    <Input
                      id="title"
                      placeholder="Brief summary of your problem"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
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
                    <Label htmlFor="description">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your problem in detail. Include context, what you've tried, and what outcome you're looking for..."
                      rows={6}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level *</Label>
                    <Select onValueChange={(value) => handleInputChange("urgency", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="How urgent is this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Can wait a week</SelectItem>
                        <SelectItem value="medium">Medium - Need help within 2-3 days</SelectItem>
                        <SelectItem value="high">High - Need help within 24 hours</SelectItem>
                        <SelectItem value="urgent">Urgent - Need immediate help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Problem
                    <ArrowRight className="ml-2 h-4 w-4" />
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
              What Our Users Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Small Business Owner",
                content: "Got incredible marketing advice that helped me double my revenue. The expert understood my business perfectly.",
                rating: 5
              },
              {
                name: "Rahul Sharma",
                role: "Software Developer",
                content: "Found the perfect solution to my technical challenge within hours. The expert was knowledgeable and responsive.",
                rating: 5
              },
              {
                name: "Maria Garcia",
                role: "Freelancer",
                content: "The career guidance I received helped me land my dream job. Highly recommend this platform!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Get Expert Help?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join thousands who have found solutions to their problems
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" asChild>
                <a href="#submit-problem">Submit Your Problem</a>
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/experts">Browse Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
