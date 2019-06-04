import {init as initArray} from './extension/array.mjs';
import {init as initNumber} from './extension/number.mjs';
import {init as initObject} from './extension/object.mjs';
import {init as initString} from './extension/string.mjs';

export const init = () => {
	initArray();
	initNumber();
	initObject();
	initString();
};
