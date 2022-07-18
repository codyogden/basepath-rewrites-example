import { NextPage } from 'next';
import Link from 'next/link';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return <>
    <p>This page is served from App A.</p>
    <p>Go to <Link href='/maintenance'>Maintenance Page</Link>.</p>
  </>;
};

export default IndexPage;
