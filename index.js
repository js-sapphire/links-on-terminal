'use-script';
const ansiEscapes = require('ansi-escapes');
const supportsHyperlinks = require('supports-hyperlinks');
const chalk = require('chalk');

const getLink = (text, url) => {
    if(!supportsHyperlinks.stdout){
        return chalk.red.bgWhite(`${text} => ${url} \n Your terminal doesn't support hyperlinks`);
    }
    return chalk.blue.bgWhite(ansiEscapes.link(text, url));
}

module.exports = getLink;