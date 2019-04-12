### Session03 ###
In this session we studied how to create GUI and a DIY homework.
### Example ###
```HTML
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```
The aim of this code is to link the library of three.js.
```JavaScript
var controller = new function() {
  this.scaleX = 1;
  this.scaleY = 1;
  this.scaleZ = 1;
  this.positionX = 0;
  this.positionY = 0;
  this.positionZ = 0;
  this.rotationX = 0;
  this.rotationY = 0;
  this.rotationZ = 0;
  this.boxColor = color;
  this.boxOpacity = 1;
}();

var gui = new dat.GUI();
var f1 = gui.addFolder('Scale');
f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
  mesh.scale.x = (controller.scaleX);
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  mesh.scale.y = (controller.scaleY);
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  mesh.scale.z = (controller.scaleZ);
});

var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -5, 5).onChange( function() {
  mesh.position.x = (controller.positionX);
});
f2.add(controller, 'positionY', -5, 5).onChange( function() {
  mesh.position.y = (controller.positionY);
});
f2.add(controller, 'positionZ', -5, 5).onChange( function() {
  mesh.position.z = (controller.positionZ);
});

var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  mesh.rotation.x = de2ra(controller.rotationX);
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  mesh.rotation.y = de2ra(controller.rotationY);
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  mesh.rotation.z = de2ra(controller.rotationZ);
});
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});

gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material.opacity = (controller.boxOpacity);
});
}

```
This code declare the controls controller and add variables (and initialize) to it that need to be controlled. Then the GUI is defined and the minimum and maximum values of the parameters are set.

### Homework ###
My homework is done by loading the obj model, pasting the material and adjusting the PointLight and AmbientLight.
```JavaScript
var textureLoader = new THREE.TextureLoader( manager );
var texture = textureLoader.load( 'textures/Sparkling.jpg' );
```
Adding texture.
```JavaScript
function onProgress( xhr ) {
        if ( xhr.lengthComputable ) {
          var percentComplete = xhr.loaded / xhr.total * 100;
          console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
        }
      }
      function onError() {}
      var loader = new THREE.OBJLoader( manager );
      loader.load( 'models/obj/male02/male02.obj', function ( obj ) {
        object = obj;
      }, onProgress, onError );

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );

      window.addEventListener( 'resize', onWindowResize, false );
    }

    ```

Loading obj model.

Final effect
![S7](https://raw.githubusercontent.com/Arissa0305/DAT505-GitHub/master/Image/S3.png)
