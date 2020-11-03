import { PageSection, Title, Button } from '@patternfly/react-core';
import { trackButton } from '../tracking';

export const Page1 = () => (
  <PageSection>
    <Title headingLevel="h2" size="xl">Page 1</Title>
    <p>
      We would never track your every click.
    </p>
    <Button onClick={trackButton}>A different button</Button>
  </PageSection>
);