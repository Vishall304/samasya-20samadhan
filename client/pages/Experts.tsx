import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Brain,
  Heart,
  GraduationCap,
  DollarSign,
  Dumbbell,
  Globe,
  Star,
  Clock,
  MessageSquare,
  Phone,
  Video,
  Search,
  Filter,
  Users,
  Award,
  MapPin,
} from "lucide-react";
import { useState } from "react";

interface Expert {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviewCount: number;
  responseTime: string;
  languages: string[];
  location: string;
  price: string;
  availability: string;
  bio: string;
  categories: string[];
  verified: boolean;
  image?: string;
}

export default function Experts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const experts: Expert[] = [
    {
      id: "dr-priya-sharma",
      name: "Dr. प्रिया शर्मा",
      specialty: "Clinical Psychologist",
      experience: "8 years experience",
      rating: 4.9,
      reviewCount: 247,
      responseTime: "Usually responds in 2 hours",
      languages: ["Hindi", "English"],
      location: "Mumbai, Maharashtra",
      price: "₹800 / session",
      availability: "Available today",
      bio: "Specialized in anxiety, depression, and stress management. Uses CBT and mindfulness approaches.",
      categories: ["Mental Health", "Stress Management"],
      verified: true,
    },
    {
      id: "rajesh-singh",
      name: "राजेश सिंह",
      specialty: "Career Counselor",
      experience: "12 years experience",
      rating: 4.8,
      reviewCount: 189,
      responseTime: "Usually responds in 4 hours",
      languages: ["Hindi", "English", "Punjabi"],
      location: "Delhi, India",
      price: "₹600 / session",
      availability: "Available tomorrow",
      bio: "Expert in career guidance, workplace stress, and professional development.",
      categories: ["Work & Study", "Career Development"],
      verified: true,
    },
    {
      id: "dr-kavita-patel",
      name: "Dr. कविता पटेल",
      specialty: "Relationship Counselor",
      experience: "10 years experience",
      rating: 4.9,
      reviewCount: 312,
      responseTime: "Usually responds in 3 hours",
      languages: ["Hindi", "English", "Gujarati"],
      location: "Ahmedabad, Gujarat",
      price: "₹900 / session",
      availability: "Available today",
      bio: "Specializes in couples therapy, family counseling, and communication skills.",
      categories: ["Relationships", "Family Therapy"],
      verified: true,
    },
    {
      id: "arun-kumar",
      name: "अरुण कुमार",
      specialty: "Financial Advisor",
      experience: "15 years experience",
      rating: 4.7,
      reviewCount: 156,
      responseTime: "Usually responds in 6 hours",
      languages: ["Hindi", "English"],
      location: "Bangalore, Karnataka",
      price: "₹1200 / session",
      availability: "Available this week",
      bio: "Expert in financial planning, debt management, and investment strategies.",
      categories: ["Financial Stress", "Financial Planning"],
      verified: true,
    },
    {
      id: "dr-meera-joshi",
      name: "Dr. मीरा जोशी",
      specialty: "Life Coach",
      experience: "6 years experience",
      rating: 4.8,
      reviewCount: 98,
      responseTime: "Usually responds in 5 hours",
      languages: ["Hindi", "English", "Marathi"],
      location: "Pune, Maharashtra",
      price: "₹700 / session",
      availability: "Available today",
      bio: "Helps with life direction, goal setting, and personal growth.",
      categories: ["Life Stuff", "Personal Development"],
      verified: true,
    },
    {
      id: "dr-rahul-verma",
      name: "Dr. राहुल वर्मा",
      specialty: "Wellness Coach",
      experience: "9 years experience",
      rating: 4.6,
      reviewCount: 134,
      responseTime: "Usually responds in 4 hours",
      languages: ["Hindi", "English"],
      location: "Chennai, Tamil Nadu",
      price: "₹650 / session",
      availability: "Available tomorrow",
      bio: "Focuses on physical wellness, nutrition, and healthy lifestyle habits.",
      categories: ["Physical Wellness", "Health Coaching"],
      verified: true,
    },
  ];

  const categories = [
    { name: "Mental Health", icon: Brain, color: "bg-purple-100 text-purple-600" },
    { name: "Relationships", icon: Heart, color: "bg-red-100 text-red-600" },
    { name: "Work & Study", icon: GraduationCap, color: "bg-blue-100 text-blue-600" },
    { name: "Financial Stress", icon: DollarSign, color: "bg-emerald-100 text-emerald-600" },
    { name: "Physical Wellness", icon: Dumbbell, color: "bg-green-100 text-green-600" },
    { name: "Life Stuff", icon: Globe, color: "bg-orange-100 text-orange-600" },
  ];

  const filteredExperts = experts.filter((expert) => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expert.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || expert.categories.includes(selectedCategory);
    const matchesLanguage = !selectedLanguage || expert.languages.includes(selectedLanguage);
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const handleConnectExpert = (expertId: string) => {
    console.log("Connecting with expert:", expertId);
    alert("Expert connection feature would be implemented here! You would be redirected to chat/call with the expert.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Find Your Perfect <span className="text-purple-300">Expert</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
              Connect with verified professionals who understand your challenges and can guide you towards solutions.
            </p>

            {/* Search and Filters */}
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search experts by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Languages</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Punjabi">Punjabi</SelectItem>
                    <SelectItem value="Gujarati">Gujarati</SelectItem>
                    <SelectItem value="Marathi">Marathi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results count */}
            <div className="text-white/80 mb-8">
              Found {filteredExperts.length} experts matching your criteria
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 relative">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Browse by Category
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name === selectedCategory ? "" : category.name)}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white border-purple-400'
                      : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-xs font-medium">{category.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="py-12 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredExperts.map((expert) => (
              <Card key={expert.id} className="bg-white/95 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  {/* Expert Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {expert.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{expert.name}</h3>
                        {expert.verified && (
                          <Award className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-purple-700 font-medium text-sm">{expert.specialty}</p>
                      <p className="text-gray-600 text-xs">{expert.experience}</p>
                    </div>
                  </div>

                  {/* Rating and Reviews */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{expert.rating}</span>
                      <span className="text-gray-500 text-sm">({expert.reviewCount} reviews)</span>
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
                      <span className="text-gray-600">{expert.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{expert.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Speaks: {expert.languages.join(", ")}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {expert.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {/* Pricing and Availability */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-purple-700">{expert.price}</div>
                      <div className="text-xs text-gray-500">{expert.availability}</div>
                    </div>
                    <Badge 
                      variant={expert.availability.includes('today') ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {expert.availability.includes('today') ? '🟢 Available' : '🟡 Busy'}
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs"
                    >
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Message
                    </Button>
                    <Button 
                      onClick={() => handleConnectExpert(expert.id)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xs"
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

          {filteredExperts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No experts found</h3>
              <p className="text-white/70 mb-4">
                Try adjusting your search criteria or browse all categories.
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setSelectedLanguage("");
                }}
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Can't Find the Right Expert?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Tell us about your specific needs and we'll help you find the perfect match.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold"
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
