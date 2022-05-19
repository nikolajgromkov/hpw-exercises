'use strict';

const merge = (...args) => {
  const array = args[0];
  for (let i = 1; i < args.length; i++) {
    const arr = args[i];
    for (let j = 0; j < arr.length; j++) {
      const val = arr[j];
      if (!array.includes(val)) array.push(val);
    }
  }
  return array;
};

const section = (s,separator) => {
  const i = s.indexOf(separator);
  if (i < 0) return [s, ''];
  return [s.slice(0, i), s.slice(i + separator.length)];
};

const SCALAR_TYPES = ['string', 'number', 'boolean', 'undefined'];
const OBJECT_TYPES = ['function', 'array', 'object', 'null', 'symbol'];
const META_TYPES = ['char', 'hash', 'record', 'set', 'map'];
const ALL_TYPES = merge(SCALAR_TYPES, OBJECT_TYPES, META_TYPES);

const FUNC_TERMS = [') {', ') => {', ') => ('];
const NAMED_LINES = ['Example:', 'Returns:', 'Hint:', 'Result:'];

const indexing = (s) => (term) => s.indexOf(term);

const last = (arr) => arr[arr.length - 1];

const parseLines = (s, signature) => {
  let lines = s.split('\n');
  lines.pop();
  signature.title = (lines.shift() || '').replace('//', '').trim();
  lines = lines.map(
    (d) => d.trim().replace(/^(.*) \/\//, '$1:').replace(',:', ':')
  );
  for (let line of lines) {
    if (line.startsWith('//')) {
      line = line.replace(/^\/\/ /, '').trim();
      if (NAMED_LINES.find((s) => line.startsWith(s))) {
        const [name, comment] = section(line, ': ');
        signature.comments.push({ name, comment });
      } else if (signature.parameters.length === 0) {
        if (signature.description.length > 0) {
          signature.description += '\n';
        }
        signature.description += line;
      } else {
        const par = last(signature.parameters);
        par.comment += '\n' + line;
      }
    } else {
      const [name, text] = section(line, ': ');
      let [type, comment] = section(text, ', ');
      if (!ALL_TYPES.find((s) => type.startsWith(s))) {
        comment = type;
        type = '';
      }
      signature.parameters.push({ name, type, comment });
    }
  }
}

const parseSignature = (fn) => {
  const signature = {
    title: '', description: '',
    parameters: [], comments: []
  };
  let s = fn.toString();
  let pos = FUNC_TERMS.map(indexing(s))
    .filter((k) => k !== -1)
    .reduce((prev, cur) => (prev < cur ? prev : cur), s.length);
  if (pos !== -1) {
    s = s.substring(0, pos);
    pos = s.indexOf('\n');
    s = s.substring(pos + 1);
    parseLines(s, signature);
  }

  return signature;
}

const introspect = (namespace) => {
  const inventory = {};
  for (const name in namespace) {
    const iface = namespace[name];
    const methods = {};
    inventory[name] = methods;
    for (const method in iface) {
      const fn = iface[method];
      const signature = parseSignature(fn);
      methods[method] = Object.assign({
        method: name + '.' + method
      }, signature);
    }
  }
  return inventory;
};

const iface = { common: { merge, section } };
console.dir(introspect(iface), { depth: 5 });