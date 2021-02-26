# Logger
> A basic, lightweight JavaScript logging package.

![npm (scoped)](https://img.shields.io/npm/v/@phire/logger)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@phire/logger)

This package will allow you to enhance your project's logging capabilities by providing features which are not included with the traditional JavaScript console.

## Getting Started

These are the instructions on how you can get this package up and running on your project locally.

You can either install this package locally using npm, or you can clone this project using Git.

### Prerequisites

If you are installing using npm, you should have the latest version of npm which can be obtained by running the following:

```sh
npm install npm@latest -g
```

### Installation

Clone repository using Git:
```sh
git clone https://github.com/Phire0/Logger.git
```

Install via npm:

```sh
npm install phire0/logger
```

## Usage

This package will allow you to enhance your project's logging capabilities beyond those offered by the default JavaScript console.

![Output Example](https://i.imgur.com/i3dSGjg.png)

Simply add this package to your project and instantiate a logger object (with an optional title) and you're good to go:

```javascript
const Logger = require('./index');

const logger = new Logger('My Title');

logger.log('This is an informative message!');
logger.success('The mission was successful!');
logger.warn('There might have been a slight issue...');
logger.error('Something has gone very wrong, send help!');
```

## Development setup

This package has no external dependencies and should be easily includable in your package. You can test that your installation was successful by running:

```sh
npm test
```

## Roadmap

See the [open issues](https://github.com/Phire0/Logger/issues) for a list of proposed features and known issues.

## Contact

Jamie Connelly – [@Phire0](https://twitter.com/Phire0)

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/Phire0](https://github.com/Phire0/)

## Contributing

1. Fork it (<https://github.com/Phire0/Logger/fork>)
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a new Pull Request