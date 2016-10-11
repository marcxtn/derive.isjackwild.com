import { lerpRGBColour } from './lib/colour.js';

export const WORLD_SIZE = 30;
export const INIT_POSITION_VARIATION = WORLD_SIZE - 1;
export const BODIES_COUNT = 18;
export const MAX_VELOCITY = 0.01, MIN_VELOCITY = 0.001;
export const WIND_STRENGTH = 0.02;
export const PILLS_COUNT = 18;
export const GAIN = 0.28;
export const IMAGE_SCALE = 25;
export const IMAGE_DIST = WORLD_SIZE + 1;
const soundPath = 'assets/sounds/';
const imgPath = 'assets/images/'

export const PARTICLE_DATA = [];

const fromCol = {
	r: 9,
	g: 79,
	b: 191,
}

const toCol = {
	r: 169,
	g: 181,
	b: 200,
}

const control = 0;

for (let i = 1; i < 21; i++) {
	const control = i / 20;
	const colour = lerpRGBColour(control, fromCol, toCol);
	PARTICLE_DATA.push({
		soundSrc: `${soundPath}sound${i}.mp3`, 
		imgSrc: `${imgPath}img${i}.jpg`,
		colour: colour,
	});
}