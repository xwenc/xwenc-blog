import Head from "next/head";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer";
import { getAllPostsForHome, getProfile, getSocial } from "../../lib/api";
import Blogs from "../../components/blogs";

export default function Index({ allPosts, profile, social, preview }) {
  return (
    <>
      <Layout preview={preview} email={profile.email}>
        <Head>
          <title>Andy Xiong</title>
        </Head>
        <Container>
          <Sidebar profile={profile} social={social} />
          <Blogs posts={allPosts} />
        </Container>
        <Footer name={profile.name} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const profile = await getProfile(preview);
  const social = await getSocial(preview);
  return {
    props: { allPosts, profile, social, preview },
    revalidate: 1,
  };
}
