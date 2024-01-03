import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

let initState = {data: ''}

/**
 * 状态管理redux组件的基本使用
 * 我们需要解决的问题,数据存储在哪里,怎么样更新页面的数据,怎么样其他的组件能够建立联系,那么使用一个观察者模式实现;简单说需要做:发布操作->
 * 行为执行->订阅接收变化;
 *
 */
function reducer(state=initState,action) {
    switch (action.type) {
        case 'change': state={data:action.param};break;
        // default:
    }
    return state;
}

let store = createStore(reducer)

function App() {
    return (
        <div className='App'>
            输入文字: <input type='text' onChange={(a)=>{
                console.log('输入的内容:', a.target.value);
                store.dispatch({type: 'change', param: a.target.value})
            }}/><br/>
            <span>我是app,我也设置一个值:{store.getState().data}</span><br/>
        </div>
    )
}

store.subscribe(()=>{
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
