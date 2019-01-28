import React from 'react';
import ScenarioSelectionList from './ScenarioSelectionList';

it('renders the scenario selection list', () => {
  const updateScenarioSelection = () => (false);
  const name = "";
  const selectedValue = 0;
  const selectedValue2 = 0;
  const dimensionOptions = [];
  const dimensionTitle = "";
  const narrowVersion = true;
  const showCCS = true;
  
  const wrapper = shallow(<ScenarioSelectionList 
    updateScenarioSelection={updateScenarioSelection}
    name={name}
    selectedValue={selectedValue}
    selectedValue2={selectedValue2}
    dimensionOptions={dimensionOptions}
    dimensionTitle={dimensionTitle}
    narrowVersion={narrowVersion}
    showCCS={showCCS}
  />);
  
  expect(wrapper.find('ScenarioList')).toHaveLength(1);
});