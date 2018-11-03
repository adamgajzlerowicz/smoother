import chalk from 'chalk';
import { main } from './main';
import { validateConfig } from './validators/config';

import * as defaultConfig from '../../../config.json';

const config = process.argv[2];

const validated = validateConfig(config || defaultConfig);


if (validated.error) {
    console.log(chalk.red('Incorrect config. Here are the details'));
    console.log();
    console.log((validated.error.details));
} else {
    console.log(chalk.green('Application started'));
    main(validated.value);
}
