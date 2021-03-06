//

function selectFood(maxfood) {
	const random = Math.floor(Math.random() * maxfood) + 1;
	// console.log('randomFood; random ', random);
	switch (random) {
		case 1:
			return 'Meat';
		case 2:
			return 'Fish';
		case 3:
			return 'Bugs';
		case 4:
		default:
			return 'Grain';
	}
}

class Animal {
	constructor(howMany) {
		this.howMany = howMany;
		this.energy = 0;
	}

	randomAct() {
		const random = Math.floor(Math.random() * 3) + 1;
		// console.log('randomAct; random ', random);
		switch (random) {
			case 1:
				this.makeSound();
				break;
			case 2:
				this.eatFood();
				break;
			case 3:
			default:
				this.sleep();
				break;
		}
	}

	makeSound() {
		console.log('Make sound');
		this.energy -= 3;
	}

	eatFood() {
		console.log('Eating ', selectFood(4));
		this.energy += 5;
	}

	sleep() {
		console.log('Sleep');
		this.energy += 10;
	}
}

class Tiger extends Animal {
	// constructor(howMany) {
	// 	super(howMany);
	// }

	sleep() {
		this.energy += 5;
	}

	eatFood() {
		console.log('Eating ', selectFood(3));
		this.energy += 5;
	}
}

class Monkey extends Animal {
	// constructor(howMany) {
	// 	super(howMany);
	// }

	makeSound() {
		console.log('Make sound');
		this.energy -= 4;
	}

	eatFood() {
		console.log('Eating ', selectFood(4));
		this.energy += 2;
	}

	play() {
		console.log('Play');
		if (this.energy >= 8) {
			this.energy -= 8;
			console.log('Oooo Oooo Oooo');
		} else {
			console.log('Monkey is too tired');
		}
	}

	randomAct() {
		const random = Math.floor(Math.random() * 4) + 1;
		// console.log('randomAct; random ', random);
		switch (random) {
			case 1:
				this.makeSound();
				break;
			case 2:
				this.eatFood();
				break;
			case 3:
				this.sleep();
				break;
			case 4:
			default:
				this.play();
				break;
		}
	}
}

class Snake extends Animal {}

class Jungle {
	constructor(tigers, monkies, snakes) {
		this.tigers = tigers;
		this.monkies = monkies;
		this.snakes = snakes;
	}

	soundOff() {
		this.tigers.makeSound();
		this.monkies.makeSound();
		this.snakes.makeSound();
	}

	test() {
		console.log('test; ', this.tigers, this.monkies, this.snakes);
	}
}

const tigers = new Tiger(3);
const monkies = new Monkey(10);
const snakes = new Snake(25);

const jungle = new Jungle(tigers, monkies, snakes);

// jungle.test();

// jungle.soundOff();

// jungle.test();

// monkies.play();
// monkies.eatFood();
// jungle.test();

// monkies.eatFood();
// monkies.eatFood();
// monkies.eatFood();
// jungle.test();
// monkies.play();
// jungle.test();

jungle.test();
monkies.randomAct();
jungle.test();
