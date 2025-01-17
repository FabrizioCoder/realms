// https://www.npmjs.com/package/eslint-config-moon
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
	},
	extends: [
		'moon',
		'moon/node',
		// Uncomment when targeting browsers
		// 'moon/browser',
		// Uncomment if using React
		// 'moon/react',
		// Uncomment if using Solid
		// 'moon/solid',
	],
	rules: {
		// Doesn't understand the new TS 4.7 imports
		'import/no-unresolved': 'off',

		// We need to keep "index" around in imports for extensions
		'import/no-useless-path-segments': 'off',
		// inconsistent rule
		'@typescript-eslint/prefer-literal-enum-member': 'off',
	},
	overrides: [
		{
			files: ['*.config.js', '.eslintrc.js'],
			rules: {
				'sort-keys': 'off',
				'import/no-commonjs': 'off',
				'unicorn/prefer-module': 'off',
			},
		},
	],
};