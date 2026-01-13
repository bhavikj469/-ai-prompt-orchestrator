// export function generateBusinessPrompt({
//   businessType,
//   businessStage,
//   budget,
//   audience,
//   context
// }) {
//   return `
// SYSTEM ROLE:
// You are a senior business growth strategist and modern digital marketer.

// OBJECTIVE:
// Create a complete, actionable business growth and marketing plan.

// BUSINESS DETAILS:
// - Business Type: ${businessType}
// - Business Stage: ${businessStage}
// - Budget Range: ${budget}
// - Target Audience: ${audience}

// CONTEXT PROVIDED BY USER:
// ${context}

// REQUIREMENTS:
// 1. Clear business positioning
// 2. SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)
// 3. Modern promotion ideas (online + offline)
// 4. Step-by-step execution plan (30-60-90 days)
// 5. Low-cost growth hacks suitable for small businesses
// 6. Tools, platforms, and metrics to track success

// OUTPUT FORMAT:
// - Headings
// - Bullet points
// - Clear action steps
// `;
// }

// src/engine/businessPromptEngine.js

export function generateBusinessPrompt({
  businessType,
  businessStage,
  budget,
  audience,
  platforms = ["LinkedIn", "Facebook", "Instagram"],
  context
}) {
  return `
SYSTEM ROLE:
You are an expert business strategist, digital marketer, and beginner-friendly coach.

OBJECTIVE:
Create a complete, step-by-step business growth and marketing plan for someone with zero prior business experience.

BUSINESS DETAILS:
- Business Type: ${businessType}
- Business Stage: ${businessStage}
- Budget Range: ${budget}
- Target Audience: ${audience}

CONTEXT PROVIDED BY USER:
${context}

INSTRUCTIONS FOR THE USER:
Follow these steps carefully. Each step includes what to do, how to do it, and suggested tools. No prior knowledge is required.

STEP 1: Define Your Business Basics
- Choose a business name that represents your services
- Define your unique selling proposition (USP)
- List all services you offer
- Set pricing structure
- Decide on your target audience segments

STEP 2: Build Your Online Presence
${
  platforms.includes("LinkedIn")
    ? `- LinkedIn: Create a personal/business profile with logo and description
- Connect with at least 50 relevant people in your niche
- Post at least 3 times per week (ideas: service showcase, client tips, behind-the-scenes)
- Engage with connections by commenting and sharing relevant content`
    : ""
}
${
  platforms.includes("Facebook")
    ? `- Facebook: Create a business page
- Upload profile and cover images
- Add business description and contact info
- Post 2 times per week (ideas: services, promotions, client testimonials)
- Use Facebook Ads for local reach if budget allows`
    : ""
}
${
  platforms.includes("Instagram")
    ? `- Instagram: Create business account
- Upload profile picture and bio
- Plan first 9 posts (mix of services, reels, stories)
- Post 3 times per week, stories daily
- Use hashtags relevant to your industry`
    : ""
}

STEP 3: Marketing & Content Plan
- Plan weekly content calendar for each platform
- Include visuals using free tools like Canva
- Share educational, promotional, and behind-the-scenes content
- Engage with audience (comments, messages) daily

STEP 4: Networking & Growth
- Attend local events and trade shows
- Collaborate with complementary businesses
- Collect testimonials and reviews
- Reach out to potential clients via email or WhatsApp

STEP 5: Tools & Metrics
- Track leads and interactions using Google Sheets or Notion
- Use free analytics tools on each platform to track engagement
- Monitor metrics weekly: followers, leads, engagement rate, sales inquiries

STEP 6: 30-60-90 Day Execution Plan
- Days 1-10: Business basics & branding setup
- Days 11-30: Create social accounts, start posting content
- Days 31-60: Network, engage, collect testimonials, test ads
- Days 61-90: Analyze performance, refine strategy, scale efforts

OUTPUT FORMAT:
- Step-by-step bullet points
- Beginner-friendly language
- Platform-specific instructions
- Actionable next steps
- Clear execution schedule
`;
}

