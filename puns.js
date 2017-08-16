var puns = [

	{name: "Buzz Aldrin was the second man on the moon. Neil before him.", 
	image: "/imgs/buzz.jpg"},

	{name: "What do you call the security outside of a Samsung Store?  Guardians of the Galaxy.", 
	image: "/imgs/guardians.jpg"},

	{name: "I can't believe I got fired from the calendar factory. All I did was take a day off.",
	image: "/imgs/calendar.png"},

	{name: "I am reading a book about anti-gravity. It's impossible to put down.",
	image: "/imgs/floatBook.jpg"},

	{name: "I would tell you a chemistry joke but I know I wouldn't get a reaction.",
	image: "/imgs/periodicTable.jpg"},

	{name: "I found a rock yesterday which measured 1760 yards in length. Must be some kind of milestone.",
	image: "/imgs/rock.jpg"},

	{name: "What do you call an academically successful slice of bread? An honor roll.",
	image: "/imgs/bread.jpg"},

	{name: "A book just fell on my head. I've only got myshelf to blame.",
	image: "/imgs/shelf.jpg"},

	{name: "The best time to open a gift is the present.",
	image: "/imgs/gift.jpg"},

	{name: "What do you call people who are afraid of Santa Claus?  Claustrophobic.",
	image: "/imgs/scarySanta.jpg"},
 
	{name: "What did the beach say as the tide came in? Long time no sea.",
	image: "/imgs/tide.jpg"},

	{name: "Why is Peter Pan always flying? He neverlands.",
	image: "/imgs/peterPan.png"},

	{name: "To the mathematicians who thought of the idea of zero: Thanks for nothing!",
	image: "/imgs/zero.png"},

	{name: "In democracy, it's your vote that counts. In feudalism, it's your count that votes.",
	image: "/imgs/count.jpg"},

];

function randomPun() {
	return puns[Math.floor(Math.random() * puns.length)];
}

console.log(randomPun());
console.log(puns);

module.exports.puns = puns;

