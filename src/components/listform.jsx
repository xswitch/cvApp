export default function ListForm({children}){
  return (
    <>
      <form>
        {children}
        {console.log(children)}
      </form>
    </>
  )
}