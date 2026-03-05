import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Clock,
  Video,
  MapPin,
  Award,
  Brain,
  Heart,
  GraduationCap,
  DollarSign,
  Dumbbell,
  Globe,
  MessageSquare
} from "lucide-react";

const CATEGORY_CONFIG = [
  { name: "All", icon: Brain, color: "bg-[#EAF2F8] text-[#1B4F72]" },
  { name: "Mental Health", icon: Brain, color: "bg-purple-50 text-blue-700" },
  { name: "Relationships", icon: Heart, color: "bg-rose-50 text-rose-700" },
  { name: "Work & Study", icon: GraduationCap, color: "bg-blue-50 text-blue-700" },
  { name: "Financial Stress", icon: DollarSign, color: "bg-emerald-50 text-emerald-700" },
  { name: "Physical Wellness", icon: Dumbbell, color: "bg-green-50 text-green-700" },
  { name: "Life Stuff", icon: Globe, color: "bg-orange-50 text-orange-700" },
] as const;

export default function Experts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const experts = [
    {
      id: "venkatesh-sontakke",
      name: "Venkatesh Sontakke",
      specialty: "Senior Psychologist & Life Coach",
      experience: "15 years experience",
      rating: 5.0,
      reviewCount: 456,
      responseTime: "1 hour",
      languages: ["Hindi", "English", "Marathi"],
      location: "Pune, Maharashtra",
      price: "₹1200 / session",
      availability: "Available today",
      bio: "Expert psychologist specializing in mental health, relationships, career guidance, and life transformation. Helping people find clarity and purpose.",
      categories: ["Mental Health", "Relationships", "Work & Study", "Life Stuff"],
    },
    {
      id: "dr-priya-sharma",
      name: "Dr. Priya Sharma",
      specialty: "Clinical Psychologist",
      experience: "8 years experience",
      rating: 4.9,
      reviewCount: 247,
      responseTime: "2 hours",
      languages: ["Hindi", "English"],
      location: "Mumbai, Maharashtra",
      price: "₹800 / session",
      availability: "Available today",
      bio: "Specialized in anxiety, depression, and stress management.",
      categories: ["Mental Health"],
    },
    {
      id: "rajesh-singh",
      name: "Rajesh Singh",
      specialty: "Career Counselor",
      experience: "12 years experience",
      rating: 4.8,
      reviewCount: 189,
      responseTime: "4 hours",
      languages: ["Hindi", "English", "Punjabi"],
      location: "Delhi, India",
      price: "₹600 / session",
      availability: "Available tomorrow",
      bio: "Expert in career guidance and workplace stress.",
      categories: ["Work & Study"],
    },
    {
      id: "dr-kavita-patel",
      name: "Dr. Kavita Patel",
      specialty: "Relationship Counselor",
      experience: "10 years experience",
      rating: 4.9,
      reviewCount: 312,
      responseTime: "3 hours",
      languages: ["Hindi", "English", "Gujarati"],
      location: "Ahmedabad, Gujarat",
      price: "₹900 / session",
      availability: "Available today",
      bio: "Specializes in couples therapy and family counseling.",
      categories: ["Relationships"],
    },
  ];

  const handleConnectExpert = (expertId: string) => {
    alert(
      `Connecting with expert: ${expertId}. This would open chat/video call interface.`,
    );
  };

  const filteredExperts =
    selectedCategory === "All"
      ? experts
      : experts.filter((expert) =>
          expert.categories.includes(selectedCategory),
        );

  return (
    <Layout>
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1B4F72]">
              Find Your Perfect{" "}
              <span className="text-[#5DADE2]">Expert</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto">
              Connect with verified professionals who understand your challenges
              and can guide you towards solutions.
            </p>
          </div>

          {/* Browse Categories */}
          <div className="max-w-5xl mx-auto mt-4 mb-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="text-xl md:text-2xl font-semibold text-[#1B4F72]">
                  Browse Categories
                </h2>
                <p className="text-sm text-gray-500">
                  Tap a category to filter experts by what you need help with.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {CATEGORY_CONFIG.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.name;
                  return (
                    <button
                      key={category.name}
                      type="button"
                      onClick={() => setSelectedCategory(category.name)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 ${
                        isActive
                          ? "bg-[#5DADE2] text-white border-[#5DADE2] shadow-md scale-[1.02]"
                          : "bg-white text-gray-700 border-[#D6EAF8] hover:bg-[#EBF5FB] hover:border-[#5DADE2]"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          isActive ? "bg-white text-[#5DADE2]" : category.color
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                      </span>
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
            {filteredExperts.map((expert) => (
              <Card
                key={expert.id}
                className="bg-white border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-6">
                  {/* Expert Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#5DADE2] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {expert.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">
                          {expert.name}
                        </h3>
                        <Award className="w-4 h-4 text-blue-500" />
                      </div>
                      <p className="text-[#1B4F72] font-medium text-sm">
                        {expert.specialty}
                      </p>
                      <p className="text-gray-600 text-xs">{expert.experience}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{expert.rating}</span>
                      <span className="text-gray-500 text-sm">
                        ({expert.reviewCount})
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {expert.bio}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">
                        Response: {expert.responseTime}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{expert.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{expert.languages.join(", ")}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {expert.categories.map((category) => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="text-xs bg-[#EAF2F8] text-[#1B4F72] border border-[#D6EAF8] rounded-full px-2.5 py-0.5"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-[#1B4F72]">
                        {expert.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        {expert.availability}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleConnectExpert(expert.id)}
                      className="flex-1 bg-[#5DADE2] hover:bg-[#3498DB] text-xs rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                      size="sm"
                    >
                      <Video className="w-3 h-3 mr-1" />
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#1B4F72] mb-4">
              Can't Find the Right Expert?
            </h3>
            <p className="text-gray-600 mb-8">
              Tell us about your specific needs and we&apos;ll help you find the
              perfect match.
            </p>
            <Button
              className="bg-[#5DADE2] hover:bg-[#3498DB] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              asChild
            >
              <a href="/#problem-categories">
                <MessageSquare className="mr-2 h-5 w-5" />
                Tell Us Your Problem
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
