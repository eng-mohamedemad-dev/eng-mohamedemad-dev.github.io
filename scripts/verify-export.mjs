import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
const prefix=(process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/,'');
for (const edition of ['', 'classic', 'evolved', 'dark', 'fieldnotes']) {
  const dir=join('out',edition);
  const page=readFileSync(join(dir,'index.html'),'utf8');
  const study=readFileSync(join(dir,'work/jameelaa/index.html'),'utf8');
  const home=prefix+(edition ? '/'+edition : '')+'/';
  if(!page.includes('href="'+home+'work/jameelaa/"')) throw new Error('Wrong study link on '+home);
  if(!study.includes('href="'+home+'#work"')) throw new Error('Wrong return link on '+home);
  if(edition && (!page.includes('noindex') || !study.includes('noindex'))) throw new Error('Preview is indexable: '+home);
  for (const [,src] of page.matchAll(/<img[^>]+?src="([^"]+)"/g)) {
    if(src.startsWith('/') && !existsSync(join('out',src.slice(prefix.length)))) throw new Error('Missing image '+src);
  }
  console.log('PASS portfolio, case study, images and return link:',home);
}
