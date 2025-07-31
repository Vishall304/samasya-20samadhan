import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Clock, MessageSquare, Filter } from "lucide-react";

export default function Experts() {
  const experts = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      title: "Business Strategy Consultant",
      specialty: "Business & Finance",
      rating: 4.9,
      reviews: 127,
      experience: "10+ years",
      location: "Mumbai, India",
      price: "₹2,500/session",
      availability: "Available today",
      image: "/placeholder.svg",
      skills: ["Business Strategy", "Financial Planning", "Market Analysis"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      title: "Senior Software Architect",
      specialty: "Technology & Software",
      rating: 4.8,
      reviews: 89,
      experience: "12+ years",
      location: "Bangalore, India",
      price: "₹3,000/session",
      availability: "Available tomorrow",
      image: "/placeholder.svg",
      skills: ["Software Architecture", "Cloud Solutions", "System Design"]
    },
    {
      id: 3,
      name: "Dr. Anjali Verma",
      title: "Digital Marketing Expert",
      specialty: "Marketing & Sales",
      rating: 4.9,
      reviews: 156,
      experience: "8+ years",
      location: "Delhi, India",
      price: "₹2,000/session",
      availability: "Available now",
      image: "/placeholder.svg",
      skills: ["Digital Marketing", "SEO", "Social Media Strategy"]
    },
    {
      id: 4,
      name: "Amit Patel",
      title: "Legal Advisor",
      specialty: "Legal Advice",
      rating: 4.7,
      reviews: 94,
      experience: "15+ years",
      location: "Ahmedabad, India",
      price: "₹2,800/session",
      availability: "Available in 2 hours",
      image: "/placeholder.svg",
      skills: ["Corporate Law", "Contract Review", "Compliance"]
    },
    {
      id: 5,
      name: "Dr. Sneha Joshi",
      title: "Career Development Coach",
      specialty: "Career & Professional",
      rating: 4.8,
      reviews: 112,
      experience: "7+ years",
      location: "Pune, India",
      price: "₹1,800/session",
      availability: "Available today",
      image: "/placeholder.svg",
      skills: ["Career Coaching", "Interview Prep", "Professional Development"]
    },
    {
      id: 6,
      name: "Vikram Singh",
      title: "Health & Wellness Expert",
      specialty: "Health & Wellness",
      rating: 4.9,
      reviews: 203,
      experience: "9+ years",
      location: "Chennai, India",
      price: "₹2,200/session",
      availability: "Available tomorrow",
      image: "/placeholder.svg",
      skills: ["Nutrition Planning", "Fitness Coaching", "Mental Wellness"]
    }
  ];

  return (
    <Layout>
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Find Expert Advisors</h1>
          <p className="text-muted-foreground mt-2">
            Connect with verified experts across various fields
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input placeholder="Search experts by name or specialty..." />
          </div>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="business">Business & Finance</SelectItem>
              <SelectItem value="technology">Technology & Software</SelectItem>
              <SelectItem value="marketing">Marketing & Sales</SelectItem>
              <SelectItem value="legal">Legal Advice</SelectItem>
              <SelectItem value="career">Career & Professional</SelectItem>
              <SelectItem value="health">Health & Wellness</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <Card key={expert.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg">{expert.name}</CardTitle>
                    <CardDescription>{expert.title}</CardDescription>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 text-sm font-medium">{expert.rating}</span>
                        <span className="ml-1 text-sm text-muted-foreground">
                          ({expert.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {expert.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {expert.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {expert.experience} experience
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="font-semibold text-foreground">{expert.price}</div>
                    <div className="text-xs text-green-600">{expert.availability}</div>
                  </div>
                  <Button size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Experts
          </Button>
        </div>
      </div>
    </Layout>
  );
}
