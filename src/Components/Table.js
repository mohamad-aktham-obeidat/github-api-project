import React, { Component } from 'react'
import Row from './Row';

export default class Table extends Component {


    render() {
        const { searchResult } = this.props;
        return (
            <div>
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
                        {searchResult.map((repo, i) => <Row id={i + 1} key={i} Repo={repo} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}
