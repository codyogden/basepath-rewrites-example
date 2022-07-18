import { NextPage } from 'next';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return <>
    <p>This page is served from App B.</p>
  </>;
};

export default IndexPage;
