---
title: 'CopyEasy'
description: 'CopyEasy is a private iPhone text snippet manager for saving reusable replies, addresses, signatures, templates, and one-tap clipboard copying.'
pubDate: '2026-05-12'
updatedDate: '2026-05-12'
lang: 'en'
routeSlug: 'copyeasy'
translationKey: 'copyeasy'
seoTitle: 'CopyEasy - Private iPhone Text Snippet Manager'
seoDescription: 'CopyEasy helps iPhone users save reusable text snippets, copy them in one tap, search, pin, reorder, and keep everything local with no account or tracking.'
seoImage: '/apps/copyeasy/03-copied.png'
appName: 'CopyEasy'
platforms: ['iOS']
status: 'Available on the App Store'
appStore: 'https://apps.apple.com/us/app/copyeasy-text-snippets/id6767789668'
supportUrl: 'https://x.com/blocktom'
screenshots:
  - '/apps/copyeasy/01-onboarding-en.png'
  - '/apps/copyeasy/02-list.png'
  - '/apps/copyeasy/03-copied.png'
  - '/apps/copyeasy/05-new-text.png'
  - '/apps/copyeasy/04-settings.png'
tags: ['Productivity', 'Utilities', 'Clipboard', 'Snippets']
draft: false
---

<style>
	.copyeasy-page {
		--ce-ink: #101114;
		--ce-muted: #656b76;
		--ce-paper: #f7f8f4;
		--ce-line: rgba(16, 17, 20, 0.12);
		--ce-panel: #e9eef4;
		--ce-panel-strong: #dbe4ee;
		--ce-blue: #2563eb;
		--ce-lime: #d7ff5f;
		--ce-coral: #ff6f61;
		--ce-mint: #5eead4;
		width: min(1120px, calc(100vw - 32px));
		margin: 0 0 0 50%;
		transform: translateX(-50%);
		color: var(--ce-ink);
	}

	html.dark .copyeasy-page {
		--ce-ink: #f8fafc;
		--ce-muted: #b7beca;
		--ce-paper: #111318;
		--ce-line: rgba(248, 250, 252, 0.16);
		--ce-panel: #171b22;
		--ce-panel-strong: #202632;
	}

	.copyeasy-page * {
		box-sizing: border-box;
	}

	.copyeasy-hero {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
		gap: clamp(24px, 5vw, 56px);
		align-items: center;
		min-height: 620px;
		margin: 1.5rem 0 3rem;
		padding: clamp(24px, 5vw, 56px);
		overflow: hidden;
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background:
			linear-gradient(135deg, rgba(215, 255, 95, 0.95) 0 22%, transparent 22%),
			radial-gradient(circle at 78% 47%, rgba(37, 99, 235, 0.16), transparent 34%),
			radial-gradient(circle at 83% 72%, rgba(94, 234, 212, 0.18), transparent 36%),
			linear-gradient(120deg, #101114 0 56%, #e2e9df 56.2% 100%);
	}

	html.dark .copyeasy-hero {
		background:
			linear-gradient(135deg, rgba(215, 255, 95, 0.9) 0 21%, transparent 21%),
			linear-gradient(120deg, #07080a 0 56%, #1b1e25 56.2% 100%);
	}

	.copyeasy-hero-copy {
		color: #f8fafc;
		min-width: 0;
	}

	.copyeasy-badge-row {
		display: flex;
		align-items: center;
		gap: 12px;
		width: fit-content;
		max-width: 100%;
		padding: 8px 12px 8px 8px;
		border: 1px solid rgba(248, 250, 252, 0.18);
		border-radius: 26px;
		background: linear-gradient(135deg, rgba(16, 17, 20, 0.82), rgba(16, 17, 20, 0.6));
		box-shadow: 0 18px 44px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(12px);
		margin-bottom: 28px;
	}

	.copyeasy-kicker-stack {
		display: grid;
		gap: 3px;
		min-width: 0;
	}

	.copyeasy-icon {
		width: 64px;
		height: 64px;
		border-radius: 18px;
		box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
	}

	.copyeasy-kicker {
		margin: 0;
		color: #f8fafc;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		line-height: 1.25;
		text-shadow: 0 1px 14px rgba(0, 0, 0, 0.42);
		text-transform: uppercase;
	}

	.copyeasy-kicker + .copyeasy-kicker {
		color: var(--ce-lime);
	}

	.copyeasy-hero h2 {
		max-width: 520px;
		margin: 0 0 18px;
		color: #ffffff;
		font-size: clamp(3rem, 6.4vw, 5.6rem);
		line-height: 0.9;
		letter-spacing: 0;
		overflow-wrap: normal;
		word-break: normal;
	}

	.copyeasy-hero-copy p.copyeasy-lede {
		max-width: 440px;
		margin: 0;
		color: rgba(248, 250, 252, 0.82);
		font-size: clamp(1rem, 1.4vw, 1.18rem);
		line-height: 1.7;
	}

	.copyeasy-hero-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 24px;
	}

	.copyeasy-hero-tags span,
	.copyeasy-chip {
		display: inline-flex;
		align-items: center;
		min-height: 32px;
		padding: 6px 10px;
		border: 1px solid rgba(248, 250, 252, 0.2);
		border-radius: 999px;
		color: #f8fafc;
		font-size: 0.84rem;
		font-weight: 700;
	}

	.copyeasy-hero-actions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		margin-top: 24px;
		max-width: 390px;
	}

	.copyeasy-app-store-link,
	.copyeasy-secondary-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 46px;
		padding: 10px 16px;
		border-radius: 999px;
		font-size: 0.96rem;
		font-weight: 800;
		text-decoration: none !important;
	}

	.copyeasy-app-store-link {
		background: var(--ce-lime);
		color: #101114 !important;
		box-shadow: 0 16px 40px rgba(215, 255, 95, 0.22);
	}

	.copyeasy-secondary-link {
		border: 1px solid rgba(248, 250, 252, 0.2);
		background: rgba(16, 17, 20, 0.7);
		color: #f8fafc !important;
	}

	.copyeasy-stage {
		position: relative;
		min-height: 520px;
		min-width: 0;
	}

	.copyeasy-phone {
		position: absolute;
		width: min(42vw, 270px);
		max-width: 46%;
		padding: 8px;
		border-radius: 34px;
		background: #050507;
		box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
	}

	.copyeasy-phone img {
		display: block;
		width: 100%;
		margin: 0;
		border-radius: 26px;
	}

	.copyeasy-phone-main {
		top: 12px;
		left: 35%;
		z-index: 3;
		transform: rotate(2deg);
	}

	.copyeasy-phone-left {
		top: 76px;
		left: 2%;
		z-index: 2;
		transform: rotate(-8deg);
	}

	.copyeasy-phone-right {
		top: 142px;
		right: 0;
		z-index: 1;
		transform: rotate(7deg);
	}

	.copyeasy-metric-strip {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1px;
		margin: 0 0 3.5rem;
		overflow: hidden;
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background: var(--ce-line);
	}

	.copyeasy-metric {
		padding: 24px;
		background: var(--ce-paper);
	}

	.copyeasy-metric strong {
		display: block;
		margin-bottom: 8px;
		color: var(--ce-ink);
		background: none;
		font-size: clamp(1.4rem, 2.4vw, 2rem);
		line-height: 1.1;
	}

	.copyeasy-metric span {
		display: block;
		color: var(--ce-muted);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.copyeasy-section {
		margin: 0 0 4rem;
	}

	.copyeasy-section-head {
		display: grid;
		grid-template-columns: minmax(0, 0.72fr) minmax(260px, 0.28fr);
		gap: 24px;
		align-items: end;
		margin-bottom: 22px;
	}

	.copyeasy-section h2 {
		margin: 0;
		color: var(--ce-ink);
		font-size: clamp(2rem, 5vw, 4.5rem);
		line-height: 0.94;
		letter-spacing: 0;
		overflow-wrap: normal;
		word-break: normal;
	}

	.copyeasy-section-head p {
		margin: 0;
		color: var(--ce-muted);
		font-size: 1rem;
		line-height: 1.65;
	}

	.copyeasy-card-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}

	.copyeasy-card {
		display: flex;
		flex-direction: column;
		min-height: 0;
		padding: 22px;
		overflow: hidden;
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background: var(--ce-paper);
	}

	.copyeasy-card:nth-child(2) {
		background: #101114;
		color: #f8fafc;
	}

	.copyeasy-card:nth-child(2) p,
	.copyeasy-card:nth-child(2) h3 {
		color: #f8fafc;
	}

	.copyeasy-card:nth-child(3) {
		background: linear-gradient(135deg, rgba(94, 234, 212, 0.28), rgba(255, 111, 97, 0.18)), var(--ce-paper);
	}

	.copyeasy-card h3 {
		margin: 0 0 12px;
		color: var(--ce-ink);
		font-size: 1.2rem;
		line-height: 1.2;
	}

	.copyeasy-card p {
		margin: 0;
		color: var(--ce-muted);
		font-size: 0.98rem;
		line-height: 1.65;
	}

	.copyeasy-card-visual {
		position: relative;
		height: 142px;
		margin-top: 18px;
		overflow: hidden;
		border: 1px solid rgba(16, 17, 20, 0.1);
		border-radius: 8px;
		background:
			radial-gradient(circle at 20% 20%, rgba(215, 255, 95, 0.34), transparent 34%),
			linear-gradient(135deg, #ffffff, #edf3ee);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.58);
	}

	html.dark .copyeasy-card-visual {
		border-color: rgba(248, 250, 252, 0.14);
		background:
			radial-gradient(circle at 20% 20%, rgba(215, 255, 95, 0.18), transparent 34%),
			linear-gradient(135deg, #1a1f27, #111318);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
	}

	.copyeasy-card:nth-child(2) .copyeasy-card-visual {
		border-color: rgba(248, 250, 252, 0.16);
		background:
			radial-gradient(circle at 22% 24%, rgba(215, 255, 95, 0.2), transparent 32%),
			linear-gradient(135deg, #050507, #171b22);
	}

	.copyeasy-card-visual img {
		display: block;
		width: 100%;
		height: 100%;
		margin: 0;
		object-fit: cover;
		border: 0;
		border-radius: 0;
		filter: saturate(0.98) contrast(1.02);
	}

	.copyeasy-card-visual::after {
		position: absolute;
		inset: 0;
		content: "";
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.06), transparent 34%),
			linear-gradient(0deg, rgba(16, 17, 20, 0.08), transparent 46%);
		pointer-events: none;
	}

	.copyeasy-card-visual-list img {
		object-position: 50% 20%;
	}

	.copyeasy-card-visual-copy img {
		object-position: 50% 26%;
	}

	.copyeasy-card-visual-order img {
		object-position: 50% 34%;
	}

	.copyeasy-gallery {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: clamp(10px, 1.6vw, 18px);
		align-items: stretch;
		margin-top: 22px;
	}

	.copyeasy-shot {
		margin: 0;
		padding: 12px;
		border: 1px solid rgba(16, 17, 20, 0.12);
		border-radius: 8px;
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.68)),
			var(--ce-panel);
		box-shadow: 0 18px 48px rgba(16, 17, 20, 0.08);
	}

	html.dark .copyeasy-shot {
		border-color: rgba(248, 250, 252, 0.14);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)),
			var(--ce-panel);
	}

	.copyeasy-shot img {
		display: block;
		width: 100%;
		margin: 0;
		border: 8px solid #101114;
		border-radius: 30px;
		background: #101114;
		box-shadow: 0 18px 48px rgba(16, 17, 20, 0.18);
	}

	.copyeasy-shot figcaption {
		margin-top: 10px;
		color: var(--ce-muted);
		font-size: 0.82rem;
		line-height: 1.4;
		text-align: center;
	}

	.copyeasy-screen-section {
		padding: clamp(20px, 3vw, 34px);
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background:
			radial-gradient(circle at 12% 28%, rgba(215, 255, 95, 0.2), transparent 28%),
			linear-gradient(135deg, #eef3f8, #f7f8f4 48%, #e8f1ea);
	}

	html.dark .copyeasy-screen-section {
		background:
			radial-gradient(circle at 12% 28%, rgba(215, 255, 95, 0.13), transparent 28%),
			linear-gradient(135deg, #101318, #151a22 52%, #111318);
	}

	.copyeasy-split {
		display: grid;
		grid-template-columns: minmax(0, 0.92fr) minmax(300px, 1.08fr);
		gap: clamp(20px, 4vw, 48px);
		align-items: center;
		margin: 4rem 0;
		padding: clamp(22px, 4vw, 42px);
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background:
			linear-gradient(90deg, rgba(37, 99, 235, 0.11), transparent 42%),
			linear-gradient(135deg, var(--ce-panel), var(--ce-paper));
	}

	.copyeasy-split h2 {
		margin: 0 0 16px;
		color: var(--ce-ink);
		font-size: clamp(2rem, 5vw, 4.8rem);
		line-height: 0.95;
		letter-spacing: 0;
	}

	.copyeasy-split p {
		margin: 0 0 18px;
		color: var(--ce-muted);
		font-size: 1rem;
		line-height: 1.7;
	}

	.copyeasy-feature-list {
		display: grid;
		gap: 10px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.copyeasy-feature-list li {
		margin: 0;
		padding: 12px 14px;
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.52);
		color: var(--ce-ink);
		font-size: 0.96rem;
		line-height: 1.5;
	}

	html.dark .copyeasy-feature-list li {
		background: rgba(255, 255, 255, 0.05);
	}

	.copyeasy-feature-image {
		margin: 0;
		justify-self: center;
		width: min(100%, 360px);
		padding: 22px;
		border: 1px solid var(--ce-line);
		border-radius: 8px;
		background:
			radial-gradient(circle at 50% 18%, rgba(37, 99, 235, 0.2), transparent 36%),
			linear-gradient(180deg, #e8eef8, #f8fafc);
		box-shadow: 0 26px 70px rgba(16, 17, 20, 0.08);
	}

	html.dark .copyeasy-feature-image {
		background:
			radial-gradient(circle at 50% 18%, rgba(37, 99, 235, 0.18), transparent 36%),
			linear-gradient(180deg, #171b22, #0f1115);
	}

	.copyeasy-feature-image img {
		display: block;
		width: 100%;
		margin: 0;
		border: 10px solid #101114;
		border-radius: 34px;
		background: #101114;
		box-shadow: 0 24px 70px rgba(16, 17, 20, 0.24);
	}

	.copyeasy-privacy-band {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 22px;
		align-items: center;
		margin-top: 4rem;
		padding: clamp(22px, 4vw, 38px);
		border-radius: 8px;
		background: #101114;
		color: #f8fafc;
	}

	.copyeasy-privacy-band h2 {
		margin: 0 0 10px;
		color: #f8fafc;
		font-size: clamp(1.7rem, 3.4vw, 3.4rem);
		line-height: 1;
	}

	.copyeasy-privacy-band p {
		margin: 0;
		color: rgba(248, 250, 252, 0.78);
		font-size: 1rem;
		line-height: 1.7;
	}

	.copyeasy-privacy-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 44px;
		padding: 10px 16px;
		border-radius: 999px;
		background: var(--ce-lime);
		color: #101114 !important;
		font-size: 0.95rem;
		font-weight: 800;
		text-decoration: none !important;
		white-space: nowrap;
	}

	.copyeasy-privacy-actions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.copyeasy-support-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 44px;
		padding: 10px 16px;
		border: 1px solid rgba(248, 250, 252, 0.22);
		border-radius: 999px;
		color: #f8fafc !important;
		font-size: 0.95rem;
		font-weight: 800;
		text-decoration: none !important;
		white-space: nowrap;
	}

	@media (max-width: 900px) {
		.copyeasy-hero,
		.copyeasy-section-head,
		.copyeasy-split,
		.copyeasy-privacy-band {
			grid-template-columns: 1fr;
		}

		.copyeasy-hero {
			min-height: auto;
			background:
				linear-gradient(135deg, rgba(215, 255, 95, 0.95) 0 16%, transparent 16%),
				radial-gradient(circle at 76% 67%, rgba(37, 99, 235, 0.16), transparent 34%),
				linear-gradient(180deg, #101114 0 52%, #e2e9df 52.2% 100%);
		}

		.copyeasy-stage {
			min-height: 430px;
		}

		.copyeasy-phone {
			width: min(52vw, 230px);
		}

		.copyeasy-phone-main {
			left: 36%;
		}
	}

	@media (max-width: 720px) {
		.copyeasy-page {
			width: 100%;
			margin: 0;
			transform: none;
		}

		.copyeasy-hero {
			margin-top: 1rem;
			padding: 22px;
		}

		.copyeasy-hero h2,
		.copyeasy-section h2,
		.copyeasy-split h2 {
			font-size: 2.65rem;
			overflow-wrap: break-word;
		}

		.copyeasy-stage {
			min-height: 360px;
		}

		.copyeasy-phone {
			width: 48%;
			padding: 6px;
			border-radius: 24px;
		}

		.copyeasy-phone img {
			border-radius: 18px;
		}

		.copyeasy-badge-row {
			gap: 10px;
			padding: 7px 10px 7px 7px;
		}

		.copyeasy-icon {
			width: 56px;
			height: 56px;
			border-radius: 16px;
		}

		.copyeasy-kicker {
			font-size: 0.74rem;
			letter-spacing: 0.08em;
		}

		.copyeasy-metric-strip,
		.copyeasy-card-grid {
			grid-template-columns: 1fr;
		}

		.copyeasy-card {
			padding: 20px;
		}

		.copyeasy-card-visual {
			height: clamp(118px, 31vw, 142px);
			margin-top: 16px;
		}

		.copyeasy-gallery {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.copyeasy-privacy-link {
			width: 100%;
		}

		.copyeasy-privacy-actions,
		.copyeasy-support-link,
		.copyeasy-app-store-link,
		.copyeasy-secondary-link {
			width: 100%;
		}
	}
</style>

<div class="copyeasy-page">
<section class="copyeasy-hero" aria-label="CopyEasy product introduction">
<div class="copyeasy-hero-copy">
<div class="copyeasy-badge-row">
<img class="copyeasy-icon" src="/apps/copyeasy/app-icon.png" alt="CopyEasy app icon" />
<div class="copyeasy-kicker-stack">
<p class="copyeasy-kicker">Private snippet manager</p>
<p class="copyeasy-kicker">for iPhone</p>
</div>
</div>
<h2>Tap once. Paste anywhere.</h2>
<p class="copyeasy-lede">
CopyEasy keeps the text you type again and again within reach: addresses, replies, signatures, form answers, short notes, and any reusable line you want to stop rebuilding from scratch.
</p>
<div class="copyeasy-hero-tags" aria-label="CopyEasy highlights">
<span>Local-first</span>
<span>No account</span>
<span>No tracking</span>
<span>English + Chinese</span>
</div>
<div class="copyeasy-hero-actions">
<a class="copyeasy-app-store-link" href="https://apps.apple.com/us/app/copyeasy-text-snippets/id6767789668" target="_blank" rel="noopener noreferrer">Download on the App Store</a>
<a class="copyeasy-secondary-link" href="/apps/copyeasy/privacy/">Privacy Policy</a>
</div>
</div>
<div class="copyeasy-stage" aria-label="CopyEasy app screenshots">
<div class="copyeasy-phone copyeasy-phone-left">
<img src="/apps/copyeasy/01-onboarding-en.png" alt="CopyEasy language selection screen" />
</div>
<div class="copyeasy-phone copyeasy-phone-main">
<img src="/apps/copyeasy/02-list.png" alt="CopyEasy saved snippets list" />
</div>
<div class="copyeasy-phone copyeasy-phone-right">
<img src="/apps/copyeasy/03-copied.png" alt="CopyEasy copied confirmation" />
</div>
</div>
</section>

<section class="copyeasy-metric-strip" aria-label="CopyEasy privacy and workflow summary">
<div class="copyeasy-metric">
<strong>1 tap</strong>
<span>Copy any saved snippet and paste it into Messages, Mail, Safari, forms, notes, and other apps.</span>
</div>
<div class="copyeasy-metric">
<strong>0 accounts</strong>
<span>No sign-in, no sync setup, no feed, no dashboard. Open the app and use your text.</span>
</div>
<div class="copyeasy-metric">
<strong>Local</strong>
<span>Your saved snippets stay on your device. CopyEasy does not run analytics or advertising SDKs.</span>
</div>
</section>

<section class="copyeasy-section">
<div class="copyeasy-section-head">
<h2>Built for everyday text.</h2>
<p>CopyEasy is intentionally small: it gives reusable text a clean home, then gets out of the way when you need to paste.</p>
</div>
<div class="copyeasy-card-grid">
<div class="copyeasy-card">
<h3>Keep reusable snippets tidy</h3>
<p>Save a title, the full text, and an optional pin so the most important snippets stay easy to reach.</p>
<div class="copyeasy-card-visual copyeasy-card-visual-list" aria-hidden="true">
<img src="/apps/copyeasy/05-new-text.png" alt="" loading="lazy" decoding="async" />
</div>
</div>
<div class="copyeasy-card">
<h3>Copy without opening an editor</h3>
<p>Tap a row to copy it immediately. A quick confirmation lets you know the text is ready to paste.</p>
<div class="copyeasy-card-visual copyeasy-card-visual-copy" aria-hidden="true">
<img src="/apps/copyeasy/03-copied.png" alt="" loading="lazy" decoding="async" />
</div>
</div>
<div class="copyeasy-card">
<h3>Use the order that fits your brain</h3>
<p>Sort by recent copies or switch to custom order and drag snippets into a personal layout.</p>
<div class="copyeasy-card-visual copyeasy-card-visual-order" aria-hidden="true">
<img src="/apps/copyeasy/02-list.png" alt="" loading="lazy" decoding="async" />
</div>
</div>
</div>
</section>

<section class="copyeasy-section copyeasy-screen-section" aria-label="CopyEasy screenshot gallery">
<div class="copyeasy-section-head">
<h2>Five screens. No clutter.</h2>
<p>The interface is direct, native, and calm. It is made for repeat use, not for becoming another place to manage.</p>
</div>
<div class="copyeasy-gallery">
<figure class="copyeasy-shot">
<img src="/apps/copyeasy/01-onboarding-en.png" alt="Choose CopyEasy interface language" />
<figcaption>Choose language</figcaption>
</figure>
<figure class="copyeasy-shot">
<img src="/apps/copyeasy/02-list.png" alt="Saved text snippets in CopyEasy" />
<figcaption>Scan saved snippets</figcaption>
</figure>
<figure class="copyeasy-shot">
<img src="/apps/copyeasy/03-copied.png" alt="CopyEasy copied state after tapping a snippet" />
<figcaption>Copy in one tap</figcaption>
</figure>
<figure class="copyeasy-shot">
<img src="/apps/copyeasy/05-new-text.png" alt="Create a new text snippet in CopyEasy" />
<figcaption>Create new text</figcaption>
</figure>
<figure class="copyeasy-shot">
<img src="/apps/copyeasy/04-settings.png" alt="CopyEasy settings screen" />
<figcaption>Keep it personal</figcaption>
</figure>
</div>
</section>

<section class="copyeasy-split">
<div>
<h2>A clipboard companion with boundaries.</h2>
<p>CopyEasy is for text snippets you choose to save. It does not watch everything you copy, does not upload your snippets, and does not ask you to create an account before it becomes useful.</p>
<ul class="copyeasy-feature-list">
<li>Search by title or content when your list grows.</li>
<li>Pin important snippets for faster access.</li>
<li>Fill a new snippet from the current clipboard only when you tap the clipboard action.</li>
<li>Use English or Chinese inside the app.</li>
</ul>
</div>
<figure class="copyeasy-feature-image">
<img src="/apps/copyeasy/05-new-text.png" alt="CopyEasy snippet editor with clipboard fill action" />
</figure>
</section>

<section class="copyeasy-privacy-band">
<div>
<h2>Private by default.</h2>
<p>Your snippets are stored locally on your device. CopyEasy has no account system, no third-party analytics, no ads, and no network service for saved text.</p>
</div>
<div class="copyeasy-privacy-actions">
<a class="copyeasy-privacy-link" href="https://apps.apple.com/us/app/copyeasy-text-snippets/id6767789668" target="_blank" rel="noopener noreferrer">Download on the App Store</a>
<a class="copyeasy-privacy-link" href="/apps/copyeasy/privacy/">Read the privacy policy</a>
<a class="copyeasy-support-link" href="https://x.com/blocktom" target="_blank" rel="noopener noreferrer">Support on X</a>
</div>
</section>
</div>
