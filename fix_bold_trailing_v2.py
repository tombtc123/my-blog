
import os
import re

directory = '/Users/tom/vibecode/my-vibe-blog/src/content/blog'

def process_file(filepath, filename):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    file_modified = False

    # Regex to find **...** content. 
    # We use a non-greedy match for content.
    # We carefully try not to match across lines to keep line number reporting simple, 
    # assuming bold text is usually on the same line.
    
    # This regex matches ** capture ** 
    # It handles multiple occurrences in one line.
    pattern = re.compile(r'\*\*(?P<content>.*?)\*\*')

    for i, line in enumerate(lines):
        original_line = line
        
        def replacer(match):
            content = match.group('content')
            # Check if content needs trimming
            if content.startswith(' ') or content.endswith(' '):
                # We strip leading/trailing spaces from the content
                return f"**{content.strip()}**"
            return match.group(0)

        # Apply replacement
        new_line = pattern.sub(replacer, line)

        if new_line != original_line:
            print(f"[{filename}:{i+1}] Fixed: {original_line.strip()}  ->  {new_line.strip()}")
            file_modified = True
            new_lines.append(new_line)
        else:
            new_lines.append(line)

    if file_modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

print("Starting scan for trailing spaces in bold markdown...")
for filename in os.listdir(directory):
    if filename.endswith('.md') or filename.endswith('.mdx'):
        process_file(os.path.join(directory, filename), filename)
print("Scan complete.")
