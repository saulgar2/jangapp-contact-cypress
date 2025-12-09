# 🚀 Automatización Formulario de Contacto – Jangapp (Cypress + Allure)
Este proyecto automatiza el formulario de contacto de la landing:

➡ https://hangers-crisbusa.web.app/

La automatización:

- Abre la landing.
- Verifica la sección de contacto.
- Genera datos aleatorios con Faker.
- Llena el formulario.
- Envía el formulario.
- Verifica que los campos queden limpios.
- Genera video de la ejecución.
- Crea un reporte Allure con evidencia.

---

## 🧱 Stack Tecnológico

- **Cypress** – Framework de automatización E2E  
- **@shelex/cypress-allure-plugin** – Integración Allure  
- **Allure Commandline** – Generación de reportes  
- **@faker-js/faker** – Datos aleatorios  
- **JavaScript / Node.js**

---

## 📁 Estructura del Proyecto
jangapp-contact-cypress/
├── cypress/
│ ├── e2e/
│ │ └── contact_form.cy.js # Caso de prueba principal
│ ├── fixtures/
│ │ └── contactData.json # Config base para Faker
│ ├── pages/
│ │ ├── ContactPage.js # Page Object (UI)
│ │ └── ContactData.js # Generador de datos (fixture + Faker)
│ ├── screenshots/ # (auto) Evidencia
│ └── videos/ # (auto) Video de Cypress
├── cypress.config.js # Config Cypress + Allure
├── package.json
├── allure-results/ # (auto) Resultados Allure
└── allure-report/ # (auto) Reporte HTML Allure


## ⚙️ Instalación

# 🛠 Requisitos Previos
Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

## **1️⃣ Node.js (OBLIGATORIO)**
Cypress requiere Node.js 16+.
Verifica si está instalado:

node -v

Si no aparece versión, descárgalo en:

👉 https://nodejs.org/

2️⃣ Cypress
Cypress se instala automáticamente con el proyecto, pero puedes verificarlo:

npx cypress -v

Si no lo tienes:
npm install cypress --save-dev

4️⃣ Plugin de Allure para Cypress
Ya viene instalado, pero si deseas instalarlo manualmente:
npm install -D @shelex/cypress-allure-plugin

5️⃣ Faker para generación automática de datos
npm install -D @faker-js/faker

### 1️⃣ Clonar el repositorio
git clone https://github.com/saulgar2/jangapp-contact-cypress.git

Cambiar al directorio
cd jangapp-contact-cypress

2️⃣ Instalar dependencias

npm install

🧪 Ejecutar la Prueba
✔ Modo consola (genera video y allure-results)

npm run test

📊 Generar Reporte Allure
1️⃣ Crear el reporte:
npm run allure:generate

2️⃣ Abrir el reporte en navegador:
npm run allure:open

🧼 Limpiar Allure y regenerar desde cero
Borrar las carpetas:
- allure-report
- allure-results

Scripts en package.json:

"scripts": {
  "test": "cypress run --spec cypress/e2e/contact_form.cy.js",
  "allure:generate": "allure generate allure-results --clean -o allure-report",
  "allure:open": "allure open allure-report",
  "test:allure": "npm run clean:allure && npm run test && npm run allure:generate && npm run allure:open"
}

🧩 Arquitectura del Framework
1. Capa UI – ContactPage.js
Contiene:
- Selectores de la página
- Acciones (visitar, llenar campos, enviar formulario)

2. Capa Datos – ContactData.js
- Lee configuración de contactData.json
- Genera nombre, apellido, email y mensaje con Faker

3. Capa Test – contact_form.cy.js
- Solicita datos al Page Object de datos
- Ejecuta pasos en el Page Object de UI
- Ejecuta aserciones finales
- Representa el flujo de negocio

🧪 Caso Automatizado: Flujo
- Abrir la landing
- Validar que la sección de contacto está visible
- Generar datos aleatorios (Faker)
- Llenar formulario
- Enviar
- Validar que los campos estén vacíos (éxito)

📬 Autor
Proyecto desarrollado por Saúl García
- Demostración de mejores prácticas en automatización:
- Cypress + Page Object Model
- Generación dinámica de datos
- Integración con Allure
- Evidencia en video
