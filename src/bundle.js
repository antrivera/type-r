/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	const GameView = __webpack_require__(5);

	document.addEventListener('DOMContentLoaded', () => {
	  const canvas = document.getElementById('canvas');
	  let ctx = canvas.getContext('2d');
	  let game = new Game();
	  let gv = new GameView(game, ctx);
	  gv.start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const EnemyShip = __webpack_require__(2);
	const PlayerShip = __webpack_require__(3);
	const randomWords = __webpack_require__(4);

	function Game() {
	  this.x_dim = 500;
	  this.y_dim = 620;
	  this.NUM_ENEMY_SHIPS = 2;
	  this.enemyShips = [];
	  this.starField = new Image();
	  this.starField.src = './src/starfield.jpg';
	  this.background_y = 0;
	  this.background_y2 = -700;

	  this.titleScreen = true;
	  this.round2 = false;
	  this.score = '0';

	  this.playerShip = new PlayerShip();

	  document.addEventListener("keydown", this.fire(this.enemyShips), false);
	}

	Game.prototype.getRandomWord = function () {
	  return randomWords();
	};

	Game.prototype.tick = function () {
	  if (!this.titleScreen && this.enemyShips.length < 2) {
	    this.addEnemyShips();
	  }

	  if (this.score > 1000 && !this.round2) {
	    this.NUM_ENEMY_SHIPS++;
	    this.addEnemyShips();
	    this.round2 = true;
	  }

	  this.moveObjects();
	};

	Game.prototype.draw = function (ctx) {
	  ctx.clearRect(0, 0, this.x_dim, this.y_dim);
	  this.drawBackground(ctx);

	  if (this.titleScreen) {
	    ctx.fillStyle = 'white';
	    ctx.font = "bold " + 72 + "px VT323";
	    ctx.fillText("Type-R", 250, 250);
	    ctx.font = 32 + "px VT323";
	    ctx.fillText("War on Words", 270, 300);
	    ctx.font = 20 + "px VT323";
	    ctx.fillText("Press [Enter] to Start", 260, 350);
	  } else {
	    ctx.font = "bold " + 20 + "px VT323";
	    ctx.fillText("Score: " + this.score, 25, 25);
	  }

	  this.playerShip.draw(ctx);
	  this.enemyShips.forEach(ship => ship.draw(ctx));
	};

	Game.prototype.moveObjects = function () {
	  this.enemyShips.forEach(ship => ship.move());
	};

	Game.prototype.addEnemyShips = function () {
	  while (this.enemyShips.length < this.NUM_ENEMY_SHIPS) {
	    let enemyShip = new EnemyShip({
	      pos: [this.randomPosition(), 10],
	      vel: [0, 2],
	      game: this,
	      word: this.getRandomWord()
	    });
	    this.enemyShips.push(enemyShip);
	  }
	};

	Game.prototype.drawBackground = function (ctx) {
	  ctx.drawImage(this.starField, 0, this.background_y, 500, 700);
	  ctx.drawImage(this.starField, 0, this.background_y2, 500, 700);

	  if (this.background_y > 700) {
	    this.background_y = -699;
	  }
	  if (this.background_y2 > 700) {
	    this.background_y2 = -699;
	  }

	  this.background_y += 1;
	  this.background_y2 += 1;
	};

	Game.prototype.randomPosition = function () {
	  let x_pos = Math.random() * (this.x_dim - 59);
	  return x_pos;
	};

	Game.prototype.fire = function (ships) {
	  return (e) => {
	    switch (e.keyCode) {
	      case 13:
	        if (this.titleScreen) {
	          this.titleScreen = false;
	        }
	        break;
	      case 8:
	        this.playerShip.target = null;
	      case 65:
	        this.playerShip.fire(ships, 'a')
	        break;
	      case 66:
	        this.playerShip.fire(ships, 'b');
	        break;
	      case 67:
	        this.playerShip.fire(ships, 'c');
	        break;
	      case 68:
	        this.playerShip.fire(ships, 'd');
	        break;
	      case 69:
	        this.playerShip.fire(ships, 'e');
	        break;
	      case 70:
	        this.playerShip.fire(ships, 'f');
	        break;
	      case 71:
	        this.playerShip.fire(ships, 'g');
	        break;
	      case 72:
	        this.playerShip.fire(ships, 'h');
	        break;
	      case 73:
	        this.playerShip.fire(ships, 'i');
	        break;
	      case 74:
	        this.playerShip.fire(ships, 'j');
	        break;
	      case 75:
	        this.playerShip.fire(ships, 'k');
	        break;
	      case 76:
	        this.playerShip.fire(ships, 'l');
	        break;
	      case 77:
	        this.playerShip.fire(ships, 'm');
	        break;
	      case 78:
	        this.playerShip.fire(ships, 'n');
	        break;
	      case 79:
	        this.playerShip.fire(ships, 'o');
	        break;
	      case 80:
	        this.playerShip.fire(ships, 'p');
	        break;
	      case 81:
	        this.playerShip.fire(ships, 'q');
	        break;
	      case 82:
	        this.playerShip.fire(ships, 'r');
	        break;
	      case 83:
	        this.playerShip.fire(ships, 's');
	        break;
	      case 84:
	        this.playerShip.fire(ships, 't');
	        break;
	      case 85:
	        this.playerShip.fire(ships, 'u');
	        break;
	      case 86:
	        this.playerShip.fire(ships, 'v');
	        break;
	      case 87:
	        this.playerShip.fire(ships, 'w');
	        break;
	      case 88:
	        this.playerShip.fire(ships, 'x');
	        break;
	      case 89:
	        this.playerShip.fire(ships, 'y');
	        break;
	      case 90:
	        this.playerShip.fire(ships, 'z');
	        break;
	      default:
	        console.log(e.keyCode);
	    }
	  }
	};


	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function EnemyShip(options) {
	  this.pos = options.pos;
	  this.vel = options.vel;
	  this.game = options.game;
	  this.word = options.word;
	  this.health = this.word.length;
	  this.img = new Image();
	  this.img.src = './src/ufo.png';
	}

	EnemyShip.prototype.move = function () {
	  this.pos[0] += this.pos[0] < 250 ? 0.50 : -0.50;
	  this.pos[1] += this.vel[1];

	  if (this.pos[1] + 60 > this.game.y_dim) {
	    this.pos[0] = this.game.randomPosition();
	    this.pos[1] = -10;
	  }
	};

	EnemyShip.prototype.draw = function (ctx) {
	  if (!this.word.length) {
	    this.pos[0] = this.game.randomPosition();
	    this.pos[1] = -80;
	    this.word = this.game.getRandomWord();
	  }

	  ctx.drawImage(this.img, 10, 10, 59, 59, this.pos[0], this.pos[1], 59, 59);
	  ctx.fillStyle = 'white';
	  ctx.font = "bold " + 20 + "px VT323";
	  ctx.fillText(this.word, this.pos[0], this.pos[1] + 80, 50);
	};

	EnemyShip.prototype.hit = function (letter, target) {
	  if ((target === this || target === null) && this.word[0] === letter) {
	    this.word = this.word.slice(1);
	    this.pos[1] -= 8;

	    let intScore = parseInt(this.game.score, 10);
	    intScore += 10;
	    this.game.score = intScore.toString();

	    if (this.word.length === 0) {
	      intScore += 100;
	      this.game.score = intScore.toString();

	      let explosion = document.getElementById('explosion').cloneNode();
	      explosion.play();
	      return false;
	    }

	    return true;
	  }

	  return false;
	};

	module.exports = EnemyShip;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function PlayerShip() {
	  this.img = new Image();
	  this.laser_img = new Image();
	  this.laser_img.src = './src/laser.png';
	  this.img.src = './src/ship.png';
	  this.angle = 0;
	  this.x_pos = 250;
	  this.y_pos = 550;
	  this.target = null;
	  this.laserPos = [250, -60];
	  this.laserVel = [1, -30];
	}

	PlayerShip.prototype.draw = function (ctx) {
	  ctx.save();
	  ctx.translate(250, 550);
	  ctx.rotate(this.angle * Math.PI);
	  ctx.translate(-250, 0);
	  ctx.drawImage(this.img, this.x_pos, 0, 36, 24);
	  ctx.restore();

	  this.drawLaser(ctx, this.angle);
	};

	PlayerShip.prototype.drawLaser = function (ctx, angle) {
	  ctx.save();
	  ctx.translate(250, 550);
	  ctx.rotate(this.angle * Math.PI);
	  ctx.translate(-250, 0);
	  this.laserPos[1] += this.laserVel[1];
	  ctx.drawImage(this.laser_img, this.x_pos, this.laserPos[1], 36, 72);
	  ctx.restore();
	};

	PlayerShip.prototype.fire = function (ships, letter) {
	  ships.forEach(ship => {
	    if (ship.hit(letter, this.target)) {
	      this.target = ship;

	      let x_len;
	      if (Math.abs(ship.pos[0] - 250) <= 4) {
	        x_len = 0;
	      } else {
	        x_len = ship.pos[0] > 250 ? (ship.pos[0] - 250) : -(250 - ship.pos[0]);
	      }
	      let y_len = 1100 - (ship.pos[1]);
	      this.angle = Math.atan(x_len/y_len);

	      this.laserPos[1] = -60;
	      let laser = document.getElementById('laser').cloneNode();
	      laser.play();
	    } else {
	      this.target = null;
	      let miss = document.getElementById('miss').cloneNode();
	      miss.play();
	    }
	  });
	};

	module.exports = PlayerShip;


/***/ },
/* 4 */
/***/ function(module, exports) {

	var wordList = [
	  // Borrowed from xkcd password generator which borrowed it from wherever
	  "ability","able","aboard","about","above","accept","accident","according",
	  "account","accurate","acres","across","act","action","active","activity",
	  "actual","actually","add","addition","additional","adjective","adult","adventure",
	  "advice","affect","afraid","after","afternoon","again","against","age",
	  "ago","agree","ahead","aid","air","airplane","alike","alive",
	  "all","allow","almost","alone","along","aloud","alphabet","already",
	  "also","although","am","among","amount","ancient","angle","angry",
	  "animal","announced","another","answer","ants","any","anybody","anyone",
	  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
	  "appropriate","are","area","arm","army","around","arrange","arrangement",
	  "arrive","arrow","art","article","as","aside","ask","asleep",
	  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
	  "attention","audience","author","automobile","available","average","avoid","aware",
	  "away","baby","back","bad","badly","bag","balance","ball",
	  "balloon","band","bank","bar","bare","bark","barn","base",
	  "baseball","basic","basis","basket","bat","battle","be","bean",
	  "bear","beat","beautiful","beauty","became","because","become","becoming",
	  "bee","been","before","began","beginning","begun","behavior","behind",
	  "being","believed","bell","belong","below","belt","bend","beneath",
	  "bent","beside","best","bet","better","between","beyond","bicycle",
	  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
	  "black","blank","blanket","blew","blind","block","blood","blow",
	  "blue","board","boat","body","bone","book","border","born",
	  "both","bottle","bottom","bound","bow","bowl","box","boy",
	  "brain","branch","brass","brave","bread","break","breakfast","breath",
	  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
	  "broad","broke","broken","brother","brought","brown","brush","buffalo",
	  "build","building","built","buried","burn","burst","bus","bush",
	  "business","busy","but","butter","buy","by","cabin","cage",
	  "cake","call","calm","came","camera","camp","can","canal",
	  "cannot","cap","capital","captain","captured","car","carbon","card",
	  "care","careful","carefully","carried","carry","case","cast","castle",
	  "cat","catch","cattle","caught","cause","cave","cell","cent",
	  "center","central","century","certain","certainly","chain","chair","chamber",
	  "chance","change","changing","chapter","character","characteristic","charge","chart",
	  "check","cheese","chemical","chest","chicken","chief","child","children",
	  "choice","choose","chose","chosen","church","circle","circus","citizen",
	  "city","class","classroom","claws","clay","clean","clear","clearly",
	  "climate","climb","clock","close","closely","closer","cloth","clothes",
	  "clothing","cloud","club","coach","coal","coast","coat","coffee",
	  "cold","collect","college","colony","color","column","combination","combine",
	  "come","comfortable","coming","command","common","community","company","compare",
	  "compass","complete","completely","complex","composed","composition","compound","concerned",
	  "condition","congress","connected","consider","consist","consonant","constantly","construction",
	  "contain","continent","continued","contrast","control","conversation","cook","cookies",
	  "cool","copper","copy","corn","corner","correct","correctly","cost",
	  "cotton","could","count","country","couple","courage","course","court",
	  "cover","cow","cowboy","crack","cream","create","creature","crew",
	  "crop","cross","crowd","cry","cup","curious","current","curve",
	  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
	  "dark","darkness","date","daughter","dawn","day","dead","deal",
	  "dear","death","decide","declared","deep","deeply","deer","definition",
	  "degree","depend","depth","describe","desert","design","desk","detail",
	  "determine","develop","development","diagram","diameter","did","die","differ",
	  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
	  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
	  "disease","dish","distance","distant","divide","division","do","doctor",
	  "does","dog","doing","doll","dollar","done","donkey","door",
	  "dot","double","doubt","down","dozen","draw","drawn","dream",
	  "dress","drew","dried","drink","drive","driven","driver","driving",
	  "drop","dropped","drove","dry","duck","due","dug","dull",
	  "during","dust","duty","each","eager","ear","earlier","early",
	  "earn","earth","easier","easily","east","easy","eat","eaten",
	  "edge","education","effect","effort","egg","eight","either","electric",
	  "electricity","element","elephant","eleven","else","empty","end","enemy",
	  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
	  "environment","equal","equally","equator","equipment","escape","especially","essential",
	  "establish","even","evening","event","eventually","ever","every","everybody",
	  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
	  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
	  "exist","expect","experience","experiment","explain","explanation","explore","express",
	  "expression","extra","eye","face","facing","fact","factor","factory",
	  "failed","fair","fairly","fall","fallen","familiar","family","famous",
	  "far","farm","farmer","farther","fast","fastened","faster","fat",
	  "father","favorite","fear","feathers","feature","fed","feed","feel",
	  "feet","fell","fellow","felt","fence","few","fewer","field",
	  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
	  "film","final","finally","find","fine","finest","finger","finish",
	  "fire","fireplace","firm","first","fish","five","fix","flag",
	  "flame","flat","flew","flies","flight","floating","floor","flow",
	  "flower","fly","fog","folks","follow","food","foot","football",
	  "for","force","foreign","forest","forget","forgot","forgotten","form",
	  "former","fort","forth","forty","forward","fought","found","four",
	  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
	  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
	  "full","fully","fun","function","funny","fur","furniture","further",
	  "future","gain","game","garage","garden","gas","gasoline","gate",
	  "gather","gave","general","generally","gentle","gently","get","getting",
	  "giant","gift","girl","give","given","giving","glad","glass",
	  "globe","go","goes","gold","golden","gone","good","goose",
	  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
	  "graph","grass","gravity","gray","great","greater","greatest","greatly",
	  "green","grew","ground","group","grow","grown","growth","guard",
	  "guess","guide","gulf","gun","habit","had","hair","half",
	  "halfway","hall","hand","handle","handsome","hang","happen","happened",
	  "happily","happy","harbor","hard","harder","hardly","has","hat",
	  "have","having","hay","he","headed","heading","health","heard",
	  "hearing","heart","heat","heavy","height","held","hello","help",
	  "helpful","her","herd","here","herself","hidden","hide","high",
	  "higher","highest","highway","hill","him","himself","his","history",
	  "hit","hold","hole","hollow","home","honor","hope","horn",
	  "horse","hospital","hot","hour","house","how","however","huge",
	  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
	  "hurt","husband","ice","idea","identity","if","ill","image",
	  "imagine","immediately","importance","important","impossible","improve","in","inch",
	  "include","including","income","increase","indeed","independent","indicate","individual",
	  "industrial","industry","influence","information","inside","instance","instant","instead",
	  "instrument","interest","interior","into","introduced","invented","involved","iron",
	  "is","island","it","its","itself","jack","jar","jet",
	  "job","join","joined","journey","joy","judge","jump","jungle",
	  "just","keep","kept","key","kids","kill","kind","kitchen",
	  "knew","knife","know","knowledge","known","label","labor","lack",
	  "lady","laid","lake","lamp","land","language","large","larger",
	  "largest","last","late","later","laugh","law","lay","layers",
	  "lead","leader","leaf","learn","least","leather","leave","leaving",
	  "led","left","leg","length","lesson","let","letter","level",
	  "library","lie","life","lift","light","like","likely","limited",
	  "line","lion","lips","liquid","list","listen","little","live",
	  "living","load","local","locate","location","log","lonely","long",
	  "longer","look","loose","lose","loss","lost","lot","loud",
	  "love","lovely","low","lower","luck","lucky","lunch","lungs",
	  "lying","machine","machinery","mad","made","magic","magnet","mail",
	  "main","mainly","major","make","making","man","managed","manner",
	  "manufacturing","many","map","mark","market","married","mass","massage",
	  "master","material","mathematics","matter","may","maybe","me","meal",
	  "mean","means","meant","measure","meat","medicine","meet","melted",
	  "member","memory","men","mental","merely","met","metal","method",
	  "mice","middle","might","mighty","mile","military","milk","mill",
	  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
	  "mix","mixture","model","modern","molecular","moment","money","monkey",
	  "month","mood","moon","more","morning","most","mostly","mother",
	  "motion","motor","mountain","mouse","mouth","move","movement","movie",
	  "moving","mud","muscle","music","musical","must","my","myself",
	  "mysterious","nails","name","nation","national","native","natural","naturally",
	  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
	  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
	  "never","new","news","newspaper","next","nice","night","nine",
	  "no","nobody","nodded","noise","none","noon","nor","north",
	  "nose","not","note","noted","nothing","notice","noun","now",
	  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
	  "ocean","of","off","offer","office","officer","official","oil",
	  "old","older","oldest","on","once","one","only","onto",
	  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
	  "order","ordinary","organization","organized","origin","original","other","ought",
	  "our","ourselves","out","outer","outline","outside","over","own",
	  "owner","oxygen","pack","package","page","paid","pain","paint",
	  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
	  "park","part","particles","particular","particularly","partly","parts","party",
	  "pass","passage","past","path","pattern","pay","peace","pen",
	  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
	  "person","personal","pet","phrase","physical","piano","pick","picture",
	  "pictured","pie","piece","pig","pile","pilot","pine","pink",
	  "pipe","pitch","place","plain","plan","plane","planet","planned",
	  "planning","plant","plastic","plate","plates","play","pleasant","please",
	  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
	  "point","pole","police","policeman","political","pond","pony","pool",
	  "poor","popular","population","porch","port","position","positive","possible",
	  "possibly","post","pot","potatoes","pound","pour","powder","power",
	  "powerful","practical","practice","prepare","present","president","press","pressure",
	  "pretty","prevent","previous","price","pride","primitive","principal","principle",
	  "printed","private","prize","probably","problem","process","produce","product",
	  "production","program","progress","promised","proper","properly","property","protection",
	  "proud","prove","provide","public","pull","pupil","pure","purple",
	  "purpose","push","put","putting","quarter","queen","question","quick",
	  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
	  "rain","raise","ran","ranch","range","rapidly","rate","rather",
	  "raw","rays","reach","read","reader","ready","real","realize",
	  "rear","reason","recall","receive","recent","recently","recognize","record",
	  "red","refer","refused","region","regular","related","relationship","religious",
	  "remain","remarkable","remember","remove","repeat","replace","replied","report",
	  "represent","require","research","respect","rest","result","return","review",
	  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
	  "rise","rising","river","road","roar","rock","rocket","rocky",
	  "rod","roll","roof","room","root","rope","rose","rough",
	  "round","route","row","rubbed","rubber","rule","ruler","run",
	  "running","rush","sad","saddle","safe","safety","said","sail",
	  "sale","salmon","salt","same","sand","sang","sat","satellites",
	  "satisfied","save","saved","saw","say","scale","scared","scene",
	  "school","science","scientific","scientist","score","screen","sea","search",
	  "season","seat","second","secret","section","see","seed","seeing",
	  "seems","seen","seldom","select","selection","sell","send","sense",
	  "sent","sentence","separate","series","serious","serve","service","sets",
	  "setting","settle","settlers","seven","several","shade","shadow","shake",
	  "shaking","shall","shallow","shape","share","sharp","she","sheep",
	  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
	  "shoe","shoot","shop","shore","short","shorter","shot","should",
	  "shoulder","shout","show","shown","shut","sick","sides","sight",
	  "sign","signal","silence","silent","silk","silly","silver","similar",
	  "simple","simplest","simply","since","sing","single","sink","sister",
	  "sit","sitting","situation","six","size","skill","skin","sky",
	  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
	  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
	  "smile","smoke","smooth","snake","snow","so","soap","social",
	  "society","soft","softly","soil","solar","sold","soldier","solid",
	  "solution","solve","some","somebody","somehow","someone","something","sometime",
	  "somewhere","son","song","soon","sort","sound","source","south",
	  "southern","space","speak","special","species","specific","speech","speed",
	  "spell","spend","spent","spider","spin","spirit","spite","split",
	  "spoken","sport","spread","spring","square","stage","stairs","stand",
	  "standard","star","stared","start","state","statement","station","stay",
	  "steady","steam","steel","steep","stems","step","stepped","stick",
	  "stiff","still","stock","stomach","stone","stood","stop","stopped",
	  "store","storm","story","stove","straight","strange","stranger","straw",
	  "stream","street","strength","stretch","strike","string","strip","strong",
	  "stronger","struck","structure","struggle","stuck","student","studied","studying",
	  "subject","substance","success","successful","such","sudden","suddenly","sugar",
	  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
	  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
	  "swept","swim","swimming","swing","swung","syllable","symbol","system",
	  "table","tail","take","taken","tales","talk","tall","tank",
	  "tape","task","taste","taught","tax","tea","teach","teacher",
	  "team","tears","teeth","telephone","television","tell","temperature","ten",
	  "tent","term","terrible","test","than","thank","that","thee",
	  "them","themselves","then","theory","there","therefore","these","they",
	  "thick","thin","thing","think","third","thirty","this","those",
	  "thou","though","thought","thousand","thread","three","threw","throat",
	  "through","throughout","throw","thrown","thumb","thus","thy","tide",
	  "tie","tight","tightly","till","time","tin","tiny","tip",
	  "tired","title","to","tobacco","today","together","told","tomorrow",
	  "tone","tongue","tonight","too","took","tool","top","topic",
	  "torn","total","touch","toward","tower","town","toy","trace",
	  "track","trade","traffic","trail","train","transportation","trap","travel",
	  "treated","tree","triangle","tribe","trick","tried","trip","troops",
	  "tropical","trouble","truck","trunk","truth","try","tube","tune",
	  "turn","twelve","twenty","twice","two","type","typical","uncle",
	  "under","underline","understanding","unhappy","union","unit","universe","unknown",
	  "unless","until","unusual","up","upon","upper","upward","us",
	  "use","useful","using","usual","usually","valley","valuable","value",
	  "vapor","variety","various","vast","vegetable","verb","vertical","very",
	  "vessels","victory","view","village","visit","visitor","voice","volume",
	  "vote","vowel","voyage","wagon","wait","walk","wall","want",
	  "war","warm","warn","was","wash","waste","watch","water",
	  "wave","way","we","weak","wealth","wear","weather","week",
	  "weigh","weight","welcome","well","went","were","west","western",
	  "wet","whale","what","whatever","wheat","wheel","when","whenever",
	  "where","wherever","whether","which","while","whispered","whistle","white",
	  "who","whole","whom","whose","why","wide","widely","wife",
	  "wild","will","willing","win","wind","window","wing","winter",
	  "wire","wise","wish","with","within","without","wolf","women",
	  "won","wonder","wonderful","wood","wooden","wool","word","wore",
	  "work","worker","world","worried","worry","worse","worth","would",
	  "wrapped","write","writer","writing","written","wrong","wrote","yard",
	  "year","yellow","yes","yesterday","yet","you","young","younger",
	  "your","yourself","youth","zero","zoo"
	];

	function words(options) {
	  function word() {
	    return wordList[randInt(wordList.length)];
	  }

	  function randInt(lessThan) {
	    return Math.floor(Math.random() * lessThan);
	  }

	  // No arguments = generate one word
	  if (typeof(options) === 'undefined') {
	    return word();
	  }

	  // Just a number = return that many words
	  if (typeof(options) === 'number') {
	    options = { exactly: options };
	  }

	  // options supported: exactly, min, max, join

	  if (options.exactly) {
	    options.min = options.exactly;
	    options.max = options.exactly;
	  }
	  var total = options.min + randInt(options.max + 1 - options.min);
	  var results = [];
	  for (var i = 0; (i < total); i++) {
	    results.push(word());
	  }
	  if (options.join) {
	    results = results.join(options.join);
	  }
	  return results;
	}

	module.exports = words;
	// Export the word list as it is often useful
	words.wordList = wordList;



/***/ },
/* 5 */
/***/ function(module, exports) {

	function GameView(game, ctx) {
	  this.game = game;
	  this.ctx = ctx;
	}

	GameView.prototype.start = function () {
	  setInterval(() => {
	    this.game.tick();
	    this.game.draw(this.ctx);
	  }, 20);
	};

	module.exports = GameView;


/***/ }
/******/ ]);