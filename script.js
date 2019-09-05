let scene, camera, renderer, cube;
let ADD = 0.01;

let createCube = function() {
	let geometry = new THREE.BoxGeometry(.5,.5,.5);
	let material = new THREE.MeshBasicMaterial({color: 'coral'});
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
}

let init = () => {

	// Create the scene.
	scene = new THREE.Scene();
	scene.background = new THREE.Color('#ddd');

	// Create and locate the camera.
	camera = new THREE.PerspectiveCamera(30,
								window.innerWidth / window.innerHeight, 
								1, 1000);
	camera.position.z = 5;

	// Create the cube.
	createCube();

	// Create the renderer.
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

}

let mainLoop = () => {

	cube.rotation.y += ADD;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
}

init();
mainLoop();


