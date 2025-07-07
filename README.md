# Astro blog

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

## License

MIT!
