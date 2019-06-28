import {connect} from 'react-redux';

import {setFilter} from '../actions';
import Filter from "../components/Filter";



const mapStateToProps = (state) => {
  return {
    activeFilter: state.filter
  }
};

const mapDispatchToProps =(dispatch) => {
  return {
    onSetFilter: (filter) => dispatch(setFilter(filter))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Filter);