
interface AIResponseContent {
  category: string;
  greeting: string;
  analysis: string;
  recommendation: string;
  summary: string;
  language: string;
}

interface OpenRouterResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}




export const getAIResponses = async (
  problem: string
): Promise<AIResponseContent> => {
 
 
  try {
    const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;
    const modelName = import.meta.env.VITE_OPENROUTER_MODEL_NAME;
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "SamasyaSamadhan",
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          {
            role: "system",
            content: `You are SamasyaSamadhan AI. 
Always reply ONLY in valid JSON format.

Rules:
1. Choose exactly one category from this list:
   - Mental Health
   - Relationships
   - Work & Study
   - Financial Stress
   - Physical Wellness
   - Life Stuff
2. Do not create new categories.
3. JSON response format must be:

{
  "category": "<one of the 6 categories>",
  "greeting": "<short friendly intro>",
  "analysis": "<deep analysis of the problem>",
  "recommendation": "<steps or advice>",
  "summary": "<concise wrap-up>",
  "language": "<detected language of the problem text>"
}
4. Always include the "language" field with the detected language of the problem text and it should be either hindi, hinglish or english.
`,
          },
          
          {
            role: "user",
            content: problem,
          },
        ],
        verbosity: "low",
      }),
    });

    const data: OpenRouterResponse = await response.json();
    console.log("AI Raw Response:", data);

    // OpenRouter returns JSON string inside `content`
    const parsed: AIResponseContent = JSON.parse(
      data.choices[0]?.message?.content ?? "{}"
    );

    return parsed;
  } catch (e) {
    console.error("AI request failed:", e);
    throw new Error("⚠️ Sorry, something went wrong while generating AI response.");
  }
};