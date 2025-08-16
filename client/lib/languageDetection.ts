// Language detection utility for Hindi, Hinglish (Hindi in English alphabet), and English

export interface LanguageDetectionResult {
  language: 'hindi' | 'hinglish' | 'english';
  script: 'devanagari' | 'latin';
  confidence: number;
}

export function detectLanguage(text: string): LanguageDetectionResult {
  if (!text || text.trim().length === 0) {
    return { language: 'english', script: 'latin', confidence: 0 };
  }

  const cleanText = text.trim().toLowerCase();
  
  // Check for Devanagari script (Hindi in Hindi script)
  const devanagariRegex = /[\u0900-\u097F]/;
  const hasDevanagari = devanagariRegex.test(text);
  
  if (hasDevanagari) {
    const devanagariChars = (text.match(/[\u0900-\u097F]/g) || []).length;
    const totalChars = text.replace(/\s/g, '').length;
    const devanagariRatio = devanagariChars / totalChars;
    
    return {
      language: 'hindi',
      script: 'devanagari',
      confidence: Math.min(0.9, devanagariRatio + 0.1)
    };
  }

  // Common Hindi words written in English alphabet (Hinglish indicators)
  const hinglishWords = [
    'kya', 'hai', 'hoon', 'hun', 'mein', 'main', 'aur', 'ke', 'ko', 'ki', 'ka',
    'se', 'me', 'par', 'pe', 'nahi', 'nahin', 'koi', 'kuch', 'sab', 'sabse',
    'abhi', 'ab', 'phir', 'fir', 'woh', 'wo', 'yeh', 'ye', 'isko', 'usko',
    'mujhe', 'tumhe', 'humhe', 'unhe', 'kaise', 'kese', 'kyun', 'kyu', 'kahan',
    'kaha', 'kab', 'kitna', 'kitni', 'jana', 'jaana', 'karna', 'kaam', 'ghar',
    'paisa', 'paise', 'paise', 'rupaye', 'baat', 'saath', 'ache', 'accha',
    'bura', 'buri', 'problem', 'samasya', 'samadhan', 'madad', 'help',
    'tension', 'stress', 'family', 'gf', 'bf', 'dost', 'dosti', 'pyaar',
    'shaadi', 'job', 'study', 'padhai', 'exam', 'result', 'parents',
    'mummy', 'papa', 'bhai', 'behen', 'didi', 'anna', 'bachche', 'bacche',
    'ladka', 'ladki', 'aadmi', 'aurat', 'log', 'logo', 'duniya', 'zindagi',
    'life', 'time', 'wakt', 'din', 'raat', 'subah', 'shaam', 'weekend',
    'office', 'gf', 'bf', 'relationship', 'breakup', 'love', 'ishq',
    'bhagwan', 'god', 'mandir', 'temple', 'pooja', 'pray', 'dua'
  ];

  // Common English words that are NOT typically used in Hinglish
  const englishWords = [
    'the', 'and', 'or', 'but', 'because', 'therefore', 'however', 'moreover',
    'furthermore', 'nonetheless', 'although', 'whereas', 'since', 'unless',
    'through', 'during', 'before', 'after', 'while', 'until', 'within',
    'without', 'between', 'among', 'regarding', 'concerning', 'despite',
    'besides', 'instead', 'rather', 'quite', 'very', 'extremely', 'absolutely',
    'definitely', 'probably', 'perhaps', 'maybe', 'certainly', 'obviously'
  ];

  const words = cleanText.split(/\s+/).filter(word => word.length > 1);
  
  let hinglishScore = 0;
  let englishScore = 0;
  
  words.forEach(word => {
    // Remove punctuation for better matching
    const cleanWord = word.replace(/[^\w]/g, '');
    
    if (hinglishWords.includes(cleanWord)) {
      hinglishScore += 2; // Higher weight for Hinglish indicators
    }
    
    if (englishWords.includes(cleanWord)) {
      englishScore += 1;
    }
  });

  // Check for common Hinglish patterns (Roman Hindi)
  const hinglishPatterns = [
    /\b(mein|main)\s+(hun|hoon)\b/,
    /\b(kya|kya)\s+(hai|he)\b/,
    /\b(mujhe|muje)\s+/,
    /\b(tumhe|tuje)\s+/,
    /\bmeri\s+(problem|samasya)\b/,
    /\b(bahut|bhut)\s+/,
    /\b(kaise|kese)\s+(karu|krun)\b/,
    /\b(nahi|nahin)\s+(hai|he)\b/,
    /\b(accha|acha)\s+(nahi|nahin)\b/
  ];

  hinglishPatterns.forEach(pattern => {
    if (pattern.test(cleanText)) {
      hinglishScore += 3;
    }
  });

  // Mixed script usage (English with some Hindi words) indicates Hinglish
  const mixedUsage = /[a-zA-Z]/.test(text) && (hinglishScore > 0);
  if (mixedUsage) {
    hinglishScore += 1;
  }

  // Calculate confidence and determine language
  const totalScore = hinglishScore + englishScore;
  
  if (hinglishScore > englishScore && hinglishScore > 2) {
    return {
      language: 'hinglish',
      script: 'latin',
      confidence: Math.min(0.9, hinglishScore / (totalScore + 1))
    };
  } else if (englishScore > hinglishScore && englishScore > 1) {
    return {
      language: 'english',
      script: 'latin',
      confidence: Math.min(0.9, englishScore / (totalScore + 1))
    };
  } else {
    // Default to English for ambiguous cases
    return {
      language: 'english',
      script: 'latin',
      confidence: 0.5
    };
  }
}

// Generate appropriate response based on detected language
export function formatResponseByLanguage(
  detectedLanguage: LanguageDetectionResult,
  responses: {
    hindi: string;
    hinglish: string;
    english: string;
  }
): string {
  switch (detectedLanguage.language) {
    case 'hindi':
      return responses.hindi;
    case 'hinglish':
      return responses.hinglish;
    case 'english':
    default:
      return responses.english;
  }
}
