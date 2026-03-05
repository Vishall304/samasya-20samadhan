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
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container text-center max-w-4xl mx-auto">
          <Badge className="mb-6">How It Works</Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Getting help is <span className="text-primary">easier</span> than you think
          </h1>

          <p className="text-xl text-muted-foreground mb-12">
            We've made getting mental health support as simple as sending a message.
          </p>

          <Button asChild>
            <Link to="/#problem-categories">
              <MessageSquare className="mr-2 h-5 w-5" />
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto space-y-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step}className="bg-white text-black border border-gray-200 shadow-md"
>
                <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block mb-2 text-sm font-semibold text-primary uppercase tracking-wide">
                    Step {step.step}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {step.subtitle}
                    </p>
                    <p className="mb-6 ">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((d, i) => (
                        <li key={i} className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card key={i} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <Icon className="mx-auto mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-muted-foreground mb-8">
          Your journey to feeling better starts with one message.
        </p>

        <Button asChild>
          <Link to="/#problem-categories">
            Share Your Problem
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </Layout>
  );
}
