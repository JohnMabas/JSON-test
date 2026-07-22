import { readFile } from 'node:fs/promises'

async function loadData() {
  
try{
  let [movie, actors, cinemas] = await Promise.all([
  readFile("movie.json", "utf8"),
  readFile("actors.json", "utf8"),
  readFile("cinemas.json", "utf8")
]);

const movi = JSON.parse(movie);
const actor = JSON.parse(actors);
const cinema = JSON.parse(cinemas)

 return [movi, actor, cinema]
} catch(e){
  console.log(e.message)
}
}
loadData().then(res => 
  console.log(res)
)
