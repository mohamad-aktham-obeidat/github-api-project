import React, { Component } from 'react';
import axios from 'axios'
class Row extends Component {

    state = {
        languages: {}
    }

    componentDidMount() {

        axios.get(this.props.repo.languages_url)
            .then(res => {
                console.log(res);
                this.setState({ languages: res.data })
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);

            })
    }

    returnLanguages() {
        let lang = this.state.languages;
        for (let key in lang) {
            console.log(key);
            
            if (lang.hasOwnProperty(key)) {
                const element = lang[key];
            }
            return key + ', ';
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.key}</td>
                <td>{this.props.repo.name}</td>
                <td>{this.props.repo.private ? 'Private' : 'Public'}</td>
                <td><input type="checkbox" name="private" checked={this.props.repo.private ? true : false} /></td>
                <td>{this.props.repo.private ? 'Yes' : 'No'}</td>
                <td>{this.returnLanguages}</td>
                <td><a className='btn' href={this.props.repo.html_url}>Go To This Repo</a></td>
            </tr>
        );

    }

}

export default Row;
