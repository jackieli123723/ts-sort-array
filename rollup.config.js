import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
const banner = `/*!
 * (c) 2019-${new Date().getFullYear()} jackieli 西门互联
 * https://github.com/jackieli123723/ts-sort-array
 * http://issue.lilidong.cn
 * Released under the MIT License.
 */`;
export default {
  input: 'src/lib/index.ts',
  output: [
    { file: `umd/index.js`, format: 'umd',  banner,}
  ],
  plugins: [
    typescript({
        // ttypescript -> https://github.com/cevek/ttypescript
        typescript: ttypescript, // Over TypeScript tool to use custom transformers in the tsconfig.json
        // useTsconfigDeclarationDir: true, // 使用 tsconfig.json 中的 declarationDir 作为声明文件的目录 重新新建一个配置
        tsconfig: "tsconfig.build-rollup.json",
        tsconfigOverride: {
          exclude: ['**/*.spec.ts', '**/*.spec.js'],
        },
      }),
    resolve()
  ] 
};


