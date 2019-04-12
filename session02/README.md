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

```
The above code creates different materials and assigns different geometries by changing the name.
### Homework ###
```javascript
var texture = new THREE.TextureLoader().load( 'texture.gif' );

var material2 = new THREE.MeshBasicMaterial( { map: texture } );
```
This is my GIF image of texture.

![texture](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/session02/S2-04-Homework/cheese.gif)

Final effect

![S2](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S2.png)
