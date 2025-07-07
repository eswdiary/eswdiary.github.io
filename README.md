# Astro blog

記一些容易忘記的雜項

## Callout

目前有設定 5 種

- Default
- Info
- Warning
- Example
- Tip

使用時請呼叫（範例）：

```js
import Callout from "@/components/Callout.astro";

<Callout type="info">
  <ul>
    <li>Name：青春合成指南 Youth Synthesis Guide</li>
    <li>Type： EP</li>
    <li>Year：2022</li>
  </ul>
</Callout>;
```

僅 `.mdx` 可以使用

## 連結的 hover

在 `TextLink.astro` 設定

## 配色主題

在 `tailwind.config.mjs` 設定

## 簡介欄

在 `Bio.astro` 設定

## iframe

使用 youtube 嵌入的範例，需要動用 tailwind 的 aspect-video，詳見： [Aspect Ratio - Tailwind CSS](https://v3.tailwindcss.com/docs/aspect-ratio)

```html
<div class="aspect-video w-full">
  <iframe
    class="h-full w-full"
    src="https://www.youtube.com/embed/NjEFjYFqHM0?si=HkjgvSFGeRn7ofPP"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  >
  </iframe>
</div>
```

## License

MIT!
