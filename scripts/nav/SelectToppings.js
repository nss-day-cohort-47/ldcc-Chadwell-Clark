import { getToppings } from "../data/apiManager.js";

export const SelectToppings = () => {
    const DOMTarget = document.querySelector("#topping-Select");
    getToppings().then((toppings) => {
    const toppingsList = toppings.map(
      (topping) =>`<option value="${topping.id}">${topping.name}</option>`
    );
    DOMTarget.innerHTML += toppingsList.join("");
    
  });
};
