import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  // here we check to see if the Modal is to be shown, if it is not shown, we do not rerender the OrderSummary as the OrderSummary is only shown in the component itself.
  // this is a slight performance enhancement as we don't need to update UI elements if they are not shown on the page.
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextProps.show !== this.props.show);
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
          style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: this.props.show ? '1' : '0'}}
          className={classes.Modal}>
          {this.props.children}
        </div>
      </Aux>
    )
  }
};

export default Modal;