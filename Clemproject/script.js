/*****************************************************
  Core Functions - Defined First
*****************************************************/
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  if (screenId.startsWith('game')) {
    const levelNum = screenId.replace('game', '');
    document.getElementById(`gameScreen${levelNum}`).classList.add('active');
  } else {
    document.getElementById(`${screenId}Screen`).classList.add('active');
  }
}

function updatePoints(delta) {
  points = Math.max(0, points + delta);
  levelStats.totalPoints += delta;
  
  document.querySelectorAll('.points').forEach((el) => {
    el.textContent = points + ' points';
    el.classList.add('highlight');
    setTimeout(() => el.classList.remove('highlight'), 200);
  });
  
  checkBadges();
}

/*****************************************************
  Level-specific Items
*****************************************************/
const level1Items = [
  {
    name: 'Aluminum Can',
    type: 'recycle',
    icon: 'images/Can.png',
    explanation: 'Metal containers are always recyclable.'
  },
  {
    name: 'Plastic Water Bottle',
    type: 'recycle',
    icon: 'images/Plastic.jpg',
    explanation: 'Plastic bottles are recyclable when empty and clean.'
  },
  {
    name: 'Plastic Bag',
    type: 'trash',
    icon: 'images/Bag.jpg',
    explanation: 'Bags tangle in recycling machines and cause damage.'
  },
  {
    name: 'Candy/Chip Bag',
    type: 'trash',
    icon: 'images/Candy.jpg',
    explanation: 'Mixed materials cannot be separated for recycling.'
  }
];

const level2Items = [
  {
    name: 'Clear Plastic Container',
    type: 'recycle',
    icon: 'images/PlasticContainer.jpg',
    explanation: 'Clear plastic containers can be made into new products.'
  },
  {
    name: 'Plastic Detergent Jug',
    type: 'recycle',
    icon: 'images/Laundry.jpg',
    explanation: 'Plastic jugs are recyclable after a quick rinse.'
  },
  {
    name: 'Hot Coffee Cup',
    type: 'trash',
    icon: 'images/Coffee.jpg',
    explanation: 'Plastic lining prevents paper cup from being recycled.'
  },
  {
    name: 'Paper Towel',
    type: 'trash',
    icon: 'images/PaperTowel.jpg',
    explanation: 'Fibers are too short to be recycled after use.'
  }
];

const level3Items = [
  {
    name: '#7 PLA Plastics',
    type: 'trash',
    icon: 'images/7Plastic.jpg',
    explanation: 'Plant-based plastics need special facilities to break down.'
  },
  {
    name: 'Milk Carton',
    type: 'recycle',
    icon: 'images/MilkandJuice.jpg',
    explanation: 'Modern facilities can separate and recycle the materials.'
  },
  {
    name: 'Aluminum Foil',
    type: 'recycle',
    icon: 'images/AluminiumFoil.jpg',
    explanation: 'Clean foil can be melted down with other metals.'
  },
  {
    name: 'Plastic Utensils',
    type: 'trash',
    icon: 'images/PlasticUtensials.jpg',
    explanation: 'Too small to be sorted by recycling machines.'
  }
];

// Explanations for feedback
const EXPLANATIONS = {
  'Aluminum Can': 'Metal cans are always recyclable and can be recycled infinitely.',
  'Plastic Water Bottle': 'Clean plastic bottles are recyclable. Remember to empty them first!',
  'Plastic Bag': 'Plastic bags tangle in recycling machinery and belong in the landfill.',
  'Candy/Chip Bag': 'Multi-layer packaging cannot be separated for recycling.',
  'Clear Plastic Container': 'Clear plastic containers (except #7 PLA) are recyclable.',
  'Plastic Detergent Jug': 'Plastic jugs and bottles are recyclable. Give them a quick rinse!',
  'Hot Coffee Cup': 'Coffee cups have a plastic lining that prevents recycling.',
  'Paper Towel': 'Used paper towels cannot be recycled and belong in the landfill.',
  '#7 PLA Plastics': 'Plant-based plastics require special processing and go to landfill.',
  'Milk Carton': 'Modern recycling facilities can process cartons.',
  'Aluminum Foil': 'Clean aluminum foil can be recycled with other metals.',
  'Plastic Utensils': 'Disposable utensils are too small and mixed for recycling.'
};

// Badge definitions
const badges = {
  'Recycling Rookie': 'Score 50 points',
  'Waste Warrior': 'Complete Level 1',
  'Sorting Specialist': 'Complete Level 2',
  'Environmental Expert': 'Complete Level 3',
  'Perfect Score': 'Get 100% accuracy in any level',
  'Speed Sorter': 'Sort 5 items in under 30 seconds',
  'Eco Enthusiast': 'Play all tutorials',
  'Point Collector': 'Earn 500 total points',
  'Master Recycler': 'Unlock all badges'
};

/*****************************************************
  Global State
*****************************************************/
let points = 0;
let currentLevel = 0;
let progress = 0;
let currentItem = null;
let earnedBadges = [];
let itemIndex = 0;
let items = [];
let levelStats = {
  correctItems: 0,
  recyclingContaminated: 0,
  recyclingInTrash: 0,
  totalPoints: 0
};

// Screen element references
let activeConveyorEl = null;
let activeProgressEl = null;
let activeFeedbackEl = null;
let activeLeftLabelEl = null;

/*****************************************************
  Tutorial Functions
*****************************************************/
function completeTutorial() {
  const level1Btn = document.getElementById('level1');
  level1Btn.disabled = false;
  level1Btn.classList.remove('disabled');

  if (!earnedBadges.includes('Eco Enthusiast')) {
    earnedBadges.push('Eco Enthusiast');
    updateBadges();
  }
  showScreen('levels');
}

/*****************************************************
  Level Management Functions
*****************************************************/
function generateLevelItems(level) {
  let availableItems = [];
  
  switch(level) {
    case 1:
      availableItems = level1Items;
      break;
    case 2:
      availableItems = [...level1Items, ...level2Items];
      break;
    case 3:
      availableItems = [...level1Items, ...level2Items, ...level3Items];
      break;
  }
  
  items = [];
  for (let i = 0; i < 20; i++) { // Reduced from 75 to make levels shorter
    const rand = Math.floor(Math.random() * availableItems.length);
    items.push({...availableItems[rand]});
  }
}

function calculateSpawnInterval(level) {
  const baseIntervals = {
    1: 15000,
    2: 12000,
    3: 9000
  };
  
  const minIntervals = {
    1: 5000,
    2: 4000,
    3: 3000
  };
  
  const currentInterval = baseIntervals[level] - (progress * 75);
  return Math.max(minIntervals[level], currentInterval);
}

function showLevelTutorial(level) {
  const modal = document.createElement('div');
  modal.className = 'level-tutorial-modal';
  
  const tutorialContent = {
    1: "Level 1: Learn about basic recyclables and landfill items.",
    2: "Level 2: New items added! Watch for containers and paper products.",
    3: "Level 3: Advanced sorting with special materials. Stay focused!"
  };

  modal.innerHTML = `
    <div class="tutorial-content">
      <h2>Level ${level}</h2>
      <p>${tutorialContent[level]}</p>
      <div class="level-items">
        <h3>Items in this level:</h3>
        ${generateItemList(level)}
      </div>
      <button onclick="closeLevelTutorial(${level})">Start Level</button>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function generateItemList(level) {
  let items = [];
  if (level >= 1) items = items.concat(level1Items);
  if (level >= 2) items = items.concat(level2Items);
  if (level >= 3) items = items.concat(level3Items);
  
  return items.map(item => `
    <div class="tutorial-item">
      <img src="${item.icon}" alt="${item.name}">
      <div class="tutorial-item-info">
        <div class="tutorial-item-name">${item.name} → ${item.type}</div>
        <div class="tutorial-item-explanation">${item.explanation}</div>
      </div>
    </div>
  `).join('');
}

function closeLevelTutorial(level) {
  const modal = document.querySelector('.level-tutorial-modal');
  if (modal) {
    modal.remove();
    initializeLevel(level);
  }
}

function initializeLevel(level) {
  levelStats = {
    correctItems: 0,
    recyclingContaminated: 0,
    recyclingInTrash: 0,
    totalPoints: 0
  };
  
  itemIndex = 0;
  progress = 0;
  currentItem = null;
  
  activeConveyorEl = document.getElementById(`conveyor${level}`);
  activeProgressEl = document.getElementById(`progressBar${level}`);
  activeFeedbackEl = document.getElementById(`feedbackMessage${level}`);
  activeLeftLabelEl = document.getElementById(`progressLeftLabel${level}`);
  
  if (activeConveyorEl) activeConveyorEl.innerHTML = '';
  if (activeFeedbackEl) activeFeedbackEl.innerHTML = '';
  if (activeProgressEl) activeProgressEl.style.width = '0%';
  if (activeLeftLabelEl) activeLeftLabelEl.textContent = '0%';
  
  spawnItem();
}

function startGameLevel(level) {
  currentLevel = level;
  showScreen('game' + level);
  generateLevelItems(level);
  showLevelTutorial(level);
}

function spawnItem() {
  if (itemIndex >= items.length) {
    showLevelComplete();
    return;
  }

  currentItem = { ...items[itemIndex] };
  itemIndex++;

  const itemEl = document.createElement('div');
  itemEl.className = 'item';
  itemEl.innerHTML = `<img src="${currentItem.icon}" alt="${currentItem.name}">`;
  activeConveyorEl.appendChild(itemEl);

  const speed = calculateSpawnInterval(currentLevel);
  itemEl.style.setProperty('--speed', `${speed/1000}s`);

  setTimeout(() => {
    itemEl.style.left = '85%';
  }, 50);

  setTimeout(() => {
    if (itemEl.parentNode === activeConveyorEl) {
      updatePoints(-5);
      showFeedback(false, currentItem, 'Too slow...');
      itemEl.remove();
      currentItem = null;
      spawnItem();
    }
  }, speed);
}

function sortItem(binType) {
  if (!currentItem) return;

  const isRecyclable = currentItem.type === 'recycle';
  const correct = (binType === currentItem.type);
  
  if (correct) {
    updatePoints(5);
    levelStats.correctItems++;
    progress += 10;
  } else if (isRecyclable && binType === 'trash') {
    updatePoints(-5);
    levelStats.recyclingInTrash++;
  } else {
    updatePoints(-10);
    levelStats.recyclingContaminated++;
  }

  activeProgressEl.style.width = progress + '%';
  activeLeftLabelEl.textContent = progress + '%';

  showFeedback(correct, currentItem);

  const itemEl = activeConveyorEl.querySelector('.item');
  if (itemEl) itemEl.remove();
  currentItem = null;

  if (progress >= 100) {
    completeLevel();  // This will handle level completion
  } else {
    spawnItem();
  }
}
function showLevelComplete() {
  // Remove any existing modals first
  const existingModal = document.querySelector('.level-complete-modal');
  const existingOverlay = document.querySelector('.modal-overlay');
  
  if (existingModal) existingModal.remove();
  if (existingOverlay) existingOverlay.remove();
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'level-complete-modal';
  
  modal.innerHTML = `
    <div class="level-complete-content">
      <h2>Level Complete!</h2>
      <div class="level-stats">
        <p><span class="error-mark">✗</span> Threw away recyclable items: ${levelStats.recyclingInTrash} times</p>
        <p><span class="error-mark">✗</span> Contaminated the recycling: ${levelStats.recyclingContaminated} times</p>
        <p><span class="check-mark">✓</span> Correctly sorted: ${levelStats.correctItems} items</p>
        <p class="level-points">${levelStats.totalPoints} pts</p>
      </div>
      <div class="badges-section">
        <h3>Badges obtained</h3>
        <div class="level-badges"></div>
      </div>
      <div class="level-complete-buttons">
        <button onclick="exitToMenu()">← Return Home</button>
        ${currentLevel < 3 ? '<button onclick="startNextLevel()">Next →</button>' : ''}
      </div>
    </div>
  `;
  
  // Append overlay first, then modal
  document.body.appendChild(overlay);
  document.body.appendChild(modal);
  
  // Update badges in the modal
  updateLevelBadges();
}

function updateLevelBadges() {
  const badgeContainer = document.querySelector('.level-badges');
  if (!badgeContainer) return;

  // Clear previous badges
  badgeContainer.innerHTML = '';

  // Add each earned badge to the modal
  earnedBadges.forEach((badgeName) => {
    const badgeEl = document.createElement('div');
    badgeEl.className = 'badge earned';
    badgeEl.innerHTML = `<h3>${badgeName}</h3><p>${badges[badgeName]}</p>`;
    badgeContainer.appendChild(badgeEl);
  });
}

function exitToMenu() {
  const modal = document.querySelector('.level-complete-modal');
  const overlay = document.querySelector('.modal-overlay');
  if (modal) modal.remove();
  if (overlay) overlay.remove();
  showScreen('levels');
}
function startNextLevel() {
  const modal = document.querySelector('.level-complete-modal');
  const overlay = document.querySelector('.modal-overlay');
  if (modal) modal.remove();
  if (overlay) overlay.remove();
  startGameLevel(currentLevel + 1);
}

function completeLevel() {
  // Unlock next level and award badges
  if (currentLevel === 1) {
    const level2Btn = document.getElementById('level2');
    level2Btn.disabled = false;
    level2Btn.classList.remove('disabled');
    if (!earnedBadges.includes('Waste Warrior')) {
      earnedBadges.push('Waste Warrior');
    }
  } else if (currentLevel === 2) {
    const level3Btn = document.getElementById('level3');
    level3Btn.disabled = false;
    level3Btn.classList.remove('disabled');
    if (!earnedBadges.includes('Sorting Specialist')) {
      earnedBadges.push('Sorting Specialist');
    }
  } else if (currentLevel === 3) {
    if (!earnedBadges.includes('Environmental Expert')) {
      earnedBadges.push('Environmental Expert');
    }
  }

  // Check for perfect score
  if (levelStats.recyclingContaminated === 0 && levelStats.recyclingInTrash === 0 && !earnedBadges.includes('Perfect Score')) {
    earnedBadges.push('Perfect Score');
  }

  updateBadges();
  // Instead of switching screens immediately, show the level complete modal:
  showLevelComplete();
}

function exitLevel() {
  showScreen('levels');
  if (activeConveyorEl) activeConveyorEl.innerHTML = '';
  if (activeFeedbackEl) activeFeedbackEl.innerHTML = '';
  currentItem = null;
}

/*****************************************************
  Badges
*****************************************************/
function checkBadges() {
  if (points >= 50 && !earnedBadges.includes('Recycling Rookie')) {
    earnedBadges.push('Recycling Rookie');
  }
  if (points >= 500 && !earnedBadges.includes('Point Collector')) {
    earnedBadges.push('Point Collector');
  }
  
  const totalBadges = Object.keys(badges).length;
  if (earnedBadges.length === totalBadges - 1 && !earnedBadges.includes('Master Recycler')) {
    earnedBadges.push('Master Recycler');
  }
  
  updateBadges();
}

function updateBadges() {
  const container = document.querySelector('.badges-grid');
  if (!container) return;

  container.innerHTML = '';
  Object.entries(badges).forEach(([name, desc]) => {
    const badge = document.createElement('div');
    badge.className = 'badge' + (earnedBadges.includes(name) ? ' earned' : '');
    badge.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;
    container.appendChild(badge);
  });
}

/*****************************************************
  Feedback
*****************************************************/
function showFeedback(correct, item, overrideMsg) {
  if (!activeFeedbackEl) return;

  activeFeedbackEl.innerHTML = '';

  if (overrideMsg) {
    const verdictEl = document.createElement('div');
    verdictEl.className = 'verdict oops';
    verdictEl.textContent = 'OOPS!';
    const explanationEl = document.createElement('div');
    explanationEl.className = 'explanation';
    explanationEl.textContent = overrideMsg;
    activeFeedbackEl.appendChild(verdictEl);
    activeFeedbackEl.appendChild(explanationEl);
    return;
  }

  const verdictEl = document.createElement('div');
  verdictEl.classList.add('verdict');
  verdictEl.textContent = correct ? 'GOOD!' : 'OOPS!';
  verdictEl.classList.add(correct ? 'good' : 'oops');

  const explanationEl = document.createElement('div');
  explanationEl.className = 'explanation';

  if (item && EXPLANATIONS[item.name]) {
    if (correct) {
      explanationEl.textContent = `${item.name} belongs in ${item.type}. ${EXPLANATIONS[item.name]}`;
    } else {
      explanationEl.textContent = `${item.name} actually belongs in ${item.type}. ${EXPLANATIONS[item.name]}`;
    }
  } else {
    explanationEl.textContent = correct ? 'Correct sorting!' : 'Wrong bin!';
  }

  activeFeedbackEl.appendChild(verdictEl);
  activeFeedbackEl.appendChild(explanationEl);
}

// Initialize badges on page load
updateBadges();