import { e as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead, g as renderScript } from './astro/server_Dyr8R2c-.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { a as SITE_TITLE } from './consts_DzhzC9iB.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://blocktom.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image } = Astro2.props;
  const defaultImageUrl = "/logo.png";
  let ogImageUrl;
  if (image) {
    const imagePath = typeof image === "string" ? image : image.src;
    try {
      const url = new URL(imagePath, Astro2.site);
      ogImageUrl = url.href;
    } catch {
      ogImageUrl = new URL(defaultImageUrl, Astro2.site).href;
    }
  } else {
    ogImageUrl = new URL(defaultImageUrl, Astro2.site).href;
  }
  return renderTemplate(_a || (_a = __template([`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- \u9632\u95EA\u70C1\u811A\u672C\uFF1A\u5728\u9875\u9762\u52A0\u8F7D\u524D\u8BBE\u7F6E\u6DF1\u8272\u6A21\u5F0F --><script>
	(function() {
		try {
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme === 'dark') {
				document.documentElement.classList.add('dark');
			} else if (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			}
		} catch (e) {
			// \u5FFD\u7565 localStorage \u9519\u8BEF
		}
	})();
<\/script><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"`, "", '><meta name="generator"', '><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">"])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"));
}, "/Users/tom/vibecode/my-vibe-blog/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte></footer> `;
}, "/Users/tom/vibecode/my-vibe-blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://blocktom.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const isHomePage = Astro2.url.pathname === "/" || Astro2.url.pathname === "/index.html";
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(isHomePage ? "home-header" : "sticky-header", "class")} data-astro-cid-3ef6ksr2> <div class="header-container" data-astro-cid-3ef6ksr2> ${!isHomePage && renderTemplate`<a href="/" class="brand-link" aria-label="Home" data-astro-cid-3ef6ksr2> <span class="brand-text" data-astro-cid-3ef6ksr2>${SITE_TITLE}</span> </a>`} ${!isHomePage && renderTemplate`<span class="site-url" data-astro-cid-3ef6ksr2>blocktom.com</span>`} <div class="nav-icons" data-astro-cid-3ef6ksr2> ${!isHomePage && renderTemplate`<a href="/" class="home-link" aria-label="Home" data-astro-cid-3ef6ksr2> <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-3ef6ksr2></path> <polyline points="9 22 9 12 15 12 15 22" data-astro-cid-3ef6ksr2></polyline> </svg> </a>`} <button id="dark-mode-toggle" class="dark-mode-toggle" aria-label="Toggle dark mode" data-astro-cid-3ef6ksr2> <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </header>  ${renderScript($$result, "/Users/tom/vibecode/my-vibe-blog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/tom/vibecode/my-vibe-blog/src/components/Header.astro", void 0);

export { $$BaseHead as $, $$Header as a, $$Footer as b };
