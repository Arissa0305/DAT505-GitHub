//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();



  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#ffffff");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );
  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

}


function geometry(){
  // Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

  // Create a Cube Mesh with basic material ---------

  geometry1 = new THREE.SphereGeometry( 100, 12, 32 );
  material1 = new THREE.MeshBasicMaterial( { wireframe :true,color: "#000000" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  border1= new THREE.EdgesHelper(mesh1,0xffff00);
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );
  scene.add( border1 );

  geometry2 = new THREE.IcosahedronBufferGeometry(200,1)
  material2 = new THREE.MeshNormalMaterial( {wireframe :true} );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2= new THREE.EdgesHelper(mesh2,0xffff00);
  mesh2.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh2 );
  scene.add( border2 );

  geometry3 = new THREE.SphereGeometry( 100, 12, 32 );
  material3 = new THREE.MeshBasicMaterial( {color: "#00ffff" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  // Add mesh to scene
  scene.add( mesh3 );
}

var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.02;

  mesh3.rotation.x += 0.01; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;

  renderer.setClearColor(" #ffffff");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
