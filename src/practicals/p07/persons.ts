interface Person {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export function sortPersons(persons: Person[]): Person[] {
  return persons.sort((a, b) => {

    const ageA = a.age ?? Infinity;
    const ageB = b.age ?? Infinity;

    if (ageA !== ageB) {
        return ageA - ageB;
    }


    const firstNameA = a.firstName?.toLowerCase() || "";
    const firstNameB = b.firstName?.toLowerCase() || "";
    if (firstNameA !== firstNameB) {
        return firstNameA.localeCompare(firstNameB);
    }

    const lastNameA = a.lastName?.toLowerCase() || "";
    const lastNameB = b.lastName?.toLowerCase() || "";
    return lastNameA.localeCompare(lastNameB);
});
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

const sortedPersons = sortPersons(persons);
console.log(sortedPersons);
