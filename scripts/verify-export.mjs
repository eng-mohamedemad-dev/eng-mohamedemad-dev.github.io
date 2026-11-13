import {existsSync} from 'node:fs';
for(const path of ['out/index.html','out/classic/index.html','out/work/jameelaa/index.html','out/classic/work/jameelaa/index.html']){
 if(!existsSync(path))throw new Error('Missing GitHub Pages export: '+path);
 console.log('PASS',path);
}
