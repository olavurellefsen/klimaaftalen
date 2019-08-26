import React from "react";

import PropTypes from "prop-types";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBar";
import line from "../data/line";

const FullScreenChart = props => {
const {
    routeProps,
    scenarioSelection,
    scenarioSelection2,
    backRoute,
    tabSelection,
    chartName,//chartName is not being passed in props, but can be accessed using routeProps.location.state.chartName
    chartTitle,
    showDifference
} = props

const theChartName = routeProps.location.state.chartName
const downloadFile = async () => {
  const myData = getDataForDownload()
  const fileName = "file";
  const json = JSON.stringify(myData);
  const blob = new Blob([json],{type:'application/json'});
  const href = await URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const getDataForDownload = () => {
  let data = stackedBar.data.scenarios
            .filter(o => (o.scenario === scenarioSelection || o.scenario === scenarioSelection2))
  let t = data.map(o => ({
            scenario: o.scenario,
            indicators: o.indicators.filter(i =>
                i.indicator === theChartName) 
            
          }))
  let i = t
  return t
}

if (showDifference)
  return (
    <MainArea>
      <Flex>
        <StackedBarDiffChart {...routeProps.location.state} 
          selectedScenario={scenarioSelection} 
          selectedScenario2={scenarioSelection2}
          backRoute={backRoute}
          tabSelection={tabSelection}
          stackedBar={stackedBar}
          chartName={chartName}
          width={800}
          height={500}
          line={line}
          minY={0}  
          maxY={40000}
          minY2={0}
          maxY2={1}
      />
      </Flex>
    </MainArea>
  )
else
  return (
    <MainArea>
    
    <div onClick={downloadFile}>download JSON</div>  
      <Flex>
        <StackedBarChart 
          chartName={'chartName'}
          chartTitle={'chartTitle'}
          selectedScenario={scenarioSelection} 
          selectedScenario2={scenarioSelection2}
          backRoute={backRoute}
          tabSelection={tabSelection}
          stackedBar={stackedBar}
          width={800}
          height={500}
          line={line}
          minY={0}
          maxY={40000}
          minY2={0}
          maxY2={1}
          {...routeProps.location.state}
        />
      </Flex>
    </MainArea>
  )
}
FullScreenChart.propTypes = {
    scenarioSelection: PropTypes.string.isRequired,
    scenarioSelection2: PropTypes.string.isRequired,
    backRoute: PropTypes.string.isRequired,
    tabSelection: PropTypes.string.isRequired,
    chartName: PropTypes.string.isRequired,
    chartTitle: PropTypes.string,
    showDifference: PropTypes.string.isRequired,

}

export default FullScreenChart;

