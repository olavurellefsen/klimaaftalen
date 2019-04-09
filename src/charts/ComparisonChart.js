import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  VictoryChart,
  VictoryTheme,
  VictoryBar,
  VictoryLabel,
  VictoryAxis,
  VictoryLine
} from "victory";
import scenarioCombinations from "../data/scenarioCombinations";
import { useTranslation } from "react-i18next";

const ChartHeader = styled(VictoryLabel)`
  text-anchor: start;
  fill: #000000;
  font-family: inherit;
  font-size: 18px;
  font-weight: bold;
`;

const StackedBarChart = props => {
  const { t } = useTranslation();
  const stackedBar = props.stackedBar;
  const chartName = props.chartName;
  const chartTitle = t("chartTitle." + props.chartTitle);
  const scenarios = scenarioCombinations.scenarioCombinations.scenarioOptions
    .filter(o => o.ccs === false)
    .map(scenario => scenario.name);

  const chartValues = stackedBar.data.scenarios
    .filter(o => scenarios.includes(o.scenario))
    .map(scenario =>
      scenario.indicators
        .find(o => o.indicator === chartName)
        .indicatorGroups.map(chartGroup =>
          chartGroup.indicatorGroupValues
            .filter(indicatorGroupValue => indicatorGroupValue.year === 2050)
            .map(chartGroupValue => ({
              scenario: scenario.scenario,
              total: chartGroupValue.total
            }))
        )
    );
  //console.log(chartValues);

  const chartValues2 = props.showCCS
    ? [
        { scenario: "Frozen policy", total: 709744 },
        { scenario: "DGSB", total: 416050 },
        { scenario: "Regeringens udspil", total: 654793 },
        { scenario: "Alternativet", total: 483802 },
        { scenario: "Enhedslisten", total: 599123 },
        { scenario: "Liberal Alliance", total: 649690 },
        { scenario: "Radikale Venstre", total: 645949 },
        { scenario: "Socialistisk Folkeparti", total: 619880 },
        { scenario: "Socialdemokratiet", total: 654860 },
        { scenario: "Carbon budget 1.5°C", total: 486507 },
        { scenario: "Carbon budget 1.5°C (bio)", total: 482698 }
      ]
    : [
        { scenario: "Frozen policy", total: 694834 },
        { scenario: "DGSB", total: 388916 },
        { scenario: "Regeringens udspil", total: 627192 },
        { scenario: "Alternativet", total: 456024 },
        { scenario: "Enhedslisten", total: 571321 },
        { scenario: "Liberal Alliance", total: 621942 },
        { scenario: "Radikale Venstre", total: 621498 },
        { scenario: "Socialistisk Folkeparti", total: 598115 },
        { scenario: "Socialdemokratiet", total: 624130 },
        { scenario: "Carbon budget 1.5°C", total: 519185 },
        { scenario: "Carbon budget 1.5°C (bio)", total: 514679 }
      ];

  return (
    <div>
      <VictoryChart
        width={380}
        height={380}
        padding={{ left: 55, right: 50, top: 50, bottom: 55 }}
        theme={VictoryTheme.material}
      >
        <ChartHeader x={90} y={24} text={chartTitle} />
        <VictoryAxis label="Scenarios" tickFormat={t => ``} />
        <VictoryAxis
          dependentAxis
          axisLabelComponent={<VictoryLabel dx={120} />}
          key={2}
          offsetX={50}
          tickFormat={tick => `${tick / 1000}`}
          tickValues={[200000, 400000, 600000, 800000, 1000000, 1200000]}
          label={props.label}
        />
        <VictoryBar
          style={{ data: { fill: "#5cbae6" } }}
          data={chartValues2}
          x="scenario"
          y="total"
          alignment="start"
          barWidth={25}
          labels={d => `${d.scenario}`}
          labelComponent={
            <VictoryLabel
              dx={0}
              dy={8}
              angle={270}
              textAnchor="start"
              verticalAnchor="start"
            />
          }
        />
        <VictoryLine
          y={() => 512000}
          samples={1}
          style={{ data: { stroke: "red" } }}
        />
      </VictoryChart>
    </div>
  );
};

StackedBarChart.defaultProps = {
  divideValues: 1,
  selectedScenario2: "",
  YPercentage: false
};

StackedBarChart.propTypes = {
  showCCS: PropTypes.bool,
  stackedBar: PropTypes.object,
  line: PropTypes.object,
  selectedScenario: PropTypes.string.isRequired,
  selectedScenario2: PropTypes.string,
  chartName: PropTypes.string.isRequired,
  chartTitle: PropTypes.string.isRequired,
  combinedChart: PropTypes.bool.isRequired,
  minY: PropTypes.number.isRequired,
  maxY: PropTypes.number.isRequired,
  minY2: PropTypes.number,
  maxY2: PropTypes.number,
  label: PropTypes.string.isRequired,
  divideValues: PropTypes.number,
  label2: PropTypes.string,
  YPercentage: PropTypes.bool,
  Y2Percentage: PropTypes.bool
};

export default StackedBarChart;
