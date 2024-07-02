import data from "../../tests/data.js";

const filter = (value) => {
    const result = [];
    data.map((country) => {
      let isContainAnimalValue = false;
  
      for (let i = 0; i < country.people.length; i++) {
        isContainAnimalValue = JSON.stringify(country.people[i].animals)
          .toLowerCase()
          .includes(value.toLowerCase());
        if (isContainAnimalValue) {
          result.push({ name: country.name, people: [] });
          break;
        }
      }
      country.people.map((person) => {
        if (
          JSON.stringify(person.animals)
            .toLowerCase()
            .includes(value.toLowerCase())
        ) {
          result[result.length - 1].people.push({
            name: person.name,
            animals: [],
          });
        }
        person.animals = person.animals.filter((animal) => {
          if (animal.name.toLowerCase().includes(value.toLowerCase())) {
            result[result.length - 1].people[
              result[result.length - 1].people.length - 1
            ].animals.push({ name: animal.name });
          }
        });
      });
    });
    console.dir(result, { depth: null, colors: true });
  };
  
  const count = () => {
      const result = [];
      data.map((country) => {
          let peopleCount = country.people.length;
          result.push({ name: country.name + ` [${peopleCount}]`, people: [] });
          country.people.map((person) => {
              let animalsCount = person.animals.length;
              result[result.length - 1].people.push({
                  name: person.name + ` [${animalsCount}]`,
                  animals: [],
                });
              person.animals.map((animal) => {
                  result[result.length - 1].people[
                      result[result.length - 1].people.length - 1
                    ].animals.push({ name: animal.name });
              });
          });
      });
      console.dir(result, { depth: null, colors: true });
  };

  export { filter, count };