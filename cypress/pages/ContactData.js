const {faker} = require('@faker-js/faker');

class ContactData {
    /*
    Genera datos aleatorios para el formulario de contacto
    usando Faker.js y el fixture contactData.json
    */

    getRandomContact() {
        return cy.fixture('contactData').then((config) => {
            const firstName = faker.person.firstName();
            const lastName = faker.person.lastName();
            const email = faker.internet.email({ firstName, lastName, provider: config.emailDomain });
            const randomWords = faker.lorem.words(faker.number.int({ min: config.minWords, max: config.maxWords }));
            
            const message = `${config.messagePrefix} ${randomWords}`;

            return {
                firstName,
                lastName,
                email,
                message,
            };

        });
    }
}

export default new ContactData();