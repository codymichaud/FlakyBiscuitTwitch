import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTurnDown } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitch,
  faGithub,
  faDiscord,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function CreateAccountModal({ isOpen }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const router = useRouter();
  const { asPath } = useRouter();
  const state = {
    modalOpen: false,
    userEmail: '',
    userPass: '',
    testEmail: '',
    testPass: '',
    verifyPass: 'codym123',
    verifyTestName: 'codym',
  };

  React.useEffect(() => {
    if (isOpen === true) {
      setIsVisible(true);
    }
  });

  const authEmailLogin = (key, value) => {
    console.log('email', value);
  };

  const authPassLogin = (key, value) => {
    console.log('password', value);
  };

  const createAccountHandler = async () => {
    setIsVisible(false);
    router.push('/create-account');

    console.log('time to create an account');
  };

  return (
    <Modal
      closeButton
      open={isVisible}
      blur
      width='500px'
      css={{
        height: '510px',
      }}
    >
      <Modal.Header>
        <Text id='modal-title' size={18}>
          Welcome to <br />
          <Text
            h1
            size={30}
            css={{
              textGradient: '45deg, $white 10%, $red600 100%',
            }}
            // weight="bold"
            b
            color='inherit'
            hideIn='xs'
            className='font-bold'
          >
            Flaky Biscuit
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          onChange={e => {
            authEmailLogin('email', e.target.value);
          }}
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Email'
        />
        <Input.Password
          onChange={e => {
            authPassLogin('password', e.target.value);
          }}
          clearable
          bordered
          fullWidth
          color='primary'
          size='lg'
          placeholder='Password'
        />
        <Row justify='space-between'>
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
        <Row>
          <Button
            auto
            flat
            color='secondary'
            bordered
            onClick={() => createAccountHandler()}
          >
            Create Account
          </Button>
          <Row justify='flex-end'>
            <Button
              onClick={() => setIsVisible(false)}
              auto
              flat
              color='secondary'
              bordered
            >
              Close
            </Button>
            <Button
              className='ml-5'
              auto
              color='error'
              bordered

              // onPress={authCheck}
            >
              Sign in
            </Button>
          </Row>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row justify='center' alignContent='flex-start'>
          <Text>
            Or login with{' '}
            <FontAwesomeIcon
              className='ml-3'
              size='2xl'
              icon={faTurnDown}
              beatFade
            />
          </Text>
        </Row>
        <Row className='mt-10' justify='center'>
          <Button
            size='sm'
            onClick={() =>
              signIn('twitch', { callbackUrl: 'http://localhost:3000' })
            }
            icon={<FontAwesomeIcon size='2xl' icon={faTwitch} />}
          />
          <Button
            size='sm'
            onClick={() =>
              signIn('github', { callbackUrl: 'http://localhost:3000' })
            }
            icon={<FontAwesomeIcon size='2xl' icon={faGithub} />}
          />
          <Button
            size='sm'
            onClick={() =>
              signIn('battlenet', { callbackUrl: 'http://localhost:3000' })
            }
            icon={<FontAwesomeIcon size='2xl' icon={faFacebook} />}
          />
          <Button
            size='sm'
            onClick={() =>
              signIn('discord', { callbackUrl: 'http://localhost:3000' })
            }
            icon={<FontAwesomeIcon size='2xl' icon={faDiscord} />}
          />
        </Row>
      </Modal.Footer>
    </Modal>
  );
}

// export default CreateAccountModal;
