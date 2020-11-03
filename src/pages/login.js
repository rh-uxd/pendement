import { useState } from 'react';
import { PageSection, Title, TextInput, Button } from '@patternfly/react-core';
import { useHistory } from 'react-router-dom';

export const LoginPage = ({ onLogin: onLoginProp }) => {
  const history = useHistory();
  const [username, setUserName] = useState('');
  const onLogin = () => {
    sessionStorage.setItem('username', username);
    history.push('/');
    onLoginProp(username);
  };

  return (
    <PageSection>
      <Title headingLevel="h2" size="xl">Login</Title>
      <p>
        Login to the least private app!
      </p>
      <TextInput id="username" value={username} onChange={s => setUserName(s)} placeholder="Username" />
      <Button
        isDisabled={username === ''}
        onClick={onLogin}
      >
        Login
      </Button>
    </PageSection>
  );
}
