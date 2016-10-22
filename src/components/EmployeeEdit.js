import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from './../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    
  }

  render(){
    return(
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);