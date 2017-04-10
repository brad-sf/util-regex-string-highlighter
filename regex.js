const chalk = require('chalk');
const printer = (str, regex) =>
    console.log(str.replace(regex, str => chalk.bgBlue(str)));

printer("This is my test", /is/);

