var movies = [
  {
		path: "img/alien.jpg",
		name: "ALIEN 1"
	},
	{
		path: "img/alien2.jpg",
		name: "ALIEN 2"
	},
	{
		path: "img/alien3.jpg",
		name: "ALIEN 3"
	},
	{
		path: "img/alien4.jpg",
		name: "ALIEN 4"
	},
	{
		path: "img/terminator.jpg",
		name: "TERMINATOR 1"
	},
	{
		path: "img/terminator2.jpg",
		name: "TERMINATOR 2"
	},
	{
		path: "img/terminator3.jpg",
		name: "TERMINATOR 3"
	},
	{
		path: "img/terminator4.jpg",
		name: "TERMINATOR 4"
	},
	{
		path: "img/predator.jpg",
		name: "PREDATOR 1"
	},
	{
		path: "img/predator2.jpg",
		name: "PREDATOR 2"
	},
	{
		path: "img/predator3.jpg",
		name: "PREDATOR 3"
	},
	{
		path: "img/aliensVSpredator.jpg",
		name: "ALIENS VS PREDATOR"
	}
];


// declaring a film's names only array
var namesOnly = [];

// rendering all movies
for (let i = 0, movLen = movies.length; i < movLen; i++ ) {
	var selectMain = document.querySelector('div.list-of-all');
	var insertMovie = document.createElement("div");
	selectMain.appendChild(insertMovie);
	insertMovie.id = 'movie-' + i;
	insertMovie.classList = 'movies-class';

	var movImg = "<img class='poster' src='" + movies[i].path + "' />";
	var remImg = "<img class='rem' src='img/remove.png' />";
	var movName = "<h3 id='name-" + i + "'>" + movies[i].name + "</h3>"; 
	// console.log(movImg, movName);

	insertMovie.innerHTML = movImg + remImg + movName;

	// creating an array of film's names only
	namesOnly.push(movies[i].name);
	// console.log('Names only:', namesOnly);
}




// selecting what is inputted
// var myInput = document.querySelector('input');
// console.log('myInput:', myInput);

// var inputField = document.querySelector('#myInput');
// console.log("inputField", inputField);

myInput.onkeyup = function() {
	// declaring variables
	
	var input, filter, names, movClass, a, i, txtValue;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	movClass = document.querySelectorAll('.movies-class');
	// console.log('movClass', movClass);
	
	for (i = 0; i < namesOnly.length; i++) {
		names = movies[i].name;
	}


	// console.log('input:', input);
	console.log('filter:', filter);

	// var daLiIma = namesOnly.includes(filter);
	// console.log(daLiIma);
}


// var myClick = document.querySelector('.rem').parentElement;
// console.log("myClick:", myClick);

var clickRem = document.addEventListener('click', function(e) {
	var rmv = e.target;
	var rmvParent = rmv.parentElement;
	console.log(rmv);
	console.log(rmvParent);
	if (rmv.className == "rem") {
		rmvParent.remove();
	}
});








// JavaScript Array Iteration Methods
// https://www.w3schools.com/js/js_array_iteration.asp
// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }






// grabbing the parent div of all movies
var listOfAll = document.querySelector('.list-of-all');
console.log('listOfAll', listOfAll);


// var movClass = document.querySelectorAll('.movies-class');
// var movNode = movClass.txtValue;
// console.log('movNode', movNode);

// example of grabbing just the first film div by id
// var notSearched = document.getElementById('movie-0');
// console.log(notSearched);





// notSearched.remove();	// removing directly (after storing in a var)
// listOfAll.removeChild(notSearched);	// removing a child (after grabing a parent)

// console.log(movies[0].name);