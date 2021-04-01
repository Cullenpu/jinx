import React from "react";
import { FaPlus } from "react-icons/fa";
import { Row, Button, Modal,
  ModalBody,
  ModalFooter,
  ModalHeader, } from "reactstrap";
import WishListCol from "./WishListCol";
import AppliedCol from "./AppliedCol";
import InterviewCol from "./InterviewCol";
import OfferCol from "./OfferCol";
import RejectedCol from "./RejectedCol";
import CompanyModalBody from "./CompanyModalBody";
import axios from 'axios';

class ApplicationsBoard extends React.Component {
  constructor(props) {
    super(props);
    // for form
    this.state = {
      inputCompany: '',
      inputRole: '',
      inputStatus: '',
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCompanyChange(event) {
    this.setState({inputCompany: event.target.value});
  }
  handleRoleChange(event) {
    this.setState({inputRole: event.target.value});
  }
  handleStatusChange(event) {
    this.setState({inputStatus: event.target.value});
  }

  handleSubmit(event) {
    axios.post('http://localhost:5000/applications', {
      userId: this.props.app.state.id,
      company: this.state.inputCompany,
      role: this.state.inputRole,
      status: this.state.inputStatus
    })
    .then(function (response) {
      window.location.reload()
    })
  }

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
      <>
        <Row className="justify-content-md-center pb-3 mt--3">
          <Button outline color="secondary" size="sm" onClick={this.toggle()}><FaPlus /> Add Job Application <FaPlus /></Button>
        </Row>
        <Row>
          <WishListCol companies={this.props.wishlist} />
          <AppliedCol companies={this.props.applied} />
          <InterviewCol companies={this.props.interviewing} />
          <OfferCol companies={this.props.offer} />
          <RejectedCol companies={this.props.rejected} />
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle()}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle()}>Add Job Application</ModalHeader>
          <ModalBody>
            <CompanyModalBody 
              inputCompany={this.state.inputCompany} 
              inputRole={this.state.inputRole} 
              inputStatus={this.state.inputStatus}
              handleCompanyChange={this.handleCompanyChange}
              handleRoleChange={this.handleRoleChange}
              handleStatusChange={this.handleStatusChange}
              />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {
              this.toggle();
              this.handleSubmit();
            }}>
              Save Job
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle()}>
              Discard
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
};

export default ApplicationsBoard;
