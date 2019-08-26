import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TabLayout = styled.div`
  display: none;
  ${breakpoint("desktop")`
    display: flex;  
    height: 50px;
    flex-direction: row;
    flex-shrink: 0;
    flex-grow: 1;
    justify-content: flex-start;
    padding-left: 20px;
    color: white;
    background: rgb(80, 80, 80);
    visibility: visible;
  `}
`;

const TabItem = styled(Link)`
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  font-size: 1em;
  margin: 3px 0px 0px 0px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  color: ${props => (props.selected ? "black" : "inherit")};
  background: ${props => (props.selected ? "white" : "inherit")};
`;

function Tabs(props) {
  const { t } = useTranslation();
  return (
    <TabLayout>
      <TabItem 
        to={props.preRoute + t("tabRoutes.overview") + props.backRoute} selected={props.selectedChartgroup === "/"}
        //onClick={()=>{props.UpdateTabSelection(t("tabRoutes.overview"))}}
        onClick={()=>{props.UpdateTabSelection('overview')}}
        >
        {t("tabs.overview")}
      </TabItem>
      <TabItem 
        to={props.preRoute + t("tabRoutes.mainresults") + props.backRoute} selected={props.selectedChartgroup === "/tab2"}
        onClick={()=>{props.UpdateTabSelection('mainresults')}}
        >
        {t("tabs.mainresults")}
      </TabItem>
      <TabItem to={props.preRoute + t("tabRoutes.supplysector") + props.backRoute} selected={props.selectedChartgroup === "/tab3"}>
        {t("tabs.supplysector")}
      </TabItem>
      <TabItem to={props.preRoute + t("tabRoutes.transportsector") + props.backRoute} selected={props.selectedChartgroup === "/tab4"}>
        {t("tabs.transportsector")}
      </TabItem>
      <TabItem to={props.preRoute + t("tabRoutes.industry") + props.backRoute} selected={props.selectedChartgroup === "/tab5"}>
        {t("tabs.industry")}
      </TabItem>
      <TabItem to={props.preRoute + t("tabRoutes.households") + props.backRoute} selected={props.selectedChartgroup === "/tab6"}>
        {t("tabs.households")}
      </TabItem>
    </TabLayout>
  );
}

Tabs.propTypes = {
  selectedChartgroup: PropTypes.string.isRequired,
  backRoute: PropTypes.string,
  preRoute: PropTypes.string,
  UpdateTabSelection: PropTypes.func.isRequired
};

export default Tabs;
