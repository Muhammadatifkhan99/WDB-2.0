// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let i=1;i<=10;i++){
//     console.log("Print the number: ");
//     console.log(i);
// }

//PRINTING EVEN NUMBERS USING FOR LOOP


// for(let i=100;i>=0;i--){
//     console.log(i);
// }

// for(let i =10; i<=10000;i*=10){
//     console.log(i);
// }

//INFINITE LOOPS

// for(let i=20;i>0;i--){
//     console.log(i);
// }

// const treeData = [
//     "Abies alba", "Fagus sylvatica", "Oak, Pedunculate", "Salix alba",
//     "Acer campestre", "False-acacia", "Oak, Sessile", "Salix caprea",
//     "Acer platanoides", "Field-rose", "Oak, Turkey", "Salix cinerea",
//     "Acer pseudoplatanus", "Fir, Common", "Old-man's-beard", "Salix fragilis",
//     "Aesculus hippocastanum", "Frangula alnus", "Osier", "Salix purpurea",
//     "Alder", "Fraxinus excelsior", "Pear, Wild", "Salix x sepulcralis",
//     "Alder, Italian", "Fraxinus ornus", "Picea abies", "Salix viminalis",
//     "Alnus cordata", "Furze", "Picea sitchensis", "Sambucus nigra",
//     "Alnus glutinosa", "Gorse", "Pine, Austrian", "Sea-buckthorn",
//     "Apple", "Guelder-rose", "Pine, Scots", "Service-tree, Wild",
//     "Apple, Crab", "Hawthorn", "Pinus nigra", "Snowberry",
//     "Ash", "Hawthorn, Midland", "Pinus sylvestris", "Sorbus aria",
//     "Ash, Flowering", "Hazel", "Plane, London", "Sorbus aucuparia",
//     "Ash, Manna", "Hedera helix", "Platanus x hispanica", "Sorbus intermedia",
//     "Aspen", "Hippophae rhamnoides", "Plum, Cherry", "Sorbus torminalis",
//     "Beech", "Holly", "Plum, Wild", "Spindle",
//     "Betula pendula", "Honeysuckle", "Poplar, Black", "Spruce, Norway",
//     "Betula pubescens", "Hornbeam", "Poplar, Grey", "Spruce, Sitka",
//     "Betula utilis", "Horse-chestnut", "Poplar, Italian", "Spurge-laurel",
//     "Birch, Downy", "Ilex aquifolium", "Poplar, White", "Sycamore",
//     "Birch, Himalayan", "Ivy", "Populus alba", "Symphoricarpos albus",
//     "Birch, Silver", "Juglans regia", "Populus canescens", "Syringa vulgaris",
//     "Blackthorn", "Juniper", "Populus nigra", "Taxus baccata",
//     "Box", "Juniperus communis ssp. communis", "Populus tremula", "Tilia cordata",
//     "Broom", "Laburnum", "Populus x canadensis var. serotina", "Tilia x europaea",
//     "Buckthorn, Alder", "Laburnum anagyroides", "Privet, Wild", "Tilia platyphyllos",
//     "Buddleia", "Larch, European", "Prunus avium", "Buddleia davidii", 
//     "Laurel, Cherry", "Prunus cerasifera", "Buxus sempervirens", 
//     "Ligustrum vulgare", "Prunus cerasus", "Carpinus betulus", 
//     "Lilac", "Prunus domestica", "Castanea sativa", 
//     "Lime, Common", "Prunus laurocerasus", "Clematis vitalba", 
//     "Lime, Large-leaved", "Prunus padus", "Cornus sanguinea", 
//     "Lime, Small-leaved", "Prunus spinosa", "Corylus avellana", 
//     "Lonicera periclymenum", "Pyrus communis", "Crataegus laevigata", 
//     "Malus domestica", "Quercus cerris", "Crataegus monogyna", 
//     "Malus pumila", "Quercus petraea", "Cytisus scoparius", 
//     "Malus sylvestris ssp. sylvestris", "Quercus robur", "Daphne laureola", 
//     "Rhamnus cathartica", "Willow, Crack", "Willow, Goat", 
//     "Willow, Grey", "Willow, Purple", "Willow, Weeping", 
//     "Willow, White"
// ];

// for(let i=0;i<treeData.length; i++){
//     console.log(i,treeData[i]);
// }
// console.log("///////////////////////////////////////////////")

// for(let i=treeData.length -1;i>=0;i--){
//     console.log(i,treeData[i]);
// }


// or(let i= 0;i<10;i++){
//     console.log(`i is ${i}`);
//     for(let j=1;j<4;j++){
//         console.log(`       j is ${j}`);
//     }
// }


// let seatingChart = [
//     ["Ali", "Hashim", "khan"],
//     ["sahal", "Izza", "Mehwish"],
//     ["Mehria","Aslam","Gul"]
// ]

// for(let i=0;i<seatingChart.length - 1;i++){
//     let row = seatingChart[i]
//     for(let j=0;j<row.length;j++){
//         console.log(`Students of Row # ${i + 1} are ${row[j]}`)
//     }
// }

// let count = 0;

// while(count < 10){
//     count ++;
//     console.log(count);
// }

// let count1 = 0;
// while(count1 < 10){
//     console.log(count1);
//     count1 ++;
// }

// let SECRET_CODE = "ALIKHAN";

// let guess = prompt("enter the secret code to continue");

// while(guess !== SECRET_CODE){
//     guess = prompt("enter the secret code to continue");
// }

// console.log("You Got the Secret Code");

// let input = prompt("Hey, Say Something");

// while(true){
//     if(input.toLowerCase() === "stop copying me") break;
//     else
//         input = prompt(input);
    
// }
// console.log("Ok! You Win");


// for(let i= 0;i<1000;i++){
//     if(i === 100) break;
//     console.log(i);
    
// }


const subreddits = ["books","tree","soccar","pics", "chickens", "funny", "winter"];

for(let i=0;i<=subreddits.length - 1;i++){
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for(let sub of subreddits){
    console.log(`Visit reddit.com/r/${sub}`);
}


let seatingChart = [
    ["Ali", "Hashim", "khan"],
    ["sahal", "Izza", "Mehwish"],
    ["Mehria","Aslam","Gul"]
]

for(let i=0;i<seatingChart.length - 1;i++){
    let row = seatingChart[i]
    for(let j=0;j<row.length;j++){
        console.log(`Students of Row # ${i + 1} are ${row[j]}`)
    }
}

for(let row of seatingChart){
    for(let students of row){
        console.log(`${students}`)
    }
}


//Iterating over iterables

for(let char of "Hello Muhammad"){
    console.log(char);
}


const testScores = {
    ali:89,
    khan: 90,
    lala: 23,
    hasim: 95,
    sahal: 99,
    elvira: 85
}

// for(let scores of testScores){   //testScores is not iterable so the for...of loop cannot
//     console.log(scores);         // be used to iterate things  that are not iterable....
// }


// for(let scores in testScores){
//     console.log(`${scores} scores ${testScores[scores]}`);
// }
//This loop can be used to iterate over thing that are not iterable in JavaScript


let total = 0;
let scoreLength = Object.values(testScores).length;
for(let score of Object.values(testScores)){
    total += score;
    console.log(score);
}

console.log(total/scoreLength);











