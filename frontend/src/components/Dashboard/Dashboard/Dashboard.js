import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Dashboard = () => {

    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3]
        }],
        plotOptions: {
            series: {
              point: {
                events: {
                  //mouseOver: setHoverData.bind(this)
                }
              }
            }
          },
          tooltip: {
            backgroundColor: '#FCFFC5',
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 3
        }
      }
      
    return (
        <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        </div>
    );
}
 
export default Dashboard;