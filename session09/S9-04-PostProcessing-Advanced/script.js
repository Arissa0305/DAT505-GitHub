
if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var composerScene, composer1, composer2, composer3, composer4;

var cameraOrtho, cameraPerspective, sceneModel, sceneBG, renderer, mesh, mesh2, directionalLight;

var width = window.innerWidth || 2;
var height = window.innerHeight || 2;

var halfWidth = width / 2;
var halfHeight = height / 2;

var materialColor, material2D, quadBG, quadMask, renderScene;

var delta = 0.01;

init();
animate();

function init() {
  container = document.getElementById( 'container' );
  cameraOrtho = new THREE.OrthographicCamera( -halfWidth, halfWidth, halfHeight, -halfHeight, -10000, 10000 );
  cameraOrtho.position.z = 100;
  cameraPerspective = new THREE.PerspectiveCamera( 50, width / height, 1, 10000 );
  cameraPerspective.position.z = 900;

  sceneModel = new THREE.Scene();
  sceneBG = new THREE.Scene();

  directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 0, -0.1, 1 ).normalize();
  sceneModel.add( directionalLight );

  var loader = new THREE.GLTFLoader();
  loader.load( "models/gltf/LeePerrySmith/LeePerrySmith.glb", function( gltf ) {
    createMesh( gltf.scene.children[ 0 ].geometry, sceneModel, 100 );
  } );

  var materialColor = new THREE.MeshBasicMaterial( {
    map:  new THREE.TextureLoader().load( "textures/cube/SwedishRoyalCastle/pz.jpg" ),
    depthTest: false
  } );

  quadBG = new THREE.Mesh( new THREE.PlaneBufferGeometry( 1, 1 ), materialColor );
  quadBG.position.z = -500;
  quadBG.scale.set( width, height, 1 );
  sceneBG.add( quadBG );

  var sceneMask = new THREE.Scene();

  quadMask = new THREE.Mesh( new THREE.PlaneBufferGeometry( 1, 1 ), new THREE.MeshBasicMaterial( { color: 0xffaa00 } )  );
  quadMask.position.z = -300;
  quadMask.scale.set( width / 2, height / 2, 1 );
  sceneMask.add( quadMask );

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( width, height );
  renderer.autoClear = false;

  renderer.gammaInput = true;
  renderer.gammaOutput = true;

  container.appendChild( renderer.domElement );

  stats = new Stats();
  //container.appendChild( stats.dom );

  var shaderBleach = THREE.BleachBypassShader;
  var shaderSepia = THREE.SepiaShader;
  var shaderVignette = THREE.VignetteShader;
  var shaderCopy = THREE.CopyShader;

  var effectBleach = new THREE.ShaderPass( shaderBleach );
  var effectSepia = new THREE.ShaderPass( shaderSepia );
  var effectVignette = new THREE.ShaderPass( shaderVignette );
  var effectCopy = new THREE.ShaderPass( shaderCopy );

  effectBleach.uniforms[ "opacity" ].value = 0.95;
  effectSepia.uniforms[ "amount" ].value = 0.9;
  effectVignette.uniforms[ "offset" ].value = 0.95;
  effectVignette.uniforms[ "darkness" ].value = 1.6;

  var effectBloom = new THREE.BloomPass( 0.5 );
  var effectFilm = new THREE.FilmPass( 0.35, 0.025, 648, false );
  var effectFilmBW = new THREE.FilmPass( 0.35, 0.5, 2048, true );
  var effectDotScreen = new THREE.DotScreenPass( new THREE.Vector2( 0, 0 ), 0.5, 0.8 );

  var effectHBlur = new THREE.ShaderPass( THREE.HorizontalBlurShader );
  var effectVBlur = new THREE.ShaderPass( THREE.VerticalBlurShader );
  effectHBlur.uniforms[ 'h' ].value = 2 / ( width / 2 );
  effectVBlur.uniforms[ 'v' ].value = 2 / ( height / 2 );

  var effectColorify1 = new THREE.ShaderPass( THREE.ColorifyShader );
  var effectColorify2 = new THREE.ShaderPass( THREE.ColorifyShader );
  effectColorify1.uniforms[ 'color' ] = new THREE.Uniform( new THREE.Color( 1, 0.8, 0.8 ) );
  effectColorify2.uniforms[ 'color' ] = new THREE.Uniform( new THREE.Color( 1, 0.75, 0.5 ) );

  var clearMask = new THREE.ClearMaskPass();
  var renderMask = new THREE.MaskPass( sceneModel, cameraPerspective );
  var renderMaskInverse = new THREE.MaskPass( sceneModel, cameraPerspective );

  renderMaskInverse.inverse = true;

  //effectFilm.renderToScreen = true;
  //effectFilmBW.renderToScreen = true;
  //effectDotScreen.renderToScreen = true;
  //effectBleach.renderToScreen = true;
  effectVignette.renderToScreen = true;
  //effectCopy.renderToScreen = true;

  var rtParameters = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBFormat,
    stencilBuffer: true
  };

  var rtWidth  = width / 2;
  var rtHeight = height / 2;

  var renderBackground = new THREE.RenderPass( sceneBG, cameraOrtho );
  var renderModel = new THREE.RenderPass( sceneModel, cameraPerspective );

  renderModel.clear = false;

  composerScene = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( rtWidth * 2, rtHeight * 2, rtParameters ) );

  composerScene.addPass( renderBackground );
  composerScene.addPass( renderModel );
  composerScene.addPass( renderMaskInverse );
  composerScene.addPass( effectHBlur );
  composerScene.addPass( effectVBlur );
  composerScene.addPass( clearMask );

  renderScene = new THREE.TexturePass( composerScene.renderTarget2.texture );

  composer1 = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( rtWidth, rtHeight, rtParameters ) );

  composer1.addPass( renderScene );
  //composer1.addPass( renderMask );
  composer1.addPass( effectFilmBW );
  //composer1.addPass( clearMask );
  composer1.addPass( effectVignette );

  composer2 = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( rtWidth, rtHeight, rtParameters ) );

  composer2.addPass( renderScene );
  composer2.addPass( effectDotScreen );
  composer2.addPass( renderMask );
  composer2.addPass( effectColorify1 );
  composer2.addPass( clearMask );
  composer2.addPass( renderMaskInverse );
  composer2.addPass( effectColorify2 );
  composer2.addPass( clearMask );
  composer2.addPass( effectVignette );

  composer3 = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( rtWidth, rtHeight, rtParameters ) );

  composer3.addPass( renderScene );
  //composer3.addPass( renderMask );
  composer3.addPass( effectSepia );
  composer3.addPass( effectFilm );
  //composer3.addPass( clearMask );
  composer3.addPass( effectVignette );

  composer4 = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( rtWidth, rtHeight, rtParameters ) );

  composer4.addPass( renderScene );
  //composer4.addPass( renderMask );
  composer4.addPass( effectBloom );
  composer4.addPass( effectFilm );
  composer4.addPass( effectBleach );
  //composer4.addPass( clearMask );
  composer4.addPass( effectVignette );

  //onWindowResize();

  renderScene.uniforms[ "tDiffuse" ].value = composerScene.renderTarget2.texture;

  window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize( event ) {
  halfWidth = window.innerWidth / 2;
  halfHeight = window.innerHeight / 2;

  cameraPerspective.aspect = window.innerWidth / window.innerHeight;
  cameraPerspective.updateProjectionMatrix();

  cameraOrtho.left = -halfWidth;
  cameraOrtho.right = halfWidth;
  cameraOrtho.top = halfHeight;
  cameraOrtho.bottom = -halfHeight;

  cameraOrtho.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

  composerScene.setSize( halfWidth * 2, halfHeight * 2 );
  composer1.setSize( halfWidth, halfHeight );
  composer2.setSize( halfWidth, halfHeight );
  composer3.setSize( halfWidth, halfHeight );
  composer4.setSize( halfWidth, halfHeight );

  renderScene.uniforms[ "tDiffuse" ].value = composerScene.renderTarget2.texture;

  quadBG.scale.set( window.innerWidth, window.innerHeight, 1 );
  quadMask.scale.set( window.innerWidth / 2, window.innerHeight / 2, 1 );
}

function getText( id ) {
  return document.getElementById( id ).textContent;
}

function createMesh( geometry, scene, scale ) {
  var mat2 = new THREE.MeshPhongMaterial( {
    color: 0x999999,
    specular: 0x080808,
    shininess: 20,
    map: new THREE.TextureLoader().load( "models/gltf/LeePerrySmith/Map-COL.jpg" ),
    normalMap: new THREE.TextureLoader().load("models/gltf/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV.jpg" ),
    normalScale: new THREE.Vector2( 0.75, 0.75 )
  } );

  mesh = new THREE.Mesh( geometry, mat2 );
  mesh.position.set( 0, -50, 0 );
  mesh.scale.set( scale, scale, scale );
  scene.add( mesh );

  mesh2 = new THREE.Mesh( geometry, mat2 );
  mesh2.position.set( 0, -50, 0 );
  mesh2.scale.set( scale, scale, scale );

  scene.add( mesh2 );
}

function animate() {
  requestAnimationFrame( animate );
  stats.begin();
  render();
  stats.end();
}

function render() {
  var time = Date.now() * 0.0004;

  if ( mesh ) {
    mesh.rotation.x = -time * 0.01;
    mesh.rotation.y = -time;
  }
  if ( mesh2 ){
    mesh.rotation.x = time * 0.5;
    mesh2.rotation.y = time * 0.2;
  }

  composerScene.render( delta );
  renderer.setViewport( 0, 0, halfWidth*2, halfHeight*2 );
  composer4.render( delta );
}