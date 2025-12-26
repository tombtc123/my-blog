import { c as createComponent, r as renderComponent, b as renderHead, d as addAttribute, F as Fragment, a as renderTemplate } from '../chunks/astro/server_Dyr8R2c-.mjs';
import 'piccolore';
import { $ as $$Image } from '../chunks/_astro_assets_BUd8e-6z.mjs';
import { g as getCollection } from '../chunks/_astro_content_8bfDrswT.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_DT8_dl2_.mjs';
import { a as SITE_TITLE, S as SITE_DESCRIPTION } from '../chunks/consts_DzhzC9iB.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const logo = new Proxy({"src":"/_astro/logo.CyAPTZLQ.png","width":886,"height":886,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tom/vibecode/my-vibe-blog/src/assets/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/tom/vibecode/my-vibe-blog/src/assets/logo.png");
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}\u5E74${month}\u6708${day}\u65E5`;
  }
  function calculateReadingTime(content) {
    const plainText = content.replace(/[#*`\[\]()]/g, "").replace(/<[^>]*>/g, "");
    const chineseChars = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length;
    const englishWords = (plainText.match(/[a-zA-Z]+/g) || []).length;
    const totalChars = chineseChars + englishWords;
    const minutes = Math.ceil(totalChars / 300);
    return minutes || 1;
  }
  return renderTemplate`<html lang="zh-CN" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> <!-- 品牌区域 - 完全单行布局 --> <div class="brand-section" data-astro-cid-j7pv25f6> <div class="brand-header-row" data-astro-cid-j7pv25f6> <div class="brand-left" data-astro-cid-j7pv25f6> <div class="header-logo-title" data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Tom Blog Logo", "class": "header-logo", "width": 72, "height": 72, "loading": "eager", "fetchpriority": "high", "data-astro-cid-j7pv25f6": true })} <h1 class="header-title" data-astro-cid-j7pv25f6>${SITE_TITLE}</h1> </div> <div class="divider" data-astro-cid-j7pv25f6></div> <p class="header-subtitle" data-astro-cid-j7pv25f6>探索科技、思维与生活的边界</p> </div> <!-- Header 导航图标会显示在右侧 --> </div> </div> <!-- Header 导航栏 - 使用绝对定位放到右上角 --> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <!-- 文章列表 --> <main class="post-list-container" data-astro-cid-j7pv25f6> <ul class="post-list" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<li class="post-item" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-j7pv25f6> <div class="post-meta" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>${formatDate(post.data.pubDate)}</span> <span class="post-meta-separator" data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>${calculateReadingTime(post.body)} 分钟阅读</span> ${post.data.category && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` <span class="post-meta-separator" data-astro-cid-j7pv25f6>·</span> <span data-astro-cid-j7pv25f6>${post.data.category}</span> ` })}`} </div> <h2 class="post-title" data-astro-cid-j7pv25f6>${post.data.title}</h2> <p class="post-description" data-astro-cid-j7pv25f6>${post.data.description}</p> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="post-tags" data-astro-cid-j7pv25f6> ${post.data.tags.map((tag) => renderTemplate`<span class="post-tag" data-astro-cid-j7pv25f6>#${tag}</span>`)} </div>`} </a> </li>`)} </ul> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/Users/tom/vibecode/my-vibe-blog/src/pages/index.astro", void 0);

const $$file = "/Users/tom/vibecode/my-vibe-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
