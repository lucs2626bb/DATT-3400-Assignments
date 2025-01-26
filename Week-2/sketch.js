let table;
let pokeData = {};
let dexMin = 0;
let dexMax = 0;

function preload() {
   table = loadTable('Pokemon.csv', 'csv', 'header')
}

function setup() {
  createCanvas(898, 898);
  print(table.getRowCount());
  
  //organize data by number
  for (let i = 0; i < table.getRowCount(); i++) {
    let number = table.getNum(i, "number");
    let name = table.getString(i, "name");
    let type1 = table.getString(i, "type1");
    let type2 = table.getString(i, "type2");
    let hp = table.getNum(i, "hp");
    
    dexMin = min(dexMin, number);
    dexMax = max(dexMax, number);
    
    //Get rid invalid values (blank)
    //if(!pokeData[number]) {
      //pokeData[number] = []
    //}
    //pokeData[number].push({ name: name, type1: type1, type2: type2});
  }
  //noLoop();
}

function draw() {
  background(220);
   // Set the noise level and scale.
  // Set the noise level and scale.
  let noiseLevel = 255;
  let noiseScale = 0.01;
  
  // Iterate from top to bottom.
  for (let y = 0; y < height; y += 1) {
    // Iterate from left to right.
    for (let x = 0; x < width; x += 1) {
      let number = table.getNum(y, "number");
      let hp = table.getNum(y, "hp");
      let type1 = table.getString(y, "type1");
      // Scale the input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;

      // Compute the noise value.
      let c = number * noise(nx, ny);
      let c1 = hp * noise(nx, ny);

      let color2 = typecheck(type1);
      // Draw the point.
      stroke(red(c), green(c1), blue(color2));
      point(x, y);
    }
  }
}

function typecheck(type1) {
  let ans = 0;
  if (type1 == "Normal") {
    ans = 20;
  } else if (type1 == "Fire") {
    ans = 40;
  } else if (type1 == "Water") {
    ans = 60;
  } else if (type1 == "Electric") {
    ans = 80;
  } else if (type1 == "Grass") {
    ans = 100;
  } else if (type1 == "Ice") {
    ans = 120;
  } else if (type1 == "Fighting") {
    ans = 140;
  } else if (type1 == "Poison") {
    ans = 160;
  } else if (type1 == "Ground") {
    ans = 180;
  } else if (type1 == "Flying") {
    ans = 200;
  } else if (type1 == "Psychic") {
    ans = 220;
  } else if (type1 == "Bug") {
    ans = 240;
  } else if (type1 == "Rock") {
    ans = 250;
  } else if (type1 == "Ghost") {
    ans = 250;
  } else if (type1 == "Dragon") {
    ans = 250;
  } else if (type1 == "Dark") {
    ans = 250;
  } else if (type1 == "Steel") {
    ans = 250;
  } else if (type1 == "Fairy") {
    ans = 255;
  }
  return ans;
}

// https://p5js.org/reference/p5/noise/
// Noise example #5 of p5js documentation
// https://idmnyu.github.io/p5-fundamentals/creative-coding/data/
