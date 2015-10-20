'use strict';

import Cassis from 'cassis';

/** options
 *
 *  @arg String=row direction - Either row or column, default row
 *  @arg Boolean row - True, flex-direction is set to row, false, it is set to column
 *  @arg Boolean column - True, flex-direction is set to column, false, it is set to row
 *  @arg String=nowrap wrap - Either wrap or nowrap
 *  @arg Boolean wrap - True is wrapm false is nowrap
 *  @arg String=space-between justifyContent - Justify-content value
*/

class Flex extends Cassis.Declaration {
  constructor (options = {}) {

    const styles = {};

    styles.direction = 'row';

    if ( options.direction === 'column' || options.row === false || options.column === true ) {
      styles.direction = 'column';
    }

    styles.wrap = 'nowrap';

    if ( options.wrap === 'wrap' || options.wrap === true ) {
      styles.wrap = 'wrap';
    }

    styles.justifyContent = 'space-between';

    let rules = {
      display : ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex']
    };

    ['-webkit-flex-direction', 'flex-direction'].forEach(direction => {
      rules[direction] = styles.direction;
    });

    ['-webkit-flex-wrap', 'flex-wrap'].forEach(wrap => {
      rules[wrap] = styles.wrap;
    });

    ['-webkit-justify-content', 'justify-content'].forEach(justify => {
      rules[justify] = styles.justifyContent;
    });

    super(rules);
  }
}

export default Flex;
