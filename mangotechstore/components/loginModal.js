import { React, Component } from 'react';

export class CreateAccountModal extends Component {
    constructor(props) {
        super(props);
        this.authLogin = this.authLogin.bind(this);
        this.authCheck = this.authCheck.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
    }

    componentDidMount() {
      console.log('we have opened!')
    }

    authLogin(key, value) {
        if (key === 'email') {
          console.log('email', value);
          this.setState({
            userEmail: value,
          })
        } else if (key === 'password') {
          console.log('password', value);
          this.setState({
            userPass: value,
          })
        }
      }

      authCheck() {
        const { userEmail, userPass, testEmail, testPass } = this.state;
        console.log('checking email and checking password', userEmail,  userPass)
        // if (userEmail === testEmail && userPass === testPass) {
          this.setState({
            loggedIn: true,
          })
          console.log('logged in');
        // }
        this.setState({
          visible: false,
        })
      }


    closeHandler() {
        this.setState({
          visible: false,
        })
        console.log('closed');
      };

      createAccountHandler() {
        console.log('creating account');
  
        
      }


    render() {
        return (
            <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={this.closeHandler}
                  blur
                >
                  <Modal.Header>
                    <Text id="modal-title" size={18}>
                      Welcome to <br />
                      <Text b size={18}>
                        Spit Roast GanG
                      </Text>
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Input
                      onChange={(e) => this.authLogin('email', e.target.value)}
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Email"
                    />
                    <Input
                      onChange={(e) => this.authLogin('password', e.target.value)}
                      clearable
                      bordered
                      fullWidth
                      color="primary"
                      size="lg"
                      placeholder="Password"
                    />
                    <Row justify="space-between">
                      <Checkbox>
                        <Text size={14}>Remember me</Text>
                      </Checkbox>
                      <Text size={14}>Forgot password?</Text>
                    </Row>
                  </Modal.Body>
                  <Modal.Footer>
                  <Button auto flat color="error" onClick={this.createAccountHandler}>
                      Create Account
                    </Button>
                    <Button auto flat color="error" onClick={this.closeHandler}>
                      Close
                    </Button>
                    <Button auto onClick={this.authCheck()}>
                      Sign in
                    </Button>
                  </Modal.Footer>
                </Modal>
        )
    }
}

export default CreateAccountModal;