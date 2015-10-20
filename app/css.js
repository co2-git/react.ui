'use strict';

class CSS {

  constructor(selector, rules = {}) {
    this.selector = selector;
    this.rules = rules;
    this.pseudos = {};
  }

  pseudo (pseudo, rules = {}) {
    this.pseudos[pseudo] = rules;
  }

  render () {
    let source = `${this.selector} {
`;

    for ( let property in this.rules ) {
      source += ` ${property}: ${this.rules[property]};
`;
    }

    source += `
}`;

    for ( let pseudo in this.pseudos ) {
      source += `
${this.selector}:${pseudo} {
`;

      for ( let property in this.pseudos[pseudo] ) {
        source += ` ${property}: ${this.pseudos[pseudo][property]};
  `;
      }

      source += `
}`;
    }

    return source;
  }
}

class Body extends CSS {
  constructor () {
    super('a', {
      'text-decoration' : 'none',
      'color' : 'red'
    });

    this.pseudo('hover', {
      'text-decoration' : 'underline'
    })
  }
}

console.log(new Body().render());

console.log('ok');
