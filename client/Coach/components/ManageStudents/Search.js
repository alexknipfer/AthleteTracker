import React from 'react';

export default class Search extends React.Component{

  search(e){
    console.log("HELLO");
    let value = this.refs.search.value;
    if(value !== ''){
      this.props.searchQuery.set(value);
      this.props.searching.set(true);
    }

    else if(value === ''){
      this.props.searchQuery.set(value);
    }

    else{
      this.props.searching.set(false);
    }
  }

  clearText(){
    this.refs.search.value = "";
    this.props.searchQuery.set("");
  }

  render(){
    return(
    <div>
      <nav className="search-style grey lighten-4">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input autoFocus={focus} id="search" placeholder="Search for athlete..." className="black-text" type="search" name="search" onKeyUp={this.search.bind(this)} ref="search"/>
              <label htmlFor="search"><i className="material-icons black-text">search</i></label>
              <i className="material-icons" onClick={this.clearText.bind(this)}>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
    );
  }

}
