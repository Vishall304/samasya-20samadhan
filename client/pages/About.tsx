import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Users,
  Star,
  CheckCircle,
  Award,
  Target,
  Sparkles,
  MessageSquare,
  Brain,
  Clock,
  Lock,
  UserCheck,
  Zap,
  Globe,
  HandHeart,
  Lightbulb,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every person deserves to be heard without judgment. We provide a safe space where you can share your struggles freely.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your confidentiality is sacred to us. All interactions are completely private and secure, protecting your identity at all times.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Our network of qualified professionals and peer supporters are carefully vetted to ensure you receive the best possible guidance.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Mental health can't wait. We're committed to connecting you with support as quickly as possible, usually within hours.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const team = [
    {
      name: "Mental Health Specialists",
      description: "Licensed therapists and counselors with years of experience",
      icon: Brain,
      count: "50+"
    },
    {
      name: "Life Coaches",
      description: "Certified coaches specializing in personal growth and development",
      icon: Target,
      count: "30+"
    },
    {
      name: "Peer Supporters",
      description: "Individuals who've overcome similar challenges and want to help",
      icon: HandHeart,
      count: "100+"
    },
    {
      name: "Crisis Counselors",
      description: "24/7 trained professionals for urgent mental health support",
      icon: Clock,
      count: "15+"
    }
  ];

  const stats = [
    { number: "1000+", label: "People Helped", icon: Users },
    { number: "500+", label: "Problems Solved", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100%", label: "Confidential", icon: Lock },
  ];

  const achievements = [
    "Founded with the mission to make mental health support accessible to everyone",
    "Successfully connected over 1000+ individuals with qualified experts",
    "Maintained 100% confidentiality record with zero data breaches",
    "Achieved 95% satisfaction rate from users who found help through our platform",
    "Built India's most trusted anonymous mental health support community",
    "Partnered with licensed professionals across multiple specializations"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200 px-4 py-2">
              About SamasyaSamadhan
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              We believe every <span className="text-purple-300">problem</span> has a solution
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              SamasyaSamadhan was born from a simple truth: nobody should face their struggles alone. 
              We've created a safe, anonymous space where real people can get real help from qualified experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl py-4 px-8 text-lg font-semibold shadow-xl"
                asChild
              >
                <Link to="/#problem-categories">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Share Your Problem
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl py-4 px-8 text-lg font-semibold"
                asChild
              >
                <Link to="/how-it-works">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  How We Help
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Story
              </h2>
              <p className="text-lg text-white/80">
                How we started and why we're here
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-white/90 leading-relaxed mb-6 text-lg">
                    <strong className="text-purple-300">SamasyaSamadhan started with a personal realization:</strong> too many people suffer in silence because they don't know where to turn for help, or they're afraid of being judged.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed mb-6">
                    We saw friends, family members, and colleagues struggling with mental health challenges, relationship issues, work stress, and life problems - but hesitating to seek help because of stigma, cost, or simply not knowing where to start.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed mb-6">
                    That's when we decided to build something different. A platform where anyone could anonymously share their problems and get connected with qualified experts who genuinely care. No judgment, no lengthy procedures, no barriers - just real support when you need it most.
                  </p>
                  
                  <p className="text-purple-200 leading-relaxed font-medium">
                    Today, we're proud to be India's most trusted anonymous mental health support platform, helping over 1000+ individuals find their path to healing and happiness.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                What We Stand For
              </h2>
              <p className="text-lg text-white/80">
                The values that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {value.title}
                          </h3>
                          <p className="text-white/80 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Expert Community
              </h2>
              <p className="text-lg text-white/80">
                Meet the qualified professionals ready to support you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {member.name}
                          </h3>
                          <Badge variant="secondary" className="bg-purple-100/20 text-purple-200">
                            {member.count} Available
                          </Badge>
                        </div>
                      </div>
                      <p className="text-white/70 text-sm">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Impact
              </h2>
              <p className="text-lg text-white/80">
                Numbers that reflect our commitment to helping people
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-purple-300 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Our Achievements
              </h2>
              <p className="text-lg text-white/80">
                Milestones we're proud of
              </p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-white/90 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Join thousands of people who've found support, guidance, and hope through SamasyaSamadhan. 
              Your journey to feeling better starts with sharing what's on your mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl py-4 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/#problem-categories">
                  <Heart className="mr-2 h-5 w-5" />
                  Get Support Today
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl py-4 px-8 text-lg font-semibold"
                asChild
              >
                <Link to="/how-it-works">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn How We Help
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Smile className="w-4 h-4 text-green-400" />
                <span>1000+ Happy Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Verified Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
