const tarokkaDeck = [
    { name: "The Artifact", symbol: "⚔️", suit: "High Deck", image: "Images/high deck artifact.png" },
    { name: "The Beast", symbol: "🐺", suit: "High Deck", image: "Images/high deck beast.png" },
    { name: "The Broken One", symbol: "💔", suit: "High Deck", image: "Images/high deck broken one.png" },
    { name: "The Darklord", symbol: "👑", suit: "High Deck", image: "Images/high deck darklord.png" },
    { name: "The Donjon", symbol: "🏰", suit: "High Deck", image: "Images/high deck donjon.png" },
    { name: "The Ghost", symbol: "👻", suit: "High Deck", image: "Images/high deck ghost.png" },
    { name: "The Innocent", symbol: "👶", suit: "High Deck", image: "Images/high deck innocent.png" },
    { name: "The Mists", symbol: "🌫️", suit: "High Deck", image: "Images/high deck mists.png" },
    { name: "The Executioner", symbol: "⚜️", suit: "High Deck", image: "Images/high deck executioner.jpg" },
    { name: "The Raven", symbol: "🦅", suit: "High Deck", image: "Images/high deck raven.png" },
    { name: "The Seer", symbol: "🔮", suit: "High Deck", image: "Images/high deck seer.png" },
    { name: "The Tempter", symbol: "🐍", suit: "High Deck", image: "Images/high deck tempter.png" },
    { name: "The Horseman", symbol: "🐴", suit: "High Deck", image: "Images/high deck horseman.png" },
    { name: "The Marionette", symbol: "🚶", suit: "High Deck", image: "Images/high deck marionette.png" },
    { name: "One of Swords", symbol: "⚔️", suit: "Swords", image: "Images/1 of swords avenger.png" },
    { name: "Two of Swords", symbol: "⚔️", suit: "Swords", image: "Images/2 of swords paladin.png" },
    { name: "Three of Swords", symbol: "⚔️", suit: "Swords", image: "Images/3 of swords soldier.png" },
    { name: "Four of Swords", symbol: "⚔️", suit: "Swords", image: "Images/4 of swords mercenary.png" },
    { name: "Five of Swords", symbol: "⚔️", suit: "Swords", image: "Images/5 of swords berserker.png" },
    { name: "Six of Swords", symbol: "⚔️", suit: "Swords", image: "Images/5 of swords myrmidon.png" },
    { name: "Seven of Swords", symbol: "⚔️", suit: "Swords", image: "Images/7 of swords hooded one.png" },
    { name: "Eight of Swords", symbol: "⚔️", suit: "Swords", image: "Images/5 of swords myrmidon.png" },
    { name: "Nine of Swords", symbol: "⚔️", suit: "Swords", image: "Images/9 of swords torturer.png" },
    { name: "Master of Swords", symbol: "⚔️", suit: "Swords", image: "Images/master of swords warrior.jpg" },
    { name: "One of Coins", symbol: "🪙", suit: "Coins", image: "Images/1 of coins swashbuckler.png" },
    { name: "Two of Coins", symbol: "🪙", suit: "Coins", image: "Images/2 of coins philsnthropist.png" },
    { name: "Three of Coins", symbol: "🪙", suit: "Coins", image: "Images/3 of coins trader.png" },
    { name: "Four of Coins", symbol: "🪙", suit: "Coins", image: "Images/4 of coins merchant.png" },
    { name: "Five of Coins", symbol: "🪙", suit: "Coins", image: "Images/5 of coins guild member.png" },
    { name: "Six of Coins", symbol: "🪙", suit: "Coins", image: "Images/6 of coins beggar.png" },
    { name: "Seven of Coins", symbol: "🪙", suit: "Coins", image: "Images/7 of coins thief.png" },
    { name: "Eight of Coins", symbol: "🪙", suit: "Coins", image: "Images/8 of coins tax collector.png" },
    { name: "Nine of Coins", symbol: "🪙", suit: "Coins", image: "Images/9 of coins miser.png" },
    { name: "Master of Coins", symbol: "🪙", suit: "Coins", image: "Images/master of coins rogue.png" },
    { name: "One of Stars", symbol: "⭐", suit: "Stars", image: "Images/1 of stars transmuter.png" },
    { name: "Two of Stars", symbol: "⭐", suit: "Stars", image: "Images/2 of stars diviner.png" },
    { name: "Three of Stars", symbol: "⭐", suit: "Stars", image: "Images/3 of stars enchanter.png" },
    { name: "Four of Stars", symbol: "⭐", suit: "Stars", image: "Images/4 of stars abjurer.png" },
    { name: "Five of Stars", symbol: "⭐", suit: "Stars", image: "Images/5 of stars elementalist.jpg" },
    { name: "Six of Stars", symbol: "⭐", suit: "Stars", image: "Images/6 of stars evoker.png" },
    { name: "Seven of Stars", symbol: "⭐", suit: "Stars", image: "Images/7 of stars illusionist.png" },
    { name: "Eight of Stars", symbol: "⭐", suit: "Stars", image: "Images/8 of stars necromancer.png" },
    { name: "Nine of Stars", symbol: "⭐", suit: "Stars", image: "Images/9 of stars conjurer.png" },
    { name: "Master of Stars", symbol: "⭐", suit: "Stars", image: "Images/master of stars wizard.png" },
    { name: "One of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/1 of glyphs monk.png" },
    { name: "Two of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/2 of glyphs missionary.png" },
    { name: "Three of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/3 of glyphs healer.png" },
    { name: "Four of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/4 of glyphs shepherd.png" },
    { name: "Five of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/5 of glyphs druid.png" },
    { name: "Six of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/6 of glyphs anarchist.png" },
    { name: "Seven of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/7 of glyphs charlatan.png" },
    { name: "Eight of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/8 of glyphs bishop.png" },
    { name: "Nine of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/9 of glyphs traitor.png" },
    { name: "Master of Glyphs", symbol: "🔮", suit: "Glyphs", image: "Images/master of glyphs priest.jpg" }
];

// Card tooltip mapping for revealed cards
const cardTooltips = {
    
    // Bottom slot specific tooltips for High Deck cards
    "The Artifact-Bottom": "Look for an entertaining man with a monkey. This man is more than he seems.",
    "The Beast-Bottom": "A werewolf holds a secret hatred for your enemy. Use her hatred to your advantage.",
    "The Broken One-Bottom": [
        "Your greatest ally will be a wizard. His mind is broken, but his spells are strong.",
        "I see a man of faith whose sanity hangs by a thread. He has lost someone close to him."
    ],
    "The Darklord-Bottom": "Ah, the worst of all truths: You must face the evil of this land alone!",
    "The Donjon-Bottom": [
        "Search for a troubled young man surrounded by wealth and madness. His home is his prison.",
        "Find a girl driven to insanity, locked in the heart of her dead father's house. Curing her madness is key to your success."
    ],
    "The Seer-Bottom": "Look for a dusk elf living among the Vistani. He has suffered a great loss and is haunted by dark dreams. Help him, and he will help you in return.",
    "The Ghost-Bottom": [
        "I see a fallen paladin of a fallen order of knights. He lingers like a ghost in a dead dragon's lair.",
        "Stir the spirit of the clumsy knight whose crypt lies deep within the castle."
    ],
    "The Executioner-Bottom": "Seek out the brother of the devil's bride. They call him 'the lesser,' but he has a powerful soul.",
    "The Horseman-Bottom": [
        "I see a dead man of noble birth, guarded by his widow. Return life to the dead man's corpse, and he will be your staunch ally.",
        "A man of death named Arrigal will forsake his dark lord to serve your cause. Beware! He has a rotten soul."
    ],
    "The Innocent-Bottom": "I see a young man with a kind heart. A mother's boy! He is strong in body but weak of mind. Seek him out in the village of Barovia.",
    "The Marionette-Bottom": [
        "What horror is this? I see a man made by a man. Ageless and alone, it haunts the towers of the castle.",
        "Look for a man of music, a man with two heads. He lives in a place of great hunger and sorrow."
    ],
    "The Mists-Bottom": "A Vistana wanders this land alone, searching for her mentor. She does not stay in one place for long. Seek her out at Saint Markovia's abbey, near the mists.",
    "The Raven-Bottom": "Find the leader of the feathered ones who live among the vines. Though old, he has one more fight left in him.",
    "The Tempter-Bottom": [
        "I see a child-a Vistana. You must hurry, for her fate hangs in the balance. Find her at the lake!",
        "I hear a wedding bell, or perhaps a death knell. It calls thee to a mountainside abbey, wherein you will find a woman who is more than the sum of her parts."
    ],
    
    // Center slot specific tooltips for High Deck cards
    "The Artifact-Center": "He lurks in the darkness where the morning light once shone-a sacred place.",
    "The Beast-Center": "The beast sits on his dark throne.",
    "The Broken One-Center": "He haunts the tomb of the man he envied above all.",
    "The Darklord-Center": "He lurks in the depths of darkness, in the one place to which he must return.",
    "The Donjon-Center": "He lurks in a hall of bones, in the dark pits of his castle.",
    "The Seer-Center": "He waits for you in a place of wisdom, warmth, and despair. Great secrets are there.",
    "The Ghost-Center": "Look to the father's tomb.",
    "The Executioner-Center": "I see a dark figure on a balcony, looking down upon this tortured land with a twisted smile.",
    "The Horseman-Center": "He lurks in the one place to which he must return. A place of death.",
    "The Innocent-Center": "He dwells with the one whose blood sealed his doom, a brother of light snuffed out too soon.",
    "The Marionette-Center": "Look to great heights. Find the beating heart of the castle. He waits nearby.",
    "The Mists-Center": "The cards can't see where the evil lurks. The mists obscure all!",
    "The Raven-Center": "Look to the mother's tomb.",
    "The Tempter-Center": "I see a secret place-a vault of temptation hidden behind a woman of great beauty. The evil waits atop his tower of treasure.",
    
    "One of Swords": "The treasure lies in a dragon's house, in hands once clean and now corrupted.",
    "Two of Swords": "I see a sleeping prince, a servant of light and the brother of darkness. The treasure lies with him.",
    "Three of Swords": "Go to the mountains. Climb the white tower guarded by golden knights.",
    "Four of Swords": "The thing you seek lies with the dead, under mountains of gold coins.",
    "Five of Swords": "Look for a den of wolves in the hills overlooking a mountain lake. The treasure belongs to Mother Night.",
    "Six of Swords": "Find the Mad Dog's crypt. The treasure lies within, beneath blackened bones.",
    "Seven of Swords": "I see a faceless god. He awaits you at the end of a long and winding road, deep in the mountains.",
    "Eight of Swords": "I see a throne fit for a king.",
    "Nine of Swords": "There is a town where all is not well. There you will find a house of corruption, and within, a dark room full of still ghosts.",
    "Master of Swords": "That which you seek lies in the womb of darkness, the devil's lair: the one place to which he must return.",
    "One of Stars": "Go to a place of dizzying heights, where the stone itself is alive!",
    "Two of Stars": "Look to the one who sees all. The treasure is hidden in her camp.",
    "Three of Stars": "I see a kneeling woman-a rose of great beauty plucked too soon. The master of the marsh knows of whom I speak.",
    "Four of Stars": "I see a fallen house guarded by a great stone dragon. Look to the highest peak.",
    "Five of Stars": "The treasure is hidden in a small castle beneath a mountain, guarded by amber giants.",
    "Six of Stars": "Search for the crypt of a wizard ordinaire. His staff is the key.",
    "Seven of Stars": "A man is not what he seems. He comes here in a carnival wagon. Therein lies what you seek.",
    "Eight of Stars": "A woman hangs above a roaring fire. Find her, and you will find the treasure.",
    "Nine of Stars": "I see a dead village, drowned by a river, ruled by one who has brought great evil into the world.",
    "Master of Stars": "Look for a wizard's tower on a lake. Let the wizard's name and servant guide you to that which you seek.",
    "One of Coins": "I see the skeleton of a deadly warrior, lying on a bed of stone flanked by gargoyles.",
    "Two of Coins": "Look to a place where sickness and madness are bred. Where children once cried, the treasure lies still.",
    "Three of Coins": "Look to the wizard of wines! In wood and sand the treasure hides.",
    "Four of Coins": "Seek a cask that once contained the finest wine, of which not a drop remains.",
    "Five of Coins": "I see a dark room full of bottles. It is the tomb of a guild member.",
    "Six of Coins": "A wounded elf has what you seek. He will part with the treasure to see his dark dreams fulfilled.",
    "Seven of Coins": "What you seek lies at the crossroads of life and death, among the buried dead.",
    "Eight of Coins": "The Vistani have what you seek. A missing child holds the key to the treasure's release.",
    "Nine of Coins": "Look for a fortress inside a fortress, in a place hidden behind fire.",
    "Master of Coins": "I see a nest of ravens. There you will find the prize.",
    "One of Glyphs": "The treasure you seek is hidden behind the sun, in the house of a saint.",
    "Two of Glyphs": "I see a garden dusted with snow, watched over by a scarecrow with a sackcloth grin. Look not to the garden but to the guardian.",
    "Three of Glyphs": "Look to the west. Find a pool blessed by the light of the white sun.",
    "Four of Glyphs": "Find the mother-she who gave birth to evil.",
    "Five of Glyphs": "An evil tree grows atop a hill of graves where the ancient dead sleep. The ravens can help you find it. Look for the treasure there.",
    "Six of Glyphs": "I see walls of bones, a chandelier of bones, and a table of bones-all that remains of enemies long forgotten.",
    "Seven of Glyphs": "I see a lonely mill on a precipice. The treasure lies within.",
    "Eight of Glyphs": "What you seek lies in a pile of treasure, beyond a set of amber doors.",
    "Nine of Glyphs": "Look for a wealthy woman. A staunch ally of the devil, she keeps the treasure under lock and key, with the bones of an ancient enemy.",
    "Master of Glyphs": "You will find what you seek in the castle, amid the ruins of a place of supplication."
};

// Function to get card tooltip, handling bottom and center slot specifics
function getCardTooltip(cardName, slotId) {
    // Check if it's a High Deck card in the bottom or center slot
    if (slotId === 'bottom' || slotId === 'center') {
        const slotSuffix = slotId === 'bottom' ? '-Bottom' : '-Center';
        const slotTooltipKey = cardName + slotSuffix;
        if (cardTooltips[slotTooltipKey]) {
            const tooltip = cardTooltips[slotTooltipKey];
            // If it's an array of options, select one at random
            if (Array.isArray(tooltip)) {
                return tooltip[Math.floor(Math.random() * tooltip.length)];
            }
            return tooltip;
        }
    }
    // Return regular tooltip
    return cardTooltips[cardName] || '';
}

// Helper function to get slot ID from element
function getSlotId(element) {
    for (const [id, slot] of Object.entries(slots)) {
        if (slot === element) {
            return id;
        }
    }
    return null;
}

let currentDeck = [...tarokkaDeck];
let dealtCards = [];

const deck = document.getElementById('deck');
const slots = {
    left: document.getElementById('slot-left'),
    top: document.getElementById('slot-top'),
    right: document.getElementById('slot-right'),
    bottom: document.getElementById('slot-bottom'),
    center: document.getElementById('slot-center')
};

function shuffleDeck() {
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]];
    }
    return currentDeck;
}

function createCardElement(cardData, index) {
    const card = document.createElement('div');
    card.className = 'card dealing';
    card.dataset.index = index;
    card.dataset.cardName = cardData.name;
    
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    const cardImage = document.createElement('img');
    cardImage.className = 'card-image';
    cardImage.src = cardData.image;
    cardImage.alt = cardData.name;
    
    cardFront.appendChild(cardImage);
    
    const cardBackFace = document.createElement('div');
    cardBackFace.className = 'card-back-face';
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBackFace);
    card.appendChild(cardInner);
    
    card.addEventListener('click', () => {
        if (!card.classList.contains('flipped')) {
            card.classList.add('flipped');
            const slot = card.parentElement;
            if (slot) {
                // Store original tooltip
                slot.dataset.originalTooltip = slot.dataset.tooltip;
                // Update with card-specific tooltip
                const slotId = getSlotId(slot);
                
                // Get or generate the card's tooltip (store it on the card for consistency)
                let cardTooltip;
                if (card.dataset.storedTooltip) {
                    // Use previously stored tooltip
                    cardTooltip = card.dataset.storedTooltip;
                } else {
                    // Generate new tooltip and store it on the card
                    cardTooltip = getCardTooltip(cardData.name, slotId);
                    card.dataset.storedTooltip = cardTooltip;
                }
                
                if (cardTooltip) {
                    slot.dataset.tooltip = cardTooltip;
                }
            }
        } else {
            card.classList.remove('flipped');
            const slot = card.parentElement;
            if (slot) {
                // Reset tooltip to original slot tooltip
                if (slot.dataset.originalTooltip) {
                    slot.dataset.tooltip = slot.dataset.originalTooltip;
                }
            }
        }
    });
    
    card.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        showContextMenu(event, card);
    });
    
    return card;
}

async function dealCards() {
    await clearSlots();
    dealtCards = [];
    shuffleDeck();
    
    // Separate cards into High Deck and non-High Deck
    const highDeckCards = currentDeck.filter(card => card.suit === 'High Deck');
    const nonHighDeckCards = currentDeck.filter(card => card.suit !== 'High Deck');
    
    // Shuffle both groups separately
    for (let i = highDeckCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [highDeckCards[i], highDeckCards[j]] = [highDeckCards[j], highDeckCards[i]];
    }
    
    for (let i = nonHighDeckCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nonHighDeckCards[i], nonHighDeckCards[j]] = [nonHighDeckCards[j], nonHighDeckCards[i]];
    }
    
    const slotOrder = ['left', 'top', 'right', 'bottom', 'center'];
    
    for (let i = 0; i < 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        
        let cardData;
        const slot = slotOrder[i];
        
        if (slot === 'bottom' || slot === 'center') {
            // Only High Deck cards for bottom and middle slots
            // Get random card and remove it from array
            const randomIndex = Math.floor(Math.random() * highDeckCards.length);
            cardData = highDeckCards[randomIndex];
            highDeckCards.splice(randomIndex, 1);
        } else {
            // Only non-High Deck cards for left, top, and right slots
            // Get random card and remove it from array
            const randomIndex = Math.floor(Math.random() * nonHighDeckCards.length);
            cardData = nonHighDeckCards[randomIndex];
            nonHighDeckCards.splice(randomIndex, 1);
        }
        
        const cardElement = createCardElement(cardData, i);
        slots[slot].appendChild(cardElement);
        dealtCards.push(cardData);
    }
}

function clearSlots() {
    const promises = [];
    
    Object.values(slots).forEach(slot => {
        const card = slot.querySelector('.card');
        if (card) {
            // Remove dealing class if present
            card.classList.remove('dealing');
            
            // Add random spin for each card
            const randomSpin = Math.random() * 120 - 60; // -60 to 60 degrees
            card.style.setProperty('--spin', randomSpin + 'deg');
            
            // Add fade-out animation class
            card.classList.add('fading-out');
            
            // Create promise for this slot's animation
            const promise = new Promise(resolve => {
                setTimeout(() => {
                    slot.innerHTML = '';
                    // Restore original tooltip
                    if (slot.dataset.originalTooltip) {
                        slot.dataset.tooltip = slot.dataset.originalTooltip;
                        delete slot.dataset.originalTooltip;
                    }
                    resolve();
                }, 1200);
            });
            
            promises.push(promise);
        } else {
            slot.innerHTML = '';
            // Restore original tooltip
            if (slot.dataset.originalTooltip) {
                slot.dataset.tooltip = slot.dataset.originalTooltip;
                delete slot.dataset.originalTooltip;
            }
        }
    });
    
    // Return promise that resolves when all animations complete
    return Promise.all(promises);
}

async function shuffleAndDeal() {
    deck.classList.add('shuffling');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    deck.classList.remove('shuffling');
    
    await dealCards();
}

deck.addEventListener('click', shuffleAndDeal);

// Modal elements
const modal = document.getElementById('cardSelectionModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
let currentSlot = null;

// Context menu elements
const contextMenu = document.getElementById('contextMenu');
const dealNewCardBtn = document.getElementById('dealNewCard');
const chooseFromMenuBtn = document.getElementById('chooseFromMenu');
let selectedCard = null;
let selectedSlot = null;

// Function to show context menu
function showContextMenu(event, card) {
    selectedCard = card;
    selectedSlot = card.parentElement;
    
    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;
    
    let x, y;
    
    // Handle both mouse and touch events
    if (event.clientX && event.clientY) {
        // Mouse event
        x = event.clientX;
        y = event.clientY;
    } else if (event.pageX && event.pageY) {
        // Touch event
        x = event.pageX;
        y = event.pageY;
    }
    
    if (x + menuWidth > window.innerWidth) {
        x = window.innerWidth - menuWidth - 10;
    }
    
    if (y + menuHeight > window.innerHeight) {
        y = window.innerHeight - menuHeight - 10;
    }
    
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.style.display = 'block';
}

// Function to hide context menu
function hideContextMenu() {
    contextMenu.style.display = 'none';
    selectedCard = null;
    selectedSlot = null;
}

// Function to deal a new card to the selected slot
function dealNewCardToSlot() {
    if (!selectedSlot) return;
    
    const slotId = selectedSlot.id;
    let availableCards = [];
    
    if (slotId === 'slot-bottom' || slotId === 'slot-center') {
        availableCards = tarokkaDeck.filter(card => card.suit === 'High Deck');
    } else {
        availableCards = tarokkaDeck.filter(card => card.suit !== 'High Deck');
    }
    
    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
    
    // Clear the slot immediately without animation
    selectedSlot.innerHTML = '';
    const newCardElement = createCardElement(randomCard, 0);
    newCardElement.classList.remove('flipped');
    newCardElement.classList.add('dealing');
    selectedSlot.appendChild(newCardElement);
    
    setTimeout(() => {
        newCardElement.classList.remove('dealing');
    }, 500);
    
    // Reset tooltip to original slot tooltip
    if (selectedSlot.dataset.originalTooltip) {
        selectedSlot.dataset.tooltip = selectedSlot.dataset.originalTooltip;
    }
    
    hideContextMenu();
}

// Function to show card menu from context
function showCardMenuFromContext() {
    if (!selectedSlot) return;
    showCardSelectionModal(selectedSlot);
    hideContextMenu();
}

// Function to reveal card in a specific slot
function revealCardInSlot(slotId) {
    const slot = slots[slotId];
    if (slot && slot.children.length > 0) {
        const card = slot.querySelector('.card');
        if (card && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            // Update tooltip with card-specific text
            const cardName = card.dataset.cardName;
            if (cardName) {
                // Store original tooltip
                slot.dataset.originalTooltip = slot.dataset.tooltip;
                // Update with card-specific tooltip
                
                // Get or generate the card's tooltip (store it on the card for consistency)
                let cardTooltip;
                if (card.dataset.storedTooltip) {
                    // Use previously stored tooltip
                    cardTooltip = card.dataset.storedTooltip;
                } else {
                    // Generate new tooltip and store it on the card
                    cardTooltip = getCardTooltip(cardName, slotId);
                    card.dataset.storedTooltip = cardTooltip;
                }
                
                if (cardTooltip) {
                    slot.dataset.tooltip = cardTooltip;
                }
            }
        }
    }
}

// Helper function to get currently used cards
function getUsedCards() {
    const usedCards = [];
    Object.values(slots).forEach(slot => {
        const card = slot.querySelector('.card');
        if (card) {
            const cardName = card.dataset.cardName;
            if (cardName) {
                usedCards.push(cardName);
            }
        }
    });
    return usedCards;
}

// Function to show card selection modal
function showCardSelectionModal(slot) {
    currentSlot = slot;
    
    // Determine which slot was clicked and filter cards accordingly
    const slotId = slot.id;
    const usedCards = getUsedCards();
    let availableCards = [];
    
    if (slotId === 'slot-bottom' || slotId === 'slot-center') {
        availableCards = tarokkaDeck.filter(card => 
            card.suit === 'High Deck' && !usedCards.includes(card.name)
        );
    } else {
        availableCards = tarokkaDeck.filter(card => 
            card.suit !== 'High Deck' && !usedCards.includes(card.name)
        );
    }
    
    // Group available cards by suit for better organization
    const groupedCards = {};
    availableCards.forEach((card) => {
        if (!groupedCards[card.suit]) {
            groupedCards[card.suit] = [];
        }
        groupedCards[card.suit].push(card);
    });
    
    // Clear modal body
    modalBody.innerHTML = '';
    
    // Create suit groups
    Object.keys(groupedCards).forEach(suit => {
        const suitGroup = document.createElement('div');
        suitGroup.className = 'suit-group';
        
        const suitTitle = document.createElement('h3');
        suitTitle.textContent = suit;
        suitGroup.appendChild(suitTitle);
        
        const cardList = document.createElement('ul');
        cardList.className = 'selection-list';
        
        // Add cards for this suit
        groupedCards[suit].forEach(card => {
            const cardItem = document.createElement('li');
            cardItem.className = 'selection-item';
            cardItem.textContent = card.name;
            
            // Add click event to select card
            cardItem.addEventListener('click', () => {
                selectCard(card);
            });
            
            cardList.appendChild(cardItem);
        });
        
        suitGroup.appendChild(cardList);
        modalBody.appendChild(suitGroup);
    });
    
    // Show modal
    modal.style.display = 'block';
}

// Function to select a card
function selectCard(card) {
    if (currentSlot) {
        // Clear the slot immediately without animation
        currentSlot.innerHTML = '';
        
        // Create card element
        const cardElement = createCardElement(card, 0);
        // Ensure card starts face down
        cardElement.classList.remove('flipped');
        // Add card to slot
        currentSlot.appendChild(cardElement);
        // Add animation
        cardElement.classList.add('dealing');
        // Remove dealing class after animation
        setTimeout(() => {
            cardElement.classList.remove('dealing');
        }, 500);
        
        // Reset tooltip to original slot tooltip
        if (currentSlot.dataset.originalTooltip) {
            currentSlot.dataset.tooltip = currentSlot.dataset.originalTooltip;
        }
        
        // Close modal
        modal.style.display = 'none';
        currentSlot = null;
    } else {
        // Close modal
        modal.style.display = 'none';
        currentSlot = null;
    }
}

// Add click event listeners to card slots for specific card dealing
function addSlotClickListeners() {
    Object.keys(slots).forEach(position => {
        const slot = slots[position];
        
        slot.addEventListener('click', async () => {
            // Check if slot is empty
            if (slot.children.length === 0) {
                // Show card selection modal
                showCardSelectionModal(slot);
            }
        });
    });
}

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    currentSlot = null;
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        currentSlot = null;
    }
});

// Add slot click listeners when page loads
addSlotClickListeners();

// Touch device support variables
let touchStartX = [];
let touchStartY = [];
const TWO_FINGER_DELAY = 500; // ms
let twoFingerTimer;

// Touch event handlers for cards
function addTouchEventHandlers() {
    const cards = document.querySelectorAll('.card');
    const slots = document.querySelectorAll('.card-slot');
    
    // Add touch handlers to all cards and slots
    [...cards, ...slots].forEach(element => {
        element.addEventListener('touchstart', handleTouchStart, { passive: false });
        element.addEventListener('touchend', handleTouchEnd);
        element.addEventListener('touchmove', handleTouchMove);
        element.addEventListener('touchcancel', handleTouchEnd);
    });
}

// Handle touch start event
function handleTouchStart(e) {
    // Prevent default to avoid iOS menu on long press
    if (e.touches.length === 1) {
        // Single touch - allow default for card flipping
        return;
    } else if (e.touches.length === 2) {
        // Two-finger touch - prevent default to avoid iOS menu
        e.preventDefault();
        
        // Store touch positions
        touchStartX = [e.touches[0].pageX, e.touches[1].pageX];
        touchStartY = [e.touches[0].pageY, e.touches[1].pageY];
        
        // Clear any existing timer
        clearTimeout(twoFingerTimer);
        
        // Set timer for two-finger press
        twoFingerTimer = setTimeout(() => {
            handleTwoFingerPress(e);
        }, TWO_FINGER_DELAY);
    }
}

// Handle touch move event
function handleTouchMove(e) {
    // Clear timer if user moves fingers
    if (e.touches.length === 2) {
        clearTimeout(twoFingerTimer);
    }
}

// Handle touch end event
function handleTouchEnd() {
    // Clear timer when touch ends
    clearTimeout(twoFingerTimer);
}

// Handle two-finger press
function handleTwoFingerPress(e) {
    const target = e.target.closest('.card-slot, .card');
    if (!target) return;
    
    const slot = target.closest('.card-slot');
    const card = target.closest('.card');
    
    if (slot && !card) {
        // Two-finger press on empty slot - show card selection modal
        showCardSelectionModal(slot);
    } else if (slot && card) {
        // Two-finger press on card - check if it's revealed
        const isRevealed = card.classList.contains('flipped');
        
        if (!isRevealed) {
            // Two-finger press on unrevealed card - show slot tooltip
            slot.classList.add('show-tooltip');
        } else {
            // Two-finger press on revealed card - show context menu
            showContextMenu(e.touches[0], card);
        }
    }
}

// Touch device tooltip support
function addTooltipTouchSupport() {
    const slots = document.querySelectorAll('.card-slot');
    
    slots.forEach(slot => {
        slot.addEventListener('touchstart', (e) => {
            // Only show tooltip on empty slots with single tap
            if (e.touches.length === 1 && !slot.querySelector('.card')) {
                e.preventDefault();
                // Hide all other tooltips first
                document.querySelectorAll('.card-slot.show-tooltip').forEach(s => {
                    s.classList.remove('show-tooltip');
                });
                // Show tooltip on touch
                slot.classList.add('show-tooltip');
            }
        });
    });
    
    // Hide tooltips when tapping elsewhere
    document.addEventListener('touchstart', (e) => {
        if (!e.target.closest('.card-slot')) {
            document.querySelectorAll('.card-slot.show-tooltip').forEach(slot => {
                slot.classList.remove('show-tooltip');
            });
        }
    });
}

// Initialize touch support
function initTouchSupport() {
    addTouchEventHandlers();
    addTooltipTouchSupport();
}

// Reinitialize touch support after card dealing
deck.addEventListener('click', () => {
    setTimeout(initTouchSupport, 1000);
});

// Initialize touch support on page load
initTouchSupport();

// Context menu event listeners
dealNewCardBtn.addEventListener('click', dealNewCardToSlot);
chooseFromMenuBtn.addEventListener('click', showCardMenuFromContext);

// Hide context menu when clicking elsewhere
document.addEventListener('click', (event) => {
    if (!contextMenu.contains(event.target)) {
        hideContextMenu();
    }
});

// Prevent context menu from showing on right-click outside cards
document.addEventListener('contextmenu', (event) => {
    if (!event.target.closest('.card')) {
        hideContextMenu();
    }
});

// Fullscreen functionality
const fullscreenBtn = document.getElementById('fullscreenBtn');

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function updateFullscreenButton() {
    if (document.fullscreenElement) {
        fullscreenBtn.classList.add('is-fullscreen');
    } else {
        fullscreenBtn.classList.remove('is-fullscreen');
    }
}

// Fullscreen button click event
fullscreenBtn.addEventListener('click', toggleFullscreen);

// Listen for fullscreen change events to update button state
document.addEventListener('fullscreenchange', updateFullscreenButton);

// Track tooltip state
let tooltipsEnabled = true;

// Function to toggle tooltips
function toggleTooltips() {
    tooltipsEnabled = !tooltipsEnabled;
    if (tooltipsEnabled) {
        document.body.classList.remove('tooltips-disabled');
    } else {
        document.body.classList.add('tooltips-disabled');
    }
}

// Keyboard event listener for 'F' key to toggle fullscreen, 'D' key to shuffle and deal, 'R' key to reset, 'T' key to toggle tooltips, and keys 1-5 to reveal cards
document.addEventListener('keydown', (event) => {
    // Don't trigger if user is typing in an input field
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        // Check if the pressed key is 'F' or 'f'
        if (event.key === 'f' || event.key === 'F') {
            event.preventDefault();
            toggleFullscreen();
        }
        // Check if the pressed key is 'D' or 'd'
        else if (event.key === 'd' || event.key === 'D') {
            event.preventDefault();
            shuffleAndDeal();
        }
        // Check if the pressed key is 'R' or 'r'
        else if (event.key === 'r' || event.key === 'R') {
            event.preventDefault();
            clearSlots();
        }
        // Check if the pressed key is 'T' or 't' to toggle tooltips
        else if (event.key === 't' || event.key === 'T') {
            event.preventDefault();
            toggleTooltips();
        }
        // Check if the pressed key is 1-5 to reveal cards
        else if (['1', '2', '3', '4', '5'].includes(event.key)) {
            event.preventDefault();
            const slotMap = {
                '1': 'left',
                '2': 'top',
                '3': 'right',
                '4': 'bottom',
                '5': 'center'
            };
            revealCardInSlot(slotMap[event.key]);
        }
    }
});

// Help menu toggle functionality
const infoBtn = document.querySelector('.info-btn');
const infoTooltip = document.querySelector('.info-tooltip');
const desktopHelp = document.getElementById('desktopHelp');
const touchHelp = document.getElementById('touchHelp');
const helpToggle = document.getElementById('helpToggle');

// Track current help mode
let isDesktopMode = true;

// Toggle help menu on click
infoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    infoTooltip.classList.toggle('visible');
});

// Close help menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.info-btn') && !e.target.closest('.info-tooltip')) {
        infoTooltip.classList.remove('visible');
    }
});

// Close help menu when tapping outside (touch devices)
document.addEventListener('touchstart', (e) => {
    if (!e.target.closest('.info-btn') && !e.target.closest('.info-tooltip')) {
        infoTooltip.classList.remove('visible');
    }
});

// Toggle between desktop and touchscreen help
helpToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    isDesktopMode = !isDesktopMode;
    
    if (isDesktopMode) {
        desktopHelp.style.display = 'block';
        touchHelp.style.display = 'none';
        helpToggle.textContent = 'Touchscreen';
    } else {
        desktopHelp.style.display = 'none';
        touchHelp.style.display = 'block';
        helpToggle.textContent = 'Desktop';
    }
});

// Also handle touch events for the toggle
helpToggle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    isDesktopMode = !isDesktopMode;
    
    if (isDesktopMode) {
        desktopHelp.style.display = 'block';
        touchHelp.style.display = 'none';
        helpToggle.textContent = 'Touchscreen';
    } else {
        desktopHelp.style.display = 'none';
        touchHelp.style.display = 'block';
        helpToggle.textContent = 'Desktop';
    }
});
