import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Dyr8R2c-.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_8bfDrswT.mjs';
import { $ as $$BlogPost } from '../../chunks/BlogPost_ColDs5GK.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://blocktom.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content, headings } = await renderEntry(post);
  const tocHeadings = headings.filter((heading) => heading.depth === 2 || heading.depth === 3);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "headings": tocHeadings }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/tom/vibecode/my-vibe-blog/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/tom/vibecode/my-vibe-blog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
