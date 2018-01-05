import React, { PureComponent } from 'react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import Response from './Response';
import Home from './Home';
import ShowContainer from './ShowContainer';


class ResponseContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      response: {}
    };
  }

  async componentDidMount() {
    await this._swapi();
  }

  render() {
    const state = {
      json: this.state.response,
      isFetching: this.state.isFetching
    };

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/films" render={ props => <Response name="films" {...state} {...props} /> } />
        <Route exact path="/people" render={ props => <Response name="people" {...state} {...props} /> } />
        <Route exact path="/planets" render={ props => <Response name="planets" {...state} {...props} /> } />
        <Route exact path="/species" render={ props => <Response name="species" {...state} {...props} /> } />
        <Route exact path="/starships" render={ props => <Response name="starships" {...state} {...props} /> } />
        <Route exact path="/vehicles" render={ props => <Response name="vehicles" {...state} {...props} /> } />

        <Route path="/films/:id" render={ props => <ShowContainer name="film" {...props} /> } />
        <Route path="/people/:id" render={ props => <ShowContainer name="person" {...props} /> } />
        <Route path="/planets/:id" render={ props => <ShowContainer name="planet" {...props} /> } />
        <Route path="/species/:id" render={ props => <ShowContainer name="specie" {...props} /> } />
        <Route path="/starships/:id" render={ props => <ShowContainer name="starship" {...props} /> } />
        <Route path="/vehicles/:id" render={ props => <ShowContainer name="vehicle" {...props} /> } />

        <Route render={ () => <h1 className="text-danger">404 Not Found</h1> } />
      </Switch>
    )
  }

  async _swapi() {
    try {
      this.setState({ isFetching: true });
      const [ , resource ] = this.props.location.pathname.split('/');
      let response = await fetch(`https://swapi.co/api/${ resource }`);
      response = await response.json();
      this.setState({ response, isFetching: false });
    } catch (e) {
      console.error(e);
    }
  }
}


export default withRouter(ResponseContainer);

