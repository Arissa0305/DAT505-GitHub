### Session07 ###
In this session we introduced examples of cube appearing randomly and deforming, in addition, we also do a exercise that make eyeballs follow the mouse.
### Exercise ###
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```
The aim of this code is to link libraries of three.js.
```Javascript
function render() {
console.log(mouseY)
for (var i = 0; i < eyesNum; i++) {

		eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
		eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);

		if (mouseX<160) eyes[1].rotation.y = map_range(mouseX, 0, 160, -0.2, 0.25);
		else eyes[1].rotation.y = map_range(mouseX, 160, window.innerWidth, 0.25, 1.14);
		if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

		if (mouseX<1880) eyes[2].rotation.y = map_range(mouseX, 0, 1650, -1.14, 0);
		else eyes[2].rotation.y = map_range(mouseX, 1650, window.innerWidth,0, 0.3 );
		if (mouseY<900) eyes[2].rotation.x = map_range(mouseY, 0, 900, -1.14, 0);
		else eyes[2].rotation.x = map_range(mouseY, 900, window.innerHeight, 0, 0.2);

		if (mouseX<160) eyes[3].rotation.y = map_range(mouseX, 0, 160, -0.2, 0.25);
		else eyes[3].rotation.y = map_range(mouseX, 160, window.innerWidth, 0.25, 1.14);
		if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

		if (mouseX<1650) eyes[4].rotation.y = map_range(mouseX, 0, 1650, -1.14, 0);
		else eyes[4].rotation.y = map_range(mouseX, 1650, window.innerWidth, 0, 0.3);
		if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, -0.25);
		else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

	}

	renderer.render( scene, camera );
}
```
This code converts three-dimensional vectors into two-dimensional coordinates
Final effect
![S7](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S7.png)
