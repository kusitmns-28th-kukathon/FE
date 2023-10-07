import {atom} from 'recoil';

export const accessTokenState = atom({
	key: 'accessTokenState',
	default: '',
});
export const arrayState = atom({
	key: 'arrayState',
	default: 0,
});
export const dataState = atom({
	key: 'dataState',
	default: false,
});
