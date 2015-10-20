'use strict';

import Cassis from 'cassis';

class H2 extends Cassis {
  constructor () {
    super({
      '.reactui-h2' : {
        'font-size' : '200%',
        'line-height' : '1.5em'
      }
    });
  }
}

export default H2;
