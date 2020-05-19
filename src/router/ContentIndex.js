import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Editor from "../pages/editor";
import Index from "../pages/index";
import MarkDown from "../pages/markdown";
import H5 from "../pages/h5";
import H5Detail from '../pages/h5/pages/h5Detail';
import {IconList} from '../component/Menu/IconList';
import Feedback from "../pages/feedback/feedback";
import UploadPic from "../pages/upload/upload";
import LineChart from "../pages/chart/lineChart";
import ColumnChart from "../pages/chart/columnChart";
import PieChart from "../pages/chart/pieChart";
import HotChart from "../pages/chart/hotChart";
import DotChart from "../pages/chart/dotChart";

export default function ContentIndex(){
    return (<Switch>
        <Route path='/home' exact render = {()=> (<Redirect to='/home/index'/>)}/>
        <Route path='/home/index' component={Index}/>
        <Route path='/home/editor'  component={Editor}/>
        <Route path='/home/markdown'  component={MarkDown}/>
        <Route path='/home/h5'  component={H5}/>
        <Route path='/home/h5Detail'  component={H5Detail}/>
        <Route path='/home/behavior' component={IconList}/>
        <Route path='/home/feedback' component={Feedback} />
        <Route path='/home/upload' component={UploadPic} />
        <Route path='/home/chart1' component={LineChart} />
        <Route path='/home/chart2' component={ColumnChart} />
        <Route path='/home/chart3' component={PieChart} />
        <Route path='/home/chart4' component={HotChart} />
        <Route path='/home/chart5' component={DotChart} />
    </Switch>)
}
