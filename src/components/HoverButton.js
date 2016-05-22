import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const buttonStyle = {
  backgroundColor: "Transparent",
  border: "none"
};

export class HoverButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hover: false};

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver() {
    this.setState({hover: true});
  }
  onMouseOut() {
    this.setState({hover: false});
  }
  render() {
    return (
      <button style={Object.assign({}, buttonStyle, this.props.style)} onClick={this.props.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <img src={this.state.hover ? this.props.hover : this.props.normal}/>
      </button>
    );
  }
}
