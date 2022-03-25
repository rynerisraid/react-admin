import { connect } from 'react-redux';
import {increment,decrement,incrementIfOdd,incrementAsync} from './actions';
import Counter from '../../../domain/Counter';
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment:increment(),
    decrement:decrement(),
    incrementIfOdd:incrementIfOdd(),
    incrementAsync:incrementAsync()
   }, dispatch);
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);