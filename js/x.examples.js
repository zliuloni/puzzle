// load all examples

function loadVol() {
  
}

//CS 130 LONI TEAM 2 Mengyi Zhu. This function will be called if the user select the brain puzzle 
function loadShapeLevel ()
{
    switchToLevelSelect();
	jQuery('#submit').click(function() {
		if(jQuery('#easy').attr('checked') && !jQuery('#showAnswer').attr('checked'))
			loadShapeSimple(true);
		else if (jQuery('#hard').attr('checked') && !jQuery('#showAnswer').attr('checked'))
			loadShape(true);
		else if (jQuery('#easy').attr('checked') && jQuery('#showAnswer').attr('checked'))
			loadShapeSimple(false);
		else if (jQuery('#hard').attr('checked') && jQuery('#showAnswer').attr('checked'))
			loadShape(false);
		else if (jQuery('#custom').attr('checked') && !jQuery('#showAnswer').attr('checked'))
			loadCustom(true);	
		else if (jQuery('#custom').attr('checked') && jQuery('#showAnswer').attr('checked'))
			loadCustom(false);	
	});

}
function loadCustom(isRandom) {

  // now switch to the viewer
  switchToViewer();
  
  // init renderers
  initializeRenderers();
  createData();
  
   mesh_ids = [];
  //LONI TEAM CAUTION!! WE Have added code to store the visual hints.
  var jtext = document.getElementById('paths').value;
  if(jtext == null || jtext == "")
	return;
	
  var paths= jtext.split("\n");
  number_of_piece = paths.length;
  var sign = [1,1,1];
  
  // now the fun part, yahoooo
  for (i=0; i<number_of_piece; i++) {
	if(paths[i].substring(0,4) =="http" ){
	  mesh = new X.mesh();
	  mesh.file = paths[i];
	  mesh.color = [Math.random(),Math.random(),Math.random()];
	  mesh.caption = '';
	  _data.mesh.file = mesh.file;
	  ren3d.add(mesh);
	  mesh_ids[i] = mesh.id;
	  
	  if (isRandom) {
	    //QIN: add a sign so that random move is in all direction
		for(j=0;j<3;j++)
		{
			rand = Math.random();
			if(rand>0.5){
				sign[j]=-1;
			}
			else
				sign[j]=1;  
		}
	   
	   
	  	 mesh.transform.matrix = new X.matrix(
		[[1, 0, 0, -300*Math.random()*sign[0]], [0, 1, 0, -300*Math.random()*sign[1]],
		[0, 0, 1, -300*Math.random()*sign[2]], [0, 0, 0, 1]]);
	  }
	  //HERE IS THE MODIFIED PART
	  hint_meshes[i] = new X.mesh();
	  hint_meshes[i].file = paths[i];
	  hint_meshes[i].color = [0.9,0.9,0.9];
      hint_meshes[i].opacity = 0.5;
	  hint_meshes[i].caption = 'visual_hint';
      hint_meshes[i].visible = false;
	  ren3d.add(hint_meshes[i]);
	  // by Ding Zhao
      hint_texts[i] = 'custom_piece';
	}
  }
  
  ren3d.render();
  
  configurator = function() {
    	zoom = -600;
    
  	
  	ren3d.camera.view = new X.matrix(
	    [[-0.5093217615929089, -0.8570143021091494, -0.07821655290449646, 0],
	     [0.15980913879519168, -0.1834973848251334, 0.9699431678814355, 0],
	     [-0.8456077000154597, 0.48151344295118087, 0.23041792884205461, -600],
	     [0, 0, 0, 1]]);
  };

  //LONI TEAM 2 add a timestamp
  total_hint_time = 0;
  vhint_time = 0;
  thint_time = 0;
  start_time = new Date().getTime();
}

function loadShape(isRandom) {

  // now switch to the viewer
  switchToViewer();
  
  // init renderers
  initializeRenderers();
  createData();

  var region = ['Left superior frontal gyrus', 'Right middle frontal gyrus', 'Right precuneus', 'Cerebellum', 'Left angular gyrus', 'Right cingulate gyrus', 'Left middle temporal gyrus', 'Right lingual gyrus', 'Left superior temporal gyrus', 'Left fusiform gyrus', 'Right superior parietal gyrus', 'Right inferior occipital gyrus', 'Left parahippocampal gyrus', 'Right caudate', 'Left inferior temporal gyrus', 'Brainstem', 'Left superior parietal gyrus', 'Right precentral gyrus', 'Left middle frontal gyrus', 'Left lingual gyrus', 'Left postcentral gyrus', 'Right inferior temporal gyrus', 'Left putamen', 'Right inferior frontal gyrus', 'Right insular cortex', 'Left inferior frontal gyrus', 'Right supramarginal gyrus', 'Right gyrus rectus', 'Left inferior occipital gyrus', 'Right putamen', 'Left superior occipital gyrus', 'Right middle orbitofrontal gyrus', 'Right postcentral gyrus', 'Left precentral gyrus', 'Right lateral orbitofrontal gyrus', 'Left cingulate gyrus', 'Left lateral orbitofrontal gyrus', 'Right fusiform gyrus', 'Left supramarginal gyrus', 'Right parahippocampal gyrus', 'Right superior frontal gyrus', 'Left middle orbitofrontal gyrus', 'Right cuneus', 'Right superior occipital gyrus', 'Left gyrus rectus', 'Right angular gyrus', 'Right middle occipital gyrus', 'Right middle temporal gyrus', 'Left precuneus', 'Left cuneus', 'Left caudate', 'Left hippocampus', 'Right hippocampus', 'Right superior temporal gyrus', 'Left middle occipital gyrus', 'Left insular cortex'];
  
  //LONI TEAM CAUTION!! WE Have added code to store the visual hints.
  number_of_piece = 56;
  var sign =[1,1,1];
  // now the fun part, yahoooo
  for (i=0; i<56; i++) {
	  mesh = new X.mesh();
	  mesh.file = 'data/fsm/i'+ ( i + 1) +'_QEM_SubDiv.fsm';
	  mesh.color = [Math.random(),Math.random(),Math.random()];
	  mesh.caption = '';
	  _data.mesh.file = mesh.file;
	  if (isRandom) {
		 //QIN: add a sign so that random move is in all direction
		for(j=0;j<3;j++)
		{
			rand = Math.random();
			if(rand>0.5){
				sign[j]=-1;
			}
			else
				sign[j]=1;
		}
	  
	   mesh.transform.matrix = new X.matrix(
      [[1, 0, 0, -300*Math.random()*sign[0]], [0, 1, 0, -300*Math.random()*sign[1]],
      [0, 0, 1, -300*Math.random()*sign[2]], [0, 0, 0, 1]]);
	  }
	  ren3d.add(mesh);
	  mesh_ids[i] = mesh.id;
	  //HERE IS THE MODIFIED PART
	  hint_meshes[i] = new X.mesh();
	  hint_meshes[i].file = 'data/fsm/i'+ ( i+ 1)+'_QEM_SubDiv.fsm';
	  hint_meshes[i].color = [0.9,0.9,0.9];
      hint_meshes[i].opacity = 0.5;
	  hint_meshes[i].caption = 'visual_hint';
      hint_meshes[i].visible = false;
	  ren3d.add(hint_meshes[i]);

    hint_texts[i] = region[i];
  }
  ren3d.render();
  
  configurator = function() {

    var zoom = -380;
    if (isRandom) {
    	zoom = -600;
    }
  	/*ren3d.camera.view = new X.matrix(
	    [[-1, 0, 0, 0],
	     [0, 0, 1, 0],
	     [0, -1, 0, -600],
	     [0, 0, 0, 1]]);*/
  	ren3d.camera.view = new X.matrix(
	    [[-0.5093217615929089, -0.8570143021091494, -0.07821655290449646, 0],
	     [0.15980913879519168, -0.1834973848251334, 0.9699431678814355, 0],
	     [-0.8456077000154597, 0.48151344295118087, 0.23041792884205461, -600],
	     [0, 0, 0, 1]]);
		 //ren3d.camera.position = [0,0,- 380];
  };  
  
  //LONI TEAM 2 add a timestamp
  total_hint_time = 0;
  vhint_time = 0;
  thint_time = 0;
  start_time= new Date().getTime();
}

function loadShapeSimple(isRandom) {

  // now switch to the viewer
  switchToViewer();
  
  // init renderers
  initializeRenderers();
  createData();

  var region = ['Left caudate', 'Right caudate', 'Cerebellum', 'Left insular cortex', 'Right insular cortex', 'Occipital lobe', 'Parietal lobe', 'Right putamen', 'Left putamen', 'Left temporal lobe', 'Right temporal lobe', 'Thalamus', 'Frontal lobe'];
  var region_simple = ['Caudate', 'Caudate', 'Cerebellum', 'Insular cortex', 'Insular cortex', 'Occipital lobe', 'Parietal lobe', 'Putamen', 'Putamen', 'Temporal lobe', 'Temporal lobe', 'Thalamus', 'Frontal lobe']; 
  var index = [21, 22, 181, 43, 44, 163, 102, 61, 62, 67, 68, 161, 81];
  
  //LONI TEAM CAUTION!! WE Have added code to store the visual hints.
  number_of_piece = 13;
  var sign = [1,1,1];
  // now the fun part, yahoooo
  for (i=0; i<13; i++) {
	  mesh = new X.mesh();
	  mesh.file = 'data/fsm2/'+index[i]+'_QEM_SubDiv.fsm';
	  mesh.color = [Math.random(),Math.random(),Math.random()];
	  mesh.caption = '';
	  _data.mesh.file = mesh.file;
	  if (isRandom) {
	  //QIN: add a sign so that random move is in all direction
		for(j=0;j<3;j++){
			rand = Math.random();
			if(rand>0.5){
				sign[j]=-1;
			}
			else
			sign[j]=1;
        
		}
		
	  
	    mesh.transform.matrix = new X.matrix(
	  	[[1, 0, 0, -300*Math.random()*sign[0]], [0, 1, 0, -300*Math.random()*sign[1]],
	  	[0, 0, 1, -300*Math.random()*sign[2]], [0, 0, 0, 1]]);
	  }
	  ren3d.add(mesh);
	  mesh_ids[i] = mesh.id;
	  //HERE IS THE MODIFIED PART
	  hint_meshes[i] = new X.mesh();
	  hint_meshes[i].file = 'data/fsm2/'+index[i]+'_QEM_SubDiv.fsm';
	  hint_meshes[i].color = [0.9,0.9,0.9];
      hint_meshes[i].opacity = 0.5;
	  hint_meshes[i].caption = "visual_hint";
      hint_meshes[i].visible = false;
	  ren3d.add(hint_meshes[i]);

    hint_texts[i] = region[i];
  }
  
  
  ren3d.render();
  
  configurator = function() {

    var zoom = -380;
    if (isRandom) {
    	zoom = -600;
    }
  	
  	ren3d.camera.view = new X.matrix(
	    [[-0.5093217615929089, -0.8570143021091494, -0.07821655290449646, 10],
	     [0.15980913879519168, -0.1834973848251334, 0.9699431678814355, 17],
	     [-0.8456077000154597, 0.48151344295118087, 0.23041792884205461, zoom],
	     [0, 0, 0, 1]]);
  };
  
  //LONI TEAM 2 add a timestamp
  total_hint_time = 0;
  vhint_time = 0;
  thint_time = 0;
  start_time= new Date().getTime();
}


function loadFibers() {
  
}

function loadLabelMaps() {
  
}

function loadFile(file) {

  // now switch to the viewer
  switchToViewer();
  
  jQuery('#blacklogo').hide();
  
  // init renderers
  initializeRenderers();
  createData();
  
  var _fileExtension = file.split('.').pop().toUpperCase();
  
  // check which type of file it is
  if (_data['volume']['extensions'].indexOf(_fileExtension) >= 0) {
    
    // it's a volume
    volume = new X.volume();
    volume.file = file;
    _data.volume.file = volume.file;
    ren3d.add(volume);
    
    
  } else if (_data['mesh']['extensions'].indexOf(_fileExtension) >= 0) {
    
    // it's a mesh
    mesh = new X.mesh();
    mesh.file = file;
    _data.mesh.file = mesh.file;
    ren3d.add(mesh);
    
  } else if (_data['fibers']['extensions'].indexOf(_fileExtension) >= 0) {
    
    // it's a fibers thingie
    fibers = new X.fibers();
    fibers.file = file;
    fibers.transform.matrix = new X.matrix(
	   [[1, 0, 0, -130], [0, 6.123031769111886e-17, 1, -130],
	   [0, -1, 6.123031769111886e-17, 130], [0, 0, 0, 1]]);
    fibers.modified();
    _data.fibers.file = fibers.file;
    ren3d.add(fibers);
    
  } else {
    
    throw new Error('Unsupported file type!');
    
  }
  
  ren3d.render();
  
  configurator = function() {
    ren3d.camera.view = new X.matrix(
        [[-0.5093217615929089, -0.8570143021091494, -0.07821655290449646, 10],
         [0.15980913879519168, -0.1834973848251334, 0.9699431678814355, 17],
         [-0.8456077000154597, 0.48151344295118087, 0.23041792884205461, -330],
         [0, 0, 0, 1]]);

  };
  
}
