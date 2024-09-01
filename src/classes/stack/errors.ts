class InvalidStackValue extends Error {
    constructor( value: bigint ) {
        super(`Invalid value: ${value}`);
    }
}

class StackOverflow extends Error {
    
}

class StackUnderflow extends Error {
    
}

class IndexOutOfBounds extends Error {
    
}

export { InvalidStackValue, StackOverflow, StackUnderflow, IndexOutOfBounds };