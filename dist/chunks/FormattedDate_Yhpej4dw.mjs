import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_Dyr8R2c-.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://blocktom.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time>`;
}, "/Users/tom/vibecode/my-vibe-blog/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
