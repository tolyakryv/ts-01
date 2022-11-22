class Key {
    private signature: number
    constructor() {
    this.signature=Math.random()
    }
    getSignature():number {
        return this.signature
    }
}
class Person {
   
    constructor(private key: Key) { }
    getKey():Key {
        return this.key
    }
}
abstract class House{
    protected door = false;
    private tenant: Person[] = [];
    constructor(protected key: Key) { }
    
    comIn(person: Person): void{
        if (!this.door) {
            throw new Error('door closed')
        }
        this.tenant.push(person);
        console.log('person in house')
    }
    abstract openDoor(key:Key):boolean
}

class MyHouse extends House{
    openDoor(key: Key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('false key')
        }
        return this.door=true
    }
}
const key = new Key;

const house = new MyHouse(key);
const persons = new Person(key);
house.openDoor(persons.getKey())
house.comIn(persons)