import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';
import { emailChanged } from './actions/';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry={true}
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);
