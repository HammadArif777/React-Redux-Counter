// Actions
export const INC = "counter/increment";
export const DEC = "counter/decrement";

// Action Creators

export function incrementCreator() {
    return {
        type : INC
    }
}
export function decrementCreator() {
    return {
        type : DEC
    }
}