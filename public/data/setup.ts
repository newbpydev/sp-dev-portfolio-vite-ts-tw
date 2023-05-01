import path from "path";

// export const setupPath = path.resolve(__dirname, "../data/setup");
// export const projectsPath = path.resolve(__dirname, "../data/projects.json");
// export const skillsPath = path.resolve(__dirname, "../data/skills.json");
// export const socialSitesPath = path.resolve(
//   __dirname,
//   "../data/social-sites.json"
// );
export const socialSitesPath = "../data/social-sites.json";

export const getSocialSites = async () => {
  const data = await fetch(
    path.resolve(__dirname, "../data/social-sites.json")
  );
  console.log(data);
};
