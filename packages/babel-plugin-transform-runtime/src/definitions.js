import semver from "semver";

export default runtimeVersion => {
  let includeMathModule = true;
  if (runtimeVersion) {
    // reason for conditionally including this module:
    // https://github.com/babel/babel/pull/8616#issuecomment-418154753
    includeMathModule =
      !semver.intersects(`<=7.0.0`, runtimeVersion) &&
      !semver.intersects(`>=8.0.0`, runtimeVersion);
  }

  return {
    builtins: {
      Symbol: "symbol",
      Promise: "promise",
      Map: "map",
      WeakMap: "weak-map",
      Set: "set",
      WeakSet: "weak-set",
      setImmediate: "set-immediate",
      clearImmediate: "clear-immediate",
      parseFloat: "parse-float",
      parseInt: "parse-int",
    },

    methods: {
      Array: {
        from: "array/from",
        isArray: "array/is-array",
        of: "array/of",
      },

      JSON: {
        stringify: "json/stringify",
      },

      Object: {
        assign: "object/assign",
        create: "object/create",
        defineProperties: "object/define-properties",
        defineProperty: "object/define-property",
        entries: "object/entries",
        freeze: "object/freeze",
        getOwnPropertyDescriptor: "object/get-own-property-descriptor",
        getOwnPropertyDescriptors: "object/get-own-property-descriptors",
        getOwnPropertyNames: "object/get-own-property-names",
        getOwnPropertySymbols: "object/get-own-property-symbols",
        getPrototypeOf: "object/get-prototype-of",
        isExtensible: "object/is-extensible",
        isFrozen: "object/is-frozen",
        isSealed: "object/is-sealed",
        is: "object/is",
        keys: "object/keys",
        preventExtensions: "object/prevent-extensions",
        seal: "object/seal",
        setPrototypeOf: "object/set-prototype-of",
        values: "object/values",
      },

      ...(includeMathModule
        ? {
            Math: {
              acosh: "math/acosh",
              asinh: "math/asinh",
              atanh: "math/atanh",
              cbrt: "math/cbrt",
              clz32: "math/clz32",
              cosh: "math/cosh",
              expm1: "math/expm1",
              fround: "math/fround",
              hypot: "math/hypot",
              imul: "math/imul",
              log10: "math/log10",
              log1p: "math/log1p",
              log2: "math/log2",
              sign: "math/sign",
              sinh: "math/sinh",
              tanh: "math/tanh",
              trunc: "math/trunc",
            },
          }
        : {}),

      Symbol: {
        asyncIterator: "symbol/async-iterator",
        for: "symbol/for",
        hasInstance: "symbol/has-instance",
        isConcatSpreadable: "symbol/is-concat-spreadable",
        iterator: "symbol/iterator",
        keyFor: "symbol/key-for",
        match: "symbol/match",
        replace: "symbol/replace",
        search: "symbol/search",
        species: "symbol/species",
        split: "symbol/split",
        toPrimitive: "symbol/to-primitive",
        toStringTag: "symbol/to-string-tag",
        unscopables: "symbol/unscopables",
      },

      String: {
        at: "string/at",
        fromCodePoint: "string/from-code-point",
        raw: "string/raw",
      },

      Number: {
        EPSILON: "number/epsilon",
        isFinite: "number/is-finite",
        isInteger: "number/is-integer",
        isNaN: "number/is-nan",
        isSafeInteger: "number/is-safe-integer",
        MAX_SAFE_INTEGER: "number/max-safe-integer",
        MIN_SAFE_INTEGER: "number/min-safe-integer",
        parseFloat: "number/parse-float",
        parseInt: "number/parse-int",
      },

      Reflect: {
        apply: "reflect/apply",
        construct: "reflect/construct",
        defineProperty: "reflect/define-property",
        deleteProperty: "reflect/delete-property",
        getOwnPropertyDescriptor: "reflect/get-own-property-descriptor",
        getPrototypeOf: "reflect/get-prototype-of",
        get: "reflect/get",
        has: "reflect/has",
        isExtensible: "reflect/is-extensible",
        ownKeys: "reflect/own-keys",
        preventExtensions: "reflect/prevent-extensions",
        setPrototypeOf: "reflect/set-prototype-of",
        set: "reflect/set",
      },

      Date: {
        now: "date/now",
      },
    },
  };
};
