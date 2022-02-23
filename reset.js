var reset =0;


AFRAME.registerComponent('reset-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
     
          var move = sceneEl.querySelector("#rouge1");
       let objPosition = move.getAttribute("position");
          let params = 
            {
            property: "position",
            to: {
					x: 4.8,
					y: 10,
					z: -5
				   },
            dur: 10,                     
          };
       
          move.setAttribute("animation", params);
      //move first broken part
      var part1 = sceneEl.querySelector("#part1");


          let params1 = 
            {
            property: "position",
              
            to: {
					x: .5,
					y: 2.9,
					z: -6
				   },
            dur: 10,
          };
       
          part1.setAttribute("animation", params1);
       //move second broken part
      var part2 = sceneEl.querySelector("#part2");


          let params2 = 
            {
            property: "position",
        
              
            to: {
					x: .5,
					y: 2.9,
					z: -6
				   },
            dur: 10,
           
          };
       
          part2.setAttribute("animation", params2);
       //move third broken part
      var part3 = sceneEl.querySelector("#part3");


          let params3 = 
            {
            property: "position",
         
              
            to: {
					x: .5,
					y: 2.9,
					z: -6
				   },
            dur: 10,
           
          };
       
          part3.setAttribute("animation", params3);
       //move fourth broken part
      var part4 = sceneEl.querySelector("#part4");


          let params4 = 
            {
            property: "position",
                      
            to: {
					x: .5,
					y: 2.9,
					z: -6
				   },
            dur: 10,
           
          };
       
          part4.setAttribute("animation", params4);
      

      console.log("restart button was clicked!");
          
          reset=1;
        
      
      
    });
  }
});
