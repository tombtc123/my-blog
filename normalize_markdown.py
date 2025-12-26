import os
import re

directory = '/Users/tom/vibecode/my-vibe-blog/src/content/blog'

def clean_markdown_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    
    # 1. Normalize full-width asterisks to standard asterisks
    content = content.replace('＊＊', '**')
    
    # 2. Remove invisible characters globally (Zero-width space, etc.)
    # \u200b: Zero-width space
    # \ufeff: BOM / Zero-width no-break space
    # \u2028, \u2029: Line separators (sometimes cause huge issues)
    # \u00a0: No-break space (replace with normal space if needed, or strip if around bold)
    invisible_chars = ['\u200b', '\ufeff']
    for char in invisible_chars:
        content = content.replace(char, '')

    # 3. Normalize Bold Syntax (** text **) -> (**text**)
    # We use a regex that handles:
    # - Standard pattern: **...**
    # - Inner whitespace: spaces, tabs, full-width spaces (\u3000)
    # - We do NOT strip content if it's purely whitespace (extremely rare edge case, but checking len)
    
    def normalize_bold(match):
        inner_text = match.group(1)
        # Strip ASCII whitespace and Full-width space (\u3000)
        clean_text = inner_text.strip().strip('\u3000')
        
        # If text becomes empty, standard MD might hide it, but we keep structure valid
        if not clean_text:
            return match.group(0) # Don't touch empty or pure whitespace bold if unsafe
            
        return f"**{clean_text}**"

    # Regex breakdown:
    # \*\*              Literal **
    # (?:\s|[\u3000])*  Non-capturing group for optional leading whitespace (incl full width)
    # (.*?)             Capturing group for content (non-greedy)
    # (?:\s|[\u3000])*  Non-capturing group for optional trailing whitespace
    # \*\*              Literal **
    bold_pattern = re.compile(r'\*\*(?:\s|[\u3000])*(.*?)(?:\s|[\u3000])*\*\*')
    
    content = bold_pattern.sub(normalize_bold, content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Normalized: {os.path.basename(filepath)}")
        return True
    else:
        print(f"  No changes: {os.path.basename(filepath)}")
        return False

print("Starting Markdown Semantic Cleaning...")
if os.path.exists(directory):
    count = 0
    for filename in os.listdir(directory):
        if filename.endswith('.md') or filename.endswith('.mdx'):
            if clean_markdown_file(os.path.join(directory, filename)):
                count += 1
    print(f"\nProcessing complete. Modified {count} files.")
else:
    print("Directory not found.")
