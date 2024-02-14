**Kitten Chaos App Readme**

---

### Kitten Chaos

Kitten Chaos is a single-player web-based card game that challenges players to survive a deck of chaotic cards filled with kittens, bombs, defuses, and shuffles. The objective is to draw cards strategically, avoiding exploding kittens while using defuse cards to survive and shuffles to reset the deck.

### Features

- Randomized deck of 5 cards: Cat, Bomb, Defuse, and Shuffle.
- Dynamic gameplay with each card drawn affecting the game state.
- Defuse cards to survive exploding kittens.
- Shuffle cards to reset the deck and change the game dynamics.
- Leaderboard to track top players and their scores.
- User-friendly interface with intuitive controls.

### Technologies Used

- **Frontend**: Built with React.js for dynamic user interface and state management.
- **Backend**: Utilizes Node.js and Express.js for server-side logic and API handling.
- **Database**: MongoDB Atlas for storing user information and game scores.
- **Styling**: Styled with CSS to provide an engaging and visually appealing user experience.
- **Deployment**: Hosted on Vercel for seamless deployment and accessibility.

## Requirements

    $ node --version
    v20.11.x

    $ npm --version
    10.2.x


### Installation

To run the Kitten Chaos app locally, follow these steps:

1. Clone the repository:  `git clone https://github.com/Shahajade422/kitten-chaos.git`
2. Navigate to the project directory:  `cd kitten-chaos`
3. Install dependencies:  `npm install`
4. Start the Client Side run:  `npm start`
5. For the server side first run commond:   `cd server`   then run commond:   `node server.js`
6. Open your browser and visit `http://localhost:3000` to access the application.

## Configure app

Open `.env` then you will need to add:

- MONGO_DATABASE_URL=<your_database_url>

### How to Play

1. Enter your desired username to start the game.
2. Click the "Start Game" button to begin.
3. Draw cards from the deck by clicking on them.
4. Navigate the deck strategically, avoiding exploding kittens and utilizing defuse cards to survive.
5. Use shuffle cards to reset the deck and change the game dynamics.
6. Survive the deck and earn a high score to climb the leaderboard.

### Contributing

Contributions to Kitten Chaos are welcome! If you have suggestions for new features, improvements, or bug fixes, feel free to submit a pull request or open an issue on GitHub.

### Contact

For any inquiries or feedback, please contact us at [shahajade.student.cer20@gmail.com].

---

Thank you for using Kitten Chaos! Enjoy the chaos and may the kittens be ever in your favor. 🐱💥
