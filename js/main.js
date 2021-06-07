let acc =[...document.getElementsByClassName('accordion')];
console.log(acc)

function executeAccordion(accordions) {
  const accordionClassActive = "active";

  let i;


  accordions.map((accordion) => {
    accordion.onclick = () => {
      accordion.classList.toggle(accordionClassActive)
      let panel = accordion.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px"
      }
    };
  });
}

executeAccordion(acc);
