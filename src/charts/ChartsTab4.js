
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartTab4'
import StackedBarDiffChart from './StackedBarDiffChartTab4'

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
            <StackedBarChart chartName='_Datacenters elforbrug' chartTitle='Datacenters elforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={50} />
            <StackedBarChart chartName='_Datacenters potentielle fjern' chartTitle='Datacenters potentielle fjernvarmeproduktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={30} />
            <StackedBarChart chartName='_Industriels CO2 udledninger' chartTitle='Industriels CO2 udledninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={100000} />
            <StackedBarChart chartName='_Industriens energi service' chartTitle='Industriens energi service' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={400} />
            <StackedBarChart chartName='_Industriens energibesparelser' chartTitle='Industriens energibesparelser per sektor' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={80} />
            <StackedBarChart chartName='_Industriens energiforbrug' chartTitle='Industriens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='PJ' minY={0} maxY={500} />
            <StackedBarChart chartName='_Industriens energiforbrug per' chartTitle='Industriens energiforbrug per sektor' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={500} />
            <StackedBarChart chartName='_Industriens omkostninger' chartTitle='Industriens omkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-1000} maxY={6000} />
            <StackedBarChart chartName='_Industriens potentielle overs' chartTitle='Industriens potentielle overskudsvarmeproduktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={10} />
    	  </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='_Datacenters elforbrug' chartTitle='Datacenters elforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Datacenters potentielle fjern' chartTitle='Datacenters potentielle fjernvarmeproduktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Industriels CO2 udledninger' chartTitle='Industriels CO2 udledninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-3000} maxY={5000} />
            <StackedBarDiffChart chartName='_Industriens energi service' chartTitle='Industriens energi service' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-30} maxY={30} />
            <StackedBarDiffChart chartName='_Industriens energibesparelser' chartTitle='Industriens energibesparelser per sektor' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Industriens energiforbrug' chartTitle='Industriens energiforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='PJ' minY={-30} maxY={130} />
            <StackedBarDiffChart chartName='_Industriens energiforbrug per' chartTitle='Industriens energiforbrug per sektor' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-20} maxY={20} />
            <StackedBarDiffChart chartName='_Industriens omkostninger' chartTitle='Industriens omkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-7000} maxY={7000} />
            <StackedBarDiffChart chartName='_Industriens potentielle overs' chartTitle='Industriens potentielle overskudsvarmeproduktion' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-5} maxY={5} />
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