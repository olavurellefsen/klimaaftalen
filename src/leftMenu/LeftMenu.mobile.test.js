import React from 'react';
import LeftMenuMobile from './LeftMenu.mobile';

it('renders the mobile menu', () => {
  const scenarioSelection = {
    scenarioSelection: "Frozen_Policy_INT",
    scenarioSelection2: "",
    showWelcome: true,
    showDifference: false,
    showCCS: false
  };
  const wrapper = shallow(<LeftMenuMobile
    selectedChartgroup=""
    updateScenarioSelection={() => (false)}
    scenarioSelection={scenarioSelection}
    scenarioCombinations={{scenarioOptions: []}}
    toggleDifference={() => (false)}
    toggleShowCCS={() => (false)}
  />);
  expect(wrapper.find('MenuLayout')).toHaveLength(1);
});