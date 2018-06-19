var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {

    it('should generate the correct message object', () => {

            var message = generateMessage('Gaurav', "Hello Andrew");

            var from = 'Gaurav';
            var text = 'Hello Andrew';

            expect(message).toInclude({from, text});
            expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {

       

        var from = "Gaurav";
        var latitude = 15;
        var longitude = 19;

         var url = 'https://www.google.com/maps?q=15,19';

         var message =  generateLocationMessage(from, latitude, longitude);

         expect(message).toInclude({from, url});
         expect(message.createdAt).toBeA('number');
    });
});