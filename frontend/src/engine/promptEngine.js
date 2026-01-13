// export function generatePrompt({
//   role,
//   task,
//   dependency,
//   platform,
//   context
// }) {
//   return `
// SYSTEM ROLE:
// You are acting as a ${role}.

// OBJECTIVE:
// ${task}

// CONSTRAINTS:
// - Platform: ${platform}
// - Dependency Level: ${dependency}
// - Follow the dependency level strictly
// - Tailor the response for the selected platform

// CONTEXT PROVIDED BY USER:
// ${context || "No additional context provided."}

// OUTPUT FORMAT:
// Provide a clear, structured, and actionable response.
// `;
// }

// src/engine/promptEngine.js

export function generatePrompt({
  role,
  task,
  dependency,
  platform,
  context
}) {
  return `
SYSTEM ROLE:
You are an expert ${role} who can guide users step-by-step in executing tasks with zero prior knowledge.

OBJECTIVE:
Provide a detailed, actionable, step-by-step guide for the user to accomplish the task "${task}" with "${dependency}" dependency level on "${platform}". The output should be ready to use, beginner-friendly, and structured for easy execution.

USER CONTEXT:
${context}

INSTRUCTIONS FOR THE USER:
Follow these steps carefully. Each step includes what to do, how to do it, and examples if needed. Use code blocks where applicable.

STEP 1: Understand the Task
- Briefly explain what "${task}" involves.
- Highlight key concepts or tools needed.
- Specify any prerequisites the user might need.

STEP 2: Setup Environment / Files
- List required tools, libraries, or software.
- Provide file/folder structure if applicable.
- Include commands or steps for setup.

STEP 3: Execute Task Step-by-Step
- Break down the task into numbered steps.
- For each step, include:
  - What to do
  - How to do it (code snippet, command, or action)
  - Any tips or best practices

STEP 4: Verify & Test
- How to check if each step is working correctly.
- Include example outputs or expected results.

STEP 5: Optimization & Next Steps
- Tips for improving efficiency or quality.
- Suggested extensions or enhancements for the task.

OUTPUT FORMAT:
- Use numbered steps
- Include code blocks where relevant
- Keep language beginner-friendly and actionable
- Make it copy-paste ready for immediate execution
`;
}

