import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, message } from 'antd';
import { connect } from 'umi';
import React, { useState, useEffect, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import { queryList, updateRecord, addRecord, removeRecord } from '@/services/global';
const MODULE_NAME = 'Student'
/**
 * Adding new
 *
 * @param fields
 */

const handleAdd = async (fields, settings) => {
  const hide = message.loading('Adding...');
  try {
    await addRecord({ ...fields }, settings);
    hide();
    message.success('Added successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Failed to add, please try again!');
    return false;
  }
};
/**
 * Update node
 *
 * @param fields
 */

const handleUpdate = async (fields, settings) => {
  const hide = message.loading('Updateing...');
  try {
    await updateRecord(fields, settings);
    hide();
    message.success('Update successfully');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};
/**
 * Delete node
 *
 * @param selectedRows
 */

const handleRemove = async (selectedRows, settings) => {
  // console.log(selectedRows, settings)
  const hide = message.loading('deleting...');
  try {
    await removeRecord(selectedRows, settings);
    hide();
    message.success('Deleted successfully and will be refreshed soon');
    return true;
  } catch (error) {
    hide();
    message.error('Deletion failed, please try again');
    return false;
  }
};

const LeadList = (props) => {
  const { dispatch, settings } = props
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const [columns, setColumns] = useState([]);
  const [selectedRowsState, setSelectedRows] = useState([]);

  useEffect(() => {
    dispatch({
      type: 'student/fetchSettings',
      payload: { MODULE_NAME },
    });
  }, []);

  useEffect(() => {
    if (settings && settings.fields) {
      for (let item of settings.fields) {
        if (item.in_list_view === 1) {
          columns.push({
            title: item.label,
            dataIndex: item.fieldname,
            valueType: 'textarea',
          })
        }
      }
      columns.push({
        title: 'Action',
        dataIndex: 'option',
        valueType: 'option',
        render: (_, record) => [
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}>Edit</a>,
          <Divider type="vertical" />,
          <a
            onClick={() => {
              handleRemove(record, settings.data);
            }}>Remove</a>,
        ],
      })
      setColumns(columns)
    }
  }, [settings]);

  return (
    <PageContainer>
      {settings && (<ProTable
        headerTitle={MODULE_NAME}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> Add New
          </Button>,
        ]}
        request={(params, sorter, filter) => queryList(MODULE_NAME, { ...params, sorter, filter })}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />)}
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              Chosen{' '}<a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}item&nbsp;&nbsp;
              <span>Total number of service calls {selectedRowsState.reduce((pre, item) => pre + item.nmae, 0)} Ten thousand</span>
            </div>
          }
        >
          <Button onClick={async () => {
            // await handleRemove(selectedRowsState, settings);
            setSelectedRows([]);
            actionRef.current?.reloadAndRest?.();
          }} type="primary">Batch delete</Button>
        </FooterToolbar>
      )}
      <CreateForm
        onSubmit={async (value) => {
          const success = await handleAdd(value, settings);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => handleModalVisible(false)}
        updateModalVisible={createModalVisible}
        rowKey="key"
        type="form"
        values={{}}
        settings={settings}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value, settings);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
          settings={settings}
        />
      ) : null}
    </PageContainer>
  );
};

export default connect(({ student, loading }) => ({
  settings: student.settings,
  loading: loading.models.student,
}))(LeadList);