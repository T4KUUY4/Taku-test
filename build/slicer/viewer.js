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
        controls.rotateSpeed = 0.4;
        controls.dampingFactor = 0.1;
        controls.enableZoom = false;
        controls.autoRotate = false;
        controls.autoRotateSpeed = 0;
        

        var scene = new THREE.Scene();
        scene.add(new THREE.HemisphereLight(0xffffff, 1.5));

        (new THREE.STLLoader()).load(model, function (geometry) {
            var material = new THREE.MeshPhysicalMaterial({ 
                color: 0xbd0f0f, 
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
                 mesh.quaternion.setFromEuler( new THREE.Euler( - Math.PI / 2, 0, 135 ) );                         
                    camera.position.z = largestDimension * 4;
                                                      

                    var animate = function () {
                        requestAnimationFrame(animate);
                        controls.update();
                        renderer.render(scene, camera);
                        
                    }; 


                    animate();
                });
            }