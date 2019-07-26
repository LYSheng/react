import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css';

export default class BarEcharts extends React.PureComponent {
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
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                show:false,  
                splitLine:{  
            　　　　show:false  
            　　}  
            }
        ],
        yAxis : [
            {
                type : 'value',
                show:false,  
                splitLine:{  
            　　　　show:false  
            　　}  
            },
            
        ],
        series : [
            {
                name:'访问量',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
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