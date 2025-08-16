// Multi-language AI response templates

export const getAIResponses = (user: any) => {
  return {
    "Mental Health": {
      hindi: `नमस्ते ${user.name}! 🙏

मैंने आपकी समस्या को ध्यान से पढ़ा है। आप **तनाव और चिंता** की समस्या से गुजर रहे हैं, जो आजकल बहुत आम है।

## 🔍 **आपकी समस्या का विश्लेषण:**
आपके लक्षणों को देखते हुए, लगता है कि आपको:
- काम का तनाव
- नींद की कमी
- मानसिक दबाव
- अकेलापन का एहसास हो रहा है

## 💡 **तुरंत आजमाए जा सकने वाले उपाय:**

**1. श्वास तकनीक:**
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

## 🎯 **लंबे समय के लिए:**
- नियमित व्यायाम शुरू करें
- मेडिटेशन का अभ्यास करें
- अपने विचारों को डायरी में लिखें

${user.duration === 'several-years' || user.duration === 'more-than-year' 
  ? '\n⚠️ **चूंकि यह समस्या काफी समय से है, इसलिए professional help लेना जरूरी है।**' 
  : '\n✅ **यह समस्या नई है तो घरेलू उपायों से ठीक हो सकती है।**'}

---

मैं आपके लिए **${user.location}** के सबसे अच्छे experts खोज रहा हूं जो आपकी मदद कर सकते हैं...`,
      
      hinglish: `Namaste ${user.name}! 🙏

Maine aapki problem ko dhyan se padha hai. Aap **stress aur anxiety** ki problem se guzar rahe hain, jo aajkal bahut common hai.

## 🔍 **Aapki Problem ka Analysis:**
Aapke symptoms ko dekhte hue, lagta hai ki aapko:
- Work ka stress
- Neend ki kami (Sleep issues)
- Mental pressure
- Loneliness ka ehsaas ho raha hai

## 💡 **Turant try karne wale solutions:**

**1. Breathing Technique:**
- 4-7-8 technique: 4 second saas len, 7 second roken, 8 second mein choden
- Din mein 3-4 baar karen

**2. Daily Routine:**
- Roz subah 10 minute walk karen
- Raat ko 10:30 tak phone band kar den
- Har din 3 achi baatein likhen

**3. Instant relief ke liye:**
- Garam paani se nahaye
- Apne favorite songs sunen
- Kisi dost ya family se baat karen

## 🎯 **Long term ke liye:**
- Regular exercise start karen
- Meditation ka practice karen
- Apne thoughts ko diary mein likhen

${user.duration === 'several-years' || user.duration === 'more-than-year' 
  ? '\n⚠️ **Kyunki yeh problem kaafi time se hai, isliye professional help lena zaroori hai.**' 
  : '\n✅ **Yeh problem nayi hai toh ghar ke upay se theek ho sakti hai.**'}

---

Main aapke liye **${user.location}** ke sabse ache experts dhundh raha hun jo aapki madad kar sakte hain...`,
      
      english: `Hello ${user.name}! 🙏

I've carefully read about your problem. You're going through **stress and anxiety** issues, which are very common these days.

## 🔍 **Analysis of Your Problem:**
Based on your symptoms, it seems you're experiencing:
- Work-related stress
- Sleep issues
- Mental pressure
- Feelings of loneliness

## 💡 **Immediate Solutions You Can Try:**

**1. Breathing Technique:**
- 4-7-8 technique: Breathe for 4 seconds, hold for 7, exhale for 8
- Practice 3-4 times daily

**2. Daily Routine:**
- Take a 10-minute walk every morning
- Turn off your phone by 10:30 PM
- Write down 3 good things every day

**3. For Instant Relief:**
- Take a warm shower
- Listen to your favorite music
- Talk to a friend or family member

## 🎯 **For Long-term Well-being:**
- Start regular exercise
- Practice meditation
- Keep a thought journal

${user.duration === 'several-years' || user.duration === 'more-than-year' 
  ? '\n⚠️ **Since this problem has been ongoing for a long time, professional help is necessary.**' 
  : '\n✅ **Since this is a new problem, home remedies might help significantly.**'}

---

I'm finding the best experts in **${user.location}** who can help you...`
    },
    
    "Relationships": {
      hindi: `नमस्ते ${user.name}! 🙏

आपकी रिश्तों की समस्या को समझने की कोशिश की है। ये **संवाद और भावनात्मक दूरी** की समस्या लगती है।

## 🔍 **समस्या का विश्लेषण:**
- रिश्तों में गलतफहमी
- बातचीत की कमी
- भावनात्मक अपेक्षाओं का ना मिलना
- विश्वास की कमी

## 💡 **तुरंत करने योग्य उपाय:**

**1. बेहतर संवाद:**
- दूसरे की बात पूरी सुनें
- अपनी feelings खुलकर express करें
- गुस्से में कुछ ना कहें

**2. समझदारी से व्यवहार:**
- दूसरे की परिस्थिति समझने की कोशिश करें
- छोटी-छोटी खुशी के moments celebrate करें
- रोज एक appreciation message भेजें

**3. रिश्ते मजबूत बनाने के लिए:**
- Quality time साथ बिताएं
- एक-दूसरे के लिए कुछ special करें
- Past की बातों को बार-बार ना उठाएं

${user.duration === 'several-years' 
  ? '\n⚠️ **लंबे समय से यह समस्या है तो couples therapy जरूरी है।**' 
  : '\n✅ **अभी भी बात बन सकती है, थोड़ी कोशिश करें।**'}

---

आपके लिए **relationship experts** खोज रहा हूं...`,
      
      hinglish: `Namaste ${user.name}! 🙏

Aapki relationships ki problem ko samjhne ki koshish ki hai. Yeh **communication aur emotional distance** ki problem lagti hai.

## 🔍 **Problem ka Analysis:**
- Relationships mein misunderstanding
- Communication ki kami
- Emotional expectations ka na milna
- Trust ki kami

## 💡 **Turant karne wale solutions:**

**1. Better Communication:**
- Dusre ki baat puri sunen
- Apni feelings khulkar express karen
- Gusse mein kuch na kahen

**2. Smart behavior:**
- Dusre ki situation samjhne ki koshish karen
- Choti-choti khushi ke moments celebrate karen
- Roz ek appreciation message bhejen

**3. Relationships strong banane ke liye:**
- Quality time saath bitayen
- Ek-dusre ke liye kuch special karen
- Past ki baaton ko baar-baar na uthayen

${user.duration === 'several-years' 
  ? '\n⚠️ **Lambe time se yeh problem hai toh couples therapy zaroori hai.**' 
  : '\n✅ **Abhi bhi baat ban sakti hai, thodi koshish karen.**'}

---

Aapke liye **relationship experts** dhundh raha hun...`,
      
      english: `Hello ${user.name}! 🙏

I understand your relationship concerns. This seems like a **communication and emotional distance** issue.

## 🔍 **Problem Analysis:**
- Misunderstandings in relationships
- Lack of communication
- Unmet emotional expectations
- Trust issues

## 💡 **Immediate Solutions:**

**1. Better Communication:**
- Listen to the other person completely
- Express your feelings openly
- Don't say anything in anger

**2. Smart Approach:**
- Try to understand the other person's situation
- Celebrate small moments of happiness
- Send one appreciation message daily

**3. Strengthen Relationships:**
- Spend quality time together
- Do something special for each other
- Don't bring up past issues repeatedly

${user.duration === 'several-years' 
  ? '\n⚠️ **Since this has been a long-term issue, couples therapy is necessary.**' 
  : '\n✅ **Things can still work out with some effort.**'}

---

Finding **relationship experts** for you...`
    },
    
    "Work & Study": {
      hindi: `नमस्ते ${user.name}! 🙏

आपकी **काम और पढ़ाई** की समस्या समझ आ गई है। यह productivity और stress management का मामला है।

## 🔍 **समस्या का विश्लेषण:**
- काम का बोझ
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

${user.age < 25 
  ? '\n✅ **आपकी उम्र कम है, सही guidance से career बन जाएगा।**' 
  : '\n💪 **Experience है आपके पास, बस strategy change करनी है।**'}

---

**Career और Study experts** खोज रहा हूं आपके लिए...`,
      
      hinglish: `Namaste ${user.name}! 🙏

Aapki **work aur study** ki problem samjh aa gayi hai. Yeh productivity aur stress management ka matter hai.

## 🔍 **Problem ka Analysis:**
- Work ka bojh (Work overload)
- Time management ki kami
- Focus aur concentration ki problem
- Future ki chinta

## 💡 **Turant apply karne wale solutions:**

**1. Time Management:**
- Pomodoro Technique: 25 minute work, 5 minute break
- Sabse zaroori kaam pehle karen
- Phone ko silent rakhen

**2. Productivity badhane ke liye:**
- Daily 3 main goals set karen
- To-do list banayen
- Multitasking band karen

**3. Stress kam karne ke liye:**
- Lunch break zaroor len
- Office ke baad work ki baat na karen
- Weekend mein pura aaram karen

${user.age < 25 
  ? '\n✅ **Aapki age kam hai, sahi guidance se career ban jayega.**' 
  : '\n💪 **Experience hai aapke paas, bas strategy change karni hai.**'}

---

**Career aur Study experts** dhundh raha hun aapke liye...`,
      
      english: `Hello ${user.name}! 🙏

I understand your **work and study** challenges. This is about productivity and stress management.

## 🔍 **Problem Analysis:**
- Work overload
- Poor time management
- Focus and concentration issues
- Future anxiety

## 💡 **Immediate Solutions:**

**1. Time Management:**
- Pomodoro Technique: 25 minutes work, 5 minutes break
- Do the most important tasks first
- Keep your phone on silent

**2. Boost Productivity:**
- Set 3 main daily goals
- Create a to-do list
- Stop multitasking

**3. Reduce Stress:**
- Always take lunch breaks
- Don't discuss work after office hours
- Rest completely on weekends

${user.age < 25 
  ? '\n✅ **You\'re young, with proper guidance your career will flourish.**' 
  : '\n💪 **You have experience, just need to change strategy.**'}

---

Finding **career and study experts** for you...`
    },
    
    "Financial Stress": {
      hindi: `नमस्ते ${user.name}! 🙏

आपकी **पैसों की चिंता** बिल्कुल समझ आ गई है। Financial stress आजकल हर किसी की है।

## 🔍 **समस्या का विश्लेषण:**
- पैसों की तंगी
- भविष्य की चिंता
- Expenses control नहीं हो रहे
- Income-expense balance नहीं है

## 💡 **तुरंत शुरू करने वाले उपाय:**

**1. Budget बनाएं:**
- 50% जरूरी चीजों पर
- 30% मनोरंजन पर
- 20% savings में

**2. खर्च कम करने के तरीके:**
- हर expense को note करें
- Unnecessary subscriptions cancel करें
- Local transport use करें

**3. Income बढ़ाने के विकल्प:**
- Side business शुरू करें
- Freelancing करें
- Skill development करके better job पाएं

${user.duration === 'several-years' 
  ? '\n⚠️ **लंबे समय की problem है, financial advisor से मिलना जरूरी है।**' 
  : '\n✅ **समय रहते control कर लेंगे, planning करनी होगी।**'}

---

**Financial planning experts** आपके लिए खोज रहा हूं...`,
      
      hinglish: `Namaste ${user.name}! 🙏

Aapki **paison ki chinta** bilkul samjh aa gayi hai. Financial stress aajkal har kisi ki hai.

## 🔍 **Problem ka Analysis:**
- Paison ki tangi
- Future ki chinta
- Expenses control nahi ho rahe
- Income-expense balance nahi hai

## 💡 **Turant start karne wale solutions:**

**1. Budget banayen:**
- 50% zaroori cheezon par
- 30% entertainment par
- 20% savings mein

**2. Kharch kam karne ke tarike:**
- Har expense ko note karen
- Unnecessary subscriptions cancel karen
- Local transport use karen

**3. Income badhane ke options:**
- Side business start karen
- Freelancing karen
- Skill development karke better job payen

${user.duration === 'several-years' 
  ? '\n⚠️ **Lambe time ki problem hai, financial advisor se milna zaroori hai.**' 
  : '\n✅ **Time rehte control kar lenge, planning karni hogi.**'}

---

**Financial planning experts** aapke liye dhundh raha hun...`,
      
      english: `Hello ${user.name}! 🙏

I completely understand your **financial concerns**. Financial stress is common for everyone these days.

## 🔍 **Problem Analysis:**
- Money shortage
- Future anxiety
- Uncontrolled expenses
- Income-expense imbalance

## 💡 **Immediate Solutions:**

**1. Create a Budget:**
- 50% for necessities
- 30% for entertainment
- 20% for savings

**2. Reduce Expenses:**
- Track every expense
- Cancel unnecessary subscriptions
- Use local transportation

**3. Increase Income Options:**
- Start a side business
- Try freelancing
- Develop skills for better job opportunities

${user.duration === 'several-years' 
  ? '\n⚠️ **This has been a long-term issue, meeting with a financial advisor is necessary.**' 
  : '\n✅ **We can get this under control in time with proper planning.**'}

---

Finding **financial planning experts** for you...`
    },
    
    "Physical Wellness": {
      hindi: `नमस्ते ${user.name}! 🙏

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
- रोज 30 मिनट walk करें
- हर घंटे में 5 मिनट stretch करें
- भरपूर पानी पिएं (8-10 गिलास)

**3. Diet में सु���ार:**
- समय पर खाना खाएं
- जंक फूड कम करें
- Fruits और vegetables ज्यादा लें

${user.age > 40 
  ? '\n⚠️ **40+ age में regular health checkup जरूरी है।**' 
  : '\n✅ **Young age में lifestyle change से सब ठीक हो जाएगा।**'}

---

**Health और wellness experts** आपके लिए ढूंढ रहा हूं...`,
      
      hinglish: `Namaste ${user.name}! 🙏

Aapki **physical problems** ka analysis kiya hai. Health ko lekar chinta hona natural hai.

## 🔍 **Problem ka Analysis:**
- Neend puri nahi ho rahi
- Energy level kam hai
- Body pain ya discomfort
- Lifestyle unbalanced hai

## 💡 **Turant follow karne wale solutions:**

**1. Sleep Pattern theek karen:**
- Raat 10:30 tak so jayen
- Subah same time uthen
- Sone se 1 ghanta pehle screen band karen

**2. Energy badhane ke liye:**
- Roz 30 minute walk karen
- Har ghante mein 5 minute stretch karen
- Bharpur paani piyen (8-10 glass)

**3. Diet mein sudhar:**
- Time par khana khayen
- Junk food kam karen
- Fruits aur vegetables zyada len

${user.age > 40 
  ? '\n⚠️ **40+ age mein regular health checkup zaroori hai.**' 
  : '\n✅ **Young age mein lifestyle change se sab theek ho jayega.**'}

---

**Health aur wellness experts** aapke liye dhundh raha hun...`,
      
      english: `Hello ${user.name}! 🙏

I've analyzed your **physical health concerns**. It's natural to worry about health issues.

## 🔍 **Problem Analysis:**
- Incomplete sleep
- Low energy levels
- Body pain or discomfort
- Unbalanced lifestyle

## 💡 **Immediate Solutions:**

**1. Fix Sleep Pattern:**
- Sleep by 10:30 PM
- Wake up at the same time daily
- Turn off screens 1 hour before bed

**2. Boost Energy:**
- Walk for 30 minutes daily
- Stretch for 5 minutes every hour
- Drink plenty of water (8-10 glasses)

**3. Improve Diet:**
- Eat meals on time
- Reduce junk food
- Increase fruits and vegetables

${user.age > 40 
  ? '\n⚠️ **Regular health checkups are necessary after 40.**' 
  : '\n✅ **At your young age, lifestyle changes will fix everything.**'}

---

Finding **health and wellness experts** for you...`
    },
    
    "Life Stuff": {
      hindi: `नमस्ते ${user.name}! 🙏

Life direction और purpose की confusion होना बिल्कुल normal है। आप अकेले नहीं हैं इस feeling में।

## 🔍 **समस्या का विश्लेषण:**
- Life में clarity न��ीं है
- Goals confusing लग रहे हैं
- Motivation कम हो गया है
- Future uncertain लग रहा है

## 💡 **Self-discovery के लिए:**

**1. अपने Values पहचानें:**
- क्या चीजें आपको खुशी देती हैं?
- आपके लिए सबसे जरूरी क्या है?
- आप किस तरह का व्यक्ति बनना चाहते हैं?

**2. Small steps लें:**
- हर हफ्ते कुछ नया try करें
- अपने interests explore करें
- Different activities में participate करें

**3. Clarity पाने के लिए:**
- रोज journaling करें
- Meditation practice करें
- Mentors से बात करें

${user.age < 25 
  ? '\n✅ **Young age में confusion normal है, explore करते रहें।**' 
  : '\n💪 **Experience है आपके पास, बस direction change करनी है।**'}

---

**Life coaches और mentors** आपके लिए खोज रहा हूं...`,
      
      hinglish: `Namaste ${user.name}! 🙏

Life direction aur purpose ki confusion hona bilkul normal hai. Aap akele nahi hain is feeling mein.

## 🔍 **Problem ka Analysis:**
- Life mein clarity nahi hai
- Goals confusing lag rahe hain
- Motivation kam ho gaya hai
- Future uncertain lag raha hai

## 💡 **Self-discovery ke liye:**

**1. Apne Values pehchanen:**
- Kya cheezein aapko khushi deti hain?
- Aapke liye sabse zaroori kya hai?
- Aap kis tarah ka vyakti banana chahte hain?

**2. Small steps len:**
- Har hafte kuch naya try karen
- Apne interests explore karen
- Different activities mein participate karen

**3. Clarity paane ke liye:**
- Roz journaling karen
- Meditation practice karen
- Mentors se baat karen

${user.age < 25 
  ? '\n✅ **Young age mein confusion normal hai, explore karte rahen.**' 
  : '\n💪 **Experience hai aapke paas, bas direction change karni hai.**'}

---

**Life coaches aur mentors** aapke liye dhundh raha hun...`,
      
      english: `Hello ${user.name}! 🙏

Feeling confused about life direction and purpose is completely normal. You're not alone in this feeling.

## 🔍 **Problem Analysis:**
- Lack of clarity in life
- Goals seem confusing
- Motivation has decreased
- Future feels uncertain

## 💡 **For Self-discovery:**

**1. Identify Your Values:**
- What things bring you happiness?
- What's most important to you?
- What kind of person do you want to become?

**2. Take Small Steps:**
- Try something new every week
- Explore your interests
- Participate in different activities

**3. Gain Clarity:**
- Journal daily
- Practice meditation
- Talk to mentors

${user.age < 25 
  ? '\n✅ **Confusion at a young age is normal, keep exploring.**' 
  : '\n💪 **You have experience, just need to change direction.**'}

---

Finding **life coaches and mentors** for you...`
    }
  };
};
