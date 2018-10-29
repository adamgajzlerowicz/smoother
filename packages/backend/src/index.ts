import { pipe } from 'sanctuary';

import { main } from './main';
import { validateConfig } from './validators/config';

import * as config from '../../../config.json';

console.log(pipe());

validateConfig(config) && main(config);
