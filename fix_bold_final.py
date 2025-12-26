
import os
import re

directory = '/Users/tom/vibecode/my-vibe-blog/src/content/blog'

def process_file(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    total_fixes = 0

    # Step 1: Fix Trailing Spaces (**text **) -> (**text**)
    # We use a loop to ensure all occurrences are caught (though re.sub handles all non-overlapping)
    # Regex: \*\*(.*?)\s+\*\* 
    # capturing group 1 is the content.
    # Note: We must be careful not to match too greedily.
    
    # Logic: Find bold markers that END with space.
    # Usage of function in sub to print changes?
    
    def report_fix(match, type_desc):
        full_match = match.group(0)
        inner = match.group(1)
        fixed = f"**{inner}**"
        # Only count if it's actually changing something (regex ensures space exists, so it will change)
        print(f"[{filename}] Fixed {type_desc}: {repr(full_match)} -> {repr(fixed)}")
        return fixed

    # 1. Trailing Space
    # Looks for ** followed by content, then whitespace, then **
    # Pattern: \*\*([^\*]*?)\s+\*\*
    # Using [^\*]* to be safer than .*? to avoid spanning double stars? 
    # Actually .*? is fine if we trust the structure.
    
    p1 = re.compile(r'\*\*(.*?)\s+\*\*')
    content, n1 = p1.subn(lambda m: report_fix(m, "Trailing"), content)
    total_fixes += n1

    # 2. Leading Space
    # Looks for ** followed by whitespace, then content, then **
    p2 = re.compile(r'\*\*\s+(.*?)\*\*')
    content, n2 = p2.subn(lambda m: report_fix(m, "Leading"), content)
    total_fixes += n2
    
    # 3. Both Spaces (Actually covered by 1 and 2 usually, but let's run it for "clean" double spaces if any remain)
    # e.g. **  ** -> empty?
    # Or just general cleanup of any remaining whitespace padding
    # Let's run a generic "surrounding whitespace" cleaner as a final polish
    p3 = re.compile(r'\*\*\s+(.*?)\s+\*\*')
    content, n3 = p3.subn(lambda m: report_fix(m, "Both"), content)
    total_fixes += n3

    if total_fixes > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"==> Saved {filename} with {total_fixes} fixes.\n")
    else:
        print(f"No errors found in {filename}.")

print("Starting FINAL BOLD SYNTAX FIX...")
print("-" * 40)

if not os.path.exists(directory):
    print(f"Directory not found: {directory}")
else:
    for filename in os.listdir(directory):
        if filename.endswith('.md') or filename.endswith('.mdx'):
            process_file(os.path.join(directory, filename), filename)

print("-" * 40)
print("Fix Complete.")
