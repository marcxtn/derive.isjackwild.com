const THREE = require('three');

const raycaster = new THREE.Raycaster();

export const update = (origin, direction, intersectableMeshes) => {
	raycaster.set(origin, direction);
	// const intersects = raycaster.intersectObjects(intersectableMeshes);
	// intersects.forEach((mesh) => {
	// 	console.log(mesh.object);
	// 	mesh.object.material.color.set(0xff00ff);
	// });
	let foundOne = false;
	intersectableMeshes.forEach((mesh) => {
		const intersected = raycaster.intersectObject(mesh);
		if (intersected.length && foundOne === false) {
			foundOne = true;
			mesh.onEnterFocus();
			return;
		}
		mesh.onExitFocus();
	});
}