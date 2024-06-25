# Rapid Review

Rapid Review is a Chrome extension that allows users to quickly summarize text on web pages. Built using React for the frontend, Node.js for the server, and Python for the text summarization algorithm, Rapid Review provides a seamless and efficient way to condense information.

## Features

- Summarize text directly from web pages
- Easy-to-use popup interface
- Fast and accurate summaries

## Technologies Used

- **React**: For building the user interface of the Chrome extension
- **Node.js**: For creating the backend server
- **Python**: For implementing the text summarization algorithm

## Installation

### Prerequisites

- Node.js and npm installed
- Python and required libraries installed
- Chrome browser

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/arnavgaur04/RapidReview
    cd RapidReview
    ```

2. **Set Up the Backend**

    Navigate to the `Backend` directory and install the necessary dependencies:

    ```bash
    cd backend
    npm install
    ```

    Run the Node.js server:

    ```bash
    node back.js
    ```

3. **Set Up the Frontend**

    Navigate to the `rapidreview` directory and install the necessary dependencies:

    ```bash
    cd ../rapidreview
    npm install
    ```

    Build the React application:

    ```bash
    npm run build
    ```

4. **Set Up the Python Summarization Service**

    Ensure you have the required Python libraries installed (e.g., using `pip`):

    ```bash
    pip install transformers
    pip install textwrap
    ```

5. **Load the Extension in Chrome**

    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" at the top right.
    - Click "Load unpacked" and select the `build` directory from your project.
    - Change the manifest of the build directory to manifest provided in `rapidreview` directory

## Usage

- Copy the text you want to summarize on any web page.
- Click the Rapid Review extension icon in the Chrome toolbar.
- Paste the text and summary will be provided.