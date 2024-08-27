import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends(
        "plugin:vue/vue3-essential",
        "@vue/airbnb",
        "@vue/typescript/recommended"
    ),
    {
        languageOptions: {
            globals: {
                ...globals.node,
                defineProps: "readonly",
                defineEmits: "readonly",
                defineExpose: "readonly",
                withDefaults: "readonly",
            },
            ecmaVersion: 2020,
            sourceType: "commonjs",
        },
        rules: {
            "no-console": "off",
            "no-debugger": "off",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "warn",
            "max-len": ["warn", {
                code: 200,
            }],
            "import/prefer-default-export": "off",
        },
    },
];
