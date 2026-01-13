function Selector({ label, options, value, onChange }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>
        {label}
        <br />
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Selector;
