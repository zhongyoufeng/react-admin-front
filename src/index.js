import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {ConnectedRouter} from 'connected-react-router';
import store from "./store/store";
import './index.css';
import history from './utils/history';
import * as serviceWorker from './serviceWorker';
import RouterIndex from "./router";
import 'moment/locale/zh-cn';
import moment from 'moment';

moment.locale('zh-cn');

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <ConnectedRouter history={history}>
                <RouterIndex />
            </ConnectedRouter>
        </ConfigProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
