!(function (e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, n) {
    !(function (e, t) {
      if (!k[e] || !x[e]) return;
      for (var n in ((x[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
      0 == --g && 0 === y && I();
    })(e, n),
      t && t(e, n);
  };
  var n,
    i = !0,
    r = "04168445f951b46b4ac2",
    o = {},
    s = [],
    a = [];
  function l(e) {
    var t = j[e];
    if (!t) return M;
    var i = function (i) {
        return (
          t.hot.active
            ? (j[i]
                ? -1 === j[i].parents.indexOf(e) && j[i].parents.push(e)
                : ((s = [e]), (n = i)),
              -1 === t.children.indexOf(i) && t.children.push(i))
            : (console.warn(
                "[HMR] unexpected require(" + i + ") from disposed module " + e
              ),
              (s = [])),
          M(i)
        );
      },
      r = function (e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return M[e];
          },
          set: function (t) {
            M[e] = t;
          },
        };
      };
    for (var o in M)
      Object.prototype.hasOwnProperty.call(M, o) &&
        "e" !== o &&
        "t" !== o &&
        Object.defineProperty(i, o, r(o));
    return (
      (i.e = function (e) {
        return (
          "ready" === d && p("prepare"),
          y++,
          M.e(e).then(t, function (e) {
            throw (t(), e);
          })
        );
        function t() {
          y--, "prepare" === d && (b[e] || C(e), 0 === y && 0 === g && I());
        }
      }),
      (i.t = function (e, t) {
        return 1 & t && (e = i(e)), M.t(e, -2 & t);
      }),
      i
    );
  }
  function c(t) {
    var i = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: n !== t,
      active: !0,
      accept: function (e, t) {
        if (void 0 === e) i._selfAccepted = !0;
        else if ("function" == typeof e) i._selfAccepted = e;
        else if ("object" == typeof e)
          for (var n = 0; n < e.length; n++)
            i._acceptedDependencies[e[n]] = t || function () {};
        else i._acceptedDependencies[e] = t || function () {};
      },
      decline: function (e) {
        if (void 0 === e) i._selfDeclined = !0;
        else if ("object" == typeof e)
          for (var t = 0; t < e.length; t++) i._declinedDependencies[e[t]] = !0;
        else i._declinedDependencies[e] = !0;
      },
      dispose: function (e) {
        i._disposeHandlers.push(e);
      },
      addDisposeHandler: function (e) {
        i._disposeHandlers.push(e);
      },
      removeDisposeHandler: function (e) {
        var t = i._disposeHandlers.indexOf(e);
        t >= 0 && i._disposeHandlers.splice(t, 1);
      },
      invalidate: function () {
        switch (((this._selfInvalidated = !0), d)) {
          case "idle":
            ((f = {})[t] = e[t]), p("ready");
            break;
          case "ready":
            P(t);
            break;
          case "prepare":
          case "check":
          case "dispose":
          case "apply":
            (v = v || []).push(t);
        }
      },
      check: _,
      apply: O,
      status: function (e) {
        if (!e) return d;
        u.push(e);
      },
      addStatusHandler: function (e) {
        u.push(e);
      },
      removeStatusHandler: function (e) {
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      },
      data: o[t],
    };
    return (n = void 0), i;
  }
  var u = [],
    d = "idle";
  function p(e) {
    d = e;
    for (var t = 0; t < u.length; t++) u[t].call(null, e);
  }
  var h,
    f,
    m,
    v,
    g = 0,
    y = 0,
    b = {},
    x = {},
    k = {};
  function w(e) {
    return +e + "" === e ? +e : e;
  }
  function _(e) {
    if ("idle" !== d) throw new Error("check() is only allowed in idle status");
    return (
      (i = e),
      p("check"),
      ((t = 1e4),
      (t = t || 1e4),
      new Promise(function (e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var i = new XMLHttpRequest(),
            o = M.p + "" + r + ".hot-update.json";
          i.open("GET", o, !0), (i.timeout = t), i.send(null);
        } catch (e) {
          return n(e);
        }
        i.onreadystatechange = function () {
          if (4 === i.readyState)
            if (0 === i.status)
              n(new Error("Manifest request to " + o + " timed out."));
            else if (404 === i.status) e();
            else if (200 !== i.status && 304 !== i.status)
              n(new Error("Manifest request to " + o + " failed."));
            else {
              try {
                var t = JSON.parse(i.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function (e) {
        if (!e) return p(E() ? "ready" : "idle"), null;
        (x = {}), (b = {}), (k = e.c), (m = e.h), p("prepare");
        var t = new Promise(function (e, t) {
          h = { resolve: e, reject: t };
        });
        f = {};
        return C(0), "prepare" === d && 0 === y && 0 === g && I(), t;
      })
    );
    var t;
  }
  function C(e) {
    k[e]
      ? ((x[e] = !0),
        g++,
        (function (e) {
          var t = document.createElement("script");
          (t.charset = "utf-8"),
            (t.src = M.p + "" + e + "." + r + ".hot-update.js"),
            document.head.appendChild(t);
        })(e))
      : (b[e] = !0);
  }
  function I() {
    p("ready");
    var e = h;
    if (((h = null), e))
      if (i)
        Promise.resolve()
          .then(function () {
            return O(i);
          })
          .then(
            function (t) {
              e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in f)
          Object.prototype.hasOwnProperty.call(f, n) && t.push(w(n));
        e.resolve(t);
      }
  }
  function O(t) {
    if ("ready" !== d)
      throw new Error("apply() is only allowed in ready status");
    return (function t(i) {
      var a, l, c, u, d;
      function h(e) {
        for (
          var t = [e],
            n = {},
            i = t.map(function (e) {
              return { chain: [e], id: e };
            });
          i.length > 0;

        ) {
          var r = i.pop(),
            o = r.id,
            s = r.chain;
          if ((u = j[o]) && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
            if (u.hot._selfDeclined)
              return { type: "self-declined", chain: s, moduleId: o };
            if (u.hot._main)
              return { type: "unaccepted", chain: s, moduleId: o };
            for (var a = 0; a < u.parents.length; a++) {
              var l = u.parents[a],
                c = j[l];
              if (c) {
                if (c.hot._declinedDependencies[o])
                  return {
                    type: "declined",
                    chain: s.concat([l]),
                    moduleId: o,
                    parentId: l,
                  };
                -1 === t.indexOf(l) &&
                  (c.hot._acceptedDependencies[o]
                    ? (n[l] || (n[l] = []), g(n[l], [o]))
                    : (delete n[l],
                      t.push(l),
                      i.push({ chain: s.concat([l]), id: l })));
              }
            }
          }
        }
        return {
          type: "accepted",
          moduleId: e,
          outdatedModules: t,
          outdatedDependencies: n,
        };
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          -1 === e.indexOf(i) && e.push(i);
        }
      }
      E();
      var y = {},
        b = [],
        x = {},
        _ = function () {
          console.warn(
            "[HMR] unexpected require(" + I.moduleId + ") to disposed module"
          );
        };
      for (var C in f)
        if (Object.prototype.hasOwnProperty.call(f, C)) {
          var I;
          (d = w(C)), (I = f[C] ? h(d) : { type: "disposed", moduleId: C });
          var O = !1,
            P = !1,
            S = !1,
            B = "";
          switch (
            (I.chain && (B = "\nUpdate propagation: " + I.chain.join(" -> ")),
            I.type)
          ) {
            case "self-declined":
              i.onDeclined && i.onDeclined(I),
                i.ignoreDeclined ||
                  (O = new Error(
                    "Aborted because of self decline: " + I.moduleId + B
                  ));
              break;
            case "declined":
              i.onDeclined && i.onDeclined(I),
                i.ignoreDeclined ||
                  (O = new Error(
                    "Aborted because of declined dependency: " +
                      I.moduleId +
                      " in " +
                      I.parentId +
                      B
                  ));
              break;
            case "unaccepted":
              i.onUnaccepted && i.onUnaccepted(I),
                i.ignoreUnaccepted ||
                  (O = new Error(
                    "Aborted because " + d + " is not accepted" + B
                  ));
              break;
            case "accepted":
              i.onAccepted && i.onAccepted(I), (P = !0);
              break;
            case "disposed":
              i.onDisposed && i.onDisposed(I), (S = !0);
              break;
            default:
              throw new Error("Unexception type " + I.type);
          }
          if (O) return p("abort"), Promise.reject(O);
          if (P)
            for (d in ((x[d] = f[d]),
            g(b, I.outdatedModules),
            I.outdatedDependencies))
              Object.prototype.hasOwnProperty.call(I.outdatedDependencies, d) &&
                (y[d] || (y[d] = []), g(y[d], I.outdatedDependencies[d]));
          S && (g(b, [I.moduleId]), (x[d] = _));
        }
      var A,
        D = [];
      for (l = 0; l < b.length; l++)
        (d = b[l]),
          j[d] &&
            j[d].hot._selfAccepted &&
            x[d] !== _ &&
            !j[d].hot._selfInvalidated &&
            D.push({
              module: d,
              parents: j[d].parents.slice(),
              errorHandler: j[d].hot._selfAccepted,
            });
      p("dispose"),
        Object.keys(k).forEach(function (e) {
          !1 === k[e] &&
            (function (e) {
              delete installedChunks[e];
            })(e);
        });
      var T,
        L,
        V = b.slice();
      for (; V.length > 0; )
        if (((d = V.pop()), (u = j[d]))) {
          var z = {},
            N = u.hot._disposeHandlers;
          for (c = 0; c < N.length; c++) (a = N[c])(z);
          for (
            o[d] = z, u.hot.active = !1, delete j[d], delete y[d], c = 0;
            c < u.children.length;
            c++
          ) {
            var $ = j[u.children[c]];
            $ && (A = $.parents.indexOf(d)) >= 0 && $.parents.splice(A, 1);
          }
        }
      for (d in y)
        if (Object.prototype.hasOwnProperty.call(y, d) && (u = j[d]))
          for (L = y[d], c = 0; c < L.length; c++)
            (T = L[c]),
              (A = u.children.indexOf(T)) >= 0 && u.children.splice(A, 1);
      p("apply"), void 0 !== m && ((r = m), (m = void 0));
      for (d in ((f = void 0), x))
        Object.prototype.hasOwnProperty.call(x, d) && (e[d] = x[d]);
      var R = null;
      for (d in y)
        if (Object.prototype.hasOwnProperty.call(y, d) && (u = j[d])) {
          L = y[d];
          var H = [];
          for (l = 0; l < L.length; l++)
            if (((T = L[l]), (a = u.hot._acceptedDependencies[T]))) {
              if (-1 !== H.indexOf(a)) continue;
              H.push(a);
            }
          for (l = 0; l < H.length; l++) {
            a = H[l];
            try {
              a(L);
            } catch (e) {
              i.onErrored &&
                i.onErrored({
                  type: "accept-errored",
                  moduleId: d,
                  dependencyId: L[l],
                  error: e,
                }),
                i.ignoreErrored || R || (R = e);
            }
          }
        }
      for (l = 0; l < D.length; l++) {
        var F = D[l];
        (d = F.module), (s = F.parents), (n = d);
        try {
          M(d);
        } catch (e) {
          if ("function" == typeof F.errorHandler)
            try {
              F.errorHandler(e);
            } catch (t) {
              i.onErrored &&
                i.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: d,
                  error: t,
                  originalError: e,
                }),
                i.ignoreErrored || R || (R = t),
                R || (R = e);
            }
          else
            i.onErrored &&
              i.onErrored({
                type: "self-accept-errored",
                moduleId: d,
                error: e,
              }),
              i.ignoreErrored || R || (R = e);
        }
      }
      if (R) return p("fail"), Promise.reject(R);
      if (v)
        return t(i).then(function (e) {
          return (
            b.forEach(function (t) {
              e.indexOf(t) < 0 && e.push(t);
            }),
            e
          );
        });
      return (
        p("idle"),
        new Promise(function (e) {
          e(b);
        })
      );
    })((t = t || {}));
  }
  function E() {
    if (v) return f || (f = {}), v.forEach(P), (v = void 0), !0;
  }
  function P(t) {
    Object.prototype.hasOwnProperty.call(f, t) || (f[t] = e[t]);
  }
  var j = {};
  function M(t) {
    if (j[t]) return j[t].exports;
    var n = (j[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: c(t),
      parents: ((a = s), (s = []), a),
      children: [],
    });
    return e[t].call(n.exports, n, n.exports, l(t)), (n.l = !0), n.exports;
  }
  (M.m = e),
    (M.c = j),
    (M.d = function (e, t, n) {
      M.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (M.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (M.t = function (e, t) {
      if ((1 & t && (e = M(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (M.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          M.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (M.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return M.d(t, "a", t), t;
    }),
    (M.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (M.p = ""),
    (M.h = function () {
      return r;
    }),
    l(1)((M.s = 1));
})([
  function (e, t, n) {
    (function (e) {
      !(function (t) {
        "use strict";
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function o(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        }
        function s(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function c(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t &&
              (function (e, t) {
                (
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  }
                )(e, t);
              })(e, t);
        }
        function u(e) {
          return (u = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function d() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function p(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function h(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? p(e)
            : t;
        }
        function f(e) {
          return function () {
            var t,
              n = u(e);
            if (d()) {
              var i = u(this).constructor;
              t = Reflect.construct(n, arguments, i);
            } else t = n.apply(this, arguments);
            return h(this, t);
          };
        }
        function m(e, t) {
          for (
            ;
            !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e));

          );
          return e;
        }
        function v(e, t, n) {
          return (v =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var i = m(e, t);
                  if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(n) : r.value;
                  }
                })(e, t, n || e);
        }
        function g(e, t, n, i) {
          return (g =
            "undefined" != typeof Reflect && Reflect.set
              ? Reflect.set
              : function (e, t, n, i) {
                  var r,
                    o = m(e, t);
                  if (o) {
                    if ((r = Object.getOwnPropertyDescriptor(o, t)).set)
                      return r.set.call(i, n), !0;
                    if (!r.writable) return !1;
                  }
                  if ((r = Object.getOwnPropertyDescriptor(i, t))) {
                    if (!r.writable) return !1;
                    (r.value = n), Object.defineProperty(i, t, r);
                  } else s(i, t, n);
                  return !0;
                })(e, t, n, i);
        }
        function y(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return k(e);
            })(e) ||
            b(e) ||
            x(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function b(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        function x(e, t) {
          if (e) {
            if ("string" == typeof e) return k(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(n)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? k(e, t)
                : void 0
            );
          }
        }
        function k(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
          return i;
        }
        function w(e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t);
              if ("object" != typeof i) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        }
        function _(e, t, n, i) {
          var r = (function () {
            var e = {
              elementsDefinitionOrder: [["method"], ["field"]],
              initializeInstanceElements: function (e, t) {
                ["method", "field"].forEach(function (n) {
                  t.forEach(function (t) {
                    t.kind === n &&
                      "own" === t.placement &&
                      this.defineClassElement(e, t);
                  }, this);
                }, this);
              },
              initializeClassElements: function (e, t) {
                var n = e.prototype;
                ["method", "field"].forEach(function (i) {
                  t.forEach(function (t) {
                    var r = t.placement;
                    if (t.kind === i && ("static" === r || "prototype" === r)) {
                      var o = "static" === r ? e : n;
                      this.defineClassElement(o, t);
                    }
                  }, this);
                }, this);
              },
              defineClassElement: function (e, t) {
                var n = t.descriptor;
                if ("field" === t.kind) {
                  var i = t.initializer;
                  n = {
                    enumerable: n.enumerable,
                    writable: n.writable,
                    configurable: n.configurable,
                    value: void 0 === i ? void 0 : i.call(e),
                  };
                }
                Object.defineProperty(e, t.key, n);
              },
              decorateClass: function (e, t) {
                var n = [],
                  i = [],
                  r = { static: [], prototype: [], own: [] };
                if (
                  (e.forEach(function (e) {
                    this.addElementPlacement(e, r);
                  }, this),
                  e.forEach(function (e) {
                    if (!O(e)) return n.push(e);
                    var t = this.decorateElement(e, r);
                    n.push(t.element),
                      n.push.apply(n, t.extras),
                      i.push.apply(i, t.finishers);
                  }, this),
                  !t)
                )
                  return { elements: n, finishers: i };
                var o = this.decorateConstructor(n, t);
                return i.push.apply(i, o.finishers), (o.finishers = i), o;
              },
              addElementPlacement: function (e, t, n) {
                var i = t[e.placement];
                if (!n && -1 !== i.indexOf(e.key))
                  throw new TypeError("Duplicated element (" + e.key + ")");
                i.push(e.key);
              },
              decorateElement: function (e, t) {
                for (
                  var n = [], i = [], r = e.decorators, o = r.length - 1;
                  o >= 0;
                  o--
                ) {
                  var s = t[e.placement];
                  s.splice(s.indexOf(e.key), 1);
                  var a = this.fromElementDescriptor(e),
                    l = this.toElementFinisherExtras((0, r[o])(a) || a);
                  (e = l.element),
                    this.addElementPlacement(e, t),
                    l.finisher && i.push(l.finisher);
                  var c = l.extras;
                  if (c) {
                    for (var u = 0; u < c.length; u++)
                      this.addElementPlacement(c[u], t);
                    n.push.apply(n, c);
                  }
                }
                return { element: e, finishers: i, extras: n };
              },
              decorateConstructor: function (e, t) {
                for (var n = [], i = t.length - 1; i >= 0; i--) {
                  var r = this.fromClassDescriptor(e),
                    o = this.toClassDescriptor((0, t[i])(r) || r);
                  if (
                    (void 0 !== o.finisher && n.push(o.finisher),
                    void 0 !== o.elements)
                  ) {
                    e = o.elements;
                    for (var s = 0; s < e.length - 1; s++)
                      for (var a = s + 1; a < e.length; a++)
                        if (
                          e[s].key === e[a].key &&
                          e[s].placement === e[a].placement
                        )
                          throw new TypeError(
                            "Duplicated element (" + e[s].key + ")"
                          );
                  }
                }
                return { elements: e, finishers: n };
              },
              fromElementDescriptor: function (e) {
                var t = {
                  kind: e.kind,
                  key: e.key,
                  placement: e.placement,
                  descriptor: e.descriptor,
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  "field" === e.kind && (t.initializer = e.initializer),
                  t
                );
              },
              toElementDescriptors: function (e) {
                if (void 0 !== e)
                  return (function (e) {
                    return (
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(e) ||
                      b(e) ||
                      x(e) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                    );
                  })(e).map(function (e) {
                    var t = this.toElementDescriptor(e);
                    return (
                      this.disallowProperty(
                        e,
                        "finisher",
                        "An element descriptor"
                      ),
                      this.disallowProperty(
                        e,
                        "extras",
                        "An element descriptor"
                      ),
                      t
                    );
                  }, this);
              },
              toElementDescriptor: function (e) {
                var t = String(e.kind);
                if ("method" !== t && "field" !== t)
                  throw new TypeError(
                    'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                      t +
                      '"'
                  );
                var n = w(e.key),
                  i = String(e.placement);
                if ("static" !== i && "prototype" !== i && "own" !== i)
                  throw new TypeError(
                    'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                      i +
                      '"'
                  );
                var r = e.descriptor;
                this.disallowProperty(e, "elements", "An element descriptor");
                var o = {
                  kind: t,
                  key: n,
                  placement: i,
                  descriptor: Object.assign({}, r),
                };
                return (
                  "field" !== t
                    ? this.disallowProperty(
                        e,
                        "initializer",
                        "A method descriptor"
                      )
                    : (this.disallowProperty(
                        r,
                        "get",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        r,
                        "set",
                        "The property descriptor of a field descriptor"
                      ),
                      this.disallowProperty(
                        r,
                        "value",
                        "The property descriptor of a field descriptor"
                      ),
                      (o.initializer = e.initializer)),
                  o
                );
              },
              toElementFinisherExtras: function (e) {
                return {
                  element: this.toElementDescriptor(e),
                  finisher: P(e, "finisher"),
                  extras: this.toElementDescriptors(e.extras),
                };
              },
              fromClassDescriptor: function (e) {
                var t = {
                  kind: "class",
                  elements: e.map(this.fromElementDescriptor, this),
                };
                return (
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Descriptor",
                    configurable: !0,
                  }),
                  t
                );
              },
              toClassDescriptor: function (e) {
                var t = String(e.kind);
                if ("class" !== t)
                  throw new TypeError(
                    'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                      t +
                      '"'
                  );
                this.disallowProperty(e, "key", "A class descriptor"),
                  this.disallowProperty(e, "placement", "A class descriptor"),
                  this.disallowProperty(e, "descriptor", "A class descriptor"),
                  this.disallowProperty(e, "initializer", "A class descriptor"),
                  this.disallowProperty(e, "extras", "A class descriptor");
                var n = P(e, "finisher");
                return {
                  elements: this.toElementDescriptors(e.elements),
                  finisher: n,
                };
              },
              runClassFinishers: function (e, t) {
                for (var n = 0; n < t.length; n++) {
                  var i = (0, t[n])(e);
                  if (void 0 !== i) {
                    if ("function" != typeof i)
                      throw new TypeError(
                        "Finishers must return a constructor."
                      );
                    e = i;
                  }
                }
                return e;
              },
              disallowProperty: function (e, t, n) {
                if (void 0 !== e[t])
                  throw new TypeError(n + " can't have a ." + t + " property.");
              },
            };
            return e;
          })();
          if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
          var s = t(function (e) {
              r.initializeInstanceElements(e, a.elements);
            }, n),
            a = r.decorateClass(
              (function (e) {
                for (
                  var t = [],
                    n = function (e) {
                      return (
                        "method" === e.kind &&
                        e.key === o.key &&
                        e.placement === o.placement
                      );
                    },
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var r,
                    o = e[i];
                  if ("method" === o.kind && (r = t.find(n)))
                    if (E(o.descriptor) || E(r.descriptor)) {
                      if (O(o) || O(r))
                        throw new ReferenceError(
                          "Duplicated methods (" +
                            o.key +
                            ") can't be decorated."
                        );
                      r.descriptor = o.descriptor;
                    } else {
                      if (O(o)) {
                        if (O(r))
                          throw new ReferenceError(
                            "Decorators can't be placed on different accessors with for the same property (" +
                              o.key +
                              ")."
                          );
                        r.decorators = o.decorators;
                      }
                      I(o, r);
                    }
                  else t.push(o);
                }
                return t;
              })(s.d.map(C)),
              e
            );
          return (
            r.initializeClassElements(s.F, a.elements),
            r.runClassFinishers(s.F, a.finishers)
          );
        }
        function C(e) {
          var t,
            n = w(e.key);
          "method" === e.kind
            ? (t = {
                value: e.value,
                writable: !0,
                configurable: !0,
                enumerable: !1,
              })
            : "get" === e.kind
            ? (t = { get: e.value, configurable: !0, enumerable: !1 })
            : "set" === e.kind
            ? (t = { set: e.value, configurable: !0, enumerable: !1 })
            : "field" === e.kind &&
              (t = { configurable: !0, writable: !0, enumerable: !0 });
          var i = {
            kind: "field" === e.kind ? "field" : "method",
            key: n,
            placement: e.static
              ? "static"
              : "field" === e.kind
              ? "own"
              : "prototype",
            descriptor: t,
          };
          return (
            e.decorators && (i.decorators = e.decorators),
            "field" === e.kind && (i.initializer = e.value),
            i
          );
        }
        function I(e, t) {
          void 0 !== e.descriptor.get
            ? (t.descriptor.get = e.descriptor.get)
            : (t.descriptor.set = e.descriptor.set);
        }
        function O(e) {
          return e.decorators && e.decorators.length;
        }
        function E(e) {
          return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
        }
        function P(e, t) {
          var n = e[t];
          if (void 0 !== n && "function" != typeof n)
            throw new TypeError("Expected '" + t + "' to be a function");
          return n;
        }
        var j = function e(t, n) {
            for (let i in n)
              "object" == typeof n[i] && null !== n[i]
                ? ((t[i] = t[i] || {}), e(t[i], n[i]))
                : (t[i] = n[i]);
            return t;
          },
          M = {
            required: "The '{field}' field is required.",
            string: "The '{field}' field must be a string.",
            stringEmpty: "The '{field}' field must not be empty.",
            stringMin:
              "The '{field}' field length must be greater than or equal to {expected} characters long.",
            stringMax:
              "The '{field}' field length must be less than or equal to {expected} characters long.",
            stringLength:
              "The '{field}' field length must be {expected} characters long.",
            stringPattern:
              "The '{field}' field fails to match the required pattern.",
            stringContains:
              "The '{field}' field must contain the '{expected}' text.",
            stringEnum:
              "The '{field}' field does not match any of the allowed values.",
            stringNumeric: "The '{field}' field must be a numeric string.",
            stringAlpha: "The '{field}' field must be an alphabetic string.",
            stringAlphanum:
              "The '{field}' field must be an alphanumeric string.",
            stringAlphadash: "The '{field}' field must be an alphadash string.",
            number: "The '{field}' field must be a number.",
            numberMin:
              "The '{field}' field must be greater than or equal to {expected}.",
            numberMax:
              "The '{field}' field must be less than or equal to {expected}.",
            numberEqual: "The '{field}' field must be equal to {expected}.",
            numberNotEqual: "The '{field}' field can't be equal to {expected}.",
            numberInteger: "The '{field}' field must be an integer.",
            numberPositive: "The '{field}' field must be a positive number.",
            numberNegative: "The '{field}' field must be a negative number.",
            array: "The '{field}' field must be an array.",
            arrayEmpty: "The '{field}' field must not be an empty array.",
            arrayMin:
              "The '{field}' field must contain at least {expected} items.",
            arrayMax:
              "The '{field}' field must contain less than or equal to {expected} items.",
            arrayLength: "The '{field}' field must contain {expected} items.",
            arrayContains:
              "The '{field}' field must contain the '{expected}' item.",
            arrayUnique:
              "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
            arrayEnum:
              "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
            boolean: "The '{field}' field must be a boolean.",
            date: "The '{field}' field must be a Date.",
            dateMin:
              "The '{field}' field must be greater than or equal to {expected}.",
            dateMax:
              "The '{field}' field must be less than or equal to {expected}.",
            enumValue:
              "The '{field}' field value '{expected}' does not match any of the allowed values.",
            equalValue:
              "The '{field}' field value must be equal to '{expected}'.",
            equalField:
              "The '{field}' field value must be equal to '{expected}' field value.",
            forbidden: "The '{field}' field is forbidden.",
            function: "The '{field}' field must be a function.",
            email: "The '{field}' field must be a valid e-mail.",
            luhn: "The '{field}' field must be a valid checksum luhn.",
            mac: "The '{field}' field must be a valid MAC address.",
            object: "The '{field}' must be an Object.",
            objectStrict:
              "The object '{field}' contains forbidden keys: '{actual}'.",
            url: "The '{field}' field must be a valid URL.",
            uuid: "The '{field}' field must be a valid UUID.",
            uuidVersion:
              "The '{field}' field must be a valid UUID version provided.",
          },
          S = function () {
            return {};
          },
          B = function ({ schema: e, messages: t, customValidation: n }, i, r) {
            const o = [];
            if (
              (o.push(
                `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                  type: "array",
                  actual: "value",
                  messages: t,
                })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
              ),
              !1 === e.empty &&
                o.push(
                  `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                    type: "arrayEmpty",
                    actual: "value",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != e.min &&
                o.push(
                  `\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({
                    type: "arrayMin",
                    expected: e.min,
                    actual: "len",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != e.max &&
                o.push(
                  `\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({
                    type: "arrayMax",
                    expected: e.max,
                    actual: "len",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != e.length &&
                o.push(
                  `\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError(
                    {
                      type: "arrayLength",
                      expected: e.length,
                      actual: "len",
                      messages: t,
                    }
                  )}\n\t\t\t}\n\t\t`
                ),
              null != e.contains &&
                o.push(
                  `\n\t\t\tif (value.indexOf(${JSON.stringify(
                    e.contains
                  )}) === -1) {\n\t\t\t\t${this.makeError({
                    type: "arrayContains",
                    expected: JSON.stringify(e.contains),
                    actual: "value",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === e.unique &&
                o.push(
                  `\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError(
                    {
                      type: "arrayUnique",
                      expected:
                        "Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",
                      actual: "value",
                      messages: t,
                    }
                  )}\n\t\t\t}\n\t\t`
                ),
              null != e.enum)
            ) {
              const n = JSON.stringify(e.enum);
              o.push(
                `\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError(
                  {
                    type: "arrayEnum",
                    expected: '"' + e.enum.join(", ") + '"',
                    actual: "value[i]",
                    messages: t,
                  }
                )}\n\t\t\t\t}\n\t\t\t}\n\t\t`
              );
            }
            if (null != e.items) {
              o.push(
                "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t"
              );
              const t = this.getRuleFromSchema(e.items);
              o.push(
                this.compileRule(
                  t,
                  r,
                  i,
                  'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context);',
                  "arr[i]"
                )
              ),
                o.push("\n\t\t\t}\n\t\t");
            }
            return (
              o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { source: o.join("\n") }
            );
          },
          A = function ({ schema: e, messages: t, customValidation: n }, i) {
            const r = [];
            let o = !1;
            return (
              r.push("\n\t\tvar origValue = value;\n\t"),
              !0 === e.convert &&
                ((o = !0),
                r.push(
                  '\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t'
                )),
              r.push(
                `\n\t\tif (typeof value !== "boolean")\n\t\t\t${this.makeError({
                  type: "boolean",
                  actual: "origValue",
                  messages: t,
                })}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: o, source: r.join("\n") }
            );
          },
          D = function ({ schema: e, messages: t }, n, i) {
            const r = [];
            return (
              "function" == typeof e.check &&
                ((i.customs[n] = { schema: e, messages: t }),
                r.push(
                  `\n\t\t\tconst rule = context.customs["${n}"];\n\t\t\tconst res = rule.schema.check.call(this, value, rule.schema, "${n}", parent, context);\n\t\t\tif (Array.isArray(res)) {\n\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`
                )),
              { source: r.join("\n") }
            );
          },
          T = function ({ schema: e, messages: t, customValidation: n }, i) {
            const r = [];
            let o = !1;
            return (
              r.push("\n\t\tvar origValue = value;\n\t"),
              !0 === e.convert &&
                ((o = !0),
                r.push(
                  "\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t"
                )),
              r.push(
                `\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError(
                  { type: "date", actual: "origValue", messages: t }
                )}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: o, source: r.join("\n") }
            );
          };
        const L = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          V = /^\S+@\S+\.\S+$/;
        var z = function ({ schema: e, messages: t, customValidation: n }, i) {
            const r = [],
              o = "precise" == e.mode ? L : V;
            let s = !1;
            return (
              r.push(
                `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError(
                  { type: "string", actual: "value", messages: t }
                )}\n\t\t\treturn value;\n\t\t}\n\t`
              ),
              e.normalize &&
                ((s = !0),
                r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),
              r.push(
                `\n\t\tif (!${o.toString()}.test(value))\n\t\t\t${this.makeError(
                  { type: "email", actual: "value", messages: t }
                )}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
              ),
              { sanitized: s, source: r.join("\n") }
            );
          },
          N = function ({ schema: e, messages: t, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (${JSON.stringify(
                e.values || []
              )}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({
                type: "enumValue",
                expected: '"' + e.values.join(", ") + '"',
                actual: "value",
                messages: t,
              })}\n\t\t\t\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          $ = function ({ schema: e, messages: t, customValidation: n }, i) {
            const r = [];
            return (
              e.field
                ? (e.strict
                    ? r.push(
                        `\n\t\t\t\tif (value !== parent["${e.field}"])\n\t\t\t`
                      )
                    : r.push(
                        `\n\t\t\t\tif (value != parent["${e.field}"])\n\t\t\t`
                      ),
                  r.push(
                    `\n\t\t\t\t${this.makeError({
                      type: "equalField",
                      actual: "value",
                      expected: JSON.stringify(e.field),
                      messages: t,
                    })}\n\t\t`
                  ))
                : (e.strict
                    ? r.push(
                        `\n\t\t\t\tif (value !== ${JSON.stringify(
                          e.value
                        )})\n\t\t\t`
                      )
                    : r.push(
                        `\n\t\t\t\tif (value != ${JSON.stringify(
                          e.value
                        )})\n\t\t\t`
                      ),
                  r.push(
                    `\n\t\t\t\t${this.makeError({
                      type: "equalValue",
                      actual: "value",
                      expected: JSON.stringify(e.value),
                      messages: t,
                    })}\n\t\t`
                  )),
              r.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { source: r.join("\n") }
            );
          },
          R = function ({ schema: e, messages: t, customValidation: n }, i) {
            const r = [];
            return (
              r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),
              e.remove
                ? r.push("\n\t\t\treturn undefined;\n\t\t")
                : r.push(
                    `\n\t\t\t${this.makeError({
                      type: "forbidden",
                      actual: "value",
                      messages: t,
                    })}\n\t\t`
                  ),
              r.push(`\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`),
              { source: r.join("\n") }
            );
          },
          H = function ({ schema: e, messages: t, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError(
                { type: "function", actual: "value", messages: t }
              )}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          F = function ({ schema: e, messages: t, customValidation: n }, i, r) {
            const o = [];
            o.push(
              "\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t"
            );
            for (let t = 0; t < e.rules.length; t++) {
              o.push(
                "\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t"
              );
              const n = this.getRuleFromSchema(e.rules[t]);
              o.push(
                this.compileRule(
                  n,
                  r,
                  i,
                  "var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);",
                  "tmpVal"
                )
              ),
                o.push(
                  "\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t"
                );
            }
            return (
              o.push(
                `\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t${n(
                  "newVal"
                )}\n\t\treturn newVal;\n\t`
              ),
              { source: o.join("\n") }
            );
          },
          G = function ({ schema: e, messages: t, customValidation: n }, i) {
            const r = [];
            r.push("\n\t\tvar origValue = value;\n\t");
            let o = !1;
            return (
              !0 === e.convert &&
                ((o = !0),
                r.push(
                  '\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t'
                )),
              r.push(
                `\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError(
                  { type: "number", actual: "origValue", messages: t }
                )}\n\t\t\treturn value;\n\t\t}\n\t`
              ),
              null != e.min &&
                r.push(
                  `\n\t\t\tif (value < ${e.min}) {\n\t\t\t\t${this.makeError({
                    type: "numberMin",
                    expected: e.min,
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != e.max &&
                r.push(
                  `\n\t\t\tif (value > ${e.max}) {\n\t\t\t\t${this.makeError({
                    type: "numberMax",
                    expected: e.max,
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != e.equal &&
                r.push(
                  `\n\t\t\tif (value !== ${
                    e.equal
                  }) {\n\t\t\t\t${this.makeError({
                    type: "numberEqual",
                    expected: e.equal,
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              null != e.notEqual &&
                r.push(
                  `\n\t\t\tif (value === ${
                    e.notEqual
                  }) {\n\t\t\t\t${this.makeError({
                    type: "numberNotEqual",
                    expected: e.notEqual,
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === e.integer &&
                r.push(
                  `\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({
                    type: "numberInteger",
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === e.positive &&
                r.push(
                  `\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({
                    type: "numberPositive",
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              !0 === e.negative &&
                r.push(
                  `\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({
                    type: "numberNegative",
                    actual: "origValue",
                    messages: t,
                  })}\n\t\t\t}\n\t\t`
                ),
              r.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
              { sanitized: o, source: r.join("\n") }
            );
          };
        const W = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/,
          U = /["'\\\n\r\u2028\u2029]/g;
        function q(e) {
          return e.replace(U, function (e) {
            switch (e) {
              case '"':
              case "'":
              case "\\":
                return "\\" + e;
              case "\n":
                return "\\n";
              case "\r":
                return "\\r";
              case "\u2028":
                return "\\u2028";
              case "\u2029":
                return "\\u2029";
            }
          });
        }
        var J = function (
          { schema: e, messages: t, customValidation: n },
          i,
          r
        ) {
          const o = [];
          o.push(
            `\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError(
              { type: "object", actual: "value", messages: t }
            )}\n\t\t\treturn value;\n\t\t}\n\t`
          );
          const s = e.properties || e.props;
          if (s) {
            o.push("var parentObj = value;"),
              o.push("var parentField = field;");
            const n = Object.keys(s);
            for (let e = 0; e < n.length; e++) {
              const t = n[e],
                a = q(t),
                l = W.test(a) ? "." + a : `['${a}']`,
                c = "parentObj" + l,
                u = (i ? i + "." : "") + t;
              o.push("\n// Field: " + q(u)),
                o.push(`field = parentField ? parentField + "${l}" : "${a}";`),
                o.push(`value = ${c};`);
              const d = this.getRuleFromSchema(s[t]);
              o.push(
                this.compileRule(
                  d,
                  r,
                  u,
                  c +
                    " = context.fn[%%INDEX%%](value, field, parentObj, errors, context);",
                  c
                )
              );
            }
            if (e.strict) {
              const n = Object.keys(s);
              o.push(
                `\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(
                  n
                )}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`
              ),
                "remove" == e.strict
                  ? o.push(
                      "\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"
                    )
                  : o.push(
                      `\n\t\t\t\t\t${this.makeError({
                        type: "objectStrict",
                        expected: '"' + n.join(", ") + '"',
                        actual: "invalidProps.join(', ')",
                        messages: t,
                      })}\n\t\t\t\t`
                    ),
                o.push("\n\t\t\t\t}\n\t\t\t");
            }
            o.push("\n\t\t\treturn parentObj;\n\t\t");
          } else o.push(`\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`);
          return { source: o.join("\n") };
        };
        const K = /^-?[0-9]\d*(\.\d+)?$/,
          X = /^[a-zA-Z]+$/,
          Q = /^[a-zA-Z0-9]+$/,
          Z = /^[a-zA-Z0-9_-]+$/;
        var Y = function (
          { schema: e, messages: t, customValidation: n },
          i,
          r
        ) {
          const o = [];
          let s = !1;
          if (
            (!0 === e.convert &&
              ((s = !0),
              o.push(
                '\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t'
              )),
            o.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`
            ),
            e.trim && ((s = !0), o.push("\n\t\t\tvalue = value.trim();\n\t\t")),
            e.trimLeft &&
              ((s = !0), o.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),
            e.trimRight &&
              ((s = !0), o.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),
            e.padStart)
          ) {
            s = !0;
            const t = null != e.padChar ? e.padChar : " ";
            o.push(
              `\n\t\t\tvalue = value.padStart(${e.padStart}, ${JSON.stringify(
                t
              )});\n\t\t`
            );
          }
          if (e.padEnd) {
            s = !0;
            const t = null != e.padChar ? e.padChar : " ";
            o.push(
              `\n\t\t\tvalue = value.padEnd(${e.padEnd}, ${JSON.stringify(
                t
              )});\n\t\t`
            );
          }
          if (
            (e.lowercase &&
              ((s = !0), o.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),
            e.uppercase &&
              ((s = !0), o.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),
            e.localeLowercase &&
              ((s = !0),
              o.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),
            e.localeUppercase &&
              ((s = !0),
              o.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),
            o.push("\n\t\t\tvar len = value.length;\n\t"),
            !1 === e.empty &&
              o.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "stringEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.min &&
              o.push(
                `\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "stringMin",
                  expected: e.min,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              o.push(
                `\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "stringMax",
                  expected: e.max,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.length &&
              o.push(
                `\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({
                  type: "stringLength",
                  expected: e.length,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.pattern)
          ) {
            let n = e.pattern;
            "string" == typeof e.pattern &&
              (n = new RegExp(e.pattern, e.patternFlags)),
              o.push(
                `\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError(
                  {
                    type: "stringPattern",
                    expected: '"' + n.toString().replace('"', '\\"') + '"',
                    actual: "origValue",
                    messages: t,
                  }
                )}\n\t\t`
              );
          }
          if (
            (null != e.contains &&
              o.push(
                `\n\t\t\tif (value.indexOf("${
                  e.contains
                }") === -1) {\n\t\t\t\t${this.makeError({
                  type: "stringContains",
                  expected: '"' + e.contains + '"',
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.enum)
          ) {
            const n = JSON.stringify(e.enum);
            o.push(
              `\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError(
                {
                  type: "stringEnum",
                  expected: '"' + e.enum.join(", ") + '"',
                  actual: "origValue",
                  messages: t,
                }
              )}\n\t\t\t}\n\t\t`
            );
          }
          return (
            !0 === e.numeric &&
              o.push(
                `\n\t\t\tif (!${K.toString()}.test(value) ) {\n\t\t\t\t${this.makeError(
                  { type: "stringNumeric", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alpha &&
              o.push(
                `\n\t\t\tif(!${X.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlpha", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alphanum &&
              o.push(
                `\n\t\t\tif(!${Q.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphanum", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alphadash &&
              o.push(
                `\n\t\t\tif(!${Z.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphadash", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            o.push(`\n\t\t${n("value")}\n\t\treturn value;\n\t`),
            { sanitized: s, source: o.join("\n") }
          );
        };
        const ee = /^https?:\/\/\S+/;
        var te = function ({ schema: e, messages: t, customValidation: n }, i) {
          const r = [];
          return (
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tif (!${ee.toString()}.test(value)) {\n\t\t\t${this.makeError(
                { type: "url", actual: "value", messages: t }
              )}\n\t\t}\n\n\t\t${n("value")}\n\n\t\treturn value;\n\t`
            ),
            { source: r.join("\n") }
          );
        };
        const ne = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        var ie = function ({ schema: e, messages: t }, n) {
          const i = [];
          return (
            i.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${ne.toString()}.test(val)) {\n\t\t\t${this.makeError(
                { type: "uuid", actual: "value", messages: t }
              )}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`
            ),
            e.version &&
              i.push(
                `\n\t\t\tif (${
                  e.version
                } !== version) {\n\t\t\t\t${this.makeError({
                  type: "uuidVersion",
                  expected: e.version,
                  actual: "version",
                  messages: t,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
            i.push(
              `\n\t\tswitch (version) {\n\t\tcase 1:\n\t\tcase 2:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(value.charAt(19)) === -1) {\n\t\t\t\t${this.makeError(
                { type: "uuid", actual: "value", messages: t }
              )}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { source: i.join("\n") }
          );
        };
        const re = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
        var oe = function ({ schema: e, messages: t, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
                { type: "string", actual: "value", messages: t }
              )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${re.toString()}.test(v)) {\n\t\t\t\t${this.makeError(
                { type: "mac", actual: "value", messages: t }
              )}\n\t\t\t}\n\t\t\t${n("value")}\n\t\t\treturn value;\n\t\t`,
            };
          },
          se = function ({ schema: e, messages: t, customValidation: n }, i) {
            return {
              source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
                { type: "string", actual: "value", messages: t }
              )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError(
                { type: "luhn", actual: "value", messages: t }
              )}\n\t\t\t}\n\n\t\t\t${n("value")}\n\n\t\t\treturn value;\n\t\t`,
            };
          },
          ae =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {};
        function le() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
          );
        }
        function ce(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        let ue, de, pe, he;
        var fe = function (e) {
            ue ||
              ((ue = le()),
              (de = {
                parser: "babel",
                useTabs: !1,
                printWidth: 120,
                trailingComma: "none",
                tabWidth: 4,
                singleQuote: !1,
                semi: !0,
                bracketSpacing: !0,
              }),
              (pe = le()),
              (he = {
                language: "js",
                theme: pe.fromJson({
                  keyword: ["white", "bold"],
                  built_in: "magenta",
                  literal: "cyan",
                  number: "magenta",
                  regexp: "red",
                  string: ["yellow", "bold"],
                  symbol: "plain",
                  class: "blue",
                  attr: "plain",
                  function: ["white", "bold"],
                  title: "plain",
                  params: "green",
                  comment: "grey",
                }),
              }));
            const t = ue.format(e, de);
            return pe.highlight(t, he);
          },
          me = new RegExp(
            /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,
            "gi"
          ),
          ve = new RegExp(/^[-+]?\d+$/),
          ge = function () {
            var e = new (class {
              constructor(e) {
                (this.opts = { messages: j({}, M) }),
                  e && j(this.opts, e),
                  (this.messages = this.opts.messages),
                  (this.rules = {
                    any: S,
                    array: B,
                    boolean: A,
                    custom: D,
                    date: T,
                    email: z,
                    enum: N,
                    equal: $,
                    forbidden: R,
                    function: H,
                    multi: F,
                    number: G,
                    object: J,
                    string: Y,
                    url: te,
                    uuid: ie,
                    mac: oe,
                    luhn: se,
                  }),
                  (this.aliases = {}),
                  (this.cache = new Map());
              }
              validate(e, t) {
                return this.compile(t)(e);
              }
              wrapRequiredCheckSourceCode(e, t, n) {
                const i = [],
                  r =
                    null != e.schema.default
                      ? JSON.stringify(e.schema.default)
                      : null;
                return (
                  i.push(
                    "\n\t\t\tif (value === undefined || value === null) {\n\t\t"
                  ),
                  !0 === e.schema.optional || "forbidden" == e.schema.type
                    ? null != r && n
                      ? i.push(`${n} = ${r};`)
                      : i.push("// Do nothing, it's an optional field")
                    : null != r && n
                    ? i.push(`${n} = ${r};`)
                    : i.push(
                        this.makeError({
                          type: "required",
                          actual: "value",
                          messages: e.messages,
                        })
                      ),
                  i.push("} else {"),
                  t && i.push(t),
                  i.push("\t\t}"),
                  i.join("\n")
                );
              }
              compile(e) {
                if (null === e || "object" != typeof e)
                  throw new Error("Invalid schema.");
                const t = this,
                  n = { index: 0, rules: [], fn: [], customs: {} };
                if ((this.cache.clear(), !0 !== e.$$root))
                  if (Array.isArray(e)) e = this.getRuleFromSchema(e).schema;
                  else {
                    const t = Object.assign({}, e);
                    (e = { type: "object", strict: t.$$strict, properties: t }),
                      delete t.$$strict;
                  }
                const i = ["var errors = [];", "var field;"],
                  r = this.getRuleFromSchema(e);
                i.push(
                  this.compileRule(
                    r,
                    n,
                    null,
                    "context.fn[%%INDEX%%](value, field, null, errors, context);",
                    "value"
                  )
                ),
                  i.push("if (errors.length) {"),
                  i.push(
                    '\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'
                  ),
                  i.push("}"),
                  i.push("return true;");
                const o = i.join("\n"),
                  s = new Function("value", "context", o);
                if (this.opts.debug) {
                  let e = function (e) {
                    return e;
                  };
                  "undefined" == typeof window && (e = fe),
                    n.fn.forEach((t, n) =>
                      console.log(e(`// Context.fn[${n}]\n` + t.toString()))
                    ),
                    console.log(e("// Main check function\n" + s.toString()));
                }
                return (
                  this.cache.clear(),
                  function (e) {
                    return (n.data = e), s.call(t, e, n);
                  }
                );
              }
              compileRule(e, t, n, i, r) {
                const o = [],
                  s = this.cache.get(e.schema);
                if (s)
                  ((e = s).cycle = !0),
                    (e.cycleStack = []),
                    o.push(
                      this.wrapRequiredCheckSourceCode(
                        e,
                        `\n\t\t\t\tvar rule = context.rules[${
                          e.index
                        }];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(
                          "%%INDEX%%",
                          e.index
                        )}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,
                        r
                      )
                    );
                else {
                  this.cache.set(e.schema, e),
                    (e.index = t.index),
                    (t.rules[t.index] = e),
                    "function" == typeof e.schema.custom &&
                      ((t.customs[n] = {
                        schema: e.schema,
                        messages: e.messages,
                      }),
                      (e.customValidation = (e) =>
                        `\n\t\t\t\t\tconst rule = context.customs["${n}"];\n\t\t\t\t\tconst res = rule.schema.custom.call(this, ${e}, rule.schema, "${n}", parent, context);\n\t\t\t\t\tif (Array.isArray(res)) {\n\t\t\t\t\t\tres.forEach(err => errors.push(Object.assign({ message: rule.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`)),
                    t.index++;
                  const s = e.ruleFunction.call(this, e, n, t);
                  if (s.source) {
                    const n = new Function(
                      "value",
                      "field",
                      "parent",
                      "errors",
                      "context",
                      s.source
                    );
                    (t.fn[e.index] = n),
                      o.push(
                        this.wrapRequiredCheckSourceCode(
                          e,
                          i.replace("%%INDEX%%", e.index),
                          r
                        )
                      );
                  } else o.push(this.wrapRequiredCheckSourceCode(e));
                }
                return o.join("\n");
              }
              getRuleFromSchema(e) {
                if ("string" == typeof e) {
                  const t = e.split("|").map((e) => e.trim());
                  (e = { type: t[0] }),
                    t.slice(1).map((t) => {
                      const n = t.indexOf(":");
                      if (-1 !== n) {
                        const i = t.substr(0, n).trim();
                        let r = t.substr(n + 1).trim();
                        "true" === r || "false" === r
                          ? (r = "true" === r)
                          : Number.isNaN(Number(r)) || (r = Number(r)),
                          (e[i] = r);
                      } else
                        t.startsWith("no-")
                          ? (e[t.slice(3)] = !1)
                          : (e[t] = !0);
                    });
                } else if (Array.isArray(e)) {
                  if (0 == e.length) throw new Error("Invalid schema.");
                  (e = { type: "multi", rules: e }).rules
                    .map((e) => this.getRuleFromSchema(e))
                    .every((e) => 1 == e.schema.optional) && (e.optional = !0);
                }
                const t = this.aliases[e.type];
                t && (delete e.type, (e = Object.assign({}, t, e)));
                const n = this.rules[e.type];
                if (!n)
                  throw new Error(
                    "Invalid '" + e.type + "' type in validator schema."
                  );
                return {
                  messages: Object.assign({}, this.messages, e.messages),
                  schema: e,
                  ruleFunction: n,
                  customValidation: () => "",
                };
              }
              makeError({
                type: e,
                field: t,
                expected: n,
                actual: i,
                messages: r,
              }) {
                const o = { type: `"${e}"`, message: `"${r[e]}"` };
                return (
                  (o.field = t ? `"${t}"` : "field"),
                  n && (o.expected = n),
                  i && (o.actual = i),
                  `errors.push({ ${Object.keys(o)
                    .map((e) => `${e}: ${o[e]}`)
                    .join(", ")} });`
                );
              }
              add(e, t) {
                this.rules[e] = t;
              }
              alias(e, t) {
                if (this.rules[e])
                  throw new Error("Alias name must not be a rule name");
                this.aliases[e] = t;
              }
            })({
              messages: {
                color:
                  "The '{field}' field must be an a valid color! Actual: {actual}",
                measurement:
                  "The '{field}' must be a measurement with specs that are not met. Please check schema definition. Actual: {actual}",
              },
            });
            return (
              e.add("measurement", function (e, t, n) {
                var i = e.schema,
                  r = e.messages,
                  o = new RegExp(
                    "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(" +
                      i.units.join("|") +
                      ")$",
                    "gi"
                  ),
                  s = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
                  a = i.units.join(", ");
                return {
                  source: "\n        if(typeof value !== 'string' && !(value instanceof String)){\n          "
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n          return ;\n        }\n        if(!value.match("
                    )
                    .concat(o, ")){\n          ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n        } else {\n          var numberPart = value.match("
                    )
                    .concat(s, ")[0];\n          if(")
                    .concat(
                      Object.prototype.hasOwnProperty.call(i, "min"),
                      "){\n            if("
                    )
                    .concat(i.min, " > numberPart){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n            }\n          }\n          if("
                    )
                    .concat(
                      Object.prototype.hasOwnProperty.call(i, "max"),
                      "){\n            if("
                    )
                    .concat(i.max, " < numberPart){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n            }\n          }\n           if("
                    )
                    .concat(
                      Object.prototype.hasOwnProperty.call(i, "integer"),
                      "){\n            if(!numberPart.match("
                    )
                    .concat(ve, ")){\n              ")
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        units: a,
                        messages: r,
                      }),
                      "\n            }\n          }\n        }\n        return value;\n      "
                    ),
                };
              }),
              e.add("html", function (e, t, n) {
                e.schema;
                var i = e.messages;
                return {
                  source: "\n        if(value === null){\n          ".concat(
                    this.makeError({
                      type: "html",
                      actual: "value",
                      messages: i,
                    }),
                    "\n        } else {\n          return value;\n        }\n      "
                  ),
                };
              }),
              e.add("css", function (e, t, n) {
                e.schema;
                var i = e.messages;
                return {
                  source: "\n        if(value === null){\n          ".concat(
                    this.makeError({
                      type: "css",
                      actual: "value",
                      messages: i,
                    }),
                    "\n        } else {\n          return value;\n        }\n      "
                  ),
                };
              }),
              e.add("color", function (e, t, n) {
                e.schema;
                var i = e.messages;
                return {
                  source: "\n        if(typeof value !== 'string' && !(value instanceof String)){\n          "
                    .concat(
                      this.makeError({
                        type: "measurement",
                        actual: "value",
                        messages: i,
                      }),
                      "\n          return ;\n        }\n        if(!value.match("
                    )
                    .concat(
                      me,
                      ') && [\n            "aliceblue",\n            "antiquewhite",\n            "aqua",\n            "aquamarine",\n            "azure",\n            "beige",\n            "bisque",\n            "black",\n            "blanchedalmond",\n            "blue",\n            "blueviolet",\n            "brown",\n            "burlywood",\n            "cadetblue",\n            "chartreuse",\n            "chocolate",\n            "coral",\n            "cornflowerblue",\n            "cornsilk",\n            "crimson",\n            "cyan",\n            "darkblue",\n            "darkcyan",\n            "darkgoldenrod",\n            "darkgray",\n            "darkgrey",\n            "darkgreen",\n            "darkkhaki",\n            "darkmagenta",\n            "darkolivegreen",\n            "darkorange",\n            "darkorchid",\n            "darkred",\n            "darksalmon",\n            "darkseagreen",\n            "darkslateblue",\n            "darkslategray",\n            "darkslategrey",\n            "darkturquoise",\n            "darkviolet",\n            "deeppink",\n            "deepskyblue",\n            "dimgray",\n            "dimgrey",\n            "dodgerblue",\n            "firebrick",\n            "floralwhite",\n            "forestgreen",\n            "fuchsia",\n            "gainsboro",\n            "ghostwhite",\n            "gold",\n            "goldenrod",\n            "gray",\n            "grey",\n            "green",\n            "greenyellow",\n            "honeydew",\n            "hotpink",\n            "indianred",\n            "indigo",\n            "ivory",\n            "khaki",\n            "lavender",\n            "lavenderblush",\n            "lawngreen",\n            "lemonchiffon",\n            "lightblue",\n            "lightcoral",\n            "lightcyan",\n            "lightgoldenrodyellow",\n            "lightgray",\n            "lightgrey",\n            "lightgreen",\n            "lightpink",\n            "lightsalmon",\n            "lightseagreen",\n            "lightskyblue",\n            "lightslategray",\n            "lightslategrey",\n            "lightsteelblue",\n            "lightyellow",\n            "lime",\n            "limegreen",\n            "linen",\n            "magenta",\n            "maroon",\n            "mediumaquamarine",\n            "mediumblue",\n            "mediumorchid",\n            "mediumpurple",\n            "mediumseagreen",\n            "mediumslateblue",\n            "mediumspringgreen",\n            "mediumturquoise",\n            "mediumvioletred",\n            "midnightblue",\n            "mintcream",\n            "mistyrose",\n            "moccasin",\n            "navajowhite",\n            "navy",\n            "oldlace",\n            "olive",\n            "olivedrab",\n            "orange",\n            "orangered",\n            "orchid",\n            "palegoldenrod",\n            "palegreen",\n            "paleturquoise",\n            "palevioletred",\n            "papayawhip",\n            "peachpuff",\n            "peru",\n            "pink",\n            "plum",\n            "powderblue",\n            "purple",\n            "rebeccapurple",\n            "red",\n            "rosybrown",\n            "royalblue",\n            "saddlebrown",\n            "salmon",\n            "sandybrown",\n            "seagreen",\n            "seashell",\n            "sienna",\n            "silver",\n            "skyblue",\n            "slateblue",\n            "slategray",\n            "slategrey",\n            "snow",\n            "springgreen",\n            "steelblue",\n            "tan",\n            "teal",\n            "thistle",\n            "tomato",\n            "turquoise",\n            "violet",\n            "wheat",\n            "white",\n            "whitesmoke",\n            "yellow",\n            "yellowgreen",\n          ].indexOf(value.toLowerCase()) < 0){\n          '
                    )
                    .concat(
                      this.makeError({
                        type: "color",
                        actual: "value",
                        messages: i,
                      }),
                      "\n        }\n        return value;\n      "
                    ),
                };
              }),
              e
            );
          },
          ye = [
            { key: "info", style: "color: #666;", level: 5 },
            {
              key: "notice",
              style:
                "background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",
              level: 4,
            },
            {
              key: "warning",
              style: "color: black; background: orange;",
              level: 2,
            },
            { key: "error", style: "color: black; background: red;", level: 1 },
          ];
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        var be = new window.AudioContext();
        function xe(e) {
          return "number" == typeof e && isFinite(e);
        }
        function ke(e) {
          return "string" == typeof e || e instanceof String;
        }
        function we(e) {
          return "object" === n(e);
        }
        function _e(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        function Ce(e) {
          if (null === e && void 0 === e)
            return { result: !0, analysis: { width: null, height: null } };
          var t = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
          if (!we(e))
            return {
              result: !1,
              errors: [
                'originalDims should be an object containing the "width" and "height" keys',
              ],
            };
          if (
            !Object.prototype.hasOwnProperty.call(e, "width") ||
            !Object.prototype.hasOwnProperty.call(e, "height")
          )
            return {
              result: !1,
              errors: [
                'originalDims should be an object containing both the "width" and "height" keys',
              ],
            };
          if (!ke(e.width))
            return {
              result: !1,
              errors: [
                "originalDims.width should be defined either on px or %.",
              ],
            };
          if (!ke(e.height))
            return {
              result: !1,
              errors: [
                "originalDims.height should be defined either on px or %.",
              ],
            };
          var n = e.width.match(t)[0],
            i = e.width.substring(n.length);
          if (!xe(Number(n)) || ("%" !== i && "px" !== i))
            return {
              result: !1,
              errors: [
                "originalDims.width should be defined either on px or %.",
              ],
            };
          var r = e.height.match(t)[0],
            o = e.height.substring(r.length);
          return !xe(Number(r)) || ("%" != o && "px" != o)
            ? {
                result: !1,
                errors: [
                  "originalDims.heigth should be defined either on px or %.",
                ],
              }
            : { result: !0, analysis: Ie(e) };
        }
        function Ie(e) {
          var t = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
            n = null,
            i = null;
          if (we(e) && null != e) {
            if (
              Object.prototype.hasOwnProperty.call(e, "width") &&
              ke(e.width)
            ) {
              var r = e.width.match(t)[0],
                o = e.width.substring(r.length);
              n =
                !xe(Number(r)) || ("%" !== o && "px" !== o)
                  ? null
                  : { number: Number(r), unit: o };
            }
            if (
              Object.prototype.hasOwnProperty.call(e, "height") &&
              ke(e.height)
            ) {
              var s = e.height.match(t)[0],
                a = e.height.substring(s.length);
              i =
                !xe(Number(s)) || ("%" != a && "px" != a)
                  ? null
                  : { number: Number(s), unit: a };
            }
          }
          return { width: n, height: i };
        }
        function Oe(e, t) {
          return Math.round(e / t) * t;
        }
        function Ee(e) {
          var t = e.split("___");
          return { mcid: t[0], attribute: t[1] };
        }
        function Pe() {
          return Math.floor(65536 * (1 + Math.random()))
            .toString(16)
            .substring(1);
        }
        function je() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = e ? "_" : "-";
          return Pe() + Pe() + t + Pe() + t + Pe();
        }
        function Me(e, t) {
          return new Function("return `".concat(e, "`;")).call(t);
        }
        function Se(e, t) {
          return "".concat(e).concat("___").concat(t);
        }
        var Be = (function () {
            function e(t) {
              i(this, e);
              var n = 1;
              t &&
                Object.prototype.hasOwnProperty.call(t, "logLevel") &&
                (n = t.logLevel);
              for (var r = 0; r < ye.length; r++) {
                var o = ye[r];
                n >= o.level
                  ? (this[o.key] = window.console.log.bind(
                      window.console,
                      "MotorCortex - ".concat(o.key, ": ")
                    ))
                  : (this[o.key] = function () {});
              }
              this.log =
                n >= 3
                  ? window.console.log.bind(window.console, "MotorCortex - ")
                  : function () {};
            }
            return (
              o(e, [
                {
                  key: "validateProps",
                  value: function (e, t, n) {
                    var i = ge().validate(e, t);
                    if (i.length > 0) {
                      for (
                        var r = "Error on plugin's \""
                            .concat(n.plugin_npm_name, '" "')
                            .concat(
                              n.ClassName,
                              '" instantiation. Errors (op props):'
                            ),
                          o = 0;
                        o < i.length;
                        o++
                      )
                        r += "\n - "
                          .concat(i[o].message, ". ")
                          .concat(i[o].actual, " provided");
                      return console.error(r), { result: !1, errors: i };
                    }
                    return { result: !0 };
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (e, t) {
                    return e.rootElement.querySelectorAll(
                      "[".concat("data-motorcortex2-id", '="').concat(t, '"]')
                    )[0];
                  },
                },
                {
                  key: "buildInitialValuesValidationRules",
                  value: function (e) {
                    var t = JSON.parse(JSON.stringify(e));
                    return (
                      (function e(t) {
                        if (
                          (("string" == typeof t || t instanceof String) &&
                            (t = { type: t }),
                          (t.optional = !0),
                          "object" === t.type)
                        )
                          for (var n in t.props) e(t.props[n]);
                      })(t),
                      t
                    );
                  },
                },
                {
                  key: "systoleDiastoleProjections",
                  value: function (e, t, n) {
                    for (var i = [], r = 0; r < e.length; r++) {
                      var o = e[r],
                        s = o.parentMillisecond - n;
                      1 !== t &&
                        i.push({
                          id: o.incident.id,
                          start: s * t + n,
                          end: s * t + n + o.incident.duration * t,
                          startDelta: s * t + n - o.millisecond,
                        });
                    }
                    return i;
                  },
                },
              ]),
              e
            );
          })(),
          Ae = new Be();
        function De(e) {
          return e.result
            ? { result: !0, execute: e.execute }
            : { result: !1, errors: e.errors };
        }
        var Te = (function () {
          function e(t) {
            i(this, e),
              (this.runTimeInfo = t.runTimeInfo),
              (this.context = t.context),
              this.onInitialise(),
              (this.getIncidentById = t.getIncidentById);
          }
          return (
            o(
              e,
              [
                { key: "onInitialise", value: function () {} },
                {
                  key: "_resize",
                  value: function () {
                    Ae.log("Please overwite the _resize method of the Channel");
                  },
                },
                {
                  key: "addIncidents",
                  value: function (e) {
                    return De(this.checkAddition(e));
                  },
                },
                {
                  key: "editIncidents",
                  value: function (e, t) {
                    return De(this.checkEdit(e, t));
                  },
                },
                {
                  key: "removeIncidents",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return De(this.checkDelete(e, t));
                  },
                },
                { key: "recalcScratchValues", value: function (e) {} },
                {
                  key: "checkAddition",
                  value: function (e) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkEdit",
                  value: function (e, t) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkDelete",
                  value: function (e) {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "checkResizedIncidents",
                  value: function (e) {
                    return { result: !0, execute: function () {} };
                  },
                },
                { key: "moveTo", value: function (e, t, n) {} },
              ],
              [
                {
                  key: "type",
                  get: function () {
                    return "plain";
                  },
                },
              ]
            ),
            e
          );
        })();
        function Le(e) {
          e.descriptor.value = function (e) {
            this.duration = this.duration * e;
          };
        }
        var Ve = "up",
          ze = "down",
          Ne = "native.tree.bypass",
          $e = _(null, function (e) {
            return {
              F: function t() {
                var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                i(this, t),
                  e(this),
                  (this.parentNode = null),
                  (this.isNode = !1),
                  Object.prototype.hasOwnProperty.call(n, "id")
                    ? (this.id = n.id)
                    : (this.id = je()),
                  (this.props = n);
              },
              d: [
                {
                  kind: "get",
                  key: "delay",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "delay"
                    )
                      ? this.props.delay
                      : 0;
                  },
                },
                {
                  kind: "set",
                  key: "delay",
                  value: function (e) {
                    0 !== e && (this.props.delay = e);
                  },
                },
                {
                  kind: "get",
                  key: "hiatus",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "hiatus"
                    )
                      ? this.props.hiatus
                      : 0;
                  },
                },
                {
                  kind: "set",
                  key: "hiatus",
                  value: function (e) {
                    0 !== e && (this.props.hiatus = e);
                  },
                },
                {
                  kind: "get",
                  key: "repeats",
                  value: function () {
                    return Object.prototype.hasOwnProperty.call(
                      this.props,
                      "repeats"
                    )
                      ? this.props.repeats
                      : 1;
                  },
                },
                {
                  kind: "set",
                  key: "repeats",
                  value: function (e) {
                    this.props.repeats = e;
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return (
                      this.repeats *
                      (this.delay + this.props.duration + this.hiatus)
                    );
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    var t = e / this.duration;
                    (this.props.duration *= t),
                      (this.hiatus *= t),
                      (this.delay *= t);
                  },
                },
                {
                  kind: "method",
                  key: "setNewDuration",
                  value: function (e) {
                    (this.duration = e),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: Ve,
                      });
                  },
                },
                {
                  kind: "method",
                  decorators: [Le],
                  key: "systoleDiastole",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "hasParent",
                  value: function () {
                    return null !== this.parentNode;
                  },
                },
                {
                  kind: "method",
                  key: "attachToNode",
                  value: function (e) {
                    this.parentNode = e;
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    this.parentNode = null;
                  },
                },
                {
                  kind: "method",
                  key: "putMessageOnPipe",
                  value: function (e, t, n) {
                    var i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    if (
                      (Object.prototype.hasOwnProperty.call(i, "direction") ||
                        (i.direction = ze),
                      i.direction !== ze ||
                        Object.prototype.hasOwnProperty.call(
                          i,
                          "positionDelta"
                        ) ||
                        (i.positionDelta = 0),
                      i.selfExecute)
                    ) {
                      var r = "handle".concat(_e(e)),
                        o = "function" == typeof this[r];
                      if (o) {
                        var s = this[r](n, t);
                        if (s !== Ne) {
                          var a = { response: s, responder: this };
                          return i.direction === Ve
                            ? a
                            : [l({}, a, { positionDelta: i.positionDelta })];
                        }
                      }
                    }
                    return i.direction === Ve
                      ? this.hasParent
                        ? this.parentNode.putMessageOnPipe(e, t, n, {
                            selfExecute: !0,
                            direction: Ve,
                          })
                        : { response: !1, responder: null }
                      : [];
                  },
                },
                {
                  kind: "method",
                  key: "bypass",
                  value: function () {
                    return Ne;
                  },
                },
                {
                  kind: "get",
                  key: "positionOnPyramidion",
                  value: function () {
                    return this.getPositionOnPyramidion();
                  },
                },
                {
                  kind: "method",
                  key: "getPositionOnPyramidion",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                    if (this.hasParent) {
                      var t = this.putMessageOnPipe(
                        "getPositionOnPyramidion",
                        { delta: e, id: this.id },
                        "Parent",
                        { selfExecute: !1, direction: Ve }
                      );
                      return t.response;
                    }
                    return e;
                  },
                },
              ],
            };
          }),
          Re = "The Leaf with the requested id couldn't be found on the Tree",
          He = _(
            null,
            function (e, t) {
              var n = (function (t) {
                c(r, t);
                var n = f(r);
                function r() {
                  var t,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return (
                    i(this, r),
                    (t = n.call(this, o)),
                    e(p(t)),
                    (t.isNode = !0),
                    (t.children = {}),
                    (t.calculatedDuration = 0),
                    t
                  );
                }
                return r;
              })(t);
              return {
                F: n,
                d: [
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return this.calculatedDuration;
                    },
                  },
                  {
                    kind: "set",
                    key: "duration",
                    value: function (e) {
                      var t = e / this.duration;
                      for (var n in (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = e),
                      (this.calculatedDuration = e),
                      this.children)) {
                        var i = this.children[n];
                        this.editPosition(i.id, i.position * t, !0),
                          i.leaf.systoleDiastole(t);
                      }
                    },
                  },
                  {
                    kind: "method",
                    key: "setNewDuration",
                    value: function (e) {
                      (this.duration = e),
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: Ve,
                        });
                    },
                  },
                  {
                    kind: "method",
                    key: "_calculateDuration",
                    value: function () {
                      var e = 0;
                      for (var t in this.children) {
                        var n = this.children[t];
                        n.position + n.leaf.duration > e &&
                          (e = n.position + n.leaf.duration);
                      }
                      return (
                        e !== this.calculatedDuration &&
                        (this.props &&
                          Object.prototype.hasOwnProperty.call(
                            this.props,
                            "duration"
                          ) &&
                          (this.props.duration = e),
                        (this.calculatedDuration = e),
                        !0)
                      );
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Le],
                    key: "systoleDiastole",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "handleRecalcDuration",
                    value: function (e, t) {
                      return (
                        !this._calculateDuration() ||
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !1,
                          direction: Ve,
                        })
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "getLeafById",
                    value: function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, e)
                      )
                        return this.children[e].leaf;
                      if (t) return null;
                      for (var n in this.children) {
                        var i = this.children[n].leaf;
                        if (i.isNode) {
                          var r = i.getLeafById(e);
                          if (null != r) return r;
                        }
                      }
                      return null;
                    },
                  },
                  {
                    kind: "method",
                    key: "getLeafPosition",
                    value: function (e) {
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, e)
                      )
                        return this.children[e].position;
                      var t = this.putMessageOnPipe(
                        "getLeafPosition",
                        { id: e },
                        "Groups",
                        { selfExecute: !1, direction: ze }
                      );
                      return t.length > 0
                        ? t[0].positionDelta + t[0].response
                        : void 0;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleGetLeafPosition",
                    value: function (e, t) {
                      return this.getLeafPosition(t.id);
                    },
                  },
                  {
                    kind: "method",
                    key: "checkAddition",
                    value: function (e, t) {
                      return e.hasParent
                        ? {
                            result: !1,
                            reason:
                              "Leaf has already been attached to another Node",
                          }
                        : t < 0
                        ? {
                            result: !1,
                            reason:
                              "Negative positioning of childs on nodes is not allowed",
                          }
                        : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "addChild",
                    value: function (e, t) {
                      return e.hasParent
                        ? {
                            result: !1,
                            reason:
                              "Leaf has already been attached to another Node",
                          }
                        : ((this.children[e.id] = {
                            id: e.id,
                            leaf: e,
                            position: t,
                          }),
                          e.attachToNode(this),
                          this.putMessageOnPipe(
                            "recalcDuration",
                            {},
                            "Groups",
                            { selfExecute: !0, direction: Ve }
                          ),
                          { result: !0 });
                    },
                  },
                  {
                    kind: "method",
                    key: "checkRemoveChild",
                    value: function (e) {
                      return Object.prototype.hasOwnProperty.call(
                        this.children,
                        e
                      )
                        ? { result: !0 }
                        : { result: !1, reason: Re };
                    },
                  },
                  {
                    kind: "method",
                    key: "removeChild",
                    value: function (e) {
                      return (
                        this.children[e].leaf.detachFromParent(),
                        delete this.children[e],
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: Ve,
                        }),
                        { result: !0 }
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "checkEditPosition",
                    value: function (e, t) {
                      return t < 0
                        ? {
                            result: !1,
                            reason:
                              "Negative positioning of childs on nodes is not allowed",
                          }
                        : Object.prototype.hasOwnProperty.call(this.children, e)
                        ? { result: !0 }
                        : { result: !1, reason: Re };
                    },
                  },
                  {
                    kind: "method",
                    key: "editPosition",
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (
                        Object.prototype.hasOwnProperty.call(this.children, e)
                      )
                        return (
                          (this.children[e].position = t),
                          n ||
                            this.putMessageOnPipe(
                              "recalcDuration",
                              {},
                              "Groups",
                              { selfExecute: !0, direction: Ve }
                            ),
                          { result: !0 }
                        );
                    },
                  },
                  {
                    kind: "method",
                    key: "putMessageOnPipe",
                    value: function (e, t, i) {
                      var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : {};
                      if (
                        (Object.prototype.hasOwnProperty.call(r, "direction") ||
                          (r.direction = ze),
                        r.direction !== ze ||
                          Object.prototype.hasOwnProperty.call(
                            r,
                            "positionDelta"
                          ) ||
                          (r.positionDelta = 0),
                        r.direction === Ve)
                      )
                        return v(u(n.prototype), "putMessageOnPipe", this).call(
                          this,
                          e,
                          t,
                          i,
                          r
                        );
                      var o = v(u(n.prototype), "putMessageOnPipe", this).call(
                        this,
                        e,
                        t,
                        i,
                        r
                      );
                      if (o.length > 0) return o;
                      for (var s in this.children) {
                        var a = this.children[s].leaf,
                          c = l({}, r, {
                            selfExecute: !0,
                            positionDelta:
                              r.positionDelta + this.children[s].position,
                          });
                        o = o.concat(a.putMessageOnPipe(e, t, i, c));
                      }
                      return o;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleGetPositionOnPyramidion",
                    value: function (e, t) {
                      var n = t.delta + this.getLeafPosition(t.id);
                      return this.getPositionOnPyramidion(n);
                    },
                  },
                ],
              };
            },
            $e
          );
        function Fe(e) {
          e.descriptor.value = function (e) {
            void 0 === this.blockID && (this.blockID = je()),
              this.DescriptiveIncident.putMessageOnPipe(
                "setBlock",
                {
                  id: this.blockID,
                  description: e,
                  incidentId: this.DescriptiveIncident.id,
                  realIncidentId: this.id,
                },
                "rootClip",
                { selfExecute: !0, direction: Ve }
              );
          };
        }
        function Ge(e) {
          e.descriptor.value = function (e) {
            return this.id === e ? this : this.bypass();
          };
        }
        function We(e) {
          e.descriptor.value = function () {
            this.DescriptiveIncident.putMessageOnPipe(
              "unBlock",
              { id: this.blockID },
              "rootClip",
              { selfExecute: !0, direction: Ve }
            );
          };
        }
        var Ue = _(
            null,
            function (e, t) {
              var n = (function (t) {
                c(r, t);
                var n = f(r);
                function r(t, o) {
                  var s;
                  return (
                    i(this, r),
                    (s = n.call(this, o)),
                    e(p(s)),
                    (s.mc_plugin_npm_name = "motor-cortex-js"),
                    (s.plugin_channel_class = Te),
                    (s.hasIncidents = !0),
                    s.onGroupInitialise(),
                    (s.calculatedDuration = 0),
                    s
                  );
                }
                return r;
              })(t);
              return {
                F: n,
                d: [
                  {
                    kind: "method",
                    key: "onGroupInitialise",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "handleAddIncident",
                    value: function (e, t) {
                      if (this.id === e) {
                        var n = (0, t.incidentFromDescription)(
                          t.incident,
                          t.contextData,
                          t.audio
                        );
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleMoveIncident",
                    value: function (e, t) {
                      if (this.id === e) {
                        var n = this.getLeafById(t.incidentId, !0);
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleRemoveIncident",
                    value: function (e, t) {
                      if (this.id === e) {
                        var n = this.getLeafById(t.incidentId, !0);
                        return null === n ? this.bypass() : n;
                      }
                      return this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Ge],
                    key: "handleResize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "removeChild",
                    value: function (e) {
                      this.children[e].leaf.lastWish(),
                        v(u(n.prototype), "removeChild", this).call(this, e);
                    },
                  },
                  {
                    kind: "method",
                    key: "getIncidentsByChannel",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = {};
                      for (var i in ((n["motor-cortex-js"] = [
                        {
                          millisecond: e,
                          parentMillisecond: t,
                          incident: this,
                          id: this.id,
                        },
                      ]),
                      this.children)) {
                        var r = this.children[i],
                          o = r.leaf.getIncidentsByChannel(e + r.position, e);
                        for (var s in o)
                          Object.prototype.hasOwnProperty.call(n, s)
                            ? (n[s] = n[s].concat(o[s]))
                            : (n[s] = o[s]);
                      }
                      return n;
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var e in this.children)
                        this.children[e].leaf.lastWish();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [Fe],
                    key: "setBlock",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [We],
                    key: "unblock",
                    value: function () {},
                  },
                ],
              };
            },
            He
          ),
          qe = ce(function (e, t) {
            var n = "[object Arguments]",
              i = "[object Map]",
              r = "[object Object]",
              o = "[object Set]",
              s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              a = /^\w*$/,
              l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /\\(\\)?/g,
              u = /^\[object .+?Constructor\]$/,
              d = /^(?:0|[1-9]\d*)$/,
              p = {};
            (p["[object Float32Array]"] = p["[object Float64Array]"] = p[
              "[object Int8Array]"
            ] = p["[object Int16Array]"] = p["[object Int32Array]"] = p[
              "[object Uint8Array]"
            ] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p[
              "[object Uint32Array]"
            ] = !0),
              (p[n] = p["[object Array]"] = p["[object ArrayBuffer]"] = p[
                "[object Boolean]"
              ] = p["[object DataView]"] = p["[object Date]"] = p[
                "[object Error]"
              ] = p["[object Function]"] = p[i] = p["[object Number]"] = p[
                r
              ] = p["[object RegExp]"] = p[o] = p["[object String]"] = p[
                "[object WeakMap]"
              ] = !1);
            var h = "object" == typeof ae && ae && ae.Object === Object && ae,
              f =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              m = h || f || Function("return this")(),
              v = t && !t.nodeType && t,
              g = v && e && !e.nodeType && e,
              y = g && g.exports === v,
              b = y && h.process,
              x = (function () {
                try {
                  return b && b.binding && b.binding("util");
                } catch (e) {}
              })(),
              k = x && x.isTypedArray;
            function w(e, t) {
              for (
                var n = -1, i = null == e ? 0 : e.length, r = 0, o = [];
                ++n < i;

              ) {
                var s = e[n];
                t(s, n, e) && (o[r++] = s);
              }
              return o;
            }
            function _(e, t) {
              for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            function C(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, i) {
                  n[++t] = [i, e];
                }),
                n
              );
            }
            function I(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            var O,
              E,
              P,
              j = Array.prototype,
              M = Function.prototype,
              S = Object.prototype,
              B = m["__core-js_shared__"],
              A = M.toString,
              D = S.hasOwnProperty,
              T = (O = /[^.]+$/.exec((B && B.keys && B.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + O
                : "",
              L = S.toString,
              V = RegExp(
                "^" +
                  A.call(D)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              z = y ? m.Buffer : void 0,
              N = m.Symbol,
              $ = m.Uint8Array,
              R = S.propertyIsEnumerable,
              H = j.splice,
              F = N ? N.toStringTag : void 0,
              G = Object.getOwnPropertySymbols,
              W = z ? z.isBuffer : void 0,
              U =
                ((E = Object.keys),
                (P = Object),
                function (e) {
                  return E(P(e));
                }),
              q = Pe(m, "DataView"),
              J = Pe(m, "Map"),
              K = Pe(m, "Promise"),
              X = Pe(m, "Set"),
              Q = Pe(m, "WeakMap"),
              Z = Pe(Object, "create"),
              Y = Ve(q),
              ee = Ve(J),
              te = Ve(K),
              ne = Ve(X),
              ie = Ve(Q),
              re = N ? N.prototype : void 0,
              oe = re ? re.valueOf : void 0,
              se = re ? re.toString : void 0;
            function le(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function ce(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function ue(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function de(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new ue(); ++t < n; ) this.add(e[t]);
            }
            function pe(e) {
              var t = (this.__data__ = new ce(e));
              this.size = t.size;
            }
            function he(e, t) {
              for (var n = e.length; n--; ) if (Ne(e[n][0], t)) return n;
              return -1;
            }
            (le.prototype.clear = function () {
              (this.__data__ = Z ? Z(null) : {}), (this.size = 0);
            }),
              (le.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (le.prototype.get = function (e) {
                var t = this.__data__;
                if (Z) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return D.call(t, e) ? t[e] : void 0;
              }),
              (le.prototype.has = function (e) {
                var t = this.__data__;
                return Z ? void 0 !== t[e] : D.call(t, e);
              }),
              (le.prototype.set = function (e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = Z && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              }),
              (ce.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (ce.prototype.delete = function (e) {
                var t = this.__data__,
                  n = he(t, e);
                return !(
                  n < 0 ||
                  (n == t.length - 1 ? t.pop() : H.call(t, n, 1),
                  --this.size,
                  0)
                );
              }),
              (ce.prototype.get = function (e) {
                var t = this.__data__,
                  n = he(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (ce.prototype.has = function (e) {
                return he(this.__data__, e) > -1;
              }),
              (ce.prototype.set = function (e, t) {
                var n = this.__data__,
                  i = he(n, e);
                return (
                  i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this
                );
              }),
              (ue.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new le(),
                    map: new (J || ce)(),
                    string: new le(),
                  });
              }),
              (ue.prototype.delete = function (e) {
                var t = Ee(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (ue.prototype.get = function (e) {
                return Ee(this, e).get(e);
              }),
              (ue.prototype.has = function (e) {
                return Ee(this, e).has(e);
              }),
              (ue.prototype.set = function (e, t) {
                var n = Ee(this, e),
                  i = n.size;
                return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
              }),
              (de.prototype.add = de.prototype.push = function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
              (de.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (pe.prototype.clear = function () {
                (this.__data__ = new ce()), (this.size = 0);
              }),
              (pe.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t.delete(e);
                return (this.size = t.size), n;
              }),
              (pe.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (pe.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (pe.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof ce) {
                  var i = n.__data__;
                  if (!J || i.length < 199)
                    return i.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new ue(i);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            var fe,
              me =
                ((fe = function (e, t) {
                  return e && ge(e, t, Xe);
                }),
                function (e, t) {
                  if (null == e) return e;
                  if (!He(e)) return fe(e, t);
                  for (
                    var n = e.length, i = -1, r = Object(e);
                    ++i < n && !1 !== t(r[i], i, r);

                  );
                  return e;
                });
            function ve(e, t) {
              var n = [];
              return (
                me(e, function (e, i, r) {
                  t(e, i, r) && n.push(e);
                }),
                n
              );
            }
            var ge = function (e, t, n) {
              for (var i = -1, r = Object(e), o = n(e), s = o.length; s--; ) {
                var a = o[++i];
                if (!1 === t(r[a], a, r)) break;
              }
              return e;
            };
            function ye(e, t) {
              for (var n = 0, i = (t = Ce(t, e)).length; null != e && n < i; )
                e = e[Le(t[n++])];
              return n && n == i ? e : void 0;
            }
            function be(e) {
              return null == e
                ? void 0 === e
                  ? "[object Undefined]"
                  : "[object Null]"
                : F && F in Object(e)
                ? (function (e) {
                    var t = D.call(e, F),
                      n = e[F];
                    try {
                      e[F] = void 0;
                      var i = !0;
                    } catch (e) {}
                    var r = L.call(e);
                    return i && (t ? (e[F] = n) : delete e[F]), r;
                  })(e)
                : (function (e) {
                    return L.call(e);
                  })(e);
            }
            function xe(e, t) {
              return null != e && t in Object(e);
            }
            function ke(e) {
              return qe(e) && be(e) == n;
            }
            function we(e, t, s, a, l) {
              return (
                e === t ||
                (null == e || null == t || (!qe(e) && !qe(t))
                  ? e != e && t != t
                  : (function (e, t, s, a, l, c) {
                      var u = Re(e),
                        d = Re(t),
                        p = u ? "[object Array]" : Me(e),
                        h = d ? "[object Array]" : Me(t),
                        f = (p = p == n ? r : p) == r,
                        m = (h = h == n ? r : h) == r,
                        v = p == h;
                      if (v && Fe(e)) {
                        if (!Fe(t)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (v && !f)
                        return (
                          c || (c = new pe()),
                          u || Ke(e)
                            ? Ie(e, t, s, a, l, c)
                            : (function (e, t, n, r, s, a, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !a(new $(e), new $(t))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Ne(+e, +t);
                                  case "[object Error]":
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return e == t + "";
                                  case i:
                                    var c = C;
                                  case o:
                                    var u = 1 & r;
                                    if ((c || (c = I), e.size != t.size && !u))
                                      return !1;
                                    var d = l.get(e);
                                    if (d) return d == t;
                                    (r |= 2), l.set(e, t);
                                    var p = Ie(c(e), c(t), r, s, a, l);
                                    return l.delete(e), p;
                                  case "[object Symbol]":
                                    if (oe) return oe.call(e) == oe.call(t);
                                }
                                return !1;
                              })(e, t, p, s, a, l, c)
                        );
                      if (!(1 & s)) {
                        var g = f && D.call(e, "__wrapped__"),
                          y = m && D.call(t, "__wrapped__");
                        if (g || y) {
                          var b = g ? e.value() : e,
                            x = y ? t.value() : t;
                          return c || (c = new pe()), l(b, x, s, a, c);
                        }
                      }
                      return (
                        !!v &&
                        (c || (c = new pe()),
                        (function (e, t, n, i, r, o) {
                          var s = 1 & n,
                            a = Oe(e),
                            l = a.length;
                          if (l != Oe(t).length && !s) return !1;
                          for (var c = l; c--; ) {
                            var u = a[c];
                            if (!(s ? u in t : D.call(t, u))) return !1;
                          }
                          var d = o.get(e);
                          if (d && o.get(t)) return d == t;
                          var p = !0;
                          o.set(e, t), o.set(t, e);
                          for (var h = s; ++c < l; ) {
                            var f = e[(u = a[c])],
                              m = t[u];
                            if (i)
                              var v = s
                                ? i(m, f, u, t, e, o)
                                : i(f, m, u, e, t, o);
                            if (
                              !(void 0 === v ? f === m || r(f, m, n, i, o) : v)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = "constructor" == u);
                          }
                          if (p && !h) {
                            var g = e.constructor,
                              y = t.constructor;
                            g == y ||
                              !("constructor" in e) ||
                              !("constructor" in t) ||
                              ("function" == typeof g &&
                                g instanceof g &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (p = !1);
                          }
                          return o.delete(e), o.delete(t), p;
                        })(e, t, s, a, l, c))
                      );
                    })(e, t, s, a, we, l))
              );
            }
            function _e(e) {
              if ("string" == typeof e) return e;
              if (Re(e))
                return (
                  (function (e, t) {
                    for (
                      var n = -1, i = null == e ? 0 : e.length, r = Array(i);
                      ++n < i;

                    )
                      r[n] = t(e[n], n, e);
                    return r;
                  })(e, _e) + ""
                );
              if (Je(e)) return se ? se.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function Ce(e, t) {
              return Re(e)
                ? e
                : Be(e, t)
                ? [e]
                : Te(
                    (function (e) {
                      return null == e ? "" : _e(e);
                    })(e)
                  );
            }
            function Ie(e, t, n, i, r, o) {
              var s = 1 & n,
                a = e.length,
                l = t.length;
              if (a != l && !(s && l > a)) return !1;
              var c = o.get(e);
              if (c && o.get(t)) return c == t;
              var u = -1,
                d = !0,
                p = 2 & n ? new de() : void 0;
              for (o.set(e, t), o.set(t, e); ++u < a; ) {
                var h = e[u],
                  f = t[u];
                if (i) var m = s ? i(f, h, u, t, e, o) : i(h, f, u, e, t, o);
                if (void 0 !== m) {
                  if (m) continue;
                  d = !1;
                  break;
                }
                if (p) {
                  if (
                    !_(t, function (e, t) {
                      if (((s = t), !p.has(s) && (h === e || r(h, e, n, i, o))))
                        return p.push(t);
                      var s;
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (h !== f && !r(h, f, n, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(e), o.delete(t), d;
            }
            function Oe(e) {
              return (function (e, t, n) {
                var i = t(e);
                return Re(e)
                  ? i
                  : (function (e, t) {
                      for (var n = -1, i = t.length, r = e.length; ++n < i; )
                        e[r + n] = t[n];
                      return e;
                    })(i, n(e));
              })(e, Xe, je);
            }
            function Ee(e, t) {
              var n,
                i,
                r = e.__data__;
              return (
                "string" == (i = typeof (n = t)) ||
                "number" == i ||
                "symbol" == i ||
                "boolean" == i
                  ? "__proto__" !== n
                  : null === n
              )
                ? r["string" == typeof t ? "string" : "hash"]
                : r.map;
            }
            function Pe(e, t) {
              var n = (function (e, t) {
                return null == e ? void 0 : e[t];
              })(e, t);
              return (function (e) {
                return (
                  !(
                    !Ue(e) ||
                    (function (e) {
                      return !!T && T in e;
                    })(e)
                  ) && (Ge(e) ? V : u).test(Ve(e))
                );
              })(n)
                ? n
                : void 0;
            }
            var je = G
                ? function (e) {
                    return null == e
                      ? []
                      : ((e = Object(e)),
                        w(G(e), function (t) {
                          return R.call(e, t);
                        }));
                  }
                : function () {
                    return [];
                  },
              Me = be;
            function Se(e, t) {
              var n = typeof e;
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == n || ("symbol" != n && d.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function Be(e, t) {
              if (Re(e)) return !1;
              var n = typeof e;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != e &&
                  !Je(e)
                ) ||
                a.test(e) ||
                !s.test(e) ||
                (null != t && e in Object(t))
              );
            }
            function Ae(e) {
              return e == e && !Ue(e);
            }
            function De(e, t) {
              return function (n) {
                return (
                  null != n && n[e] === t && (void 0 !== t || e in Object(n))
                );
              };
            }
            ((q && "[object DataView]" != Me(new q(new ArrayBuffer(1)))) ||
              (J && Me(new J()) != i) ||
              (K && "[object Promise]" != Me(K.resolve())) ||
              (X && Me(new X()) != o) ||
              (Q && "[object WeakMap]" != Me(new Q()))) &&
              (Me = function (e) {
                var t = be(e),
                  n = t == r ? e.constructor : void 0,
                  s = n ? Ve(n) : "";
                if (s)
                  switch (s) {
                    case Y:
                      return "[object DataView]";
                    case ee:
                      return i;
                    case te:
                      return "[object Promise]";
                    case ne:
                      return o;
                    case ie:
                      return "[object WeakMap]";
                  }
                return t;
              });
            var Te = (function (e) {
              var t = ze(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(l, function (e, n, i, r) {
                        t.push(i ? r.replace(c, "$1") : n || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === n.size && n.clear(), e;
                  }
                ),
                n = t.cache;
              return t;
            })();
            function Le(e) {
              if ("string" == typeof e || Je(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function Ve(e) {
              if (null != e) {
                try {
                  return A.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            }
            function ze(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var i = arguments,
                  r = t ? t.apply(this, i) : i[0],
                  o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = e.apply(this, i);
                return (n.cache = o.set(r, s) || o), s;
              };
              return (n.cache = new (ze.Cache || ue)()), n;
            }
            function Ne(e, t) {
              return e === t || (e != e && t != t);
            }
            ze.Cache = ue;
            var $e = ke(
                (function () {
                  return arguments;
                })()
              )
                ? ke
                : function (e) {
                    return qe(e) && D.call(e, "callee") && !R.call(e, "callee");
                  },
              Re = Array.isArray;
            function He(e) {
              return null != e && We(e.length) && !Ge(e);
            }
            var Fe =
              W ||
              function () {
                return !1;
              };
            function Ge(e) {
              if (!Ue(e)) return !1;
              var t = be(e);
              return (
                "[object Function]" == t ||
                "[object GeneratorFunction]" == t ||
                "[object AsyncFunction]" == t ||
                "[object Proxy]" == t
              );
            }
            function We(e) {
              return (
                "number" == typeof e &&
                e > -1 &&
                e % 1 == 0 &&
                e <= 9007199254740991
              );
            }
            function Ue(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
            }
            function qe(e) {
              return null != e && "object" == typeof e;
            }
            function Je(e) {
              return (
                "symbol" == typeof e || (qe(e) && "[object Symbol]" == be(e))
              );
            }
            var Ke = k
              ? (function (e) {
                  return function (t) {
                    return e(t);
                  };
                })(k)
              : function (e) {
                  return qe(e) && We(e.length) && !!p[be(e)];
                };
            function Xe(e) {
              return He(e)
                ? (function (e, t) {
                    var n = Re(e),
                      i = !n && $e(e),
                      r = !n && !i && Fe(e),
                      o = !n && !i && !r && Ke(e),
                      s = n || i || r || o,
                      a = s
                        ? (function (e, t) {
                            for (var n = -1, i = Array(e); ++n < e; )
                              i[n] = t(n);
                            return i;
                          })(e.length, String)
                        : [],
                      l = a.length;
                    for (var c in e)
                      (!t && !D.call(e, c)) ||
                        (s &&
                          ("length" == c ||
                            (r && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            Se(c, l))) ||
                        a.push(c);
                    return a;
                  })(e)
                : (function (e) {
                    if (
                      ((n = (t = e) && t.constructor),
                      t !== (("function" == typeof n && n.prototype) || S))
                    )
                      return U(e);
                    var t,
                      n,
                      i = [];
                    for (var r in Object(e))
                      D.call(e, r) && "constructor" != r && i.push(r);
                    return i;
                  })(e);
            }
            function Qe(e) {
              return e;
            }
            e.exports = function (e, t) {
              return (Re(e) ? w : ve)(
                e,
                (function (e) {
                  return "function" == typeof e
                    ? e
                    : null == e
                    ? Qe
                    : "object" == typeof e
                    ? Re(e)
                      ? (function (e, t) {
                          return Be(e) && Ae(t)
                            ? De(Le(e), t)
                            : function (n) {
                                var i = (function (e, t, n) {
                                  var i = null == e ? void 0 : ye(e, t);
                                  return void 0 === i ? void 0 : i;
                                })(n, e);
                                return void 0 === i && i === t
                                  ? (function (e, t) {
                                      return (
                                        null != e &&
                                        (function (e, t, n) {
                                          for (
                                            var i = -1,
                                              r = (t = Ce(t, e)).length,
                                              o = !1;
                                            ++i < r;

                                          ) {
                                            var s = Le(t[i]);
                                            if (!(o = null != e && n(e, s)))
                                              break;
                                            e = e[s];
                                          }
                                          return o || ++i != r
                                            ? o
                                            : !!(r =
                                                null == e ? 0 : e.length) &&
                                                We(r) &&
                                                Se(s, r) &&
                                                (Re(e) || $e(e));
                                        })(e, t, xe)
                                      );
                                    })(n, e)
                                  : we(t, i, 3);
                              };
                        })(e[0], e[1])
                      : (function (e) {
                          var t = (function (e) {
                            for (var t = Xe(e), n = t.length; n--; ) {
                              var i = t[n],
                                r = e[i];
                              t[n] = [i, r, Ae(r)];
                            }
                            return t;
                          })(e);
                          return 1 == t.length && t[0][2]
                            ? De(t[0][0], t[0][1])
                            : function (n) {
                                return (
                                  n === e ||
                                  (function (e, t, n, i) {
                                    var r = n.length,
                                      o = r;
                                    if (null == e) return !o;
                                    for (e = Object(e); r--; ) {
                                      var s = n[r];
                                      if (
                                        s[2] ? s[1] !== e[s[0]] : !(s[0] in e)
                                      )
                                        return !1;
                                    }
                                    for (; ++r < o; ) {
                                      var a = (s = n[r])[0],
                                        l = e[a],
                                        c = s[1];
                                      if (s[2]) {
                                        if (void 0 === l && !(a in e))
                                          return !1;
                                      } else {
                                        var u,
                                          d = new pe();
                                        if (
                                          !(void 0 === u
                                            ? we(c, l, 3, i, d)
                                            : u)
                                        )
                                          return !1;
                                      }
                                    }
                                    return !0;
                                  })(n, 0, t)
                                );
                              };
                        })(e)
                    : Be((t = e))
                    ? ((n = Le(t)),
                      function (e) {
                        return null == e ? void 0 : e[n];
                      })
                    : (function (e) {
                        return function (t) {
                          return ye(t, e);
                        };
                      })(t);
                  var t, n;
                })(t)
              );
            };
          }),
          Je = ce(function (e, t) {
            var n = "[object Arguments]",
              i = "[object Map]",
              r = "[object Object]",
              o = "[object Set]",
              s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              a = /^\w*$/,
              l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /\\(\\)?/g,
              u = /^\[object .+?Constructor\]$/,
              d = /^(?:0|[1-9]\d*)$/,
              p = {};
            (p["[object Float32Array]"] = p["[object Float64Array]"] = p[
              "[object Int8Array]"
            ] = p["[object Int16Array]"] = p["[object Int32Array]"] = p[
              "[object Uint8Array]"
            ] = p["[object Uint8ClampedArray]"] = p["[object Uint16Array]"] = p[
              "[object Uint32Array]"
            ] = !0),
              (p[n] = p["[object Array]"] = p["[object ArrayBuffer]"] = p[
                "[object Boolean]"
              ] = p["[object DataView]"] = p["[object Date]"] = p[
                "[object Error]"
              ] = p["[object Function]"] = p[i] = p["[object Number]"] = p[
                r
              ] = p["[object RegExp]"] = p[o] = p["[object String]"] = p[
                "[object WeakMap]"
              ] = !1);
            var h = "object" == typeof ae && ae && ae.Object === Object && ae,
              f =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              m = h || f || Function("return this")(),
              v = t && !t.nodeType && t,
              g = v && e && !e.nodeType && e,
              y = g && g.exports === v,
              b = y && h.process,
              x = (function () {
                try {
                  return b && b.binding && b.binding("util");
                } catch (e) {}
              })(),
              k = x && x.isTypedArray;
            function w(e, t, n) {
              switch (n.length) {
                case 0:
                  return e.call(t);
                case 1:
                  return e.call(t, n[0]);
                case 2:
                  return e.call(t, n[0], n[1]);
                case 3:
                  return e.call(t, n[0], n[1], n[2]);
              }
              return e.apply(t, n);
            }
            function _(e, t) {
              for (
                var n = -1, i = null == e ? 0 : e.length, r = Array(i);
                ++n < i;

              )
                r[n] = t(e[n], n, e);
              return r;
            }
            function C(e, t) {
              for (var n = -1, i = t.length, r = e.length; ++n < i; )
                e[r + n] = t[n];
              return e;
            }
            function I(e, t) {
              for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            function O(e) {
              return function (t) {
                return e(t);
              };
            }
            function E(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, i) {
                  n[++t] = [i, e];
                }),
                n
              );
            }
            function P(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            var j,
              M,
              S,
              B = Array.prototype,
              A = Function.prototype,
              D = Object.prototype,
              T = m["__core-js_shared__"],
              L = A.toString,
              V = D.hasOwnProperty,
              z = (j = /[^.]+$/.exec((T && T.keys && T.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + j
                : "",
              N = D.toString,
              $ = RegExp(
                "^" +
                  L.call(V)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              R = y ? m.Buffer : void 0,
              H = m.Symbol,
              F = m.Uint8Array,
              G = D.propertyIsEnumerable,
              W = B.splice,
              U = H ? H.isConcatSpreadable : void 0,
              q = H ? H.toStringTag : void 0,
              J = (function () {
                try {
                  var e = Ve(Object, "defineProperty");
                  return e({}, "", {}), e;
                } catch (e) {}
              })(),
              K = Object.getOwnPropertySymbols,
              X = R ? R.isBuffer : void 0,
              Q =
                ((M = Object.keys),
                (S = Object),
                function (e) {
                  return M(S(e));
                }),
              Z = Math.max,
              Y = Date.now,
              ee = Ve(m, "DataView"),
              te = Ve(m, "Map"),
              ne = Ve(m, "Promise"),
              ie = Ve(m, "Set"),
              re = Ve(m, "WeakMap"),
              oe = Ve(Object, "create"),
              se = Ke(ee),
              le = Ke(te),
              ce = Ke(ne),
              ue = Ke(ie),
              de = Ke(re),
              pe = H ? H.prototype : void 0,
              he = pe ? pe.valueOf : void 0,
              fe = pe ? pe.toString : void 0;
            function me(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function ve(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function ge(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function ye(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new ge(); ++t < n; ) this.add(e[t]);
            }
            function be(e) {
              var t = (this.__data__ = new ve(e));
              this.size = t.size;
            }
            function xe(e, t) {
              for (var n = e.length; n--; ) if (Ze(e[n][0], t)) return n;
              return -1;
            }
            (me.prototype.clear = function () {
              (this.__data__ = oe ? oe(null) : {}), (this.size = 0);
            }),
              (me.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (me.prototype.get = function (e) {
                var t = this.__data__;
                if (oe) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return V.call(t, e) ? t[e] : void 0;
              }),
              (me.prototype.has = function (e) {
                var t = this.__data__;
                return oe ? void 0 !== t[e] : V.call(t, e);
              }),
              (me.prototype.set = function (e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = oe && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              }),
              (ve.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (ve.prototype.delete = function (e) {
                var t = this.__data__,
                  n = xe(t, e);
                return !(
                  n < 0 ||
                  (n == t.length - 1 ? t.pop() : W.call(t, n, 1),
                  --this.size,
                  0)
                );
              }),
              (ve.prototype.get = function (e) {
                var t = this.__data__,
                  n = xe(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (ve.prototype.has = function (e) {
                return xe(this.__data__, e) > -1;
              }),
              (ve.prototype.set = function (e, t) {
                var n = this.__data__,
                  i = xe(n, e);
                return (
                  i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this
                );
              }),
              (ge.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new me(),
                    map: new (te || ve)(),
                    string: new me(),
                  });
              }),
              (ge.prototype.delete = function (e) {
                var t = Le(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (ge.prototype.get = function (e) {
                return Le(this, e).get(e);
              }),
              (ge.prototype.has = function (e) {
                return Le(this, e).has(e);
              }),
              (ge.prototype.set = function (e, t) {
                var n = Le(this, e),
                  i = n.size;
                return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
              }),
              (ye.prototype.add = ye.prototype.push = function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
              (ye.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (be.prototype.clear = function () {
                (this.__data__ = new ve()), (this.size = 0);
              }),
              (be.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t.delete(e);
                return (this.size = t.size), n;
              }),
              (be.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (be.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (be.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof ve) {
                  var i = n.__data__;
                  if (!te || i.length < 199)
                    return i.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new ge(i);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            var ke,
              we =
                ((ke = function (e, t) {
                  return e && _e(e, t, ct);
                }),
                function (e, t) {
                  if (null == e) return e;
                  if (!tt(e)) return ke(e, t);
                  for (
                    var n = e.length, i = -1, r = Object(e);
                    ++i < n && !1 !== t(r[i], i, r);

                  );
                  return e;
                }),
              _e = function (e, t, n) {
                for (var i = -1, r = Object(e), o = n(e), s = o.length; s--; ) {
                  var a = o[++i];
                  if (!1 === t(r[a], a, r)) break;
                }
                return e;
              };
            function Ce(e, t) {
              for (var n = 0, i = (t = Be(t, e)).length; null != e && n < i; )
                e = e[Je(t[n++])];
              return n && n == i ? e : void 0;
            }
            function Ie(e) {
              return null == e
                ? void 0 === e
                  ? "[object Undefined]"
                  : "[object Null]"
                : q && q in Object(e)
                ? (function (e) {
                    var t = V.call(e, q),
                      n = e[q];
                    try {
                      e[q] = void 0;
                      var i = !0;
                    } catch (e) {}
                    var r = N.call(e);
                    return i && (t ? (e[q] = n) : delete e[q]), r;
                  })(e)
                : (function (e) {
                    return N.call(e);
                  })(e);
            }
            function Oe(e, t) {
              return null != e && t in Object(e);
            }
            function Ee(e) {
              return st(e) && Ie(e) == n;
            }
            function Pe(e, t, s, a, l) {
              return (
                e === t ||
                (null == e || null == t || (!st(e) && !st(t))
                  ? e != e && t != t
                  : (function (e, t, s, a, l, c) {
                      var u = et(e),
                        d = et(t),
                        p = u ? "[object Array]" : Ne(e),
                        h = d ? "[object Array]" : Ne(t),
                        f = (p = p == n ? r : p) == r,
                        m = (h = h == n ? r : h) == r,
                        v = p == h;
                      if (v && nt(e)) {
                        if (!nt(t)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (v && !f)
                        return (
                          c || (c = new be()),
                          u || lt(e)
                            ? De(e, t, s, a, l, c)
                            : (function (e, t, n, r, s, a, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !a(new F(e), new F(t))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return Ze(+e, +t);
                                  case "[object Error]":
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return e == t + "";
                                  case i:
                                    var c = E;
                                  case o:
                                    var u = 1 & r;
                                    if ((c || (c = P), e.size != t.size && !u))
                                      return !1;
                                    var d = l.get(e);
                                    if (d) return d == t;
                                    (r |= 2), l.set(e, t);
                                    var p = De(c(e), c(t), r, s, a, l);
                                    return l.delete(e), p;
                                  case "[object Symbol]":
                                    if (he) return he.call(e) == he.call(t);
                                }
                                return !1;
                              })(e, t, p, s, a, l, c)
                        );
                      if (!(1 & s)) {
                        var g = f && V.call(e, "__wrapped__"),
                          y = m && V.call(t, "__wrapped__");
                        if (g || y) {
                          var b = g ? e.value() : e,
                            x = y ? t.value() : t;
                          return c || (c = new be()), l(b, x, s, a, c);
                        }
                      }
                      return (
                        !!v &&
                        (c || (c = new be()),
                        (function (e, t, n, i, r, o) {
                          var s = 1 & n,
                            a = Te(e),
                            l = a.length;
                          if (l != Te(t).length && !s) return !1;
                          for (var c = l; c--; ) {
                            var u = a[c];
                            if (!(s ? u in t : V.call(t, u))) return !1;
                          }
                          var d = o.get(e);
                          if (d && o.get(t)) return d == t;
                          var p = !0;
                          o.set(e, t), o.set(t, e);
                          for (var h = s; ++c < l; ) {
                            var f = e[(u = a[c])],
                              m = t[u];
                            if (i)
                              var v = s
                                ? i(m, f, u, t, e, o)
                                : i(f, m, u, e, t, o);
                            if (
                              !(void 0 === v ? f === m || r(f, m, n, i, o) : v)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = "constructor" == u);
                          }
                          if (p && !h) {
                            var g = e.constructor,
                              y = t.constructor;
                            g == y ||
                              !("constructor" in e) ||
                              !("constructor" in t) ||
                              ("function" == typeof g &&
                                g instanceof g &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (p = !1);
                          }
                          return o.delete(e), o.delete(t), p;
                        })(e, t, s, a, l, c))
                      );
                    })(e, t, s, a, Pe, l))
              );
            }
            function je(e) {
              return "function" == typeof e
                ? e
                : null == e
                ? ut
                : "object" == typeof e
                ? et(e)
                  ? (function (e, t) {
                      return Fe(e) && Ge(t)
                        ? We(Je(e), t)
                        : function (n) {
                            var i = (function (e, t, n) {
                              var i = null == e ? void 0 : Ce(e, t);
                              return void 0 === i ? void 0 : i;
                            })(n, e);
                            return void 0 === i && i === t
                              ? (function (e, t) {
                                  return (
                                    null != e &&
                                    (function (e, t, n) {
                                      for (
                                        var i = -1,
                                          r = (t = Be(t, e)).length,
                                          o = !1;
                                        ++i < r;

                                      ) {
                                        var s = Je(t[i]);
                                        if (!(o = null != e && n(e, s))) break;
                                        e = e[s];
                                      }
                                      return o || ++i != r
                                        ? o
                                        : !!(r = null == e ? 0 : e.length) &&
                                            rt(r) &&
                                            Re(s, r) &&
                                            (et(e) || Ye(e));
                                    })(e, t, Oe)
                                  );
                                })(n, e)
                              : Pe(t, i, 3);
                          };
                    })(e[0], e[1])
                  : (function (e) {
                      var t = (function (e) {
                        for (var t = ct(e), n = t.length; n--; ) {
                          var i = t[n],
                            r = e[i];
                          t[n] = [i, r, Ge(r)];
                        }
                        return t;
                      })(e);
                      return 1 == t.length && t[0][2]
                        ? We(t[0][0], t[0][1])
                        : function (n) {
                            return (
                              n === e ||
                              (function (e, t, n, i) {
                                var r = n.length,
                                  o = r;
                                if (null == e) return !o;
                                for (e = Object(e); r--; ) {
                                  var s = n[r];
                                  if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
                                    return !1;
                                }
                                for (; ++r < o; ) {
                                  var a = (s = n[r])[0],
                                    l = e[a],
                                    c = s[1];
                                  if (s[2]) {
                                    if (void 0 === l && !(a in e)) return !1;
                                  } else {
                                    var u,
                                      d = new be();
                                    if (!(void 0 === u ? Pe(c, l, 3, i, d) : u))
                                      return !1;
                                  }
                                }
                                return !0;
                              })(n, 0, t)
                            );
                          };
                    })(e)
                : Fe((t = e))
                ? ((n = Je(t)),
                  function (e) {
                    return null == e ? void 0 : e[n];
                  })
                : (function (e) {
                    return function (t) {
                      return Ce(t, e);
                    };
                  })(t);
              var t, n;
            }
            var Me = J
              ? function (e, t) {
                  return J(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value:
                      ((n = t),
                      function () {
                        return n;
                      }),
                    writable: !0,
                  });
                  var n;
                }
              : ut;
            function Se(e) {
              if ("string" == typeof e) return e;
              if (et(e)) return _(e, Se) + "";
              if (at(e)) return fe ? fe.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function Be(e, t) {
              return et(e)
                ? e
                : Fe(e, t)
                ? [e]
                : qe(
                    (function (e) {
                      return null == e ? "" : Se(e);
                    })(e)
                  );
            }
            function Ae(e, t) {
              if (e !== t) {
                var n = void 0 !== e,
                  i = null === e,
                  r = e == e,
                  o = at(e),
                  s = void 0 !== t,
                  a = null === t,
                  l = t == t,
                  c = at(t);
                if (
                  (!a && !c && !o && e > t) ||
                  (o && s && l && !a && !c) ||
                  (i && s && l) ||
                  (!n && l) ||
                  !r
                )
                  return 1;
                if (
                  (!i && !o && !c && e < t) ||
                  (c && n && r && !i && !o) ||
                  (a && n && r) ||
                  (!s && r) ||
                  !l
                )
                  return -1;
              }
              return 0;
            }
            function De(e, t, n, i, r, o) {
              var s = 1 & n,
                a = e.length,
                l = t.length;
              if (a != l && !(s && l > a)) return !1;
              var c = o.get(e);
              if (c && o.get(t)) return c == t;
              var u = -1,
                d = !0,
                p = 2 & n ? new ye() : void 0;
              for (o.set(e, t), o.set(t, e); ++u < a; ) {
                var h = e[u],
                  f = t[u];
                if (i) var m = s ? i(f, h, u, t, e, o) : i(h, f, u, e, t, o);
                if (void 0 !== m) {
                  if (m) continue;
                  d = !1;
                  break;
                }
                if (p) {
                  if (
                    !I(t, function (e, t) {
                      if (((s = t), !p.has(s) && (h === e || r(h, e, n, i, o))))
                        return p.push(t);
                      var s;
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (h !== f && !r(h, f, n, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(e), o.delete(t), d;
            }
            function Te(e) {
              return (function (e, t, n) {
                var i = t(e);
                return et(e) ? i : C(i, n(e));
              })(e, ct, ze);
            }
            function Le(e, t) {
              var n,
                i,
                r = e.__data__;
              return (
                "string" == (i = typeof (n = t)) ||
                "number" == i ||
                "symbol" == i ||
                "boolean" == i
                  ? "__proto__" !== n
                  : null === n
              )
                ? r["string" == typeof t ? "string" : "hash"]
                : r.map;
            }
            function Ve(e, t) {
              var n = (function (e, t) {
                return null == e ? void 0 : e[t];
              })(e, t);
              return (function (e) {
                return (
                  !(
                    !ot(e) ||
                    (function (e) {
                      return !!z && z in e;
                    })(e)
                  ) && (it(e) ? $ : u).test(Ke(e))
                );
              })(n)
                ? n
                : void 0;
            }
            var ze = K
                ? function (e) {
                    return null == e
                      ? []
                      : ((e = Object(e)),
                        (function (e, t) {
                          for (
                            var n = -1,
                              i = null == e ? 0 : e.length,
                              r = 0,
                              o = [];
                            ++n < i;

                          ) {
                            var s = e[n];
                            t(s) && (o[r++] = s);
                          }
                          return o;
                        })(K(e), function (t) {
                          return G.call(e, t);
                        }));
                  }
                : function () {
                    return [];
                  },
              Ne = Ie;
            function $e(e) {
              return et(e) || Ye(e) || !!(U && e && e[U]);
            }
            function Re(e, t) {
              var n = typeof e;
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == n || ("symbol" != n && d.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function He(e, t, n) {
              if (!ot(n)) return !1;
              var i = typeof t;
              return (
                !!("number" == i
                  ? tt(n) && Re(t, n.length)
                  : "string" == i && t in n) && Ze(n[t], e)
              );
            }
            function Fe(e, t) {
              if (et(e)) return !1;
              var n = typeof e;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != e &&
                  !at(e)
                ) ||
                a.test(e) ||
                !s.test(e) ||
                (null != t && e in Object(t))
              );
            }
            function Ge(e) {
              return e == e && !ot(e);
            }
            function We(e, t) {
              return function (n) {
                return (
                  null != n && n[e] === t && (void 0 !== t || e in Object(n))
                );
              };
            }
            ((ee && "[object DataView]" != Ne(new ee(new ArrayBuffer(1)))) ||
              (te && Ne(new te()) != i) ||
              (ne && "[object Promise]" != Ne(ne.resolve())) ||
              (ie && Ne(new ie()) != o) ||
              (re && "[object WeakMap]" != Ne(new re()))) &&
              (Ne = function (e) {
                var t = Ie(e),
                  n = t == r ? e.constructor : void 0,
                  s = n ? Ke(n) : "";
                if (s)
                  switch (s) {
                    case se:
                      return "[object DataView]";
                    case le:
                      return i;
                    case ce:
                      return "[object Promise]";
                    case ue:
                      return o;
                    case de:
                      return "[object WeakMap]";
                  }
                return t;
              });
            var Ue = (function (e) {
                var t = 0,
                  n = 0;
                return function () {
                  var i = Y(),
                    r = 16 - (i - n);
                  if (((n = i), r > 0)) {
                    if (++t >= 800) return arguments[0];
                  } else t = 0;
                  return e.apply(void 0, arguments);
                };
              })(Me),
              qe = (function (e) {
                var t = Qe(
                    function (e) {
                      var t = [];
                      return (
                        46 === e.charCodeAt(0) && t.push(""),
                        e.replace(l, function (e, n, i, r) {
                          t.push(i ? r.replace(c, "$1") : n || e);
                        }),
                        t
                      );
                    },
                    function (e) {
                      return 500 === n.size && n.clear(), e;
                    }
                  ),
                  n = t.cache;
                return t;
              })();
            function Je(e) {
              if ("string" == typeof e || at(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function Ke(e) {
              if (null != e) {
                try {
                  return L.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            }
            var Xe = (function (e, t) {
              return Ue(
                (function (e, t, n) {
                  return (
                    (t = Z(void 0 === t ? e.length - 1 : t, 0)),
                    function () {
                      for (
                        var i = arguments,
                          r = -1,
                          o = Z(i.length - t, 0),
                          s = Array(o);
                        ++r < o;

                      )
                        s[r] = i[t + r];
                      r = -1;
                      for (var a = Array(t + 1); ++r < t; ) a[r] = i[r];
                      return (a[t] = n(s)), w(e, this, a);
                    }
                  );
                })(e, void 0, ut),
                e + ""
              );
            })(function (e, t) {
              if (null == e) return [];
              var n = t.length;
              return (
                n > 1 && He(e, t[0], t[1])
                  ? (t = [])
                  : n > 2 && He(t[0], t[1], t[2]) && (t = [t[0]]),
                (function (e, t, n) {
                  var i = -1;
                  return (
                    (t = _(t.length ? t : [ut], O(je))),
                    (function (e, t) {
                      var n = e.length;
                      for (e.sort(t); n--; ) e[n] = e[n].value;
                      return e;
                    })(
                      (function (e, t) {
                        var n = -1,
                          i = tt(e) ? Array(e.length) : [];
                        return (
                          we(e, function (e, r, o) {
                            i[++n] = t(e);
                          }),
                          i
                        );
                      })(e, function (e, n, r) {
                        return {
                          criteria: _(t, function (t) {
                            return t(e);
                          }),
                          index: ++i,
                          value: e,
                        };
                      }),
                      function (e, t) {
                        return (function (e, t, n) {
                          for (
                            var i = -1,
                              r = e.criteria,
                              o = t.criteria,
                              s = r.length,
                              a = n.length;
                            ++i < s;

                          ) {
                            var l = Ae(r[i], o[i]);
                            if (l)
                              return i >= a ? l : l * ("desc" == n[i] ? -1 : 1);
                          }
                          return e.index - t.index;
                        })(e, t, n);
                      }
                    )
                  );
                })(
                  e,
                  (function e(t, n, i, r, o) {
                    var s = -1,
                      a = t.length;
                    for (i || (i = $e), o || (o = []); ++s < a; ) {
                      var l = t[s];
                      n > 0 && i(l)
                        ? n > 1
                          ? e(l, n - 1, i, r, o)
                          : C(o, l)
                        : r || (o[o.length] = l);
                    }
                    return o;
                  })(t, 1),
                  []
                )
              );
            });
            function Qe(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var i = arguments,
                  r = t ? t.apply(this, i) : i[0],
                  o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = e.apply(this, i);
                return (n.cache = o.set(r, s) || o), s;
              };
              return (n.cache = new (Qe.Cache || ge)()), n;
            }
            function Ze(e, t) {
              return e === t || (e != e && t != t);
            }
            Qe.Cache = ge;
            var Ye = Ee(
                (function () {
                  return arguments;
                })()
              )
                ? Ee
                : function (e) {
                    return st(e) && V.call(e, "callee") && !G.call(e, "callee");
                  },
              et = Array.isArray;
            function tt(e) {
              return null != e && rt(e.length) && !it(e);
            }
            var nt =
              X ||
              function () {
                return !1;
              };
            function it(e) {
              if (!ot(e)) return !1;
              var t = Ie(e);
              return (
                "[object Function]" == t ||
                "[object GeneratorFunction]" == t ||
                "[object AsyncFunction]" == t ||
                "[object Proxy]" == t
              );
            }
            function rt(e) {
              return (
                "number" == typeof e &&
                e > -1 &&
                e % 1 == 0 &&
                e <= 9007199254740991
              );
            }
            function ot(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
            }
            function st(e) {
              return null != e && "object" == typeof e;
            }
            function at(e) {
              return (
                "symbol" == typeof e || (st(e) && "[object Symbol]" == Ie(e))
              );
            }
            var lt = k
              ? O(k)
              : function (e) {
                  return st(e) && rt(e.length) && !!p[Ie(e)];
                };
            function ct(e) {
              return tt(e)
                ? (function (e, t) {
                    var n = et(e),
                      i = !n && Ye(e),
                      r = !n && !i && nt(e),
                      o = !n && !i && !r && lt(e),
                      s = n || i || r || o,
                      a = s
                        ? (function (e, t) {
                            for (var n = -1, i = Array(e); ++n < e; )
                              i[n] = t(n);
                            return i;
                          })(e.length, String)
                        : [],
                      l = a.length;
                    for (var c in e)
                      (!t && !V.call(e, c)) ||
                        (s &&
                          ("length" == c ||
                            (r && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            Re(c, l))) ||
                        a.push(c);
                    return a;
                  })(e)
                : (function (e) {
                    if (
                      ((n = (t = e) && t.constructor),
                      t !== (("function" == typeof n && n.prototype) || D))
                    )
                      return Q(e);
                    var t,
                      n,
                      i = [];
                    for (var r in Object(e))
                      V.call(e, r) && "constructor" != r && i.push(r);
                    return i;
                  })(e);
            }
            function ut(e) {
              return e;
            }
            e.exports = Xe;
          }),
          Ke = (function (e) {
            c(n, e);
            var t = f(n);
            function n() {
              return i(this, n), t.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "onInitialise",
                  value: function () {
                    (this.incidents = []), (this.incidentsById = {});
                  },
                },
                {
                  key: "_incidentById",
                  value: function (e) {
                    return this.incidentsById[e];
                  },
                },
                {
                  key: "_resize",
                  value: function (e) {
                    for (var t = 0; t < this.incidents.length; t++)
                      this.incidents[t].millisecond =
                        this.incidents[t].millisecond * e;
                  },
                },
                {
                  key: "checkAddition",
                  value: function (e) {
                    for (var t = [], n = {}, i = [], r = 0; r < e.length; r++)
                      (n[e[r].id] = e[r].incident),
                        i.push({ id: e[r].id, millisecond: e[r].millisecond }),
                        Object.prototype.hasOwnProperty.call(
                          this.incidentsById,
                          e[r].id
                        ) &&
                          (Ae.error(
                            "Incident with the id ".concat(
                              e[r].id,
                              " already exists. Addition is rejected."
                            )
                          ),
                          t.push({
                            type: "Already existing id",
                            meta: { id: e[r].id },
                          }));
                    if (t.length > 0) return { result: !1, errors: t };
                    var o = this;
                    return {
                      result: !0,
                      execute: function () {
                        (o.incidentsById = Object.assign(o.incidentsById, n)),
                          (o.incidents = o.incidents.concat(i)),
                          (o.incidents = Je(o.incidents, [
                            function (e) {
                              return e.millisecond;
                            },
                          ]));
                        for (var t = 0; t < e.length; t++)
                          o._incidentById(e[t].id)._onGetContextOnce(o.context);
                      },
                    };
                  },
                },
                {
                  key: "checkEdit",
                  value: function (e, t) {
                    var n = this;
                    return {
                      result: !0,
                      execute: function () {
                        for (var i = 0; i < e.length; i++)
                          for (var r = 0; r < n.incidents.length; r++)
                            if (n.incidents[r].id === e[i].id) {
                              n.incidents[r].millisecond += t;
                              break;
                            }
                        n.incidents = Je(n.incidents, [
                          function (e) {
                            return e.millisecond;
                          },
                        ]);
                      },
                    };
                  },
                },
                {
                  key: "checkDelete",
                  value: function (e) {
                    for (var t = this, n = [], i = 0; i < e.length; i++)
                      n.push(e[i].id);
                    return {
                      result: !0,
                      execute: function () {
                        var e = qe(t.incidents, function (e) {
                          return -1 === n.indexOf(e.id);
                        });
                        t.incidents = e;
                        for (var i = 0; i < n.length; i++)
                          delete t.incidentsById[n[i]];
                      },
                    };
                  },
                },
                {
                  key: "checkResizedIncidents",
                  value: function (e) {
                    var t = this;
                    return {
                      result: !0,
                      execute: function () {
                        for (var n = 0; n < e.length; n++)
                          for (var i = 0; i < t.incidents.length; i++)
                            if (t.incidents[i].id === e[n].id) {
                              t.incidents[i].millisecond += e[n].startDelta;
                              break;
                            }
                        t.incidents = Je(t.incidents, [
                          function (e) {
                            return e.millisecond;
                          },
                        ]);
                      },
                    };
                  },
                },
                {
                  key: "moveTo",
                  value: function (e, t, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if (i)
                      for (var r = 0; r < this.incidents.length; r++) {
                        var o = this.incidents[r],
                          s = this._incidentById(o.id);
                        t < o.millisecond
                          ? s.onProgress(0, 0, n, !0)
                          : t > o.millisecond + s.duration
                          ? s.onProgress(1, s.duration, n, !0)
                          : s.onProgress(
                              (t - o.millisecond) / s.duration,
                              t - o.millisecond,
                              n,
                              !0
                            );
                      }
                    else {
                      var a,
                        l = this;
                      a = qe(
                        this.incidents,
                        t > e
                          ? function (n) {
                              return (
                                (n.millisecond +
                                  l._incidentById(n.id).duration >=
                                  e &&
                                  n.millisecond +
                                    l._incidentById(n.id).duration <=
                                    t) ||
                                (l._incidentById(n.id).duration +
                                  n.millisecond >=
                                  t &&
                                  n.millisecond <= t)
                              );
                            }
                          : function (n) {
                              return (
                                (n.millisecond +
                                  l._incidentById(n.id).duration >=
                                  t &&
                                  n.millisecond +
                                    l._incidentById(n.id).duration <=
                                    e) ||
                                (l._incidentById(n.id).duration +
                                  n.millisecond >=
                                  e &&
                                  n.millisecond <= e)
                              );
                            }
                      );
                      for (var c = 0; c < a.length; c++) {
                        var u = a[c],
                          d = this._incidentById(u.id),
                          p = (t - u.millisecond) / d.duration >= 1,
                          h = p ? 1 : (t - u.millisecond) / d.duration,
                          f = p ? d.duration : t - u.millisecond;
                        d.onProgress(h, f, n, !1);
                      }
                    }
                  },
                },
              ]),
              n
            );
          })(Te),
          Xe = "function" == typeof Float32Array;
        function Qe(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function Ze(e, t) {
          return 3 * t - 6 * e;
        }
        function Ye(e) {
          return 3 * e;
        }
        function et(e, t, n) {
          return ((Qe(t, n) * e + Ze(t, n)) * e + Ye(t)) * e;
        }
        function tt(e, t, n) {
          return 3 * Qe(t, n) * e * e + 2 * Ze(t, n) * e + Ye(t);
        }
        function nt(e) {
          return e;
        }
        var it = function (e, t, n, i) {
          if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
          if (e === t && n === i) return nt;
          for (
            var r = Xe ? new Float32Array(11) : new Array(11), o = 0;
            o < 11;
            ++o
          )
            r[o] = et(0.1 * o, e, n);
          function s(t) {
            for (var i = 0, o = 1; 10 !== o && r[o] <= t; ++o) i += 0.1;
            --o;
            var s = i + ((t - r[o]) / (r[o + 1] - r[o])) * 0.1,
              a = tt(s, e, n);
            return a >= 0.001
              ? (function (e, t, n, i) {
                  for (var r = 0; r < 4; ++r) {
                    var o = tt(t, n, i);
                    if (0 === o) return t;
                    t -= (et(t, n, i) - e) / o;
                  }
                  return t;
                })(t, s, e, n)
              : 0 === a
              ? s
              : (function (e, t, n, i, r) {
                  var o,
                    s,
                    a = 0;
                  do {
                    (o = et((s = t + (n - t) / 2), i, r) - e) > 0
                      ? (n = s)
                      : (t = s);
                  } while (Math.abs(o) > 1e-7 && ++a < 10);
                  return s;
                })(t, i, i + 0.1, e, n);
          }
          return function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : et(s(e), t, i);
          };
        };
        function rt(e) {
          e.descriptor.value = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = {};
            return (
              (n[this.mc_plugin_npm_name] = [
                {
                  millisecond: e,
                  parentMillisecond: t,
                  incident: this,
                  id: this.id,
                },
              ]),
              n
            );
          };
        }
        var ot = _(null, function (e) {
            return {
              F: function t() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments.length > 2 ? arguments[2] : void 0;
                i(this, t),
                  e(this),
                  (this.attrs = n),
                  (this.props = r),
                  (this.dna = o),
                  (this.context = o.context),
                  (this.mcid = o.mcid),
                  (this.id = r.id || je()),
                  (this.modelId = r.modelId),
                  (this.gotContext = !1),
                  (this.plugin_channel_class = Te),
                  (this.mc_plugin_npm_name = "motor-cortex-js"),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "plugin_channel_class"
                  ) && (this.plugin_channel_class = r.plugin_channel_class),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "mc_plugin_npm_name"
                  ) && (this.mc_plugin_npm_name = r.mc_plugin_npm_name),
                  (this.hasIncidents = !1),
                  (this.initialValues = {}),
                  (this.userDefinedInitialValues = n.initialValues || {}),
                  (this.pureInitialValues = null),
                  (this.autoGenerated = !1),
                  this.onInitialise(n, r);
              },
              d: [
                {
                  kind: "get",
                  key: "selector",
                  value: function () {
                    return this.props.selector;
                  },
                },
                {
                  kind: "get",
                  key: "animAttributes",
                  value: function () {
                    return this.attrs.animatedAttrs;
                  },
                },
                {
                  kind: "set",
                  key: "animAttributes",
                  value: function (e) {
                    this.attrs.animatedAttrs[this.attributeKey] = e;
                  },
                },
                {
                  kind: "method",
                  key: "getScratchValue",
                  value: function () {
                    return 0;
                  },
                },
                {
                  kind: "get",
                  key: "element",
                  value: function () {
                    return null === this.contex
                      ? []
                      : this.context.getElementByMCID
                      ? this.context.getElementByMCID(this.mcid)
                      : this.context.getElements(this.selector)[0];
                  },
                },
                {
                  kind: "get",
                  key: "attributeKey",
                  value: function () {
                    return Object.keys(this.attrs.animatedAttrs)[0];
                  },
                },
                {
                  kind: "get",
                  key: "targetValue",
                  value: function () {
                    return this.animAttributes[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "getElementAttribute",
                  value: function (e) {
                    return this.element.getAttribute(e);
                  },
                },
                {
                  kind: "method",
                  decorators: [rt],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "hasUserDefinedInitialValue",
                  value: function () {
                    return !!Object.prototype.hasOwnProperty.call(
                      this.userDefinedInitialValues,
                      this.attributeKey
                    );
                  },
                },
                {
                  kind: "method",
                  key: "setInitialValue",
                  value: function (e) {
                    var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                    if (
                      (t &&
                        (this.pureInitialValues = JSON.parse(
                          JSON.stringify(e)
                        )),
                      this.hasUserDefinedInitialValue())
                    )
                      if ("object" === n(this.targetValue)) {
                        for (var i in this.userDefinedInitialValues[
                          this.attributeKey
                        ])
                          e[i] = this.userDefinedInitialValues[
                            this.attributeKey
                          ][i];
                        this.initialValues[this.attributeKey] = e;
                      } else
                        this.initialValues[
                          this.attributeKey
                        ] = this.userDefinedInitialValues[this.attributeKey];
                    else this.initialValues[this.attributeKey] = e;
                  },
                },
                {
                  kind: "get",
                  key: "initialValue",
                  value: function () {
                    return this.initialValues[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "getInitialValue",
                  value: function () {
                    return this.initialValues[this.attributeKey];
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    try {
                      if (!0 === this.context.fragment) return;
                      this.gotContext ||
                        (this.onGetContext(), (this.gotContext = !0));
                    } catch (e) {
                      console.log(e), console.log(this.mcid);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    Ae.info(
                      'Overwritte the "onGetContext" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                { kind: "method", key: "lastWish", value: function () {} },
                {
                  kind: "method",
                  key: "onInitialise",
                  value: function () {
                    Ae.info(
                      'Overwritte the "onInialise" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (e, t) {},
                },
                {
                  kind: "method",
                  decorators: [Fe],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [We],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          }),
          st = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r, o) {
              var s;
              return (
                i(this, n),
                ((s = t.call(this, e, r, o)).runTimeInfo = {
                  currentMillisecond: 0,
                }),
                s
              );
            }
            return (
              o(n, [
                {
                  key: "lastWish",
                  value: function () {
                    this.ownClip && this.ownClip.ownContext.unmount();
                  },
                },
                {
                  key: "onGetContext",
                  value: function () {
                    var e = this,
                      t = this.DescriptiveIncident.realClip.exportConstructionArguments(),
                      n = Ae.getElementByMCID(this.context, this.mcid),
                      i = l({}, t.props, {
                        selector: void 0,
                        host: n,
                        containerParams:
                          this.DescriptiveIncident.props.containerParams || {},
                        originalDims:
                          this.DescriptiveIncident.constructor.originalDims ||
                          {},
                      });
                    (this.ownClip = new this.DescriptiveIncident.constructor.Incident(
                      t.attrs,
                      i
                    )),
                      (this.ownClip.DescriptiveIncident = this.DescriptiveIncident),
                      this.DescriptiveIncident.realClip.addContext(
                        {
                          clipId: this.id,
                          context: this.ownClip.ownContext,
                          unblock: function () {
                            return e.unblock();
                          },
                        },
                        !0
                      );
                  },
                },
                {
                  key: "onProgress",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (
                      !1 !==
                      this.DescriptiveIncident.realClip.context.contextLoaded
                    ) {
                      for (var i in this.DescriptiveIncident.realClip
                        .instantiatedChannels) {
                        var r = this.DescriptiveIncident.realClip
                          .instantiatedChannels[i];
                        r.moveTo(
                          this.runTimeInfo.currentMillisecond,
                          t,
                          this.id,
                          n
                        );
                      }
                      (this.runTimeInfo.currentMillisecond = t),
                        this.ownClip.onAfterProgress(e, t);
                    } else this.setBlock();
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return this.DescriptiveIncident.realClip.duration;
                  },
                  set: function (e) {
                    this.DescriptiveIncident.realClip._resize(
                      e / this.realClip.duration
                    );
                  },
                },
              ]),
              n
            );
          })(ot);
        function at(e) {
          Object.prototype.hasOwnProperty.call(e, "dnaExtras") ||
            (e.dnaExtras = {});
          var t = new e.Incident(
            e.attrs,
            l({}, e.props, { id: e.id || je() }),
            l({}, e.dnaExtras, { context: e.context, mcid: e.mcid })
          );
          return (
            (t.mc_plugin_npm_name = e.plugin_npm_name),
            (t.plugin_channel_class = e.Channel),
            (t.DescriptiveIncident = e.DescriptiveIncident),
            t
          );
        }
        var lt = {
            linear: function (e) {
              return e;
            },
            easeInQuad: function (e) {
              return e * e;
            },
            easeOutQuad: function (e) {
              return e * (2 - e);
            },
            easeInOutQuad: function (e) {
              return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
            },
            easeInCubic: function (e) {
              return e * e * e;
            },
            easeOutCubic: function (e) {
              return --e * e * e + 1;
            },
            easeInOutCubic: function (e) {
              return e < 0.5
                ? 4 * e * e * e
                : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
            },
            easeInQuart: function (e) {
              return e * e * e * e;
            },
            easeOutQuart: function (e) {
              return 1 - --e * e * e * e;
            },
            easeInOutQuart: function (e) {
              return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
            },
            easeInQuint: function (e) {
              return e * e * e * e * e;
            },
            easeOutQuint: function (e) {
              return 1 + --e * e * e * e * e;
            },
            easeInOutQuint: function (e) {
              return e < 0.5
                ? 16 * e * e * e * e * e
                : 1 + 16 * --e * e * e * e * e;
            },
            easeInSine: function (e) {
              return -1 * Math.cos((e / 1) * (Math.PI / 2)) + 1;
            },
            easeOutSine: function (e) {
              return 1 * Math.sin((e / 1) * (Math.PI / 2));
            },
            easeInOutSine: function (e) {
              return -0.5 * (Math.cos((Math.PI * e) / 1) - 1);
            },
            easeInExpo: function (e) {
              return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1));
            },
            easeOutExpo: function (e) {
              return 1 == e ? 1 : 1 * (1 - Math.pow(2, (-10 * e) / 1));
            },
            easeInOutExpo: function (e) {
              return 0 == e
                ? 0
                : 1 == e
                ? 1
                : (e /= 0.5) < 1
                ? 0.5 * Math.pow(2, 10 * (e - 1))
                : 0.5 * (2 - Math.pow(2, -10 * --e));
            },
            easeInCirc: function (e) {
              return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1);
            },
            easeOutCirc: function (e) {
              return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e);
            },
            easeInOutCirc: function (e) {
              return (e /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
            },
            easeInElastic: function (e) {
              var t = 1.70158,
                n = 0,
                i = 1;
              return 0 == e
                ? 0
                : 1 == (e /= 1)
                ? 1
                : (n || (n = 0.3),
                  i < Math.abs(1)
                    ? ((i = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  -i *
                    Math.pow(2, 10 * (e -= 1)) *
                    Math.sin(((1 * e - t) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                i = 1;
              return 0 == e
                ? 0
                : 1 == (e /= 1)
                ? 1
                : (n || (n = 0.3),
                  i < Math.abs(1)
                    ? ((i = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  i *
                    Math.pow(2, -10 * e) *
                    Math.sin(((1 * e - t) * (2 * Math.PI)) / n) +
                    1);
            },
            easeInOutElastic: function (e) {
              var t = 1.70158,
                n = 0,
                i = 1;
              return 0 == e
                ? 0
                : 2 == (e /= 0.5)
                ? 1
                : (n || (n = 0.3 * 1.5 * 1),
                  i < Math.abs(1)
                    ? ((i = 1), (t = n / 4))
                    : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                  e < 1
                    ? i *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin(((1 * e - t) * (2 * Math.PI)) / n) *
                      -0.5
                    : i *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((1 * e - t) * (2 * Math.PI)) / n) *
                        0.5 +
                      1);
            },
            easeInBack: function (e) {
              var t = 1.70158;
              return 1 * (e /= 1) * e * ((t + 1) * e - t);
            },
            easeOutBack: function (e) {
              var t = 1.70158;
              return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1);
            },
            easeInOutBack: function (e) {
              var t = 1.70158;
              return (e /= 0.5) < 1
                ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
            },
            easeInBounce: function (e) {
              return 1 - lt.easeOutBounce(1 - e);
            },
            easeOutBounce: function (e) {
              return (e /= 1) < 1 / 2.75
                ? 7.5625 * e * e * 1
                : e < 2 / 2.75
                ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                : e < 2.5 / 2.75
                ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
            },
            easeInOutBounce: function (e) {
              return e < 0.5
                ? 0.5 * lt.easeInBounce(2 * e)
                : 0.5 * lt.easeOutBounce(2 * e - 1) + 0.5;
            },
          },
          ct = _(
            null,
            function (e, t) {
              return {
                F: (function (t) {
                  c(r, t);
                  var n = f(r);
                  function r(t, o, s, a) {
                    var l;
                    return (
                      i(this, r),
                      (l = n.call(this, {
                        id: "".concat(t.incidentId, "_").concat(s),
                      })),
                      e(p(l)),
                      (l.contexts = {}),
                      (l.constructionIngredients = t),
                      (l.mcid = s),
                      (l._duration = a.realClip.duration),
                      (l.DescriptiveIncident = a),
                      (l.mc_plugin_npm_name = t.plugin_npm_name),
                      (l.plugin_channel_class = t.Channel),
                      l.addContext(o),
                      a.realClip.subscribeToDurationChange(function (e) {
                        (l._duration = e),
                          l.putMessageOnPipe("recalcDuration", {}, "Groups", {
                            selfExecute: !0,
                            direction: Ve,
                          });
                      }),
                      (l.easing = lt.linear),
                      Object.prototype.hasOwnProperty.call(
                        l.DescriptiveIncident.props,
                        "easing"
                      ) &&
                        (Array.isArray(l.DescriptiveIncident.props.easing)
                          ? (l.easing = it(
                              l.DescriptiveIncident.props.easing[0],
                              l.DescriptiveIncident.props.easing[1],
                              l.DescriptiveIncident.props.easing[2],
                              l.DescriptiveIncident.props.easing[3]
                            ))
                          : (l.easing =
                              lt[l.DescriptiveIncident.props.easing])),
                      l
                    );
                  }
                  return r;
                })(t),
                d: [
                  {
                    kind: "get",
                    key: "originalContext",
                    value: function () {
                      return this.contexts[this.originalContextKey];
                    },
                  },
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return this._duration;
                    },
                  },
                  {
                    kind: "method",
                    key: "onProgress",
                    value: function (e, t, n) {
                      var i =
                          arguments.length > 3 &&
                          void 0 !== arguments[3] &&
                          arguments[3],
                        r = this.easing(e) || 0,
                        o = r * this.duration;
                      !1 !== this.originalContext.context.contextLoaded &&
                        this.contexts[n].onProgress(r, o, i);
                    },
                  },
                  {
                    kind: "method",
                    key: "addContext",
                    value: function (e) {
                      var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                      0 === Object.keys(this.contexts).length &&
                        (this.originalContextKey = e.clipId);
                      var n = l({}, this.constructionIngredients, {
                        context: e.context,
                        mcid: this.mcid,
                        Incident: st,
                        DescriptiveIncident: this.DescriptiveIncident,
                      });
                      (this.contexts[e.clipId] = at(n)),
                        t && this.contexts[e.clipId]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleAddContext",
                    value: function (e, t) {
                      return this.addContext(t, !0), !0;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleContextLoaded",
                    value: function (e, t) {
                      this._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    decorators: [rt],
                    key: "getIncidentsByChannel",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "gotContext",
                    value: function () {
                      for (var e in this.contexts)
                        this.contexts[e].gotContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "_onGetContextOnce",
                    value: function () {
                      if (!1 !== this.originalContext.contextLoaded)
                        for (var e in this.contexts)
                          this.contexts[e]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var e in this.contexts) this.contexts[e].lastWish();
                    },
                  },
                  {
                    kind: "method",
                    key: "onGetContext",
                    value: function () {
                      if (!1 !== this.originalContext.contextLoaded)
                        for (var e in this.contexts)
                          this.contexts[e].onGetContext();
                    },
                  },
                ],
              };
            },
            $e
          ),
          ut = _(
            null,
            function (e, t) {
              var r = (function (t) {
                c(o, t);
                var r = f(o);
                function o(t, s, a, c) {
                  var u;
                  return (
                    i(this, o),
                    (u = r.call(
                      this,
                      l({}, t.props, {
                        id:
                          null !== c
                            ? ""
                                .concat(t.incidentId, "_")
                                .concat(a, "_")
                                .concat(c)
                            : "".concat(t.incidentId, "_").concat(a),
                      })
                    )),
                    e(p(u)),
                    (u.contexts = {}),
                    (u.constructionIngredients = t),
                    (u.mcid = a),
                    (u.attribute = c),
                    (u.mc_plugin_npm_name = t.plugin_npm_name),
                    (u.plugin_channel_class = t.Channel),
                    (u.DescriptiveIncident = t.DescriptiveIncident),
                    u.addContext(s),
                    null !== c &&
                      ("object" ===
                      n(
                        u.constructionIngredients.attrs.animatedAttrs[
                          u.attribute
                        ]
                      )
                        ? (u.originalAnimatedAttributeValue = l(
                            {},
                            u.constructionIngredients.attrs.animatedAttrs[
                              u.attribute
                            ]
                          ))
                        : (u.originalAnimatedAttributeValue =
                            u.constructionIngredients.attrs.animatedAttrs[
                              u.attribute
                            ])),
                    (u.easing = lt.linear),
                    Object.prototype.hasOwnProperty.call(u.props, "easing") &&
                      (Array.isArray(u.props.easing)
                        ? (u.easing = it(
                            u.props.easing[0],
                            u.props.easing[1],
                            u.props.easing[2],
                            u.props.easing[3]
                          ))
                        : (u.easing = lt[u.props.easing])),
                    u
                  );
                }
                return o;
              })(t);
              return {
                F: r,
                d: [
                  {
                    kind: "get",
                    key: "originalContext",
                    value: function () {
                      return this.contexts[this.originalContextKey];
                    },
                  },
                  {
                    kind: "get",
                    key: "duration",
                    value: function () {
                      return v(u(r.prototype), "duration", this);
                    },
                  },
                  {
                    kind: "set",
                    key: "duration",
                    value: function (e) {
                      for (var t in ((function (e, t, n, i, r) {
                        if (!g(e, "duration", n, i || e))
                          throw new Error("failed to set property");
                      })(u(r.prototype), 0, e, this),
                      this.contexts))
                        this.contexts[t].duration = e;
                    },
                  },
                  {
                    kind: "method",
                    key: "addContext",
                    value: function (e) {
                      var t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        n = !1;
                      0 === Object.keys(this.contexts).length &&
                        ((this.originalContextKey = e.clipId),
                        (this.originalClipContext = e.context),
                        (n = !0));
                      var i = l({}, this.constructionIngredients, {
                          context: e.context,
                          mcid: this.mcid,
                        }),
                        r = at(i);
                      (this.contexts[e.clipId] = r),
                        n ||
                          null === this.attribute ||
                          this.contexts[e.clipId].setInitialValue(
                            this.getInitialValue()
                          ),
                        t && this.contexts[e.clipId]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleAddContext",
                    value: function (e, t) {
                      return this.addContext(t, !0), !0;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleContextLoaded",
                    value: function (e, t) {
                      return this._onGetContextOnce(), !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [rt],
                    key: "getIncidentsByChannel",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "onProgress",
                    value: function (e, t, n) {
                      var i =
                        t % (this.delay + this.props.duration + this.hiatus);
                      0 !== t &&
                        0 === i &&
                        (i = this.delay + this.props.duration);
                      var r = i - this.delay;
                      r < 0
                        ? (r = 0)
                        : r > this.props.duration && (r = this.props.duration);
                      var o = r / this.props.duration,
                        s = this.easing(o),
                        a = s * this.props.duration;
                      if (void 0 !== n)
                        !1 !== this.originalContext.context.contextLoaded &&
                          this.contexts[n].onProgress(s, a);
                      else
                        for (var l in this.contexts)
                          (this.originalContextKey === l &&
                            !0 === this.originalContext.fragment) ||
                            this.contexts[l].onProgress(s, a);
                    },
                  },
                  {
                    kind: "get",
                    key: "animatedAttributeValue",
                    value: function () {
                      return this.constructionIngredients.attrs.animatedAttrs[
                        this.attribute
                      ];
                    },
                  },
                  {
                    kind: "set",
                    key: "animatedAttributeValue",
                    value: function (e) {
                      this.constructionIngredients.attrs.animatedAttrs[
                        this.attribute
                      ] = e;
                    },
                  },
                  {
                    kind: "method",
                    key: "gotContext",
                    value: function () {
                      for (var e in this.contexts)
                        this.contexts[e].gotContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "_onGetContextOnce",
                    value: function () {
                      if (!1 !== this.originalContext.context.contextLoaded)
                        for (var e in this.contexts)
                          this.contexts[e]._onGetContextOnce();
                    },
                  },
                  {
                    kind: "method",
                    key: "lastWish",
                    value: function () {
                      for (var e in this.contexts) this.contexts[e].lastWish();
                    },
                  },
                  {
                    kind: "method",
                    key: "onGetContext",
                    value: function () {
                      if (!1 !== this.originalContext.contextLoaded)
                        for (var e in this.contexts)
                          this.contexts[e].onGetContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "getInitialValue",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      return (
                        null === e && (e = this.attribute),
                        this.originalContext.getInitialValue()
                      );
                    },
                  },
                  {
                    kind: "get",
                    key: "initialValue",
                    value: function () {
                      return this.getInitialValue();
                    },
                  },
                  {
                    kind: "get",
                    key: "scratchValue",
                    value: function () {
                      return this.originalContext.scratchValue;
                    },
                  },
                  {
                    kind: "get",
                    key: "pureInitialValues",
                    value: function () {
                      return this.originalContext.pureInitialValues;
                    },
                  },
                  {
                    kind: "method",
                    key: "setInitialValue",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : null,
                        t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                      for (var n in (null === e && (e = this.getScratchValue()),
                      this.contexts))
                        this.contexts[n].setInitialValue(
                          JSON.parse(JSON.stringify(e)),
                          t
                        );
                    },
                  },
                  {
                    kind: "method",
                    key: "getScratchValue",
                    value: function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      if (!1 === this.originalContext.context.contextLoaded)
                        return 0;
                      if (null === e) {
                        var t = Object.keys(this.contexts);
                        if (
                          Object.prototype.hasOwnProperty.call(
                            this.originalClipContext,
                            "nonFragmentedContext"
                          )
                        ) {
                          var n = l({}, this.constructionIngredients, {
                              context: this.originalClipContext
                                .nonFragmentedContext,
                              mcid: this.mcid,
                            }),
                            i = at(n);
                          return i.getScratchValue();
                        }
                        return 1 === t.length
                          ? this.originalContext.getScratchValue()
                          : this.contexts[t[1]].getScratchValue();
                      }
                      return this.contexts[e].getScratchValue();
                    },
                  },
                  {
                    kind: "method",
                    key: "setCompoAttrKeyValue",
                    value: function (e, t) {
                      for (var n in this.contexts)
                        (this.contexts[n].attrs.animatedAttrs[this.attribute][
                          e
                        ] = t),
                          this.contexts[n].lastWish(),
                          this.contexts[n].onGetContext();
                    },
                  },
                  {
                    kind: "method",
                    key: "play",
                    value: function (e, t, n) {
                      return this.contexts[n].play(t);
                    },
                  },
                  {
                    kind: "method",
                    key: "stop",
                    value: function (e) {
                      this.contexts[e].stop();
                    },
                  },
                ],
              };
            },
            $e
          ),
          dt = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r, o, s) {
              var a;
              return (
                i(this, n),
                ((a = t.call(
                  this,
                  {},
                  { id: "".concat(e.id, "_").concat(o) }
                )).mcid = o),
                (a.selector = s),
                a.setUp(e, r),
                a
              );
            }
            return (
              o(n, [
                {
                  key: "setUp",
                  value: function (e, t) {
                    for (var n in e.attrs.animatedAttrs) {
                      var i = {};
                      i[n] = e.attrs.animatedAttrs[n];
                      var r = l({}, e.attrs, { animatedAttrs: i }),
                        o = l({}, e.props, { selector: this.selector }),
                        s = {
                          incidentId: e.id,
                          attrs: r,
                          props: o,
                          Incident: e.constructor.Incident,
                          plugin_npm_name: e.constructor.plugin_npm_name,
                          Channel: e.constructor.Channel,
                          DescriptiveIncident: e,
                        },
                        a = new ut(s, t, this.mcid, n);
                      this.addChild(a, 0);
                    }
                  },
                },
              ]),
              n
            );
          })(Ue),
          pt = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r) {
              var o;
              return (
                i(this, n),
                ((o = t.call(this, {}, { id: e.id })).contexts = {}),
                (o.contexts[r.clipId] = r.context),
                (o.originalContextKey = r.clipId),
                (o.instantiatedCopiesContexts = r.instantiatedCopiesContexts),
                o.setUp(e, r),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "setUp",
                  value: function (e, t) {
                    for (
                      var n,
                        i,
                        r = this.originalContext.getElements(e.selector()),
                        o = r.length,
                        s = 0;
                      s < o;
                      s++
                    ) {
                      for (var a in ((n = r[s]),
                      (i = this._getElementMCID(n)),
                      this.instantiatedCopiesContexts))
                        this._setElementMCID(
                          this.instantiatedCopiesContexts[a],
                          this.instantiatedCopiesContexts[a].getElements(
                            e.selector()
                          )[s],
                          i
                        );
                      this._createElementIncident(n, e, t, s, o, i);
                    }
                  },
                },
                {
                  key: "_getElementMCID",
                  value: function (e) {
                    var t = this.originalContext.getMCID(e);
                    return (
                      t || ((t = je(!0)), this.originalContext.setMCID(e, t)), t
                    );
                  },
                },
                {
                  key: "_setElementMCID",
                  value: function (e, t, n) {
                    e.getMCID(t) || e.setMCID(t, n);
                  },
                },
                {
                  key: "_createElementIncident",
                  value: function (e, t, n, i, r, o) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        t.attrs,
                        "animatedAttrs"
                      )
                    ) {
                      var s = new dt(
                        t,
                        n,
                        o,
                        n.context.getElementSelectorByMCID(o)
                      );
                      this.addChild(s, 0);
                    } else if (
                      Object.prototype.hasOwnProperty.call(t.attrs, "keyframes")
                    );
                    else {
                      var a = t.attrs,
                        c = l({}, t.props, { selector: this.selector }),
                        u = {
                          incidentId: t.id,
                          attrs: a,
                          props: c,
                          Incident: t.constructor.Incident,
                          plugin_npm_name: t.constructor.plugin_npm_name,
                          Channel: t.constructor.Channel,
                          DescriptiveIncident: t,
                        },
                        d = new ut(u, n, o, null);
                      this.addChild(d, 0);
                    }
                  },
                },
                {
                  key: "originalContext",
                  get: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
              ]),
              n
            );
          })(Ue),
          ht = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r) {
              var o;
              return (
                i(this, n), ((o = t.call(this, e, r)).realClip = e.realClip), o
              );
            }
            return (
              o(n, [
                {
                  key: "_createElementIncident",
                  value: function (e, t, n, i, r, o) {
                    var s = t.realClip.exportConstructionArguments(),
                      a = {
                        incidentId: t.id,
                        attrs: s.attrs,
                        props: l({}, s.props, {
                          selector: n.context.getElementSelectorByMCID(o),
                          runTimeInfo: t.runTimeInfo,
                        }),
                        Incident: t.constructor.Incident,
                        plugin_npm_name: t.constructor.plugin_npm_name,
                        Channel: Ke,
                        DescriptiveIncident: t,
                      },
                      c = new ct(a, n, o, t);
                    this.addChild(c, 0);
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return v(u(n.prototype), "duration", this);
                  },
                  set: function (e) {
                    this.realClip._resize(e / this.realClip.duration),
                      (this._duration = e);
                  },
                },
              ]),
              n
            );
          })(pt);
        function ft(e, t) {
          var n,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ((i && "off" === e.audio) || (!i && "only" === e.audio))
            return null;
          if (
            Object.prototype.hasOwnProperty.call(e.props, "selector") &&
            ((!i && "~" === e.props.selector.charAt(0)) ||
              (i &&
                "~" !== e.props.selector.charAt(0) &&
                !e.constructor.isClip))
          )
            return null;
          if (e.constructor.isClip) {
            if (!Object.prototype.hasOwnProperty.call(e.props, "selector") || i)
              return i ? e.audioClip : e.realClip;
            (n = new ht(e, t)).plugin_channel_class = Te;
          } else if (e.constructor.isGroup)
            for (var r in ((n = at({
              id: e.id,
              attrs: e.attrs,
              props: e.props,
              Incident: e.constructor.Incident,
              plugin_npm_name: e.constructor.plugin_npm_name,
              Channel: e.constructor.Channel,
              DescriptiveIncident: e,
            })),
            e.children)) {
              var o = ft(e.children[r].leaf, t);
              null !== o && n.addChild(o, e.children[r].position);
            }
          else n = new pt(e, t);
          return n;
        }
        var mt = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r) {
              var o;
              return (
                i(this, n),
                ((o = t.call(this, e, r)).attrs = e),
                (o.props = r),
                (o.isTheClip = !0),
                (o.blockingWaitings = {}),
                (o.instantiatedChannels = {}),
                (o.isHostedClip = !0),
                (o.instantiatedCopiesContexts = {}),
                (o.instantiatedCopiesUnblockingMethods = []),
                o.onClipInitialise(),
                (o.runTimeInfo = o.props.runTimeInfo),
                (o.durationSubs = []),
                (o.audioClip = !1),
                o
              );
            }
            return (
              o(n, [
                { key: "onClipInitialise", value: function () {} },
                {
                  key: "contextLoading",
                  value: function () {
                    this.context.contextLoaded = !1;
                  },
                },
                {
                  key: "contextLoaded",
                  value: function () {
                    for (var e in ((this.context.contextLoaded = !0),
                    this.putMessageOnPipe(
                      "contextLoaded",
                      {},
                      {},
                      { selfExecute: !1, direction: ze }
                    ),
                    this.instantiatedChannels))
                      this.instantiatedChannels[e].recalcScratchValues();
                    for (
                      var t = 0;
                      t < this.instantiatedCopiesUnblockingMethods.length;
                      t++
                    )
                      this.instantiatedCopiesUnblockingMethods[t]();
                    this.unblock();
                  },
                },
                {
                  key: "getElements",
                  value: function (e) {
                    if (null !== this.props.host && void 0 !== this.props.host)
                      return this.context.getElements(e);
                    var t = [];
                    for (var n in this.instantiatedCopiesContexts)
                      for (
                        var i = this.instantiatedCopiesContexts[n].getElements(
                            e
                          ),
                          r = 0;
                        r < i.length;
                        r++
                      )
                        t.push(i[r]);
                    return t;
                  },
                },
                {
                  key: "addContext",
                  value: function (e) {
                    (this.instantiatedCopiesContexts[e.clipId] = e.context),
                      (e.instantiatedCopiesContexts = this.instantiatedCopiesContexts),
                      this.instantiatedCopiesUnblockingMethods.push(e.unblock);
                    var t = this.putMessageOnPipe(
                      "addContext",
                      e,
                      {},
                      { selfExecute: !1, direction: ze }
                    );
                    if (
                      1 === Object.keys(this.instantiatedCopiesContexts).length
                    ) {
                      for (var n in this.instantiatedChannels)
                        this.instantiatedChannels[n].recalcScratchValues(
                          e.clipId
                        );
                      this.context.nonFragmentedContext = e.context;
                    }
                    return t;
                  },
                },
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return { attrs: this.attrs, props: this.props };
                  },
                },
                {
                  key: "_resize",
                  value: function (e) {
                    for (var t in this.instantiatedChannels)
                      this.instantiatedChannels[t]._resize(e);
                    this.setNewDuration(this.duration * e);
                    for (var n = 0; n < this.durationSubs.length; n++)
                      this.durationSubs[n](this.duration);
                  },
                },
                {
                  key: "addIncident",
                  value: function (e) {
                    for (
                      var t = this,
                        n = this.putMessageOnPipe(
                          "addIncident",
                          {
                            incident: e.incident,
                            millisecond: e.millisecond,
                            parentGroupId: e.parentGroupId,
                            incidentFromDescription: ft,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                              instantiatedCopiesContexts: this
                                .instantiatedCopiesContexts,
                            },
                            audio: this.audioClip,
                          },
                          e.parentGroupId,
                          { selfExecute: !0, direction: ze }
                        ),
                        i = {},
                        r = 0;
                      r < n.length;
                      r++
                    ) {
                      var o = n[r].response.getIncidentsByChannel(
                        n[r].positionDelta + e.millisecond
                      );
                      for (var s in o) {
                        var a;
                        Object.prototype.hasOwnProperty.call(i, s) ||
                          (i[s] = []),
                          (a = i[s]).push.apply(a, y(o[s]));
                      }
                    }
                    var l = this.checkAddition(i);
                    return l.result
                      ? {
                          result: !0,
                          execute: function () {
                            l.execute();
                            for (var i = 0; i < n.length; i++)
                              for (var r in (n[i].responder.addChild(
                                n[i].response,
                                e.millisecond
                              ),
                              n[i].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: Ve }
                              ),
                              t.instantiatedCopiesContexts))
                                n[i].responder.putMessageOnPipe(
                                  "addContext",
                                  {
                                    clipId: r,
                                    context: t.instantiatedCopiesContexts[r],
                                  },
                                  "ContextAwareIncidents",
                                  { selfExecute: !1, direction: ze }
                                );
                          },
                        }
                      : l;
                  },
                },
                {
                  key: "checkAddition",
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "all-or-nothing",
                      n = !0,
                      i = [],
                      r = [];
                    for (var o in e) {
                      Object.prototype.hasOwnProperty.call(
                        this.instantiatedChannels,
                        o
                      ) ||
                        (this.instantiatedChannels[o] = new e[
                          o
                        ][0].incident.plugin_channel_class({
                          runTimeInfo: this.runTimeInfo,
                          context: this.context,
                          subscribe: this.props.subscribe,
                        }));
                      var s = this.instantiatedChannels[o].addIncidents(
                        e[o],
                        t
                      );
                      (n = n && s.result),
                        s.result ? r.push(s.execute) : (i = i.concat(s.errors));
                    }
                    var a = function () {
                        for (var e = 0; e < r.length; e++) r[e]();
                      },
                      l = { result: n, errors: i, execute: a };
                    return l;
                  },
                },
                {
                  key: "moveIncident",
                  value: function (e) {
                    for (
                      var t = this.putMessageOnPipe(
                          "moveIncident",
                          {
                            incidentId: e.id,
                            millisecond: e.millisecond,
                            parentGroupId: e.parentGroupId,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          e.parentGroupId,
                          { selfExecute: !0, direction: ze }
                        ),
                        n = {},
                        i = 0;
                      i < t.length;
                      i++
                    ) {
                      var r = t[i].response.getIncidentsByChannel(
                        t[i].positionDelta + e.millisecond
                      );
                      for (var o in r) {
                        var s;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (s = n[o]).push.apply(s, y(r[o]));
                      }
                    }
                    var a = this.checkMove(n, e.positionDelta);
                    return a.result
                      ? {
                          result: !0,
                          execute: function () {
                            a.execute();
                            for (var n = 0; n < t.length; n++)
                              t[n].responder.editPosition(
                                t[n].response.id,
                                e.millisecond
                              ),
                                t[
                                  n
                                ].responder.putMessageOnPipe(
                                  "recalcDuration",
                                  {},
                                  "Groups",
                                  { selfExecute: !0, direction: Ve }
                                );
                          },
                        }
                      : a;
                  },
                },
                {
                  key: "checkMove",
                  value: function (e, t) {
                    var n = !0,
                      i = [],
                      r = [];
                    for (var o in e) {
                      var s = this.instantiatedChannels[o].editIncidents(
                        e[o],
                        t
                      );
                      (n = n && s.result),
                        s.result ? r.push(s.execute) : (i = i.concat(s.errors));
                    }
                    return {
                      result: n,
                      errors: i,
                      execute: function () {
                        for (var e = 0; e < r.length; e++) r[e]();
                      },
                    };
                  },
                },
                {
                  key: "removeIncident",
                  value: function (e) {
                    for (
                      var t = this.putMessageOnPipe(
                          "removeIncident",
                          {
                            incidentId: e.id,
                            parentGroupId: e.parentGroupId,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          e.parentGroupId,
                          { selfExecute: !0, direction: ze }
                        ),
                        n = {},
                        i = 0;
                      i < t.length;
                      i++
                    ) {
                      var r = t[i].response.getIncidentsByChannel();
                      for (var o in r) {
                        var s;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (s = n[o]).push.apply(s, y(r[o]));
                      }
                    }
                    var a = this.checkDelete(n);
                    return a.result
                      ? {
                          result: !0,
                          execute: function () {
                            a.execute();
                            for (var e = 0; e < t.length; e++)
                              t[e].responder.removeChild(t[e].response.id),
                                t[
                                  e
                                ].responder.putMessageOnPipe(
                                  "recalcDuration",
                                  {},
                                  "Groups",
                                  { selfExecute: !0, direction: Ve }
                                );
                          },
                        }
                      : a;
                  },
                },
                {
                  key: "checkDelete",
                  value: function (e) {
                    var t = !0,
                      n = [],
                      i = [];
                    for (var r in e) {
                      var o = this.instantiatedChannels[r].removeIncidents(
                        e[r]
                      );
                      (t = t && o.result),
                        o.result ? i.push(o.execute) : (n = n.concat(o.errors));
                    }
                    return {
                      result: t,
                      errors: n,
                      execute: function () {
                        for (var e = 0; e < i.length; e++) i[e]();
                      },
                    };
                  },
                },
                {
                  key: "resizeIncident",
                  value: function (e) {
                    for (
                      var t = this.putMessageOnPipe(
                          "resize",
                          {
                            incidentId: e.id,
                            newSize: e.newSize,
                            fraction: e.fraction,
                            contextData: {
                              clipId: this.id,
                              context: this.context,
                            },
                            audio: this.audioClip,
                          },
                          e.id,
                          { selfExecute: !1, direction: ze }
                        ),
                        n = {},
                        i = 0;
                      i < t.length;
                      i++
                    ) {
                      var r = t[i].response.getIncidentsByChannel(
                        t[i].positionDelta
                      );
                      for (var o in r) {
                        var s;
                        Object.prototype.hasOwnProperty.call(n, o) ||
                          (n[o] = []),
                          (s = n[o]).push.apply(s, y(r[o]));
                      }
                    }
                    var a = 0;
                    t.length > 0 && (a = t[0].positionDelta);
                    var l = this.checkResize(e.fraction, n, a);
                    return l.result
                      ? {
                          result: !0,
                          execute: function () {
                            l.execute();
                            for (var n = 0; n < t.length; n++)
                              t[n].responder.setNewDuration(e.newSize);
                          },
                        }
                      : l;
                  },
                },
                {
                  key: "checkResize",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      i = !0,
                      r = [],
                      o = [];
                    for (var s in t) {
                      var a = Ae.systoleDiastoleProjections(t[s], e, n),
                        l = this.instantiatedChannels[s].checkResizedIncidents(
                          a
                        );
                      (i = i && l.result),
                        l.result ? o.push(l.execute) : (r = r.concat(l.errors));
                    }
                    var c = function () {
                        for (var e = 0; e < o.length; e++) o[e]();
                      },
                      u = { result: i, errors: r, execute: c };
                    return u;
                  },
                },
                {
                  key: "getIncidentsByChannel",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t = {};
                    return (
                      (t["@kissmybutton/self-contained-incidents"] = [
                        { millisecond: e, incident: this, id: this.id },
                      ]),
                      t
                    );
                  },
                },
                {
                  key: "setVolume",
                  value: function (e) {
                    this.volume = parseFloat(e);
                  },
                },
                { key: "_onGetContextOnce", value: function (e) {} },
                {
                  key: "handleRecalcDuration",
                  value: function (e, t) {
                    if (this._calculateDuration())
                      for (var n = 0; n < this.durationSubs.length; n++)
                        this.durationSubs[n](this.duration);
                    return !0;
                  },
                },
                {
                  key: "onProgress",
                  value: function (e, t, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if (!1 !== this.contextReady) {
                      for (var r in (n || (n = this.id),
                      this.instantiatedChannels)) {
                        var o = this.instantiatedChannels[r];
                        o.moveTo(this.runTimeInfo.currentMillisecond, t, n, i);
                      }
                      this.onAfterProgress(e, t);
                    } else this.setBlock();
                  },
                },
                { key: "onAfterProgress", value: function (e, t) {} },
                {
                  key: "flash",
                  value: function () {
                    for (var e in this.instantiatedChannels)
                      this.instantiatedChannels[e].moveTo(
                        0,
                        this.runTimeInfo.currentMillisecond,
                        this.id,
                        !0
                      );
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (e) {
                    this.durationSubs.push(e);
                  },
                },
                { key: "handleSetBlockingWaiting", value: function (e, t) {} },
                {
                  key: "handleRemoveBlockingWaiting",
                  value: function (e, t) {},
                },
                {
                  key: "contextReady",
                  get: function () {
                    return this.context.contextLoaded;
                  },
                },
                {
                  key: "context",
                  get: function () {
                    return this.ownContext;
                  },
                },
              ]),
              n
            );
          })(Ue),
          vt = (function () {
            function e() {
              i(this, e),
                (this.output = be.createGain()),
                (this.gainNode = be.createGain()),
                be.createStereoPanner &&
                  (this.pannerNode = be.createStereoPanner()),
                be.createStereoPanner
                  ? (this.pannerNode.connect(this.gainNode),
                    this.gainNode.connect(this.output),
                    (this.input = this.pannerNode))
                  : (this.gainNode.connect(this.output),
                    (this.input = this.gainNode));
            }
            return (
              o(e, [
                {
                  key: "connect",
                  value: function (e) {
                    this.output.connect(e);
                  },
                },
                {
                  key: "disconnect",
                  value: function () {
                    this.output.disconnect();
                  },
                },
              ]),
              e
            );
          })();
        function gt(e) {
          for (
            var t = window.atob(e), n = t.length, i = new Uint8Array(n), r = 0;
            r < n;
            r++
          )
            i[r] = t.charCodeAt(r);
          return i.buffer;
        }
        var yt = /\[data(-mcid="+\w+")+\]/g,
          bt = (function () {
            function e() {
              i(this, e), (this.subscribers = []);
            }
            return (
              o(e, [
                {
                  key: "sub",
                  value: function (e, t) {
                    this.subscribers.push(t);
                  },
                },
                {
                  key: "pub",
                  value: function (e) {
                    for (var t = 0; t < this.subscribers.length; t++)
                      this.subscribers[t](e);
                  },
                },
              ]),
              e
            );
          })(),
          xt = (function () {
            function e() {
              var t = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = arguments.length > 1 ? arguments[1] : void 0;
              i(this, e),
                (this.totalSources = n.length),
                (this.audioSources = {}),
                (this.elementsByMCID = {});
              for (
                var o = function (e) {
                    var i = n[e],
                      o = {
                        mcid: i.mcid || je(),
                        id: i.id,
                        src: i.src,
                        classes: i.classes || [],
                        base64: i.base64 || !1,
                        pubSub: new bt(),
                        soundLoaded: !1,
                        startValues: i.startValues || {},
                      };
                    if (
                      ((t.audioSources[o.id] = o),
                      (t.elementsByMCID[o.mcid] = o),
                      i.base64)
                    )
                      be.decodeAudioData(gt(i.src), function (e) {
                        t._setBuffer(o, e, r);
                      });
                    else {
                      var s = new XMLHttpRequest();
                      s.open("GET", o.src, !0),
                        (s.responseType = "arraybuffer"),
                        (t.soundLoaded = !1),
                        (s.onload = function () {
                          be.decodeAudioData(
                            s.response,
                            function (e) {
                              t._setBuffer(o, e, r);
                            },
                            t.onError
                          );
                        }),
                        s.send();
                    }
                  },
                  s = 0;
                s < n.length;
                s++
              )
                o(s);
              this.context = {
                document: document,
                window: window,
                rootElement: document.body,
                unmount: function () {},
                masterNode: r,
                audioContext: be,
                getElements: this.getElements.bind(this),
                getMCID: this.getMCID.bind(this),
                setMCID: this.setMCID.bind(this),
                getElementSelectorByMCID: this.getElementSelectorByMCID.bind(
                  this
                ),
                getElementByMCID: this.getElementByMCID.bind(this),
              };
            }
            return (
              o(e, [
                {
                  key: "_setBuffer",
                  value: function (e, t, n) {
                    (e.soundLoaded = !0),
                      (e.buffer = t),
                      (e.effectsAudioNode = new vt()),
                      e.effectsAudioNode.connect(n.input),
                      e.pubSub.pub();
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.elementsByMCID,
                      e
                    )
                      ? this.elementsByMCID[e]
                      : null;
                  },
                },
                {
                  key: "getElements",
                  value: function (e) {
                    if ("~" !== e.charAt(0)) {
                      if (yt.exec(e)) {
                        var t = e.split('"')[1];
                        return this.elementsByMCID[t];
                      }
                      return [];
                    }
                    if ("#" === (e = e.substr(1)).charAt(0))
                      return Object.prototype.hasOwnProperty.call(
                        this.audioSources,
                        e.substr(1)
                      )
                        ? [this.audioSources[e.substr(1)]]
                        : [];
                    if ("." === e.charAt(0)) {
                      var n = e.substr(1),
                        i = [];
                      for (var r in this.audioSources)
                        r.classes.indexOf(n) >= 0 && i.push(r);
                      return i;
                    }
                  },
                },
                {
                  key: "getMCID",
                  value: function (e) {
                    return e.mcid;
                  },
                },
                {
                  key: "setMCID",
                  value: function (e, t) {
                    e.mcid = t;
                  },
                },
                {
                  key: "getElementSelectorByMCID",
                  value: function (e) {
                    return '[data-mcid="'.concat(e, '"]');
                  },
                },
              ]),
              e
            );
          })(),
          kt = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r) {
              var o;
              i(this, n),
                ((o = t.call(this, e, r)).audioNode = new vt()),
                o.audioNode.connect(be.destination);
              var s = new xt(o.props.audioSources, o.audioNode);
              return (
                (o.ownContext = l({}, s.context, {
                  isHostedClip: !0,
                  contextLoaded: !0,
                })),
                (o.audioClip = !0),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "onProgress",
                  value: function (e, t, i) {
                    var r =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    v(u(n.prototype), "onProgress", this).call(
                      this,
                      e,
                      t,
                      this.id,
                      r
                    );
                  },
                },
                {
                  key: "_onGetContextOnce",
                  value: function (e) {
                    this.audioNode.disconnect(),
                      (this.parentClipContext = e),
                      this.audioNode.connect(e.masterNode.input);
                  },
                },
                {
                  key: "lastWish",
                  value: function () {
                    this.audioNode.output.disconnect(),
                      this.audioNode.output.connect(be.destination);
                  },
                },
                {
                  key: "setVolume",
                  value: function (e) {
                    this.audioNode.output.gain.value = e;
                  },
                },
              ]),
              n
            );
          })(mt),
          wt = (function (e) {
            c(n, e);
            var t = f(n);
            function n() {
              return i(this, n), t.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "onProgress",
                  value: function (e) {
                    var t = this;
                    if (!this.element.soundLoaded)
                      return (
                        this.setBlock("loading sound"),
                        this.element.pubSub.sub(this.id, function () {
                          t.unblock();
                        }),
                        !1
                      );
                    if ("gain" === this.attributeKey) {
                      var n =
                        (this.targetValue - this.getInitialValue()) * e +
                        this.getInitialValue();
                      this.element.effectsAudioNode.gainNode.gain.value = n;
                    } else if ("pan" === this.attributeKey) {
                      var i =
                        (this.targetValue - this.getInitialValue()) * e +
                        this.getInitialValue();
                      this.element.effectsAudioNode.pannerNode.pan.value = i;
                    }
                  },
                },
                {
                  key: "getScratchValue",
                  value: function () {
                    return "pan" === this.attributeKey
                      ? Object.prototype.hasOwnProperty.call(
                          this.element.startValues,
                          "pan"
                        )
                        ? this.element.startValues.pan
                        : 0
                      : "gain" === this.attributeKey
                      ? Object.prototype.hasOwnProperty.call(
                          this.element.startValues,
                          "gain"
                        )
                        ? this.element.startValues.gain
                        : 1
                      : void 0;
                  },
                },
              ]),
              n
            );
          })(ot),
          _t = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e) {
              var r;
              return (
                i(this, n),
                ((r = t.call(this, e)).playingIncidentsIds = []),
                (r.transitioned = !1),
                e.subscribe(je(), r._stateChange.bind(p(r)), 0, 1, !0),
                r
              );
            }
            return (
              o(n, [
                {
                  key: "_stateChange",
                  value: function (e, t) {
                    ("paused" !== t && "idle" !== t && "blocked" !== t) ||
                      (this._stopPlayingIncidents(), (this.transitioned = !0));
                  },
                },
                {
                  key: "_stopPlayingIncidents",
                  value: function () {
                    for (var e = 0; e < this.playingIncidentsIds.length; e++) {
                      var t = this.playingIncidentsIds[e].split("|||");
                      this._incidentById(t[0]).stop(t[1]);
                    }
                    this.playingIncidentsIds = [];
                  },
                },
                {
                  key: "moveTo",
                  value: function (e, t, n) {
                    var i =
                      arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3];
                    if ("transitional" === this.runTimeInfo.state || i) {
                      (this.transitioned = !0), this._stopPlayingIncidents();
                      for (var r = 0; r < this.incidents.length; r++) {
                        var o = this.incidents[r],
                          s = this._incidentById(o.id);
                        t < o.millisecond
                          ? s.onProgress(0, 0, n, !0)
                          : t > o.millisecond + s.duration
                          ? s.onProgress(1, s.duration, n, !0)
                          : s.onProgress(
                              (t - o.millisecond) / s.duration,
                              t - o.millisecond,
                              n,
                              !0
                            );
                      }
                    } else {
                      this.transitioned && ((e = 0), (this.transitioned = !1));
                      for (
                        var a = this,
                          l = qe(this.incidents, function (n) {
                            return (
                              n.millisecond >= e &&
                              n.millisecond < t &&
                              n.millisecond + a._incidentById(n.id).duration > t
                            );
                          }),
                          c = qe(this.incidents, function (n) {
                            return (
                              a._incidentById(n.id).duration + n.millisecond >
                                e &&
                              a._incidentById(n.id).duration + n.millisecond <=
                                t
                            );
                          }),
                          u = 0;
                        u < l.length;
                        u++
                      ) {
                        var d = l[u],
                          p = this._incidentById(d.id),
                          h = (t - d.millisecond) / p.duration >= 1,
                          f = h ? 1 : (t - d.millisecond) / p.duration,
                          m = h ? p.duration : t - d.millisecond,
                          v = p.play(f, m, n);
                        !0 === v &&
                          this.playingIncidentsIds.push(
                            "".concat(d.id).concat("|||").concat(n)
                          );
                      }
                      for (var g = 0; g < c.length; g++) {
                        var y = c[g],
                          b = this._incidentById(y.id);
                        b.stop(n);
                        var x = this.playingIncidentsIds.indexOf(
                          "".concat(y.id).concat("|||").concat(n)
                        );
                        x > -1 && this.playingIncidentsIds.splice(x, 1);
                      }
                      this.runTimeInfo.currentMillisecond = t;
                    }
                  },
                },
              ]),
              n
            );
          })(Ke),
          Ct = _(null, function (e) {
            return {
              F: function t() {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = arguments.length > 2 ? arguments[2] : void 0;
                i(this, t),
                  e(this),
                  (this.attrs = n),
                  (this.props = r),
                  (this.dna = o),
                  (this.context = o.context),
                  (this.mcid = o.mcid),
                  (this.id = r.id || je()),
                  (this.modelId = r.modelId),
                  (this.gotContext = !1),
                  (this.plugin_channel_class = _t),
                  (this.mc_plugin_npm_name = "motor-cortex-js-media-playback"),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "plugin_channel_class"
                  ) && (this.plugin_channel_class = r.plugin_channel_class),
                  Object.prototype.hasOwnProperty.call(
                    r,
                    "mc_plugin_npm_name"
                  ) && (this.mc_plugin_npm_name = r.mc_plugin_npm_name),
                  (this.hasIncidents = !1),
                  (this.autoGenerated = !1),
                  this.onInitialise(n, r);
              },
              d: [
                {
                  kind: "get",
                  key: "selector",
                  value: function () {
                    return this.props.selector;
                  },
                },
                {
                  kind: "get",
                  key: "element",
                  value: function () {
                    return this.context.getElementByMCID(this.mcid);
                  },
                },
                {
                  kind: "method",
                  decorators: [rt],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    try {
                      if (!0 === this.context.fragment) return;
                      this.gotContext ||
                        (this.onGetContext(), (this.gotContext = !0));
                    } catch (e) {
                      console.log(e), console.log(this.mcid);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    Ae.info(
                      'Overwritte the "onGetContext" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                { kind: "method", key: "lastWish", value: function () {} },
                {
                  kind: "method",
                  key: "onInitialise",
                  value: function () {
                    Ae.info(
                      'Overwritte the "onInialise" method with the code you want to get executed',
                      "info"
                    );
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (e, t) {},
                },
                {
                  kind: "method",
                  key: "play",
                  value: function (e) {
                    return !0;
                  },
                },
                { kind: "method", key: "stop", value: function () {} },
                {
                  kind: "method",
                  decorators: [Fe],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [We],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          }),
          It = {
            npm_name: "@kissmybutton/motorcortex-soundsystem",
            incidents: [
              {
                exportable: (function (e) {
                  c(n, e);
                  var t = f(n);
                  function n() {
                    return i(this, n), t.apply(this, arguments);
                  }
                  return (
                    o(n, [
                      {
                        key: "play",
                        value: function (e) {
                          var t = this;
                          if (!this.element.soundLoaded)
                            return (
                              this.setBlock("loading sound"),
                              this.element.pubSub.sub(this.id, function () {
                                t.unblock();
                              }),
                              !1
                            );
                          var n = 0;
                          return (
                            Object.prototype.hasOwnProperty.call(
                              this.props,
                              "startFrom"
                            ) && (n = this.props.startFrom),
                            (this.audioNode = be.createBufferSource()),
                            (this.audioNode.buffer = this.element.buffer),
                            this.audioNode.connect(
                              this.element.effectsAudioNode.input
                            ),
                            this.audioNode.start(0, (e + n) / 1e3),
                            !0
                          );
                        },
                      },
                      {
                        key: "stop",
                        value: function () {
                          this.audioNode.stop();
                        },
                      },
                    ]),
                    n
                  );
                })(Ct),
                name: "AudioPlayback",
              },
              { exportable: wt, name: "AudioEffect" },
            ],
            Clip: { exportable: kt },
            audio: "only",
          },
          Ot = ce(function (e, t) {
            var n = "[object Arguments]",
              i = "[object Map]",
              r = "[object Object]",
              o = "[object Set]",
              s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              a = /^\w*$/,
              l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              c = /^\s+|\s+$/g,
              u = /\\(\\)?/g,
              d = /^[-+]0x[0-9a-f]+$/i,
              p = /^0b[01]+$/i,
              h = /^\[object .+?Constructor\]$/,
              f = /^0o[0-7]+$/i,
              m = /^(?:0|[1-9]\d*)$/,
              v = {};
            (v["[object Float32Array]"] = v["[object Float64Array]"] = v[
              "[object Int8Array]"
            ] = v["[object Int16Array]"] = v["[object Int32Array]"] = v[
              "[object Uint8Array]"
            ] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v[
              "[object Uint32Array]"
            ] = !0),
              (v[n] = v["[object Array]"] = v["[object ArrayBuffer]"] = v[
                "[object Boolean]"
              ] = v["[object DataView]"] = v["[object Date]"] = v[
                "[object Error]"
              ] = v["[object Function]"] = v[i] = v["[object Number]"] = v[
                r
              ] = v["[object RegExp]"] = v[o] = v["[object String]"] = v[
                "[object WeakMap]"
              ] = !1);
            var g = parseInt,
              y = "object" == typeof ae && ae && ae.Object === Object && ae,
              b =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              x = y || b || Function("return this")(),
              k = t && !t.nodeType && t,
              w = k && e && !e.nodeType && e,
              _ = w && w.exports === k,
              C = _ && y.process,
              I = (function () {
                try {
                  return C && C.binding && C.binding("util");
                } catch (e) {}
              })(),
              O = I && I.isTypedArray;
            function E(e, t) {
              for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            function P(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, i) {
                  n[++t] = [i, e];
                }),
                n
              );
            }
            function j(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            var M,
              S,
              B,
              A = Array.prototype,
              D = Function.prototype,
              T = Object.prototype,
              L = x["__core-js_shared__"],
              V = D.toString,
              z = T.hasOwnProperty,
              N = (M = /[^.]+$/.exec((L && L.keys && L.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + M
                : "",
              $ = T.toString,
              R = RegExp(
                "^" +
                  V.call(z)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              H = _ ? x.Buffer : void 0,
              F = x.Symbol,
              G = x.Uint8Array,
              W = T.propertyIsEnumerable,
              U = A.splice,
              q = F ? F.toStringTag : void 0,
              J = Object.getOwnPropertySymbols,
              K = H ? H.isBuffer : void 0,
              X =
                ((S = Object.keys),
                (B = Object),
                function (e) {
                  return S(B(e));
                }),
              Q = Math.max,
              Z = je(x, "DataView"),
              Y = je(x, "Map"),
              ee = je(x, "Promise"),
              te = je(x, "Set"),
              ne = je(x, "WeakMap"),
              ie = je(Object, "create"),
              re = ze(Z),
              oe = ze(Y),
              se = ze(ee),
              le = ze(te),
              ce = ze(ne),
              ue = F ? F.prototype : void 0,
              de = ue ? ue.valueOf : void 0,
              pe = ue ? ue.toString : void 0;
            function he(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function fe(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function me(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var i = e[t];
                this.set(i[0], i[1]);
              }
            }
            function ve(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new me(); ++t < n; ) this.add(e[t]);
            }
            function ge(e) {
              var t = (this.__data__ = new fe(e));
              this.size = t.size;
            }
            function ye(e, t) {
              for (var n = e.length; n--; ) if ($e(e[n][0], t)) return n;
              return -1;
            }
            function be(e, t) {
              for (var n = 0, i = (t = Ie(t, e)).length; null != e && n < i; )
                e = e[Ve(t[n++])];
              return n && n == i ? e : void 0;
            }
            function xe(e) {
              return null == e
                ? void 0 === e
                  ? "[object Undefined]"
                  : "[object Null]"
                : q && q in Object(e)
                ? (function (e) {
                    var t = z.call(e, q),
                      n = e[q];
                    try {
                      e[q] = void 0;
                      var i = !0;
                    } catch (e) {}
                    var r = $.call(e);
                    return i && (t ? (e[q] = n) : delete e[q]), r;
                  })(e)
                : (function (e) {
                    return $.call(e);
                  })(e);
            }
            function ke(e, t) {
              return null != e && t in Object(e);
            }
            function we(e) {
              return qe(e) && xe(e) == n;
            }
            function _e(e, t, s, a, l) {
              return (
                e === t ||
                (null == e || null == t || (!qe(e) && !qe(t))
                  ? e != e && t != t
                  : (function (e, t, s, a, l, c) {
                      var u = He(e),
                        d = He(t),
                        p = u ? "[object Array]" : Se(e),
                        h = d ? "[object Array]" : Se(t),
                        f = (p = p == n ? r : p) == r,
                        m = (h = h == n ? r : h) == r,
                        v = p == h;
                      if (v && Fe(e)) {
                        if (!Fe(t)) return !1;
                        (u = !0), (f = !1);
                      }
                      if (v && !f)
                        return (
                          c || (c = new ge()),
                          u || Ke(e)
                            ? Oe(e, t, s, a, l, c)
                            : (function (e, t, n, r, s, a, l) {
                                switch (n) {
                                  case "[object DataView]":
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case "[object ArrayBuffer]":
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !a(new G(e), new G(t))
                                    );
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Number]":
                                    return $e(+e, +t);
                                  case "[object Error]":
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case "[object RegExp]":
                                  case "[object String]":
                                    return e == t + "";
                                  case i:
                                    var c = P;
                                  case o:
                                    var u = 1 & r;
                                    if ((c || (c = j), e.size != t.size && !u))
                                      return !1;
                                    var d = l.get(e);
                                    if (d) return d == t;
                                    (r |= 2), l.set(e, t);
                                    var p = Oe(c(e), c(t), r, s, a, l);
                                    return l.delete(e), p;
                                  case "[object Symbol]":
                                    if (de) return de.call(e) == de.call(t);
                                }
                                return !1;
                              })(e, t, p, s, a, l, c)
                        );
                      if (!(1 & s)) {
                        var g = f && z.call(e, "__wrapped__"),
                          y = m && z.call(t, "__wrapped__");
                        if (g || y) {
                          var b = g ? e.value() : e,
                            x = y ? t.value() : t;
                          return c || (c = new ge()), l(b, x, s, a, c);
                        }
                      }
                      return (
                        !!v &&
                        (c || (c = new ge()),
                        (function (e, t, n, i, r, o) {
                          var s = 1 & n,
                            a = Ee(e),
                            l = a.length;
                          if (l != Ee(t).length && !s) return !1;
                          for (var c = l; c--; ) {
                            var u = a[c];
                            if (!(s ? u in t : z.call(t, u))) return !1;
                          }
                          var d = o.get(e);
                          if (d && o.get(t)) return d == t;
                          var p = !0;
                          o.set(e, t), o.set(t, e);
                          for (var h = s; ++c < l; ) {
                            var f = e[(u = a[c])],
                              m = t[u];
                            if (i)
                              var v = s
                                ? i(m, f, u, t, e, o)
                                : i(f, m, u, e, t, o);
                            if (
                              !(void 0 === v ? f === m || r(f, m, n, i, o) : v)
                            ) {
                              p = !1;
                              break;
                            }
                            h || (h = "constructor" == u);
                          }
                          if (p && !h) {
                            var g = e.constructor,
                              y = t.constructor;
                            g == y ||
                              !("constructor" in e) ||
                              !("constructor" in t) ||
                              ("function" == typeof g &&
                                g instanceof g &&
                                "function" == typeof y &&
                                y instanceof y) ||
                              (p = !1);
                          }
                          return o.delete(e), o.delete(t), p;
                        })(e, t, s, a, l, c))
                      );
                    })(e, t, s, a, _e, l))
              );
            }
            function Ce(e) {
              if ("string" == typeof e) return e;
              if (He(e))
                return (
                  (function (e, t) {
                    for (
                      var n = -1, i = null == e ? 0 : e.length, r = Array(i);
                      ++n < i;

                    )
                      r[n] = t(e[n], n, e);
                    return r;
                  })(e, Ce) + ""
                );
              if (Je(e)) return pe ? pe.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function Ie(e, t) {
              return He(e)
                ? e
                : Ae(e, t)
                ? [e]
                : Le(
                    (function (e) {
                      return null == e ? "" : Ce(e);
                    })(e)
                  );
            }
            function Oe(e, t, n, i, r, o) {
              var s = 1 & n,
                a = e.length,
                l = t.length;
              if (a != l && !(s && l > a)) return !1;
              var c = o.get(e);
              if (c && o.get(t)) return c == t;
              var u = -1,
                d = !0,
                p = 2 & n ? new ve() : void 0;
              for (o.set(e, t), o.set(t, e); ++u < a; ) {
                var h = e[u],
                  f = t[u];
                if (i) var m = s ? i(f, h, u, t, e, o) : i(h, f, u, e, t, o);
                if (void 0 !== m) {
                  if (m) continue;
                  d = !1;
                  break;
                }
                if (p) {
                  if (
                    !E(t, function (e, t) {
                      if (((s = t), !p.has(s) && (h === e || r(h, e, n, i, o))))
                        return p.push(t);
                      var s;
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (h !== f && !r(h, f, n, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(e), o.delete(t), d;
            }
            function Ee(e) {
              return (function (e, t, n) {
                var i = t(e);
                return He(e)
                  ? i
                  : (function (e, t) {
                      for (var n = -1, i = t.length, r = e.length; ++n < i; )
                        e[r + n] = t[n];
                      return e;
                    })(i, n(e));
              })(e, Xe, Me);
            }
            function Pe(e, t) {
              var n,
                i,
                r = e.__data__;
              return (
                "string" == (i = typeof (n = t)) ||
                "number" == i ||
                "symbol" == i ||
                "boolean" == i
                  ? "__proto__" !== n
                  : null === n
              )
                ? r["string" == typeof t ? "string" : "hash"]
                : r.map;
            }
            function je(e, t) {
              var n = (function (e, t) {
                return null == e ? void 0 : e[t];
              })(e, t);
              return (function (e) {
                return (
                  !(
                    !Ue(e) ||
                    (function (e) {
                      return !!N && N in e;
                    })(e)
                  ) && (Ge(e) ? R : h).test(ze(e))
                );
              })(n)
                ? n
                : void 0;
            }
            (he.prototype.clear = function () {
              (this.__data__ = ie ? ie(null) : {}), (this.size = 0);
            }),
              (he.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (he.prototype.get = function (e) {
                var t = this.__data__;
                if (ie) {
                  var n = t[e];
                  return "__lodash_hash_undefined__" === n ? void 0 : n;
                }
                return z.call(t, e) ? t[e] : void 0;
              }),
              (he.prototype.has = function (e) {
                var t = this.__data__;
                return ie ? void 0 !== t[e] : z.call(t, e);
              }),
              (he.prototype.set = function (e, t) {
                var n = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (n[e] = ie && void 0 === t ? "__lodash_hash_undefined__" : t),
                  this
                );
              }),
              (fe.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (fe.prototype.delete = function (e) {
                var t = this.__data__,
                  n = ye(t, e);
                return !(
                  n < 0 ||
                  (n == t.length - 1 ? t.pop() : U.call(t, n, 1),
                  --this.size,
                  0)
                );
              }),
              (fe.prototype.get = function (e) {
                var t = this.__data__,
                  n = ye(t, e);
                return n < 0 ? void 0 : t[n][1];
              }),
              (fe.prototype.has = function (e) {
                return ye(this.__data__, e) > -1;
              }),
              (fe.prototype.set = function (e, t) {
                var n = this.__data__,
                  i = ye(n, e);
                return (
                  i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this
                );
              }),
              (me.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new he(),
                    map: new (Y || fe)(),
                    string: new he(),
                  });
              }),
              (me.prototype.delete = function (e) {
                var t = Pe(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (me.prototype.get = function (e) {
                return Pe(this, e).get(e);
              }),
              (me.prototype.has = function (e) {
                return Pe(this, e).has(e);
              }),
              (me.prototype.set = function (e, t) {
                var n = Pe(this, e),
                  i = n.size;
                return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
              }),
              (ve.prototype.add = ve.prototype.push = function (e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this;
              }),
              (ve.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (ge.prototype.clear = function () {
                (this.__data__ = new fe()), (this.size = 0);
              }),
              (ge.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t.delete(e);
                return (this.size = t.size), n;
              }),
              (ge.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (ge.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (ge.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof fe) {
                  var i = n.__data__;
                  if (!Y || i.length < 199)
                    return i.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new me(i);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            var Me = J
                ? function (e) {
                    return null == e
                      ? []
                      : ((e = Object(e)),
                        (function (e, t) {
                          for (
                            var n = -1,
                              i = null == e ? 0 : e.length,
                              r = 0,
                              o = [];
                            ++n < i;

                          ) {
                            var s = e[n];
                            t(s) && (o[r++] = s);
                          }
                          return o;
                        })(J(e), function (t) {
                          return W.call(e, t);
                        }));
                  }
                : function () {
                    return [];
                  },
              Se = xe;
            function Be(e, t) {
              var n = typeof e;
              return (
                !!(t = null == t ? 9007199254740991 : t) &&
                ("number" == n || ("symbol" != n && m.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function Ae(e, t) {
              if (He(e)) return !1;
              var n = typeof e;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != e &&
                  !Je(e)
                ) ||
                a.test(e) ||
                !s.test(e) ||
                (null != t && e in Object(t))
              );
            }
            function De(e) {
              return e == e && !Ue(e);
            }
            function Te(e, t) {
              return function (n) {
                return (
                  null != n && n[e] === t && (void 0 !== t || e in Object(n))
                );
              };
            }
            ((Z && "[object DataView]" != Se(new Z(new ArrayBuffer(1)))) ||
              (Y && Se(new Y()) != i) ||
              (ee && "[object Promise]" != Se(ee.resolve())) ||
              (te && Se(new te()) != o) ||
              (ne && "[object WeakMap]" != Se(new ne()))) &&
              (Se = function (e) {
                var t = xe(e),
                  n = t == r ? e.constructor : void 0,
                  s = n ? ze(n) : "";
                if (s)
                  switch (s) {
                    case re:
                      return "[object DataView]";
                    case oe:
                      return i;
                    case se:
                      return "[object Promise]";
                    case le:
                      return o;
                    case ce:
                      return "[object WeakMap]";
                  }
                return t;
              });
            var Le = (function (e) {
              var t = Ne(
                  function (e) {
                    var t = [];
                    return (
                      46 === e.charCodeAt(0) && t.push(""),
                      e.replace(l, function (e, n, i, r) {
                        t.push(i ? r.replace(u, "$1") : n || e);
                      }),
                      t
                    );
                  },
                  function (e) {
                    return 500 === n.size && n.clear(), e;
                  }
                ),
                n = t.cache;
              return t;
            })();
            function Ve(e) {
              if ("string" == typeof e || Je(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
            }
            function ze(e) {
              if (null != e) {
                try {
                  return V.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            }
            function Ne(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw new TypeError("Expected a function");
              var n = function () {
                var i = arguments,
                  r = t ? t.apply(this, i) : i[0],
                  o = n.cache;
                if (o.has(r)) return o.get(r);
                var s = e.apply(this, i);
                return (n.cache = o.set(r, s) || o), s;
              };
              return (n.cache = new (Ne.Cache || me)()), n;
            }
            function $e(e, t) {
              return e === t || (e != e && t != t);
            }
            Ne.Cache = me;
            var Re = we(
                (function () {
                  return arguments;
                })()
              )
                ? we
                : function (e) {
                    return qe(e) && z.call(e, "callee") && !W.call(e, "callee");
                  },
              He = Array.isArray,
              Fe =
                K ||
                function () {
                  return !1;
                };
            function Ge(e) {
              if (!Ue(e)) return !1;
              var t = xe(e);
              return (
                "[object Function]" == t ||
                "[object GeneratorFunction]" == t ||
                "[object AsyncFunction]" == t ||
                "[object Proxy]" == t
              );
            }
            function We(e) {
              return (
                "number" == typeof e &&
                e > -1 &&
                e % 1 == 0 &&
                e <= 9007199254740991
              );
            }
            function Ue(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
            }
            function qe(e) {
              return null != e && "object" == typeof e;
            }
            function Je(e) {
              return (
                "symbol" == typeof e || (qe(e) && "[object Symbol]" == xe(e))
              );
            }
            var Ke = O
              ? (function (e) {
                  return function (t) {
                    return e(t);
                  };
                })(O)
              : function (e) {
                  return qe(e) && We(e.length) && !!v[xe(e)];
                };
            function Xe(e) {
              return null != (t = e) && We(t.length) && !Ge(t)
                ? (function (e, t) {
                    var n = He(e),
                      i = !n && Re(e),
                      r = !n && !i && Fe(e),
                      o = !n && !i && !r && Ke(e),
                      s = n || i || r || o,
                      a = s
                        ? (function (e, t) {
                            for (var n = -1, i = Array(e); ++n < e; )
                              i[n] = t(n);
                            return i;
                          })(e.length, String)
                        : [],
                      l = a.length;
                    for (var c in e)
                      (!t && !z.call(e, c)) ||
                        (s &&
                          ("length" == c ||
                            (r && ("offset" == c || "parent" == c)) ||
                            (o &&
                              ("buffer" == c ||
                                "byteLength" == c ||
                                "byteOffset" == c)) ||
                            Be(c, l))) ||
                        a.push(c);
                    return a;
                  })(e)
                : (function (e) {
                    if (
                      ((n = (t = e) && t.constructor),
                      t !== (("function" == typeof n && n.prototype) || T))
                    )
                      return X(e);
                    var t,
                      n,
                      i = [];
                    for (var r in Object(e))
                      z.call(e, r) && "constructor" != r && i.push(r);
                    return i;
                  })(e);
              var t;
            }
            function Qe(e) {
              return e;
            }
            e.exports = function (e, t, n) {
              var i = null == e ? 0 : e.length;
              if (!i) return -1;
              var r,
                o,
                s =
                  null == n
                    ? 0
                    : ((o =
                        (r = (function (e) {
                          return e
                            ? (e = (function (e) {
                                if ("number" == typeof e) return e;
                                if (Je(e)) return NaN;
                                if (Ue(e)) {
                                  var t =
                                    "function" == typeof e.valueOf
                                      ? e.valueOf()
                                      : e;
                                  e = Ue(t) ? t + "" : t;
                                }
                                if ("string" != typeof e)
                                  return 0 === e ? e : +e;
                                e = e.replace(c, "");
                                var n = p.test(e);
                                return n || f.test(e)
                                  ? g(e.slice(2), n ? 2 : 8)
                                  : d.test(e)
                                  ? NaN
                                  : +e;
                              })(e)) ===
                                1 / 0 || e === -1 / 0
                              ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                              : e == e
                              ? e
                              : 0
                            : 0 === e
                            ? e
                            : 0;
                        })(n)) % 1),
                      r == r ? (o ? r - o : r) : 0);
              return (
                s < 0 && (s = Q(i + s, 0)),
                (function (e, t, n, i) {
                  for (var r = e.length, o = n + -1; ++o < r; )
                    if (t(e[o], o, e)) return o;
                  return -1;
                })(
                  e,
                  (function (e) {
                    return "function" == typeof e
                      ? e
                      : null == e
                      ? Qe
                      : "object" == typeof e
                      ? He(e)
                        ? (function (e, t) {
                            return Ae(e) && De(t)
                              ? Te(Ve(e), t)
                              : function (n) {
                                  var i = (function (e, t, n) {
                                    var i = null == e ? void 0 : be(e, t);
                                    return void 0 === i ? void 0 : i;
                                  })(n, e);
                                  return void 0 === i && i === t
                                    ? (function (e, t) {
                                        return (
                                          null != e &&
                                          (function (e, t, n) {
                                            for (
                                              var i = -1,
                                                r = (t = Ie(t, e)).length,
                                                o = !1;
                                              ++i < r;

                                            ) {
                                              var s = Ve(t[i]);
                                              if (!(o = null != e && n(e, s)))
                                                break;
                                              e = e[s];
                                            }
                                            return o || ++i != r
                                              ? o
                                              : !!(r =
                                                  null == e ? 0 : e.length) &&
                                                  We(r) &&
                                                  Be(s, r) &&
                                                  (He(e) || Re(e));
                                          })(e, t, ke)
                                        );
                                      })(n, e)
                                    : _e(t, i, 3);
                                };
                          })(e[0], e[1])
                        : (function (e) {
                            var t = (function (e) {
                              for (var t = Xe(e), n = t.length; n--; ) {
                                var i = t[n],
                                  r = e[i];
                                t[n] = [i, r, De(r)];
                              }
                              return t;
                            })(e);
                            return 1 == t.length && t[0][2]
                              ? Te(t[0][0], t[0][1])
                              : function (n) {
                                  return (
                                    n === e ||
                                    (function (e, t, n, i) {
                                      var r = n.length,
                                        o = r;
                                      if (null == e) return !o;
                                      for (e = Object(e); r--; ) {
                                        var s = n[r];
                                        if (
                                          s[2] ? s[1] !== e[s[0]] : !(s[0] in e)
                                        )
                                          return !1;
                                      }
                                      for (; ++r < o; ) {
                                        var a = (s = n[r])[0],
                                          l = e[a],
                                          c = s[1];
                                        if (s[2]) {
                                          if (void 0 === l && !(a in e))
                                            return !1;
                                        } else {
                                          var u,
                                            d = new ge();
                                          if (
                                            !(void 0 === u
                                              ? _e(c, l, 3, i, d)
                                              : u)
                                          )
                                            return !1;
                                        }
                                      }
                                      return !0;
                                    })(n, 0, t)
                                  );
                                };
                          })(e)
                      : Ae((t = e))
                      ? ((n = Ve(t)),
                        function (e) {
                          return null == e ? void 0 : e[n];
                        })
                      : (function (e) {
                          return function (t) {
                            return be(t, e);
                          };
                        })(t);
                    var t, n;
                  })(t),
                  s
                )
              );
            };
          }),
          Et = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              i(this, e),
                (this.realArray = []),
                null != t && (this.realArray = t);
            }
            return (
              o(e, [
                {
                  key: "_hasOwnProperty",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.realArray,
                      e
                    );
                  },
                },
                {
                  key: "_get",
                  value: function (e) {
                    return this.realArray[e];
                  },
                },
                {
                  key: "_set",
                  value: function (e, t) {
                    this.realArray[e] = t;
                  },
                },
                {
                  key: "_keys",
                  value: function () {
                    return Object.keys(this.realArray);
                  },
                },
                {
                  key: "_delete",
                  value: function (e) {
                    return delete this.realArray[e];
                  },
                },
                {
                  key: "_export",
                  value: function () {
                    return this.realArray;
                  },
                },
              ]),
              e
            );
          })();
        function Pt(e, t, n, i) {
          var r = !1;
          for (var o in t)
            Object.prototype.hasOwnProperty.call(n, o) ||
              ((r = !0), (i[o] = t[o]));
          return (e.animatedAttributeValue = i), r;
        }
        function jt(e, t, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = e[i],
            s = t._get(o.id);
          s.setInitialValue(n, r);
          var a = Pt(
            s,
            s.initialValue,
            s.originalAnimatedAttributeValue,
            JSON.parse(JSON.stringify(s.animatedAttributeValue))
          );
          a && (s.lastWish(), s.onGetContext()),
            a &&
              i < e.length - 1 &&
              jt(e, t, s.animatedAttributeValue, i + 1, !1);
        }
        var Mt = (function () {
            function e(t) {
              i(this, e),
                (this.originalArray = t),
                (this.extraArray = {}),
                (this.addedKeys = []),
                (this.removedKeys = []);
            }
            return (
              o(e, [
                {
                  key: "_hasOwnProperty",
                  value: function (e) {
                    return (
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        e
                      ) ||
                      Object.prototype.hasOwnProperty.call(this.extraArray, e)
                    );
                  },
                },
                {
                  key: "_get",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.extraArray,
                      e
                    )
                      ? this.extraArray[e]
                      : Object.prototype.hasOwnProperty.call(
                          this.originalArray,
                          e
                        )
                      ? ((this.extraArray[e] = l({}, this.originalArray[e])),
                        this.extraArray[e])
                      : void 0;
                  },
                },
                {
                  key: "_set",
                  value: function (e, t) {
                    (this.extraArray[e] = t),
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        e
                      ) || this.addedKeys.push(e);
                    var n = this.removedKeys.indexOf(e);
                    n > -1 && this.removedKeys.splice(n, 1);
                  },
                },
                {
                  key: "_keys",
                  value: function () {
                    for (
                      var e = Object.keys(this.originalArray).concat(
                          this.addedKeys
                        ),
                        t = 0;
                      t < this.removedKeys.length;
                      t++
                    ) {
                      var n = this.removedKeys.indexOf(this.removedKeys[t]);
                      e.splice(n, 1);
                    }
                    return e;
                  },
                },
                {
                  key: "_delete",
                  value: function (e) {
                    var t = this.addedKeys.indexOf(e);
                    return t > -1
                      ? (this.addedKeys.splice(t), delete this.extraArray[e])
                      : this.removedKeys.push(e);
                  },
                },
                {
                  key: "_export",
                  value: function () {
                    for (var e in this.extraArray)
                      this.originalArray[e] = this.extraArray[e];
                    for (var t = 0; t < this.removedKeys.length; t++)
                      delete this.originalArray[this.removedKeys[t]];
                    return this.originalArray;
                  },
                },
              ]),
              e
            );
          })(),
          St = (function (e) {
            c(n, e);
            var t = f(n);
            function n() {
              return i(this, n), t.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "_get",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.extraArray,
                      e
                    )
                      ? this.extraArray[e]
                      : Object.prototype.hasOwnProperty.call(
                          this.originalArray,
                          e
                        )
                      ? this.originalArray[e]
                      : void 0;
                  },
                },
              ]),
              n
            );
          })(Mt),
          Bt = (function (e) {
            c(n, e);
            var t = f(n);
            function n() {
              return i(this, n), t.apply(this, arguments);
            }
            return (
              o(n, [
                {
                  key: "_get",
                  value: function (e) {
                    if (
                      Object.prototype.hasOwnProperty.call(this.extraArray, e)
                    )
                      return this.extraArray[e];
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        e
                      )
                    ) {
                      this.extraArray[e] = [];
                      for (var t = 0; t < this.originalArray[e].length; t++)
                        this.extraArray[e].push({
                          id: this.originalArray[e][t].id,
                          millisecond: 1 * this.originalArray[e][t].millisecond,
                        });
                      return this.extraArray[e];
                    }
                  },
                },
              ]),
              n
            );
          })(Mt),
          At = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              i(this, e),
                (this.lanes = new Et({})),
                t.lanes && (this.lanes = t.lanes),
                (this.comboAttributes = {}),
                null != t.comboAttributes &&
                  (this.comboAttributes = t.comboAttributes),
                (this.runTimeInfo = t.runTimeInfo),
                (this.belongingLaneKeysByAnimationId = new Et({})),
                t.belongingLaneKeysByAnimationId &&
                  (this.belongingLaneKeysByAnimationId =
                    t.belongingLaneKeysByAnimationId),
                (this.incidentsById = new Et({})),
                t.incidentsById && (this.incidentsById = t.incidentsById);
            }
            return (
              o(e, [
                {
                  key: "_resize",
                  value: function (e) {
                    for (var t = this.lanes._keys(), n = 0; n < t.length; n++)
                      for (
                        var i = t[n], r = this.lanes._get(i), o = 0;
                        o < r.length;
                        o++
                      )
                        r[o].millisecond = r[o].millisecond * e;
                  },
                },
                {
                  key: "createTestLanesSanbox",
                  value: function () {
                    var t = {
                      lanes: new Bt(this.lanes._export()),
                      belongingLaneKeysByAnimationId: new Mt(
                        this.belongingLaneKeysByAnimationId._export()
                      ),
                      incidentsById: new St(this.incidentsById._export()),
                    };
                    return (
                      this.comboAttributes &&
                        (t.comboAttributes = this.comboAttributes),
                      new e(t)
                    );
                  },
                },
                {
                  key: "getLanesCopy",
                  value: function (e) {
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push({
                        id: e[n].id,
                        millisecond: 1 * e[n].millisecond,
                      });
                    return t;
                  },
                },
                {
                  key: "getLaneElementsClone",
                  value: function (e) {
                    return { id: e.id, millisecond: 1 * e.millisecond };
                  },
                },
                {
                  key: "applySandboxChanges",
                  value: function (e) {
                    (this.lanes = new Et(e.lanes._export())),
                      (this.belongingLaneKeysByAnimationId = new Et(
                        e.belongingLaneKeysByAnimationId._export()
                      )),
                      (this.incidentsById = new Et(e.incidentsById._export()));
                  },
                },
                {
                  key: "getLane",
                  value: function (e, t) {
                    return this.lanes._get(Se(e, t));
                  },
                },
                {
                  key: "laneExists",
                  value: function (e, t) {
                    var n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      i = Se(e, t);
                    return (
                      !!this.lanes._hasOwnProperty(i) ||
                      (n && this.lanes._set(i, []), !1)
                    );
                  },
                },
                {
                  key: "getOverlappingAnims",
                  value: function (e, t, n) {
                    var i =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : [],
                      r =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : null,
                      o = this,
                      s = qe(this.lanes._get(Se(t, n)), function (t) {
                        var n = e.incident.duration;
                        return (
                          null != r && (n = r),
                          t.id !== e.incident.id &&
                            i.indexOf(t.id) < 0 &&
                            ((t.millisecond >= e.millisecond &&
                              t.millisecond < n + e.millisecond) ||
                              (t.millisecond +
                                o.incidentsById._get(t.id).duration >
                                e.millisecond &&
                                t.millisecond +
                                  o.incidentsById._get(t.id).duration <=
                                  n + e.millisecond) ||
                              (t.millisecond < e.millisecond &&
                                t.millisecond +
                                  o.incidentsById._get(t.id).duration >
                                  n + e.millisecond))
                        );
                      });
                    return s;
                  },
                },
                {
                  key: "addElementToLane",
                  value: function (e, t, n, i) {
                    var r = Se(e, t);
                    this.incidentsById._set(i.id, i);
                    var o = { millisecond: n, id: i.id };
                    this.laneExists(e, t, !0);
                    var s = this.lanes._get(r);
                    s.push(o),
                      (s = Je(s, ["millisecond"])),
                      this.lanes._set(r, s),
                      this.belongingLaneKeysByAnimationId._hasOwnProperty(
                        i.id
                      ) || this.belongingLaneKeysByAnimationId._set(i.id, []),
                      this.belongingLaneKeysByAnimationId._get(i.id).push(r);
                    var a = Ot(s, function (e) {
                      return e.id === i.id;
                    });
                    if (
                      (0 === a
                        ? s.length > 1
                          ? i.setInitialValue(
                              this.incidentsById._get(s[1].id).pureInitialValues
                            )
                          : i.setInitialValue()
                        : i.setInitialValue(
                            this.incidentsById._get(s[a - 1].id)
                              .animatedAttributeValue
                          ),
                      Object.prototype.hasOwnProperty.call(
                        this.comboAttributes,
                        t
                      ))
                    ) {
                      var l = i.initialValue;
                      jt(s, this.incidentsById, l, a);
                    }
                    a + 1 < s.length &&
                      (this.incidentsById
                        ._get(s[a + 1].id)
                        .setInitialValue(i.animatedAttributeValue),
                      this.incidentsById._get(s[a + 1].id).gotContext &&
                        (this.incidentsById._get(s[a + 1].id).lastWish(),
                        this.incidentsById._get(s[a + 1].id).onGetContext()));
                  },
                },
                {
                  key: "updateLane",
                  value: function (e, t) {
                    for (var n = this, i = {}, r = 0; r < e.length; r++)
                      for (
                        var o = this.belongingLaneKeysByAnimationId._get(e[r]),
                          s = 0;
                        s < o.length;
                        s++
                      ) {
                        var a = o[s];
                        Object.prototype.hasOwnProperty.call(i, a) ||
                          (i[a] = {
                            animations: [],
                            lane: this.lanes._get(a),
                            laneData: Ee(o[s]),
                          }),
                          i[a].animations.push(e[r]);
                      }
                    for (var l in i) {
                      for (
                        var c = i[l],
                          u = c.lane,
                          d = c.laneData,
                          p = Je(this.getLanesCopy(u), ["millisecond"]),
                          h = Object.prototype.hasOwnProperty.call(
                            this.comboAttributes,
                            d.attribute
                          ),
                          f = 0;
                        f < u.length;
                        f++
                      )
                        c.animations.indexOf(u[f].id) >= 0 &&
                          (u[f].millisecond += t);
                      var m = Je(u, ["millisecond"]);
                      this.lanes._set(l, m), (u = m);
                      for (
                        var v = function (e) {
                            var t = c.animations[e],
                              i = Ot(p, function (e) {
                                return e.id === t;
                              }),
                              r = Ot(u, function (e) {
                                return e.id === t;
                              }),
                              o = n.incidentsById._get(u[r].id);
                            if (i !== r || r > 1) {
                              if (i + 1 < u.length)
                                if (0 === i)
                                  h
                                    ? jt(
                                        u,
                                        n.incidentsById,
                                        o.pureInitialValues,
                                        0,
                                        !0
                                      )
                                    : (n.incidentsById
                                        ._get(p[1].id)
                                        .setInitialValue(o.pureInitialValues),
                                      n.incidentsById
                                        ._get(p[1].id)
                                        .onGetContext());
                                else if (h) {
                                  var s = r > i ? i : r;
                                  jt(
                                    u,
                                    n.incidentsById,
                                    n.incidentsById._get(p[i - 1].id)
                                      .animatedAttributeValue,
                                    s,
                                    !0
                                  );
                                } else
                                  n.incidentsById
                                    ._get(p[i + 1].id)
                                    .setInitialValue(
                                      n.incidentsById._get(p[i - 1].id)
                                        .animatedAttributeValue
                                    ),
                                    n.incidentsById
                                      ._get(p[i + 1].id)
                                      .onGetContext();
                              0 === r
                                ? h
                                  ? jt(
                                      u,
                                      n.incidentsById,
                                      n.incidentsById._get(p[0].id)
                                        .pureInitialValues,
                                      r,
                                      !0
                                    )
                                  : (o.setInitialValue(
                                      n.incidentsById._get(p[0].id)
                                        .pureInitialValues
                                    ),
                                    o.onGetContext())
                                : h
                                ? jt(
                                    u,
                                    n.incidentsById,
                                    n.incidentsById._get(u[r - 1].id)
                                      .animatedAttributeValue,
                                    r,
                                    !0
                                  )
                                : (o.setInitialValue(
                                    n.incidentsById._get(u[r - 1].id)
                                      .animatedAttributeValue
                                  ),
                                  o.onGetContext()),
                                r + 1 < u.length &&
                                  (h
                                    ? jt(
                                        u,
                                        n.incidentsById,
                                        o.animatedAttributeValue,
                                        r + 1,
                                        !0
                                      )
                                    : (n.incidentsById
                                        ._get(u[r + 1].id)
                                        .setInitialValue(
                                          o.animatedAttributeValue
                                        ),
                                      n.incidentsById
                                        ._get(u[r + 1].id)
                                        .onGetContext()));
                            }
                          },
                          g = 0;
                        g < c.animations.length;
                        g++
                      )
                        v(g);
                    }
                  },
                },
                {
                  key: "deleteAnimations",
                  value: function (e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                      for (
                        var i = e[n],
                          r = this.belongingLaneKeysByAnimationId._get(i),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        for (
                          var s = this.lanes._get(r[o]), a = -1, c = 0;
                          c < s.length;
                          c++
                        )
                          if (s[c].id === i) {
                            a = c;
                            break;
                          }
                        for (
                          var u = l({}, s[a]),
                            d = this.incidentsById._get(u.id),
                            p = Ee(r[o]),
                            h = [],
                            f = 0;
                          f < s.length;
                          f++
                        )
                          s[f].id !== i && h.push(s[f]);
                        this.lanes._set(r[o], h),
                          0 === (s = this.lanes._get(r[o])).length
                            ? (d.onProgress(0, 0),
                              this.lanes._delete(r[o]),
                              Object.prototype.hasOwnProperty.call(t, r[o]) &&
                                delete t[r[o]])
                            : ((t[r[o]] = Ee(r[o])),
                              a < s.length &&
                                !1 !==
                                  this.incidentsById._get(u.id)
                                    .pureInitialValues &&
                                (Object.prototype.hasOwnProperty.call(
                                  this.comboAttributes,
                                  p.attribute
                                )
                                  ? jt(
                                      s,
                                      this.incidentsById,
                                      this.incidentsById._get(u.id)
                                        .pureInitialValues,
                                      a,
                                      !0
                                    )
                                  : (this.incidentsById
                                      ._get(s[a].id)
                                      .setInitialValue(
                                        this.incidentsById._get(u.id)
                                          .pureInitialValues
                                      ),
                                    this.incidentsById
                                      ._get(s[a].id)
                                      .onGetContext())));
                      }
                      this.belongingLaneKeysByAnimationId._delete(e[n]);
                    }
                    return t;
                  },
                },
                {
                  key: "recalcScratchValues",
                  value: function (e) {
                    for (var t = this.lanes._keys(), n = 0; n < t.length; n++) {
                      var i = t[n],
                        r = this.lanes._get(i);
                      if (r.length > 0) {
                        var o = this.incidentsById._get(r[0].id),
                          s = o.getScratchValue(e),
                          a = Ee(i);
                        Object.prototype.hasOwnProperty.call(
                          this.comboAttributes,
                          a.attribute
                        )
                          ? jt(r, this.incidentsById, s, 0, !0)
                          : o.setInitialValue(s),
                          o.lastWish(),
                          o.onGetContext();
                      }
                    }
                  },
                },
              ]),
              e
            );
          })(),
          Dt = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e) {
              var r;
              return (
                i(this, n),
                ((r = t.call(this, e)).comboAttributes = {}),
                (r.fixedAttributeName = "_"),
                null != e.comboAttributes &&
                  (r.comboAttributes = e.comboAttributes),
                (r.LanesHandler = new At({
                  comboAttributes: r.comboAttributes,
                  runTimeInfo: r.runTimeInfo,
                })),
                r
              );
            }
            return (
              o(
                n,
                [
                  {
                    key: "setComboAttributes",
                    value: function (e) {
                      (this.comboAttributes = e),
                        (this.LanesHandler = new At({
                          comboAttributes: this.comboAttributes,
                        }));
                    },
                  },
                  {
                    key: "_resize",
                    value: function (e) {
                      this.LanesHandler._resize(e);
                    },
                  },
                  {
                    key: "checkAddition",
                    value: function (e) {
                      for (
                        var t = this,
                          n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : "all-or-nothing",
                          i = this.LanesHandler.createTestLanesSanbox(),
                          r = [],
                          o = [],
                          s = function (n) {
                            var s = !1,
                              a = e[n],
                              l = a.incident,
                              c = l.mcid,
                              u = l.attribute || t.fixedAttributeName;
                            i.laneExists(c, u);
                            var d = i.getOverlappingAnims(a, c, u);
                            d.length > 0 &&
                              ((s = !0),
                              o.push({
                                type:
                                  "unauthorised, overlapping incidents on the same element",
                                meta: {
                                  element_mcid: c,
                                  attribute: u,
                                  incident: a,
                                  overlappingAnims: d,
                                },
                              })),
                              s ||
                                r.push(function () {
                                  i.addElementToLane(c, u, a.millisecond, l),
                                    l._onGetContextOnce();
                                });
                          },
                          a = 0;
                        a < e.length;
                        a++
                      )
                        s(a);
                      if (o.length > 0 && "all-or-nothing" === n)
                        return { result: !1, errors: o };
                      var l = this,
                        c = function () {
                          for (var e = 0; e < r.length; e++) r[e]();
                          l.LanesHandler.applySandboxChanges(i);
                        };
                      return { result: !0, errors: o, execute: c };
                    },
                  },
                  {
                    key: "checkEdit",
                    value: function (e, t) {
                      for (var n = [], i = 0; i < e.length; i++)
                        n.push(e[i].id);
                      for (
                        var r = this.LanesHandler.createTestLanesSanbox(),
                          o = [],
                          s = 0;
                        s < e.length;
                        s++
                      )
                        for (
                          var a = e[s].incident.id,
                            l = e[s].incident.mcid,
                            c =
                              e[s].incident.attribute ||
                              this.fixedAttributeName,
                            u = r.getLane(l, c),
                            d = 0;
                          d < u.length;
                          d++
                        )
                          if (u[d].id === a) {
                            var p = u[d],
                              h = r.getLaneElementsClone(p);
                            (h.millisecond += t),
                              (h.incident = r.incidentsById._get(h.id));
                            var f = r.getOverlappingAnims(h, l, c, n);
                            f.length > 0 &&
                              o.push({
                                type:
                                  "anauthorised, overlapping animations on the same element",
                                meta: {
                                  element_mcid: l,
                                  attribute: c,
                                  newAnimation: h,
                                  overlappingAnims: f,
                                },
                              });
                            break;
                          }
                      if (o.length > 0) return { result: !1, errors: o };
                      var m = this;
                      return {
                        result: !0,
                        execute: function () {
                          m.LanesHandler.updateLane(n, t);
                        },
                      };
                    },
                  },
                  {
                    key: "checkResizedIncidents",
                    value: function (e) {
                      for (
                        var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          n = [],
                          i = 0;
                        i < e.length;
                        i++
                      )
                        n.push(e[i].id);
                      for (
                        var r = this.LanesHandler.createTestLanesSanbox(),
                          o = [],
                          s = 0;
                        s < e.length;
                        s++
                      )
                        for (
                          var a = this.LanesHandler.incidentsById._get(e[s].id),
                            l = a.mcid,
                            c = a.attribute || this.fixedAttributeName,
                            u = r.getLane(l, c),
                            d = { mcid: l, attribute: c },
                            p = e[s].end - e[s].start,
                            h = 0;
                          h < u.length;
                          h++
                        )
                          if (u[h].id === e[s].id) {
                            if (!t) {
                              var f = u[h],
                                m = r.getLaneElementsClone(f);
                              (m.millisecond += e[s].startDelta),
                                (m.incident = r.incidentsById._get(m.id));
                              var v = r.getOverlappingAnims(
                                m,
                                d.mcid,
                                d.attribute,
                                n,
                                p
                              );
                              v.length > 0 &&
                                o.push({
                                  type:
                                    "anauthorised overlapping animations on the same element",
                                  meta: {
                                    element_mcid: d.mcid,
                                    attribute: d.attribute,
                                    newAnimation: m,
                                    overlappingAnims: v,
                                  },
                                });
                            }
                            break;
                          }
                      if (o.length > 0) return { result: !1, errors: o };
                      var g = this,
                        y = function () {
                          for (var t = 0; t < e.length; t++)
                            g.LanesHandler.updateLane(
                              [e[t].id],
                              e[t].startDelta
                            );
                        };
                      return { execute: y, result: !0 };
                    },
                  },
                  {
                    key: "checkDelete",
                    value: function (e) {
                      for (var t = [], n = 0; n < e.length; n++)
                        t.push(e[n].id);
                      var i = this;
                      return {
                        result: !0,
                        execute: function () {
                          i.LanesHandler.deleteAnimations(t);
                        },
                      };
                    },
                  },
                  {
                    key: "recalcScratchValues",
                    value: function (e) {
                      this.LanesHandler.recalcScratchValues(e);
                    },
                  },
                  {
                    key: "slipIntoLaneForwards",
                    value: function (e, t, n, i, r) {
                      var o =
                          arguments.length > 5 &&
                          void 0 !== arguments[5] &&
                          arguments[5],
                        s = this,
                        a = qe(e, function (e) {
                          return (
                            (e.millisecond +
                              s.incidentsById._get(e.id).duration >=
                              n &&
                              e.millisecond +
                                s.incidentsById._get(e.id).duration <=
                                i) ||
                            (s.incidentsById._get(e.id).duration +
                              e.millisecond >=
                              i &&
                              e.millisecond <= i)
                          );
                        });
                      if (0 === a.length) {
                        if (o && 0 === n) {
                          var l = this.incidentsById._get(e[0].id);
                          l.onProgress(0, 0, r);
                        }
                        return !0;
                      }
                      var c =
                          (a = Je(a, [
                            function (e) {
                              return e.millisecond;
                            },
                          ])).length - 1,
                        u = this.incidentsById._get(a[c].id),
                        d = a[c].millisecond;
                      if (u.duration + d <= i) u.onProgress(1, u.duration, r);
                      else {
                        var p = (i - d) / u.duration;
                        u.onProgress(p, i - d, r);
                      }
                    },
                  },
                  {
                    key: "slipToLaneBackwards",
                    value: function (e, t, n, i, r) {
                      var o = this,
                        s = qe(e, function (e) {
                          var t =
                            o.incidentsById._get(e.id).duration + e.millisecond;
                          return (
                            (t <= i && t >= n) ||
                            (e.millisecond >= n && e.millisecond <= i) ||
                            (e.millisecond < n && t > i)
                          );
                        });
                      if (0 === s.length) return !0;
                      s = Je(s, [
                        function (e) {
                          return e.millisecond;
                        },
                      ]);
                      var a = this.incidentsById._get(s[0].id),
                        l = s[0].millisecond;
                      if (l >= i) a.onProgress(0, 0, r);
                      else {
                        var c = (i - l) / a.duration;
                        a.onProgress(c, i - l, r);
                      }
                    },
                  },
                  {
                    key: "moveTo",
                    value: function (e, t, n) {
                      for (
                        var i =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          r = this.lanes._keys(),
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var s = r[o],
                          a = this.lanes._get(s),
                          l = Ee(s);
                        e <= t
                          ? this.slipIntoLaneForwards(a, l, e, t, n, i)
                          : e > t && this.slipToLaneBackwards(a, l, e, t, n, i);
                      }
                    },
                  },
                  {
                    key: "lanes",
                    get: function () {
                      return this.LanesHandler.lanes;
                    },
                  },
                  {
                    key: "incidentsById",
                    get: function () {
                      return this.LanesHandler.incidentsById;
                    },
                  },
                ],
                [
                  {
                    key: "type",
                    get: function () {
                      return "attributes";
                    },
                  },
                ]
              ),
              n
            );
          })(Te),
          Tt = (function () {
            function e() {
              i(this, e), (this.customEntities = {});
            }
            return (
              o(e, [
                {
                  key: "calcClipDims",
                  value: function (e) {
                    var t = { use: !1, width: null, height: null };
                    return Object.prototype.hasOwnProperty.call(
                      e,
                      "originalDims"
                    ) &&
                      null !== e.originalDims.width &&
                      void 0 !== e.originalDims.width &&
                      null !== e.originalDims.height &&
                      void 0 !== e.originalDims.height
                      ? {
                          use: !0,
                          width:
                            e.originalDims.width.number +
                            e.originalDims.width.unit,
                          height:
                            e.originalDims.height.number +
                            e.originalDims.height.unit,
                        }
                      : (Object.prototype.hasOwnProperty.call(
                          e,
                          "containerParams"
                        ) &&
                          (Object.prototype.hasOwnProperty.call(
                            e.containerParams,
                            "width"
                          ) &&
                            ((t.use = !0), (t.width = e.containerParams.width)),
                          Object.prototype.hasOwnProperty.call(
                            e.containerParams,
                            "height"
                          ) &&
                            ((t.use = !0),
                            (t.height = e.containerParams.height))),
                        t);
                  },
                },
                {
                  key: "scalingCalculator",
                  value: function (e) {
                    if (
                      !Object.prototype.hasOwnProperty.call(
                        e,
                        "containerParams"
                      ) ||
                      !Object.prototype.hasOwnProperty.call(e, "originalDims")
                    )
                      return { width: 1, height: 1 };
                    if (
                      !(
                        (null !== e.originalDims.width &&
                          void 0 !== e.originalDims.width) ||
                        (null !== e.originalDims.height &&
                          void 0 !== e.originalDims.height)
                      )
                    )
                      return { width: 1, height: 1 };
                    var t = Ie(e.containerParams),
                      n = null,
                      i = null;
                    return (
                      null !== t.width &&
                        null !== e.originalDims.width &&
                        (t.width.unit === e.originalDims.width.unit
                          ? (n = t.width.number / e.originalDims.width.number)
                          : Ae.warning(
                              "containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored"
                            )),
                      null !== t.height &&
                        null !== e.originalDims.height &&
                        (t.height.unit === e.originalDims.height.unit
                          ? (i = t.height.number / e.originalDims.height.number)
                          : Ae.warning(
                              "containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored"
                            )),
                      null === n && null === i
                        ? { width: 1, height: 1 }
                        : ((null !== n) & (null === i)
                            ? (i = n)
                            : (null !== i) & (null === n) && (n = i),
                          { width: n, height: i })
                    );
                  },
                },
                {
                  key: "getElementByMCID",
                  value: function (e) {
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.customEntities,
                        e
                      )
                    )
                      return this.customEntities[e];
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.elementsByMCID,
                        e
                      )
                    )
                      return this.elementsByMCID[e];
                    var t = this.context.rootElement.querySelector(
                      this.getElementSelectorByMCID(e)
                    );
                    return (this.elementsByMCID[e] = t), t;
                  },
                },
                {
                  key: "getElements",
                  value: function (e) {
                    if (null == e || "" === e) return [];
                    if ("!" === e.charAt(0)) {
                      if ("#" === (e = e.substr(1)).charAt(0))
                        return [this.customEntities[e.substr(1)]];
                      if ("." === e.charAt(0)) {
                        var t = [];
                        for (var n in this.customEntities) {
                          var i = this.customEntities[n];
                          i.classes.indexOf(e.substr(1)) > -1 && t.push(i);
                        }
                        return t;
                      }
                    }
                    return Array.from(
                      this.context.rootElement.querySelectorAll(e)
                    );
                  },
                },
                {
                  key: "getMCID",
                  value: function (e) {
                    return !0 === e.customEntity
                      ? e.id
                      : e.getAttribute("data-motorcortex2-id");
                  },
                },
                {
                  key: "setMCID",
                  value: function (e, t) {
                    e.setAttribute("data-motorcortex2-id", t);
                  },
                },
                {
                  key: "getElementSelectorByMCID",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.customEntities,
                      e
                    )
                      ? "!#".concat(e)
                      : "["
                          .concat("data-motorcortex2-id", '="')
                          .concat(e, '"]');
                  },
                },
                {
                  key: "setCustomEntity",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    return Object.prototype.hasOwnProperty.call(
                      this.customEntities,
                      e
                    )
                      ? (Ae.error(
                          "Clip "
                            .concat(
                              this.id,
                              " already has custom Entity with id: "
                            )
                            .concat(e)
                        ),
                        !1)
                      : ((this.customEntities[e] = {
                          id: e,
                          entity: t,
                          classes: n,
                          customEntity: !0,
                        }),
                        !0);
                  },
                },
              ]),
              e
            );
          })(),
          Lt = (function (e) {
            c(r, e);
            var t = f(r);
            function r() {
              var e,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if ((i(this, r), (e = t.call(this)), !we(o)))
                return (
                  Ae.error(
                    "ContextHandler expects an object on its constructor. ".concat(
                      n(o),
                      " passed"
                    )
                  ),
                  h(e, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "html"))
                return (
                  Ae.error(
                    "ContextHandler expects the html key on its constructor properties which is missing"
                  ),
                  h(e, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "css"))
                return (
                  Ae.error(
                    "ContextHandler expects the css key on its constructor properties which is missing"
                  ),
                  h(e, !1)
                );
              if (
                (Object.prototype.hasOwnProperty.call(o, "initParams") ||
                  Ae.info("ContextHandler got null initParams"),
                !Object.prototype.hasOwnProperty.call(o, "host"))
              )
                return (
                  Ae.error(
                    "ContextHandler expects the host key on its constructor properties which is missing"
                  ),
                  h(e, !1)
                );
              e.isDOM = !0;
              var s = o.host.ownerDocument;
              if (
                !s.getElementById(
                  "@kissmybutton/motorcortex/iframeContextHandler/css"
                )
              ) {
                var a =
                    "\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",
                  l = s.createElement("style");
                (l.id = "@kissmybutton/motorcortex/iframeContextHandler/css"),
                  (l.type = "text/css");
                var c = s.head || s.getElementsByTagName("head")[0];
                l.styleSheet
                  ? (l.styleSheet.cssText = a)
                  : l.appendChild(s.createTextNode(a)),
                  c.appendChild(l);
              }
              var u = s.createElement("iframe");
              o.host.appendChild(u);
              var d = e.scalingCalculator(o),
                f = e.calcClipDims(o);
              u.setAttribute("seamless", "seamless"),
                !0 === f.use &&
                  (null !== f.width && u.setAttribute("width", f.width),
                  null !== f.height && u.setAttribute("height", f.height)),
                (u.style.transform = "scale("
                  .concat(d.width, ", ")
                  .concat(d.height, ")")),
                (u.style.transformOrigin = "top left"),
                (u.style.position = "absolute"),
                (u.src = "");
              var m = u.contentWindow || u.contentDocument;
              m.document && (m = m.document),
                m.write(Me(o.html, { params: o.initParams }));
              var v =
                  "\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",
                g = m.createElement("style");
              (g.type = "text/css"),
                g.styleSheet
                  ? (g.styleSheet.cssText =
                      Me(o.css, { params: o.initParams }) + v)
                  : g.appendChild(s.createTextNode(o.css + v));
              var y = m.head || m.getElementsByTagName("head")[0];
              if (
                (y.appendChild(g),
                Object.prototype.hasOwnProperty.call(o, "fonts"))
              )
                for (var b = 0; b < o.fonts.length; b++) {
                  var x = o.fonts[b];
                  if ("google-font" === x.type) {
                    var k = m.createElement("link");
                    k.setAttribute("rel", "stylesheet"),
                      k.setAttribute("href", x.src),
                      y.appendChild(k);
                  }
                }
              return (
                (e.rootElement = u),
                m.close(),
                (e.context = {
                  document: m,
                  window: u.contentWindow || u,
                  clipContainer: u,
                  rootElement: m.body,
                  unmount: function () {
                    o.host.removeChild(u);
                  },
                  getElements: e.getElements.bind(p(e)),
                  getMCID: e.getMCID.bind(p(e)),
                  setMCID: e.setMCID.bind(p(e)),
                  getElementSelectorByMCID: e.getElementSelectorByMCID.bind(
                    p(e)
                  ),
                  getElementByMCID: e.getElementByMCID.bind(p(e)),
                  setCustomEntity: e.setCustomEntity.bind(p(e)),
                }),
                (e.elementsByMCID = {}),
                e
              );
            }
            return r;
          })(Tt),
          Vt = (function (e) {
            c(r, e);
            var t = f(r);
            function r() {
              var e,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              if ((i(this, r), (e = t.call(this)), !we(o)))
                return (
                  Ae.error(
                    "ContextHandler expects an object on its constructor. ".concat(
                      n(o),
                      " passed"
                    )
                  ),
                  h(e, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "html"))
                return (
                  Ae.error(
                    "ContextHandler expects the html key on its constructor properties which is missing"
                  ),
                  h(e, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "css"))
                return (
                  Ae.error(
                    "ContextHandler expects the css key on its constructor properties which is missing"
                  ),
                  h(e, !1)
                );
              if (!Object.prototype.hasOwnProperty.call(o, "host"))
                return (
                  Ae.error(
                    "ContextHandler expects the host key on its constructor properties which is missing"
                  ),
                  h(e, !1)
                );
              e.isDOM = !0;
              var s = o.host.shadowRoot;
              s || (s = o.host.attachShadow({ mode: "open" }));
              var a = document.createElement("div"),
                l = e.scalingCalculator(o),
                c = e.calcClipDims(o);
              a.setAttribute("data-motorocortex-container", "true"),
                !0 === c.use &&
                  (null !== c.width && (a.style.width = c.width),
                  null !== c.height && (a.style.height = c.height)),
                (a.style.transform = "scale("
                  .concat(l.width, ", ")
                  .concat(l.height, ")")),
                (a.style.transformOrigin = "top left"),
                (a.style.position = "absolute"),
                (a.innerHTML = Me("".concat(o.html), { params: o.initParams })),
                s.appendChild(a);
              var u = document.createElement("slot");
              s.appendChild(u);
              var d = document.createElement("style");
              if (
                ((d.type = "text/css"),
                d.styleSheet
                  ? (d.styleSheet.cssText = Me(o.css, { params: o.initParams }))
                  : d.appendChild(document.createTextNode(o.css)),
                s.appendChild(d),
                (e.fontTags = []),
                Object.prototype.hasOwnProperty.call(o, "fonts"))
              )
                for (var f = 0; f < o.fonts.length; f++) {
                  var m = o.fonts[f];
                  if ("google-font" === m.type) {
                    var v = document.createElement("link");
                    v.setAttribute("rel", "stylesheet"),
                      v.setAttribute("href", m.src),
                      document.getElementsByTagName("head")[0].appendChild(v),
                      e.fontTags.push(v);
                  }
                }
              return (
                (a.style.overflow = "hidden"),
                (e.rootElement = a),
                (e.context = {
                  document: document,
                  window: window,
                  clipContainer: e.rootElement,
                  rootElement: a,
                  unmount: function () {
                    try {
                      s.innerHTML = "";
                      for (var e = 0; e < this.fontTags.length; e++)
                        document
                          .getElementsByTagName("head")[0]
                          .removeChild(this.fontTags[e]);
                    } catch (e) {
                      Ae.warning(
                        "The element of the Clip to be removed seems not to exist any more"
                      );
                    }
                  },
                  getElements: e.getElements.bind(p(e)),
                  getMCID: e.getMCID.bind(p(e)),
                  setMCID: e.setMCID.bind(p(e)),
                  getElementSelectorByMCID: e.getElementSelectorByMCID.bind(
                    p(e)
                  ),
                  getElementByMCID: e.getElementByMCID.bind(p(e)),
                  setCustomEntity: e.setCustomEntity.bind(p(e)),
                }),
                (e.elementsByMCID = {}),
                e
              );
            }
            return r;
          })(Tt),
          zt = (function (e) {
            c(n, e);
            var t = f(n);
            function n() {
              var e,
                r,
                o,
                s =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              i(this, n),
                null === a ? ((r = {}), (o = s)) : ((r = s), (o = a)),
                (o = l({}, o, {
                  html: "" !== (e = t.call(this, r, o)).html ? e.html : o.html,
                  css: "" !== e.css ? e.css : o.css,
                  fonts: e.fonts.length > 0 ? e.fonts : o.fonts,
                }));
              var c = "closed";
              e.clipType = c;
              var u = new (document.head.createShadowRoot ||
              document.head.attachShadow
                ? Vt
                : Lt)(o);
              return (
                (e.ownContext = l({}, u.context, {
                  isHostedClip: e.isHostedClip,
                  contextLoaded: !0,
                })),
                (e.iframe = u.iframeElement),
                (e.forceExportIncidents = !0),
                e.onAfterRender(),
                e
              );
            }
            return (
              o(n, [
                { key: "onAfterRender", value: function () {} },
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return {
                      attrs: this.attrs,
                      props: l({}, this.props, {
                        host: void 0,
                        html: this.ownContext.rootElement.innerHTML,
                      }),
                    };
                  },
                },
                {
                  key: "setCustomEntity",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [];
                    return this.context.setCustomEntity(e, t, n);
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "css",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "fonts",
                  get: function () {
                    return [];
                  },
                },
                {
                  key: "rootElement",
                  get: function () {
                    return this.ownContext.clipContainer;
                  },
                },
              ]),
              n
            );
          })(mt),
          Nt = (function (e) {
            c(r, e);
            var t = f(r);
            function r() {
              var e,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              i(this, r), (e = t.call(this));
              var s = l({}, o);
              if (!we(s))
                return (
                  Ae.error(
                    "HTMLFragmentContextHandler expects an object on its constructor. ".concat(
                      n(s),
                      " passed"
                    )
                  ),
                  h(e, !1)
                );
              Object.prototype.hasOwnProperty.call(s, "html") || (s.html = ""),
                (e.isDOM = !0);
              var a = document.createDocumentFragment(),
                c = document.createElement("div");
              return (
                Object.prototype.hasOwnProperty.call(s, "containerParams") &&
                  (Object.prototype.hasOwnProperty.call(s, "width") &&
                    (c.style.width = s.containerParams.width),
                  Object.prototype.hasOwnProperty.call(s, "height") &&
                    (c.style.height = s.containerParams.height)),
                (c.innerHTML = Me(s.html, { params: s.initParams })),
                a.appendChild(c),
                (c.style.overflow = "hidden"),
                (e.rootElement = c),
                (e.context = {
                  document: document,
                  window: window,
                  clipContainer: e.rootElement,
                  rootElement: c,
                  unmount: function () {
                    s.host.removeChild(a);
                  },
                  getElements: e.getElements.bind(p(e)),
                  getMCID: e.getMCID.bind(p(e)),
                  setMCID: e.setMCID.bind(p(e)),
                  getElementSelectorByMCID: e.getElementSelectorByMCID.bind(
                    p(e)
                  ),
                  getElementByMCID: e.getElementByMCID.bind(p(e)),
                  setCustomEntity: e.setCustomEntity.bind(p(e)),
                  fragment: !0,
                }),
                (e.elementsByMCID = {}),
                e
              );
            }
            return r;
          })(Tt),
          $t = (function (e) {
            c(n, e);
            var t = f(n);
            function n() {
              var e,
                r,
                o,
                s =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              i(this, n),
                null === a ? ((r = {}), (o = s)) : ((r = s), (o = a)),
                (e = t.call(this, r, o));
              var c = new Nt(
                l({}, o, {
                  html: Object.prototype.hasOwnProperty.call(o, "html")
                    ? o.html
                    : e.html,
                  css: Object.prototype.hasOwnProperty.call(o, "css")
                    ? o.css
                    : e.css,
                  fonts: Object.prototype.hasOwnProperty.call(o, "fonts")
                    ? o.fonts
                    : e.fonts,
                })
              );
              return (
                (e.ownContext = l({}, c.context, { isHostedClip: !1 })),
                (e.iframe = c.iframeElement),
                (e.forceExportIncidents = !0),
                e.onDOMCLipInitialise(),
                e
              );
            }
            return (
              o(n, [
                {
                  key: "exportConstructionArguments",
                  value: function () {
                    return {
                      attrs: this.attrs,
                      props: l({}, this.props, {
                        html: this.ownContext.rootElement.innerHTML,
                      }),
                    };
                  },
                },
                { key: "onDOMCLipInitialise", value: function () {} },
                {
                  key: "rootElement",
                  get: function () {
                    return this.ownContext.clipContainer;
                  },
                },
              ]),
              n
            );
          })(mt),
          Rt = (function () {
            function e() {
              i(this, e);
            }
            return (
              o(e, [
                {
                  key: "addIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "moveIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "removeIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "resizeIncident",
                  value: function () {
                    return { result: !0, execute: function () {} };
                  },
                },
                {
                  key: "getIncidentsByChannel",
                  value: function () {
                    return {};
                  },
                },
                { key: "flash", value: function () {} },
                { key: "_resize", value: function () {} },
                { key: "onProgress", value: function () {} },
                {
                  key: "duration",
                  get: function () {
                    return 0;
                  },
                },
              ]),
              e
            );
          })(),
          Ht = [
            "cm",
            "mm",
            "in",
            "px",
            "pt",
            "pc",
            "em",
            "ex",
            "ch",
            "rem",
            "vw",
            "vh",
            "vmin",
            "vmax",
            "%",
          ],
          Ft = [
            {
              type: "string",
              optional: !0,
              default: "linear",
              enum: [
                "linear",
                "easeInQuad",
                "easeOutQuad",
                "easeInOutQuad",
                "easeInCubic",
                "easeOutCubic",
                "easeInOutCubic",
                "easeInQuart",
                "easeOutQuart",
                "easeInOutQuart",
                "easeInQuint",
                "easeOutQuint",
                "easeInOutQuint",
                "easeInSine",
                "easeOutSine",
                "easeInOutSine",
                "easeInExpo",
                "easeOutExpo",
                "easeInOutExpo",
                "easeInCirc",
                "easeOutCirc",
                "easeInOutCirc",
                "easeInElastic",
                "easeOutElastic",
                "easeInOutElastic",
                "easeInBack",
                "easeOutBack",
                "easeInOutBack",
                "easeInBounce",
                "easeOutBounce",
                "easeInOutBounce",
              ],
            },
            {
              type: "array",
              optional: !0,
              length: 4,
              items: { type: "number" },
            },
          ],
          Gt = { type: "string", empty: !1, trim: !0, optional: !0 },
          Wt = { type: "string", empty: !1, optional: !1 },
          Ut = { type: "html", optional: !0 },
          qt = { type: "css", optional: !0 },
          Jt = {
            type: "array",
            optional: !0,
            items: { type: "object", props: { type: "string", src: "string" } },
          },
          Kt = {
            type: "array",
            items: {
              type: "object",
              strict: !0,
              props: {
                src: "string",
                id: "string",
                mcid: { type: "string", optional: !0 },
                classes: { type: "array", optional: !0, items: "string" },
                base64: { type: "boolean", optional: !0 },
              },
            },
            optional: !0,
          },
          Xt = {
            props: {
              type: "object",
              props: {
                id: Gt,
                selector: l({}, Wt, { optional: !0 }),
                easing: Ft,
                duration: {
                  type: "number",
                  optional: !1,
                  integer: !0,
                  positive: !0,
                },
                startFrom: {
                  type: "number",
                  integer: !0,
                  min: 0,
                  optional: !0,
                },
                repeats: { type: "number", integer: !0, min: 1, optional: !0 },
                hiatus: { type: "number", integer: !0, min: 0, optional: !0 },
                delay: { type: "number", integer: !0, min: 0, optional: !0 },
              },
            },
          },
          Qt = {
            type: "object",
            optional: !0,
            props: {
              width: { type: "measurement", units: Ht, optional: !0 },
              height: { type: "measurement", units: Ht, optional: !0 },
            },
          },
          Zt = { type: "string", enum: ["on", "off"], optional: !0 },
          Yt = {
            props: [
              {
                type: "object",
                strict: !0,
                props: {
                  id: Gt,
                  selector: l({}, Wt, { optional: !0 }),
                  easing: Ft,
                  html: Ut,
                  css: qt,
                  audioSources: Kt,
                  audio: Zt,
                  containerParams: Qt,
                  fonts: Jt,
                  initParams: { type: "object", optional: !0 },
                },
              },
              {
                type: "object",
                strict: !0,
                props: {
                  id: Gt,
                  host: { type: "any", optional: !1 },
                  html: Ut,
                  css: qt,
                  audioSources: Kt,
                  audio: Zt,
                  containerParams: Qt,
                  fonts: Jt,
                  initParams: { type: "object", optional: !0 },
                },
              },
              {
                type: "object",
                strict: !0,
                props: {
                  root: { type: "boolean", optional: !0 },
                  id: Gt,
                  audioSources: Kt,
                  audio: l({}, Zt, { enum: ["on"] }),
                },
              },
            ],
          },
          en = { selector: l({}, Wt, { optional: !0, strict: !0 }) },
          tn = "mc.descriptive.decisionAuthority",
          nn = ge();
        function rn(e) {
          e.descriptor.value = function (e) {
            if (this.attrsValidationRules) {
              var t = JSON.parse(JSON.stringify(this.attrsValidationRules));
              Object.prototype.hasOwnProperty.call(
                this.attrsValidationRules,
                "animatedAttrs"
              ) &&
                (t.initialValues = Ae.buildInitialValuesValidationRules(
                  t.animatedAttrs
                ));
              var n = nn.validate(e, t);
              if (n.length > 0) return { result: !1, errors: n };
            }
            return !0 ===
              this.putMessageOnPipe("checkForClip", {}, tn, {
                selfExecute: !0,
                direction: Ve,
              }).response
              ? this.manageEditAttrProps(e, "attrs")
              : ((this.attrs = e), { result: !0 });
          };
        }
        function on(e) {
          e.descriptor.value = function (e) {
            var t = Ae.validateProps(
              { props: e },
              this.propsValidationRules,
              this.constructor
            );
            return t.result
              ? !0 ===
                this.putMessageOnPipe("checkForClip", {}, tn, {
                  selfExecute: !0,
                  direction: Ve,
                }).response
                ? this.manageEditAttrProps(e, "props")
                : ((this.props = e), { result: !0 })
              : t;
          };
        }
        function sn(e) {
          e.descriptor.value = function () {
            return null !== this.props.host && void 0 !== this.props.host
              ? [this.props.host]
              : this.hasParent &&
                this.putMessageOnPipe("checkForClip", {}, tn, {
                  selfExecute: !0,
                  direction: Ve,
                }).response
              ? this.putMessageOnPipe(
                  "getElements",
                  { selector: this.selector() },
                  tn,
                  { selfExecute: !1, direction: Ve }
                ).response
              : [];
          };
        }
        function an(e) {
          e.descriptor.value = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { check: !0 };
            if (e === this.duration)
              return { result: !0, meta: { unprocessed: !0 } };
            if (e <= 0)
              return { result: !1, reason: "Size must always be > 0" };
            if (t.check && this.hasParent) {
              var n = this.putMessageOnPipe(
                "checkResize",
                { id: this.id, newSize: e, fraction: e / this.duration },
                tn,
                { selfExecute: !1, direction: Ve }
              );
              if (!n.response.result) return n.response;
            }
            return this.setNewDuration(e), { result: !0 };
          };
        }
        function ln(e) {
          e.descriptor.value = function () {
            return null === this.inheritedSelector
              ? Object.prototype.hasOwnProperty.call(this.props, "selector")
                ? this.props.selector
                : null
              : Object.prototype.hasOwnProperty.call(this.props, "selector")
              ? "&" === this.props.selector.charAt(0)
                ? this.inheritedSelector + this.props.selector.substring(1)
                : ""
                    .concat(this.inheritedSelector, " ")
                    .concat(this.props.selector)
              : this.inheritedSelector;
          };
        }
        var cn = _(
            null,
            function (e, t) {
              var r = (function (t) {
                c(r, t);
                var n = f(r);
                function r() {
                  var t,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    s =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  i(this, r),
                    null === s
                      ? ((t = n.call(this, o)),
                        e(p(t)),
                        (t.attrs = {}),
                        (t.props = o))
                      : ((t = n.call(this, s)),
                        e(p(t)),
                        (t.attrs = o),
                        (t.props = s));
                  var a = Ae.validateProps(t.props, en, t.constructor);
                  return a.result
                    ? ((t.attrsValidationRules = {}),
                      (t.propsValidationRules = en),
                      (t._inheritedSelector = null),
                      (t.passiveAddition = !0),
                      t._buildTree(),
                      (t.passiveAddition = !1),
                      h(t))
                    : h(t, a);
                }
                return r;
              })(t);
              return {
                F: r,
                d: [
                  {
                    kind: "field",
                    static: !0,
                    key: "Incident",
                    value: function () {
                      return Ue;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "plugin_npm_name",
                    value: function () {
                      return "motor-cortex-js";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "Channel",
                    value: function () {
                      return Te;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "ClassName",
                    value: function () {
                      return "Group";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "isGroup",
                    value: function () {
                      return !0;
                    },
                  },
                  {
                    kind: "method",
                    decorators: [rn],
                    key: "editAttributes",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [on],
                    key: "editProperties",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [an],
                    key: "resize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [ln],
                    key: "selector",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [sn],
                    key: "getElements",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "_buildTree",
                    value: function () {
                      this.buildTree();
                    },
                  },
                  {
                    kind: "method",
                    key: "_rebuildTree",
                    value: function () {
                      for (var e in this.children) {
                        var t = this.children[e];
                        !0 === t.leaf.passive && this.removeIncident(t.id);
                      }
                      (this.passiveAddition = !0),
                        this.buildTree(),
                        (this.passiveAddition = !1);
                    },
                  },
                  { kind: "method", key: "buildTree", value: function () {} },
                  {
                    kind: "method",
                    key: "manageEditAttrProps",
                    value: function (e, t) {
                      var n = this.parentNode,
                        i = n.getLeafPosition(this.id),
                        r = JSON.parse(JSON.stringify(this[t]));
                      (this[t] = e),
                        n.removeIncident(this.id),
                        this._rebuildTree();
                      var o = n.addIncident(this, i);
                      return (
                        o.result ||
                          ((this[t] = r),
                          this._rebuildTree(),
                          n.addIncident(this, i)),
                        o
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "detachFromParent",
                    value: function () {
                      v(u(r.prototype), "detachFromParent", this).call(this),
                        (this.inheritedSelector = null);
                    },
                  },
                  {
                    kind: "get",
                    key: "inheritedSelector",
                    value: function () {
                      return this._inheritedSelector;
                    },
                  },
                  {
                    kind: "set",
                    key: "inheritedSelector",
                    value: function (e) {
                      for (var t in ((this._inheritedSelector = e),
                      this.children))
                        this.children[
                          t
                        ].leaf.inheritedSelector = this.selector();
                    },
                  },
                  {
                    kind: "get",
                    key: "selectorToPassToChildren",
                    value: function () {
                      return this.selector();
                    },
                  },
                  {
                    kind: "method",
                    key: "exportDefinition",
                    value: function () {
                      var e = {
                        ClassName: this.constructor.ClassName,
                        plugin:
                          this.constructor.plugin ||
                          this.constructor.plugin_npm_name,
                        plugin_npm_name: this.constructor.plugin_npm_name,
                        attrs: this.attrs,
                        props: this.props,
                        incidents: {},
                        duration: this.duration,
                      };
                      for (var t in this.children) {
                        var n = this.children[t];
                        !0 !== n.leaf.passive &&
                          (e.incidents[t] = {
                            id: n.id,
                            position: n.position,
                            leaf: n.leaf.exportDefinition(),
                          });
                      }
                      return e;
                    },
                  },
                  {
                    kind: "method",
                    key: "exportLiveDefinition",
                    value: function () {
                      var e = {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: JSON.parse(JSON.stringify(this.props)),
                        attrsValidationRules: this.attrsValidationRules || null,
                        incidents: {},
                      };
                      for (var t in this.children) {
                        var n = this.children[t];
                        !0 !== n.leaf.passive &&
                          (e.incidents[t] = {
                            id: n.id,
                            position: n.position,
                            leaf: n.leaf.exportLiveDefinition(),
                          });
                      }
                      return e;
                    },
                  },
                  {
                    kind: "method",
                    key: "addIncident",
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { check: !0 };
                      if (
                        ((e.inheritedSelector = this.selectorToPassToChildren),
                        !0 === n.check)
                      ) {
                        var i = v(u(r.prototype), "checkAddition", this).call(
                          this,
                          e,
                          t
                        );
                        if (!i.result) return (e.inheritedSelector = null), i;
                        var o = this.putMessageOnPipe("checkForClip", {}, tn, {
                          selfExecute: !0,
                          direction: Ve,
                        });
                        if (!0 === o.response) {
                          var s = e.putMessageOnPipe(
                            "checkForInvalidSelectors",
                            {},
                            null,
                            { selfExecute: !0, direction: ze }
                          );
                          if (s.length > 0) {
                            for (var a = [], l = 0; l < s.length; l++)
                              a.push(s[l].response);
                            return { result: !1, errors: a };
                          }
                        }
                        var c = this.putMessageOnPipe(
                          "checkAddition",
                          {
                            incident: e,
                            millisecond: t,
                            parentGroupId: this.id,
                          },
                          tn,
                          { selfExecute: !0, direction: Ve }
                        );
                        if (!c.response.result)
                          return (e.inheritedSelector = null), c.response;
                      }
                      !0 === this.passiveAddition && (e.passive = !0);
                      var d = this.addChild(e, t);
                      return d.result || (e.inheritedSelector = null), d;
                    },
                  },
                  {
                    kind: "method",
                    key: "moveIncident",
                    value: function (e, t) {
                      var i = e;
                      "object" === n(e) && (i = e.id);
                      var o = v(u(r.prototype), "checkEditPosition", this).call(
                        this,
                        i,
                        t
                      );
                      if (!o.result) return o;
                      var s = t - this.getLeafPosition(i);
                      if (0 === s) return { result: !0 };
                      var a = this.putMessageOnPipe(
                        "checkMove",
                        {
                          id: i,
                          millisecond: t,
                          positionDelta: s,
                          parentGroupId: this.id,
                        },
                        tn,
                        { selfExecute: !0, direction: Ve }
                      );
                      return a.response.result
                        ? this.editPosition(i, t)
                        : a.response;
                    },
                  },
                  {
                    kind: "method",
                    key: "removeIncident",
                    value: function (e) {
                      var t = e;
                      "object" === n(e) && (t = e.id);
                      var i = v(u(r.prototype), "checkRemoveChild", this).call(
                        this,
                        t
                      );
                      if (!i.result) return i;
                      var o = this.putMessageOnPipe(
                        "checkDeletion",
                        { id: t, parentGroupId: this.id },
                        tn,
                        { selfExecute: !0, direction: Ve }
                      );
                      return o.response.result
                        ? this.removeChild(t)
                        : o.response;
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckForClip",
                    value: function (e, t) {
                      return !!this.hasParent && this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckAddition",
                    value: function (e, t) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckMove",
                    value: function (e, t) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckDeletion",
                    value: function (e, t) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckResize",
                    value: function (e, t) {
                      return this.hasParent ? this.bypass() : { result: !0 };
                    },
                  },
                ],
              };
            },
            He
          ),
          un = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e, r) {
              var o;
              return (
                i(this, n),
                ((o = t.call(this, e, r)).runTimeInfo = {
                  currentMillisecond: 0,
                  state: "idle",
                }),
                (o.listeners = {}),
                (o.previousTimeStamp = -1),
                (o.speed = 1),
                o
              );
            }
            return (
              o(n, [
                {
                  key: "_setState",
                  value: function (e) {
                    if (e !== this.runTimeInfo.state)
                      for (var t in ((this.runTimeInfo.state = e),
                      this.putMessageOnPipe("setState", e, "Clips", {
                        selfExecute: !1,
                        direction: ze,
                      }),
                      this.listeners))
                        this.listeners[t].funct(
                          this.runTimeInfo.currentMillisecond,
                          e
                        );
                  },
                },
                {
                  key: "handleSetState",
                  value: function (e, t) {
                    this._setState(t);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (
                      "idle" === this.runTimeInfo.state ||
                      "paused" === this.runTimeInfo.state ||
                      "armed" === this.runTimeInfo.state ||
                      "transitional" === this.runTimeInfo.state ||
                      "blocked" === this.runTimeInfo.state
                    ) {
                      if ("paused" === this.runTimeInfo.state) {
                        var n = new Date().getTime() - this.pauseMoment;
                        this.previousTimeStamp += n;
                      }
                      this._setState("playing"),
                        this.onPlay(),
                        t ||
                          window.requestAnimationFrame(function (t) {
                            e.step(t);
                          });
                    }
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    "playing" === this.runTimeInfo.state &&
                      (this._setState("paused"),
                      (this.pauseMoment = new Date().getTime()),
                      this.onWait());
                  },
                },
                {
                  key: "arm",
                  value: function () {
                    "transitional" === this.runTimeInfo.state &&
                      this._setState("armed");
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this._setState("idle"), (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._setState("transitional"),
                      (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "block",
                  value: function () {
                    this._setState("blocked"), (this.previousTimeStamp = -1);
                  },
                },
                { key: "onPlay", value: function () {} },
                { key: "onWait", value: function () {} },
                {
                  key: "playableProgress",
                  value: function (e, t) {
                    if (this.isTheRootClip) {
                      for (var n in this.listeners) {
                        var i = this.listeners[n];
                        !0 !== i.onlyOnStateChange &&
                          (Math.abs(
                            t +
                              i.cavaDelta -
                              this.runTimeInfo.currentMillisecond
                          ) > i.threshold
                            ? (i.funct(
                                Oe(t, i.roundTo),
                                this.runTimeInfo.state
                              ),
                              (i.cavaDelta = 0))
                            : (i.cavaDelta += Math.abs(
                                t - this.runTimeInfo.currentMillisecond
                              )));
                      }
                      return (
                        this.onProgress(e, t),
                        (this.runTimeInfo.currentMillisecond = t),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                {
                  key: "step",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if ("playing" === this.runTimeInfo.state) {
                      var n = this;
                      -1 === this.previousTimeStamp &&
                        (this.previousTimeStamp = e);
                      var i = {
                        milliseconds: Math.round(
                          this.runTimeInfo.currentMillisecond +
                            (e - this.previousTimeStamp) * this.speed
                        ),
                        fraction:
                          (this.runTimeInfo.currentMillisecond +
                            (e - this.previousTimeStamp) * this.speed) /
                          this.duration,
                      };
                      if (i.fraction >= 1)
                        return (
                          this.playableProgress(1, this.duration),
                          void this.complete()
                        );
                      if (i.fraction < 0)
                        return (
                          this.playableProgress(0, 0), void this.complete()
                        );
                      this.playableProgress(i.fraction, i.milliseconds),
                        (this.previousTimeStamp = e),
                        t || window.requestAnimationFrame(n.step.bind(n));
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n, i) {
                    var r =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                    n || (n = 0),
                      i || (i = 1),
                      (this.listeners[e] = {
                        funct: t,
                        threshold: n,
                        roundTo: i,
                        cavaDelta: 0,
                        onlyOnStateChange: r,
                      });
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    Object.prototype.hasOwnProperty.call(this.listeners, e) &&
                      delete this.listeners[e];
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (e) {
                    return (
                      !!this.isTheRootClip &&
                      (this.realClip.subscribeToDurationChange(e), !0)
                    );
                  },
                },
                {
                  key: "executionSpeed",
                  set: function (e) {
                    if (!this.isTheRootClip) return !1;
                    this.speed = parseFloat(e);
                  },
                },
              ]),
              n
            );
          })(cn),
          dn = (function () {
            function e(t) {
              i(this, e),
                (this.runTimeInfo = {
                  currentMillisecond: 0,
                  state: "transitional",
                }),
                (this.id = je()),
                (this.realClip = t.descriptiveIncident.realClip);
              var n = t.descriptiveIncident.realClip.exportConstructionArguments(),
                r = l({}, n.props, {
                  selector: void 0,
                  host: t.host,
                  id: this.id,
                });
              (this.ownClip = new t.descriptiveIncident.constructor.Incident(
                n.attrs,
                r
              )),
                t.descriptiveIncident.realClip.addContext(
                  {
                    clipId: this.id,
                    context: this.ownClip.ownContext,
                    synchronize: t.synchronize,
                    runTimeInfo: this.runTimeInfo,
                  },
                  !0
                );
            }
            return (
              o(e, [
                {
                  key: "onProgress",
                  value: function (e, t) {
                    for (var n in this.realClip.instantiatedChannels)
                      this.realClip.instantiatedChannels[n].moveTo(
                        this.runTimeInfo.currentMillisecond,
                        t,
                        this.id,
                        !0
                      );
                    this.runTimeInfo.currentMillisecond = t;
                  },
                },
              ]),
              e
            );
          })(),
          pn = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e) {
              var r,
                o,
                s,
                a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              i(this, n), null === a ? ((o = {}), (s = e)) : ((o = e), (s = a));
              var c = (r = t.call(this, o, s))._validateProps();
              if (!c.result) return h(r, c);
              (r.attrsValidationRules = {}),
                (r.propsValidationRules = Yt),
                (r.isTheRootClip = !1);
              var u = {
                id: r.id,
                attrs: o,
                props: l({}, s, {
                  html: Object.prototype.hasOwnProperty.call(s, "html")
                    ? s.html
                    : r.html,
                  css: Object.prototype.hasOwnProperty.call(s, "css")
                    ? s.css
                    : r.css,
                  fonts: Object.prototype.hasOwnProperty.call(s, "fonts")
                    ? s.fonts
                    : r.fonts,
                  runTimeInfo: r.runTimeInfo,
                  subscribe: r.subscribe.bind(p(r)),
                }),
                plugin_npm_name: r.constructor.plugin_npm_name,
                Channel: r.constructor.Channel,
                DescriptiveIncident: p(r),
              };
              if (
                ((r.audio = "on"),
                Object.prototype.hasOwnProperty.call(r.constructor, "audio") &&
                  (r.audio = r.constructor.audio),
                Object.prototype.hasOwnProperty.call(s, "audio") &&
                  (r.audio = s.audio),
                Object.prototype.hasOwnProperty.call(s, "selector") &&
                  void 0 !== s.selector &&
                  !0 !== r.constructor.customClip)
              )
                u.Incident = $t;
              else if (
                Object.prototype.hasOwnProperty.call(s, "selector") &&
                void 0 !== s.selector &&
                !0 === r.constructor.customClip
              ) {
                delete u.props.selector;
                var d = new $t({ html: '<div id="clip-container"></div>' });
                (u.props.host = d.rootElement),
                  (u.Incident = r.constructor.Incident);
              } else
                "only" === r.audio && !0 !== r.props.root
                  ? (r.isTheRootClip = !1)
                  : ((r.isTheRootClip = !0),
                    (r.blockingWaitings = {}),
                    (u.Incident = r.constructor.Incident));
              if (
                ("on" === r.audio || "off" === r.audio
                  ? (r.realClip = at(u))
                  : (r.realClip = new Rt()),
                "on" === r.audio || "only" === r.audio)
              ) {
                var f = {
                  id: r.id,
                  attrs: {},
                  props: {
                    audioSources: Object.prototype.hasOwnProperty.call(
                      s,
                      "audioSources"
                    )
                      ? s.audioSources
                      : r.audioSources,
                    runTimeInfo: r.runTimeInfo,
                    subscribe: r.subscribe.bind(p(r)),
                  },
                  plugin_npm_name: r.constructor.plugin_npm_name,
                  Channel: r.constructor.Channel,
                  Incident: kt,
                  DescriptiveIncident: p(r),
                };
                r.audioClip = at(f);
              } else (r.audio = "off"), (r.audioClip = new Rt());
              return (
                (r.passiveAddition = !0),
                r._buildTree(),
                (r.passiveAddition = !1),
                r
              );
            }
            return (
              o(n, [
                {
                  key: "_validateProps",
                  value: function () {
                    return Ae.validateProps(
                      { props: this.props },
                      Yt,
                      this.constructor
                    );
                  },
                },
                {
                  key: "_buildTree",
                  value: function () {
                    void 0 !== this.realClip && this.buildTree();
                  },
                },
                {
                  key: "resize",
                  value: function (e) {
                    return (
                      this.realClip._resize(e / this.duration),
                      this.audioClip._resize(e / this.duration),
                      (this.duration = e),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: Ve,
                      }),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: Ve,
                      }),
                      { result: !0 }
                    );
                  },
                },
                {
                  key: "manageEditAttrProps",
                  value: function (e, t) {
                    return {
                      result: !1,
                      errors: [
                        "Clips attributes and properties can not be edited",
                      ],
                    };
                  },
                },
                {
                  key: "handleCheckForClip",
                  value: function (e, t) {
                    return !0;
                  },
                },
                {
                  key: "handleGetElements",
                  value: function (e, t) {
                    return this.realClip.getElements(t.selector);
                  },
                },
                {
                  key: "handleCheckAddition",
                  value: function (e, t) {
                    var n = this.realClip.addIncident(t),
                      i = this.audioClip.addIncident(t);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Ve,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckMove",
                  value: function (e, t) {
                    var n = this.realClip.moveIncident(t),
                      i = this.audioClip.moveIncident(t);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Ve,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckDeletion",
                  value: function (e, t) {
                    var n = this.realClip.removeIncident(t),
                      i = this.audioClip.removeIncident(t);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Ve,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleCheckResize",
                  value: function (e, t) {
                    var n = this.realClip.resizeIncident(t),
                      i = this.audioClip.resizeIncident(t);
                    return !0 === n.result && !0 === i.result
                      ? (n.execute(),
                        i.execute(),
                        this.putMessageOnPipe("flash", {}, "RootClip", {
                          selfExecute: !0,
                          direction: Ve,
                        }),
                        { result: !0 })
                      : n;
                  },
                },
                {
                  key: "handleFlash",
                  value: function (e, t) {
                    if (!this.isTheRootClip) return this.bypass();
                    this.flash();
                  },
                },
                {
                  key: "handleSetBlock",
                  value: function (e, t) {
                    if (!this.isTheRootClip) return this.bypass();
                    "transitional" !== this.runTimeInfo.state &&
                      ("blocked" !== this.runTimeInfo.state &&
                        (this.statusBeforeBlock = this.runTimeInfo.state),
                      (this.blockingWaitings[t.id] = t),
                      this.block());
                  },
                },
                {
                  key: "handleUnBlock",
                  value: function (e, t) {
                    if (!this.isTheRootClip) return this.bypass();
                    Object.prototype.hasOwnProperty.call(
                      this.blockingWaitings,
                      t.id
                    ) &&
                      (delete this.blockingWaitings[t.id],
                      0 === Object.keys(this.blockingWaitings).length &&
                        ("playing" === this.statusBeforeBlock
                          ? ((this.previousTimeStamp = -1), this.play())
                          : this.arm()));
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    v(u(n.prototype), "stop", this).call(this),
                      (this.blockingWaitings = {});
                  },
                },
                {
                  key: "onProgress",
                  value: function (e, t) {
                    this.realClip.onProgress(e, t),
                      this.audioClip.onProgress(e, t);
                  },
                },
                {
                  key: "paste",
                  value: function (e) {
                    return this.isTheRootClip
                      ? new dn({ host: e, descriptiveIncident: this })
                      : null;
                  },
                },
                {
                  key: "flash",
                  value: function () {
                    this.realClip.flash();
                  },
                },
                {
                  key: "setVolume",
                  value: function (e) {
                    return e < 0 || e > 1
                      ? {
                          result: !1,
                          errors: [{ type: "invalid volume number" }],
                        }
                      : "off" === this.audio
                      ? {
                          result: !1,
                          errors: [
                            {
                              type: "can not set volume of Clip with audio off",
                            },
                          ],
                        }
                      : (this.audioClip.setVolume(e), { result: !0 });
                  },
                },
                {
                  key: "selectorToPassToChildren",
                  get: function () {
                    return null;
                  },
                },
                {
                  key: "inheritedSelector",
                  get: function () {
                    return this._inheritedSelector;
                  },
                  set: function (e) {
                    this._inheritedSelector = e;
                  },
                },
                {
                  key: "html",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "css",
                  get: function () {
                    return "";
                  },
                },
                {
                  key: "fonts",
                  get: function () {
                    return [];
                  },
                },
                {
                  key: "audioSources",
                  get: function () {
                    return [];
                  },
                },
              ]),
              n
            );
          })(un);
        s(pn, "isClip", !0),
          s(pn, "Incident", zt),
          s(pn, "plugin_npm_name", "@kissmybutton/self-contained-incidents"),
          s(pn, "Channel", Ke),
          s(pn, "ClassName", "Clip");
        var hn = (function (e) {
            c(n, e);
            var t = f(n);
            function n(e) {
              var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              i(this, n);
              var o = { audio: "only", audioSources: e };
              return null !== r && (o.id = r), t.call(this, o);
            }
            return n;
          })(pn),
          fn = _(
            null,
            function (e, t) {
              var n = (function (t) {
                c(r, t);
                var n = f(r);
                function r(t, o) {
                  var s;
                  i(this, r),
                    void 0 === o && ((o = t), (t = {})),
                    (s = n.call(this, o)),
                    e(p(s));
                  var a = Ae.validateProps({ props: o }, Xt, s.constructor);
                  return a.result
                    ? ((s.inheritedSelector = null),
                      (s.attrs = t),
                      Object.prototype.hasOwnProperty.call(o, "duration") ||
                        (o.duration = 0),
                      (s.props = o),
                      (s.attrsValidationRules = {}),
                      (s.propsValidationRules = Xt),
                      (s.passive = !1),
                      s)
                    : h(s, a);
                }
                return r;
              })(t);
              return {
                F: n,
                d: [
                  {
                    kind: "field",
                    static: !0,
                    key: "Incident",
                    value: function () {
                      return ot;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "plugin_npm_name",
                    value: function () {
                      return "motor-cortex-js-attribute";
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "Channel",
                    value: function () {
                      return Dt;
                    },
                  },
                  {
                    kind: "field",
                    static: !0,
                    key: "ClassName",
                    value: function () {
                      return "Incident";
                    },
                  },
                  {
                    kind: "method",
                    decorators: [rn],
                    key: "editAttributes",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [on],
                    key: "editProperties",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [an],
                    key: "resize",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [ln],
                    key: "selector",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    decorators: [sn],
                    key: "getElements",
                    value: function () {},
                  },
                  {
                    kind: "method",
                    key: "manageEditAttrProps",
                    value: function (e, t) {
                      var n = this.parentNode,
                        i = n.getLeafPosition(this.id);
                      n.removeIncident(this.id);
                      var r = JSON.parse(JSON.stringify(this[t]));
                      this[t] = e;
                      var o = n.addIncident(this, i);
                      return (
                        o.result ||
                          (n.removeIncident(this.id),
                          (this[t] = r),
                          n.addIncident(this, i)),
                        o
                      );
                    },
                  },
                  {
                    kind: "method",
                    key: "detachFromParent",
                    value: function () {
                      v(u(n.prototype), "detachFromParent", this).call(this),
                        (this.inheritedSelector = null);
                    },
                  },
                  {
                    kind: "method",
                    key: "handleCheckForInvalidSelectors",
                    value: function () {
                      var e = this.selector();
                      return null === e
                        ? {
                            id: this.id,
                            ClassName: this.constructor.ClassName,
                            plugin_npm_name: this.constructor.plugin_npm_name,
                            error: "null selector",
                          }
                        : "&" === e.charAt(0)
                        ? {
                            id: this.id,
                            ClassName: this.constructor.ClassName,
                            plugin_npm_name: this.constructor.plugin_npm_name,
                            error:
                              "relative selector with no inherited selector",
                            selector: e,
                          }
                        : this.bypass();
                    },
                  },
                  {
                    kind: "method",
                    key: "exportDefinition",
                    value: function () {
                      return {
                        ClassName: this.constructor.ClassName,
                        plugin:
                          this.constructor.plugin ||
                          this.constructor.plugin_npm_name,
                        plugin_npm_name: this.constructor.plugin_npm_name,
                        attrs: this.attrs,
                        props: this.props,
                      };
                    },
                  },
                  {
                    kind: "method",
                    key: "exportLiveDefinition",
                    value: function () {
                      return {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: JSON.parse(JSON.stringify(this.props)),
                        attrsValidationRules: this.attrsValidationRules || null,
                      };
                    },
                  },
                ],
              };
            },
            $e
          ),
          mn = ge(),
          vn = (function () {
            function e(t) {
              if (
                (i(this, e),
                !Object.prototype.hasOwnProperty.call(t, "incident"))
              )
                return (
                  Ae.error(
                    'Journey constructor expects an Incident on its properties on the key "incident"'
                  ),
                  !1
                );
              (this.memory = t.calpuleMemory),
                (this.stations = []),
                (this.incident = t.incident),
                (this.startMillisecond =
                  1 * this.incident.runTimeInfo.currentMillisecond),
                (this.startState = "".concat(this.incident.runTimeInfo.state)),
                this.incident.stop();
            }
            return (
              o(e, [
                {
                  key: "station",
                  value: function (e) {
                    this.stations.length > 0 &&
                      this.stations[this.stations.length - 1],
                      this.stations.push(e),
                      this.incident.playableProgress(
                        e / this.incident.duration,
                        e
                      );
                  },
                },
                {
                  key: "destination",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    null != e
                      ? this.station(e)
                      : (e = this.stations[this.stations.length - 1]),
                      this.incident.playableProgress(
                        e / this.incident.duration,
                        e
                      ),
                      "playing" === this.startState ||
                      ("blocked" === this.startState &&
                        "playing" === this.incident.statusBeforeBlock)
                        ? this.incident.play()
                        : e >= this.incident.duration
                        ? this.incident.complete()
                        : this.incident.arm(),
                      this.memory.push(this.exportJourneyLog);
                  },
                },
                {
                  key: "exportJourneyLog",
                  value: function () {
                    return {
                      startMillisecond: this.startMillisecond,
                      startState: this.startState,
                      stations: this.stations,
                    };
                  },
                },
              ]),
              e
            );
          })(),
          gn = (function () {
            function e() {
              i(this, e), (this.memory = []);
            }
            return (
              o(e, [
                {
                  key: "startJourney",
                  value: function (e) {
                    return e
                      ? new vn({ incident: e, calpuleMemory: this.memory })
                      : (Ae.error(
                          "startJourney expects an Incident as an argument"
                        ),
                        !1);
                  },
                },
              ]),
              e
            );
          })(),
          yn = ge(),
          bn = new Be({ logLevel: 0 });
        function xn(e) {
          if (
            (Object.prototype.hasOwnProperty.call(e, "default") &&
              (e = e.default),
            Object.prototype.hasOwnProperty.call(e, "npm_name") ||
              (e.npm_name = "plugin_".concat(new Date().getTime())),
            !(function (e) {
              Object.prototype.hasOwnProperty.call(e, "default") &&
                (e = e.default);
              var t = e.npm_name,
                i = !0;
              if (
                (Object.prototype.hasOwnProperty.call(e, "name") ||
                  bn.error(
                    "Warning on plugin ".concat(
                      t,
                      '. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin'
                    )
                  ),
                Object.prototype.hasOwnProperty.call(e, "incidents") ||
                  Object.prototype.hasOwnProperty.call(e, "Clip") ||
                  (bn.error(
                    "Error on plugin ".concat(
                      t,
                      '. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".'
                    )
                  ),
                  (i = !1)),
                Object.prototype.hasOwnProperty.call(e, "incidents") &&
                  !Array.isArray(e.incidents))
              )
                bn.error(
                  "Error on plugin ".concat(
                    t,
                    '. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation'
                  )
                ),
                  (i = !1);
              else if (Object.prototype.hasOwnProperty.call(e, "incidents"))
                for (var r = 0; r < e.incidents.length; r++) {
                  var o = e.incidents[r];
                  "object" === n(o.exportable) &&
                    Object.prototype.hasOwnProperty.call(
                      o.exportable,
                      "default"
                    ) &&
                    (o.exportable = o.exportable.default),
                    o.exportable.prototype instanceof cn ||
                      o.exportable.prototype instanceof pn ||
                      o.exportable.prototype instanceof ot ||
                      o.exportable.prototype instanceof Ct ||
                      (bn.error(
                        "Error on plugin "
                          .concat(
                            t,
                            ". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                "
                          )
                          .concat(
                            o.exportable.constructor.name,
                            " doesn't.\n                Please refer to documentation"
                          )
                      ),
                      (i = !1)),
                    o.exportable.prototype instanceof pn &&
                      (Object.prototype.hasOwnProperty.call(o, "originalDims")
                        ? !1 === Ce(o.originalDims).result &&
                          (bn.error(
                            "Error on plugin "
                              .concat(
                                t,
                                ". Invalid originalDims value passed on "
                              )
                              .concat(o.name)
                          ),
                          (i = !1))
                        : bn.log(
                            "Warning on plugin ".concat(
                              t,
                              '. It\'s always good to provide originalDims\n            when exposing Incidents extending API.Clip. By defining their original dims the users\n            of your plugin will be able to define the desired dimensions of your Incident by\n            the "containerParams object"'
                            )
                          )),
                    Object.prototype.hasOwnProperty.call(o, "name") ||
                      (bn.error(
                        "Error on plugin ".concat(
                          t,
                          '. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation'
                        )
                      ),
                      (i = !1)),
                    Object.prototype.hasOwnProperty.call(o, "propTypes") ||
                      bn.log(
                        "Warning on plugin "
                          .concat(
                            t,
                            ".\n                It's always good for plugins to define the supported propTypes of their exposed Incidents' supported properties.\n                "
                          )
                          .concat(
                            o.exportable.constructor.name,
                            " doesn't.\n                Please refer to documentation"
                          ),
                        "warning"
                      );
                }
              return i;
            })(e))
          )
            return !1;
          var t = {};
          if (Object.prototype.hasOwnProperty.call(e, "Clip"))
            if (Object.prototype.hasOwnProperty.call(e.Clip, "exportable")) {
              var r,
                o,
                a =
                  ((o = r = (function (e) {
                    c(n, e);
                    var t = f(n);
                    function n() {
                      return i(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(pn)),
                  s(r, "Incident", e.Clip.exportable),
                  s(r, "plugin", e.npm_name),
                  s(r, "audio", e.audio ? e.audio : "off"),
                  s(r, "customClip", !0),
                  o);
              t.Clip = function t(n, r) {
                i(this, t);
                var o = n,
                  s = r;
                void 0 === r && ((o = {}), (s = n));
                var l = new a(o, s);
                if (
                  Object.prototype.hasOwnProperty.call(
                    e.Clip,
                    "attributesValidationRules"
                  )
                ) {
                  var c = JSON.parse(
                      JSON.stringify(e.Clip.attributesValidationRules)
                    ),
                    u = yn.validate(o, c);
                  if (u.length > 0) {
                    for (
                      var d = "Error on plugin's \"".concat(
                          e.npm_name,
                          '" Clip instantiation. Errors:'
                        ),
                        p = 0;
                      p < u.length;
                      p++
                    )
                      d += "\n - "
                        .concat(u[p].message, ". ")
                        .concat(u[p].actual, " provided");
                    return console.error(d), { result: !1, errors: u };
                  }
                  l.attrsValidationRules = e.Clip.attributesValidationRules;
                } else
                  bn.warning(
                    "It's always good to provide attributesValidationRules to the exported incidents. "
                      .concat(e.npm_name, ".")
                      .concat(l.constructor.name, " doesn't provide it")
                  );
                return l;
              };
            } else {
              var l,
                u,
                d =
                  ((u = l = (function (e) {
                    c(n, e);
                    var t = f(n);
                    function n() {
                      return i(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(pn)),
                  s(l, "Incident", e.Clip),
                  s(l, "plugin", e.npm_name),
                  s(l, "audio", e.audio ? e.audio : "off"),
                  s(l, "customClip", !0),
                  u);
              bn.warning(
                "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                  e.npm_name,
                  ".Clip doesn't provide it"
                )
              ),
                (t.Clip = d);
            }
          var p = Dt;
          if (
            (Object.prototype.hasOwnProperty.call(e, "compositeAttributes") &&
              (p = (function (t) {
                c(r, t);
                var n = f(r);
                function r(t) {
                  return (
                    i(this, r),
                    (t.comboAttributes = e.compositeAttributes),
                    n.call(this, t)
                  );
                }
                return r;
              })(Dt)),
            Object.prototype.hasOwnProperty.call(e, "incidents"))
          )
            for (
              var h = function (n) {
                  var r,
                    o,
                    a = e.incidents[n].exportable,
                    l = void 0;
                  if (a.prototype instanceof ot)
                    (o = r = (function (e) {
                      c(n, e);
                      var t = f(n);
                      function n() {
                        return i(this, n), t.apply(this, arguments);
                      }
                      return n;
                    })(fn)),
                      s(r, "Incident", a),
                      s(r, "plugin_npm_name", e.npm_name),
                      s(r, "plugin", e.npm_name),
                      s(r, "ClassName", e.incidents[n].name),
                      s(r, "Channel", p),
                      s(r, "audio", e.audio ? e.audio : "off"),
                      (l = o);
                  else if (a.prototype instanceof Ct) {
                    var u, d;
                    (d = u = (function (e) {
                      c(n, e);
                      var t = f(n);
                      function n() {
                        return i(this, n), t.apply(this, arguments);
                      }
                      return n;
                    })(fn)),
                      s(u, "Incident", a),
                      s(u, "plugin_npm_name", "@kissmybutton/media-playback"),
                      s(u, "plugin", e.npm_name),
                      s(u, "ClassName", e.incidents[n].name),
                      s(u, "Channel", _t),
                      s(u, "audio", e.audio ? e.audio : "off"),
                      (l = d);
                  } else if (a.prototype instanceof pn) {
                    var h, m;
                    (m = h = (function (e) {
                      c(n, e);
                      var t = f(n);
                      function n() {
                        return i(this, n), t.apply(this, arguments);
                      }
                      return n;
                    })(a)),
                      s(h, "plugin", e.npm_name),
                      s(h, "ClassName", e.incidents[n].name),
                      s(h, "audio", e.audio ? e.audio : "on"),
                      s(
                        h,
                        "originalDims",
                        Ce(e.incidents[n].originalDims).analysis
                      ),
                      (l = m);
                  } else if (a.prototype instanceof cn) {
                    var v, g;
                    (g = v = (function (e) {
                      c(n, e);
                      var t = f(n);
                      function n() {
                        return i(this, n), t.apply(this, arguments);
                      }
                      return n;
                    })(a)),
                      s(v, "plugin", e.npm_name),
                      s(v, "ClassName", e.incidents[n].name),
                      (l = g);
                  }
                  Object.defineProperty(t, e.incidents[n].name, {
                    get: function () {
                      return function t(r, o) {
                        i(this, t);
                        var s = new l(r, o);
                        if (
                          Object.prototype.hasOwnProperty.call(
                            e.incidents[n],
                            "attributesValidationRules"
                          )
                        ) {
                          var a = JSON.parse(
                            JSON.stringify(
                              e.incidents[n].attributesValidationRules
                            )
                          );
                          Object.prototype.hasOwnProperty.call(
                            e.incidents[n].attributesValidationRules,
                            "animatedAttrs"
                          ) &&
                            (a.initialValues = bn.buildInitialValuesValidationRules(
                              a.animatedAttrs
                            ));
                          var c = yn.validate(r, a);
                          if (c.length > 0) {
                            for (
                              var u = "Error on plugin's \""
                                  .concat(e.npm_name, '" "')
                                  .concat(
                                    e.incidents[n].name,
                                    '" instantiation. Errors:'
                                  ),
                                d = 0;
                              d < c.length;
                              d++
                            )
                              u += "\n - "
                                .concat(c[d].message, ". ")
                                .concat(c[d].actual, " provided");
                            return console.error(u), { result: !1, errors: c };
                          }
                          s.attrsValidationRules =
                            e.incidents[n].attributesValidationRules;
                        } else
                          bn.warning(
                            "It's always good to provide attributesValidationRules to the exported incidents. "
                              .concat(e.npm_name, ".")
                              .concat(s.constructor.name, " doesn't provide it")
                          );
                        return s;
                      };
                    },
                  });
                },
                m = 0;
              m < e.incidents.length;
              m++
            )
              h(m);
          return console.log(t), t;
        }
        var kn = xn(It),
          wn = pn,
          _n = cn,
          Cn = kn.Clip,
          In = kn.AudioPlayback,
          On = {
            MonoIncident: ot,
            Group: _n,
            Clip: wn,
            AudioClip: hn,
            MediaPlayback: Ct,
            ExtendableClip: mt,
            DOMClip: zt,
            easings: lt,
            clipFromDefinition: function e(t) {
              if (
                null !== t.attrsValidationRules &&
                void 0 !== t.attrsValidationRules
              ) {
                var n = mn.validate(t.attrs, t.attrsValidationRules);
                if (!0 !== n) return { result: !1, errors: n };
              }
              var i = new t.Class(t.attrs, t.props);
              if (!1 === i.result) return i;
              if (
                (null !== t.attrsValidationRules &&
                  void 0 !== t.attrsValidationRules &&
                  (i.attrsValidationRules = t.attrsValidationRules),
                Object.prototype.hasOwnProperty.call(t, "incidents"))
              )
                for (var r in t.incidents) {
                  var o = t.incidents[r],
                    s = e(o.leaf);
                  if (!1 === s.result) return s;
                  var a = i.addIncident(s, o.position);
                  if (!1 === a.result) return a;
                }
              return i;
            },
          },
          En = {
            API: On,
            Group: _n,
            Clip: wn,
            loadPlugin: xn,
            AudioClip: Cn,
            AudioPlayback: In,
            AudioEffect: kn.AudioEffect,
            TimeCapsule: gn,
          };
        (t.API = On),
          (t.AudioClip = Cn),
          (t.AudioPlayback = In),
          (t.Clip = wn),
          (t.Group = _n),
          (t.TimeCapsule = gn),
          (t.default = En),
          (t.loadPlugin = xn),
          Object.defineProperty(t, "__esModule", { value: !0 });
      })(t);
    }.call(this, n(2)));
  },
  function (e, t, n) {
    var i = n(0),
      r = n(3),
      o = n(4),
      s = i.loadPlugin(o),
      a = new i.Clip({
        host: document.getElementById("clip"),
        id: "my-root-clip",
        html: '<div id="video-container"></div>',
        css:
          "\n        #video-container{\n            width: 1280px;\n            height: 720px;\n        }\n    ",
        containerParams: { width: "1280px", height: "720px" },
      }),
      l = new s.Clip(
        {
          sources: [
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          ],
          startFrom: 120,
          width: 1280,
          height: 720,
        },
        { selector: "#video-container", id: "videoClip" }
      ),
      c = new s.Playback({ selector: "!#video", duration: 25e3 }),
      u = new s.VideoEffect(
        { animatedAttrs: { filter: { blur: 6 } } },
        { selector: "!#video", duration: 2e3 }
      ),
      d = new s.VideoEffect(
        { animatedAttrs: { filter: { blur: 0, sepia: 1 } } },
        { selector: "!#video", duration: 2e3 }
      ),
      p = new s.VideoEffect(
        { animatedAttrs: { filter: { sepia: 0 } } },
        { selector: "!#video", duration: 2e3 }
      ),
      h = new s.VideoEffect(
        { animatedAttrs: { filter: { "hue-rotate": 360 } } },
        { selector: "!#video", duration: 4e3 }
      ),
      f = new s.VideoEffect(
        { animatedAttrs: { filter: { grayscale: 1 } } },
        { easing: "easeInOutBounce", selector: "!#video", duration: 2e3 }
      ),
      m = new s.VideoEffect(
        { animatedAttrs: { filter: { grayscale: 0, invert: 1 } } },
        { easing: "easeInOutBack", selector: "!#video", duration: 8e3 }
      );
    a.addIncident(l, 0),
      l.addIncident(c, 500),
      l.addIncident(u, 1e3),
      l.addIncident(d, 3e3),
      l.addIncident(p, 5e3),
      l.addIncident(h, 1e4),
      l.addIncident(f, 14e3),
      l.addIncident(m, 16e3),
      new r({ clip: a }),
      console.log("exportDefinition", a.exportDefinition()),
      console.log("exportLiveDefinition", a.exportLiveDefinition());
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    e.exports = (function (e) {
      "use strict";
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      e =
        e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
      var n = function (e) {
          return document.getElementById(e);
        },
        i = function (e) {
          return document.createElement(e);
        },
        r = function () {
          var e;
          return (e = document).addEventListener.apply(e, arguments);
        },
        o = function () {
          var e;
          return (e = document).removeEventListener.apply(e, arguments);
        },
        s = (function (e, t) {
          return (
            (function (e) {
              var t = (e.exports = {});
              (t.playSVG =
                '\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">\n    <path fill="#999" fill-rule="nonzero" d="M16.224 8.515L2.582.245A1.7 1.7 0 0 0 0 1.702V18.24a1.7 1.7 0 0 0 2.582 1.455l13.642-8.27a1.7 1.7 0 0 0 0-2.91z"/>\n</svg>\n\n'),
                (t.dcSVG =
                  '\n  <svg class="svg" style="transform:scale(0.55)" version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="1705.000000pt" height="1903.000000pt" viewBox="0 0 1705.000000 1903.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,1903.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M0 9515 l0 -9515 1583 0 1582 0 4430 4655 c2437 2561 4457 4687 4490\n4726 33 38 1164 1227 2513 2642 l2452 2572 0 2192 c0 1206 -2 2193 -4 2193 -3\n0 -1597 -1652 -3542 -3671 l-3538 -3671 -31 35 c-16 20 -1497 1683 -3290 3696\nl-3260 3661 -1692 0 -1693 0 0 -9515z m5504 2412 c1253 -1413 2279 -2574 2282\n-2580 3 -9 -3274 -3438 -4597 -4811 -5 -6 -9 1968 -9 4999 l0 5010 24 -25 c13\n-14 1048 -1181 2300 -2593z"/>\n<path d="M13924 7584 c-34 -17 -2029 -2158 -2029 -2178 0 -15 5121 -5400 5141\n-5404 12 -3 14 295 14 2241 l0 2245 -1478 1543 c-813 849 -1490 1550 -1505\n1557 -38 16 -105 15 -143 -4z"/>\n</g>\n</svg>\n'),
                (t.pauseSVG =
                  '\n  <svg class="svg" style="transform:scale(1.5)" width="100%" height="100%" viewBox="0 0 36 36" >\n    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />\n  </svg>\n'),
                (t.replaySVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">\n      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>\n      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>\n    </g></g>\n  </svg>\n'),
                (t.volumeSVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.374 286.374" enable-background="new 0 0 286.374 286.374" xml:space="preserve">\n    <g id="Volume_2">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92\n        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421\n        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034\n        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z\n         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848\n        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
                (t.volumeMuteSVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.277 286.277" enable-background="new 0 0 286.277 286.277" xml:space="preserve">\n    <g id="Volume_none">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284\n        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0\n        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284\n        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141\n        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898\n        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662\n        C125.23,41.792,116.341,43.349,108.674,48.296z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
                (t.settingsSVG =
                  '\n  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <path fill="#999" fill-rule="nonzero" d="M17.812 7.52h-1.474a7.09 7.09 0 0 0-.604-1.456l1.043-1.042a1.187 1.187 0 0 0 0-1.68l-1.12-1.118a1.188 1.188 0 0 0-1.68 0l-1.043 1.042a7.05 7.05 0 0 0-1.455-.604V1.188C11.48.531 10.948 0 10.292 0H8.708c-.656 0-1.187.532-1.187 1.188v1.474a7.1 7.1 0 0 0-1.456.604L5.022 2.224a1.187 1.187 0 0 0-1.68 0l-1.12 1.12a1.188 1.188 0 0 0 0 1.68l1.044 1.042c-.256.46-.458.949-.604 1.455H1.188C.531 7.52 0 8.052 0 8.708v1.584c0 .656.532 1.187 1.188 1.187h1.474c.146.507.348.995.604 1.456L2.22 13.979a1.188 1.188 0 0 0 0 1.68l1.12 1.119a1.223 1.223 0 0 0 1.68 0l1.043-1.043c.462.255.95.458 1.457.605v1.472c0 .656.531 1.188 1.187 1.188h1.584c.656 0 1.187-.532 1.187-1.188V16.34c.506-.147.995-.35 1.456-.604l1.043 1.043a1.188 1.188 0 0 0 1.68 0l1.119-1.12a1.187 1.187 0 0 0 0-1.679l-1.043-1.043c.256-.461.458-.95.604-1.456h1.474A1.188 1.188 0 0 0 19 10.29V8.709c0-.656-.532-1.187-1.188-1.187zM9.5 13.459a3.958 3.958 0 1 1 0-7.916 3.958 3.958 0 0 1 0 7.916z"/>\n</svg>\n\n'),
                (t.arrowRightSVG =
                  '\n  <svg class="svg arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n  </svg>\n'),
                (t.arrowLeftSVG =
                  '\n  <svg class="svg arrow" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n  </svg> \n'),
                (t.fullScreenSVG =
                  '\n <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M18.802 1.942A1.746 1.746 0 0 0 17.06.2h-4.537a.99.99 0 1 0 0 1.98h4.102c.11 0 .198.088.198.197v2.588a.99.99 0 1 0 1.98 0V1.942zM.198 4.965a.99.99 0 0 0 1.98 0v-2.59a.198.198 0 0 1 .197-.199h4.102a.99.99 0 0 0 0-1.979H1.944C.983.2.204.978.202 1.94L.198 4.965zM18.802 17.056v-3.023a.99.99 0 1 0-1.98 0v2.592c0 .11-.088.198-.197.198h-4.102a.99.99 0 1 0 0 1.98h4.533c.964-.001 1.746-.783 1.746-1.747zM.198 17.056a1.746 1.746 0 0 0 1.746 1.742h4.533a.99.99 0 1 0 0-1.979H2.375a.198.198 0 0 1-.198-.194v-2.592a.99.99 0 1 0-1.98 0v3.023z"/>\n        <rect width="10.651" height="6.117" x="4.174" y="6.441" rx="1.954"/>\n    </g>\n</svg>\n\n'),
                (t.loopSVG =
                  '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M16.773 15.476H16.3a1.25 1.25 0 0 0 0 2.5h.478a6.944 6.944 0 0 0 .98-13.823.251.251 0 0 1-.208-.246V1.93A1.25 1.25 0 0 0 15.584.906l-4.778 3.341a1.25 1.25 0 0 0 .717 2.274h4.764c2.829 0 4.963 1.925 4.963 4.478a4.482 4.482 0 0 1-4.477 4.477zM6.247 17.845c.12.02.208.124.208.246v1.976a1.249 1.249 0 0 0 1.966 1.024l4.773-3.34a1.251 1.251 0 0 0-.717-2.275H7.713c-2.829 0-4.963-1.925-4.963-4.476a4.482 4.482 0 0 1 4.477-4.479h.478a1.25 1.25 0 1 0 0-2.5h-.478a6.945 6.945 0 0 0-.98 13.824z"/>\n    </g>\n</svg>\n'),
                (t.loadingSVG =
                  '<svg class="lds-spinner" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>');
            })((t = { exports: {} })),
            t.exports
          );
        })(),
        a = {
          name: "mc-player",
          set playerName(e) {
            this.name += "-" + e;
          },
        },
        l = function (e, t) {
          return {
            default: {
              "settings-background-color": "whitesmoke",
              "hms-background-color": "whitesmoke",
              "background-color": "whitesmoke",
              "grad-height": "0px",
              color: "black",
              "svg-color": "black",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "red",
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              "preview-border": "1px solid rgba(0,0,0,1)",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            dark: {
              "settings-background-color": "black",
              "hms-background-color": "black",
              "background-color": "black",
              "grad-height": "0px",
              color: "white",
              "svg-color": "white",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "red",
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(90, 90, 90, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              "preview-border": "1px solid rgba(0,0,0,1)",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            whiteGold: {
              "settings-background-color": "white",
              "hms-background-color": "white",
              "background-color": "white",
              "grad-height": "0px",
              color: "#a17f1a",
              "svg-color": "#a17f1a",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "#a17f1a",
              "cursor-color": "#a17f1a",
              "speedbar-cursor-color": "#a17f1a",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#a17f1a",
              "preview-border": "1px solid rgba(0,0,0,1)",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            darkGold: {
              "settings-background-color": "black",
              "hms-background-color": "black",
              "background-color": "black",
              "grad-height": "0px",
              color: "#a17f1a",
              "svg-color": "#a17f1a",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "#a17f1a",
              "cursor-color": "#a17f1a",
              "speedbar-cursor-color": "#a17f1a",
              "button-opacity": "1",
              "hover-color": "rgba(90, 90, 90, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#a17f1a",
              "preview-border": "1px solid rgba(0,0,0,1)",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            transparent: {
              "background-color": "transparent",
              "settings-background-color": "rgba(0,0,0,0.5)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "1px solid rgba(0,0,0,1)",
              color: "#999",
              "grad-height": "60px",
              "svg-color": "#999",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "#9e2d11",
              "cursor-style::before":
                '\n        box-shadow: 0px 0px 6px 6px red;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        background-color: red;\n        position: relative;\n        left: -2px;\n        top: -2px;\n    ',
              "cursor-style::after":
                '\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        box-shadow: 0px 0px 6px 6px red;\n        content: "";\n        display: block;\n        position: absolute;\n        background-color: red;\n        right: -2px;\n        bottom: -2px;\n    ',
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid rgba(255,255,255,0.1)",
              "svg-selected-color": "red",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #ff0000;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #ff0000;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "mc-green": {
              "background-color": "#141416",
              "settings-background-color": "rgba(0,0,0,0.5)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "1px solid rgba(0,0,0,1)",
              color: "#999",
              "grad-height": "0px",
              "svg-color": "#999",
              "loopbar-color": "rgba(0,184,139,0.2)",
              "loopbar-boundaries-color": "#00b88b",
              "totalbar-color": "rgba(255, 255, 255, 0.11)",
              "speedbar-color": "#999",
              "runningbar-color": "#00b88b",
              "cursor-color": "#00b88b",
              "speedbar-cursor-color": "#00b88b",
              "button-opacity": "1",
              "hover-color": "rgba(0,184,139,0.2)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#00b88b",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid #151515",
              "svg-selected-color": "#00b88b",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #00b88b;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #00b88b;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "mc-blue": {
              "background-color": "#141416",
              "settings-background-color": "rgba(0,0,0,0.5)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "1px solid rgba(0,0,0,1)",
              color: "#999",
              "grad-height": "0px",
              "svg-color": "#999",
              "loopbar-color": "rgba(0,153,225,0.2)",
              "loopbar-boundaries-color": "#0099e1",
              "totalbar-color": "rgba(255, 255, 255, 0.11)",
              "speedbar-color": "#999",
              "runningbar-color": "#0099e1",
              "cursor-color": "#0099e1",
              "speedbar-cursor-color": "#0099e1",
              "button-opacity": "1",
              "hover-color": "rgba(0,153,225,0.2)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#0099e1",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid #151515",
              "svg-selected-color": "#0099e1",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #0099e1;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #0099e1;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "on-top": {
              "background-height": "100%",
              "pointer-event-panel-height": "calc(100% - 44px)",
              "controls-bottom": "0px",
              "settings-panel-bottom": "48px",
              "controls-position": "0px",
            },
            "position-bottom": {
              "background-height": "calc(100% - 44px)",
              "pointer-event-panel-height": "calc(100% - 44px)",
              "controls-bottom": "-0px",
              "settings-panel-bottom": "48px",
              "controls-position": "40px",
            },
          }[e];
        },
        c = n,
        u = i,
        d = r,
        p = o,
        h = n,
        f = r,
        m = o,
        v = r,
        g = o,
        y = r,
        b = o,
        x = n,
        k = r,
        w = o,
        _ = n,
        C = r,
        I = o,
        O = n,
        E = n;
      function P(e, t) {
        for (var n = t.parentNode; null != n; ) {
          if (n == e) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      var j = function () {
          var e = new Date().getTime();
          return "xxxxxxxx-xxxx".replace(/[xy]/g, function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            var i = Math.random() > 0.5,
              r = ("x" == t ? n : (3 & n) | 8).toString(16);
            return i ? r.toUpperCase() : r;
          });
        },
        M = n,
        S = r,
        B = o,
        A = function (e) {
          return document.querySelectorAll(e);
        },
        D = n,
        T = new e.TimeCapsule(),
        L = n,
        V = function (e) {
          return document.getElementsByTagName(e);
        },
        z = i,
        N = function (e, t) {
          function n(e) {
            return "number" == typeof e && isFinite(e);
          }
          var i = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
            r = null,
            o = null;
          if (Object.prototype.hasOwnProperty.call(e, "width")) {
            var s = e.width.match(i)[0],
              a = e.width.substring(s.length);
            r =
              !n(Number(s)) || ("%" !== a && "px" !== a)
                ? null
                : { number: Number(s), unit: a };
          }
          if (Object.prototype.hasOwnProperty.call(e, "height")) {
            var l = e.height.match(i)[0],
              c = e.height.substring(l.length);
            o =
              !n(Number(l)) || ("%" !== c && "px" !== c)
                ? null
                : { number: Number(l), unit: c };
          }
          var u,
            d = 1,
            p = 1;
          null !== r &&
            "px" === r.unit &&
            r.number > t.width &&
            (d = t.width / r.number),
            null !== o &&
              "px" === o.unit &&
              o.number > t.height &&
              (p = t.height / o.number),
            (u = p <= d ? p : d);
          var h = {};
          if (null !== r) {
            var f;
            f = "px" === r.unit ? r.number * u : (r.number / 100) * t.width * u;
            var m = t.width - f;
            h.left = m / 2;
          }
          if (null !== r) {
            var v;
            v =
              "px" === o.unit ? o.number * u : (o.number / 100) * t.height * u;
            var g = t.height - v;
            h.top = g / 2;
          }
          return { scale: u, position: h };
        };
      return (function () {
        function e(t) {
          var n = this;
          for (var i in ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (t.id = t.id || Date.now()),
          (t.preview = t.preview || !1),
          (t.showVolume = t.showVolume || !1),
          (t.showIndicator = t.showIndicator || !1),
          (t.theme = t.theme || "transparent on-top"),
          (t.host = t.host || t.clip.props.host),
          (t.buttons = t.buttons || {}),
          (t.timeFormat = t.timeFormat || "ss"),
          (t.scaleToFit = t.scaleToFit || !1),
          void 0 === t.pointerEvents || null === t.pointerEvents
            ? (t.pointerEvents = !0)
            : (t.pointerEvents = Boolean(t.pointerEvents)),
          (t.onMillisecondChange = t.onMillisecondChange || null),
          (t.speedValues = t.speedValues || [
            -4,
            -2,
            -1,
            -0.5,
            0,
            0.5,
            1,
            2,
            4,
          ]),
          t.speedValues))
            isFinite(t.speedValues[i]) || t.speedValues.splice(i, 1);
          t.speedValues.sort(function (e, t) {
            return e - t;
          }),
            (this.className = a.name),
            (a.playerName = t.id),
            (this.options = t),
            (this.id = this.options.id),
            (this.name = a.name),
            (this.previewClip = null),
            (this.clip = t.clip),
            (this.clipClass = t.clipClass),
            (this.state = this.clip.runTimeInfo.state),
            (this.listeners = {}),
            (this.previewScale = 0.25),
            (this.settings = {
              volume: 1,
              journey: null,
              previousVolume: 1,
              volumeMute: !1,
              needsUpdate: !0,
              resizeLoop: !1,
              loopJourney: !1,
              previewJourney: null,
              loopActivated: !1,
              requestingLoop: !1,
              playAfterResize: !1,
              loopStartMillisecond: 0,
              loopLastPositionXPxls: 0,
              loopLastPositionXPercentage: 0,
              loopEndMillisecond: this.clip.duration,
            }),
            (this.functions = {
              millisecondChange: this.millisecondChange,
              createJourney: this.createJourney,
              createLoop: this.createLoop,
            }),
            (function (e) {
              e.elements = {};
              var t = e.clip.props.host;
              if (
                ((t.style.display = "flex"),
                (t.style.justifyContent = "center"),
                (t.style.alignItems = "center"),
                (e.clip.props.host.style.position = "relative"),
                (e.clip.props.host.style.zIndex = "0"),
                (e.elements.mcPlayer = u("div")),
                (e.elements.mcPlayer.id = "".concat(e.name)),
                (e.elements.mcPlayer.className = "".concat(e.className)),
                (e.elements.mcPlayer.innerHTML = (function (e) {
                  return '\n  <div\n    class="pointer-event-panel"\n    id="'
                    .concat(
                      e.name,
                      '-pointer-event-panel"\n  ></div>\n  <div\n    class="pointer-event-panel"\n    id="'
                    )
                    .concat(
                      e.name,
                      '-listener-helper"\n  ></div>\n  <div class="grad"></div>\n  <div class="background"></div>\n  <div id="'
                    )
                    .concat(e.name, '-controls">\n    <div id="')
                    .concat(e.name, '-totalbar">\n      <div id="')
                    .concat(e.name, '-hover-display">\n        <div id="')
                    .concat(
                      e.name,
                      '-hover-millisecond"></div>\n      </div>\n      <div id="'
                    )
                    .concat(
                      e.name,
                      '-loopbar">\n        <div\n          class="'
                    )
                    .concat(e.name, '-loop-boundaries"\n          id="')
                    .concat(
                      e.name,
                      '-loopbar-start"\n        ></div>\n        <div\n          class="'
                    )
                    .concat(e.name, '-loop-boundaries"\n          id="')
                    .concat(
                      e.name,
                      '-loopbar-end"\n        ></div>\n        <div id="'
                    )
                    .concat(e.name, '-helperbar"></div>\n        <div id="')
                    .concat(e.name, '-runningbar">\n          <div id="')
                    .concat(
                      e.name,
                      '-cursor"></div>\n        </div>\n      </div>\n    </div>\n    <div id="'
                    )
                    .concat(e.name, '-left-controls">\n      <div id="')
                    .concat(e.name, '-status-btn">\n        ')
                    .concat(e.svg.playSVG, '\n        <span id="')
                    .concat(
                      e.name,
                      '-indicator"></span>\n      </div>\n      <div id="'
                    )
                    .concat(e.name, '-volume">\n        <div id="')
                    .concat(e.name, '-volume-btn">\n          ')
                    .concat(
                      e.svg.volumeSVG,
                      '\n        </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-volumebar-helper"></div>\n        <div id="'
                    )
                    .concat(e.name, '-volumebar">\n            <div id="')
                    .concat(
                      e.name,
                      '-volumebar-active">\n              <div id="'
                    )
                    .concat(
                      e.name,
                      '-volume-cursor"></div>\n            </div>\n        </div>\n      </div>\n      <div id="'
                    )
                    .concat(e.name, '-time-display">\n        <span id="')
                    .concat(
                      e.name,
                      '-time-current"></span>\n        <span id="'
                    )
                    .concat(
                      e.name,
                      '-time-separator"></span>\n        <span id="'
                    )
                    .concat(
                      e.name,
                      '-time-total"></span>\n      </div>\n    </div>\n    <div id="'
                    )
                    .concat(
                      e.name,
                      '-right-controls">\n      <div\n        id="'
                    )
                    .concat(
                      e.name,
                      '-loop-btn-container"\n      >\n        <div\n          id="'
                    )
                    .concat(e.name, '-loop-btn"\n        >')
                    .concat(
                      e.svg.loopSVG,
                      '</div>\n        <div\n          id="'
                    )
                    .concat(
                      e.name,
                      '-loop-time"\n        >\n          <span\n            id="'
                    )
                    .concat(e.name, '-loopbar-start-time"\n            class="')
                    .concat(
                      e.name,
                      '-loopbar-time"\n          ></span>\n          <span>:</span>\n          <span\n            id="'
                    )
                    .concat(e.name, '-loopbar-end-time"\n            class="')
                    .concat(
                      e.name,
                      '-loopbar-time"\n          ></span>\n        </div>\n      </div>\n      <div\n        id="'
                    )
                    .concat(e.name, '-settings-btn"\n      >')
                    .concat(
                      e.svg.settingsSVG,
                      '</div>\n      <div\n        id="'
                    )
                    .concat(e.name, '-dc-btn"\n      >\n        ')
                    .concat(
                      e.svg.dcSVG,
                      '\n      </div>\n      \n      <div\n        id="'
                    )
                    .concat(e.name, '-full-screen-btn"\n      >')
                    .concat(
                      e.svg.fullScreenSVG,
                      '</div>\n    </div>\n    \n\n  </div>\n  <div id="'
                    )
                    .concat(e.name, '-settings-panel">\n    <ul id="')
                    .concat(e.name, '-main-settings">\n      <li id="')
                    .concat(
                      e.name,
                      '-settings-pointer-events">\n        <label>Pointer Events</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-pointer-events-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-preview">\n        <label>Show Preview</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-preview-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-indicator">\n        <label>Show Indicator</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-indicator-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-volume">\n        <label>Show Volume</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-volume-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-speed-show">\n        <label>Speed</label>\n        <div class="'
                    )
                    .concat(e.name, '-speed-btn">')
                    .concat(e.svg.arrowRightSVG, '</div>\n        <span id="')
                    .concat(
                      e.name,
                      '-speed-current"></span>\n      </li>\n    </ul>\n    <ul id="'
                    )
                    .concat(e.name, '-speed-settings">\n      <li id="')
                    .concat(
                      e.name,
                      '-settings-speed-hide">\n        <div class="'
                    )
                    .concat(e.name, '-speed-btn">')
                    .concat(e.svg.arrowLeftSVG, "</div>\n        <label id=")
                    .concat(
                      e.name,
                      '-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value-helperbar"></div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value-bar">\n          <div\n            class="'
                    )
                    .concat(e.name, '-speed-value-step"\n            id="')
                    .concat(
                      e.name,
                      '-speed-cursor"\n          >\n            <div></div>\n          </div>\n        </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value">\n        </div>\n      </li>\n    </ul>\n  </div>\n'
                    );
                })({ svg: s, name: e.name })),
                "string" == typeof e.options.host)
              ) {
                var n = document.querySelectorAll(e.options.host);
                for (var i in n)
                  isNaN(i) || n[i].appendChild(e.elements.mcPlayer);
              } else e.options.host.appendChild(e.elements.mcPlayer);
              for (var r in ((e.elements.pointerEventPanel = c(
                "".concat(e.name, "-pointer-event-panel")
              )),
              (e.elements.listenerHelper = c(
                "".concat(e.name, "-listener-helper")
              )),
              (e.elements.loopBar = c("".concat(e.name, "-loopbar"))),
              (e.elements.totalBar = c("".concat(e.name, "-totalbar"))),
              (e.elements.indicator = c("".concat(e.name, "-indicator"))),
              (e.elements.loopButton = c("".concat(e.name, "-loop-btn"))),
              (e.elements.volumeBar = c("".concat(e.name, "-volumebar"))),
              (e.elements.totalTime = c("".concat(e.name, "-time-total"))),
              (e.elements.volumeControl = c("".concat(e.name, "-volume"))),
              (e.elements.volumeBtn = c("".concat(e.name, "-volume-btn"))),
              (e.elements.runningBar = c("".concat(e.name, "-runningbar"))),
              (e.elements.loopBarEnd = c("".concat(e.name, "-loopbar-end"))),
              (e.elements.statusButton = c("".concat(e.name, "-status-btn"))),
              (e.elements.speedBar = c("".concat(e.name, "-speed-value-bar"))),
              (e.elements.currentTime = c("".concat(e.name, "-time-current"))),
              (e.elements.timeDisplay = c("".concat(e.name, "-time-display"))),
              (e.elements.speedCurrent = c(
                "".concat(e.name, "-speed-current")
              )),
              (e.elements.loopBarStart = c(
                "".concat(e.name, "-loopbar-start")
              )),
              (e.elements.volumeCursor = c(
                "".concat(e.name, "-volume-cursor")
              )),
              (e.elements.settingsButton = c(
                "".concat(e.name, "-settings-btn")
              )),
              (e.elements.donkeyclipButton = c("".concat(e.name, "-dc-btn"))),
              (e.elements.timeSeparator = c(
                "".concat(e.name, "-time-separator")
              )),
              (e.elements.settingsPanel = c(
                "".concat(e.name, "-settings-panel")
              )),
              (e.elements.settingsMainPanel = c(
                "".concat(e.name, "-main-settings")
              )),
              (e.elements.fullScreenButton = c(
                "".concat(e.name, "-full-screen-btn")
              )),
              (e.elements.volumeBarHelper = c(
                "".concat(e.name, "-volumebar-helper")
              )),
              (e.elements.volumeBarActive = c(
                "".concat(e.name, "-volumebar-active")
              )),
              (e.elements.settingsSpeedPanel = c(
                "".concat(e.name, "-speed-settings")
              )),
              (e.elements.settingsShowVolume = c(
                "".concat(e.name, "-settings-volume")
              )),
              (e.elements.settingsShowPreview = c(
                "".concat(e.name, "-settings-preview")
              )),
              (e.elements.settingsPointerEvents = c(
                "".concat(e.name, "-settings-pointer-events")
              )),
              (e.elements.speedBarHelper = c(
                "".concat(e.name, "-speed-value-helperbar")
              )),
              (e.elements.settingsShowIndicator = c(
                "".concat(e.name, "-settings-indicator")
              )),
              (e.elements.settingsSpeedButtonShow = c(
                "".concat(e.name, "-settings-speed-show")
              )),
              (e.elements.settingsSpeedButtonHide = c(
                "".concat(e.name, "-settings-speed-hide")
              )),
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.volume + "%"),
              (e.elements.currentTime.innerHTML = e.timeFormat(0)),
              (e.elements.totalTime.innerHTML = e.timeFormat(e.clip.duration)),
              (e.elements.timeSeparator.innerHTML = "/"),
              e.elements.settingsPanel.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              e.options.showIndicator
                ? ((e.elements.indicator.style.visibility = "visible"),
                  (e.elements.statusButton.style.width = "35px"),
                  (e.elements.statusButton.style.height = "20px"),
                  (e.elements.statusButton.style.bottom = "5px"))
                : (e.elements.indicator.style.visibility = "hidden"),
              (e.elements.indicator.innerHTML = e.clip.runTimeInfo.state),
              (e.elements.settingsSpeedPanel.style.display = "none"),
              e.elements.settingsSpeedPanel
                .getElementsByTagName("li")[1]
                .classList.add("no-hover"),
              (e.elements.loopBarStart.style.left = "0%"),
              e.elements.loopBarStart.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              (e.elements.loopBarEnd.style.left = "100%"),
              e.elements.loopBarEnd.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              (e.elements.loopStartTime = c(
                "".concat(e.name, "-loopbar-start-time")
              )),
              (e.elements.loopEndTime = c(
                "".concat(e.name, "-loopbar-end-time")
              )),
              (e.elements.editableLoopStartTime = document.createElement(
                "input"
              )),
              (e.elements.editableLoopStartTime.type = "text"),
              (e.elements.editableLoopStartTime.size =
                c("".concat(e.name, "-time-total")).innerHTML.length + 1),
              (e.elements.editableLoopStartTime.maxLength = c(
                "".concat(e.name, "-time-total")
              ).innerHTML.length),
              (e.elements.editableLoopStartTime.style.height = c(
                "".concat(e.name, "-time-total")
              ).offsetHeight),
              (e.elements.editableLoopStartTime.value = c(
                "".concat(e.name, "-loopbar-start-time")
              ).innerHTML),
              (e.elements.editableLoopStartTime.style.fontSize = "8px"),
              (e.elements.editableLoopEndTime = document.createElement(
                "input"
              )),
              (e.elements.editableLoopEndTime.type = "text"),
              (e.elements.editableLoopEndTime.size =
                c("".concat(e.name, "-time-total")).innerHTML.length + 1),
              (e.elements.editableLoopEndTime.maxLength = c(
                "".concat(e.name, "-time-total")
              ).innerHTML.length),
              (e.elements.editableLoopEndTime.style.height = c(
                "".concat(e.name, "-time-total")
              ).offsetHeight),
              (e.elements.editableLoopEndTime.value = c(
                "".concat(e.name, "-loopbar-start-time")
              ).innerHTML),
              (e.elements.editableLoopEndTime.pattern = "d*"),
              (e.elements.editableLoopEndTime.style.fontSize = "8px"),
              c("".concat(e.name, "-loop-time")).classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              c("".concat(e.name, "-hover-display")).classList.add("m-fadeOut"),
              (c("".concat(e.name, "-show-volume-checkbox")).checked =
                e.options.showVolume),
              (c("".concat(e.name, "-show-indicator-checkbox")).checked =
                e.options.showIndicator),
              (c("".concat(e.name, "-show-preview-checkbox")).checked =
                e.options.preview),
              (c("".concat(e.name, "-pointer-events-checkbox")).checked =
                e.options.pointerEvents),
              e.options.pointerEvents
                ? ((e.elements.mcPlayer.style.pointerEvents = "none"),
                  (e.elements.pointerEventPanel.style.pointerEvents = "auto"),
                  (c("".concat(e.name, "-controls")).style.pointerEvents =
                    "auto"),
                  (e.elements.settingsPanel.style.pointerEvents = "auto"))
                : ((e.elements.mcPlayer.style.pointerEvents = "none"),
                  (e.elements.pointerEventPanel.style.pointerEvents = "none"),
                  (c("".concat(e.name, "-controls")).style.pointerEvents =
                    "auto"),
                  (e.elements.settingsPanel.style.pointerEvents = "auto")),
              (e.elements.listenerHelper.style.pointerEvents = "none"),
              e.options.showVolume
                ? ((e.elements.timeDisplay.style.left = ""),
                  (e.elements.volumeControl.style.visibility = "visible"))
                : ((e.elements.timeDisplay.style.left = "45px"),
                  (e.elements.volumeControl.style.visibility = "hidden"),
                  e.elements.volumeControl.classList.toggle(
                    "".concat(e.name, "-hide")
                  ),
                  e.elements.volumeControl.classList.toggle(
                    "".concat(e.name, "-volume-width-transition")
                  )),
              e.options.speedValues)) {
                var o = u("div");
                o.className = "".concat(e.name, "-speed-value-step");
                var a = u("div");
                (a.className = "".concat(e.name, "-speed-value")),
                  (a.dataset.speedValue = e.options.speedValues[r]),
                  (a.innerHTML = e.options.speedValues[r]),
                  (a.dataset.zone = r),
                  c("".concat(e.name, "-speed-value")).prepend(a),
                  e.elements.speedBar.prepend(o);
              }
              !1 === e.options.buttons.fullScreen &&
                e.elements.fullScreenButton.remove(),
                !1 === e.options.buttons.settings &&
                  e.elements.settingsButton.remove(),
                !1 === e.options.buttons.donkeyclip &&
                  e.elements.donkeyclipButton.remove(),
                !1 === e.options.buttons.loop && e.elements.loopButton.remove();
            })(this),
            this.setTheme(),
            this.setSpeed(),
            this.subscribeToTimer(),
            this.subscribeToDurationChange(),
            this.addEventListeners(),
            this.scaleClipHost(),
            this.eventBroadcast("state-change", this.state),
            this.options.preview && this.createPreviewDisplay(),
            (this.resizeTimeout = setTimeout(function () {}, 20)),
            window.addEventListener("resize", function () {
              clearTimeout(n.resizeTimeout),
                (n.resizeTimeout = setTimeout(function () {
                  n.options.preview && n.setPreviewDimentions(),
                    n.options.scaleToFit && n.scaleClipHost();
                }, 20));
            });
        }
        var n, i;
        return (
          (n = e),
          (i = [
            {
              key: "scaleClipHost",
              value: function () {
                if (this.options.scaleToFit) {
                  var e = N(this.clip.props.containerParams, {
                    width: this.clip.props.host.offsetWidth,
                    height: this.clip.props.host.offsetHeight,
                  });
                  (this.clip.realClip.rootElement.style.transform = "scale(".concat(
                    e.scale
                  )),
                    (this.clip.realClip.rootElement.style.left =
                      e.position.left + "px"),
                    (this.clip.realClip.rootElement.style.top =
                      e.position.top + "px");
                }
              },
            },
            {
              key: "createLoop",
              value: function (e, t) {
                (this.settings.loopStartMillisecond = e),
                  (this.settings.loopEndMillisecond = t),
                  (this.elements.loopBar.style.left =
                    (e / this.clip.duration) * 100 + "%"),
                  (this.elements.loopBar.style.width =
                    ((t - e) / this.clip.duration) * 100 + "%"),
                  this.createJourney(this.clip, e),
                  (this.elements.runningBar.style.width = "0%"),
                  !this.settings.loopActivated && this.activateLoop(!1);
              },
            },
            {
              key: "createJourney",
              value: function (e, t) {
                var n = this,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                setTimeout(function () {
                  var r = i.before,
                    o = void 0 === r ? null : r,
                    s = i.after,
                    a = void 0 === s ? null : s;
                  o && e[o](),
                    (n.settings.journey = T.startJourney(e)),
                    n.settings.journey.station(t),
                    n.settings.journey.destination(),
                    a && e[a]();
                }, 0);
              },
            },
            {
              key: "millisecondChange",
              value: function (e, t, n, i) {
                var r =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4];
                if (
                  (this.state !== t &&
                    ((this.state = t), this.eventBroadcast("state-change", t)),
                  !this.settings.needsUpdate)
                )
                  return this.clip.pause(), 1;
                var o = this.clip,
                  s = this.settings,
                  a = s.loopActivated,
                  l = s.loopEndMillisecond,
                  c = s.loopStartMillisecond,
                  u = this.clip.duration,
                  d = this.elements,
                  p = d.totalBar,
                  h = d.loopBar,
                  f = h.offsetWidth,
                  m = h.offsetLeft / p.offsetWidth,
                  v = e - u * m,
                  g = (u / p.offsetWidth) * f;
                return e >= l && a && this.clip.speed >= 0
                  ? (this.createJourney(o, c + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e >= l && a && this.clip.speed < 0
                  ? (this.createJourney(o, l - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e <= c && a && this.clip.speed >= 0
                  ? (this.createJourney(o, c + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e <= c && a && this.clip.speed < 0
                  ? (this.createJourney(o, l - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : (i &&
                      this.createJourney(o, e, {
                        after: this.settings.playAfterResize ? "play" : null,
                      }),
                    (this.elements.runningBar.style.width =
                      (v / g) * 100 + "%"),
                    (this.elements.currentTime.innerHTML = this.timeFormat(e)),
                    void (
                      this.options.onMillisecondChange &&
                      r &&
                      this.options.onMillisecondChange(e)
                    ));
              },
            },
            {
              key: "eventBroadcast",
              value: function (e, t) {
                var n = L("".concat(this.name, "-controls"));
                "state-change" === e
                  ? "paused" === t ||
                    "idle" === t ||
                    "transitional" === t ||
                    "armed" === t ||
                    "blocked" === t
                    ? (n.classList.value.includes("force-show-controls") ||
                        n.classList.toggle("force-show-controls"),
                      (this.elements.statusButton.innerHTML = s.playSVG),
                      this.elements.statusButton.appendChild(
                        this.elements.indicator
                      ),
                      (this.elements.indicator.innerHTML = "".concat(
                        t.charAt(0).toUpperCase() + t.slice(1)
                      )),
                      "blocked" === t &&
                        (this.elements.pointerEventPanel.innerHTML = '\n            <div style="width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;">'.concat(
                          s.loadingSVG,
                          "</div>"
                        )))
                    : (n.classList.value.includes("force-show-controls") &&
                        n.classList.toggle("force-show-controls"),
                      (this.elements.statusButton.innerHTML = s.pauseSVG),
                      this.elements.statusButton.appendChild(
                        this.elements.indicator
                      ),
                      (this.elements.indicator.innerHTML = "Playing"),
                      (this.elements.pointerEventPanel.innerHTML = ""),
                      "playing" === t &&
                      this.clip.runTimeInfo.currentMillisecond ===
                        this.clip.duration &&
                      this.clip.speed >= 0
                        ? this.createJourney(this.clip, 1, { after: "play" })
                        : (("playing" === t &&
                            0 === this.clip.runTimeInfo.currentMillisecond &&
                            this.clip.speed < 0) ||
                            ("playing" === t &&
                              this.clip.runTimeInfo.currentMillisecond ===
                                this.clip.duration &&
                              this.clip.speed < 0)) &&
                          this.createJourney(
                            this.clip,
                            this.clip.duration - 1,
                            { after: "play" }
                          ))
                  : "duration-change" === e &&
                    ((this.elements.totalTime.innerHTML = this.timeFormat(
                      this.clip.duration
                    )),
                    (this.settings.loopEndMillisecond = this.clip.duration),
                    (this.elements.pointerEventPanel.innerHTML = ""),
                    this.millisecondChange(
                      this.clip.runTimeInfo.currentMillisecond
                    ));
              },
            },
            {
              key: "subscribeToDurationChange",
              value: function () {
                this.clip.subscribeToDurationChange(
                  this.subscribeToDurationChangeCallback.bind(this)
                );
              },
            },
            {
              key: "subscribeToDurationChangeCallback",
              value: function () {
                this.eventBroadcast("duration-change");
              },
            },
            {
              key: "subscribeToTimer",
              value: function () {
                this.clip.subscribe(this.id, this.millisecondChange.bind(this));
              },
            },
            {
              key: "handleDragStart",
              value: function () {
                (this.settings.needsUpdate = !0),
                  (this.settings.journey = T.startJourney(this.clip));
              },
            },
            {
              key: "timeFormat",
              value: function (e) {
                if ("ss" === this.options.timeFormat) {
                  var t = e / 1e3 / 60 / 60,
                    n = (t % 1) * 60,
                    i = (n % 1) * 60,
                    r = ("0" + parseInt(t)).slice(-2),
                    o = ("0" + parseInt(n)).slice(-2),
                    s = ("0" + parseInt(i)).slice(-2);
                  return ""
                    .concat("00" === r ? "" : r + ":")
                    .concat(o, ":")
                    .concat(s);
                }
                return e;
              },
            },
            {
              key: "handleDrag",
              value: function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                isFinite(e) || (e = 0);
                var n = this.clip.duration,
                  i = this.settings.journey,
                  r = this.elements,
                  o = r.loopBar,
                  s = r.totalBar,
                  a = r.runningBar,
                  l = r.currentTime,
                  c = e + o.offsetLeft,
                  u = Math.round((n * c) / s.offsetWidth);
                (l.innerHTML = this.timeFormat(u)),
                  (a.style.width = (e / o.offsetWidth) * 100 + "%"),
                  i.station(u),
                  this.options.onMillisecondChange &&
                    t &&
                    this.options.onMillisecondChange(u);
              },
            },
            {
              key: "handleDragEnd",
              value: function () {
                this.settings.journey.destination();
              },
            },
            {
              key: "createProgressDrag",
              value: function (e) {
                this.handleDragStart(),
                  this.handleDrag(e),
                  this.handleDragEnd();
              },
            },
            {
              key: "addEventListeners",
              value: function () {
                var e;
                ((e = this).listeners.onCursorMoveLoopEnd = function (t) {
                  t.preventDefault();
                  var n =
                    (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                    e.elements.totalBar.getBoundingClientRect().left;
                  n < 0
                    ? (n = 0)
                    : n > e.elements.totalBar.offsetWidth &&
                      (n = e.elements.totalBar.offsetWidth),
                    e.elements.runningBar.offsetWidth >=
                      e.elements.loopBar.offsetWidth &&
                      (e.elements.runningBar.style.width =
                        e.elements.loopBar.offsetWidth + "px"),
                    e.settings.loopLastPositionXPxls - n < 0
                      ? (e.elements.loopBar.style.width =
                          Math.abs(e.settings.loopLastPositionXPxls - n) + "px")
                      : ((e.elements.loopBar.style.left = n + "px"),
                        (e.settings.loopLastPositionXPxls = n)),
                    (e.settings.loopEndMillisecond = Math.round(
                      (e.clip.duration *
                        ((parseFloat(e.elements.loopBar.style.left) || 0) +
                          parseFloat(e.elements.loopBar.style.width))) /
                        e.elements.totalBar.offsetWidth
                    )),
                    e.settings.loopEndMillisecond <
                      e.clip.runTimeInfo.currentMillisecond &&
                      (e.settings.loopJourney = !0),
                    e.settings.loopStartMillisecond >
                      e.settings.loopEndMillisecond &&
                      ((e.settings.loopStartMillisecond =
                        e.settings.loopEndMillisecond),
                      (e.settings.loopJourney = !0)),
                    (e.elements.loopEndTime.innerHTML =
                      e.settings.loopEndMillisecond),
                    (e.elements.loopStartTime.innerHTML =
                      e.settings.loopStartMillisecond);
                }),
                  (e.listeners.onMouseUpLoopEnd = function (t) {
                    if (
                      ((e.elements.listenerHelper.style.pointerEvents = "none"),
                      (e.settings.resizeLoop = !1),
                      t.preventDefault(),
                      (e.elements.runningBar.style.width =
                        (e.elements.runningBar.offsetWidth /
                          e.elements.loopBar.offsetWidth) *
                          100 +
                        "%"),
                      (e.elements.loopBar.style.left =
                        (e.elements.loopBar.offsetLeft /
                          e.elements.totalBar.offsetWidth) *
                          100 +
                        "%"),
                      (e.elements.loopBar.style.width =
                        (e.elements.loopBar.offsetWidth /
                          e.elements.totalBar.offsetWidth) *
                          100 +
                        "%"),
                      e.settings.loopJourney &&
                        (e.createProgressDrag(
                          e.elements.runningBar.offsetWidth
                        ),
                        (e.settings.loopJourney = !1)),
                      g("mouseup", e.listeners.onMouseUpLoopEnd, !1),
                      g("touchend", e.listeners.onMouseUpLoopEnd, !1),
                      g("mousemove", e.listeners.onCursorMoveLoopEnd, !1),
                      g("touchmove", e.listeners.onCursorMoveLoopEnd, !1),
                      e.elements.loopBar.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        { passive: !0 },
                        !1
                      ),
                      e.settings.playAfterResize)
                    ) {
                      var n;
                      if ("idle" === e.clip.runTimeInfo.state)
                        (n =
                          e.clip.speed >= 0
                            ? e.settings.loopStartMillisecond + 1
                            : e.settings.loopEndMillisecond - 1),
                          (e.settings.needsUpdate = !0),
                          e.createJourney(e.clip, n, {
                            before: "pause",
                            after: "play",
                          });
                      else if ("completed" === e.clip.runTimeInfo.state) {
                        var i;
                        (i =
                          e.clip.speed >= 0
                            ? e.settings.loopStartMillisecond + 1
                            : e.settings.loopEndMillisecond - 1),
                          (e.settings.needsUpdate = !0),
                          e.createJourney(e.clip, i, {
                            before: "pause",
                            after: "play",
                          });
                      } else e.clip.play();
                      e.settings.playAfterResize = !1;
                    }
                  }),
                  (e.listeners.onMouseDownLoopEnd = function (t) {
                    (e.elements.listenerHelper.style.pointerEvents = "auto"),
                      (e.settings.resizeLoop = !0),
                      (e.settings.needsUpdate = !0),
                      "playing" === e.clip.runTimeInfo.state &&
                        (e.clip.pause(), (e.settings.playAfterResize = !0)),
                      t.preventDefault(),
                      (e.elements.runningBar.style.width =
                        e.elements.runningBar.offsetWidth + "px"),
                      (e.elements.loopBar.style.left =
                        e.elements.loopBar.offsetLeft + "px"),
                      (e.elements.loopBar.style.width =
                        e.elements.loopBar.offsetWidth + "px"),
                      e.elements.loopBar.removeEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.removeEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.listeners.onCursorMoveLoopEnd(t),
                      v("mouseup", e.listeners.onMouseUpLoopEnd, !1),
                      v("touchend", e.listeners.onMouseUpLoopEnd, !1),
                      v("mousemove", e.listeners.onCursorMoveLoopEnd, !1),
                      v("touchmove", e.listeners.onCursorMoveLoopEnd, !1);
                  }),
                  e.elements.loopBarEnd.addEventListener(
                    "mousedown",
                    e.listeners.onMouseDownLoopEnd,
                    !1
                  ),
                  e.elements.loopBarEnd.addEventListener(
                    "touchstart",
                    e.listeners.onMouseDownLoopEnd,
                    { passive: !1 },
                    !1
                  ),
                  (function (e) {
                    (e.listeners.onCursorMove = function (t) {
                      t.preventDefault();
                      var n =
                        (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                        e.elements.loopBar.getBoundingClientRect().left;
                      n < 0
                        ? (n = 0)
                        : n > e.elements.loopBar.offsetWidth &&
                          (n = e.elements.loopBar.offsetWidth),
                        e.handleDrag(n);
                    }),
                      (e.listeners.onMouseUp = function () {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          b("mouseup", e.listeners.onMouseUp, !1),
                          b("touchend", e.listeners.onMouseUp, !1),
                          b("mousemove", e.listeners.onCursorMove, !1),
                          b("touchmove", e.listeners.onCursorMove, !1),
                          e.handleDragEnd(e.settings);
                      }),
                      (e.listeners.onMouseDown = function (t) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          "playing" === e.clip.runTimeInfo.state &&
                            (e.settings.playAfterResize = !0),
                          e.handleDragStart(e.clip),
                          e.listeners.onCursorMove(t),
                          y("mouseup", e.listeners.onMouseUp, !1),
                          y("touchend", e.listeners.onMouseUp, !1),
                          y("mousemove", e.listeners.onCursorMove, !1),
                          y("touchmove", e.listeners.onCursorMove, !1);
                      }),
                      e.elements.loopBar.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    (e.listeners.onCursorMoveLoopStart = function (t) {
                      t.preventDefault();
                      var n = t.clientX || ((t.touches || [])[0] || {}).clientX,
                        i = e.elements.totalBar.getBoundingClientRect(),
                        r = Math.round(n - i.left),
                        o = Math.round(
                          (e.settings.loopEndMillisecond / e.clip.duration) *
                            e.elements.totalBar.offsetWidth
                        );
                      r < 0
                        ? (r = 0)
                        : r > e.elements.totalBar.offsetWidth &&
                          (r = e.elements.totalBar.offsetWidth);
                      var s =
                        (e.clip.runTimeInfo.currentMillisecond /
                          e.clip.duration) *
                          e.elements.totalBar.offsetWidth -
                        r;
                      (e.elements.loopBar.style.left = r + "px"),
                        (e.elements.loopBar.style.width = o - r + "px"),
                        (e.elements.runningBar.style.width = s + "px"),
                        (e.settings.loopLastPositionXPxls = r),
                        (e.settings.loopStartMillisecond = Math.round(
                          (e.clip.duration * e.elements.loopBar.offsetLeft) /
                            e.elements.totalBar.offsetWidth
                        )),
                        e.settings.loopEndMillisecond <
                          e.settings.loopStartMillisecond &&
                          ((e.settings.loopEndMillisecond =
                            e.settings.loopStartMillisecond),
                          (e.elements.loopBar.style.width = "0px"),
                          (e.elements.runningBar.style.width = "0px")),
                        (e.elements.loopEndTime.innerHTML =
                          e.settings.loopEndMillisecond),
                        (e.elements.loopStartTime.innerHTML =
                          e.settings.loopStartMillisecond),
                        e.settings.loopStartMillisecond >
                          e.clip.runTimeInfo.currentMillisecond &&
                          (e.settings.loopJourney = !0);
                    }),
                      (e.listeners.onMouseUpLoopStart = function (t) {
                        var n;
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          (e.settings.resizeLoop = !1),
                          t.preventDefault(),
                          e.settings.loopJourney &&
                            (e.createProgressDrag(
                              e.elements.runningBar.offsetWidth
                            ),
                            (e.settings.loopJourney = !1)),
                          (e.elements.loopBar.style.left =
                            (e.elements.loopBar.offsetLeft /
                              e.elements.totalBar.offsetWidth) *
                              100 +
                            "%"),
                          (e.elements.loopBar.style.width =
                            (e.elements.loopBar.offsetWidth /
                              e.elements.totalBar.offsetWidth) *
                              100 +
                            "%"),
                          (e.settings.loopStartMillisecond = Math.round(
                            (e.clip.duration * e.elements.loopBar.offsetLeft) /
                              e.elements.totalBar.offsetWidth
                          )),
                          (e.elements.runningBar.style.width =
                            (e.elements.runningBar.offsetWidth /
                              e.elements.loopBar.offsetWidth) *
                              100 +
                            "%"),
                          m("mouseup", e.listeners.onMouseUpLoopStart, !1),
                          m("touchend", e.listeners.onMouseUpLoopStart, !1),
                          m("mousemove", e.listeners.onCursorMoveLoopStart, !1),
                          m("touchmove", e.listeners.onCursorMoveLoopStart, !1),
                          e.elements.loopBar.addEventListener(
                            "mousedown",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.elements.loopBar.addEventListener(
                            "touchstart",
                            e.listeners.onMouseDown,
                            { passive: !0 },
                            !1
                          ),
                          e.settings.playAfterResize &&
                            ("idle" === e.clip.runTimeInfo.state
                              ? ((n =
                                  e.clip.speed >= 0
                                    ? e.settings.loopStartMillisecond + 1
                                    : e.settings.loopEndMillisecond - 1),
                                (e.settings.needsUpdate = !0),
                                e.createJourney(e.clip, n, {
                                  before: "pause",
                                  after: "play",
                                }))
                              : e.clip.play(),
                            (e.settings.playAfterResize = !1));
                      }),
                      (e.listeners.onMouseDownLoopStart = function (t) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          (e.settings.resizeLoop = !0),
                          t.preventDefault(),
                          (e.settings.needsUpdate = !0),
                          "playing" === e.clip.runTimeInfo.state &&
                            (e.clip.pause(), (e.settings.playAfterResize = !0)),
                          e.elements.loopBar.removeEventListener(
                            "mousedown",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.elements.loopBar.removeEventListener(
                            "touchstart",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.listeners.onCursorMoveLoopStart(t),
                          f("mouseup", e.listeners.onMouseUpLoopStart, !1),
                          f("touchend", e.listeners.onMouseUpLoopStart, !1),
                          f("mousemove", e.listeners.onCursorMoveLoopStart, !1),
                          f("touchmove", e.listeners.onCursorMoveLoopStart, !1);
                      }),
                      e.elements.loopBarStart.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownLoopStart,
                        !1
                      ),
                      e.elements.loopBarStart.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownLoopStart,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    (e.listeners.editableLoopStartTime = function () {
                      (e.elements.editableLoopStartTime.value =
                        e.elements.loopStartTime.innerHTML),
                        e.elements.loopStartTime.replaceWith(
                          e.elements.editableLoopStartTime
                        ),
                        e.elements.editableLoopStartTime.focus();
                    }),
                      (e.listeners.editableLoopEndTime = function () {
                        (e.elements.editableLoopEndTime.value =
                          e.elements.loopEndTime.innerHTML),
                          e.elements.loopEndTime.replaceWith(
                            e.elements.editableLoopEndTime
                          ),
                          e.elements.editableLoopEndTime.focus();
                      }),
                      (e.elements.editableLoopEndTime.onkeydown = e.elements.editableLoopStartTime.onkeydown = function (
                        t
                      ) {
                        t.preventDefault(),
                          13 === t.keyCode &&
                            (e.elements.editableLoopStartTime.onfocusout(),
                            e.elements.editableLoopEndTime.onfocusout()),
                          8 === t.keyCode &&
                            (t.target.value = t.target.value
                              .toString()
                              .substring(
                                0,
                                t.target.value.toString().length - 1
                              )),
                          13 === t.keyCode && t.target.blur();
                        var n = parseFloat(
                          (t.target.value || 0).toString() + t.key
                        );
                        if (!(n > e.clip.duration))
                          if (
                            ((t.target.value = n),
                            t.target === e.elements.editableLoopStartTime)
                          ) {
                            var i = e.elements.totalBar.getBoundingClientRect(),
                              r = {
                                preventDefault: function () {},
                                clientX:
                                  (e.elements.totalBar.offsetWidth /
                                    e.clip.duration) *
                                    t.target.value +
                                  i.left,
                              };
                            e.listeners.onMouseDownLoopStart(r),
                              e.listeners.onCursorMoveLoopStart(r),
                              e.listeners.onMouseUpLoopStart(r);
                          } else if (
                            t.target === e.elements.editableLoopEndTime
                          ) {
                            var o = e.elements.totalBar.getBoundingClientRect(),
                              s = {
                                preventDefault: function () {},
                                clientX:
                                  (e.elements.totalBar.offsetWidth /
                                    e.clip.duration) *
                                    t.target.value +
                                  o.left,
                              };
                            e.listeners.onMouseDownLoopEnd(s),
                              e.listeners.onCursorMoveLoopEnd(s),
                              e.listeners.onMouseUpLoopEnd(s);
                          }
                      }),
                      (e.elements.loopStartTime.onclick =
                        e.listeners.editableLoopStartTime),
                      (e.elements.loopEndTime.onclick =
                        e.listeners.editableLoopEndTime),
                      (e.elements.editableLoopStartTime.onfocusout = function () {
                        e.elements.editableLoopStartTime.replaceWith(
                          e.elements.loopStartTime
                        );
                      }),
                      (e.elements.editableLoopEndTime.onfocusout = function () {
                        e.elements.editableLoopEndTime.replaceWith(
                          e.elements.loopEndTime
                        );
                      });
                  })(this),
                  (function (e) {
                    var t = !1;
                    e.elements.volumeBtn.onclick = function () {
                      if (e.settings.volumeMute) {
                        (e.elements.volumeBarActive.style.width =
                          100 * e.settings.previousVolume + "%"),
                          e.clip.setVolume(e.settings.previousVolume),
                          (e.settings.volumeMute = !1);
                        var t = document.createElement("span");
                        (t.innerHTML = s.volumeSVG),
                          e.elements.volumeBtn
                            .getElementsByTagName("svg")[0]
                            .replaceWith(t);
                      } else {
                        (e.settings.volumeMute = !0),
                          (e.elements.volumeBarActive.style.width = "0%"),
                          e.clip.setVolume(0);
                        var n = document.createElement("span");
                        (n.innerHTML = s.volumeMuteSVG),
                          e.elements.volumeBtn
                            .getElementsByTagName("svg")[0]
                            .replaceWith(n);
                      }
                    };
                    var n = !1;
                    (e.elements.volumeBtn.onmouseover = function () {
                      (n = !0),
                        e.elements.volumeCursor.classList.add(
                          "".concat(e.name, "-volume-cursor-transition")
                        ),
                        e.elements.volumeBar.classList.add(
                          "".concat(e.name, "-volume-width-transition")
                        ),
                        e.elements.volumeBarHelper.classList.add(
                          "".concat(e.name, "-volume-width-transition")
                        ),
                        e.elements.timeDisplay.classList.add(
                          "".concat(e.name, "-time-width-transition")
                        );
                    }),
                      (h(
                        "".concat(e.name, "-left-controls")
                      ).onmouseout = function () {
                        if (n && !t) {
                          var i =
                            event.toElement ||
                            event.relatedTarget ||
                            event.target;
                          (function (e, t) {
                            for (var n = t.parentNode; null != n; ) {
                              if (n == e) return !0;
                              n = n.parentNode;
                            }
                            return !1;
                          })(h("".concat(e.name, "-left-controls")), i) ||
                            i === h("".concat(e.name, "-left-controls")) ||
                            ((n = !1),
                            e.elements.volumeCursor.classList.remove(
                              "".concat(e.name, "-volume-cursor-transition")
                            ),
                            e.elements.volumeBar.classList.remove(
                              "".concat(e.name, "-volume-width-transition")
                            ),
                            e.elements.volumeBarHelper.classList.remove(
                              "".concat(e.name, "-volume-width-transition")
                            ),
                            e.elements.timeDisplay.classList.remove(
                              "".concat(e.name, "-time-width-transition")
                            ));
                        }
                      }),
                      (e.listeners.onCursorMoveVolumeBar = function (t) {
                        t.preventDefault();
                        var n =
                          (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                          e.elements.volumeBarHelper.getBoundingClientRect()
                            .left;
                        if (
                          (n < 0
                            ? (n = 0)
                            : n > e.elements.volumeBarHelper.offsetWidth &&
                              (n = e.elements.volumeBarHelper.offsetWidth),
                          (e.settings.volume = Number(
                            (
                              n / e.elements.volumeBarHelper.offsetWidth
                            ).toFixed(2)
                          )),
                          (e.elements.volumeBarActive.style.width =
                            100 * e.settings.volume + "%"),
                          e.clip.setVolume(e.settings.volume),
                          e.settings.volume > 0)
                        ) {
                          e.settings.volumeMute = !1;
                          var i = document.createElement("span");
                          (i.innerHTML = s.volumeSVG),
                            e.elements.volumeBtn
                              .getElementsByTagName("svg")[0]
                              .replaceWith(i);
                        } else if (0 === e.settings.volume) {
                          e.settings.volumeMute = !0;
                          var r = document.createElement("span");
                          (r.innerHTML = s.volumeMuteSVG),
                            e.elements.volumeBtn
                              .getElementsByTagName("svg")[0]
                              .replaceWith(r);
                        }
                      }),
                      (e.listeners.onMouseUpVolumeBar = function (n) {
                        (t = !1),
                          (e.elements.listenerHelper.style.pointerEvents =
                            "none"),
                          n.preventDefault(),
                          e.settings.volume > 0 &&
                            (e.settings.previousVolume = e.settings.volume),
                          p("mouseup", e.listeners.onMouseUpVolumeBar, !1),
                          p("touchend", e.listeners.onMouseUpVolumeBar, !1),
                          p("mousemove", e.listeners.onCursorMoveVolumeBar, !1),
                          p("touchmove", e.listeners.onCursorMoveVolumeBar, !1);
                      }),
                      (e.listeners.onMouseDownVolumeBar = function (n) {
                        (t = !0),
                          (e.elements.listenerHelper.style.pointerEvents =
                            "auto"),
                          n.preventDefault(),
                          e.listeners.onCursorMoveVolumeBar(n),
                          d("mouseup", e.listeners.onMouseUpVolumeBar, !1),
                          d("touchend", e.listeners.onMouseUpVolumeBar, !1),
                          d("mousemove", e.listeners.onCursorMoveVolumeBar, !1),
                          d("touchmove", e.listeners.onCursorMoveVolumeBar, !1);
                      }),
                      e.elements.volumeBarHelper.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownVolumeBar,
                        !1
                      ),
                      e.elements.volumeCursor.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownVolumeBar,
                        !1
                      ),
                      e.elements.volumeBarHelper.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownVolumeBar,
                        { passive: !1 },
                        !1
                      ),
                      e.elements.volumeCursor.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownVolumeBar,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    e.elements.statusButton.onclick = function (t) {
                      return (
                        t.preventDefault(),
                        "playing" === e.clip.runTimeInfo.state
                          ? e.clip.pause()
                          : "paused" === e.clip.runTimeInfo.state ||
                            "idle" === e.clip.runTimeInfo.state ||
                            "transitional" === e.clip.runTimeInfo.state ||
                            "armed" === e.clip.runTimeInfo.state
                          ? e.clip.play()
                          : "idle" === e.clip.runTimeInfo.state
                          ? e.clip.speed >= 0
                            ? (e.clip.play(), (e.settings.needsUpdate = !0))
                            : (e.createJourney(
                                e.clip,
                                e.settings.loopEndMillisecond - 1,
                                { before: "pause", after: "play" }
                              ),
                              (e.settings.needsUpdate = !0))
                          : "completed" === e.clip.runTimeInfo.state &&
                            (e.clip.speed >= 0
                              ? (e.createJourney(e.clip, 0, {
                                  before: "pause",
                                  after: "play",
                                }),
                                (e.settings.needsUpdate = !0))
                              : (e.createJourney(
                                  e.clip,
                                  e.settings.loopEndMillisecond - 1,
                                  { before: "pause", after: "play" }
                                ),
                                (e.settings.needsUpdate = !0))),
                        !1
                      );
                    };
                  })(this),
                  (function (e) {
                    (e.elements.settingsShowIndicator.onclick = function (t) {
                      t.preventDefault();
                      var n = x("".concat(e.name, "-show-indicator-checkbox"));
                      n.checked
                        ? ((n.checked = !1),
                          (e.elements.indicator.style.visibility = "hidden"))
                        : ((n.checked = !0),
                          (e.elements.indicator.style.visibility = "visible"));
                    }),
                      (e.elements.settingsPointerEvents.onclick = function (t) {
                        t.preventDefault();
                        var n = x(
                          "".concat(e.name, "-pointer-events-checkbox")
                        );
                        n.checked
                          ? ((n.checked = !1),
                            (e.options.pointerEvents = !1),
                            (e.elements.mcPlayer.style.pointerEvents = "none"),
                            (e.elements.pointerEventPanel.style.pointerEvents =
                              "none"),
                            (x(
                              "".concat(e.name, "-controls")
                            ).style.pointerEvents = "auto"),
                            (e.elements.settingsPanel.style.pointerEvents =
                              "auto"))
                          : ((n.checked = !0),
                            (e.elements.mcPlayer.style.pointerEvents = "none"),
                            (e.elements.pointerEventPanel.style.pointerEvents =
                              "auto"),
                            (x(
                              "".concat(e.name, "-controls")
                            ).style.pointerEvents = "auto"),
                            (e.elements.settingsPanel.style.pointerEvents =
                              "auto"));
                      }),
                      (e.elements.settingsShowVolume.onclick = function (t) {
                        t.preventDefault(),
                          e.elements.volumeControl.classList.toggle(
                            "".concat(e.name, "-volume-width-transition")
                          ),
                          e.elements.volumeControl.classList.toggle(
                            "".concat(e.name, "-hide")
                          );
                        var n = x("".concat(e.name, "-show-volume-checkbox"));
                        n.checked
                          ? ((n.checked = !1),
                            (e.elements.volumeControl.style.visibility =
                              "hidden"),
                            (e.elements.timeDisplay.style.left = "45px"))
                          : ((n.checked = !0),
                            (e.elements.volumeControl.style.visibility =
                              "visible"),
                            (e.elements.timeDisplay.style.left = ""));
                      }),
                      (e.elements.settingsShowPreview.onclick = function (t) {
                        t.preventDefault();
                        var n = x("".concat(e.name, "-show-preview-checkbox"));
                        n.checked
                          ? ((n.checked = !1),
                            (x(
                              "".concat(e.name, "-hover-display")
                            ).style.visibility = "hidden"),
                            (x(
                              "".concat(e.name, "-hover-display")
                            ).style.display = "none"),
                            (e.options.preview = !1))
                          : (e.previewClip || e.createPreviewDisplay(),
                            (n.checked = !0),
                            (x(
                              "".concat(e.name, "-hover-display")
                            ).style.visibility = "visible"),
                            (x(
                              "".concat(e.name, "-hover-display")
                            ).style.display = "flex"),
                            (e.options.preview = !0));
                      }),
                      (e.elements.settingsButton.onclick = function (t) {
                        t.preventDefault();
                        var n = x("".concat(e.name, "-controls")),
                          i = function t(n) {
                            if (e.elements.settingsPanel.contains(n.target))
                              return !0;
                            e.elements.settingsPanel.classList.toggle(
                              "".concat(e.name, "-hide")
                            ),
                              e.elements.settingsPanel.classList.toggle(
                                "m-fadeOut"
                              ),
                              e.elements.settingsPanel.classList.toggle(
                                "m-fadeIn"
                              ),
                              e.elements.settingsPanel.className.includes(
                                "m-fadeOut"
                              ) &&
                                (w("click", t, !1),
                                e.eventBroadcast("state-change", e.state));
                          };
                        e.elements.settingsPanel.className.includes("m-fadeOut")
                          ? (n.classList.value.includes(
                              "force-show-controls"
                            ) || n.classList.toggle("force-show-controls"),
                            k("click", i, !1))
                          : w("click", i, !1);
                      });
                  })(this),
                  (function (e) {
                    e.elements.settingsSpeedButtonShow.onclick = e.elements.settingsSpeedButtonHide.onclick = function (
                      t
                    ) {
                      t.preventDefault(),
                        e.elements.settingsPanel.classList.toggle(
                          "".concat(e.name, "-settings-speed-panel")
                        ),
                        e.elements.settingsPanel.className.includes(
                          "".concat(e.name, "-settings-speed-panel")
                        )
                          ? ((e.elements.settingsMainPanel.style.display =
                              "none"),
                            (e.elements.settingsSpeedPanel.style.display =
                              "block"))
                          : ((e.elements.settingsSpeedPanel.style.display =
                              "none"),
                            (e.elements.settingsMainPanel.style.display =
                              "block"));
                    };
                    var t = function (t) {
                        t.preventDefault();
                        var n = e.elements.speedBar.getBoundingClientRect(),
                          i =
                            (t.clientY ||
                              ((t.touches || [])[0] || {}).clientY) - n.top;
                        (i -= 8) < 0
                          ? (i = 0)
                          : i > e.elements.speedBar.offsetHeight - 16 &&
                            (i = e.elements.speedBar.offsetHeight - 16);
                        var r =
                            -1 *
                            ((i = Math.floor(i)) /
                              (16 * (e.options.speedValues.length - 1)) -
                              1),
                          o = 1 / (e.options.speedValues.length - 1),
                          s = e.calculateSpeed(o, e.options.speedValues, r);
                        (_("".concat(e.name, "-speed-runtime")).innerHTML =
                          s + "0"),
                          (_("".concat(e.name, "-speed-cursor")).style.top =
                            i + "px"),
                          (e.clip.executionSpeed = s);
                      },
                      n = function n(i) {
                        var r;
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          i.preventDefault(),
                          I("mouseup", n, !1),
                          I("touchend", n, !1),
                          I("mousemove", t, !1),
                          I("touchmove", t, !1),
                          (_("".concat(e.name, "-speed-runtime")).innerHTML =
                            "Speed"),
                          (r = 1 == e.clip.speed ? "Normal" : e.clip.speed),
                          (e.elements.speedCurrent.innerHTML = r);
                      },
                      i = function (i) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          i.preventDefault(),
                          t(i),
                          C("mouseup", n, !1),
                          C("touchend", n, !1),
                          C("mousemove", t, !1),
                          C("touchmove", t, !1);
                      };
                    e.elements.speedBarHelper.addEventListener(
                      "mousedown",
                      i,
                      !1
                    ),
                      e.elements.speedBarHelper.addEventListener(
                        "touchstart",
                        i,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    e.elements.loopButton.onclick = e.activateLoop = function () {
                      var t =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0];
                      (e.settings.loopActivated = !e.settings.loopActivated),
                        e.elements.loopButton.classList.toggle("svg-selected"),
                        e.elements.loopBarStart.classList.toggle("m-fadeOut"),
                        e.elements.loopBarEnd.classList.toggle("m-fadeOut"),
                        e.elements.loopBarStart.classList.toggle("m-fadeIn"),
                        e.elements.loopBarStart.classList.toggle(
                          "".concat(e.name, "-hide")
                        ),
                        e.elements.loopBarEnd.classList.toggle("m-fadeIn"),
                        e.elements.loopBarEnd.classList.toggle(
                          "".concat(e.name, "-hide")
                        ),
                        O("".concat(e.name, "-loop-time")).classList.toggle(
                          "m-fadeOut"
                        ),
                        O("".concat(e.name, "-loop-time")).classList.toggle(
                          "m-fadeIn"
                        ),
                        O("".concat(e.name, "-loop-time")).classList.toggle(
                          "".concat(e.name, "-hide")
                        ),
                        (e.elements.loopEndTime.innerHTML =
                          e.settings.loopEndMillisecond),
                        (e.elements.loopStartTime.innerHTML =
                          e.settings.loopStartMillisecond),
                        (e.settings.needsUpdate = !0),
                        e.settings.loopActivated ||
                          ((e.elements.loopBar.style.left = "0%"),
                          (e.elements.loopBar.style.width = "100%"),
                          (e.settings.loopStartMillisecond = 0),
                          (e.settings.loopEndMillisecond = e.clip.duration),
                          (e.settings.loopLastPositionXPxls = 0),
                          (e.settings.loopLastPositionXPercentage = 0),
                          t &&
                            (e.elements.runningBar.style.width =
                              (e.clip.runTimeInfo.currentMillisecond /
                                e.clip.duration) *
                                100 +
                              "%"));
                    };
                  })(this),
                  (function (e) {
                    (E(
                      "".concat(e.name, "-controls")
                    ).onmouseover = function () {
                      e.settings.loopActivated &&
                        (e.elements.loopBarStart.classList.remove("m-fadeOut"),
                        e.elements.loopBarEnd.classList.remove("m-fadeOut"),
                        e.elements.loopBarStart.classList.add("m-fadeIn"),
                        e.elements.loopBarEnd.classList.add("m-fadeIn"));
                    }),
                      (E("".concat(e.name, "-controls")).onmouseout = function (
                        t
                      ) {
                        var n = t.toElement || t.relatedTarget || t.target;
                        P(this, n) ||
                          n === this ||
                          (e.settings.loopActivated &&
                            (e.elements.loopBarStart.classList.add("m-fadeOut"),
                            e.elements.loopBarEnd.classList.add("m-fadeOut"),
                            e.elements.loopBarStart.classList.remove(
                              "m-fadeIn"
                            ),
                            e.elements.loopBarEnd.classList.remove(
                              "m-fadeIn"
                            )));
                      });
                    var t = !1;
                    (E("".concat(e.name, "-controls")).ontouchstart = function (
                      n
                    ) {
                      var i = n.toElement || n.relatedTarget || n.target;
                      P(e.elements.statusButton, i) ||
                        i === e.elements.statusButton ||
                        P(e.elements.settingsButton, i) ||
                        i === e.elements.settingsButton ||
                        P(e.elements.fullScreenButton, i) ||
                        i === e.elements.fullScreenButton ||
                        P(e.elements.loopButton, i) ||
                        i === e.elements.loopButton ||
                        P(e.elements.totalBar, i) ||
                        i === e.elements.totalBar ||
                        ((e.elements.volumeControl.className = "".concat(
                          e.name,
                          "-volume-width-transition"
                        )),
                        (e.elements.volumeBar.className = "".concat(
                          e.name,
                          "-volume-width-transition"
                        )),
                        (e.elements.volumeBarHelper.className = "".concat(
                          e.name,
                          "-volume-width-transition"
                        )),
                        (e.elements.timeDisplay.className = "".concat(
                          e.name,
                          "-time-width-transition"
                        )),
                        (e.elements.volumeCursor.className = "".concat(
                          e.name,
                          "-volume-cursor-transition"
                        )),
                        (t = !0));
                    }),
                      window.addEventListener("touchstart", function (n) {
                        var i = n.toElement || n.relatedTarget || n.target;
                        P(E("".concat(e.name, "-controls")), i) ||
                          i === E("".concat(e.name, "-controls")) ||
                          (t &&
                            ((e.elements.volumeControl.className = ""),
                            (e.elements.volumeBar.className = ""),
                            (e.elements.volumeBarHelper.className = ""),
                            (e.elements.timeDisplay.className = ""),
                            (e.elements.volumeCursor.className = "")));
                      });
                  })(this),
                  (function (e) {
                    e.elements.fullScreenButton.addEventListener(
                      "click",
                      function () {
                        var t = e.clip.props.host.className.includes(
                          "full-screen"
                        );
                        e.clip.props.host !== e.options.host &&
                          !t &&
                          e.clip.props.host.appendChild(e.elements.mcPlayer),
                          e.clip.props.host !== e.options.host &&
                            t &&
                            e.options.host.appendChild(e.elements.mcPlayer),
                          t
                            ? e.exitFullscreen()
                            : e.launchIntoFullscreen(e.clip.props.host);
                      }
                    );
                  })(this),
                  (function (e) {
                    e.elements.donkeyclipButton.addEventListener(
                      "click",
                      function () {
                        var t = j(),
                          n = window.open(
                            "https://donkeyclip.com?u=".concat(t)
                          ),
                          i = e.clip.exportDefinition(),
                          r = e.clipClass;
                        window.addEventListener(
                          "message",
                          function (e) {
                            e.data === t &&
                              n.postMessage(
                                JSON.stringify({
                                  definition: i,
                                  clipClass: r,
                                  u: t,
                                }),
                                "*"
                              );
                          },
                          !1
                        );
                      }
                    );
                  })(this),
                  (function (e) {
                    if (
                      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      )
                    ) {
                      var t = function () {
                          e.options.preview &&
                            (M(
                              "".concat(e.name, "-hover-display")
                            ).classList.toggle("m-fadeOut"),
                            M(
                              "".concat(e.name, "-hover-display")
                            ).classList.toggle("m-fadeIn"),
                            (e.elements.loopBar.onmousemove = i));
                        },
                        n = function n() {
                          e.options.preview &&
                            (t(),
                            (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                            (e.elements.loopBar.onmousemove = i),
                            B("mouseup", n, !1),
                            B("touchend", n, !1),
                            B("mousemove", i, !1),
                            B("touchmove", i, !1));
                        };
                      (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                        (e.elements.loopBar.onmousedown = function () {
                          e.options.preview &&
                            ((e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = null),
                            (e.elements.loopBar.onmousemove = null),
                            S("mouseup", n, !1),
                            S("touchend", n, !1),
                            S("mousemove", i, !1),
                            S("touchmove", i, !1));
                        }),
                        (e.elements.loopBar.onmouseup = function () {
                          e.options.preview &&
                            (B("mouseup", n, !1),
                            B("touchend", n, !1),
                            B("mousemove", i, !1),
                            B("touchmove", i, !1),
                            (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                            (e.elements.loopBar.onmousemove = i));
                        });
                      var i = function (t) {
                        var n = t.clientX,
                          i = e.elements.loopBar.getBoundingClientRect();
                        if (
                          n - i.left + e.settings.loopLastPositionXPxls >
                            e.settings.loopLastPositionXPxls +
                              e.elements.loopBar.offsetWidth &&
                          !e.settings.resizeLoop
                        )
                          M("".concat(e.name, "-hover-millisecond")).innerHTML =
                            e.settings.loopEndMillisecond;
                        else if (n - i.left < 0 && !e.settings.resizeLoop)
                          M("".concat(e.name, "-hover-millisecond")).innerHTML =
                            e.settings.loopStartMillisecond;
                        else {
                          var r = n - i.left + e.settings.loopLastPositionXPxls;
                          r < 0 && (r = 0);
                          var o =
                              M("".concat(e.name, "-hover-display"))
                                .offsetWidth * e.previewScale,
                            s = o / 2,
                            a =
                              M("".concat(e.name, "-hover-display"))
                                .offsetWidth / 2,
                            l = r - a;
                          r - s < 0
                            ? (l = 0 - (o + s))
                            : r + s > e.elements.totalBar.offsetWidth &&
                              (l = e.elements.totalBar.offsetWidth - a - s);
                          var c = Math.round(
                            (r / e.elements.totalBar.offsetWidth) *
                              e.clip.duration
                          );
                          if (e.options.preview) {
                            var u = c / e.clip.duration;
                            e.previewClip.onProgress(u, c);
                          }
                          (M(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = c),
                            (M("".concat(e.name, "-hover-display")).style.left =
                              l + "px");
                        }
                      };
                    }
                  })(this),
                  (function (e) {
                    document.addEventListener("fullscreenchange", function () {
                      e.elements.mcPlayer.classList.toggle("full-screen"),
                        e.clip.props.host.classList.toggle("full-screen"),
                        e.options.preview && e.setPreviewDimentions();
                    }),
                      document.addEventListener(
                        "webkitfullscreenchange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      document.addEventListener(
                        "mozfullscreenchange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      document.addEventListener(
                        "MSFullscreenChange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      A("body")[0].addEventListener("click", function (t) {
                        if (
                          t.target.className ===
                          "".concat(e.name, "-speed-value")
                        ) {
                          var n = t.target.dataset.speedValue;
                          (e.clip.executionSpeed = t.target.dataset.speedValue),
                            (n = 1 == e.clip.speed ? "Normal" : e.clip.speed),
                            (e.elements.speedCurrent.innerHTML = n);
                          var i = 1 / (e.options.speedValues.length - 1),
                            r =
                              -1 *
                              (t.target.dataset.zone * i - 1) *
                              (16 * (e.options.speedValues.length - 1));
                          D("".concat(e.name, "-speed-cursor")).style.top =
                            r + "px";
                        }
                      });
                  })(this);
              },
            },
            {
              key: "launchIntoFullscreen",
              value: function (e) {
                this.options.preview && this.setPreviewDimentions(),
                  e.requestFullscreen
                    ? e.requestFullscreen()
                    : e.mozRequestFullScreen
                    ? e.mozRequestFullScreen()
                    : e.webkitRequestFullscreen
                    ? e.webkitRequestFullscreen()
                    : e.msRequestFullscreen && e.msRequestFullscreen();
              },
            },
            {
              key: "exitFullscreen",
              value: function () {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              },
            },
            {
              key: "setTheme",
              value: function () {
                this.options.theme.replace(/\s\s+/g, " "),
                  this.options.theme.trim(),
                  this.options.theme.includes("on-top") ||
                    this.options.theme.includes("position-bottom") ||
                    (this.options.theme += " on-top");
                var e = {};
                for (var t in this.options.theme.split(" ")) {
                  var n = l(this.options.theme.split(" ")[t], this.name);
                  for (var i in n || {}) e[i] = n[i];
                }
                var r = (function (e, t, n) {
                    return "\n.background {\n  background-color: black;\n  width:100%;\n  height:"
                      .concat(
                        e["background-height"],
                        ";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n.full-screen #"
                      )
                      .concat(
                        t,
                        "-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n.full-screen #"
                      )
                      .concat(
                        t,
                        "-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n.svg, .svg path {\n  fill: "
                      )
                      .concat(
                        e["svg-color"],
                        ";\n}\n\n.svg.arrow {\n  stroke: "
                      )
                      .concat(
                        e["svg-color"],
                        ";\n}\n\n.pointer-event-panel {\n  height: "
                      )
                      .concat(
                        e["pointer-event-panel-height"],
                        ";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#"
                      )
                      .concat(
                        t,
                        "-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#"
                      )
                      .concat(
                        t,
                        "-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n.svg-selected svg{\n  fill: "
                      )
                      .concat(e["svg-selected-color"], ";\n  stroke: ")
                      .concat(e["svg-selected-color"], ";\n}\n#")
                      .concat(t, "-hover-display{\n    border: ")
                      .concat(
                        e["preview-border"],
                        ";\n    display: flex;\n    overflow:hidden;\n    background-color: black;\n    position: absolute;\n    bottom: 14px;\n    left: 0px;\n    align-items: flex-end;\n    justify-content: center;\n}\n\n#"
                      )
                      .concat(t, "-hover-millisecond {\n  background-color: ")
                      .concat(
                        e["hms-background-color"],
                        ";\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n}\n#"
                      )
                      .concat(t, ",\n#")
                      .concat(t, " ::before,\n#")
                      .concat(t, " :::after,\n#")
                      .concat(t, " div,\n#")
                      .concat(t, " p,\n#")
                      .concat(t, " span,\n#")
                      .concat(t, " ul,\n#")
                      .concat(
                        t,
                        " li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: "
                      )
                      .concat(
                        e.color,
                        ';\n  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#'
                      )
                      .concat(
                        t,
                        " {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + "
                      )
                      .concat(
                        e["controls-position"],
                        ");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: "
                      )
                      .concat(
                        e.color,
                        ";\n  pointer-events:auto !important;\n}\n\n.force-show-controls {\n  height: 44px !important;\n  overflow:unset !important;\n}\n\n"
                      )
                      .concat(
                        n.theme.includes("position-bottom")
                          ? "\n    #".concat(
                              t,
                              "-controls {\n      height: 44px !important;\n      overflow:unset !important;\n    }\n    "
                            )
                          : "#"
                              .concat(t, ":hover #")
                              .concat(
                                t,
                                "-controls {\n  height: 44px;\n  overflow:unset;\n}\n"
                              ),
                        "\n\n#"
                      )
                      .concat(t, ":hover {\n  pointer-events:none;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-speed-hide {\n  text-align:right;\n}\n\n.grad {\n  background-image: linear-gradient(\n    rgba(100,100,100,00.01),\n    rgba(100,100,100,00.02),\n    rgba(100,100,100,00.03),\n    rgba(100,100,100,0.04),\n    rgba(100,100,100,0.05),\n    rgba(0,0,0,0.06),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.08),\n    rgba(0,0,0,0.09),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.9),\n    rgba(0,0,0,1)\n  );\n  position:absolute;\n  width:100%;\n  height:"
                      )
                      .concat(
                        e["grad-height"],
                        ";\n  left:0px;\n  bottom:0px;\n  z-index:100;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-controls {\n  touch-action: none;\n  background-color: "
                      )
                      .concat(e["background-color"], ";\n  border: ")
                      .concat(
                        e["controls-border"],
                        ";\n  position: absolute;\n  bottom: "
                      )
                      .concat(
                        e["controls-bottom"],
                        ";\n  left: 0px;\n  width: 100%;\n  z-index:100;\n  height: 0px;\n  overflow:hidden;\n  display:flex;\n  border-radius: 6px;\n  align-items:center;\n  -webkit-transition: height 0.2s ease;\n  -moz-transition: height 0.2s ease;\n  transition: height 0.2s ease;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: "
                      )
                      .concat(
                        e["totalbar-color"],
                        ";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: "
                      )
                      .concat(e["loopbar-color"], ";\n}\n\n.")
                      .concat(t, "-loop-boundaries::before {\n  ")
                      .concat(e["loopbar-boundaries-style::before"], "\n\n}\n.")
                      .concat(
                        t,
                        "-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:"
                      )
                      .concat(
                        e["loopbar-boundaries-color"],
                        ";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n  "
                      )
                      .concat(e["loopbar-boundaries-style"], "\n}\n\n.")
                      .concat(t, "-loop-boundaries::after {\n  ")
                      .concat(
                        e["loopbar-boundaries-style::after"],
                        "\n\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: "
                      )
                      .concat(e["runningbar-color"], ";\n}\n\n#")
                      .concat(
                        t,
                        "-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  overflow:hidden;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["cursor-color"],
                        ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#"
                      )
                      .concat(t, "-cursor::before {\n  ")
                      .concat(e["cursor-style::before"], "\n}\n\n#")
                      .concat(t, "-cursor::after {\n  ")
                      .concat(e["cursor-style::after"], "\n}\n\n#")
                      .concat(t, "-left-controls,#")
                      .concat(
                        t,
                        "-right-controls {\n    display: flex;\n    align-items:center;\n    height: 100%;\n    padding: 5px 5px 0px;\n}\n#"
                      )
                      .concat(
                        t,
                        "-right-controls {\n  position:absolute;\n  right:0px;\n}\n\n\n#"
                      )
                      .concat(t, "-left-controls > div,#")
                      .concat(
                        t,
                        "-right-controls > div {\n    display: inline-flex;\n    align-items:center;\n   margin:0 10px 0 10px;\n}\n\n\n\n/*#"
                      )
                      .concat(
                        t,
                        "-time-display {\n  display: table;\n  text-align: center;\n  width: auto;\n  height: 34px;\n  position: absolute;\n  left: 90px;\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n}\n*/\n#"
                      )
                      .concat(
                        t,
                        "-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#"
                      )
                      .concat(t, "-status-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n#")
                      .concat(
                        t,
                        "-status-btn svg{\n  width:20px;\n  height:18px;\n}\n#"
                      )
                      .concat(t, "-volume {\n  opacity: ")
                      .concat(
                        e["button-opacity"],
                        ";\n  position: relative;\n}\n#"
                      )
                      .concat(
                        t,
                        "-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: "
                      )
                      .concat(
                        e["loopbar-color"],
                        ";\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n  position:relative;\n  left:5px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-volumebar-helper {\n  position: absolute;\n    width: 0px;\n    height: 15px;\n    bottom: 0px;\n    z-index: 10;\n    left: 25px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: "
                      )
                      .concat(
                        e.color,
                        ";\n  position:relative;\n  bottom:0px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e.color,
                        ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n."
                      )
                      .concat(
                        t,
                        "-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:"
                      )
                      .concat(
                        e["background-color"],
                        ";\n  line-height:10px;\n  font-size:10px;\n}\n\n#"
                      )
                      .concat(t, "-loop-time {\n  margin: 7px;\n}\n\n#")
                      .concat(
                        t,
                        "-dc-btn {\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#"
                      )
                      .concat(t, "-loop-btn {\n  opacity: ")
                      .concat(
                        e["button-opacity"],
                        ";\n  display:flex;\n  align-items:center;\n}\n\n\n#"
                      )
                      .concat(t, "-settings-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n\n#")
                      .concat(t, "-full-screen-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n\n.")
                      .concat(t, "-speed-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n  height: 14px;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:101;\n  background-color: "
                      )
                      .concat(e["settings-background-color"], ";\n  bottom: ")
                      .concat(e["settings-panel-bottom"], ";\n  border: ")
                      .concat(
                        e.border,
                        ";\n  right: 8px;\n  width: 167px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n."
                      )
                      .concat(t, "-hide {\n  display:none !important;\n}\n\n#")
                      .concat(
                        t,
                        "-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-color"],
                        ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  float: left;\n  margin-right:15px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  float: left;\n  left: 18px;\n  z-index:10;\n}\n\n\n#"
                      )
                      .concat(t, "-speed-value-bar:hover,\n#")
                      .concat(
                        t,
                        "-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, "-volumebar:hover,\n#")
                      .concat(t, "-volumebar-helper:hover,\n#")
                      .concat(t, "-volume-btn:hover,\n#")
                      .concat(t, "-volumebar:active,\n#")
                      .concat(t, "-volumebar-helper:active,\n#")
                      .concat(
                        t,
                        "-volume-btn:active {\n  cursor:pointer;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-speed-cursor {\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-cursor-color"],
                        ";\n  top: 0px;\n  left: 0px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-speed-cursor div {\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-cursor-color"],
                        ";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#"
                      )
                      .concat(t, "-time-separator{\n  margin:0 3px;\n}\n#")
                      .concat(
                        t,
                        "-speed-cursor:hover {\n  cursor: pointer;\n}\n\n."
                      )
                      .concat(
                        t,
                        "-speed-value-step {\n  width: 16px;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-color"],
                        ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  text-align: left;\n}\n\n."
                      )
                      .concat(
                        t,
                        "-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-indicator {\n  font-size: 8px !important;\n  position: absolute;\n  bottom: -3px;\n  color: "
                      )
                      .concat(e.color, ";\n}\n\n/*#")
                      .concat(t, "-speed-settings {\n  height: ")
                      .concat(
                        16 * n.speedValues.length + 32 + 10 - 2,
                        "px;\n}*/\n\n#"
                      )
                      .concat(t, "-speed-settings li.no-hover { \n  height: ")
                      .concat(
                        16 * n.speedValues.length + 10 - 2,
                        "px !important; \n}\n#"
                      )
                      .concat(t, "-settings-panel.")
                      .concat(
                        t,
                        "-settings-speed-panel {\n  overflow: hidden;\n  width: 92px;\n  position:absolute;\n  z-index:120;\n  /*height: "
                      )
                      .concat(
                        16 * n.speedValues.length + 32 + 20,
                        "px;*/\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, "-settings-panel.")
                      .concat(t, "-settings-speed-panel .")
                      .concat(t, "-speed-btn {\n  float: left;\n}\n\n.")
                      .concat(
                        t,
                        "-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#"
                      )
                      .concat(t, "-settings-panel .")
                      .concat(t, "-speed-btn {\n  float: right;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#"
                      )
                      .concat(t, "-settings-panel.")
                      .concat(
                        t,
                        "-settings-speed-panel ul li {\n  min-width: 70px;\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content:center;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\ndiv."
                      )
                      .concat(t, "-speed-value:hover {\n  background-color: ")
                      .concat(e["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-panel ul li {\n  /*position: relative;\n  width: 100%;\n  min-width: 154px;*/\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n  display: flex;\n  height:32px;\n  align-items:center;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-settings-panel ul li label {\n  margin: 0px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n}\n\n.switch input {\n  display: none;\n}\n\n.settings-switch {\n  position: absolute;\n  right: 24px;\n}\n\n.settings-switch::after {\n  clear: both;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: "
                      )
                      .concat(
                        e["slider-off-color"],
                        ';\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  background-color: '
                      )
                      .concat(
                        e["slider-on-color"],
                        ";\n}\n\ninput:focus+.slider {\n  box-shadow: 0 0 1px "
                      )
                      .concat(
                        e["slider-on-color"],
                        ";\n}\n\ninput:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n\n.m-fadeOut {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s linear 300ms, opacity 300ms;\n}\n\n.m-fadeIn {\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-settings-panel ul li:hover {\n  background-color: "
                      )
                      .concat(e["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, "-loopbar:hover {\n  cursor: pointer;\n}\n\n#")
                      .concat(
                        t,
                        "-status-btn:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, "-controls:active #")
                      .concat(t, "-cursor,\n#")
                      .concat(t, "-controls:hover #")
                      .concat(
                        t,
                        "-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, "-volume .")
                      .concat(
                        t,
                        "-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, "-volume .")
                      .concat(
                        t,
                        "-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, "-time-display.")
                      .concat(
                        t,
                        "-time-width-transition {\n  position:relative;\n  left: 10px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, "-settings-speed:hover .")
                      .concat(
                        t,
                        "-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, "-loop-btn:hover,\n#")
                      .concat(
                        t,
                        "-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#"
                      )
                      .concat(
                        t,
                        "-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n"
                      )
                      .concat(e["theme-style"], "\n");
                  })(e, this.name, this.options),
                  o = z("style");
                o.styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  V("head")[0].appendChild(o);
              },
            },
            {
              key: "setSpeed",
              value: function () {
                var e,
                  t = this;
                (e = 1 == this.clip.speed ? "Normal" : this.clip.speed),
                  (this.elements.speedCurrent.innerHTML = e);
                var n =
                  -1 *
                  ((function () {
                    for (var e = 0; e < t.options.speedValues.length - 1; e++)
                      if (
                        t.options.speedValues[e] <= t.clip.speed &&
                        t.options.speedValues[e + 1] > t.clip.speed
                      )
                        return (
                          e +
                          Math.abs(
                            (t.clip.speed - t.options.speedValues[e]) /
                              (t.options.speedValues[e] -
                                t.options.speedValues[e + 1])
                          )
                        );
                  })() *
                    (1 / (this.options.speedValues.length - 1)) -
                    1) *
                  (this.options.speedValues.length - 1) *
                  16;
                L("".concat(this.name, "-speed-cursor")).style.top = n + "px";
              },
            },
            {
              key: "calculateSpeed",
              value: function (e, t, n) {
                var i = Math.floor(n / e);
                if (i === t.length - 1) return t[i].toFixed(1);
                var r = (
                  ((n / e) % 1) * Math.abs(t[i] - t[i + 1]) +
                  t[i]
                ).toFixed(1);
                return 0 == r ? "0.0" : r;
              },
            },
            {
              key: "createPreviewDisplay",
              value: function () {
                this.previewClip = this.clip.paste(
                  L("".concat(this.name, "-hover-display"))
                );
                var e = L("".concat(this.name, "-hover-display"));
                (window.previewClip = this.previewClip),
                  (e.style.position = "absolute"),
                  (e.style.zIndex = 1),
                  this.setPreviewDimentions();
              },
            },
            {
              key: "setPreviewDimentions",
              value: function () {
                var e = this.clip.props.host,
                  t = this.previewClip.ownClip.props.host,
                  n = e.offsetWidth,
                  i = e.offsetHeight,
                  r = n * this.previewScale;
                r > 300 && ((r = 300), (this.previewScale = r / n)),
                  (L("".concat(this.name, "-hover-display")).style.width =
                    n + "px"),
                  (L("".concat(this.name, "-hover-display")).style.height =
                    i + "px"),
                  (t.style.transform = "scale(".concat(this.previewScale, ")")),
                  (t.style.transformOrigin = "center bottom"),
                  (t.style.boxSizing = "border-box");
              },
            },
          ]) && t(n.prototype, i),
          e
        );
      })();
    })(n(0));
  },
  function (e, t, n) {
    var i, r, o;
    function s(e) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    !(function (a, l) {
      "object" == s(t) && void 0 !== e
        ? l(t, n(0))
        : ((r = [t, n(0)]),
          void 0 === (o = "function" == typeof (i = l) ? i.apply(t, r) : i) ||
            (e.exports = o));
    })(0, function (e, t) {
      "use strict";
      var n = (function (e) {
        return e && "object" == s(e) && "default" in e ? e : { default: e };
      })(t);
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t &&
            (function (e, t) {
              (
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                }
              )(e, t);
            })(e, t);
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        return !t || ("object" != s(t) && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = l(e);
          if (t) {
            var r = l(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return c(this, n);
        };
      }
      var d = (function (e) {
          a(n, e);
          var t = u(n);
          function n() {
            return i(this, n), t.apply(this, arguments);
          }
          return (
            o(n, [
              {
                key: "onAfterRender",
                value: function () {
                  var e = this,
                    t = this.context.getElements("video")[0];
                  t.muted = !0;
                  var n = this.context.getElements("canvas")[0],
                    i = n.getContext("2d");
                  t.addEventListener(
                    "loadedmetadata",
                    function () {
                      var i = e.attrs.width || 640,
                        r = e.attrs.height || 360;
                      (n.style.transform = "scale("
                        .concat(i / t.videoWidth, ", ")
                        .concat(r / t.videoHeight, ")")),
                        (n.width = t.videoWidth),
                        (n.height = t.videoHeight);
                    },
                    !1
                  ),
                    this.setCustomEntity("video", {
                      video: t,
                      canvas: n,
                      ctx: i,
                      startFrom: 1e3 * this.attrs.startFrom || 0,
                    });
                },
              },
              {
                key: "html",
                get: function () {
                  var e = this;
                  return '\n        <div>\n            <video id="video" style="width:'
                    .concat(this.attrs.width || 640, "px;height:")
                    .concat(
                      this.attrs.height || 360,
                      'px;" preload="auto">\n                '
                    )
                    .concat(
                      this.attrs.sources
                        .map(function (t) {
                          return '\n                    <source src="'
                            .concat(t, "#t=")
                            .concat(
                              e.attrs.startFrom || 0,
                              '"></source>\n                '
                            );
                        })
                        .join(""),
                      '\n            </video>\n            <canvas id="canvas"></canvas>\n        </div>\n        '
                    );
                },
              },
              {
                key: "css",
                get: function () {
                  return "\n            #video{\n                display:none;\n            }\n        ";
                },
              },
            ]),
            n
          );
        })(n.default.API.DOMClip),
        p = (function (e) {
          a(n, e);
          var t = u(n);
          function n() {
            return i(this, n), t.apply(this, arguments);
          }
          return (
            o(n, [
              {
                key: "play",
                value: function () {
                  var e = this,
                    t = this.element.entity.video,
                    n = this.element.entity.ctx;
                  return (
                    t.play(),
                    !0 !== this.hasSetWaitingListener &&
                      (t.addEventListener(
                        "waiting",
                        this._waitingHandler.bind(this)
                      ),
                      (this.hasSetWaitingListener = !0)),
                    !0 !== this.hasSetCanplayListener &&
                      (t.addEventListener(
                        "canplay",
                        this._canplayHandler.bind(this)
                      ),
                      (this.hasSetCanplayListener = !0)),
                    (function t(i) {
                      n.drawImage(i, 0, 0),
                        (e.timeout = setTimeout(function () {
                          t(i);
                        }, 10));
                    })(t),
                    !0
                  );
                },
              },
              {
                key: "_waitingHandler",
                value: function () {
                  this.setBlock("Video loading");
                },
              },
              {
                key: "_canplayHandler",
                value: function () {
                  this.unblock();
                },
              },
              {
                key: "stop",
                value: function () {
                  this.element.entity.video.pause(), clearTimeout(this.timeout);
                },
              },
              {
                key: "onProgress",
                value: function (e, t) {
                  var n = t + this.element.entity.startFrom;
                  (this.element.entity.video.currentTime = (n + t) / 1e3),
                    this.element.entity.ctx.drawImage(
                      this.element.entity.video,
                      0,
                      0
                    );
                },
              },
            ]),
            n
          );
        })(n.default.API.MediaPlayback),
        h = {
          filter: [
            "blur",
            "brightness",
            "contrast",
            "drop-shadow",
            "grayscale",
            "hue-rotate",
            "invert",
            "opacity",
            "saturate",
            "sepia",
          ],
        },
        f = h.filter,
        m = {
          npm_name: "@kissmybutton/motorcortex-video",
          incidents: [
            { exportable: p, name: "Playback" },
            {
              exportable: (function (e) {
                a(n, e);
                var t = u(n);
                function n() {
                  return i(this, n), t.apply(this, arguments);
                }
                return (
                  o(n, [
                    {
                      key: "getScratchValue",
                      value: function () {
                        return {
                          blur: 0,
                          brightness: 1,
                          contrast: 1,
                          grayscale: 0,
                          "hue-rotate": 0,
                          invert: 0,
                          opacity: 1,
                          saturate: 1,
                          sepia: 0,
                        };
                      },
                    },
                    {
                      key: "_objToFilterValue",
                      value: function (e) {
                        var t = "";
                        for (var n in e)
                          t += ""
                            .concat(n, "(")
                            .concat(e[n])
                            .concat(this._effectsUnits[n], ") ");
                        return t;
                      },
                    },
                    {
                      key: "onProgress",
                      value: function (e) {
                        for (
                          var t = Object.assign({}, this.initialValue), n = 0;
                          n < f.length;
                          n++
                        ) {
                          var i = f[n];
                          this.initialValue[i] !== this.targetValue[i] &&
                            (t[i] =
                              e * (this.targetValue[i] - this.initialValue[i]) +
                              this.initialValue[i]);
                        }
                        this.element.entity.ctx.filter = this._objToFilterValue(
                          t
                        );
                      },
                    },
                    {
                      key: "_effectsUnits",
                      get: function () {
                        return {
                          blur: "px",
                          brightness: "",
                          contrast: "",
                          grayscale: "",
                          "hue-rotate": "deg",
                          invert: "",
                          opacity: "",
                          saturate: "",
                          sepia: "",
                        };
                      },
                    },
                  ]),
                  n
                );
              })(n.default.API.MonoIncident),
              name: "VideoEffect",
              attributesValidationRules: {
                animatedAttrs: {
                  type: "object",
                  props: {
                    filter: {
                      type: "object",
                      props: {
                        blur: { type: "number", min: 0, optional: !0 },
                        brightness: {
                          type: "number",
                          min: 0,
                          max: 1,
                          optional: !0,
                        },
                        contrast: { type: "number", min: 0, optional: !0 },
                        grayscale: {
                          type: "number",
                          min: 0,
                          max: 1,
                          optional: !0,
                        },
                        "hue-rotate": { type: "number", optional: !0 },
                        invert: {
                          type: "number",
                          min: 0,
                          max: 1,
                          optional: !0,
                        },
                        opacity: {
                          type: "number",
                          min: 0,
                          max: 1,
                          optional: !0,
                        },
                        saturate: { type: "number", min: 0, optional: !0 },
                        sepia: { type: "number", min: 0, max: 1, optional: !0 },
                      },
                    },
                  },
                },
              },
            },
          ],
          compositeAttributes: h,
          Clip: {
            exportable: d,
            attributesValidationRules: {
              sources: {
                optional: !1,
                type: "array",
                min: 1,
                items: { type: "string" },
              },
              width: {
                optional: !0,
                type: "number",
                integer: !0,
                positive: !0,
              },
              height: {
                optional: !0,
                type: "number",
                integer: !0,
                positive: !0,
              },
              startFrom: { optional: !0, type: "number", integer: !0, min: 0 },
            },
          },
          capabilities: { speed: !1, preview: !1 },
        },
        v = m.npm_name,
        g = m.incidents,
        y = m.compositeAttributes,
        b = m.Clip,
        x = m.capabilities;
      (e.Clip = b),
        (e.capabilities = x),
        (e.compositeAttributes = y),
        (e.default = m),
        (e.incidents = g),
        (e.npm_name = v),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  },
]);
