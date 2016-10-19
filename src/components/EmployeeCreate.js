import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from './../actions';
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
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
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

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
