/**
 * Remark Plugin: Fix Bold Spacing
 * 
 * This plugin automatically fixes common Markdown bold syntax errors:
 * - `** text **` -> `**text**` (spaces inside asterisks)
 * - Full-width asterisks `＊＊` -> standard `**`
 * - Invisible characters around bold markers
 * 
 * It runs during the build process, so you can write naturally
 * and the output will always be correctly formatted.
 */

import { visit } from 'unist-util-visit';

export default function remarkFixBoldSpacing() {
    return (tree) => {
        visit(tree, 'text', (node) => {
            if (typeof node.value === 'string') {
                let text = node.value;

                // 1. Normalize full-width asterisks
                text = text.replace(/＊＊/g, '**');

                // 2. Remove invisible characters
                const invisibleChars = [
                    '\u200b', // Zero-width space
                    '\u200c', // Zero-width non-joiner
                    '\u200d', // Zero-width joiner
                    '\ufeff', // BOM / Zero-width no-break space
                ];
                for (const char of invisibleChars) {
                    text = text.replace(new RegExp(char, 'g'), '');
                }

                // 3. Normalize spaces in full-width space
                text = text.replace(/\u3000/g, ' ');
                text = text.replace(/\u00a0/g, ' ');

                node.value = text;
            }
        });

        // Handle strong (bold) nodes - strip whitespace from children
        visit(tree, 'strong', (node) => {
            if (node.children && node.children.length > 0) {
                // Trim the first text child's leading whitespace
                const firstChild = node.children[0];
                if (firstChild.type === 'text' && typeof firstChild.value === 'string') {
                    firstChild.value = firstChild.value.trimStart();
                }

                // Trim the last text child's trailing whitespace
                const lastChild = node.children[node.children.length - 1];
                if (lastChild.type === 'text' && typeof lastChild.value === 'string') {
                    lastChild.value = lastChild.value.trimEnd();
                }
            }
        });
    };
}
