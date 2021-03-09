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
  Form,
  Input,
} from "reactstrap";
import { MdSearch } from "react-icons/md";

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
              <Button color="danger" onClick={this.toggle}>
                Add
              </Button>
              <Modal
                isOpen={this.state.show}
                toggle={this.toggle}
                backdrop="static"
                backdropClassName="modal-backdrop-light"
                external={externalCloseBtn}
                centered
              >
                <ModalBody>
                  <Form
                    inline
                    className="cr-search-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <MdSearch
                      size="20"
                      className="cr-search-form__icon-search text-secondary"
                    />
                    <Input
                      type="search"
                      className="cr-search-form__input"
                      placeholder="Search companies..."
                    />
                  </Form>
                </ModalBody>
              </Modal>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default AddCompaniesModal;
