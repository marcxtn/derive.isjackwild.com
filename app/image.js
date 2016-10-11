const THREE = require('three');
const TweenLite = require('gsap');
import PubSub from 'pubsub-js';
import { WORLD_SIZE, IMAGE_SCALE, IMAGE_DIST } from './constants.js';

let geom, material, mesh;


const showImage = (e, map) => {
	if (mesh) return;
	const vec = new THREE.Vector2(map.image.width, map.image.height).normalize().multiplyScalar(IMAGE_SCALE);
	geom = new THREE.PlaneGeometry(vec.x, vec.y);
	material = new THREE.MeshBasicMaterial({
		map,
		depthTest: false,
		transparent: true,
		opacity: 0.5,
	});
	mesh = new THREE.Mesh( geom, material );

	PubSub.publish('scene.add', mesh);
}

const hideImage = () => {
	PubSub.publish('scene.remove', mesh);
	geom = null;
	material = null;
	mesh = null;
}

export const update = (camPosition, camDirection) => {
	if (!mesh) return;
	mesh.position.copy(new THREE.Vector3().copy(camDirection).multiplyScalar(IMAGE_DIST));
	mesh.lookAt(camPosition);
}


PubSub.subscribe('image.show', showImage);
PubSub.subscribe('image.hide', hideImage);