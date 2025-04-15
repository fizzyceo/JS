## Project: Guess the Number Game (with Strike Animation)

### 🎮 Objective:

Build a fun game where the user tries to guess a secret number between 1 and 100. If they fail more than 5 times, show a shake animation and restart the game.

### **Step 1: Set up the Game Layout (HTML)**

- Create a heading for the game title.
- Add a text input where users can type their guess.
- Add a button labeled “Guess” or “Check”.
- Create an area to show messages like:
  - “Too High” / “Too Low” / “Correct!”
  - “You’ve used X attempts”
- Create a hidden “Play Again” button for when the game is over.

### **Step 2: Design the Game Look (CSS)**

- Center the game on the page.
- Add styles for the input and button to make them stand out.
- Use a nice background and box styling for the game container.
- Create a special CSS animation called `shake` (for when they lose).
- Create a `.strike` class that triggers the animation.

### **Step 3: Write the JavaScript Logic**

#### 👉 Part A: Set up the game logic

- Generate a random number between 1 and 100 and store it.
- Create a variable to count the number of attempts.
- Create a flag to track if the game is over.

#### 👉 Part B: Handle the “Guess” button

- When the user clicks the button:
  - Get the number from the input field.
  - Increase the attempt counter.
  - Compare it to the secret number:
    - If correct → Show success message.
    - If too high/too low → Show a hint.
    - If wrong and attempts reach 5 → Show failure message.

### **Step 4: Add the Strike Animation**

- When the player reaches 5 attempts and still fails:
  - Add the `.strike` class to the game box to shake it.
  - After the animation ends, reset the game after a short delay.

### **Step 5: Create a Reset Game Function**

- This should:
  - Generate a new random number.
  - Reset the attempt count.
  - Clear any old messages.
  - Hide the “Play Again” button (if visible).
