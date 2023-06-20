import Card from "../components/Card"
import {data} from '../helpers/data'

const Home = () => {

    console.log(data)
    
  return (
    <div>
      <form action="" className="flex justify-between">
        <input type="text" className="border px-4 w-60 h-10 rounded-lg" placeholder="Ingresa el nombre del país"/>
        <select name="" id="" className="w-60 border">
            <option value="">Filter by region</option>
        </select>
      </form>
      <article className="flex flex-wrap gap-6 justify-center mt-4">
        {data && data.length > 0 && data.map((pais, index) => (
            <Card key={index} imagen={pais.flags.svg} nombre={pais.name} region={pais.region} poblacion={pais.population} capital={pais.capital} />
        ))}
      </article>
    </div>
  )
}

export default Home
