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