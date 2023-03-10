---
layout: default
title: First Print
parent: The Build
nav_order: 7
---


<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r120/three.min.js"></script>
<script src="https://cdn.rawgit.com/mrdoob/three.js/r120/examples/js/loaders/STLLoader.js"></script>
<script src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@r120/examples/js/controls/OrbitControls.js"></script>
<script src="viewer.js"></script>

# First Print

Download the “voron\_design\_cube\_v7.stl” and open the file in your chosen slicer. 

<div id="model" style="width: 500px; height: 500px"> </div>

<script type="text/javascript">
        window.onload = function() {
        STLViewer("https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/STLs/Test_Prints/Voron_Design_Cube_v7.stl", "model")
        }
</script>
[Download Voron Cube](https://raw.githubusercontent.com/VoronDesign/Voron-2/Voron2.4/STLs/Test_Prints/Voron_Design_Cube_v7.stl)

Use the default slicer settings, but make sure the hotend temperature and bed temperature are correct for the filament you are using. A good starting point is 240C hotend temperature, 100C heated bed temperature, and 92% flow for ABS.

Slice the file and save the .gcode file to your desktop (if you haven’t set up the Octoprint Plugin for your slicer, Mainsail and Fluidd do not need plugins). Navigate to Octoprint, Mainsail, or Fluidd in your web browser, and upload the file. Press “Print” and closely watch the beginning of the print. If your nozzle is too far or close to the bed, on your printer display press the knob, navigate to “Tune”, and adjust the Z offset distance (+ is further from the bed, - is closer).

Once you are printing (with your printer fully assembled), take a quick video, upload it to the Voron subreddit and eat a well deserved bowl of cereal!

![](./images/voron_cereal.png)

# Next Steps

Done with your cereal?  The printer's not not done yet!  There is still lots of adjusting to do so the printer can turn out high speed perfection.

Head over to the [Tuning Guides](../../tuning/index.md) and dial it in.

