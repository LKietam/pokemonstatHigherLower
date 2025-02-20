# Pokémon Stats Higher or Lower Game

## Overview
The **Pokémon Stats Higher or Lower Game** is a simple yet engaging game where players compare Pokémon stats to determine which Pokémon has the higher value. The game uses the PokéAPI to fetch real-time Pokémon data and dynamically updates as users make choices.

This project is wrapped in an **Electron** application, allowing it to be run as a standalone desktop app.

## Features
- **Light & Dark Mode**: Users can switch between light and dark themes.
- **Random Pokémon Selection**: Pokémon are randomly fetched from the PokéAPI.
- **Stat-Based Comparisons**: Players must guess which Pokémon has a higher randomly selected stat.
- **Score Tracking**: The game keeps track of the current score and high score.
- **Smooth Animations & UI Enhancements**: Stats are visually represented using bars with color-coded performance indicators.
- **Electron Integration**: The game runs as a standalone desktop application using Electron.

## Installation & Running the Game
### Prerequisites
Ensure you have **Node.js** installed on your system. If not, download and install it from [Node.js official website](https://nodejs.org/).

### Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/pokemon-stat-game.git
   cd pokemon-stat-game
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```

## Building the Application
To package the app into a distributable format:
```sh
npm run build
```
This will create an installer that can be used to install the Pokémon Stat Game as a standalone application.

## Project Structure
```
├── index.html          # Main game interface
├── main.js             # Electron main process file
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
└── node_modules/       # Dependencies (generated after npm install)
```

## Future Enhancements
- **Leaderboard System**: Implement a global/local leaderboard for competitive play.
- **More Pokémon Data**: Fetch additional details like types, abilities, and evolutions.
- **Multiplayer Mode**: Enable challenge-based gameplay with friends.
- **Mobile Compatibility**: Develop a mobile version using frameworks like React Native.

## License
This project is open-source and available under the **MIT License**.

## Credits
- Developed using **HTML, CSS, JavaScript, and Electron**.
- Pokémon data sourced from [PokéAPI](https://pokeapi.co/).
- Inspired by classic higher/lower comparison games.

![image](https://github.com/user-attachments/assets/a2d8cee0-50f5-492c-a8cc-c6769f9493f5)
