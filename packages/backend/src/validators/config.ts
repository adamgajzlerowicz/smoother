const validateConfig = (config) => {
    if (!config.commands) {
        throw new Error('commands missing');
    }
    return true;
};

export {
    validateConfig,
};

