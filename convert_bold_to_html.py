import os
import re

directory = '/Users/tom/vibecode/my-vibe-blog/src/content/blog'

def convert_bold_to_strong(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # Step 1: Normalize full-width asterisks
    content = content.replace('＊＊', '**')
    
    # Step 2: Remove all invisible characters that might be lurking
    invisible_chars = [
        '\u200b',  # Zero-width space
        '\u200c',  # Zero-width non-joiner
        '\u200d',  # Zero-width joiner
        '\ufeff',  # BOM / Zero-width no-break space
        '\u00a0',  # Non-breaking space (replace with regular space)
        '\u3000',  # Full-width space (replace with regular space)
    ]
    for char in invisible_chars:
        if char in ['\u00a0', '\u3000']:
            content = content.replace(char, ' ')
        else:
            content = content.replace(char, '')
    
    # Step 3: Convert **text** to <strong>text</strong>
    # This regex handles any whitespace inside the asterisks and strips it
    def convert_to_strong(match):
        inner_text = match.group(1)
        # Strip any remaining whitespace from the inner content
        clean_text = inner_text.strip()
        if not clean_text:
            return match.group(0)  # Don't convert empty bold
        return f"<strong>{clean_text}</strong>"
    
    # Pattern: ** followed by any content (non-greedy), followed by **
    # We use a more aggressive pattern that captures any whitespace around content
    pattern = re.compile(r'\*\*\s*(.*?)\s*\*\*', re.DOTALL)
    content = pattern.sub(convert_to_strong, content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Converted: {os.path.basename(filepath)}")
        return True
    else:
        print(f"  No changes: {os.path.basename(filepath)}")
        return False

print("Converting all Markdown bold to HTML <strong> tags...")
print("=" * 50)

if os.path.exists(directory):
    count = 0
    for filename in os.listdir(directory):
        if filename.endswith('.md') or filename.endswith('.mdx'):
            if convert_bold_to_strong(os.path.join(directory, filename)):
                count += 1
    print("=" * 50)
    print(f"Conversion complete. Modified {count} files.")
else:
    print("Directory not found.")
