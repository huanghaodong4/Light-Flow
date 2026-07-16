# Image Search MCP Tools

This project has two local MCP image tools installed.

## Installed tools

- `stock-images-mcp`: searches and downloads stock images from Pexels, Unsplash, and Pixabay.
- `@ahmaddioxide/mcp-image-resolver`: searches royalty-free images from Pexels and Unsplash, returns structured image URLs and attribution.

## API keys

At least one provider key is required.

- Pexels: https://www.pexels.com/api/
- Unsplash: https://unsplash.com/developers
- Pixabay: https://pixabay.com/api/docs/

## Local scripts

```bash
npm run mcp:stock-images
npm run mcp:image-resolver
```

## MCP config

Use `mcp-image-tools.config.example.json` as the starting point for an MCP client config. Replace the placeholder keys before running the tools.

