import React from 'react';
import Login from '../components/Login'

const withAuthenticate = App =>
  class extends React.Component {
      constructor(){
          super();
          this.state={
              loggedIn: false,
              username:'',
              password: ''
          }
      }
      handleUsername= event =>{
        this.setState({
            username: event.target.value,
        })
    }
    handlePassword= event =>{
        this.setState({
            password: event.target.value,
        })
    }

    submitLogin=event=>{
        event.preventDefault();
        this.setState({loggedIn: !this.state.loggedIn})
    }
    render() {
        if(this.state.loggedIn){
            return <App />;
        }
      return <Login usernameLogin={this.handleUsername} passwordLogin={this.handlePassword} submitted={this.submitLogin} />
    }
  }

export default withAuthenticate;
