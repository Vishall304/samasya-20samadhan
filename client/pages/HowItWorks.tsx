import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  UserSearch,
  Heart,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Users,
  Star,
  Lock,
  Zap,
  HeadphonesIcon,
  Brain,
  Sparkles,
  Phone,
  Video,
  MessageCircle,
  FileText,
  UserCheck,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Share Your Problem",
      subtitle: "Tell us what's bothering you",
      description: "Write about anything that's on your mind - stress, relationships, work pressure, family issues, or just feeling stuck. You can be as detailed or brief as you want.",
      icon: MessageSquare,
      details: [
        "Choose a problem category that fits your situation",
        "Share as much or as little detail as you're comfortable with",
        "Set urgency level (from 'not urgent' to 'critical')",
        "Everything is completely anonymous - no personal details required"
      ],
      time: "2-3 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Expert Matching",
      subtitle: "We find the right person for you",
      description: "Our team reviews your submission and matches you with an expert who specializes in exactly what you're going through. No random assignments - just the right fit.",
      icon: UserSearch,
      details: [
        "AI-powered matching based on your specific needs",
        "Experts with real experience in your problem area", 
        "Verified professionals with proven track records",
        "Multiple options available if needed"
      ],
      time: "Within 2-6 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      title: "Connect & Get Support",
      subtitle: "Start your healing journey",
      description: "Your matched expert reaches out with personalized advice, resources, and ongoing support. You choose how you want to communicate - chat, calls, or video sessions.",
      icon: Heart,
      details: [
        "Personalized advice tailored to your specific situation",
        "Multiple communication options: text, voice, or video",
        "Resource recommendations and actionable steps",
        "Ongoing support until you feel better"
      ],
      time: "Ongoing support",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Anonymous",
      description: "No names, no tracking. Share only what you want to share."
    },
    {
      icon: Lock,
      title: "Completely Private",
      description: "All conversations are encrypted and confidential."
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get matched with an expert within hours, not days."
    },
    {
      icon: Award,
      title: "Verified Experts",
      description: "All our experts are verified professionals with proven experience."
    }
  ];

  const communicationMethods = [
    {
      icon: MessageCircle,
      title: "Anonymous Chat",
      description: "Private text conversations with your expert",
      popular: true
    },
    {
      icon: Phone,
      title: "Voice Calls",
      description: "Talk directly with your expert when you need immediate support"
    },
    {
      icon: Video,
      title: "Video Sessions", 
      description: "Face-to-face sessions for deeper connection (optional)"
    },
    {
      icon: FileText,
      title: "Resource Sharing",
      description: "Get personalized resources, articles, and tools"
    }
  ];

  const expertTypes = [
    {
      title: "Mental Health Specialists",
      description: "Licensed therapists and counselors",
      icon: Brain,
      expertise: ["Anxiety & Depression", "Stress Management", "Trauma Support", "Emotional Wellness"]
    },
    {
      title: "Life Coaches",
      description: "Certified life and career coaches",
      icon: Sparkles,
      expertise: ["Career Guidance", "Life Transitions", "Goal Setting", "Personal Growth"]
    },
    {
      title: "Relationship Experts",
      description: "Marriage and family therapists",
      icon: Heart,
      expertise: ["Family Issues", "Relationship Problems", "Communication Skills", "Conflict Resolution"]
    },
    {
      title: "Peer Supporters",
      description: "People who've been through similar experiences",
      icon: Users,
      expertise: ["Lived Experience", "Peer Support", "Community Wisdom", "Understanding"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200 px-4 py-2">
              How It Works
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Getting help is <span className="text-purple-300">easier</span> than you think
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              We've made getting mental health support as simple as sending a message. 
              Here's exactly how our process works, from your first message to ongoing support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl py-4 px-8 text-lg font-semibold shadow-xl"
                asChild
              >
                <Link to="/#problem-categories">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Started Now
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-2xl py-4 px-8 text-lg font-semibold"
                asChild
              >
                <Link to="/mentor">
                  <Users className="mr-2 h-5 w-5" />
                  Browse Experts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Three Simple Steps to Support
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                We've streamlined the process to make getting help as easy as possible
              </p>
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 1;
                
                return (
                  <div key={step.step} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {step.step}
                        </div>
                        <div className="text-sm text-purple-300 font-medium bg-purple-100/10 px-3 py-1 rounded-full">
                          {step.time}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-lg text-purple-200 mb-4">
                          {step.subtitle}
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                          {step.description}
                        </p>
                      </div>

                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-white/90">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className="flex-1 flex justify-center">
                      <Card className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
                        <CardContent className="p-8 text-center">
                          <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-3">
                            Step {step.step}
                          </h4>
                          <p className="text-white/70">
                            {step.subtitle}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Communication Methods */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Choose How You Want to Connect
            </h2>
            <p className="text-lg text-white/80">
              We offer multiple ways to communicate with your expert, so you can choose what feels most comfortable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {communicationMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className={`relative bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 ${method.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {method.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-500 text-white px-3 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {method.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expert Types */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Expert Community
            </h2>
            <p className="text-lg text-white/80">
              We have a diverse team of qualified professionals and peer supporters ready to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {expertTypes.map((expert, index) => {
              const Icon = expert.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {expert.title}
                        </h3>
                        <p className="text-purple-200 text-sm">
                          {expert.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-white/70 text-sm font-medium mb-3">Areas of Expertise:</p>
                      <div className="flex flex-wrap gap-2">
                        {expert.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-white/90 border-white/20">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features/Benefits */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose SamasyaSamadhan?
            </h2>
            <p className="text-lg text-white/80">
              We've built our platform with your privacy, comfort, and success in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Your journey to feeling better starts with a single message. 
              Take the first step today - it's completely anonymous and you're in control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl py-4 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/#problem-categories">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Share Your Problem Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>100% Anonymous</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>No Judgment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
