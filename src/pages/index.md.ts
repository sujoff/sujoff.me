import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Sujan P (@sujoff)

AI-powered tools from Swift roots to web frontiers. Every commit lands on GitHub for you to fork & remix.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- Twitter: [@sujoff](https://twitter.com/0xSimle)
- GitHub: [@sujoff](https://github.com/sujoff)
- Email: devopsujan@gmail.com

---

*This is the markdown-only version of steipete.me. Visit [steipete.me](https://steipete.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};