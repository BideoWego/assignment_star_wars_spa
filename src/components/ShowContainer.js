import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import Response from './Response';
import Home from './Home';


class ShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      response: {}
    };
  }

  async componentDidMount() {
    await this._swapi();
    this.forceUpdate();
  }

  render() {
    const state = {
      json: this.state.response,
      isFetching: this.state.isFetching
    };

    return (
      <div className="ShowContainer">
        <Response name={this.props.name} {...state} {...this.props} />
      </div>
    );
  }

  async _swapi() {
    try {
      this.setState({ isFetching: true });
      const [ , resource ] = this.props.location.pathname.split('/');
      const id = this.props.match.params.id;
      const segments = id ? [resource, id] : [resource];
      const url = segments.join('/');
      let response = await fetch(`https://swapi.co/api/${ url }/`);
      response = await response.json();
      this.setState({ response, isFetching: false });
    } catch (e) {
      console.error(e);
    }
  }
}


export default ShowContainer;

