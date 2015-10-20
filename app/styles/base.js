'use strict';

import Cassis from 'cassis';

class Base extends Cassis {
  constructor () {
    super({
      '.reactui' : {},

      '.reactui-show' : {
        'display' : 'block'
      }
    });
  }
}

export default Base;
