// task  1
const person = {
    name: "Peter Sokolov",
    age: 32
}
console.log(Object.values(person));

// task - 2
const perso2 = {
    name: {
        firstName: "Peter",
        lastName: "Sokolov",
    },
    age: 32,
    // task - 3
    bio() {
        return `${this.age}, ${this.name.firstName}, ${this.name.lastName}`;
    },
    // task - 4
    introduceSelf() {
        return `Hi! I'm firstName.`;
    }
};
console.log(Object.values(perso2));
console.log(perso2.bio());
console.log(perso2.introduceSelf());

// task - 5
function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
        return "It is metod introduceSelf";
    }; 
    return obj;
}

const person1 = createPerson("Person1");
const person2 = createPerson("Person2");

// task - 6
function createPerson(name) {
    this.name = name;
    this.introduceSelf = function () {
         return "It is metod  2 introduceSelf";
    };
}
const person3 = new createPerson("Person3");
const person4 = new createPerson("Person4");

// task - .
// визначити, чи містить об'єкт mary властивість під назвою prop.
const many = {};
Object.hasOwn(many, "prop"); // false - 'prop' has not been defined

// task - 7
const DirtyMartini = {
    ing_fr1: "170.4786 ml de gin",
    ing_fr2: "1 trait de vermouth sec (0.0351951ml) ",
    ing_fr3: "28.4131 ml de saumure du pot d'olive",
    ing_fr4: " 4 olives vertes farcies",
    ing_en1: "6 fluid ounces gin",
    ing_en2: " 1 dash dry vermouth (0.0351951ml) ",
    ing_en3: " 1 fluid ounce brine from olive jar",
    ing_en4: "4 stuffed green olives",
    excuse_my_french() {
        return `  ingredients: ${this.ing_fr1},  
                               ${this.ing_fr2},
                               ${this.ing_fr3}, 
                               ${this.ing_fr4}`;
    },
    english_please() {
        return `ingredients: ${this.ing_en1},  
                              ${this.ing_en2}, 
                              ${this.ing_en3},
                              ${this.ing_en4}`;
     }
};
console.log(DirtyMartini.excuse_my_french());
console.log(DirtyMartini.english_please());
        

      
