import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";
import ScenarioSelectionList from "../scenarioSelection/ScenarioSelectionList";
import ToggleSwitch from "./ToggleSwitch";

const MenuLayout = styled.div`
  display: none;
  ${breakpoint("mobile", "desktop")`
    display: flex;  
    min-height: 100vh;
    flex-direction: column;
    flex-shrink: 0;
    width: 80px;
    color: white;
    background: rgb(50, 50, 50);
    visibility: visible;
  `}
`;

const AppLogo = styled.img`
  width: 45px;
  height: 67px;
  margin: 5px;
  border: 0;
`;

const MenuHeader = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: top;
`;

const MenuSeparatorLine = styled.hr`
  margin: 0.25em 12px 0.25em 5px;
  border-color: #555;
  border-width: 1px;
  width: 100hh;
`;

const MenuRoutes = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  font-size: 0.7em;
  margin: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${props => (props.selected ? "yellow" : "inherit")};
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ScenarioSelection = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const ToggleDifference = styled.div`
  padding: 5px;
  display: flex;
  justify-content: start;
  align-content: center;
  flex-direction: column;
`;

const ToggleSwitchText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin-top: 5px;
`;

const ScenarioDifferenceText = styled.div`
  font-size: 0.7em;
  color: ${props =>
    props.singleMode ? "gray" : props.selected ? "#2196F3" : "white"};
  margin: 5px;
`;

const MenuFooter = styled.div`
  padding: 5px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightNotice = styled.div`
  font-size: 0.7em;
  padding: 5px;
  margin: 0;
  width: 100%;
`;

const ExternalLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

class ScenarioSelectionMenu extends React.Component {
  render() {
    return (
      <MenuLayout>
        <MenuHeader>
          <AppLogo src="./images/dtulogo_white.png" alt="logo" />
          <MenuRoutes>
            <MenuItem
              to="/about"
              selected={this.props.selectedChartgroup === "/about"}
            >
              Om
            </MenuItem>
            <MenuItem
              to="/beskrivelser"
              selected={this.props.selectedChartgroup === "/beskrivelser"}
            >
              Beskrivelse
            </MenuItem>
            <MenuItem
              to="/forudsaetninger"
              selected={this.props.selectedChartgroup === "/forudsaetninger"}
            >
              Forudsætn.
            </MenuItem>
            <MenuItem
              to="/abonner"
              selected={this.props.selectedChartgroup === "/abonner"}
            >
              Abonnér
            </MenuItem>
          </MenuRoutes>
        </MenuHeader>
        <MenuSeparatorLine />
        <ScenarioSelection>
          <ScenarioSelectionList
            updateScenarioSelection={this.props.updateScenarioSelection}
            name="scenarioSelection"
            selectedValue={this.props.scenarioSelection.scenarioSelection}
            selectedValue2={this.props.scenarioSelection.scenarioSelection2}
            dimensionOptions={this.props.scenarioCombinations.scenarioOptions}
            dimensionTitle="Scenarier"
            narrowVersion={true}
            showCCS={this.props.scenarioSelection.showCCS}
          />
        </ScenarioSelection>
        <MenuSeparatorLine />
        <ToggleDifference onClick={e => this.props.toggleShowCCS(e)}>
          <ToggleSwitch
            dimmed={false}
            checked={this.props.scenarioSelection.showCCS}
          />
          <ToggleSwitchText selected={this.props.scenarioSelection.showCCS}>
            CCS
          </ToggleSwitchText>
        </ToggleDifference>
        <ToggleDifference onClick={e => this.props.toggleDifference(e)}>
          <ToggleSwitch
            dimmed={this.props.scenarioSelection.scenarioSelection2 === ""}
            checked={this.props.scenarioSelection.showDifference}
          />
          <ToggleSwitchText
            singleMode={this.props.scenarioSelection.scenarioSelection2 === ""}
            selected={this.props.scenarioSelection.showDifference}
          >
            Scenarie difference
          </ToggleSwitchText>
        </ToggleDifference>
        <ScenarioDifferenceText
          singleMode={this.props.scenarioSelection.scenarioSelection2 === ""}
          selected={this.props.scenarioSelection.showDifference}
        >
          (rød minus grøn)
        </ScenarioDifferenceText>
        <MenuSeparatorLine />
        <MenuFooter>
          <CopyrightNotice>
            <ExternalLink href="http://www.tokni.com">
              Developed by Tokni
            </ExternalLink>
          </CopyrightNotice>
        </MenuFooter>
      </MenuLayout>
    );
  }
}

ScenarioSelectionMenu.propTypes = {
  selectedChartgroup: PropTypes.string.isRequired,
  updateScenarioSelection: PropTypes.func.isRequired,
  scenarioSelection: PropTypes.object.isRequired,
  scenarioCombinations: PropTypes.object.isRequired,
  toggleDifference: PropTypes.func.isRequired,
  toggleShowCCS: PropTypes.func.isRequired
};

export default ScenarioSelectionMenu;
