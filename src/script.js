
const animItems = document.querySelectorAll('._anim');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 20;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 800)

}


/* --------------------------------------------------------------------------*/



let output = "0";
let lastInput = "";
document.getElementById("output").innerHTML = output



document.getElementById("C").addEventListener("click", function () {
	output = "0"
	document.getElementById("output").innerHTML = output
	lastInput = ""
})

document.getElementById("%").addEventListener("click", function () { })

document.getElementById("/").addEventListener("click", function () {
	addOperation("/")
})

document.getElementById("1").addEventListener("click", function () {
	addNumber("1")
})

document.getElementById("2").addEventListener("click", function () {
	addNumber("2")
})

document.getElementById("3").addEventListener("click", function () {
	addNumber("3")
})

document.getElementById("4").addEventListener("click", function () {
	addNumber("4")
})

document.getElementById("5").addEventListener("click", function () {
	addNumber("5")
})

document.getElementById("6").addEventListener("click", function () {
	addNumber("6")
})

document.getElementById("7").addEventListener("click", function () {
	addNumber("7")
})

document.getElementById("8").addEventListener("click", function () {
	addNumber("8")
})

document.getElementById("9").addEventListener("click", function () {
	addNumber("9")
})

document.getElementById("0").addEventListener("click", function () {
	addNumber("0")
})

document.getElementById("+").addEventListener("click", function () {
	addOperation("+")
})

document.getElementById("−").addEventListener("click", function () {
	addOperation("-")
})
//funkcja by nie dzielić przez zero - dodając alert
document.getElementById("=").addEventListener("click", function () {
	if (eval(output) == "Infinity") {
		alert("nie dziel przez 0")
		output = output.slice(0, output.length - 1)
		document.getElementById("output").innerHTML = output

	}
	else {
		//eval odpowiada za znak "="
		console.log(eval(output))
		output = eval(output)
		document.getElementById("output").innerHTML = output
		lastInput = "number"
	}

})

document.getElementById("✕").addEventListener("click", function () {
	addOperation("*")
})

document.getElementById(".").addEventListener("click", function () {
	addNumber(".")
})
//funkcja dodająca cyferki i przecinki
function addNumber(number) {
	if (output == "0" && number != ".") {
		output = number

	}
	else (output = output + number)
	document.getElementById("output").innerHTML = output
	lastInput = "number"
}
//funkcja dodająca operacje 
function addOperation(op) {
	if (lastInput == "operation") {
		output = output.slice(0, output.length - 1) + op
	}
	else { output = output + op }
	lastInput = "operation"
	document.getElementById("output").innerHTML = output
}


