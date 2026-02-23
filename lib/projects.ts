import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "terraloop",
    title: "terraloop",
    tagline: "procedural closed-world terrain generator for indie devs",
    category: "pet project",
    status: "prototype",
    stack: "next.js • typescript • tailwind (mvp site) / export targets: unity, unreal (concept)",
    image: "/projects/project1.jpg",
    overview:
      "terraloop is a tool for indie game developers who need fast terrain prototyping without spending days on manual sculpting. it focuses on closed-world maps: landscapes that loop seamlessly, avoid hard borders, and feel coherent when explored. the typical workflow in terrain prototyping is slow: generate something, notice seams, tweak noise parameters, rebuild, fix boundaries, rebuild again, then repeat when you change biome rules. terraloop compresses that loop into minutes by packaging the most common terrain decisions into a single controlled pipeline.",
    whyItExists:
      "game developers lose time on: building terrain that looks good from multiple angles / closing borders without visible seams / avoiding repeated patterns / balancing biome transitions / exporting a terrain that remains editable. terraloop exists to reduce the iteration cost for early stage worldbuilding.",
    howItWorks: [
      "choose a base world template (islands, ring-world, valley loop, canyon loop)",
      "set scale, elevation range, and terrain density",
      "select biomes (forest, desert, snow, volcanic, swamp) and distribution rules",
      "generate a closed-world heightmap with seam-safe noise",
      "preview the terrain in a simple 3d viewport",
      "export heightmap + biome masks",
      "import into unity/unreal using preset pipelines",
    ],
    coreFeatures: [
      "seamless closed-world generation",
      "biome masks and transitions",
      "slope and erosion simulation presets",
      "export heightmaps and splat maps",
      "preset packs for unity/unreal import",
      "seed-based generation for repeatability",
      "quick \"variation\" mode to generate alternatives instantly",
    ],
    mvpScope:
      "for meta flora xproject mvp, terraloop is represented as a project card + detailed description page. demo actions can be: open project → placeholder landing (or external link) / view repo → placeholder link",
    nextSteps: [
      "add real generator preview in browser (webgl)",
      "create export bundles for unity/unreal",
      "build biome editor",
      "add \"story mode\": generate points of interest and basic paths",
    ],
    links: [
      { label: "open project", href: "#" },
      { label: "view repo", href: "#" },
    ],
  },
  {
    slug: "nodeveil",
    title: "nodeveil",
    tagline: "self-hosted encrypted vpn infrastructure with custom tunneling",
    category: "micro saas",
    status: "private beta",
    stack: "deployment: docker • server: custom tunneling layer (concept) • control panel: web",
    image: "/projects/project2.jpg",
    overview:
      "nodeveil is a self-hosted vpn infrastructure designed for users who want control over their connection, routing, and encryption model. the goal is straightforward: deploy on your own server, generate client configs, and run a stable tunnel that does not depend on a public commercial provider. the product idea is focused on 'control panel + deployment + client onboarding'. the user does not want to fight with configs and protocols manually, they want a predictable setup they can own.",
    whyItExists:
      "people run into: vpn providers getting blocked or throttled / unstable endpoints and low transparency / protocol patterns that are easy to detect / lack of ownership over infrastructure / complicated self-hosted setups that require deep network knowledge. nodeveil targets the gap between 'pay for a provider' and 'build everything from scratch'.",
    howItWorks: [
      "user connects their server (or deploys using one-click docker)",
      "nodeveil sets up the tunneling service and encryption layer",
      "user gets a dashboard to create client profiles",
      "clients receive a private configuration bundle",
      "the system monitors uptime and provides rotation options",
    ],
    coreFeatures: [
      "self-hosted deployment via docker",
      "custom tunneling layer concept (positioning)",
      "encrypted traffic and key rotation",
      "client profile generator",
      "dashboard for managing devices",
      "basic uptime monitoring",
      "optional \"stealth mode\" configuration preset (positioning)",
    ],
    mvpScope:
      "nodeveil in mvp is represented as: card in featured vitrine and in all projects grid / detailed page with full positioning + feature list. optional: 'open project' leads to a placeholder dashboard mock",
    nextSteps: [
      "real dashboard prototype",
      "docs for server requirements and deployment",
      "client apps or installers",
      "extended monitoring + alerts",
    ],
    links: [
      { label: "open project", href: "#" },
      { label: "view repo", href: "#" },
    ],
  },
  {
    slug: "archimap",
    title: "archimap",
    tagline: "projection mapping simulation on real-world architecture",
    category: "pet project",
    status: "concept prototype",
    stack: "3d viewer (concept), asset library (concept)",
    image: "/projects/project3.jpg",
    overview:
      "archimap is a workflow tool for projection mapping artists. it provides a library of ready-to-use architectural objects and environments so the artist can test how a mapping concept lands on a surface without traveling to the site or building a custom 3d model from scratch. the product is not about replacing real-world calibration. it is about speeding up early-stage experimentation and iteration.",
    whyItExists:
      "projection mapping tests are slow because: you need access to a physical location / setup time is high / building a 3d mock takes time and skills / iteration cycles become expensive / many ideas die before the first real test. archimap reduces the preproduction cost.",
    howItWorks: [
      "pick an object/environment (facade, stage, abstract form, museum hall)",
      "upload visuals or video textures",
      "choose projection settings (angle, distance, intensity)",
      "preview how the mapping wraps around geometry",
      "adjust, replace, and iterate quickly",
      "export a preview package to share or to plan the real installation",
    ],
    coreFeatures: [
      "library of architectural objects and surfaces",
      "quick mapping preview",
      "light and contrast simulation presets",
      "texture/video replacement workflow",
      "camera viewpoints (front, angle, close)",
      "export previews for sharing",
    ],
    mvpScope:
      "archimap is presented as: card + detailed page / 'open project' can lead to a placeholder viewer page or external demo video later",
    nextSteps: [
      "interactive 3d web demo",
      "expand object library",
      "\"real site mode\" where users upload scans/photos for approximation",
      "collaboration sharing links",
    ],
    links: [
      { label: "open project", href: "#" },
      { label: "view repo", href: "#" },
    ],
  },
  {
    slug: "saascope-ai",
    title: "saascope ai",
    tagline: "agent that audits your pet project or micro saas in minutes",
    category: "micro saas",
    status: "mvp concept",
    stack: "ai pipeline (concept) + web dashboard",
    image: "/projects/project4.jpg",
    overview:
      "saascope ai is a product audit agent. it takes a pet project or micro saas as input and generates a structured review: positioning, landing clarity, monetization approach, competitor landscape, and practical next steps. the core promise is speed: founders waste hours on scattered research, half-written notes, and vague assumptions. saascope ai packages the analysis into a single workflow output.",
    whyItExists:
      "builders lose time on: understanding what to improve first / mapping competitors and their positioning / finding the correct niche angle / checking basic usability issues / estimating whether the market has money. saascope ai focuses on turning that uncertainty into a checklist and actionable next moves.",
    howItWorks: [
      "user submits a product link (or short description)",
      "the agent parses landing structure and core offer",
      "the agent maps comparable products and categories",
      "the agent outputs: a positioning summary / a competitor snapshot / a pricing and offer critique / a ux checklist / a go-to-market suggestions block",
      "user can rerun the audit after improvements",
    ],
    coreFeatures: [
      "structured audit report generation",
      "competitor angle summary",
      "landing copy and offer clarity feedback",
      "monetization notes (subscription vs one-time vs hybrid)",
      "prioritized next steps",
      "exportable report (pdf later)",
    ],
    mvpScope:
      "saascope ai is represented as: card + detailed page / 'open project' can lead to a form mock ('submit your product url')",
    nextSteps: [
      "report history per user",
      "integrations (github, analytics)",
      "template-based recommendations",
      "community compare mode (benchmark)",
    ],
    links: [
      { label: "open project", href: "#" },
      { label: "view repo", href: "#" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: string
): Project[] {
  if (category === "all") return PROJECTS;
  if (category === "pet projects") {
    return PROJECTS.filter((p) => p.category === "pet project");
  }
  if (category === "micro saas") {
    return PROJECTS.filter((p) => p.category === "micro saas");
  }
  if (category === "experiments") {
    return PROJECTS.filter((p) => p.category === "experiment");
  }
  return PROJECTS;
}
