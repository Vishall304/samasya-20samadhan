import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Lightbulb,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Target,
  MessageSquare,
  Phone,
  Video,
  Clock,
  Star,
  Award,
  BookOpen,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface AIAnalysisResultProps {
  isOpen: boolean;
  onClose: () => void;
  problemText: string;
  category: string;
  onConnectExpert: (expertId: string) => void;
}

interface Expert {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  responseTime: string;
  languages: string[];
  approach: string;
  availability: string;
  matchScore: number;
}

export default function AIAnalysisResult({
  isOpen,
  onClose,
  problemText,
  category,
  onConnectExpert,
}: AIAnalysisResultProps) {
  const [currentStep, setCurrentStep] = useState<'analysis' | 'suggestions' | 'experts'>('analysis');

  // Simulated AI analysis based on the problem
  const generateAnalysis = (text: string, cat: string) => {
    const analysisMap: { [key: string]: any } = {
      "Mental Health": {
        problemType: "Anxiety & Stress Management",
        severity: "Moderate",
        keyIssues: ["Work-related stress", "Sleep disturbances", "Overwhelm feelings"],
        urgency: "Medium - should address within a few days"
      },
      "Relationships": {
        problemType: "Communication & Conflict Resolution",
        severity: "Moderate",
        keyIssues: ["Communication gaps", "Emotional disconnect", "Trust concerns"],
        urgency: "Medium - early intervention recommended"
      },
      "Work & Study": {
        problemType: "Performance & Motivation",
        severity: "Moderate",
        keyIssues: ["Time management", "Work pressure", "Goal clarity"],
        urgency: "Medium - can affect long-term success"
      },
      "Financial Stress": {
        problemType: "Financial Planning & Anxiety",
        severity: "Moderate",
        keyIssues: ["Budget management", "Financial anxiety", "Future planning"],
        urgency: "Medium - important for stability"
      },
      "Physical Wellness": {
        problemType: "Lifestyle & Health Management",
        severity: "Moderate", 
        keyIssues: ["Sleep quality", "Energy levels", "Health concerns"],
        urgency: "Medium - affects overall wellbeing"
      },
      "Life Stuff": {
        problemType: "Life Direction & Purpose",
        severity: "Moderate",
        keyIssues: ["Identity questions", "Life direction", "Motivation"],
        urgency: "Medium - important for personal growth"
      }
    };
    
    return analysisMap[cat] || analysisMap["Mental Health"];
  };

  const generateSuggestions = (category: string) => {
    const suggestionsMap: { [key: string]: any } = {
      "Mental Health": [
        {
          title: "Deep Breathing Exercise",
          description: "Practice 4-7-8 breathing: Inhale for 4, hold for 7, exhale for 8. Do this 3 times when feeling stressed.",
          type: "Immediate Relief",
          icon: "🧘‍♀️"
        },
        {
          title: "Daily Stress Journal",
          description: "Write down 3 things that stressed you and 3 things you're grateful for each day.",
          type: "Daily Practice",
          icon: "📝"
        },
        {
          title: "Progressive Muscle Relaxation",
          description: "Tense and release each muscle group for 5 seconds, starting from your toes to your head.",
          type: "Relaxation Technique",
          icon: "💆‍♀️"
        },
        {
          title: "Limit Caffeine & News",
          description: "Reduce caffeine after 2 PM and limit news consumption to once per day to reduce anxiety.",
          type: "Lifestyle Change",
          icon: "☕"
        }
      ],
      "Relationships": [
        {
          title: "Active Listening Practice",
          description: "When someone speaks, focus completely on understanding rather than preparing your response.",
          type: "Communication Skill",
          icon: "👂"
        },
        {
          title: "Daily Check-ins",
          description: "Spend 10 minutes each day asking your partner/family 'How was your day?' and really listen.",
          type: "Daily Practice",
          icon: "💬"
        },
        {
          title: "Express Appreciation",
          description: "Tell someone you care about one specific thing you appreciate about them every day.",
          type: "Positive Habit",
          icon: "❤️"
        },
        {
          title: "Set Healthy Boundaries",
          description: "It's okay to say 'I need some time to think about this' when feeling pressured.",
          type: "Self-Care",
          icon: "🚧"
        }
      ],
      "Work & Study": [
        {
          title: "Pomodoro Technique",
          description: "Work for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break.",
          type: "Productivity Method",
          icon: "⏰"
        },
        {
          title: "Priority Matrix",
          description: "Categorize tasks as: Urgent+Important, Important+Not Urgent, Urgent+Not Important, Neither.",
          type: "Organization Tool",
          icon: "📊"
        },
        {
          title: "Weekly Planning",
          description: "Every Sunday, plan your week with 3 main goals and break them into daily actions.",
          type: "Planning Strategy",
          icon: "📅"
        },
        {
          title: "Energy Management",
          description: "Identify when you have the most energy and schedule your hardest tasks during those times.",
          type: "Optimization",
          icon: "⚡"
        }
      ],
      "Financial Stress": [
        {
          title: "50/30/20 Budget Rule",
          description: "Allocate 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
          type: "Budgeting Method",
          icon: "💰"
        },
        {
          title: "Emergency Fund Goal",
          description: "Start by saving ₹500 per month until you have ₹5,000 for emergencies.",
          type: "Savings Strategy",
          icon: "🛡️"
        },
        {
          title: "Track Daily Expenses",
          description: "Note every expense for a week to understand where your money actually goes.",
          type: "Awareness Exercise",
          icon: "📱"
        },
        {
          title: "Automate Savings",
          description: "Set up automatic transfers to savings account right after you get paid.",
          type: "System Setup",
          icon: "🔄"
        }
      ],
      "Physical Wellness": [
        {
          title: "Sleep Hygiene Routine",
          description: "Go to bed and wake up at the same time daily. No screens 1 hour before bed.",
          type: "Sleep Improvement",
          icon: "😴"
        },
        {
          title: "10-Minute Morning Walk",
          description: "Start with just 10 minutes of walking outside every morning to boost energy.",
          type: "Exercise Habit",
          icon: "🚶‍♀️"
        },
        {
          title: "Hydration Reminder",
          description: "Drink a glass of water every hour. Set phone reminders if needed.",
          type: "Health Habit",
          icon: "💧"
        },
        {
          title: "Mindful Eating",
          description: "Eat slowly and chew each bite 20 times. No distractions while eating.",
          type: "Nutrition Practice",
          icon: "🍎"
        }
      ],
      "Life Stuff": [
        {
          title: "Values Clarification",
          description: "Write down your top 5 values and ask yourself if your daily actions align with them.",
          type: "Self-Discovery",
          icon: "🎯"
        },
        {
          title: "One New Thing Weekly",
          description: "Try one new activity, place, or experience each week to discover what excites you.",
          type: "Exploration",
          icon: "🌟"
        },
        {
          title: "Morning Pages",
          description: "Write 3 pages of stream-of-consciousness thoughts every morning to clear your mind.",
          type: "Reflection Practice",
          icon: "📝"
        },
        {
          title: "Future Self Visualization",
          description: "Spend 10 minutes daily imagining your life 5 years from now and what steps lead there.",
          type: "Goal Setting",
          icon: "🔮"
        }
      ]
    };
    
    return suggestionsMap[category] || suggestionsMap["Mental Health"];
  };

  const generateExperts = (category: string) => {
    const expertsMap: { [key: string]: Expert[] } = {
      "Mental Health": [
        {
          id: "dr-sharma",
          name: "Dr. Priya Sharma",
          specialty: "Anxiety & Stress Management",
          experience: "8 years in clinical psychology",
          rating: 4.9,
          responseTime: "Within 2 hours",
          languages: ["Hindi", "English"],
          approach: "Cognitive Behavioral Therapy (CBT) with mindfulness techniques",
          availability: "Available today",
          matchScore: 95
        },
        {
          id: "counselor-singh",
          name: "Rajesh Singh",
          specialty: "Workplace Stress & Burnout",
          experience: "12 years in corporate counseling",
          rating: 4.8,
          responseTime: "Within 4 hours",
          languages: ["Hindi", "English", "Punjabi"],
          approach: "Solution-focused therapy with stress management tools",
          availability: "Available tomorrow",
          matchScore: 88
        },
        {
          id: "therapist-mehta",
          name: "Dr. Anjali Mehta",
          specialty: "General Mental Health Support",
          experience: "6 years in therapy and counseling",
          rating: 4.7,
          responseTime: "Within 6 hours",
          languages: ["Hindi", "English", "Gujarati"],
          approach: "Holistic approach combining therapy with lifestyle changes",
          availability: "Available this week",
          matchScore: 82
        }
      ],
      "Relationships": [
        {
          id: "counselor-patel",
          name: "Dr. Kavita Patel",
          specialty: "Relationship & Family Counseling",
          experience: "10 years in family therapy",
          rating: 4.9,
          responseTime: "Within 3 hours",
          languages: ["Hindi", "English", "Gujarati"],
          approach: "Emotionally Focused Therapy with communication skills training",
          availability: "Available today",
          matchScore: 93
        },
        {
          id: "therapist-kumar",
          name: "Arun Kumar",
          specialty: "Communication & Conflict Resolution",
          experience: "7 years in relationship counseling",
          rating: 4.8,
          responseTime: "Within 5 hours",
          languages: ["Hindi", "English", "Tamil"],
          approach: "Practical communication tools with emotional intelligence training",
          availability: "Available tomorrow",
          matchScore: 87
        }
      ]
    };
    
    return expertsMap[category] || expertsMap["Mental Health"];
  };

  const analysis = generateAnalysis(problemText, category);
  const suggestions = generateSuggestions(category);
  const experts = generateExperts(category);

  const renderAnalysis = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Analysis Complete</h3>
        <p className="text-gray-600">Here's what I understand about your situation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-blue-600" />
              Problem Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800 font-medium">{analysis.problemType}</p>
            <Badge variant="secondary" className="mt-2">{analysis.severity} Severity</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-orange-600" />
              Urgency Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">{analysis.urgency}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Key Issues Identified
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {analysis.keyIssues.map((issue: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">{issue}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center">
        <Button 
          onClick={() => setCurrentStep('suggestions')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
        >
          <Lightbulb className="w-5 h-5 mr-2" />
          View AI Suggestions
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderSuggestions = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lightbulb className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized Suggestions</h3>
        <p className="text-gray-600">Here are some immediate steps you can try</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion: any, index: number) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{suggestion.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{suggestion.title}</h4>
                    <Badge variant="outline" className="text-xs">{suggestion.type}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{suggestion.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-amber-600 mt-1" />
          <div>
            <h4 className="font-semibold text-amber-900 mb-2">💡 Pro Tip</h4>
            <p className="text-amber-800 text-sm">
              Try implementing one suggestion at a time rather than all at once. Small, consistent changes tend to be more effective than dramatic lifestyle overhauls.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button 
          onClick={() => setCurrentStep('experts')}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
        >
          <Users className="w-5 h-5 mr-2" />
          Find Perfect Expert
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );

  const renderExperts = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Perfect Expert Matches</h3>
        <p className="text-gray-600">Based on your problem, here are the best experts for you</p>
      </div>

      <div className="space-y-4">
        {experts.map((expert, index) => (
          <Card key={expert.id} className={`hover:shadow-xl transition-all ${index === 0 ? 'ring-2 ring-purple-200 bg-purple-50' : ''}`}>
            <CardContent className="p-6">
              {index === 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <Badge className="bg-purple-100 text-purple-700">Best Match - {expert.matchScore}%</Badge>
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-semibold text-gray-900">{expert.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{expert.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-purple-700 font-medium mb-2">{expert.specialty}</p>
                  <p className="text-gray-600 text-sm mb-3">{expert.experience}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Response time: {expert.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Languages: {expert.languages.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">{expert.approach}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 md:items-end">
                  <Badge variant={expert.availability.includes('today') ? 'default' : 'secondary'} className="w-fit">
                    {expert.availability}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat
                    </Button>
                    <Button
                      onClick={() => onConnectExpert(expert.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center gap-2"
                      size="sm"
                    >
                      <Zap className="w-4 h-4" />
                      Connect Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <Heart className="w-6 h-6 text-blue-600 mt-1" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">🤝 What happens next?</h4>
            <p className="text-blue-800 text-sm">
              When you connect with an expert, they'll receive your problem details and AI analysis. 
              They'll reach out within their response time to start your personalized support journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className={`w-3 h-3 rounded-full ${currentStep === 'analysis' ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full ${currentStep === 'suggestions' ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
                <div className={`w-3 h-3 rounded-full ${currentStep === 'experts' ? 'bg-purple-600' : 'bg-gray-300'}`}></div>
              </div>
              <span className="text-sm text-gray-600">
                Step {currentStep === 'analysis' ? '1' : currentStep === 'suggestions' ? '2' : '3'} of 3
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
          </div>

          {currentStep === 'analysis' && renderAnalysis()}
          {currentStep === 'suggestions' && renderSuggestions()}
          {currentStep === 'experts' && renderExperts()}
        </div>
      </div>
    </div>
  );
}
