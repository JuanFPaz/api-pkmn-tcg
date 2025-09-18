const axios = require("axios");
const { writeFile } = require("node:fs/promises");
const { join } = require("node:path");

const PATH_BASE = __dirname;

const PATH_DATA = join(PATH_BASE, "data", "cards", "all-cards.json");

const axion = axios.create({
  baseURL: "https://api.pokemontcg.io",
  headers: { "X-Api-Key": "c7349c5c-1c42-4aa9-ae68-c097b969727e", "Content-Type":'application/json'},
});

async function getAllSets() {
  try {
    const response = await axion("/v2/sets");
    console.log("Data fetched:", response.data);
    await writeFile(PATH_DATA, JSON.stringify(response));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getAllPokemon(setPath,setId) {
    const PATH_DATA = join(PATH_BASE, "data", "cards", setPath,`${setId}.json`);

  try {
    const response = await axion("/v2/cards?q=set.id:"+setId+"&page=1&pageSize=250");
    await writeFile(PATH_DATA, JSON.stringify(response.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
async function getAllPokemonP2(setPath,setId) {
    const PATH_DATA = join(PATH_BASE, "data", "cards", setPath,`${setId}-p2.json`);

  try {
    const response = await axion("/v2/cards?q=set.id:"+setId+"&page=2&pageSize=250");
    await writeFile(PATH_DATA, JSON.stringify(response.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// getAllPokemon('13th-serie','sv1')
// getAllPokemon('13th-serie','sv2')
// getAllPokemon('13th-serie','sv3')
// getAllPokemon('13th-serie','sv3pt5')
// getAllPokemon('13th-serie','sv4')
// getAllPokemonP2('13th-serie','sv4')
// getAllPokemon('13th-serie','sv4pt5')
// getAllPokemon('13th-serie','sv6')
// getAllPokemon('13th-serie','sv6pt5')
// getAllPokemon('13th-serie','sv7')
// getAllPokemon('13th-serie','sv8')
// getAllPokemonP2('13th-serie','sv8')
// getAllPokemon('13th-serie','sv8pt5')
// getAllPokemon('13th-serie','sv9')
// getAllPokemon('13th-serie','sv10')
// getAllPokemon('13th-serie','zsv10pt5')
// getAllPokemon('13th-serie','rsv10pt5')
getAllPokemon('13th-serie','svp')
getAllPokemon('13th-serie','sve')
