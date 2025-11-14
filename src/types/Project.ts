export type ProjectMode = "default" | "details";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  codeUrl: string;
  mode: ProjectMode;
  type?: string;
}
