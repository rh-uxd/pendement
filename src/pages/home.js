import { PageSection, Title, Button } from '@patternfly/react-core';

export const HomePage = () => (
  <PageSection>
    <Title headingLevel="h2" size="xl">Home page</Title>
    <p>
      Some content.
    </p>
    <Button>Definitely not tracked</Button>
  </PageSection>
);