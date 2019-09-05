let scene, camera, renderer, cube;
let ADD = 0.01;

// let createCube = function() {
// 	let geometry = new THREE.BoxGeometry(.5,.5,.5);
// 	let material = new THREE.MeshBasicMaterial({color: 'coral'});
// 	cube = new THREE.Mesh(geometry, material);
// 	scene.add(cube);
// }

let createSphere = () => {
	let geometry = new THREE.SphereGeometry(.5, 100, 100);
	
	let material = new THREE.MeshBasicMaterial({color: 0x945E2B, wireframe: false});
				 
	sphere = new THREE.Mesh( geometry, material );
	scene.add(sphere);
};

let createRing = () => {
	let geometry = new THREE.TorusGeometry(.7,.15,2,50);
	
	let material = new THREE.MeshBasicMaterial({color: 0xD4D272, wireframe: false});
	// let material = new THREE.MeshBasicMaterial({color: 'yellow', wireframe: false});
				 
	torus = new THREE.Mesh( geometry, material );
	scene.add(torus);
};

let createRing2 = () => {
	// let geometry = new THREE.TorusGeometry(.5,.08,2,100,2*Math.PI);
	let geometry = new THREE.TorusGeometry(1.1,.15,2, 50);
	
	let material = new THREE.MeshBasicMaterial({color: 0xF4D272, wireframe: false});
	// let material = new THREE.MeshBasicMaterial({color: 'orange', wireframe: false});
				 
	torus2 = new THREE.Mesh( geometry, material );
	scene.add(torus2);
};

let createRing3 = () => {
	// let geometry = new THREE.TorusGeometry(.92,.1,2,100,2*Math.PI);
	let geometry = new THREE.TorusGeometry(1.5,.15,2,50);
	
	let material = new THREE.MeshBasicMaterial({color: 0xFBB56D, wireframe: false});
				 
	torus3 = new THREE.Mesh( geometry, material );
	scene.add(torus3);
};

let init = () => {

	// Create the scene.
	scene = new THREE.Scene();
	scene.background = new THREE.Color('#000');

	// Create and locate the camera.
	camera = new THREE.PerspectiveCamera(50,
								window.innerWidth / window.innerHeight, 
								1, 1000);
	camera.position.z = 5;

	// createCube();
	createSphere();
	createRing();
	createRing2();
	createRing3();

	// Create the renderer.
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

}

let mainLoop = () => {

	sphere.rotation.x += ADD;
	sphere.rotation.y += ADD;

	torus.rotation.x += ADD;
	torus.rotation.y += ADD;

	torus2.rotation.x += ADD;
	torus2.rotation.y += ADD;

	torus3.rotation.x += ADD;
	torus3.rotation.y += ADD;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
}

init();
mainLoop();


