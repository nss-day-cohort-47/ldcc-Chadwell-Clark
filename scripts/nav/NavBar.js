import { getLoggedInUser, getToppings, useToppingCollection } from "../data/apiManager.js"

export const NavBar = () => {
	
	
	//only show navItems and addTypeButton if user is logged in
	
	const navItems = getLoggedInUser().id
    ? `
	<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	<ul class="navbar-nav me-auto mb-2 mb-lg-0">
		<li class="nav-item ms-1">
			<button class="btn btn-info" type="button" id="allSnacks">All Snacks</button>
		</li>
		<li class="nav-item ms-1">
			<select id="topping-Select" class="form-select topping-select btn-info" aria-label="Select A Topping">
			<option>Select A Topping</option>
			
		
				
			</select>
		</li>
		<li class="nav-item ms-1">
			<button class="btn btn-info" type="button" id="logout">Logout</button>
		</li>
	</ul>
	</div>`
    : "";
	//   ***  Check if logged in user is admin and show add a type button if true
	//   ***  and no add a type button if not admin  
	const addTypeButton = getLoggedInUser().admin ? `
	<nav class="navbar navbar-light"">
		<div class="container-fluid">
			<button id="addTypeBtn" class="btn btn-outline-primary" type="button">Add A Type</button>
		
		</div>
	</nav>` : ""
	
	return  `
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  		<div class="container-fluid">
		  <span class="navbar-brand mb-0 h1">LDCC
		  	<span class="navbar-text">Little Debbie Collector Club</span>
		  </span>
		${navItems}
  		</div>
	</nav>
	${addTypeButton}
	`
	
}