import fs from 'fs';
import { tours as currentTours } from './src/data/tours.ts';

// We cannot easily import the source file because it might depend on aliases or paths.
// Let's read it as simple JS object string, or just use regular expressions since TS parsing is hard without a compiler API.
// Alternatively, I will just manually copy over the text.
