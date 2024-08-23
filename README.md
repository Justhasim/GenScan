
# GenScan

GenScan is a React application that allows users to generate and scan QR codes. It includes two main components: a QR code generator and a QR code scanner. Users can generate QR codes from text input and share or download them. They can also scan QR codes using their device's camera.

## Features

- **Generate QR Code**: Create QR codes from any text input.
- **Download QR Code**: Save generated QR codes as PNG files.
- **Share QR Code**: Share generated QR codes via supported platforms.
- **Scan QR Code**: Scan QR codes using your device's camera.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **react-qrcode-logo**: A library for generating QR codes with logos.
- **html2canvas**: A library for capturing a screenshot of the QR code.
- **html5-qrcode**: A library for scanning QR codes.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/gen-scan.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd gen-scan
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

### Generate QR Code

1. Go to the **Generate QR Code** section.
2. Enter the text you want to encode in the input field.
3. Click the **Generate** button to create a QR code.
4. Use the **Download** button to save the QR code as a PNG file.
5. Use the **Share** button to share the QR code via supported platforms.

### Scan QR Code

1. Go to the **Scan QR Code** section.
2. Allow the application to access your camera if prompted.
3. Point your camera at the QR code you want to scan.
4. The result will be displayed on the screen.

## Folder Structure

- `src/`
  - `components/`
    - `GeneQr.jsx` - Component for generating QR codes.
    - `ScanQr.jsx` - Component for scanning QR codes.
  - `pages/`
    - `Home.jsx` - Home page with navigation options.
  - `App.js` - Main application file.
  - `index.js` - Entry point of the React application.
- `public/`
  - `index.html` - HTML file for the React app.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. We welcome contributions of all kinds!


## Acknowledgements

- [React](https://reactjs.org/) - The JavaScript library used for building the user interface.
- [react-qrcode-logo](https://github.com/nygardk/react-qrcode-logo) - QR code generation library.
- [html2canvas](https://html2canvas.hertzen.com/) - Library for capturing screenshots.
- [html5-qrcode](https://github.com/mebjas/html5-qrcode) - QR code scanning library.

---

Feel free to adjust any section to better fit your project or include additional details if necessary!
