module.exports = (api) => {
    api.cache(true);
    const presets = [
        '@babel/preset-env'
    ];
    const plugins = ['babel-plugin-add-module-exports'];

    return {
        plugins,
        presets
    };
};
