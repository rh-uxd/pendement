import { useState } from "react";
import { PageSection, Title, TextInput, Button } from "@patternfly/react-core";
import { useHistory } from "react-router-dom";

export const LoginPage = ({ onLogin: onLoginProp }) => {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [userId, setUserId] = useState("")
  const postOnLogin = async username => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username
      })
    };
    const response = await fetch("/api/login", requestOptions);
    const data = await response.json();
    setUserId(data.id)
    onLoginProp(username, data.id);
  };
  const onLogin = async () => {
    sessionStorage.setItem("username", username);
    await postOnLogin(username);
    history.push("/");
  };

  return (
    <PageSection>
      <Title headingLevel="h2" size="xl">
        Login
      </Title>
      <p>Login to the least private app!</p>
      <TextInput
        id="username"
        value={username}
        onChange={(s) => setUserName(s)}
        placeholder="Username"
      />
      <Button isDisabled={username === ""} onClick={onLogin}>
        Login
      </Button>
    </PageSection>
  );
};
