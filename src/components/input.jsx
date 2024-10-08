export default function Input({
  text,
  type = "text",
  placeholder,
  onChange,
  name,
  value,
}) {
  return (
    <>
      <h3>{text}</h3>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value, name)}
        value={value}
      />
    </>
  );
}
