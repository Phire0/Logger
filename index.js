const colours = {
    reset: '\x1b[0m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    green: '\x1b[32m'
};

module.exports = class Logger
{

    /**
     * @constructor
     * @param {string} title The title to display in each log 
     */
    constructor(title = 'Logger') {
        this.title = title;
    }

    /**
     * Generate a timestamp in HH:MM:SS format
     * @access private
     * @returns {string} The generated timestamp
     */
    #getTimeStamp() {
        const date = new Date();
        
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();

        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return `[${day}/${month}/${year} ${hours}:${minutes}:${seconds}]`;
    }

    /**
     * Generate a title string
     * @access private
     * @returns {string} The generated title
     */
    #getTitle() {
        return `[${colours.cyan}${this.title}${colours.reset}]`;
    }

    /**
     * Display a log message
     * @param {*} content The content to be displayed
     */
    log(content) {
        console.log(`${this.#getTimeStamp()} ${this.#getTitle()} ${content}`);
    }

    /**
     * Display a success message
     * @param {*} content The content to be displayed
     */
    success(content) {
        console.log(`${this.#getTimeStamp()} ${this.#getTitle()} ${colours.green}${content}${colours.reset}`);
    }

    /**
     * Display a warning message
     * @param {*} content The content to be displayed
     */
    warn(content) {
        console.warn(`${this.#getTimeStamp()} ${this.#getTitle()} ${colours.yellow}${content}${colours.reset}`);
    }

    /**
     * Display an error message
     * @param {*} content The content to be displayed
     */
    error(content) {
        console.error(`${this.#getTimeStamp()} ${this.#getTitle()} ${colours.red}${content}${colours.reset}`);
    }

}