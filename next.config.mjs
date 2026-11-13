import createMDX from '@next/mdx';

/** GitHub Pages projects need a base path. User sites (<username>.github.io) don't. */
const repo=process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const inferredBasePath=process.env.GITHUB_ACTIONS && repo && !repo.endsWith('.github.io')?`/${repo}`:'';
const basePath=process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;
/** @type {import('next').NextConfig} */
const nextConfig={
  output:'export',
  trailingSlash:true,
  basePath,
  env:{NEXT_PUBLIC_BASE_PATH:basePath},
  images:{unoptimized:true},
  pageExtensions:['js','jsx','ts','tsx','md','mdx'],
  reactStrictMode:true,
};
export default createMDX({})(nextConfig);
