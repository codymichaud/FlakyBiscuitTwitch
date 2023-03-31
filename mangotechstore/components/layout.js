import { Component, React } from 'react';
import PropTypes from 'prop-types';

export class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        css={{
          maxW: '100%',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
