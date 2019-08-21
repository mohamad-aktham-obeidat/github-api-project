import React, { Component } from 'react';
import axios from 'axios'
class Row extends Component {

    state = {
        languages: {}
    }

    componentDidMount() {
        const { Repo } = this.props;

        axios.get(Repo.languages_url)
            .then(res => {

                this.setState({ languages: res.data })

            })
            .catch(error => {
                console.log(error);

            })

    }

    render() {
        const { id, Repo } = this.props
        console.log(this.state.languages);
        let lang = ""
        for (let key in this.state.languages) {

            lang += key + ", ";
        }
        return (
            <tr>
                <td>{id}</td>
                <td>{Repo.name}</td>
                <td>{Repo.private ? 'Private' : 'Public'}</td>
                <td><input type="checkbox" name="private" checked={Repo.private ? true : false} /></td>
                <td>{Repo.private ? 'Yes' : 'No'}</td>
                <td>{lang.slice(0, -2)}</td>
                <td><a className='btn btn-primary' href={Repo.html_url}>Go To This Repo</a></td>
            </tr >
        );

    }

}

export default Row;
