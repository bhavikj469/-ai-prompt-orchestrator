function PromptPreview({ prompt }) {
  if (!prompt) {
    return null;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Generated Prompt</h3>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "12px",
          whiteSpace: "pre-wrap"
        }}
      >
        {prompt}
      </pre>
    </div>
  );
}

export default PromptPreview;
