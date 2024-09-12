

import {useCounter, useFetch} from "../hooks/index.js";
import {PokemonCard} from "./PokemonCard.jsx";
import {LoadingQuote } from "../03-examples/LoadingQuote.jsx";

export const Layout = () => {



    const { counter, decrement, increment} = useCounter(1)
    const {data, hasError, isLoading    } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}'`)

    return (
        <>
            <h1>Información de Pokemon</h1>
            <hr/>

            {
                isLoading
                    ? <LoadingQuote/>
                    : (
                        <PokemonCard
                            id ={counter}
                            name={data.name}
                            sprites={[
                                data.sprites.front_default,
                                data.sprites.front_shiny,
                                data.sprites.back_default,
                                data.sprites.back_shiny,
                            ]}
                        />
                    )
            }




            <button
                className="btn btn-primary mt-2"
                onClick={ () => counter > 1 ? decrement(): null }
            >
                Anterior

            </button>
            <button
                className="btn btn-primary mt-2"
                onClick={ () => increment()}

            >
                Siguiente
            </button>

        </>
    )
}
