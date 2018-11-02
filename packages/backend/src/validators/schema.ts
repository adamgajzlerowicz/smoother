import * as Joi from 'joi'

const schema = {
    commands: Joi.array().items(
        Joi.object().keys({
            name: Joi.string().required(),
            command: Joi.string().required(),
            fields: Joi.any().optional(),
            payload: Joi.any().optional(),
        })
    ).required()
};

export {
    schema,
};
