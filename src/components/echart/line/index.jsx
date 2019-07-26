import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css';

export default class LineEcharts extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
        
        }
      } 

    //   当组件输出到 DOM 后会执行 componentDidMount() 钩子
    componentDidMount() {

    }
  
    componentWillUnmount() {
  
    }
    getOtion() {
    const option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name:'最高气温',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            smooth:true,//设置折线图平滑

        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            smooth:true,//设置折线图平滑
        },
    ]
        };
        return option;
    }
    render() {
        return (
            <ReactEcharts
                option={this.getOtion()}
                style={{height: '100%', width: '100%'}}
            className='react_for_echarts' />
        );
    }
}