/**
 * Created by zhulizhe on 2017/8/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
class Text extends React.Component {
    render() {
        return (
            <div>
                <p>This is a react Component</p>
                <DatePicker/>
            </div>
        );
    }
}
ReactDOM.render(<Text/>, document.getElementById('main'));
