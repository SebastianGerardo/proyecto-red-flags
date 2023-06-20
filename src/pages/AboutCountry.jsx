import { useNavigate, useParams } from "react-router-dom"
import {data} from '../helpers/data'

const AboutCountry = () => {

    const {nameCountry} = useParams()

    const filtrarData = data.find((pais) => pais.name == nameCountry)

    console.log(filtrarData)

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }
  return (
    <section className="w-screen h-screen flex flex-col gap-y-8 justify-center items-center">
        <section className="flex flex-col gap-6">
            <button onClick={handleBack} className="w-max border shadow-lg hover:shadow-2xl transition-all duration-150 px-4 py-1 rounded-lg">
                {`<- Back`}
            </button>
            <section className="flex gap-24">
                <article>
                    <img src={filtrarData.flags.svg} alt="" />
                </article>
                <article className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-4">{filtrarData.name}</h1>
                    <section className="grid grid-cols-2">
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
                                {filtrarData.topLevelDomain && filtrarData.topLevelDomain.length > 0 &&
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
                                {filtrarData.currencies && filtrarData.currencies.length > 0 &&
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
                                {filtrarData.languages && filtrarData.languages.length > 0 &&
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

                    <section className="flex gap-2 items-center mt-4">
                        <span className="text-sm font-semibold mr-1">Border Countries:</span>
                        <article className="flex gap-2">
                            {filtrarData.borders && filtrarData.borders.length > 0 ? (
                                filtrarData.borders.map((border, index) => (
                                    <div key={index} className="w-max px-4 py-1 text-sm shadow-lg border cursor-pointer">
                                        {border}
                                    </div>
                                ))
                            ) : (
                                <p className="italic text-gray-400">There are no border countries</p>
                            ) }                        
                        </article>
                    </section>
                </article>
            </section>
        </section>
    </section>
  )
}

export default AboutCountry
