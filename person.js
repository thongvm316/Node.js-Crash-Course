
console.log(__dirname, __filename)

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`${this.name}, ${this.age}`)
    }

}

module.exports = Person;