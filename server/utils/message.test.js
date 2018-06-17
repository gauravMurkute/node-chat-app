var expect = require('expect');

var {generateMessage} = require('./message');


describe('generateMessage', () => {

    it('should generate the correct message object', () => {

            var message = generateMessage('Gaurav', "Hello Andrew");

            var from = 'Gaurav';
            var text = 'Hello Andrew';

            expect(message).toInclude({from, text});
            expect(message.createdAt).toBeA('number');
    });
});