function ModeToggle({ mode, setMode }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setMode("prompt")}
        style={{
          marginRight: "10px",
          padding: "8px",
          fontWeight: mode === "prompt" ? "bold" : "normal"
        }}
      >
        Prompt Generator
      </button>

      <button
        onClick={() => setMode("business")}
        style={{
          padding: "8px",
          fontWeight: mode === "business" ? "bold" : "normal"
        }}
      >
        Business Planner
      </button>
    </div>
  );
}

export default ModeToggle;
