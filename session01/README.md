### Session01 ###
In this session we introduced Three.js.
### Exercise ###
```html
<script src="build/three.js"></script>
```
The purpose of this code is to load the library of three.js to web pages.

```javascript
var scene, camera, renderer;
var geometry, material, mesh;

function init(){

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#ffffff");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}
```

This code establishes basic settings such as camera, rendering, background color, screen size, etc.


```javascript
function geometry(){

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

  geometry1 = new THREE.SphereGeometry( 100, 12, 32 );
  material1 = new THREE.MeshBasicMaterial( { wireframe :true,color: "#000000" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  border1= new THREE.EdgesHelper(mesh1,0xffff00);
  mesh1.position.z = -1000;

  scene.add( mesh1 );
  scene.add( border1 );

  geometry2 = new THREE.IcosahedronBufferGeometry(200,1)
  material2 = new THREE.MeshNormalMaterial( {wireframe :true} );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2= new THREE.EdgesHelper(mesh2,0xffff00);
  mesh2.position.z = -1000;

  scene.add( mesh2 );
  scene.add( border2 );

  geometry3 = new THREE.SphereGeometry( 100, 12, 32 );
  material3 = new THREE.MeshBasicMaterial( {color: "#00ffff" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;

  scene.add( mesh3 );
}
```
This code creates different geometries, including adding their material, size and color.

![S1](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S1.png)

If everything went well you should see [this](https://github.com/Arissa0305/DAT505-GitHub/tree/master/session01).
