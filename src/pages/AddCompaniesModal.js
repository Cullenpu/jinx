import Page from "components/Page";
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

class AddCompaniesModal extends React.Component {
  state = {
    show: false,
  };

  toggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleAuthState = (authState) => {
    this.setState({
      authState,
    });
  };

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{
          position: "absolute",
          top: "15px",
          right: "20px",
          fontSize: "3rem",
        }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );

    return (
      <Page
        title="Add Companies Modal"
        breadcrumbs={[{ name: "Companies Modal", active: true }]}
      >
        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>Add Companies Modal Example</CardHeader>
              <CardBody>
                <Button color="danger" onClick={this.toggle}>
                  Add
                </Button>
                <Modal
                  isOpen={this.state.show}
                  toggle={this.toggle}
                  size="sm"
                  backdrop="static"
                  backdropClassName="modal-backdrop-light"
                  external={externalCloseBtn}
                  centered
                >
                  <ModalBody></ModalBody>
                </Modal>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default AddCompaniesModal;
