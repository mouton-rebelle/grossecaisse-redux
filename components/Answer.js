import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { last } from 'lodash';

function getImage(text)
{
  return `url(img/${last(text.split(' ')).toLowerCase().replace('é','e')}.jpg)`;
}

export default class Answer extends Component {
  render() {
    const classes = cx('answer',{'answer--picked': this.props.picked});
    return (
      <div className={classes} onClick={e => this.props.pickAnswer(this.props.text)}>
        <div className='answer__badge' style={{backgroundImage:getImage(this.props.text)}} />
        <div className='answer__text'>{this.props.text}</div>
      </div>
    );
  }
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  picked: PropTypes.bool.isRequired
}