import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { X, Send, Check } from "lucide-react";

interface ProblemSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
  categoryIcon?: any;
  categoryColor?: string;
  onSubmitSuccess?: (formData: any) => void;
}

export default function ProblemSubmissionModal({
  isOpen,
  onClose,
  selectedCategory,
  categoryIcon: IconComponent,
  categoryColor,
  onSubmitSuccess,
}: ProblemSubmissionModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    title: "",
    category: selectedCategory || "",
    description: "",
    duration: "",
    previousTreatment: "",
    urgency: "",
    contactEmail: "",
    location: "",
    preferredContactMethod: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Problem submitted:", formData);
    setIsSubmitted(true);

    // After showing success message, trigger AI analysis
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();

      // Trigger AI analysis with the form data
      if (onSubmitSuccess) {
        onSubmitSuccess({
          ...formData,
          category: selectedCategory || formData.category
        });
      }

      // Reset form
      setFormData({
        name: "",
        age: "",
        phoneNumber: "",
        title: "",
        category: selectedCategory || "",
        description: "",
        duration: "",
        previousTreatment: "",
        urgency: "",
        contactEmail: "",
        location: "",
        preferredContactMethod: "",
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getPlaceholderByCategory = (category: string) => {
    const placeholders: { [key: string]: string } = {
      "Mental Health": "I've been feeling really anxious lately, especially about...",
      "Physical Wellness": "I've been having trouble with my sleep/energy/health...",
      "Relationships": "I'm having issues with my family/partner/friends about...",
      "Work & Study": "I'm stressed about my job/exams/career and...",
      "Financial Stress": "I'm worried about money and my financial situation...",
      "Life Stuff": "I'm feeling confused about my life and...",
    };
    return placeholders[category] || "Tell us what's on your mind...";
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md mx-4">
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank you for sharing!
            </h3>
            <p className="text-gray-600 mb-4">
              Our AI is now analyzing your problem to provide personalized suggestions and find the perfect expert for you.
            </p>
            <div className="text-sm text-gray-500">
              Preparing your personalized analysis... ✨
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {IconComponent && (
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${categoryColor}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
              )}
              <div>
                <DialogTitle className="text-lg sm:text-xl">Share Your {selectedCategory} Concern</DialogTitle>
                <DialogDescription className="text-sm sm:text-base">
                  Help us understand what you're going through so we can connect you with the right expert.
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          {/* Personal Information */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <h4 className="font-semibold text-purple-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Personal Information
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs sm:text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className="text-xs sm:text-sm font-medium">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  min="13"
                  max="100"
                  placeholder="Your age"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone Number *
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">
                  City/Location *
                </Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  required
                  className="h-11"
                />
              </div>
            </div>
          </div>

          {/* Problem Details */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Problem Details
            </h4>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  What's the main issue you're facing? *
                </Label>
                <Input
                  id="title"
                  placeholder={`e.g., I'm really struggling with ${selectedCategory?.toLowerCase()} lately...`}
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Detailed Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder={getPlaceholderByCategory(selectedCategory || "")}
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                  className="resize-none"
                />
                <p className="text-xs text-gray-500">
                  Please describe your problem in detail. Include symptoms, situations, or specific challenges you're facing.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-medium">
                  How long have you been experiencing this problem? *
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("duration", value)}
                  required
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="few-days">A few days</SelectItem>
                    <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                    <SelectItem value="1-month">About a month</SelectItem>
                    <SelectItem value="2-3-months">2-3 months</SelectItem>
                    <SelectItem value="6-months">6 months</SelectItem>
                    <SelectItem value="1-year">About a year</SelectItem>
                    <SelectItem value="more-than-year">More than a year</SelectItem>
                    <SelectItem value="several-years">Several years</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="previousTreatment" className="text-sm font-medium">
                  Have you sought help for this before?
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("previousTreatment", value)}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no">No, this is my first time seeking help</SelectItem>
                    <SelectItem value="counselor">Yes, I've seen a counselor/therapist</SelectItem>
                    <SelectItem value="doctor">Yes, I've consulted a doctor</SelectItem>
                    <SelectItem value="family">Yes, I've talked to family/friends</SelectItem>
                    <SelectItem value="online">Yes, I've tried online resources</SelectItem>
                    <SelectItem value="medication">Yes, I'm currently on medication</SelectItem>
                    <SelectItem value="other">Yes, other form of help</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Urgency Level */}
          <div className="space-y-2">
            <Label htmlFor="urgency" className="text-sm font-medium">
              How urgent is this for you? *
            </Label>
            <Select
              onValueChange={(value) => handleInputChange("urgency", value)}
              required
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">
                  📅 Not urgent - I can wait a few days
                </SelectItem>
                <SelectItem value="medium">
                  ⏰ Somewhat urgent - help within 24-48 hours would be great
                </SelectItem>
                <SelectItem value="high">
                  🚨 Pretty urgent - I really need support soon
                </SelectItem>
                <SelectItem value="critical">
                  ⚡ Very urgent - I need help as soon as possible
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact & Communication Preferences */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Contact & Communication Preferences
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredContactMethod" className="text-sm font-medium">
                  Preferred Contact Method *
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("preferredContactMethod", value)}
                  required
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="How would you like us to contact you?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">📞 Phone Call</SelectItem>
                    <SelectItem value="whatsapp">💬 WhatsApp</SelectItem>
                    <SelectItem value="email">📧 Email</SelectItem>
                    <SelectItem value="video">📹 Video Call</SelectItem>
                    <SelectItem value="text">💬 Text Messages</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                  className="h-11"
                />
              </div>
            </div>
          </div>


          {/* Privacy Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-sm">
                <p className="font-medium text-amber-900 mb-1">Privacy & Confidentiality</p>
                <p className="text-amber-700">
                  All information provided is strictly confidential and will only be used to match you with the right expert. Your personal details are secure and protected. We follow professional confidentiality standards.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 min-h-[44px] text-sm sm:text-base"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 min-h-[44px] text-sm sm:text-base"
            >
              <Send className="mr-2 h-4 w-4" />
              Submit & Get Help
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
