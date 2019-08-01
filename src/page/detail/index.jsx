import React from 'react';
import { Table, Button,DatePicker,Input,Tag,Icon,Tooltip, message,Modal,Form } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import './index.css';
const { RangePicker } = DatePicker;
const { confirm } = Modal;

// 创建弹窗组件
const CollectionCreateForm =Form.create({ name: 'form_in_modal' })(

  class extends React.Component {
    render(){
      const { visible, onCancel, onCreate, form,confirmLoading,editData } = this.props;  //组件数据
      const { getFieldDecorator } = form;
      console.log(editData)
      return (
        <Modal
          visible={visible}
          title="添加客户"
          okText="是的"
          onCancel={onCancel}
          confirmLoading={confirmLoading}
          onOk={onCreate}
        >
          <Form>
            <Form.Item label="客户名称">
              {getFieldDecorator('name',{
                initialValue: editData.name,
                rules: [{ required: true,  message: '请输入客户名称!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="地址">
              {getFieldDecorator('address',{ initialValue: editData.address })(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      )
    }
  }
);
class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state={ 
        loading: false,//批量删除的状态
        selectedRowKeys:[],//批量选中集合
        editData:{},//编辑静态数据
        visible: false, //弹窗开关
        confirmLoading: false,//弹窗异步确定
        columns :[
          {
            title: 'ID',
            dataIndex: 'key',
          },
          {
            title: '名称',
            dataIndex: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          },
          {
            title: '年龄',
            dataIndex: 'age',
          },
          {
            title: '地址',
            dataIndex: 'address',
          },
          {
            title: '标签',
            dataIndex: 'tags',
            render: tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            ),
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <Tooltip title="编辑">
                  <Icon onClick={(e) => this.edit(record, e)} className='edBox' type="edit" theme="twoTone" twoToneColor="#52c41a"/>
                </Tooltip>
                  <Tooltip title="删除">
                    <Icon onClick={(e) => this.del(record, e)} className='edBox' type="delete" theme="twoTone" twoToneColor="#ff4d4f"/>
                  </Tooltip>
              </span>
            ),
          },
        ],
        datas:[
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['渠道', '广告'],
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: [],
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['宝妈', ],
          },
          {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
            tags: ['学生', '女性'],
          },
        ],
        rowSelection : {
          onChange: (selectedRowKeys, selectedRows) => {
            
            let newListData= selectedRows.map(function(item){
              return item;
            });
            this.setState({
              selectedRowKeys: newListData
            })
           
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          },
          getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
          }),
        }
    };
  }
  // 点击删除
  del(datas,e) {
    confirm({
      title: '你确定要ID为：'+datas.key+'删除该条消息？',
      content: '此项操作不可逆',
      okText: '是的',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
    onChange(date,dateString){
      console.log(date, dateString);
    };
    // 点击编辑
    edit=(datas,e) => {
      console.log(datas)
      console.log(e)
      this.setState({
        visible: true,
        editData:datas
      });
    }
    // 添加box里面的  input

    // 点击添加按钮 
    showModal = () => {
      this.setState({
        visible: true,
        editData:{}
      });
    };
    // 点击添加确定按钮
    handleCreate = () => {
      const { form } = this.formRef.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
          message.success('添加成功')
        }, 2000);
      });

    };
    // 击添加取消按钮
    handleCancel = () => {
      const { form } = this.formRef.props;
      form.resetFields();
      this.setState({
        visible: false,
        editData:{}
      });
    };
    // 数据注入
    saveFormRef = formRef => {
      this.formRef = formRef;
    };
    // 批量删除
    piShan = () => {
      this.setState({ loading: true });
      console.log(this.state.selectedRowKeys)
      // ajax request after empty completing
      setTimeout(() => {
        this.setState({
          selectedRowKeys: [],
          loading: false,
        });
      }, 1000);
    };
    
    // rowSelection object indicates the need for row selection
    render() {
      const { loading, selectedRowKeys } = this.state;
      const hasSelected = selectedRowKeys.length > 0;
      return (
          <div className="detail-box">
            <div className="detail-search flex">
              <RangePicker  locale={zhCN} onChange={this.onChange} />
              <Input className='ming' placeholder="请输入名字" />
              <Button type="primary" icon="search">
                搜索
              </Button>
            </div>
            
            <div className="detail-table">
              <div className="detail-cao flex">
              <Button onClick={this.piShan} disabled={!hasSelected} loading={loading} className='cao-btn' type="danger" icon="delete">
                批量删除
              </Button>
              <Button onClick={this.showModal} className='cao-btn' type="primary" icon="user-add">
                增加
              </Button>

              {/* 添加弹窗模块 */}
              <CollectionCreateForm
                wrappedComponentRef={this.saveFormRef}
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onCreate={this.handleCreate}
                confirmLoading={this.state.confirmLoading}
                editData={this.state.editData}
              />
              </div>
              <div className="table">
              <Table rowSelection={this.state.rowSelection} columns={this.state.columns} dataSource={this.state.datas} />,
              </div>
            </div>
          </div>
      )
    }
  }
  
  export default Details;