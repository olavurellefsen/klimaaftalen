import React from "react";
import PropTypes from "prop-types";
import { ChartDiv } from "./Charts.style";
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { withRouter } from "react-router-dom"

const Chart = props => {
    const {t} = useTranslation()
    const { line, 
        stackedBar, 
        selectedScenario, 
        selectedScenario2, 
        chartName, 
        chartTitle,
        combinedChart,
        label,
        minY,
        maxY,
        minY2,
        maxY2,
        label2,
        Y2Percentage,
        tabSelection,
        backRoute
     } = props

    var newState = {
        "chartName": chartName,
        "chartTitle": chartTitle,
        "selectedScenario": selectedScenario,
        "selectedScenario2": selectedScenario2,
        "combinedChart": combinedChart,
        "label": label,
        "minY": minY,
        "maxY": maxY,
        "minY2": minY2,
        "maxY2": maxY2,
        "label2": label2,
        "line": line,
        "Y2Percentage": Y2Percentage,
        "stackedBar": stackedBar
    }
    //console.log("stakedBar: " + JSON.stringify( stackedBar))
    console.log("chartTitle: " + JSON.stringify( chartTitle))
    return(
        <ChartDiv>
            <Link 
                to={
                    {pathname: props.location.pathname + '/Chart/' + t('chartRoutes.' + chartTitle),
                     state: {...newState}}}>
            {/* <Link to="/chartFull"> */}
                {props.children}
            </Link>
        </ChartDiv>
    )    
}
export default withRouter(Chart); 

Chart.propTypes = {
    children: PropTypes.any,
    line: PropTypes.any,
    stackedBar: PropTypes.any, 
    selectedScenario: PropTypes.any, 
    selectedScenario2: PropTypes.any, 
    chartName: PropTypes.any, 
    chartTitle: PropTypes.any,
    combinedChart: PropTypes.any,
    label: PropTypes.any,
    minY: PropTypes.any,
    maxY: PropTypes.any,
    minY2: PropTypes.any,
    maxY2: PropTypes.any,
    label2: PropTypes.any,
    Y2Percentage: PropTypes.any,
    tabSelection: PropTypes.string,
    backRoute: PropTypes.string
}


