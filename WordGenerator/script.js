
	$('#btn').on('click', function() {
		var word = newWord();
		$('.word').removeClass('new-word');
		$('#word-list').prepend("<li class='word new-word'>" + word + "</li>");
		$('.new-word').hide().text(word).fadeIn(1000);

		var phrases = [
						"Nice! Do it again!",
						"Hit me!",
						"We can do better than that",
						"Very nice. Another?",
						"How about another?",
						"Great word. Again?"
		];
		var index = randNum(0, phrases.length);
		$(this).text(phrases[index]);
	});

	function newWord() {
	   
	   var chars = randNum(3,8);
	   var pattern = randNum(0,2);
	   var word;
	   
	   var vowels = ['a','a','a','a','a','a','a','a','a','a',
	                 'e','e','e','e','e','e','e','e','e','e',
	                 'o','o','o','o','o','o','o','o','o','o',
	                 'i','i','i','i','i','u','u','u','u','u',
	                 'ae','ai','au','aa','ea','ee','ei','eu','ia','ie',
	                 'io','ua','ue','ui','uo','eau','oa','oi','ou','ea'
	                ];
	   
	   var first_conson = ['B','C','D','F','G','H','J','K','L','M',
	                       'N','N','P','Q','R','S','T','V','W','X',
	                       'Y','Z','Ch','Sh','Ph','Th','Sh','Str','Sk','Sp',
	                       'Kr','Kl','Qu','Fr','Bl','Pl','Tr','Tw','Dr','Br',
	                       'Gh','Gr','Gl','Pr','Zh','Fl','Cl','Cr','Chr','Spr',
	                       'R','S','T','L','N','R','S','T','L','N'
	                      ];
	                      
	   var other_conson = ['b','c','d','f','g','h','j','k','l','m',
	                       'n','n','p','q','r','s','t','u','v','x',
	                       'y','z','ch','sh','ph','th','st','str','sk','sp',
	                       'ss','tt','qu','mm','nn','gg','tr','rt','lt','ft',
	                       'gh','rg','dd','rp','ll','ck','rf','cr','chr','spr',
	                       'r','s','t','l','n','r','s','t','l','n'
	                      ];

	   if(pattern < 2 ) {
	       
	       word = first_conson[randNum(0,59)] + 
	                  vowels[randNum(0,59)] +
	                  other_conson[randNum(0,59)] +
	                  vowels[randNum(0,59)] +
	                  other_conson[randNum(0,59)];
	       
	    } else {
	       word = vowels[randNum(0,59)] +
	                  other_conson[randNum(0,59)] +
	                  vowels[randNum(0,59)] +
	                  other_conson[randNum(0,59)]
	                  vowels[randNum(0,59)];
	       word = capitalise(word);
	    }
	   
	    word = word.substr(0,chars);
	    
	    return word;
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