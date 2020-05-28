import sirv from 'sirv';
import polka from 'polka';
import send from '@polka/send-type';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const posts = [
	{
    title: 'Svelte - Initial Impressions',
    img: 'posts/svelte-inital-impressions-header.jpg',
		slug: 'svelte-initial-impressions',
		categories: ['webdev', 'frameworks'],
		summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin blandit libero non tincidunt. Maecenas lobortis rhoncus elit, a egestas risus sagittis quis.',
		html: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget augue nec velit hendrerit facilisis sed sit amet mauris. Praesent aliquam mattis lobortis. Integer est mi, dictum at vestibulum quis, egestas ac quam. Sed magna lorem, imperdiet id pulvinar a, convallis sit amet leo. Morbi eget lobortis velit. Vestibulum ut malesuada orci. Pellentesque tristique arcu vitae diam vestibulum gravida. Proin venenatis sem ut congue cursus. Quisque nec fringilla dolor. In dictum, magna vitae rutrum ultrices, sapien velit hendrerit erat, in gravida elit magna non mauris. Nam turpis enim, ornare at vehicula sed, euismod in massa. Sed id neque auctor, volutpat enim a, porta quam. Praesent sodales rhoncus diam nec eleifend. Ut urna enim, aliquam ut nibh eu, malesuada dignissim tellus. Nam nec scelerisque lorem. Proin vehicula nunc justo, nec ullamcorper arcu sodales in.

    Nulla laoreet interdum libero sit amet auctor. Nulla quis augue sagittis ex mollis convallis et sed turpis. Nam sollicitudin porta risus ac facilisis. Fusce molestie ligula sem, molestie consectetur nisl rhoncus ac. Ut tempor dolor tellus, ut consequat dolor vulputate in. Praesent at elit non leo imperdiet ultrices. Vivamus ut est ut augue aliquet condimentum aliquet vel leo. Quisque id laoreet nunc. Donec quis magna ut felis porta vulputate.
    
    Phasellus id eros id purus pretium gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin interdum magna sed tortor sollicitudin vulputate. Ut nec est ac orci ullamcorper ornare. Suspendisse potenti. Sed non ullamcorper tortor. Suspendisse tincidunt metus sit amet quam dapibus condimentum. Suspendisse interdum nisi ac elementum viverra. Proin malesuada posuere orci, quis suscipit ante eleifend eleifend. Fusce congue sem lacus. Pellentesque laoreet fermentum velit, sed tincidunt est vulputate ac. Maecenas sed eros a neque porttitor pharetra.
    
    Donec ligula enim, pretium in aliquam vel, fermentum ut ex. Quisque ac ipsum ac lacus malesuada consectetur vel sit amet odio. Curabitur ante nisl, efficitur quis bibendum at, faucibus ac nisl. Quisque cursus quam in ipsum aliquet bibendum. Phasellus auctor est eget urna suscipit gravida. In in urna arcu. Fusce eu nunc mauris.
    
    Phasellus ac urna vel massa cursus porta. Vestibulum eu enim congue, pellentesque dolor id, tincidunt odio. Cras congue, ante nec vulputate malesuada, quam libero blandit magna, at ullamcorper turpis augue in elit. Suspendisse pellentesque tortor sed quam auctor, eu facilisis nisl luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras aliquet varius ornare. Sed lectus neque, ultricies sit amet tempor pellentesque, imperdiet at tortor. Vivamus blandit efficitur nisi ut lobortis. Curabitur vitae laoreet est. Nulla et massa fringilla dolor rhoncus sagittis. Fusce non odio et enim faucibus venenatis in fringilla tellus. Curabitur vel orci non nibh viverra convallis. Quisque vulputate tristique ullamcorper.`
	}
]

polka()
  .get('/api/posts', (req, res) => {
    send(res, 200, posts);
  })
  .use(
      compression({ threshold: 0 }),
      sirv('static', { dev }),
      sapper.middleware()
  )
  .listen(PORT, err => {
      if (err) console.log('error', err);
  });