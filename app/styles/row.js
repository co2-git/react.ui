'use strict';

import Cassis from 'cassis';
import Flex from './mixins/flex';

class Row extends Cassis {
  constructor () {
    const flex = new Flex();

    super({
      '.reactui-row' : { flex }
    });
  }
}

export default Row;
