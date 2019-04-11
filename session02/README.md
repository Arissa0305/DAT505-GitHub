#### Session02 ####
In this session we introduced the usage of different materials.
### Example ###
```html
<script src="js/three.min.js"></script>
```
The purpose of this code is to link the library of three.js.


```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
var material1 = new THREE.MeshNormalMaterial();

var mesh1 = new THREE.Mesh( geometry, material1 );
mesh1.position.z = -1000;
mesh1.position.y = 100;

scene.add(mesh1);
```
Create a Cube Mesh with  material.

```javascript
var material3 = new THREE.MeshLambertMaterial({
  color: "ffff66",
  transparent: true,
  opacity: 1
});


var material4 = new THREE.MeshNormalMaterial({shininess: 1});

var material = new THREE.MeshLambertMaterial({
  color: '#D2BE82',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});


var material6 = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});


var material6 = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});

var material7 = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
var material8 = new THREE.MeshNormalMaterial({shininess: 1});

var texture = new THREE.TextureLoader().load( 'texture.gif' );
```
The above code creates different materials and assigns different geometries by changing the name.
