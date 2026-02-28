// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "Current group members and alumni.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Research projects in Grau Lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-gallery",
          title: "gallery",
          description: "Photos from the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-intranet",
          title: "intranet",
          description: "Grau Lab internal resources.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/intranet/";
          },
        },{id: "nav-visit",
          title: "visit",
          description: "How to find us.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/visit/";
          },
        },{id: "news-welcome-to-the-grau-lab-website-we-are-an-experimental-atomic-physics-group-at-old-dominion-university",
          title: 'Welcome to the Grau Lab website! We are an experimental atomic physics group...',
          description: "",
          section: "News",},{id: "projects-barium-ion-qubits",
          title: 'Barium Ion Qubits',
          description: "Using trapped Ba⁺ ions as a platform for quantum information processing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_ion_trap/";
            },},{id: "projects-hybrid-qubit-qumode-systems",
          title: 'Hybrid Qubit-Qumode Systems',
          description: "Trapped-ion platforms for hybrid quantum computation and simulation using both discrete (qubit) and continuous-variable (qumode) degrees of freedom.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_hybrid_qc/";
            },},{id: "projects-nuclear-cp-violation",
          title: 'Nuclear CP Violation',
          description: "Searching for CP-violating nuclear interactions using molecular ions as ultra-sensitive probes of physics beyond the Standard Model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_cp_violation/";
            },},{id: "projects-spin-polarized-photocathodes",
          title: 'Spin-Polarized Photocathodes',
          description: "Developing next-generation spin-polarized electron sources for particle accelerators, in collaboration with ODU ECE and Jefferson Lab.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04_photocathodes/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%67%72%61%75@%6F%64%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Graulab-ODU", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lnh9kdIAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-2684-6923", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
