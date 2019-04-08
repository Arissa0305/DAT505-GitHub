var renderer, scene, camera;
var controls;
var cube = [];
var rot = 0;

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 0, 45);
  camera.lookAt(scene.position);


  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(500, 1000, 400);
  scene.add(spotLight);

  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;

  spotLight.shadow.camera.near = 500;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 30;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);

   for (var x = -10; x <= 10; x += 5) {
   for (var z = -10; z <= 10; z += 5) {
   for (var y = -10; y <= 10; y += 5) {

    var boxGeometry1 = new THREE.BoxGeometry(3, 3, 3);

    if (x >= 0 && z >= 0 && y >= 0){
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0x76EEC6});
    } else if (x <= 0 && z >= 0 && y >= 0) {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0xFF6347});
    }else if (x <= 0 && z <= 0 && y >= 0) {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0xFFFF00});
    }else if (x <= 0 && z >= 0 && y <= 0) {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0x9370DB});
    }else if (x >= 0 && z >= 0 && y <= 0) {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0x00FFFF});
    }else if (x >= 0 && z <= 0 && y <= 0) {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0xFFC125});
    }else if (x >= 0 && z <= 0 && y >= 0) {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color:0xDB7093});
    }else {
      var boxMaterial1 = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    }



    var mesh1 = new THREE.Mesh(boxGeometry1, boxMaterial1);

    mesh1.rotation.x = x;
    mesh1.position.z = z;
    mesh1.position.y = y;
    mesh1.position.x = x;


    scene.add(mesh1);
    cube.push(mesh1);
    console.log(mesh1);

      }
    }
    document.body.appendChild(renderer.domElement);
    }

    function drawFrame(){
  requestAnimationFrame(drawFrame);
 //物体旋转
  rot += 0.01;

  cube.forEach(function(c,i){
  c.rotation.x = rot;
  c.rotation.y = rot;
  });

  renderer.render(scene, camera);
}

init();
drawFrame();
