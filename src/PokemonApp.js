import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";
import { useSelector } from "react-redux";


export const PokemonApp = () => {

  const { pokemons, isLoading, page } = useSelector(state => state.pokemon);

  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(getPokemons())
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <span>Loading {!isLoading ? 'True': 'False'  }</span>


      {pokemons.map(pokemon => (

        <li key={pokemon.name}>
          {pokemon.name}

        </li>
      ))
      }

      <button
      disabled={isLoading}
      onClick={()=> dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
