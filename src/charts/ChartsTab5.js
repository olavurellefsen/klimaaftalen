
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Welcome from '../alert/Welcome'
import StackedBarChart from './StackedBarChartTab5'
import StackedBarDiffChart from './StackedBarDiffChartTab5'

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
            <StackedBarChart chartName='_Centrale bygningers energibeh' chartTitle='Centrale bygningers energibehov' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={60} />
            <StackedBarChart chartName='_Decentrale bygningers energib' chartTitle='Decentrale bygningers energibehov' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={50} />
            <StackedBarChart chartName='_Husholdninger solcelle kapaci' chartTitle='Husholdninger solcelle kapacitet' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={9000} />
            <StackedBarChart chartName='_Husholdningers elapparater' chartTitle='Husholdningers elapparater' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={40} />
            <StackedBarChart chartName='_Husholdningers netto energi f' chartTitle='Husholdningers netto energi forbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={240} />
            <StackedBarChart chartName='_Husholdningers varmeforbrug' chartTitle='Husholdningers varmeforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='PJ' minY={0} maxY={200} />
            <StackedBarChart chartName='_Husholdnings omkostninger' chartTitle='Husholdnings omkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={18000} />
            <StackedBarChart chartName='_Individuelle bygningers opvar' chartTitle='Individuelle bygningers opvarmningsbehov' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={0} maxY={50} />
    	  </Flex>
        }
        {(props.scenarioSelection.showDifference===true && selectedScenario2!=="") && 
          <Flex>
            <StackedBarDiffChart chartName='_Centrale bygningers energibeh' chartTitle='Centrale bygningers energibehov' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Decentrale bygningers energib' chartTitle='Decentrale bygningers energibehov' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Husholdninger solcelle kapaci' chartTitle='Husholdninger solcelle kapacitet' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-2000} maxY={2000} />
            <StackedBarDiffChart chartName='_Husholdningers elapparater' chartTitle='Husholdningers elapparater' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-5} maxY={5} />
            <StackedBarDiffChart chartName='_Husholdningers netto energi f' chartTitle='Husholdningers netto energi forbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Husholdningers varmeforbrug' chartTitle='Husholdningers varmeforbrug' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label='PJ' minY={-10} maxY={10} />
            <StackedBarDiffChart chartName='_Husholdnings omkostninger' chartTitle='Husholdnings omkostninger' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-2500} maxY={10000} />
            <StackedBarDiffChart chartName='_Individuelle bygningers opvar' chartTitle='Individuelle bygningers opvarmningsbehov' selectedScenario={selectedScenario} selectedScenario2={selectedScenario2} combinedChart={false} label=' ' minY={-1} maxY={1} />
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