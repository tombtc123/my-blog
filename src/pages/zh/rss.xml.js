import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';
import { getEntrySlug } from '../../i18n';

export async function GET(context) {
	const posts = await getCollection('blog', ({ data }) => data.lang === 'zh');
	return rss({
		title: `${SITE_TITLE} 中文`,
		description: 'Tom 的中文文章、App 产品介绍与产品隐私政策。',
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/zh/blog/${getEntrySlug(post)}/`,
		})),
	});
}
