import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import StackedBarChart from './StackedBarChart';
import StackedBarDiffChart from './StackedBarDiffChart';
import {MainArea, Flex} from './Charts.style';
import stackedBar from '../data/stackedBar';
import line from '../data/line';
import { useTranslation } from "react-i18next";

const DownloadButton = styled.button`
  display: flex;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(50, 50, 50);
  color: rgb(184,176,183);
  padding: 8px;
  &:hover {
    cursor: pointer;
    background-color: #555;
  }
`;

const FullScreenChart = props => {
  const { t } = useTranslation();
  const {
    routeProps,
    scenarioSelection,
    scenarioSelection2,
    backRoute,
    tabSelection,
    chartName, //chartName is not being passed in props, but can be accessed using routeProps.location.state.chartName
    chartTitle,
    showDifference,
  } = props;

  const theChartName = routeProps.location.state.chartName;

  const downloadData = async () => {
    const myData = getDataForDownload();
    const fileName = 'file';
    const json = JSON.stringify(myData);
    const blob = new Blob([json], {type: 'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getDataForDownload = () => {
    let data = stackedBar.data.scenarios
      .filter(
        o =>
          o.scenario === scenarioSelection || o.scenario === scenarioSelection2
      )
      .map(o => ({
        scenario: o.scenario,
        indicators: o.indicators.filter(i => i.indicator === theChartName),
      }));
    return data;
  };
  return (
    <>
      {showDifference === true && (
        <MainArea>
          <Flex>
            <StackedBarDiffChart
              {...routeProps.location.state}
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
      )}
      {!showDifference && (
        <MainArea>
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
      )}
      <DownloadButton onClick={downloadData}>{t("general.download")}</DownloadButton>
    </>
  );
};
FullScreenChart.propTypes = {
  routeProps: PropTypes.any.isRequired,
  scenarioSelection: PropTypes.string.isRequired,
  scenarioSelection2: PropTypes.string.isRequired,
  backRoute: PropTypes.string.isRequired,
  tabSelection: PropTypes.string.isRequired,
  chartName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string,
  showDifference: PropTypes.string.isRequired,
};

export default FullScreenChart;
