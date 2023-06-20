import { useParams } from "react-router-dom"
import {data} from '../helpers/data'

const AboutCountry = () => {

    const {nameCountry} = useParams()

    const filtrarData = data.find((pais) => pais.name == nameCountry)

    console.log(nameCountry)
    console.log(filtrarData.currencies.length - 1) 
  return (
    <section>
      <article>
        <img src={filtrarData.flags.svg} alt="" />
      </article>
      <article>
        <h1 className="text-3xl font-bold">{filtrarData.name}</h1>
        <section>
            <div>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Native Name:
                    </span>
                    {filtrarData.nativeName}
                </h3>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Population:
                    </span>
                    {filtrarData.population}
                </h3>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Region:
                    </span>
                    {filtrarData.region}
                </h3>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Sub Region:
                    </span>
                    {filtrarData.subregion}
                </h3>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Capital:
                    </span>
                    {filtrarData.capital}
                </h3>
            </div>
            <div>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Top Level Domain:
                    </span>
                    {filtrarData.topLevelDomain.length > 0 &&
                        filtrarData.topLevelDomain.map((level, index) => (
                            <span key={index} className="mr-1">
                                {level}{filtrarData.topLevelDomain.length - 1 == index
                                                ? '.' 
                                                : ','}
                            </span>
                        ))}
                </h3>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                    Currencies:
                    </span>
                    {filtrarData.currencies.length > 0 &&
                        filtrarData.currencies.map((moneda, index) => (
                            <span key={index} className="mr-1">
                                {moneda.name}{filtrarData.currencies.length - 1 == index
                                                ? '.' 
                                                : ','}
                            </span>
                        ))}
                </h3>
                <h3>
                    <span className="text-sm font-semibold mr-1">
                        Languages:
                    </span>
                    {filtrarData.languages.length > 0 &&
                        filtrarData.languages.map((lenguaje, index) => (
                            <span key={index} className="mr-1">
                                {lenguaje.name}{filtrarData.languages.length - 1 == index
                                                ? '.' 
                                                : ','}
                            </span>
                        ))}
                </h3>
            </div>
        </section>
      </article>
    </section>
  )
}

export default AboutCountry
