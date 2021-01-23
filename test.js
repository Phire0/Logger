// Basic test
const Logger = require("./index");

const logger = new Logger();

logger.log('This is an informative message!');
logger.success('The mission was successful!');
logger.warn('There might have been a slight issue...');
logger.error('Something has gone very wrong, send help!');