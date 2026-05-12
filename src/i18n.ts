import type { CollectionEntry } from 'astro:content';

export type Lang = 'en' | 'zh';

export const DEFAULT_LANG: Lang = 'en';

export const UI = {
	en: {
		htmlLang: 'en',
		navLabel: 'Site sections',
		home: 'Home',
		writing: 'Writing',
		products: 'Products',
		languageSwitch: '中文',
		siteDescription:
			'Tom’s English-first personal site for essays, app product pages, and app-specific privacy policies.',
		homeSubtitle: 'Exploring technology, thought, and everyday life',
		productsAndPrivacy: 'Products & Privacy',
		viewAll: 'View all',
		latestWriting: 'Latest Writing',
		writingArchive: 'Writing archive',
		productCenter: 'App Product Center',
		productCenterDescription: 'Apps, tools, product notes, and their app-specific privacy policies will live here.',
		productsPageDescription:
			'Tom\'s apps, tools, and product notes. Each app page keeps its product description, platform information, download links, and its own privacy policy.',
		productsReady: 'Product pages are ready',
		productsReadyDescription:
			'Add one English product Markdown file for each app. Add a matching privacy policy file when that app needs a public privacy URL.',
		writingPageDescription:
			'Essays, notes, and long-term thinking live here. Products and app-specific privacy policies live in the product section.',
		minRead: 'min read',
		statusInDevelopment: 'In development',
		appStore: 'App Store',
		productWebsite: 'Product website',
		privacyPolicy: 'Privacy Policy',
		supportEmail: 'Support email',
		backToProduct: 'Back to product',
		effectiveDate: 'Effective date',
		version: 'Version',
		contents: 'Contents',
		tableOfContents: 'Table of Contents',
		close: 'Close',
	},
	zh: {
		htmlLang: 'zh-CN',
		navLabel: '站点栏目',
		home: '首页',
		writing: '文章',
		products: '产品',
		languageSwitch: 'EN',
		siteDescription: 'Tom 的英文优先个人网站，收纳文章、App 产品页和每个 App 对应的隐私政策。',
		homeSubtitle: '探索科技、思维与生活的边界',
		productsAndPrivacy: '产品与隐私',
		viewAll: '查看全部',
		latestWriting: '最新文章',
		writingArchive: '文章归档',
		productCenter: 'App 产品中心',
		productCenterDescription: '以后开发的 App、工具、产品介绍和对应隐私政策都会集中在这里。',
		productsPageDescription:
			'这里会集中展示 Tom 开发的 App、工具和相关产品说明。每个产品页都会保留功能介绍、平台信息、下载入口，以及该 App 自己的隐私政策链接。',
		productsReady: '产品页已准备好',
		productsReadyDescription:
			'后续新增 App 时，只需要添加一份产品 Markdown；如果这个 App 需要隐私政策，再添加对应隐私 Markdown，它会挂在该产品页面下面。',
		writingPageDescription: '观点、记录和长期思考都放在这里。产品介绍与隐私政策则会收纳在产品栏目里。',
		minRead: '分钟阅读',
		statusInDevelopment: '开发中',
		appStore: 'App Store',
		productWebsite: '产品网站',
		privacyPolicy: '隐私政策',
		supportEmail: '支持邮箱',
		backToProduct: '返回产品介绍',
		effectiveDate: '生效日期',
		version: '版本',
		contents: '目录',
		tableOfContents: '目录',
		close: '关闭',
	},
} as const;

export function getLangFromPath(pathname: string): Lang {
	return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function stripLangPrefix(pathname: string): string {
	const stripped = pathname.replace(/^\/zh(?=\/|$)/, '') || '/';
	return stripped.endsWith('/') ? stripped : `${stripped}/`;
}

export function localizePath(path: string, lang: Lang): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (lang === 'en') {
		return normalized;
	}
	return normalized === '/' ? '/zh/' : `/zh${normalized}`;
}

export function alternateLangPath(pathname: string): string {
	const lang = getLangFromPath(pathname);
	const stripped = stripLangPrefix(pathname);
	return lang === 'en' ? localizePath(stripped, 'zh') : localizePath(stripped, 'en');
}

export function getEntrySlug(entry: Pick<CollectionEntry<'blog' | 'apps' | 'privacy'>, 'id' | 'data'>): string {
	if ('routeSlug' in entry.data && typeof entry.data.routeSlug === 'string' && entry.data.routeSlug.length > 0) {
		return entry.data.routeSlug;
	}
	const parts = entry.id.split('/');
	return parts[parts.length - 1] ?? entry.id;
}

export function formatDate(date: Date, lang: Lang): string {
	if (lang === 'zh') {
		return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
	}

	return new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).format(date);
}

export function calculateReadingTime(content: string, lang: Lang): number {
	const plainText = content.replace(/[#*`\[\]()]/g, '').replace(/<[^>]*>/g, '');
	if (lang === 'zh') {
		const chineseChars = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length;
		const englishWords = (plainText.match(/[a-zA-Z]+/g) || []).length;
		return Math.ceil((chineseChars + englishWords) / 300) || 1;
	}

	const words = plainText.trim().split(/\s+/).filter(Boolean).length;
	return Math.ceil(words / 220) || 1;
}
