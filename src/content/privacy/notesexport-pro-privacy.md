---
title: 'NotesExport Pro Privacy Policy'
description: 'Privacy policy for NotesExport Pro, including Apple Notes automation access, local exports, user-selected folders, attachments, iCloud sync limitations, and data collection.'
pubDate: '2026-05-14'
updatedDate: '2026-05-14'
lang: 'en'
routeSlug: 'notesexport-pro'
translationKey: 'notesexport-pro'
seoTitle: 'NotesExport Pro Privacy Policy - Apple Notes Export for macOS'
seoDescription: 'Read how NotesExport Pro accesses Apple Notes only after user action, exports files locally, does not collect personal data, and does not use analytics, tracking, ads, accounts, or developer servers.'
seoImage: '/apps/notesexport-pro/og.jpg'
appName: 'NotesExport Pro'
effectiveDate: '2026-05-14'
version: '1.2'
platforms: ['macOS']
supportUrl: 'https://x.com/blocktom'
appSlug: 'notesexport-pro'
draft: false
---

## Summary

NotesExport Pro is a macOS utility for exporting Apple Notes content into local files, including Markdown, HTML, PDF, RTFD, TextBundle, TextPack, DOCX, TXT, JSON, and NDJSON.

NotesExport Pro is designed to work locally on your Mac. The app does not collect personal data from you. It does not require an account, does not use a developer-operated cloud service, does not use third-party analytics, does not show advertising, and does not track you across apps or websites.

The app can read selected Apple Notes data only after you start the export flow and grant the macOS Automation permission for Notes. Exported files are written to a folder you choose through macOS file access controls.

This policy explains what happens locally on your Mac, what the developer does and does not collect, and what limitations may apply when Apple Notes content has not fully synced from iCloud.

## App Scope

NotesExport Pro helps you export Apple Notes notebooks, folders, account-wide sources, individual notes, note metadata, and supported attachments from the local Notes.app database that macOS exposes through Apple Events.

The app may process note titles, note body content, folder names, account names, creation dates, modification dates, and attachment references on your Mac for the purpose of showing selectable sources and writing export files.

Because notes are created by you, they may contain personal, sensitive, professional, financial, medical, or confidential information. You control which sources to select and where exported files are saved.

## Information the Developer Collects

The developer of NotesExport Pro does not collect personal data through the app.

NotesExport Pro does not collect, receive, transmit, sell, rent, or share:

- Your note titles
- Your note body text
- Your folder or notebook names
- Your account names
- Your attachments or attachment metadata
- Your search text
- Your selected export sources
- Your export folder path
- Your exported files
- Your device identifier for tracking
- Usage analytics
- Advertising identifiers
- Crash analytics through a third-party SDK
- Account credentials
- Payment information

If you download or purchase NotesExport Pro through the Mac App Store, Apple may process information related to download, purchase, updates, refunds, taxes, diagnostics, and App Store operation under Apple's own terms and privacy policy. NotesExport Pro does not receive your App Store payment details.

## Local Processing on Your Mac

NotesExport Pro processes Apple Notes data locally so it can display notebooks, folders, note counts, individual notes, export options, progress, and completion results.

Local processing may include:

- Reading notebook and folder hierarchy from Notes.app
- Reading note titles, note bodies, creation dates, and modification dates for selected sources
- Reading supported attachment references exposed by Notes.app
- Saving attachments that Notes.app makes available locally
- Converting note content into the export format you choose
- Creating account, notebook, or folder structure in the destination folder when enabled
- Avoiding filename collisions when notes have the same title

This processing happens on your Mac. The developer does not receive a copy of the data processed by the app.

## Apple Notes Automation Permission

NotesExport Pro uses Apple's standard Automation permission system to communicate with Notes.app through Apple Events. macOS may show a permission prompt the first time NotesExport Pro tries to access Notes.

The app uses this permission to:

- List available Notes accounts, folders, notebooks, and notes
- Read selected note content and metadata for export
- Ask Notes.app to save supported attachments into the export destination

NotesExport Pro does not read Notes in the background for tracking or monitoring. Access is tied to export-related actions you start inside the app.

You can manage Automation permissions in macOS System Settings. If you revoke permission for NotesExport Pro to control Notes, the app may not be able to list or export Apple Notes content until permission is granted again.

## User-Selected Export Folders

NotesExport Pro uses the macOS user-selected file access entitlement. This means the app writes exported files only after you choose a destination folder through the system folder picker.

Depending on your settings and selected format, exported files may include:

- Markdown files
- HTML files
- PDF files
- RTFD packages
- TextBundle folders
- TextPack files
- DOCX files
- TXT files
- JSON files
- NDJSON files
- Attachment folders or attachment files
- Metadata included in exported documents or structured data

After export, those files are ordinary files on your Mac. You are responsible for where you store them, whether you sync them through iCloud Drive or another service, and who can access that location.

## Attachments

When you enable attachment export, NotesExport Pro attempts to save supported attachments that Notes.app exposes locally.

Attachment availability depends on Apple Notes and iCloud sync state. Some protected, shared, cloud-placeholder, or not-yet-downloaded attachments may not be available to export until Notes.app has downloaded them to this Mac.

NotesExport Pro does not upload attachments to the developer or to a developer server.

## iCloud Sync Limitations

NotesExport Pro exports the notes and attachments that Apple Notes has already synced to this Mac.

If iCloud is still downloading Notes content, the app may show incomplete note counts, export fewer notes than expected, or miss attachments that are still cloud-only placeholders. For large libraries, open Notes.app and wait for iCloud sync to finish before starting an export.

NotesExport Pro does not control iCloud sync, Apple Notes storage, Apple ID services, iCloud backups, or Apple server behavior. Those services are provided by Apple and are governed by Apple's own terms and privacy practices.

## Search

NotesExport Pro may include local search inside the app so you can find notebooks, folders, or notes in the selection screen. Search text is processed locally on your Mac and is not sent to the developer.

## Accounts and Sign-In

NotesExport Pro does not require an account and does not include a sign-in system. The app does not ask for a username, password, email address, phone number, social login, or developer account.

Apple ID and iCloud behavior outside the app are managed by Apple and are not controlled by NotesExport Pro.

## Network Use

NotesExport Pro does not use a developer-operated network service for app functionality. The app does not upload your notes, download remote user data, sync through a NotesExport Pro account, or communicate with a developer backend.

Normal Mac App Store download, purchase, receipt, update, and diagnostic behavior may involve Apple services outside the app. Those services are governed by Apple's own privacy practices.

## Analytics, Tracking, and Advertising

NotesExport Pro does not use third-party analytics SDKs, advertising SDKs, tracking pixels, or cross-app tracking technologies.

NotesExport Pro does not track you across apps or websites. It does not build an advertising profile. It does not sell or share personal data for advertising.

## Third-Party Services

NotesExport Pro does not integrate third-party analytics, advertising, crash reporting, account, cloud sync, or marketing services.

The app is distributed through Apple's Mac App Store and runs on macOS. Apple may provide operating system services, App Store services, purchase processing, updates, crash diagnostics, iCloud services, and other platform functionality according to Apple's own terms and privacy policy.

## Permissions

NotesExport Pro may request or use:

- Automation permission for Notes.app, so the app can list and export Apple Notes content after user action
- User-selected file read/write access, so the app can save exported files to a folder you choose
- App Sandbox, so macOS limits app access according to system rules and granted permissions

NotesExport Pro does not request access to your camera, microphone, photos library, location, contacts, calendars, reminders, Bluetooth, local network, health data, or motion sensors.

## Data Retention

NotesExport Pro does not keep a developer-side copy of your notes or exports because the app does not upload that data to a developer server.

Exported files remain in the destination folder you choose until you move, edit, sync, back up, or delete them. Your Apple Notes remain in Notes.app unless you change them there.

Some app preferences or system permission states may be stored locally by macOS or the app so the app can work across launches. The developer does not collect those local preferences.

## Data Deletion and User Control

You control:

- Which Notes sources to select for export
- Which export format to use
- Whether to include attachments
- Whether to preserve timestamps
- Whether to create folder structure
- Which destination folder receives exported files
- Whether to delete exported files afterward

You can delete exported files in Finder. You can delete NotesExport Pro from your Mac to remove the app. You can manage Apple Notes data in Notes.app and manage iCloud behavior in Apple's system settings.

## Security

NotesExport Pro relies on macOS app sandboxing, macOS Automation permission prompts, and user-selected file access controls.

The security of exported files depends on where you save them, your Mac's account security, disk encryption settings, backups, iCloud Drive or third-party sync settings, and who has access to your Mac or export destination.

NotesExport Pro does not add custom encryption to exported notes. If exported notes contain sensitive information, store them in a secure location and delete copies you no longer need.

## Children

NotesExport Pro is a general productivity and utility app. It is not directed to children and does not knowingly collect personal data from children.

Because NotesExport Pro does not collect personal data through the app, the developer does not knowingly receive personal data from children through NotesExport Pro.

## International Data Transfers

NotesExport Pro does not transfer your notes, attachments, or exported files to the developer, to a developer server, or to third-party analytics or advertising services.

Apple's App Store, macOS, iCloud, backup, diagnostic, and purchase systems may process data in locations determined by Apple. Those activities are governed by Apple's own privacy practices.

## Legal Requests

Because NotesExport Pro does not operate a server containing user notes or exported files and does not collect personal data through the app, the developer does not have a server-side store of your note content to provide in response to legal requests.

Information held by Apple in connection with App Store downloads, purchases, subscriptions, diagnostics, iCloud, Apple ID, or backups is controlled by Apple under Apple's policies.

## Changes to This Policy

This privacy policy may be updated when NotesExport Pro changes, when macOS or Apple Notes platform behavior changes, or when legal or App Store requirements change.

If the policy changes, the updated version will be posted on this page with a new updated date. Material changes will be described in clear language.

## Contact

For privacy or support questions about NotesExport Pro, use the public X account:

[https://x.com/blocktom](https://x.com/blocktom)

## App Store Privacy Label

For App Store privacy reporting, NotesExport Pro is intended to be listed as "Data Not Collected" because the developer does not collect data from the app.

This does not mean the app processes no information locally. NotesExport Pro processes selected Apple Notes data on your Mac so it can perform the export you request. The key distinction is that the developer does not collect that information from you.
