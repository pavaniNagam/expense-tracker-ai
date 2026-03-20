import "@testing-library/jest-dom";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

expect.extend({
  toBeInTheDocument(received) {
    const pass = received && received.ownerDocument === document;
    return {
      pass,
      message: () => `expected element to be in the document`,
    };
  },
});
