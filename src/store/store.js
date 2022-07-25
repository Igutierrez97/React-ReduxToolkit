import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/counterSlice";
import pokemonSlice from "./slices/pokemon/pokemonSlice";

 export const store = configureStore({
    reducer:{
        pokemon:pokemonSlice,
        counter:counterSlice
    
    }
})