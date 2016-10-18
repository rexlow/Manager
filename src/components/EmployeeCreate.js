import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';

class EmployeeCreate extends Component {
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
          />
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
        <CardSection></CardSection>
      </Card>
    );
  };
};

export default EmployeeCreate;
