/*****************************************************
  1) Item definitions 
  2) Explanations for feedback
  3) Badges
*****************************************************/

// “Base” set of items
const baseItems = [
    {
      name: 'Banana Peel',
      type: 'compost',
      icon: 'images/banana-peel.png'
    },
    {
      name: 'Aluminum Can',
      type: 'recycle',
      icon: 'images/aluminum-can.png'
    },
    {
      name: 'Plastic Bottle',
      type: 'recycle',
      icon: 'images/plastic-bottle.png'
    },
    {
      name: 'Candy Wrapper',
      type: 'trash',
      icon: 'images/candy-wrapper.png'
    },
    {
      name: 'Chip Bag',
      type: 'trash',
      icon: 'images/chip-bag.png'
    },
    {
      name: 'Food Scraps',
      type: 'compost',
      icon: 'images/food-scraps.png'
    },
    {
      name: 'Paper',
      type: 'recycle',
      icon: 'images/paper.png'
    },
    {
      name: 'Pizza Box (Greasy)',
      type: 'trash',
      icon: 'images/pizza-box.png'
    },
    {
      name: 'Apple Core',
      type: 'compost',
      icon: 'images/apple-core.png'
    },
    {
      name: 'Glass Bottle',
      type: 'recycle',
      icon: 'images/glass-bottle.png'
    }
  ];
  
  // Explanations for feedback
  const EXPLANATIONS = {
    'Banana Peel':          'Banana peels break down into compost quickly.',
    'Aluminum Can':         'Aluminum is recyclable and can be used repeatedly.',
    'Plastic Bottle':       'Plastic bottles can be recycled (rinse them first!).',
    'Candy Wrapper':        'Wrappers often have plastic/foil layers, so trash.',
    'Chip Bag':             'Chip bags are typically not recyclable. Trash it.',
    'Food Scraps':          'All leftover food can become soil via composting.',
    'Paper':                'Paper is recyclable (keep it clean & dry).',
    'Pizza Box (Greasy)':   'Greasy boxes can’t be recycled; they belong in trash.',
    'Apple Core':           'Organic apple cores break down into compost.',
    'Glass Bottle':         'Glass is recyclable in most cities/towns.'
  };
  
  // Generate a large item list (~75 items total, or however many you want)
  const items = [];
  for (let i = 0; i < 75; i++) {
    const rand = Math.floor(Math.random() * baseItems.length);
    items.push({...baseItems[rand]});
  }
  
  const badges = {
    'Recycling Rookie': 'Score 50 points',
    'Compost Champion': 'Sort 10 compost items correctly',
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
  let currentLevel = 0; // 1,2,3
  let progress = 0;
  let currentItem = null;
  let earnedBadges = [];
  let itemIndex = 0; // which item from items[] we are on
  
  // We'll store references to each level's conveyor, progress bar, feedback area
  let activeConveyorEl = null;
  let activeProgressEl = null;
  let activeFeedbackEl = null;
  let activeLeftLabelEl = null;
  
  
  /*****************************************************
    Screen Navigation
  *****************************************************/
 function showScreen(screenId) {
  // Hide all .screen
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
  
    // Earn “Eco Enthusiast” badge
    if (!earnedBadges.includes('Eco Enthusiast')) {
      earnedBadges.push('Eco Enthusiast');
      updateBadges();
    }
    showScreen('levels');
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
    // Basic example checks
    if (points >= 50 && !earnedBadges.includes('Recycling Rookie')) {
      earnedBadges.push('Recycling Rookie');
    }
    // ... more logic for awarding badges as needed
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
    Level Handling
  *****************************************************/
    function startGameLevel(level) {
        currentLevel = level;
        showScreen('game' + level);
      
        // Reset item index and progress
        itemIndex = 0;
        progress = 0;
        currentItem = null;
      
        // Get references to active screen elements
        activeConveyorEl = document.getElementById(`conveyor${level}`);
        activeProgressEl = document.getElementById(`progressBar${level}`);
        activeFeedbackEl = document.getElementById(`feedbackMessage${level}`);
        activeLeftLabelEl = document.getElementById(`progressLeftLabel${level}`);
      
        // Clear old item or feedback
        if (activeConveyorEl) activeConveyorEl.innerHTML = '';
        if (activeFeedbackEl) activeFeedbackEl.innerHTML = '';
        if (activeProgressEl) activeProgressEl.style.width = '0%';
        if (activeLeftLabelEl) activeLeftLabelEl.textContent = '0%';
      
        spawnItem();
      }
  
  function spawnItem() {
    // If out of items, forcibly end level
    if (itemIndex >= items.length) {
      completeLevel();
      return;
    }
  
    currentItem = { ...items[itemIndex] };
    itemIndex++;
  
    // Create the item on the active conveyor
    const itemEl = document.createElement('div');
    itemEl.className = 'item';
    itemEl.innerHTML = `<img src="${currentItem.icon}" alt="${currentItem.name}">`;
    activeConveyorEl.appendChild(itemEl);
  
    // Slide it across
    setTimeout(() => {
      itemEl.style.left = '85%';
    }, 50);
  
    // If user never clicks, remove after 10s and show next item
    setTimeout(() => {
      if (itemEl.parentNode === activeConveyorEl) {
        // Timed out
        updatePoints(-5);
        showFeedback(false, currentItem, 'Too slow...');
        itemEl.remove();
        currentItem = null;
        spawnItem();
      }
    }, 10000);
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
      // Example badge for finishing L1
      if (!earnedBadges.includes('Waste Warrior')) {
        earnedBadges.push('Waste Warrior');
      }
    } else if (currentLevel === 2) {
      const level3Btn = document.getElementById('level3');
      level3Btn.disabled = false;
      level3Btn.classList.remove('disabled');
      // Badge
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
  
  // If user clicks the ← button in a level screen:
  function exitLevel() {
    showScreen('levels');
    activeConveyorEl.innerHTML = '';
    activeFeedbackEl.innerHTML = '';
    currentItem = null;
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