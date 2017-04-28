
var app = app || {};

app.step = 0;
app.cameraPosIndex = 0;

app.numParticles = 10000;
app.particleDistribution = 300;

app.randRange = function(min, max){
  var range = max - min;
  return min + (Math.random() * range);
};

app.lastMouseTime = Date.now();

app.controller = {
  rotationSpeed: 0.02,
  bouncingSpeed: 0.005
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
  // app.renderer.shadowMap.enabled = true;
  // app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  document.getElementById("output").appendChild( app.renderer.domElement );

  app.renderer.domElement.addEventListener('mousemove', function () {
    app.lastMouseTime = Date.now();
  }, true);


  // app.axes = new THREE.AxisHelper( 40 );
  // app.scene.add( app.axes );

  //
  // app.plane = app.createPlane();
  // app.scene.add( app.plane );

  app.cube = app.createCube();
  app.scene.add( app.cube );

  app.sphere = app.createSphere();
  app.scene.add( app.sphere );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.particleSystem = app.createParticleSystem();
  app.scene.add( app.particleSystem );

  app.ambient = new THREE.AmbientLight( 0x444444 );
  app.scene.add( app.ambient );

  app.gui = new dat.GUI();
  app.gui.add( app.controller, 'rotationSpeed', 0, 0.2);
  app.gui.add( app.controller, 'bouncingSpeed', 0, 0.05);

  app.spline = app.createSpline();


  app.stats = app.addStats();

//
// var smaterial = new THREE.LineBasicMaterial({
//     color: 0xff00f0,
// });
//
// var sgeometry = new THREE.Geometry();
// var splinePoints = app.spline.getPoints(1000);
//
// for(var i = 0; i < splinePoints.length; i++){
//     sgeometry.vertices.push(splinePoints[i]);
// }
//
// app.line = new THREE.Line(sgeometry, smaterial);
// app.scene.add(app.line);


  // app.renderer.render( app.scene, app.camera );

  app.animate();

};

app.animate = function () {

  app.stats.update();

  var timeDiff = Date.now() - app.lastMouseTime;

  if(timeDiff > 30000) {

    app.cameraPosIndex++;
    if( app.cameraPosIndex > 10000) {
      app.cameraPosIndex = 0;
    }

    var cameraPosition = app.spline.getPoint  ( app.cameraPosIndex / 3000 );
    var cameraRotation = app.spline.getTangent( app.cameraPosIndex / 3000 );

    app.camera.position.set( cameraPosition.x, cameraPosition.y, cameraPosition.z );
    app.camera.rotation.set( cameraRotation.x, cameraRotation.y, cameraRotation.z );

    app.camera.lookAt( app.spline.getPoint( (app.cameraPosIndex + 1) / 3000) );

  }


  app.step += app.controller.bouncingSpeed;

  // app.sphere.position.x = 20 + (10 * Math.cos( app.step ) );
  // app.sphere.position.y = 4  + (10 * Math.abs(Math.sin( app.step )) );

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.sphere.rotation.y += app.controller.rotationSpeed;

  app.animateParticles();

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

  cube.position.set( 0, 0, 0 );
  // cube.castShadow = true;

  return cube;
};

app.createSphere = function () {

  var sphereGeometry = new THREE.SphereGeometry( 4, 30, 30 );
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF,
    map: THREE.ImageUtils.loadTexture("/img/earth.jpg")

  });

  var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

  sphere.position.set( 20, 4, 2 );
  // sphere.castShadow = true;

  return sphere;
};

app.createSpotlight = function () {

  var spotlight = new THREE.SpotLight( 0xFFFFFF );

  spotlight.position.set( -20, 10, 10 );
  // spotlight.castShadow = true;
  // spotlight.shadow.mapSize.width = 2048;
  // spotlight.shadow.mapSize.height = 2048;

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


app.createParticleSystem = function () {

  var particles = new THREE.Geometry();

  for (var i = 0; i < app.numParticles; i++) {

    var x = app.randRange(-app.particleDistribution, app.particleDistribution);
    var y = app.randRange(-app.particleDistribution, app.particleDistribution);
    var z = app.randRange(-app.particleDistribution, app.particleDistribution);

    var particle = new THREE.Vector3( x, y, z );

    particle.vx = 0; //app.randRange( -0.5, 0.5 );
    particle.vy = 0; //app.randRange( -0.5, 0.5 );
    particle.vz = 0; //app.randRange( -0.5, 0.5 );

    particles.vertices.push( particle );

  } //for

  var particleMaterial = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 10,
    map: THREE.ImageUtils.loadTexture("/img/snowflake.png"),
    blending: THREE.AdditiveBlending,
    transparent: true,
    alphaTest: 0.5
  });

  var particleSytem = new THREE.Points( particles, particleMaterial );

  return particleSytem;
};


app.animateParticles = function () {

  var verts = app.particleSystem.geometry.vertices;

  for (var i = 0; i < verts.length; i++) {
    var vert = verts[i];
    //
    // if( vert.y < -200 ) {
    //   vert.y = 200;
    // }
    //
    // vert.y -= app.controller.rotationSpeed;

    var dist = Math.sqrt( vert.x*vert.x + vert.y*vert.y + vert.z*vert.z );

    var force = - app.controller.bouncingSpeed * (10.0 / (dist*dist));

    if(dist > 5) {
      vert.vx += force * vert.x;
      vert.vy += force * vert.y;
      vert.vz += force * vert.z;
    }

    vert.x += vert.vx;
    vert.y += vert.vy;
    vert.z += vert.vz;

  }

  app.particleSystem.geometry.verticesNeedUpdate = true;
};



app.addStats = function () {
  var stats = new Stats();
  stats.setMode(0);

  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';

  document.getElementById("stats").appendChild( stats.domElement );

  return stats;
};



app.onResize = function () {
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);
};

window.addEventListener("resize", app.onResize, false);

window.onload = app.init;
