import chartParam from '../data/charts'

const getFullChartName = (tab, name) => {
    let ret =
    chartParam.tabs[tab].charts.find(c => {
        /* console.log("chData: " + JSON.stringify(c) + 
            "\ntab: " + JSON.stringify(tab) + 
            "\nname: " + JSON.stringify(name)) */
        return (
            c.name === name
        )
    })
    return ret
}
export default getFullChartName