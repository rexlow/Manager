import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import { View, Text, ListView } from 'react-native';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    return(
      <View>
        <Text>dasdasd</Text>
        <Text>dasdasd</Text>
        <Text>dasdasd</Text>
        <Text>dasdasd</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  //convert firebase object to array with lodash
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid};
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
