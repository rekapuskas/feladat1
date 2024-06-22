//1. feladat
/*Készíts egy függvényt, ami megkap két stringet paraméterként és visszaadja azokat a karaktereket, amelyek mindkét stringben megtalálhatók! */

function getSimilarCharacters(stringFirst, stringSecond) {
  let result = {};
  for (let i = 0; i < stringFirst.length; ++i) {
    for (let j = 0; j < stringSecond.length; ++j) {
      if (stringFirst[i] == stringSecond[j] && !result[stringFirst[i]]) {
        result[stringFirst[i]] = stringFirst[i];
      }
    }
  }
  return Object.keys(result);
}
console.log(getSimilarCharacters("alma", "aladár"));

//2. feladat
/* Készíts egy függvényt, aminek ha beadunk egy számokat tartalmazó tömböt és egy számot, akkor megtalálja az összes olyan párt a tömbben, 
aminek az összege egyenlő a paraméterként megadott számmal!

findPairs([1, 2, 3, 4, 5], 5); // [[1, 4], [2, 3]]*/

function findPairs(arr, sum) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
        let pair = [arr[i], arr[j]];
        result.push(pair);
      }
    }
  }
  console.log(result);
}
findPairs([1, 2, 3, 4, 5], 5);

//3. feladat
/*Készíts egy programot, amely a labdarúgó Európa-bajnokság csapatait és mérkőzéseit kezeli. 
A program a csapatokat, a csapatok pontjait és a gólkülönbséget tárolja. Az eredményeket egy függvénnyel rögzítjük, ez határozza meg a pontokat és a gólkülönbséget is. 
A függvénynek paraméterként kell megadni, hogy melyik csapatok játszottak és mennyi lett az eredmény. 
Ha egy csapat nyer 3 pontot kap, ha pedig döntetlent játszik, akkor mindkét csapat kap 1-1 pontot. A gólkülönbség a kapott és lőtt gólok különbségét jelenti. */

const results = {
  Magyarország: { points: 0, goalDiff: 0 },
  Németország: { points: 0, goalDiff: 0 },
  Svájc: { points: 0, goalDiff: 0 },
  Skócia: { points: 0, goalDiff: 0 },
};

function calculatePoints(goals1, goals2) {
  if (goals1 > goals2) {
    return [3, 0];
  } else if (goals1 < goals2) {
    return [0, 3];
  } else {
    return [1, 1];
  }
}

function updateTeamResults(team, points, goalDiff) {
  if (results[team]) {
    results[team].points += points;
    results[team].goalDiff += goalDiff;
  } else {
    results[team] = { points, goalDiff };
  }
}

function recordResults(team1, team2, goals1, goals2) {
  let points = calculatePoints(goals1, goals2);
  const team1Points = points[0];
  const team2Points = points[1];
  const team1GoalDiff = goals1 - goals2;
  const team2GoalDiff = goals2 - goals1;
  updateTeamResults(team1, team1Points, team1GoalDiff);
  updateTeamResults(team2, team2Points, team2GoalDiff);
}
recordResults("Magyarország", "Németország", 3, 0);
console.log(results);

recordResults("Brazília", "Franciaország", 1, 1);
console.log(results);

//4. feladat
/* Készíts egy programot, amely filmeket és azok értékeléseit kezeli. A program eltárolja a filmek:

címét
szereplőit (külön a vezeték és keresztnevét a szereplőknek)
megjelenési évét
értékeléseit (1-10 közötti számok formájában)
A programnak lehetősége van új film hozzáadására, értékelés megadására egy adott filmre, és az összes film és átlagértékelésük megjelenítésére.*/

let movies = [];

function addMovies(title, actors, year) {
  movies.push({ title, actors, year, ratings: [] });
}
addMovies(
  "Titanic",
  [
    { firstName: "Bruce", lastName: "Willis" },
    { firstName: "Alan", lastName: "Rickman" },
  ],
  1988
);
console.log(movies);
addMovies(
  "Titanic2",
  [
    { firstName: "Bruce", lastName: "Willis" },
    { firstName: "Alan", lastName: "Rickman" },
  ],
  2001
);
 function movieRating(title, rating){
    let movieFound = false;
    for(let i = 0; i < movies.length; ++i){
        if(movies[i].title == title){
            movies[i].ratings.push(rating);
            movieFound = true;
        }
    }
 }