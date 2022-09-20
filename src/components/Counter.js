import React from "react";
import { connect } from "react-redux";
import { counterPlus, counterMinus } from "../actions";

const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={props.counterPlus} className="ui button primary">
        +
      </button>
      <span>{props.counter}</span>
      <button onClick={props.counterMinus} className="ui button primary">
        -
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { counter: state.counter };
};

export default connect(mapStateToProps, { counterPlus, counterMinus })(Counter);
