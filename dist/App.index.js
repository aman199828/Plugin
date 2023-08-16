!(function () {
  "use strict";
  var e = {
      87: function (e, t, n) {
        var r = n(81),
          o = n.n(r),
          a = n(645),
          c = n.n(a)()(o());
        c.push([
          e.id,
          ".App {\n  text-align: center;\n}\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n",
          "",
        ]),
          (t.Z = c);
      },
      645: function (e) {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var c = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var u = this[i][0];
                  null != u && (c[u] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var s = [].concat(e[l]);
                (r && c[s[0]]) ||
                  (void 0 !== a &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = a)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      81: function (e) {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: function (e) {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, c = [], i = 0; i < e.length; i++) {
            var u = e[i],
              l = r.base ? u[0] + r.base : u[0],
              s = a[l] || 0,
              f = "".concat(l, " ").concat(s);
            a[l] = s + 1;
            var p = n(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(d);
            else {
              var v = o(d, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: f, updater: v, references: 1 });
            }
            c.push(f);
          }
          return c;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var c = 0; c < a.length; c++) {
              var i = n(a[c]);
              t[i].references--;
            }
            for (var u = r(e, o), l = 0; l < a.length; l++) {
              var s = n(a[l]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            a = u;
          };
        };
      },
      569: function (e) {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: function (e) {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: function (e, t, n) {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: function (e) {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: function (e) {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nc = void 0);
  var r = {};
  !(function () {
    n.r(r),
      n.d(r, {
        default: function () {
          return T;
        },
      });
    var e = require("react"),
      t = n.n(e),
      o = n(379),
      a = n.n(o),
      c = n(795),
      i = n.n(c),
      u = n(569),
      l = n.n(u),
      s = n(565),
      f = n.n(s),
      p = n(216),
      d = n.n(p),
      v = n(589),
      m = n.n(v),
      y = n(87),
      h = {};
    (h.styleTagTransform = m()),
      (h.setAttributes = f()),
      (h.insert = l().bind(null, "head")),
      (h.domAPI = i()),
      (h.insertStyleElement = d()),
      a()(y.Z, h),
      y.Z && y.Z.locals && y.Z.locals;
    var b = (function (e) {
      return (e.INCREMENT = "INCREMENT"), (e.DECREMENT = "DECREMENT"), e;
    })({});
    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var g = function (e, t) {
        var n = b.INCREMENT,
          r = b.DECREMENT;
        switch (t.type) {
          case n:
            return { count: e.count + 1 };
          case r:
            return { count: e.count - 1 };
          default:
            throw new Error();
        }
      },
      x = { count: 0 },
      C = function () {
        var n,
          r,
          o =
            ((n = (0, e.useReducer)(g, x)),
            (r = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(n) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    a,
                    c,
                    i = [],
                    u = !0,
                    l = !1;
                  try {
                    if (((a = (n = n.call(e)).next), 0 === t)) {
                      if (Object(n) !== n) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (r = a.call(n)).done) &&
                        (i.push(r.value), i.length !== t);
                        u = !0
                      );
                  } catch (e) {
                    (l = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != n.return &&
                        ((c = n.return()), Object(c) !== c)
                      )
                        return;
                    } finally {
                      if (l) throw o;
                    }
                  }
                  return i;
                }
              })(n, r) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return E(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? E(e, t)
                      : void 0
                  );
                }
              })(n, r) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          a = o[0],
          c = o[1],
          i = b.INCREMENT,
          u = b.DECREMENT;
        return t().createElement(
          t().Fragment,
          null,
          t().createElement("p", null, "Counter:"),
          t().createElement(
            "button",
            {
              onClick: function () {
                return c({ type: u });
              },
            },
            "-"
          ),
          a.count,
          t().createElement(
            "button",
            {
              onClick: function () {
                return c({ type: i });
              },
            },
            "+"
          )
        );
      },
      T = function () {
        return t().createElement(
          "div",
          { className: "App" },
          t().createElement(
            "header",
            { className: "App-header" },
            t().createElement(C, null)
          )
        );
      };
  })(),
    (module.exports = r);
})();
