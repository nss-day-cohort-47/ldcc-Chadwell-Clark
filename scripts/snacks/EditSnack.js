export const EditSnack = (snackObject) => {
	console.log("Edit that snack Debbie")
  return `
	<div class="col">
		<div class="card shadow-sm" >
            <img class="bd-placeholder-img card-img-top"  style="max-width: 540px;" aria-label="Placeholder:${
              snackObject.name
            }" preserveAspectRatio="xMidYMid slice" focusable="false" src="${
    snackObject.snackImg
  }" alt="${snackObject.name}"><label for="snackImg"></label>
  <input type="text" size=130 id="snackImg" name="snackImg" placeholder="${
    snackObject.snackImg
  } ?Change URL of Snack Image?">
            <div class="card-body">
				<h5 color="primary">${snackObject.name}</h5>
				<label for="name"></label>
  <input type="text" size=130 id="name" name="name" placeholder="${
    snackObject.name
  }  ?Change Name of Snack?">
              	<p class="card-text">${
                  snackObject.description
                }</p><label for="description"></label>
  <input type="text" size=130 id="description" name="description" placeholder="${
    snackObject.description
  }  ?Change Description of Snack?">
				 
				  <div class="container">
					<div class="row row-cols-2">
						<div class="col col-details">Type: ${snackObject.type.name}</div>
						<div class="col col-details">Shape: ${snackObject.shape.name}</div>
						<div class="col col-details">Flavor: ${snackObject.inFlavor.name}</div>
						<div class="col col-details">Season: ${snackObject.season.name}</div>
					</div>
					<div class="row row-cols-1">
						<div class="col col-details">
						<p>Topping: ${snackObject.toppings
              .map((topping) => topping.topping.name)
              .join(", ")}</p>
						</div>
					</div>
				</div>
			  	
				<div class="d-flex justify-content-between align-items-center">
					<div class="btn-group">
					<button type="button" class="btn btn-sm btn-outline-secondary" id="editcake__${
            snackObject.id
          }" >Edit</button>
					<button type="button" class="btn btn-sm btn-outline-secondary" id="deletecake__${
            snackObject.id
          }" >Delete</button>
					</div>
                	<small class="text-muted">Count: ${snackObject.count}</small>
              	</div>
            </div>
    	</div>
	</div>
	`;
};
