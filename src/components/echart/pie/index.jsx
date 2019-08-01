import React from 'react';
import ReactEcharts from 'echarts-for-react';
import './index.css';

export default class PieEcharts extends React.PureComponent {
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
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                ]
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