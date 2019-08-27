import React from "react";

import PropTypes from "prop-types";
import StackedBarChart from "./StackedBarChart";
import StackedBarDiffChart from "./StackedBarDiffChart";
import { MainArea, Flex } from "./Charts.style";
import stackedBar from "../data/stackedBar";
import line from "../data/line";
import getFullChartData from "./ChartUtils"

const FullScreenChart = props => {
const {
    routeProps,
    scenarioSelection,
    scenarioSelection2,
    backRoute,
    tabSelection,
    chartName,
    chartTitle,
    showDifference
} = props
let name 
if (routeProps.location.state) {
    console.log("name from routeProps: " + routeProps.location.state.chartName)
    name = routeProps.location.state.chartName
}
else {
    console.log("name from props: " + chartName)
        name = chartName
    }
let data = getFullChartData(tabSelection, name)
//alert("fullChart data: " + JSON.stringify(data))

if (showDifference)
  return (
    <MainArea>
      <Flex>
        <StackedBarDiffChart {...routeProps.location.state} 
          selectedScenario={scenarioSelection} 
          selectedScenario2={scenarioSelection2}
          combinedChart={data.combinedChart}
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
      <Flex>
        {
            //alert("Chart Route hit")
            }
        <StackedBarChart 
          chartName={chartName}
          chartTitle={chartTitle}
          selectedScenario={scenarioSelection} 
          selectedScenario2={scenarioSelection2}
          combinedChart={data.combinedChart}
          backRoute={backRoute}
          tabSelection={tabSelection}
          stackedBar={stackedBar}
          width={800}
          height={500}
          minY={0}
          maxY={40000}
          minY2={0}
          maxY2={1}
          line={line}
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
    chartName: PropTypes.string,
    chartTitle: PropTypes.string,
    showDifference: PropTypes.bool.isRequired,

}

export default FullScreenChart;

