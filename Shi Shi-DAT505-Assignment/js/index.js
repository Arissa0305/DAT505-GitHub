if ( WEBGL.isWebGLAvailable() === false ) {
				document.body.appendChild( WEBGL.getWebGLErrorMessage() );
		}
var scene, camera, renderer, controls, mouseDown,  world, width, height;
var ground, dotSystem;
var stats;
var clock = new THREE.Clock();
var mixer;

var meshStar = [];
var material;
var mouse = new THREE.Vector2(), INTERSECTED;
var raycaster;

// set up the scene, the camera and the renderer
 function init() {
	// Get the width and the height of the screen
  width = window.innerWidth,
  height = window.innerHeight;
   // Create the scene
  scene = new THREE.Scene();
	 // Add a fog effect to the scene
  scene.fog = new THREE.Fog(0x6a96ca, 100, 1000);
	 // Create the camera
  camera = new THREE.PerspectiveCamera(60, width / height, 0.3, 1000);
  camera.lookAt(scene.position);
  camera.position.z = 550;
	 // Create the renderer
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

 drawGround();
 addLights();
 drawStarSystem();
 drawTree();
 drawflower();
 drawRabbit();
 drawMoon();
 drawCloud();
 // Add the DOM element of the renderer to the
	// container we created in the HTML
 world = document.querySelector('.world');
 world.appendChild(renderer.domElement);

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('touchstart', onTouchStart);
document.addEventListener('touchend', onTouchEnd);
window.addEventListener('resize', onResize);
// stats
	stats = new Stats();
	world.appendChild( stats.dom );

}
//add the lights
function addLights() {
  const ambientLight = new THREE.AmbientLight(0xfff0d9, 0.8);
  scene.add(ambientLight);

  const directLight = new THREE.DirectionalLight(0xc3cddf, 0.5);
  directLight.castShadow = true;
  directLight.position.set(200, 200, 200);
  scene.add(directLight);

  const pointLight = new THREE.PointLight(0xFF007B, 0.5, 0);
  pointLight.castShadow = true;
  pointLight.position.set(-50, 100, 100);
  scene.add(pointLight);
}
//add the grounds
function drawGround() {
  const geometry = new THREE.TetrahedronGeometry(160, 2);
  const material = new THREE.MeshPhongMaterial({
    color: 0xb293a0,
    shading: THREE.FlatShading,
  });
  const geometry1 = new THREE.TetrahedronGeometry(150, 2);
  const material1 = new THREE.MeshPhongMaterial({
    color: 0xb293a0,
    shading: THREE.FlatShading,
  });
  const geometry2 = new THREE.TetrahedronGeometry(160, 2);
  const material2 = new THREE.MeshPhongMaterial({
    color: 0xb293a0,
    shading: THREE.FlatShading,
  });
    ground = new THREE.Mesh(geometry, material);
    ground1 = new THREE.Mesh(geometry1, material1);
    ground2 = new THREE.Mesh(geometry2, material2);

    ground.scale.set(3, 1, 2);
    ground.position.y = -305;
    ground.castShadow = true;
    ground.receiveShadow = true;

    ground1.scale.set(2, 1.3, 1.5);
    ground1.position.set(-450,-280,-200);
    ground1.castShadow = true;
    ground1.receiveShadow = true;


    ground2.scale.set(3, 2, 2);
		ground2.position.set(400,-280,-300);
    ground2.castShadow = true;
    ground2.receiveShadow = true;

    scene.add(ground);
    scene.add(ground1);
    scene.add(ground2);

var FIXEDSCALE = 600;
var pts = [], numPts = 5;

for (var i = 0; i < numPts * 2; i++) {

	var l = i % 2 == 1 ? 10 : 20;

	var a = i / numPts * Math.PI;

	pts.push(new THREE.Vector2(Math.cos(a) * l, Math.sin(a) * l));

}

var shape = new THREE.Shape(pts);

var extrudeSettings = {
	depth: 5,
	steps: 1,
	bevelEnabled: true,
	bevelThickness: 2,
	bevelSize: 4,
	bevelSegments: 1
};
var geometryStar = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
for (let i = 0; i < 20; i++) {
	meshStar[i] = new THREE.Mesh(geometryStar, material);
	meshStar[i].position.set(50, 100, 50);
	meshStar[i].position.set(Math.random() * (Math.random > .5 ? 1 : -1) * FIXEDSCALE, Math.random() * FIXEDSCALE, Math.random() * (Math.random > .5 ? 1 : -1) * FIXEDSCALE);
	scene.add(meshStar[i]);
}

  raycaster = new THREE.Raycaster();

  }
//add the trees
function drawTree () {

  	this.mesh = new THREE.Object3D();

  	var matTreeLeaves = new THREE.MeshPhongMaterial( { color:0x458248, shading:THREE.FlatShading});

  	var geonTreeBase = new THREE.BoxGeometry( 15,100,15 );
  	var matTreeBase = new THREE.MeshBasicMaterial( { color:0x59332e});
  	var treeBase = new THREE.Mesh(geonTreeBase,matTreeBase);
  	treeBase.castShadow = true;
  	treeBase.receiveShadow = true;
    treeBase.position.y = -130;
    treeBase.position.x= -130
  	this.mesh.add(treeBase);

  	var geomTreeLeaves1 = new THREE.CylinderGeometry(2, 15*3, 15*3, 6 );
  	var treeLeaves1 = new THREE.Mesh(geomTreeLeaves1,matTreeLeaves);
  	treeLeaves1.castShadow = true;
  	treeLeaves1.receiveShadow = true;
  	treeLeaves1.position.y = -100
    treeLeaves1.position.x= -130
  	this.mesh.add(treeLeaves1);

  	var geomTreeLeaves2 = new THREE.CylinderGeometry( 2, 12*3, 12*3, 6 );
  	var treeLeaves2 = new THREE.Mesh(geomTreeLeaves2,matTreeLeaves);
  	treeLeaves2.castShadow = true;
  	treeLeaves2.position.y = -80;
    treeLeaves2.position.x= -130
  	treeLeaves2.receiveShadow = true;
  	this.mesh.add(treeLeaves2);

  	var geomTreeLeaves3 = new THREE.CylinderGeometry( 2, 9*3,9*3, 6);
  	var treeLeaves3 = new THREE.Mesh(geomTreeLeaves3,matTreeLeaves);
  	treeLeaves3.castShadow = true;
  	treeLeaves3.position.y = -65;
    treeLeaves3.position.x= -130
  	treeLeaves3.receiveShadow = true;
  	this.mesh.add(treeLeaves3);
  scene.add(treeBase);
  scene.add(treeLeaves1);
  scene.add(treeLeaves2);
  scene.add(treeLeaves3);

 this.mesh = new THREE.Object3D();
  var matTreeLeavesA = new THREE.MeshPhongMaterial( { color:0x458248, shading:THREE.FlatShading});

  var geonTreeBaseA = new THREE.BoxGeometry( 15,100,15 );
  var matTreeBaseA = new THREE.MeshBasicMaterial( { color:0x59332e});
  var treeBaseA = new THREE.Mesh(geonTreeBaseA,matTreeBaseA);
  treeBaseA.castShadow = true;
  treeBaseA.receiveShadow = true;
  treeBaseA.position.y = -130;
  treeBaseA.position.x= -200
  this.mesh.add(treeBaseA);

  var geomTreeLeaves1A = new THREE.CylinderGeometry(2, 15*3, 15*4, 4  );
  var treeLeaves1A = new THREE.Mesh(geomTreeLeaves1A,matTreeLeavesA);
  treeLeaves1A.castShadow = true;
  treeLeaves1A.receiveShadow = true;
  treeLeaves1A.position.y = -100
  treeLeaves1A.position.x= -200
  this.mesh.add(treeLeaves1A);

  var geomTreeLeaves2A = new THREE.CylinderGeometry(2, 12*3, 12*4, 4 );
  var treeLeaves2A = new THREE.Mesh(geomTreeLeaves2A,matTreeLeavesA);
  treeLeaves2A.castShadow = true;
  treeLeaves2A.position.y = -80;
  treeLeaves2A.position.x= -200
  treeLeaves2A.receiveShadow = true;
  this.mesh.add(treeLeaves2A);

  var geomTreeLeaves3A = new THREE.CylinderGeometry( 2, 9*3,9*4, 4);
  var treeLeaves3A = new THREE.Mesh(geomTreeLeaves3A,matTreeLeavesA);
  treeLeaves3A.castShadow = true;
  treeLeaves3A.position.y = -65;
  treeLeaves3A.position.x= -200
  treeLeaves3A.receiveShadow = true;
  this.mesh.add(treeLeaves3A);
scene.add(treeBaseA);
scene.add(treeLeaves1A);
scene.add(treeLeaves2A);
scene.add(treeLeaves3A);
  }
//add the flowers
function drawflower () {
  	this.mesh = new THREE.Object3D();

  	var geomStem = new THREE.BoxGeometry( 5,50,5,1,1,1 );
  	var matStem = new THREE.MeshPhongMaterial( { color:0x458248, shading:THREE.FlatShading});
  	var stem = new THREE.Mesh(geomStem,matStem);
  	stem.castShadow = false;
  	stem.receiveShadow = true;
  	this.mesh.add(stem);

  	var geomPetalCore = new THREE.BoxGeometry(10,10,10,1,1,1);
  	var matPetalCore = new THREE.MeshPhongMaterial({color:0xffc29, shading:THREE.FlatShading});
  	petalCore = new THREE.Mesh(geomPetalCore, matPetalCore);
  	petalCore.castShadow = false;
  	petalCore.receiveShadow = true;

  	var geomPetal = new THREE.BoxGeometry( 15,20,5,1,1,1 );
  	var matPetal = new THREE.MeshBasicMaterial( {color:0xf25346});
    	geomPetal.vertices[5].y-=4;
    	geomPetal.vertices[4].y-=4;
    	geomPetal.vertices[7].y+=4;
    	geomPetal.vertices[6].y+=4;
    	geomPetal.translate(12.5,0,3);
      var petals = [];
  		for(var i=0; i<4; i++){

  			petals[i]=new THREE.Mesh(geomPetal,matPetal);
  			petals[i].rotation.z = i*Math.PI/2;
  			petals[i].castShadow = true;
  			petals[i].receiveShadow = true;
  		}

  	  petalCore.add(petals[0],petals[1],petals[2],petals[3]);
    	petalCore.position.y = -100;
			stem.position.y = -120;
    	petalCore.position.z = 3;
    	this.mesh.add(petalCore);
		  petalCore.add(stem);
      scene.add(petalCore,stem);

		    var petalCore1 = petalCore.clone();
				var stem1 = stem.clone();
				petalCore1.position.set(-250,-150,50);
	    	stem1.position.set(-250,-180,50);
       petalCore1.rotation.z=-10;
			 petalCore1.rotation.y=0.7;
				scene.add(petalCore1,stem1);
}
//add the clouds
function drawCloud(){
this.mesh = new THREE.Object3D();
// Cube geometry and material
var geom = new THREE.DodecahedronGeometry(20,0);
var mat = new THREE.MeshPhongMaterial({	color:0xffffff,});
// Random multiple replication of geometry
var nBlocs = 3+Math.floor(Math.random()*5);

for (var i=0; i<nBlocs; i++ ){
//Clone mesh geometry
	var cloud = new THREE.Mesh(geom, mat);
//Randomly position each cube
		cloud.position.x = Math.random()*100+200;
		cloud.position.y = Math.random()*50+200;
		cloud.position.z = Math.random()*10-100;
		cloud.rotation.z = Math.random()*Math.PI*2;
		cloud.rotation.y = Math.random()*Math.PI*2;

		//Randomly scale the cubes
		var s = .1 + Math.random()*.9;
		cloud.scale.set(s,s,s);
		cloud.castShadow = true;
		cloud.receiveShadow = true;
		this.mesh.add(cloud);
		scene.add(cloud);
}
 var cloud1 =cloud.clone();
 cloud.position.x = Math.random()*100+300;
 cloud.position.y = Math.random()*50+150;
 cloud.position.z = Math.random()*10;
	cloud1.rotation.z = Math.random()*Math.PI*2;
	cloud1.rotation.y = Math.random()*Math.PI*2;
	scene.add(cloud1)


}
//load the rabbit model
function drawRabbit() {
  var loader = new THREE.FBXLoader();
				loader.load( 'models/rabbit3.FBX', function ( object ) {
					mixer = new THREE.AnimationMixer( object );
					var action = mixer.clipAction( object.animations[ 0 ] );
					action.play();
					object.traverse( function ( child ) {
						if ( child.isMesh ) {
							child.castShadow = true;
							child.receiveShadow = true;
							object.position.y = -180;
							object.position.x = -100;
							object.position.z = 100;
							object.rotation.y = 0.2;
						}
          } );
						scene.add( object );
      				} );
            }
//add the moon
function drawMoon() {
var geometry = new THREE.SphereGeometry( 45, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var moon = new THREE.Mesh( geometry, material );
moon.position.x = 300;
moon.position.y = 250;
moon.castShadow = true;
moon.receiveShadow = true;
scene.add( moon );
}
//add the starsystem
function drawStarSystem() {
    starSystem = new THREE.Group();
    scene.add(starSystem);

    const system1 = new StarSystem({
      intensity: 3000,
      color: 0xE1FEA4,
      xSpread: 800,
      ySpread: 800,
      zSpread: 800,
    });
    starSystem.add(system1.group);

    const system2 = new StarSystem({
      intensity: 100,
      color: 0xFF007B,
      xSpread: 300,
      ySpread: 500,
      zSpread: 400,
      size: 13,
    });
    system2.group.position.set(-100, -80, 0);
    starSystem.add(system2.group);
  }
//Define screen size
function onResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
//Set the mouse properties
function onMouseDown(event) {
  mouseDown = true;
	//Find intersections
event.preventDefault();
mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

raycaster.setFromCamera(mouse, camera);

var intersects = raycaster.intersectObjects(meshStar, true);
if(intersects.length >= 1){
		$(".ui-dialog").show();
		console.log(1);
}
}
function onTouchStart(event) {
  if (event.target.classList[0] === 'btn-music') return;
  event.preventDefault();
  mouseDown = true;
  if (speed !== 0.1) speed = 0.1;
}
function onMouseUp(event) {
  mouseDown = false;
}
function onTouchEnd(event) {
  if (event.target.classList[0] === 'btn-music') return;
  event.preventDefault();
  mouseDown = false;
}
function rad(degrees) {
  return degrees * (Math.PI / 180);
}
//add the animates
function animate() {
  requestAnimationFrame(animate);
  var delta = clock.getDelta();
	if ( mixer ) mixer.update( delta );
	render();
  stats.update();
}
//add the render
function render() {
  const timer = 0.0001 * Date.now();

	  meshStar[0].rotation.y += 0.05;
	  meshStar[1].rotation.y += 0.09;
	  meshStar[2].rotation.y += 0.01;
	  meshStar[3].rotation.y += 0.01;
	  meshStar[4].rotation.y += 0.04;
	  meshStar[5].rotation.y += 0.01;
	  meshStar[6].rotation.y += 0.04;
	  meshStar[7].rotation.y += 0.01;
	  meshStar[8].rotation.y += 0.01;
	  meshStar[9].rotation.y += 0.01;
		meshStar[10].rotation.y += 0.05;
		meshStar[11].rotation.y += 0.05;
		meshStar[12].rotation.y += 0.01;
		meshStar[13].rotation.y += 0.01;
		meshStar[14].rotation.y += 0.05;
		meshStar[15].rotation.y += 0.01;
		meshStar[16].rotation.y += 0.04;
		meshStar[17].rotation.y += 0.01;
		meshStar[18].rotation.y += 0.01;
		meshStar[19].rotation.y += 0.01;


	  meshStar[0].rotation.x += 0.03;
	  meshStar[1].rotation.x += 0.04;
	  meshStar[2].rotation.x += 0.01;
	  meshStar[3].rotation.x += 0.01;
	  meshStar[4].rotation.x += 0.01;
	  meshStar[5].rotation.x += 0.01;
	  meshStar[6].rotation.x += 0.01;
	  meshStar[7].rotation.x += 0.01;
	  meshStar[8].rotation.x += 0.05;
	  meshStar[9].rotation.x += 0.01;
		meshStar[10].rotation.x += 0.05;
		meshStar[11].rotation.x += 0.05;
		meshStar[12].rotation.x += 0.01;
		meshStar[13].rotation.x += 0.01;
		meshStar[14].rotation.x += 0.05;
		meshStar[15].rotation.x += 0.01;
		meshStar[16].rotation.x += 0.04;
		meshStar[17].rotation.x += 0.01;
		meshStar[18].rotation.x += 0.01;
		meshStar[19].rotation.x += 0.01;


	  meshStar[0].rotation.z += 0.01;
	  meshStar[1].rotation.z += 0.01;
	  // meshStar[2].rotation.z += 0.1;
	  // meshStar[3].rotation.z += 0.1;
	  // meshStar[4].rotation.z += 0.1;
	  // meshStar[5].rotation.z += 0.1;
	  // meshStar[6].rotation.z += 0.1;
	  // meshStar[7].rotation.z += 0.1;
	  // meshStar[8].rotation.z += 0.1;
	  // meshStar[9].rotation.z += 0.1;
  starSystem.rotation.x += 0.0003;
  starSystem.rotation.y -= 0.0001;


  renderer.render(scene, camera);
}
//Set the material color and shape of the starsystem
class StarSystem {
  constructor({
    intensity = 5000,
    color = 0xffffff,
    xSpread = 1000,
    ySpread = 1000,
    zSpread = 1000,
    size = 6,
  }) {
    this.group = new THREE.Group();

    this.intensity = intensity;
    this.color = color;
    this.xSpread = xSpread;
    this.ySpread = ySpread;
    this.zSpread = zSpread;
    this.size = size;

    this.draw();
  }
  draw() {
    const geometry = new THREE.Geometry();
    const colors = [];

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = false;
    loader.load("texture/star1.svg", (texture) => {
      for (var i = 0; i < this.intensity; i += 1) {
        const star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(this.xSpread);
        star.y = THREE.Math.randFloatSpread(this.ySpread);
        star.z = THREE.Math.randFloatSpread(this.zSpread);

        geometry.vertices.push(star);

        colors[i] = new THREE.Color(this.color);
      }
      geometry.colors = colors;

      const material = new THREE.PointsMaterial({
        size: this.size,
        map: texture,
        vertexColors: THREE.VertexColors,
        alphaTest: 0.5,
        transparent: true,
      });

      const particles = new THREE.Points(geometry, material);
      this.group.add(particles);
    });
  }
}

// add music with the buttons
const worldMusic = document.querySelector('.music');
const btnMusic = document.querySelector('.btn-music');

let playMusic = false;

btnMusic.addEventListener('click', () => {
  playMusic = !playMusic;
  btnMusic.classList.toggle('music-off');
  playMusic ? worldMusic.play() : worldMusic.pause();
});

worldMusic.volume = 0.3;
worldMusic.loop = true;


init();
animate();
