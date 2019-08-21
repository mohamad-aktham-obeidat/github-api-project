import React, { Component } from 'react'



class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' }

    }
    onInputChange = (event) => {
        this.setState({ term: event.target.value });

    }

    onBtnClick = (event) => {
        event.preventDefault();

        const { onSearch } = this.props;
        onSearch(this.state.term);
    }

    render() {

        return (
            <div>
                <div className="container mr-auto mt-4 mb-4 h-100">
                    <input className='search pl-2 rounded border border-danger' type="text"  onChange={this.onInputChange} />
                    <button className="btn btn-danger ml-3 " onClick={this.onBtnClick}>Search</button>
                </div>
            </div>
        )
    }
}

export default Search;