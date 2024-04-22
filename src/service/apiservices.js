//export function fetchPokemons() {
//   return fetch("https://pokeapi.co/api/v2/pokemon/")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const promises = data.results.map((value) => {
//         return fetch(value.url)
//           .then((response) => {
//             return response.json();
//           })
//           .then((data) => {
//             return data;
//           })
//           .catch((error) => {
//             console.log("Error: ", error);
//           });
//       });
//       return Promise.all(promises);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });
// }

import { type } from "@testing-library/user-event/dist/type";
import { PAGES_SIZE } from "../constants";
import { myFetch } from "../helpers/fetchHelper";

export function fetchPokemons(page) {
  const limit = PAGES_SIZE;
  const offset = page * limit;

  const pokemon = fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&&limit=${limit}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const promises = [];
      for (let i = 0; i < data.results.length; i++) {
        const result = fetch(data.results[i].url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log("Error", error);
          });
        promises.push(result);
      }
      return Promise.all(promises);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  return pokemon;
}

export function fetchSearchedPokemon(query) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log("Error", error);
    });
}
export function fetchPokemonsWeaknesses(types) {
  const urls = types.map((value) => {
    return value.type.url;
  });
  console.log("urls", types, urls);

  const promisesArray = [];

  for (const url of urls) {
    const promise = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log("Error", error);
      });
    promisesArray.push(promise);
  }
  return Promise.all(promisesArray);
}
export function fetchPokemonEvolutions(url) {
  return myFetch(url)
    .then((data) => {
      return myFetch(data.evolution_chain.url)
        .then((data) => {
          const names = getEvolutionsNames(data.chain);
          const details = getEvolutionsDetails(names);
          return details;
        })
        .catch((error) => {
          throw new Error(error.message);
        });
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}

function getEvolutionsNames(chain) {
  let names = [];

  // function getData(param) {
  //   if (param.evolves_to.length !== 0) {
  //     getData(param.evolves_to[0]);
  //   }
  //   pokemonsArray.push(param.species.name);
  // }

  // getData(chain);

  while (chain.evolves_to.length !== 0) {
    names.push(chain.species.name);
    chain = chain.evolves_to[0];
  }

  names.push(chain.species.name);

  return names;
}

function getEvolutionsDetails(names) {
  const promisesArray = [];

  for (const name of names) {
    const promise = fetchSearchedPokemon(name);
    promisesArray.push(promise);
  }

  return Promise.all(promisesArray);
}

export function fetchSpeciesDetails(url) {
  return myFetch(url);
}