AFRAME.registerComponent('start-button', {
  init: function () {
    let sceneEl = document.querySelector('a-scene');
    let el = this.el;

    el.addEventListener('click', function () {
   
 
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
					x: -.7,
					y: 8,
					z: -8
				   },
            dur: 400,
          delay:150,
           
          };
       
          part1.setAttribute("animation", params1);
       //move second broken part
      var part2 = sceneEl.querySelector("#part2");


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
					x: .6,
					y: -.1,
					z: -4.9
				   },
            dur: 400,
          delay:150,
           
          };
       
          part2.setAttribute("animation", params2);
       //move third broken part
      var part3 = sceneEl.querySelector("#part3");


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
					x: -4,
					y: 1.3,
					z: -6
				   },
            dur: 400,
          delay:150,
           
          };
       
          part3.setAttribute("animation", params3);
       //move fourth broken part
      var part4 = sceneEl.querySelector("#part4");


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
					x: 5,
					y: 1,
					z: -6
				   },
            dur: 400,
          delay:150,
           
          };
       
          part4.setAttribute("animation", params4);
      

      console.log("restart button was clicked!");
      
    });
  }
});
