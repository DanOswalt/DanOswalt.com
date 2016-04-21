
	$('#btn').on('click', function() {
		var insult = newInsult();
		$('.insult').removeClass('new-insult');
		$('#insult-list').prepend("<li class='insult new-insult'>" + insult + "</li>");
		$('.new-insult').hide().text(insult).fadeIn(1000);
	});

	function newInsult() {
		var adjective = [
							"Stupid",
							"Little",
							"Yellow",
							"Stinky",
							"Smelly",
							"Dumb",
							"Crazy",
							"Old",
							"Wierd",
							"Infertile",
							"Dead-eyed",
							"Fat",
							"Funky",
							"Giant",
							"Generous",
							"Happy",
							"Jumpy",
							'Horrifying',
							'Terrible',
							'Ridiculous',
							'Simple',
							'Convoluted',
							'Cranky',
							'skanky', 
							'indolent',
							'interminable', 
							'abominable', 
							'abhorrent',
							'bigheaded', 
							'bilious', 
							'bitter', 
							'calculating', 
							'cantankerous', 
							'conceited', 
							'namby-pamby', 
							'gutless', 
							'smutty', 
							'vile', 
							'lousy', 
							'grotty', 
							'crude', 
							'uncouth', 
							'disgusting', 
							'revolting', 
							'wicked', 
							'despicable', 
							'sinister',
							'lazy', 
							'nasty', 
							'obnoxious', 
							'spoiled', 
							'vulgar', 
							'careless', 
							'dull', 
							'ignorant',
							'insensitive', 
							'repugnant', 
							'gross', 
							'nauseating',
							'incorrigible',
							'detestable',
							'silly',
							'fussy',
							'imperious',
							'infuriating',
							'fribbling',
							'frivolous',
							'ugly', 
							'clumsy', 
							'ratty',
							'crazy', 
							'nasty', 
							'robust', 
							'fat', 
							'nutty', 
							'scrawny',
							'odd', 
							'stingy', 
							'strange', 
							'grumpy', 
							'spotty', 
							'prickly', 
							'Foul-Smelling', 
							'Boring', 
							'Evil',  
							'Creepy', 
							'Annoying',
							'sorry',
							'pumpkin-pie hair-cutted',
							'shameless'
					];

		var noun = [
							"Face",
							"Butt",
							"Monkey",
							"Dog",
							"Cat",
							"Banana",
							"Head",
							"bastard",
							"jerk",
							"fart",
							"boob",
							"man",
							"dude",
							"guy",
							"lady",
							"woman",
							"boy",
							"girl",
							"girlie",
							"lady",
							"chick",
							"broad",
							"jerkwad",
							"lad",
							"lass",
							'dingbat',
							'doofus',
							'goofball',
							'butternut',
							'spittoon',
							'gazebo',
							'hoss',
							'chap',
							'chief',
							'sonofabitch',
							'donkey',
							'sport',
							'goldfish',
							'potato',
							'hot potato',
							'worm',
							'leach',
							'nerd',
							'butterball',
							'turkey',
							'geek',
							'wierdo',
							'pukespot',
							'pile of barf',
							'barfstain',
							'freak',
							'doorstop',
							'doorknob',
							'scum',
							'taco',
							'pile of crap',
							'queen',
							'flea',
							'fruitcake',
							'punk',
							'baby',
							'blanket'



		];

		var form = [
						['adj','noun'],
						['adj','adj','noun'],
						['adj','noun','noun']
		];

		var choice = randNum(0,form.length - 1)
		var formChoice = form[choice];
		var insultBegin = "";
		var insult = "";

		for(var word = 0; word < formChoice.length; word++) {
			if(formChoice[word] === 'adj') {
				choice = randNum(0,adjective.length - 1)
				insult += capitalise(adjective[choice]) + " ";
			} else {
				choice = randNum(0,noun.length - 1);
				insult += capitalise(noun[choice]) + " ";
			} 
		}

		insult = capitalise(insult);
		insult = insult.trim();

		insultBegin = getInsultBegin(insult);

		return insultBegin + insult;

	}

	function randNum(min,max) {
	    return Math.floor(Math.random()*(max-min+1)+min);	    
	}

	function isEven(n) {
	   return isNumber(n) && (n % 2 == 0);
	}

	function capitalise(string) {
	    return string.charAt(0).toUpperCase() + string.slice(1);
	}

	function getInsultBegin(insult) {

		var fstChar = insult.charAt(0)

		if(fstChar === 'A' ||
		   fstChar === 'E' ||
		   fstChar === 'I' ||
		   fstChar === 'O' ||
		   fstChar === 'U') {
			return "You're an ";
		} else {
			return "You're a ";
		}
	}