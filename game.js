var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;

var lastPressed = false;
var timeout = 0;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}

function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;

	if (downPressed == true) {
		var newTop = positionTop + 1;

		/* var element added to move function so player cant walk into cactus. SAME CODE FOR ALL MOVEMENTS BELOW WITH TINY CHANGES*/
		var element = document.elementFromPoint(positionLeft, newTop + 46); /* for down key player heigh is added*/

		if (element.classList.contains('cactus') == false) { /* if statement which targets the cactus class. there is no cactus the player can move*/
			player.style.top = newTop + 'px';
		}
		player.className = 'character walk down';
	}

	if (upPressed == true) {
		var newTop = positionTop - 1;
		var element = document.elementFromPoint(positionLeft, newTop); /*height is removed as this requires character to start from top*/

		if (element.classList.contains('cactus') == false) {
			player.style.top = newTop + 'px';

		}
		player.className = 'character walk up';
	}


	if (leftPressed == true) {
		var newLeft = positionLeft - 1;

		var element = document.elementFromPoint(newLeft, positionTop); /* slight change for left and right*/

		if (element.classList.contains('cactus') == false) {
			player.style.left = newLeft + 'px';
		}
		player.className = 'character walk left';
	}


	if (rightPressed == true) {
		var newLeft = positionLeft + 1;

		var element = document.elementFromPoint(newLeft + 32, positionTop);

		if (element.classList.contains('cactus') == false) {
			player.style.left = newLeft + 'px';           /* if element always stays the same var element has slight changes, it uses different coordinations*/
		}
		player.className = 'character walk right';
	}
}

function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}

/*function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}*/

document.addEventListener('DOMContentLoaded', myLoadFunction);


/*////////////////////////////////////////////////////////////// MY CODE /////////////////////////////////////////////////////////////*/

function myLoadFunction() {
	var start = document.getElementsByClassName('start')[0]; /* start button element*/
	start.addEventListener('click', startGame) /* click event for the start button*/

	positionTank();

}

function startGame() {
	var start = document.getElementsByClassName('start')[0];
	start.style.display = 'none'; /* css property display to make start button disappear*/

	/* movement code moved from myloadfunction to startgame function so character can only move once start game has been clicked*/
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}

/* tanks created at random positions*/

function positionTank() {
	var tank = document.getElementsByClassName('tank'); /* target all tanks*/

	for (var i = 0; i < tank.length; i++) { /* for looping all tanks */
		var random = Math.ceil(Math.random() * 100);
		tank[i].style.top = random + 'vh';

	}
}












document.addEventListener('DOMContentLoaded', myLoadFunction);