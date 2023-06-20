
const Card = (props) => {
  return (
    <section className="w-[240px] rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-150 ">
      <article className="w-[240px] h-[156px] rounded-t-lg">
        <img src={props.imagen} alt="" className="w-full h-full object-cover rounded-t-lg"/>
      </article>
      <article className="rounded-b-lg p-4">
        <h1 className="text-lg font-bold mb-2">
            {props.nombre}
        </h1>
        <h3 className="">
            <span className="text-sm font-semibold mr-1">
                Population:
            </span>
            {props.poblacion}
        </h3>
        <h3>
            <span className="text-sm font-semibold mr-1">
                Region:
            </span>
            {props.region}
        </h3>
        <h3>
            <span className="text-sm font-semibold mr-1">
                Capital:
            </span>
            {props.capital}
        </h3>
      </article>
    </section>
  )
}

export default Card
