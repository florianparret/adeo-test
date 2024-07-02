const getCommandAndValue = () => {
    const longArgFlag = process.argv.slice(2);
    const longArg = longArgFlag[0].split("=");
    const command = longArg[0].slice(2);
    const value = longArg[1];
    const result = { command: command, value: value };
    return result;
  };

  export { getCommandAndValue };