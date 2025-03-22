let selectedFood = '';
    let selectedElement = null;

    function checkName() {
        var name = document.getElementById('name').value;
        if (name.toLowerCase() === 'cilla') {
            document.getElementById('question1').classList.add('hidden');
            document.getElementById('question2').classList.remove('hidden');
        } else {
            alert('Sorry, this invitation is only for Cilla!');
        }
    }

    function selectFood(food, element) {
        selectedFood = food;
        // Update the "Selected food:" text
        document.getElementById('selectedFoodText').textContent = `Selected food: ${food.charAt(0).toUpperCase() + food.slice(1)}`;

        // Reset selection visuals
        const foodOptions = document.querySelectorAll('.food-option');
        foodOptions.forEach(option => option.classList.remove('selected'));

        // Hide the "others" text input if another option is selected
        if (food !== 'others') {
            document.getElementById('otherFood').classList.add('hidden');
        }

        // Show the "others" text input when 'Others' is selected
        if (food === 'others') {
            document.getElementById('otherFood').classList.remove('hidden');
        }

        // Mark the selected option with a border and box-shadow
        if (selectedElement) {
            selectedElement.classList.remove('selected');
        }
        element.classList.add('selected');
        selectedElement = element;
    }

    // function goBackToQuestion1() {
    //     document.getElementById('question1').classList.remove('hidden');
    //     document.getElementById('question2').classList.add('hidden');
    // }

    function goBackToQuestion2() {
        document.getElementById('question2').classList.remove('hidden');
        document.getElementById('question3').classList.add('hidden');
    }

    function checkFood() {
        if (!selectedFood) {
            alert("Please select a food option!");
            return;
        }

        document.getElementById('question2').classList.add('hidden');
        document.getElementById('question3').classList.remove('hidden');
    }

    function submitForm() {
        var otherFoodInput = document.getElementById('otherFood').value;
        var dineOption = document.getElementById('dineOption').value;

        var food = (selectedFood === 'others' && otherFoodInput) ? otherFoodInput : selectedFood;
        
        var summaryText = `Name: Cilla\nFood: ${food}\nOption: ${dineOption === 'dinein' ? 'Dine In' : 'To Go'}`;
        
        document.getElementById('question3').classList.add('hidden');
        document.getElementById('finalMessage').classList.remove('hidden');
        document.getElementById('summary').innerText = summaryText;
    }