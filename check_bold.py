
import os
import re

directory = '/Users/tom/vibecode/my-vibe-blog/src/content/blog'
patterns = [
    (r'\*\*\s+.*?\*\*', 'Space after opening **'),
    (r'\*\*.*?\s+\*\*', 'Space before closing **')
]

for filename in os.listdir(directory):
    if filename.endswith('.md'):
        path = os.path.join(directory, filename)
        with open(path, 'r') as f:
            content = f.read()
        
        # Check for matches
        # Pattern 1: ** <text>** (Space at start)
        # Regex: \*\*\s+([^*]+)\*\*  (Simple version)
        
        # More robust: find ** then check char after, find next ** check char before.
        # But let's use the user's logic: "** text" or "text **"
        
        matches = []
        
        # Find all bold chunks?
        # A bold chunk is **...**
        # We look for ** that HAS space inside.
        
        iter = re.finditer(r'\*\*(.*?)\*\*', content, re.DOTALL)
        for m in iter:
            text = m.group(1)
            full = m.group(0)
            if not text: continue
            
            if text.startswith(' ') or text.startswith('\t') or text.startswith('\n'):
                matches.append(f"Space at start: '{full}'")
            if text.endswith(' ') or text.endswith('\t') or text.endswith('\n'):
                matches.append(f"Space at end: '{full}'")

        if matches:
            print(f"File: {filename}")
            for m in matches:
                print(f"  - {m}")
