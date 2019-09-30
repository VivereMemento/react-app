export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
export const pipe = (...fns) => fns.reduceRight((f, g) => (...args) => f(g(...args)));
export const curry = (fn, arity = fn.length, ...args) => (arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args));
export const prop = curry((val, obj) => obj?.[val] || undefined);
export const trace = curry((label, val) => (console.log(label, val), val));
