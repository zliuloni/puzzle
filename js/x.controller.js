/**
 * Setup all UI elements once the loading was completed.
 */
function setupUi() {
  /*
  // VOLUME
  if (_data.volume.file != null) {
    
    // update threshold slider
    jQuery('#threshold-volume').dragslider("option", "max", volume.max);
    jQuery('#threshold-volume').dragslider("option", "min", volume.min);
    jQuery('#threshold-volume').dragslider("option", "values",
        [4, volume.max]);
    volume.lowerThreshold = 4;
    
    // update window/level slider
    jQuery('#windowlevel-volume').dragslider("option", "max", volume.max);
    jQuery('#windowlevel-volume').dragslider("option", "min", volume.min);
    jQuery('#windowlevel-volume').dragslider("option", "values",
        [volume.min, volume.max]);
    
    // update 3d opacity
    jQuery('#opacity-volume').slider("option", "value", 5);
    volume.opacity = 0.05; // re-propagate
    volume.modified();
    
    // update 2d slice sliders
    var dim = volume.dimensions;
    jQuery("#yellow_slider").slider("option", "disabled", false);
    jQuery("#yellow_slider").slider("option", "min", 0);
    jQuery("#yellow_slider").slider("option", "max", dim[0] - 1);
    jQuery("#yellow_slider").slider("option", "value", volume.indexX);
    jQuery("#red_slider").slider("option", "disabled", false);
    jQuery("#red_slider").slider("option", "min", 0);
    jQuery("#red_slider").slider("option", "max", dim[1] - 1);
    jQuery("#red_slider").slider("option", "value", volume.indexY);
    jQuery("#green_slider").slider("option", "disabled", false);
    jQuery("#green_slider").slider("option", "min", 0);
    jQuery("#green_slider").slider("option", "max", dim[2] - 1);
    jQuery("#green_slider").slider("option", "value", volume.indexZ);
    
    jQuery('#volume .menu').removeClass('menuDisabled');
    
	jQuery('#volume .menu').stop().animate({
	 'marginLeft': '-2px'
	}, 1000);
	has_volume = true;
    
  } else {
    
    if (!has_volume) {
	    // no volume
	    jQuery('#volume .menu').addClass('menuDisabled');
	    jQuery("#yellow_slider").slider("option", "disabled", true);
	    jQuery("#red_slider").slider("option", "disabled", true);
	    jQuery("#green_slider").slider("option", "disabled", true);
    }
	
  }
  
  // LABELMAP
  if (_data.labelmap.file != null) {
    
    jQuery('#labelmapSwitch').show();
    
    jQuery('#opacity-labelmap').slider("option", "value", 40);
    volume.labelmap.opacity = 0.4; // re-propagate
    

  } else {
    
    // no labelmap
    jQuery('#labelmapSwitch').hide();
    
  }
  */
  // MESH
  if (_data.mesh.file != null) {
    
    jQuery('#opacity-mesh').slider("option", "value", 100);
    mesh.opacity = 1.0; // re-propagate
    
    mesh.color = [0, 0, 1];
    
    jQuery('#mesh .menu').removeClass('menuDisabled');
    
	jQuery('#mesh .menu').stop().animate({
	 'marginLeft': '-2px'
	}, 1000);
	has_mesh = true;
    
  } else {
    
    if (!has_mesh) {
	    // no mesh
	    jQuery('#mesh .menu').addClass('menuDisabled');
    }
  
  }
  /*
  // SCALARS
  if (_data.scalars.file != null) {
    
    var combobox = document.getElementById("scalars-selector");
    combobox.value = 'Scalars 1';
    
    jQuery("#threshold-scalars").dragslider("option", "disabled", false);
    jQuery("#threshold-scalars").dragslider("option", "min",
        mesh.scalars.min * 100);
    jQuery("#threshold-scalars").dragslider("option", "max",
        mesh.scalars.max * 100);
    jQuery("#threshold-scalars").dragslider("option", "values",
        [mesh.scalars.min * 100, mesh.scalars.max * 100]);
    
  } else {
    
    var combobox = document.getElementById("scalars-selector");
    combobox.disabled = true;
    jQuery("#threshold-scalars").dragslider("option", "disabled", true);
    
  }
  
  // FIBERS
  if (_data.fibers.file != null) {
    
    jQuery('#fibers .menu').removeClass('menuDisabled');
    
    jQuery("#threshold-fibers").dragslider("option", "min", fibers.scalars.min);
    jQuery("#threshold-fibers").dragslider("option", "max", fibers.scalars.max);
    jQuery("#threshold-fibers").dragslider("option", "values",
        [fibers.scalars.min, fibers.scalars.max]);
	jQuery('#fibers .menu').stop().animate({
	 'marginLeft': '-2px'
	}, 1000);
	has_fibers = true;
    
  } else {
    
    if (!has_fibers) {
	    // no fibers
	    jQuery('#fibers .menu').addClass('menuDisabled');
    }
    
  }
  */
}

function volumerenderingOnOff(bool) {

  if (!volume) {
    return;
  }
  
  volume.volumeRendering = bool;
  

}

function thresholdVolume(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.lowerThreshold = ui.values[0];
  volume.upperThreshold = ui.values[1];
  

}

function windowLevelVolume(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.windowLow = ui.values[0];
  volume.windowHigh = ui.values[1];
  

}

function opacity3dVolume(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.opacity = ui.value / 100;
  

}

function volumeslicingX(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.indexX = Math
      .floor(jQuery('#yellow_slider').slider("option", "value"));
  
}

function volumeslicingY(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.indexY = Math.floor(jQuery('#red_slider').slider("option", "value"));
  
}

function volumeslicingZ(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.indexZ = Math.floor(jQuery('#green_slider').slider("option", "value"));
  
}

function fgColorVolume(hex, rgb) {

  if (!volume) {
    return;
  }
  
  volume.maxColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
  

}

function bgColorVolume(hex, rgb) {

  if (!volume) {
    return;
  }
  
  volume.minColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
  

}

//
// LABELMAP
//
function opacityLabelmap(event, ui) {

  if (!volume) {
    return;
  }
  
  volume.labelmap.opacity = ui.value / 100;
  

}

function toggleLabelmapVisibility() {

  if (!volume) {
    return;
  }
  
  volume.labelmap.visible = !volume.labelmap.visible;
  

}

//
// MESH
// Modified by Loni team 2 
// All the functions are modified to change the opacity, color and show and hide for a selected piece.
// Except the last three are never used.
function toggleMeshVisibility() {

  if (!ren3d.get(id)) {
    return;
  }
  
  ren3d.get(id).visible = !ren3d.get(id).visible;
  

}

function meshColor(hex, rgb) {

  if (!ren3d.get(id)) {
    return;
  }
  if(ren3d.get(id).caption != "visual_hint")
	ren3d.get(id).color = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
  

}

function opacityMesh(event, ui) {

  if (!ren3d.get(id)) {
    return;
  }
  
  ren3d.get(id).opacity = ui.value / 100;
  

}

function thresholdScalars(event, ui) {

  if (!mesh) {
    return;
  }
  
  mesh.scalars.lowerThreshold = ui.values[0] / 100;
  mesh.scalars.upperThreshold = ui.values[1] / 100;
  

}

function scalarsMinColor(hex, rgb) {

  if (!mesh) {
    return;
  }
  
  mesh.scalars.minColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
  

}

function scalarsMaxColor(hex, rgb) {

  if (!mesh) {
    return;
  }
  
  mesh.scalars.maxColor = [rgb.r / 255, rgb.g / 255, rgb.b / 255];
  

}

//
// Fibers
//
function toggleFibersVisibility() {

  if (!fibers) {
    return;
  }
  
  fibers.visible = !fibers.visible;
  

}

function thresholdFibers(event, ui) {

  if (!fibers) {
    return;
  }
  
  fibers.scalars.lowerThreshold = ui.values[0];
  fibers.scalars.upperThreshold = ui.values[1];
  

}


//LONI TEAM 2
//This is a function that introduce the multiple event handler to handle
// the interaction of the user. Such as dragging, selecting pieces.
function InitialEvents(){

	ren3d.interactor.onMouseMove = function(event)
    {
	    //record the second position of te mouse.
		end_pos = ren3d.interactor.mousePosition;
		
		if( ren3d.interactor.leftButtonDown &&  jQuery('#drag').attr('checked'))
		{
			//If the peice selected is not visual hint
			if (ren3d.get(id)&& ren3d.get(id).caption != "visual_hint"){
				//get the camera zoom value, then use it to switch the difference of displacement.
				camera_view_zoom = ren3d.camera.view.getValueAt(2,3);
				// the unit is switched from pixels to coordinate units. This is done by a magic number
				// -760 from practical testing.
				if(camera_view_zoom < 0)
					end_coordinate = new X.matrix ([[(end_pos[0] - pos[0])*camera_view_zoom/-760 , 
											     (-(end_pos[1] - pos[1])*camera_view_zoom/-760) ,
												 0]]);
				else
					end_coordinate = new X.matrix ([[(end_pos[0] - pos[0])/20,
													-(end_pos[1] - pos[1])*20
													,0 ]]);
				
				//get the camera's rotation matrix. it will be used to calculate the real movement of pieces in coordinates
				rotation_matrix = new X.matrix ([
									[ren3d.camera.view.getValueAt(0,0), ren3d.camera.view.getValueAt(0,1), ren3d.camera.view.getValueAt(0,2)],
									[ren3d.camera.view.getValueAt(1,0), ren3d.camera.view.getValueAt(1,1), ren3d.camera.view.getValueAt(1,2)],
									[ren3d.camera.view.getValueAt(2,0), ren3d.camera.view.getValueAt(2,1), ren3d.camera.view.getValueAt(2,2)]]);	
			
				//this is the step of transformation
				translate_vector =new X.matrix(end_coordinate.multiply(rotation_matrix));
				
				//make a new transform matrix based on the calculation
				transform_matrix = new X.matrix ([[1,0,0,translate_vector.getValueAt(0,0)], 
											[0,1,0,translate_vector.getValueAt(0,1)],
											[0,0,1,translate_vector.getValueAt(0,2)],
											[0,0,0,1]]);
				//add the change of dispacement to the original matrix of the piece.
				ren3d.get(id).transform.matrix= new X.matrix(ren3d.get(id).transform.matrix.multiply(transform_matrix));
				
			}
		}
		//record the first position of the mouse.
		pos = ren3d.interactor.mousePosition;	 
	};
	
	
	//this handler record the piece selected, only peices that are not visual hints.
	ren3d.interactor.onMouseDown = function(left,middle,right)
    {   
	    //if the action is dragging, record some points.
		if(left && jQuery('#drag').attr('checked'))
		{
			pos = ren3d.interactor.mousePosition;
			id = ren3d.pick(pos[0],pos[1]);
			if (ren3d.get(id) && ren3d.get(id).caption != "visual_hint"){
				old_color =ren3d.get(id).color;
				old_opacity = ren3d.get(id).opacity;
				ren3d.get(id).color=[0.5,0.5,0.5];
				ren3d.get(id).opacity=0.7;
				
			}
		}
		
    };
	
	//This handler turn the pieces color back and also does the work to check if 
	//the movement result in any pieces combined. 
	ren3d.interactor.onMouseUp = function(left,middle,right)
    {		
		if (ren3d.get(id) && ren3d.get(id).caption != "visual_hint"){
			ren3d.get(id).color = old_color;
			ren3d.get(id).opacity = old_opacity;
			//Qin:Added to notify player if a piece is connected to other pieces
			if(jQuery('#drag').attr('checked')){
				for (i = 0; i < number_of_piece; i++){
  
					if(mesh_ids[i]!=id && CalculateDistance(mesh_ids[i],id,30) == 0)
					{
					ren3d.get(mesh_ids[i]).color=ren3d.get(id).color; 
					console.log("Connected!");
					}
				}
			}
	
			// By Ding zhao, we calculate scores every move.
			// If score is 100 for combination, finish automatically.
			if(CalculateCombinationScore() == 100)
				CalculateScores();
			
		}
	};
	
}

//will be called when drag checkbox is checked
function SwitchRotateorDrag() {
	if(jQuery('#drag').attr('checked')) {
		ren3d.camera.rotationenable = false;
		jQuery('#visibility-mesh').show();
		jQuery('#colorpicker').show();
		jQuery('#menuLabel').show();
		jQuery('#opacity-mesh').show();
	} else {
		ren3d.camera.rotationenable = true;
		jQuery('#visibility-mesh').hide();
		jQuery('#colorpicker').hide();
		jQuery('#menuLabel').hide();
		jQuery('#opacity-mesh').hide();
	}
}

//will be called if visual hint is turned on
function SwitchVisual() {
	
	if(!hint_meshes)
		return;

	for(i =0 ; i<number_of_piece; i++)
		if(hint_meshes[i])
			hint_meshes[i].visible = jQuery('#vhint').attr('checked');

    //calculate hint time
    if(jQuery('#vhint').attr('checked'))
    {
        vhint_time = new Date().getTime();
    }
    else
    {
        time_now = new Date().getTime();
        total_hint_time += time_now - vhint_time;
    }
	
}

// By Ding Zhao, enable/disable textual.
function SwitchTextual() {
  
  if(!hint_texts)
    return;
  //window.alert("sometext");
  if(jQuery('#thint').attr('checked'))
  {
    for(i = 0 ; i < number_of_piece; i++)
    {
      if(hint_texts[i])
        {
          ren3d.get(mesh_ids[i]).caption = hint_texts[i];
        }
    }
  }
  else
  {
    for(i = 0 ; i < number_of_piece; i++)
    {
      if(hint_texts[i])
        {
          ren3d.get(mesh_ids[i]).caption = '';
        }
    }
  }

    if(jQuery('#thint').attr('checked'))
    {
        thint_time = new Date().getTime();
    }
    else
    {
        time_now = new Date().getTime();
        total_hint_time += time_now - thint_time;
    }
  
}


//Ding: score is deducted by 1 point for every 5 seconds when hint is shown
function CalculateHintScore(){

    if(jQuery('#vhint').attr('checked'))
    {
        time_now = new Date().getTime();
        total_hint_time += time_now - vhint_time;
    }

    if(jQuery('#thint').attr('checked'))
    {
        time_now = new Date().getTime();
        total_hint_time += time_now - thint_time;
    }

	return 0 - (total_hint_time / 10000);
}

//Calculate the time score.
function CalculateTimeScore(){
    var end_time =new Date().getTime();
    var time_difference = end_time - start_time;
    var time_allowance = 30*60*1000; //half an hour
    
    if (time_difference < time_allowance)
       return 100;
       
    else if (time_difference > time_allowance && time_difference < 4*time_allowance)
        return Math.round ((1- (time_difference- time_allowance) / (3*time_allowance)) * 1000)/10;
        
    else 
        return 0;
}

//a helper function that find the piece that is most closed to others.
// Using it then to calculate the combination score
function CalculateDistance(id1, id2 , error_range){
	if 	((Math.abs (ren3d.get(id1).transform.matrix.getValueAt(0,3) - ren3d.get(id2).transform.matrix.getValueAt(0,3)) > error_range) || 
			(Math.abs (ren3d.get(id1).transform.matrix.getValueAt(1,3) - ren3d.get(id2).transform.matrix.getValueAt(1,3)) > error_range) ||
			(Math.abs (ren3d.get(id1).transform.matrix.getValueAt(2,3) - ren3d.get(id2).transform.matrix.getValueAt(2,3)) > error_range)
		)
		return 1;
		
	else
		return 0;
						 
						
	
}

//calculating scores based on the combination
function CalculateCombinationScore(){
	var cur_mini= -1;
	var cur_id = mesh_ids[0];
    var potential_mini = 0;
	var error_range = 30;
	//use this double loop to find a piece that is closest to all the other pieces.
	for (i = 0; i < number_of_piece; i++){
	
		for (j = 0; j < number_of_piece; j++)
			potential_mini += CalculateDistance(mesh_ids[i], mesh_ids[j], error_range);
		
		if((potential_mini < cur_mini) || cur_mini == -1)
		{
			cur_mini = potential_mini;
			cur_id = mesh_ids[i];
		}
	potential_mini = 0;
	}
	
	return 100 - Math.round(cur_mini * (100/ (number_of_piece - 1))* 10)/ 10;
}

//put all kinds of scores together.
function CalculateScores() {
    var score = CalculateHintScore() + (CalculateTimeScore() + CalculateCombinationScore())/ 2;
	location.reload();
	window.alert("Congratulation! your score is: "+ score + "\n" + 
	             "time score: "+ CalculateTimeScore() +
				 "\ncombo score: "+ CalculateCombinationScore()+"\n" );


}


