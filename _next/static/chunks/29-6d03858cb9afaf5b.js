(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [29],
  {
    9361: function (t, e) {
      "use strict";
      e.Z = function (t, e, i) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = i),
          t
        );
      };
    },
    3096: function (t, e, i) {
      var n = "Expected a function",
        r = 0 / 0,
        o = /^\s+|\s+$/g,
        s = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt,
        c = "object" == typeof i.g && i.g && i.g.Object === Object && i.g,
        h = "object" == typeof self && self && self.Object === Object && self,
        d = c || h || Function("return this")(),
        p = Object.prototype.toString,
        f = Math.max,
        m = Math.min,
        v = function () {
          return d.Date.now();
        };
      function g(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function y(t) {
        if ("number" == typeof t) return t;
        if (
          "symbol" == typeof (e = t) ||
          ((i = e) && "object" == typeof i && "[object Symbol]" == p.call(e))
        )
          return r;
        if (g(t)) {
          var e,
            i,
            n = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = g(n) ? n + "" : n;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(o, "");
        var c = a.test(t);
        return c || l.test(t) ? u(t.slice(2), c ? 2 : 8) : s.test(t) ? r : +t;
      }
      t.exports = function (t, e, i) {
        var r = !0,
          o = !0;
        if ("function" != typeof t) throw TypeError(n);
        return (
          g(i) &&
            ((r = "leading" in i ? !!i.leading : r),
            (o = "trailing" in i ? !!i.trailing : o)),
          (function (t, e, i) {
            var r,
              o,
              s,
              a,
              l,
              u,
              c = 0,
              h = !1,
              d = !1,
              p = !0;
            if ("function" != typeof t) throw TypeError(n);
            function b(e) {
              var i = r,
                n = o;
              return (r = o = void 0), (c = e), (a = t.apply(n, i));
            }
            function w(t) {
              var i = t - u,
                n = t - c;
              return void 0 === u || i >= e || i < 0 || (d && n >= s);
            }
            function x() {
              var t,
                i,
                n,
                r,
                o = v();
              if (w(o)) return S(o);
              l = setTimeout(
                x,
                ((i = o - u), (n = o - c), (r = e - i), d ? m(r, s - n) : r)
              );
            }
            function S(t) {
              return ((l = void 0), p && r) ? b(t) : ((r = o = void 0), a);
            }
            function P() {
              var t,
                i = v(),
                n = w(i);
              if (((r = arguments), (o = this), (u = i), n)) {
                if (void 0 === l)
                  return (c = t = u), (l = setTimeout(x, e)), h ? b(t) : a;
                if (d) return (l = setTimeout(x, e)), b(u);
              }
              return void 0 === l && (l = setTimeout(x, e)), a;
            }
            return (
              (e = y(e) || 0),
              g(i) &&
                ((h = !!i.leading),
                (s = (d = "maxWait" in i) ? f(y(i.maxWait) || 0, e) : s),
                (p = "trailing" in i ? !!i.trailing : p)),
              (P.cancel = function () {
                void 0 !== l && clearTimeout(l),
                  (c = 0),
                  (r = u = o = l = void 0);
              }),
              (P.flush = function () {
                return void 0 === l ? a : S(v());
              }),
              P
            );
          })(t, e, { leading: r, maxWait: e, trailing: o })
        );
      };
    },
    1373: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = i(7294);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = (...t) =>
          t
            .filter(
              (t, e, i) => Boolean(t) && "" !== t.trim() && i.indexOf(t) === e
            )
            .join(" ")
            .trim();
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var s = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, n.forwardRef)(
          (
            {
              color: t = "currentColor",
              size: e = 24,
              strokeWidth: i = 2,
              absoluteStrokeWidth: r,
              className: a = "",
              children: l,
              iconNode: u,
              ...c
            },
            h
          ) =>
            (0, n.createElement)(
              "svg",
              {
                ref: h,
                ...s,
                width: e,
                height: e,
                stroke: t,
                strokeWidth: r ? (24 * Number(i)) / Number(e) : i,
                className: o("lucide", a),
                ...c,
              },
              [
                ...u.map(([t, e]) => (0, n.createElement)(t, e)),
                ...(Array.isArray(l) ? l : [l]),
              ]
            )
        ),
        l = (t, e) => {
          let i = (0, n.forwardRef)(({ className: i, ...s }, l) =>
            (0, n.createElement)(a, {
              ref: l,
              iconNode: e,
              className: o(`lucide-${r(t)}`, i),
              ...s,
            })
          );
          return (i.displayName = `${t}`), i;
        };
    },
    4998: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    6915: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("Copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    8814: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("ExternalLink", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    7232: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    5097: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("MessageCircle", [
        ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
      ]);
    },
    4778: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("Twitter", [
        [
          "path",
          {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6",
          },
        ],
      ]);
    },
    1352: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = i(1373);
      /**
       * @license lucide-react v0.469.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n.Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    8045: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(9361).Z,
        r = i(4941).Z,
        o = i(3929).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e,
            i,
            a = t.src,
            l = t.sizes,
            m = t.unoptimized,
            v = void 0 !== m && m,
            w = t.priority,
            A = void 0 !== w && w,
            C = t.loading,
            M = t.lazyRoot,
            k = t.lazyBoundary,
            j = t.className,
            O = t.quality,
            V = t.width,
            D = t.height,
            R = t.style,
            L = t.objectFit,
            B = t.objectPosition,
            I = t.onLoadingComplete,
            F = t.placeholder,
            _ = void 0 === F ? "empty" : F,
            z = t.blurDataURL,
            H = u(t, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            N = c.useContext(f.ImageConfigContext),
            U = c.useMemo(
              function () {
                var t = g || N || d.imageConfigDefault,
                  e = o(t.deviceSizes)
                    .concat(o(t.imageSizes))
                    .sort(function (t, e) {
                      return t - e;
                    }),
                  i = t.deviceSizes.sort(function (t, e) {
                    return t - e;
                  });
                return s({}, t, { allSizes: e, deviceSizes: i });
              },
              [N]
            ),
            W = l ? "responsive" : "intrinsic";
          "layout" in H && (H.layout && (W = H.layout), delete H.layout);
          var $ = T;
          if ("loader" in H) {
            if (H.loader) {
              var q = H.loader;
              $ = function (t) {
                t.config;
                var e = u(t, ["config"]);
                return q(e);
              };
            }
            delete H.loader;
          }
          var Y = "";
          if (
            (function (t) {
              var e;
              return "object" == typeof t && (x(t) || void 0 !== t.src);
            })(a)
          ) {
            var X = x(a) ? a.default : a;
            if (!X.src)
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(X)
                )
              );
            if (
              ((z = z || X.blurDataURL),
              (Y = X.src),
              (!W || "fill" !== W) &&
                ((D = D || X.height),
                (V = V || X.width),
                !X.height || !X.width))
            )
              throw Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(X)
                )
              );
          }
          a = "string" == typeof a ? a : Y;
          var Z = !A && ("lazy" === C || void 0 === C);
          (a.startsWith("data:") || a.startsWith("blob:")) &&
            ((v = !0), (Z = !1)),
            y.has(a) && (Z = !1),
            U.unoptimized && (v = !0);
          var K = r(c.useState(!1), 2),
            G = K[0],
            Q = K[1],
            J = r(
              p.useIntersection({
                rootRef: void 0 === M ? null : M,
                rootMargin: k || "200px",
                disabled: !Z,
              }),
              3
            ),
            tt = J[0],
            te = J[1],
            ti = J[2],
            tn = !Z || te,
            tr = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            to = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            ts = !1,
            ta = P(V),
            tl = P(D),
            tu = P(O),
            tc = Object.assign({}, R, {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: L,
              objectPosition: B,
            }),
            th =
              "blur" !== _ || G
                ? {}
                : {
                    backgroundSize: L || "cover",
                    backgroundPosition: B || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("'.concat(z, '")'),
                  };
          if ("fill" === W)
            (tr.display = "block"),
              (tr.position = "absolute"),
              (tr.top = 0),
              (tr.left = 0),
              (tr.bottom = 0),
              (tr.right = 0);
          else if (void 0 !== ta && void 0 !== tl) {
            var td = tl / ta,
              tp = isNaN(td) ? "100%" : "".concat(100 * td, "%");
            "responsive" === W
              ? ((tr.display = "block"),
                (tr.position = "relative"),
                (ts = !0),
                (to.paddingTop = tp))
              : "intrinsic" === W
              ? ((tr.display = "inline-block"),
                (tr.position = "relative"),
                (tr.maxWidth = "100%"),
                (ts = !0),
                (to.maxWidth = "100%"),
                (e =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(ta, "%27%20height=%27")
                    .concat(tl, "%27/%3e")))
              : "fixed" === W &&
                ((tr.display = "inline-block"),
                (tr.position = "relative"),
                (tr.width = ta),
                (tr.height = tl));
          }
          var tf = { src: b, srcSet: void 0, sizes: void 0 };
          tn &&
            (tf = S({
              config: U,
              src: a,
              unoptimized: v,
              layout: W,
              width: ta,
              quality: tu,
              sizes: l,
              loader: $,
            }));
          var tm = a,
            tv = "imagesizes";
          tv = "imageSizes";
          var tg =
              (n((i = {}), "imageSrcSet", tf.srcSet),
              n(i, tv, tf.sizes),
              n(i, "crossOrigin", H.crossOrigin),
              i),
            ty = c.default.useLayoutEffect,
            tb = c.useRef(I),
            tw = c.useRef(a);
          c.useEffect(
            function () {
              tb.current = I;
            },
            [I]
          ),
            ty(
              function () {
                tw.current !== a && (ti(), (tw.current = a));
              },
              [ti, a]
            );
          var tx = s(
            {
              isLazy: Z,
              imgAttributes: tf,
              heightInt: tl,
              widthInt: ta,
              qualityInt: tu,
              layout: W,
              className: j,
              imgStyle: tc,
              blurStyle: th,
              loading: C,
              config: U,
              unoptimized: v,
              placeholder: _,
              loader: $,
              srcString: tm,
              onLoadingCompleteRef: tb,
              setBlurComplete: Q,
              setIntersection: tt,
              isVisible: tn,
              noscriptSizes: l,
            },
            H
          );
          return c.default.createElement(
            c.default.Fragment,
            null,
            c.default.createElement(
              "span",
              { style: tr },
              ts
                ? c.default.createElement(
                    "span",
                    { style: to },
                    e
                      ? c.default.createElement("img", {
                          style: {
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          },
                          alt: "",
                          "aria-hidden": !0,
                          src: e,
                        })
                      : null
                  )
                : null,
              c.default.createElement(E, Object.assign({}, tx))
            ),
            A
              ? c.default.createElement(
                  h.default,
                  null,
                  c.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + tf.src + tf.srcSet + tf.sizes,
                        rel: "preload",
                        as: "image",
                        href: tf.srcSet ? void 0 : tf.src,
                      },
                      tg
                    )
                  )
                )
              : null
          );
        });
      var s = i(6495).Z,
        a = i(2648).Z,
        l = i(1598).Z,
        u = i(7273).Z,
        c = l(i(7294)),
        h = a(i(5443)),
        d = i(9309),
        p = i(7190),
        f = i(9977);
      i(3794);
      var m = i(2392);
      function v(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      var g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
        y = new Set(),
        b =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        w = new Map([
          [
            "default",
            function (t) {
              var e = t.config,
                i = t.src,
                n = t.width,
                r = t.quality;
              return i.endsWith(".svg") && !e.dangerouslyAllowSVG
                ? i
                : i
            },
          ],
          [
            "imgix",
            function (t) {
              var e = t.config,
                i = t.src,
                n = t.width,
                r = t.quality,
                o = new URL("".concat(e.path).concat(v(i))),
                s = o.searchParams;
              return (
                s.set("auto", s.getAll("auto").join(",") || "format"),
                s.set("fit", s.get("fit") || "max"),
                s.set("w", s.get("w") || n.toString()),
                r && s.set("q", r.toString()),
                o.href
              );
            },
          ],
          [
            "cloudinary",
            function (t) {
              var e,
                i = t.config,
                n = t.src,
                r = t.width,
                o =
                  [
                    "f_auto",
                    "c_limit",
                    "w_" + r,
                    "q_" + (t.quality || "auto"),
                  ].join(",") + "/";
              return "".concat(i.path).concat(o).concat(v(n));
            },
          ],
          [
            "akamai",
            function (t) {
              var e = t.config,
                i = t.src,
                n = t.width;
              return "".concat(e.path).concat(v(i), "?imwidth=").concat(n);
            },
          ],
          [
            "custom",
            function (t) {
              var e = t.src;
              throw Error(
                'Image with src "'.concat(e, '" is missing "loader" prop.') +
                  "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
              );
            },
          ],
        ]);
      function x(t) {
        return void 0 !== t.default;
      }
      function S(t) {
        var e = t.config,
          i = t.src,
          n = t.unoptimized,
          r = t.layout,
          s = t.width,
          a = t.quality,
          l = t.sizes,
          u = t.loader;
        if (n) return { src: i, srcSet: void 0, sizes: void 0 };
        var c = (function (t, e, i, n) {
            var r = t.deviceSizes,
              s = t.allSizes;
            if (n && ("fill" === i || "responsive" === i)) {
              for (var a = /(^|\s)(1?\d?\d)vw/g, l = []; (u = a.exec(n)); u)
                l.push(parseInt(u[2]));
              if (l.length) {
                var u,
                  c,
                  h = 0.01 * (c = Math).min.apply(c, o(l));
                return {
                  widths: s.filter(function (t) {
                    return t >= r[0] * h;
                  }),
                  kind: "w",
                };
              }
              return { widths: s, kind: "w" };
            }
            return "number" != typeof e || "fill" === i || "responsive" === i
              ? { widths: r, kind: "w" }
              : {
                  widths: o(
                    new Set(
                      [e, 2 * e].map(function (t) {
                        return (
                          s.find(function (e) {
                            return e >= t;
                          }) || s[s.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(e, s, r, l),
          h = c.widths,
          d = c.kind,
          p = h.length - 1;
        return {
          sizes: l || "w" !== d ? l : "100vw",
          srcSet: h
            .map(function (t, n) {
              return ""
                .concat(u({ config: e, src: i, quality: a, width: t }), " ")
                .concat("w" === d ? t : n + 1)
                .concat(d);
            })
            .join(", "),
          src: u({ config: e, src: i, quality: a, width: h[p] }),
        };
      }
      function P(t) {
        return "number" == typeof t
          ? t
          : "string" == typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function T(t) {
        var e,
          i = (null == (e = t.config) ? void 0 : e.loader) || "default",
          n = w.get(i);
        if (n) return n(t);
        throw Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(d.VALID_LOADERS.join(", "), ". Received: ")
            .concat(i)
        );
      }
      function A(t, e, i, n, r, o) {
        t &&
          t.src !== b &&
          t["data-loaded-src"] !== e &&
          ((t["data-loaded-src"] = e),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                t.parentNode &&
                (y.add(e),
                "blur" === n && o(!0),
                null == r ? void 0 : r.current)
              ) {
                var i = t.naturalWidth,
                  s = t.naturalHeight;
                r.current({ naturalWidth: i, naturalHeight: s });
              }
            }));
      }
      var E = function (t) {
        var e = t.imgAttributes,
          i = (t.heightInt, t.widthInt),
          n = t.qualityInt,
          r = t.layout,
          o = t.className,
          a = t.imgStyle,
          l = t.blurStyle,
          h = t.isLazy,
          d = t.placeholder,
          p = t.loading,
          f = t.srcString,
          m = t.config,
          v = t.unoptimized,
          g = t.loader,
          y = t.onLoadingCompleteRef,
          b = t.setBlurComplete,
          w = t.setIntersection,
          x = t.onLoad,
          P = t.onError,
          T = (t.isVisible, t.noscriptSizes),
          E = u(t, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "layout",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setIntersection",
            "onLoad",
            "onError",
            "isVisible",
            "noscriptSizes",
          ]);
        return (
          (p = h ? "lazy" : p),
          c.default.createElement(
            c.default.Fragment,
            null,
            c.default.createElement(
              "img",
              Object.assign({}, E, e, {
                decoding: "async",
                "data-nimg": r,
                className: o,
                style: s({}, a, l),
                ref: c.useCallback(
                  function (t) {
                    w(t),
                      (null == t ? void 0 : t.complete) && A(t, f, r, d, y, b);
                  },
                  [w, f, r, d, y, b]
                ),
                onLoad: function (t) {
                  A(t.currentTarget, f, r, d, y, b), x && x(t);
                },
                onError: function (t) {
                  "blur" === d && b(!0), P && P(t);
                },
              })
            ),
            (h || "blur" === d) &&
              c.default.createElement(
                "noscript",
                null,
                c.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    E,
                    S({
                      config: m,
                      src: f,
                      unoptimized: v,
                      layout: r,
                      width: i,
                      quality: n,
                      sizes: T,
                      loader: g,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": r,
                      style: a,
                      className: o,
                      loading: p,
                    }
                  )
                )
              )
          )
        );
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    7190: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(4941).Z;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.useIntersection = function (t) {
          var e,
            i = t.rootRef,
            u = t.rootMargin,
            c = t.disabled || !s,
            h = n(r.useState(!1), 2),
            d = h[0],
            p = h[1],
            f = n(r.useState(null), 2),
            m = f[0],
            v = f[1];
          return (
            r.useEffect(
              function () {
                if (s) {
                  if (!c && !d && m && m.tagName) {
                    var t, e, n, r, h, f, v;
                    return (
                      (e = function (t) {
                        return t && p(t);
                      }),
                      (h = (r = (function (t) {
                        var e,
                          i = {
                            root: t.root || null,
                            margin: t.rootMargin || "",
                          },
                          n = l.find(function (t) {
                            return t.root === i.root && t.margin === i.margin;
                          });
                        if (n && (e = a.get(n))) return e;
                        var r = new Map();
                        return (
                          (e = {
                            id: i,
                            observer: new IntersectionObserver(function (t) {
                              t.forEach(function (t) {
                                var e = r.get(t.target),
                                  i =
                                    t.isIntersecting || t.intersectionRatio > 0;
                                e && i && e(i);
                              });
                            }, t),
                            elements: r,
                          }),
                          l.push(i),
                          a.set(i, e),
                          e
                        );
                      })(
                        (n = {
                          root: null == i ? void 0 : i.current,
                          rootMargin: u,
                        })
                      )).id),
                      (f = r.observer),
                      (v = r.elements).set(m, e),
                      f.observe(m),
                      function () {
                        if ((v.delete(m), f.unobserve(m), 0 === v.size)) {
                          f.disconnect(), a.delete(h);
                          var t = l.findIndex(function (t) {
                            return t.root === h.root && t.margin === h.margin;
                          });
                          t > -1 && l.splice(t, 1);
                        }
                      }
                    );
                  }
                } else if (!d) {
                  var g = o.requestIdleCallback(function () {
                    return p(!0);
                  });
                  return function () {
                    return o.cancelIdleCallback(g);
                  };
                }
              },
              [m, c, u, i, d]
            ),
            [
              v,
              d,
              r.useCallback(function () {
                p(!1);
              }, []),
            ]
          );
        });
      var r = i(7294),
        o = i(9311),
        s = "function" == typeof IntersectionObserver,
        a = new Map(),
        l = [];
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5675: function (t, e, i) {
      t.exports = i(8045);
    },
    1163: function (t, e, i) {
      t.exports = i(387);
    },
    2703: function (t, e, i) {
      "use strict";
      var n = i(414);
      function r() {}
      function o() {}
      (o.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, i, r, o, s) {
            if (s !== n) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var i = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: o,
            resetWarningCache: r,
          };
          return (i.PropTypes = i), i;
        });
    },
    5697: function (t, e, i) {
      t.exports = i(2703)();
    },
    414: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    8477: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        r = i(7294),
        o = l(r),
        s = i(1093),
        a = l(s);
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function (t) {
        function e() {
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
            (function (t, e) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e && ("object" == typeof e || "function" == typeof e)
                ? e
                : t;
            })(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          n(e, [
            {
              key: "render",
              value: function () {
                return o.default.createElement(
                  "button",
                  this.props,
                  this.props.children
                );
              },
            },
          ]),
          e
        );
      })(o.default.Component);
      e.default = (0, a.default)(u);
    },
    5343: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        o = i(7294),
        s = h(o),
        a = i(8e3),
        l = h(a),
        u = i(5697),
        c = h(u);
      function h(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var d = (function (t) {
        function e() {
          return (
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, e),
            (function (t, e) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e && ("object" == typeof e || "function" == typeof e)
                ? e
                : t;
            })(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          r(e, [
            {
              key: "render",
              value: function () {
                var t = this,
                  e = n({}, this.props);
                return (
                  delete e.name,
                  e.parentBindings && delete e.parentBindings,
                  s.default.createElement(
                    "div",
                    n({}, e, {
                      ref: function (e) {
                        t.props.parentBindings.domNode = e;
                      },
                    }),
                    this.props.children
                  )
                );
              },
            },
          ]),
          e
        );
      })(s.default.Component);
      (d.propTypes = { name: c.default.string, id: c.default.string }),
        (e.default = (0, l.default)(d));
    },
    8939: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(7294),
        r = a(n),
        o = i(1093),
        s = a(o);
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function l(t, e) {
        if (!t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e && ("object" == typeof e || "function" == typeof e) ? e : t;
      }
      var u = (function (t) {
        function e() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw TypeError("Cannot call a class as a function");
          })(this, e);
          for (
            var t, i, n, o = arguments.length, s = Array(o), a = 0;
            a < o;
            a++
          )
            s[a] = arguments[a];
          return (
            (i = n =
              l(
                this,
                (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
                  t,
                  [this].concat(s)
                )
              )),
            (n.render = function () {
              return r.default.createElement("a", n.props, n.props.children);
            }),
            l(n, i)
          );
        }
        return (
          !(function (t, e) {
            if ("function" != typeof e && null !== e)
              throw TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, t),
          e
        );
      })(r.default.Component);
      e.default = (0, s.default)(u);
    },
    6261: function (t, e, i) {
      "use strict";
      e.rU = void 0;
      var n = i(8939),
        r = P(n),
        o = i(8477),
        s = P(o),
        a = i(5343),
        l = P(a),
        u = i(2628),
        c = P(u),
        h = i(4592),
        d = P(h),
        p = i(7606),
        f = P(p),
        m = i(3200),
        v = P(m),
        g = i(1093),
        y = P(g),
        b = i(8e3),
        w = P(b),
        x = i(8482),
        S = P(x);
      function P(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.rU = r.default),
        s.default,
        l.default,
        c.default,
        d.default,
        f.default,
        v.default,
        y.default,
        w.default,
        S.default,
        r.default,
        s.default,
        l.default,
        c.default,
        d.default,
        f.default,
        v.default,
        y.default,
        w.default,
        S.default;
    },
    8482: function (t, e, i) {
      "use strict";
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })();
      function o(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function s(t, e) {
        if (!t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e && ("object" == typeof e || "function" == typeof e) ? e : t;
      }
      function a(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var l = i(7294);
      i(3935), i(4259);
      var u = i(7606),
        c = i(2628),
        h = i(5697),
        d = i(9678),
        p = {
          to: h.string.isRequired,
          containerId: h.string,
          container: h.object,
          activeClass: h.string,
          spy: h.bool,
          smooth: h.oneOfType([h.bool, h.string]),
          offset: h.number,
          delay: h.number,
          isDynamic: h.bool,
          onClick: h.func,
          duration: h.oneOfType([h.number, h.func]),
          absolute: h.bool,
          onSetActive: h.func,
          onSetInactive: h.func,
          ignoreCancelEvents: h.bool,
          hashSpy: h.bool,
          spyThrottle: h.number,
        };
      t.exports = {
        Scroll: function (t, e) {
          console.warn("Helpers.Scroll is deprecated since v1.7.0");
          var i = e || c,
            h = (function (e) {
              function c(t) {
                o(this, c);
                var e = s(
                  this,
                  (c.__proto__ || Object.getPrototypeOf(c)).call(this, t)
                );
                return f.call(e), (e.state = { active: !1 }), e;
              }
              return (
                a(c, e),
                r(c, [
                  {
                    key: "getScrollSpyContainer",
                    value: function () {
                      var t = this.props.containerId,
                        e = this.props.container;
                      return t
                        ? document.getElementById(t)
                        : e && e.nodeType
                        ? e
                        : document;
                    },
                  },
                  {
                    key: "componentDidMount",
                    value: function () {
                      if (this.props.spy || this.props.hashSpy) {
                        var t = this.getScrollSpyContainer();
                        u.isMounted(t) || u.mount(t, this.props.spyThrottle),
                          this.props.hashSpy &&
                            (d.isMounted() || d.mount(i),
                            d.mapContainer(this.props.to, t)),
                          this.props.spy &&
                            u.addStateHandler(this.stateHandler),
                          u.addSpyHandler(this.spyHandler, t),
                          this.setState({ container: t });
                      }
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      u.unmount(this.stateHandler, this.spyHandler);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = "";
                      e =
                        this.state && this.state.active
                          ? (
                              (this.props.className || "") +
                              " " +
                              (this.props.activeClass || "active")
                            ).trim()
                          : this.props.className;
                      var i = n({}, this.props);
                      for (var r in p) i.hasOwnProperty(r) && delete i[r];
                      return (
                        (i.className = e),
                        (i.onClick = this.handleClick),
                        l.createElement(t, i)
                      );
                    },
                  },
                ]),
                c
              );
            })(l.Component),
            f = function () {
              var t = this;
              (this.scrollTo = function (e, r) {
                i.scrollTo(e, n({}, t.state, r));
              }),
                (this.handleClick = function (e) {
                  t.props.onClick && t.props.onClick(e),
                    e.stopPropagation && e.stopPropagation(),
                    e.preventDefault && e.preventDefault(),
                    t.scrollTo(t.props.to, t.props);
                }),
                (this.stateHandler = function () {
                  i.getActiveLink() !== t.props.to &&
                    (null !== t.state &&
                      t.state.active &&
                      t.props.onSetInactive &&
                      t.props.onSetInactive(),
                    t.setState({ active: !1 }));
                }),
                (this.spyHandler = function (e) {
                  var n = t.getScrollSpyContainer();
                  if (!d.isMounted() || d.isInitialized()) {
                    var r = t.props.to,
                      o = null,
                      s = 0,
                      a = 0,
                      l = 0;
                    if (
                      (n.getBoundingClientRect &&
                        (l = n.getBoundingClientRect().top),
                      !o || t.props.isDynamic)
                    ) {
                      if (!(o = i.get(r))) return;
                      var c = o.getBoundingClientRect();
                      a = (s = c.top - l + e) + c.height;
                    }
                    var h = e - t.props.offset,
                      p = h >= Math.floor(s) && h < Math.floor(a),
                      f = h < Math.floor(s) || h >= Math.floor(a),
                      m = i.getActiveLink();
                    return f
                      ? (r === m && i.setActiveLink(void 0),
                        t.props.hashSpy && d.getHash() === r && d.changeHash(),
                        t.props.spy &&
                          t.state.active &&
                          (t.setState({ active: !1 }),
                          t.props.onSetInactive && t.props.onSetInactive()),
                        u.updateStates())
                      : p && m !== r
                      ? (i.setActiveLink(r),
                        t.props.hashSpy && d.changeHash(r),
                        t.props.spy &&
                          (t.setState({ active: !0 }),
                          t.props.onSetActive && t.props.onSetActive(r)),
                        u.updateStates())
                      : void 0;
                  }
                });
            };
          return (h.propTypes = p), (h.defaultProps = { offset: 0 }), h;
        },
        Element: function (t) {
          console.warn("Helpers.Element is deprecated since v1.7.0");
          var e = (function (e) {
            function i(t) {
              o(this, i);
              var e = s(
                this,
                (i.__proto__ || Object.getPrototypeOf(i)).call(this, t)
              );
              return (e.childBindings = { domNode: null }), e;
            }
            return (
              a(i, e),
              r(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (t) {
                    this.props.name !== t.name &&
                      this.registerElems(this.props.name);
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    if ("undefined" == typeof window) return !1;
                    c.unregister(this.props.name);
                  },
                },
                {
                  key: "registerElems",
                  value: function (t) {
                    c.register(t, this.childBindings.domNode);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return l.createElement(
                      t,
                      n({}, this.props, { parentBindings: this.childBindings })
                    );
                  },
                },
              ]),
              i
            );
          })(l.Component);
          return (e.propTypes = { name: h.string, id: h.string }), e;
        },
      };
    },
    3200: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          },
        r = i(4259);
      h(r);
      var o = i(9765),
        s = h(o),
        a = i(140),
        l = h(a),
        u = i(4592),
        c = h(u);
      function h(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var d = function (t) {
          return s.default[t.smooth] || s.default.defaultEasing;
        },
        p =
          (function () {
            if ("undefined" != typeof window)
              return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame
              );
          })() ||
          function (t, e, i) {
            window.setTimeout(t, i || 1e3 / 60, new Date().getTime());
          },
        f = function () {
          return {
            currentPosition: 0,
            startPosition: 0,
            targetPosition: 0,
            progress: 0,
            duration: 0,
            cancel: !1,
            target: null,
            containerElement: null,
            to: null,
            start: null,
            delta: null,
            percent: null,
            delayTimeout: null,
          };
        },
        m = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body) return e.scrollLeft;
          var i = void 0 !== window.pageXOffset,
            n = "CSS1Compat" === (document.compatMode || "");
          return i
            ? window.pageXOffset
            : n
            ? document.documentElement.scrollLeft
            : document.body.scrollLeft;
        },
        v = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body) return e.scrollTop;
          var i = void 0 !== window.pageXOffset,
            n = "CSS1Compat" === (document.compatMode || "");
          return i
            ? window.pageYOffset
            : n
            ? document.documentElement.scrollTop
            : document.body.scrollTop;
        },
        g = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body)
            return e.scrollWidth - e.offsetWidth;
          var i = document.body,
            n = document.documentElement;
          return Math.max(
            i.scrollWidth,
            i.offsetWidth,
            n.clientWidth,
            n.scrollWidth,
            n.offsetWidth
          );
        },
        y = function (t) {
          var e = t.data.containerElement;
          if (e && e !== document && e !== document.body)
            return e.scrollHeight - e.offsetHeight;
          var i = document.body,
            n = document.documentElement;
          return Math.max(
            i.scrollHeight,
            i.offsetHeight,
            n.clientHeight,
            n.scrollHeight,
            n.offsetHeight
          );
        },
        b = function t(e, i, n) {
          var r = i.data;
          if (!i.ignoreCancelEvents && r.cancel) {
            c.default.registered.end &&
              c.default.registered.end(r.to, r.target, r.currentPositionY);
            return;
          }
          if (
            ((r.delta = Math.round(r.targetPosition - r.startPosition)),
            null === r.start && (r.start = n),
            (r.progress = n - r.start),
            (r.percent =
              r.progress >= r.duration ? 1 : e(r.progress / r.duration)),
            (r.currentPosition =
              r.startPosition + Math.ceil(r.delta * r.percent)),
            r.containerElement &&
            r.containerElement !== document &&
            r.containerElement !== document.body
              ? i.horizontal
                ? (r.containerElement.scrollLeft = r.currentPosition)
                : (r.containerElement.scrollTop = r.currentPosition)
              : i.horizontal
              ? window.scrollTo(r.currentPosition, 0)
              : window.scrollTo(0, r.currentPosition),
            r.percent < 1)
          ) {
            var o = t.bind(null, e, i);
            p.call(window, o);
            return;
          }
          c.default.registered.end &&
            c.default.registered.end(r.to, r.target, r.currentPosition);
        },
        w = function (t) {
          t.data.containerElement = t
            ? t.containerId
              ? document.getElementById(t.containerId)
              : t.container && t.container.nodeType
              ? t.container
              : document
            : null;
        },
        x = function (t, e, i, n) {
          (e.data = e.data || f()), window.clearTimeout(e.data.delayTimeout);
          var r,
            o = function () {
              e.data.cancel = !0;
            };
          if (
            (l.default.subscribe(o),
            w(e),
            (e.data.start = null),
            (e.data.cancel = !1),
            (e.data.startPosition = e.horizontal ? m(e) : v(e)),
            (e.data.targetPosition = e.absolute ? t : t + e.data.startPosition),
            e.data.startPosition === e.data.targetPosition)
          ) {
            c.default.registered.end &&
              c.default.registered.end(
                e.data.to,
                e.data.target,
                e.data.currentPosition
              );
            return;
          }
          (e.data.delta = Math.round(
            e.data.targetPosition - e.data.startPosition
          )),
            (e.data.duration = (
              "function" == typeof (r = e.duration)
                ? r
                : function () {
                    return r;
                  }
            )(e.data.delta)),
            (e.data.duration = isNaN(parseFloat(e.data.duration))
              ? 1e3
              : parseFloat(e.data.duration)),
            (e.data.to = i),
            (e.data.target = n);
          var s = d(e),
            a = b.bind(null, s, e);
          if (e && e.delay > 0) {
            e.data.delayTimeout = window.setTimeout(function () {
              c.default.registered.begin &&
                c.default.registered.begin(e.data.to, e.data.target),
                p.call(window, a);
            }, e.delay);
            return;
          }
          c.default.registered.begin &&
            c.default.registered.begin(e.data.to, e.data.target),
            p.call(window, a);
        },
        S = function (t) {
          return ((t = n({}, t)).data = t.data || f()), (t.absolute = !0), t;
        },
        P = function (t) {
          x(0, S(t));
        },
        T = function (t, e) {
          x(t, S(e));
        },
        A = function (t) {
          (t = S(t)), w(t), x(t.horizontal ? g(t) : y(t), t);
        },
        E = function (t, e) {
          (e = S(e)), w(e);
          var i = e.horizontal ? m(e) : v(e);
          x(t + i, e);
        };
      e.default = {
        animateTopScroll: x,
        getAnimationType: d,
        scrollToTop: P,
        scrollToBottom: A,
        scrollTo: T,
        scrollMore: E,
      };
    },
    140: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = i(5236),
        r = ["mousedown", "mousewheel", "touchmove", "keydown"];
      e.default = {
        subscribe: function (t) {
          return (
            "undefined" != typeof document &&
            r.forEach(function (e) {
              return (0, n.addPassiveEventListener)(document, e, t);
            })
          );
        },
      };
    },
    5236: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addPassiveEventListener = function (t, e, n) {
          var r = n.name;
          r || ((r = e), console.warn("Listener must be a named function.")),
            i.has(e) || i.set(e, new Set());
          var o = i.get(e);
          if (!o.has(r)) {
            var s = (function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener("test", null, e);
              } catch (i) {}
              return t;
            })();
            t.addEventListener(e, n, !!s && { passive: !0 }), o.add(r);
          }
        }),
        (e.removePassiveEventListener = function (t, e, n) {
          t.removeEventListener(e, n), i.get(e).delete(n.name || e);
        });
      var i = new Map();
    },
    8e3: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        o = i(7294),
        s = d(o),
        a = i(3935);
      d(a);
      var l = i(2628),
        u = d(l),
        c = i(5697),
        h = d(c);
      function d(t) {
        return t && t.__esModule ? t : { default: t };
      }
      e.default = function (t) {
        var e = (function (e) {
          function i(t) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, i);
            var e = (function (t, e) {
              if (!t)
                throw ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e && ("object" == typeof e || "function" == typeof e)
                ? e
                : t;
            })(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t));
            return (e.childBindings = { domNode: null }), e;
          }
          return (
            !(function (t, e) {
              if ("function" != typeof e && null !== e)
                throw TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(i, e),
            r(i, [
              {
                key: "componentDidMount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  this.registerElems(this.props.name);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (t) {
                  this.props.name !== t.name &&
                    this.registerElems(this.props.name);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  if ("undefined" == typeof window) return !1;
                  u.default.unregister(this.props.name);
                },
              },
              {
                key: "registerElems",
                value: function (t) {
                  u.default.register(t, this.childBindings.domNode);
                },
              },
              {
                key: "render",
                value: function () {
                  return s.default.createElement(
                    t,
                    n({}, this.props, { parentBindings: this.childBindings })
                  );
                },
              },
            ]),
            i
          );
        })(s.default.Component);
        return (
          (e.propTypes = { name: h.default.string, id: h.default.string }), e
        );
      };
    },
    4592: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = {
        registered: {},
        scrollEvent: {
          register: function (t, e) {
            i.registered[t] = e;
          },
          remove: function (t) {
            i.registered[t] = null;
          },
        },
      };
      e.default = i;
    },
    9678: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), i(5236);
      var n,
        r,
        o = ((n = i(4259)), n && n.__esModule ? n : { default: n });
      e.default = {
        mountFlag: !1,
        initialized: !1,
        scroller: null,
        containers: {},
        mount: function (t) {
          (this.scroller = t),
            (this.handleHashChange = this.handleHashChange.bind(this)),
            window.addEventListener("hashchange", this.handleHashChange),
            this.initStateFromHash(),
            (this.mountFlag = !0);
        },
        mapContainer: function (t, e) {
          this.containers[t] = e;
        },
        isMounted: function () {
          return this.mountFlag;
        },
        isInitialized: function () {
          return this.initialized;
        },
        initStateFromHash: function () {
          var t = this,
            e = this.getHash();
          e
            ? window.setTimeout(function () {
                t.scrollTo(e, !0), (t.initialized = !0);
              }, 10)
            : (this.initialized = !0);
        },
        scrollTo: function (t, e) {
          var i = this.scroller;
          if (i.get(t) && (e || t !== i.getActiveLink())) {
            var n = this.containers[t] || document;
            i.scrollTo(t, { container: n });
          }
        },
        getHash: function () {
          return o.default.getHash();
        },
        changeHash: function (t, e) {
          this.isInitialized() &&
            o.default.getHash() !== t &&
            o.default.updateHash(t, e);
        },
        handleHashChange: function () {
          this.scrollTo(this.getHash());
        },
        unmount: function () {
          (this.scroller = null),
            (this.containers = null),
            window.removeEventListener("hashchange", this.handleHashChange);
        },
      };
    },
    1093: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          },
        r = (function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n);
            }
          }
          return function (e, i, n) {
            return i && t(e.prototype, i), n && t(e, n), e;
          };
        })(),
        o = i(7294),
        s = m(o),
        a = i(7606),
        l = m(a),
        u = i(2628),
        c = m(u),
        h = i(5697),
        d = m(h),
        p = i(9678),
        f = m(p);
      function m(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var v = {
        to: d.default.string.isRequired,
        containerId: d.default.string,
        container: d.default.object,
        activeClass: d.default.string,
        activeStyle: d.default.object,
        spy: d.default.bool,
        horizontal: d.default.bool,
        smooth: d.default.oneOfType([d.default.bool, d.default.string]),
        offset: d.default.number,
        delay: d.default.number,
        isDynamic: d.default.bool,
        onClick: d.default.func,
        duration: d.default.oneOfType([d.default.number, d.default.func]),
        absolute: d.default.bool,
        onSetActive: d.default.func,
        onSetInactive: d.default.func,
        ignoreCancelEvents: d.default.bool,
        hashSpy: d.default.bool,
        saveHashHistory: d.default.bool,
        spyThrottle: d.default.number,
      };
      e.default = function (t, e) {
        var i = e || c.default,
          o = (function (e) {
            function o(t) {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw TypeError("Cannot call a class as a function");
              })(this, o);
              var e = (function (t, e) {
                if (!t)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e && ("object" == typeof e || "function" == typeof e)
                  ? e
                  : t;
              })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, t));
              return a.call(e), (e.state = { active: !1 }), e;
            }
            return (
              !(function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw TypeError(
                    "Super expression must either be null or a function, not " +
                      typeof e
                  );
                (t.prototype = Object.create(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e &&
                    (Object.setPrototypeOf
                      ? Object.setPrototypeOf(t, e)
                      : (t.__proto__ = e));
              })(o, e),
              r(o, [
                {
                  key: "getScrollSpyContainer",
                  value: function () {
                    var t = this.props.containerId,
                      e = this.props.container;
                    return t && !e
                      ? document.getElementById(t)
                      : e && e.nodeType
                      ? e
                      : document;
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.spy || this.props.hashSpy) {
                      var t = this.getScrollSpyContainer();
                      l.default.isMounted(t) ||
                        l.default.mount(t, this.props.spyThrottle),
                        this.props.hashSpy &&
                          (f.default.isMounted() || f.default.mount(i),
                          f.default.mapContainer(this.props.to, t)),
                        l.default.addSpyHandler(this.spyHandler, t),
                        this.setState({ container: t });
                    }
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    l.default.unmount(this.stateHandler, this.spyHandler);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = "";
                    e =
                      this.state && this.state.active
                        ? (
                            (this.props.className || "") +
                            " " +
                            (this.props.activeClass || "active")
                          ).trim()
                        : this.props.className;
                    var i = {};
                    i =
                      this.state && this.state.active
                        ? n({}, this.props.style, this.props.activeStyle)
                        : n({}, this.props.style);
                    var r = n({}, this.props);
                    for (var o in v) r.hasOwnProperty(o) && delete r[o];
                    return (
                      (r.className = e),
                      (r.style = i),
                      (r.onClick = this.handleClick),
                      s.default.createElement(t, r)
                    );
                  },
                },
              ]),
              o
            );
          })(s.default.PureComponent),
          a = function () {
            var t = this;
            (this.scrollTo = function (e, r) {
              i.scrollTo(e, n({}, t.state, r));
            }),
              (this.handleClick = function (e) {
                t.props.onClick && t.props.onClick(e),
                  e.stopPropagation && e.stopPropagation(),
                  e.preventDefault && e.preventDefault(),
                  t.scrollTo(t.props.to, t.props);
              }),
              (this.spyHandler = function (e, n) {
                var r = t.getScrollSpyContainer();
                if (!f.default.isMounted() || f.default.isInitialized()) {
                  var o = t.props.horizontal,
                    s = t.props.to,
                    a = null,
                    l = void 0,
                    u = void 0;
                  if (o) {
                    var c = 0,
                      h = 0,
                      d = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (d = r.getBoundingClientRect().left),
                      !a || t.props.isDynamic)
                    ) {
                      if (!(a = i.get(s))) return;
                      var p = a.getBoundingClientRect();
                      h = (c = p.left - d + e) + p.width;
                    }
                    var m = e - t.props.offset;
                    (l = m >= Math.floor(c) && m < Math.floor(h)),
                      (u = m < Math.floor(c) || m >= Math.floor(h));
                  } else {
                    var v = 0,
                      g = 0,
                      y = 0;
                    if (
                      (r.getBoundingClientRect &&
                        (y = r.getBoundingClientRect().top),
                      !a || t.props.isDynamic)
                    ) {
                      if (!(a = i.get(s))) return;
                      var b = a.getBoundingClientRect();
                      g = (v = b.top - y + n) + b.height;
                    }
                    var w = n - t.props.offset;
                    (l = w >= Math.floor(v) && w < Math.floor(g)),
                      (u = w < Math.floor(v) || w >= Math.floor(g));
                  }
                  var x = i.getActiveLink();
                  if (u) {
                    if (
                      (s === x && i.setActiveLink(void 0),
                      t.props.hashSpy && f.default.getHash() === s)
                    ) {
                      var S = t.props.saveHashHistory;
                      f.default.changeHash("", void 0 !== S && S);
                    }
                    t.props.spy &&
                      t.state.active &&
                      (t.setState({ active: !1 }),
                      t.props.onSetInactive && t.props.onSetInactive(s, a));
                  }
                  if (l && (x !== s || !1 === t.state.active)) {
                    i.setActiveLink(s);
                    var P = t.props.saveHashHistory;
                    t.props.hashSpy &&
                      f.default.changeHash(s, void 0 !== P && P),
                      t.props.spy &&
                        (t.setState({ active: !0 }),
                        t.props.onSetActive && t.props.onSetActive(s, a));
                  }
                }
              });
          };
        return (o.propTypes = v), (o.defaultProps = { offset: 0 }), o;
      };
    },
    7606: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n,
        r,
        o = ((n = i(3096)), n && n.__esModule ? n : { default: n }),
        s = i(5236),
        a = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 66;
          return (0, o.default)(t, e);
        },
        l = {
          spyCallbacks: [],
          spySetState: [],
          scrollSpyContainers: [],
          mount: function (t, e) {
            if (t) {
              var i = a(function (e) {
                l.scrollHandler(t);
              }, e);
              l.scrollSpyContainers.push(t),
                (0, s.addPassiveEventListener)(t, "scroll", i);
            }
          },
          isMounted: function (t) {
            return -1 !== l.scrollSpyContainers.indexOf(t);
          },
          currentPositionX: function (t) {
            if (t !== document) return t.scrollLeft;
            var e = void 0 !== window.pageYOffset,
              i = "CSS1Compat" === (document.compatMode || "");
            return e
              ? window.pageXOffset
              : i
              ? document.documentElement.scrollLeft
              : document.body.scrollLeft;
          },
          currentPositionY: function (t) {
            if (t !== document) return t.scrollTop;
            var e = void 0 !== window.pageXOffset,
              i = "CSS1Compat" === (document.compatMode || "");
            return e
              ? window.pageYOffset
              : i
              ? document.documentElement.scrollTop
              : document.body.scrollTop;
          },
          scrollHandler: function (t) {
            (
              l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)]
                .spyCallbacks || []
            ).forEach(function (e) {
              return e(l.currentPositionX(t), l.currentPositionY(t));
            });
          },
          addStateHandler: function (t) {
            l.spySetState.push(t);
          },
          addSpyHandler: function (t, e) {
            var i = l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)];
            i.spyCallbacks || (i.spyCallbacks = []),
              i.spyCallbacks.push(t),
              t(l.currentPositionX(e), l.currentPositionY(e));
          },
          updateStates: function () {
            l.spySetState.forEach(function (t) {
              return t();
            });
          },
          unmount: function (t, e) {
            l.scrollSpyContainers.forEach(function (t) {
              return (
                t.spyCallbacks &&
                t.spyCallbacks.length &&
                t.spyCallbacks.indexOf(e) > -1 &&
                t.spyCallbacks.splice(t.spyCallbacks.indexOf(e), 1)
              );
            }),
              l.spySetState &&
                l.spySetState.length &&
                l.spySetState.indexOf(t) > -1 &&
                l.spySetState.splice(l.spySetState.indexOf(t), 1),
              document.removeEventListener("scroll", l.scrollHandler);
          },
          update: function () {
            return l.scrollSpyContainers.forEach(function (t) {
              return l.scrollHandler(t);
            });
          },
        };
      e.default = l;
    },
    2628: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e];
              for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            }
            return t;
          },
        r = i(4259),
        o = c(r),
        s = i(3200),
        a = c(s),
        l = i(4592),
        u = c(l);
      function c(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var h = {},
        d = void 0;
      e.default = {
        unmount: function () {
          h = {};
        },
        register: function (t, e) {
          h[t] = e;
        },
        unregister: function (t) {
          delete h[t];
        },
        get: function (t) {
          return (
            h[t] ||
            document.getElementById(t) ||
            document.getElementsByName(t)[0] ||
            document.getElementsByClassName(t)[0]
          );
        },
        setActiveLink: function (t) {
          return (d = t);
        },
        getActiveLink: function () {
          return d;
        },
        scrollTo: function (t, e) {
          var i = this.get(t);
          if (!i) {
            console.warn("target Element not found");
            return;
          }
          var r = (e = n({}, e, { absolute: !1 })).containerId,
            s = e.container,
            l = void 0;
          (l = r ? document.getElementById(r) : s && s.nodeType ? s : document),
            (e.absolute = !0);
          var c = e.horizontal,
            h = o.default.scrollOffset(l, i, c) + (e.offset || 0);
          if (!e.smooth) {
            u.default.registered.begin && u.default.registered.begin(t, i),
              l === document
                ? e.horizontal
                  ? window.scrollTo(h, 0)
                  : window.scrollTo(0, h)
                : (l.scrollTop = h),
              u.default.registered.end && u.default.registered.end(t, i);
            return;
          }
          a.default.animateTopScroll(h, e, t, i);
        },
      };
    },
    9765: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = {
          defaultEasing: function (t) {
            return t < 0.5
              ? Math.pow(2 * t, 2) / 2
              : 1 - Math.pow((1 - t) * 2, 2) / 2;
          },
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return t * (2 - t);
          },
          easeInOutQuad: function (t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return --t * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart: function (t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint: function (t) {
            return t < 0.5
              ? 16 * t * t * t * t * t
              : 1 + 16 * --t * t * t * t * t;
          },
        });
    },
    4259: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = function (t, e) {
          var i = 0 === t.indexOf("#") ? t.substring(1) : t,
            n = i ? "#" + i : "",
            r = window && window.location,
            o = n ? r.pathname + r.search + n : r.pathname + r.search;
          e
            ? history.pushState(history.state, "", o)
            : history.replaceState(history.state, "", o);
        },
        n = function () {
          return window.location.hash.replace(/^#/, "");
        },
        r = function (t) {
          return function (e) {
            return t.contains
              ? t != e && t.contains(e)
              : !!(16 & t.compareDocumentPosition(e));
          };
        },
        o = function (t, e) {
          for (var i = t.offsetTop, n = t.offsetParent; n && !e(n); )
            (i += n.offsetTop), (n = n.offsetParent);
          return { offsetTop: i, offsetParent: n };
        },
        s = function (t, e, i) {
          if (i)
            return t === document
              ? e.getBoundingClientRect().left +
                  (window.scrollX || window.pageXOffset)
              : "static" !== getComputedStyle(t).position
              ? e.offsetLeft
              : e.offsetLeft - t.offsetLeft;
          if (t === document)
            return (
              e.getBoundingClientRect().top +
              (window.scrollY || window.pageYOffset)
            );
          if ("static" !== getComputedStyle((n = t)).position) {
            if (e.offsetParent !== t) {
              var n,
                r = o(e, function (e) {
                  return e === t || e === document;
                }),
                s = r.offsetTop;
              if (r.offsetParent !== t)
                throw Error(
                  "Seems containerElement is not an ancestor of the Element"
                );
              return s;
            }
            return e.offsetTop;
          }
          if (e.offsetParent === t.offsetParent)
            return e.offsetTop - t.offsetTop;
          var a = function (t) {
            return t === document;
          };
          return o(e, a).offsetTop - o(t, a).offsetTop;
        };
      e.default = {
        updateHash: i,
        getHash: n,
        filterElementInContainer: r,
        scrollOffset: s,
      };
    },
    6380: function (t, e, i) {
      "use strict";
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return ob;
        },
      });
      let r = (t) => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function s(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function a(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function l(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, o] = a(n);
          e = e(void 0 !== i ? i : t.custom, r, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, l] = a(n);
          e = e(void 0 !== i ? i : t.custom, s, l);
        }
        return e;
      }
      function u(t, e, i) {
        let n = t.getProps();
        return l(n, e, void 0 !== i ? i : n.custom, t);
      }
      let c = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        h = ["initial", ...c],
        d = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        p = new Set(d),
        f = (t) => 1e3 * t,
        m = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? y
            : p.has(t)
            ? t.startsWith("scale")
              ? g(e[1])
              : v
            : b;
      function x(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let S = { skipAnimations: !1, useManualTiming: !1 },
        P = { current: !1 },
        T = (t) => null !== t;
      function A(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(T),
          o = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return o && void 0 !== n ? n : r[o];
      }
      let E = (t) => t,
        C = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function M(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (i = !0),
          s = C.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  o.has(e) && (l.schedule(e), t()), e(s);
                }
                let l = {
                  schedule(t, r = !1, s = !1) {
                    let a = s && n,
                      l = a ? e : i;
                    return r && o.add(t), l.has(t) || l.add(t), t;
                  },
                  cancel(t) {
                    i.delete(t), o.delete(t);
                  },
                  process(t) {
                    if (((s = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(o)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: c,
            render: h,
            postRender: d,
          } = s,
          p = () => {
            let o = S.useManualTiming ? r.timestamp : performance.now();
            (i = !1),
              (r.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(o - r.timestamp, 40), 1)),
              (r.timestamp = o),
              (r.isProcessing = !0),
              a.process(r),
              l.process(r),
              u.process(r),
              c.process(r),
              h.process(r),
              d.process(r),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(p));
          },
          f = () => {
            (i = !0), (n = !0), r.isProcessing || t(p);
          },
          m = C.reduce((t, e) => {
            let n = s[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || f(), n.schedule(t, e, r))), t
            );
          }, {}),
          v = (t) => {
            for (let e = 0; e < C.length; e++) s[C[e]].cancel(t);
          };
        return { schedule: m, cancel: v, state: r, steps: s };
      }
      let {
          schedule: k,
          cancel: j,
          state: O,
          steps: V,
        } = M(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : E,
          !0
        ),
        D = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function R(t, e, i, n) {
        if (t === e && i === n) return E;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let o,
              s,
              a = 0;
            do (o = D((s = e + (i - e) / 2), n, r) - t) > 0 ? (i = s) : (e = s);
            while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : D(r(t), e, n));
      }
      let L = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        B = (t) => (e) => 1 - t(1 - e),
        I = R(0.33, 1.53, 0.69, 0.99),
        F = B(I),
        _ = L(F),
        z = (t) =>
          (t *= 2) < 1 ? 0.5 * F(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        H = (t) => 1 - Math.sin(Math.acos(t)),
        N = B(H),
        U = L(H),
        W = (t) => /^0[^.\s]+$/u.test(t);
      function $(t) {
        return "number" == typeof t
          ? 0 === t
          : null === t || "none" === t || "0" === t || W(t);
      }
      let q = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        X = Y("--"),
        Z = Y("var(--"),
        K = (t) => {
          let e = Z(t);
          return !!e && G.test(t.split("/*")[0].trim());
        },
        G =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        Q = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      function J(t, e, i = 1) {
        E(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, r] = (function (t) {
          let e = Q.exec(t);
          if (!e) return [,];
          let [, i, n, r] = e;
          return [`--${null != i ? i : n}`, r];
        })(t);
        if (!n) return;
        let o = window.getComputedStyle(e).getPropertyValue(n);
        if (o) {
          let s = o.trim();
          return q(s) ? parseFloat(s) : s;
        }
        return K(r) ? J(r, e, i + 1) : r;
      }
      let tt = (t, e, i) => (i > e ? e : i < t ? t : i),
        te = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        ti = { ...te, transform: (t) => tt(0, 1, t) },
        tn = { ...te, default: 1 },
        tr = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        to = tr("deg"),
        ts = tr("%"),
        ta = tr("px"),
        tl = tr("vh"),
        tu = tr("vw"),
        tc = {
          ...ts,
          parse: (t) => ts.parse(t) / 100,
          transform: (t) => ts.transform(100 * t),
        },
        th = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        td = (t) => t === te || t === ta,
        tp = (t, e) => parseFloat(t.split(", ")[e]),
        tf =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return tp(r[1], e);
            {
              let o = n.match(/^matrix\((.+)\)$/u);
              return o ? tp(o[1], t) : 0;
            }
          },
        tm = new Set(["x", "y", "z"]),
        tv = d.filter((t) => !tm.has(t)),
        tg = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tf(4, 13),
          y: tf(5, 14),
        };
      (tg.translateX = tg.x), (tg.translateY = tg.y);
      let ty = (t) => (e) => e.test(t),
        tb = [
          te,
          ta,
          ts,
          to,
          tu,
          tl,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tw = (t) => tb.find(ty(t)),
        tx = new Set(),
        tS = !1,
        tP = !1;
      function tT() {
        if (tP) {
          let t = Array.from(tx).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tv.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tP = !1), (tS = !1), tx.forEach((t) => t.complete()), tx.clear();
      }
      function tA() {
        tx.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tP = !0);
        });
      }
      class tE {
        constructor(t, e, i, n, r, o = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = o);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tx.add(this),
                tS || ((tS = !0), k.read(tA), k.resolveKeyframes(tT)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let o = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== o) t[0] = o;
                else if (i && e) {
                  let a = i.readValue(e, s);
                  null != a && (t[0] = a);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === o && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tx.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tx.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tC = (t) => Math.round(1e5 * t) / 1e5,
        tM = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tk =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tj = (t, e) => (i) => {
          var n;
          return Boolean(
            ("string" == typeof i && tk.test(i) && i.startsWith(t)) ||
              (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          );
        },
        tO = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, o, s, a] = n.match(tM);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(o),
            [i]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tV = (t) => tt(0, 255, t),
        tD = { ...te, transform: (t) => Math.round(tV(t)) },
        tR = {
          test: tj("rgb", "red"),
          parse: tO("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tD.transform(t) +
            ", " +
            tD.transform(e) +
            ", " +
            tD.transform(i) +
            ", " +
            tC(ti.transform(n)) +
            ")",
        },
        tL = {
          test: tj("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tR.transform,
        },
        tB = {
          test: tj("hsl", "hue"),
          parse: tO("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            ts.transform(tC(e)) +
            ", " +
            ts.transform(tC(i)) +
            ", " +
            tC(ti.transform(n)) +
            ")",
        },
        tI = {
          test: (t) => tR.test(t) || tL.test(t) || tB.test(t),
          parse: (t) =>
            tR.test(t) ? tR.parse(t) : tB.test(t) ? tB.parse(t) : tL.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tR.transform(t)
              : tB.transform(t),
        },
        tF =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        t_ = "number",
        tz = "color",
        tH =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tN(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          o = 0,
          s = e.replace(
            tH,
            (t) => (
              tI.test(t)
                ? (n.color.push(o), r.push(tz), i.push(tI.parse(t)))
                : t.startsWith("var(")
                ? (n.var.push(o), r.push("var"), i.push(t))
                : (n.number.push(o), r.push(t_), i.push(parseFloat(t))),
              ++o,
              "${}"
            )
          ),
          a = s.split("${}");
        return { values: i, split: a, indexes: n, types: r };
      }
      function tU(t) {
        return tN(t).values;
      }
      function tW(t) {
        let { split: e, types: i } = tN(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let o = 0; o < n; o++)
            if (((r += e[o]), void 0 !== t[o])) {
              let s = i[o];
              s === t_
                ? (r += tC(t[o]))
                : s === tz
                ? (r += tI.transform(t[o]))
                : (r += t[o]);
            }
          return r;
        };
      }
      let t$ = (t) => ("number" == typeof t ? 0 : t),
        tq = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tM)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tF)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: tU,
          createTransformer: tW,
          getAnimatableNone: function (t) {
            let e = tU(t),
              i = tW(t);
            return i(e.map(t$));
          },
        },
        tY = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tX(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tM) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          o = tY.has(e) ? 1 : 0;
        return n !== i && (o *= 100), e + "(" + o + r + ")";
      }
      let tZ = /\b([a-z-]*)\(.*?\)/gu,
        tK = {
          ...tq,
          getAnimatableNone(t) {
            let e = t.match(tZ);
            return e ? e.map(tX).join(" ") : t;
          },
        },
        tG = { ...te, transform: Math.round },
        tQ = {
          borderWidth: ta,
          borderTopWidth: ta,
          borderRightWidth: ta,
          borderBottomWidth: ta,
          borderLeftWidth: ta,
          borderRadius: ta,
          radius: ta,
          borderTopLeftRadius: ta,
          borderTopRightRadius: ta,
          borderBottomRightRadius: ta,
          borderBottomLeftRadius: ta,
          width: ta,
          maxWidth: ta,
          height: ta,
          maxHeight: ta,
          top: ta,
          right: ta,
          bottom: ta,
          left: ta,
          padding: ta,
          paddingTop: ta,
          paddingRight: ta,
          paddingBottom: ta,
          paddingLeft: ta,
          margin: ta,
          marginTop: ta,
          marginRight: ta,
          marginBottom: ta,
          marginLeft: ta,
          backgroundPositionX: ta,
          backgroundPositionY: ta,
          rotate: to,
          rotateX: to,
          rotateY: to,
          rotateZ: to,
          scale: tn,
          scaleX: tn,
          scaleY: tn,
          scaleZ: tn,
          skew: to,
          skewX: to,
          skewY: to,
          distance: ta,
          translateX: ta,
          translateY: ta,
          translateZ: ta,
          x: ta,
          y: ta,
          z: ta,
          perspective: ta,
          transformPerspective: ta,
          opacity: ti,
          originX: tc,
          originY: tc,
          originZ: ta,
          zIndex: tG,
          size: ta,
          fillOpacity: ti,
          strokeOpacity: ti,
          numOctaves: tG,
        },
        tJ = {
          ...tQ,
          color: tI,
          backgroundColor: tI,
          outlineColor: tI,
          fill: tI,
          stroke: tI,
          borderColor: tI,
          borderTopColor: tI,
          borderRightColor: tI,
          borderBottomColor: tI,
          borderLeftColor: tI,
          filter: tK,
          WebkitFilter: tK,
        },
        t0 = (t) => tJ[t];
      function t1(t, e) {
        let i = t0(t);
        return (
          i !== tK && (i = tq),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t2 = new Set(["auto", "none", "0"]);
      class t3 extends tE {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if ("string" == typeof r && K((r = r.trim()))) {
              let o = J(r, e.current);
              void 0 !== o && (t[n] = o),
                n === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length))
            return;
          let [s, a] = t,
            l = tw(s),
            u = tw(a);
          if (l !== u) {
            if (td(l) && td(u))
              for (let c = 0; c < t.length; c++) {
                let h = t[c];
                "string" == typeof h && (t[c] = parseFloat(h));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let n = 0; n < t.length; n++) $(t[n]) && i.push(n);
          i.length &&
            (function (t, e, i) {
              let n = 0,
                r;
              for (; n < t.length && !r; ) {
                let o = t[n];
                "string" == typeof o &&
                  !t2.has(o) &&
                  tN(o).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let s of e) t[s] = t1(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tg[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let o = n.length - 1,
            s = n[o];
          (n[o] = tg[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t5(t) {
        return "function" == typeof t;
      }
      let t9;
      function t6() {
        t9 = void 0;
      }
      let t4 = {
          now: () => (
            void 0 === t9 &&
              t4.set(
                O.isProcessing || S.useManualTiming
                  ? O.timestamp
                  : performance.now()
              ),
            t9
          ),
          set(t) {
            (t9 = t), queueMicrotask(t6);
          },
        },
        t7 = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tq.test(t) || "0" === t) &&
              !t.startsWith("url("))
          );
      class t8 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: o = "loop",
          ...s
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t4.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: o,
              ...s,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tA(), tT()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t4.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: o,
            onComplete: s,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                s = t7(r, e),
                a = t7(o, e);
              return (
                E(
                  s === a,
                  `You are trying to animate ${e} from "${r}" to "${o}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${o} via the \`style\` property.`
                ),
                !!s &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || t5(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (P.current || !o) {
              null == a || a(A(t, this.options, e)),
                null == s || s(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let et = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        ee = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let o = 0; o < r; o++) n += t(et(0, r - 1, o)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function ei(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      function en(t, e, i) {
        let n = Math.max(e - 5, 0);
        return ei(i - t(n), e - n);
      }
      let er = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function eo(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function es(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let ea = ["duration", "bounce"],
        el = ["stiffness", "damping", "mass"];
      function eu(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ec(t = er.visualDuration, e = er.bounce) {
        let i =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: n, restDelta: r } = i,
          o = i.keyframes[0],
          s = i.keyframes[i.keyframes.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            duration: h,
            velocity: d,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: er.velocity,
              stiffness: er.stiffness,
              damping: er.damping,
              mass: er.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eu(t, el) && eu(t, ea)) {
              if (t.visualDuration) {
                let i = t.visualDuration,
                  n = (2 * Math.PI) / (1.2 * i),
                  r = n * n,
                  o = 2 * tt(0.05, 1, 1 - t.bounce) * Math.sqrt(r);
                e = { ...e, mass: er.mass, stiffness: r, damping: o };
              } else {
                let s = (function ({
                  duration: t = er.duration,
                  bounce: e = er.bounce,
                  velocity: i = er.velocity,
                  mass: n = er.mass,
                }) {
                  let r, o;
                  E(
                    t <= f(er.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let s = 1 - e;
                  (s = tt(er.minDamping, er.maxDamping, s)),
                    (t = tt(er.minDuration, er.maxDuration, m(t))),
                    s < 1
                      ? ((r = (e) => {
                          let n = e * s,
                            r = n * t,
                            o = eo(e, s);
                          return 0.001 - ((n - i) / o) * Math.exp(-r);
                        }),
                        (o = (e) => {
                          let n = e * s,
                            o = n * t,
                            a = Math.pow(s, 2) * Math.pow(e, 2) * t,
                            l = eo(Math.pow(e, 2), s),
                            u = -r(e) + 0.001 > 0 ? -1 : 1;
                          return (u * ((o * i + i - a) * Math.exp(-o))) / l;
                        }))
                      : ((r = (e) => {
                          let n = Math.exp(-e * t),
                            r = (e - i) * t + 1;
                          return -0.001 + n * r;
                        }),
                        (o = (e) => {
                          let n = Math.exp(-e * t),
                            r = (i - e) * (t * t);
                          return n * r;
                        }));
                  let a = 5 / t,
                    l = (function (t, e, i) {
                      let n = i;
                      for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                      return n;
                    })(r, o, a);
                  if (((t = f(t)), isNaN(l)))
                    return {
                      stiffness: er.stiffness,
                      damping: er.damping,
                      duration: t,
                    };
                  {
                    let u = Math.pow(l, 2) * n;
                    return {
                      stiffness: u,
                      damping: 2 * s * Math.sqrt(n * u),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...s, mass: er.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...i, velocity: -m(i.velocity || 0) }),
          v = d || 0,
          g = u / (2 * Math.sqrt(l * c)),
          y = s - o,
          b = m(Math.sqrt(l / c)),
          w = 5 > Math.abs(y);
        n || (n = w ? er.restSpeed.granular : er.restSpeed.default),
          r || (r = w ? er.restDelta.granular : er.restDelta.default);
        let x;
        if (g < 1) {
          let S = eo(b, g);
          x = (t) =>
            s -
            Math.exp(-g * b * t) *
              (((v + g * b * y) / S) * Math.sin(S * t) + y * Math.cos(S * t));
        } else if (1 === g)
          x = (t) => s - Math.exp(-b * t) * (y + (v + b * y) * t);
        else {
          let P = b * Math.sqrt(g * g - 1);
          x = (t) => {
            let e = Math.min(P * t, 300);
            return (
              s -
              (Math.exp(-g * b * t) *
                ((v + g * b * y) * Math.sinh(e) + P * y * Math.cosh(e))) /
                P
            );
          };
        }
        let T = {
          calculatedDuration: (p && h) || null,
          next(t) {
            let e = x(t);
            if (p) a.done = t >= h;
            else {
              let i = 0;
              g < 1 && (i = 0 === t ? f(v) : en(x, t, e));
              let o = Math.abs(i) <= n,
                l = Math.abs(s - e) <= r;
              a.done = o && l;
            }
            return (a.value = a.done ? s : e), a;
          },
          toString() {
            let t = Math.min(es(T), 2e4),
              e = ee((e) => T.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return T;
      }
      function eh({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let h = t[0],
          d = { done: !1, value: h },
          p = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          f = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          m = i * e,
          v = h + m,
          g = void 0 === s ? v : s(v);
        g !== v && (m = g - h);
        let y = (t) => -m * Math.exp(-t / n),
          b = (t) => g + y(t),
          w = (t) => {
            let e = y(t),
              i = b(t);
            (d.done = Math.abs(e) <= u), (d.value = d.done ? g : i);
          },
          x,
          S,
          P = (t) => {
            p(d.value) &&
              ((x = t),
              (S = ec({
                keyframes: [d.value, f(d.value)],
                velocity: en(b, t, d.value),
                damping: r,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next(t) {
              let e = !1;
              return (S || void 0 !== x || ((e = !0), w(t), P(t)),
              void 0 !== x && t >= x)
                ? S.next(t - x)
                : (e || w(t), d);
            },
          }
        );
      }
      let ed = R(0.42, 0, 1, 1),
        ep = R(0, 0, 0.58, 1),
        ef = R(0.42, 0, 0.58, 1),
        em = (t) => Array.isArray(t) && "number" != typeof t[0],
        ev = (t) => Array.isArray(t) && "number" == typeof t[0],
        eg = {
          linear: E,
          easeIn: ed,
          easeInOut: ef,
          easeOut: ep,
          circIn: H,
          circInOut: U,
          circOut: N,
          backIn: F,
          backInOut: _,
          backOut: I,
          anticipate: z,
        },
        ey = (t) => {
          if (ev(t)) {
            E(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return R(e, i, n, r);
          }
          return "string" == typeof t
            ? (E(void 0 !== eg[t], `Invalid easing type '${t}'`), eg[t])
            : t;
        },
        eb = (t, e) => (i) => e(t(i)),
        ew = (...t) => t.reduce(eb),
        ex = (t, e, i) => t + (e - t) * i;
      function eS(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function eP(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let eT = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        eA = [tL, tR, tB],
        eE = (t) => eA.find((e) => e.test(t));
      function eC(t) {
        let e = eE(t);
        if (
          (E(
            Boolean(e),
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !Boolean(e))
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tB &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                o = 0,
                s = 0;
              if ((e /= 100)) {
                let a = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - a;
                (r = eS(l, a, t + 1 / 3)),
                  (o = eS(l, a, t)),
                  (s = eS(l, a, t - 1 / 3));
              } else r = o = s = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eM = (t, e) => {
          let i = eC(t),
            n = eC(e);
          if (!i || !n) return eP(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = eT(i.red, n.red, t)),
            (r.green = eT(i.green, n.green, t)),
            (r.blue = eT(i.blue, n.blue, t)),
            (r.alpha = ex(i.alpha, n.alpha, t)),
            tR.transform(r)
          );
        },
        ek = new Set(["none", "hidden"]);
      function ej(t, e) {
        return (i) => ex(t, e, i);
      }
      function eO(t) {
        return "number" == typeof t
          ? ej
          : "string" == typeof t
          ? K(t)
            ? eP
            : tI.test(t)
            ? eM
            : eR
          : Array.isArray(t)
          ? eV
          : "object" == typeof t
          ? tI.test(t)
            ? eM
            : eD
          : eP;
      }
      function eV(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => eO(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function eD(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = eO(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let eR = (t, e) => {
        let i = tq.createTransformer(e),
          n = tN(t),
          r = tN(e),
          o =
            n.indexes.var.length === r.indexes.var.length &&
            n.indexes.color.length === r.indexes.color.length &&
            n.indexes.number.length >= r.indexes.number.length;
        if (!o)
          return (
            E(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eP(t, e)
          );
        if (
          (ek.has(t) && !r.values.length) ||
          (ek.has(e) && !n.values.length)
        ) {
          var s, a;
          return ek.has(t) ? (i) => (i <= 0 ? t : e) : (i) => (i >= 1 ? e : t);
        }
        return ew(
          eV(
            (function (t, e) {
              var i;
              let n = [],
                r = { color: 0, var: 0, number: 0 };
              for (let o = 0; o < e.values.length; o++) {
                let s = e.types[o],
                  a = t.indexes[s][r[s]],
                  l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                (n[o] = l), r[s]++;
              }
              return n;
            })(n, r),
            r.values
          ),
          i
        );
      };
      function eL(t, e, i) {
        if (
          "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
        )
          return ex(t, e, i);
        let n = eO(t);
        return n(t, e);
      }
      function eB({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        var r, o, s, a;
        let l = em(n) ? n.map(ey) : ey(n),
          u = { done: !1, value: e[0] },
          c = (r =
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = et(0, e, n);
                        t.push(ex(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)).map((e) => e * t),
          h = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let o = t.length;
            if (
              (E(
                o === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === o)
            )
              return () => e[0];
            if (2 === o && t[0] === t[1]) return () => e[1];
            t[0] > t[o - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let s = (function (t, e, i) {
                let n = [],
                  r = i || eL,
                  o = t.length - 1;
                for (let s = 0; s < o; s++) {
                  let a = r(t[s], t[s + 1]);
                  if (e) {
                    let l = Array.isArray(e) ? e[s] || E : e;
                    a = ew(l, a);
                  }
                  n.push(a);
                }
                return n;
              })(e, n, r),
              a = s.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = et(t[i], t[i + 1], e);
                return s[i](n);
              };
            return i ? (e) => l(tt(t[0], t[o - 1], e)) : l;
          })(c, e, {
            ease: Array.isArray(l)
              ? l
              : e.map(() => l || ef).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((u.value = h(e)), (u.done = e >= t), u),
        };
      }
      let eI = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => k.update(e, !0),
            stop: () => j(e),
            now: () => (O.isProcessing ? O.timestamp : t4.now()),
          };
        },
        eF = { decay: eh, inertia: eh, tween: eB, keyframes: eB, spring: ec },
        e_ = (t) => t / 100;
      class ez extends t8 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            o = (null == n ? void 0 : n.KeyframeResolver) || tE,
            s = (t, e) => this.onKeyframesResolved(t, e);
          (this.resolver = new o(r, s, e, i, n)),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let {
              type: e = "keyframes",
              repeat: i = 0,
              repeatDelay: n = 0,
              repeatType: r,
              velocity: o = 0,
            } = this.options,
            s = t5(e) ? e : eF[e] || eB,
            a,
            l;
          s !== eB &&
            "number" != typeof t[0] &&
            ((a = ew(e_, eL(t[0], t[1]))), (t = [0, 100]));
          let u = s({ ...this.options, keyframes: t });
          "mirror" === r &&
            (l = s({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -o,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = es(u));
          let { calculatedDuration: c } = u,
            h = c + n;
          return {
            generator: u,
            mirroredGenerator: l,
            mapPercentToKeyframes: a,
            calculatedDuration: c,
            resolvedDuration: h,
            totalDuration: h * (i + 1) - n,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: n } = this.options;
            return { done: !0, value: n[n.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: o,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return o.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: f,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - c / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > c;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = c);
          let b = this.currentTime,
            w = o;
          if (p) {
            let x = Math.min(this.currentTime, c) / h,
              S = Math.floor(x),
              P = x % 1;
            !P && x >= 1 && (P = 1), 1 === P && S--, (S = Math.min(S, p + 1));
            let T = Boolean(S % 2);
            T &&
              ("reverse" === f
                ? ((P = 1 - P), m && (P -= m / h))
                : "mirror" === f && (w = s)),
              (b = tt(0, 1, P) * h);
          }
          let E = y ? { done: !1, value: l[0] } : w.next(b);
          a && (E.value = a(E.value));
          let { done: C } = E;
          y ||
            null === u ||
            (C =
              this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
          let M =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && C));
          return (
            M && void 0 !== r && (E.value = A(l, this.options, r)),
            v && v(E.value),
            M && this.finish(),
            E
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? m(t.calculatedDuration) : 0;
        }
        get time() {
          return m(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = m(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = eI, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eH = new Set(["opacity", "clipPath", "filter", "transform"]);
      function eN(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eU = { linearEasing: void 0 },
        eW = (function (t, e) {
          let i = eN(t);
          return () => {
            var t;
            return null !== (t = eU[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        e$ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: e$([0, 0.65, 0.55, 1]),
          circOut: e$([0.55, 0, 1, 0.45]),
          backIn: e$([0.31, 0.01, 0.66, -0.59]),
          backOut: e$([0.33, 1.53, 0.69, 0.99]),
        };
      function eY(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eX = eN(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        eZ = { anticipate: z, backInOut: _, circInOut: U };
      class eK extends t8 {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new t3(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n, r;
          let {
            duration: o = 300,
            times: s,
            ease: a,
            type: l,
            motionValue: u,
            name: c,
            startTime: h,
          } = this.options;
          if (!(null === (i = u.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof a && eW() && (n = a) in eZ && (a = eZ[a]),
            t5((r = this.options).type) ||
              "spring" === r.type ||
              !(function t(e) {
                return Boolean(
                  ("function" == typeof e && eW()) ||
                    !e ||
                    ("string" == typeof e && (e in eq || eW())) ||
                    ev(e) ||
                    (Array.isArray(e) && e.every(t))
                );
              })(r.ease))
          ) {
            let {
                onComplete: d,
                onUpdate: p,
                motionValue: f,
                element: m,
                ...v
              } = this.options,
              g = (function (t, e) {
                let i = new ez({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  o = 0;
                for (; !n.done && o < 2e4; )
                  r.push((n = i.sample(o)).value), (o += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: o - 10,
                  ease: "linear",
                };
              })(t, v);
            1 === (t = g.keyframes).length && (t[1] = t[0]),
              (o = g.duration),
              (s = g.times),
              (a = g.ease),
              (l = "keyframes");
          }
          let y = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: o = 0,
              repeatType: s = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let c = (function t(e, i) {
              if (e)
                return "function" == typeof e && eW()
                  ? ee(e, i)
                  : ev(e)
                  ? e$(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || eq.easeOut)
                  : eq[e];
            })(a, r);
            return (
              Array.isArray(c) && (u.easing = c),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === s ? "alternate" : "normal",
              })
            );
          })(u.owner.current, c, t, {
            ...this.options,
            duration: o,
            times: s,
            ease: a,
          });
          return (
            (y.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (eY(y, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (y.onfinish = () => {
                  let { onComplete: i } = this.options;
                  u.set(A(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: y,
              duration: o,
              times: s,
              type: l,
              ease: a,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return m(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return m(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return E;
            let { animation: i } = e;
            eY(i, t);
          } else this.pendingTimeline = t;
          return E;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: o,
            times: s,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: a,
                onUpdate: l,
                onComplete: u,
                element: c,
                ...h
              } = this.options,
              d = new ez({
                ...h,
                keyframes: i,
                duration: n,
                type: r,
                ease: o,
                times: s,
                isGenerator: !0,
              }),
              p = f(this.time);
            a.setWithVelocity(d.sample(p - 10).value, d.sample(p).value, 10);
          }
          let { onStop: m } = this.options;
          m && m(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: o,
            type: s,
          } = t;
          return (
            eX() &&
            i &&
            eH.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== o &&
            "inertia" !== s
          );
        }
      }
      let eG = eN(() => void 0 !== window.ScrollTimeline);
      class eQ {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            eG() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eJ =
          (t, e, i, n = {}, r, o) =>
          (s) => {
            let a = x(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= f(l);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate(t) {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete() {
                s(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: o ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(a) && (c = { ...c, ...w(t, c) }),
              c.duration && (c.duration = f(c.duration)),
              c.repeatDelay && (c.repeatDelay = f(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let h = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (h = !0)),
              (P.current || S.skipAnimations) &&
                ((h = !0), (c.duration = 0), (c.delay = 0)),
              h && !o && void 0 !== e.get())
            ) {
              let d = A(c.keyframes, a);
              if (void 0 !== d)
                return (
                  k.update(() => {
                    c.onUpdate(d), c.onComplete();
                  }),
                  new eQ([])
                );
            }
            return !o && eK.supports(c) ? new eK(c) : new ez(c);
          },
        e0 = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        e1 = (t) => (r(t) ? t[t.length - 1] || 0 : t);
      function e2(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function e3(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class e5 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return e2(this.subscriptions, t), () => e3(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let o = this.subscriptions[r];
                o && o(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let e9 = (t) => !isNaN(parseFloat(t)),
        e6 = { current: void 0 };
      class e4 {
        constructor(t, e = {}) {
          (this.version = "11.15.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = t4.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t4.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = e9(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new e5());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  k.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return e6.current && e6.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = t4.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return ei(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function e7(t, e) {
        return new e4(t, e);
      }
      function e8(t, e, i) {
        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, e7(i));
      }
      let it = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        ie = "data-" + it("framerAppearId");
      function ii(t) {
        return t.props[ie];
      }
      let ir = (t) => Boolean(t && t.getVelocity);
      function io(t, e) {
        var i;
        let n = t.getValue("willChange");
        if (Boolean(ir(n) && n.add)) return n.add(e);
      }
      function is({ protectedKeys: t, needsAnimating: e }, i) {
        let n = t.hasOwnProperty(i) && !0 !== e[i];
        return (e[i] = !1), n;
      }
      function ia(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var o;
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (s = n);
        let c = [],
          h = r && t.animationState && t.animationState.getState()[r];
        for (let d in l) {
          let f = t.getValue(
              d,
              null !== (o = t.latestValues[d]) && void 0 !== o ? o : null
            ),
            m = l[d];
          if (void 0 === m || (h && is(h, d))) continue;
          let v = { delay: i, ...x(s || {}, d) },
            g = !1;
          if (window.MotionHandoffAnimation) {
            let y = ii(t);
            if (y) {
              let b = window.MotionHandoffAnimation(y, d, k);
              null !== b && ((v.startTime = b), (g = !0));
            }
          }
          io(t, d),
            f.start(
              eJ(
                d,
                f,
                m,
                t.shouldReduceMotion && p.has(d) ? { type: !1 } : v,
                t,
                g
              )
            );
          let w = f.animation;
          w && c.push(w);
        }
        return (
          a &&
            Promise.all(c).then(() => {
              k.update(() => {
                a &&
                  (function (t, e) {
                    let i = u(t, e),
                      {
                        transitionEnd: n = {},
                        transition: r = {},
                        ...o
                      } = i || {};
                    for (let s in (o = { ...o, ...n })) {
                      let a = e1(o[s]);
                      e8(t, s, a);
                    }
                  })(t, a);
              });
            }),
          c
        );
      }
      function il(t, e, i = {}) {
        var n;
        let r = u(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: o = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (o = i.transitionOverride);
        let s = r ? () => Promise.all(ia(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, i = 0, n = 0, r = 1, o) {
                    let s = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(iu)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            s.push(
                              il(t, e, { ...o, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(t, e, r + n, s, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = o;
        if (!l) return Promise.all([s(), a(i.delay)]);
        {
          let [c, h] = "beforeChildren" === l ? [s, a] : [a, s];
          return c().then(() => h());
        }
      }
      function iu(t, e) {
        return t.sortNodePosition(e);
      }
      let ic = h.length,
        ih = [...c].reverse(),
        id = c.length;
      function ip(t, e) {
        return "string" == typeof e ? e !== t : !!Array.isArray(e) && !o(e, t);
      }
      function im(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function iv() {
        return {
          animate: im(!0),
          whileInView: im(),
          whileHover: im(),
          whileTap: im(),
          whileDrag: im(),
          whileFocus: im(),
          exit: im(),
        };
      }
      class ig {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      let iy = 0,
        ib = { x: !1, y: !1 };
      function iw() {
        return ib.x || ib.y;
      }
      function ix(t, e) {
        let i = (function (t, e, i) {
            var n;
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let r = document;
              e && (r = e.current);
              let o =
                null !== (n = null == i ? void 0 : i[t]) && void 0 !== n
                  ? n
                  : r.querySelectorAll(t);
              return o ? Array.from(o) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController(),
          r = { passive: !0, ...e, signal: n.signal },
          o = () => n.abort();
        return [i, r, o];
      }
      function iS(t) {
        return (e) => {
          "touch" === e.pointerType || iw() || t(e);
        };
      }
      let iP = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        iT = new WeakSet();
      function iA(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function iE(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let iC = (t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let n = iA(() => {
            if (iT.has(i)) return;
            iE(i, "down");
            let t = iA(() => {
                iE(i, "up");
              }),
              n = () => iE(i, "cancel");
            i.addEventListener("keyup", t, e), i.addEventListener("blur", n, e);
          });
          i.addEventListener("keydown", n, e),
            i.addEventListener(
              "blur",
              () => i.removeEventListener("keydown", n),
              e
            );
        },
        iM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        ik = (t, e) => !!e && (t === e || ik(t, e.parentElement));
      function ij(t) {
        return iP(t) && !iw();
      }
      function iO(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iV = (t) => (e) => iP(e) && t(e, iO(e));
      function iD(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function iR(t, e, i, n) {
        return iD(t, e, iV(i), n);
      }
      let iL = (t, e) => Math.abs(t - e);
      class iB {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = i_(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = iL(t.x, e.x),
                      n = iL(t.y, e.y);
                    return Math.sqrt(i ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = O;
              this.history.push({ ...n, timestamp: r });
              let { onStart: o, onMove: s } = this.handlers;
              e ||
                (o && o(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                s && s(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iI(e, this.transformPagePoint)),
                k.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let o = i_(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iI(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, o), n && n(t, o);
            }),
            !iP(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let o = iO(t),
            s = iI(o, this.transformPagePoint),
            { point: a } = s,
            { timestamp: l } = O;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = e;
          u && u(t, i_(s, this.history)),
            (this.removeListeners = ew(
              iR(this.contextWindow, "pointermove", this.handlePointerMove),
              iR(this.contextWindow, "pointerup", this.handlePointerUp),
              iR(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), j(this.updatePoint);
        }
      }
      function iI(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iF(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function i_({ point: t }, e) {
        var i;
        return {
          point: t,
          delta: iF(t, iz(e)),
          offset: iF(t, ((i = e), i[0])),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iz(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > f(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let o = m(r.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (r.x - n.x) / o, y: (r.y - n.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(e, 0.1),
        };
      }
      function iz(t) {
        return t[t.length - 1];
      }
      function iH(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iN(t) {
        return t.max - t.min;
      }
      function iU(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = ex(e.min, e.max, t.origin)),
          (t.scale = iN(i) / iN(e)),
          (t.translate = ex(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iW(t, e, i, n) {
        iU(t.x, e.x, i.x, n ? n.originX : void 0),
          iU(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function i$(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iN(e));
      }
      function iq(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iN(e));
      }
      function iY(t, e, i) {
        iq(t.x, e.x, i.x), iq(t.y, e.y, i.y);
      }
      function iX(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iZ(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function iK(t, e, i) {
        return { min: iG(t, e), max: iG(t, i) };
      }
      function iG(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iQ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iJ = () => ({ x: iQ(), y: iQ() }),
        i0 = () => ({ min: 0, max: 0 }),
        i1 = () => ({ x: i0(), y: i0() });
      function i2(t) {
        return [t("x"), t("y")];
      }
      function i3({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function i5(t) {
        return void 0 === t || 1 === t;
      }
      function i9({ scale: t, scaleX: e, scaleY: i }) {
        return !i5(t) || !i5(e) || !i5(i);
      }
      function i6(t) {
        return (
          i9(t) ||
          i4(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function i4(t) {
        return i7(t.x) || i7(t.y);
      }
      function i7(t) {
        return t && "0%" !== t;
      }
      function i8(t, e, i, n, r) {
        var o, s, a, l, u, c;
        return (
          void 0 !== r && ((o = t), (s = r), (t = (a = n) + s * (o - a))),
          n + i * ((l = t) - n) + e
        );
      }
      function nt(t, e = 0, i = 1, n, r) {
        (t.min = i8(t.min, e, i, n, r)), (t.max = i8(t.max, e, i, n, r));
      }
      function ne(t, { x: e, y: i }) {
        nt(t.x, e.translate, e.scale, e.originPoint),
          nt(t.y, i.translate, i.scale, i.originPoint);
      }
      function ni(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function nn(t, e, i, n, r = 0.5) {
        let o = ex(t.min, t.max, r);
        nt(t, e, i, o, n);
      }
      function nr(t, e) {
        nn(t.x, e.x, e.scaleX, e.scale, e.originX),
          nn(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function no(t, e) {
        return i3(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ns = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        na = new WeakMap();
      class nl {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = i1()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let n = (t) => {
              let { dragSnapToOrigin: i } = this.getProps();
              i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(iO(t).point);
            },
            r = (t, e) => {
              var i;
              let {
                drag: n,
                dragPropagation: r,
                onDragStart: o,
              } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock =
                  ((i = n),
                  "x" === i || "y" === i
                    ? ib[i]
                      ? null
                      : ((ib[i] = !0),
                        () => {
                          ib[i] = !1;
                        })
                    : ib.x || ib.y
                    ? null
                    : ((ib.x = ib.y = !0),
                      () => {
                        ib.x = ib.y = !1;
                      }))),
                !this.openDragLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                i2((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (ts.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let n = i.layout.layoutBox[t];
                      if (n) {
                        let r = iN(n);
                        e = r * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                o && k.postRender(() => o(t, e)),
                io(this.visualElement, "transform");
              let { animationState: s } = this.visualElement;
              s && s.setActive("whileDrag", !0);
            },
            o = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: r,
                onDrag: o,
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: s } = e;
              if (n && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(s)),
                  null !== this.currentDirection &&
                    r &&
                    r(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, s),
                this.updateAxis("y", e.point, s),
                this.visualElement.render(),
                o && o(t, e);
            },
            s = (t, e) => this.stop(t, e),
            a = () =>
              i2((t) => {
                var e;
                return (
                  "paused" === this.getAnimationState(t) &&
                  (null === (e = this.getAxisMotionValue(t).animation) ||
                  void 0 === e
                    ? void 0
                    : e.play())
                );
              }),
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new iB(
            t,
            {
              onSessionStart: n,
              onStart: r,
              onMove: o,
              onSessionEnd: s,
              resumeAnimation: a,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              contextWindow: ns(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && k.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nu(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            o = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (o = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? ex(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? ex(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(o, this.constraints[t], this.elastic[t])),
            r.set(o);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && iH(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: iX(t.x, i, r), y: iX(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iK(t, "left", "right"), y: iK(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              i2((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t, e;
          let { dragConstraints: i, onMeasureDragConstraints: n } =
            this.getProps();
          if (!i || !iH(i)) return !1;
          let r = i.current;
          E(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: o } = this.visualElement;
          if (!o || !o.layout) return !1;
          let s = (function (t, e, i) {
              let n = no(t, i),
                { scroll: r } = e;
              return r && (ni(n.x, r.offset.x), ni(n.y, r.offset.y)), n;
            })(r, o.root, this.visualElement.getTransformPagePoint()),
            a = { x: iZ((t = o.layout.layoutBox).x, s.x), y: iZ(t.y, s.y) };
          if (n) {
            let l = n(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a)
            );
            (this.hasMutatedConstraints = !!l), l && (a = i3(l));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: o,
              onDragTransitionEnd: s,
            } = this.getProps(),
            a = this.constraints || {},
            l = i2((s) => {
              if (!nu(s, e, this.currentDirection)) return;
              let l = (a && a[s]) || {};
              o && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[s] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(s, u);
            });
          return Promise.all(l).then(s);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            io(this.visualElement, t),
            i.start(eJ(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          i2((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          i2((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps(),
            n = i[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          i2((e) => {
            let { drag: i } = this.getProps();
            if (!nu(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: o, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - ex(o, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iH(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          i2((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iN(t),
                  r = iN(e);
                return (
                  r > n
                    ? (i = et(e.min, e.max - n, t.min))
                    : n > r && (i = et(t.min, t.max - r, e.min)),
                  tt(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            i2((e) => {
              if (!nu(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: o } = this.constraints[e];
              i.set(ex(r, o, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          na.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = iR(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              iH(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            k.read(i);
          let o = iD(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (i2((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), e(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: o = 0.35,
              dragMomentum: s = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: s,
          };
        }
      }
      function nu(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let nc = (t) => (e, i) => {
        t && k.postRender(() => t(e, i));
      };
      var nh,
        nd,
        np,
        nf = i(5893),
        nm = i(7294);
      let nv = (0, nm.createContext)(null),
        ng = (0, nm.createContext)({}),
        ny = (0, nm.createContext)({}),
        nb = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nw(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let nx = {
          correct(t, e) {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!ta.test(t)) return t;
              t = parseFloat(t);
            }
            let i = nw(t, e.target.x),
              n = nw(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        nS = {},
        { schedule: nP, cancel: nT } = M(queueMicrotask, !1);
      class nA extends nm.Component {
        componentDidMount() {
          var t;
          let {
              visualElement: e,
              layoutGroup: i,
              switchLayoutGroup: n,
              layoutId: r,
            } = this.props,
            { projection: o } = e;
          Object.assign(nS, nC),
            o &&
              (i.group && i.group.add(o),
              n && n.register && r && n.register(o),
              o.root.didUpdate(),
              o.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              o.setOptions({
                ...o.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nb.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            o = i.projection;
          return (
            o &&
              ((o.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? o.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? o.promote()
                  : o.relegate() ||
                    k.postRender(() => {
                      let t = o.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            nP.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nE(t) {
        let [e, i] = (function () {
            let t = (0, nm.useContext)(nv);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, nm.useId)();
            (0, nm.useEffect)(() => n(r), []);
            let o = (0, nm.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, o] : [!0];
          })(),
          n = (0, nm.useContext)(ng);
        return (0, nf.jsx)(nA, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, nm.useContext)(ny),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nC = {
          borderRadius: {
            ...nx,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: nx,
          borderTopRightRadius: nx,
          borderBottomLeftRadius: nx,
          borderBottomRightRadius: nx,
          boxShadow: {
            correct(t, { treeScale: e, projectionDelta: i }) {
              let n = tq.parse(t);
              if (n.length > 5) return t;
              let r = tq.createTransformer(t),
                o = "number" != typeof n[0] ? 1 : 0,
                s = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + o] /= s), (n[1 + o] /= a);
              let l = ex(s, a, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= l),
                "number" == typeof n[3 + o] && (n[3 + o] /= l),
                r(n)
              );
            },
          },
        },
        nM = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nk = nM.length,
        nj = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nO = (t) => "number" == typeof t || ta.test(t);
      function nV(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nD = nL(0, 0.5, N),
        nR = nL(0.5, 0.95, E);
      function nL(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(et(t, e, n)));
      }
      function nB(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nI(t, e) {
        nB(t.x, e.x), nB(t.y, e.y);
      }
      function nF(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function n_(t, e, i, n, r) {
        var o, s, a, l, u, c;
        return (
          (t -= e),
          (o = t),
          (t = n + (s = 1 / i) * (o - n)),
          void 0 !== r && ((l = t), (u = 1 / r), (t = (c = n) + u * (l - c))),
          t
        );
      }
      function nz(t, e, [i, n, r], o, s) {
        !(function (t, e = 0, i = 1, n = 0.5, r, o = t, s = t) {
          if (ts.test(e)) {
            e = parseFloat(e);
            let a = ex(s.min, s.max, e / 100);
            e = a - s.min;
          }
          if ("number" != typeof e) return;
          let l = ex(o.min, o.max, n);
          t === o && (l -= e),
            (t.min = n_(t.min, e, i, l, r)),
            (t.max = n_(t.max, e, i, l, r));
        })(t, e[i], e[n], e[r], e.scale, o, s);
      }
      let nH = ["x", "scaleX", "originX"],
        nN = ["y", "scaleY", "originY"];
      function nU(t, e, i, n) {
        nz(t.x, e, nH, i ? i.x : void 0, n ? n.x : void 0),
          nz(t.y, e, nN, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nW(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function n$(t) {
        return nW(t.x) && nW(t.y);
      }
      function nq(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nY(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nX(t, e) {
        return nY(t.x, e.x) && nY(t.y, e.y);
      }
      function nZ(t) {
        return iN(t.x) / iN(t.y);
      }
      function nK(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nG {
        constructor() {
          this.members = [];
        }
        add(t) {
          e2(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (e3(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(t) {
          let e = this.members.findIndex((e) => t === e);
          if (0 === e) return !1;
          let i;
          for (let n = e; n >= 0; n--) {
            let r = this.members[n];
            if (!1 !== r.isPresent) {
              i = r;
              break;
            }
          }
          return !!i && (this.promote(i), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nQ = (t, e) => t.depth - e.depth;
      class nJ {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          e2(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          e3(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nQ),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function n0(t) {
        let e = ir(t) ? t.get() : t;
        return e0(e) ? e.toValue() : e;
      }
      let n1 = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        n2 = "undefined" != typeof window && void 0 !== window.MotionDebug,
        n3 = ["", "X", "Y", "Z"],
        n5 = { visibility: "hidden" },
        n9 = 0;
      function n6(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function n4({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = n9++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  n2 &&
                    (n1.totalNodes =
                      n1.resolvedTargetDeltas =
                      n1.recalculatedProjection =
                        0),
                  this.nodes.forEach(rt),
                  this.nodes.forEach(ra),
                  this.nodes.forEach(rl),
                  this.nodes.forEach(re),
                  n2 && window.MotionDebug.record(n1);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let n = 0; n < this.path.length; n++)
              this.path[n].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nJ());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new e5()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            var n;
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: o, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (o || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let a,
                l = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  a && a(),
                  (a = (function (t, e) {
                    let i = t4.now(),
                      n = ({ timestamp: r }) => {
                        let o = r - i;
                        o >= e && (j(n), t(o - e));
                      };
                    return k.read(n, !0), () => j(n);
                  })(l, 250)),
                  nb.hasAnimatedSinceResize &&
                    ((nb.hasAnimatedSinceResize = !1), this.nodes.forEach(rs));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || o) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        rf,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nX(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let c = { ...x(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((c.delay = 0), (c.type = !1)),
                        this.startAnimation(c);
                    } else
                      e || rs(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              j(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(ru),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = ii(i);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: r, layoutId: o } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      k,
                      !(r || o)
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              (i.shouldResetTransform = !0),
                i.updateScroll("snapshot"),
                i.options.layoutRoot && i.willUpdate(!1);
            }
            let { layoutId: n, layout: r } = this.options;
            if (void 0 === n && !r) return;
            let o = this.getTransformTemplate();
            (this.prevTransformTemplateValue = o
              ? o(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rn);
              return;
            }
            this.isUpdating || this.nodes.forEach(rr),
              (this.isUpdating = !1),
              this.nodes.forEach(ro),
              this.nodes.forEach(n7),
              this.nodes.forEach(n8),
              this.clearAllSnapshots();
            let e = t4.now();
            (O.delta = tt(0, 1e3 / 60, e - O.timestamp)),
              (O.timestamp = e),
              (O.isProcessing = !0),
              V.update.process(O),
              V.preRender.process(O),
              V.render.process(O),
              (O.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), nP.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(ri), this.sharedNodes.forEach(rc);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              k.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            k.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let i = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = i1()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: n } = this.options;
            n &&
              n.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                i ? i.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let r = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: r,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : r,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !n$(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            t &&
              (e || i6(this.latestValues) || o) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rg((e = n).x),
              rg(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return i1();
            let i = e.measureViewportBox(),
              n =
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(rb);
            if (!n) {
              let { scroll: r } = this.root;
              r && (ni(i.x, r.offset.x), ni(i.y, r.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = i1();
            if (
              (nI(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n],
                { scroll: o, options: s } = r;
              r !== this.root &&
                o &&
                s.layoutScroll &&
                (o.wasRoot && nI(i, t),
                ni(i.x, o.offset.x),
                ni(i.y, o.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = i1();
            nI(i, t);
            for (let n = 0; n < this.path.length; n++) {
              let r = this.path[n];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                nr(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                i6(r.latestValues) && nr(i, r.latestValues);
            }
            return i6(this.latestValues) && nr(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = i1();
            nI(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i];
              if (!n.instance || !i6(n.latestValues)) continue;
              i9(n.latestValues) && n.updateSnapshot();
              let r = i1(),
                o = n.measurePageBox();
              nI(r, o),
                nU(
                  e,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  r
                );
            }
            return i6(this.latestValues) && nU(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== O.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = Boolean(this.resumingFrom) || this !== o,
              a = !(
                t ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = O.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let c = this.getClosestProjectingParent();
                c && c.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = c),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = i1()),
                    (this.relativeTargetOrigin = i1()),
                    iY(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      c.layout.layoutBox
                    ),
                    nI(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = i1()), (this.targetWithTransforms = i1())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      i$(i.x, n.x, r.x),
                      i$(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nI(this.target, this.layout.layoutBox),
                      ne(this.target, this.targetDelta))
                    : nI(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let h = this.getClosestProjectingParent();
                  h &&
                  Boolean(h.resumingFrom) === Boolean(this.resumingFrom) &&
                  !h.options.layoutScroll &&
                  h.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = h),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = i1()),
                      (this.relativeTargetOrigin = i1()),
                      iY(this.relativeTargetOrigin, this.target, h.target),
                      nI(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                n2 && n1.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              i9(this.parent.latestValues) ||
              i4(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === O.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || o))
            )
              return;
            nI(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r = i.length;
              if (!r) return;
              e.x = e.y = 1;
              let o, s;
              for (let a = 0; a < r; a++) {
                s = (o = i[a]).projectionDelta;
                let { visualElement: l } = o.options;
                (!l ||
                  !l.props.style ||
                  "contents" !== l.props.style.display) &&
                  (n &&
                    o.options.layoutScroll &&
                    o.scroll &&
                    o !== o.root &&
                    nr(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
                  s && ((e.x *= s.x.scale), (e.y *= s.y.scale), ne(t, s)),
                  n && i6(o.latestValues) && nr(t, o.latestValues));
              }
              e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = i1()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nF(this.prevProjectionDelta.x, this.projectionDelta.x),
                nF(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iW(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === a &&
                nK(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nK(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              n2 && n1.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let i = this.getStack();
              i && i.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iJ()),
              (this.projectionDelta = iJ()),
              (this.projectionDeltaWithTransform = iJ());
          }
          setAnimationOrigin(t, e = !1) {
            let i = this.snapshot,
              n = i ? i.latestValues : {},
              r = { ...this.latestValues },
              o = iJ();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let s = i1(),
              a = i ? i.source : void 0,
              l = this.layout ? this.layout.source : void 0,
              u = a !== l,
              c = this.getStack(),
              h = !c || c.members.length <= 1,
              d = Boolean(
                u && !h && !0 === this.options.crossfade && !this.path.some(rp)
              );
            this.animationProgress = 0;
            let p;
            (this.mixTargetDelta = (e) => {
              let i = e / 1e3;
              if (
                (rh(o.x, t.x, i),
                rh(o.y, t.y, i),
                this.setTargetDelta(o),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var a, l, c, f, m, v;
                if (
                  (iY(
                    s,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                  (c = this.relativeTarget),
                  (f = this.relativeTargetOrigin),
                  (m = s),
                  (v = i),
                  rd(c.x, f.x, m.x, v),
                  rd(c.y, f.y, m.y, v),
                  p &&
                    ((a = this.relativeTarget),
                    (l = p),
                    nq(a.x, l.x) && nq(a.y, l.y)))
                )
                  this.isProjectionDirty = !1;
                p || (p = i1()), nI(p, this.relativeTarget);
              }
              u &&
                ((this.animationValues = r),
                (function (t, e, i, n, r, o) {
                  r
                    ? ((t.opacity = ex(
                        0,
                        void 0 !== i.opacity ? i.opacity : 1,
                        nD(n)
                      )),
                      (t.opacityExit = ex(
                        void 0 !== e.opacity ? e.opacity : 1,
                        0,
                        nR(n)
                      )))
                    : o &&
                      (t.opacity = ex(
                        void 0 !== e.opacity ? e.opacity : 1,
                        void 0 !== i.opacity ? i.opacity : 1,
                        n
                      ));
                  for (let s = 0; s < nk; s++) {
                    let a = `border${nM[s]}Radius`,
                      l = nV(e, a),
                      u = nV(i, a);
                    if (void 0 === l && void 0 === u) continue;
                    l || (l = 0), u || (u = 0);
                    let c = 0 === l || 0 === u || nO(l) === nO(u);
                    c
                      ? ((t[a] = Math.max(ex(nj(l), nj(u), n), 0)),
                        (ts.test(u) || ts.test(l)) && (t[a] += "%"))
                      : (t[a] = u);
                  }
                  (e.rotate || i.rotate) &&
                    (t.rotate = ex(e.rotate || 0, i.rotate || 0, n));
                })(r, n, this.latestValues, i, d, h)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = i);
            }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (j(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = k.update(() => {
                (nb.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = ir(t) ? t : e7(t);
                    return n.start(eJ("", n, 1e3, i)), n.animation;
                  })(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                ry(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || i1();
                let o = iN(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + o);
                let s = iN(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              nI(e, i),
                nr(e, r),
                iW(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nG());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && n6("z", t, n, this.animationValues);
            for (let r = 0; r < n3.length; r++)
              n6(`rotate${n3[r]}`, t, n, this.animationValues),
                n6(`skew${n3[r]}`, t, n, this.animationValues);
            for (let o in (t.render(), n))
              t.setStaticValue(o, n[o]),
                this.animationValues && (this.animationValues[o] = n[o]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return n5;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  n0(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let s = {};
              return (
                this.options.layoutId &&
                  ((s.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (s.pointerEvents =
                    n0(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !i6(this.latestValues) &&
                  ((s.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                s
              );
            }
            let a = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  o = t.y.translate / e.y,
                  s = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || o || s) &&
                    (n = `translate3d(${r}px, ${o}px, ${s}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: a,
                    rotate: l,
                    rotateX: u,
                    rotateY: c,
                    skewX: h,
                    skewY: d,
                  } = i;
                  a && (n = `perspective(${a}px) ${n}`),
                    l && (n += `rotate(${l}deg) `),
                    u && (n += `rotateX(${u}deg) `),
                    c && (n += `rotateY(${c}deg) `),
                    h && (n += `skewX(${h}deg) `),
                    d && (n += `skewY(${d}deg) `);
                }
                let p = t.x.scale * e.x,
                  f = t.y.scale * e.y;
                return (
                  (1 !== p || 1 !== f) && (n += `scale(${p}, ${f})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, a)),
              r && (n.transform = r(a, n.transform));
            let { x: l, y: u } = this.projectionDelta;
            for (let c in ((n.transformOrigin = `${100 * l.origin}% ${
              100 * u.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (i =
                          null !== (e = a.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            nS)) {
              if (void 0 === a[c]) continue;
              let { correct: h, applyTo: d } = nS[c],
                p = "none" === n.transform ? a[c] : h(a[c], o);
              if (d) {
                let f = d.length;
                for (let m = 0; m < f; m++) n[d[m]] = p;
              } else n[c] = p;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this
                    ? n0(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(rn),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n7(t) {
        t.updateLayout();
      }
      function n8(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: n, measuredBox: r } = t.layout,
            { animationType: o } = t.options,
            s = i.source !== t.layout.source;
          "size" === o
            ? i2((t) => {
                let e = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iN(e);
                (e.min = n[t].min), (e.max = e.min + r);
              })
            : ry(o, i.layoutBox, n) &&
              i2((e) => {
                let r = s ? i.measuredBox[e] : i.layoutBox[e],
                  o = iN(n[e]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[e].max = t.relativeTarget[e].min + o));
              });
          let a = iJ();
          iW(a, n, i.layoutBox);
          let l = iJ();
          s
            ? iW(l, t.applyTransform(r, !0), i.measuredBox)
            : iW(l, n, i.layoutBox);
          let u = !n$(a),
            c = !1;
          if (!t.resumeFrom) {
            let h = t.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
              let { snapshot: d, layout: p } = h;
              if (d && p) {
                let f = i1();
                iY(f, i.layoutBox, d.layoutBox);
                let m = i1();
                iY(m, n, p.layoutBox),
                  nX(f, m) || (c = !0),
                  h.options.layoutRoot &&
                    ((t.relativeTarget = m),
                    (t.relativeTargetOrigin = f),
                    (t.relativeParent = h));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: n,
            snapshot: i,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c,
          });
        } else if (t.isLead()) {
          let { onExitComplete: v } = t.options;
          v && v();
        }
        t.options.transition = void 0;
      }
      function rt(t) {
        n2 && n1.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = Boolean(
                t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function re(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function ri(t) {
        t.clearSnapshot();
      }
      function rn(t) {
        t.clearMeasurements();
      }
      function rr(t) {
        t.isLayoutDirty = !1;
      }
      function ro(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function rs(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ra(t) {
        t.resolveTargetDelta();
      }
      function rl(t) {
        t.calcProjection();
      }
      function ru(t) {
        t.resetSkewAndRotation();
      }
      function rc(t) {
        t.removeLeadSnapshot();
      }
      function rh(t, e, i) {
        (t.translate = ex(e.translate, 0, i)),
          (t.scale = ex(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rd(t, e, i, n) {
        (t.min = ex(e.min, i.min, n)), (t.max = ex(e.max, i.max, n));
      }
      function rp(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rf = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rm = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rv = rm("applewebkit/") && !rm("chrome/") ? Math.round : E;
      function rg(t) {
        (t.min = rv(t.min)), (t.max = rv(t.max));
      }
      function ry(t, e, i) {
        var n, r;
        return (
          "position" === t ||
          ("preserve-aspect" === t &&
            ((n = nZ(e)), (r = nZ(i)), !(0.2 >= Math.abs(n - r))))
        );
      }
      function rb(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let rw = n4({
          attachResizeListener: (t, e) => iD(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rx = { current: void 0 },
        rS = n4({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent() {
            if (!rx.current) {
              let t = new rw({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rx.current = t);
            }
            return rx.current;
          },
          resetTransform(t, e) {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        });
      function rP(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && k.postRender(() => r(e, iO(e)));
      }
      function rT(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && k.postRender(() => r(e, iO(e)));
      }
      let rA = new WeakMap(),
        rE = new WeakMap(),
        rC = (t) => {
          let e = rA.get(t.target);
          e && e(t);
        },
        rM = (t) => {
          t.forEach(rC);
        },
        rk = { some: 0, all: 1 },
        rj = (0, nm.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        rO = (0, nm.createContext)({}),
        rV = "undefined" != typeof window,
        rD = rV ? nm.useLayoutEffect : nm.useEffect,
        rR = (0, nm.createContext)({ strict: !1 });
      function rL(t) {
        return n(t.animate) || h.some((e) => s(t[e]));
      }
      function rB(t) {
        return Boolean(rL(t) || t.variants);
      }
      function rI(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let rF = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        r_ = {};
      for (let rz in rF)
        r_[rz] = { isEnabled: (t) => rF[rz].some((e) => !!t[e]) };
      let rH = Symbol.for("motionComponentSymbol"),
        rN = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function rU(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (rN.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function rW(t, { style: e, vars: i }, n, r) {
        for (let o in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(o, i[o]);
      }
      let r$ = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function rq(t, e, i, n) {
        for (let r in (rW(t, e, void 0, n), e.attrs))
          t.setAttribute(r$.has(r) ? r : it(r), e.attrs[r]);
      }
      function rY(t, { layout: e, layoutId: i }) {
        return (
          p.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!nS[t] || "opacity" === t))
        );
      }
      function rX(t, e, i) {
        var n;
        let { style: r } = t,
          o = {};
        for (let s in r)
          (ir(r[s]) ||
            (e.style && ir(e.style[s])) ||
            rY(s, t) ||
            (null === (n = null == i ? void 0 : i.getValue(s)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (o[s] = r[s]);
        return o;
      }
      function rZ(t, e, i) {
        let n = rX(t, e, i);
        for (let r in t)
          if (ir(t[r]) || ir(e[r])) {
            let o =
              -1 !== d.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r;
            n[o] = t[r];
          }
        return n;
      }
      let rK = (t) => (e, i) => {
          let r = (0, nm.useContext)(rO),
            o = (0, nm.useContext)(nv),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                r,
                o,
                s
              ) {
                let a = {
                  latestValues: (function (t, e, i, r) {
                    let o = {},
                      s = r(t, {});
                    for (let a in s) o[a] = n0(s[a]);
                    let { initial: u, animate: c } = t,
                      h = rL(t),
                      d = rB(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === u && (u = e.initial),
                      void 0 === c && (c = e.animate));
                    let p = !!i && !1 === i.initial;
                    p = p || !1 === u;
                    let f = p ? c : u;
                    if (f && "boolean" != typeof f && !n(f)) {
                      let m = Array.isArray(f) ? f : [f];
                      for (let v = 0; v < m.length; v++) {
                        let g = l(t, m[v]);
                        if (g) {
                          let { transitionEnd: y, transition: b, ...w } = g;
                          for (let x in w) {
                            let S = w[x];
                            if (Array.isArray(S)) {
                              let P = p ? S.length - 1 : 0;
                              S = S[P];
                            }
                            null !== S && (o[x] = S);
                          }
                          for (let T in y) o[T] = y[T];
                        }
                      }
                    }
                    return o;
                  })(r, o, s, t),
                  renderState: e(),
                };
                return i && (a.mount = (t) => i(r, t, a)), a;
              })(t, e, r, o);
          return i
            ? s()
            : (function (t) {
                let e = (0, nm.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(s);
        },
        rG = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        rQ = () => ({ ...rG(), attrs: {} }),
        rJ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        r0 = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        r1 = d.length;
      function r2(t, e, i) {
        let { style: n, vars: r, transformOrigin: o } = t,
          s = !1,
          a = !1;
        for (let l in e) {
          let u = e[l];
          if (p.has(l)) {
            s = !0;
            continue;
          }
          if (X(l)) {
            r[l] = u;
            continue;
          }
          {
            let c = rJ(u, tQ[l]);
            l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (n[l] = c);
          }
        }
        if (
          (!e.transform &&
            (s || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let o = 0; o < r1; o++) {
                    let s = d[o],
                      a = t[s];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (s.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let u = rJ(a, tQ[s]);
                      if (!l) {
                        r = !1;
                        let c = r0[s] || s;
                        n += `${c}(${u}) `;
                      }
                      i && (e[s] = u);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: h = "50%", originY: f = "50%", originZ: m = 0 } = o;
          n.transformOrigin = `${h} ${f} ${m}`;
        }
      }
      function r3(t, e, i) {
        return "string" == typeof t ? t : ta.transform(e + i * t);
      }
      let r5 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        r9 = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function r6(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        h
      ) {
        if ((r2(t, u, h), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: f } = t;
        d.transform && (f && (p.transform = d.transform), delete d.transform),
          f &&
            (void 0 !== r || void 0 !== o || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = r3(e, t.x, t.width),
                r = r3(i, t.y, t.height);
              return `${n} ${r}`;
            })(f, void 0 !== r ? r : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== s &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let o = r ? r5 : r9;
              t[o.offset] = ta.transform(-n);
              let s = ta.transform(e),
                a = ta.transform(i);
              t[o.array] = `${s} ${a}`;
            })(d, s, a, l, !1);
      }
      let r4 = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        r7 = {
          useVisualState: rK({
            scrapeMotionValuesFromProps: rZ,
            createRenderState: rQ,
            onMount(t, e, { renderState: i, latestValues: n }) {
              k.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                k.render(() => {
                  r6(i, n, r4(e.tagName), t.transformTemplate), rq(e, i);
                });
            },
          }),
        },
        r8 = {
          useVisualState: rK({
            scrapeMotionValuesFromProps: rX,
            createRenderState: rG,
          }),
        };
      function ot(t, e, i) {
        for (let n in e) ir(e[n]) || rY(n, i) || (t[n] = e[n]);
      }
      function oe(t, e) {
        let i = {},
          n = (function (t, e) {
            let i = t.style || {},
              n = {};
            return (
              ot(n, i, t),
              Object.assign(
                n,
                (function ({ transformTemplate: t }, e) {
                  return (0, nm.useMemo)(() => {
                    let i = rG();
                    return r2(i, e, t), Object.assign({}, i.vars, i.style);
                  }, [e]);
                })(t, e)
              ),
              n
            );
          })(t, e);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((i.draggable = !1),
            (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
            (n.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (i.tabIndex = 0),
          (i.style = n),
          i
        );
      }
      let oi = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function on(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          oi.has(t)
        );
      }
      let or = (t) => !on(t);
      try {
        (nh = require("@emotion/is-prop-valid").default) &&
          (or = (t) => (t.startsWith("on") ? !on(t) : nh(t)));
      } catch (oo) {}
      function os(t, e, i, n) {
        let r = (0, nm.useMemo)(() => {
          let i = rQ();
          return (
            r6(i, e, r4(n), t.transformTemplate),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let o = {};
          ot(o, t.style, t), (r.style = { ...o, ...r.style });
        }
        return r;
      }
      let oa = { current: null },
        ol = { current: !1 },
        ou = new WeakMap(),
        oc = [...tb, tI, tq],
        oh = (t) => oc.find(ty(t)),
        od = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class op {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: o,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tE),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t4.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), k.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = o;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.blockInitialAnimation = Boolean(r)),
            (this.isControllingVariants = rL(e)),
            (this.isVariantNode = rB(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let h in c) {
            let d = c[h];
            void 0 !== a[h] && ir(d) && d.set(a[h], !1);
          }
        }
        mount(t) {
          (this.current = t),
            ou.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ol.current ||
              (function () {
                if (((ol.current = !0), rV)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (oa.current = t.matches);
                    t.addListener(e), e();
                  } else oa.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || oa.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (ou.delete(this.current),
          this.projection && this.projection.unmount(),
          j(this.notifyUpdate),
          j(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let e in this.features) {
            let i = this.features[e];
            i && (i.unmount(), (i.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = p.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && k.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = e.on("renderRequest", this.scheduleRender),
            o;
          window.MotionCheckAppearSync &&
            (o = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), r(), o && o(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in r_) {
            let e = r_[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let r = this.features[t];
              r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : i1();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let i = 0; i < od.length; i++) {
            let n = od[i];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let r = "on" + n,
              o = t[r];
            o && (this.propEventSubscriptions[n] = this.on(n, o));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                o = i[n];
              if (ir(r)) t.addValue(n, r);
              else if (ir(o)) t.addValue(n, e7(r, { owner: t }));
              else if (o !== r) {
                if (t.hasValue(n)) {
                  let s = t.getValue(n);
                  !0 === s.liveStyle ? s.jump(r) : s.hasAnimated || s.set(r);
                } else {
                  let a = t.getStaticValue(n);
                  t.addValue(n, e7(void 0 !== a ? a : r, { owner: t }));
                }
              }
            }
            for (let l in i) void 0 === e[l] && t.removeValue(l);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = e7(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (q(n) || W(n))
                ? (n = parseFloat(n))
                : !oh(n) && tq.test(e) && (n = t1(t, e)),
              this.setBaseTarget(t, ir(n) ? n.get() : n)),
            ir(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            n;
          if ("string" == typeof i || "object" == typeof i) {
            let r = l(
              this.props,
              i,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (n = r[t]);
          }
          if (i && void 0 !== n) return n;
          let o = this.getBaseTargetFromProps(this.props, t);
          return void 0 === o || ir(o)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : o;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new e5()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class of extends op {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t3);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          ir(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class om extends of {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = rW);
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let i = t0(e);
            return (i && i.default) || 0;
          }
          {
            var n;
            let r = window.getComputedStyle(t),
              o = (X(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof o ? o.trim() : o;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return no(t, e);
        }
        build(t, e, i) {
          r2(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return rX(t, e, i);
        }
      }
      class ov extends of {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = i1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (p.has(e)) {
            let i = t0(e);
            return (i && i.default) || 0;
          }
          return (e = r$.has(e) ? e : it(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return rZ(t, e, i);
        }
        build(t, e, i) {
          r6(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          rq(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = r4(t.tagName)), super.mount(t);
        }
      }
      let og = (t, e) =>
          rU(t) ? new ov(e) : new om(e, { allowProjection: t !== nm.Fragment }),
        oy =
          ((nd = {
            animation: {
              Feature: class extends ig {
                constructor(t) {
                  super(t),
                    t.animationState ||
                      (t.animationState = (function (t) {
                        var e;
                        let i = (e) =>
                            Promise.all(
                              e.map(({ animation: e, options: i }) =>
                                (function (t, e, i = {}) {
                                  t.notify("AnimationStart", e);
                                  let n;
                                  if (Array.isArray(e)) {
                                    let r = e.map((e) => il(t, e, i));
                                    n = Promise.all(r);
                                  } else if ("string" == typeof e)
                                    n = il(t, e, i);
                                  else {
                                    let o =
                                      "function" == typeof e
                                        ? u(t, e, i.custom)
                                        : e;
                                    n = Promise.all(ia(t, o, i));
                                  }
                                  return n.then(() => {
                                    t.notify("AnimationComplete", e);
                                  });
                                })(t, e, i)
                              )
                            ),
                          a = iv(),
                          l = !0,
                          c = (e) => (i, n) => {
                            var r;
                            let o = u(
                              t,
                              n,
                              "exit" === e
                                ? null === (r = t.presenceContext) ||
                                  void 0 === r
                                  ? void 0
                                  : r.custom
                                : void 0
                            );
                            if (o) {
                              let { transition: s, transitionEnd: a, ...l } = o;
                              i = { ...i, ...l, ...a };
                            }
                            return i;
                          };
                        function d(e) {
                          let { props: u } = t,
                            d =
                              (function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                  let i = (e.parent && t(e.parent)) || {};
                                  return (
                                    void 0 !== e.props.initial &&
                                      (i.initial = e.props.initial),
                                    i
                                  );
                                }
                                let n = {};
                                for (let r = 0; r < ic; r++) {
                                  let o = h[r],
                                    a = e.props[o];
                                  (s(a) || !1 === a) && (n[o] = a);
                                }
                                return n;
                              })(t.parent) || {},
                            p = [],
                            f = new Set(),
                            m = {},
                            v = 1 / 0;
                          for (let g = 0; g < id; g++) {
                            let y = ih[g],
                              b = a[y],
                              w = void 0 !== u[y] ? u[y] : d[y],
                              x = s(w),
                              S = y === e ? b.isActive : null;
                            !1 === S && (v = g);
                            let P = w === d[y] && w !== u[y] && x;
                            if (
                              (P && l && t.manuallyAnimateOnMount && (P = !1),
                              (b.protectedKeys = { ...m }),
                              (!b.isActive && null === S) ||
                                (!w && !b.prevProp) ||
                                n(w) ||
                                "boolean" == typeof w)
                            )
                              continue;
                            let T = ip(b.prevProp, w),
                              A =
                                T ||
                                (y === e && b.isActive && !P && x) ||
                                (g > v && x),
                              E = !1,
                              C = Array.isArray(w) ? w : [w],
                              M = C.reduce(c(y), {});
                            !1 === S && (M = {});
                            let { prevResolvedValues: k = {} } = b,
                              j = { ...k, ...M },
                              O = (e) => {
                                (A = !0),
                                  f.has(e) && ((E = !0), f.delete(e)),
                                  (b.needsAnimating[e] = !0);
                                let i = t.getValue(e);
                                i && (i.liveStyle = !1);
                              };
                            for (let V in j) {
                              let D = M[V],
                                R = k[V];
                              if (m.hasOwnProperty(V)) continue;
                              let L = !1;
                              (r(D) && r(R) ? o(D, R) : D === R)
                                ? void 0 !== D && f.has(V)
                                  ? O(V)
                                  : (b.protectedKeys[V] = !0)
                                : null != D
                                ? O(V)
                                : f.add(V);
                            }
                            (b.prevProp = w),
                              (b.prevResolvedValues = M),
                              b.isActive && (m = { ...m, ...M }),
                              l && t.blockInitialAnimation && (A = !1);
                            let B = P && T,
                              I = !B || E;
                            A &&
                              I &&
                              p.push(
                                ...C.map((t) => ({
                                  animation: t,
                                  options: { type: y },
                                }))
                              );
                          }
                          if (f.size) {
                            let F = {};
                            f.forEach((e) => {
                              let i = t.getBaseTarget(e),
                                n = t.getValue(e);
                              n && (n.liveStyle = !0),
                                (F[e] = null != i ? i : null);
                            }),
                              p.push({ animation: F });
                          }
                          let _ = Boolean(p.length);
                          return (
                            l &&
                              (!1 === u.initial || u.initial === u.animate) &&
                              !t.manuallyAnimateOnMount &&
                              (_ = !1),
                            (l = !1),
                            _ ? i(p) : Promise.resolve()
                          );
                        }
                        return {
                          animateChanges: d,
                          setActive: function (e, i) {
                            var n;
                            if (a[e].isActive === i) return Promise.resolve();
                            null === (n = t.variantChildren) ||
                              void 0 === n ||
                              n.forEach((t) => {
                                var n;
                                return null === (n = t.animationState) ||
                                  void 0 === n
                                  ? void 0
                                  : n.setActive(e, i);
                              }),
                              (a[e].isActive = i);
                            let r = d(e);
                            for (let o in a) a[o].protectedKeys = {};
                            return r;
                          },
                          setAnimateFunction: function (e) {
                            i = e(t);
                          },
                          getState: () => a,
                          reset() {
                            (a = iv()), (l = !0);
                          },
                        };
                      })(t));
                }
                updateAnimationControlsSubscription() {
                  let { animate: t } = this.node.getProps();
                  n(t) && (this.unmountControls = t.subscribe(this.node));
                }
                mount() {
                  this.updateAnimationControlsSubscription();
                }
                update() {
                  let { animate: t } = this.node.getProps(),
                    { animate: e } = this.node.prevProps || {};
                  t !== e && this.updateAnimationControlsSubscription();
                }
                unmount() {
                  var t;
                  this.node.animationState.reset(),
                    null === (t = this.unmountControls) ||
                      void 0 === t ||
                      t.call(this);
                }
              },
            },
            exit: {
              Feature: class extends ig {
                constructor() {
                  super(...arguments), (this.id = iy++);
                }
                update() {
                  if (!this.node.presenceContext) return;
                  let { isPresent: t, onExitComplete: e } =
                      this.node.presenceContext,
                    { isPresent: i } = this.node.prevPresenceContext || {};
                  if (!this.node.animationState || t === i) return;
                  let n = this.node.animationState.setActive("exit", !t);
                  e && !t && n.then(() => e(this.id));
                }
                mount() {
                  let { register: t } = this.node.presenceContext || {};
                  t && (this.unmount = t(this.id));
                }
                unmount() {}
              },
            },
            inView: {
              Feature: class extends ig {
                constructor() {
                  super(...arguments),
                    (this.hasEnteredView = !1),
                    (this.isInView = !1);
                }
                startObserver() {
                  this.unmount();
                  let { viewport: t = {} } = this.node.getProps(),
                    { root: e, margin: i, amount: n = "some", once: r } = t,
                    o = {
                      root: e ? e.current : void 0,
                      rootMargin: i,
                      threshold: "number" == typeof n ? n : rk[n],
                    },
                    s = (t) => {
                      let { isIntersecting: e } = t;
                      if (
                        this.isInView === e ||
                        ((this.isInView = e), r && !e && this.hasEnteredView)
                      )
                        return;
                      e && (this.hasEnteredView = !0),
                        this.node.animationState &&
                          this.node.animationState.setActive("whileInView", e);
                      let { onViewportEnter: i, onViewportLeave: n } =
                          this.node.getProps(),
                        o = e ? i : n;
                      o && o(t);
                    };
                  return (function (t, e, i) {
                    let n = (function ({ root: t, ...e }) {
                      let i = t || document;
                      rE.has(i) || rE.set(i, {});
                      let n = rE.get(i),
                        r = JSON.stringify(e);
                      return (
                        n[r] ||
                          (n[r] = new IntersectionObserver(rM, {
                            root: t,
                            ...e,
                          })),
                        n[r]
                      );
                    })(e);
                    return (
                      rA.set(t, i),
                      n.observe(t),
                      () => {
                        rA.delete(t), n.unobserve(t);
                      }
                    );
                  })(this.node.current, o, s);
                }
                mount() {
                  this.startObserver();
                }
                update() {
                  if ("undefined" == typeof IntersectionObserver) return;
                  let { props: t, prevProps: e } = this.node,
                    i = ["amount", "margin", "root"].some(
                      (function (
                        { viewport: t = {} },
                        { viewport: e = {} } = {}
                      ) {
                        return (i) => t[i] !== e[i];
                      })(t, e)
                    );
                  i && this.startObserver();
                }
                unmount() {}
              },
            },
            tap: {
              Feature: class extends ig {
                mount() {
                  let { current: t } = this.node;
                  t &&
                    (this.unmount = (function (t, e, i = {}) {
                      let [n, r, o] = ix(t, i),
                        s = (t) => {
                          let n = t.currentTarget;
                          if (!ij(t) || iT.has(n)) return;
                          iT.add(n);
                          let o = e(t),
                            s = (t, e) => {
                              window.removeEventListener("pointerup", a),
                                window.removeEventListener("pointercancel", l),
                                ij(t) &&
                                  iT.has(n) &&
                                  (iT.delete(n), o && o(t, { success: e }));
                            },
                            a = (t) => {
                              s(t, i.useGlobalTarget || ik(n, t.target));
                            },
                            l = (t) => {
                              s(t, !1);
                            };
                          window.addEventListener("pointerup", a, r),
                            window.addEventListener("pointercancel", l, r);
                        };
                      return (
                        n.forEach((t) => {
                          var e;
                          !iM.has(t.tagName) &&
                            -1 === t.tabIndex &&
                            (t.tabIndex = 0);
                          let n = i.useGlobalTarget ? window : t;
                          n.addEventListener("pointerdown", s, r),
                            t.addEventListener("focus", (t) => iC(t, r), r);
                        }),
                        o
                      );
                    })(
                      t,
                      (t) => (
                        rT(this.node, t, "Start"),
                        (t, { success: e }) =>
                          rT(this.node, t, e ? "End" : "Cancel")
                      ),
                      { useGlobalTarget: this.node.props.globalTapTarget }
                    ));
                }
                unmount() {}
              },
            },
            focus: {
              Feature: class extends ig {
                constructor() {
                  super(...arguments), (this.isActive = !1);
                }
                onFocus() {
                  let t = !1;
                  try {
                    t = this.node.current.matches(":focus-visible");
                  } catch (e) {
                    t = !0;
                  }
                  t &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                }
                onBlur() {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                }
                mount() {
                  this.unmount = ew(
                    iD(this.node.current, "focus", () => this.onFocus()),
                    iD(this.node.current, "blur", () => this.onBlur())
                  );
                }
                unmount() {}
              },
            },
            hover: {
              Feature: class extends ig {
                mount() {
                  let { current: t } = this.node;
                  t &&
                    (this.unmount = (function (t, e, i = {}) {
                      let [n, r, o] = ix(t, i),
                        s = iS((t) => {
                          let { target: i } = t,
                            n = e(t);
                          if (!n || !i) return;
                          let o = iS((t) => {
                            n(t), i.removeEventListener("pointerleave", o);
                          });
                          i.addEventListener("pointerleave", o, r);
                        });
                      return (
                        n.forEach((t) => {
                          t.addEventListener("pointerenter", s, r);
                        }),
                        o
                      );
                    })(
                      t,
                      (t) => (
                        rP(this.node, t, "Start"),
                        (t) => rP(this.node, t, "End")
                      )
                    ));
                }
                unmount() {}
              },
            },
            pan: {
              Feature: class extends ig {
                constructor() {
                  super(...arguments), (this.removePointerDownListener = E);
                }
                onPointerDown(t) {
                  this.session = new iB(t, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: ns(this.node),
                  });
                }
                createPanHandlers() {
                  let {
                    onPanSessionStart: t,
                    onPanStart: e,
                    onPan: i,
                    onPanEnd: n,
                  } = this.node.getProps();
                  return {
                    onSessionStart: nc(t),
                    onStart: nc(e),
                    onMove: i,
                    onEnd: (t, e) => {
                      delete this.session, n && k.postRender(() => n(t, e));
                    },
                  };
                }
                mount() {
                  this.removePointerDownListener = iR(
                    this.node.current,
                    "pointerdown",
                    (t) => this.onPointerDown(t)
                  );
                }
                update() {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                }
                unmount() {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                }
              },
            },
            drag: {
              Feature: class extends ig {
                constructor(t) {
                  super(t),
                    (this.removeGroupControls = E),
                    (this.removeListeners = E),
                    (this.controls = new nl(t));
                }
                mount() {
                  let { dragControls: t } = this.node.getProps();
                  t && (this.removeGroupControls = t.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || E);
                }
                unmount() {
                  this.removeGroupControls(), this.removeListeners();
                }
              },
              ProjectionNode: rS,
              MeasureLayout: nE,
            },
            layout: { ProjectionNode: rS, MeasureLayout: nE },
          }),
          function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
            let i = rU(t) ? r7 : r8,
              n = {
                ...i,
                preloadedFeatures: nd,
                useRender: (function (t = !1) {
                  let e = (e, i, n, { latestValues: r }, o) => {
                    let s = rU(e) ? os : oe,
                      a = s(i, r, o, e),
                      l = (function (t, e, i) {
                        let n = {};
                        for (let r in t)
                          ("values" !== r || "object" != typeof t.values) &&
                            (or(r) ||
                              (!0 === i && on(r)) ||
                              (!e && !on(r)) ||
                              (t.draggable && r.startsWith("onDrag"))) &&
                            (n[r] = t[r]);
                        return n;
                      })(i, "string" == typeof e, t),
                      u = e !== nm.Fragment ? { ...l, ...a, ref: n } : {},
                      { children: c } = i,
                      h = (0, nm.useMemo)(() => (ir(c) ? c.get() : c), [c]);
                    return (0, nm.createElement)(e, { ...u, children: h });
                  };
                  return e;
                })(e),
                createVisualElement: og,
                Component: t,
              };
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: n,
              Component: r,
            }) {
              t &&
                (function (t) {
                  for (let e in t) r_[e] = { ...r_[e], ...t[e] };
                })(t);
              let o = (0, nm.forwardRef)(function (o, a) {
                var l, u, c, h, d;
                let p,
                  f = {
                    ...(0, nm.useContext)(rj),
                    ...o,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, nm.useContext)(ng).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(o),
                  },
                  { isStatic: m } = f,
                  v = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (rL(t)) {
                        let { initial: i, animate: n } = t;
                        return {
                          initial: !1 === i || s(i) ? i : void 0,
                          animate: s(n) ? n : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, nm.useContext)(rO));
                    return (0, nm.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [rI(e), rI(i)]
                    );
                  })(o),
                  g = n(o, m);
                if (!m && rV) {
                  (h = f), (d = t), (0, nm.useContext)(rR).strict;
                  let y = (function (t) {
                    let { drag: e, layout: i } = r_;
                    if (!e && !i) return {};
                    let n = { ...e, ...i };
                    return {
                      MeasureLayout:
                        (null == e ? void 0 : e.isEnabled(t)) ||
                        (null == i ? void 0 : i.isEnabled(t))
                          ? n.MeasureLayout
                          : void 0,
                      ProjectionNode: n.ProjectionNode,
                    };
                  })(f);
                  (p = y.MeasureLayout),
                    (v.visualElement = (function (t, e, i, n, r) {
                      var o, s;
                      let { visualElement: a } = (0, nm.useContext)(rO),
                        l = (0, nm.useContext)(rR),
                        u = (0, nm.useContext)(nv),
                        c = (0, nm.useContext)(rj).reducedMotion,
                        h = (0, nm.useRef)(null);
                      (n = n || l.renderer),
                        !h.current &&
                          n &&
                          (h.current = n(t, {
                            visualState: e,
                            parent: a,
                            props: i,
                            presenceContext: u,
                            blockInitialAnimation: !!u && !1 === u.initial,
                            reducedMotionConfig: c,
                          }));
                      let d = h.current,
                        p = (0, nm.useContext)(ny);
                      d &&
                        !d.projection &&
                        r &&
                        ("html" === d.type || "svg" === d.type) &&
                        (function (t, e, i, n) {
                          let {
                            layoutId: r,
                            layout: o,
                            drag: s,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u,
                          } = e;
                          (t.projection = new i(
                            t.latestValues,
                            e["data-framer-portal-id"]
                              ? void 0
                              : (function t(e) {
                                  if (e)
                                    return !1 !== e.options.allowProjection
                                      ? e.projection
                                      : t(e.parent);
                                })(t.parent)
                          )),
                            t.projection.setOptions({
                              layoutId: r,
                              layout: o,
                              alwaysMeasureLayout: Boolean(s) || (a && iH(a)),
                              visualElement: t,
                              animationType: "string" == typeof o ? o : "both",
                              initialPromotionConfig: n,
                              layoutScroll: l,
                              layoutRoot: u,
                            });
                        })(h.current, i, r, p);
                      let f = (0, nm.useRef)(!1);
                      (0, nm.useInsertionEffect)(() => {
                        d && f.current && d.update(i, u);
                      });
                      let m = i[ie],
                        v = (0, nm.useRef)(
                          Boolean(m) &&
                            !(null === (o = window.MotionHandoffIsComplete) ||
                            void 0 === o
                              ? void 0
                              : o.call(window, m)) &&
                            (null ===
                              (s = window.MotionHasOptimisedAnimation) ||
                            void 0 === s
                              ? void 0
                              : s.call(window, m))
                        );
                      return (
                        rD(() => {
                          d &&
                            ((f.current = !0),
                            (window.MotionIsMounted = !0),
                            d.updateFeatures(),
                            nP.render(d.render),
                            v.current &&
                              d.animationState &&
                              d.animationState.animateChanges());
                        }),
                        (0, nm.useEffect)(() => {
                          d &&
                            (!v.current &&
                              d.animationState &&
                              d.animationState.animateChanges(),
                            v.current &&
                              (queueMicrotask(() => {
                                var t;
                                null ===
                                  (t = window.MotionHandoffMarkAsComplete) ||
                                  void 0 === t ||
                                  t.call(window, m);
                              }),
                              (v.current = !1)));
                        }),
                        d
                      );
                    })(r, g, f, e, y.ProjectionNode));
                }
                return (0, nf.jsxs)(rO.Provider, {
                  value: v,
                  children: [
                    p && v.visualElement
                      ? (0, nf.jsx)(p, { visualElement: v.visualElement, ...f })
                      : null,
                    i(
                      r,
                      o,
                      ((u = v.visualElement),
                      (c = a),
                      (0, nm.useCallback)(
                        (t) => {
                          t && g.mount && g.mount(t),
                            u && (t ? u.mount(t) : u.unmount()),
                            c &&
                              ("function" == typeof c
                                ? c(t)
                                : iH(c) && (c.current = t));
                        },
                        [u]
                      )),
                      g,
                      m,
                      v.visualElement
                    ),
                  ],
                });
              });
              return (o[rH] = r), o;
            })(n);
          }),
        ob = (function (t) {
          if ("undefined" == typeof Proxy) return t;
          let e = new Map(),
            i = (...e) => t(...e);
          return new Proxy(i, {
            get: (i, n) =>
              "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
          });
        })(oy);
    },
  },
]);
