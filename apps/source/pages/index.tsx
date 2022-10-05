import { NextPage } from 'next';
import Link from 'next/link';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return <>
    <p>This page is served from App A.</p>
    <p>Go to <Link href='/Portal'>Portal Page</Link>.</p>
    <a href="/portal/test">Testing</a>
  </>;
};

export default IndexPage;
