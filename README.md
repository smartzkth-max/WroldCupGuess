# World Cup Friends Predictor

A simple, GitHub Pages-ready web app for a World Cup prediction game with friends.

Players can pick:

- Champion
- 1st runner-up
- 3rd place
- Golden Boot / top goal scorer
- Golden Ball
- Most assists
- Best goalkeeper
- Highest goal-scoring team
- Surprise team / dark horse

After the World Cup, enter the actual final results and the app calculates the leaderboard automatically.

## Why this app is simple

This is a static web app. It has no login, no server and no database. It stores data in the browser using `localStorage`.

That makes it very easy to host on GitHub Pages, WhatsApp to friends, or open directly from a laptop.

## Recommended group workflow

### Option A: One admin enters all picks

1. Open the app.
2. Go to **Submit Picks**.
3. Enter each friend's picks.
4. Go to **Settings** and lock submissions after the deadline.
5. After the World Cup, go to **Results & Scoring** and enter the actual winners.
6. The **Dashboard** will show the winner and runner-ups.

### Option B: Friends submit separately

1. Publish this app on GitHub Pages.
2. Each friend opens it, enters their own picks, then uses **Export JSON**.
3. The admin imports all JSON files using **Participants > Import JSON**.
4. The admin exports the final master JSON for backup.

> Because this is a static app, GitHub Pages does not automatically collect everyone's picks into one database. For automatic online submission, connect a backend such as Firebase, Supabase, Google Sheets API, or a small server later.

## Default scoring

| Category | Points |
|---|---:|
| Champion | 30 |
| 1st runner-up | 20 |
| 3rd place | 12 |
| Golden Boot / top goal scorer | 20 |
| Golden Ball | 15 |
| Most assists | 10 |
| Best goalkeeper | 10 |
| Highest goal team | 10 |
| Surprise team | 8 |

You can change these points inside **Settings**.

## Run locally

No build step is required.

Open `index.html` directly in your browser, or run a small local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

### Method 1: GitHub Pages from branch

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Save.

### Method 2: GitHub Actions

A workflow is included at `.github/workflows/static.yml`.

1. Push this folder to GitHub.
2. Go to **Settings > Pages**.
3. Select **GitHub Actions** as the source.
4. Push to `main` and the app will deploy.

## Customize teams and player suggestions

Open `js/app.js` and edit:

- `TEAMS` for team list, group, code and flag
- `PLAYER_SUGGESTIONS` for Golden Boot / Golden Ball / assist suggestions
- `CATEGORIES` for pick categories and default points

Player fields still allow custom typed names even if the player is not in the suggestion list.

## Data backup

Use **Participants > Export JSON** regularly. This creates a full backup containing:

- Participants
- Picks
- Actual results
- Custom scoring
- Lock status

You can restore this backup using **Import JSON**.

## Notes

- Golden Boot and highest goal scorer are treated as the same category by default.
- For player result fields, you can enter multiple accepted answers separated by commas, semicolons or `|`.
- This is intended for friendly competition only. It does not include betting, payment or gambling features.
