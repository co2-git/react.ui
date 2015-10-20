'use strict';

import React from 'react';
import Button from './button';

class Tabs extends React.Component {

  constructor (props) {
    super(props);

    this.state = { tabs : this.props.children };
  }

  switch (title, e) {
    e.preventDefault();

    let { tabs } = this.state;

    tabs = tabs.map(tab => {
      tab.props.active = tab.props.title === title;
      return tab;
    })

    this.setState({ tabs });
  }

  componentWillReceiveProps (props) {
    this.setState({ tabs : this.props.children });
  }

  render () {
    let { tabs } = this.state;

    let nav = tabs.map(tab => (
      <Button medium className={ tab.props.active ? 'shy' : '' } onClick={ this.switch.bind(this, tab.props.title)}>{ tab.props.title }</Button>
    ));

    let content = tabs.map(tab => (
      <article className={ tab.props.active ? 'bp_tabs_active' : '' }>
        { tab.props.children }
      </article>
    ));

    return (
      <section className="bp_tabs">
        <nav>
          { nav }
        </nav>
        <section>
          { content }
        </section>
      </section>
    );
  }
}

export default Tabs;
