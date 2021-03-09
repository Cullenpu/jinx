import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Col,
  Table,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import yitian from "assets/img/users/yitian.png";
import UserRow from './UserRow';
import UserModalBody from './UserModalBody';

class UserTable extends React.Component {
  state = {
    modal: false,
    modal_backdrop: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: true,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  render(){
    return (
      <Card>
        <CardHeader>User Table{' '}
          <small className="text-muted text-capitalize">2020-2021</small>
          <Button style={{float: 'right'}} onClick={this.toggle()}>Add User</Button>
        </CardHeader>
        <Table striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          <UserRow id={123} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10} onClick={this.toggle()} />
          <UserRow id={234} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10} onClick={this.toggle()} />
          <UserRow id={345} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10} onClick={this.toggle()} />
          <UserRow id={456} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10} onClick={this.toggle()} />
          <UserRow id={567} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10} onClick={this.toggle()} />
          <UserRow id={678} avatar={yitian} name='Yitian Bitian' email="yz@email.com" rating={10} onClick={this.toggle()} />
          </tbody>
        </Table>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle()}>User</ModalHeader>
          <ModalBody>
            <UserModalBody />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle()}>
              Save Changes
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Card>
    )
  }
}

export default UserTable;
