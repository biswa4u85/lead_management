import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps } from 'antd';
const FormItem = Form.Item;
import moment from 'moment';
const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;
const formLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

const getSections = (fields) => {
  let sections = {}
  let type = null
  let list = []
  for (let item of fields) {
    if (item.fieldtype == 'Section Break') {
      if (type) {
        sections[type] = list
      }
      if (item.label == undefined) {
        type = 'General'
        list = []
      } else if (item.label in sections === false) {
        type = item.label
        list = []
      }
    } else {
      list.push(item)
    }
  }
  return sections
}

const UpdateForm = (props) => {
  const { settings } = props
  const sections = getSections(settings.fields)
  const [formVals, setFormVals] = useState(props.values);
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const forward = () => setCurrentStep(currentStep + 1);
  const backward = () => setCurrentStep(currentStep - 1);
  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({ ...formVals, ...fieldsValue });
    if (currentStep < (Object.keys(sections).length - 1)) {
      forward();
    } else {
      handleUpdate({ ...formVals, ...fieldsValue });
    }
  };

  const renderContent = () => {
    return Object.keys(sections).map((item, key) => {
      if (currentStep === key) {
        return (
          <>
            {sections[item].map((item, key) => {
              if (item.fieldtype != "Column Break" && item.no_copy === 0 && item.hidden === 0) {
                console.log(item.fieldtype)
                if (item.fieldtype == 'Link') {
                  return <FormItem key={key} name={item.fieldname} label={item.label}>Lnk</FormItem>
                } else if (item.fieldtype == 'Table') {
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
                  let list = String(item.options).split('\n')
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
                      {list.map((item, key) => <Option key={key} value={item}>{item}</Option>)}
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
            })}
          </>
        );
      }
    })
  };

  const renderFooter = () => {
    if (currentStep === 0) {
      return (
        <>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
          <Button type="primary" onClick={() => handleNext()}>Next</Button>
        </>
      );
    }
    if (currentStep === (Object.keys(sections).length - 1)) {
      return (
        <>
          <Button style={{ float: 'left', }} onClick={backward}>Previous</Button>
          <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
          <Button type="primary" onClick={() => handleNext()}>Submit</Button>
        </>
      );
    }
    return (
      <>
        <Button style={{ float: 'left', }} onClick={backward}>Previous</Button>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
        <Button type="primary" onClick={() => handleNext()}>Next</Button>
      </>
    );
  };

  return (
    <Modal
      width={750}
      bodyStyle={{
        padding: '32px 40px 48px',
      }}
      destroyOnClose
      title={"Edit " + settings.name}
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible()}
    >
      <Steps
        style={{
          marginBottom: 28,
        }}
        size="small"
        current={currentStep}
      >
        {Object.keys(sections).map((item, key) => <Step key={key} title={item} />)}
      </Steps>
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          target: formVals.target,
          template: formVals.template,
          type: formVals.type,
          frequency: formVals.frequency,
          name: formVals.name,
          desc: formVals.desc,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
