function generateAndPrintRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100); // Adjust the range as needed
    console.log(randomNumber);
  }
  
setInterval(generateAndPrintRandomNumber, 2000);