import React from "react";
import './searchBar.css'
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.search = this.search.bind(this);
        this.handeEnter = this.handeEnter.bind(this);


    }
    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }
    search() {
        this.props.onSearch(this.state.term);
    }
    handeEnter(event) {
        if (event.keyCode === 13) {
            this.search();
        }
    }
    render() {
        return (
            <div className="searchBar">
                <input type="text" placeholder="Enter song , album or artist " onChange={this.handleTermChange}
                    onKeyUp={this.handeEnter} />
                <button className="searchButton" onClick={this.search}>
                    SEARCH
                </button>
            </div>
        );
    }
}
export default SearchBar;