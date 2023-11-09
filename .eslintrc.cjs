module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: true,
      node: true
    }
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  plugins: [
    "react",
    "react-hooks",
    "react-refresh",
    "import",
    "@typescript-eslint",
    "prettier",
    "simple-import-sort",
    "unused-imports"
  ],
  ignorePatterns: ["build"],
  rules: {
    // For Production
    "no-duplicate-case": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-console": [process.env.NODE_ENV === "production" ? 2 : 1, { allow: ["warn", "error"] }],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 1,
    "no-unused-vars": process.env.NODE_ENV === "production" ? 2 : 1,
    "@typescript-eslint/no-unused-vars": process.env.NODE_ENV === "production" ? 2 : 1,
    // eslint
    "arrow-body-style": ["error", "as-needed"],
    "eol-last": 1,
    "max-len": [
      1,
      {
        code: 120,
        comments: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2
      }
    ],
    "no-multiple-empty-lines": 1,
    "no-param-reassign": [2, { props: false }],
    "no-spaced-func": 0,
    "object-curly-newline": [
      1,
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    "prefer-const": 1,
    "prefer-template": 1,
    "no-nested-ternary": 0,

    // import
    "import/newline-after-import": [
      "error",
      {
        count: 1
      }
    ],
    // import
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "import/no-cycle": 1,
    "import/no-named-as-default": 1,
    "import/no-unresolved": 2,
    "import/order": [
      1,
      {
        "newlines-between": "always",
        groups: [["builtin", "external"], "internal", ["parent", "index", "sibling"], ["object", "type"]]
      }
    ],

    // react
    "react/destructuring-assignment": 0,
    "jsx-a11y/control-has-associated-label": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "react/display-name": 0,
    "react/jsx-key": ["error", {
      "checkFragmentShorthand": true,
      "checkKeyMustBeforeSpread": true,
      "warnOnDuplicates": true
    }],
    "react/no-array-index-key": 1,
    "react/no-unused-prop-types": [0, { skipShapeProps: true }],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "react/self-closing-comp": 1,

    // react-refresh
    "react-refresh/only-export-components": [1, { allowConstantExport: true }],

    // ts
    "@typescript-eslint/no-unnecessary-type-arguments": 0,
    "@typescript-eslint/await-thenable": 2,
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/ban-types": 2,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-duplicate-type-constituents": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-misused-promises": [2, { checksVoidReturn: { arguments: false, attributes: false } }],
    "@typescript-eslint/no-non-null-asserted-optional-chain": 2,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-redundant-type-constituents": 2,
    "@typescript-eslint/no-unnecessary-type-assertion": 2,
    "@typescript-eslint/no-unsafe-argument": 2,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-call": 2,
    "@typescript-eslint/no-unsafe-enum-comparison": 2,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/require-await": 2,
    "@typescript-eslint/restrict-template-expressions": 2,

    // prettier
    "prettier/prettier": 1
  },
}
