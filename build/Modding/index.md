---
layout: default
title: Modding
has_children: false
nav_order: 8
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/three.min.js"></script>
<script src="https://cdn.rawgit.com/mrdoob/three.js/r120/examples/js/loaders/STLLoader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r120/examples/js/controls/OrbitControls.js"></script>
<script src="viewer.js"></script>


<div class="album py-5 bg-transparent">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <div id="model" style="width: 250px; height: 300px"> </div>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <div id="model2" style="width: 250px; height: 300px"> </div>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
             
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col modals" width="250px">
          <div class="card shadow-sm">
            <div id="model3" style="width: 250px; height: 300px"> </div>
				
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Download</button>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
</div>


<script type="text/javascript">
	window.onload = function() {
    STLViewer("https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/STLs/Test_Prints/Voron_Design_Cube_v7.stl", "model")
	STLViewer("https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/STLs/Test_Prints/Voron_Design_Cube_v7.stl", "model2")
	STLViewer("https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/STLs/Test_Prints/Voron_Design_Cube_v7.stl", "model3")
}
</script>
