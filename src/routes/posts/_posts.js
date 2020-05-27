// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
    title: 'Svelte - Initial Impressions',
    img: 'posts/svelte-inital-impressions-header.jpg',
		slug: 'svelte-initial-impressions',
		categories: ['webdev', 'frameworks'],
		summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin blandit libero non tincidunt. Maecenas lobortis rhoncus elit, a egestas risus sagittis quis.',
		html: ''
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
