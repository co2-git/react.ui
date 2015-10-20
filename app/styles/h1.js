'use strict';

import Cassis from 'cassis';

class H1 extends Cassis {
  constructor () {
    super({
      '.reactui-h1' : {
        'font-size' : '250%',
        'line-height' : '1.5em'
      }
    });
  }
}

export default H1;
