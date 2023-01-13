---
layout: default
title: First Print
parent: The Build
nav_order: 7
---
<script src="scripts/three.min.js"></script>
<script src="scripts/STLLoader.js"></script>
<script src="scripts/OrbitControls.js"></script>

# First Print

Download the “voron\_design\_cube\_v7.stl” from the [Voron Github page](https://github.com/VoronDesign/Voron-2/tree/Voron2.4/STLs/Test_Prints), and open the file in your chosen slicer. 

<div id="model" style="width: 500px; height: 500px"> </div>

<script>
function STLViewer(model, elementID) {
    var elem = document.getElementById(elementID)
    var camera = new THREE.PerspectiveCamera(70, 
    elem.clientWidth/elem.clientHeight, 1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(elem.clientWidth, elem.clientHeight);
    elem.appendChild(renderer.domElement);
    window.addEventListener('resize', function () {
    renderer.setSize(elem.clientWidth, elem.clientHeight);
    camera.aspect = elem.clientWidth/elem.clientHeight;
    camera.updateProjectionMatrix();
    }, false);
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.rotateSpeed = 0.05;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = .75;
    var scene = new THREE.Scene();
    scene.add(new THREE.HemisphereLight(0xffffff, 1.5));
    (new THREE.STLLoader()).load(model, function (geometry) {
    var material = new THREE.MeshPhongMaterial({ 
        color: 0xff5533, 
        specular: 100, 
        shininess: 100 });
    var mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    var middle = new THREE.Vector3();
    geometry.computeBoundingBox();
    geometry.boundingBox.getCenter(middle);
    mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation( 
                                -middle.x, -middle.y, -middle.z ) );
    var largestDimension = Math.max(geometry.boundingBox.max.x,
                            geometry.boundingBox.max.y, 
                            geometry.boundingBox.max.z)
    amera.position.z = largestDimension * 1.5;
    var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    };                          
        animate();
    });
    
 </script>

 <script type="text/javascript">
    window.onload = function() {
    STLViewer("https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/STLs/Test_Prints/Voron_Design_Cube_v7.stl", "model")
    }
</script>

Use the default slicer settings, but make sure the hotend temperature and bed temperature are correct for the filament you are using. A good starting point is 240C hotend temperature, 100C heated bed temperature, and 92% flow for ABS.

Slice the file and save the .gcode file to your desktop (if you haven’t set up the Octoprint Plugin for your slicer, Mainsail and Fluidd do not need plugins). Navigate to Octoprint, Mainsail, or Fluidd in your web browser, and upload the file. Press “Print” and closely watch the beginning of the print. If your nozzle is too far or close to the bed, on your printer display press the knob, navigate to “Tune”, and adjust the Z offset distance (+ is further from the bed, - is closer).

Once you are printing (with your printer fully assembled), take a quick video, upload it to the Voron subreddit and eat a well deserved bowl of cereal!

![](./images/voron_cereal.png)

# Next Steps

Done with your cereal?  The printer's not not done yet!  There is still lots of adjusting to do so the printer can turn out high speed perfection.

Head over to the [Tuning Guides](../../tuning/index.md) and dial it in.

