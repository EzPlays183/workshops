// Interactive Adventure Story - Example Solution

// Story Variables
const heroName = "Techster the Curious";
const sidekickName = "Byte the Brave";
let currentLocation = "Mysterious Forest";
let treasureFound = 0;
const hasMagicPower = true;

// Story Opening
console.log("=== The Great Adventure Begins! ===");
console.log("");
console.log("Once upon a time, " + heroName + " set out on a quest.");
console.log("Joined by their loyal companion " + sidekickName + ",");
console.log("they arrived at the " + currentLocation + ".");
console.log("");

// Story Development
console.log("--- Chapter 1: The Search ---");
currentLocation = "Ancient Cave";
treasureFound = treasureFound + 3;
console.log("They traveled to the " + currentLocation + ".");
console.log("Inside, they discovered " + treasureFound + " magical crystals!");
console.log("");

// Story Climax
console.log("--- Chapter 2: The Challenge ---");
console.log(sidekickName + " said: 'We must use our powers wisely!'");
console.log("Does " + heroName + " have magic powers? " + hasMagicPower);
treasureFound = treasureFound + 2;
console.log("Together, they found " + treasureFound + " crystals total.");
console.log("");

// Story Ending
console.log("=== The End ===");
console.log(heroName + " and " + sidekickName + " saved the day!");
console.log("They collected " + treasureFound + " magical crystals.");
console.log("Their adventure in the " + currentLocation + " was legendary!");
console.log("");
console.log("THE END");
