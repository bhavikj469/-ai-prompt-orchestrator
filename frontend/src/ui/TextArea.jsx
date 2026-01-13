function TextArea({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ fontWeight: "bold" }}>
        {label}
      </label>
      <br />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "6px",
          fontSize: "14px"
        }}
        placeholder="Write details here..."
      />
    </div>
  );
}

export default TextArea;
