# MovieMaze

Welcome to MovieMaze, a simple React app that allows you to search and display movie information using the OMDB API.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting Up API Key](#setting-up-api-key)
  - [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VineetKumar02/moviemaze.git
   ```

2. Navigate to the project directory:

   ```bash
   cd moviemaze
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Setting Up API Key

1. Obtain an OMDB API key by visiting [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).

2. Open `src/constants/index.js` and replace `apiKey` with your actual API key:

   ```javascript
   export const apiKey = 'YOUR_OMDB_API_KEY';
   ```

### Usage

1. Start the development server:

   ```cmd
   npm start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

3. Enter a movie title in the search bar and click the search icon to retrieve movie information.

## Screenshots

![MovieMaze Screenshot](/screenshots/moviemaze-screenshot.png)

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

