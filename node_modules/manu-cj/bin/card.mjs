
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const output = readFileSync(join(import.meta.dirname, 'output'), 'utf8');
console.log(output);