import { PageSection, Title, Button } from '@patternfly/react-core';
import { trackButton } from '../tracking';

export const Page2 = () => (
  <PageSection>
    <Title headingLevel="h2" size="xl">Page 2</Title>
    <p>
      We would never track your every click.
    </p>
    <Button onClick={trackButton}>The final button</Button>
  </PageSection>
);
