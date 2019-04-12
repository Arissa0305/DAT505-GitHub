### session08 ###
In this session we studied how to load obj model and assign random color to the model by clicking on the mouse.
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```
The aim of this code is to link libraries of three.js.
```Javascript
for (var i=0; i<500; i++){
var mtlLoader = new THREE.MTLLoader();
  mtlLoader.load("Blocks.mtl", function(materials){
  materials.preload();
  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("ship.obj", function(mesh){
  mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;
      scene.add(mesh);
      objects.push(mesh);
  });
}
```
Loading model, setting random rotation speed and assigning random size to model.
```Javascript
function onDocumentMouseDown( event ) {
  event.preventDefault();
  var intersects = raycaster.intersectObjects(objects,true);
  if( intersects.length > 0){
    intersects[0].object.material.color.set( Math.random()*0xffffff);
  }
}
```
Give random colors when the mouse is clicked.

Final effect
![S8](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S8.png)
