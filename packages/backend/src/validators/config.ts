import * as Joi from 'Joi';

import { schema } from './schema';

const options = {
    stripUnknown: true
};

const validateConfig = config => Joi.validate(config, schema, options);

export {
    validateConfig,
};

