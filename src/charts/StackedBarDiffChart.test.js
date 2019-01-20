import React from 'react';
import StackedBarDiffChart from './StackedBarDiffChart';

it('renders the chart title', () => {
  const selectedScenario = "Frozen_Policy_INT";
  const selectedScenario2 = "Energispar_INT";
  const chartName = "_CO2 emissioner_INT";
  const chartTitle = "Dummy Title";
  const combinedChart = false;
  const minY = 0;
  const maxY = 1;
  const label = "Dummy Label";

  const wrapper = shallow(<StackedBarDiffChart
    selectedScenario={selectedScenario}
    selectedScenario2={selectedScenario2}
    chartName={chartName}
    chartTitle={chartTitle}
    combinedChart={combinedChart}
    minY={minY}
    maxY={maxY}
    label={label}
  />);

  expect(wrapper.find('VictoryChart')).toHaveLength(1);
});

