
import { main } from './main';
import { validateConfig } from './validators/config';

import * as config from '../../../config.json';

validateConfig(config) && main(config)

