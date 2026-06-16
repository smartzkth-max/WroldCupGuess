const TEAMS = [
  { name: "Mexico", code: "MEX", group: "A", flag: "🇲🇽" },
  { name: "South Africa", code: "RSA", group: "A", flag: "🇿🇦" },
  { name: "Korea Republic", code: "KOR", group: "A", flag: "🇰🇷", aliases: ["South Korea"] },
  { name: "Czechia", code: "CZE", group: "A", flag: "🇨🇿" },
  { name: "Canada", code: "CAN", group: "B", flag: "🇨🇦" },
  { name: "Bosnia and Herzegovina", code: "BIH", group: "B", flag: "🇧🇦", aliases: ["Bosnia"] },
  { name: "Qatar", code: "QAT", group: "B", flag: "🇶🇦" },
  { name: "Switzerland", code: "SUI", group: "B", flag: "🇨🇭" },
  { name: "Brazil", code: "BRA", group: "C", flag: "🇧🇷" },
  { name: "Morocco", code: "MAR", group: "C", flag: "🇲🇦" },
  { name: "Haiti", code: "HTI", group: "C", flag: "🇭🇹" },
  { name: "Scotland", code: "SCO", group: "C", flag: "🏴" },
  { name: "United States", code: "USA", group: "D", flag: "🇺🇸", aliases: ["USA", "US", "United States of America"] },
  { name: "Paraguay", code: "PAR", group: "D", flag: "🇵🇾" },
  { name: "Australia", code: "AUS", group: "D", flag: "🇦🇺" },
  { name: "Turkiye", code: "TUR", group: "D", flag: "🇹🇷", aliases: ["Turkey", "Türkiye"] },
  { name: "Germany", code: "GER", group: "E", flag: "🇩🇪" },
  { name: "Curacao", code: "CUW", group: "E", flag: "🇨🇼", aliases: ["Curaçao"] },
  { name: "Ivory Coast", code: "CIV", group: "E", flag: "🇨🇮", aliases: ["Cote d'Ivoire", "Côte d’Ivoire"] },
  { name: "Ecuador", code: "ECU", group: "E", flag: "🇪🇨" },
  { name: "Netherlands", code: "NED", group: "F", flag: "🇳🇱" },
  { name: "Japan", code: "JPN", group: "F", flag: "🇯🇵" },
  { name: "Sweden", code: "SWE", group: "F", flag: "🇸🇪" },
  { name: "Tunisia", code: "TUN", group: "F", flag: "🇹🇳" },
  { name: "Belgium", code: "BEL", group: "G", flag: "🇧🇪" },
  { name: "Egypt", code: "EGY", group: "G", flag: "🇪🇬" },
  { name: "IR Iran", code: "IRI", group: "G", flag: "🇮🇷", aliases: ["Iran"] },
  { name: "New Zealand", code: "NZL", group: "G", flag: "🇳🇿" },
  { name: "Spain", code: "ESP", group: "H", flag: "🇪🇸" },
  { name: "Cape Verde", code: "CPV", group: "H", flag: "🇨🇻" },
  { name: "Saudi Arabia", code: "KSA", group: "H", flag: "🇸🇦" },
  { name: "Uruguay", code: "URU", group: "H", flag: "🇺🇾" },
  { name: "France", code: "FRA", group: "I", flag: "🇫🇷" },
  { name: "Senegal", code: "SEN", group: "I", flag: "🇸🇳" },
  { name: "Iraq", code: "IRQ", group: "I", flag: "🇮🇶" },
  { name: "Norway", code: "NOR", group: "I", flag: "🇳🇴" },
  { name: "Argentina", code: "ARG", group: "J", flag: "🇦🇷" },
  { name: "Algeria", code: "DZA", group: "J", flag: "🇩🇿" },
  { name: "Austria", code: "AUT", group: "J", flag: "🇦🇹" },
  { name: "Jordan", code: "JOR", group: "J", flag: "🇯🇴" },
  { name: "Portugal", code: "POR", group: "K", flag: "🇵🇹" },
  { name: "Congo DR", code: "COD", group: "K", flag: "🇨🇩", aliases: ["DR Congo", "Democratic Republic of Congo"] },
  { name: "Uzbekistan", code: "UZB", group: "K", flag: "🇺🇿" },
  { name: "Colombia", code: "COL", group: "K", flag: "🇨🇴" },
  { name: "England", code: "ENG", group: "L", flag: "🏴" },
  { name: "Croatia", code: "CRO", group: "L", flag: "🇭🇷" },
  { name: "Ghana", code: "GHA", group: "L", flag: "🇬🇭" },
  { name: "Panama", code: "PAN", group: "L", flag: "🇵🇦" }
];

const PLAYER_SUGGESTIONS = [
  "Kylian Mbappé", "Harry Kane", "Erling Haaland", "Lionel Messi", "Julián Álvarez", "Lamine Yamal", "Mikel Oyarzabal",
  "Kai Havertz", "Jamal Musiala", "Florian Wirtz", "Folarin Balogun", "Christian Pulisic", "Vinícius Júnior", "Rodrygo",
  "Neymar", "Raphinha", "Bruno Fernandes", "Bernardo Silva", "Cristiano Ronaldo", "Bukayo Saka", "Phil Foden", "Jude Bellingham",
  "Mohamed Salah", "Kevin De Bruyne", "Romelu Lukaku", "Antoine Griezmann", "Ousmane Dembélé", "Olivier Giroud", "Memphis Depay",
  "Cody Gakpo", "Virgil van Dijk", "Lautaro Martínez", "Federico Valverde", "Darwin Núñez", "Takefusa Kubo", "Kaoru Mitoma",
  "Alexander Isak", "Yasin Ayari", "Achraf Hakimi", "Hakim Ziyech", "Sadio Mané", "Son Heung-min", "Alphonso Davies"
];

const CATEGORIES = [
  { id: "champion", label: "Champion", type: "team", points: 30, hint: "Team who wins the cup" },
  { id: "runnerUp", label: "1st Runner-up", type: "team", points: 20, hint: "Team who loses the final" },
  { id: "thirdPlace", label: "3rd Place", type: "team", points: 12, hint: "Winner of the 3rd-place match" },
  { id: "goldenBoot", label: "Golden Boot / Top Goal Scorer", type: "player", points: 20, hint: "Highest goal scorer / official Golden Boot winner" },
  { id: "goldenBall", label: "Golden Ball", type: "player", points: 15, hint: "Official best player of the tournament" },
  { id: "mostAssists", label: "Most Assists", type: "player", points: 10, hint: "Player with the most assists" },
  { id: "bestGoalkeeper", label: "Best Goalkeeper", type: "player", points: 10, hint: "Official Golden Glove winner" },
  { id: "topScoringTeam", label: "Highest Goal Team", type: "team", points: 10, hint: "Team with most goals in the tournament" },
  { id: "surpriseTeam", label: "Surprise Team", type: "team", points: 8, hint: "Your group's agreed overachiever / dark horse" }
];

const STORAGE_KEY = "wc-friends-predictor-v1";
let editingId = null;

const emptyState = () => ({
  participants: [],
  actual: {},
  scoring: Object.fromEntries(CATEGORIES.map(cat => [cat.id, cat.points])),
  locked: false,
  updatedAt: new Date().toISOString()
});

let state = loadState();

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyState();
    const parsed = JSON.parse(stored);
    return {
      ...emptyState(),
      ...parsed,
      scoring: { ...emptyState().scoring, ...(parsed.scoring || {}) },
      actual: parsed.actual || {},
      participants: Array.isArray(parsed.participants) ? parsed.participants : []
    };
  } catch (error) {
    console.warn("Failed to load local data", error);
    return emptyState();
  }
}

function saveState() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function teamDisplay(name) {
  const canonical = canonicalTeam(name);
  if (!canonical) return name || "—";
  return `${canonical.flag} ${canonical.name}`;
}

function canonicalTeam(name) {
  const key = normalize(name);
  if (!key) return null;
  return TEAMS.find(team => {
    const values = [team.name, team.code, ...(team.aliases || [])].map(normalize);
    return values.includes(key);
  }) || null;
}

function canonicalTeamName(name) {
  const team = canonicalTeam(name);
  return team ? team.name : String(name || "").trim();
}

function categoryById(id) {
  return CATEGORIES.find(cat => cat.id === id);
}

function comparePick(category, pick, actual) {
  if (!pick || !actual) return false;
  if (category.type === "team") {
    return normalize(canonicalTeamName(pick)) === normalize(canonicalTeamName(actual));
  }
  const accepted = String(actual)
    .split(/[;,|]/)
    .map(item => normalize(item))
    .filter(Boolean);
  return accepted.includes(normalize(pick));
}

function calculateParticipant(participant) {
  const details = CATEGORIES.map(cat => {
    const pick = participant.picks?.[cat.id] || "";
    const actual = state.actual?.[cat.id] || "";
    const isCorrect = comparePick(cat, pick, actual);
    const points = isCorrect ? Number(state.scoring[cat.id] || 0) : 0;
    return { ...cat, pick, actual, isCorrect, points };
  });
  return {
    total: details.reduce((sum, item) => sum + item.points, 0),
    details
  };
}

function rankedParticipants() {
  return [...state.participants]
    .map(participant => ({ ...participant, score: calculateParticipant(participant).total }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function makeOption(value, text = value) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  return option;
}

function populateDatalists() {
  const teamOptions = qs("#teamOptions");
  const playerOptions = qs("#playerOptions");
  teamOptions.innerHTML = "";
  playerOptions.innerHTML = "";
  TEAMS.forEach(team => teamOptions.appendChild(makeOption(team.name, `${team.flag} ${team.name}`)));
  PLAYER_SUGGESTIONS.forEach(player => playerOptions.appendChild(makeOption(player)));
}

function buildCategoryField(cat, prefix, value = "") {
  const label = document.createElement("label");
  label.htmlFor = `${prefix}-${cat.id}`;
  label.innerHTML = `${cat.label}<small>${cat.hint} • ${state.scoring[cat.id] || 0} pts</small>`;
  label.classList.add(cat.id === "goldenBoot" ? "full" : "");

  let input;
  if (cat.type === "team") {
    input = document.createElement("select");
    input.appendChild(makeOption("", "Select team"));
    TEAMS.forEach(team => input.appendChild(makeOption(team.name, `${team.flag} ${team.name} (${team.code})`)));
  } else {
    input = document.createElement("input");
    input.setAttribute("list", "playerOptions");
    input.placeholder = cat.id === "goldenBoot" ? "e.g. Kylian Mbappé" : "Type player name";
  }
  input.id = `${prefix}-${cat.id}`;
  input.name = cat.id;
  input.value = value || "";
  input.autocomplete = "off";
  label.appendChild(input);
  return label;
}

function buildFields() {
  const pickFields = qs("#pickFields");
  const actualFields = qs("#actualFields");
  pickFields.innerHTML = "";
  actualFields.innerHTML = "";

  CATEGORIES.forEach(cat => {
    pickFields.appendChild(buildCategoryField(cat, "pick", ""));
    const actualValue = state.actual[cat.id] || "";
    const actualField = buildCategoryField(cat, "actual", actualValue);
    if (cat.type === "player") {
      const input = actualField.querySelector("input");
      input.placeholder = "Official result; use comma for tied accepted names";
    }
    actualFields.appendChild(actualField);
  });
}

function renderScoreChips() {
  const container = qs("#scoreChips");
  container.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const chip = document.createElement("span");
    chip.className = "score-chip";
    chip.textContent = `${cat.label}: ${state.scoring[cat.id] || 0}`;
    container.appendChild(chip);
  });
}

function renderLeaderboard() {
  const container = qs("#leaderboard");
  const ranking = rankedParticipants();
  if (!ranking.length) {
    container.className = "leaderboard empty-state";
    container.textContent = "No participants yet. Add your friends' picks first.";
    return;
  }
  container.className = "leaderboard";
  container.innerHTML = "";
  ranking.forEach((participant, index) => {
    const row = document.createElement("div");
    row.className = "leader-row";
    const champion = participant.picks?.champion ? teamDisplay(participant.picks.champion) : "No champion pick";
    const boot = participant.picks?.goldenBoot || "No Golden Boot pick";
    row.innerHTML = `
      <div class="rank-badge">${index + 1}</div>
      <div>
        <div class="leader-name">${escapeHtml(participant.name)}</div>
        <div class="leader-meta">${escapeHtml(champion)} • Golden Boot: ${escapeHtml(boot)}</div>
      </div>
      <div class="points">${participant.score}</div>
    `;
    container.appendChild(row);
  });
}

function renderSummary() {
  const container = qs("#pickSummary");
  if (!state.participants.length) {
    container.className = "summary-grid empty-state";
    container.textContent = "Pick trends will appear here after your friends submit their predictions.";
    return;
  }
  container.className = "summary-grid";
  container.innerHTML = "";
  ["champion", "runnerUp", "goldenBoot", "topScoringTeam"].forEach(id => {
    const cat = categoryById(id);
    const counts = countPicks(id);
    const card = document.createElement("div");
    card.className = "summary-card";
    const chips = Object.entries(counts)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 8)
      .map(([pick, count]) => `<span class="mini-chip">${escapeHtml(cat.type === "team" ? teamDisplay(pick) : pick)} × ${count}</span>`)
      .join("");
    card.innerHTML = `<strong>${cat.label}</strong><div class="summary-counts">${chips || "<span class='mini-chip'>No picks</span>"}</div>`;
    container.appendChild(card);
  });
}

function countPicks(categoryId) {
  return state.participants.reduce((acc, participant) => {
    const pick = participant.picks?.[categoryId];
    if (!pick) return acc;
    const label = categoryById(categoryId)?.type === "team" ? canonicalTeamName(pick) : pick.trim();
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
}

function renderParticipantsTable() {
  const tbody = qs("#participantsTable tbody");
  tbody.innerHTML = "";
  rankedParticipants().forEach(participant => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${escapeHtml(participant.name)}</strong></td>
      <td>${escapeHtml(teamDisplay(participant.picks?.champion))}</td>
      <td>${escapeHtml(teamDisplay(participant.picks?.runnerUp))}</td>
      <td>${escapeHtml(participant.picks?.goldenBoot || "—")}</td>
      <td><strong>${participant.score}</strong></td>
      <td>
        <div class="row-actions">
          <button class="icon-button ghost" data-edit="${participant.id}">Edit</button>
          <button class="icon-button danger" data-delete="${participant.id}">Delete</button>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function renderBreakdown() {
  const container = qs("#breakdown");
  if (!state.participants.length) {
    container.className = "breakdown empty-state";
    container.textContent = "Score details will appear after participants are added.";
    return;
  }
  container.className = "breakdown";
  container.innerHTML = "";
  rankedParticipants().forEach(participant => {
    const result = calculateParticipant(participant);
    const card = document.createElement("div");
    card.className = "breakdown-card";
    const details = result.details.map(detail => {
      const mark = detail.actual ? (detail.isCorrect ? "✅" : "❌") : "⏳";
      const pick = detail.type === "team" ? teamDisplay(detail.pick) : detail.pick || "—";
      const actual = detail.type === "team" ? teamDisplay(detail.actual) : detail.actual || "Not set";
      return `<span class="mini-chip">${mark} ${escapeHtml(detail.label)}: ${escapeHtml(pick)} → ${escapeHtml(actual)} (${detail.points})</span>`;
    }).join("");
    card.innerHTML = `<strong>${escapeHtml(participant.name)} • ${result.total} pts</strong><div class="summary-counts">${details}</div>`;
    container.appendChild(card);
  });
}

function renderScoringSettings() {
  const container = qs("#scoringSettings");
  container.innerHTML = "";
  CATEGORIES.forEach(cat => {
    const row = document.createElement("label");
    row.className = "scoring-row";
    row.innerHTML = `<span>${cat.label}</span><input type="number" min="0" max="100" step="1" value="${Number(state.scoring[cat.id] || 0)}" data-score-id="${cat.id}" />`;
    container.appendChild(row);
  });
}

function renderTeamCloud() {
  const container = qs("#teamCloud");
  container.innerHTML = "";
  TEAMS.forEach(team => {
    const span = document.createElement("span");
    span.className = "team-token";
    span.textContent = `${team.flag} ${team.name} • Group ${team.group}`;
    container.appendChild(span);
  });
}

function renderStatus() {
  qs("#heroParticipants").textContent = state.participants.length;
  qs("#heroStatus").textContent = state.locked ? "Submissions locked" : "Open for picks";
  const lockPill = qs("#lockPill");
  lockPill.textContent = state.locked ? "Locked" : "Open";
  lockPill.classList.toggle("locked", state.locked);
  qs("#lockSubmissions").checked = Boolean(state.locked);
  qsa("#pickForm input, #pickForm select, #pickForm button[type='submit']").forEach(element => {
    if (element.id === "playerName" && editingId) return;
    element.disabled = state.locked && !editingId;
  });
}

function renderActualValues() {
  CATEGORIES.forEach(cat => {
    const element = qs(`#actual-${cat.id}`);
    if (element) element.value = state.actual[cat.id] || "";
  });
}

function render() {
  renderScoreChips();
  renderLeaderboard();
  renderSummary();
  renderParticipantsTable();
  renderBreakdown();
  renderScoringSettings();
  renderTeamCloud();
  renderStatus();
  renderActualValues();
}

function getFormPicks(prefix) {
  return Object.fromEntries(CATEGORIES.map(cat => {
    const element = qs(`#${prefix}-${cat.id}`);
    const value = element ? element.value.trim() : "";
    return [cat.id, cat.type === "team" ? canonicalTeamName(value) : value];
  }));
}

function setPickForm(participant) {
  qs("#playerName").value = participant?.name || "";
  CATEGORIES.forEach(cat => {
    const element = qs(`#pick-${cat.id}`);
    if (element) element.value = participant?.picks?.[cat.id] || "";
  });
}

function clearPickForm() {
  editingId = null;
  qs("#pickForm").reset();
  setPickForm(null);
  renderStatus();
}

function handlePickSubmit(event) {
  event.preventDefault();
  if (state.locked && !editingId) {
    toast("Submissions are locked. Unlock in Settings to add new picks.");
    return;
  }
  const name = qs("#playerName").value.trim();
  if (!name) {
    toast("Please enter a friend name.");
    return;
  }
  const picks = getFormPicks("pick");
  const hasMajorPicks = picks.champion && picks.runnerUp && picks.goldenBoot;
  if (!hasMajorPicks) {
    toast("Please at least choose Champion, Runner-up and Golden Boot.");
    return;
  }

  if (editingId) {
    state.participants = state.participants.map(participant => participant.id === editingId
      ? { ...participant, name, picks, updatedAt: new Date().toISOString() }
      : participant
    );
    toast("Picks updated.");
  } else {
    const duplicate = state.participants.find(participant => normalize(participant.name) === normalize(name));
    if (duplicate && !confirm(`${name} already exists. Add another entry with the same name?`)) return;
    state.participants.push({ id: crypto.randomUUID(), name, picks, createdAt: new Date().toISOString() });
    toast("Picks saved.");
  }
  clearPickForm();
  saveState();
}

function handleActualSubmit(event) {
  event.preventDefault();
  state.actual = getFormPicks("actual");
  saveState();
  toast("Actual results saved. Leaderboard updated.");
}

function setupTabs() {
  qsa(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      qsa(".tab").forEach(item => item.classList.remove("active"));
      qsa(".panel").forEach(panel => panel.classList.remove("active"));
      tab.classList.add("active");
      qs(`#${tab.dataset.tab}`).classList.add("active");
    });
  });
}

function openTab(id) {
  const target = qs(`[data-tab='${id}']`);
  if (target) target.click();
}

function setupEvents() {
  qs("#pickForm").addEventListener("submit", handlePickSubmit);
  qs("#actualForm").addEventListener("submit", handleActualSubmit);
  qs("#clearForm").addEventListener("click", () => {
    clearPickForm();
    toast("Form cleared.");
  });
  qs("#loadFunPick").addEventListener("click", loadSamplePick);
  qs("#refreshLeaderboard").addEventListener("click", () => {
    render();
    toast("Leaderboard refreshed.");
  });
  qs("#copySummary").addEventListener("click", copySummary);
  qs("#exportJson").addEventListener("click", exportJson);
  qs("#exportCsv").addEventListener("click", exportParticipantsCsv);
  qs("#downloadScoreCsv").addEventListener("click", exportScoreCsv);
  qs("#importJson").addEventListener("change", importJson);
  qs("#resetActuals").addEventListener("click", () => {
    if (!confirm("Clear all actual final results?")) return;
    state.actual = {};
    saveState();
    toast("Actual results cleared.");
  });
  qs("#lockSubmissions").addEventListener("change", event => {
    state.locked = event.target.checked;
    saveState();
    toast(state.locked ? "Submissions locked." : "Submissions unlocked.");
  });
  qs("#clearAll").addEventListener("click", () => {
    if (!confirm("This will delete all participants, actual results and custom scoring from this browser. Continue?")) return;
    state = emptyState();
    localStorage.removeItem(STORAGE_KEY);
    clearPickForm();
    saveState();
    toast("All app data cleared.");
  });
  qs("#resetScoring").addEventListener("click", () => {
    state.scoring = Object.fromEntries(CATEGORIES.map(cat => [cat.id, cat.points]));
    saveState();
    toast("Default scoring restored.");
  });

  document.addEventListener("change", event => {
    const scoreId = event.target?.dataset?.scoreId;
    if (!scoreId) return;
    const value = Math.max(0, Number(event.target.value || 0));
    state.scoring[scoreId] = value;
    saveState();
    toast("Scoring updated.");
  });

  document.addEventListener("click", event => {
    const editId = event.target?.dataset?.edit;
    const deleteId = event.target?.dataset?.delete;
    if (editId) {
      const participant = state.participants.find(item => item.id === editId);
      if (!participant) return;
      editingId = editId;
      setPickForm(participant);
      openTab("submit");
      renderStatus();
      toast(`Editing ${participant.name}.`);
    }
    if (deleteId) {
      const participant = state.participants.find(item => item.id === deleteId);
      if (!participant || !confirm(`Delete ${participant.name}'s picks?`)) return;
      state.participants = state.participants.filter(item => item.id !== deleteId);
      saveState();
      toast("Participant deleted.");
    }
  });
}

function loadSamplePick() {
  const sampleNames = ["Thiha", "Bryan", "Ryan", "Alex", "Min Min", "Aung Aung", "David", "Sarah"];
  const contenderTeams = ["France", "Spain", "England", "Portugal", "Argentina", "Germany", "Brazil", "Netherlands", "Uruguay"];
  const scorerPlayers = ["Kylian Mbappé", "Harry Kane", "Erling Haaland", "Kai Havertz", "Lionel Messi", "Julián Álvarez", "Vinícius Júnior"];
  qs("#playerName").value = sampleNames[Math.floor(Math.random() * sampleNames.length)];
  const picks = {
    champion: randomItem(contenderTeams),
    runnerUp: randomItem(contenderTeams),
    thirdPlace: randomItem(contenderTeams),
    goldenBoot: randomItem(scorerPlayers),
    goldenBall: randomItem(["Kylian Mbappé", "Jude Bellingham", "Lionel Messi", "Lamine Yamal", "Florian Wirtz"]),
    mostAssists: randomItem(["Kevin De Bruyne", "Bruno Fernandes", "Lionel Messi", "Antoine Griezmann", "Lamine Yamal"]),
    bestGoalkeeper: randomItem(["Mike Maignan", "Jordan Pickford", "Emiliano Martínez", "Alisson", "Manuel Neuer"]),
    topScoringTeam: randomItem(contenderTeams),
    surpriseTeam: randomItem(["Morocco", "United States", "Japan", "Sweden", "Canada", "Australia"])
  };
  if (picks.runnerUp === picks.champion) picks.runnerUp = "England";
  CATEGORIES.forEach(cat => {
    const element = qs(`#pick-${cat.id}`);
    if (element) element.value = picks[cat.id] || "";
  });
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function exportJson() {
  const payload = {
    app: "world-cup-friends-predictor",
    version: 1,
    exportedAt: new Date().toISOString(),
    state
  };
  downloadFile("world-cup-predictor-data.json", JSON.stringify(payload, null, 2), "application/json");
  toast("JSON exported.");
}

function importJson(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = parsed.state || parsed;
      if (!Array.isArray(incoming.participants)) throw new Error("Invalid file format");
      const normalizedIncoming = {
        ...emptyState(),
        ...incoming,
        scoring: { ...emptyState().scoring, ...(incoming.scoring || {}) },
        actual: incoming.actual || {},
        participants: incoming.participants
      };

      const shouldMerge = state.participants.length > 0
        ? confirm("Import mode:\n\nOK = merge participant entries into current game\nCancel = replace all current app data")
        : false;

      if (shouldMerge) {
        const merged = [...state.participants];
        normalizedIncoming.participants.forEach(incomingParticipant => {
          const existingIndex = merged.findIndex(current => normalize(current.name) === normalize(incomingParticipant.name));
          const cleanParticipant = {
            ...incomingParticipant,
            id: incomingParticipant.id || crypto.randomUUID(),
            importedAt: new Date().toISOString()
          };
          if (existingIndex >= 0) {
            merged[existingIndex] = { ...merged[existingIndex], ...cleanParticipant, updatedAt: new Date().toISOString() };
          } else {
            merged.push(cleanParticipant);
          }
        });
        state.participants = merged;
      } else {
        state = normalizedIncoming;
      }

      saveState();
      toast(shouldMerge ? "JSON imported and merged." : "JSON imported and replaced current data.");
    } catch (error) {
      console.error(error);
      toast("Import failed. Please select a valid app JSON file.");
    }
  };
  reader.readAsText(file);
}

function exportParticipantsCsv() {
  const rows = [
    ["Name", ...CATEGORIES.map(cat => cat.label)],
    ...state.participants.map(participant => [participant.name, ...CATEGORIES.map(cat => participant.picks?.[cat.id] || "")])
  ];
  downloadFile("world-cup-predictor-picks.csv", toCsv(rows), "text/csv");
  toast("Picks CSV exported.");
}

function exportScoreCsv() {
  const rows = [["Rank", "Name", "Total", ...CATEGORIES.map(cat => `${cat.label} points`)]];
  rankedParticipants().forEach((participant, index) => {
    const result = calculateParticipant(participant);
    rows.push([index + 1, participant.name, result.total, ...result.details.map(detail => detail.points)]);
  });
  downloadFile("world-cup-predictor-scores.csv", toCsv(rows), "text/csv");
  toast("Score CSV exported.");
}

function toCsv(rows) {
  return rows.map(row => row.map(cell => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function copySummary() {
  const ranking = rankedParticipants();
  const lines = ["World Cup Friends Predictor", "", "Leaderboard:"];
  ranking.forEach((participant, index) => {
    lines.push(`${index + 1}. ${participant.name} - ${participant.score} pts`);
  });
  lines.push("", "Top Champion Picks:");
  Object.entries(countPicks("champion"))
    .sort((a, b) => b[1] - a[1])
    .forEach(([team, count]) => lines.push(`${team}: ${count}`));
  try {
    await navigator.clipboard.writeText(lines.join("\n"));
    toast("Summary copied.");
  } catch {
    toast("Copy failed. Browser blocked clipboard access.");
  }
}

function toast(message) {
  const element = qs("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timeout);
  toast.timeout = setTimeout(() => element.classList.remove("show"), 2400);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function init() {
  populateDatalists();
  buildFields();
  setupTabs();
  setupEvents();
  render();
}

init();
