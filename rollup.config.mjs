import dts from 'rollup-plugin-dts';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  input: path.resolve(__dirname, './dist/types/src/index.d.ts'),
  output: {
    file: path.resolve(__dirname, './dist/index.d.ts'),
    format: 'es',
  },
  plugins: [dts()],
};
