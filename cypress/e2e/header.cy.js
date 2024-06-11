// cypress/e2e/header.cy.js

describe('Header Component', () => {
  beforeEach(() => {
    // Limpar o estado inicial
    cy.clearLocalStorage('token');
    cy.visit('http://localhost:3000/');
  });

  it('deve redirecionar para a página de login quando o link de login no cabeçalho for clicado', () => {
    // Verifique se o link de login está visível e clique nele
    cy.get('header').within(() => {
      cy.contains('Login').should('be.visible').click();
    });

    // Verifique se a URL atual é a página de login
    cy.url().should('include', '/login');
  });
});
