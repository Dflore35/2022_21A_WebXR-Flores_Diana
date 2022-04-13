//Global Vars
var page = 5;

//Register Aframe Component (all lower case)
AFRAME.registerComponent("togglehidden", {
  //Initialize function
  init: function () {
    //get scene element
    var sceneEl = document.querySelector("a-scene");

    //Get this element
    let el = this.el;

    //get elements in text frame
    var text = sceneEl.querySelector("#text");

    //get image frame
    var img = sceneEl.querySelector("#image");
    var text1 = sceneEl.querySelector("#clickME");
    var text2 = sceneEl.querySelector("#reset");
    // restart and click me buttons
    var clickHere = sceneEl.querySelector("#startButton");
    var resetB = sceneEl.querySelector("#resetButton");

    //get toggle button
    var tb = sceneEl.querySelector("#toggleButton");
    var tb2 = sceneEl.querySelector("#toggleButton2");

    //get back button
    var back = sceneEl.querySelector("#finsih");
    var back2 = sceneEl.querySelector("#finish2");

    //get lable
    var label = sceneEl.querySelector("#earthLabel");
    //get the disclaimer
    var claim = sceneEl.querySelector("#disclaimer");
    var claimLabel = sceneEl.querySelector("#disclaimerPlane");

    //Give component a function
    this.toggleHide = function () {
      console.log(this.id);
      if (
        (this.id == "toggleButton2" && page == 5) ||
        (this.id == "finsih" && page == -1)
      ) {
        //hide the disclaimer
        claim.setAttribute("opacity", "0");
        claimLabel.setAttribute("opacity", "0");
        let objPosition = claimLabel.getAttribute("position");
        let params = {
          property: "position",
          to: {
            x: 0.18,
            y: 0.54,
            z: -7,
          },
           dur: 1,
        };
        claimLabel.setAttribute("animation", params);
        let objPosition2 = claim.getAttribute("position");
        let params2 = {
          property: "position",
          to: {
            x: -3,
            y: 1.4,
            z: -7,
          },
           dur: 1,
        };
        claim.setAttribute("animation", params2);
        //show the back button
        back.setAttribute("opacity", "1.0");
        back2.setAttribute("opacity", "1.0");

        page = 0;
        // console.log("page=" + page);
      } else if (
        (this.id == "toggleButton2" && page == 0) ||
        (this.id == "finsih" && page == 2)
      ) {
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

        let params = {
          property: "opacity",
          to: 0.0,
          dur: 50,
        };
        img.setAttribute("animation", params);

        let c = {
          property: "opacity",
          to: 0.0,
          dur: 50,
        };
        //hide the asteriod collison buttons
        text1.setAttribute("animation", c);
        text2.setAttribute("animation", c);
        clickHere.setAttribute("animation", c);
        resetB.setAttribute("animation", c);

        page = 1;
        
        tb.setAttribute("value", "Next");
        tb.setAttribute("opacity", "1.0");
        tb2.setAttribute("opacity", "1.0");
        tb2.removeAttribute("link");

        label.setAttribute("value", "Psyche ->");
        label.setAttribute("color", "White");

        back.setAttribute("opacity", "1.0");
        back2.setAttribute("opacity", "1.0");

        // console.log("page=" + page);
      } else if (
        (this.id == "toggleButton2" && page == 1) ||
        (this.id == "finsih" && page == -1)
      ) {
        //change the text and text size

        text.setAttribute("value", "Make your own Asteriod collison");
        let currOpacity = text.getAttribute("letter-spacing");
        let currpos = clickHere.getAttribute("position");

        let params1 = {
          property: "letter-spacing",
          to: 7.0,
          dur: 10,
        };
        text.setAttribute("animation", params1);

        let c = {
          property: "opacity",
          to: 1.0,
          dur: 50,
        };
        //show asteriod collison buttons
        text1.setAttribute("animation", c);
        text2.setAttribute("animation", c);
        clickHere.setAttribute("animation", c);
        resetB.setAttribute("animation", c);


        page = 2;
        tb.setAttribute("value", "Finish");
        tb.setAttribute("opacity", "0.0");
        tb2.setAttribute("opacity", "0.0");
        label.setAttribute("value", "");
        label.setAttribute("color", "white");

        back.setAttribute("opacity", "1.0");
        back2.setAttribute("opacity", "1.0");

        // console.log("page=" + page);
      } else if (
        (this.id == "toggleButton2" && page == 2) ||
        (this.id == "finsih" && page == 1)
      ) {
        //change text and font size
        text.setAttribute(
          "value",
          "Deep within the terrestrial planets, including Earth, scientists infer the presence of metallic cores, but these lie unreachably far below the planets’ rocky mantles and crusts. The asteroid Psyche offers a unique window into these building blocks of planet formation and the opportunity to investigate a previously unexplored type of world."
        );
        let currSpacing = text.getAttribute("letter-spacing");

        let params1 = {
          property: "letter-spacing",
          to: 3.0,
          dur: 10,
        };
        text.setAttribute("animation", params1);

        let params = {
          property: "opacity",
          to: 1.0,
          dur: 50,
        };
        img.setAttribute("animation", params);
        let c = {
          property: "opacity",
          to: 0.0,
          dur: 50,
        };
        //hide buttons for asteriod collison 
        text1.setAttribute("animation", c);
        text2.setAttribute("animation", c);
        clickHere.setAttribute("animation", c);
        resetB.setAttribute("animation", c);


        page = 0;
        tb.setAttribute("value", "Next");
        tb.setAttribute("opacity", "1.0");
        tb2.setAttribute("opacity", "1.0");
        label.setAttribute("value", "Earth ->");
        label.setAttribute("color", "white");

        back.setAttribute("opacity", "1.0");
        back2.setAttribute("opacity", "1.0");
        // console.log("page=" + page);
      } else if (
        (this.id == "toggleButton2" && page == -1) ||
        (this.id == "finsih" && page == 0)
      ) {
        //show the disclaimer again 
        claim.setAttribute("opacity", "1");
        claimLabel.setAttribute("opacity", "1");
        let objPosition = claimLabel.getAttribute("position");
        let params = {
          property: "position",
          to: {
            x: 0.18,
            y: 0.54,
            z: -2,
          },
          dur: 1,
        };
        claimLabel.setAttribute("animation", params);
        let objPosition2 = claim.getAttribute("position");
        let params2 = {
          property: "position",
          to: {
            x: -3,
            y: 1.4,
            z: -1.8,
          },
          dur: 1,
        };
        claim.setAttribute("animation", params2);
        //hide the back button 
        back.setAttribute("opacity", "0.0");
        back2.setAttribute("opacity", "0.0");
        page = 5;
        //console.log("page test =" + page);
      }

      // console.log("pagehello=" + page);
    };

    //Add EventListener

    this.el.addEventListener("click", this.toggleHide);
  },
  //On Remove

  remove: function () {
    this.el.pauseEventListener("click", this.toggleHide, false);
  },
});
