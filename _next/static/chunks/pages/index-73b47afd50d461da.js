(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(1997);
        },
      ]);
    },
    1997: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return z;
          },
        });
      var r = a(5893),
        l = a(5675),
        s = a.n(l),
        o = a(1163),
        i = a(6380),
        n = a(7294),
        d = function (e) {
          var t = e.children;
          return (0, r.jsx)("div", {
            className:
              "w-full p-0 m-0 bg-gradient-to-r from-bg2 to-bg1 cursor-default overflow-x-hidden",
            children: t,
          });
        },
        c = {
          src: "/_next/static/media/about.22715e58.jpg",
          height: 1024,
          width: 1024,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABBAEEAwAAAAAAAAAAAAACAAEDBBEFBhITFDGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMR/9oADAMBAAIRAxEAPwCJHTZKG1rdcqHd5UMc4WRjYhDGHJ+Xtmw/1ERDlbosfWoIT//Z",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = a(6261),
        h = a(8814),
        A = a(1352),
        m = a(7232),
        b = function () {
          var e = (0, n.useState)(!1),
            t = e[0],
            a = e[1],
            l = (0, n.useState)(0),
            i = l[0],
            d = l[1],
            c = (0, o.useRouter)(),
            b = [
              { name: "Home", type: "scroll" },
              { name: "About", type: "scroll" },
              { name: "Tokenomics", type: "scroll" },
              { name: "Roadmap", type: "scroll" },
              { name: "Community", type: "scroll" },
              { name: "Chart", type: "link", href: "https://www.dextools.io" },
            ];
          (0, n.useEffect)(function () {
            var e = function () {
              d(window.scrollY);
            };
            return (
              window.addEventListener("scroll", e, { passive: !0 }),
              function () {
                return window.removeEventListener("scroll", e);
              }
            );
          }, []),
            (0, n.useEffect)(
              function () {
                a(!1);
              },
              [c]
            );
          var g = function (e) {
            var t = e.item;
            return "scroll" === t.type
              ? (0, r.jsxs)(x.rU, {
                  to: t.name,
                  spy: !0,
                  smooth: !0,
                  offset: -70,
                  duration: 500,
                  className: "relative group cursor-pointer",
                  onClick: function () {
                    return a(!1);
                  },
                  children: [
                    (0, r.jsx)("span", {
                      className:
                        "text-white hover:text-yellow-200 transition-colors font-medium drop-shadow-lg",
                      children: t.name,
                    }),
                    (0, r.jsx)("span", {
                      className:
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-200 to-orange-300 group-hover:w-full transition-all duration-300 rounded-full",
                    }),
                  ],
                })
              : (0, r.jsxs)("a", {
                  href: t.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "flex items-center gap-1 text-white hover:text-yellow-200 transition-colors font-medium drop-shadow-lg",
                  onClick: function () {
                    return a(!1);
                  },
                  children: [t.name, (0, r.jsx)(h.Z, { className: "w-4 h-4" })],
                });
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("header", {
                className:
                  "fixed top-0 w-full z-50 transition-all duration-300 ".concat(
                    i > 50
                      ? "bg-gradient-to-r from-orange-700/95 to-yellow-500/95 backdrop-blur-lg shadow-2xl border-b border-white/30"
                      : "bg-transparent"
                  ),
                children: (0, r.jsx)("div", {
                  className: "container mx-auto px-4",
                  children: (0, r.jsxs)("div", {
                    className: "flex items-center justify-between h-20",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "relative w-12 h-12 group",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-white/40 to-orange-200/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300",
                          }),
                          (0, r.jsx)(s(), {
                            src: "/images/logo.png",
                            alt: "NAIRO",
                            layout: "fill",
                            className:
                              "rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300",
                            priority: !0,
                            style: {
                              filter:
                                "drop-shadow(0 4px 8px rgba(0,0,0,0.4)) drop-shadow(0 0 20px rgba(255,255,255,0.6))",
                            },
                          }),
                        ],
                      }),
                      (0, r.jsx)("nav", {
                        className: "hidden md:flex items-center gap-8",
                        children: b.map(function (e, t) {
                          return (0, r.jsx)(g, { item: e }, t);
                        }),
                      }),
                      (0, r.jsx)("button", {
                        onClick: function () {
                          return a(!t);
                        },
                        className:
                          "md:hidden p-2 text-white hover:text-yellow-200 transition-colors bg-white/15 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/25",
                        "aria-label": "Toggle Menu",
                        style: {
                          boxShadow:
                            "inset 0 2px 8px rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.2)",
                        },
                        children: t
                          ? (0, r.jsx)(A.Z, { className: "w-6 h-6" })
                          : (0, r.jsx)(m.Z, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "fixed inset-0 z-40 bg-gradient-to-br from-orange-800/98 to-red-800/98 backdrop-blur-lg transition-transform duration-300 transform md:hidden ".concat(
                    t ? "translate-x-0" : "translate-x-full"
                  ),
                style: {
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,193,7,0.15) 0%, transparent 50%)",
                },
                children: (0, r.jsx)("div", {
                  className:
                    "flex flex-col items-center justify-center h-full gap-8",
                  children: b.map(function (e, t) {
                    return (0,
                    r.jsx)("div", { className: "text-xl font-medium bg-white/15 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/30", style: { boxShadow: "inset 0 2px 10px rgba(255,255,255,0.2), 0 8px 20px rgba(0,0,0,0.3)" }, children: (0, r.jsx)(g, { item: e }) }, t);
                  }),
                }),
              }),
            ],
          });
        },
        g = a(6915),
        p = a(4998),
        u = a(5097),
        w = a(4778),
        f = {
          src: "/_next/static/media/about2.835bc22a.jpg",
          height: 1280,
          width: 1004,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAIDAQAAAAAAAAAAAAACAAEDBAUSBiMxUf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8ArGHK3y01gcRfaqbdcYz66+fCREQhP//Z",
          blurWidth: 6,
          blurHeight: 8,
        },
        v = {
          src: "/_next/static/media/logo.2aacfee4.png",
          height: 2500,
          width: 2500,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX/xCSZdj8YKzfYv3LisFE6LBkUFhf4niFMaXHPp0tMiJE7QzjTkSv/wFX/tDz/xlsDLkt1RQYADyFPe3mYv6OCmHxsZT8zLCNbTCZ2hWddtcc1VVVBb3PLfxaPXhZxx9EMK0dEAAAAFHRSTlMGr/2xr/z8aACt/fyxZmpn+vz6+kzJYiQAAAAJcEhZcwAALiMAAC4jAXilP3YAAABCSURBVHicBcGFAYAwEACxK5Wv4FRw9t+SBM+k9YAHU2IsBsbqrF2rEG7XmrsC4Uvvk86A5G2xcxYwR9ftPXhEKcH/ZowCz8kPfrsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/dextools.792a7bc5.png",
          height: 300,
          width: 261,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAOVBMVEUAvdMEpMsApMcFtd4EpMsDpMoFpMoEpMoFpMoEo8oEosgFpcoEqdAEoskFs9wDo8sAmbYEoskGtd4Ms9h7AAAAEnRSTlMCwxP0ukn8fYdwmV/ho+JAI6uV8vPpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nBXESRIAIQgAsRZBwG2W/z/WMocA3gLw7jkyqWUhe6PyaCuG3eXjny9dK5E2fDkQM+AAK4QBZ+UYELEAAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        },
        N = {
          src: "/_next/static/media/telegram.abd895be.png",
          height: 2e3,
          width: 2e3,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEUso99Vt+YspeAtqeQupuMxquQhouAspuIsp+NMaXF2xeuj2PEYnN0usvIop+X5/P7N6vjZ7vneLRHyAAAADXRSTlMZ/ZGNlP782dMA/v358JERvgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwdy0kSgCAMBMAJZEUn6P8/a8m9G4URoSggac0EJt1FqMhez14eyJZ3Wwcmb7mcerD9+PSB+gBB5gHRTek7AQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        y = {
          src: "/_next/static/media/twitter.c2806082.webp",
          height: 847,
          width: 850,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAgAAkA4JaQAD4APv+tgYAD++ycluHUvVpUseWA9dK6JXavDnxCa4q0K2NUrYnKR/+Nl5IRn1MeHeuPLXsAAAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        E = {
          src: "/_next/static/media/dexscreener.a8c1099c.jpg",
          height: 400,
          width: 400,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAiEAAABQEJAAAAAAAAAAAAAAAAERITFAQGFRchIzEyQWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjpNm8OYjtLeCXCjazy+KyNKc9y68AAAf/9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        O = {
          initial: { y: 60, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, ease: "easeOut" },
        },
        k = { animate: { transition: { staggerChildren: 0.1 } } },
        z = function () {
          return (
            (0, o.useRouter)(),
            (0, r.jsxs)("div", {
              className:
                "bg-gradient-to-br from-orange-300 via-amber-400 to-yellow-500 min-h-screen relative overflow-hidden",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "absolute inset-0 overflow-hidden pointer-events-none",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "absolute top-20 left-10 w-20 h-20 bg-white/25 rounded-full blur-xl animate-pulse",
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "absolute top-40 right-20 w-16 h-16 bg-orange-200/40 rounded-full blur-lg animate-bounce",
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "absolute bottom-40 left-20 w-12 h-12 bg-yellow-200/50 rounded-full blur-md animate-pulse",
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "absolute bottom-20 right-10 w-24 h-24 bg-amber-200/35 rounded-full blur-xl animate-bounce",
                    }),
                  ],
                }),
                (0, r.jsx)(b, {}),
                (0, r.jsxs)(d, {
                  children: [
                    (0, r.jsxs)(i.E.section, {
                      initial: "initial",
                      animate: "animate",
                      variants: k,
                      className: "min-h-[95vh] relative overflow-hidden",
                      id: "Home",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-orange-300/90 via-amber-400/70 to-yellow-500/90",
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "absolute inset-0 overflow-hidden pointer-events-none",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-white/50 to-orange-100/40 rounded-full blur-sm animate-pulse",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-amber-200/60 to-yellow-100/40 rounded-full blur-sm animate-bounce",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-200/50 to-orange-300/40 rounded-full blur-sm",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "container mx-auto px-4 h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-16 py-20 md:pt-48 relative z-10",
                          children: [
                            (0, r.jsxs)(i.E.div, {
                              variants: O,
                              className:
                                "w-full lg:w-1/2 space-y-12 text-center z-20",
                              children: [
                                (0, r.jsxs)(i.E.h1, {
                                  className:
                                    "text-6xl sm:text-6xl lg:text-7xl font-black text-white leading-tight",
                                  variants: O,
                                  whileHover: { scale: 1.05 },
                                  style: {
                                    textShadow:
                                      "0 8px 16px rgba(0,0,0,0.4), 0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(255,193,7,0.6)",
                                    letterSpacing: "-0.02em",
                                  },
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "inline-block",
                                      children: "NAI",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "text-yellow-200 inline-block",
                                      style: {
                                        textShadow:
                                          "0 8px 16px rgba(0,0,0,0.5), 0 0 50px rgba(254,240,138,0.9)",
                                      },
                                      children: "RO",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(i.E.div, {
                                  variants: O,
                                  className:
                                    "bg-gradient-to-br from-white/30 to-white/15 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 mx-auto max-w-md",
                                  style: {
                                    boxShadow:
                                      "inset 0 4px 20px rgba(255,255,255,0.4), inset 0 -4px 20px rgba(255,193,7,0.3), 0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(255,255,255,0.2)",
                                  },
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "text-2xl font-bold text-white drop-shadow-lg",
                                    children: "Vitalik's Family's New Dog",
                                  }),
                                }),
                                (0, r.jsx)(i.E.div, {
                                  variants: O,
                                  className: "flex items-center justify-center",
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "flex items-center gap-3 sm:gap-4 bg-gradient-to-br from-white/35 to-white/20 backdrop-blur-xl rounded-3xl p-3 sm:p-4 border-2 border-white/60",
                                    style: {
                                      boxShadow:
                                        "inset 0 4px 20px rgba(255,255,255,0.4), inset 0 -4px 20px rgba(255,193,7,0.2), 0 15px 35px rgba(0,0,0,0.3), 0 0 50px rgba(255,255,255,0.2)",
                                    },
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 sm:gap-3 pr-2 sm:pr-4 border-r border-white/30",
                                        children: [
                                          (0, r.jsx)(i.E.a, {
                                            whileHover: { scale: 1.15, y: -3 },
                                            whileTap: { scale: 0.9 },
                                            href: "https://t.me/NairoETH",
                                            className:
                                              "w-12 h-12 sm:w-14 sm:h-14 bg-white/98 backdrop-blur-lg rounded-xl border border-white/70 transition-all duration-300 group hover:border-blue-400/90 hover:bg-orange-50/98 flex items-center justify-center",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                              boxShadow:
                                                "inset 0 2px 8px rgba(255,255,255,0.4), 0 4px 15px rgba(59,130,246,0.3)",
                                            },
                                            children: (0, r.jsx)(s(), {
                                              src: N,
                                              alt: "Telegram",
                                              width: 24,
                                              height: 24,
                                              className:
                                                "group-hover:scale-110 transition-transform duration-300 object-contain",
                                            }),
                                          }),
                                          (0, r.jsx)(i.E.a, {
                                            whileHover: { scale: 1.15, y: -3 },
                                            whileTap: { scale: 0.9 },
                                            href: "https://x.com/NAIRO_ETH",
                                            className:
                                              "w-12 h-12 sm:w-14 sm:h-14 bg-white/98 backdrop-blur-lg rounded-xl border border-white/70 transition-all duration-300 group hover:border-gray-500/90 hover:bg-orange-50/98 flex items-center justify-center",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                              boxShadow:
                                                "inset 0 2px 8px rgba(255,255,255,0.4), 0 4px 15px rgba(71,85,105,0.3)",
                                            },
                                            children: (0, r.jsx)(s(), {
                                              src: y,
                                              alt: "Twitter",
                                              width: 24,
                                              height: 24,
                                              className:
                                                "group-hover:scale-110 transition-transform duration-300 object-contain",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4",
                                        children: [
                                          (0, r.jsx)(i.E.a, {
                                            whileHover: { scale: 1.15, y: -3 },
                                            whileTap: { scale: 0.9 },
                                            href: "https://www.dextools.io/app/en/token/nairo",
                                            className:
                                              "w-12 h-12 sm:w-14 sm:h-14 bg-white/98 backdrop-blur-lg rounded-xl border border-white/70 transition-all duration-300 group hover:border-emerald-500/90 hover:bg-orange-50/98 flex items-center justify-center",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                              boxShadow:
                                                "inset 0 2px 8px rgba(255,255,255,0.4), 0 4px 15px rgba(16,185,129,0.3)",
                                            },
                                            children: (0, r.jsx)(s(), {
                                              src: j,
                                              alt: "Dextools",
                                              width: 24,
                                              height: 24,
                                              className:
                                                "group-hover:scale-110 transition-transform duration-300 object-contain",
                                            }),
                                          }),
                                          (0, r.jsx)(i.E.a, {
                                            whileHover: { scale: 1.15, y: -3 },
                                            whileTap: { scale: 0.9 },
                                            href: "https://dexscreener.com",
                                            className:
                                              "w-12 h-12 sm:w-14 sm:h-14 bg-white/98 backdrop-blur-lg rounded-xl border border-white/70 transition-all duration-300 group hover:border-purple-500/90 hover:bg-orange-50/98 flex items-center justify-center",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            style: {
                                              boxShadow:
                                                "inset 0 2px 8px rgba(255,255,255,0.4), 0 4px 15px rgba(139,92,246,0.3)",
                                            },
                                            children: (0, r.jsx)(s(), {
                                              src: E,
                                              alt: "Dexscreener",
                                              width: 24,
                                              height: 24,
                                              className:
                                                "group-hover:scale-110 transition-transform duration-300 object-contain",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(i.E.div, {
                                  variants: O,
                                  className:
                                    "flex items-center justify-center pt-4",
                                  children: (0, r.jsxs)(i.E.button, {
                                    whileHover: { scale: 1.05, y: -3 },
                                    whileTap: { scale: 0.95 },
                                    onClick: function () {
                                      return navigator.clipboard.writeText(
                                        "0x767620B46160e2A8F3cc8203405Da306e4337d1B"
                                      );
                                    },
                                    className:
                                      "px-6 py-3 bg-gradient-to-br from-white/30 to-white/15 backdrop-blur-xl rounded-full flex items-center gap-3 transition-all duration-300 border-2 border-white/40",
                                    style: {
                                      boxShadow:
                                        "inset 0 2px 10px rgba(255,255,255,0.3), 0 8px 20px rgba(0,0,0,0.2), 0 0 30px rgba(255,255,255,0.1)",
                                    },
                                    children: [
                                      (0, r.jsx)("span", {
                                        className:
                                          "text-white font-mono text-sm break-all",
                                        children:
                                          "0x767620B46160e2A8F3cc8203405Da306e4337d1B",
                                      }),
                                      (0, r.jsx)(g.Z, {
                                        className: "w-4 h-4 text-yellow-200",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: O,
                              className: "w-full lg:w-1/2 max-w-lg z-20",
                              children: (0, r.jsxs)("div", {
                                className: "relative w-full aspect-square",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-br from-white/50 via-orange-100/40 to-yellow-200/50 rounded-full blur-3xl scale-110 animate-pulse",
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "relative w-full h-full",
                                    style: {
                                      filter:
                                        "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 0 80px rgba(255,255,255,0.6))",
                                    },
                                    children: (0, r.jsx)(s(), {
                                      src: v,
                                      alt: "NAIRO",
                                      layout: "fill",
                                      objectFit: "contain",
                                      className: "rounded-full relative z-10",
                                      priority: !0,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.E.section, {
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      variants: k,
                      className:
                        "py-24 bg-gradient-to-b from-amber-400 to-orange-500 relative",
                      id: "About",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "absolute inset-0 overflow-hidden pointer-events-none",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "absolute top-10 left-1/4 w-32 h-32 bg-white/15 rounded-full blur-2xl animate-pulse",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute bottom-20 right-1/3 w-40 h-40 bg-yellow-200/30 rounded-full blur-3xl animate-bounce",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "container mx-auto px-4 relative z-10",
                          children: [
                            (0, r.jsxs)(i.E.h2, {
                              variants: O,
                              className:
                                "text-4xl sm:text-5xl lg:text-6xl text-center text-white mb-16 drop-shadow-2xl",
                              style: {
                                textShadow: "0 0 30px rgba(255,255,255,0.5)",
                              },
                              children: [
                                "Why ",
                                (0, r.jsx)("span", {
                                  className: "text-yellow-200",
                                  children: "$NAIRO",
                                }),
                                "?",
                              ],
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: k,
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
                              children: [
                                {
                                  title: "Loyalty & Love",
                                  desc: "NAIRO represents pure loyalty and love",
                                },
                                {
                                  title: "Family-Driven",
                                  desc: "100% family and community-driven",
                                },
                                {
                                  title: "Friendship Magic",
                                  desc: "The magic of friendship and bonds",
                                },
                              ].map(function (e, t) {
                                return (0,
                                r.jsxs)(i.E.div, { variants: O, whileHover: { scale: 1.05, rotate: 2 }, className: "bg-white/25 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/40 shadow-2xl", style: { boxShadow: "inset 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)" }, children: [(0, r.jsx)("h3", { className: "text-xl text-white font-bold mb-3 drop-shadow-lg", children: e.title }), (0, r.jsx)("p", { className: "text-orange-50", children: e.desc })] }, t);
                              }),
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: O,
                              className: "w-full max-w-4xl mx-auto my-8",
                              children: (0, r.jsx)("div", {
                                className:
                                  "relative w-full bg-white/30 backdrop-blur-lg rounded-3xl p-2 border-2 border-white/40 shadow-2xl",
                                children: (0, r.jsx)(s(), {
                                  src: c,
                                  alt: "NAIRO",
                                  layout: "responsive",
                                  objectFit: "contain",
                                  className:
                                    "rounded-2xl filter drop-shadow-2xl",
                                  priority: !0,
                                }),
                              }),
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: O,
                              className: "w-full max-w-4xl mx-auto my-8",
                              children: (0, r.jsx)("div", {
                                className:
                                  "relative w-full bg-white/30 backdrop-blur-lg rounded-3xl p-2 border-2 border-white/40 shadow-2xl group",
                                children: (0, r.jsxs)("div", {
                                  className: "relative",
                                  children: [
                                    (0, r.jsx)(s(), {
                                      src: f,
                                      alt: "NAIRO Family Moments",
                                      layout: "responsive",
                                      objectFit: "contain",
                                      className:
                                        "rounded-2xl filter drop-shadow-2xl",
                                      priority: !0,
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl flex items-center justify-center",
                                      children: (0, r.jsxs)(i.E.a, {
                                        whileHover: { scale: 1.1 },
                                        whileTap: { scale: 0.95 },
                                        href: "https://www.instagram.com/p/DN8cQjHiB80/?igsh=MXRrMjVheWNqYnVjcA==",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-lg rounded-2xl px-6 py-4 flex items-center gap-3 border-2 border-white/60 shadow-2xl",
                                        children: [
                                          (0, r.jsx)(h.Z, {
                                            className:
                                              "w-6 h-6 text-orange-600",
                                          }),
                                          (0, r.jsx)("span", {
                                            className:
                                              "text-orange-700 font-bold text-lg",
                                            children: "View on Instagram",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: O,
                              className:
                                "bg-white/30 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/40 shadow-2xl max-w-5xl mx-auto",
                              style: {
                                boxShadow:
                                  "inset 0 0 30px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.15)",
                              },
                              children: (0, r.jsx)("p", {
                                className:
                                  "md:text-xl text-white text-center leading-relaxed drop-shadow-lg",
                                children:
                                  "Meet NAIRO – the newest member of Vitalik's family, living with Dmitry Buterin. A loyal, playful, and bright dog, NAIRO quickly became more than just a pet — he's a symbol of warmth, family bonds, and the softer side of the crypto world. NAIRO represents friendship, loyalty, and growth — values that bring people together. Join the NAIRO family and discover how the love of a dog can unite a community in the most wholesome way possible.",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.E.section, {
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      variants: k,
                      className:
                        "py-24 bg-gradient-to-b from-orange-500 to-red-600 relative",
                      id: "Tokenomics",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "absolute inset-0 overflow-hidden pointer-events-none",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "absolute top-1/4 right-10 w-28 h-28 bg-yellow-200/25 rounded-full blur-2xl animate-pulse",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute bottom-1/3 left-10 w-36 h-36 bg-white/20 rounded-full blur-3xl animate-bounce",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "container mx-auto px-4 relative z-10",
                          children: [
                            (0, r.jsx)(i.E.h2, {
                              variants: O,
                              className:
                                "text-3xl md:text-5xl text-center text-white mb-16 drop-shadow-2xl",
                              style: {
                                textShadow: "0 0 30px rgba(255,255,255,0.5)",
                              },
                              children: "Tokenomics",
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: k,
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                              children: [
                                { option: "Name", value: "NAIRO" },
                                { option: "Ticker", value: "$NAIRO" },
                                { option: "Supply", value: "420690000000" },
                                { option: "Tax", value: "0/0" },
                              ].map(function (e, t) {
                                return (0,
                                r.jsxs)(i.E.div, { variants: O, whileHover: { scale: 1.08, rotate: 3 }, className: "bg-gradient-to-br from-white/35 to-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/50 shadow-2xl relative overflow-hidden", style: { boxShadow: "inset 0 0 30px rgba(255,255,255,0.4), 0 0 50px rgba(255,255,255,0.2)" }, children: [(0, r.jsx)("div", { className: "absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-200/40 to-transparent rounded-bl-3xl" }), (0, r.jsx)("h3", { className: "md:text-xl text-orange-50 mb-4 drop-shadow-lg font-semibold", children: e.option }), (0, r.jsx)("p", { className: "md:text-3xl text-2xl text-white font-bold drop-shadow-lg", children: e.value })] }, t);
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.E.section, {
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      variants: k,
                      className:
                        "py-24 bg-gradient-to-b from-red-600 to-orange-700 relative",
                      id: "Roadmap",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "absolute inset-0 overflow-hidden pointer-events-none",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "absolute top-20 left-1/3 w-44 h-44 bg-yellow-200/20 rounded-full blur-3xl animate-pulse",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute bottom-32 right-1/4 w-32 h-32 bg-orange-200/25 rounded-full blur-2xl animate-bounce",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "container mx-auto px-4 relative z-10",
                          children: [
                            (0, r.jsx)(i.E.h2, {
                              variants: O,
                              className:
                                "text-5xl md:text-7xl text-center text-white mb-16 drop-shadow-2xl",
                              style: {
                                textShadow: "0 0 40px rgba(255,255,255,0.6)",
                              },
                              children: "Roadmap",
                            }),
                            (0, r.jsx)("div", {
                              className: "space-y-12",
                              children: [
                                {
                                  title: "Phase 1",
                                  desc: [
                                    "Launch community channels and welcome the NAIRO family",
                                    "Deploy contract on BASE with loyalty and trust",
                                    "Build the warmest website in crypto",
                                    "Gather the first pack of NAIRO enthusiasts",
                                  ],
                                },
                                {
                                  title: "Phase 2",
                                  desc: [
                                    "Expand our loyal community through organic growth",
                                    "Partner with family-friendly projects in the BASE ecosystem",
                                    "Launch community events celebrating friendship and loyalty",
                                    "Establish presence on major DEXes with genuine connections",
                                  ],
                                },
                                {
                                  title: "Phase 3",
                                  desc: [
                                    "Achieve major exchange listings while maintaining our values",
                                    "Launch exclusive NAIRO NFT collection featuring family moments",
                                    "Global expansion of the friendship and loyalty movement",
                                    "Develop utility partnerships celebrating bonds and growth",
                                  ],
                                },
                              ].map(function (e, t) {
                                return (0, r.jsxs)(
                                  i.E.div,
                                  {
                                    variants: O,
                                    whileHover: { scale: 1.02 },
                                    className:
                                      "flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/40 shadow-2xl relative overflow-hidden",
                                    style: {
                                      boxShadow:
                                        "inset 0 0 40px rgba(255,255,255,0.3), 0 0 50px rgba(255,255,255,0.15)",
                                    },
                                    children: [
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-transparent rounded-br-3xl",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-tl-3xl",
                                      }),
                                      (0, r.jsxs)("div", {
                                        className: "w-full",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            className:
                                              "text-3xl text-white mb-6 drop-shadow-lg font-bold text-center md:text-left",
                                            children: e.title,
                                          }),
                                          (0, r.jsx)("ul", {
                                            className: "space-y-4",
                                            children: e.desc.map(function (
                                              e,
                                              t
                                            ) {
                                              return (0, r.jsxs)(
                                                i.E.li,
                                                {
                                                  variants: O,
                                                  whileHover: { x: 10 },
                                                  className:
                                                    "flex items-center gap-4 text-orange-50 bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/30",
                                                  children: [
                                                    (0, r.jsx)(p.Z, {
                                                      className:
                                                        "w-6 h-6 text-yellow-200 flex-shrink-0",
                                                    }),
                                                    (0, r.jsx)("span", {
                                                      className: "text-lg",
                                                      children: e,
                                                    }),
                                                  ],
                                                },
                                                t
                                              );
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(i.E.section, {
                      initial: "initial",
                      whileInView: "animate",
                      viewport: { once: !0 },
                      variants: k,
                      className:
                        "py-32 bg-gradient-to-b from-orange-700 to-red-800 relative overflow-hidden",
                      id: "Community",
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "absolute inset-0 overflow-hidden pointer-events-none",
                          children: [
                            (0, r.jsx)(i.E.div, {
                              animate: {
                                y: [0, -30, 0],
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.2, 1],
                              },
                              transition: {
                                duration: 8,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                              },
                              className:
                                "absolute top-20 left-1/6 w-48 h-48 bg-gradient-to-br from-yellow-200/25 to-orange-200/20 rounded-full blur-3xl",
                            }),
                            (0, r.jsx)(i.E.div, {
                              animate: {
                                y: [0, 20, 0],
                                x: [0, -15, 0],
                                rotate: [0, -15, 15, 0],
                              },
                              transition: {
                                duration: 10,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                                delay: 2,
                              },
                              className:
                                "absolute bottom-20 right-1/5 w-52 h-52 bg-gradient-to-br from-orange-300/20 to-yellow-300/15 rounded-full blur-3xl",
                            }),
                            (0, r.jsx)(i.E.div, {
                              animate: {
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2],
                              },
                              transition: {
                                duration: 6,
                                repeat: 1 / 0,
                                ease: "easeInOut",
                                delay: 1,
                              },
                              className:
                                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "container mx-auto px-4 relative z-10",
                          children: [
                            (0, r.jsxs)(i.E.div, {
                              variants: O,
                              className: "text-center mb-16",
                              children: [
                                (0, r.jsxs)(i.E.h2, {
                                  className:
                                    "text-5xl md:text-7xl font-black text-white mb-6 leading-tight",
                                  whileHover: { scale: 1.05 },
                                  style: {
                                    textShadow:
                                      "0 10px 20px rgba(0,0,0,0.5), 0 0 60px rgba(255,255,255,0.8), 0 0 120px rgba(255,193,7,0.5)",
                                    letterSpacing: "-0.02em",
                                  },
                                  children: [
                                    "Join the",
                                    " ",
                                    (0, r.jsx)("span", {
                                      className: "text-yellow-200",
                                      style: {
                                        textShadow:
                                          "0 10px 20px rgba(0,0,0,0.6), 0 0 80px rgba(254,240,138,0.9), 0 0 160px rgba(254,240,138,0.6)",
                                      },
                                      children: "NAIRO Family",
                                    }),
                                  ],
                                }),
                                (0, r.jsx)(i.E.div, {
                                  variants: O,
                                  className:
                                    "bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/40 max-w-3xl mx-auto",
                                  style: {
                                    boxShadow:
                                      "inset 0 4px 30px rgba(255,255,255,0.3), inset 0 -4px 30px rgba(255,193,7,0.2), 0 25px 50px rgba(0,0,0,0.3), 0 0 80px rgba(255,255,255,0.2)",
                                  },
                                  children: (0, r.jsx)("p", {
                                    className:
                                      "text-xl md:text-2xl text-white leading-relaxed drop-shadow-lg",
                                    children:
                                      "Ready to be part of a family that values loyalty, friendship, and growth? Join thousands of NAIRO family members as we celebrate the bonds that unite us and the warmth that a loyal companion brings to our lives.",
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsxs)(i.E.div, {
                              variants: k,
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",
                              children: [
                                (0, r.jsxs)(i.E.a, {
                                  variants: O,
                                  whileHover: {
                                    scale: 1.08,
                                    rotate: 2,
                                    y: -10,
                                  },
                                  whileTap: { scale: 0.95 },
                                  href: "https://t.me/NairoETH",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "bg-gradient-to-br from-blue-500/35 to-orange-500/25 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 text-center transition-all duration-500 group relative overflow-hidden",
                                  style: {
                                    boxShadow:
                                      "inset 0 4px 20px rgba(255,255,255,0.35), 0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(59,130,246,0.4)",
                                  },
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200/40 to-transparent rounded-bl-3xl",
                                    }),
                                    (0, r.jsx)(u.Z, {
                                      className:
                                        "w-16 h-16 text-white mx-auto mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300",
                                    }),
                                    (0, r.jsx)("h3", {
                                      className:
                                        "text-2xl font-bold text-white mb-4 drop-shadow-lg",
                                      children: "Telegram",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-orange-50 text-lg",
                                      children:
                                        "Daily updates, family moments, and community love",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)(i.E.a, {
                                  variants: O,
                                  whileHover: {
                                    scale: 1.08,
                                    rotate: -2,
                                    y: -10,
                                  },
                                  whileTap: { scale: 0.95 },
                                  href: "https://x.com/NAIRO_ETH",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "bg-gradient-to-br from-slate-700/35 to-orange-600/25 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/50 text-center transition-all duration-500 group relative overflow-hidden",
                                  style: {
                                    boxShadow:
                                      "inset 0 4px 20px rgba(255,255,255,0.35), 0 20px 40px rgba(0,0,0,0.3), 0 0 60px rgba(148,163,184,0.4)",
                                  },
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/40 to-transparent rounded-bl-3xl",
                                    }),
                                    (0, r.jsx)(w.Z, {
                                      className:
                                        "w-16 h-16 text-white mx-auto mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300",
                                    }),
                                    (0, r.jsx)("h3", {
                                      className:
                                        "text-2xl font-bold text-white mb-4 drop-shadow-lg",
                                      children: "Twitter / X",
                                    }),
                                    (0, r.jsx)("p", {
                                      className: "text-orange-50 text-lg",
                                      children:
                                        "Latest updates and heartwarming family stories",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)(i.E.div, {
                              variants: O,
                              className: "text-center",
                              children: (0, r.jsx)(i.E.div, {
                                whileHover: { scale: 1.05, y: -5 },
                                whileTap: { scale: 0.95 },
                                className: "inline-block",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 p-1 rounded-full",
                                  children: (0, r.jsx)("div", {
                                    className:
                                      "bg-gradient-to-br from-yellow-300 via-orange-300 to-red-400 px-12 py-6 rounded-full",
                                    children: (0, r.jsx)("span", {
                                      className:
                                        "text-2xl md:text-3xl font-black text-black drop-shadow-lg",
                                      children: "Join the Family! ❤️",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("footer", {
                      className:
                        "py-8 bg-gradient-to-r from-red-800 to-orange-800 border-t-4 border-white/40 relative",
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-r from-white/8 to-yellow-50/15",
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "container mx-auto px-4 text-center text-white relative z-10",
                          children: (0, r.jsxs)(i.E.div, {
                            initial: { opacity: 0 },
                            whileInView: { opacity: 1 },
                            className: "space-y-4",
                            children: [
                              (0, r.jsxs)(i.E.p, {
                                className: "text-lg drop-shadow-lg",
                                children: [
                                  "NAIRO ",
                                  new Date().getFullYear(),
                                  ". All Rights Reserved. Loyal Always.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
  },
  function (e) {
    e.O(0, [29, 774, 888, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
