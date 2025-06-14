# Ethereum Wallet Validator

A simple web tool to validate Ethereum wallet addresses. Paste a list of addresses, and the app will check each one for validity, showing which are valid or invalid. You can also copy all valid addresses to your clipboard.

## Features

- Validate multiple Ethereum addresses at once (comma or newline separated)
- Clear visual feedback for valid and invalid addresses
- Copy all valid addresses with one click

## Getting Started

1. **Clone or Download the Repository**

2. **Open the Project**

   Open `Ethereum_Wallet_tracker/index.html` in your web browser.

3. **Usage**

   - Paste Ethereum addresses into the input box (one per line or comma-separated).
   - Click the **Validate** button.
   - See which addresses are valid or invalid.
   - Click **Copy Valid** to copy all valid addresses to your clipboard.

## Project Structure

- `index.html`: Main HTML file
- `styles.css`: Stylesheet
- `script.js`: JavaScript logic for validation and UI

## How It Works

- Uses a regular expression to check if each address matches the Ethereum address format (`0x` followed by 40 hexadecimal characters).

## License

This project is for educational purposes.
