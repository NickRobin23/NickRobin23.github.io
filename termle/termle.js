// List of valid words
let validWords = [  "abide", "about", "above", "abuse", "actor", "acute", "admit", "adopt", "adult", "after",
"agent", "agile", "agony", "ahead", "alarm", "album", "alien", "alike", "alive", "allow",
"alone", "along", "alter", "amber", "ample", "angel", "anger", "angle", "angry", "ankle",
"annoy", "apart", "apple", "apply", "arena", "argue", "arise", "armed", "arrow", "aside",
"asset", "atlas", "attic", "audio", "audit", "auger", "aural", "avoid", "await", "awake",
"award", "awful", "bacon", "badge", "bagel", "baker", "balmy", "banjo", "banks", "barge",
"basic", "basin", "bathe", "beach", "beard", "beast", "beats", "beech", "belly", "below",
"bench", "berry", "berth", "beset", "betty", "bevel", "bible", "biker", "bingo", "birch",
"birds", "birth", "bison", "black", "blade", "blame", "bland", "blank", "blast", "blaze",
"bleak", "blend", "bless", "blimp", "blind", "bliss", "block", "blond", "blood", "bloom",
"bluff", "blunt", "blush", "board", "boast", "boils", "bonds", "bones", "bonus", "books",
"boost", "booth", "bored", "borne", "bound", "bowed", "braid", "brake", "brave", "brawl",
"brawn", "bread", "break", "breed", "bribe", "brick", "bride", "brief", "brink", "broad",
"broke", "bronx", "brood", "brook", "broom", "brown", "bruin", "brush", "brute", "bucks",
"build", "bulbs", "bulge", "bully", "bunch", "burly", "burns", "burnt", "burro", "burst",
"buses", "busts", "busty", "butch", "buxom", "buyer", "cabin", "cable", "cache", "cadet",
"caged", "cages", "caked", "cakes", "calfs", "calls", "calms", "camel", "canal", "candy",
"canoe", "cards", "cargo", "carol", "carry", "carve", "cases", "caste", "catch", "cause",
"caves", "cease", "cedar", "celeb", "cellar", "cello", "cents", "chain", "chair", "chalk",
"champ", "chant", "chaos", "charm", "chart", "chase", "cheap", "cheat", "check", "cheek",
"cheer", "chefs", "chess", "chest", "chick", "chief", "child", "chill", "chimp", "china",
"chips", "chirp", "choir", "choke", "chomp", "chops", "chord", "chore", "chose", "chunk",
"churn", "chute", "cider", "cinch", "circa", "civic", "civil", "claim", "clams", "clamp",
"clans", "clash", "clasp", "class", "clean", "clear", "clerk", "click", "cliff", "climb",
"cling", "cloak", "clock", "clone", "close", "cloth", "cloud", "clown", "clubs", "cluck",
"clump", "clung", "coach", "coast", "coats", "cobra", "cocoa", "coils", "coins", "colas",
"colin", "color", "combs", "comet", "comic", "comma", "comps", "conch", "conga", "cooks",
"cooky", "cooly", "coops", "copes", "cords", "cored", "cores", "corks", "corky", "costs",
"couch", "cough", "could", "count", "coupe", "court", "cover", "cowed", "cower", "coyly",
"coyot", "crabs", "crack", "craft", "cramp", "crane", "crank", "crash", "crate", "crawl",
"crazy", "creak", "cream", "creed", "creek", "creep", "crepe", "crept", "cribs", "crick",
"crime", "crisp", "croak", "crock", "crook", "croon", "cross", "crowd", "crown", "crows",
"crumb", "crush", "crust", "crypt", "cuban", "cubic", "cuffs", "cumin", "cupid", "curet",
"cured", "curry", "curve", "cushy", "cuter", "cutie", "cycle", "cynic", "dairy", "dance",
"dandy", "dared", "dares", "darts", "dated", "dates", "daunt", "david", "dawns", "dealt",
"death", "debit", "debit", "debts", "debug", "debug", "decaf", "decay", "decks", "decoy",
"decry", "defer", "deity", "delay", "delta", "demon", "dense", "dents", "depth", "derby",
"deuce", "devil", "devon", "dials", "diary", "diced", "dices", "dicks", "dicky", "dicta",
"didnt", "diego", "diesel", "dimes", "dimly", "dinar", "dined", "diner", "dingo", "dingy",
"dinky", "dints", "diode", "dirge", "dirty", "disco", "ditch", "ditto", "diver", "divot",
"dobro", "docks", "dodge", "dodgy", "doing", "dolls", "dolly", "dolts", "domed", "donor",
"donut", "doors", "doped", "dopes", "dopey", "dorks", "dorky", "dorms", "dosed", "doses",
"doter", "dotty", "doubt", "dough", "douse", "doves", "dozen", "draft", "drags", "drain",
"drake", "drama", "drank", "drape", "drawl", "drawn", "dread", "dream", "dregs", "dress",
"dried", "drier", "dries", "drift", "drill", "drily", "drink", "drips", "drive", "droop",
"drops", "drove", "drown", "drugs", "druid", "drums", "drunk", "dryer", "duals", "ducks",
"ducts", "dukes", "dulls", "dumbo", "dummy", "dumps", "dumpy", "dunks", "dusts", "dusty",
"dutch", "dwarf", "dwell", "eager", "eagle", "earls", "early", "earth", "eased", "easel",
"eaten", "eater", "ebbed", "edgar", "edged", "edges", "edits", "egged", "eight", "eject",
"eking", "elbow", "elder", "elect", "elite", "elope", "elves", "embay", "embed", "ember",
"emery", "emits", "empty", "ended", "enema", "enjoy", "enrol", "enter", "entry", "envoy",
"envys", "epoch", "equal", "equip", "erect", "error", "erupt", "essay", "etched", "ether",
"ethic", "evade", "event", "every", "evict", "evoke", "exact", "exams", "excel", "exert",
"exile", "exist", "exits", "expel", "expos", "extra", "fable", "faced", "faces", "facet",
"facts", "faded", "fades", "faint", "fairs", "fairy", "faith", "falls", "false", "famed",
"fancy", "fangs", "fanny", "farce", "fared", "fares", "farms", "farts", "fasts", "fatal",
"fates", "fault", "fauna", "faves", "favor", "faxed", "faxes", "feast", "feeds", "feels",
"feign", "feint", "felon", "felts", "fence", "fends", "ferns", "ferry", "fetch", "fever",
"fewer", "fiber", "fifth", "fifty", "fight", "fille", "films", "filmy", "filth", "final",
"finch", "finds", "fined", "finer", "fines", "fired", "fires", "firms", "first", "firth",
"fishy", "fists", "fitly", "fiver", "fives", "fixed", "fixes", "fjord", "flack", "flags",
"flail", "flair", "flake", "flaky", "flame", "flank", "flaps", "flare", "flash", "flask",
"flats", "flaws", "flays", "fleas", "flees", "fleet", "flesh", "flick", "flies", "fling",
"flint", "flips", "flirt", "float", "flock", "flogs", "flood", "floor", "flops", "flora",
"floss", "flour", "flout", "flows", "flown", "flubs", "fluff", "fluid", "fluke", "flung",
"flunk", "flush", "flute", "flyer", "foamy", "focal", "focus", "foggy", "foils", "folds",
"folio", "folks", "folly", "fonts", "foods", "fools", "foots", "foray", "force", "fords",
"forge", "forgo", "forks", "forms", "forte", "forth", "forty", "forum", "fouls", "found",
"fount", "fours", "foxes", "foyer", "frail", "frame", "frank", "fraud", "frays", "freak",
"freed", "freer", "frees", "frets", "friar", "fried", "fries", "frisk", "frock", "frogs",
"frond", "front", "frost", "froth", "frown", "froze", "fruit", "fuels", "fully", "fumed",
"fumes", "funds", "fungi", "funny", "furls", "furor", "furry", "furys", "fused", "fuses",
"fussy", "futon", "fuzzy", "gains", "gait", "gavel", "gawk", "gays", "gear", "geckos",
"geese", "geez", "gelds", "genie", "genii", "genre", "geode", "germs", "ghats", "ghost",
"giant", "gifts", "gilds", "gills", "gilts", "gists", "given", "giver", "gives", "glade",
"glaze", "gleam", "glean", "glees", "glens", "glib", "glide", "glimp", "glint", "gloat",
"globe", "gloom", "glory", "gloss", "glove", "glows", "glued", "glues", "glyph", "gnash",
"gnats", "gnaws", "gnome", "goals", "goats", "godly", "goers", "gofer", "going", "golds",
"golem", "goner", "gongs", "goods", "goofs", "goofy", "goons", "goose", "gorge", "gorse",
"gouda", "gouge", "gourd", "grabs", "grace", "grade", "graft", "grail", "grain", "grams",
"grand", "grant", "grape", "graph", "grasp", "grass", "grate", "grave", "gravy", "graze",
"great", "grebe", "greed", "green", "greet", "grief", "grill", "grime", "grind", "grins",
"gripe", "grist", "grits", "groan", "groin", "groom", "grope", "gross", "group", "grout",
"grove", "growl", "grown", "grows", "grubs", "gruel", "gruff", "grump", "grunt", "guard",
"guess", "guest", "guide", "guild", "guilt", "gulch", "gulfs", "gulls", "gully", "gulp",
"gummy", "gunks", "gunky", "gurus", "gushy", "gusto", "gutsy", "gypsy", "habit", "hacks",
"haiku", "hails", "hairs", "hairy", "hallo", "halls", "halos", "halts", "hands", "handy",
"hangs", "hanks", "happy", "hardy", "harem", "harks", "harms", "harps", "harry", "harsh",
"harts", "haste", "hasty", "hatch", "hated", "hater", "hates", "hauls", "haunt", "haven",
"havoc", "hawks", "hayed", "hazel", "heads", "heady", "heals", "heaps", "heard", "hears",
"heart", "heats", "heave", "heavy", "hecks", "hedge", "heeds", "heels", "hefty", "heirs",
"hello", "hells", "helms", "helos", "helps", "hemps", "hence", "henry", "herbs", "herds",
"heron", "hertz", "hewed", "hicks", "hides", "highs", "hiked", "hiker", "hikes", "hills",
"hilly", "hilts", "hinds", "hints", "hires", "hitch", "hived", "hives", "hoagy", "hoard",
"hoary", "hobby", "hocus", "hodad", "hoist", "hoked", "hokes", "hokey", "holds", "holes",
"holey", "holly", "holms", "holts", "homes", "homie", "honed", "hones", "honey", "honks",
"honor", "hoods", "hooks", "hooky", "hoops", "hoots", "hoped", "hopes", "horas", "horde",
"horns", "horny", "horse", "hosed", "hoses", "hosts", "hotel", "hound", "hours", "house",
"hovel", "hover", "howdy", "howls", "hubby", "huffs", "huffy", "huger", "hulas", "hulks",
"hullo", "hulls", "human", "humid", "humor", "humps", "humpy", "humus", "hunch", "hunks",
"hunky", "hunts", "hurls", "hurry", "hurts", "husks", "husky", "hussy", "hutch", "hydra",
"hyena", "hymen", "hymns", "hyper", "ibex", "ibis", "icing", "icons", "ideal", "ideas",
"idiom", "idiot", "idled", "idler", "idles", "idols", "igloo", "ileum", "iliad", "image",
"imams", "imbed", "imbue", "impel", "imply", "inane", "inapt", "inbox", "incur", "index",
"india", "indie", "inept", "inert", "infer", "inflo", "infra", "ingot", "inked", "inlay",
"inlet", "inned", "inner", "input", "inset", "inter", "intro", "ionic", "irate", "irish",
"irked", "irony", "islam", "issue", "items", "ivory", "jacks", "jaded", "jades", "jails",
"jambs", "japan", "jaunt", "javel", "jazzy", "jeans", "jeeps", "jello", "jelly", "jenny",
"jerks", "jerky", "jests", "jetty", "jewel", "jibed", "jibes", "jiffy", "jihad", "jilts",
"jimmy", "jingo", "jived", "jives", "jocks", "joeys", "johns", "joins", "joint", "joist",
"joked", "joker", "jokes", "jolly", "jolts", "jones", "joule", "joust", "jowls", "joyed",
"judge", "judos", "julep", "jumbo", "jumps", "jumpy", "junks", "junky", "junta", "juror",
"justs", "kayak", "kayos", "kazoo", "kebab", "kebob", "keels", "keens", "keeps", "kegs",
"kelps", "kenny", "kerbs", "ketch", "keyed", "khaki", "khans", "kicks", "kicky", "kiddo",
"kiddy", "kills", "kilns", "kilos", "kilts", "kinde", "kinds", "kings", "kinks", "kinky",
"kiosk", "kited", "kites", "kitty", "kiwis", "klutz", "knack", "kneed", "kneel", "knees",
"knelt", "knife", "knits", "knobs", "knock", "knots", "known", "knows", "knurl", "koala",
"kooks", "kooky", "koran", "korea", "kudos", "label", "labor", "laced", "laces", "lacks",
"laden", "ladle", "lager", "lairs", "lakes", "lamed", "lamer", "lames", "lambs", "lamps",
"lanai", "lance", "lands", "lanes", "lanky", "lapel", "lapse", "larch", "large", "larks",
"larva", "laser", "lasso", "lasts", "latch", "later", "latex", "lathe", "laths", "latte",
"laugh", "lawns", "laxer", "laxly", "layer", "lazed", "lazes", "leach", "leads", "leafy",
"leaks", "leaky", "leans", "leant", "leaps", "learn", "lease", "leash", "least", "leech",
"leeks", "leers", "leery", "lefts", "legal", "leggy", "legit", "lemon", "lends", "length",
"lenin", "lense", "leone", "leper", "letup", "levee", "level", "lever", "levis", "liars",
"libel", "licks", "liege", "lifer", "lifts", "light", "liked", "liken", "liker", "likes",
"lilac", "limbo", "limbs", "limed", "limes", "limit", "limns", "limos", "limps", "linch",
"linda", "lined", "linen", "liner", "lines", "lingo", "links", "lions", "lipsy", "liquid",
"liras", "lisle", "lists", "lithe", "litre", "lived", "liven", "liver", "lives", "livid",
"llama", "loach", "loads", "loafs", "loams", "loamy", "loans", "loath", "lobed", "lobes",
"local", "locks", "locus", "lodge", "lofty", "login", "logos", "loins", "lolls", "loner",
"longs", "loofs", "looks", "looms", "loony", "loops", "loose", "loots", "loped", "loper",
"lopes", "lords", "lores", "lorry", "loses", "lossy", "lotus", "louis", "louse", "lousy",
"loved", "lover", "loves", "lowed", "lower", "lowly", "loyal", "lucid", "lucks", "lucky",
"lucy", "ludicrous", "luffs", "lumps", "lumpy", "lunar", "lunch", "lungs", "lupus", "lurch",
"lured", "lures", "lurid", "lurks", "lusts", "lusty", "lutes", "luxes", "lymph", "lynch",
"lyres", "lyric", "macaw", "maced", "maces", "macho", "macro", "madam", "maddy", "madly",
"mafia", "magic", "magma", "maids", "mails", "maims", "mains", "maize", "major", "maker",
"makes", "malay", "males", "malta", "mamas", "mamba", "mambo", "mamma", "mammy", "maned",
"manes", "mange", "mango", "mangy", "mania", "manic", "manor", "manse", "maple", "march",
"mares", "marge", "maria", "marks", "marry", "marsh", "marts", "maser", "masks", "mason",
"massy", "masts", "match", "mated", "mates", "matey", "maths", "matsy", "matte", "matts",
"matzo", "mauls", "mauve", "maven", "mavis", "maxed", "maxes", "mayor", "mayst", "mazed",
"mazes", "meads", "meals", "mealy", "means", "meant", "meany", "meats", "meaty", "mecca",
"medal", "media", "medic", "meeds", "meets", "melds", "melts", "memos", "mends", "menus",
"meows", "mercy", "meres", "merge", "merit", "merry", "mesas", "meshy", "meson", "messy",
"metal", "meted", "meter", "metes", "metro", "mewed", "mewls", "mezzo", "micas", "micks",
"middy", "midst", "miffs", "miggs", "might", "miked", "mikes", "milan", "milch", "milds",
"miles", "milit", "milks", "milky", "mills", "mimed", "mimes", "mimic", "mince", "mined",
"miner", "mines", "mingy", "minim", "minis", "minks", "minor", "mints", "minty", "minus",
"mired", "mires", "mirth", "miser", "missy", "misty", "miter", "mites", "mitre", "mitts",
"mixed", "mixer", "mixes", "mizar", "moans", "moats", "mocks", "modal", "model", "modem",
"modes", "moist", "molar", "molds", "moldy", "moles", "molls", "molly", "molts", "momma",
"mommy", "monad", "mondo", "money", "mongo", "monks", "monos", "month", "mooch", "moods",
"moody", "mooed", "moons", "moors", "moose", "moped", "moper", "mopes", "mopey", "moral",
"moray", "morel", "mores", "morns", "morph", "morse", "mosey", "moses", "mossy", "motel",
"motes", "motet", "moths", "motif", "motor", "motto", "mould", "mound", "mount", "mourn",
"mouse", "mousy", "mouth", "moved", "mover", "moves", "movie", "mowed", "mower", "moxie",
"mucks", "mucky", "mucus", "muddy", "muffs", "mufti", "muggy", "muled", "mules", "muley",
"mulls", "mumms", "mummy", "mumps", "munch", "muons", "mural", "murks", "murky", "mused",
"muses", "mushy", "music", "musks", "musky", "mussy", "musts", "musty", "muted", "muter",
"mutes", "mutts", "mylar", "mynah", "mynas", "myrrh", "myths", "nabob", "nacho", "nacre",
"nadir", "naiad", "naive", "naked", "named", "namer", "names", "nanny", "napes", "nappy",
"narks", "nasal", "nasty", "natal", "nates", "natty", "naval", "navel", "naves", "navvy",
"nears", "neath", "necks", "needs", "needy", "negro", "neigh", "nests", "necks", "needs",
"needy", "negro", "neigh", "nests", "never", "newer", "newly", "nicer", "niche", "nicks",
"niece", "nifty", "nighs", "night", "nixed", "nixes", "noble", "nobly", "nodal", "noddy",
"nodes", "noels", "noggs", "nohow", "noise", "noisy", "nomad", "nonce", "nooks", "noose",
"nopal", "norms", "north", "nosed", "noses", "notch", "notes", "noted", "noter", "novas",
"novel", "nubby", "nudes", "nudge", "nudie", "nuked", "nukes", "numbs", "nurse", "nymph",
"oaken", "oakum", "oared", "oases", "oasis", "oaths", "obese", "obeys", "obits", "oboes",
"obras", "occur", "ocean", "ocher", "ochre", "ocker", "oculi", "odder", "oddly", "odium",
"offed", "offer", "often", "ogled", "ogler", "ogles", "ogres", "ohing", "oiled", "oiler",
"oinks", "okays", "okras", "olden", "older", "oldie", "oleos", "olive", "omits", "onion",
"onset", "oohed", "oomph", "oozed", "oozes", "opals", "opens", "opera", "opine", "opium",
"opted", "optic", "orals", "orbed", "orbit", "order", "organ", "oriel", "ornis", "orris",
"ortho", "osier", "osmic", "osmol", "ossia", "ostia", "other", "otter", "ought", "ounce",
"ousts", "outdo", "outed", "outer", "outgo", "outre", "ovals", "ovary", "ovate", "ovens",
"overs", "overt", "ovine", "ovoid", "ovule", "owing", "owlet", "owned", "owner", "oxbow",
"oxeye", "oxide", "oxlip", "ozone", "paced", "pacer", "paces", "packs", "pacts", "paddy",
"padre", "paean", "pagan", "paged", "pages", "pails", "pains", "paint", "pairs", "paled",
"paler", "pales", "palls", "pally", "palms", "palmy", "palms", "palmy", "palsy", "panel",
"pansy", "panty", "parch", "pardi", "pards", "pared", "pares", "parks", "parry", "parse",
"parts", "party", "pasha", "passe", "pasta", "paste", "pasts", "pasty", "patch", "pates",
"paths", "patio", "patsy", "patty", "pause", "paved", "paver", "paves", "pawed", "pawls",
"payed", "payee", "payer", "peace", "peach", "peaks", "peals", "pearl", "pears", "peart",
"pease", "peats", "peavy", "pecan", "pecks", "pedal", "peeks", "peels", "peens", "peeps",
"peers", "peeve", "peins", "pence", "pends", "penis", "penny", "peons", "peony", "peppy",
"perch", "peril", "perks", "perms", "perry", "pesky", "pests", "petal", "peter", "petty",
"pewee", "pewit", "phase", "phial", "phlox", "phone", "phony", "photo", "phyla", "piano",
"picks", "picky", "picot", "piece", "piers", "piety", "piggy", "pigmy", "piked", "piker",
"pikes", "piled", "piles", "pills", "pilot", "pimps", "pinch", "pined", "pines", "pings",
"pinko", "pinks", "pinky", "pints", "pinup", "pious", "piped", "piper", "pipes", "pique",
"pitch", "pithy", "pitas", "pitch", "pithy", "pitas", "pitch", "pithy", "pitas", "pitch",
"pithy", "pitas", "pitch", "pithy", "pitas", "pivot", "pixel", "pixie", "pizza", "place",
"plaid", "plain", "plait", "plane", "plank", "plans", "plant", "plash", "plasm", "plate",
"plats", "playa", "plays", "plaza", "plead", "pleas", "pleat", "plebs", "pluck", "plugs",
"plumb", "plume", "plump", "plums", "plush", "plyer", "poach", "pocks", "podgy", "podia",
"poems", "poesy", "poets", "point", "poise", "poked", "poker", "pokes", "polar", "poled",
"poler", "poles", "polio", "polka", "polls", "polos", "pomps", "ponds", "pones", "pooch",
"poods", "poofs", "poohs", "pools", "poops", "popes", "pores", "porks", "porky", "porno",
"porns", "ports", "posed", "poser", "poses", "posit", "posse", "posts", "potsy", "pouch",
"pound", "pours", "pouts", "pouty", "power", "poxes", "prams", "prank", "prate", "prats",
"prawn", "prays", "preen", "preps", "press", "prest", "price", "prick", "pride", "pried",
"prier", "pries", "prigs", "prime", "primp", "print", "prior", "prise", "prism", "privy",
"prize", "probe", "prods", "profs", "progs", "prole", "promo", "proms", "prone", "prong",
"proof", "props", "prose", "proud", "prove", "prowl", "proxy", "prude", "prune", "pryer",
"psalm", "pseud", "pshaw", "pucks", "puddl", "puffs", "puffy", "puked", "pukes", "pukka",
"pulls", "pulps", "pulpy", "pulse", "pumas", "pumps", "punch", "punks", "punky", "punts",
"punty", "pupae", "pupal", "pupil", "puppy", "puree", "purer", "purge", "purim", "purls",
"purse", "pushy", "pussy", "putty", "pygmy", "pylon", "pyres", "quack", "quads", "quaff",
"quail", "quake", "qualm", "quark", "quart", "quash", "quasi", "quays", "queen", "queer",
"quell", "quern", "query", "quest", "queue", "quick", "quids", "quiet", "quill", "quilt",
"quint", "quips", "quire", "quirk", "quirt", "quite", "quits", "quoin", "quoit", "quota",
"quote", "quoth", "rabbi", "rabid", "raced", "racer", "races", "racks", "radar", "radii",
"radio", "radon", "rafts", "ragas", "raged", "rages", "raids", "rails", "rains", "rainy",
"raise", "rajah", "raked", "rakes", "rally", "ramie", "ramps", "ranch", "rands", "randy",
"range", "rangy", "ranks", "rants", "raped", "raper", "rapes", "rapid", "rarer", "rased",
"rases", "rasps", "raspy", "rated", "rater", "rates", "ratio", "ratty", "raved", "ravel",
"raven", "raver", "raves", "rawer", "rawly", "rayed", "razed", "razes", "razor", "reach",
"react", "reads", "ready", "realm", "reals", "reams", "reaps", "rearm", "rears", "reave",
"rebel", "rebid", "rebus", "rebut", "recap", "recks", "recta", "recto", "recur", "redid",
"redly", "redox", "reeds", "reedy", "reefs", "reeks", "reels", "reeve", "refer", "refit",
"refix", "refly", "refry", "regal", "rehab", "reign", "reins", "reive", "relay", "relic",
"relit", "remap", "remit", "remix", "renal", "rends", "renew", "rents", "repay", "repel",
"repin", "reply", "repro", "reran", "rerun", "reset", "resin", "resow", "rests", "retch",
"reuse", "revel", "revue", "rheas", "rheum", "rhino", "rhyme", "rider", "rides", "ridge",
"riffs", "rifle", "rifts", "rigid", "rigor", "riled", "riles", "rills", "rimed", "rimes",
"rinds", "rings", "rinks", "rinse", "riots", "riped", "ripen", "riper", "ripes", "risen",
"riser", "rises", "risks", "risky", "rites", "ritzy", "rival", "rived", "riven", "river",
"rives", "rivet", "roach", "roads", "roams", "roans", "roars", "roast", "robed", "robes",
"robin", "robot", "rocks", "rocky", "rodeo", "roger", "rogue", "roils", "roles", "rolls",
"roman", "romps", "rondo", "roods", "roofs", "rooks", "rooky", "rooms", "roomy", "roost",
"roots", "roped", "roper", "ropes", "roses", "rosin", "rotes", "rotor", "roues", "rouge",
"rough", "round", "rouse", "roust", "route", "rouse", "roust", "route", "roved", "rover",
"roves", "rowdy", "rowed", "rowel", "rower", "rowns", "royal", "rubes", "ruble", "rucks",
"rudds", "ruddy", "ruder", "ruffs", "rugby", "ruing", "ruins", "ruled", "ruler", "rules",
"rumba", "rumen", "rummy", "rumor", "rumps", "runes", "rungs", "runic", "runny", "runts",
"rupee", "rural", "ruses", "rushy", "rusks", "rusts", "rusty", "ruths", "rutty", "saber",
"sable", "sabot", "sabra", "sabre", "sacks", "sadly", "safes", "sagas", "sages", "saids",
"sails", "saint", "saith", "sakes", "sakis", "sally", "salon", "salts", "salty", "salve",
"sands", "sandy", "saner", "sangh", "sapid", "saran", "saris", "sarks", "sassy", "satay",
"sated", "sates", "satin", "satis", "saucy", "sauls", "sault", "sauna", "sauls", "sault",
"sauna", "saved", "saver", "saves", "savor", "savvy", "sawed", "sawer", "saxes", "sayer",
"scaff", "scald", "scale", "scall", "scalp", "scaly", "scamp", "scams", "scans", "scant",
"scape", "scarf", "scarp", "scars", "scary", "scats", "scold", "scone", "scoop", "scoot",
"scope", "scops", "score", "scorn", "scour", "scout", "scowl", "scows", "scrag", "scram",
"scrap", "screw", "scrim", "scrip", "scrod", "scrub", "scrum", "scuba", "scuds", "scuff",
"scums", "scurf", "seals", "seams", "seamy", "sears", "seats", "sebum", "sects", "sedan",
"seder", "sedge", "sedgy", "sedum", "seeds", "seedy", "seeks", "seels", "seems", "seeps",
"seers", "segno", "segos", "segue", "seine", "seize", "sells", "semen", "semis", "sends",
"senna", "senor", "sense", "senti", "sepal", "sepia", "sepic", "sepoy", "septa", "serfs",
"serge", "serif", "serin", "serum", "serve", "servo", "setae", "seton", "setup", "seven",
"sever", "sewed", "sewer", "sexed", "sexes", "sexto", "sexts", "shack", "shade", "shads",
"shady", "shaft", "shags", "shahs", "shake", "shako", "shaky", "shale", "shall", "shalt",
"shame", "shams", "shank", "shape", "shard", "share", "shark", "sharp", "shave", "shawl",
"sheaf", "shear", "sheds", "sheep", "sheer", "sheet", "sheik", "shelf", "shell", "shend",
"shent", "sheol", "sherf", "shewn", "shews", "shied", "shier", "shies", "shift", "shill",
"shims", "shine", "shins", "shiny", "ships", "shire", "shirk", "shirr", "shirt", "shits",
"shlep", "shoal", "shoat", "shock", "shoed", "shoes", "shone", "shook", "shoon", "shoos",
"shoot", "shops", "shore", "shorn", "short", "shote", "shots", "shout", "shove", "shown",
"shows", "showy", "shred", "shrew", "shrub", "shrug", "shuck", "shuls", "shuns", "shunt",
"shush", "shute", "shuts", "shyer", "shyly", "sials", "sibyl", "sicks", "sided", "sides",
"sidle", "siege", "sieve", "sifts", "sighs", "sight", "sigma", "signs", "siker", "silks",
"silky", "sills", "silly", "silos", "silts", "silva", "since", "sines", "sinew", "singe",
"sings", "sinks", "sinus", "sired", "siree", "siren", "sires", "sirup", "sisal", "sises",
"sissy", "sitar", "sited", "sites", "sizer", "sizes", "skate", "skeet", "skein", "skews",
"skids", "skied", "skier", "skies", "skiff", "skill", "skimp", "skins", "skips", "skirt",
"skits", "skoal", "skulk", "skull", "skunk", "skyed", "slabs", "slack", "slags", "slain",
"slake", "slams", "slang", "slant", "slaps", "slash", "slate", "slats", "slave", "slaws",
"slays", "sleds", "sleek", "sleep", "sleet", "slept", "slews", "slice", "slick", "slide",
"slier", "slily", "slime", "slims", "slimy", "sling", "slink", "slips", "slipt", "slits",];

let targetWord = validWords[Math.floor(Math.random() * validWords.length)];
let attempts = 0;

let inputField = document.querySelector('#guess-input');
let guessRows = document.querySelectorAll('.guess-row');

// Generate the on-screen keyboard
let keyboard = document.querySelector('#keyboard');

let rowQwerty = createKeyboardRow('qwertyuiop');
let rowAsdfg = createKeyboardRow('asdfghjkl');
let rowZxcvb = createKeyboardRow('zxcvbnm');

keyboard.appendChild(rowQwerty);
keyboard.appendChild(rowAsdfg);
keyboard.appendChild(rowZxcvb);

function createKeyboardRow(letters) {
  let row = document.createElement('div');
  row.className = 'keyboard-row';

  for (let letter of letters) {
    let key = document.createElement('div');
    key.className = 'key';
    key.textContent = letter;
    key.addEventListener('click', function () {
      if (inputField.value.length < 5) {
        inputField.value += this.textContent;
        inputField.focus(); // Keep focus on the input field
      }
    });
    row.appendChild(key);
  }

  return row;
}

inputField.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    let guess = inputField.value;
    if (guess.length !== 5) {
      alert('Please enter a word with exactly 5 letters.');
    } else if (validWords.includes(guess)) {
      updateGuessSlots(guess); // Update the guess slots
      checkGuess(guess);
    } else {
      alert('Please enter a valid word.');
    }
  }
});

function updateGuessSlots(guess) {
  let guessRow = guessRows[attempts];
  let guessSlots = guessRow.querySelectorAll('.guess-slot');
  for (let i = 0; i < 5; i++) {
    guessSlots[i].textContent = guess.charAt(i).toUpperCase(); // Show the guessed letter
  }
  attempts++;
}

function checkGuess(guess) {
  let guessRow = guessRows[attempts - 1];
  let guessSlots = guessRow.querySelectorAll('.guess-slot');
  let correctGuesses = 0;
  let correctPositions = 0;

  for (let i = 0; i < 5; i++) {
    if (guess.charAt(i) === targetWord.charAt(i)) {
      guessSlots[i].classList.add('green'); // Correct letter in correct position
      correctPositions++;
    } else if (targetWord.includes(guess.charAt(i))) {
      guessSlots[i].classList.add('yellow'); // Correct letter in wrong position
      correctGuesses++;
    } else {
      guessSlots[i].classList.add('gray'); // Incorrect letter
    }
  }

  if (correctPositions === 5) {
    alert('Congratulations, you won!');
  } else if (attempts === 5) {
    alert(`Sorry, you lost. The correct word was "${targetWord}".`);
  }

  inputField.value = ''; // Clear the input field
}
