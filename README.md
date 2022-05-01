# dashpro

## Setup

Install dependencies:

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Static Generation

This will create the `dist/` directory for publishing to static hosting:

```bash
yarn generate
```

To preview the static generated app, run `yarn start`

## Deploy to GitHub Pages

```bash
yarn deploy
```

## Front-Matter Sample

```yaml
title: Content Title
menuTitle: Sidebar Title
subtitle: Content Subtitle
description: Meta Description
category: Sidebar Category
position: 1
fullscreen: true
dartpad: true
version: 1
badge: Content Title Badge
```

## Dartpad Integration

1. Set `dartpad: true` in front-matter
2. In code blocks, use language `run-dartpad:theme-dark:mode-flutter:run-true:null_safety-true:split-60:width-100%:height-500px:ga_id-unique_id`
