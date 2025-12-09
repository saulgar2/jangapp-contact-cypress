//cypress/pages/ContactPage.js

class ContactPage {
    //Mapeo de elementos
    elements = {
        contactSelectionTitle: () => cy.contains('Contacta'),
        firstNameInput: () => cy.get('input[placeholder="Nombre"]'),
        lastNameInput: () => cy.get('input[placeholder="Apellido"]'),
        emailInput: () => cy.get('input[placeholder="Correo Electrónico"]'),
        messageTextarea: () => cy.get('textarea[placeholder="Escribe tu mensaje"]'),
        submitButton: () => cy.contains('button', 'Enviar'),
    };

    //Acciones de la pagina
    visit() {
        cy.visit('/'); //baseUrl ya esta en cypress.config.js
    }

    verifyContactSectionIsVisible() {
        this.elements.contactSelectionTitle().should('be.visible');
    }

    fillFirstName(firstName) {
        this.elements.firstNameInput().clear().type(firstName);
    }

    fillLastName(lastName) {
        this.elements.lastNameInput().clear().type(lastName);
    }

    fillEmail(email) {
        this.elements.emailInput().clear().type(email);
    }

    fillMessage(message) {
        this.elements.messageTextarea().clear().type(message);
    }

    fillContactForm({ firstName, lastName, email, message }) {
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillMessage(message);
    }

    submitForm() {
        this.elements.submitButton().scrollIntoView().click();
    }
}

//Exportar la instancia 
export default new ContactPage();