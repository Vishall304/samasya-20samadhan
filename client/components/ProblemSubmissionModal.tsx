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
}

export default function ProblemSubmissionModal({
  isOpen,
  onClose,
  selectedCategory,
  categoryIcon: IconComponent,
  categoryColor,
}: ProblemSubmissionModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: selectedCategory || "",
    description: "",
    urgency: "",
    contactEmail: "",
    age: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Problem submitted:", formData);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        title: "",
        category: selectedCategory || "",
        description: "",
        urgency: "",
        contactEmail: "",
        age: "",
        location: "",
      });
    }, 3000);
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
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Thank you for sharing!
            </h3>
            <p className="text-gray-600 mb-4">
              We've received your message and our experts will review it soon. You'll hear from us within 24 hours.
            </p>
            <div className="text-sm text-gray-500">
              You're not alone in this journey. ✨
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {IconComponent && (
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${categoryColor}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
              )}
              <div>
                <DialogTitle className="text-xl">Share Your {selectedCategory} Concern</DialogTitle>
                <DialogDescription>
                  Help us understand what you're going through so we can connect you with the right expert.
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Quick Summary */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              What's the main thing that's bothering you? *
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

          {/* Detailed Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Tell us more about what's happening *
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
              Share as much or as little as you're comfortable with. This helps us match you with the right expert.
            </p>
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

          {/* Optional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-sm font-medium">
                Age range (optional)
              </Label>
              <Select onValueChange={(value) => handleInputChange("age", value)}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="teen">13-17 years</SelectItem>
                  <SelectItem value="young-adult">18-25 years</SelectItem>
                  <SelectItem value="adult">26-35 years</SelectItem>
                  <SelectItem value="middle-age">36-50 years</SelectItem>
                  <SelectItem value="senior">50+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location (optional)
              </Label>
              <Input
                id="location"
                placeholder="City, State/Country"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="h-11"
              />
            </div>
          </div>

          {/* Contact Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email (optional)
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.contactEmail}
              onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              className="h-11"
            />
            <p className="text-xs text-gray-500">
              Only provide if you want us to follow up via email. We respect your privacy completely.
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-sm">
                <p className="font-medium text-blue-900 mb-1">Your privacy matters</p>
                <p className="text-blue-700">
                  All submissions are completely anonymous and secure. We never share your personal information, and you can choose to remain completely anonymous throughout the process.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
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
