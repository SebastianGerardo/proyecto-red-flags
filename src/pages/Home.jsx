import { useState } from "react"
import Card from "../components/Card"
import {data} from '../helpers/data'

const Home = () => {

    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')
    const [dataPaises, setDataPaises] = useState(data)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleChangeRegion = (event) => {
        setRegion(event.target.value)
    }
    
    const filterPais = dataPaises.filter((pais) => search == '' || pais.name.toLowerCase().includes(search.toLowerCase()) )

    const filterRegion = filterPais.filter((pais) => region == '' || pais.region == region)

  return (
    <div>
      <form action="" className="flex justify-between">
        <input type="text" onChange={handleChange} className="border px-4 w-60 h-10 rounded-lg" placeholder="Ingresa el nombre del país"/>
        <select onChange={handleChangeRegion} className="w-60 border">
            <option value="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Oceania">Oceania</option>
        </select>
      </form>
      <article className="flex flex-wrap gap-6 justify-center mt-4">
        {filterRegion && filterRegion.length > 0 && filterRegion.map((pais, index) => (
            <Card key={index} imagen={pais.flags.svg} nombre={pais.name} region={pais.region} poblacion={pais.population} capital={pais.capital} />
        ))}
      </article>
    </div>
  )
}

export default Home
