//Global variables
var scene, camera, renderer;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();



  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#fff8d7");

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

var texture = new THREE.TextureLoader().load( 'texture.gif' );

var material2 = new THREE.MeshBasicMaterial( { map: texture } );

  geometry2 = new THREE.SphereGeometry( 50, 12, 32 );

  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;
  mesh2.position.x = -300;
  // Add mesh to scene
  scene.add( mesh2);

  var material3 = new THREE.MeshNormalMaterial({shininess: 1});
  geometry3 = new THREE.TorusKnotBufferGeometry( 100, 30, 10, 16 );

  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  mesh3.position.x = 0;

  // Add mesh to scene
  scene.add( mesh3 );

  var material4 = new THREE.MeshPhysicalMaterial({
    color: 0xfffff37,
    roughness: 0,
    metalness: 0.5,
    reflectivity: 0.5,
    clearCoat: 0,
    claerCoatRoughness: 0,
    shininess: 2000
  });
  geometry4 = new THREE.BoxBufferGeometry( 100, 100, 100 );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;
  mesh4.position.x = 300;
  scene.add( mesh4);

  var texture = new THREE.TextureLoader().load( 'cheese.gif' );

  var material5 = new THREE.MeshBasicMaterial( { map: texture } );

  geometry5 = new THREE.BoxBufferGeometry( 50, 100, 100 );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;
  mesh5.position.x = 500;
  scene.add( mesh5);
}

var render = function () {
  requestAnimationFrame( render );

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.01;


  mesh3.rotation.x += 0.01; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;

  mesh4.rotation.x += 0.01; //Continuously rotate the mesh
  mesh4.rotation.y += 0.01;

  mesh5.rotation.x += 0.02; //Continuously rotate the mesh
  mesh5.rotation.y += 0.01;

  renderer.setClearColor(" #fff8d7");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
