
var app = app || {};

app.step = 0;
app.cameraPosIndex = 0;

app.controller = {
  rotationSpeed: 0.02,
  bouncingSpeed: 0.02
};

app.init = function () {

  console.log('hello w0rld');

  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // 4 params
  // 1. field of view
  // 2. screen ratio
  // near field
  // far field
  app.camera = new THREE.PerspectiveCamera( 60, app.width/app.height, 0.1, 1000 );

  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();

  app.renderer.setSize( app.width, app.height );
  app.renderer.setClearColor( 0x000000 ); // bg color
  app.renderer.shadowMap.enabled = true;
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  document.getElementById("output").appendChild( app.renderer.domElement );

  app.axes = new THREE.AxisHelper( 40 );
  app.scene.add( app.axes );

  app.plane = app.createPlane();
  app.scene.add( app.plane );

  app.cube = app.createCube();
  app.scene.add( app.cube );

  app.sphere = app.createSphere();
  app.scene.add( app.sphere );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.gui = new dat.GUI();
  app.gui.add( app.controller, 'rotationSpeed', 0, 0.2);
  app.gui.add( app.controller, 'bouncingSpeed', 0, 2.0);

  app.spline = app.createSpline();

  // app.renderer.render( app.scene, app.camera );

  app.animate();

};

app.animate = function () {
  //
  //
  // app.cameraPosIndex++;
  // if( app.cameraPosIndex > 10000) {
  //   app.cameraPosIndex = 0;
  // }
  //
  // var cameraPosition = app.spline.getPoint  ( appendChild.cameraPosIndex / 3000 );
  // var cameraRotation = app.spline.getTangent( app.cameraPosIndex / 3000 );
  //
  // app.camera.position.set( cameraPosition.x, cameraPosition.y, cameraPosition.z );
  // app.camera.rotation.set( cameraRotation.x, cameraRotation.y, cameraRotation.z );
  //
  // app.camera.lookAt( app.spline.getPoint( (app.cameraPosIndex + 1) / 3000) );


  app.step += app.controller.bouncingSpeed;

  app.sphere.position.x = 20 + (10 * Math.cos( app.step ) );
  app.sphere.position.y = 4  + (10 * Math.abs(Math.sin( app.step )) );

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.renderer.render( app.scene, app.camera );

  requestAnimationFrame( app.animate );

};


app.createPlane = function () {

  var planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC // kinda grey
  });

  var plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.rotation.x = -0.5 * Math.PI; // because of math
  plane.receiveShadow = true;

  return plane;
};

app.createCube = function () {

  var cubeGeometry = new THREE.BoxGeometry( 4, 4, 4 );
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00
  });

  var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

  cube.position.set( -4, 3, 0 );
  cube.castShadow = true;

  return cube;
};

app.createSphere = function () {

  var sphereGeometry = new THREE.SphereGeometry( 4, 30, 30 );
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039BE5
  });

  var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

  sphere.position.set( 20, 4, 2 );
  sphere.castShadow = true;

  return sphere;
};

app.createSpotlight = function () {

  var spotlight = new THREE.SpotLight( 0xFFFFFF );

  spotlight.position.set( -10, 60, 10 );
  spotlight.castShadow = true;
  spotlight.shadow.mapSize.width = 2048;
  spotlight.shadow.mapSize.height = 2048;

  return spotlight;
};

app.createSpline = function () {

  var randomPoints = [];
  for (var i = 0; i < 10; i++) {
    randomPoints.push(new THREE.Vector3(
      Math.random() * 100 - 50,
      Math.random() * 100 - 50,
      Math.random() * 100 - 50
    ));
  }

  return new THREE.CatmullRomCurve3( randomPoints );
};


window.onload = app.init;
