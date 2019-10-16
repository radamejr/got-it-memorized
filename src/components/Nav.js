import React from 'react';

class Nav extends React.Component {
  render(){
    const { toggleNote, showNote } = this.props

    return (
      <div className="nav-container">
        <div className="nav-logo" onClick={() => window.location.reload()}>Got it MEMO-rized?</div>
        <div className="nav-button" onClick={() => toggleNote()} > 
          { showNote ? 'Cancel' : '+ Note'}
        </div>
      </div>
    );
  }
}

export default Nav;