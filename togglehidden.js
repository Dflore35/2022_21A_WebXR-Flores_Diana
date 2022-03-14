//Global Vars
var page = 0;

//Register Aframe Component (all lower case)
AFRAME.registerComponent("togglehidden", {
  //Initialize function
  init: function () {
    
    //get scene element
    var sceneEl = document.querySelector("a-scene");

    //Get this element
    let el = this.el;

    //get all elements in text frame
    var text = sceneEl.querySelector("#text");

    //get image frame
    var img = sceneEl.querySelector("#image");
    var text1 = sceneEl.querySelector("#clickME");
    var text2 = sceneEl.querySelector("#reset");

    var b1 = sceneEl.querySelector("#startButton");
    var b2 = sceneEl.querySelector("#resetButton");
    var button = sceneEl.querySelector("#startButton");
    var button2 = sceneEl.querySelector("#resetButton");
   
    //get toggle button
    var tb = sceneEl.querySelector("#toggleButton");
        var tb2 = sceneEl.querySelector("#toggleButton2");

    //get lable
    var label = sceneEl.querySelector("#earthLabel");
     
    //Give component a function
    this.toggleHide = function () {
      if (page == 0) 
      {
       
        //change text and font size 
        
          text.setAttribute(
            "value",
            "The asteroid is most likely a survivor of multiple violent hit-and-run collisions, common when the solar system was forming.Thus Psyche may be able to tell us how Earth's core and the cores of other terrestrial planets came to be."
          );
          let currSpacing = text.getAttribute("letter-spacing");

          let params1 = {
            property: "letter-spacing",
            to: 5.0,
            dur: 10,
          };
          text.setAttribute("animation", params1);
        
      //make the earth go away
        
          	let params = {
						property: 'opacity',
						to: 0.0,
						dur: 50,
					};
          img.setAttribute("animation", params);
        
        
        page = 1;
        tb.setAttribute("value", "Next");
        label.setAttribute("value","Psyche ->");
        label.setAttribute("color","White");

      } else  if (page==1)
      {

        //change the text and text size
      
          text.setAttribute(
            "value",
           "Make your own Asteriod collison");
          let currOpacity = text.getAttribute("letter-spacing");
        let currpos = b1.getAttribute("position");

    
          let params1 = {
            property: "letter-spacing",
            to: 7.0,
            dur: 10,
          };
          text.setAttribute("animation", params1);
        
       
//show the buttons
        
          	let c = {
						property: 'opacity',
						to: 1.0,
						dur: 50,
					};
      

          text1.setAttribute("animation", c);
          text2.setAttribute("animation", c);
          b1.setAttribute("animation", c);
          b2.setAttribute("animation", c);
      


        page = 2;
        tb.setAttribute("value", "Back");
        label.setAttribute("value","");
        label.setAttribute("color","white");
        
         
        

      }
      else if(page ==2)
        {
          //change text and font size 
          text.setAttribute
          (
            "value","Deep within the terrestrial planets, including Earth, scientists infer the presence of metallic cores, but these lie unreachably far below the planets’ rocky mantles and crusts. The asteroid Psyche offers a unique window into these building blocks of planet formation and the opportunity to investigate a previously unexplored type of world."

          );
          let currSpacing = text.getAttribute("letter-spacing");

          let params1 = {
            property: "letter-spacing",
            to: 3.0,
            dur: 10,
          };
          text.setAttribute("animation", params1);
        
           
//hide buttons and bring the Earth back 
         	let params = {
						property: 'opacity',
						to: 1.0,
						dur: 50,
					};
          img.setAttribute("animation", params);
          	let c = {
						property: 'opacity',
						to: 0.0,
						dur: 50,
					};
          text1.setAttribute("animation", c);
          text2.setAttribute("animation", c);
          b1.setAttribute("animation", c);
          b2.setAttribute("animation", c);
          
        
                
        page = 0;
        tb.setAttribute("value", "Next");
        label.setAttribute("value","Earth ->");
        label.setAttribute("color","white");
          
        }
    };

    //EventListener

        this.el.addEventListener("click", this.toggleHide);

    
  },
  //Remove
  
    remove: function () {

        this.el.pauseEventListener("click", this.toggleHide,false)
      
    ;
    
  
  },
});
