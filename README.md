# Pham Quoc Huy — Portfolio

Open-source, non-commercial personal portfolio of **Pham Quoc Huy**, a legal assistant and Finance & Banking Law graduate (University of Economics and Law, VNU-HCM). I adapted this site to document my legal work and to learn how to maintain and publish a bilingual website.

Live: https://huypham0504.github.io

The site uses Next.js 15, TypeScript, Velite and MDX. Vietnamese and English project and blog entries are maintained in `content/`. GitHub Actions builds the static site and deploys it to GitHub Pages.

## Development

```bash
corepack enable
yarn install
yarn dev
```

## Content

```
content/
├── projects/   # One folder per item: <slug>/index.mdx (EN) + index.vi.mdx (VI) + cover image
└── blogs/      # Blog posts
src/config/     # Name, links, experience, skills, resume, legal practice, navbar
public/
└── pham-quoc-huy-cv.pdf   # File opened by the "Download PDF" button on /cv
```

See [HUONG-DAN.md](HUONG-DAN.md) for a Vietnamese step-by-step guide.

## Credits

Template from [hoangpham2263/hoangpham2263.github.io](https://github.com/hoangpham2263/hoangpham2263.github.io), itself based on [MinhOmega's portfolio](https://github.com/MinhOmega/MinhOmega.github.io). Licensed under AGPL-3.0.
