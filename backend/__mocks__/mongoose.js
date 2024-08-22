const mongoose = {
    connect: jest.fn(() => Promise.resolve()),
    connection: {
      dropDatabase: jest.fn(() => Promise.resolve()),
      close: jest.fn(() => Promise.resolve()),
    },
    Schema: jest.fn().mockImplementation((schemaDefinition) => ({
      ...schemaDefinition,
      methods: {},
      statics: {},
    })),
    model: jest.fn().mockImplementation((modelName, schema) => {
      return {
        find: jest.fn(() => Promise.resolve([{ id: 1, name: 'Test Product' }])),
      };
    }),
  };
  
  module.exports = mongoose;
  