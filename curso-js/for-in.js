let person = {
    name: "manoel",
    age: 24,
    weight: "75kg"
} 

for(let property in person){
    console.log(property + ": " + person[property])
} 