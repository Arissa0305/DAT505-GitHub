### Session04 ###
In this session we introduced ArrayMesh with random velocity.
### Exercise ###
Define different materials and speeds for geometry by ArrayMesh.
```HTML
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```
The aim of this code is to link libraries of three.js.

```JavaScript
var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(20, 50, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0,1000,0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0xCC99CC);
  renderer.setSize(W, H);

controls = new THREE.OrbitControls(camera, renderer.domElement);

  for (var x = -15; x <= 10; x += 5) {
    for (var y = -15; y <= 10; y += 5) {
        for (var z= -15; z <= 10; z += 5) {


console.log("X:" +x+ ",Y : " +y+ ",Z:" +z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      var boxMaterial = new THREE.MeshLambertMaterial({color:  0xE79796});

 if (x >= 0 && y >= 0 && z >= 0){
   boxMaterial = new THREE.MeshLambertMaterial({color: "#CC0033"});
 } else if ( x >= 0 && y >=0 && z <= 0){
   boxMaterial = new THREE.MeshLambertMaterial({color: "#FFD700"});
 } else if ( x >= 0 && y <=0 && z < 0){
   boxMaterial = new THREE.MeshLambertMaterial({color:"#BCEE68"});
 } else if ( x >= 0 && y <=0 && z >= 0){
   boxMaterial = new THREE.MeshLambertMaterial({color: "#9370DB"});
  } else if ( x <= 0 && y >=0 && z >= 0){
    boxMaterial = new THREE.MeshLambertMaterial({color: "#CC66FF"});
  } else if ( x <= 0 && y >=0 && z <= 0){
    boxMaterial = new THREE.MeshLambertMaterial({color: "#3A5FCD"});
  }

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

      mesh.position.x = x;
      mesh.position.z = z;
      mesh.position.y = y;
      scene.add(mesh);
      cubes.push(mesh);

}
}
}

  document.body.appendChild(renderer.domElement);

}
```
This code Create a two dimensional grid of objects.Concatenation of the x and y values (open console to see), and position them accordingly,then change the color of cube according to coordinates.
```JavaScript
function drawFrame(){
  requestAnimationFrame(drawFrame);
rot += 0.01;

cubes.forEach(function(c,i){
  c.rotation.x = rot;
  c.rotation.y = rot;
});
```
Define the rotational speed of cube on X and Y axes.

Final effect
![S3](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S4-2.png)

Adding rotation and material to the specified cube

```JavaScript
var cubes = [];
var randomSpeedX = [];
```
Firstly, assigning cube and random velocity values.
```JavaScript
var randomValueX = (Math.random() * 0.1) - 0.05;
randomSpeedX.push(randomValueX);
console.log( "randomSpeedX")
      scene.add(mesh);
      cubes.push(mesh);
```
Random velocity values - 0.05 to 0.05.

```JavaScript
function drawFrame(){
  requestAnimationFrame(drawFrame);

  console.log("randomSpeedX");

  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];

  renderer.render(scene, camera);
}
```
Give the specified cube instantaneous speed.

Final effect
![S3](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S4-3.png)
