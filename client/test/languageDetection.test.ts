// Test file for language detection functionality
import { describe, it, expect } from 'vitest';
import { detectLanguage, formatResponseByLanguage } from '../lib/languageDetection';

// Test cases for different language inputs
const testCases = [
  {
    input: "Hello, I am feeling very stressed about my work",
    expected: "english",
    description: "Pure English input"
  },
  {
    input: "नमस्ते, मैं अपने काम को लेकर बहुत तनाव में हूं",
    expected: "hindi",
    description: "Pure Hindi (Devanagari) input"
  },
  {
    input: "Hello, main apne kaam ko lekar bahut tension mein hun",
    expected: "hinglish", 
    description: "Mixed Hinglish input"
  },
  {
    input: "mujhe lagta hai ki main depression mein hun aur kuch samjh nahi aa raha",
    expected: "hinglish",
    description: "Hinglish with emotional content"
  },
  {
    input: "mere ghar mein bahut problems hain, family issues bhi hain",
    expected: "hinglish",
    description: "Hinglish with family context"
  },
  {
    input: "I feel really depressed and don't know what to do",
    expected: "english",
    description: "English emotional content"
  },
  {
    input: "मेरा mood off रहता है, kya karu samjh nahi aata",
    expected: "hinglish",
    description: "Mixed Hindi-English script"
  },
  {
    input: "job stress bahut zyada hai, salary bhi kam hai",
    expected: "hinglish",
    description: "Work-related Hinglish"
  }
];

// Function to run tests
export function runLanguageDetectionTests() {
  console.log("🧪 Running Language Detection Tests...\n");
  
  let passed = 0;
  let failed = 0;
  
  testCases.forEach((testCase, index) => {
    const result = detectLanguage(testCase.input);
    const isCorrect = result.language === testCase.expected;
    
    console.log(`Test ${index + 1}: ${testCase.description}`);
    console.log(`Input: "${testCase.input}"`);
    console.log(`Expected: ${testCase.expected}`);
    console.log(`Detected: ${result.language} (confidence: ${result.confidence.toFixed(2)})`);
    console.log(`Result: ${isCorrect ? '✅ PASS' : '❌ FAIL'}`);
    console.log('---');
    
    if (isCorrect) {
      passed++;
    } else {
      failed++;
    }
  });
  
  console.log(`\n📊 Test Results:`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`📈 Success Rate: ${((passed / testCases.length) * 100).toFixed(1)}%`);
  
  return { passed, failed, total: testCases.length };
}

// Function to test response formatting
export function testResponseFormatting() {
  console.log("\n🔤 Testing Response Formatting...\n");
  
  const sampleResponses = {
    hindi: "यह हिंदी में उत्तर है।",
    hinglish: "Yeh hinglish mein jawab hai.",
    english: "This is an English response."
  };
  
  const testInputs = [
    { input: "Hello world", expectedLang: "english" },
    { input: "नमस्कार दुनिया", expectedLang: "hindi" },
    { input: "hello duniya kaise ho", expectedLang: "hinglish" }
  ];
  
  testInputs.forEach((test, index) => {
    const detectedLang = detectLanguage(test.input);
    const formattedResponse = formatResponseByLanguage(detectedLang, sampleResponses);
    
    console.log(`Response Test ${index + 1}:`);
    console.log(`Input: "${test.input}"`);
    console.log(`Detected: ${detectedLang.language}`);
    console.log(`Response: "${formattedResponse}"`);
    console.log(`Expected Response Type: ${test.expectedLang}`);
    console.log('---');
  });
}

// Export test functions for use in console
if (typeof window !== 'undefined') {
  (window as any).testLanguageDetection = runLanguageDetectionTests;
  (window as any).testResponseFormatting = testResponseFormatting;
}
