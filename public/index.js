/**
 * Created by zhulizhe on 2017/8/14.
 */
var ReactDOM = require("react-dom");
var React = require("react");


import {
    Form, Input, Button, Upload, Icon,
} from 'antd';
const FormItem = Form.Item;

class Demo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="投注信息记录"
                >
                    <span className="ant-form-text">足彩</span>
                </FormItem>
                <FormItem {...formItemLayout} label="主队">
                    {getFieldDecorator('host', {
                        rules: [{
                            required: true,
                            message: '请输入主队',
                        }],
                    })(
                        <Input placeholder="主队名称" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="客队">
                    {getFieldDecorator('visitor', {
                        rules: [{
                            required: true,
                            message: '请输入客队信息',
                        }],
                    })(
                        <Input placeholder="客队信息" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="预期">
                    {getFieldDecorator('expect', {
                        rules: [{
                            required: true,
                            message: '请输入期望结果',
                        }],
                    })(
                        <Input placeholder="预期结果" />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="结果">
                    {getFieldDecorator('result', {
                        rules: [{
                            required: false,
                            message: '请输入开奖结果',
                        }],
                    })(
                        <Input placeholder="开奖结果" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="图表数据"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload" listType="picture">
                            <Button>
                                <Icon type="upload" /> Click to upload
                            </Button>
                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 12, offset: 6 }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedDemo = Form.create()(Demo);
ReactDOM.render(<WrappedDemo/>, document.getElementById('main'));
