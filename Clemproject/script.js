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
    type: 'landfill',
    icon: 'images/Bag.jpg',
    explanation: 'Bags tangle in recycling machines and cause damage.'
  },
  {
    name: 'Candy/Chip Bag',
    type: 'landfill',
    icon: 'images/Candy.jpg',
    explanation: 'Mixed materials cannot be separated for recycling.'
  }
];

const level2Items = [
  {
    name: 'Clear Plastic Clamshell Container',
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
    name: 'Hot Coffee Cup and Lid',
    type: 'landfill',
    icon: 'images/Coffee.jpg',
    explanation: 'Plastic lining prevents paper cup from being recycled.'
  },
  {
    name: 'Paper Towel',
    type: 'landfill',
    icon: 'images/PaperTowel.jpg',
    explanation: 'Fibers are too short to be recycled after use.'
  }
];

const level3Items = [
  {
    name: '#7 PLA Plastics',
    type: 'landfill',
    icon: 'images/7Plastic.jpg',
    explanation: 'Plant-based plastics need special facilities to break down.'
  },
  {
    name: 'Milk or Juice Carton',
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
    type: 'landfill',
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
  'Clear Plastic Clamshell Container': 'Clear plastic containers (except #7 PLA) are recyclable.',
  'Plastic Detergent Jug': 'Plastic jugs and bottles are recyclable. Give them a quick rinse!',
  'Hot Coffee Cup and Lid': 'Coffee cups have a plastic lining that prevents recycling.',
  'Paper Towel': 'Used paper towels cannot be recycled and belong in the landfill.',
  '#7 PLA Plastics': 'Plant-based plastics require special processing and go to landfill.',
  'Milk or Juice Carton': 'Modern recycling facilities can process cartons.',
  'Aluminum Foil': 'Clean aluminum foil can be recycled with other metals.',
  'Plastic Utensils': 'Disposable utensils are too small and mixed for recycling.'
};

// Badges definitions
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
let spawnInterval = 15000; // Start at 15 seconds
const minSpawnInterval = 5000; // Minimum 5 seconds
const spawnDecrease = 500; // Decrease by 0.5 seconds each spawn

// Screen element references
let activeConveyorEl = null;
let activeProgressEl = null;
let activeFeedbackEl = null;
let activeLeftLabelEl = null;

/*****************************************************
  Screen Navigation
*****************************************************/
function showScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
  });

  // Handle level screens specially
  if (screenId.startsWith('game')) {
    const levelNum = screenId.replace('game', '');
    document.getElementById(`gameScreen${levelNum}`).classList.add('active');
  } else {
    // Show the requested screen
    document.getElementById(`${screenId}Screen`).classList.add('active');
  }
}

function completeTutorial() {
  // Unlock level1
  const level1Btn = document.getElementById('level1');
  level1Btn.disabled = false;
  level1Btn.classList.remove('disabled');

  // Earn "Eco Enthusiast" badge
  if (!earnedBadges.includes('Eco Enthusiast')) {
    earnedBadges.push('Eco Enthusiast');
    updateBadges();
  }
  showScreen('levels');
}

/*****************************************************
  Level Management
*****************************************************/
function generateLevelItems(level) {
  let availableItems = [];
  
  // Add items based on level
  if (level >= 1) availableItems = availableItems.concat(level1Items);
  if (level >= 2) availableItems = availableItems.concat(level2Items);
  if (level >= 3) availableItems = availableItems.concat(level3Items);
  
  // Generate items array
  items = [];
  for (let i = 0; i < 75; i++) {
    const rand = Math.floor(Math.random() * availableItems.length);
    items.push({...availableItems[rand]});
  }
}

function showLevelTutorial(level) {
  // Create tutorial modal
  const modal = document.createElement('div');
  modal.className = 'level-tutorial-modal';
  
  const tutorialContent = {
    1: "Level 1: Learn about basic recyclables and landfill items. Items will appear every 15 seconds.",
    2: "Level 2: New items added! Watch for glass and paper. Remember previous items too!",
    3: "Level 3: Advanced sorting with all items. Stay focused as items move faster!"
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
  // Reset variables
  itemIndex = 0;
  progress = 0;
  spawnInterval = 15000;
  currentItem = null;
  
  // Get screen elements
  activeConveyorEl = document.getElementById(`conveyor${level}`);
  activeProgressEl = document.getElementById(`progressBar${level}`);
  activeFeedbackEl = document.getElementById(`feedbackMessage${level}`);
  activeLeftLabelEl = document.getElementById(`progressLeftLabel${level}`);
  
  // Clear previous state
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
    completeLevel();
    return;
  }

  currentItem = { ...items[itemIndex] };
  itemIndex++;

  const itemEl = document.createElement('div');
  itemEl.className = 'item';
  itemEl.innerHTML = `<img src="${currentItem.icon}" alt="${currentItem.name}">`;
  activeConveyorEl.appendChild(itemEl);

  setTimeout(() => {
    itemEl.style.left = '85%';
  }, 50);

  // Decrease spawn interval
  spawnInterval = Math.max(minSpawnInterval, spawnInterval - spawnDecrease);

  // Remove item if not sorted in time
  setTimeout(() => {
    if (itemEl.parentNode === activeConveyorEl) {
      updatePoints(-5);
      showFeedback(false, currentItem, 'Too slow...');
      itemEl.remove();
      currentItem = null;
      spawnItem();
    }
  }, spawnInterval);
}

function sortItem(binType) {
  if (!currentItem) return; // no item to sort

  const correct = (binType === currentItem.type);
  if (correct) {
    updatePoints(10);
    progress += 10;
  } else {
    updatePoints(-5);
  }

  // Update progress bar & label
  activeProgressEl.style.width = progress + '%';
  activeLeftLabelEl.textContent = progress + '%';

  // Show feedback
  showFeedback(correct, currentItem);

  // Remove item
  const itemEl = activeConveyorEl.querySelector('.item');
  if (itemEl) itemEl.remove();
  currentItem = null;

  // Check if level is complete
  if (progress >= 100) {
    completeLevel();
  } else {
    // Next item
    spawnItem();
  }
}

function completeLevel() {
  // Unlock next level if applicable
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

  updateBadges();
  showScreen('levels');
}

function exitLevel() {
  showScreen('levels');
  if (activeConveyorEl) activeConveyorEl.innerHTML = '';
  if (activeFeedbackEl) activeFeedbackEl.innerHTML = '';
  currentItem = null;
}

/*****************************************************
  Points & Badges
*****************************************************/
function updatePoints(delta) {
  points = Math.max(0, points + delta);
  document.querySelectorAll('.points').forEach((el) => {
    el.textContent = points + ' points';
  });
  checkBadges();
}

function checkBadges() {
  if (points >= 50 && !earnedBadges.includes('Recycling Rookie')) {
    earnedBadges.push('Recycling Rookie');
  }
  if (points >= 500 && !earnedBadges.includes('Point Collector')) {
    earnedBadges.push('Point Collector');
  }
  
  // Check for Master Recycler
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

  // Clear existing feedback
  activeFeedbackEl.innerHTML = '';

  // If we override with "Too slow...", show that
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

  // Otherwise show normal correct/incorrect feedback
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
    explanationEl.textContent = correct
      ? 'Correct sorting!'
      : 'Wrong bin!';
  }

  activeFeedbackEl.appendChild(verdictEl);
  activeFeedbackEl.appendChild(explanationEl);
}

/*****************************************************
  Initialization
*****************************************************/
updateBadges();