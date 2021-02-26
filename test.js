// Basic test
const Logger = require('./index');

const logger1 = new Logger('Logger 1', { displayTitle: true });

logger1.log('This is a test of logger1! (log)');
logger1.success('This is a test of logger1! (success)');
logger1.warn('This is a test of logger1! (warn)');
logger1.error('This is a test of logger1! (error)');

const logger2 = new Logger('Logger 2', { displayTitle: false });

logger2.log('This is a test of logger2! (log)');
logger2.success('This is a test of logger2! (success)');
logger2.warn('This is a test of logger2! (warn)');
logger2.error('This is a test of logger2! (error)');

// Example instantiating a logger with an invalid setting
const logger3 = new Logger('Logger 3', { foo: 'bar' });