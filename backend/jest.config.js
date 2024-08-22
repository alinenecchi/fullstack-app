module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
      "^mongoose$": "<rootDir>/backend/__mocks__/mongoose.js",
    },
    testEnvironment: "node",
    clearMocks: true,
  };
  
  