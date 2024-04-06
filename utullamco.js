try {
  // Code that might throw an error
} catch (error) {
  console.error('An error occurred:', error); // Log the error for debugging
  onError({ gameOver: true, message: error.message }); // Pass error message for better context
}
