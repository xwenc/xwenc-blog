import Container from "../components/container";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar/sidebar";
import Layout from "../components/layout";
import { getSocial, getProfile, getProject, getHistory } from "../lib/api";
import Head from "next/head";
import MainContent from "../components/main-content/main-content";

export default function Index({ history, social, profile, project, preview }) {
  return (
    <>
      <Layout preview={preview} email={profile ? profile.email : ""}>
        <Head>
          <title>Andy Xiong personal web</title>
        </Head>
        <Container>
          <Sidebar profile={profile} social={social} />
          <MainContent history={history} profile={profile} projects={project} />
        </Container>
        <Footer name={profile.name} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const profile = await getProfile(preview);
  const social = await getSocial(preview);
  const project = await getProject(preview);
  const history = await getHistory(preview);
  return {
    props: { history, profile, social, project, preview },
    revalidate: 1,
  };
}
