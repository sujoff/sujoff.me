import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Sujan P (@sujoff)

Linux infrastructure from terminal roots to cloud scale.
Every system change is reproducible, automated, and versioned on GitHub.


## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- X: [@sujoff_](https://x.com/sujoff_)
- GitHub: [@sujoff](https://github.com/sujoff)
- Email: devopsujan@gmail.com

---

*This is the markdown-only version of sujoff.me. Visit [sujoff.me](https://sujoff.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
