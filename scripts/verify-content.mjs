import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const projects=readFileSync('src/content/projects.ts','utf8');
for(const name of ['01-product.svg','02-workflows.svg','03-jobs.svg','04-delivery.svg']){
 if(!existsSync(resolve('public/projects/jameelaa',name)))throw new Error('Missing image: '+name);
}
for(const filename of ['src/components/ClassicExperience.tsx','src/components/EvolvedExperience.tsx']){
 const src=readFileSync(filename,'utf8');
 if(!src.includes('Mohamed Emad'))throw new Error('Missing correct identity in '+filename);
 if(/Kamaliyat|MohamedALAM2/.test(src))throw new Error('Unverified ownership in '+filename);
}
if(!projects.includes("slug:'jameelaa'"))throw new Error('Featured project missing');
console.log('PASS: shared project data, approved identity, assets and both editions');
const profile = readFileSync('src/lib/profile.ts', 'utf8');
for (const expected of ['eng-mohamedemad-dev', 'mohamedemaddev', 'mohamedelghool671@gmail.com', '13KMdfANje1xkXC7gkaoVVqnyCz-ekDZJ']) {
 if (!profile.includes(expected)) throw new Error(`Missing approved portfolio contact: ${expected}`);
}
for (const filename of ['src/components/ClassicExperience.tsx','src/components/EvolvedExperience.tsx','src/components/CaseStudy.tsx']) {
 const source = readFileSync(filename, 'utf8');
 if(!source.includes('PROFILE.mailto') || !source.includes('PROFILE.linkedin') || !source.includes('PROFILE.cv')) {
  throw new Error(`Missing contact links in ${filename}`);
 }
}
