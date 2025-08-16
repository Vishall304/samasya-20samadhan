import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  User,
  MessageSquare,
  Phone,
  Video,
  Star,
  Clock,
  CheckCircle,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { detectLanguage, formatResponseByLanguage } from "@/lib/languageDetection";

interface AIResponseChatProps {
  isOpen: boolean;
  onClose: () => void;
  problemText: string;
  category: string;
  userInfo: any;
  onConnectExpert: (expertId: string) => void;
}

interface Expert {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  responseTime: string;
  languages: string[];
  availability: string;
}

export default function AIResponseChat({
  isOpen,
  onClose,
  problemText,
  category,
  userInfo,
  onConnectExpert,
}: AIResponseChatProps) {
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [showExperts, setShowExperts] = useState(false);

  // Generate AI response based on the problem
  const generateAIResponse = (problem: string, cat: string, user: any) => {
    const responses: { [key: string]: string } = {
      "Mental Health": `नमस्ते ${user.name}! 🙏

मैंने आपकी समस्या को ध्यान से पढ़ा है। आप **तनाव और चिंता** की समस्या से गुजर रहे हैं, जो आजकल बहुत आम है।

## 🔍 **आपकी समस्या का विश्लेषण:**
आपके लक्षणों को देखते हुए, लगता है कि आपको:
- काम का तनाव (Work Stress)
- नींद की कमी (Sleep Issues) 
- मानसिक दबाव (Mental Pressure)
- अकेलापन का एहसास हो रहा है

## 💡 **तुरंत आजमाए जा सकने वाले �����पाय:**

**1. श्वास तकनीक (Breathing Technique):**
- 4-7-8 तकनीक: 4 सेकंड सांस लें, 7 सेकंड रोकें, 8 सेकंड में छोड़ें
- दिन में 3-4 बार करें

**2. दैनिक रूटीन:**
- रोज सुबह 10 मिनट टहलें
- रात को 10:30 बजे तक फोन बंद कर दें
- हर दिन 3 अच्छी बातें लिखें

**3. तुरंत राहत के लिए:**
- गर्म पानी से नहाएं
- अपने पसंदीदा गाने सुनें
- किसी दोस्त या परिवार से बात करें

## 🎯 **लंबे स���य के लिए:**
- नियमित व्यायाम शुरू करें
- मेडिटेशन का अभ्यास करें  
- अपने विचारों को डायरी में लिखें

${user.duration === 'several-years' || user.duration === 'more-than-year' 
  ? '\n⚠️ **चूंकि यह समस्या काफी समय से है, इसलिए professional help लेना जरूरी है।**' 
  : '\n✅ **���ह समस्या नई है तो घरेलू उपायों से ठीक हो सकती है।**'}

---

मैं आपके लिए **${user.location}** के सबसे अच्छे experts खोज रहा हूं जो आपकी म���द कर सकते हैं...`,

      "Relationships": `नमस्ते ${user.name}! 🙏

आपकी रिश्तों की समस्या को समझने की कोशिश की है। ये **कम्युनिकेशन और भावनात्मक दूरी** की समस्या लगती है।

## 🔍 **समस्या का विश्लेषण:**
- रिश्तों में गलतफहमी
- बातचीत की कमी
- भावनात्मक अपेक्षाओं का ना मिलना
- विश्वास की कमी

## 💡 **तुरंत करने योग्य उपाय:**

**1. बेहतर संवाद (Better Communication):**
- दूसरे की बात पूरी सुनें
- अपनी feelings खुलकर express करें
- गुस्से में कुछ ना कहें

**2. समझदारी से व्यवहार:**
- दूसरे की परिस्थिति समझने की कोशिश करें
- छोटी-छोटी खुशी के moments celebrate करें
- रोज एक appreciation message भेजें

**3. रिश्ते मजबू�� बनाने के लिए:**
- Quality time साथ बिताएं
- एक-दूसरे के लिए कुछ special करें
- Past की बातों को बार-बार ना उठाएं

## 🎯 **लंबे समय के लिए solution:**
- Couple counseling ले सकते हैं
- Trust building activities करें
- Professional relationship coach से मिलें

${user.duration === 'several-years' 
  ? '\n⚠️ **ल���बे समय से यह समस्या है तो couples therapy जरूरी है।**' 
  : '\n✅ **अभी भी बात बन सकती है, थोड़ी कोशिश करें।**'}

---

आपके लिए **relationship experts** खोज रहा हूं...`,

      "Work & Study": `नमस्ते ${user.name}! 🙏

आपकी **काम और पढ़ाई** की समस्या समझ आ गई है। यह productivity औ��� stress management का मामला है।

## 🔍 **समस्या का विश्लेषण:**
- काम का बोझ (Work Overload)
- Time management की कमी
- Focus और concentration की समस्या
- Future की चिंता

## 💡 **तुरंत लागू करने वाले उपाय:**

**1. Time Management:**
- Pomodoro Technique: 25 मिनट काम, 5 मिनट break
- सबसे जरूरी काम पहले करें
- Phone को silent रखें

**2. Productivity बढ़ाने के लिए:**
- Daily 3 main goals set करें
- To-do list बनाएं
- Multitasking बंद करें

**3. Stress कम करने के लिए:**
- लंच break जरूर लें
- Office के बाद work की बात ना करें
- Weekend में पूरा आराम करें

## 🎯 **Career growth के लिए:**
- Skill development पर focus करें
- Networking बढ़ाएं
- Mentor से guidance लें

${user.age < 25 
  ? '\n✅ **आपकी उम्र कम है, सही guidance से career बन जाएगा।**' 
  : '\n💪 **Experience है आपके पास, बस strategy change करनी है।**'}

---

**Career और Study experts** खोज रहा हूं आपके लिए...`,

      "Financial Stress": `नमस्ते ${user.name}! 🙏

आपकी **पैसों की चिंता** बिल्कुल समझ आ ��ई है। Financial stress आजकल हर किसी की है।

## 🔍 **समस्या का विश्लेषण:**
- पैसों की तंगी
- भविष्य की चिंता
- Expenses control नहीं हो रहे
- Income-expense balance नहीं है

## 💡 **तुरंत शुरू करने वाले उपाय:**

**1. Budget बनाएं:**
- 50% जरूरी चीजों पर
- 30% मन���रंजन पर  
- 20% savings में

**2. खर्च कम करने के तरीके:**
- हर expense को note करें
- Unnecessary subscriptions cancel करें
- Local transport use करें

**3. Income बढ़ाने के विकल्प:**
- Side business शुरू करें
- Freelancing करें
- Skill development करके better job पाएं

## 🎯 **Emergency fund बनाना:**
- हर महीने ₹500 save करना शुरू करें
- FD या RD शुरू करें
- Insurance जरूर लें

${user.duration === 'several-years' 
  ? '\n⚠️ **लंबे समय की problem है, financial advisor से मिलना जरूरी है।**' 
  : '\n✅ **समय ���हते control कर लेंगे, planning करनी होगी।**'}

---

**Financial planning experts** आपके लिए खोज रहा हूं...`,

      "Physical Wellness": `नमस्ते ${user.name}! 🙏

आपकी **शारीरिक परेशानी** का analysis किया है। Health को लेकर चिंता होना स्वाभाविक है।

## 🔍 **समस्या का विश्लेषण:**
- नींद पूरी नहीं हो रही
- Energy level कम है
- Body pain या discomfort
- Lifestyle unbalanced है

## 💡 **तुरंत अपनाने वाले उपाय:**

**1. Sleep Pattern ठीक करें:**
- रात 10:30 तक सो जाएं
- सुबह same time उठें
- सोने से 1 घंटा पहले screen बंद करें

**2. Energy बढ़ाने के लिए:**
- रोज 30 ��िनट walk करें
- हर घंटे में 5 मिनट stretch करें
- भरपूर पानी पिएं (8-10 गिलास)

**3. Diet में सुधार:**
- समय पर खाना खाएं
- जंक फूड कम करें
- Fruits औ�� vegetables ज्यादा लें

## 🎯 **Long-term health के लिए:**
- Regular checkup करवाएं
- Yoga या exercise routine बनाएं
- Stress management सीखें

${user.age > 40 
  ? '\n⚠️ **40+ age में regular health checkup जरूरी है।**' 
  : '\n✅ **Young age में lifestyle change से सब ठीक हो जाएगा।**'}

---

**Health और wellness experts** आपके लि��� ढूंढ रहा हूं...`,

      "Life Stuff": `नमस्ते ${user.name}! 🙏

Life direction और purpose की confusion होना बिल्कुल normal है। आप अकेले नहीं हैं इस feeling में।

## 🔍 **समस्या का विश्लेषण:**
- Life में clarity नहीं है
- Goals confusing लग रहे हैं
- Motivation कम हो गया है
- Future uncertain लग रहा है

## ���� **Self-discovery के लिए:**

**1. अपने Values पहचानें:**
- क्या चीजें आपको खुशी देती हैं?
- आपके लिए सबसे जरूरी क्या है?
- आप किस तरह का व्यक्ति ब���ना चाहते हैं?

**2. Small steps लें:**
- हर हफ्ते कुछ नया try करें
- अपने interests explore करें  
- Different activities म���ं participate करें

**3. Clarity पाने के लिए:**
- रोज journaling करें
- Meditation practice करें
- Mentors से बात करें

## 🎯 **Life direction के लिए:**
- 5 साल का vision बनाएं
- Short-term goals set करें
- Progress track करें

${user.age < 25 
  ? '\n✅ **Young age में confusion normal है, explore करते रहें।**' 
  : '\n💪 **Experience है आपके पास, बस direction change करनी है।**'}

---

**Life coaches और mentors** आपके लिए खोज रहा हूं...`
    };

    return responses[cat] || responses["Mental Health"];
  };

  // Generate experts based on category
  const generateExperts = (category: string) => {
    const expertsMap: { [key: string]: Expert[] } = {
      "Mental Health": [
        {
          id: "venkatesh-sontakke",
          name: "Venkatesh Sontakke",
          specialty: "Senior Psychologist & Life Coach",
          rating: 5.0,
          responseTime: "Usually responds in 1 hour",
          languages: ["Hindi", "English", "Marathi"],
          availability: "Available today"
        },
        {
          id: "dr-sharma",
          name: "Dr. Priya Sharma",
          specialty: "Anxiety & Stress Specialist",
          rating: 4.9,
          responseTime: "Usually responds in 2 hours",
          languages: ["Hindi", "English"],
          availability: "Available today"
        },
        {
          id: "counselor-singh",
          name: "Rajesh Singh",
          specialty: "Workplace Stress Expert",
          rating: 4.8,
          responseTime: "Usually responds in 4 hours",
          languages: ["Hindi", "English", "Punjabi"],
          availability: "Available tomorrow"
        }
      ],
      "Relationships": [
        {
          id: "venkatesh-sontakke",
          name: "Venkatesh Sontakke",
          specialty: "Relationship & Life Expert",
          rating: 5.0,
          responseTime: "Usually responds in 1 hour",
          languages: ["Hindi", "English", "Marathi"],
          availability: "Available today"
        },
        {
          id: "dr-patel",
          name: "Dr. Kavita Patel",
          specialty: "Relationship Counselor",
          rating: 4.9,
          responseTime: "Usually responds in 3 hours",
          languages: ["Hindi", "English", "Gujarati"],
          availability: "Available today"
        }
      ],
      "Work & Study": [
        {
          id: "venkatesh-sontakke",
          name: "Venkatesh Sontakke",
          specialty: "Career & Study Guidance Expert",
          rating: 5.0,
          responseTime: "Usually responds in 1 hour",
          languages: ["Hindi", "English", "Marathi"],
          availability: "Available today"
        },
        {
          id: "career-coach",
          name: "Arun Kumar",
          specialty: "Career Development Coach",
          rating: 4.8,
          responseTime: "Usually responds in 5 hours",
          languages: ["Hindi", "English"],
          availability: "Available today"
        }
      ],
      "Financial Stress": [
        {
          id: "financial-advisor",
          name: "Sunita Agarwal",
          specialty: "Financial Planning Expert",
          rating: 4.7,
          responseTime: "Usually responds in 6 hours",
          languages: ["Hindi", "English"],
          availability: "Available tomorrow"
        }
      ],
      "Physical Wellness": [
        {
          id: "health-expert",
          name: "Dr. Rahul Verma",
          specialty: "Wellness & Lifestyle Coach",
          rating: 4.8,
          responseTime: "Usually responds in 4 hours",
          languages: ["Hindi", "English"],
          availability: "Available today"
        }
      ],
      "Life Stuff": [
        {
          id: "venkatesh-sontakke",
          name: "Venkatesh Sontakke",
          specialty: "Life Transformation Expert",
          rating: 5.0,
          responseTime: "Usually responds in 1 hour",
          languages: ["Hindi", "English", "Marathi"],
          availability: "Available today"
        },
        {
          id: "life-coach",
          name: "Meera Joshi",
          specialty: "Life Direction Coach",
          rating: 4.9,
          responseTime: "Usually responds in 3 hours",
          languages: ["Hindi", "English"],
          availability: "Available today"
        }
      ]
    };
    
    return expertsMap[category] || expertsMap["Mental Health"];
  };

  const aiResponse = generateAIResponse(problemText, category, userInfo);
  const experts = generateExperts(category);

  // Typing animation effect
  useEffect(() => {
    if (isOpen && isTyping) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < aiResponse.length) {
          setDisplayedText(aiResponse.substring(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => setShowExperts(true), 1000);
          clearInterval(timer);
        }
      }, 30); // Typing speed

      return () => clearInterval(timer);
    }
  }, [isOpen, aiResponse, isTyping]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">SamasyaSamadhan AI</h3>
              <p className="text-sm text-gray-500">आपकी समस्य�� क��� समाधान</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* User Message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-purple-50 rounded-2xl rounded-tl-sm p-4">
                <p className="text-sm font-medium text-purple-700 mb-2">
                  {userInfo.name} ({category})
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {problemText}
                </p>
              </div>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-2xl rounded-tl-sm p-4">
                {isTyping && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <span className="text-xs text-gray-500">AI typing...</span>
                  </div>
                )}
                <div className="prose prose-sm max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {displayedText}
                  </div>
                  {!isTyping && (
                    <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-200">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Copy className="w-3 h-3 mr-1" />
                        Copy
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <ThumbsUp className="w-3 h-3 mr-1" />
                        Helpful
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <ThumbsDown className="w-3 h-3 mr-1" />
                        Not helpful
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Expert Recommendations */}
          {showExperts && (
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                🔥 **आपके लिए Perfect Experts:**
              </h4>
              <div className="space-y-4">
                {experts.map((expert, index) => (
                  <Card key={expert.id} className={`hover:shadow-lg transition-all ${index === 0 ? 'ring-2 ring-purple-200 bg-purple-50' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h5 className="font-semibold text-gray-900">{expert.name}</h5>
                            {index === 0 && (
                              <Badge className="bg-purple-100 text-purple-700">Best Match</Badge>
                            )}
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">{expert.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-purple-700 font-medium text-sm mb-2">{expert.specialty}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {expert.responseTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3" />
                              {expert.languages.join(", ")}
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {expert.availability}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Chat
                          </Button>
                          <Button 
                            onClick={() => onConnectExpert(expert.id)}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                            size="sm"
                          >
                            Connect Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!isTyping && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                💡 क्या यह response helpful था? आपका feedback हमारे लिए जरूरी है।
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => {
                  setIsTyping(true);
                  setDisplayedText("");
                  setShowExperts(false);
                }}>
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Re-generate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
