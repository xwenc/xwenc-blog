import About from "../about/about";
import Projects from "../projects/projects";
import Summary from "../summary/summary";
import Tools from "../tools/tools";
import WorkHistory from "../work-history/work-history";

const MainContent = ({ formspreeEndpoint, history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />
      {profile.skills && <Tools tools={profile.skills} />}
      {profile.about && <About about={profile.about} />}
      <Projects projects={projects} />
      <WorkHistory history={history} />
    </main>
  );
};

export default MainContent;
