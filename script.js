let selectedFood = '';
let selectedElement = null;

function checkName() {
    var name = document.getElementById('name').value;
    if (name.toLowerCase() === 'cilla' || name.toLowerCase() === 'priscilla') {
        document.getElementById('question1').classList.add('hidden');
        document.getElementById('question2').classList.remove('hidden');
    } else {
        alert('Sorry, this invitation is only for Cilla!');
    }
}

function selectFood(food, element) {
    selectedFood = food;
    document.getElementById('selectedFoodText').textContent = `Selected food: ${food.charAt(0).toUpperCase() + food.slice(1)}`;

    const foodOptions = document.querySelectorAll('.food-option');
    foodOptions.forEach(option => option.classList.remove('selected'));

    if (food === 'others') {
        document.getElementById('otherFoodInput').classList.remove('hidden');
        document.getElementById('otherFoodInput').focus(); 
    } else {
        document.getElementById('otherFoodInput').classList.add('hidden');
        document.getElementById('otherFoodInput').value = ''; 
    }

    if (selectedElement) {
        selectedElement.classList.remove('selected');
    }
    element.classList.add('selected');
    selectedElement = element;
}
function goBackToQuestion2() {
    document.getElementById('question2').classList.remove('hidden');
    document.getElementById('question3').classList.add('hidden');
}


function checkFood() {
    var otherFoodInput = document.getElementById('otherFoodInput').value;

    if (!selectedFood || (selectedFood === 'others' && !otherFoodInput.trim())) {
        alert("Pilih dulu makan apa Cilla");
        return;
    }

    document.getElementById('question2').classList.add('hidden');
    document.getElementById('question3').classList.remove('hidden');
}

function submitForm() {
    var otherFoodInput = document.getElementById('otherFoodInput').value;
    var dineOption = document.getElementById('dineOption').value;

    var food = (selectedFood === 'others' && otherFoodInput.trim()) ? otherFoodInput : selectedFood;

    if (!food) {
        alert("Kalo others makan apa?");
        return;
    }

    var summaryText = `Cilla\n ~ ${food}\n ~ ${dineOption === 'dinein' ? 'Dine In' : 'To Go'}`;

    document.getElementById('question3').classList.add('hidden');
    document.getElementById('summary').classList.remove('hidden');
    document.getElementById('summaryText').textContent = summaryText;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const food = selectedFood === 'Others' ? document.getElementById('otherFood').value : selectedFood;
    const dineOption = document.getElementById('dineOption').value;

    doc.text('Pilihan makan', 20, 20);
    doc.text(`Name: ${name}`, 20, 30);
    doc.text(`Food: ${food}`, 20, 40);
    doc.text(`Option: ${dineOption === 'dinein' ? 'Dine In' : 'To Go'}`, 20, 50);

    doc.save('receipt.pdf');
}

let isMuted = false;

// Function to play music
function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.volume = 0.25; // Set volume to 25%
    audio.play(); // Start playing music
    document.getElementById('playMusicBtn').style.display = 'none'; // Hide Play button after it has been clicked
}

// Function to mute or unmute music
function toggleMute() {
    const audio = document.getElementById('backgroundMusic');
    isMuted =! isMuted; // Toggle the mute status
    audio.muted = isMuted; // Set the mute property of the audio element
    
    // Update the button text based on the mute status
    const muteButton = document.getElementById('muteMusicBtn');
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute'; // Toggle between Mute and Unmute text
}

let scrollAmount = 0;
const scrollStep = 90;
const foodContainer = document.getElementById("foodContainer");
