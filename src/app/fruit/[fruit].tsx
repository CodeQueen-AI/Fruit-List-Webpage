const FruitPage = () => {
    const fruit = "Apple"; // Hardcoded fruit name for simplicity
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-teal-300">
        <h1 className="text-3xl font-semibold mb-4 text-white">Fruit Page</h1>
        <p className="text-xl text-white">You are viewing the {fruit} details.</p>
        <button
          onClick={() => window.history.back()} // Simple back navigation
          className="mt-6 bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  };
  
  export default FruitPage;
  