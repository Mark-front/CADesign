const controller = new ScrollMagic.Controller();

const sceneServices = new ScrollMagic.Scene({ triggerElement: "#services", duration: 100, offset: -50, reverse:false })
.on("enter", () => {
  tlOpacityScaleMin(".service-card").play();
})
.addTo(controller);

const sceneValues = new ScrollMagic.Scene({ triggerElement: "#our-values", duration: 100, offset: -50, reverse:false })
.on("enter", () => {
  tlOpacityScaleMin(".values-card").play();
})
.addTo(controller);

const sceneStudents = new ScrollMagic.Scene({ triggerElement: "#for-students", duration: 100, offset: -50, reverse:false })
.on("enter", () => {
  tlOpacityScaleMin(".skill").play();
})
.addTo(controller);

const sceneContacts = new ScrollMagic.Scene({ triggerElement: "#map", duration: 100, offset: -50, reverse:false })
  .on("enter", () => {
    tlContacts.play();
  })
  .addTo(controller);
  
const sceneFooter = new ScrollMagic.Scene({ triggerElement: "#footerTrigger", duration: 100, offset: -500, reverse:false })
  .on("enter", () => {
    tlFooter.play();
  })
  .addTo(controller);
