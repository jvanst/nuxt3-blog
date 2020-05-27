import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
    title: post.title,
    img: post.img,
		slug: post.slug,
		summary: post.summary,
		categories: post.categories
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}