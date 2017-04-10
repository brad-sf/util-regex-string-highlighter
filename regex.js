const chalk = require('chalk');
const printer = (str, regex) => {
    console.log(str.replace(regex, str => chalk.bgBlue(str)));
}

let str = "This is my test String!";
let regex = /is/;
printer(str,regex);
