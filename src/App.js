import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import LeftMenu from "./leftMenu/LeftMenu";
import LeftMenuMobile from "./leftMenu/LeftMenu.mobile";
import Tabs from "./tabs/Tabs";
import TabsMobile from "./tabs/Tabs.mobile";
import Charts from "./charts/Charts";
import ChartsTab2 from "./charts/ChartsTab2";
import ChartsTab3 from "./charts/ChartsTab3";
import ChartsTab4 from "./charts/ChartsTab4";
import ChartsTab5 from "./charts/ChartsTab5";
import ChartsTab6 from "./charts/ChartsTab6";
import StackedBarChart from './charts/StackedBarChart'
import About from "./pages/About";
import PageRenderer from "./pages/PageRenderer";
import Prerequisites from "./pages/Prerequisites";
import scenarioCombinations from "./data/scenarioCombinations";
import { MainArea, Flex } from "./charts/Charts.style"
import stackedBar from "./data/stackedBar";
import { withTranslation } from 'react-i18next';
import dk from "./translations/dk"
import en from "./translations/en"
//import i18n from 'i18next';


ReactGA.initialize("UA-127032810-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const Page = styled.div`
  height: 100%;
  margin: 0px;
  display: flex;
  box-sizing: border-box;
`;
const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  flex-grow: 1; /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto; /*adds scroll to this container*/
  overflow-x: hidden;
`;
const MainSwitch = styled(Switch)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  
`;

export const changeScenario = (name, value) => ({
  [name]: value
});

const default_scenario = "FP_NO_WIN_INT";
const default_tab = "overview"

export class App extends React.Component {
  constructor(props) {
    super(props);
    var selections = props.location.pathname.split('/')
    let CCS = false
    selections.forEach(
      (select, index) => {
        if (select === 'CCS') {
          selections[index] = undefined
          CCS = true
        }
      }
    )
    
    this.state = {
      tabSelection: this.getTabSelection(selections[1]),
      scenarioSelection: this.getScenarioSelection(selections[2]),
      scenarioSelection2: this.getScenarioSelection2(selections[3]),
      showWelcome: true,
      showDifference: false,
      showCCS: CCS,
      currentLanguage: 'dk',
      changeLanguageTo: 'dk'
    };
    this.scenarioCombinations = scenarioCombinations.scenarioCombinations;
  }

  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  };

  changeCurrentLanguage = (language) => {
    this.setState({changeLanguageTo: language})
  }
  
  getScenarioSelection = (sel) => {
    if (sel !== undefined) {
      if (this.props.i18n.language === 'en') {
        return Object.entries(en.scenarioRoutes).find(r => (
          r[1] === "/" + sel
          )
        )[0]
      } else {
        return Object.entries(dk.scenarioRoutes).find(r => (
          r[1] === "/" + sel
          )
        )[0]
      }
    }
    else  
      return default_scenario
  }
  getScenarioSelection2 = (sel) => {
    if (sel !== undefined)
      if (this.props.i18n.language === 'en') {
        return Object.entries(en.scenarioRoutes).find(r => (
          r[1] === "/" + sel
          )
        )[0]
      } else {
        return Object.entries(dk.scenarioRoutes).find(r => (
          r[1] === "/" + sel
          )
        )[0]
      }
    else  
      return ''
  }
  getTabSelection = (sel) => {
    if (sel !== "")
      if (this.props.i18n.language === 'en') {
        return Object.entries(en.tabRoutes).find(r => (
          r[1] === "/" + sel
          )
        )[0]
      } else {
        let tabEntry = Object.entries(dk.tabRoutes).find(r => (
          r[1] === "/" + sel
          )
        )
        return tabEntry[0]
      }
    else  
      return default_tab
  }
  UpdateTabSelection = (tab) => {
    this.setState({"tabSelection": tab });
  }

  UpdateScenarioSelection = (e, name, value) => {
    if (this.state.scenarioSelection2 !== "") {
      if (value === this.state.scenarioSelection) {
        this.setState(
          changeScenario("scenarioSelection", this.state.scenarioSelection2)
        );
        this.setState(changeScenario("scenarioSelection2", ""));
      } else {
        if (value === this.state.scenarioSelection2) {
          this.setState(changeScenario("scenarioSelection2", ""));
        } else {
          this.setState(changeScenario("scenarioSelection2", value));
        }
      }
    } else {
      if (value !== this.state.scenarioSelection) {
        this.setState(changeScenario("scenarioSelection2", value));
      }
    }
  };

  CloseWelcomeWidget = () => {
    this.setState({ showWelcome: false });
  };

  ToggleDifference = e => {
    e.preventDefault();
    this.setState({ showDifference: !this.state.showDifference });
  };

  ToggleShowCCS = e => {
    e.preventDefault();
    let newScenario = "";
    let newScenario2 = "";
    const oldScenario = this.state.scenarioSelection;
    const oldScenario2 = this.state.scenarioSelection2;
    if (this.state.showCCS) {
      newScenario = oldScenario.substring(0, oldScenario.length - 9);
      if (oldScenario2 !== "") {
        newScenario2 = oldScenario2.substring(0, oldScenario2.length - 9);
      }
    } else {
      newScenario = oldScenario + "_With_CCS";
      if (oldScenario2 !== "") {
        newScenario2 = oldScenario2 + "_With_CCS";
      }
    }
    this.setState({
      showCCS: !this.state.showCCS,
      scenarioSelection: newScenario,
      scenarioSelection2: newScenario2
    });
  };
  
  render() {
    const {t } = this.props;
    var sce1 = "", sce2 = "";
    if (this.state.scenarioSelection !== "") sce1 = t("scenarioRoutes." + this.state.scenarioSelection)
    if (this.state.scenarioSelection2 !== "") sce2 = t("scenarioRoutes." + this.state.scenarioSelection2)
    var backRoute = sce1 + sce2;
    console.log("br: " + backRoute)
    return (
      <Page>
        <Column>
          <Content>
            <LeftMenu
              selectedChartgroup={this.state.scenarioSelection}
              scenarioSelection={this.state}
              scenarioCombinations={this.scenarioCombinations}
              updateScenarioSelection={this.UpdateScenarioSelection}
              toggleDifference={this.ToggleDifference}
              toggleShowCCS={this.ToggleShowCCS}
              tabSelection={this.state.tabSelection}
            />
            <LeftMenuMobile
              selectedChartgroup={this.state.scenarioSelection}
              scenarioSelection={this.state}
              scenarioCombinations={this.scenarioCombinations}
              updateScenarioSelection={this.UpdateScenarioSelection}
              toggleDifference={this.ToggleDifference}
              toggleShowCCS={this.ToggleShowCCS}
              backRoute={backRoute}
              tabSelection={this.state.tabSelection}
            />
          </Content>
        </Column>
        <Column style={{flex:1}}>
          <Content>
            <Tabs selectedChartgroup={this.props.location.pathname} 
            UpdateTabSelection={this.UpdateTabSelection}
            backRoute={backRoute}
            tabSelection={this.tabSelection}
            match={this.props.match}
            location={this.props.location}
            history={this.props.history}
            />
            <TabsMobile selectedChartgroup={this.props.location.pathname} />
            <MainSwitch>
            <Route
                exact
                path="/"
                render={() => {
                  return ( 
                  <Redirect to={
                    this.props.t("tabRoutes.overview") 
                    + this.props.t("scenarioRoutes.FP_NO_WIN_INT")
                  }/>
                )}} />
              <Route
                path={t("tabRoutes.overview") + backRoute }
                render={() => (
                  <Charts
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                  />
                )}
              />
              <Route
                path={this.props.t("tabRoutes.mainresults")  + backRoute }
                render={() => (
                  <ChartsTab2
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                  />
                )}
              />
              <Route
                path={this.props.t("tabRoutes.supplysector")  + backRoute }
                render={() =>{
                  return (
                    <ChartsTab3
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                  />
                )}}
              />
              <Route
                path={this.props.t("tabRoutes.transportsector")  + backRoute }
                render={() => (
                  <ChartsTab4
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                  />
                )}
              />
              <Route
                path={this.props.t("tabRoutes.industry")  + backRoute }
                render={() => (
                  <ChartsTab5
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                  />
                )}
              />
              <Route
                path={this.props.t("tabRoutes.households")  + backRoute }
                render={() => (
                  <ChartsTab6
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                  />
                )}
              />
              {
                
              }
              <Route path="/about" component={About} />
              <Route
                path="/beskrivelser"
                render={() => {
                  return (
                    <PageRenderer
                      markdownFiles={[
                        "descriptions/0_intro.md",
                        "descriptions/1_basicscenarios.md",
                        "descriptions/2_enhedslisten.md",
                        "descriptions/3_socialistiskfolkeparti.md",
                        "descriptions/4_radikalevenstre.md",
                        "descriptions/5_socialdemokratiet.md",
                        "descriptions/6_alternativet.md",
                        "descriptions/7_regeringen.md"
                      ]}
                    />
                  );
                }}
              />
              <Route path="/forudsaetninger" component={Prerequisites} />
              <Route path="/abonner" render={() => {
                  return (
                    <PageRenderer
                      markdownFiles={[   
                        "descriptions/subscribe.md"
                      ]}
                    />
                  );
                }} />
                {stackedBar.data.scenarios.forEach(scen => {
                  //console.log("scenName: " + scen.scenario)
                  scen.indicators.forEach(i => {
                    i.indicatorGroups.forEach(ig => {
                      //console.log("ig: " + i.indicator + "   IndicatorGroup: " + ig.indicatorGroup)
                    })
                    
                  })
                })}
              <Route path="/chart_hello:id" render={routeProps => {
                return (
                  <MainArea>
                    <Flex>
                    <StackedBarChart {...routeProps.location.state} 
                    selectedScenario={this.state.scenarioSelection} 
                    selectedScenario2={this.state.scenarioSelection2}
                    width={800}
                    height={500}
                     >
                    </StackedBarChart>
                    {/* <div>location: {JSON.stringify(routeProps.location)}</div>
                    <div>match: {JSON.stringify(routeProps.match)}</div>
                    <div>history: {JSON.stringify(routeProps.history)}</div> */}
                    </Flex>
                  </MainArea>
                )
              }} />
              <Redirect to={
                t("tabRoutes." + this.state.tabSelection) + backRoute
              } />
            </MainSwitch>
          </Content>
        </Column>
      </Page>
    );
  }
}
App.propTypes = {
  t: PropTypes.any,
  match: PropTypes.any,
  i18n: PropTypes.any
}

export default withTranslation()(withRouter(App));
