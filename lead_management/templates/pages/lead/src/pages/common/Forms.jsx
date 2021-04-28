import React, { useState } from 'react';
import { Form, DatePicker, Input, Radio, Select } from 'antd';
const FormItem = Form.Item;
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;

const Forms = (props) => {
    const { sections, currentStep, formVals } = props
    return <>{Object.keys(sections).map((item, key) => {
        if (currentStep === key) {
            return (
                <>{sections[item].map((item, key) => {
                    if (item.fieldtype != "Column Break" && item.no_copy === 0 && item.hidden === 0) {
                        console.log(item.fieldtype)
                        if (item.fieldtype == 'Link') {
                            return <FormItem key={key}
                                name={item.fieldname}
                                label={item.label}
                                initialValue={formVals[item.fieldname]}
                                rules={item.reqd ? [
                                    {
                                        required: true,
                                        message: `${item.label} required`,
                                    }
                                ] : []}
                            >
                                <Select style={{ width: '100%' }}>
                                    {item.optionLists.map((opt, key) => <Option key={key} value={opt.name}>{opt.name}</Option>)}
                                </Select>
                            </FormItem>
                        } else if (item.fieldtype == 'Table') {
                            console.log(item)
                            return <FormItem key={key} name={item.fieldname} label={item.label}>Table</FormItem>
                        } else if (item.fieldtype == 'Date') {
                            return <FormItem key={key}
                                name={item.fieldname}
                                label={item.label}
                                initialValue={formVals[item.fieldname] ? moment.utc(formVals[item.fieldname], 'YYYY-MM-DD') : null}
                                rules={item.reqd ? [
                                    {
                                        required: true,
                                        message: `${item.label} required`,
                                    }
                                ] : []}
                            >
                                <DatePicker
                                    style={{
                                        width: '100%',
                                    }}
                                    format="YYYY-MM-DD"
                                    placeholder={item.label}
                                />
                            </FormItem>
                        } else if (item.fieldtype == 'Select') {
                            return <FormItem key={key}
                                name={item.fieldname}
                                label={item.label}
                                initialValue={formVals[item.fieldname]}
                                rules={item.reqd ? [
                                    {
                                        required: true,
                                        message: `${item.label} required`,
                                    }
                                ] : []}
                            >
                                <Select style={{ width: '100%' }}>
                                    {item.options.map((item, key) => <Option key={key} value={item}>{item}</Option>)}
                                </Select>
                            </FormItem>
                        } else {
                            return <FormItem
                                key={key}
                                name={item.fieldname}
                                label={item.label}
                                initialValue={formVals[item.fieldname]}
                                rules={item.reqd ? [
                                    {
                                        required: true,
                                        message: `${item.label} required`,
                                    }
                                ] : []}
                            >
                                <Input placeholder={item.label} />
                            </FormItem>
                        }
                    }
                })}</>
            );
        }
    })}</>
};

export default Forms;
