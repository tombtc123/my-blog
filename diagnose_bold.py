
import os

directory = 'src/content/blog'
print(f"Scanning {directory}...")

for filename in os.listdir(directory):
    path = os.path.join(directory, filename)
    if not os.path.isfile(path): continue
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check for user reported issue specifically
    if "谷皮" in content:
        print(f"\n--- {filename} ---")
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if "谷皮" in line:
                print(f"Line {i+1}: {repr(line)}")
                
                # Analysis
                if "**谷皮" in line and "（麸皮）**" in line:
                    print("  -> Syntax looks CORRECT: **谷皮...**")
                elif "** 谷皮" in line or "（麸皮） **" in line:
                    print("  -> Syntax looks INCORRECT (Spaces detected)")
                else:
                    print("  -> Pattern analysis inconclusive")

    # Check for general " **" or "** "
    # Note: "** " is common for "Bold starts here" if valid.
    # We look for "** " inside a bold block? Hard to tell without parsing.
    # But " **" (space before star-star) is suspicious if it closes bold.
    
print("\nScan complete.")
