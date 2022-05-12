import Container from "../components/container";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar/sidebar";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import Head from "next/head";
import MainContent from "../components/main-content/main-content";

const profile = {
  about:
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.\n\nUser generated content in real-time will have multiple touchpoints for offshoring. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.\n",
  budget: {
    currency: "$",
    default: 10,
    max: 30,
    min: 5,
  },
  company: "Atomic Studio",
  focus: "Learning Gatsby",
  focus_url: "https://gatsbyjs.org",
  for_hire: true,
  image: "/static/37de4d7d99e3246c28e3e904f05a520d/17fa0/profile.jpg",
  initials: "JD",
  location: "New York, USA",
  name: "John Doe",
  profession: "Web Developer",
  relocation: true,
  skills: ["JavaScript", "HTML / CSS", "Ruby on Rails"],
  tools: ["React", "VSCode", "Gatsby"],
};

const social = [
  {
    name: "linkedin",
    url: "https://linkedin.com/in/username",
  },
  {
    name: "twitter",
    url: "https://twitter.com/username",
  },
  {
    name: "github",
    url: "https://github.com/username",
  },
];

const history = [
  {
    company: "Atomic Studio",
    period: "January 2018 - present",
    position: "Senior Web Developer",
    url: "https://atomic.studio",
  },
  {
    company: "Atomic Studio",
    period: "January 2014 - December 2017",
    position: "Web Developer",
    url: "https://atomic.studio",
  },
  {
    company: "WebConnect Agency",
    period: "November 2010 - December 2013",
    position: "Junior Web Developer",
    url: null,
  },
  {
    company: "Freelance",
    period: "April 2008 - October 2010",
    position: "Web Developer",
    url: null,
  },
];
const projects = [
  {
    description:
      "Override the digital divide with additional clickthroughs from DevOps. User generated content in real-time will have multiple touchpoints for offshoring.",
    icon: "github",
    image: null,
    name: "Example 1",
    status: "in progress",
    tags: ["JavaScript", "Gatsby"],
    url: "https://github.com",
  },
  {
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
    icon: "website",
    image: {
      childImageSharp: {
        gatsbyImageData: {
          layout: "constrained",
          backgroundColor: "#f8f8f8",
          images: {
            fallback: {
              src: "/static/8768ab037c51aaa55d909ceca266a722/b913a/project.jpg",
              srcSet:
                "/static/8768ab037c51aaa55d909ceca266a722/ee7b2/project.jpg 113w,\n/static/8768ab037c51aaa55d909ceca266a722/a3d43/project.jpg 225w,\n/static/8768ab037c51aaa55d909ceca266a722/b913a/project.jpg 450w",
              sizes: "(min-width: 450px) 450px, 100vw",
            },
            sources: [
              {
                srcSet:
                  "/static/8768ab037c51aaa55d909ceca266a722/102ab/project.webp 113w,\n/static/8768ab037c51aaa55d909ceca266a722/296ff/project.webp 225w,\n/static/8768ab037c51aaa55d909ceca266a722/7e9dd/project.webp 450w",
                type: "image/webp",
                sizes: "(min-width: 450px) 450px, 100vw",
              },
            ],
          },
          width: 640,
          height: 426.6666666666667,
        },
      },
    },
    name: "Example 2",
    status: "live",
    tags: ["JavaScript", "HTML"],
    url: "https://github.com",
  },
];

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Andy Xiong</title>
        </Head>
        <Container>
          <Sidebar profile={profile} social={social} />
          <MainContent
            history={history}
            profile={profile}
            projects={projects}
          />
        </Container>
        <Footer
            name={profile.name}
            // showThemeLogo={site.siteMetadata.showThemeLogo}
          />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
