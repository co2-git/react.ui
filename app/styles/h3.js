'use strict';

import Cassis from 'cassis';

class H2 extends Cassis {
  constructor () {
    super({
      '.reactui-h3' : {
        'font-size' : '175%',
        'line-height' : '1.5em'
      }
    });
  }
}

export default H2;
