function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Solution 1: Access the first element of the array

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' ');
}
console.log(greeterArray(user)); // Solution 2: Modify the function to accept an array