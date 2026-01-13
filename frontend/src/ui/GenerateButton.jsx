function GenerateButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: "12px",
        padding: "8px 16px",
        fontSize: "16px",
        cursor: "pointer"
      }}
    >
      Generate Prompt
    </button>
  );
}

export default GenerateButton;
