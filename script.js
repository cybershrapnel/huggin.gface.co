// Setup the scene, camera, and renderer.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('webgl-background').appendChild(renderer.domElement);

// Add some geometry to the scene.
var geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
var material = new THREE.MeshNormalMaterial();
var torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Camera positioning.
camera.position.z = 30;

// Animation function.
function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Handle window resize.
window.addEventListener('resize', function() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
