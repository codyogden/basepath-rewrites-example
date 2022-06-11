import { NextPage } from 'next';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return <>This page is served from App B.</>;
};

export default IndexPage;
