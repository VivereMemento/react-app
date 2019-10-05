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
	"parser": "babel-eslint",
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
		"no-nested-ternary": "off",
		"arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
		"arrow-body-style": ["error", "as-needed"],
		"padded-blocks": ["error", { "blocks": "never" }],
		"no-tabs": "off",
		"indent": [2, "tab", { "flatTernaryExpressions": true, "SwitchCase": 1 }],
		"no-trailing-spaces": ["error", { "skipBlankLines": true }],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-indent": [2, 'tab'],
		"react/jsx-indent-props": [2, 'tab'],
		"comma-dangle": ["error", {
			"arrays": "never",
			"objects": "never",
			"imports": "never",
			"exports": "never",
			"functions": "never"
		}],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/require-default-props": [0, { forbidDefaultForRequired: true }],
		"jsx-quotes": ["error", "prefer-single"],
		"react/jsx-one-expression-per-line": "off",
		"react/forbid-prop-types": 0,
		"no-else-return": "off",
		"no-unused-expressions": "off",
		"no-confusing-arrow": ["error", {"allowParens": true}],
		"max-len": ["error", { "code": 150 }],
		"no-sequences": "off",
		"react/no-array-index-key": "off",
		"jsx-a11y/click-events-have-key-events": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"jsx-a11y/no-noninteractive-element-interactions": 0,
	}
};