# Minecraft goal tracker

**Forked from:** https://xorik.github.io/advancements/

TODO rewrite

### Features:
- Show the total progress of all advancements
- Show finished criteria for complex advancements (e.g. for "A Balanced Diet" advancement)
- Doesn't require a server, works 100% in your browser

### Ideas/TODOs:
- Currently, supports only Minecraft Java 1.19, but it's easy to support older/newer versions
- It's possible to show the time when some advancement or criteria was finished. I can use it, just need to figure out how to make a nice UI
- Filter advancement by title is easy to do
- Offline mode
- Advancements JSON file also has unlocked recipes, so it's possible to track them
- Check if the Bedrock edition has a similar file, containing finished advancements
- Add share button (needs to figure out how to compact this huge JSON and add to URL)

### Limitation:
- When you finished a new advancement, you need to drag & drop the file again. Any ideas about automating this are appreciated
- There is a delay between finishing criteria (e.g. after eating a new type of food) and updating a JSON file in your world directory. To force save the JSON file, you can exit the world
- I have no idea how to do it for multiplayer servers. Any ideas are welcome

### Development:
For development purposes the Website can be hosted on GitHub Pages. This is especially useful for obtaining small changes in the UI, where the hosting location is irrelevant.

To enable Deployment to GitHub Pages go to the *Settings* section of the repository in GitHub. Sroll down to *Pages*, choose a *Branch* (**has to be** *gh-pages*) and a directory (usually */ (root)*).

**Don't forget to DISABLE**  GitHub Pages afterwards by changing *Branch* to *None*.

GitHub Pages link for the repository (if enabled):
https://demokrit5.github.io/Minecraft-Tracker/


---------


start of own notes
### Setup:
- node.js v22.12.0
- npm 10.9.0


### Tools:
- **Vue:** JavaScript Framework for building web user interfaces
- **Vite:** Build Tool for Frontend and Development Server
- TODO: eslint, prettier, postcss, tailwind, tsconfig.node.js

