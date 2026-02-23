import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "All Projects — METAFLORA* XProject",
  description:
    "Browse pet projects and micro saas from the METAFLORA* ecosystem. ship first. refine later.",
};

export default function ProjectsPage(){
  return <ProjectsClient />;
}
