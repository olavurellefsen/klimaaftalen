import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import {
  ScenarioList,
  ScenarioDivider,
  ScenarioHeader,
  ScenarioOption,
  MenuSeparatorLine
} from "./ScenarioSelectionList.style";
import { withRouter } from 'react-router-dom';

const ScenarioSelectionList = props => {
  const { t } = useTranslation();
  const handleChange = (event, value) => {
    props.updateScenarioSelection(event, props.name, value);
  };

  const { dimensionOptions, dimensionTitle, narrowVersion } = props;
  let newLink = '';
  let stringValue = props.selectedValue.toString();
  let stringValue2 = props.selectedValue2.toString();
  let scenarioOptions = dimensionOptions
    .filter(option => option.ccs === props.showCCS)
    .map(option => {
      let optionValue = option.name;
      //alert('option: ' + JSON.stringify(option) + '  \nS1: ' + stringValue + '\nS2: ' + stringValue2)
      /* console.log('option: ' + 
        JSON.stringify(option) + 
        '\nS1: ' + stringValue + 
        '\nS2: ' + stringValue2 +
        '\ntab: ' + props.tabSelection + 
        '\nbackRoute: ' + props.backroute
        ) */
      if (optionValue === stringValue) {
        if (stringValue2 !== '')
         newLink = t("tabRoutes." + props.tabSelection) + t("scenarioRoutes." + stringValue2);
        else 
          newLink = t("tabRoutes." + props.tabSelection) + t("scenarioRoutes." + stringValue);
        //alert("S1 match: " + newLink)
        //console.log("S1 match: " + newLink)
      }
      else if (optionValue === stringValue2)
        {newLink = t("tabRoutes." + props.tabSelection ) + t("scenarioRoutes." + stringValue);
        //alert('S2 match: ' + newLink)
        //console.log('S2 match: ' + newLink)
      }
      else {
        newLink = t("tabRoutes." + props.tabSelection) + t("scenarioRoutes." + stringValue) + t("scenarioRoutes." + option.name)
      }
      //console.log("preRoute: " + props.preRoute)
      newLink = props.preRoute + newLink
      console.log("After Link: " + newLink)
      if (optionValue === "division_line") {
        return <MenuSeparatorLine key={option.id} />;
      } else {
        //console.log("xxxxxx: " + JSON.stringify(props.tabSelection))
        //console.log("scenarioSelectionLinkList: " + props.tabSelection + props.backRoute + t("scenarioRoutes." + option.name))
        //console.log('real new link: ' + newLink)
        //console.log('tabs: ' + props.tabSelection)
        return (
          <ScenarioOption 
            //to={ props.tabSelection + props.backRoute + t("scenarioRoutes." + option.name)}
            to={ newLink }
            key={'optionID' + option.id}
            value={optionValue}
            selected={optionValue === stringValue ? 1 : undefined}
            selected2={optionValue === stringValue2 ? 1 : undefined}
            onClick={event => handleChange(event, optionValue)}
            narrowversion={narrowVersion ? 'true' : undefined}
          >
            {narrowVersion === false && t("scenario."+option.short_description)}
            {narrowVersion === true && t("scenario."+option.ultra_short_description)}
          </ScenarioOption>
        );
      }
    });
  return (
    <ScenarioList>
      <ScenarioDivider />
      <ScenarioHeader narrowVersion={narrowVersion}>
        {dimensionTitle}
      </ScenarioHeader>
      {scenarioOptions}
    </ScenarioList>
  );
};

ScenarioSelectionList.propTypes = {
  updateScenarioSelection: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.any.isRequired,
  selectedValue2: PropTypes.any.isRequired,
  dimensionOptions: PropTypes.array.isRequired,
  dimensionTitle: PropTypes.string.isRequired,
  narrowVersion: PropTypes.bool.isRequired,
  showCCS: PropTypes.bool.isRequired,
  tabSelection: PropTypes.any,
  preRoute: PropTypes.string 
};

export default withRouter(ScenarioSelectionList);
