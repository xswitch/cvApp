export default function Section({children, title, index, onClick, id}){
  const open = id === index ? true : false;
  return (
    <section className="section">
      <h2 onClick={onClick}>{title}</h2>
      {open && children}
    </section>
  )
}