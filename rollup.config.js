import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import nodePolyfills from 'rollup-plugin-node-polyfills';
// import { terser } from "rollup-plugin-terser";
// import { eslint } from 'rollup-plugin-eslint';
// import serve from 'rollup-plugin-serve';
// import livereload from 'rollup-plugin-livereload';
// import pkg from './package.json';

const extensions = ['.js', '.ts'];

const esmConfig = {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
    },
    plugins: [
        nodePolyfills(),
        resolve({
            extensions,
        }),
        babel({
            exclude: 'node_modules/**',
            extensions,
            babelHelpers: 'runtime'
        }),
        commonjs(),
    ]
}

export default esmConfig;
