// mesh panel javascript
jQuery(function() {

  
  jQuery('#meshvisibility').click(function() {

    toggleMeshVisibility();
  });
  
  jQuery('#meshColor').miniColors({
    letterCase: 'uppercase',
    change: meshColor
  });
  
  jQuery('#scalarsMinColor').miniColors({
    letterCase: 'uppercase',
    change: scalarsMinColor
  });
  
  jQuery('#scalarsMaxColor').miniColors({
    letterCase: 'uppercase',
    change: scalarsMaxColor
  });
  
  jQuery("#opacity-mesh").slider({
    slide: opacityMesh
  });
  jQuery("#opacity-mesh").width(140);
  /*
  jQuery("#threshold-scalars").dragslider({
    range: true,
    rangeDrag: true,
    values: [0, 100],
    // connect to x.controller.js
    slide: thresholdScalars
  });
  jQuery("#threshold-scalars").width(140);
  */
  
  //CS 130 LONI TEAM 2 
  jQuery('#drag').click(function() {
    SwitchRotateorDrag();
  });
  jQuery('#rotate').click(function() {
    SwitchRotateorDrag();
  });
  
  jQuery('#vhint').click(function(){
	SwitchVisual();
  });

  jQuery('#thint').click(function(){
    SwitchTextual();
  });
  
  jQuery('#end-game').click(function(){
	CalculateScores();
  });
  
  jQuery('.tooltip_left').qtip({
	content: {
		attr: 'title'
	}, 
	position: {
		my: 'top left',
		at: 'bottom left'
	},
  });
});
