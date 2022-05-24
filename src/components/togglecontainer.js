import * as React from 'react';





class ToggleContainer extends React.Component {



  render() {

    return(
      <div className="TitleBar">
        <div className="toggle-container">
          <p className="toggle-name">{this.props.text}</p>
          <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"/>
          </label>
        </div>
      </div>
  )}
};

export default ToggleContainer;
