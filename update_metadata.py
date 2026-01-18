import os
import re

articles = [
  { "link": "/25f/1-stars-breathing", "title": "Stars Breathing", "author": "Edison Hong" },
  { "link": "/25f/2-between-what-was-and-what-will-be", "title": "Between What Was and What Will Be", "author": "Taylor Maerlender" },
  { "link": "/25f/3-infinity-is-bigger-than-you-think", "title": "Infinity Is Bigger Than You Think", "author": "Raph Cheng" },
  { "link": "/25f/4-stars", "title": "Stars", "author": "Eddy Huang" },
  { "link": "/25f/5-the-man-in-between", "title": "The Man In Between", "author": "Sean Kim" },
  { "link": "/25f/6-vision-check", "title": "vision check", "author": "Ansley Cheng" },
  { "link": "/25f/7-spaces-between-people", "title": "spaces between people", "author": "Olivia Hu" },
  { "link": "/25f/8-134340", "title": "134340", "author": "Emily Choi" },
  { "link": "/25f/9-midnight", "title": "Midnight", "author": "Esther Shen" },
  { "link": "/25f/10-empty", "title": "Empty", "author": "James Fox" },
  { "link": "/25f/11-our-weekly-glimpse-of-eternity", "title": "Our Weekly Glimpse of Eternity", "author": "Michael Pitts" },
  { "link": "/25f/12-at-his-feet", "title": "At His Feet", "author": "Chelsea Ekwegh" },
  { "link": "/25f/13-climbing-with-god", "title": "Climbing with God", "author": "Eddy Huang" },
  { "link": "/25f/14-babel", "title": "Babel", "author": "Galadriel Cho" },
  { "link": "/25f/15-forgiveness-and-vengeance", "title": "Forgiveness and Vengeance", "author": "Elliot Chen" },
  { "link": "/25f/16-event-horizon", "title": "Event Horizon", "author": "Daeyong Kwon" },
  { "link": "/25f/17-psalm-8", "title": "Psalm 8", "author": "Chase Whitener" }
]

base_path = "src/app/(pages)/(issues)/25f"

for article in articles:
    folder_name = article["link"].split("/")[-1]
    # Handle special case for psalm 8 if folder is different
    # Check if folder exists, if not check for alternative
    potential_path = os.path.join(base_path, folder_name)
    if not os.path.exists(potential_path):
         if folder_name == "17-psalm-8":
             folder_name = "17-psalm8" # Known mismatch from list_dir
             potential_path = os.path.join(base_path, folder_name)
    
    file_path = os.path.join(base_path, folder_name, "page.tsx")
    
    if not os.path.exists(file_path):
        print(f"Skipping {file_path}, not found")
        continue

    with open(file_path, "r") as f:
        content = f.read()

    # Replace Date
    content = re.sub(r'const date = ".*";', 'const date = "December 6, 2025";', content)
    # Replace Author
    content = re.sub(r'const author = ".*";', f'const author = "{article["author"]}";', content)
    # Replace Title
    # Escape quotes in title if any
    title = article["title"].replace('"', '\\"')
    content = re.sub(r'const title = ".*";', f'const title = "{title}";', content)

    with open(file_path, "w") as f:
        f.write(content)
    print(f"Updated {file_path}")
