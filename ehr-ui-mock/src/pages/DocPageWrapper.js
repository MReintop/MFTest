import React, { Suspense } from 'react';
import PageWrapper from '../components/components/PageWrapper';

const DocPage = React.lazy(() => import('DocuUI/DocPage'));

const DocPageWrapper = () => {
  return (
    <PageWrapper title="Document">
      <Suspense fallback={<>Laen andmeid ...</>}>
        <DocPage permissions={['W']} />
      </Suspense>
    </PageWrapper>
  );
  ('');
};

export default DocPageWrapper;
