import contactPage from '../pages/ContactPage';
import contactData from '../pages/ContactData';

describe('Contacto Jangapp - Formulario', () => {
  it('LLena y envia el formulario de contacto correctamente', () => {

    //Obtiene datos de prueba desde ContactData (fixture y Faker)
    contactData.getRandomContact().then((testData) => {

        //Se ejecuta el flujo usando el Page Object
        contactPage.visit();
        contactPage.verifyContactSectionIsVisible();
        contactPage.fillContactForm(testData);
        contactPage.submitForm();
    });
  });
});
