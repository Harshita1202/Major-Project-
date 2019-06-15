// import { Button, Modal, Form, Input } from 'antd';

// const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
//   // eslint-disable-next-line
//   class extends React.Component {
//     render() {
//       const { onCancel, onCreate, form } = this.props;
//       const { getFieldDecorator } = form;
//       return (
//         <Modal
//           visible={visible}
//           title="set a reminder"
//           okText="Create"
//           onCancel={onCancel}
//           onOk={onCreate}
//         />
//         <Form layout="vertical">
//             <Form.Item label="Train Number">
//               {getFieldDecorator('title', {
//                 rules: [{ required: true, message: 'Please input the train number!' }],
//               })(<Input />)}
//         </Form.Item>      