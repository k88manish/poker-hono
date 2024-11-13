// import { jsxRenderer } from "hono/jsx-renderer";
import { reactRenderer } from "@hono/react-renderer";
import "./style.css";

export const renderer = reactRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vanilla Chat App</title>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/13.0.2/markdown-it.min.js"
          integrity="sha512-ohlWmsCxOu0bph1om5eDL0jm/83eH09fvqLDhiEdiqfDeJbEvz4FSbeY0gLJSVJwQAp0laRhTXbUQG+ZUuifUQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
          integrity="sha512-0aPQyyeZrWj9sCA46UlmWgKOP0mUipLQ6OZXu8l4IcAmD2u31EPEy9VcIMvl7SoAaKe8bLXZhYoMaE/in+gcgA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        {import.meta.env.PROD ? (
          <link href="/static/style.css" rel="stylesheet" />
        ) : (
          <link href="/src/style.css" rel="stylesheet" />
        )}
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
});
