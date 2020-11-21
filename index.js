/*module.exports = function loggerFunc() {
    return "Work in progress...";
};*/

module.exports = class Logger
{
    constructor(appTitle = "Logger", args = {}) {
        this.appTitle = appTitle;
        
        this.settings = {
            displayTitle: true,
            displayDate: true,
            displayTime: true,
            logFile: "",
            displayLogType: true,
            displayClassDebugWarnings: true
        }

        for (let arg in args) {
            if (!(isNaN(this.settings[arg]))) {
                this.settings[arg] = args[arg];
            } else {
                if (this.settings.displayClassDebugWarnings)
                    console.log(`Invalid argument passed to Logger constructor\n\t${arg} = ${args[arg]} => Invalid.\n\tDisable these warnings using displayClassDebugWarnings`);
            }
        }

        if (this.settings.logFile === "")
            this.#logFileWrite = () => {};

        this.#logFileWrite("hello", "world");
    }

    changeSetting = (args = {}) => {
        for (let arg in args) {
            if (!(isNaN(this.settings[arg]))) {
                this.settings[arg] = args[arg];
            } else {
                if (this.settings.displayClassDebugWarnings)
                    console.log(`Invalid argument passed to Logger::changeSetting\n\t${arg} = ${args[arg]} => Invalid.\n\tDisable these warnings using displayClassDebugWarnings`);
            }
        }
    }

    log = (...str) => {
        console.log(this.#buildOutput("log", str));
    };

    warn = () => {};
    err = () => {};
    success = () => {};
    logfile = () => {};

    #logFileWrite = (...strings) => {console.log(strings.join(""))};
    
    #buildOutput = (type, ...input) => {
        let titleString = this.appTitle;
        let dateString = "";
        let timeString = "";
        let dtString = "";
        let inputMessage = input.join(" ");

        // Do we add on the date?
        //dateString.concat((this.settings.displayDate) ? "01/01/1970" : "");
        if (this.settings.displayDate)
            dateString = "01/01/1970";

        // Do we add on the time?
        //timeString.concat((this.settings.displayTime) ? "01:01:01" : "");
        if (this.settings.displayTime)
            timeString = "01:01:01";

        if (!(dateString === "" && timeString === ""))
            dtString = `[${dateString} ${timeString}]`;

        if (!(this.settings.displayTitle))
            titleString = "";

        if (!(this.settings.displayLogType))
            type = "";

        const finalString = `${dtString} ${titleString} ${type} ${inputMessage}`;

        return finalString;
    };
}