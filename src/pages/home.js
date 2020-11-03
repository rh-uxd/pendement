import { PageSection, Title, Button } from '@patternfly/react-core';
import { trackButton } from '../tracking';

export const HomePage = () => (
  <PageSection>
    <Title headingLevel="h2" size="xl">Home page</Title>
    <p>
      Some content.
    </p>
    <Button onClick={trackButton}>Definitely not tracked</Button>
  </PageSection>
);