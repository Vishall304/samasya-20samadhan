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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Check } from "lucide-react";

interface ProblemSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
  categoryIcon?: any;
  categoryColor?: string;
  onSubmitSuccess?: (formData: any) => void;
  problemDescription?: string; // Text from the main textarea
}

export default function ProblemSubmissionModal({
  isOpen,
  onClose,
  selectedCategory,
  categoryIcon: IconComponent,
  categoryColor,
  onSubmitSuccess,
  problemDescription = "",
}: ProblemSubmissionModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    location: "",
    duration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Problem submitted:", formData);
    setIsSubmitted(true);
    
    // After showing success message, trigger AI analysis
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      
      // Trigger AI analysis with the combined data
      if (onSubmitSuccess) {
        onSubmitSuccess({
          ...formData,
          category: selectedCategory,
          description: problemDescription,
        });
      }
      
      // Reset form
      setFormData({
        name: "",
        age: "",
        phoneNumber: "",
        location: "",
        duration: "",
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
              धन्यवाद! (Thank you!)
            </h3>
            <p className="text-gray-600 mb-4">
              हमारा AI आपकी समस्या का विश्लेषण कर रहा है और सबसे अच्छे सुझाव तैयार कर रहा है...
            </p>
            <div className="text-sm text-gray-500">
              आपके लिए perfect expert भी खोज रहे हैं ✨
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            {IconComponent && (
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${categoryColor}`}>
                <IconComponent className="h-5 w-5" />
              </div>
            )}
            <div>
              <DialogTitle className="text-lg sm:text-xl">
                {selectedCategory} की समस्या क��� लिए मदद
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base">
                बस कुछ बेसिक जानकारी दें, बाकी हमारा AI संभाल लेगा
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Show problem preview */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>आपकी समस्या:</strong> "{selectedCategory}" 
            <br />
            <span className="text-blue-600">
              {problemDescription ? problemDescription.substring(0, 150) + '...' : 'आपने जो लिखा था'}
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Essential Information */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              आपकी जानकारी (Your Information)
            </h4>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    नाम (Name) *
                  </Label>
                  <Input
                    id="name"
                    placeholder="अपना पूरा नाम लिखें"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm font-medium">
                    उम्र (Age) *
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min="13"
                    max="100"
                    placeholder="आपकी उम्र"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    मोबाइल नंबर (Mobile Number) *
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
                    कहाँ से हैं (Location) *
                  </Label>
                  <Input
                    id="location"
                    placeholder="शहर, राज्य"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration" className="text-sm font-medium">
                  यह समस्या कब से हो रही है? (How long have you been facing this?) *
                </Label>
                <Select
                  onValueChange={(value) => handleInputChange("duration", value)}
                  required
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="समय चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="few-days">कुछ दिन (A few days)</SelectItem>
                    <SelectItem value="1-2-weeks">1-2 हफ्ते (1-2 weeks)</SelectItem>
                    <SelectItem value="1-month">लगभग 1 महीना (About a month)</SelectItem>
                    <SelectItem value="2-3-months">2-3 महीने (2-3 months)</SelectItem>
                    <SelectItem value="6-months">6 महीने (6 months)</SelectItem>
                    <SelectItem value="1-year">लगभग 1 साल (About a year)</SelectItem>
                    <SelectItem value="more-than-year">1 साल से ज्यादा (More than a year)</SelectItem>
                    <SelectItem value="several-years">कई साल (Several years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="text-sm">
                <p className="font-medium text-green-900 mb-1">🔒 गोपनीयता और सुरक्षा (Privacy & Security)</p>
                <p className="text-green-700">
                  आपकी सारी जानकारी पूरी तरह सुरक्षित और गुप्त रखी जाएगी। हमारा AI आपकी समस्या को समझकर सबसे अच्छे सुझाव और एक्सपर्ट देगा।
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
              className="flex-1 min-h-[48px] text-sm sm:text-base"
            >
              रद्द करें (Cancel)
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 min-h-[48px] text-sm sm:text-base"
            >
              🤖 AI से मदद लें (Get AI Help)
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
