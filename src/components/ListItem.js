import React, { Component } from 'react';
import { Text } from 'react-native';
import CardSection from './common/CardSection';

class ListItem extends Component {
  render() {
    console.log(this.props);
    const { name, shift } = this.props.employee;
    return(
      <CardSection>
        <Text style={styles.employeeName}>{name}</Text>
        <Text style={styles.employeeName}>{shift}</Text>
      </CardSection>
    )
  }
};

const styles = {
  employeeName: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
