var fs = require('fs');



var data = fs.readFileSync('bolly-movies.txt','utf8');
let movieSet = new Set(data.split('|'));

let numOfMovies = movieSet.size;

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
} 

let combis = [];
for( i=0; i < 10000; i++) {
    let indSet = new Set();
    for (j = 0; j < 25; j++) {
        let randNum = randomNumber(0, numOfMovies - 1);
        while(indSet.has(randNum)){
            randNum = randomNumber(0, numOfMovies - 1);
        }
        indSet.add(randNum);
    }
    combis.push(indSet);
}

let moviesCombi = [];
let movieList = [];
let allMoviesList = Array.from(movieSet);
combis.forEach((c) => {
    movieList = [...c].map((i) => {
        return allMoviesList[i];
    });
    moviesCombi.push(movieList);
});

let colors = ['B','R'];
let c = 0;



const getRandomIdx = () => {
    
    idx = randomNumber(0, idxSet.size - 1)
    rI = [...idxSet][idx]
    idxSet.delete(rI)
    //console.log(idxSet)
}

moviesCombi.forEach((mc) => {
    let idxSet = new Set([...Array(25).keys()])
    let rI, idx;

    let nineSet = new Set()
    for(i = 0; i< 9; i++) {
        idx = randomNumber(0, idxSet.size - 1)
        rI = [...idxSet][idx]
        idxSet.delete(rI)
        
        nineSet.add(rI)
    }
    console.log('9 Size', nineSet.size)

    let eightSet = new Set()
    for(j=0;j<8;j++) {
        idx = randomNumber(0, idxSet.size - 1)
        rI = [...idxSet][idx]
        idxSet.delete(rI)

        eightSet.add(rI)
    }
    console.log('8 size: ', eightSet.size)

    idx = randomNumber(0, idxSet.size - 1)
    rI = [...idxSet][idx]
    idxSet.delete(rI)

    let dark = rI

    c = 1 - c;
    //let indxStr = '|' + [...nineSet].join(',') + '|' + [...eightSet].join(',') + '|' + colors[c] + '|' + dark;
    let mcObj = { 
                  movieList: mc, 
                  nine: Array.from(nineSet),
                  eight: Array.from(eightSet),
                  nineColor: colors[c],
                  killer: dark
                }
    //fs.appendFile('bolly-movies-combis.txt', (mc.join('|')+ indxStr +'\n' ).toLowerCase(), function (err,data) {
    fs.appendFile('bolly-movies-combis.json', (JSON.stringify(mcObj, null, 4)+ ',\n'), function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
    });
});

