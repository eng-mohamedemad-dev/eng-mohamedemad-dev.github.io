import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const projects=readFileSync('src/content/projects.ts','utf8');
for(const name of ['01-product.svg','02-workflows.svg','03-jobs.svg','04-delivery.svg']){
 if(!existsSync(resolve('public/projects/jameelaa',name)))throw new Error('Missing image: '+name);
}
for(const filename of ['src/components/ClassicExperience.tsx','src/components/EvolvedExperience.tsx','src/components/DarkExperience.tsx']){
 const src=readFileSync(filename,'utf8');
 if(!src.includes('Mohamed Emad'))throw new Error('Missing correct identity in '+filename);
 if(/Kamaliyat|MohamedALAM2/.test(src))throw new Error('Unverified ownership in '+filename);
}
if(!projects.includes("slug:'jameelaa'"))throw new Error('Featured project missing');
if(!existsSync('public/dark/workspace.webp'))throw new Error('Missing V3 hero photograph');
const cfg=readFileSync('src/config/portfolio.ts','utf8');
if(!/ACTIVE_EDITION:\s*PortfolioEdition\s*=\s*'(classic|evolved|dark|fieldnotes)'/.test(cfg))throw new Error('Invalid homepage edition configuration');
console.log('PASS: shared project data, approved identity, assets and all four editions');
const profile = readFileSync('src/lib/profile.ts', 'utf8');
for (const expected of ['eng-mohamedemad-dev', 'mohamedemaddev', 'mohamedelghool671@gmail.com', '13KMdfANje1xkXC7gkaoVVqnyCz-ekDZJ']) {
 if (!profile.includes(expected)) throw new Error(`Missing approved portfolio contact: ${expected}`);
}
for (const filename of ['src/components/ClassicExperience.tsx','src/components/EvolvedExperience.tsx','src/components/DarkExperience.tsx','src/components/CaseStudy.tsx']) {
 const source = readFileSync(filename, 'utf8');
 if(!source.includes('PROFILE.mailto') || !source.includes('PROFILE.linkedin') || !source.includes('PROFILE.cv')) {
  throw new Error(`Missing contact links in ${filename}`);
 }
}

for (const file of ['src/components/ClassicExperience.tsx','src/components/EvolvedExperience.tsx','src/components/DarkExperience.tsx','src/components/CaseStudy.tsx']) {
 const content = readFileSync(file,'utf8');
 if (/Switch edition|edition-switch|Switch to (original|enhanced) portfolio/.test(content)) throw new Error(`Unexpected edition switcher: ${file}`);
}

for (const file of ['src/components/ClassicExperience.tsx','src/components/EvolvedExperience.tsx','src/components/DarkExperience.tsx']) {
 const source=readFileSync(file,'utf8');
 if(!source.includes('ScrollReveals')||!source.includes('SocialLinks')) throw new Error(`Missing motion or contact channels: ${file}`);
}
for (const file of ['src/components/FieldnotesExperience.tsx','public/classic/notebook.webp','public/fieldnotes/terrain.webp','public/fieldnotes/terrain-small.webp']) {
 if (!existsSync(file)) throw new Error('Missing edition asset: '+file);
}
for (const match of ['201068013253','facebook.com/Mohamed.Emad.Dev']) {
 if (!profile.includes(match)) throw new Error(`Missing owner-approved channel: ${match}`);
}
for (const file of ['src/components/ThemeToggle.tsx','src/components/ScrollReveals.tsx','src/styles/interaction.css']) {
 if(!existsSync(file)) throw new Error(`Missing theme/motion support: ${file}`);
}
