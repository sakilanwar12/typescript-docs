
const hellFriends = (...friends: string[]): string => {
    return `Hello, ${friends.join(", ")}!`;
}


console.log(hellFriends("John", "Jane", "Bob"));