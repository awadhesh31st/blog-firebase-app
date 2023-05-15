declare namespace Cypress {
  interface Chainable {
    mount<T>(element: React.ReactElement<T>): Chainable;
  }
}
