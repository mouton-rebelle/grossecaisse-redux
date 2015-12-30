import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class Answer extends Component {
  render() {
    const classes = cx('answer',{'answer--picked': this.props.picked});
    return (
      <button className={classes} onClick={e => this.props.pickAnswer(this.props.text)}>
        {this.props.text}
      </button>
    );
  }
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  picked: PropTypes.bool.isRequired
}