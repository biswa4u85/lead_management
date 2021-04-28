import React, { useState } from 'react';
import { Form, Button, Modal, Steps } from 'antd';
import Forms from '../../common/Forms';
const { Step } = Steps;
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

const CreateForm = (props) => {
  const { settings } = props
  const sections = getSections(settings ? settings.fields : [])
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
      title={"Add " + (settings ? settings.name : '')}
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
      >
        <Forms sections={sections} currentStep={currentStep} formVals={formVals} />
      </Form>
    </Modal>
  );
};

export default CreateForm;