import React, { Component } from "react";
import Select, { components } from "react-select";

import AreasList from '../AssessmentForm/AreasList'

const OptionsList = AreasList;
const title = "Selecione suas subáreas:"

class MultiSelectInput extends Component {
  state = {
    values: []
  };

  handleChange = values => {
    this.setState({ values });
  };

  render() {
    const { values } = this.state;
    return (
      <div className="react-select__value-container">
        <Select
          hideSelectedOptions={values.length < 3 ? true : false}
          isMulti
          options={OptionsList}
          onChange={this.handleChange}
          value={values}
          components={{ ValueContainer }}
          placeholder={title}
        />
      </div>
    );
  }
}

export default MultiSelectInput;

const ValueContainer = ({ children, getValue, ...props }) => {
  let maxToShow = 5;
  var length = getValue().length;
  let displayChips = React.Children.toArray(children).slice(0, maxToShow);
  let shouldBadgeShow = length > maxToShow;
  let displayLength = length - maxToShow;

  return (
    <components.ValueContainer {...props}>
      {!props.selectProps.inputValue && displayChips}
      <div className="root">
        {shouldBadgeShow &&
          `+ ${displayLength} item${length != 1 ? "s" : ""} selected`}
      </div>
    </components.ValueContainer>
  );
};