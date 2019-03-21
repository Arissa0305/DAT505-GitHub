var renderer, scene, camera;
var cube=[];
var rot=0;
var controls;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(50, 60, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF,1);
  spotLight.position.set(100, 1000, 100);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a,1);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x < 10; x += 5 ) { // Start from -45 and sequentially add one every 5 pixels
  for (var z = -10; z < 10; z += 5 ) {
  for (var y = -10; y < 10; y += 5 ) {
    //console.log("x:" +x, "y:"+y,"z"+z);
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
    var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});


    if (x>= 0 && y >=0 && z >= 0 ){

      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x33FFFF});
    } else if  (x<= 0 && y >=0 && z >= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xccff99});
    } else if (x>= 0 && y <=0 && z >= 0){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xffff33});
    }  else if  (x>= 0 && y >=0 && z <= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff});
    } else if  (x>= 0 && y <=0 && z <= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xff33cc});
    } else if  (x<= 0 && y >=0 && z <= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    } else if  (x<= 0 && y <=0 && z >= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
    }else if  (x<= 0 && y <=0 && z <= 0 ){
      var boxMaterial = new THREE.MeshLambertMaterial({color: 0x9900ff});
    }
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.rotation.x = 360*Math.random();
        mesh.position.z = y;
        mesh.position.x = x;

        mesh.scale.y = 0.5;
        scene.add(mesh);
        cubes.push(mesh);

        //console.log(cubes);

   }
  }

  document.body.appendChild(renderer.domElement);
  }

  function drawFrame(){
    requestAnimationFrame(drawFrame);

    rot += 0.1;

    cubes.forEach(function(c,i){
      c.rotation.z = rot;
      //c.rotation.y = rot;
  renderer.render(scene, camera);
}

init();
drawFrame();
