function buildOutputFormat(dependencyLevelId) {
  switch (dependencyLevelId) {
    case "advisor":
      return "Provide explanations and guidance in clear paragraphs.";
    case "architect":
      return "Use headings, bullet points, and structured sections.";
    case "builder":
      return "Provide step-by-step instructions with file-wise code blocks.";
    case "executor":
      return "Deliver the final solution directly without extra explanation.";
    default:
      return "Provide a clear and structured response.";
  }
}

export default buildOutputFormat;
