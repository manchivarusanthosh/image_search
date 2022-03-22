import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      // class names are form SEMANCTIC UI which we have added cdn in HTML index file
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={(event) => this.onFormSubmit(event)}
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
