var resets=0;
const ranNum = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};
    AFRAME.registerComponent('start-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    //get next/finish button
    var toggleButton = sceneEl.querySelector("#toggleButton");
    var toggleButton2 = sceneEl.querySelector("#toggleButton2");
    
    
    
		//function calling
		var resetComponent = document.querySelector('[reset]').components.reset;
    //console.log(resetComponent);
    
    
    el.addEventListener('click', function () {
      
      
      
      //console.log(resetComponent);
      
      
       //resetComponent.resetFunction(sceneEl, el);
      
      
        toggleButton.setAttribute("opacity", "1.0");
        toggleButton2.setAttribute("opacity", "1.0");
      toggleButton2.setAttribute("link", "href: https://psyche.asu.edu/; title: PsychePage; on: click");
      
      
      
      
      if(resets==0)
      {
        resets=1;
          var move = sceneEl.querySelector("#rouge1");
      move.setAttribute("color","red");
       let objPosition = move.getAttribute("position");
          let params = 
            {
            property: "position",
            from:
            {
          x: 4.5,
					y: 6,
					z: -5
              
            },
              
            to: {
					x: .7,
					y: 3.6,
					z: -4.7
				   },
            dur: 300,
            loop:1,
           
          };
       
          move.setAttribute("animation", params);
      //move first broken part
      var part1 = sceneEl.querySelector("#part1");

        var y1=(Math.random() * 4)+5.5;
        var x1=ranNum(-3,3);

          let params1 = 
            {
            property: "position",
            from:
            {
          x: .5,
					y: 2.9,
					z: -6
              
            },
              
            to: {
					x: x1,
					y: y1,
					z: -8
				   },
            dur: 400,
          delay:150,
           
          };
       
          part1.setAttribute("animation", params1);
       //move second broken part -4.9
      var part2 = sceneEl.querySelector("#part2");
        var z2=(Math.random() * -10)+3;
        var x2 =ranNum(-2,2);

          let params2 = 
            {
            property: "position",
            from:
            {
          x: .5,
					y: 2.9,
					z: -6
              
            },
              
            to: {
					x: x2,
					y: -.1,
					z: z2
				   },
            dur: 400,
          delay:150,
           
          };
       
          part2.setAttribute("animation", params2);
       //move third broken part
      var part3 = sceneEl.querySelector("#part3");

        var y3=ranNum(-.2,5);
        var x3 =ranNum(-2,-6);
          let params3 = 
            {
            property: "position",
            from:
            {
          x: .5,
					y: 2.9,
					z: -6
              
            },
              
            to: {
					x: x3,
					y: y3,
					z: -6
				   },
            dur: 400,
          delay:150,
           
          };
       
          part3.setAttribute("animation", params3);
       //move fourth broken part
      var part4 = sceneEl.querySelector("#part4");
        var y4=ranNum(-.2,2);
        var x4 =ranNum(2,5.5);

          let params4 = 
            {
            property: "position",
            from:
            {
          x: .5,
					y: 2.9,
					z: -6
              
            },
              
            to: {
					x: x4,
					y: y4,
					z: -6
				   },
            dur: 400,
          delay:150,
           
          };
       
          part4.setAttribute("animation", params4);
      

      console.log("click here button was clicked!");
        
        
      }
  
      
    });
  }
});
