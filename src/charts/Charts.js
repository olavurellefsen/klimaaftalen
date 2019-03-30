import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChart'
import StackedBarDiffChart from './StackedBarDiffChart'

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
            <StackedBarChart chartName='_CO2 emissioner' chartTitle='CO2 emissioner' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label='Kt' minY={0} maxY={40000} minY2={0} maxY2={1} label2="CO2 reduktion" Y2Percentage={true} />
            <StackedBarChart chartName='_Energi forbrug i Danmark' chartTitle='Energi forbrug i Danmark' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label='PJ' minY={0} maxY={1600} minY2={0} maxY2={1} label2="Vedvarende energi andel" Y2Percentage={true} />
            <StackedBarChart chartName='_Antal_havvindmølleparker' chartTitle='Antal havvindmølleparker' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='stk' minY={0} maxY={24} />
            <StackedBarChart chartName='_Solcelle_areal' chartTitle='Solcelle areal' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='km2' minY={0} maxY={2000} />
		    <StackedBarChart chartName='_Andel importeret biomasse' chartTitle='Andel importeret Biomasse' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Andel' minY={0} maxY={1} YPercentage={true} />
		  </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='_CO2 emissioner' chartTitle='CO2 emissioner' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label='Kt' minY={-16000} maxY={16000} minY2={-1} maxY2={1} label2="CO2 reduktion" Y2Percentage={true} />
            <StackedBarDiffChart chartName='_Energi forbrug i Danmark' chartTitle='Energi forbrug i Danmark' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={true} label='PJ' minY={-400} maxY={400} minY2={-1} maxY2={1} label2="Vedvarende energi andel" Y2Percentage={true} />
            <StackedBarDiffChart chartName='_Antal_havvindmølleparker' chartTitle='Antal havvindmølleparker' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='stk' minY={-24} maxY={24} />
            <StackedBarDiffChart chartName='_Solcelle_areal' chartTitle='Solcelle areal' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='km2' minY={-1000} maxY={1000} />
		    <StackedBarDiffChart chartName='_Andel importeret biomasse' chartTitle='Andel importeret Biomasse' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='Andel' minY={-1} maxY={1} YPercentage={true} />
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