import React from 'react';

import { Icon,Tooltip } from 'antd';
import LineEcharts from '../../components/echart/line/index'
import BarEcharts from '../../components/echart/bar/index'
import CountUp from 'react-countup';
import './index.css';
import 'antd/dist/antd.css';

class Home extends React.Component {
    state={
        uasrName:'',
        password:''
    };
    render() {
      return (
        <div className="home-box">
          <div className="home-top flex justify-content_space-between">
            <div className="top-left flex-grow_0 flex-shrink_0">
                <div className="top-li flex align-items_center">
                  <Icon style={{ fontSize: 32, color: '#68b828' }} type="area-chart" />
                  <div className="top-num f20 flex c2">
                  <CountUp  start={0}
                    end={99}
                    duration={1.5}
                    useEasing={true}
                    useGrouping={true}
                    decimals={2}
                    decimal="."/>
                    <span>%</span>
                  </div>
                </div>
                <div className="top-li flex align-items_center">
                <Icon type="like" style={{ fontSize: 32, color: '#7c38bc' }}/>
                  <div className="top-num f20 flex c1">
                  <CountUp  start={0}
                    end={177}
                    duration={1.5}
                    useEasing={true}
                    useGrouping={true}
                    decimals={2}
                    decimal="."/>
                    <span>k</span>
                  </div>
                </div>
                <div className="top-li flex align-items_center">
                  <Icon style={{ fontSize: 32, color: '#40bbea' }} type="area-chart" />
                  <div className="top-num f20 flex c3">
                  <CountUp  start={0}
                    end={-46}
                    duration={1.5}
                    useEasing={true}
                    useGrouping={true}
                    decimals={2}
                    decimal="."/>
                    <span></span>
                  </div>
                </div>
            </div>
            <div className="top-auto flex-grow_1">
              <LineEcharts />
            </div>
            <div className="top-right flex-grow_0 flex-shrink_0">
              <div className="right-box">
                <div className="right-top flex justify-content_space-between align-items_center">
                  <div className="right-name f14">访问量</div>
                  <Tooltip title="累计访问">
                     <Icon type="question-circle-o" />
                  </Tooltip>
                </div>
                <div className="right-data c3">8890</div>
                <BarEcharts />
                <div className="right-bai">
                  转化率：<span className='c2'>60%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      )
    }
  }
  
  export default Home;