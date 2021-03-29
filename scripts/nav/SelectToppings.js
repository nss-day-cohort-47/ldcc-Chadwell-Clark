import { getToppings } from "../data/apiManager.js";

export const SelectToppings = () => {
    const DOMTarget = document.querySelector("#topping-Select");
    
    getToppings().then((toppings) => {
        console.log("parsed", toppings);
        let toppingSelect = "";
    const toppingsList = toppings.map(
      (topping) =>`<option value="${topping.id}">${topping.name}</option>`
    );
    console.log("about to render select menu", toppingsList);
    console.log(DOMTarget)
    DOMTarget.innerHTML += toppingsList.join("");
    
  });
};
