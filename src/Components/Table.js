import React, { Component } from 'react'
import Row from './Row';

export default class Table extends Component {

    constructor(props){
        super(props);
        this.state={ term : ''}
        this.onBtnClick = this.onBtnClick.bind(this); 
        this.term = ''
      }
    
      onInputChange(event){
        this.term = event.target.value;
        
      }

      onBtnClick(event){
          event.preventDefault();
        this.setState({term: this.term});
        this.props.onSearch(this.term);
      }
    render() {
        const {searchResult} = this.props;

        return (
            <div>
                <div className="container mr-auto">
                    <input type="text" className="search" onChange={this.onInputChange}/>
                    <button className="btn" onClick={this.onBtnClick}>Search</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Repo. State</th>
                            <th scope="col">Check</th>
                            <th scope="col">Private</th>
                            <th scope="col">Language</th>
                            <th scope="col">Url</th>
                        </tr>
                    </thead>
                    <tbody>
                    {searchResult.map((repo, i) => <Row key={i} repo={repo}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
