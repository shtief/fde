var path = require("path");
var I18nPlugin = require("i18n-webpack-plugin");
var languages = {
	"en": null,
	"de": require("./i18n/de.json")
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8082');
    }

    return sources;
}

module.exports = Object.keys(languages).map(function(language) {
	return {
        entry: {
            app: getEntrySources(['./js/app'])
        },
        output: {
            filename: 'public/' + language + '.[name].js'
        },
        plugins: [
            new I18nPlugin(
                languages[language]
            )
        ]
    }
});
