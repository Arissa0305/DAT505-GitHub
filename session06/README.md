### Session06 ###
In this session we introduced CityScape.
```javascript
var geo = new THREE.PlaneGeometry(20,20);
var mat = new THREE.MeshPhongMaterial({color: 0x9db3b5,wireframe :true });
floor = new THREE.Mesh(geo, mat);
floor.rotation.x = -0.5 * Math.PI;
floor.receiveShadow = true;
scene.add(floor);
```
Create the geometry for the floor.
```javascript
var geometry = new THREE.CubeGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial({ wireframe :true, color: 0xffffff});
```
Here you can change the material of the geometry.
```javascript
var building = new THREE.Mesh(geometry.clone());
```
Create geometry as a clone.
```javascript
function update(delta) {
  controls.update(delta);
  if(controls.object.position.y < floor.position.y + 10){
  }
}
```
Mouse Control Value.

Final effect
![S6](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S6.png)
