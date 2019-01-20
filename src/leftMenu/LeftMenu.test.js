import React from 'react';
import LeftMenu from './LeftMenu';

it('renders the menu', () => {
  const scenarioSelection = {
    scenarioSelection: "Frozen_Policy_INT",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false
  };
  const wrapper = shallow(<LeftMenu
    updateScenarioSelection={() => (false)}
    scenarioSelection={scenarioSelection}
    scenarioCombinations={{scenarioOptions: []}}
    toggleDifference={() => (false)}
  />);
  expect(wrapper.find('MenuLayout')).toHaveLength(1);
});