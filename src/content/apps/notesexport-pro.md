---
title: 'NotesExport Pro'
description: 'NotesExport Pro is a macOS utility for exporting Apple Notes into durable files such as Markdown, HTML, PDF, DOCX, RTFD, TextBundle, TextPack, TXT, JSON, and NDJSON while preserving folders, timestamps, and supported attachments.'
pubDate: '2026-05-14'
updatedDate: '2026-05-14'
lang: 'en'
routeSlug: 'notesexport-pro'
translationKey: 'notesexport-pro'
seoTitle: 'NotesExport Pro - Export Apple Notes to Markdown, PDF, DOCX & JSON'
seoDescription: 'Export Apple Notes on Mac to Markdown, PDF, DOCX, HTML, TextBundle, JSON, and more while preserving folders, timestamps, attachments, and iCloud hierarchy.'
seoImage: '/apps/notesexport-pro/og.jpg'
seoImageAlt: 'NotesExport Pro preview showing Apple Notes hierarchy and export formats on macOS'
seoImageWidth: 1600
seoImageHeight: 900
appName: 'NotesExport Pro'
appStoreName: 'NotesExport Pro'
appStoreId: '6757329761'
bundleId: 'com.tom.NotesExporter'
platforms: ['macOS']
status: 'Available on the Mac App Store'
applicationCategory: 'UtilitiesApplication'
price: 5.99
priceCurrency: 'USD'
minimumOsVersion: 'macOS 12.0 or later'
softwareVersion: '1.2'
releaseDate: '2026-05-14'
appStore: 'https://apps.apple.com/us/app/notesexport-pro/id6757329761'
supportUrl: 'https://x.com/blocktom'
screenshots:
  - '/apps/notesexport-pro/01-welcome.png'
  - '/apps/notesexport-pro/02-hierarchy-demo.png'
  - '/apps/notesexport-pro/03-single-note-demo.png'
  - '/apps/notesexport-pro/04-export-settings-demo.png'
  - '/apps/notesexport-pro/05-complete-demo.png'
tags: ['Productivity', 'Utilities', 'Apple Notes', 'Export', 'Backup']
keywords:
  - Apple Notes exporter
  - export Apple Notes to Markdown
  - Apple Notes to PDF
  - Apple Notes to DOCX
  - Apple Notes backup
  - NotesExport Pro
  - macOS Notes export app
  - iCloud Notes export
  - TextBundle export
  - JSON notes export
alternateNames:
  - Notes Export Pro
  - NotesExporter
  - Apple Notes Exporter for Mac
featureList:
  - Export Apple Notes to Markdown, HTML, PDF, DOCX, RTFD, TextBundle, TextPack, TXT, JSON, and NDJSON.
  - Preserve nested folder hierarchy, account-wide sources, timestamps, and supported attachments.
  - Select entire notebooks, parent folders, child folders, or individual notes.
  - Save exports locally on macOS without analytics, accounts, or developer servers.
faq:
  - question: 'Does NotesExport Pro upload my notes?'
    answer: 'No. NotesExport Pro reads selected Apple Notes data on your Mac and writes export files to a folder you choose. It does not use a developer server, analytics SDK, advertising SDK, or account system.'
  - question: 'Why can an iCloud export be incomplete?'
    answer: 'NotesExport Pro can export the notes and attachments that Apple Notes has already synced to this Mac. If iCloud is still downloading content, counts, notes, or attachments may be incomplete until Notes.app finishes syncing locally.'
  - question: 'Can I export a parent folder without selecting every child row?'
    answer: 'Yes. Parent folders are selectable sources. Child folders and notes can show inherited coverage without becoming separate explicit selections, keeping the hierarchy easier to reason about.'
  - question: 'Can I export one note instead of a whole notebook?'
    answer: "Yes. Open a folder's note list from the selection screen, choose individual notes, and export them alongside or instead of folder-level selections."
draft: false
---

<style>
	.notesexport-page {
		--ne-ink: #202329;
		--ne-muted: #69707c;
		--ne-soft: #f7f8fb;
		--ne-panel: #ffffff;
		--ne-line: rgba(32, 35, 41, 0.12);
		--ne-orange: #ff8a2b;
		--ne-orange-strong: #f97316;
		--ne-blue: #2f80ed;
		--ne-green: #16a34a;
		--ne-dark: #15171c;
		width: min(1120px, calc(100vw - 32px));
		margin: 0 0 0 50%;
		transform: translateX(-50%);
		color: var(--ne-ink);
	}

	html.dark .notesexport-page {
		--ne-ink: #f8fafc;
		--ne-muted: #b9c0cc;
		--ne-soft: #151820;
		--ne-panel: #101318;
		--ne-line: rgba(248, 250, 252, 0.16);
		--ne-dark: #07080b;
	}

	.notesexport-page * {
		box-sizing: border-box;
	}

	.ne-hero {
		display: grid;
		grid-template-columns: minmax(0, 0.82fr) minmax(360px, 1.18fr);
		gap: clamp(24px, 5vw, 54px);
		align-items: center;
		margin: 1.5rem 0 3rem;
		padding: clamp(24px, 5vw, 52px);
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background:
			linear-gradient(135deg, rgba(255, 138, 43, 0.16), transparent 34%),
			linear-gradient(160deg, #fffaf3 0%, #f8fbff 46%, #eaf5ff 100%);
		overflow: hidden;
	}

	html.dark .ne-hero {
		background:
			linear-gradient(135deg, rgba(255, 138, 43, 0.14), transparent 34%),
			linear-gradient(160deg, #12151c 0%, #111827 48%, #0f172a 100%);
	}

	.ne-badge-row {
		display: flex;
		align-items: center;
		gap: 13px;
		margin-bottom: 26px;
	}

	.ne-app-icon {
		width: 68px;
		height: 68px;
		border-radius: 18px;
		box-shadow: 0 18px 42px rgba(249, 115, 22, 0.18);
	}

	.ne-kicker {
		margin: 0 0 4px;
		color: var(--ne-orange-strong);
		font-size: 0.82rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.ne-version {
		margin: 0;
		color: var(--ne-muted);
		font-size: 0.94rem;
		font-weight: 700;
	}

	.ne-hero h2 {
		margin: 0 0 18px;
		color: var(--ne-ink);
		font-size: clamp(2.8rem, 5.8vw, 5.3rem);
		line-height: 0.94;
		letter-spacing: 0;
	}

	.ne-lede {
		max-width: 540px;
		margin: 0;
		color: var(--ne-muted);
		font-size: clamp(1rem, 1.4vw, 1.16rem);
		line-height: 1.72;
	}

	.ne-actions,
	.ne-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 24px;
	}

	.ne-primary-link,
	.ne-secondary-link,
	.ne-privacy-link,
	.ne-support-link {
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

	.ne-primary-link {
		background: var(--ne-orange);
		color: #101114 !important;
		box-shadow: 0 16px 38px rgba(249, 115, 22, 0.22);
	}

	.ne-secondary-link {
		border: 1px solid var(--ne-line);
		background: rgba(255, 255, 255, 0.66);
		color: var(--ne-ink) !important;
	}

	html.dark .ne-secondary-link {
		background: rgba(255, 255, 255, 0.06);
	}

	.ne-tag {
		display: inline-flex;
		align-items: center;
		max-width: 100%;
		min-height: 34px;
		padding: 7px 11px;
		border: 1px solid var(--ne-line);
		border-radius: 999px;
		color: var(--ne-muted);
		background: rgba(255, 255, 255, 0.54);
		font-size: 0.86rem;
		font-weight: 750;
		white-space: normal;
	}

	html.dark .ne-tag {
		background: rgba(255, 255, 255, 0.05);
	}

	.ne-stage {
		display: grid;
		grid-template-columns: 0.86fr 1fr;
		gap: 16px;
		align-items: center;
		min-width: 0;
	}

	.ne-window {
		margin: 0;
		padding: 10px;
		border: 1px solid rgba(32, 35, 41, 0.12);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.74);
		box-shadow: 0 22px 58px rgba(31, 41, 55, 0.13);
	}

	html.dark .ne-window {
		border-color: rgba(248, 250, 252, 0.14);
		background: rgba(255, 255, 255, 0.06);
		box-shadow: 0 22px 58px rgba(0, 0, 0, 0.34);
	}

	.ne-window img {
		display: block;
		width: 100%;
		margin: 0;
		border-radius: 8px;
	}

	.ne-window-large {
		transform: rotate(1.4deg);
	}

	.ne-window-small {
		transform: rotate(-2.2deg);
	}

	.ne-metric-strip {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1px;
		margin: 0 0 3.5rem;
		overflow: hidden;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: var(--ne-line);
	}

	.ne-metric {
		padding: 24px;
		background: var(--ne-panel);
	}

	.ne-metric strong {
		display: block;
		margin-bottom: 8px;
		color: var(--ne-ink);
		background: none;
		font-size: clamp(1.45rem, 2.4vw, 2.1rem);
		line-height: 1.1;
	}

	.ne-metric span {
		display: block;
		color: var(--ne-muted);
		font-size: 0.94rem;
		line-height: 1.58;
	}

	.ne-section {
		margin: 0 0 4rem;
	}

	.ne-section-head {
		display: grid;
		grid-template-columns: minmax(0, 0.72fr) minmax(250px, 0.28fr);
		gap: 24px;
		align-items: end;
		margin-bottom: 22px;
	}

	.ne-section h2,
	.ne-split h2,
	.ne-faq-panel h2 {
		margin: 0;
		color: var(--ne-ink);
		font-size: clamp(2rem, 5vw, 4.55rem);
		line-height: 0.96;
		letter-spacing: 0;
	}

	.ne-section-head p,
	.ne-split p,
	.ne-faq-panel > p {
		margin: 0;
		color: var(--ne-muted);
		font-size: 1rem;
		line-height: 1.68;
	}

	.ne-card-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}

	.ne-card {
		padding: 22px;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: var(--ne-panel);
	}

	.ne-card:nth-child(2) {
		background: #15171c;
		color: #f8fafc;
	}

	.ne-card:nth-child(2) h3,
	.ne-card:nth-child(2) p {
		color: #f8fafc;
	}

	.ne-card h3,
	.ne-use-card h3 {
		margin: 0 0 10px;
		color: var(--ne-ink);
		font-size: 1.12rem;
		line-height: 1.25;
	}

	.ne-card p,
	.ne-use-card p {
		margin: 0;
		color: var(--ne-muted);
		font-size: 0.96rem;
		line-height: 1.63;
	}

	.ne-card-visual {
		height: 154px;
		margin-top: 18px;
		overflow: hidden;
		border: 1px solid rgba(32, 35, 41, 0.1);
		border-radius: 8px;
		background: #f7f8fb;
	}

	html.dark .ne-card-visual {
		border-color: rgba(248, 250, 252, 0.14);
		background: #101318;
	}

	.ne-card-visual img {
		display: block;
		width: 100%;
		height: 100%;
		margin: 0;
		object-fit: cover;
		object-position: 50% 22%;
		border: 0;
		border-radius: 0;
	}

	.ne-screen-section {
		padding: clamp(20px, 3vw, 34px);
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background:
			linear-gradient(135deg, rgba(47, 128, 237, 0.11), transparent 38%),
			linear-gradient(180deg, #f8fafc, #fff7ed);
	}

	html.dark .ne-screen-section {
		background:
			linear-gradient(135deg, rgba(47, 128, 237, 0.12), transparent 38%),
			linear-gradient(180deg, #111827, #151820);
	}

	.ne-gallery {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: clamp(10px, 1.6vw, 18px);
		margin-top: 22px;
	}

	.ne-shot {
		margin: 0;
		padding: 10px;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.72);
		box-shadow: 0 14px 38px rgba(31, 41, 55, 0.08);
	}

	html.dark .ne-shot {
		background: rgba(255, 255, 255, 0.05);
	}

	.ne-shot img {
		display: block;
		width: 100%;
		margin: 0;
		border-radius: 8px;
		box-shadow: 0 14px 32px rgba(31, 41, 55, 0.1);
	}

	.ne-shot figcaption {
		margin-top: 10px;
		color: var(--ne-muted);
		font-size: 0.8rem;
		line-height: 1.4;
		text-align: center;
	}

	.ne-split {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
		gap: clamp(22px, 4vw, 48px);
		align-items: center;
		margin: 4rem 0;
		padding: clamp(22px, 4vw, 42px);
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: linear-gradient(135deg, var(--ne-panel), var(--ne-soft));
	}

	.ne-feature-list {
		display: grid;
		gap: 10px;
		margin: 20px 0 0;
		padding: 0;
		list-style: none;
	}

	.ne-feature-list li {
		margin: 0;
		padding: 12px 14px;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.56);
		color: var(--ne-ink);
		font-size: 0.96rem;
		line-height: 1.5;
	}

	html.dark .ne-feature-list li {
		background: rgba(255, 255, 255, 0.05);
	}

	.ne-feature-image {
		margin: 0;
		padding: 16px;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: #ffffff;
		box-shadow: 0 24px 64px rgba(31, 41, 55, 0.1);
	}

	html.dark .ne-feature-image {
		background: #0f131a;
	}

	.ne-feature-image img {
		display: block;
		width: 100%;
		margin: 0;
		border-radius: 8px;
	}

	.ne-format-grid,
	.ne-use-grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 10px;
	}

	.ne-format {
		padding: 14px;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: var(--ne-panel);
	}

	.ne-format strong {
		display: block;
		margin-bottom: 4px;
		color: var(--ne-ink);
		background: none;
		font-size: 0.96rem;
		line-height: 1.25;
	}

	.ne-format span {
		display: block;
		color: var(--ne-muted);
		font-size: 0.82rem;
		line-height: 1.45;
	}

	.ne-faq-panel {
		margin: 4rem 0;
		padding: clamp(22px, 4vw, 42px);
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: var(--ne-soft);
	}

	.ne-use-grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		margin-top: 20px;
	}

	.ne-use-card {
		padding: 18px;
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: var(--ne-panel);
	}

	.ne-faq {
		display: grid;
		gap: 10px;
		margin-top: 24px;
	}

	.ne-faq details {
		border: 1px solid var(--ne-line);
		border-radius: 8px;
		background: var(--ne-panel);
	}

	.ne-faq summary {
		cursor: pointer;
		padding: 14px 16px;
		color: var(--ne-ink);
		font-weight: 800;
		line-height: 1.35;
	}

	.ne-faq details p {
		margin: 0;
		padding: 0 16px 16px;
		color: var(--ne-muted);
		font-size: 0.95rem;
		line-height: 1.66;
	}

	.ne-privacy-band {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: 22px;
		align-items: center;
		margin-top: 4rem;
		padding: clamp(22px, 4vw, 38px);
		border-radius: 8px;
		background: var(--ne-dark);
		color: #f8fafc;
	}

	.ne-privacy-band h2 {
		margin: 0 0 10px;
		color: #f8fafc;
		font-size: clamp(1.7rem, 3.4vw, 3.3rem);
		line-height: 1;
	}

	.ne-privacy-band p {
		margin: 0;
		color: rgba(248, 250, 252, 0.78);
		font-size: 1rem;
		line-height: 1.7;
	}

	.ne-privacy-actions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.ne-privacy-link {
		background: var(--ne-orange);
		color: #101114 !important;
	}

	.ne-support-link {
		border: 1px solid rgba(248, 250, 252, 0.24);
		color: #f8fafc !important;
	}

	@media (max-width: 980px) {
		.ne-hero,
		.ne-section-head,
		.ne-split,
		.ne-privacy-band {
			grid-template-columns: 1fr;
		}

		.ne-stage {
			grid-template-columns: 1fr 1fr;
		}

		.ne-metric-strip,
		.ne-card-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.ne-gallery {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.ne-format-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 720px) {
		.notesexport-page {
			width: 100%;
			margin: 0;
			transform: none;
		}

		.ne-hero {
			margin-top: 1rem;
			padding: 22px;
		}

		.ne-hero h2,
		.ne-section h2,
		.ne-split h2,
		.ne-faq-panel h2 {
			font-size: 2.18rem;
			line-height: 1.04;
			overflow-wrap: break-word;
		}

		.ne-kicker {
			font-size: 0.76rem;
		}

		.ne-version {
			font-size: 0.9rem;
			line-height: 1.45;
		}

		.ne-lede {
			font-size: 0.98rem;
		}

		.ne-stage,
		.ne-metric-strip,
		.ne-card-grid,
		.ne-use-grid,
		.ne-gallery,
		.ne-format-grid {
			grid-template-columns: 1fr;
		}

		.ne-tags {
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 8px;
		}

		.ne-tag {
			justify-content: center;
			text-align: center;
		}

		.ne-window-small {
			display: none;
		}

		.ne-card-visual {
			height: clamp(130px, 34vw, 160px);
		}

		.ne-actions a,
		.ne-privacy-actions,
		.ne-privacy-link,
		.ne-support-link {
			width: 100%;
		}
	}
</style>

<div class="notesexport-page">
<section class="ne-hero" aria-label="NotesExport Pro product introduction">
<div>
<div class="ne-badge-row">
<img class="ne-app-icon" src="/apps/notesexport-pro/app-icon.png" alt="NotesExport Pro app icon" />
<div>
<p class="ne-kicker">Version 1.2 for macOS</p>
<p class="ne-version">Apple Notes export, rebuilt for real archives</p>
</div>
</div>
<h2>Export Apple Notes without flattening your archive.</h2>
<p class="ne-lede">
NotesExport Pro turns Apple Notes into durable files you can keep, search, migrate, publish, or process outside Notes. The 1.2 update adds a Notes-style hierarchy, account-wide sources, individual note selection, iCloud sync guidance, and ten export formats for both human reading and automation.
</p>
<div class="ne-tags" aria-label="NotesExport Pro highlights">
<span class="ne-tag">macOS 12+</span>
<span class="ne-tag">10 formats</span>
<span class="ne-tag">Folder hierarchy</span>
<span class="ne-tag">Single-note export</span>
<span class="ne-tag">No tracking</span>
</div>
<div class="ne-actions">
<a class="ne-primary-link" href="https://apps.apple.com/us/app/notesexport-pro/id6757329761" target="_blank" rel="noopener noreferrer">Open on the Mac App Store</a>
<a class="ne-secondary-link" href="/apps/notesexport-pro/privacy/">Privacy Policy</a>
</div>
</div>
<div class="ne-stage" aria-label="NotesExport Pro screenshots">
<figure class="ne-window ne-window-small">
<img src="/apps/notesexport-pro/01-welcome.png" alt="NotesExport Pro welcome screen with Select Notebooks action" />
</figure>
<figure class="ne-window ne-window-large">
<img src="/apps/notesexport-pro/02-hierarchy-demo.png" alt="NotesExport Pro notebook selection hierarchy with demo folders" />
</figure>
</div>
</section>

<section class="ne-metric-strip" aria-label="NotesExport Pro release summary">
<div class="ne-metric">
<strong>10 formats</strong>
<span>Markdown, HTML, PDF, RTFD, TextBundle, TextPack, DOCX, TXT, JSON, and NDJSON.</span>
</div>
<div class="ne-metric">
<strong>Folders + notes</strong>
<span>Select account-wide sources, nested folders, parent folders, or individual notes.</span>
</div>
<div class="ne-metric">
<strong>Local export</strong>
<span>Notes access is user-triggered and exports are saved to a folder you choose.</span>
</div>
<div class="ne-metric">
<strong>iCloud-aware</strong>
<span>The app warns when local Notes sync may limit counts, notes, or attachments.</span>
</div>
</section>

<section class="ne-section">
<div class="ne-section-head">
<h2>What changed in 1.2.</h2>
<p>The selection flow is now built around the way Apple Notes actually stores notebooks: accounts, empty parent folders, nested folders, and individual notes all have a clear place.</p>
</div>
<div class="ne-card-grid">
<div class="ne-card">
<h3>Notes-style hierarchy</h3>
<p>iCloud, On My Mac, empty parent folders, and nested folders are shown as a tree instead of a flat list.</p>
<div class="ne-card-visual" aria-hidden="true">
<img src="/apps/notesexport-pro/02-hierarchy-demo.png" alt="" loading="lazy" decoding="async" />
</div>
</div>
<div class="ne-card">
<h3>Parent folders stay understandable</h3>
<p>Select a parent folder as one source while child rows show inherited coverage. The UI no longer mutates every child into a separate explicit selection.</p>
<div class="ne-card-visual" aria-hidden="true">
<img src="/apps/notesexport-pro/02-hierarchy-demo.png" alt="" loading="lazy" decoding="async" />
</div>
</div>
<div class="ne-card">
<h3>Individual note export</h3>
<p>Open a folder's note list and export one note, a few notes, or a mixed selection of folders and single notes.</p>
<div class="ne-card-visual" aria-hidden="true">
<img src="/apps/notesexport-pro/03-single-note-demo.png" alt="" loading="lazy" decoding="async" />
</div>
</div>
</div>
</section>

<section class="ne-section ne-screen-section" aria-label="NotesExport Pro screenshot gallery">
<div class="ne-section-head">
<h2>The full flow, with demo data.</h2>
<p>These screenshots use the real app interface with sanitized demo content, so no private notebook names, note titles, or folder structures are shown.</p>
</div>
<div class="ne-gallery">
<figure class="ne-shot">
<img src="/apps/notesexport-pro/01-welcome.png" alt="NotesExport Pro welcome screen" loading="lazy" decoding="async" />
<figcaption>Start from a clear export action</figcaption>
</figure>
<figure class="ne-shot">
<img src="/apps/notesexport-pro/02-hierarchy-demo.png" alt="Notebook hierarchy selection with inherited child coverage" loading="lazy" decoding="async" />
<figcaption>Choose accounts or folders</figcaption>
</figure>
<figure class="ne-shot">
<img src="/apps/notesexport-pro/03-single-note-demo.png" alt="Individual notes inside a selected demo folder" loading="lazy" decoding="async" />
<figcaption>Pick individual notes</figcaption>
</figure>
<figure class="ne-shot">
<img src="/apps/notesexport-pro/04-export-settings-demo.png" alt="Export settings with format grid and options" loading="lazy" decoding="async" />
<figcaption>Select format and options</figcaption>
</figure>
<figure class="ne-shot">
<img src="/apps/notesexport-pro/05-complete-demo.png" alt="Export completion screen with demo export results" loading="lazy" decoding="async" />
<figcaption>Review the finished export</figcaption>
</figure>
</div>
</section>

<section class="ne-split">
<div>
<h2>Pick the output that fits the next step.</h2>
<p>NotesExport Pro is not only a backup tool. It is useful when you want Apple Notes content to live in another system, appear in a document workflow, or become structured data for automation.</p>
<ul class="ne-feature-list">
<li>Keep original creation and modification timestamps when exporting.</li>
<li>Save supported attachments next to exported notes.</li>
<li>Create account and notebook folders so exports stay navigable.</li>
<li>Avoid overwriting files when notes share the same title.</li>
</ul>
</div>
<figure class="ne-feature-image">
<img src="/apps/notesexport-pro/04-export-settings-demo.png" alt="NotesExport Pro export settings with multiple output formats" loading="lazy" decoding="async" />
</figure>
</section>

<section class="ne-section">
<div class="ne-section-head">
<h2>Ten export formats.</h2>
<p>Choose readable documents, app-friendly packages, or structured data depending on where your notes are going next.</p>
</div>
<div class="ne-format-grid" aria-label="Supported export formats">
<div class="ne-format"><strong>Markdown</strong><span>Plain text archives, Obsidian, docs, static sites.</span></div>
<div class="ne-format"><strong>HTML</strong><span>Browser-readable notes with metadata and styling.</span></div>
<div class="ne-format"><strong>PDF</strong><span>Read-only files for sharing, printing, and Quick Look.</span></div>
<div class="ne-format"><strong>RTFD</strong><span>Rich text packages for Apple-native document workflows.</span></div>
<div class="ne-format"><strong>TextBundle</strong><span>Markdown plus assets in one folder-style package.</span></div>
<div class="ne-format"><strong>TextPack</strong><span>A zipped TextBundle-style file for portability.</span></div>
<div class="ne-format"><strong>DOCX</strong><span>Word-compatible documents for office workflows.</span></div>
<div class="ne-format"><strong>TXT</strong><span>Clean plain text for minimal long-term storage.</span></div>
<div class="ne-format"><strong>JSON</strong><span>Structured note records for migration and tools.</span></div>
<div class="ne-format"><strong>NDJSON</strong><span>Line-based JSON for command-line processing.</span></div>
</div>
</section>

<section class="ne-faq-panel" aria-label="NotesExport Pro use cases and frequently asked questions">
<h2>Built for people leaving notes better than they found them.</h2>
<p>
NotesExport Pro is for writers, researchers, students, operators, builders, and anyone who has years of Apple Notes that should not be trapped in one app forever. It is designed for common Apple Notes export workflows: backing up notes before a cleanup, moving Apple Notes to Markdown, sharing notes as PDF or DOCX, and preparing structured JSON or NDJSON for automation.
</p>
<div class="ne-use-grid">
<div class="ne-use-card">
<h3>Apple Notes backup before a cleanup</h3>
<p>Create readable local copies before reorganizing, deleting, or moving large Notes libraries.</p>
</div>
<div class="ne-use-card">
<h3>Apple Notes to Markdown for knowledge bases</h3>
<p>Export Markdown, TextBundle, or structured JSON for tools like Obsidian, static sites, and custom scripts.</p>
</div>
<div class="ne-use-card">
<h3>Apple Notes to PDF, HTML, DOCX, or RTFD</h3>
<p>Use PDF, HTML, RTFD, DOCX, or TXT when the recipient does not need Apple Notes.</p>
</div>
</div>
<div class="ne-faq">
<details>
<summary>Does NotesExport Pro upload my notes?</summary>
<p>No. NotesExport Pro reads selected Apple Notes data on your Mac and writes export files to a folder you choose. It does not use a developer server, analytics SDK, advertising SDK, or account system.</p>
</details>
<details>
<summary>Why can an iCloud export be incomplete?</summary>
<p>NotesExport Pro can export the notes and attachments that Apple Notes has already synced to this Mac. If iCloud is still downloading content, counts, notes, or attachments may be incomplete until Notes.app finishes syncing locally.</p>
</details>
<details>
<summary>Can I export a parent folder without selecting every child row?</summary>
<p>Yes. Parent folders are selectable sources. Child folders and notes can show inherited coverage without becoming separate explicit selections, keeping the hierarchy easier to reason about.</p>
</details>
<details>
<summary>Can I export one note instead of a whole notebook?</summary>
<p>Yes. Open a folder's note list from the selection screen, choose individual notes, and export them alongside or instead of folder-level selections.</p>
</details>
</div>
</section>

<section class="ne-section">
<div class="ne-section-head">
<h2>Compatibility and product facts.</h2>
<p>These details are included here so people and search engines can understand exactly what the Mac App Store listing provides.</p>
</div>
<div class="ne-format-grid" aria-label="NotesExport Pro compatibility and product facts">
<div class="ne-format"><strong>App name</strong><span>NotesExport Pro, also searchable as Notes Export Pro and NotesExporter.</span></div>
<div class="ne-format"><strong>Platform</strong><span>macOS 12.0 or later, distributed through the Mac App Store.</span></div>
<div class="ne-format"><strong>App Store ID</strong><span>6757329761, bundle identifier com.tom.NotesExporter.</span></div>
<div class="ne-format"><strong>Price</strong><span>USD 5.99 where available on the App Store.</span></div>
<div class="ne-format"><strong>Privacy</strong><span>Local export, no developer account, no analytics, no tracking, and no developer server for note content.</span></div>
<div class="ne-format"><strong>Best fit</strong><span>Apple Notes backup, Markdown migration, PDF sharing, DOCX handoff, and JSON automation.</span></div>
</div>
</section>

<section class="ne-privacy-band">
<div>
<h2>Local-first by design.</h2>
<p>NotesExport Pro asks macOS for permission to read Notes only when you start an export flow. Export files stay in the folder you choose. The app does not collect your notes, attachment contents, searches, or usage analytics.</p>
</div>
<div class="ne-privacy-actions">
<a class="ne-privacy-link" href="/apps/notesexport-pro/privacy/">Read the privacy policy</a>
<a class="ne-support-link" href="https://x.com/blocktom" target="_blank" rel="noopener noreferrer">Support on X</a>
</div>
</section>
</div>
