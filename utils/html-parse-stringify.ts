type TextNode = {
  type: 'text';
  content: string;
};

type TagNode = {
  type: 'tag';
  name: string;
  attrs: Record<string, string | boolean>;
  children: Array<TagNode | TextNode>;
  voidElement?: boolean;
};

const voidElements = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

const parseAttributes = (input: string) => {
  const attrs: Record<string, string | boolean> = {};
  const attrRegex = /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(input)) !== null) {
    const key = match[1];
    const value = match[2] ?? match[3] ?? match[4];
    attrs[key] = value ?? true;
  }

  return attrs;
};

const parse = (input: string): Array<TagNode | TextNode> => {
  const root: TagNode = { type: 'tag', name: 'root', attrs: {}, children: [] };
  const stack: TagNode[] = [root];
  const tagRegex = /<\/?[^>]+>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      const text = input.slice(lastIndex, match.index);
      if (text) {
        stack[stack.length - 1].children.push({ type: 'text', content: text });
      }
    }

    const tag = match[0];
    if (tag.startsWith('</')) {
      const name = tag.slice(2, -1).trim();
      for (let i = stack.length - 1; i > 0; i -= 1) {
        if (stack[i].name === name) {
          stack.length = i;
          break;
        }
      }
    } else {
      const isSelfClosing = tag.endsWith('/>');
      const inner = tag.slice(1, tag.length - (isSelfClosing ? 2 : 1)).trim();
      if (!inner) {
        lastIndex = tagRegex.lastIndex;
        continue;
      }

      const nameMatch = inner.match(/^\S+/);
      const name = nameMatch ? nameMatch[0] : inner;
      const attrsPart = inner.slice(name.length).trim();
      const attrs = attrsPart ? parseAttributes(attrsPart) : {};
      const isVoid = isSelfClosing || voidElements.has(name.toLowerCase());
      const node: TagNode = {
        type: 'tag',
        name,
        attrs,
        children: [],
        voidElement: isVoid,
      };

      stack[stack.length - 1].children.push(node);
      if (!isVoid) {
        stack.push(node);
      }
    }

    lastIndex = tagRegex.lastIndex;
  }

  if (lastIndex < input.length) {
    const text = input.slice(lastIndex);
    if (text) {
      stack[stack.length - 1].children.push({ type: 'text', content: text });
    }
  }

  return root.children;
};

const stringify = (nodes: Array<TagNode | TextNode>): string => {
  return nodes
    .map((node) => {
      if (node.type === 'text') {
        return node.content;
      }

      const attrs = Object.entries(node.attrs)
        .map(([key, value]) => {
          if (value === true) return ` ${key}`;
          return ` ${key}="${String(value)}"`;
        })
        .join('');

      if (node.voidElement) {
        return `<${node.name}${attrs} />`;
      }

      return `<${node.name}${attrs}>${stringify(node.children)}</${node.name}>`;
    })
    .join('');
};

const HTML = { parse, stringify };

export default HTML;

