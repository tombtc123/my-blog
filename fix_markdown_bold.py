import os
import re

directory = '/Users/tom/vibecode/my-vibe-blog/src/content/blog'
count = 0

def fix_bold(match):
    # Retrieve the inner content
    inner = match.group(1)
    # Strip leading/trailing whitespace including spaces, tabs
    cleaned = inner.strip()
    return f"**{cleaned}**"

for filename in os.listdir(directory):
    if filename.endswith('.md'):
        path = os.path.join(directory, filename)
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Regex explanation:
        # \*\*       Match starting **
        # (.*?)      Match content non-greedily (capture group 1)
        # \*\*       Match ending **
        # re.DOTALL  Allow . to match newlines (bold can span lines sometimes, though deprecated)
        #
        # However, to avoid matching valid `**foo** ... **bar**` as one big block if we are not careful,
        # non-greedy `.*?` helps. But `**` inside code blocks? 
        # For this specific task, we assume content is mostly standard text.
        
        # Optimizing to target specifically the broken ones if possible, but the 'strip' strategy 
        # is robust for valid ones too (it just replaces **text** with **text**).
        
        new_content, n = re.subn(r'\*\*(?!\*)(.*?)(?<!\*)\*\*', fix_bold, content, flags=re.DOTALL)
        
        if n > 0 and new_content != content:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Fixed {n} bold markers in {filename}")
            count += n
        else:
            print(f"No changes in {filename}")

print(f"Total fixed: {count}")
