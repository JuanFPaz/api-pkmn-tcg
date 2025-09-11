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

async function getAllPokemon(setId) {
    const PATH_DATA = join(PATH_BASE, "data", "cards", `${setId}.json`);

  try {
    const response = await axion("/v2/cards?q=set.id:"+setId);
    await writeFile(PATH_DATA, JSON.stringify(response.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getAllPokemon('bp')