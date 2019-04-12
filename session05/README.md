### Session05 ###
In this session we studied objects are randomly scaled and rotated within the range.
### Exercise ###
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```
The aim of this code is to link libraries of three.js.

```Javascript
function drawFrame(ts){
  requestAnimationFrame(drawFrame);
  rot += 0.3;
  cubes.forEach(function(c, i) {
c.scale.y =Math.sin(ts/500*Math.PI +
c.position.x*4.95 + c.position.z/10) + 1;
});
  renderer.render(scene, camera);
}
```
ForEach takes all the array entries and passes the c as the object, and i as the index.Using the equation to change the size of the object to achieve the effect of swing.

Final effect
![S5](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S5.png)
