# World Cup Friends Predictor - fixed GitHub Pages version

This version is a **single-file app**. The CSS and JavaScript are inside `index.html`, so GitHub Pages cannot fail because of missing `css` or `js` paths.

## Upload to GitHub

1. Open your GitHub repository.
2. Delete or replace the old `index.html`.
3. Upload this new `index.html` and `.nojekyll`.
4. Wait 1-3 minutes for GitHub Pages to redeploy.
5. Open the Pages URL and press **Ctrl + F5** to hard refresh.

## How the app works

- Add each friend's World Cup picks under **Submit Picks**.
- Manage all entries under **Participants**.
- After the World Cup, enter official final results under **Results & Scoring**.
- The **Dashboard** calculates the leaderboard automatically.

Data is stored in the browser using `localStorage`. Export JSON regularly as backup.
