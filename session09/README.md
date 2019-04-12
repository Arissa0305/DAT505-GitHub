### Session09 ###
In this session we studied how to change the audio.
### Exercise ###
When the mouse is placed on the model, it turns red and triggers sound effects.
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```
The aim of this code is to link libraries of three.js.
```Javascript
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'audio/alien.wav', function( buffer ) {
  sound.setBuffer( buffer );
  sound.setLoop( false );
  sound.setVolume( 0.5 );
  sound.play();
});
```
Loading the WAV music file.
