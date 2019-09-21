module.exports = {
	"env": {
		"browser": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"airbnb"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"react-hooks"
	],
	"rules": {
		"linebreak-style": 0,
		"arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
		"padded-blocks": ["error", { "blocks": "never" }],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"indent": [2, "tab"],
		"no-trailing-spaces": ["error", { "skipBlankLines": true }],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-indent": [2, 'tab'],
		"arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
		"comma-dangle": ["error", {
			"arrays": "never",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
};