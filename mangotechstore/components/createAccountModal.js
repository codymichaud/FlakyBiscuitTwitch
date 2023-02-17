import React from 'react';

export class CreateAccountModal extends Component {


    render() {
        return (
            <Modal visible={visible} onClose={closeCreateHandler}>
                <Modal.Title>Create Account</Modal.Title>
                <Modal.Content>
                <Text>Enter your email and password to create an account.</Text>
                <Input
                    placeholder='Email'
                    // onChange={(e) => authLogin('email', e.target.value)}
                />
                <Input
                    placeholder='Password'
                    // onChange={(e) => authLogin('password', e.target.value)}
                />
                <Input
                    placeholder='Confirm Password'
                    // onChange={(e) => authLogin('password', e.target.value)}
                />
                </Modal.Content>
                <Modal.Action passive onClick={closeCreateHandler}>Cancel</Modal.Action>  
                <Modal.Action onClick={createAccountHandler}>Create Account</Modal.Action>
            </Modal>
        )
    }
}

export default CreateAccountModal;