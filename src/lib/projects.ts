import {PROJECTS,type Project} from '@/content/projects';

/** A small repository boundary; a Supabase adapter can replace this implementation later.
 * Note: GitHub Pages still requires builds to generate *new routes* unless hosting is changed.
 */
export interface ProjectsRepository {
  list(): readonly Project[];
  findBySlug(slug: string): Project | undefined;
}
const localRepository: ProjectsRepository = {
  list:()=>PROJECTS,
  findBySlug:(slug)=>PROJECTS.find(p=>p.slug===slug),
};
export const projectRepository: ProjectsRepository=localRepository;
