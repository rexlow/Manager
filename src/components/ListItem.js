import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import CardSection from './common/CardSection';

class ListItem extends Component {

  onRowPress() {
    Actions.employeeCreate({ employee: this.props.employee });
  }

  render() {
    const { name, shift } = this.props.employee;
    return(
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.employeeName}>{name}</Text>
            <Text style={styles.employeeName}>{shift}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
