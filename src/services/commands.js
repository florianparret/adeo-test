import data from "../../tests/data.js";

const filter = (valueToFind) => {
  const result = [];
  const value = valueToFind.toLowerCase();
  data.forEach((country) => {
    const isContainAnimalValue = country.people
      .flatMap((peopleToFlatmap) => peopleToFlatmap.animals)
      .find((animal) => animal.name.toLowerCase().includes(value));
    isContainAnimalValue && result.push({ name: country.name, people: [] });

    country.people.forEach((person) => {
      const resultToUpdate = result.find(
        (countryToFind) => countryToFind.name === country.name
      );
      if (
        person.animals.find((animal) =>
          animal.name.toLowerCase().includes(value)
        )
      ) {
        resultToUpdate.people.push({
          name: person.name,
          animals: [],
        });
      }
      person.animals
        .filter((animal) => animal.name.toLowerCase().includes(value))
        .map((animalToAdd) => {
          const peopleToUpdate = resultToUpdate.people.find(
            (peopleToFind) => peopleToFind.name === person.name
          );
          peopleToUpdate &&
            peopleToUpdate.animals.push({ name: animalToAdd.name });
        });
    });
  });
  console.dir(result, { depth: null, colors: true });
  return result;
};

const count = () => {
  const result = [];
  data.forEach((country) => {
    const peopleCount = country.people.length;
    result.push({ name: country.name + ` [${peopleCount}]`, people: [] });

    country.people.forEach((person) => {
      const resultToUpdate = result.find(
        (countryToFind) =>
          countryToFind.name === country.name + ` [${peopleCount}]`
      );
      const animalsCount = person.animals.length;
      resultToUpdate.people.push({
        name: person.name + ` [${animalsCount}]`,
        animals: [],
      });
      person.animals.forEach((animalToAdd) => {
        const peopleToUpdate = resultToUpdate.people.find(
          (peopleToFind) =>
            peopleToFind.name === person.name + ` [${animalsCount}]`
        );
        peopleToUpdate &&
          peopleToUpdate.animals.push({ name: animalToAdd.name });
      });
    });
  });
  console.dir(result, { depth: null, colors: true });
  return result;
};

export { filter, count };
