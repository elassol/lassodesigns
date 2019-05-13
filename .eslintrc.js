module.exports = {
    "env": {
        "es6": true,
        "browser": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "comma-dangle": ["error", "always-multiline"],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "max-len": ["error", { "code": 180, "comments": 200 }],
        "padding-line-between-statements": ["error",
            { "blankLine": "always", "prev": "*", "next": "return" },
            { "blankLine": "always", "prev": "*", "next": "class" }
        ],
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "object-curly-newline": ["error", {
            "ObjectExpression": { "minProperties": 8, "multiline": true, "consistent": true },
            "ObjectPattern": { "minProperties": 8, "multiline": true, "consistent": true },
            "ImportDeclaration": { "minProperties": 8, "multiline": true, "consistent": true },
            "ExportDeclaration": { "minProperties": 8, "multiline": true, "consistent": true }
        }],
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": false,
        "react/prefer-stateless-function": false,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-filename-extension": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-indent": ["error", 2, { "checkAttributes": true }],
        "react/jsx-indent-props": ["error", 2],
        "react/jsx-no-undef": ["error", { "allowGlobals": true }],
        "react/prop-types": "off",
        "react/jsx-one-expression-per-line": "off"
    },
};
