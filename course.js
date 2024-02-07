let data = {
	meta: {
		totalPages: 13,
	},
	data: [
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
		{
			type: "articles",
			id: "3",
			attributes: {
				title: "JSON:API paints my bikeshed!",
				body: "The shortest article. Ever.",
				created: "2015-05-22T14:56:29.000Z",
				updated: "2015-05-22T14:56:28.000Z",
			},
		},
	],
	links: {
		self: "http://example.com/articles?page[number]=3&page[size]=1",
		first: "http://example.com/articles?page[number]=1&page[size]=1",
		prev: "http://example.com/articles?page[number]=2&page[size]=1",
		next: "http://example.com/articles?page[number]=4&page[size]=1",
		last: "http://example.com/articles?page[number]=13&page[size]=1",
	},
};

console.log("*************** 1 *****************");

let x =data.meta.totalPages;

console.log("total pages : " + x);
console.log("*************** 2 *****************");

let y = data.links.self;
let yy = data.links.first;
console.log(y + " " + yy);
console.log("**************** 3 ****************");
let len = data.length;
console.log( len== x);

console.log("**************** 4 ****************");
let lenarr= data.data.length;
let titlee= data.data[lenarr-2].attributes.title;
console.log(titlee);
console.log("**************** 5 ****************");
let id= data.data[lenarr-1].id;
let typee= data.data[lenarr-1].type;
console.log(id<3);
console.log(typee=="articles");



// get totalPages
// show self & first beside each other
// check if totalPages is equal to data length
// get the title of the data before the last one
// check if post id is less than 3 and type is articles




// console.log("**************** new taskkkkk *****************");
