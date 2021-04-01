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

const wishlist = [
  {
    company: "Google",
    title: "Software Developer Intern",
    date: "March 1, 2021",
    color: "success",
  },
  {
    company: "Facebook",
    title: "Software Developer Intern",
    date: "March 1, 2021",
    color: "info",
  },
];

class ApplicationsBoard extends React.Component {

  constructor(props) {
    super(props);
    this.setState({
      applications: props.applicationList,
      wishlist: props.wishlist
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
            <CompanyModalBody />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle()}>
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
