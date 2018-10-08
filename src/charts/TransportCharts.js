
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartTransport'
import StackedBarDiffChart from './StackedBarDiffChartTransport'

const MainArea = styled.div`
  flex: 1;
  padding: 20px;
  `;
  MainArea.displayName = 'MainArea';
const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: ${props => (props.direction==='column' ? 'column' : 'row')};
  `;
  Flex.displayName = 'Flex';
const Charts = (props) => {
  const selectedScenario = props.scenarioSelection.scenarioSelection;
  const selectedScenario2 = props.scenarioSelection.scenarioSelection2;

  return(
    <MainArea>
      {(props.scenarioSelection.showWelcome===true) && <Welcome closeWelcome={props.closeWelcome} />}
        {(props.scenarioSelection.showDifference===false || (props.scenarioSelection.showDifference===true && selectedScenario2==="")) && 
          <Flex>
            <StackedBarChart chartName='_TRA_Transport - bil bestanden' chartTitle='Bilbestanden' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="k" minY={0} maxY={4000} />
            <StackedBarChart chartName='_TRA_Transport brændselsforbrug bi' chartTitle='Brændselsforbrug biler' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={100} />
            <StackedBarChart chartName='_TRA_Transport brændselsforbrug øv' chartTitle='Brændselsforbrug øvrig land' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={0} maxY={100} />
          </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='_TRA_Transport - bil bestanden' chartTitle='Bilbestanden' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="k" minY={-4000} maxY={4000} />
            <StackedBarDiffChart chartName='_TRA_Transport brændselsforbrug bi' chartTitle='Brændselsforbrug biler' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-50} maxY={50} />
            <StackedBarDiffChart chartName='_TRA_Transport brændselsforbrug øv' chartTitle='Brændselsforbrug øvrig land' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label="PJ" minY={-50} maxY={50} />
          </Flex>
        }        
    </MainArea>
  );
}

Charts.propTypes = {
  scenarioSelection: PropTypes.object.isRequired,
  closeWelcome: PropTypes.func.isRequired
}

export default Charts;