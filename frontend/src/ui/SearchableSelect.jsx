import Select from "react-select";

function SearchableSelect({ label, options, value, onChange }) {
  const selectedOption = options.find(opt => opt.value === value) || null;

  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ fontWeight: "bold" }}>{label}</label>
      <Select
        options={options}
        value={selectedOption}
        onChange={(selected) => onChange(selected ? selected.value : "")}
        placeholder="Search or select..."
        isClearable
      />
    </div>
  );
}

export default SearchableSelect;
