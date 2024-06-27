import data from "./data.js";

const getCommandAndValue = () => {
  const longArgFlag = process.argv.slice(2);
  const longArg = longArgFlag[0].split("=");
  const command = longArg[0].slice(2);
  const value = longArg[1];
  const result = { command: command, value: value };
  return result;
};

const commandAndValue = getCommandAndValue();
const command = commandAndValue.command;
const value = commandAndValue.value;

const filter = (value) => {
  const result = [];
  data.map((country) => {
    country.people.map((person) => {
      person.animals = person.animals.filter((animal) => {
        if (animal.name.toLowerCase().includes(value.toLowerCase())) {
          result.push({ name: country.name, people : [{name : person.name, "animals" : [{name : animal.name}]}]});
        }
      });
    });
  });
  console.dir(result, { depth: null, colors: true });
};

if (command === "filter") {
  filter(value);
}
