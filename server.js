import { filter, count } from "./src/services/commands.js"
import { getCommandAndValue } from "./src/services/command-parser.js"

const commandAndValue = getCommandAndValue();
const command = commandAndValue.command;
const value = commandAndValue.value;


switch (command) {
  case "filter":
    filter(value);
    break;
  case "count":
    count();
    break;
  default:
    console.log(`Sorry, ${command} is not a command. Type --help.`);
}
