// Import the main function
const main = require('../game.js');

describe('main function', () => {
    // Mock window.location.href
    beforeAll(() => {
        delete window.location;
        window.location = { href: '' }; // Mock window.location.href
    });

    test('should redirect to index.html', () => {
        main(); // Call the main function

        // Check if the redirect occurred correctly
        expect(window.location.href).toBe('index.html');
    });

    afterAll(() => {
        // Clean up the mock after tests are done
           delete window.location;
    });
});
