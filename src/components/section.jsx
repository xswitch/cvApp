export default function Section({ children, title, index, onClick, id, className}) {
  const open = id === index ? true : false;
  return (
    <section className={`${className ? className : 'section'}`}>
      <h2 onClick={onClick}>{title}</h2>
      {open && children}
    </section>
  );
}
