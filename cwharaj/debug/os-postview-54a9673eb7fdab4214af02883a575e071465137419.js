!function (b, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = b.document ? e(b, !0) : function (b) {
        if (!b.document)throw Error("jQuery requires a window with a document");
        return e(b)
    } : e(b)
}("undefined" != typeof window ? window : this, function (b, e) {
    function c(a) {
        var b = a.length, c = g.type(a);
        return "function" === c || g.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }

    function a(a, b, c) {
        if (g.isFunction(b))return g.grep(a, function (a, t) {
            return !!b.call(a, t,
                    a) !== c
        });
        if (b.nodeType)return g.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ua.test(b))return g.filter(b, a, c);
            b = g.filter(b, a)
        }
        return g.grep(a, function (a) {
            return 0 <= g.inArray(a, b) !== c
        })
    }

    function d(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function k(a) {
        var b = Ia[a] = {};
        return g.each(a.match(W) || [], function (a, t) {
            b[t] = !0
        }), b
    }

    function h() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", f, !1), b.removeEventListener("load", f, !1)) : (z.detachEvent("onreadystatechange",
            f), b.detachEvent("onload", f))
    }

    function f() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (h(), g.ready())
    }

    function p(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(Ya, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? g.parseJSON(c) : c
                } catch (f) {
                }
                g.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function r(a) {
        for (var b in a)if (("data" !== b || !g.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function m(a, b, c, d) {
        if (g.acceptData(a)) {
            var f, e, l = g.expando, k = a.nodeType, h = k ? g.cache : a, n = k ? a[l] : a[l] && l;
            if (n && h[n] && (d || h[n].data) || void 0 !== c || "string" != typeof b)return n || (n = k ? a[l] = U.pop() || g.guid++ : l), h[n] || (h[n] = k ? {} : {toJSON: g.noop}), ("object" == typeof b || "function" == typeof b) && (d ? h[n] = g.extend(h[n], b) : h[n].data = g.extend(h[n].data, b)), e = h[n], d || (e.data || (e.data = {}), e = e.data), void 0 !== c && (e[g.camelCase(b)] = c), "string" == typeof b ? (f = e[b], null == f && (f = e[g.camelCase(b)])) : f = e, f
        }
    }

    function v(a, b, c) {
        if (g.acceptData(a)) {
            var d,
                f, e = a.nodeType, l = e ? g.cache : a, k = e ? a[g.expando] : g.expando;
            if (l[k]) {
                if (b && (d = c ? l[k] : l[k].data)) {
                    g.isArray(b) ? b = b.concat(g.map(b, g.camelCase)) : b in d ? b = [b] : (b = g.camelCase(b), b = b in d ? [b] : b.split(" "));
                    for (f = b.length; f--;)delete d[b[f]];
                    if (c ? !r(d) : !g.isEmptyObject(d))return
                }
                (c || (delete l[k].data, r(l[k]))) && (e ? g.cleanData([a], !0) : y.deleteExpando || l != l.window ? delete l[k] : l[k] = null)
            }
        }
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function n() {
        try {
            return z.activeElement
        } catch (a) {
        }
    }

    function q(a) {
        var b = hb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)for (; b.length;)a.createElement(b.pop());
        return a
    }

    function l(a, b) {
        var c, d, f = 0, e = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!e)for (e = [], c = a.childNodes || a; null != (d = c[f]); f++)!b || g.nodeName(d, b) ? e.push(d) : g.merge(e, l(d, b));
        return void 0 === b || b && g.nodeName(a, b) ? g.merge([a], e) : e
    }

    function u(a) {
        ib.test(a.type) && (a.defaultChecked = a.checked)
    }

    function M(a,
               b) {
        return g.nodeName(a, "table") && g.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function D(a) {
        return a.type = (null !== g.find.attr(a, "type")) + "/" + a.type, a
    }

    function C(a) {
        var b = Fb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function J(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)g._data(c, "globalEval", !b || g._data(b[d], "globalEval"))
    }

    function A(a, b) {
        if (1 === b.nodeType && g.hasData(a)) {
            var c, d, f;
            d = g._data(a);
            var e = g._data(b, d), l = d.events;
            if (l)for (c in delete e.handle, e.events = {}, l)for (d = 0, f = l[c].length; f > d; d++)g.event.add(b, c, l[c][d]);
            e.data && (e.data = g.extend({}, e.data))
        }
    }

    function F(a, c) {
        var d = g(c.createElement(a)).appendTo(c.body), f = b.getDefaultComputedStyle ? b.getDefaultComputedStyle(d[0]).display : g.css(d[0], "display");
        return d.detach(), f
    }

    function E(a) {
        var b = z, c = za[a];
        return c || (c = F(a, b), "none" !== c && c || (X = (X || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (X[0].contentWindow ||
        X[0].contentDocument).document, b.write(), b.close(), c = F(a, b), X.detach()), za[a] = c), c
    }

    function K(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function da(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, g = pb.length; g--;)if (b = pb[g] + c, b in a)return b;
        return d
    }

    function N(a, b) {
        for (var c, d, f, e = [], l = 0, k = a.length; k > l; l++)d = a[l], d.style && (e[l] = g._data(d, "olddisplay"), c = d.style.display, b ? (e[l] || "none" !== c || (d.style.display =
            ""), "" === d.style.display && Aa(d) && (e[l] = g._data(d, "olddisplay", E(d.nodeName)))) : e[l] || (f = Aa(d), (c && "none" !== c || !f) && g._data(d, "olddisplay", f ? c : g.css(d, "display"))));
        for (l = 0; k > l; l++)d = a[l], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? e[l] || "" : "none"));
        return a
    }

    function Y(a, b, c) {
        return (a = qb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function T(a, b, c, d, f) {
        b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var e = 0; 4 > b; b += 2)"margin" === c && (e += g.css(a, c + la[b], !0, f)),
            d ? ("content" === c && (e -= g.css(a, "padding" + la[b], !0, f)), "margin" !== c && (e -= g.css(a, "border" + la[b] + "Width", !0, f))) : (e += g.css(a, "padding" + la[b], !0, f), "padding" !== c && (e += g.css(a, "border" + la[b] + "Width", !0, f)));
        return e
    }

    function B(a, b, c) {
        var d = !0, f = "width" === b ? a.offsetWidth : a.offsetHeight, e = ha(a), l = y.boxSizing() && "border-box" === g.css(a, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = Ea(a, b, e), (0 > f || null == f) && (f = a.style[b]), Ja.test(f))return f;
            d = l && (y.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) || 0
        }
        return f +
            T(a, b, c || (l ? "border" : "content"), d, e) + "px"
    }

    function I(a, b, c, d, g) {
        return new I.prototype.init(a, b, c, d, g)
    }

    function sa() {
        return setTimeout(function () {
            ma = void 0
        }), ma = g.now()
    }

    function va(a, b) {
        var c, d = {height: a}, g = 0;
        for (b = b ? 1 : 0; 4 > g; g += 2 - b)c = la[g], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ja(a, b, c) {
        for (var d, g = (pa[b] || []).concat(pa["*"]), f = 0, e = g.length; e > f; f++)if (d = g[f].call(c, b, a))return d
    }

    function Fa(a, b) {
        var c, d, f, e, l;
        for (c in a)if (d = g.camelCase(c), f = b[d], e = a[c], g.isArray(e) &&
            (f = e[1], e = a[c] = e[0]), c !== d && (a[d] = e, delete a[c]), l = g.cssHooks[d], l && "expand" in l)for (c in e = l.expand(e), delete a[d], e)c in a || (a[c] = e[c], b[c] = f); else b[d] = f
    }

    function Z(a, b, c) {
        var d, f = 0, e = ea.length, l = g.Deferred().always(function () {
            delete k.elem
        }), k = function () {
            if (d)return !1;
            for (var b = ma || sa(), b = Math.max(0, h.startTime + h.duration - b), c = 1 - (b / h.duration || 0), G = 0, g = h.tweens.length; g > G; G++)h.tweens[G].run(c);
            return l.notifyWith(a, [h, c, b]), 1 > c && g ? b : (l.resolveWith(a, [h]), !1)
        }, h = l.promise({
            elem: a,
            props: g.extend({},
                b),
            opts: g.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: ma || sa(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = g.Tween(a, h.opts, b, c, h.opts.specialEasing[b] || h.opts.easing);
                return h.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, G = b ? h.tweens.length : 0;
                if (d)return this;
                for (d = !0; G > c; c++)h.tweens[c].run(1);
                return b ? l.resolveWith(a, [h, b]) : l.rejectWith(a, [h, b]), this
            }
        });
        c = h.props;
        for (Fa(c, h.opts.specialEasing); e > f; f++)if (b = ea[f].call(h, a, c, h.opts))return b;
        return g.map(c,
            ja, h), g.isFunction(h.opts.start) && h.opts.start.call(a, h), g.fx.timer(g.extend(k, {
            elem: a,
            anim: h,
            queue: h.opts.queue
        })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function H(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, f = 0, e = b.toLowerCase().match(W) || [];
            if (g.isFunction(c))for (; d = e[f++];)"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Q(a, b, c, d) {
        function f(h) {
            var k;
            return e[h] = !0, g.each(a[h] || [], function (a, t) {
                var g = t(b, c, d);
                return "string" != typeof g || l || e[g] ? l ? !(k = g) : void 0 : (b.dataTypes.unshift(g), f(g), !1)
            }), k
        }

        var e = {}, l = a === Gb;
        return f(b.dataTypes[0]) || !e["*"] && f("*")
    }

    function ia(a, b) {
        var c, d, f = g.ajaxSettings.flatOptions || {};
        for (d in b)void 0 !== b[d] && ((f[d] ? a : c || (c = {}))[d] = b[d]);
        return c && g.extend(!0, a, c), a
    }

    function aa(a, b, c, d) {
        var f;
        if (g.isArray(b))g.each(b, function (b, G) {
            c || Xb.test(a) ? d(a, G) : aa(a + "[" + ("object" == typeof G ? b : "") + "]", G, c, d)
        }); else if (c || "object" !== g.type(b))d(a,
            b); else for (f in b)aa(a + "[" + f + "]", b[f], c, d)
    }

    function R() {
        try {
            return new b.XMLHttpRequest
        } catch (a) {
        }
    }

    function jb(a) {
        return g.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var U = [], Ba = U.slice, qa = U.concat, $a = U.push, kb = U.indexOf, Pa = {}, rb = Pa.toString, ka = Pa.hasOwnProperty, ab = "".trim, y = {}, g = function (a, b) {
        return new g.fn.init(a, b)
    }, Hb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, sb = /^-ms-/, Qa = /-([\da-z])/gi, ba = function (a, b) {
        return b.toUpperCase()
    };
    g.fn = g.prototype = {
        jquery: "1.11.0", constructor: g, selector: "",
        length: 0, toArray: function () {
            return Ba.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : Ba.call(this)
        }, pushStack: function (a) {
            a = g.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        }, each: function (a, b) {
            return g.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(g.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(Ba.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: $a, sort: U.sort, splice: U.splice
    };
    g.extend = g.fn.extend = function () {
        var a, b, c, d, f, e, l = arguments[0] || {}, h = 1, k = arguments.length, n = !1;
        "boolean" == typeof l && (n = l, l = arguments[h] || {}, h++);
        "object" == typeof l || g.isFunction(l) || (l = {});
        for (h === k && (l = this, h--); k > h; h++)if (null != (f = arguments[h]))for (d in f)a = l[d], c = f[d], l !== c && (n && c && (g.isPlainObject(c) ||
        (b = g.isArray(c))) ? (b ? (b = !1, e = a && g.isArray(a) ? a : []) : e = a && g.isPlainObject(a) ? a : {}, l[d] = g.extend(n, e, c)) : void 0 !== c && (l[d] = c));
        return l
    };
    g.extend({
        expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw Error(a);
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === g.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === g.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return 0 <= a - parseFloat(a)
        }, isEmptyObject: function (a) {
            for (var b in a)return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== g.type(a) || a.nodeType || g.isWindow(a))return !1;
            try {
                if (a.constructor && !ka.call(a, "constructor") && !ka.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            if (y.ownLast)for (b in a)return ka.call(a, b);
            for (b in a);
            return void 0 === b || ka.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? Pa[rb.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            a && g.trim(a) && (b.execScript || function (a) {
                b.eval.call(b,
                    a)
            })(a)
        }, camelCase: function (a) {
            return a.replace(sb, "ms-").replace(Qa, ba)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, d) {
            var g, f = 0, e = a.length, l = c(a);
            if (d)if (l)for (; e > f && (g = b.apply(a[f], d), !1 !== g); f++); else for (f in a) {
                if (g = b.apply(a[f], d), !1 === g)break
            } else if (l)for (; e > f && (g = b.call(a[f], f, a[f]), !1 !== g); f++); else for (f in a)if (g = b.call(a[f], f, a[f]), !1 === g)break;
            return a
        }, trim: ab && !ab.call("\ufeff\u00a0") ? function (a) {
            return null == a ? "" : ab.call(a)
        } :
            function (a) {
                return null == a ? "" : (a + "").replace(Hb, "")
            }, makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? g.merge(d, "string" == typeof a ? [a] : a) : $a.call(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (kb)return kb.call(b, a, c);
                d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, f = a.length; c > d;)a[f++] = b[d++];
            if (c !== c)for (; void 0 !== b[d];)a[f++] = b[d++];
            return a.length = f, a
        }, grep: function (a, b, c) {
            for (var d = [], f = 0,
                     g = a.length, e = !c; g > f; f++)c = !b(a[f], f), c !== e && d.push(a[f]);
            return d
        }, map: function (a, b, d) {
            var f, g = 0, e = a.length, l = [];
            if (c(a))for (; e > g; g++)f = b(a[g], g, d), null != f && l.push(f); else for (g in a)f = b(a[g], g, d), null != f && l.push(f);
            return qa.apply([], l)
        }, guid: 1, proxy: function (a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), g.isFunction(a) ? (c = Ba.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(Ba.call(arguments)))
            }, d.guid = a.guid = a.guid || g.guid++, d) : void 0
        }, now: function () {
            return +new Date
        }, support: y
    });
    g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        Pa["[object " + b + "]"] = b.toLowerCase()
    });
    var Ga = function (a) {
        function b(a, c, t, d) {
            var f, g, G, e, l;
            if ((c ? c.ownerDocument || c : H) !== z && y(c), c = c || z, t = t || [], !a || "string" != typeof a)return t;
            if (1 !== (e = c.nodeType) && 9 !== e)return [];
            if (I && !d) {
                if (f = ta.exec(a))if (G = f[1])if (9 === e) {
                    if (g = c.getElementById(G), !g || !g.parentNode)return t;
                    if (g.id === G)return t.push(g), t
                } else {
                    if (c.ownerDocument && (g = c.ownerDocument.getElementById(G)) &&
                        xa(c, g) && g.id === G)return t.push(g), t
                } else {
                    if (f[2])return Q.apply(t, c.getElementsByTagName(a)), t;
                    if ((G = f[3]) && C.getElementsByClassName && c.getElementsByClassName)return Q.apply(t, c.getElementsByClassName(G)), t
                }
                if (C.qsa && (!oa || !oa.test(a))) {
                    if (g = f = O, G = c, l = 9 === e && a, 1 === e && "object" !== c.nodeName.toLowerCase()) {
                        e = q(a);
                        (f = c.getAttribute("id")) ? g = f.replace(ua, "\\$&") : c.setAttribute("id", g);
                        g = "[id='" + g + "'] ";
                        for (G = e.length; G--;)e[G] = g + m(e[G]);
                        G = na.test(a) && n(c.parentNode) || c;
                        l = e.join(",")
                    }
                    if (l)try {
                        return Q.apply(t,
                            G.querySelectorAll(l)), t
                    } catch (h) {
                    } finally {
                        f || c.removeAttribute("id")
                    }
                }
            }
            var k;
            a:{
                a = a.replace(U, "$1");
                var L, V;
                g = q(a);
                if (!d && 1 === g.length) {
                    if (k = g[0] = g[0].slice(0), 2 < k.length && "ID" === (L = k[0]).type && C.getById && 9 === c.nodeType && I && A.relative[k[1].type]) {
                        if (c = (A.find.ID(L.matches[0].replace(X, ba), c) || [])[0], !c) {
                            k = t;
                            break a
                        }
                        a = a.slice(k.shift().value.length)
                    }
                    for (e = fa.needsContext.test(a) ? 0 : k.length; e-- && (L = k[e], !A.relative[f = L.type]);)if ((V = A.find[f]) && (d = V(L.matches[0].replace(X, ba), na.test(k[0].type) && n(c.parentNode) ||
                            c))) {
                        if (k.splice(e, 1), a = d.length && m(k), !a) {
                            k = (Q.apply(t, d), t);
                            break a
                        }
                        break
                    }
                }
                k = (J(a, g)(d, c, !I, t, na.test(a) && n(c.parentNode) || c), t)
            }
            return k
        }

        function c() {
            function a(c, t) {
                return b.push(c + " ") > A.cacheLength && delete a[b.shift()], a[c + " "] = t
            }

            var b = [];
            return a
        }

        function d(a) {
            return a[O] = !0, a
        }

        function f(a) {
            var b = z.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), t = a.length; t--;)A.attrHandle[c[t]] = b
        }

        function e(a,
                   b) {
            var c = b && a, t = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (t)return t;
            if (c)for (; c = c.nextSibling;)if (c === b)return -1;
            return a ? 1 : -1
        }

        function l(a) {
            return function (b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return d(function (b) {
                return b = +b, d(function (c, t) {
                    for (var d, f = a([], c.length, b), g = f.length; g--;)c[d = f[g]] &&
                    (c[d] = !(t[d] = c[d]))
                })
            })
        }

        function n(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function u() {
        }

        function q(a, c) {
            var t, d, f, g, e, l, k;
            if (e = Y[a + " "])return c ? 0 : e.slice(0);
            e = a;
            l = [];
            for (k = A.preFilter; e;) {
                t && !(d = ha.exec(e)) || (d && (e = e.slice(d[0].length) || e), l.push(f = []));
                t = !1;
                (d = va.exec(e)) && (t = d.shift(), f.push({
                    value: t,
                    type: d[0].replace(U, " ")
                }), e = e.slice(t.length));
                for (g in A.filter)!(d = fa[g].exec(e)) || k[g] && !(d = k[g](d)) || (t = d.shift(), f.push({
                    value: t,
                    type: g,
                    matches: d
                }), e = e.slice(t.length));
                if (!t)break
            }
            return c ? e.length : e ? b.error(a) : Y(a, l).slice(0)
        }

        function m(a) {
            for (var b = 0, c = a.length, t = ""; c > b; b++)t += a[b].value;
            return t
        }

        function D(a, b, c) {
            var t = b.dir, d = c && "parentNode" === t, f = T++;
            return b.first ? function (b, c, f) {
                for (; b = b[t];)if (1 === b.nodeType || d)return a(b, c, f)
            } : function (b, c, g) {
                var e, G, l = [ga, f];
                if (g)for (; b = b[t];) {
                    if ((1 === b.nodeType || d) && a(b, c, g))return !0
                } else for (; b = b[t];)if (1 === b.nodeType || d) {
                    if (G = b[O] || (b[O] = {}), (e = G[t]) && e[0] === ga && e[1] === f)return l[2] = e[2];
                    if (G[t] = l, l[2] = a(b, c, g))return !0
                }
            }
        }

        function p(a) {
            return 1 < a.length ? function (b, c, t) {
                for (var d = a.length; d--;)if (!a[d](b, c, t))return !1;
                return !0
            } : a[0]
        }

        function M(a, b, c, t, d) {
            for (var f, g = [], e = 0, G = a.length, l = null != b; G > e; e++)(f = a[e]) && (!c || c(f, t, d)) && (g.push(f), l && b.push(e));
            return g
        }

        function v(a, c, t, f, g, e) {
            return f && !f[O] && (f = v(f)), g && !g[O] && (g = v(g, e)), d(function (d, e, l, k) {
                var h, L, n = [], V = [], u = e.length, q;
                if (!(q = d)) {
                    q = c || "*";
                    for (var m = l.nodeType ? [l] : l, Oa = [], Za = 0, D = m.length; D > Za; Za++)b(q, m[Za], Oa);
                    q = Oa
                }
                q = !a || !d && c ? q : M(q, n, a, l, k);
                m = t ? g || (d ? a :
                u || f) ? [] : e : q;
                if (t && t(q, m, l, k), f)for (h = M(m, V), f(h, [], l, k), l = h.length; l--;)(L = h[l]) && (m[V[l]] = !(q[V[l]] = L));
                if (d) {
                    if (g || a) {
                        if (g) {
                            h = [];
                            for (l = m.length; l--;)(L = m[l]) && h.push(q[l] = L);
                            g(null, m = [], h, k)
                        }
                        for (l = m.length; l--;)(L = m[l]) && -1 < (h = g ? R.call(d, L) : n[l]) && (d[h] = !(e[h] = L))
                    }
                } else m = M(m === e ? m.splice(u, m.length) : m), g ? g(null, e, m, k) : Q.apply(e, m)
            })
        }

        function r(a) {
            var b, c, t, d = a.length, f = A.relative[a[0].type];
            c = f || A.relative[" "];
            for (var g = f ? 1 : 0, e = D(function (a) {
                return a === b
            }, c, !0), G = D(function (a) {
                return -1 < R.call(b,
                        a)
            }, c, !0), l = [function (a, c, t) {
                return !f && (t || c !== F) || ((b = c).nodeType ? e(a, c, t) : G(a, c, t))
            }]; d > g; g++)if (c = A.relative[a[g].type])l = [D(p(l), c)]; else {
                if (c = A.filter[a[g].type].apply(null, a[g].matches), c[O]) {
                    for (t = ++g; d > t && !A.relative[a[t].type]; t++);
                    return v(1 < g && p(l), 1 < g && m(a.slice(0, g - 1).concat({value: " " === a[g - 2].type ? "*" : ""})).replace(U, "$1"), c, t > g && r(a.slice(g, t)), d > t && r(a = a.slice(t)), d > t && m(a))
                }
                l.push(c)
            }
            return p(l)
        }

        function w(a, c) {
            var t = 0 < c.length, f = 0 < a.length, g = function (d, g, e, l, k) {
                var h, L, n, V = 0, q =
                    "0", u = d && [], m = [], Oa = F, Za = d || f && A.find.TAG("*", k), D = ga += null == Oa ? 1 : Math.random() || .1, p = Za.length;
                for (k && (F = g !== z && g); q !== p && null != (h = Za[q]); q++) {
                    if (f && h) {
                        for (L = 0; n = a[L++];)if (n(h, g, e)) {
                            l.push(h);
                            break
                        }
                        k && (ga = D)
                    }
                    t && ((h = !n && h) && V--, d && u.push(h))
                }
                if (V += q, t && q !== V) {
                    for (L = 0; n = c[L++];)n(u, m, g, e);
                    if (d) {
                        if (0 < V)for (; q--;)u[q] || m[q] || (m[q] = ja.call(l));
                        m = M(m)
                    }
                    Q.apply(l, m);
                    k && !d && 0 < m.length && 1 < V + c.length && b.uniqueSort(l)
                }
                return k && (ga = D, F = Oa), u
            };
            return t ? d(g) : g
        }

        var x, C, A, ea, pa, J, F, E, K, y, z, B, I, oa, da, N, xa, O = "sizzle" + -new Date, H = a.document, ga = 0, T = 0, ob = c(), Y = c(), sa = c(), Va = function (a, b) {
                return a === b && (K = !0), 0
            }, S = {}.hasOwnProperty, P = [], ja = P.pop, Z = P.push, Q = P.push, aa = P.slice, R = P.indexOf || function (a) {
                    for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                    return -1
                }, ca = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), Wa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ca + ")|)|)[\\x20\\t\\r\\n\\f]*\\]", W = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
                Wa.replace(3, 8) + ")*)|.*)\\)|)", U = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, va = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ka = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), la = new RegExp(W), ma = new RegExp("^" + ca + "$"), fa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" +
                    Wa),
                PSEUDO: new RegExp("^" + W),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            }, qa = /^(?:input|select|textarea|button)$/i,
            ra = /^h\d$/i, ia = /^[^{]+\{\s*\[native \w/, ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, na = /[+~]/, ua = /'|\\/g, X = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), ba = function (a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            };
        try {
            Q.apply(P = aa.call(H.childNodes), H.childNodes), P[H.childNodes.length].nodeType
        } catch (wa) {
            Q = {
                apply: P.length ? function (a, b) {
                    Z.apply(a, aa.call(b))
                } : function (a, b) {
                    for (var c = a.length, t = 0; a[c++] =
                        b[t++];);
                    a.length = c - 1
                }
            }
        }
        C = b.support = {};
        pa = b.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        y = b.setDocument = function (a) {
            var b, c = a ? a.ownerDocument || a : H;
            a = c.defaultView;
            return c !== z && 9 === c.nodeType && c.documentElement ? (z = c, B = c.documentElement, I = !pa(c), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () {
                y()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function () {
                y()
            })), C.attributes = f(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }),
                C.getElementsByTagName = f(function (a) {
                    return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                }), C.getElementsByClassName = ia.test(c.getElementsByClassName) && f(function (a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), C.getById = f(function (a) {
                return B.appendChild(a).id = O, !c.getElementsByName || !c.getElementsByName(O).length
            }), C.getById ? (A.find.ID = function (a, b) {
                if ("undefined" !== typeof b.getElementById &&
                    I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, A.filter.ID = function (a) {
                var b = a.replace(X, ba);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete A.find.ID, A.filter.ID = function (a) {
                var b = a.replace(X, ba);
                return function (a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            }), A.find.TAG = C.getElementsByTagName ? function (a, b) {
                return "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, t = [], d = 0, g = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = g[d++];)1 === c.nodeType && t.push(c);
                    return t
                }
                return g
            }, A.find.CLASS = C.getElementsByClassName && function (a, b) {
                    return "undefined" !== typeof b.getElementsByClassName && I ? b.getElementsByClassName(a) : void 0
                }, da = [], oa = [], (C.qsa = ia.test(c.querySelectorAll)) && (f(function (a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>";
                a.querySelectorAll("[t^='']").length && oa.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || oa.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || oa.push(":checked")
            }), f(function (a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden");
                a.appendChild(b).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && oa.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || oa.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                oa.push(",.*:")
            })), (C.matchesSelector = ia.test(N = B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) &&
            f(function (a) {
                C.disconnectedMatch = N.call(a, "div");
                N.call(a, "[s!='']:x");
                da.push("!=", W)
            }), oa = oa.length && new RegExp(oa.join("|")), da = da.length && new RegExp(da.join("|")), b = ia.test(B.compareDocumentPosition), xa = b || ia.test(B.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, t = b && b.parentNode;
                return a === t || !(!t || 1 !== t.nodeType || !(c.contains ? c.contains(t) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(t)))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return !0;
                return !1
            }, Va = b ?
                function (a, b) {
                    if (a === b)return K = !0, 0;
                    var t = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return t ? t : (t = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & t || !C.sortDetached && b.compareDocumentPosition(a) === t ? a === c || a.ownerDocument === H && xa(H, a) ? -1 : b === c || b.ownerDocument === H && xa(H, b) ? 1 : E ? R.call(E, a) - R.call(E, b) : 0 : 4 & t ? -1 : 1)
                } : function (a, b) {
                if (a === b)return K = !0, 0;
                var t, d = 0;
                t = a.parentNode;
                var g = b.parentNode, f = [a], G = [b];
                if (!t || !g)return a === c ? -1 : b === c ? 1 : t ? -1 : g ? 1 : E ? R.call(E,
                    a) - R.call(E, b) : 0;
                if (t === g)return e(a, b);
                for (t = a; t = t.parentNode;)f.unshift(t);
                for (t = b; t = t.parentNode;)G.unshift(t);
                for (; f[d] === G[d];)d++;
                return d ? e(f[d], G[d]) : f[d] === H ? -1 : G[d] === H ? 1 : 0
            }, c) : z
        };
        b.matches = function (a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== z && y(a), c = c.replace(ka, "='$1']"), !(!C.matchesSelector || !I || da && da.test(c) || oa && oa.test(c)))try {
                var t = N.call(a, c);
                if (t || C.disconnectedMatch || a.document && 11 !== a.document.nodeType)return t
            } catch (d) {
            }
            return 0 <
                b(c, z, null, [a]).length
        };
        b.contains = function (a, b) {
            return (a.ownerDocument || a) !== z && y(a), xa(a, b)
        };
        b.attr = function (a, b) {
            (a.ownerDocument || a) !== z && y(a);
            var c = A.attrHandle[b.toLowerCase()], c = c && S.call(A.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== c ? c : C.attributes || !I ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function (a) {
            var b, c = [], t = 0, d = 0;
            if (K = !C.detectDuplicates, E = !C.sortStable &&
                    a.slice(0), a.sort(Va), K) {
                for (; b = a[d++];)b === a[d] && (t = c.push(d));
                for (; t--;)a.splice(c[t], 1)
            }
            return E = null, a
        };
        ea = b.getText = function (a) {
            var b, c = "", t = 0;
            if (b = a.nodeType)if (1 === b || 9 === b || 11 === b) {
                if ("string" == typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)c += ea(a)
            } else {
                if (3 === b || 4 === b)return a.nodeValue
            } else for (; b = a[t++];)c += ea(b);
            return c
        };
        A = b.selectors = {
            cacheLength: 50, createPseudo: d, match: fa, attrHandle: {}, find: {}, relative: {
                ">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}
            }, preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(X, ba), a[3] = (a[4] || a[5] || "").replace(X, ba), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[5] && a[2];
                    return fa.CHILD.test(a[0]) ? null : (a[3] && void 0 !==
                    a[4] ? a[2] = a[4] : c && la.test(c) && (b = q(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            }, filter: {
                TAG: function (a) {
                    var b = a.replace(X, ba).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = ob[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ob(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" !== typeof a.getAttribute &&
                                a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, c, t) {
                    return function (d) {
                        d = b.attr(d, a);
                        return null == d ? "!=" === c : c ? (d += "", "=" === c ? d === t : "!=" === c ? d !== t : "^=" === c ? t && 0 === d.indexOf(t) : "*=" === c ? t && -1 < d.indexOf(t) : "$=" === c ? t && d.slice(-t.length) === t : "~=" === c ? -1 < (" " + d + " ").indexOf(t) : "|=" === c ? d === t || d.slice(0, t.length + 1) === t + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, t, d) {
                    var g = "nth" !== a.slice(0, 3), f = "last" !== a.slice(-4), e = "of-type" === b;
                    return 1 === t && 0 === d ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, G) {
                        var l, k, h,
                            L, n;
                        c = g !== f ? "nextSibling" : "previousSibling";
                        var V = b.parentNode, q = e && b.nodeName.toLowerCase();
                        G = !G && !e;
                        if (V) {
                            if (g) {
                                for (; c;) {
                                    for (k = b; k = k[c];)if (e ? k.nodeName.toLowerCase() === q : 1 === k.nodeType)return !1;
                                    n = c = "only" === a && !n && "nextSibling"
                                }
                                return !0
                            }
                            if (n = [f ? V.firstChild : V.lastChild], f && G)for (G = V[O] || (V[O] = {}), l = G[a] || [], L = l[0] === ga && l[1], h = l[0] === ga && l[2], k = L && V.childNodes[L]; k = ++L && k && k[c] || (h = L = 0) || n.pop();) {
                                if (1 === k.nodeType && ++h && k === b) {
                                    G[a] = [ga, L, h];
                                    break
                                }
                            } else if (G && (l = (b[O] || (b[O] = {}))[a]) && l[0] === ga)h =
                                l[1]; else for (; (k = ++L && k && k[c] || (h = L = 0) || n.pop()) && ((e ? k.nodeName.toLowerCase() !== q : 1 !== k.nodeType) || !++h || (G && ((k[O] || (k[O] = {}))[a] = [ga, h]), k !== b)););
                            return h -= d, h === t || 0 === h % t && 0 <= h / t
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var t, g = A.pseudos[a] || A.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return g[O] ? g(c) : 1 < g.length ? (t = [a, a, "", c], A.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var t, d = g(a, c), f = d.length; f--;)t = R.call(a, d[f]), a[t] = !(b[t] = d[f])
                    }) : function (a) {
                        return g(a, 0, t)
                    }) :
                        g
                }
            }, pseudos: {
                not: d(function (a) {
                    var b = [], c = [], t = J(a.replace(U, "$1"));
                    return t[O] ? d(function (a, b, c, d) {
                        var g;
                        c = t(a, null, d, []);
                        for (d = a.length; d--;)(g = c[d]) && (a[d] = !(b[d] = g))
                    }) : function (a, d, g) {
                        return b[0] = a, t(b, null, g, c), !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return 0 < b(a, c).length
                    }
                }), contains: d(function (a) {
                    return function (b) {
                        return -1 < (b.textContent || b.innerText || ea(b)).indexOf(a)
                    }
                }), lang: d(function (a) {
                    return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(X, ba).toLowerCase(), function (b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === B
                }, focus: function (a) {
                    return a === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return !1 === a.disabled
                }, disabled: function (a) {
                    return !0 === a.disabled
                }, checked: function (a) {
                    var b =
                        a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return !1;
                    return !0
                }, parent: function (a) {
                    return !A.pseudos.empty(a)
                }, header: function (a) {
                    return ra.test(a.nodeName)
                }, input: function (a) {
                    return qa.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: k(function () {
                    return [0]
                }), last: k(function (a, b) {
                    return [b - 1]
                }), eq: k(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: k(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: k(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: k(function (a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;)a.push(b);
                    return a
                }), gt: k(function (a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;)a.push(c);
                    return a
                })
            }
        };
        A.pseudos.nth = A.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})A.pseudos[x] = l(x);
        for (x in{submit: !0, reset: !0})A.pseudos[x] = h(x);
        u.prototype = A.filters = A.pseudos;
        A.setFilters = new u;
        J = b.compile = function (a, b) {
            var c, t = [], d = [], g = sa[a + " "];
            if (!g) {
                b || (b = q(a));
                for (c = b.length; c--;)g = r(b[c]), g[O] ? t.push(g) : d.push(g);
                g = sa(a, w(d, t))
            }
            return g
        };
        return C.sortStable = O.split("").sort(Va).join("") === O, C.detectDuplicates = !!K, y(), C.sortDetached = f(function (a) {
            return 1 & a.compareDocumentPosition(z.createElement("div"))
        }),
        f(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), C.attributes && f(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || g("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), f(function (a) {
            return null == a.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function (a, b, c) {
                var t;
                return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (t = a.getAttributeNode(b)) && t.specified ? t.value : null
            }), b
    }(b);
    g.find = Ga;
    g.expr = Ga.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = Ga.uniqueSort;
    g.text = Ga.getText;
    g.isXMLDoc = Ga.isXML;
    g.contains = Ga.contains;
    var bb = g.expr.match.needsContext, Ka = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ua = /^.[^:#\[\.,]*$/;
    g.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? g.find.matchesSelector(d, a) ? [d] : [] : g.find.matches(a, g.grep(b,
            function (a) {
                return 1 === a.nodeType
            }))
    };
    g.fn.extend({
        find: function (a) {
            var b, c = [], d = this, f = d.length;
            if ("string" != typeof a)return this.pushStack(g(a).filter(function () {
                for (b = 0; f > b; b++)if (g.contains(d[b], this))return !0
            }));
            for (b = 0; f > b; b++)g.find(a, d[b], c);
            return c = this.pushStack(1 < f ? g.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (b) {
            return this.pushStack(a(this, b || [], !1))
        }, not: function (b) {
            return this.pushStack(a(this, b || [], !0))
        }, is: function (b) {
            return !!a(this, "string" == typeof b &&
            bb.test(b) ? g(b) : b || [], !1).length
        }
    });
    var ra, z = b.document, tb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (g.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : tb.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || ra).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof g ? b[0] : b, g.merge(this, g.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), Ka.test(c[1]) && g.isPlainObject(b))for (c in b)g.isFunction(this[c]) ?
                    this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = z.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])return ra.find(a);
                this.length = 1;
                this[0] = d
            }
            return this.context = z, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : g.isFunction(a) ? "undefined" != typeof ra.ready ? ra.ready(a) : a(g) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), g.makeArray(a, this))
    }).prototype = g.fn;
    ra = g(z);
    var ub = /^(?:parents|prev(?:Until|All))/, Ha = {
        children: !0, contents: !0, next: !0,
        prev: !0
    };
    g.extend({
        dir: function (a, b, c) {
            var d = [];
            for (a = a[b]; a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType || !g(a).is(c));)1 === a.nodeType && d.push(a), a = a[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    g.fn.extend({
        has: function (a) {
            var b, c = g(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if (g.contains(this, c[b]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, f = this.length, e = [], l = bb.test(a) || "string" != typeof a ? g(a, b || this.context) :
                0; f > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (11 > c.nodeType && (l ? -1 < l.index(c) : 1 === c.nodeType && g.find.matchesSelector(c, a))) {
                e.push(c);
                break
            }
            return this.pushStack(1 < e.length ? g.unique(e) : e)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.inArray(this[0], g(a)) : g.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(g.unique(g.merge(this.get(), g(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    g.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) {
            return g.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return g.dir(a, "parentNode", c)
        }, next: function (a) {
            return d(a, "nextSibling")
        }, prev: function (a) {
            return d(a, "previousSibling")
        }, nextAll: function (a) {
            return g.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return g.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return g.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return g.dir(a, "previousSibling",
                c)
        }, siblings: function (a) {
            return g.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return g.sibling(a.firstChild)
        }, contents: function (a) {
            return g.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : g.merge([], a.childNodes)
        }
    }, function (a, b) {
        g.fn[a] = function (c, d) {
            var f = g.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (f = g.filter(d, f)), 1 < this.length && (Ha[a] || (f = g.unique(f)), ub.test(a) && (f = f.reverse())), this.pushStack(f)
        }
    });
    var W = /\S+/g, Ia = {};
    g.Callbacks =
        function (a) {
            a = "string" == typeof a ? Ia[a] || k(a) : g.extend({}, a);
            var b, c, d, f, e, l, h = [], n = !a.once && [], q = function (g) {
                c = a.memory && g;
                d = !0;
                e = l || 0;
                l = 0;
                f = h.length;
                for (b = !0; h && f > e; e++)if (!1 === h[e].apply(g[0], g[1]) && a.stopOnFalse) {
                    c = !1;
                    break
                }
                b = !1;
                h && (n ? n.length && q(n.shift()) : c ? h = [] : u.disable())
            }, u = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        !function Yb(b) {
                            g.each(b, function (b, c) {
                                var d = g.type(c);
                                "function" === d ? a.unique && u.has(c) || h.push(c) : c && c.length && "string" !== d && Yb(c)
                            })
                        }(arguments);
                        b ? f = h.length : c && (l = d, q(c))
                    }
                    return this
                },
                remove: function () {
                    return h && g.each(arguments, function (a, c) {
                        for (var t; -1 < (t = g.inArray(c, h, t));)h.splice(t, 1), b && (f >= t && f--, e >= t && e--)
                    }), this
                }, has: function (a) {
                    return a ? -1 < g.inArray(a, h) : !(!h || !h.length)
                }, empty: function () {
                    return h = [], f = 0, this
                }, disable: function () {
                    return h = n = c = void 0, this
                }, disabled: function () {
                    return !h
                }, lock: function () {
                    return n = void 0, c || u.disable(), this
                }, locked: function () {
                    return !n
                }, fireWith: function (a, c) {
                    return !h || d && !n || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? n.push(c) : q(c)), this
                }, fire: function () {
                    return u.fireWith(this,
                        arguments), this
                }, fired: function () {
                    return !!d
                }
            };
            return u
        };
    g.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return f.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return g.Deferred(function (c) {
                        g.each(b, function (b, t) {
                            var e = g.isFunction(a[b]) && a[b];
                            f[t[1]](function () {
                                var a = e &&
                                    e.apply(this, arguments);
                                a && g.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[t[0] + "With"](this === d ? c.promise() : this, e ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? g.extend(a, d) : d
                }
            }, f = {};
            return d.pipe = d.then, g.each(b, function (a, t) {
                var g = t[2], e = t[3];
                d[t[1]] = g.add;
                e && g.add(function () {
                    c = e
                }, b[1 ^ a][2].disable, b[2][2].lock);
                f[t[0]] = function () {
                    return f[t[0] + "With"](this === f ? d : this, arguments), this
                };
                f[t[0] + "With"] = g.fireWith
            }), d.promise(f),
            a && a.call(f, f), f
        }, when: function (a) {
            var b = 0, c = Ba.call(arguments), d = c.length, f = 1 !== d || a && g.isFunction(a.promise) ? d : 0, e = 1 === f ? a : g.Deferred(), l = function (a, b, c) {
                return function (t) {
                    b[a] = this;
                    c[a] = 1 < arguments.length ? Ba.call(arguments) : t;
                    c === h ? e.notifyWith(b, c) : --f || e.resolveWith(b, c)
                }
            }, h, k, n;
            if (1 < d)for (h = Array(d), k = Array(d), n = Array(d); d > b; b++)c[b] && g.isFunction(c[b].promise) ? c[b].promise().done(l(b, n, c)).fail(e.reject).progress(l(b, k, h)) : --f;
            return f || e.resolveWith(n, c), e.promise()
        }
    });
    var Ra;
    g.fn.ready =
        function (a) {
            return g.ready.promise().done(a), this
        };
    g.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? g.readyWait++ : g.ready(!0)
        }, ready: function (a) {
            if (!0 === a ? !--g.readyWait : !g.isReady) {
                if (!z.body)return setTimeout(g.ready);
                g.isReady = !0;
                !0 !== a && 0 < --g.readyWait || (Ra.resolveWith(z, [g]), g.fn.trigger && g(z).trigger("ready").off("ready"))
            }
        }
    });
    g.ready.promise = function (a) {
        if (!Ra)if (Ra = g.Deferred(), "complete" === z.readyState)setTimeout(g.ready); else if (z.addEventListener)z.addEventListener("DOMContentLoaded",
            f, !1), b.addEventListener("load", f, !1); else {
            z.attachEvent("onreadystatechange", f);
            b.attachEvent("onload", f);
            var c = !1;
            try {
                c = null == b.frameElement && z.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function Oa() {
                if (!g.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(Oa, 50)
                    }
                    h();
                    g.ready()
                }
            }()
        }
        return Ra.promise(a)
    };
    for (var vb in g(y))break;
    y.ownLast = "0" !== vb;
    y.inlineBlockNeedsLayout = !1;
    g(function () {
        var a, b, c = z.getElementsByTagName("body")[0];
        c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            b = z.createElement("div"), c.appendChild(a).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (y.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a))
    });
    (function () {
        var a = z.createElement("div");
        if (null == y.deleteExpando) {
            y.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                y.deleteExpando = !1
            }
        }
    })();
    g.acceptData = function (a) {
        var b = g.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !==
        c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ya = /([A-Z])/g;
    g.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? g.cache[a[g.expando]] : a[g.expando], !!a && !r(a)
        },
        data: function (a, b, c) {
            return m(a, b, c)
        },
        removeData: function (a, b) {
            return v(a, b)
        },
        _data: function (a, b, c) {
            return m(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return v(a, b, !0)
        }
    });
    g.fn.extend({
        data: function (a, b) {
            var c, d,
                f, e = this[0], l = e && e.attributes;
            if (void 0 === a) {
                if (this.length && (f = g.data(e), 1 === e.nodeType && !g._data(e, "parsedAttrs"))) {
                    for (c = l.length; c--;)d = l[c].name, 0 === d.indexOf("data-") && (d = g.camelCase(d.slice(5)), p(e, d, f[d]));
                    g._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return "object" == typeof a ? this.each(function () {
                g.data(this, a)
            }) : 1 < arguments.length ? this.each(function () {
                g.data(this, a, b)
            }) : e ? p(e, a, g.data(e, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                g.removeData(this, a)
            })
        }
    });
    g.extend({
        queue: function (a,
                         b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = g._data(a, b), c && (!d || g.isArray(c) ? d = g._data(a, b, g.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = g.queue(a, b), d = c.length, f = c.shift(), e = g._queueHooks(a, b), l = function () {
                g.dequeue(a, b)
            };
            "inprogress" === f && (f = c.shift(), d--);
            f && ("fx" === b && c.unshift("inprogress"), delete e.stop, f.call(a, l, e));
            !d && e && e.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return g._data(a, c) || g._data(a, c, {
                    empty: g.Callbacks("once memory").add(function () {
                        g._removeData(a,
                            b + "queue");
                        g._removeData(a, c)
                    })
                })
        }
    });
    g.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? g.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = g.queue(this, a, b);
                g._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && g.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                g.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, f = g.Deferred(), e = this, l = this.length, h = function () {
                --d ||
                f.resolveWith(e, [e])
            };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; l--;)(c = g._data(e[l], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            return h(), f.promise(b)
        }
    });
    var wa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, la = ["Top", "Right", "Bottom", "Left"], Aa = function (a, b) {
        return a = b || a, "none" === g.css(a, "display") || !g.contains(a.ownerDocument, a)
    }, Ca = g.access = function (a, b, c, d, f, e, l) {
        var h = 0, k = a.length, n = null == c;
        if ("object" === g.type(c))for (h in f = !0, c)g.access(a, b, h, c[h], !0, e, l); else if (void 0 !== d && (f = !0, g.isFunction(d) || (l = !0), n && (l ? (b.call(a, d), b = null) : (n = b, b = function (a, b, c) {
                return n.call(g(a), c)
            })), b))for (; k > h; h++)b(a[h], c, l ? d : d.call(a[h], h, b(a[h], c)));
        return f ? a : n ? b.call(a) : k ? b(a[0], c) : e
    }, ib = /^(?:checkbox|radio)$/i;
    !function () {
        var a = z.createDocumentFragment(), b = z.createElement("div"), c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", y.leadingWhitespace = 3 === b.firstChild.nodeType, y.tbody = !b.getElementsByTagName("tbody").length,
                y.htmlSerialize = !!b.getElementsByTagName("link").length, y.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), y.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, y.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick",
                function () {
                    y.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == y.deleteExpando) {
            y.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                y.deleteExpando = !1
            }
        }
        a = b = c = null
    }();
    (function () {
        var a, c, d = z.createElement("div");
        for (a in{
            submit: !0,
            change: !0,
            focusin: !0
        })c = "on" + a, (y[a + "Bubbles"] = c in b) || (d.setAttribute(c, "t"), y[a + "Bubbles"] = !1 === d.attributes[c].expando)
    })();
    var ta = /^(?:input|select|textarea)$/i, La = /^key/, wb = /^(?:mouse|contextmenu)|click/, xb = /^(?:focusinfocus|focusoutblur)$/, lb = /^([^.]*)(?:\.(.+)|)$/;
    g.event =
    {
        global: {},
        add: function (a, b, c, d, f) {
            var e, l, h, k, n, q, u, m, D, p;
            if (h = g._data(a)) {
                c.handler && (k = c, c = k.handler, f = k.selector);
                c.guid || (c.guid = g.guid++);
                (l = h.events) || (l = h.events = {});
                (q = h.handle) || (q = h.handle = function (a) {
                    return "undefined" === typeof g || a && g.event.triggered === a.type ? void 0 : g.event.dispatch.apply(q.elem, arguments)
                }, q.elem = a);
                b = (b || "").match(W) || [""];
                for (h = b.length; h--;)e = lb.exec(b[h]) || [], D = p = e[1], e = (e[2] || "").split(".").sort(), D && (n = g.event.special[D] || {}, D = (f ? n.delegateType : n.bindType) || D, n =
                    g.event.special[D] || {}, u = g.extend({
                    type: D,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: f,
                    needsContext: f && g.expr.match.needsContext.test(f),
                    namespace: e.join(".")
                }, k), (m = l[D]) || (m = l[D] = [], m.delegateCount = 0, n.setup && !1 !== n.setup.call(a, d, e, q) || (a.addEventListener ? a.addEventListener(D, q, !1) : a.attachEvent && a.attachEvent("on" + D, q))), n.add && (n.add.call(a, u), u.handler.guid || (u.handler.guid = c.guid)), f ? m.splice(m.delegateCount++, 0, u) : m.push(u), g.event.global[D] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, f) {
            var e,
                l, h, k, n, q, u, m, D, p, M, v = g.hasData(a) && g._data(a);
            if (v && (q = v.events)) {
                b = (b || "").match(W) || [""];
                for (n = b.length; n--;)if (h = lb.exec(b[n]) || [], D = M = h[1], p = (h[2] || "").split(".").sort(), D) {
                    u = g.event.special[D] || {};
                    D = (d ? u.delegateType : u.bindType) || D;
                    m = q[D] || [];
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (k = e = m.length; e--;)l = m[e], !f && M !== l.origType || c && c.guid !== l.guid || h && !h.test(l.namespace) || d && d !== l.selector && ("**" !== d || !l.selector) || (m.splice(e, 1), l.selector && m.delegateCount--, u.remove &&
                    u.remove.call(a, l));
                    k && !m.length && (u.teardown && !1 !== u.teardown.call(a, p, v.handle) || g.removeEvent(a, D, v.handle), delete q[D])
                } else for (D in q)g.event.remove(a, D + b[n], c, d, !0);
                g.isEmptyObject(q) && (delete v.handle, g._removeData(a, "events"))
            }
        },
        trigger: function (a, c, d, f) {
            var e, l, h, k, n, q, u = [d || z], m = ka.call(a, "type") ? a.type : a;
            q = ka.call(a, "namespace") ? a.namespace.split(".") : [];
            if (h = e = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !xb.test(m + g.event.triggered) && (0 <= m.indexOf(".") && (q = m.split("."), m = q.shift(), q.sort()),
                    l = 0 > m.indexOf(":") && "on" + m, a = a[g.expando] ? a : new g.Event(m, "object" == typeof a && a), a.isTrigger = f ? 2 : 3, a.namespace = q.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = d), c = null == c ? [a] : g.makeArray(c, [a]), n = g.event.special[m] || {}, f || !n.trigger || !1 !== n.trigger.apply(d, c))) {
                if (!f && !n.noBubble && !g.isWindow(d)) {
                    k = n.delegateType || m;
                    for (xb.test(k + m) || (h = h.parentNode); h; h = h.parentNode)u.push(h), e = h;
                    e === (d.ownerDocument || z) && u.push(e.defaultView ||
                        e.parentWindow || b)
                }
                for (q = 0; (h = u[q++]) && !a.isPropagationStopped();)a.type = 1 < q ? k : n.bindType || m, (e = (g._data(h, "events") || {})[a.type] && g._data(h, "handle")) && e.apply(h, c), (e = l && h[l]) && e.apply && g.acceptData(h) && (a.result = e.apply(h, c), !1 === a.result && a.preventDefault());
                if (a.type = m, !(f || a.isDefaultPrevented() || n._default && !1 !== n._default.apply(u.pop(), c)) && g.acceptData(d) && l && d[m] && !g.isWindow(d)) {
                    (e = d[l]) && (d[l] = null);
                    g.event.triggered = m;
                    try {
                        d[m]()
                    } catch (D) {
                    }
                    g.event.triggered = void 0;
                    e && (d[l] = e)
                }
                return a.result
            }
        },
        dispatch: function (a) {
            a = g.event.fix(a);
            var b, c, d, f, e, l = [], h = Ba.call(arguments);
            b = (g._data(this, "events") || {})[a.type] || [];
            var k = g.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                l = g.event.handlers.call(this, a, b);
                for (b = 0; (f = l[b++]) && !a.isPropagationStopped();)for (a.currentTarget = f.elem, e = 0; (d = f.handlers[e++]) && !a.isImmediatePropagationStopped();)a.namespace_re && !a.namespace_re.test(d.namespace) || (a.handleObj = d, a.data = d.data, c = ((g.event.special[d.origType] ||
                {}).handle || d.handler).apply(f.elem, h), void 0 === c || !1 !== (a.result = c) || (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, f, e, l = [], h = b.delegateCount, k = a.target;
            if (h && k.nodeType && (!a.button || "click" !== a.type))for (; k != this; k = k.parentNode || this)if (1 === k.nodeType && (!0 !== k.disabled || "click" !== a.type)) {
                f = [];
                for (e = 0; h > e; e++)d = b[e], c = d.selector + " ", void 0 === f[c] && (f[c] = d.needsContext ? 0 <= g(c, this).index(k) : g.find(c, this, null,
                    [k]).length), f[c] && f.push(d);
                f.length && l.push({elem: k, handlers: f})
            }
            return h < b.length && l.push({elem: this, handlers: b.slice(h)}), l
        },
        fix: function (a) {
            if (a[g.expando])return a;
            var b, c, d;
            b = a.type;
            var f = a, e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = wb.test(b) ? this.mouseHooks : La.test(b) ? this.keyHooks : {});
            d = e.props ? this.props.concat(e.props) : this.props;
            a = new g.Event(f);
            for (b = d.length; b--;)c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, f, g = b.button,
                    e = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, f = d.documentElement, c = d.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && e && (a.relatedTarget = e === a.target ? b.toElement : e), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== n() && this.focus)try {
                        return this.focus(),
                            !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === n() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return g.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return g.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            a = g.extend(new g.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? g.event.trigger(a, null, b) : g.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    g.removeEvent = z.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    g.Event = function (a, b) {
        return this instanceof g.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (!1 === a.returnValue ||
        a.getPreventDefault && a.getPreventDefault()) ? w : x) : this.type = a, b && g.extend(this, b), this.timeStamp = a && a.timeStamp || g.now(), void(this[g.expando] = !0)) : new g.Event(a, b)
    };
    g.Event.prototype = {
        isDefaultPrevented: x, isPropagationStopped: x, isImmediatePropagationStopped: x, preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = w;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = w;
            a && (a.stopPropagation && a.stopPropagation(),
                a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = w;
            this.stopPropagation()
        }
    };
    g.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        g.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = a.relatedTarget, f = a.handleObj;
                return (!d || d !== this && !g.contains(this, d)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    });
    y.submitBubbles || (g.event.special.submit = {
        setup: function () {
            return g.nodeName(this, "form") ? !1 : void g.event.add(this,
                "click._submit keypress._submit", function (a) {
                    a = a.target;
                    (a = g.nodeName(a, "input") || g.nodeName(a, "button") ? a.form : void 0) && !g._data(a, "submitBubbles") && (g.event.add(a, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }), g._data(a, "submitBubbles", !0))
                })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && g.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return g.nodeName(this, "form") ? !1 : void g.event.remove(this, "._submit")
        }
    });
    y.changeBubbles ||
    (g.event.special.change = {
        setup: function () {
            return ta.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (g.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), g.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1);
                g.event.simulate("change", this, a, !0)
            })), !1) : void g.event.add(this, "beforeactivate._change", function (a) {
                a = a.target;
                ta.test(a.nodeName) && !g._data(a, "changeBubbles") &&
                (g.event.add(a, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || g.event.simulate("change", this.parentNode, a, !0)
                }), g._data(a, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return g.event.remove(this, "._change"), !ta.test(this.nodeName)
        }
    });
    y.focusinBubbles || g.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c =
            function (a) {
                g.event.simulate(b, a.target, g.event.fix(a), !0)
            };
        g.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, f = g._data(d, b);
                f || d.addEventListener(a, c, !0);
                g._data(d, b, (f || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, f = g._data(d, b) - 1;
                f ? g._data(d, b, f) : (d.removeEventListener(a, c, !0), g._removeData(d, b))
            }
        }
    });
    g.fn.extend({
        on: function (a, b, c, d, f) {
            var e, l;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (e in a)this.on(e, b, c, a[e], f);
                return this
            }
            if (null == c && null ==
                d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d)d = x; else if (!d)return this;
            return 1 === f && (l = d, d = function (a) {
                return g().off(a), l.apply(this, arguments)
            }, d.guid = l.guid || (l.guid = g.guid++)), this.each(function () {
                g.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, f;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, g(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (f in a)this.off(f, b, a[f]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = x), this.each(function () {
                g.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                g.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? g.event.trigger(a, b, c, !0) : void 0
        }
    });
    var hb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Sa = / jQuery\d+="(?:null|\d+)"/g, Ma = new RegExp("<(?:" + hb + ")[\\s/>]", "i"), cb = /^\s+/, db = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ta = /<([\w:]+)/, ca = /<tbody/i, P = /<|&#?\w+;/, na = /<(?:script|style|link)/i, Ib = /checked\s*(?:[^=]|=\s*.checked.)/i, yb = /^$|\/(?:java|ecma)script/i, Fb = /^true\/(.*)/, Jb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, fa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>",
                "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: y.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, S = q(z).appendChild(z.createElement("div"));
    fa.optgroup = fa.option;
    fa.tbody = fa.tfoot = fa.colgroup = fa.caption = fa.thead;
    fa.th = fa.td;
    g.extend({
        clone: function (a, b, c) {
            var d, f, e, h, k, n = g.contains(a.ownerDocument, a);
            if (y.html5Clone || g.isXMLDoc(a) || !Ma.test("<" +
                    a.nodeName + ">") ? e = a.cloneNode(!0) : (S.innerHTML = a.outerHTML, S.removeChild(e = S.firstChild)), !(y.noCloneEvent && y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || g.isXMLDoc(a)))for (d = l(e), k = l(a), h = 0; null != (f = k[h]); ++h)if (d[h]) {
                var q = d[h], u = void 0, m = void 0, p = void 0;
                if (1 === q.nodeType) {
                    if (u = q.nodeName.toLowerCase(), !y.noCloneEvent && q[g.expando]) {
                        p = g._data(q);
                        for (m in p.events)g.removeEvent(q, m, p.handle);
                        q.removeAttribute(g.expando)
                    }
                    "script" === u && q.text !== f.text ? (D(q).text = f.text, C(q)) : "object" === u ? (q.parentNode &&
                    (q.outerHTML = f.outerHTML), y.html5Clone && f.innerHTML && !g.trim(q.innerHTML) && (q.innerHTML = f.innerHTML)) : "input" === u && ib.test(f.type) ? (q.defaultChecked = q.checked = f.checked, q.value !== f.value && (q.value = f.value)) : "option" === u ? q.defaultSelected = q.selected = f.defaultSelected : ("input" === u || "textarea" === u) && (q.defaultValue = f.defaultValue)
                }
            }
            if (b)if (c)for (k = k || l(a), d = d || l(e), h = 0; null != (f = k[h]); h++)A(f, d[h]); else A(a, e);
            return d = l(e, "script"), 0 < d.length && J(d, !n && l(a, "script")), e
        }, buildFragment: function (a, b, c, d) {
            for (var f,
                     e, h, k, n, m, D, p = a.length, M = q(b), v = [], r = 0; p > r; r++)if (e = a[r], e || 0 === e)if ("object" === g.type(e))g.merge(v, e.nodeType ? [e] : e); else if (P.test(e)) {
                k = k || M.appendChild(b.createElement("div"));
                n = (Ta.exec(e) || ["", ""])[1].toLowerCase();
                D = fa[n] || fa._default;
                k.innerHTML = D[1] + e.replace(db, "<$1></$2>") + D[2];
                for (f = D[0]; f--;)k = k.lastChild;
                if (!y.leadingWhitespace && cb.test(e) && v.push(b.createTextNode(cb.exec(e)[0])), !y.tbody)for (f = (e = "table" !== n || ca.test(e) ? "<table>" !== D[1] || ca.test(e) ? 0 : k : k.firstChild) && e.childNodes.length; f--;)g.nodeName(m =
                    e.childNodes[f], "tbody") && !m.childNodes.length && e.removeChild(m);
                g.merge(v, k.childNodes);
                for (k.textContent = ""; k.firstChild;)k.removeChild(k.firstChild);
                k = M.lastChild
            } else v.push(b.createTextNode(e));
            k && M.removeChild(k);
            y.appendChecked || g.grep(l(v, "input"), u);
            for (r = 0; e = v[r++];)if ((!d || -1 === g.inArray(e, d)) && (h = g.contains(e.ownerDocument, e), k = l(M.appendChild(e), "script"), h && J(k), c))for (f = 0; e = k[f++];)yb.test(e.type || "") && c.push(e);
            return M
        }, cleanData: function (a, b) {
            for (var c, d, f, e, l = 0, h = g.expando, k = g.cache,
                     n = y.deleteExpando, q = g.event.special; null != (c = a[l]); l++)if ((b || g.acceptData(c)) && (f = c[h], e = f && k[f])) {
                if (e.events)for (d in e.events)q[d] ? g.event.remove(c, d) : g.removeEvent(c, d, e.handle);
                k[f] && (delete k[f], n ? delete c[h] : "undefined" !== typeof c.removeAttribute ? c.removeAttribute(h) : c[h] = null, U.push(f))
            }
        }
    });
    g.fn.extend({
        text: function (a) {
            return Ca(this, function (a) {
                return void 0 === a ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments,
                function (a) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || M(this, a).appendChild(a)
                })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = M(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? g.filter(a, this) : this, f = 0; null != (c = d[f]); f++)b || 1 !== c.nodeType || g.cleanData(l(c)), c.parentNode && (b && g.contains(c.ownerDocument, c) && J(l(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && g.cleanData(l(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
                a.options && g.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return g.clone(this,
                    a, b)
            })
        }, html: function (a) {
            return Ca(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(Sa, "") : void 0;
                if (!("string" != typeof a || na.test(a) || !y.htmlSerialize && Ma.test(a) || !y.leadingWhitespace && cb.test(a) || fa[(Ta.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(db, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (g.cleanData(l(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (f) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a =
                arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode;
                g.cleanData(l(this));
                a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = qa.apply([], a);
            var c, d, f, e, h = 0, k = this.length, n = this, q = k - 1, u = a[0], m = g.isFunction(u);
            if (m || 1 < k && "string" == typeof u && !y.checkClone && Ib.test(u))return this.each(function (c) {
                var d = n.eq(c);
                m && (a[0] = u.call(this, c, d.html()));
                d.domManip(a, b)
            });
            if (k && (e = g.buildFragment(a,
                    this[0].ownerDocument, !1, this), c = e.firstChild, 1 === e.childNodes.length && (e = c), c)) {
                f = g.map(l(e, "script"), D);
                for (d = f.length; k > h; h++)c = e, h !== q && (c = g.clone(c, !0, !0), d && g.merge(f, l(c, "script"))), b.call(this[h], c, h);
                if (d)for (e = f[f.length - 1].ownerDocument, g.map(f, C), h = 0; d > h; h++)c = f[h], yb.test(c.type || "") && !g._data(c, "globalEval") && g.contains(e, c) && (c.src ? g._evalUrl && g._evalUrl(c.src) : g.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Jb, "")));
                e = c = null
            }
            return this
        }
    });
    g.each({
        appendTo: "append", prependTo: "prepend",
        insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"
    }, function (a, b) {
        g.fn[a] = function (a) {
            for (var c = 0, d = [], f = g(a), e = f.length - 1; e >= c; c++)a = c === e ? this : this.clone(!0), g(f[c])[b](a), $a.apply(d, a.get());
            return this.pushStack(d)
        }
    });
    var X, za = {};
    !function () {
        var a, b, c = z.createElement("div");
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = c.getElementsByTagName("a")[0];
        a.style.cssText = "float:left;opacity:.5";
        y.opacity = /^0.5/.test(a.style.opacity);
        y.cssFloat = !!a.style.cssFloat;
        c.style.backgroundClip = "content-box";
        c.cloneNode(!0).style.backgroundClip = "";
        y.clearCloneStyle = "content-box" === c.style.backgroundClip;
        a = c = null;
        y.shrinkWrapBlocks = function () {
            var a, c, d;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a)return;
                c = z.createElement("div");
                d = z.createElement("div");
                a.appendChild(c).appendChild(d);
                b = !1;
                "undefined" !== typeof d.style.zoom && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
                    d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b = 3 !== d.offsetWidth);
                a.removeChild(c)
            }
            return b
        }
    }();
    var Da = /^margin/, Ja = new RegExp("^(" + wa + ")(?!px)[a-z%]+$", "i"), ha, Ea, zb = /^(top|right|bottom|left)$/;
    b.getComputedStyle ? (ha = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Ea = function (a, b, c) {
        var d, f, e, l, h = a.style;
        return c = c || ha(a), l = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== l || g.contains(a.ownerDocument, a) || (l = g.style(a, b)), Ja.test(l) && Da.test(b) && (d = h.width, f = h.minWidth,
            e = h.maxWidth, h.minWidth = h.maxWidth = h.width = l, l = c.width, h.width = d, h.minWidth = f, h.maxWidth = e)), void 0 === l ? l : l + ""
    }) : z.documentElement.currentStyle && (ha = function (a) {
        return a.currentStyle
    }, Ea = function (a, b, c) {
        var d, f, e, g, l = a.style;
        return c = c || ha(a), g = c ? c[b] : void 0, null == g && l && l[b] && (g = l[b]), Ja.test(g) && !zb.test(b) && (d = l.left, f = a.runtimeStyle, e = f && f.left, e && (f.left = a.currentStyle.left), l.left = "fontSize" === b ? "1em" : g, g = l.pixelLeft + "px", l.left = d, e && (f.left = e)), void 0 === g ? g : g + "" || "auto"
    });
    !function () {
        function a() {
            var c,
                d, k = z.getElementsByTagName("body")[0];
            k && (c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", k.appendChild(c).appendChild(d), d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", g.swap(k, null != k.style.zoom ? {zoom: 1} : {}, function () {
                f = 4 === d.offsetWidth
            }), e = !0, l = !1, h = !0, b.getComputedStyle && (l = "1%" !==
                (b.getComputedStyle(d, null) || {}).top, e = "4px" === (b.getComputedStyle(d, null) || {width: "4px"}).width), k.removeChild(c), d = k = null)
        }

        var c, d, f, e, l, h, k = z.createElement("div");
        k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = k.getElementsByTagName("a")[0];
        c.style.cssText = "float:left;opacity:.5";
        y.opacity = /^0.5/.test(c.style.opacity);
        y.cssFloat = !!c.style.cssFloat;
        k.style.backgroundClip = "content-box";
        k.cloneNode(!0).style.backgroundClip = "";
        y.clearCloneStyle = "content-box" === k.style.backgroundClip;
        c = k = null;
        g.extend(y, {
            reliableHiddenOffsets: function () {
                if (null != d)return d;
                var a, b, c, f = z.createElement("div"), e = z.getElementsByTagName("body")[0];
                if (e)return f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", e.appendChild(a).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = f.getElementsByTagName("td"), b[0].style.cssText =
                    "padding:0;margin:0;border:0;display:none", c = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", d = c && 0 === b[0].offsetHeight, e.removeChild(a), d
            }, boxSizing: function () {
                return null == f && a(), f
            }, boxSizingReliable: function () {
                return null == e && a(), e
            }, pixelPosition: function () {
                return null == l && a(), l
            }, reliableMarginRight: function () {
                var a, c, d, f;
                if (null == h && b.getComputedStyle) {
                    if (a = z.getElementsByTagName("body")[0], !a)return;
                    c = z.createElement("div");
                    d = z.createElement("div");
                    c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                    a.appendChild(c).appendChild(d);
                    f = d.appendChild(z.createElement("div"));
                    f.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                    f.style.marginRight = f.style.width = "0";
                    d.style.width = "1px";
                    h = !parseFloat((b.getComputedStyle(f, null) || {}).marginRight);
                    a.removeChild(c)
                }
                return h
            }
        })
    }();
    g.swap = function (a, b, c, d) {
        var f, e = {};
        for (f in b)e[f] = a.style[f], a.style[f] = b[f];
        c = c.apply(a, d || []);
        for (f in b)a.style[f] = e[f];
        return c
    };
    var eb = /alpha\([^)]*\)/i, Ab = /opacity\s*=\s*([^)]*)/, Kb = /^(none|table(?!-c[ea]).+)/, qb = new RegExp("^(" + wa + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + wa + ")", "i"), fb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ua = {letterSpacing: 0, fontWeight: 400}, pb = ["Webkit", "O", "Moz", "ms"];
    g.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ea(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        }, cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, cssProps: {"float": y.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, e, l, h = g.camelCase(b), k = a.style;
                if (b = g.cssProps[h] || (g.cssProps[h] = da(k, h)), l = g.cssHooks[b] || g.cssHooks[h], void 0 === c)return l && "get" in l && void 0 !== (f = l.get(a, !1, d)) ? f : k[b];
                if (e = typeof c, "string" === e && (f = Bb.exec(c)) && (c = (f[1] + 1) * f[2] + parseFloat(g.css(a, b)), e = "number"), null != c && c === c && ("number" !== e || g.cssNumber[h] || (c += "px"), y.clearCloneStyle || "" !== c ||
                    0 !== b.indexOf("background") || (k[b] = "inherit"), !(l && "set" in l && void 0 === (c = l.set(a, c, d)))))try {
                    k[b] = "", k[b] = c
                } catch (n) {
                }
            }
        }, css: function (a, b, c, d) {
            var f, e, l, h = g.camelCase(b);
            return b = g.cssProps[h] || (g.cssProps[h] = da(a.style, h)), l = g.cssHooks[b] || g.cssHooks[h], l && "get" in l && (e = l.get(a, !0, c)), void 0 === e && (e = Ea(a, b, d)), "normal" === e && b in Ua && (e = Ua[b]), "" === c || c ? (f = parseFloat(e), !0 === c || g.isNumeric(f) ? f || 0 : e) : e
        }
    });
    g.each(["height", "width"], function (a, b) {
        g.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? 0 === a.offsetWidth &&
                Kb.test(g.css(a, "display")) ? g.swap(a, fb, function () {
                    return B(a, b, d)
                }) : B(a, b, d) : void 0
            }, set: function (a, c, d) {
                var f = d && ha(a);
                return Y(a, c, d ? T(a, b, d, y.boxSizing() && "border-box" === g.css(a, "boxSizing", !1, f), f) : 0)
            }
        }
    });
    y.opacity || (g.cssHooks.opacity = {
        get: function (a, b) {
            return Ab.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, f = g.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", e = d && d.filter || c.filter || "";
            c.zoom =
                1;
            (1 <= b || "" === b) && "" === g.trim(e.replace(eb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = eb.test(e) ? e.replace(eb, f) : e + " " + f)
        }
    });
    g.cssHooks.marginRight = K(y.reliableMarginRight, function (a, b) {
        return b ? g.swap(a, {display: "inline-block"}, Ea, [a, "marginRight"]) : void 0
    });
    g.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        g.cssHooks[a + b] = {
            expand: function (c) {
                var d = 0, f = {};
                for (c = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)f[a + la[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        Da.test(a) || (g.cssHooks[a + b].set = Y)
    });
    g.fn.extend({
        css: function (a, b) {
            return Ca(this, function (a, b, c) {
                var d, f = {}, e = 0;
                if (g.isArray(b)) {
                    c = ha(a);
                    for (d = b.length; d > e; e++)f[b[e]] = g.css(a, b[e], !1, c);
                    return f
                }
                return void 0 !== c ? g.style(a, b, c) : g.css(a, b)
            }, a, b, 1 < arguments.length)
        }, show: function () {
            return N(this, !0)
        }, hide: function () {
            return N(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Aa(this) ? g(this).show() : g(this).hide()
            })
        }
    });
    g.Tween = I;
    I.prototype = {
        constructor: I,
        init: function (a, b, c, d, f, e) {
            this.elem = a;
            this.prop = c;
            this.easing = f || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = e || (g.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = I.propHooks[this.prop];
            return a && a.get ? a.get(this) : I.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = I.propHooks[this.prop];
            return this.pos = b = this.options.duration ? g.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step &&
            this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : I.propHooks._default.set(this), this
        }
    };
    I.prototype.init.prototype = I.prototype;
    I.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = g.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                g.fx.step[a.prop] ? g.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[g.cssProps[a.prop]] || g.cssHooks[a.prop]) ? g.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] =
                    a.now
            }
        }
    };
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    g.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    g.fx = I.prototype.init;
    g.fx.step = {};
    var ma, gb, Cb = /^(?:toggle|show|hide)$/, mb = new RegExp("^(?:([+-])=|)(" + wa + ")([a-z%]*)$", "i"), nb = /queueHooks$/, ea = [function (a, b, c) {
        var d, f, e, l, h, k, n, q = this, u = {}, m = a.style, D = a.nodeType && Aa(a), p = g._data(a, "fxshow");
        c.queue || (l = g._queueHooks(a, "fx"),
        null == l.unqueued && (l.unqueued = 0, h = l.empty.fire, l.empty.fire = function () {
            l.unqueued || h()
        }), l.unqueued++, q.always(function () {
            q.always(function () {
                l.unqueued--;
                g.queue(a, "fx").length || l.empty.fire()
            })
        }));
        1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], k = g.css(a, "display"), n = E(a.nodeName), "none" === k && (k = n), "inline" === k && "none" === g.css(a, "float") && (y.inlineBlockNeedsLayout && "inline" !== n ? m.zoom = 1 : m.display = "inline-block"));
        c.overflow && (m.overflow = "hidden", y.shrinkWrapBlocks() ||
        q.always(function () {
            m.overflow = c.overflow[0];
            m.overflowX = c.overflow[1];
            m.overflowY = c.overflow[2]
        }));
        for (d in b)if (f = b[d], Cb.exec(f)) {
            if (delete b[d], e = e || "toggle" === f, f === (D ? "hide" : "show")) {
                if ("show" !== f || !p || void 0 === p[d])continue;
                D = !0
            }
            u[d] = p && p[d] || g.style(a, d)
        }
        if (!g.isEmptyObject(u))for (d in p ? "hidden" in p && (D = p.hidden) : p = g._data(a, "fxshow", {}), e && (p.hidden = !D), D ? g(a).show() : q.done(function () {
            g(a).hide()
        }), q.done(function () {
            var b;
            g._removeData(a, "fxshow");
            for (b in u)g.style(a, b, u[b])
        }), u)b = ja(D ?
            p[d] : 0, d, q), d in p || (p[d] = b.start, D && (b.end = b.start, b.start = "width" === d || "height" === d ? 1 : 0))
    }], pa = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), f = mb.exec(b), e = f && f[3] || (g.cssNumber[a] ? "" : "px"), l = (g.cssNumber[a] || "px" !== e && +d) && mb.exec(g.css(c.elem, a)), h = 1, k = 20;
            if (l && l[3] !== e) {
                e = e || l[3];
                f = f || [];
                l = +d || 1;
                do h = h || ".5", l /= h, g.style(c.elem, a, l + e); while (h !== (h = c.cur() / d) && 1 !== h && --k)
            }
            return f && (l = c.start = +l || +d || 0, c.unit = e, c.end = f[1] ? l + (f[1] + 1) * f[2] : +f[2]), c
        }]
    };
    g.Animation = g.extend(Z, {
        tweener: function (a,
                           b) {
            g.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, f = a.length; f > d; d++)c = a[d], pa[c] = pa[c] || [], pa[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? ea.unshift(a) : ea.push(a)
        }
    });
    g.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? g.extend({}, a) : {
            complete: c || !c && b || g.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !g.isFunction(b) && b
        };
        return d.duration = g.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in g.fx.speeds ? g.fx.speeds[d.duration] : g.fx.speeds._default, (null == d.queue || !0 === d.queue) && (d.queue =
            "fx"), d.old = d.complete, d.complete = function () {
            g.isFunction(d.old) && d.old.call(this);
            d.queue && g.dequeue(this, d.queue)
        }, d
    };
    g.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(Aa).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var f = g.isEmptyObject(a), e = g.speed(b, c, d);
            b = function () {
                var b = Z(this, g.extend({}, a), e);
                (f || g._data(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, f || !1 === e.queue ? this.each(b) : this.queue(e.queue, b)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b =
                    a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
                var b = !0, f = null != a && a + "queueHooks", e = g.timers, l = g._data(this);
                if (f)l[f] && l[f].stop && d(l[f]); else for (f in l)l[f] && l[f].stop && nb.test(f) && d(l[f]);
                for (f = e.length; f--;)e[f].elem !== this || null != a && e[f].queue !== a || (e[f].anim.stop(c), b = !1, e.splice(f, 1));
                !b && c || g.dequeue(this, a)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var b, c = g._data(this), d = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = g.timers, e = d ? d.length : 0;
                c.finish = !0;
                g.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; e > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    });
    g.each(["toggle", "show", "hide"], function (a, b) {
        var c = g.fn[b];
        g.fn[b] = function (a, d, f) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(va(b, !0), a, d, f)
        }
    });
    g.each({
        slideDown: va("show"),
        slideUp: va("hide"),
        slideToggle: va("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        g.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    g.timers = [];
    g.fx.tick = function () {
        var a, b = g.timers, c = 0;
        for (ma = g.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || g.fx.stop();
        ma = void 0
    };
    g.fx.timer = function (a) {
        g.timers.push(a);
        a() ? g.fx.start() : g.timers.pop()
    };
    g.fx.interval = 13;
    g.fx.start = function () {
        gb || (gb = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.stop = function () {
        clearInterval(gb);
        gb = null
    };
    g.fx.speeds = {slow: 600, fast: 200, _default: 400};
    g.fn.delay = function (a, b) {
        return a = g.fx ? g.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    };
    (function () {
        var a, b, c, d, f = z.createElement("div");
        f.setAttribute("className", "t");
        f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        a = f.getElementsByTagName("a")[0];
        c = z.createElement("select");
        d = c.appendChild(z.createElement("option"));
        b = f.getElementsByTagName("input")[0];
        a.style.cssText = "top:1px";
        y.getSetAttribute = "t" !== f.className;
        y.style = /top/.test(a.getAttribute("style"));
        y.hrefNormalized = "/a" === a.getAttribute("href");
        y.checkOn = !!b.value;
        y.optSelected = d.selected;
        y.enctype = !!z.createElement("form").enctype;
        c.disabled = !0;
        y.optDisabled = !d.disabled;
        b = z.createElement("input");
        b.setAttribute("value", "");
        y.input = "" === b.getAttribute("value");
        b.value = "t";
        b.setAttribute("type", "radio");
        y.radioValue = "t" === b.value
    })();
    var oa = /\r/g;
    g.fn.extend({
        val: function (a) {
            var b, c, d, f =
                this[0];
            if (arguments.length)return d = g.isFunction(a), this.each(function (c) {
                var f;
                1 === this.nodeType && (f = d ? a.call(this, c, g(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : g.isArray(f) && (f = g.map(f, function (a) {
                    return null == a ? "" : a + ""
                })), b = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, f, "value") || (this.value = f))
            });
            if (f)return b = g.valHooks[f.type] || g.valHooks[f.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(f, "value")) ? c : (c = f.value, "string" == typeof c ? c.replace(oa, "") : null == c ? "" : c)
        }
    });
    g.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = g.find.attr(a, "value");
                    return null != b ? b : g.text(a)
                }
            }, select: {
                get: function (a) {
                    for (var b, c = a.options, d = a.selectedIndex, f = "select-one" === a.type || 0 > d, e = f ? null : [], l = f ? d + 1 : c.length, h = 0 > d ? l : f ? d : 0; l > h; h++)if (b = c[h], !(!b.selected && h !== d || (y.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && g.nodeName(b.parentNode, "optgroup"))) {
                        if (a = g(b).val(), f)return a;
                        e.push(a)
                    }
                    return e
                }, set: function (a,
                                  b) {
                    for (var c, d, f = a.options, e = g.makeArray(b), l = f.length; l--;)if (d = f[l], 0 <= g.inArray(g.valHooks.option.get(d), e))try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    });
    g.each(["radio", "checkbox"], function () {
        g.valHooks[this] = {
            set: function (a, b) {
                return g.isArray(b) ? a.checked = 0 <= g.inArray(g(a).val(), b) : void 0
            }
        };
        y.checkOn || (g.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var xa, ob, O = g.expr.attrHandle, Va = /^(?:checked|selected)$/i,
        ga = y.getSetAttribute, Wa = y.input;
    g.fn.extend({
        attr: function (a, b) {
            return Ca(this, g.attr, a, b, 1 < arguments.length)
        }, removeAttr: function (a) {
            return this.each(function () {
                g.removeAttr(this, a)
            })
        }
    });
    g.extend({
        attr: function (a, b, c) {
            var d, f, e = a.nodeType;
            if (a && 3 !== e && 8 !== e && 2 !== e)return "undefined" === typeof a.getAttribute ? g.prop(a, b, c) : (1 === e && g.isXMLDoc(a) || (b = b.toLowerCase(), d = g.attrHooks[b] || (g.expr.match.bool.test(b) ? ob : xa)), void 0 === c ? d && "get" in d && null !== (f = d.get(a, b)) ? f : (f = g.find.attr(a, b), null == f ? void 0 :
                f) : null !== c ? d && "set" in d && void 0 !== (f = d.set(a, c, b)) ? f : (a.setAttribute(b, c + ""), c) : void g.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, f = 0, e = b && b.match(W);
            if (e && 1 === a.nodeType)for (; c = e[f++];)d = g.propFix[c] || c, g.expr.match.bool.test(c) ? Wa && ga || !Va.test(c) ? a[d] = !1 : a[g.camelCase("default-" + c)] = a[d] = !1 : g.attr(a, c, ""), a.removeAttribute(ga ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!y.radioValue && "radio" === b && g.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    });
    ob = {
        set: function (a, b, c) {
            return !1 === b ? g.removeAttr(a, c) : Wa && ga || !Va.test(c) ? a.setAttribute(!ga && g.propFix[c] || c, c) : a[g.camelCase("default-" + c)] = a[c] = !0, c
        }
    };
    g.each(g.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = O[b] || g.find.attr;
        O[b] = Wa && ga || !Va.test(b) ? function (a, b, d) {
            var f, e;
            return d || (e = O[b], O[b] = f, f = null != c(a, b, d) ? b.toLowerCase() : null, O[b] = e), f
        } : function (a, b, c) {
            return c ? void 0 : a[g.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    });
    Wa && ga || (g.attrHooks.value = {
        set: function (a, b, c) {
            return g.nodeName(a,
                "input") ? void(a.defaultValue = b) : xa && xa.set(a, b, c)
        }
    });
    ga || (xa = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, O.id = O.name = O.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, g.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: xa.set
    }, g.attrHooks.contenteditable = {
        set: function (a,
                       b, c) {
            xa.set(a, "" === b ? !1 : b, c)
        }
    }, g.each(["width", "height"], function (a, b) {
        g.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    }));
    y.style || (g.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Zb = /^(?:input|select|textarea|button|object)$/i, $b = /^(?:a|area)$/i;
    g.fn.extend({
        prop: function (a, b) {
            return Ca(this, g.prop, a, b, 1 < arguments.length)
        }, removeProp: function (a) {
            return a = g.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    });
    g.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, f, e, l = a.nodeType;
            if (a && 3 !== l && 8 !== l && 2 !== l)return e = 1 !== l || !g.isXMLDoc(a), e && (b = g.propFix[b] || b, f = g.propHooks[b]), void 0 !== c ? f && "set" in f && void 0 !== (d = f.set(a, c, b)) ? d : a[b] = c : f && "get" in f && null !== (d = f.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = g.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Zb.test(a.nodeName) || $b.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    y.hrefNormalized ||
    g.each(["href", "src"], function (a, b) {
        g.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    y.optSelected || (g.propHooks.selected = {
        get: function (a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    g.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        g.propFix[this.toLowerCase()] = this
    });
    y.enctype || (g.propFix.enctype = "encoding");
    var Lb = /[\t\r\n\f]/g;
    g.fn.extend({
        addClass: function (a) {
            var b,
                c, d, f, e, l = 0, h = this.length;
            b = "string" == typeof a && a;
            if (g.isFunction(a))return this.each(function (b) {
                g(this).addClass(a.call(this, b, this.className))
            });
            if (b)for (b = (a || "").match(W) || []; h > l; l++)if (c = this[l], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Lb, " ") : " ")) {
                for (e = 0; f = b[e++];)0 > d.indexOf(" " + f + " ") && (d += f + " ");
                d = g.trim(d);
                c.className !== d && (c.className = d)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, f, e, l = 0, h = this.length;
            b = 0 === arguments.length || "string" == typeof a && a;
            if (g.isFunction(a))return this.each(function (b) {
                g(this).removeClass(a.call(this,
                    b, this.className))
            });
            if (b)for (b = (a || "").match(W) || []; h > l; l++)if (c = this[l], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Lb, " ") : "")) {
                for (e = 0; f = b[e++];)for (; 0 <= d.indexOf(" " + f + " ");)d = d.replace(" " + f + " ", " ");
                d = a ? g.trim(d) : "";
                c.className !== d && (c.className = d)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(g.isFunction(a) ? function (c) {
                g(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" ===
                    c)for (var b, d = 0, f = g(this), e = a.match(W) || []; b = e[d++];)f.hasClass(b) ? f.removeClass(b) : f.addClass(b); else("undefined" === c || "boolean" === c) && (this.className && g._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : g._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; c > b; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Lb, " ").indexOf(a))return !0;
            return !1
        }
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            g.fn[b] = function (a, c) {
                return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
            }
        });
    g.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Mb = g.now(), Nb = /\?/, ac = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    g.parseJSON = function (a) {
        if (b.JSON && b.JSON.parse)return b.JSON.parse(a + "");
        var c, d = null, f = g.trim(a + "");
        return f && !g.trim(f.replace(ac, function (a, b, f, e) {
            return c && b && (d = 0), 0 === d ? a : (c = f || b, d += !e - !f, "")
        })) ? Function("return " + f)() : g.error("Invalid JSON: " + a)
    };
    g.parseXML = function (a) {
        var c, d;
        if (!a || "string" != typeof a)return null;
        try {
            b.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a))
        } catch (f) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + a), c
    };
    var Xa, Na, bc = /#.*$/, Pb = /([?&])_=[^&]*/, cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, dc = /^(?:GET|HEAD)$/, ec = /^\/\//, Qb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rb = {}, Gb = {}, Sb = "*/".concat("*");
    try {
        Na = location.href
    } catch (lc) {
        Na = z.createElement("a"), Na.href = "", Na = Na.href
    }
    Xa = Qb.exec(Na.toLowerCase()) || [];
    g.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: Na,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Xa[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML},
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, b) {
            return b ? ia(ia(a,
                g.ajaxSettings), b) : ia(g.ajaxSettings, a)
        }, ajaxPrefilter: H(Rb), ajaxTransport: H(Gb), ajax: function (a, b) {
            function c(a, b, d, f) {
                var q, t, r, x, C = b;
                if (2 !== w) {
                    w = 2;
                    h && clearTimeout(h);
                    n = void 0;
                    l = f || "";
                    A.readyState = 0 < a ? 4 : 0;
                    f = 200 <= a && 300 > a || 304 === a;
                    if (d) {
                        r = u;
                        for (var ea = A, J, pa, G, F, E = r.contents, K = r.dataTypes; "*" === K[0];)K.shift(), void 0 === pa && (pa = r.mimeType || ea.getResponseHeader("Content-Type"));
                        if (pa)for (F in E)if (E[F] && E[F].test(pa)) {
                            K.unshift(F);
                            break
                        }
                        if (K[0] in d)G = K[0]; else {
                            for (F in d) {
                                if (!K[0] || r.converters[F +
                                    " " + K[0]]) {
                                    G = F;
                                    break
                                }
                                J || (J = F)
                            }
                            G = G || J
                        }
                        r = G ? (G !== K[0] && K.unshift(G), d[G]) : void 0
                    }
                    var L;
                    a:{
                        d = u;
                        J = r;
                        pa = A;
                        G = f;
                        var y, z, B;
                        r = {};
                        ea = d.dataTypes.slice();
                        if (ea[1])for (y in d.converters)r[y.toLowerCase()] = d.converters[y];
                        for (F = ea.shift(); F;)if (d.responseFields[F] && (pa[d.responseFields[F]] = J), !B && G && d.dataFilter && (J = d.dataFilter(J, d.dataType)), B = F, F = ea.shift())if ("*" === F)F = B; else if ("*" !== B && B !== F) {
                            if (y = r[B + " " + F] || r["* " + F], !y)for (L in r)if (z = L.split(" "), z[1] === F && (y = r[B + " " + z[0]] || r["* " + z[0]])) {
                                !0 === y ? y = r[L] :
                                !0 !== r[L] && (F = z[0], ea.unshift(z[1]));
                                break
                            }
                            if (!0 !== y)if (y && d["throws"])J = y(J); else try {
                                J = y(J)
                            } catch (I) {
                                L = {state: "parsererror", error: y ? I : "No conversion from " + B + " to " + F};
                                break a
                            }
                        }
                        L = {state: "success", data: J}
                    }
                    r = L;
                    f ? (u.ifModified && (x = A.getResponseHeader("Last-Modified"), x && (g.lastModified[e] = x), x = A.getResponseHeader("etag"), x && (g.etag[e] = x)), 204 === a || "HEAD" === u.type ? C = "nocontent" : 304 === a ? C = "notmodified" : (C = r.state, q = r.data, t = r.error, f = !t)) : (t = C, (a || !C) && (C = "error", 0 > a && (a = 0)));
                    A.status = a;
                    A.statusText =
                        (b || C) + "";
                    f ? p.resolveWith(m, [q, C, A]) : p.rejectWith(m, [A, C, t]);
                    A.statusCode(v);
                    v = void 0;
                    k && D.trigger(f ? "ajaxSuccess" : "ajaxError", [A, u, f ? q : t]);
                    M.fireWith(m, [A, C]);
                    k && (D.trigger("ajaxComplete", [A, u]), --g.active || g.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var d, f, e, l, h, k, n, q, u = g.ajaxSetup({}, b), m = u.context || u, D = u.context && (m.nodeType || m.jquery) ? g(m) : g.event, p = g.Deferred(), M = g.Callbacks("once memory"), v = u.statusCode || {}, r = {}, x = {}, w = 0, C = "canceled", A = {
                readyState: 0, getResponseHeader: function (a) {
                    var b;
                    if (2 === w) {
                        if (!q)for (q = {}; b = cc.exec(l);)q[b[1].toLowerCase()] = b[2];
                        b = q[a.toLowerCase()]
                    }
                    return null == b ? null : b
                }, getAllResponseHeaders: function () {
                    return 2 === w ? l : null
                }, setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return w || (a = x[c] = x[c] || a, r[a] = b), this
                }, overrideMimeType: function (a) {
                    return w || (u.mimeType = a), this
                }, statusCode: function (a) {
                    var b;
                    if (a)if (2 > w)for (b in a)v[b] = [v[b], a[b]]; else A.always(a[A.status]);
                    return this
                }, abort: function (a) {
                    a = a || C;
                    return n && n.abort(a), c(0, a), this
                }
            };
            if (p.promise(A).complete =
                    M.add, A.success = A.done, A.error = A.fail, u.url = ((a || u.url || Na) + "").replace(bc, "").replace(ec, Xa[1] + "//"), u.type = b.method || b.type || u.method || u.type, u.dataTypes = g.trim(u.dataType || "*").toLowerCase().match(W) || [""], null == u.crossDomain && (d = Qb.exec(u.url.toLowerCase()), u.crossDomain = !(!d || d[1] === Xa[1] && d[2] === Xa[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Xa[3] || ("http:" === Xa[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = g.param(u.data, u.traditional)), Q(Rb, u, b, A), 2 === w)return A;
            (k = u.global) && 0 === g.active++ && g.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !dc.test(u.type);
            e = u.url;
            u.hasContent || (u.data && (e = u.url += (Nb.test(e) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Pb.test(e) ? e.replace(Pb, "$1_=" + Mb++) : e + (Nb.test(e) ? "&" : "?") + "_=" + Mb++));
            u.ifModified && (g.lastModified[e] && A.setRequestHeader("If-Modified-Since", g.lastModified[e]), g.etag[e] && A.setRequestHeader("If-None-Match", g.etag[e]));
            (u.data && u.hasContent && !1 !== u.contentType || b.contentType) &&
            A.setRequestHeader("Content-Type", u.contentType);
            A.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : u.accepts["*"]);
            for (f in u.headers)A.setRequestHeader(f, u.headers[f]);
            if (u.beforeSend && (!1 === u.beforeSend.call(m, A, u) || 2 === w))return A.abort();
            C = "abort";
            for (f in{success: 1, error: 1, complete: 1})A[f](u[f]);
            if (n = Q(Gb, u, b, A)) {
                A.readyState = 1;
                k && D.trigger("ajaxSend", [A, u]);
                u.async && 0 < u.timeout && (h = setTimeout(function () {
                        A.abort("timeout")
                    },
                    u.timeout));
                try {
                    w = 1, n.send(r, c)
                } catch (ea) {
                    if (!(2 > w))throw ea;
                    c(-1, ea)
                }
            } else c(-1, "No Transport");
            return A
        }, getJSON: function (a, b, c) {
            return g.get(a, b, c, "json")
        }, getScript: function (a, b) {
            return g.get(a, void 0, b, "script")
        }
    });
    g.each(["get", "post"], function (a, b) {
        g[b] = function (a, c, d, f) {
            return g.isFunction(c) && (f = f || d, d = c, c = void 0), g.ajax({
                url: a,
                type: b,
                dataType: f,
                data: c,
                success: d
            })
        }
    });
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        g.fn[b] = function (a) {
            return this.on(b,
                a)
        }
    });
    g._evalUrl = function (a) {
        return g.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    g.fn.extend({
        wrapAll: function (a) {
            if (g.isFunction(a))return this.each(function (b) {
                g(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = g(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(g.isFunction(a) ?
                function (b) {
                    g(this).wrapInner(a.call(this, b))
                } : function () {
                var b = g(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = g.isFunction(a);
            return this.each(function (c) {
                g(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    g.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !y.reliableHiddenOffsets() && "none" === (a.style && a.style.display ||
            g.css(a, "display"))
    };
    g.expr.filters.visible = function (a) {
        return !g.expr.filters.hidden(a)
    };
    var fc = /%20/g, Xb = /\[\]$/, Tb = /\r?\n/g, gc = /^(?:submit|button|image|reset|file)$/i, hc = /^(?:input|select|textarea|keygen)/i;
    g.param = function (a, b) {
        var c, d = [], f = function (a, b) {
            b = g.isFunction(b) ? b() : null == b ? "" : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(a) || a.jquery && !g.isPlainObject(a))g.each(a, function () {
            f(this.name, this.value)
        });
        else for (c in a)aa(c, a[c], b, f);
        return d.join("&").replace(fc, "+")
    };
    g.fn.extend({
        serialize: function () {
            return g.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = g.prop(this, "elements");
                return a ? g.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !g(this).is(":disabled") && hc.test(this.nodeName) && !gc.test(a) && (this.checked || !ib.test(a))
            }).map(function (a, b) {
                var c = g(this).val();
                return null == c ? null : g.isArray(c) ? g.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Tb, "\r\n")
                    }
                }) : {name: b.name, value: c.replace(Tb, "\r\n")}
            }).get()
        }
    });
    g.ajaxSettings.xhr = void 0 !== b.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && R()))a:{
            try {
                a = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {
            }
            a = void 0
        }
        return a
    } : R;
    var ic = 0, Db = {}, Eb = g.ajaxSettings.xhr();
    b.ActiveXObject && g(b).on("unload", function () {
        for (var a in Db)Db[a](void 0, !0)
    });
    y.cors = !!Eb && "withCredentials" in Eb;
    (Eb = y.ajax = !!Eb) && g.ajaxTransport(function (a) {
        if (!a.crossDomain ||
            y.cors) {
            var b;
            return {
                send: function (c, d) {
                    var f, e = a.xhr(), l = ++ic;
                    if (e.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (f in a.xhrFields)e[f] = a.xhrFields[f];
                    a.mimeType && e.overrideMimeType && e.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (f in c)void 0 !== c[f] && e.setRequestHeader(f, c[f] + "");
                    e.send(a.hasContent && a.data || null);
                    b = function (c, f) {
                        var h, k, u;
                        if (b && (f || 4 === e.readyState))if (delete Db[l], b = void 0, e.onreadystatechange =
                                g.noop, f)4 !== e.readyState && e.abort(); else {
                            u = {};
                            h = e.status;
                            "string" == typeof e.responseText && (u.text = e.responseText);
                            try {
                                k = e.statusText
                            } catch (n) {
                                k = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = u.text ? 200 : 404
                        }
                        u && d(h, k, u, e.getAllResponseHeaders())
                    };
                    a.async ? 4 === e.readyState ? setTimeout(b) : e.onreadystatechange = Db[l] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    g.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return g.globalEval(a), a
            }
        }
    });
    g.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    g.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = z.head || g("head")[0] || z.documentElement;
            return {
                send: function (d, f) {
                    b = z.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) &&
                        (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    };
                    c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var Ub = [], Ob = /(=)\?(?=&|$)|\?\?/;
    g.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Ub.pop() || g.expando + "_" + Mb++;
            return this[a] = !0, a
        }
    });
    g.ajaxPrefilter("json jsonp", function (a, c, d) {
        var f, e, l, h = !1 !== a.jsonp && (Ob.test(a.url) ? "url" : "string" == typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") &&
            Ob.test(a.data) && "data");
        return h || "jsonp" === a.dataTypes[0] ? (f = a.jsonpCallback = g.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Ob, "$1" + f) : !1 !== a.jsonp && (a.url += (Nb.test(a.url) ? "&" : "?") + a.jsonp + "=" + f), a.converters["script json"] = function () {
            return l || g.error(f + " was not called"), l[0]
        }, a.dataTypes[0] = "json", e = b[f], b[f] = function () {
            l = arguments
        }, d.always(function () {
            b[f] = e;
            a[f] && (a.jsonpCallback = c.jsonpCallback, Ub.push(f));
            l && g.isFunction(e) && e(l[0]);
            l = e = void 0
        }), "script") :
            void 0
    });
    g.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1);
        b = b || z;
        var d = Ka.exec(a);
        c = !c && [];
        return d ? [b.createElement(d[1])] : (d = g.buildFragment([a], b, c), c && c.length && g(c).remove(), g.merge([], d.childNodes))
    };
    var Vb = g.fn.load;
    g.fn.load = function (a, b, c) {
        if ("string" != typeof a && Vb)return Vb.apply(this, arguments);
        var d, f, e, l = this, h = a.indexOf(" ");
        return 0 <= h && (d = a.slice(h, a.length), a = a.slice(0, h)), g.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
        0 < l.length && g.ajax({url: a, type: e, dataType: "html", data: b}).done(function (a) {
            f = arguments;
            l.html(d ? g("<div>").append(g.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                l.each(c, f || [a.responseText, b, a])
            }), this
    };
    g.expr.filters.animated = function (a) {
        return g.grep(g.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Wb = b.document.documentElement;
    g.offset = {
        setOffset: function (a, b, c) {
            var d, f, e, l, h, k, u = g.css(a, "position"), n = g(a), q = {};
            "static" === u && (a.style.position = "relative");
            h = n.offset();
            e = g.css(a, "top");
            k = g.css(a, "left");
            ("absolute" === u || "fixed" === u) && -1 < g.inArray("auto", [e, k]) ? (d = n.position(), l = d.top, f = d.left) : (l = parseFloat(e) || 0, f = parseFloat(k) || 0);
            g.isFunction(b) && (b = b.call(a, c, h));
            null != b.top && (q.top = b.top - h.top + l);
            null != b.left && (q.left = b.left - h.left + f);
            "using" in b ? b.using.call(a, q) : n.css(q)
        }
    };
    g.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                g.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, f = this[0], e = f && f.ownerDocument;
            if (e)return b = e.documentElement,
                g.contains(b, f) ? ("undefined" !== typeof f.getBoundingClientRect && (d = f.getBoundingClientRect()), c = jb(e), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === g.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), g.nodeName(a[0], "html") || (c = a.offset()), c.top += g.css(a[0], "borderTopWidth", !0), c.left += g.css(a[0], "borderLeftWidth",
                    !0)), {
                    top: b.top - c.top - g.css(d, "marginTop", !0),
                    left: b.left - c.left - g.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Wb; a && !g.nodeName(a, "html") && "static" === g.css(a, "position");)a = a.offsetParent;
                return a || Wb
            })
        }
    });
    g.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        g.fn[a] = function (d) {
            return Ca(this, function (a, d, f) {
                var e = jb(a);
                return void 0 === f ? e ? b in e ? e[b] : e.document.documentElement[d] : a[d] : void(e ? e.scrollTo(c ?
                    g(e).scrollLeft() : f, c ? f : g(e).scrollTop()) : a[d] = f)
            }, a, d, arguments.length, null)
        }
    });
    g.each(["top", "left"], function (a, b) {
        g.cssHooks[b] = K(y.pixelPosition, function (a, c) {
            return c ? (c = Ea(a, b), Ja.test(c) ? g(a).position()[b] + "px" : c) : void 0
        })
    });
    g.each({Height: "height", Width: "width"}, function (a, b) {
        g.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            g.fn[d] = function (d, f) {
                var e = arguments.length && (c || "boolean" != typeof d), l = c || (!0 === d || !0 === f ? "margin" : "border");
                return Ca(this, function (b, c, d) {
                    var f;
                    return g.isWindow(b) ?
                        b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === d ? g.css(b, c, l) : g.style(b, c, d, l)
                }, b, e ? d : void 0, e, null)
            }
        })
    });
    g.fn.size = function () {
        return this.length
    };
    g.fn.andSelf = g.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return g
    });
    var jc = b.jQuery, kc = b.$;
    return g.noConflict = function (a) {
        return b.$ === g && (b.$ = kc), a && b.jQuery === g && (b.jQuery = jc), g
    }, "undefined" === typeof e && (b.jQuery = b.$ = g), g
});
yii = function (b) {
    function e() {
        b(document).ajaxComplete(function (a, b, c) {
            if (a = b.getResponseHeader("X-Redirect"))window.location = a
        })
    }

    function c() {
        b.ajaxPrefilter(function (a, b, c) {
            !a.crossDomain && k.getCsrfParam() && c.setRequestHeader("X-CSRF-Token", k.getCsrfToken())
        });
        k.refreshCsrfToken()
    }

    function a() {
        var a = function (a) {
            var c = b(this), d = c.data("method"), e = c.data("confirm");
            if (void 0 === d && void 0 === e)return !0;
            void 0 !== e ? b.proxy(k.confirm, this)(e, function () {
                k.handleAction(c, a)
            }) : k.handleAction(c, a);
            a.stopImmediatePropagation();
            return !1
        };
        b(document).on("click.yii", k.clickableSelector, a).on("change.yii", k.changeableSelector, a)
    }

    function d() {
        var a = location.protocol + "//" + location.host, c = b("script[src]").map(function () {
            return "/" === this.src.charAt(0) ? a + this.src : this.src
        }).toArray();
        b.ajaxPrefilter("script", function (d, e, m) {
            "jsonp" != d.dataType && (d = "/" === d.url.charAt(0) ? a + d.url : d.url, -1 === b.inArray(d, c) ? c.push(d) : -1 === b.inArray(d, b.map(k.reloadableScripts, function (b) {
                return "/" === b.charAt(0) ? a + b : b
            })) && m.abort())
        });
        b(document).ajaxComplete(function (a,
                                           c, d) {
            var f = [];
            b("link[rel=stylesheet]").each(function () {
                -1 === b.inArray(this.href, k.reloadableScripts) && (-1 == b.inArray(this.href, f) ? f.push(this.href) : b(this).remove())
            })
        })
    }

    var k = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function () {
            return b("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function () {
            return b("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function (a, c) {
            b("meta[name=csrf-param]").attr("content", a);
            b("meta[name=csrf-token]").attr("content", c)
        },
        refreshCsrfToken: function () {
            var a = k.getCsrfToken();
            a && b('form input[name="' + k.getCsrfParam() + '"]').val(a)
        },
        confirm: function (a, b, c) {
            confirm(a) ? !b || b() : !c || c()
        },
        handleAction: function (a, c) {
            var d = a.data("method"), e = a.closest("form"), m = a.attr("href"), v = a.data("params"), w = a.data("pjax"), x = !!a.data("pjax-push-state"), n = !!a.data("pjax-replace-state"), q = a.data("pjax-timeout"), l = a.data("pjax-scrollto"),
                u = a.data("pjax-push-redirect"), M = a.data("pjax-replace-redirect"), D = a.data("pjax-skip-outer-containers"), C, J = {};
            void 0 !== w && b.support.pjax && (C = a.data("pjax-container") ? a.data("pjax-container") : a.closest('[data-pjax-container=""]'), C.length || (C = b("body")), J = {
                container: C,
                push: x,
                replace: n,
                scrollTo: l,
                pushRedirect: u,
                replaceRedirect: M,
                pjaxSkipOuterContainers: D,
                timeout: q,
                originalEvent: c,
                originalTarget: a
            });
            if (void 0 === d)if (m && "#" != m)void 0 !== w && b.support.pjax ? b.pjax.click(c, J) : window.location = m; else {
                if (a.is(":submit") &&
                    e.length) {
                    if (void 0 !== w && b.support.pjax)e.on("submit", function (a) {
                        b.pjax.submit(a, J)
                    });
                    e.trigger("submit")
                }
            } else {
                var A = !e.length;
                A && (m && m.match(/(^\/|:\/\/)/) || (m = window.location.href), e = b("<form/>", {
                    method: d,
                    action: m
                }), (x = a.attr("target")) && e.attr("target", x), d.match(/(get|post)/i) || (e.append(b("<input/>", {
                    name: "_method",
                    value: d,
                    type: "hidden"
                })), d = "POST"), d.match(/(get|head|options)/i) || (x = k.getCsrfParam()) && e.append(b("<input/>", {
                    name: x,
                    value: k.getCsrfToken(),
                    type: "hidden"
                })), e.hide().appendTo("body"));
                if (x = e.data("yiiActiveForm"))x.submitObject = a;
                v && b.isPlainObject(v) && b.each(v, function (a, c) {
                    e.append(b("<input/>").attr({name: a, value: c, type: "hidden"}))
                });
                var F = e.attr("method");
                e.attr("method", d);
                var E = null;
                m && "#" != m && (E = e.attr("action"), e.attr("action", m));
                if (void 0 !== w && b.support.pjax)e.on("submit", function (a) {
                    b.pjax.submit(a, J)
                });
                e.trigger("submit");
                b.when(e.data("yiiSubmitFinalizePromise")).then(function () {
                    null != E && e.attr("action", E);
                    e.attr("method", F);
                    v && b.isPlainObject(v) && b.each(v, function (a,
                                                                   c) {
                        b('input[name="' + a + '"]', e).remove()
                    });
                    A && e.remove()
                })
            }
        },
        getQueryParams: function (a) {
            var c = a.indexOf("?");
            if (0 > c)return {};
            a = a.substring(c + 1).split("&");
            var c = {}, d, e;
            for (e = 0; e < a.length; e++) {
                d = a[e].split("=");
                var k = decodeURIComponent(d[0]);
                d = decodeURIComponent(d[1]);
                k.length && (void 0 !== c[k] ? (b.isArray(c[k]) || (c[k] = [c[k]]), c[k].push(d || "")) : c[k] = d || "")
            }
            return c
        },
        initModule: function (a) {
            if (void 0 === a.isActive || a.isActive)b.isFunction(a.init) && a.init(), b.each(a, function () {
                b.isPlainObject(this) && k.initModule(this)
            })
        },
        init: function () {
            c();
            e();
            d();
            a()
        }
    };
    return k
}(jQuery);
jQuery(document).ready(function () {
    yii.initModule(yii)
});
(function (b) {
    b.fn.yiiActiveForm = function (a) {
        return k[a] ? k[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== typeof a && a ? (b.error("Method " + a + " does not exist on jQuery.yiiActiveForm"), !1) : k.init.apply(this, arguments)
    };
    var e = {
            encodeErrorSummary: !0,
            errorSummary: ".error-summary",
            validateOnSubmit: !0,
            errorCssClass: "has-error",
            successCssClass: "has-success",
            validatingCssClass: "validating",
            ajaxParam: "ajax",
            ajaxDataType: "json",
            validationUrl: void 0,
            scrollToError: !0
        }, c = {
            id: void 0,
            name: void 0,
            container: void 0,
            input: void 0,
            error: ".help-block",
            encodeError: !0,
            validateOnChange: !0,
            validateOnBlur: !0,
            validateOnType: !1,
            validationDelay: 500,
            enableAjaxValidation: !1,
            validate: void 0,
            status: 0,
            cancelled: !1,
            value: void 0
        }, a, d = function (b) {
            a && (a.resolve(), a = void 0, b.removeData("yiiSubmitFinalizePromise"))
        }, k = {
            init: function (a, d) {
                return this.each(function () {
                    var f = b(this);
                    if (!f.data("yiiActiveForm")) {
                        var u = b.extend({}, e, d || {});
                        void 0 === u.validationUrl && (u.validationUrl = f.attr("action"));
                        b.each(a, function (d) {
                            a[d] =
                                b.extend({value: w(f, this)}, c, this);
                            h(f, a[d])
                        });
                        f.data("yiiActiveForm", {settings: u, attributes: a, submitting: !1, validated: !1});
                        f.bind("reset.yiiActiveForm", k.resetForm);
                        u.validateOnSubmit && (f.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function () {
                            f.data("yiiActiveForm").submitObject = b(this)
                        }), f.on("submit.yiiActiveForm", k.submitForm))
                    }
                })
            }, add: function (a) {
                var d = b(this);
                a = b.extend({value: w(d, a)}, c, a);
                d.data("yiiActiveForm").attributes.push(a);
                h(d, a)
            }, remove: function (a) {
                var c = b(this), d = c.data("yiiActiveForm").attributes,
                    f = -1, e = void 0;
                b.each(d, function (b) {
                    if (d[b].id == a)return f = b, e = d[b], !1
                });
                0 <= f && (d.splice(f, 1), x(c, e).off(".yiiActiveForm"));
                return e
            }, validateAttribute: function (a) {
                a = k.find.call(this, a);
                void 0 != a && f(b(this), a, !0)
            }, find: function (a) {
                var c = b(this).data("yiiActiveForm").attributes, d = void 0;
                b.each(c, function (b) {
                    if (c[b].id == a)return d = c[b], !1
                });
                return d
            }, destroy: function () {
                return this.each(function () {
                    b(this).unbind(".yiiActiveForm");
                    b(this).removeData("yiiActiveForm")
                })
            }, data: function () {
                return this.data("yiiActiveForm")
            },
            validate: function () {
                var a = b(this), c = a.data("yiiActiveForm"), f = !1, e = {}, h = p(), k = c.submitting;
                if (k) {
                    var m = b.Event("beforeValidate");
                    a.trigger(m, [e, h]);
                    if (!1 === m.result) {
                        c.submitting = !1;
                        d(a);
                        return
                    }
                }
                b.each(c.attributes, function () {
                    if (!b(this.input).is(":disabled") && (this.cancelled = !1, c.submitting || 2 === this.status || 3 === this.status)) {
                        var d = e[this.id];
                        void 0 === d && (d = [], e[this.id] = d);
                        var k = b.Event("beforeValidateAttribute");
                        a.trigger(k, [this, d, h]);
                        !1 !== k.result ? (this.validate && this.validate(this, w(a, this),
                            d, h, a), this.enableAjaxValidation && (f = !0)) : this.cancelled = !0
                    }
                });
                b.when.apply(this, h).always(function () {
                    for (var h in e)0 === e[h].length && delete e[h];
                    if (f) {
                        h = c.submitObject;
                        var m = "&" + c.settings.ajaxParam + "=" + a.attr("id");
                        h && h.length && h.attr("name") && (m += "&" + h.attr("name") + "=" + h.attr("value"));
                        b.ajax({
                            url: c.settings.validationUrl,
                            type: a.attr("method"),
                            data: a.serialize() + m,
                            dataType: c.settings.ajaxDataType,
                            complete: function (b, c) {
                                a.trigger("ajaxComplete", [b, c])
                            },
                            beforeSend: function (b, c) {
                                a.trigger("ajaxBeforeSend",
                                    [b, c])
                            },
                            success: function (d) {
                                null !== d && "object" === typeof d ? (b.each(c.attributes, function () {
                                    this.enableAjaxValidation && !this.cancelled || delete d[this.id]
                                }), r(a, b.extend(e, d), k)) : r(a, e, k)
                            },
                            error: function () {
                                c.submitting = !1;
                                d(a)
                            }
                        })
                    } else c.submitting ? setTimeout(function () {
                        r(a, e, k)
                    }, 200) : r(a, e, k)
                })
            }, submitForm: function () {
                var c = b(this), f = c.data("yiiActiveForm");
                if (f.validated) {
                    f.submitting = !1;
                    var e = b.Event("beforeSubmit");
                    c.trigger(e);
                    if (!1 === e.result)return f.validated = !1, d(c), !1;
                    f = c.data("yiiActiveForm").submitObject ||
                        c.find(":submit:first");
                    f.length && "submit" == f.attr("type") && f.attr("name") && (e = b('input[type="hidden"][name="' + f.attr("name") + '"]', c), e.length ? e.attr("value", f.attr("value")) : b("<input>").attr({
                        type: "hidden",
                        name: f.attr("name"),
                        value: f.attr("value")
                    }).appendTo(c));
                    return !0
                }
                a = b.Deferred();
                c.data("yiiSubmitFinalizePromise", a.promise());
                void 0 !== f.settings.timer && clearTimeout(f.settings.timer);
                f.submitting = !0;
                k.validate.call(c);
                return !1
            }, resetForm: function () {
                var a = b(this), c = a.data("yiiActiveForm");
                setTimeout(function () {
                    b.each(c.attributes,
                        function () {
                            this.value = w(a, this);
                            this.status = 0;
                            var b = a.find(this.container);
                            b.removeClass(c.settings.validatingCssClass + " " + c.settings.errorCssClass + " " + c.settings.successCssClass);
                            b.find(this.error).html("")
                        });
                    a.find(c.settings.errorSummary).hide().find("ul").html("")
                }, 1)
            }, updateMessages: function (a, c) {
                var d = b(this), f = d.data("yiiActiveForm");
                b.each(f.attributes, function () {
                    m(d, this, a)
                });
                c && v(d, a)
            }, updateAttribute: function (a, c) {
                var d = k.find.call(this, a);
                if (void 0 != d) {
                    var f = {};
                    f[a] = c;
                    m(b(this), d, f)
                }
            }
        },
        h = function (a, c) {
            var d = x(a, c);
            if (c.validateOnChange)d.on("change.yiiActiveForm", function () {
                f(a, c, !1)
            });
            if (c.validateOnBlur)d.on("blur.yiiActiveForm", function () {
                0 != c.status && 1 != c.status || f(a, c, !0)
            });
            if (c.validateOnType)d.on("keyup.yiiActiveForm", function (d) {
                -1 === b.inArray(d.which, [16, 17, 18, 37, 38, 39, 40]) && c.value !== w(a, c) && f(a, c, !1, c.validationDelay)
            })
        }, f = function (a, c, d, f) {
            var e = a.data("yiiActiveForm");
            d && (c.status = 2);
            b.each(e.attributes, function () {
                this.value !== w(a, this) && (this.status = 2, d = !0)
            });
            d && (void 0 !==
            e.settings.timer && clearTimeout(e.settings.timer), e.settings.timer = setTimeout(function () {
                e.submitting || a.is(":hidden") || (b.each(e.attributes, function () {
                    2 === this.status && (this.status = 3, a.find(this.container).addClass(e.settings.validatingCssClass))
                }), k.validate.call(a))
            }, f ? f : 200))
        }, p = function () {
            var a = [];
            a.add = function (a) {
                this.push(new b.Deferred(a))
            };
            return a
        }, r = function (a, c, f) {
            var e = a.data("yiiActiveForm");
            if (f) {
                var h = [];
                b.each(e.attributes, function () {
                    b(this.input).is(":disabled") || this.cancelled || !m(a, this, c) || h.push(this)
                });
                a.trigger("afterValidate", [c, h]);
                v(a, c);
                if (h.length) {
                    if (e.settings.scrollToError) {
                        f = a.find(b.map(h, function (a) {
                            return a.input
                        }).join(",")).first().closest(":visible").offset().top;
                        var k = b(window).scrollTop();
                        (f < k || f > k + b(window).height()) && b(window).scrollTop(f)
                    }
                    e.submitting = !1
                } else e.validated = !0, a.submit()
            } else b.each(e.attributes, function () {
                this.cancelled || 2 !== this.status && 3 !== this.status || m(a, this, c)
            });
            d(a)
        }, m = function (a, c, d) {
            var f = a.data("yiiActiveForm"), e = x(a, c),
                h = !1;
            b.isArray(d[c.id]) || (d[c.id] = []);
            a.trigger("afterValidateAttribute", [c, d[c.id]]);
            c.status = 1;
            if (e.length) {
                var h = 0 < d[c.id].length, e = a.find(c.container), k = e.find(c.error);
                h ? (c.encodeError ? k.text(d[c.id][0]) : k.html(d[c.id][0]), e.removeClass(f.settings.validatingCssClass + " " + f.settings.successCssClass).addClass(f.settings.errorCssClass)) : (k.empty(), e.removeClass(f.settings.validatingCssClass + " " + f.settings.errorCssClass + " ").addClass(f.settings.successCssClass));
                c.value = w(a, c)
            }
            return h
        }, v = function (a,
                         c) {
            var d = a.data("yiiActiveForm"), f = a.find(d.settings.errorSummary), e = f.find("ul").empty();
            f.length && c && (b.each(d.attributes, function () {
                if (b.isArray(c[this.id]) && c[this.id].length) {
                    var a = b("<li/>");
                    d.settings.encodeErrorSummary ? a.text(c[this.id][0]) : a.html(c[this.id][0]);
                    e.append(a)
                }
            }), f.toggle(0 < e.find("li").length))
        }, w = function (a, b) {
            var c = x(a, b), d = c.attr("type");
            return "checkbox" === d || "radio" === d ? (d = c.filter(":checked"), d.length || (d = a.find('input[type=hidden][name="' + c.attr("name") + '"]')), d.val()) :
                c.val()
        }, x = function (a, b) {
            var c = a.find(b.input);
            return c.length && "div" === c[0].tagName.toLowerCase() ? c.find("input") : c
        }
})(window.jQuery);
yii.validation = function (b) {
    function e(a, c, e) {
        return "undefined" === typeof File ? [] : (a = b(a.input).get(0).files) ? 0 === a.length ? (e.skipOnEmpty || c.push(e.uploadRequired), []) : e.maxFiles && e.maxFiles < a.length ? (c.push(e.tooMany), []) : a : (c.push(e.message), [])
    }

    function c(a, b, c) {
        if (c.extensions && 0 < c.extensions.length) {
            var f;
            f = a.name.lastIndexOf(".");
            f = ~f ? a.name.substr(f + 1, a.name.length).toLowerCase() : "";
            ~c.extensions.indexOf(f) || b.push(c.wrongExtension.replace(/\{file\}/g, a.name))
        }
        c.mimeTypes && 0 < c.mimeTypes.length &&
        (~c.mimeTypes.indexOf(a.type) || b.push(c.wrongMimeType.replace(/\{file\}/g, a.name)));
        c.maxSize && c.maxSize < a.size && b.push(c.tooBig.replace(/\{file\}/g, a.name));
        c.minSize && c.minSize > a.size && b.push(c.tooSmall.replace(/\{file\}/g, a.name))
    }

    var a = {
        isEmpty: function (a) {
            return null === a || void 0 === a || a == [] || "" === a
        }, addMessage: function (a, b, c) {
            a.push(b.replace(/\{value\}/g, c))
        }, required: function (c, e, h) {
            var f = !1;
            if (void 0 === h.requiredValue) {
                var p = "string" == typeof c || c instanceof String;
                if (h.strict && void 0 !== c ||
                    !h.strict && !a.isEmpty(p ? b.trim(c) : c))f = !0
            } else if (!h.strict && c == h.requiredValue || h.strict && c === h.requiredValue)f = !0;
            f || a.addMessage(e, h.message, c)
        }, "boolean": function (b, c, e) {
            e.skipOnEmpty && a.isEmpty(b) || (e.strict || b != e.trueValue && b != e.falseValue) && (!e.strict || b !== e.trueValue && b !== e.falseValue) && a.addMessage(c, e.message, b)
        }, string: function (b, c, e) {
            e.skipOnEmpty && a.isEmpty(b) || ("string" !== typeof b ? a.addMessage(c, e.message, b) : (void 0 !== e.min && b.length < e.min && a.addMessage(c, e.tooShort, b), void 0 !== e.max &&
            b.length > e.max && a.addMessage(c, e.tooLong, b), void 0 !== e.is && b.length != e.is && a.addMessage(c, e.notEqual, b)))
        }, file: function (a, k, h) {
            a = e(a, k, h);
            b.each(a, function (a, b) {
                c(b, k, h)
            })
        }, image: function (a, k, h, f) {
            a = e(a, k, h);
            b.each(a, function (a, d) {
                c(d, k, h);
                if ("undefined" !== typeof FileReader) {
                    var e = b.Deferred(), v = new FileReader, w = new Image;
                    w.onload = function () {
                        h.minWidth && this.width < h.minWidth && k.push(h.underWidth.replace(/\{file\}/g, d.name));
                        h.maxWidth && this.width > h.maxWidth && k.push(h.overWidth.replace(/\{file\}/g,
                            d.name));
                        h.minHeight && this.height < h.minHeight && k.push(h.underHeight.replace(/\{file\}/g, d.name));
                        h.maxHeight && this.height > h.maxHeight && k.push(h.overHeight.replace(/\{file\}/g, d.name));
                        e.resolve()
                    };
                    w.onerror = function () {
                        k.push(h.notImage.replace(/\{file\}/g, d.name));
                        e.resolve()
                    };
                    v.onload = function () {
                        w.src = v.result
                    };
                    v.onerror = function () {
                        e.resolve()
                    };
                    v.readAsDataURL(d);
                    f.push(e)
                }
            })
        }, number: function (b, c, e) {
            e.skipOnEmpty && a.isEmpty(b) || ("string" !== typeof b || b.match(e.pattern) ? (void 0 !== e.min && b < e.min && a.addMessage(c,
                e.tooSmall, b), void 0 !== e.max && b > e.max && a.addMessage(c, e.tooBig, b)) : a.addMessage(c, e.message, b))
        }, range: function (c, e, h) {
            if (!h.skipOnEmpty || !a.isEmpty(c))if (!h.allowArray && b.isArray(c))a.addMessage(e, h.message, c); else {
                var f = !0;
                b.each(b.isArray(c) ? c : [c], function (a, c) {
                    return -1 == b.inArray(c, h.range) ? f = !1 : !0
                });
                h.not === f && a.addMessage(e, h.message, c)
            }
        }, regularExpression: function (b, c, e) {
            e.skipOnEmpty && a.isEmpty(b) || (!e.not && !b.match(e.pattern) || e.not && b.match(e.pattern)) && a.addMessage(c, e.message, b)
        }, email: function (b,
                            c, e) {
            if (!e.skipOnEmpty || !a.isEmpty(b)) {
                var f = !0, f = /^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/.exec(b);
                null === f ? f = !1 : (e.enableIDN && (f[5] = punycode.toASCII(f[5]), f[6] = punycode.toASCII(f[6]), b = f[1] + f[3] + f[5] + "@" + f[6] + f[7]), f = 64 < f[5].length ? !1 : 254 < (f[5] + "@" + f[6]).length ? !1 : b.match(e.pattern) || e.allowName && b.match(e.fullPattern));
                f || a.addMessage(c, e.message, b)
            }
        }, url: function (b, c, e) {
            if (!e.skipOnEmpty || !a.isEmpty(b)) {
                e.defaultScheme && !b.match(/:\/\//) && (b = e.defaultScheme + "://" + b);
                var f = !0;
                if (e.enableIDN) {
                    var p = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(b);
                    null === p ? f = !1 : b = p[1] + "://" + punycode.toASCII(p[2]) + p[3]
                }
                f && b.match(e.pattern) || a.addMessage(c, e.message, b)
            }
        }, trim: function (c, e, h) {
            c = c.find(e.input);
            e = c.val();
            h.skipOnEmpty && a.isEmpty(e) || (e = b.trim(e), c.val(e));
            return e
        }, captcha: function (c, e, h) {
            if (!h.skipOnEmpty || !a.isEmpty(c)) {
                for (var f = b("body").data(h.hashKey), f = null == f ? h.hash : f[h.caseSensitive ? 0 : 1], p = h.caseSensitive ? c : c.toLowerCase(), r = p.length - 1, m = 0; 0 <= r; --r)m += p.charCodeAt(r);
                m != f && a.addMessage(e,
                    h.message, c)
            }
        }, compare: function (c, e, h) {
            if (!h.skipOnEmpty || !a.isEmpty(c)) {
                var f;
                f = void 0 === h.compareAttribute ? h.compareValue : b("#" + h.compareAttribute).val();
                "number" === h.type && (c = parseFloat(c), f = parseFloat(f));
                switch (h.operator) {
                    case "==":
                        f = c == f;
                        break;
                    case "===":
                        f = c === f;
                        break;
                    case "!=":
                        f = c != f;
                        break;
                    case "!==":
                        f = c !== f;
                        break;
                    case ">":
                        f = c > f;
                        break;
                    case ">=":
                        f = c >= f;
                        break;
                    case "<":
                        f = c < f;
                        break;
                    case "<=":
                        f = c <= f;
                        break;
                    default:
                        f = !1
                }
                f || a.addMessage(e, h.message, c)
            }
        }, ip: function (b, c, e) {
            var f = null, p = null;
            if (!e.skipOnEmpty || !a.isEmpty(b)) {
                var r = (new RegExp(e.ipParsePattern)).exec(b);
                r && (f = r[1] || null, b = r[2], p = r[4] || null);
                !0 === e.subnet && null === p ? a.addMessage(c, e.messages.noSubnet, b) : !1 === e.subnet && null !== p ? a.addMessage(c, e.messages.hasSubnet, b) : !1 === e.negation && null !== f ? a.addMessage(c, e.messages.message, b) : 6 == (-1 === b.indexOf(":") ? 4 : 6) ? (e.ipv6 || a.addMessage(c, e.messages.ipv6NotAllowed, b), (new RegExp(e.ipv6Pattern)).test(b) || a.addMessage(c, e.messages.message, b)) : (e.ipv4 || a.addMessage(c, e.messages.ipv4NotAllowed, b), (new RegExp(e.ipv4Pattern)).test(b) ||
                a.addMessage(c, e.messages.message, b))
            }
        }
    };
    return a
}(jQuery);
var IASCallbacks = function () {
    this.list = [];
    this.fireStack = [];
    this.isDisabled = this.isFiring = !1;
    this.fire = function (b) {
        var e = b[0], c = b[1];
        b = b[2];
        this.isFiring = !0;
        for (var a = 0, d = this.list.length; a < d; a++)if (void 0 != this.list[a] && !1 === this.list[a].fn.apply(e, b)) {
            c.reject();
            break
        }
        this.isFiring = !1;
        c.resolve();
        this.fireStack.length && this.fire(this.fireStack.shift())
    };
    this.inList = function (b, e) {
        for (var c = e || 0, a = this.list.length; c < a; c++)if (this.list[c].fn === b || b.guid && this.list[c].fn.guid && b.guid === this.list[c].fn.guid)return c;
        return -1
    };
    return this
};
IASCallbacks.prototype = {
    add: function (b, e) {
        var c = {fn: b, priority: e};
        e = e || 0;
        for (var a = 0, d = this.list.length; a < d; a++)if (e > this.list[a].priority)return this.list.splice(a, 0, c), this;
        this.list.push(c);
        return this
    }, remove: function (b) {
        for (var e = 0; -1 < (e = this.inList(b, e));)this.list.splice(e, 1);
        return this
    }, has: function (b) {
        return -1 < this.inList(b)
    }, fireWith: function (b, e) {
        var c = jQuery.Deferred();
        if (this.isDisabled)return c.reject();
        e = e || [];
        e = [b, c, e.slice ? e.slice() : e];
        this.isFiring ? this.fireStack.push(e) : this.fire(e);
        return c
    }, disable: function () {
        this.isDisabled = !0
    }, enable: function () {
        this.isDisabled = !1
    }
};
(function (b) {
    var e = function (c, a) {
        this.itemsContainerSelector = a.container;
        this.itemSelector = a.item;
        this.nextSelector = a.next;
        this.paginationSelector = a.pagination;
        this.$scrollContainer = c;
        this.$container = window === c.get(0) ? b(document) : c;
        this.defaultDelay = a.delay;
        this.negativeMargin = a.negativeMargin;
        this.nextUrl = null;
        this.isInitialized = this.isPaused = this.isBound = !1;
        this.listeners = {
            next: new IASCallbacks,
            load: new IASCallbacks,
            loaded: new IASCallbacks,
            render: new IASCallbacks,
            rendered: new IASCallbacks,
            scroll: new IASCallbacks,
            noneLeft: new IASCallbacks,
            ready: new IASCallbacks
        };
        this.extensions = [];
        this.scrollHandler = function () {
            if (this.isBound && !this.isPaused) {
                var a = this.getCurrentScrollOffset(this.$scrollContainer), b = this.getScrollThreshold();
                -1 != b && (this.fire("scroll", [a, b]), a >= b && this.next())
            }
        };
        this.getItemsContainer = function () {
            return b(this.itemsContainerSelector)
        };
        this.getLastItem = function () {
            return b(this.itemSelector, this.getItemsContainer().get(0)).last()
        };
        this.getFirstItem = function () {
            return b(this.itemSelector, this.getItemsContainer().get(0)).first()
        };
        this.getScrollThreshold = function (a) {
            var b;
            a = a || this.negativeMargin;
            a = 0 <= a ? -1 * a : a;
            b = this.getLastItem();
            return 0 === b.length ? -1 : b.offset().top + b.height() + a
        };
        this.getCurrentScrollOffset = function (a) {
            var b = 0, c = a.height(), b = window === a.get(0) ? a.scrollTop() : a.offset().top;
            if (-1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod"))c += 80;
            return b + c
        };
        this.getNextUrl = function (a) {
            a = a || this.$container;
            return b(this.nextSelector, a).last().attr("href")
        };
        this.load = function (a, c, e) {
            var f = this,
                p, r = [], m = +new Date, v;
            e = e || this.defaultDelay;
            a = {url: a};
            f.fire("load", [a]);
            return b.get(a.url, null, b.proxy(function (a) {
                p = b(this.itemsContainerSelector, a).eq(0);
                0 === p.length && (p = b(a).filter(this.itemsContainerSelector).eq(0));
                p && p.find(this.itemSelector).each(function () {
                    r.push(this)
                });
                f.fire("loaded", [a, r]);
                c && (v = +new Date - m, v < e ? setTimeout(function () {
                    c.call(f, a, r)
                }, e - v) : c.call(f, a, r))
            }, f), "html")
        };
        this.render = function (a, c) {
            var e = this, f = this.getLastItem(), p = 0;
            this.fire("render", [a]).done(function () {
                b(a).hide();
                f.after(a);
                b(a).fadeIn(400, function () {
                    ++p < a.length || (e.fire("rendered", [a]), c && c())
                })
            })
        };
        this.hidePagination = function () {
            this.paginationSelector && b(this.paginationSelector, this.$container).hide()
        };
        this.restorePagination = function () {
            this.paginationSelector && b(this.paginationSelector, this.$container).show()
        };
        this.throttle = function (a, c) {
            var e = 0, f, p;
            f = function () {
                function b() {
                    e = +new Date;
                    a.apply(f, v)
                }

                var f = this, v = arguments, w = +new Date - e;
                p ? clearTimeout(p) : b();
                w > c ? b() : p = setTimeout(b, c)
            };
            b.guid && (f.guid = a.guid =
                a.guid || b.guid++);
            return f
        };
        this.fire = function (a, b) {
            return this.listeners[a].fireWith(this, b)
        };
        this.pause = function () {
            this.isPaused = !0
        };
        this.resume = function () {
            this.isPaused = !1
        };
        return this
    };
    e.prototype.initialize = function () {
        if (this.isInitialized)return !1;
        var b = !!("onscroll" in this.$scrollContainer.get(0)), a = this.getCurrentScrollOffset(this.$scrollContainer), d = this.getScrollThreshold();
        if (!b)return !1;
        this.hidePagination();
        this.bind();
        this.fire("ready");
        this.nextUrl = this.getNextUrl();
        a >= d ? (this.next(),
            this.one("rendered", function () {
                this.isInitialized = !0
            })) : this.isInitialized = !0;
        return this
    };
    e.prototype.reinitialize = function () {
        this.isInitialized = !1;
        this.unbind();
        this.initialize()
    };
    e.prototype.bind = function () {
        if (!this.isBound) {
            this.$scrollContainer.on("scroll", b.proxy(this.throttle(this.scrollHandler, 150), this));
            for (var c = 0, a = this.extensions.length; c < a; c++)this.extensions[c].bind(this);
            this.isBound = !0;
            this.resume()
        }
    };
    e.prototype.unbind = function () {
        if (this.isBound) {
            this.$scrollContainer.off("scroll",
                this.scrollHandler);
            for (var b = 0, a = this.extensions.length; b < a; b++)"undefined" != typeof this.extensions[b].unbind && this.extensions[b].unbind(this);
            this.isBound = !1
        }
    };
    e.prototype.destroy = function () {
        this.unbind();
        this.$scrollContainer.data("ias", null)
    };
    e.prototype.on = function (c, a, d) {
        if ("undefined" == typeof this.listeners[c])throw Error('There is no event called "' + c + '"');
        d = d || 0;
        this.listeners[c].add(b.proxy(a, this), d);
        return this
    };
    e.prototype.one = function (b, a) {
        var d = this, e = function () {
            d.off(b, a);
            d.off(b,
                e)
        };
        this.on(b, a);
        this.on(b, e);
        return this
    };
    e.prototype.off = function (b, a) {
        if ("undefined" == typeof this.listeners[b])throw Error('There is no event called "' + b + '"');
        this.listeners[b].remove(a);
        return this
    };
    e.prototype.next = function () {
        var b = this.nextUrl, a = this;
        this.pause();
        if (!b)return this.fire("noneLeft", [this.getLastItem()]), this.listeners.noneLeft.disable(), a.resume(), !1;
        var d = this.fire("next", [b]);
        d.done(function () {
            a.load(b, function (b, c) {
                a.render(c, function () {
                    a.nextUrl = a.getNextUrl(b);
                    a.resume()
                })
            })
        });
        d.fail(function () {
            a.resume()
        });
        return !0
    };
    e.prototype.extension = function (b) {
        if ("undefined" == typeof b.bind)throw Error('Extension doesn\'t have required method "bind"');
        "undefined" != typeof b.initialize && b.initialize(this);
        this.extensions.push(b);
        this.isInitialized && this.reinitialize();
        return this
    };
    b.ias = function (c) {
        var a = b(window);
        return a.ias.apply(a, arguments)
    };
    b.fn.ias = function (c) {
        var a = Array.prototype.slice.call(arguments), d = this;
        this.each(function () {
            var k = b(this), h = k.data("ias"), f = b.extend({},
                b.fn.ias.defaults, k.data(), "object" == typeof c && c);
            h || (k.data("ias", h = new e(k, f)), b(document).ready(b.proxy(h.initialize, h)));
            if ("string" === typeof c) {
                if ("function" !== typeof h[c])throw Error('There is no method called "' + c + '"');
                a.shift();
                h[c].apply(h, a)
            }
            d = h
        });
        return d
    };
    b.fn.ias.defaults = {
        item: ".item",
        container: ".listing",
        next: ".next",
        pagination: !1,
        delay: 600,
        negativeMargin: 10
    }
})(jQuery);
var IASHistoryExtension = function (b) {
    b = jQuery.extend({}, this.defaults, b);
    this.ias = null;
    this.prevSelector = b.prev;
    this.prevUrl = null;
    this.listeners = {prev: new IASCallbacks};
    this.onPageChange = function (b, c, a) {
        window.history && window.history.replaceState && history.replaceState(history.state, document.title, a)
    };
    this.onScroll = function (b, c) {
        var a = this.getScrollThresholdFirstItem();
        this.prevUrl && (b -= this.ias.$scrollContainer.height(), b <= a && this.prev())
    };
    this.onReady = function () {
        var b = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer),
            c = this.getScrollThresholdFirstItem(), b = b - this.ias.$scrollContainer.height();
        b <= c && this.prev()
    };
    this.getPrevUrl = function (b) {
        b || (b = this.ias.$container);
        return jQuery(this.prevSelector, b).last().attr("href")
    };
    this.getScrollThresholdFirstItem = function () {
        var b;
        b = this.ias.getFirstItem();
        return 0 === b.length ? -1 : b.offset().top
    };
    this.renderBefore = function (b, c) {
        var a = this.ias, d = a.getFirstItem(), k = 0;
        a.fire("render", [b]);
        jQuery(b).hide();
        d.before(b);
        jQuery(b).fadeIn(400, function () {
            ++k < b.length || (a.fire("rendered",
                [b]), c && c())
        })
    };
    return this
};
IASHistoryExtension.prototype.initialize = function (b) {
    var e = this;
    this.ias = b;
    jQuery.extend(b.listeners, this.listeners);
    b.prev = function () {
        return e.prev()
    };
    this.prevUrl = this.getPrevUrl()
};
IASHistoryExtension.prototype.bind = function (b) {
    b.on("pageChange", jQuery.proxy(this.onPageChange, this));
    b.on("scroll", jQuery.proxy(this.onScroll, this));
    b.on("ready", jQuery.proxy(this.onReady, this))
};
IASHistoryExtension.prototype.unbind = function (b) {
    b.off("pageChange", this.onPageChange);
    b.off("scroll", this.onScroll);
    b.off("ready", this.onReady)
};
IASHistoryExtension.prototype.prev = function () {
    var b = this.prevUrl, e = this, c = this.ias;
    if (!b)return !1;
    c.pause();
    var a = c.fire("prev", [b]);
    a.done(function () {
        c.load(b, function (a, b) {
            e.renderBefore(b, function () {
                e.prevUrl = e.getPrevUrl(a);
                c.resume();
                e.prevUrl && e.prev()
            })
        })
    });
    a.fail(function () {
        c.resume()
    });
    return !0
};
IASHistoryExtension.prototype.defaults = {prev: ".prev"};
var IASNoneLeftExtension = function (b) {
    b = jQuery.extend({}, this.defaults, b);
    this.ias = null;
    this.uid = (new Date).getTime();
    this.html = b.html.replace("{text}", b.text);
    this.showNoneLeft = function () {
        var b = jQuery(this.html).attr("id", "ias_noneleft_" + this.uid);
        this.ias.getLastItem().after(b);
        b.fadeIn()
    };
    return this
};
IASNoneLeftExtension.prototype.bind = function (b) {
    this.ias = b;
    b.on("noneLeft", jQuery.proxy(this.showNoneLeft, this))
};
IASNoneLeftExtension.prototype.unbind = function (b) {
    b.off("noneLeft", this.showNoneLeft)
};
IASNoneLeftExtension.prototype.defaults = {
    text: "You reached the end.",
    html: '<div class="ias-noneleft" style="text-align: center;">{text}</div>'
};
var IASPagingExtension = function () {
    this.ias = null;
    this.pagebreaks = [[0, document.location.toString()]];
    this.lastPageNum = 1;
    this.enabled = !0;
    this.listeners = {pageChange: new IASCallbacks};
    this.onScroll = function (b, e) {
        if (this.enabled) {
            var c = this.ias, a = this.getCurrentPageNum(b), d = this.getCurrentPagebreak(b);
            this.lastPageNum !== a && (d = d[1], c.fire("pageChange", [a, b, d]));
            this.lastPageNum = a
        }
    };
    this.onNext = function (b) {
        var e = this.ias.getCurrentScrollOffset(this.ias.$scrollContainer);
        this.pagebreaks.push([e, b]);
        var c =
            this.getCurrentPageNum(e) + 1;
        this.ias.fire("pageChange", [c, e, b]);
        this.lastPageNum = c
    };
    this.onPrev = function (b) {
        var e = this, c = e.ias, a = c.getCurrentScrollOffset(c.$scrollContainer) - c.$scrollContainer.height(), d = c.getFirstItem();
        this.enabled = !1;
        this.pagebreaks.unshift([0, b]);
        c.one("rendered", function () {
            for (var k = 1, h = e.pagebreaks.length; k < h; k++)e.pagebreaks[k][0] += d.offset().top;
            k = e.getCurrentPageNum(a) + 1;
            c.fire("pageChange", [k, a, b]);
            e.lastPageNum = k;
            e.enabled = !0
        })
    };
    return this
};
IASPagingExtension.prototype.initialize = function (b) {
    this.ias = b;
    jQuery.extend(b.listeners, this.listeners)
};
IASPagingExtension.prototype.bind = function (b) {
    try {
        b.on("prev", jQuery.proxy(this.onPrev, this), this.priority)
    } catch (e) {
    }
    b.on("next", jQuery.proxy(this.onNext, this), this.priority);
    b.on("scroll", jQuery.proxy(this.onScroll, this), this.priority)
};
IASPagingExtension.prototype.unbind = function (b) {
    try {
        b.off("prev", this.onPrev)
    } catch (e) {
    }
    b.off("next", this.onNext);
    b.off("scroll", this.onScroll)
};
IASPagingExtension.prototype.getCurrentPageNum = function (b) {
    for (var e = this.pagebreaks.length - 1; 0 < e; e--)if (b > this.pagebreaks[e][0])return e + 1;
    return 1
};
IASPagingExtension.prototype.getCurrentPagebreak = function (b) {
    for (var e = this.pagebreaks.length - 1; 0 <= e; e--)if (b > this.pagebreaks[e][0])return this.pagebreaks[e];
    return null
};
IASPagingExtension.prototype.priority = 500;
var IASSpinnerExtension = function (b) {
    b = jQuery.extend({}, this.defaults, b);
    this.ias = null;
    this.uid = (new Date).getTime();
    this.src = b.src;
    this.html = b.html.replace("{src}", this.src);
    this.showSpinner = function () {
        var b = this.getSpinner() || this.createSpinner();
        this.ias.getLastItem().after(b);
        b.fadeIn()
    };
    this.showSpinnerBefore = function () {
        var b = this.getSpinner() || this.createSpinner();
        this.ias.getFirstItem().before(b);
        b.fadeIn()
    };
    this.removeSpinner = function () {
        this.hasSpinner() && this.getSpinner().remove()
    };
    this.getSpinner =
        function () {
            var b = jQuery("#ias_spinner_" + this.uid);
            return 0 < b.length ? b : !1
        };
    this.hasSpinner = function () {
        return 0 < jQuery("#ias_spinner_" + this.uid).length
    };
    this.createSpinner = function () {
        var b = jQuery(this.html).attr("id", "ias_spinner_" + this.uid);
        b.hide();
        return b
    };
    return this
};
IASSpinnerExtension.prototype.bind = function (b) {
    this.ias = b;
    b.on("next", jQuery.proxy(this.showSpinner, this));
    b.on("render", jQuery.proxy(this.removeSpinner, this));
    try {
        b.on("prev", jQuery.proxy(this.showSpinnerBefore, this))
    } catch (e) {
    }
};
IASSpinnerExtension.prototype.unbind = function (b) {
    b.off("next", this.showSpinner);
    b.off("render", this.removeSpinner);
    try {
        b.off("prev", this.showSpinnerBefore)
    } catch (e) {
    }
};
IASSpinnerExtension.prototype.defaults = {
    src: "data:image/gif;base64,R0lGODlhEAAQAPQAAP///wAAAPDw8IqKiuDg4EZGRnp6egAAAFhYWCQkJKysrL6+vhQUFJycnAQEBDY2NmhoaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFdyAgAgIJIeWoAkRCCMdBkKtIHIngyMKsErPBYbADpkSCwhDmQCBethRB6Vj4kFCkQPG4IlWDgrNRIwnO4UKBXDufzQvDMaoSDBgFb886MiQadgNABAokfCwzBA8LCg0Egl8jAggGAA1kBIA1BAYzlyILczULC2UhACH5BAkKAAAALAAAAAAQABAAAAV2ICACAmlAZTmOREEIyUEQjLKKxPHADhEvqxlgcGgkGI1DYSVAIAWMx+lwSKkICJ0QsHi9RgKBwnVTiRQQgwF4I4UFDQQEwi6/3YSGWRRmjhEETAJfIgMFCnAKM0KDV4EEEAQLiF18TAYNXDaSe3x6mjidN1s3IQAh+QQJCgAAACwAAAAAEAAQAAAFeCAgAgLZDGU5jgRECEUiCI+yioSDwDJyLKsXoHFQxBSHAoAAFBhqtMJg8DgQBgfrEsJAEAg4YhZIEiwgKtHiMBgtpg3wbUZXGO7kOb1MUKRFMysCChAoggJCIg0GC2aNe4gqQldfL4l/Ag1AXySJgn5LcoE3QXI3IQAh+QQJCgAAACwAAAAAEAAQAAAFdiAgAgLZNGU5joQhCEjxIssqEo8bC9BRjy9Ag7GILQ4QEoE0gBAEBcOpcBA0DoxSK/e8LRIHn+i1cK0IyKdg0VAoljYIg+GgnRrwVS/8IAkICyosBIQpBAMoKy9dImxPhS+GKkFrkX+TigtLlIyKXUF+NjagNiEAIfkECQoAAAAsAAAAABAAEAAABWwgIAICaRhlOY4EIgjH8R7LKhKHGwsMvb4AAy3WODBIBBKCsYA9TjuhDNDKEVSERezQEL0WrhXucRUQGuik7bFlngzqVW9LMl9XWvLdjFaJtDFqZ1cEZUB0dUgvL3dgP4WJZn4jkomWNpSTIyEAIfkECQoAAAAsAAAAABAAEAAABX4gIAICuSxlOY6CIgiD8RrEKgqGOwxwUrMlAoSwIzAGpJpgoSDAGifDY5kopBYDlEpAQBwevxfBtRIUGi8xwWkDNBCIwmC9Vq0aiQQDQuK+VgQPDXV9hCJjBwcFYU5pLwwHXQcMKSmNLQcIAExlbH8JBwttaX0ABAcNbWVbKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICSRBlOY7CIghN8zbEKsKoIjdFzZaEgUBHKChMJtRwcWpAWoWnifm6ESAMhO8lQK0EEAV3rFopIBCEcGwDKAqPh4HUrY4ICHH1dSoTFgcHUiZjBhAJB2AHDykpKAwHAwdzf19KkASIPl9cDgcnDkdtNwiMJCshACH5BAkKAAAALAAAAAAQABAAAAV3ICACAkkQZTmOAiosiyAoxCq+KPxCNVsSMRgBsiClWrLTSWFoIQZHl6pleBh6suxKMIhlvzbAwkBWfFWrBQTxNLq2RG2yhSUkDs2b63AYDAoJXAcFRwADeAkJDX0AQCsEfAQMDAIPBz0rCgcxky0JRWE1AmwpKyEAIfkECQoAAAAsAAAAABAAEAAABXkgIAICKZzkqJ4nQZxLqZKv4NqNLKK2/Q4Ek4lFXChsg5ypJjs1II3gEDUSRInEGYAw6B6zM4JhrDAtEosVkLUtHA7RHaHAGJQEjsODcEg0FBAFVgkQJQ1pAwcDDw8KcFtSInwJAowCCA6RIwqZAgkPNgVpWndjdyohACH5BAkKAAAALAAAAAAQABAAAAV5ICACAimc5KieLEuUKvm2xAKLqDCfC2GaO9eL0LABWTiBYmA06W6kHgvCqEJiAIJiu3gcvgUsscHUERm+kaCxyxa+zRPk0SgJEgfIvbAdIAQLCAYlCj4DBw0IBQsMCjIqBAcPAooCBg9pKgsJLwUFOhCZKyQDA3YqIQAh+QQJCgAAACwAAAAAEAAQAAAFdSAgAgIpnOSonmxbqiThCrJKEHFbo8JxDDOZYFFb+A41E4H4OhkOipXwBElYITDAckFEOBgMQ3arkMkUBdxIUGZpEb7kaQBRlASPg0FQQHAbEEMGDSVEAA1QBhAED1E0NgwFAooCDWljaQIQCE5qMHcNhCkjIQAh+QQJCgAAACwAAAAAEAAQAAAFeSAgAgIpnOSoLgxxvqgKLEcCC65KEAByKK8cSpA4DAiHQ/DkKhGKh4ZCtCyZGo6F6iYYPAqFgYy02xkSaLEMV34tELyRYNEsCQyHlvWkGCzsPgMCEAY7Cg04Uk48LAsDhRA8MVQPEF0GAgqYYwSRlycNcWskCkApIyEAOwAAAAAAAAAAAA==",
    html: '<div class="ias-spinner" style="text-align: center;"><img src="{src}"/></div>'
};
var IASTriggerExtension = function (b) {
    b = jQuery.extend({}, this.defaults, b);
    this.ias = null;
    this.html = b.html.replace("{text}", b.text);
    this.htmlPrev = b.htmlPrev.replace("{text}", b.textPrev);
    this.enabled = !0;
    this.count = 0;
    this.offset = b.offset;
    this.$triggerPrev = this.$triggerNext = null;
    this.showTriggerNext = function () {
        if (!this.enabled || !1 === this.offset || ++this.count < this.offset)return !0;
        var b = this.$triggerNext || (this.$triggerNext = this.createTrigger(this.next, this.html));
        this.ias.getLastItem().after(b);
        b.fadeIn();
        return !1
    };
    this.showTriggerPrev = function () {
        if (!this.enabled)return !0;
        var b = this.$triggerPrev || (this.$triggerPrev = this.createTrigger(this.prev, this.htmlPrev));
        this.ias.getFirstItem().before(b);
        b.fadeIn();
        return !1
    };
    this.onRendered = function () {
        this.enabled = !0
    };
    this.createTrigger = function (b, c) {
        var a = (new Date).getTime();
        c = c || this.html;
        a = jQuery(c).attr("id", "ias_trigger_" + a);
        a.hide();
        a.on("click", jQuery.proxy(b, this));
        return a
    };
    return this
};
IASTriggerExtension.prototype.bind = function (b) {
    this.ias = b;
    b.on("next", jQuery.proxy(this.showTriggerNext, this), this.priority);
    b.on("rendered", jQuery.proxy(this.onRendered, this), this.priority);
    try {
        b.on("prev", jQuery.proxy(this.showTriggerPrev, this), this.priority)
    } catch (e) {
    }
};
IASTriggerExtension.prototype.unbind = function (b) {
    b.off("next", this.showTriggerNext);
    b.off("rendered", this.onRendered);
    try {
        b.off("prev", this.showTriggerPrev)
    } catch (e) {
    }
};
IASTriggerExtension.prototype.next = function () {
    this.enabled = !1;
    this.ias.pause();
    this.$triggerNext && (this.$triggerNext.remove(), this.$triggerNext = null);
    this.ias.next()
};
IASTriggerExtension.prototype.prev = function () {
    this.enabled = !1;
    this.ias.pause();
    this.$triggerPrev && (this.$triggerPrev.remove(), this.$triggerPrev = null);
    this.ias.prev()
};
IASTriggerExtension.prototype.defaults = {
    text: "Load more items",
    html: '<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
    textPrev: "Load previous items",
    htmlPrev: '<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
    offset: 0
};
IASTriggerExtension.prototype.priority = 1E3;
(function (b) {
    b.fn.yiiCaptcha = function (a) {
        return c[a] ? c[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== typeof a && a ? (b.error("Method " + a + " does not exist on jQuery.yiiCaptcha"), !1) : c.init.apply(this, arguments)
    };
    var e = {refreshUrl: void 0, hashKey: void 0}, c = {
        init: function (a) {
            return this.each(function () {
                var d = b(this), k = b.extend({}, e, a || {});
                d.data("yiiCaptcha", {settings: k});
                d.on("click.yiiCaptcha", function () {
                    c.refresh.apply(d);
                    return !1
                })
            })
        }, refresh: function () {
            var a = this, c = this.data("yiiCaptcha").settings;
            b.ajax({
                url: a.data("yiiCaptcha").settings.refreshUrl, dataType: "json", cache: !1, success: function (e) {
                    a.attr("src", e.url);
                    b("body").data(c.hashKey, [e.hash1, e.hash2])
                }
            })
        }, destroy: function () {
            return this.each(function () {
                b(window).unbind(".yiiCaptcha");
                b(this).removeData("yiiCaptcha")
            })
        }, data: function () {
            return this.data("yiiCaptcha")
        }
    }
})(window.jQuery);
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof module && module.exports ? module.exports = b(require("jquery")) : b(window.jQuery)
})(function (b) {
    b.fn.depdropLocales = {};
    var e, c, a, d;
    e = function (a, c) {
        return null === a || void 0 === a || 0 === a.length || c && "" === b.trim(a)
    };
    c = function (a, c, d, e, r) {
        d = {value: c, text: d};
        r = r || {};
        d = b.extend(d, r);
        null !== e && e.length && c.toString() === e && (d.selected = "selected");
        b("<option/>", d).appendTo(a)
    };
    a = function (a, c) {
        var d = {};
        if (0 === a.length)return {};
        b.each(a, function (a, b) {
            d[b] = c[a]
        });
        return d
    };
    d = function (a, c) {
        var d = this;
        d.$element = b(a);
        b.each(c, function (a, b) {
            d[a] = b
        });
        d.initData();
        d.init()
    };
    d.prototype = {
        constructor: d, initData: function () {
            var a = this.$element;
            this.initVal = a.val();
            a.data("url", this.url).data("placeholder", this.placeholder).data("loading", this.loading).data("loadingClass", this.loadingClass).data("loadingText", this.loadingText).data("emptyMsg", this.emptyMsg).data("params", this.params)
        }, init: function () {
            var a, c = this.depends, d = this.$element,
                e = c.length;
            a = d.find("option").length;
            var r = this.initDepends || this.depends;
            0 !== a && d.find('option[value=""]').length !== a || d.attr("disabled", "disabled");
            for (a = 0; a < e; a++)this.listen(a, c, e);
            if (!0 === this.initialize)for (a = 0; a < r.length; a++)b("#" + r[a]).trigger("depdrop.change");
            d.trigger("depdrop.init")
        }, listen: function (a, c, d) {
            var p = this;
            b("#" + c[a]).on("depdrop.change change select2:select krajeeselect2:cleared", function (a) {
                var k = b(this);
                (e(k.data("select2")) || "change" !== a.type) && p.setDep(k, c, d)
            })
        }, setDep: function (a,
                             c, d) {
            for (var e = this.$element, r, m, v = {}, w = 0; w < d; w++)r = b("#" + c[w]), m = r.attr("type"), v[w] = "checkbox" === m || "radio" === m ? r.prop("checked") : r.val();
            this.processDep(e, a.attr("id"), v, c)
        }, processDep: function (d, h, f, p) {
            var r = this, m, v = 0, w = {}, x = {}, n = d.data("url");
            p = a(p, f);
            var q = {}, l, u, M = d.data("placeholder"), D = d.data("loading"), C = d.data("loadingClass"), J = d.data("loadingText"), A = d.data("emptyMsg"), F = d.data("params");
            x[r.parentParam] = f;
            if (!e(F)) {
                for (f = 0; f < F.length; f++)l = F[f], u = b("#" + F[f]).val(), w[f] = u, q[l] = u;
                x[r.otherParam] =
                    w
            }
            x[r.allParam] = b.extend(p, q);
            w = {
                url: n, type: "post", data: x, dataType: "json", beforeSend: function () {
                    d.trigger("depdrop.beforeChange", [h, b("#" + h).val(), r.initVal]);
                    d.find("option[selected]").removeAttr("selected");
                    d.val("").attr("disabled", "disabled").html("");
                    D && d.removeClass(C).addClass(C).html('<option id="">' + J + "</option>")
                }, success: function (a) {
                    m = e(a.selected) ? !1 === r.initVal ? null : r.initVal : a.selected;
                    e(a) ? c(d, "", A, "") : (d.html(r.getSelect(a.output, M, m)), 0 < d.find("optgroup").length && d.find('option[value=""]').attr("disabled",
                        "disabled"), a.output && d.removeAttr("disabled"));
                    v = d.find("option").length;
                    0 < d.find('option[value=""]').length && --v;
                    d.trigger("depdrop.change", [h, b("#" + h).val(), v, r.initVal])
                }, error: function () {
                    d.trigger("depdrop.error", [h, b("#" + h).val(), r.initVal])
                }, complete: function () {
                    D && d.removeClass(C);
                    d.trigger("depdrop.afterChange", [h, b("#" + h).val(), r.initVal])
                }
            };
            w = b.extend(w, r.ajaxSettings);
            b.ajax(w)
        }, getSelect: function (a, d, f) {
            var p = this, r = b("<select>"), m = p.idParam, v = p.nameParam, w;
            !1 !== d && c(r, "", d, f);
            e(a) && (a =
            {});
            b.each(a, function (a, d) {
                if (d[m])w = d[p.optionsParam] || {}, c(r, d[m], d[v], f, w); else {
                    var e = b("<optgroup>", {label: a});
                    b.each(d, function (a, b) {
                        w = b[p.optionsParam] || {};
                        c(e, b[m], b[v], f, w)
                    });
                    e.appendTo(r)
                }
            });
            return r.html()
        }
    };
    b.fn.depdrop = function (a) {
        var c = Array.apply(null, arguments), f = [];
        c.shift();
        this.each(function () {
            var p = b(this), r = p.data("depdrop"), m = "object" === typeof a && a, v = m.language || p.data("language") || "en", w = b.fn.depdrop.defaults;
            r || ("en" === v || e(b.fn.depdropLocales[v]) || b.extend(w, b.fn.depdropLocales[v]),
                r = new d(this, b.extend(w, m, p.data())), p.data("depdrop", r));
            "string" === typeof a && f.push(r[a].apply(r, c))
        });
        switch (f.length) {
            case 0:
                return this;
            case 1:
                return f[0];
            default:
                return f
        }
    };
    b.fn.depdrop.defaults = {
        language: "en",
        url: "",
        depends: "",
        initDepends: "",
        loading: !0,
        loadingClass: "kv-loading",
        initialize: !1,
        idParam: "id",
        nameParam: "name",
        optionsParam: "options",
        parentParam: "depdrop_parents",
        otherParam: "depdrop_params",
        allParam: "depdrop_all_params",
        params: {},
        ajaxSettings: {}
    };
    b.fn.depdropLocales.en = {
        loadingText: "Loading ...",
        placeholder: "Select ...", emptyMsg: "No data found"
    };
    b.extend(b.fn.depdrop.defaults, b.fn.depdropLocales.en);
    b.fn.depdrop.Constructor = d;
    b(function () {
        b("select.depdrop").depdrop()
    })
});
var initDepdropS2;
(function (b) {
    initDepdropS2 = function (e, c) {
        var a = b("#" + e), d = b("#select2-" + e + "-container");
        a.on("depdrop.beforeChange", function () {
            a.find("option").attr("value", "...").html(c);
            a.val("...");
            a.select2("val", "...");
            d.removeClass("kv-loading").addClass("kv-loading")
        }).on("depdrop.afterChange", function () {
            a.trigger("change");
            d.removeClass("kv-loading")
        })
    }
})(window.jQuery);
jQuery(function (b) {
    b.fn.authchoice = function (e) {
        e = b.extend({
            popup: {
                resizable: "yes",
                scrollbars: "no",
                toolbar: "no",
                menubar: "no",
                location: "no",
                directories: "no",
                status: "yes",
                width: 450,
                height: 380
            }
        }, e);
        return this.each(function () {
            var c = b(this);
            c.find("a").on("click", function (a) {
                a.preventDefault();
                (a = c.data("authChoicePopup")) && a.close();
                a = this.href;
                var d = b.extend({}, e.popup), k = this.getAttribute("data-popup-width");
                k && (d.width = k);
                var h = this.getAttribute("data-popup-height");
                k && (d.height = h);
                d.left = (window.screen.width -
                    d.width) / 2;
                d.top = (window.screen.height - d.height) / 2;
                var k = [], f;
                for (f in d)d.hasOwnProperty(f) && k.push(f + "=" + d[f]);
                f = k.join(",");
                a = window.open(a, "yii_auth_choice", f);
                a.focus();
                c.data("authChoicePopup", a)
            })
        })
    }
});
function statusChangeCallback(b) {
    console.log("statusChangeCallback");
    "connected" === b.status && (console.log("Welcome!  Fetching your information.... "), opensooqFbAuth(b.authResponse))
}
function showFbLoginDialog() {
    FB.login(function (b) {
        checkLoginState()
    }, {scope: "email"})
}
function checkLoginState() {
    FB.getLoginStatus(function (b) {
        statusChangeCallback(b)
    })
}
window.fbAsyncInit = function () {
    FB.init({appId: window.FB_APP_ID, cookie: !0, xfbml: !1, version: "v2.2"});
    "function" == typeof page_like_or_unlike_callback && FB.Event.subscribe("edge.create", page_like_or_unlike_callback)
};
(function (b, e, c) {
    var a = b.getElementsByTagName(e)[0];
    b.getElementById(c) || (b = b.createElement(e), b.id = c, b.src = "//connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(b, a))
})(document, "script", "facebook-jssdk");
function opensooqFbAuth(b) {
    if ("" != b.accessToken) {
        window.fbToken = b.accessToken;
        var e = {accessToken: b.accessToken};
        "email" in b && (e.email = b.email);
        "returnUrl" in b ? e.returnUrl = b.returnUrl : "" != window.FB_REDIRECT_TO && (e.returnUrl = window.FB_REDIRECT_TO);
        e.oldBehaviour = window.authOldBehaviour;
        $.ajax({
            url: "/site/login-with-fb", type: "post", dataType: "json", data: e, success: function (b) {
                b.success && ("loggedIn" == b.status ? ("registerCallback" == window.authPopupCallback && (window.authPopupCallback = "loginCallback"), window[window.authPopupCallback](b)) :
                    "verifyEmail" == b.status ? ($("#authPopup .popupCont > div").hide(), $("#authPopup .popupCont").append(b.verify), floatLabels()) : "oldBehaviour" == b.status && (window.location.href == b.data.referral ? window.FB_DO_RELOAD && location.reload() : window.location.href = b.data.referral))
            }
        })
    }
}
(function (b, e, c, a) {
    var d = c("html"), k = c(b), h = c(e), f = c.fancybox = function () {
        f.open.apply(this, arguments)
    }, p = navigator.userAgent.match(/msie/i), r = null, m = e.createTouch !== a, v = function (a) {
        return a && a.hasOwnProperty && a instanceof c
    }, w = function (a) {
        return a && "string" === c.type(a)
    }, x = function (a) {
        return w(a) && 0 < a.indexOf("%")
    }, n = function (a, b) {
        var c = parseInt(a, 10) || 0;
        b && x(a) && (c *= f.getViewport()[b] / 100);
        return Math.ceil(c)
    }, q = function (a, b) {
        return n(a, b) + "px"
    };
    c.extend(f, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !m,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                (p ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item icon-cross97 fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: c.noop,
            beforeLoad: c.noop,
            afterLoad: c.noop,
            beforeShow: c.noop,
            afterShow: c.noop,
            beforeChange: c.noop,
            beforeClose: c.noop,
            afterClose: c.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (b, d) {
            if (b && (c.isPlainObject(d) || (d = {}), !1 !== f.close(!0)))return c.isArray(b) || (b = v(b) ? c(b).get() : [b]), c.each(b, function (e, h) {
                var k = {}, m, n, q, p, x;
                "object" === c.type(h) && (h.nodeType && (h = c(h)), v(h) ? (k = {
                    href: h.data("fancybox-href") || h.attr("href"),
                    title: h.data("fancybox-title") || h.attr("title"),
                    isDom: !0,
                    element: h
                }, c.metadata && c.extend(!0,
                    k, h.metadata())) : k = h);
                m = d.href || k.href || (w(h) ? h : null);
                n = d.title !== a ? d.title : k.title || "";
                p = (q = d.content || k.content) ? "html" : d.type || k.type;
                !p && k.isDom && (p = h.data("fancybox-type"), p || (p = (p = h.prop("class").match(/fancybox\.(\w+)/)) ? p[1] : null));
                w(m) && (p || (f.isImage(m) ? p = "image" : f.isSWF(m) ? p = "swf" : "#" === m.charAt(0) ? p = "inline" : w(h) && (p = "html", q = h)), "ajax" === p && (x = m.split(/\s+/, 2), m = x.shift(), x = x.shift()));
                q || ("inline" === p ? m ? q = c(w(m) ? m.replace(/.*(?=#[^\s]+$)/, "") : m) : k.isDom && (q = h) : "html" === p ? q = m : !p && !m &&
                k.isDom && (p = "inline", q = h));
                c.extend(k, {href: m, type: p, content: q, title: n, selector: x});
                b[e] = k
            }), f.opts = c.extend(!0, {}, f.defaults, d), d.keys !== a && (f.opts.keys = d.keys ? c.extend({}, f.defaults.keys, d.keys) : !1), f.group = b, f._start(f.opts.index)
        },
        cancel: function () {
            var a = f.coming;
            a && !1 !== f.trigger("onCancel") && (f.hideLoading(), f.ajaxLoad && f.ajaxLoad.abort(), f.ajaxLoad = null, f.imgPreload && (f.imgPreload.onload = f.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), f.coming = null, f.current ||
            f._afterZoomOut(a))
        },
        close: function (a) {
            f.cancel();
            !1 !== f.trigger("beforeClose") && (f.unbindEvents(), f.isActive && (f.isOpen && !0 !== a ? (f.isOpen = f.isOpened = !1, f.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), f.wrap.stop(!0, !0).removeClass("fancybox-opened"), f.transitions[f.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), f._afterZoomOut())))
        },
        play: function (a) {
            var b = function () {
                clearTimeout(f.player.timer)
            }, c = function () {
                b();
                f.current && f.player.isActive && (f.player.timer =
                    setTimeout(f.next, f.current.playSpeed))
            }, d = function () {
                b();
                h.unbind(".player");
                f.player.isActive = !1;
                f.trigger("onPlayEnd")
            };
            !0 === a || !f.player.isActive && !1 !== a ? f.current && (f.current.loop || f.current.index < f.group.length - 1) && (f.player.isActive = !0, h.bind({
                "onCancel.player beforeClose.player": d,
                "onUpdate.player": c,
                "beforeLoad.player": b
            }), c(), f.trigger("onPlayStart")) : d()
        },
        next: function (a) {
            var b = f.current;
            b && (w(a) || (a = b.direction.next), f.jumpto(b.index + 1, a, "next"))
        },
        prev: function (a) {
            var b = f.current;
            b && (w(a) ||
            (a = b.direction.prev), f.jumpto(b.index - 1, a, "prev"))
        },
        jumpto: function (b, c, d) {
            var e = f.current;
            e && (b = n(b), f.direction = c || e.direction[b >= e.index ? "next" : "prev"], f.router = d || "jumpto", e.loop && (0 > b && (b = e.group.length + b % e.group.length), b %= e.group.length), e.group[b] !== a && (f.cancel(), f._start(b)))
        },
        reposition: function (a, b) {
            var d = f.current, e = d ? d.wrap : null, h;
            e && (h = f._getPosition(b), a && "scroll" === a.type ? (delete h.position, e.stop(!0, !0).animate(h, 200)) : (e.css(h), d.pos = c.extend({}, d.dim, h)))
        },
        update: function (a) {
            var b =
                a && a.type, c = !b || "orientationchange" === b;
            c && (clearTimeout(r), r = null);
            f.isOpen && !r && (r = setTimeout(function () {
                var d = f.current;
                d && !f.isClosing && (f.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && f._setDimension(), "scroll" === b && d.canShrink || f.reposition(a), f.trigger("onUpdate"), r = null)
            }, c && !m ? 0 : 300))
        },
        toggle: function (a) {
            f.isOpen && (f.current.fitToView = "boolean" === c.type(a) ? a : !f.current.fitToView, m && (f.wrap.removeAttr("style").addClass("fancybox-tmp"), f.trigger("onUpdate")),
                f.update())
        },
        hideLoading: function () {
            h.unbind(".loading");
            c("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, b;
            f.hideLoading();
            a = c('<div id="fancybox-loading"><div></div></div>').click(f.cancel).appendTo("body");
            h.bind("keydown.loading", function (a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), f.cancel())
            });
            f.defaults.fixed || (b = f.getViewport(), a.css({
                position: "absolute",
                top: .5 * b.h + b.y,
                left: .5 * b.w + b.x
            }))
        },
        getViewport: function () {
            var a = f.current && f.current.locked || !1, c = {x: k.scrollLeft(), y: k.scrollTop()};
            a ? (c.w = a[0].clientWidth, c.h = a[0].clientHeight) : (c.w = m && b.innerWidth ? b.innerWidth : k.width(), c.h = m && b.innerHeight ? b.innerHeight : k.height());
            return c
        },
        unbindEvents: function () {
            f.wrap && v(f.wrap) && f.wrap.unbind(".fb");
            h.unbind(".fb");
            k.unbind(".fb")
        },
        bindEvents: function () {
            var b = f.current, d;
            b && (k.bind("orientationchange.fb" + (m ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), f.update), (d = b.keys) && h.bind("keydown.fb", function (e) {
                var h = e.which || e.keyCode, k = e.target || e.srcElement;
                if (27 === h && f.coming)return !1;
                e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || k && (k.type || c(k).is("[contenteditable]")) || c.each(d, function (d, k) {
                    if (1 < b.group.length && k[h] !== a)return f[d](k[h]), e.preventDefault(), !1;
                    if (-1 < c.inArray(h, k))return f[d](), e.preventDefault(), !1
                })
            }), c.fn.mousewheel && b.mouseWheel && f.wrap.bind("mousewheel.fb", function (a, d, e, h) {
                for (var k = c(a.target || null), m = !1; k.length && !m && !k.is(".fancybox-skin") && !k.is(".fancybox-wrap");)m = k[0] && !(k[0].style.overflow && "hidden" === k[0].style.overflow) && (k[0].clientWidth && k[0].scrollWidth >
                    k[0].clientWidth || k[0].clientHeight && k[0].scrollHeight > k[0].clientHeight), k = c(k).parent();
                0 !== d && !m && 1 < f.group.length && !b.canShrink && (0 < h || 0 < e ? f.prev(0 < h ? "down" : "left") : (0 > h || 0 > e) && f.next(0 > h ? "up" : "right"), a.preventDefault())
            }))
        },
        trigger: function (a, b) {
            var d, e = b || f.coming || f.current;
            if (e) {
                c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1)));
                if (!1 === d)return !1;
                e.helpers && c.each(e.helpers, function (b, d) {
                    if (d && f.helpers[b] && c.isFunction(f.helpers[b][a]))f.helpers[b][a](c.extend(!0,
                        {}, f.helpers[b].defaults, d), e)
                });
                h.trigger(a)
            }
        },
        isImage: function (a) {
            return w(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return w(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var b = {}, d, e;
            a = n(a);
            d = f.group[a] || null;
            if (!d)return !1;
            b = c.extend(!0, {}, f.opts, d);
            d = b.margin;
            e = b.padding;
            "number" === c.type(d) && (b.margin = [d, d, d, d]);
            "number" === c.type(e) && (b.padding = [e, e, e, e]);
            b.modal && c.extend(!0, b, {
                closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1,
                mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}
            });
            b.autoSize && (b.autoWidth = b.autoHeight = !0);
            "auto" === b.width && (b.autoWidth = !0);
            "auto" === b.height && (b.autoHeight = !0);
            b.group = f.group;
            b.index = a;
            f.coming = b;
            if (!1 === f.trigger("beforeLoad"))f.coming = null; else {
                e = b.type;
                d = b.href;
                if (!e)return f.coming = null, f.current && f.router && "jumpto" !== f.router ? (f.current.index = a, f[f.router](f.direction)) : !1;
                f.isActive = !0;
                if ("image" === e || "swf" === e)b.autoHeight = b.autoWidth = !1, b.scrolling = "visible";
                "image" === e && (b.aspectRatio = !0);
                "iframe" === e && m && (b.scrolling = "scroll");
                b.wrap = c(b.tpl.wrap).addClass("fancybox-" + (m ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + b.wrapCSS).appendTo(b.parent || "body");
                c.extend(b, {
                    skin: c(".fancybox-skin", b.wrap),
                    outer: c(".fancybox-outer", b.wrap),
                    inner: c(".fancybox-inner", b.wrap)
                });
                c.each(["Top", "Right", "Bottom", "Left"], function (a, c) {
                    b.skin.css("padding" + c, q(b.padding[a]))
                });
                f.trigger("onReady");
                if ("inline" === e || "html" === e) {
                    if (!b.content || !b.content.length)return f._error("content")
                } else if (!d)return f._error("href");
                "image" === e ? f._loadImage() : "ajax" === e ? f._loadAjax() : "iframe" === e ? f._loadIframe() : f._afterLoad()
            }
        },
        _error: function (a) {
            c.extend(f.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: f.coming.tpl.error
            });
            f._afterLoad()
        },
        _loadImage: function () {
            var a = f.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                f.coming.width = this.width / f.opts.pixelRatio;
                f.coming.height = this.height / f.opts.pixelRatio;
                f._afterLoad()
            };
            a.onerror = function () {
                this.onload =
                    this.onerror = null;
                f._error("image")
            };
            a.src = f.coming.href;
            !0 !== a.complete && f.showLoading()
        },
        _loadAjax: function () {
            var a = f.coming;
            f.showLoading();
            f.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                url: a.href, error: function (a, b) {
                    f.coming && "abort" !== b ? f._error("ajax", a) : f.hideLoading()
                }, success: function (b, c) {
                    "success" === c && (a.content = b, f._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = f.coming, b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", m ? "auto" : a.iframe.scrolling).attr("src", a.href);
            c(a.wrap).bind("onReset", function () {
                try {
                    c(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {
                }
            });
            a.iframe.preload && (f.showLoading(), b.one("load", function () {
                c(this).data("ready", 1);
                m || c(this).bind("load.fb", f.update);
                c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                f._afterLoad()
            }));
            a.content = b.appendTo(a.inner);
            a.iframe.preload || f._afterLoad()
        },
        _preloadImages: function () {
            var a = f.group, b = f.current, c = a.length, d = b.preload ? Math.min(b.preload,
                c - 1) : 0, e, h;
            for (h = 1; h <= d; h += 1)e = a[(b.index + h) % c], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var a = f.coming, b = f.current, d, e, h, k, m;
            f.hideLoading();
            if (a && !1 !== f.isActive)if (!1 === f.trigger("afterLoad", a, b))a.wrap.stop(!0).trigger("onReset").remove(), f.coming = null; else {
                b && (f.trigger("beforeChange", b), b.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                f.unbindEvents();
                d = a.content;
                e = a.type;
                h = a.scrolling;
                c.extend(f, {
                    wrap: a.wrap, skin: a.skin,
                    outer: a.outer, inner: a.inner, current: a, previous: b
                });
                k = a.href;
                switch (e) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a.selector ? d = c("<div>").html(d).find(a.selector) : v(d) && (d.data("fancybox-placeholder") || d.data("fancybox-placeholder", c('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()), d = d.show().detach(), a.wrap.bind("onReset", function () {
                            c(this).find(d).length && d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case "image":
                        d = a.tpl.image.replace("{href}",
                            k);
                        break;
                    case "swf":
                        d = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + k + '"></param>', m = "", c.each(a.swf, function (a, b) {
                            d += '<param name="' + a + '" value="' + b + '"></param>';
                            m += " " + a + '="' + b + '"'
                        }), d += '<embed src="' + k + '" type="application/x-shockwave-flash" width="100%" height="100%"' + m + "></embed></object>"
                }
                v(d) && d.parent().is(a.inner) || a.inner.append(d);
                f.trigger("beforeShow");
                a.inner.css("overflow", "yes" === h ? "scroll" : "no" ===
                h ? "hidden" : h);
                f._setDimension();
                f.reposition();
                f.isOpen = !1;
                f.coming = null;
                f.bindEvents();
                if (f.isOpened) {
                    if (b.prevMethod)f.transitions[b.prevMethod]()
                } else c(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                f.transitions[f.isOpened ? a.nextMethod : a.openMethod]();
                f._preloadImages()
            }
        },
        _setDimension: function () {
            var a = f.getViewport(), b = 0, d = !1, e = !1, d = f.wrap, h = f.skin, k = f.inner, m = f.current, e = m.width, p = m.height, v = m.minWidth, w = m.minHeight, r = m.maxWidth, N = m.maxHeight, Y = m.scrolling, T = m.scrollOutside ?
                m.scrollbarWidth : 0, B = m.margin, I = n(B[1] + B[3]), sa = n(B[0] + B[2]), va, ja, Fa, Z, H, Q, ia, aa, R;
            d.add(h).add(k).width("auto").height("auto").removeClass("fancybox-tmp");
            B = n(h.outerWidth(!0) - h.width());
            va = n(h.outerHeight(!0) - h.height());
            ja = I + B;
            Fa = sa + va;
            Z = x(e) ? (a.w - ja) * n(e) / 100 : e;
            H = x(p) ? (a.h - Fa) * n(p) / 100 : p;
            if ("iframe" === m.type) {
                if (R = m.content, m.autoHeight && 1 === R.data("ready"))try {
                    R[0].contentWindow.document.location && (k.width(Z).height(9999), Q = R.contents().find("body"), T && Q.css("overflow-x", "hidden"), H = Q.outerHeight(!0))
                } catch (jb) {
                }
            } else if (m.autoWidth ||
                m.autoHeight)k.addClass("fancybox-tmp"), m.autoWidth || k.width(Z), m.autoHeight || k.height(H), m.autoWidth && (Z = k.width()), m.autoHeight && (H = k.height()), k.removeClass("fancybox-tmp");
            e = n(Z);
            p = n(H);
            aa = Z / H;
            v = n(x(v) ? n(v, "w") - ja : v);
            r = n(x(r) ? n(r, "w") - ja : r);
            w = n(x(w) ? n(w, "h") - Fa : w);
            N = n(x(N) ? n(N, "h") - Fa : N);
            Q = r;
            ia = N;
            m.fitToView && (r = Math.min(a.w - ja, r), N = Math.min(a.h - Fa, N));
            ja = a.w - I;
            sa = a.h - sa;
            m.aspectRatio ? (e > r && (e = r, p = n(e / aa)), p > N && (p = N, e = n(p * aa)), e < v && (e = v, p = n(e / aa)), p < w && (p = w, e = n(p * aa))) : (e = Math.max(v, Math.min(e,
                r)), m.autoHeight && "iframe" !== m.type && (k.width(e), p = k.height()), p = Math.max(w, Math.min(p, N)));
            if (m.fitToView)if (k.width(e).height(p), d.width(e + B), a = d.width(), I = d.height(), m.aspectRatio)for (; (a > ja || I > sa) && e > v && p > w && !(19 < b++);)p = Math.max(w, Math.min(N, p - 10)), e = n(p * aa), e < v && (e = v, p = n(e / aa)), e > r && (e = r, p = n(e / aa)), k.width(e).height(p), d.width(e + B), a = d.width(), I = d.height(); else e = Math.max(v, Math.min(e, e - (a - ja))), p = Math.max(w, Math.min(p, p - (I - sa)));
            T && "auto" === Y && p < H && e + B + T < ja && (e += T);
            k.width(e).height(p);
            d.width(e +
                B);
            a = d.width();
            I = d.height();
            d = (a > ja || I > sa) && e > v && p > w;
            e = m.aspectRatio ? e < Q && p < ia && e < Z && p < H : (e < Q || p < ia) && (e < Z || p < H);
            c.extend(m, {
                dim: {width: q(a), height: q(I)},
                origWidth: Z,
                origHeight: H,
                canShrink: d,
                canExpand: e,
                wPadding: B,
                hPadding: va,
                wrapSpace: I - h.outerHeight(!0),
                skinSpace: h.height() - p
            });
            !R && m.autoHeight && p > w && p < N && !e && k.height("auto")
        },
        _getPosition: function (a) {
            var b = f.current, c = f.getViewport(), d = b.margin, e = f.wrap.width() + d[1] + d[3], h = f.wrap.height() + d[0] + d[2], d = {
                position: "absolute",
                top: d[0],
                left: d[3]
            };
            b.autoCenter &&
            b.fixed && !a && h <= c.h && e <= c.w ? d.position = "fixed" : b.locked || (d.top += c.y, d.left += c.x);
            d.top = q(Math.max(d.top, d.top + (c.h - h) * b.topRatio));
            d.left = q(Math.max(d.left, d.left + (c.w - e) * b.leftRatio));
            return d
        },
        _afterZoomIn: function () {
            var a = f.current;
            a && (f.isOpen = f.isOpened = !0, f.wrap.css("overflow", "visible").addClass("fancybox-opened"), f.update(), (a.closeClick || a.nextClick && 1 < f.group.length) && f.inner.css("cursor", "pointer").bind("click.fb", function (b) {
                c(b.target).is("a") || c(b.target).parent().is("a") || (b.preventDefault(),
                    f[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && c(a.tpl.closeBtn).appendTo(f.skin).bind("click.fb", function (a) {
                a.preventDefault();
                f.close()
            }), a.arrows && 1 < f.group.length && ((a.loop || 0 < a.index) && c(a.tpl.prev).appendTo(f.outer).bind("click.fb", f.prev), (a.loop || a.index < f.group.length - 1) && c(a.tpl.next).appendTo(f.outer).bind("click.fb", f.next)), f.trigger("afterShow"), a.loop || a.index !== a.group.length - 1 ? f.opts.autoPlay && !f.player.isActive && (f.opts.autoPlay = !1, f.play()) : f.play(!1))
        },
        _afterZoomOut: function (a) {
            a =
                a || f.current;
            c(".fancybox-wrap").trigger("onReset").remove();
            c.extend(f, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            f.trigger("afterClose", a)
        }
    });
    f.transitions = {
        getOrigPosition: function () {
            var a = f.current, b = a.element, c = a.orig, d = {}, e = 50, h = 50, k = a.hPadding, m = a.wPadding, n = f.getViewport();
            !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b));
            v(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), h = c.outerHeight())) :
                (d.top = n.y + (n.h - h) * a.topRatio, d.left = n.x + (n.w - e) * a.leftRatio);
            if ("fixed" === f.wrap.css("position") || a.locked)d.top -= n.y, d.left -= n.x;
            return {
                top: q(d.top - k * a.topRatio),
                left: q(d.left - m * a.leftRatio),
                width: q(e + m),
                height: q(h + k)
            }
        }, step: function (a, b) {
            var c, d, e = b.prop;
            d = f.current;
            var h = d.wrapSpace, k = d.skinSpace;
            if ("width" === e || "height" === e)c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), f.isClosing && (c = 1 - c), d = "width" === e ? d.wPadding : d.hPadding, d = a - d, f.skin[e](n("width" === e ? d : d - h * c)), f.inner[e](n("width" === e ?
                d : d - h * c - k * c))
        }, zoomIn: function () {
            var a = f.current, b = a.pos, d = a.openEffect, e = "elastic" === d, h = c.extend({opacity: 1}, b);
            delete h.position;
            e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1);
            f.wrap.css(b).animate(h, {
                duration: "none" === d ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step : null,
                complete: f._afterZoomIn
            })
        }, zoomOut: function () {
            var a = f.current, b = a.closeEffect, c = "elastic" === b, d = {opacity: .1};
            c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1));
            f.wrap.animate(d,
                {
                    duration: "none" === b ? 0 : a.closeSpeed,
                    easing: a.closeEasing,
                    step: c ? this.step : null,
                    complete: f._afterZoomOut
                })
        }, changeIn: function () {
            var a = f.current, b = a.nextEffect, c = a.pos, d = {opacity: 1}, e = f.direction, h;
            c.opacity = .1;
            "elastic" === b && (h = "down" === e || "up" === e ? "top" : "left", "down" === e || "right" === e ? (c[h] = q(n(c[h]) - 200), d[h] = "+=200px") : (c[h] = q(n(c[h]) + 200), d[h] = "-=200px"));
            "none" === b ? f._afterZoomIn() : f.wrap.css(c).animate(d, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: f._afterZoomIn
            })
        }, changeOut: function () {
            var a =
                f.previous, b = a.prevEffect, d = {opacity: .1}, e = f.direction;
            "elastic" === b && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px");
            a.wrap.animate(d, {
                duration: "none" === b ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    c(this).trigger("onReset").remove()
                }
            })
        }
    };
    f.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !m, fixed: !0},
        overlay: null,
        fixed: !1,
        el: c("html"),
        create: function (a) {
            a = c.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay =
                c('<div class="fancybox-overlay"></div>').appendTo(f.coming ? f.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && f.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var b = this;
            a = c.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (k.bind("resize.overlay", c.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (c(a.target).hasClass("fancybox-overlay"))return f.isActive ?
                    f.close() : b.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            var a, b;
            k.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (c(".fancybox-margin").removeClass("fancybox-margin"), a = k.scrollTop(), b = k.scrollLeft(), this.el.removeClass("fancybox-lock"), k.scrollTop(a).scrollLeft(b));
            c(".fancybox-overlay").remove().hide();
            c.extend(this, {overlay: null, fixed: !1})
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            p ? (b = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth),
            h.width() > b && (a = h.width())) : h.width() > k.width() && (a = h.width());
            this.overlay.width(a).height(h.height())
        },
        onReady: function (a, b) {
            var d = this.overlay;
            c(".fancybox-overlay").stop(!0, !0);
            d || this.create(a);
            a.locked && this.fixed && b.fixed && (d || (this.margin = h.height() > k.height() ? c("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            var d, e;
            b.locked && (!1 !== this.margin && (c("*").filter(function () {
                return "fixed" ===
                    c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), d = k.scrollTop(), e = k.scrollLeft(), this.el.addClass("fancybox-lock"), k.scrollTop(d).scrollLeft(e));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !f.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this))
        }
    };
    f.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (a) {
            var b =
                f.current, d = b.title, e = a.type;
            c.isFunction(d) && (d = d.call(b.element, b));
            if (w(d) && "" !== c.trim(d)) {
                b = c('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>");
                switch (e) {
                    case "inside":
                        e = f.skin;
                        break;
                    case "outside":
                        e = f.wrap;
                        break;
                    case "over":
                        e = f.inner;
                        break;
                    default:
                        e = f.skin, b.appendTo("body"), p && b.width(b.width()), b.wrapInner('<span class="child"></span>'), f.current.margin[2] += Math.abs(n(b.css("margin-bottom")))
                }
                b["top" === a.position ? "prependTo" : "appendTo"](e)
            }
        }
    };
    c.fn.fancybox = function (a) {
        var b,
            d = c(this), e = this.selector || "", k = function (h) {
                var k = c(this).blur(), m = b, n, q;
                h.ctrlKey || h.altKey || h.shiftKey || h.metaKey || k.is(".fancybox-wrap") || (n = a.groupAttr || "data-fancybox-group", q = k.attr(n), q || (n = "rel", q = k.get(0)[n]), q && "" !== q && "nofollow" !== q && (k = e.length ? c(e) : d, k = k.filter("[" + n + '="' + q + '"]'), m = k.index(this)), a.index = m, !1 === f.open(k, a) || h.preventDefault())
            };
        a = a || {};
        b = a.index || 0;
        e && !1 !== a.live ? h.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k) : d.unbind("click.fb-start").bind("click.fb-start",
            k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    h.ready(function () {
        var e, h;
        c.scrollbarWidth === a && (c.scrollbarWidth = function () {
            var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (c.support.fixedPosition === a) {
            e = c.support;
            h = c('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var k = 20 === h[0].offsetTop || 15 === h[0].offsetTop;
            h.remove();
            e.fixedPosition =
                k
        }
        c.extend(f.defaults, {scrollbarWidth: c.scrollbarWidth(), fixed: c.support.fixedPosition, parent: c("body")});
        e = c(b).width();
        d.addClass("fancybox-lock-test");
        h = c(b).width();
        d.removeClass("fancybox-lock-test");
        c("<style type='text/css'>.fancybox-margin{margin-right:" + (h - e) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
var osMenu = {
    defaults: {animateduration: 100, showhidedelay: [500, 700], hidemenuonclick: !0},
    setting: {},
    menuzindex: 1E3,
    touchenabled: !!("ontouchstart" in window) || !!("ontouchstart" in document.documentElement) || !!window.ontouchstart || !!window.Touch || !!window.onmsgesturechange || window.DocumentTouch && window.document instanceof window.DocumentTouch,
    showhide: function (b, e, c) {
        clearTimeout(b.data("showhidetimer"));
        "show" == e ? b.data().showhidetimer = setTimeout(function () {
            b.addClass("selected");
            b.data("$submenu").data("fullyvisible",
                !1).css({zIndex: osMenu.menuzindex++}).fadeIn(c.animateduration, function () {
                $(this).data("fullyvisible", !0)
            })
        }, this.setting.showhidedelay[0]) : b.data().showhidetimer = setTimeout(function () {
            b.removeClass("selected");
            b.data("$submenu").stop(!0, !0).fadeOut(c.animateduration);
            var a = b.data("$submenu").find(".issub").css({display: "none"});
            0 < a.length && a.data("$parentli").removeClass("selected")
        }, this.setting.showhidedelay[1])
    },
    setupmenu: function (b, e) {
        var c = b.children("ul:eq(0)");
        c.find("li>div, li>ul").each(function () {
            var a =
                $(this).parent("li"), b = $(this);
            a.addClass("hassub").data({$submenu: b, showhidetimer: null}).on("mouseenter click", function (a) {
                osMenu.showhide($(this), "show", e)
            }).on("click", function (a) {
                a.stopPropagation()
            }).children("a").on("click", function (a) {
                a.preventDefault()
            });
            b.addClass("issub").data({$parentli: a}).on("mouseleave" + (e.hidemenuonclick || osMenu.touchenabled ? " click" : ""), function (a) {
                $(this).data("fullyvisible");
                "click" == a.type && a.stopPropagation()
            })
        });
        c.on("click", function (a) {
            $(this).data("fullyvisible") &&
            osMenu.showhide($(this).children("li.hassub.selected"), "hide", e)
        });
        c.children("li.hassub").on("mouseleave", function () {
            osMenu.showhide($(this), "hide", e)
        })
    },
    init: function (b) {
        var e = $("#" + b.menuid);
        this.setting = $.extend({}, b, this.defaults);
        this.setting.animateduration = Math.max(50, this.setting.animateduration);
        this.setupmenu(e, this.setting)
    }
};
(function () {
    window.googletag = window.googletag || {};
    window.googletag.cmd = window.googletag.cmd || [];
    googletag.cmd.push(function () {
        if (!(googletag.hasOwnProperty("on") || googletag.hasOwnProperty("off") || googletag.hasOwnProperty("trigger") || googletag.hasOwnProperty("events"))) {
            var b = googletag.debug_log.log, e = [], c = function (a, b, c) {
                e.push({name: a, id: b, match: c})
            };
            c("gpt-google_js_loaded", 8, /Google service JS loaded/ig);
            c("gpt-gpt_fetch", 46, /Fetching GPT implementation/ig);
            c("gpt-gpt_fetched", 48, /GPT implementation fetched\./ig);
            c("gpt-page_load_complete", 1, /Page load complete/ig);
            c("gpt-queue_start", 31, /^Invoked queued function/ig);
            c("gpt-service_add_slot", 40, /Associated ([\w]*) service with slot ([\/\w]*)/ig);
            c("gpt-service_add_targeting", 88, /Setting targeting attribute ([\w]*) with value ([\w\W]*) for service ([\w]*)/ig);
            c("gpt-service_collapse_containers_enable", 78, /Enabling collapsing of containers when there is no ad content/ig);
            c("gpt-service_create", 35, /Created service: ([\w]*)/ig);
            c("gpt-service_single_request_mode_enable",
                63, /Using single request mode to fetch ads/ig);
            c("gpt-slot_create", 2, /Created slot: ([\/\w]*)/ig);
            c("gpt-slot_add_targeting", 17, /Setting targeting attribute ([\w]*) with value ([\w\W]*) for slot ([\/\w]*)/ig);
            c("gpt-slot_fill", 50, /Calling fillslot/ig);
            c("gpt-slot_fetch", 3, /Fetching ad for slot ([\/\w]*)/ig);
            c("gpt-slot_receiving", 4, /Receiving ad for slot ([\/\w]*)/ig);
            c("gpt-slot_render_delay", 53, /Delaying rendering of ad slot ([\/\w]*) pending loading of the GPT implementation/ig);
            c("gpt-slot_rendering",
                5, /^Rendering ad for slot ([\/\w]*)/ig);
            c("gpt-slot_rendered", 6, /Completed rendering ad for slot ([\/\w]*)/ig);
            googletag.events = googletag.events || {};
            googletag.on = function (a, b, c) {
                if (!b)return this;
                a = a.split(" ");
                var e = c || b, f = 0, p = "";
                e.data = c ? b : void 0;
                for (p = a[f = 0]; f < a.length; p = a[++f])(this.events[p] = this.events[p] || []).push(e);
                return this
            };
            googletag.off = function (a, b) {
                a = a.split(" ");
                for (var c = 0, e = "", f = 0, p = function () {
                }, e = a[c]; c < a.length; e = a[++c])if (this.events.hasOwnProperty(e))if (b) {
                    f = this.events[e].length -
                        1;
                    for (p = this.events[e][f]; 0 <= f; p = this.events[e][--f])p == b && this.events[e].splice(f, 1);
                    0 === this.events[e].length && delete this.events[e]
                } else delete this.events[e];
                return this
            };
            googletag.trigger = function (a, b) {
                if (!this.events[a] || 0 === this.events[a].length)return this;
                b = b || [];
                var c = 0, e = this.events[a][c];
                c;
                for (e; c < this.events[a].length && !1 !== e.apply(this, [{data: e.data}].concat(b)); e = this.events[a][++c]);
                return this
            };
            googletag.debug_log.log = function (a, c, k, h, f) {
                if (c && c.getMessageId && "number" == typeof c.getMessageId()) {
                    var p =
                        Array.prototype.slice.call(arguments), r = 0;
                    for (r; r < e.length; r++)e[r].id === c.getMessageId() && googletag.trigger(e[r].name, p)
                }
                return b.apply(this, arguments)
            }
        }
    })
})();
function postViewEvent(b) {
    $.ajax({url: "/logging/view", type: "POST"})
}
function postCallEvent(b, e) {
    $.ajax({url: "/logging/call?id=" + b + "&type=" + e, type: "POST"});
    "post" == e && dataLayer.push({
        event: "Call",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        language: lang
    });
    gravityEvent("PHONE_CLICK", b.toString())
}
function offerCallEvent(b) {
    $.ajax({url: "/logging/offer-call", type: "POST", data: {id: b}});
    dataLayer.push({
        event: "Call-Offer",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        language: lang,
        platform: "Desktop"
    });
    gravityEvent("PHONE_CLICK", b.toString())
}
function postCommentEvent() {
    dataLayer.push({
        event: "Comment",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        language: lang
    })
}
function postOfferEvent() {
    dataLayer.push({
        event: "Offer",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        platform: "Desktop"
    })
}
function sendOfferMessageEvent() {
    dataLayer.push({
        event: "Message-Offer",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        platform: "Desktop"
    })
}
function offerClickEvent() {
    dataLayer.push({
        event: "Offer-click",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        platform: "Desktop"
    })
}
function commentClickEvent() {
    dataLayer.push({
        event: "Comment-click",
        country: post_country,
        city: post_city,
        category: post_category,
        subcategory: post_subcategory,
        language: lang,
        platform: "Desktop"
    });
    gravityEvent("COMMENT", post_id.toString())
}
function postFavEvent(b) {
    dataLayer.push({
        event: "Favourite",
        ID: b.ID,
        country: b.country,
        city: b.city,
        category: b.category,
        subcategory: b.subcategory,
        language: b.language
    })
}
function postMessageEvent(b, e, c, a) {
    dataLayer.push({event: "Message", country: b, city: e, category: c, subcategory: a, language: lang})
}
function postRegisterEvent() {
    dataLayer.push({
        event: "Register",
        country: country,
        city: city,
        category: category,
        subcategory: subcategory,
        language: lang
    })
}
function addPostEvent(b) {
    dataLayer.push({event: b, country: country, language: lang})
}
function landingPageView(b, e) {
    dataLayer.push({
        event: "VirtualPageview",
        page: e,
        country: country,
        language: lang,
        platform: "Desktop",
        memberID: b
    })
}
function paymentStatusPageView(b, e, c) {
    dataLayer.push({
        event: "VirtualPageview",
        page: c,
        country: country,
        language: lang,
        platform: "Desktop",
        memberID: b,
        payment: e
    })
}
function clickLogin(b, e) {
    dataLayer.push({event: "click-Login" + e, country: country, language: lang, platform: "Desktop", where: b})
}
function clickRegister(b, e) {
    dataLayer.push({event: "click-Register" + e, country: country, language: lang, platform: "Desktop", where: b})
}
function createCookie(b, e, c) {
    if (c) {
        var a = new Date;
        a.setTime(a.getTime() + 864E5 * c);
        c = "; expires=" + a.toGMTString()
    } else c = "";
    document.cookie = b + "=" + e + c + "; path=/"
}
function readCookie(b) {
    b = ("; " + document.cookie).split("; " + b + "=");
    if (2 == b.length)return b.pop().split(";").shift()
}
function eraseCookie(b) {
    createCookie(b, "", -1)
}
function openNotificationEvent(b) {
    dataLayer.push({event: b, country: country})
}
function mixPanel(b, e) {
    switch (b) {
        case "AddPost-PostForn-step2":
            e.event = "AddPost-PostForn-step2";
            dataLayer.push(e);
            break;
        case "AddPost-UserRegisterLogin-step3":
            e.event = "AddPost-UserRegisterLogin-step3";
            dataLayer.push(e);
            break;
        case "AddPost-PostSuccess-step4":
            e.event = "AddPost-PostSuccess-step4";
            dataLayer.push(e);
            break;
        case "AddPost-PhoneVerification-step5":
            e.event = "AddPost-PhoneVerification-step5", dataLayer.push(e)
    }
}
function gravityEvent(b, e) {
    "undefined" !== typeof _gravity && _gravity.push({type: "event", eventType: b, itemId: e})
}
$(document).ready(function () {
    $("body").delegate("[data-track]", "click", function () {
        dataLayer.push(jQuery.parseJSON($(this).attr("data-track")))
    })
});
!function (b) {
    b.fn.autoComplete = function (e) {
        var c = b.extend({}, b.fn.autoComplete.defaults, e);
        return "string" == typeof e ? (this.each(function () {
            var a = b(this);
            "destroy" == e && (b(window).off("resize.autocomplete", a.updateSC), a.off("blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete"), a.data("autocomplete") ? a.attr("autocomplete", a.data("autocomplete")) : a.removeAttr("autocomplete"), b(a.data("sc")).remove(), a.removeData("sc").removeData("autocomplete"))
        }), this) : this.each(function () {
            function a(a) {
                var b =
                    d.val();
                if (d.cache[b] = a, a.length && b.length >= c.minChars) {
                    for (var e = "", p = 0; p < a.length; p++)e += c.renderItem(a[p], b);
                    d.sc.html(e);
                    d.updateSC(0)
                } else d.sc.hide()
            }

            var d = b(this);
            d.sc = b('<div class="autocomplete-suggestions ' + c.menuClass + '"></div>');
            d.data("sc", d.sc).data("autocomplete", d.attr("autocomplete"));
            d.attr("autocomplete", "off");
            d.cache = {};
            d.last_val = "";
            d.updateSC = function (a, c) {
                if (d.sc.css({
                        top: d.offset().top + d.outerHeight(),
                        left: d.offset().left,
                        width: d.outerWidth()
                    }), !a && (d.sc.show(), d.sc.maxHeight ||
                    (d.sc.maxHeight = parseInt(d.sc.css("max-height"))), d.sc.suggestionHeight || (d.sc.suggestionHeight = b(".autocomplete-suggestion", d.sc).first().outerHeight()), d.sc.suggestionHeight))if (c) {
                    var e = d.sc.scrollTop(), p = c.offset().top - d.sc.offset().top;
                    0 < p + d.sc.suggestionHeight - d.sc.maxHeight ? d.sc.scrollTop(p + d.sc.suggestionHeight + e - d.sc.maxHeight) : 0 > p && d.sc.scrollTop(p + e)
                } else d.sc.scrollTop(0)
            };
            b(window).on("resize.autocomplete", d.updateSC);
            d.sc.appendTo("body");
            d.sc.on("mouseleave", ".autocomplete-suggestion",
                function () {
                    b(".autocomplete-suggestion.selected").removeClass("selected")
                });
            d.sc.on("mouseenter", ".autocomplete-suggestion", function () {
                b(".autocomplete-suggestion.selected").removeClass("selected");
                b(this).addClass("selected")
            });
            d.sc.on("mouseup", ".autocomplete-suggestion", function (a) {
                var e = b(this), f = e.data("val");
                (f || e.hasClass("autocomplete-suggestion")) && (d.val(f), c.onSelect(a, f, e), d.sc.hide())
            });
            d.on("blur.autocomplete", function () {
                try {
                    over_sb = b(".autocomplete-suggestions:hover").length
                } catch (a) {
                    over_sb =
                        0
                }
                over_sb ? d.is(":focus") || d.focus() : (d.last_val = d.val(), d.sc.hide())
            });
            c.minChars || d.on("focus.autocomplete", function () {
                d.last_val = "\n";
                d.trigger("keyup.autocomplete")
            });
            d.on("keydown.autocomplete", function (a) {
                if ((40 == a.which || 38 == a.which) && d.sc.html()) {
                    var e, f = b(".autocomplete-suggestion.selected", d.sc);
                    return f.length ? (e = 40 == a.which ? f.next(".autocomplete-suggestion") : f.prev(".autocomplete-suggestion"), e.length ? (f.removeClass("selected"), d.val(e.addClass("selected").data("val"))) : (f.removeClass("selected"),
                        d.val(d.last_val), e = 0)) : (e = 40 == a.which ? b(".autocomplete-suggestion", d.sc).first() : b(".autocomplete-suggestion", d.sc).last(), d.val(e.addClass("selected").data("val"))), d.updateSC(0, e), !1
                }
                27 == a.which ? d.val(d.last_val).sc.hide() : 13 == a.which && (f = b(".autocomplete-suggestion.selected", d.sc), f.length && (c.onSelect(a, f.data("val"), f), setTimeout(function () {
                    d.sc.hide()
                }, 10)))
            });
            d.on("keyup.autocomplete", function (e) {
                if (!~b.inArray(e.which, [13, 27, 38, 40, 37, 39])) {
                    var h = d.val();
                    if (h.length >= c.minChars) {
                        if (h != d.last_val) {
                            if (d.last_val =
                                    h, clearTimeout(d.timer), c.cache) {
                                if (h in d.cache)return void a(d.cache[h]);
                                for (e = 1; e < h.length - c.minChars; e++) {
                                    var f = h.slice(0, h.length - e);
                                    if (f in d.cache && !d.cache[f].length)return void a([])
                                }
                            }
                            d.timer = setTimeout(function () {
                                c.source(h, a)
                            }, c.delay)
                        }
                    } else d.last_val = h, d.sc.hide()
                }
            })
        })
    };
    b.fn.autoComplete.defaults = {
        source: 0, minChars: 3, delay: 150, cache: 1, menuClass: "", renderItem: function (b, c) {
            var a = new RegExp("(" + c.split(" ").join("|") + ")", "gi");
            return '<div class="autocomplete-suggestion" data-val="' + b + '">' +
                b.replace(a, "<b>$1</b>") + "</div>"
        }, onSelect: function (b, c, a) {
        }
    }
}(jQuery);
$(document).ready(function () {
    $(document).on("click", ".fblogin", function () {
        showFbLoginDialog()
    });
    $(".loginSignupTab").on("mousedown", function (b) {
        var e = $(this).attr("data-href");
        2 == b.which ? window.open(e, "_blank") : (b.shiftKey || b.ctrlKey || b.metaKey) && window.open(e, "_blank");
        return !1
    });
    $(document).on("click", "#registerButton", function () {
        $(".loginWrapper, #popupLoginTitle").fadeOut("fast");
        setTimeout(function () {
            $(".signupWrapper, #popupRegisterTitle").fadeIn("fast")
        }, 300);
        return !1
    });
    $("body").on("beforeSubmit",
        "form#verify-form", function (b) {
            b = $(this);
            $.ajax({
                url: b.attr("action"), type: "post", data: b.serialize(), success: function (b) {
                    b.status ? ($("#verifyPhoneSuccess").show(), $(".verifyPhoneContent").hide(), setTimeout(function () {
                        $.fancybox.close()
                    }, 1E4)) : ($("#verify-form .help-block").html(""), $.each(b.errors, function (b, a) {
                        $("#verify-form .form-group").addClass("has-error");
                        $("#verify-form .help-block").html($("#verify-form .help-block").html() + a)
                    }), $("#verify-form").trigger("afterValidateAttribute"))
                }
            });
            return !1
        })
});
function loginPopup(b, e, c, a) {
    b = $("#" + b);
    $.ajax({
        url: b.attr("action"), type: "post", data: b.serialize(), success: function (b) {
            b.callback = a;
            e(b)
        }, error: c
    })
}
function registerPopup(b, e, c, a) {
    b = $("#" + b);
    $.ajax({
        url: b.attr("action"), type: "post", data: b.serialize(), success: function (b) {
            floatLabels();
            b.callback = a;
            e(b)
        }, error: c
    })
}
function registerCallback(b) {
    $("#authPopup .popupCont > div").hide();
    $("#authPopup .popupCont").append(b.verify);
    $("#header").html(b.header);
    $("#register-popup")[0].reset();
    postViewLoggedIn();
    b.chatParams && chatLoggedIn(b, function () {
        $('[data-role="chat-opener"]').attr("data-uid", b.member.id).show();
        $('[data-oid="' + b.member.id + '"]').hide();
        $('[data-role="chat-opener-login"]').hide()
    });
    "function" == typeof b.callback && ($.fancybox.close(), b.callback(b))
}
function loginCallback(b) {
    $.fancybox.close();
    $("#header").html(b.header);
    $("#login-form")[0].reset();
    postViewLoggedIn();
    b.chatParams && chatLoggedIn(b, function () {
        $('[data-role="chat-opener"]').attr("data-uid", b.member.id).show();
        if ("" != window.authPopupCallbackAttr && void 0 != window.authPopupCallbackAttr) {
            var e = window.authPopupCallbackAttr.split("-");
            b.member.id != e[1] && $('[data-pid="' + e[0] + '"][data-oid="' + e[1] + '"][data-uid="' + b.member.id + '"]').trigger("click")
        }
        $('[data-oid="' + b.member.id + '"]').hide();
        $('[data-role="chat-opener-login"]').hide()
    })
}
function oldLoginCallback(b) {
    window.location.href = "/"
}
function oldRegistrationCallback(b) {
    window.location.href = "/" + window.lang + "/member/signup-success-v2?id=" + b.member_id + "&src=reg"
}
function commentCallback(b) {
    $("#header").html(b.header);
    $("#comment_submit").trigger("click").show();
    $.fancybox.close();
    $("#login-form")[0].reset();
    postViewLoggedIn();
    $("#block").trigger("click")
}
function offerCallback(b) {
    $("#header").html(b.header);
    $("#offer_submit").trigger("click").show();
    $("#offer-login").hide();
    $.fancybox.close();
    $("#login-form")[0].reset();
    postViewLoggedIn()
}
function favCallback(b) {
    $("#header").html(b.header);
    postViewLoggedIn();
    $("[data-post-id=" + window.authPopupCallbackAttr + "]").trigger("click");
    $.fancybox.close()
}
function reportPostCallback(b) {
    $("#header").html(b.header);
    postViewLoggedIn();
    $.fancybox.close();
    $("#block").trigger("click")
}
function commentReportCallback(b) {
    $("#header").html(b.header);
    postViewLoggedIn();
    $.fancybox.close();
    $("[data-id=" + window.authPopupCallbackAttr + "]").trigger("click")
}
function sendMessageCallback(b) {
    $("#header").html(b.header);
    $.fancybox.close();
    postViewLoggedIn();
    b.chatParams ? chatLoggedIn(b) : $("#submitContactButton").trigger("click").show()
}
function chatCallback(b) {
    console.log("authPopup chat callback");
    $("#header").html(b.header);
    $.fancybox.close();
    postViewLoggedIn();
    b.chatParams && chatLoggedIn(b, function () {
        $('[data-role="chat-opener-login"]').hide();
        b.member.id != $('[data-role="chat-opener"]').attr("data-oid") ? $('[data-role="chat-opener"]').trigger("click") : $('[data-role="chat-opener"]').hide()
    })
}
function sendGalaryMessageCallback(b) {
    $("#header").html(b.header);
    $.fancybox.close();
    $("#main_image").trigger("click");
    postViewLoggedIn();
    b.chatParams ? chatLoggedIn(b) : $(".postSideFormGallery #submitContactButtonGallery").trigger("click").show()
}
function vasCallback(b) {
    $("#header").html(b.header);
    $.fancybox.close();
    window.location.href = window.authPopupCallbackAttr;
    postViewLoggedIn()
}
function editCallback(b) {
    $("#header").html(b.header);
    $.fancybox.close();
    var e = $("#edit-post"), c = parseInt(e.attr("data-member")), e = e.attr("data-url");
    b.chatParams.id == c && (window.location.href = e);
    b.chatParams ? chatLoggedIn(b) : postViewLoggedIn()
}
function deletePostCallback(b) {
    $("#header").html(b.header);
    $.fancybox.close();
    b.chatParams ? chatLoggedIn(b) : postViewLoggedIn();
    $("#deletePostProfilePopup").html("");
    var e = $("#deletePost"), e = parseInt(e.attr("data-member"));
    b.chatParams.id == e && deletePostReason($("#deletePost"))
}
function postViewLoggedIn() {
    $('[data-role="chat-opener-login"]').hide();
    $(".postSideFormGallery #contactAuthButton").hide();
    $(".postSideFormGallery #submitContactButtonGallery").show();
    $(".postSideForm #contactAuthButton").hide();
    $(".postSideForm #submitContactButton").show();
    $("#comment-login").hide();
    $("#comment_submit").show();
    $('a[data-role="toggle-fav"]').attr("href", "javascript:");
    $("#block").attr("href", "#postreportPopup");
    $(".report_comment_violation").attr("href", "#commentViolationPopup").addClass("commentPopup");
    $("#offer_submit").show();
    $("#offer-login").hide();
    $("#chat-opener-login").hide();
    $('[data-role="chat-opener"]').removeClass("hide").removeClass("forceHide");
    reastNonOwnerView()
}
function chatLoggedIn(b, e) {
    $('[data-role="chat-opener"]').attr("data-uid", b.member.id);
    "undefined" != typeof webChat && (webChat.connect(b.chatParams, e), webChat.callbcak = e, $("#cur-room").attr("data-uid", b.chatParams.id));
    reastNonOwnerView()
}
function reastNonOwnerView() {
    var b = 0, e = 0;
    $("#postContWrapper").length && (e = $("#postContWrapper").attr("data-memberId"));
    $("#header .my_account").length && (b = $("#header .my_account").attr("data-memberId"));
    e != b ? $(".ownerList").remove() : ($("#deletePost").attr("href", "#"), $("#deletePost").addClass("deleteOne"))
}
var authAutoClose = !1;
window.authPopupCallback = "";
window.authPopupCallbackAttr = "";
window.fbToken = "";
window.authOldBehaviour = !1;
window.authRegCallback = "";
$("body").on("click", "#submit_email", function (b) {
    b.preventDefault();
    0 < $("#fbVerifyEmail").val().length && (b = {
        accessToken: window.fbToken,
        email: $("#fbVerifyEmail").val()
    }, opensooqFbAuth(b))
});
$("body").on("click", '[href="#authPopup"]', function (b) {
    var e = $(this);
    if (void 0 !== e.attr("href"))return void 0 !== e.attr("data-gtm-attribute") && (window.dataGTMAttribute = e.attr("data-gtm-attribute")), window.authPopupCallback = e.attr("data-callback"), window.authAutoClose = "true" == e.attr("data-autoclose") ? !0 : !1, window.authPopupCallbackAttr = e.attr("data-callbackAttr"), $("#registerButton").attr("data-callbackAttr", window.authPopupCallbackAttr), $("#registerButton").attr("data-autoclose", window.authPopupCallbackAttr),
        $("#registerButton").attr("data-recallback", window.authPopupCallback), window.authAutoClose && (window.authRegCallback = window.authPopupCallback), $("#authPopup").length ? (void 0 !== e.attr("data-authtype") && "reg" == e.attr("data-authtype") ? ($(".signupWrapper, #popupRegisterTitle").show(), $(".loginWrapper, #popupLoginTitle").hide()) : ($(".signupWrapper, #popupRegisterTitle").hide(), $(".loginWrapper, #popupLoginTitle").show()), e.data("fancy") || (e.attr("data-fancy", "true"), e.fancybox({
        padding: 0, onUpdate: function (b,
                                        a) {
            $.fancybox.reposition()
        }, helpers: {title: null}
    }).trigger("click"))) : $.ajax({
        url: "/" + window.lang + "/site/auth-popup", type: "get", cache: !0, success: function (b) {
            $("body").append(b);
            e.fancybox({
                padding: 0, onUpdate: function (a, b) {
                    $.fancybox.reposition()
                }, helpers: {title: null}
            }).trigger("click");
            void 0 !== e.attr("data-authtype") && "reg" == e.attr("data-authtype") ? ($(".signupWrapper, #popupRegisterTitle").show(), $(".loginWrapper, #popupLoginTitle").hide()) : ($(".signupWrapper, #popupRegisterTitle").hide(), $(".loginWrapper, #popupLoginTitle").show());
            floatLabels();
            "undefined" !== typeof placeholder && $.isFunction(placeholder) && placeholder()
        }
    }), !0
});
$("body").on("click", '[data-btn-kind="loginsocial"]', function (b) {
    clickLogin(window.dataGTMAttribute, $(this).attr("data-btn-social"))
});
$("body").on("click", '[data-btn-kind="registersocial"]', function (b) {
    clickRegister(window.dataGTMAttribute, $(this).attr("data-btn-social"))
});
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function (b) {
    function e() {
        var a = this;
        a.top = "auto";
        a.left = "auto";
        a.right = "auto";
        a.bottom = "auto";
        a.set = function (c, d) {
            b.isNumeric(d) && (a[c] = Math.round(d))
        }
    }

    function c(a, b, c) {
        function d(h, k) {
            e();
            a.data("hasActiveHover") || (h ? (k && a.data("forcedOpen", !0), c.showTip(a)) : (n.tipOpenImminent = !0, f = setTimeout(function () {
                f = null;
                var e = Math.abs(n.previousX - n.currentX), h = Math.abs(n.previousY - n.currentY);
                e + h < b.intentSensitivity ? c.showTip(a) :
                    (n.previousX = n.currentX, n.previousY = n.currentY, d())
            }, b.intentPollInterval)))
        }

        function e() {
            f = clearTimeout(f);
            n.delayInProgress = !1
        }

        var f = null;
        this.show = d;
        this.hide = function (d) {
            e();
            n.tipOpenImminent = !1;
            a.data("hasActiveHover") && (a.data("forcedOpen", !1), d ? c.hideTip(a) : (n.delayInProgress = !0, f = setTimeout(function () {
                f = null;
                c.hideTip(a);
                n.delayInProgress = !1
            }, b.closeDelay)))
        };
        this.cancel = e;
        this.resetPosition = function () {
            c.resetPosition(a)
        }
    }

    function a() {
        function a(b, c) {
            function d() {
                q.push(h.matrixTransform(k))
            }

            var e = b.closest("svg")[0], f = b[0], h = e.createSVGPoint(), e = f.getBBox(), k = f.getScreenCTM(), l = e.width / 2, m = e.height / 2, q = [], f = "nw n ne e se s sw w".split(" "), p;
            h.x = e.x;
            h.y = e.y;
            d();
            h.x += l;
            d();
            h.x += l;
            d();
            h.y += m;
            d();
            h.y += m;
            d();
            h.x -= l;
            d();
            h.x -= l;
            d();
            h.y -= m;
            d();
            if (q[0].y !== q[1].y || q[0].x !== q[7].x)for (e = Math.atan2(k.b, k.a) * x, e = Math.ceil((e % 360 - 22.5) / 45), 1 > e && (e += 8); e--;)f.push(f.shift());
            for (e = 0; e < q.length; e++)if (f[e] === c) {
                p = q[e];
                break
            }
            return {top: p.y + n.scrollTop, left: p.x + n.scrollLeft}
        }

        this.compute = function (b,
                                 c, d, f, h) {
            var k = c.split("-")[0], m = new e;
            if (window.SVGElement && b[0] instanceof SVGElement)k = a(b, k); else {
                var q = b.offset(), p = b.outerWidth();
                b = b.outerHeight();
                var v, w;
                switch (k) {
                    case "n":
                        v = q.left + p / 2;
                        w = q.top;
                        break;
                    case "e":
                        v = q.left + p;
                        w = q.top + b / 2;
                        break;
                    case "s":
                        v = q.left + p / 2;
                        w = q.top + b;
                        break;
                    case "w":
                        v = q.left;
                        w = q.top + b / 2;
                        break;
                    case "nw":
                        v = q.left;
                        w = q.top;
                        break;
                    case "ne":
                        v = q.left + p;
                        w = q.top;
                        break;
                    case "sw":
                        v = q.left;
                        w = q.top + b;
                        break;
                    case "se":
                        v = q.left + p, w = q.top + b
                }
                k = {top: w, left: v}
            }
            switch (c) {
                case "n":
                    m.set("left",
                        k.left - d / 2);
                    m.set("bottom", n.windowHeight - k.top + h);
                    break;
                case "e":
                    m.set("left", k.left + h);
                    m.set("top", k.top - f / 2);
                    break;
                case "s":
                    m.set("left", k.left - d / 2);
                    m.set("top", k.top + h);
                    break;
                case "w":
                    m.set("top", k.top - f / 2);
                    m.set("right", n.windowWidth - k.left + h);
                    break;
                case "nw":
                    m.set("bottom", n.windowHeight - k.top + h);
                    m.set("right", n.windowWidth - k.left - 20);
                    break;
                case "nw-alt":
                    m.set("left", k.left);
                    m.set("bottom", n.windowHeight - k.top + h);
                    break;
                case "ne":
                    m.set("left", k.left - 20);
                    m.set("bottom", n.windowHeight - k.top + h);
                    break;
                case "ne-alt":
                    m.set("bottom", n.windowHeight - k.top + h);
                    m.set("right", n.windowWidth - k.left);
                    break;
                case "sw":
                    m.set("top", k.top + h);
                    m.set("right", n.windowWidth - k.left - 20);
                    break;
                case "sw-alt":
                    m.set("left", k.left);
                    m.set("top", k.top + h);
                    break;
                case "se":
                    m.set("left", k.left - 20);
                    m.set("top", k.top + h);
                    break;
                case "se-alt":
                    m.set("top", k.top + h), m.set("right", n.windowWidth - k.left)
            }
            return m
        }
    }

    function d(c) {
        function d(a) {
            var b;
            if (a.data("hasActiveHover"))if (n.isTipOpen)n.isClosing || h(n.activeHover), E.delay(100).queue(function (b) {
                d(a);
                b()
            }); else if (a.trigger("powerTipPreRender"), b = p(a))E.empty().append(b), a.trigger("powerTipRender"), n.activeHover = a, n.isTipOpen = !0, E.data("mouseOnToPopup", c.mouseOnToPopup), c.followMouse ? k() : (x(a), n.isFixedTipOpen = !0), E.fadeIn(c.fadeInTime, function () {
                n.desyncTimeout || (n.desyncTimeout = setInterval(A, 500));
                a.trigger("powerTipOpen")
            })
        }

        function h(a) {
            n.isClosing = !0;
            n.activeHover = null;
            n.isTipOpen = !1;
            n.desyncTimeout = clearInterval(n.desyncTimeout);
            a.data("hasActiveHover", !1);
            a.data("forcedOpen", !1);
            E.fadeOut(c.fadeOutTime,
                function () {
                    var b = new e;
                    n.isClosing = !1;
                    n.isFixedTipOpen = !1;
                    E.removeClass();
                    b.set("top", n.currentY + c.offset);
                    b.set("left", n.currentX + c.offset);
                    E.css(b);
                    a.trigger("powerTipClose")
                })
        }

        function k() {
            if (!n.isFixedTipOpen && (n.isTipOpen || n.tipOpenImminent && E.data("hasMouseMove"))) {
                var a = E.outerWidth(), b = E.outerHeight(), d = new e, f;
                d.set("top", n.currentY + c.offset);
                d.set("left", n.currentX + c.offset);
                f = r(d, a, b);
                if (f !== q.none) {
                    for (var h = f, m = 0; h;)h &= h - 1, m++;
                    1 === m ? f === q.right ? d.set("left", n.windowWidth - a) : f === q.bottom &&
                    d.set("top", n.scrollTop + n.windowHeight - b) : (d.set("left", n.currentX - a - c.offset), d.set("top", n.currentY - b - c.offset))
                }
                E.css(d)
            }
        }

        function x(a) {
            var d, e;
            c.smartPlacement ? (d = b.fn.powerTip.smartPlacementLists[c.placement], b.each(d, function (b, c) {
                var d = r(J(a, c), E.outerWidth(), E.outerHeight());
                e = c;
                if (d === q.none)return !1
            })) : (J(a, c.placement), e = c.placement);
            E.addClass(e)
        }

        function J(a, b) {
            var d = 0, f, h, k = new e;
            k.set("top", 0);
            k.set("left", 0);
            E.css(k);
            do f = E.outerWidth(), h = E.outerHeight(), k = F.compute(a, b, f, h, c.offset),
                E.css(k); while (5 >= ++d && (f !== E.outerWidth() || h !== E.outerHeight()));
            return k
        }

        function A() {
            var a = !1;
            !n.isTipOpen || n.isClosing || n.delayInProgress || (!1 === n.activeHover.data("hasActiveHover") || n.activeHover.is(":disabled") ? a = !0 : f(n.activeHover) || n.activeHover.is(":focus") || n.activeHover.data("forcedOpen") || (E.data("mouseOnToPopup") ? f(E) || (a = !0) : a = !0), a && h(n.activeHover))
        }

        var F = new a, E = b("#" + c.popupId);
        0 === E.length && (E = b("<div/>", {id: c.popupId}), 0 === w.length && (w = b("body")), w.append(E));
        c.followMouse && !E.data("hasMouseMove") &&
        (m.on("mousemove", k), v.on("scroll", k), E.data("hasMouseMove", !0));
        if (c.mouseOnToPopup)E.on({
            mouseenter: function () {
                E.data("mouseOnToPopup") && n.activeHover && n.activeHover.data("displayController").cancel()
            }, mouseleave: function () {
                n.activeHover && n.activeHover.data("displayController").hide()
            }
        });
        this.showTip = function (a) {
            a.data("hasActiveHover", !0);
            E.queue(function (b) {
                d(a);
                b()
            })
        };
        this.hideTip = h;
        this.resetPosition = x
    }

    function k() {
        n.mouseTrackingActive || (n.mouseTrackingActive = !0, b(function () {
            n.scrollLeft = v.scrollLeft();
            n.scrollTop = v.scrollTop();
            n.windowWidth = v.width();
            n.windowHeight = v.height()
        }), m.on("mousemove", h), v.on({
            resize: function () {
                n.windowWidth = v.width();
                n.windowHeight = v.height()
            }, scroll: function () {
                var a = v.scrollLeft(), b = v.scrollTop();
                a !== n.scrollLeft && (n.currentX += a - n.scrollLeft, n.scrollLeft = a);
                b !== n.scrollTop && (n.currentY += b - n.scrollTop, n.scrollTop = b)
            }
        }))
    }

    function h(a) {
        n.currentX = a.pageX;
        n.currentY = a.pageY
    }

    function f(a) {
        var b = a.offset(), c = a[0].getBoundingClientRect();
        a = c.right - c.left;
        c = c.bottom - c.top;
        return n.currentX >= b.left && n.currentX <= b.left + a && n.currentY >= b.top && n.currentY <= b.top + c
    }

    function p(a) {
        var c = a.data("powertip"), d = a.data("powertipjq"), e = a.data("powertiptarget"), f;
        c ? (b.isFunction(c) && (c = c.call(a[0])), f = c) : d ? (b.isFunction(d) && (d = d.call(a[0])), 0 < d.length && (f = d.clone(!0, !0))) : e && (a = b("#" + e), 0 < a.length && (f = a.html()));
        return f
    }

    function r(a, b, c) {
        var d = n.scrollTop, e = n.scrollLeft, f = d + n.windowHeight, h = e + n.windowWidth, k = q.none;
        if (a.top < d || Math.abs(a.bottom - n.windowHeight) - c < d)k |= q.top;
        if (a.top +
            c > f || Math.abs(a.bottom - n.windowHeight) > f)k |= q.bottom;
        if (a.left < e || a.right + b > h)k |= q.left;
        if (a.left + b > h || a.right < e)k |= q.right;
        return k
    }

    var m = b(document), v = b(window), w = b("body"), x = 180 / Math.PI, n = {
        isTipOpen: !1,
        isFixedTipOpen: !1,
        isClosing: !1,
        tipOpenImminent: !1,
        activeHover: null,
        currentX: 0,
        currentY: 0,
        previousX: 0,
        previousY: 0,
        desyncTimeout: null,
        mouseTrackingActive: !1,
        delayInProgress: !1,
        windowWidth: 0,
        windowHeight: 0,
        scrollTop: 0,
        scrollLeft: 0
    }, q = {none: 0, top: 1, bottom: 2, left: 4, right: 8};
    b.fn.powerTip = function (a, e) {
        if (!this.length)return this;
        if ("string" === b.type(a) && b.powerTip[a])return b.powerTip[a].call(this, this, e);
        var f = b.extend({}, b.fn.powerTip.defaults, a), h = new d(f);
        k();
        this.each(function () {
            var a = b(this), d = a.data("powertip"), e = a.data("powertipjq"), k = a.data("powertiptarget"), m;
            a.data("displayController") && b.powerTip.destroy(a);
            m = a.attr("title");
            d || k || e || !m || (a.data("powertip", m), a.data("originalTitle", m), a.removeAttr("title"));
            a.data("displayController", new c(a, f, h))
        });
        if (!f.manual)this.on({
            "mouseenter.powertip": function (a) {
                b.powerTip.show(this,
                    a)
            }, "mouseleave.powertip": function () {
                b.powerTip.hide(this)
            }, "focus.powertip": function () {
                b.powerTip.show(this)
            }, "blur.powertip": function () {
                b.powerTip.hide(this, !0)
            }, "keydown.powertip": function (a) {
                27 === a.keyCode && b.powerTip.hide(this, !0)
            }
        });
        return this
    };
    b.fn.powerTip.defaults = {
        fadeInTime: 200,
        fadeOutTime: 100,
        followMouse: !1,
        popupId: "powerTip",
        intentSensitivity: 7,
        intentPollInterval: 100,
        closeDelay: 100,
        placement: "n",
        smartPlacement: !1,
        offset: 10,
        mouseOnToPopup: !1,
        manual: !1
    };
    b.fn.powerTip.smartPlacementLists =
    {
        n: ["n", "ne", "nw", "s"],
        e: "e ne se w nw sw n s e".split(" "),
        s: ["s", "se", "sw", "n"],
        w: "w nw sw e ne se n s w".split(" "),
        nw: "nw w sw n s se nw".split(" "),
        ne: "ne e se n s sw ne".split(" "),
        sw: "sw w nw s n ne sw".split(" "),
        se: "se e ne s n nw se".split(" "),
        "nw-alt": "nw-alt n ne-alt sw-alt s se-alt w e".split(" "),
        "ne-alt": "ne-alt n nw-alt se-alt s sw-alt e w".split(" "),
        "sw-alt": "sw-alt s se-alt nw-alt n ne-alt w e".split(" "),
        "se-alt": "se-alt s sw-alt ne-alt n nw-alt e w".split(" ")
    };
    b.powerTip = {
        show: function (a,
                        c) {
            c ? (h(c), n.previousX = c.pageX, n.previousY = c.pageY, b(a).data("displayController").show()) : b(a).first().data("displayController").show(!0, !0);
            return a
        }, reposition: function (a) {
            b(a).first().data("displayController").resetPosition();
            return a
        }, hide: function (a, c) {
            a ? b(a).first().data("displayController").hide(c) : n.activeHover && n.activeHover.data("displayController").hide(!0);
            return a
        }, destroy: function (a) {
            b(a).off(".powertip").each(function () {
                var a = b(this), c = ["originalTitle", "displayController", "hasActiveHover",
                    "forcedOpen"];
                a.data("originalTitle") && (a.attr("title", a.data("originalTitle")), c.push("powertip"));
                a.removeData(c)
            });
            return a
        }
    };
    b.powerTip.showTip = b.powerTip.show;
    b.powerTip.closeTip = b.powerTip.hide
});
(function (b, e, c, a) {
    function d(a, c) {
        this.$element = b(a);
        this.settings = b.extend({}, k, c);
        this.init()
    }

    var k = {
        slideInput: !0,
        labelStartTop: "10px",
        labelEndTop: "0",
        paddingOffset: "0",
        transitionDuration: .2,
        transitionEasing: "ease-in-out",
        labelClass: "",
        typeMatches: /text|password|email|number|search|url|tel/
    };
    d.prototype = {
        init: function () {
            var a = this, b = this.settings, c = b.transitionDuration, d = b.transitionEasing, k = this.$element, v = {
                "-webkit-transition": "all " + c + "s " + d,
                "-moz-transition": "all " + c + "s " + d,
                "-o-transition": "all " +
                c + "s " + d,
                "-ms-transition": "all " + c + "s " + d,
                transition: "all " + c + "s " + d
            };
            if ("INPUT" == k.prop("tagName").toUpperCase() || "TEXTAREA" == k.prop("tagName").toUpperCase())if ("INPUT" !== k.prop("tagName").toUpperCase() || b.typeMatches.test(k.attr("type"))) {
                c = k.attr("id");
                c || (c = Math.floor(100 * Math.random()) + 1, k.attr("id", c));
                var d = k.attr("placeholder"), w = k.data("label"), x = k.data("class");
                x || (x = "");
                d && "" !== d || (d = "You forgot to add placeholder attribute!");
                w && "" !== w || (w = d);
                this.inputPaddingTop = parseFloat(k.css("padding-top")) +
                    parseFloat(b.paddingOffset);
                k.wrap('<div class="floatlabel-wrapper relative clear"></div>');
                k.before('<label for="' + c + '" class="label-floatlabel label-' + k.prop("tagName").toLowerCase() + b.labelClass + " " + x + '">' + w + "</label>");
                this.$label = k.prev("label");
                this.$label.css({
                    position: "absolute",
                    top: b.labelStartTop,
                    left: "8px",
                    display: "none",
                    "-moz-opacity": "0",
                    "-khtml-opacity": "0",
                    "-webkit-opacity": "0",
                    opacity: "0"
                });
                b.slideInput || k.css({"padding-top": this.inputPaddingTop});
                k.on("keyup blur change", function (b) {
                    a.checkValue(b)
                });
                e.setTimeout(function () {
                    a.$label.css(v);
                    a.$element.css(v)
                }, 100);
                0 != k.val().length && this.checkValue()
            }
        }, checkValue: function (a) {
            if (!a || 9 !== (a.keyCode || a.which)) {
                a = this.$element;
                var b = a.data("flout");
                "" !== a.val() && a.data("flout", "1");
                "" === a.val() && a.data("flout", "0");
                "1" === a.data("flout") && "1" !== b && this.showLabel();
                "0" === a.data("flout") && "0" !== b && this.hideLabel()
            }
        }, showLabel: function () {
            var a = this;
            a.$label.css({display: "block"});
            e.setTimeout(function () {
                a.$label.css({
                    top: a.settings.labelEndTop, "-moz-opacity": "1",
                    "-khtml-opacity": "1", "-webkit-opacity": "1", opacity: "1"
                });
                a.settings.slideInput && a.$element.css({"padding-top": a.inputPaddingTop});
                a.$element.addClass("active-floatlabel");
                a.$element.parent().parent().next(".phoneFlagCont").addClass("phoneFlagContActive")
            }, 50)
        }, hideLabel: function () {
            this.$label.css({
                top: this.settings.labelStartTop,
                "-moz-opacity": "0",
                "-khtml-opacity": "0",
                "-webkit-opacity": "0",
                opacity: "0"
            });
            this.settings.slideInput && this.$element.css({"padding-top": parseFloat(this.inputPaddingTop) - parseFloat(this.settings.paddingOffset)});
            this.$element.removeClass("active-floatlabel");
            this.$element.parent().parent().next(".phoneFlagCont").removeClass("phoneFlagContActive")
        }
    };
    b.fn.floatlabel = function (a) {
        return this.each(function () {
            b.data(this, "plugin_floatlabel") || b.data(this, "plugin_floatlabel", new d(this, a))
        })
    }
})(jQuery, window, document);
window.phoneDrown = !1;
window.onload = function () {
    if ($("#member-geo_lat").length || $("#post-geo_lat").length) {
        var b;
        navigator.geolocation.getCurrentPosition(function (e) {
            b = e;
            $("#member-geo_lat").val(b.coords.latitude);
            $("#member-geo_lng").val(b.coords.longitude);
            $("#post-geo_lat").val(b.coords.latitude);
            $("#post-geo_lng").val(b.coords.longitude)
        }, function (b) {
            $("#member-geo_lat").val("");
            $("#member-geo_lng").val("");
            $("#post-geo_lat").val("");
            $("#post-geo_lng").val("")
        }, {maximumAge: 3E5, timeout: 1E4})
    }
};
$(document).ready(function () {
    $(".makeAdFeature").click(function () {
        var b, c;
        b = $(this).attr("data-payment-postid");
        c = $(this).attr("data-payment-popuptype");
        $.ajax({
            type: "get",
            url: "/" + window.lang + "/post/premium-popup",
            data: {type: c, postId: b},
            success: function (a) {
                $("#featurePopupContainer").html(a);
                $.fancybox("#featurePopupContainer")
            }
        })
    });
    floatLabels();
    $("body").on("beforeValidateAttribute", "form", function (b) {
        $(this).data("yiiActiveForm").submitting && (b = $(this), (b.find("input[type=submit]").length ? b.find("input[type=submit]") :
            b.find("button[type=submit]")).attr("disabled", "disabled"))
    }).on("afterValidateAttribute", "form", function (b, c, a, d) {
        b = $(this);
        (b.find("input[type=submit]").length ? b.find("input[type=submit]") : b.find("button[type=submit]")).removeAttr("disabled")
    }).on("beforeSubmit", "form", function () {
        var b = $(this), c = b.find("input[type=submit]").length ? b.find("input[type=submit]") : b.find("button[type=submit]");
        c.attr("disabled", "disabled");
        if (0 == b.find(".has-error").length)return "undefined" !== typeof b.attr("data-ajax") ?
            !1 : !0;
        c.removeAttr("disabled");
        return !1
    });
    $("body").on("beforeSubmit", "form#feedback-form", function () {
        var b = $(this);
        if (b.find(".has-error").length)return !1;
        $.ajax({
            url: b.attr("action"), type: "post", data: b.serialize(), success: function (b) {
                successMessge();
                $("#feedback-suggestion").val("")
            }
        });
        return !1
    });
    $(document).on("click", ".showBox", function () {
        $(".menuBox").fadeOut();
        $(this).parents().hasClass("categoryZindex") && $(".fade_bg").fadeIn(200);
        $(this).next().is(":hidden") ? ($(this).next().fadeIn(200), $(this).next().find("input").focus()) :
            ($(this).next().fadeOut(), $(".fade_bg").fadeOut());
        return !1
    });
    $(".notiList").click(function () {
        openNotificationEvent("OpenNotification")
    });
    $(document).on("click", ".menuBox", function (b) {
        b.stopPropagation()
    });
    $(document).on("click", function () {
        $('*[name="searchListInput"]').val("");
        $(".searchListInput input").parent().next().find("li").each(function () {
            $(this).show()
        });
        $(".menuBox").fadeOut();
        $(".fade_bg").fadeOut()
    });
    $(".noNoti").is(":hidden") && $(".notiList span:first-child").addClass("notiResetMargin");
    osMenu.init({menuid: "mysidebarmenu"});
    $(".mainUl .hassub").each(function () {
        var b = $(this).find(".subCont div").length;
        1 == b ? $(this).children(".subCont").addClass("menu_col1") : 2 == b && $(this).children(".subCont").addClass("menu_col2")
    });
    var b = $(".osMenuCont").height() - 8;
    $(".osMenuCont .issub").css("height", b + "px");
    $(".popup").fancybox({
        padding: 0, onUpdate: function (b, c) {
            $.fancybox.reposition()
        }
    });
    $(".featureQuestions li > div").click(function () {
        $(this).parent().siblings().find(".qTitle").removeClass("openedQ");
        $(this).parent().siblings().find(".questionCont").slideUp();
        $(this).parent().siblings().find("span").removeClass("icon-thinArrowUp");
        $(this).next(".questionCont").slideToggle();
        $(this).find("span").toggleClass("icon-thinArrowUp");
        $(this).toggleClass("openedQ");
        return !1
    });
    $("div.light_gray").click(function () {
        $(this).siblings(0).slideToggle();
        $(this).find("span").first().toggleClass("closeArrow openArrow");
        return !1
    });
    $("body").on("mouseenter", ".lineLinkG, .linePopupLink", function () {
        var b = $(".linePopup").height() +
            30;
        $(".linePopup").css("top", "-" + b + "px");
        $(".linePopup").fadeIn()
    });
    $(document).on("click", ".linePopup", function (b) {
        b.stopPropagation()
    });
    $(document).on("click", function () {
        $(".linePopup").fadeOut()
    });
    $("#allCats .lvl_1").click(function (b) {
        $("#landingPostDynamicField").hide();
        $("#searchOptionsFacet").hide();
        var c = $(this).attr("data-id");
        $(".allMainCats .categoryTitle").text($(this).text());
        $("#searchCatID").val(c);
        $("#allCats").fadeOut();
        $(".fade_bg").fadeOut();
        $("#navbarSearchForm [name=cat_id]").val(c);
        $("#landingPostDynamicField").length && getFacetSearch(c);
        b.preventDefault();
        doSearch();
        return !1
    });
    $("body").on("beforeSubmit", "form#user-suggestion-form", function () {
        var b = $(this);
        if (b.find(".has-error").length)return !1;
        $.ajax({
            url: b.attr("action"), type: "post", data: b.serialize(), success: function (b) {
                $.fancybox.close()
            }
        });
        b[0].reset();
        return !1
    });
    $("#citiesList .lvl_1").click(function () {
        if ($(this).hasClass("couldntFind"))$("#suggest").find("#usersuggestion-suggestion").val(""), $("#suggest").find("#usersuggestion-suggestion").attr("placeholder",
            $(this).attr("data-placeholder")), $('[for="usersuggestion-suggestion"]').html($(this).attr("data-placeholder")), $("#suggest").find(".popupTitle").html($(this).attr("data-title")), $("#suggest").find("#description").html($(this).attr("data-description")), $("#suggest").find("#usersuggestion-type").val($(this).attr("data-type")), $.fancybox("#suggest"), $(".menuBox ").fadeOut(); else if (!$(this).hasClass("groupListTitle")) {
            var b = $(this).attr("data-cityid"), c = "";
            isNaN(parseInt(b)) || (c = $.trim($(this).text()));
            $(".allMainCats .cityTitle").text($.trim($(this).text()));
            $("#navbarSearchForm [name=city]").val(c);
            $("#navbarSearchForm [name=scid]").val(b);
            $("#cities-list").fadeOut();
            doSearch()
        }
        return !1
    });
    $("body #landingPostDynamicField").on("keyup keydown keypres", ".searchListInput input", function (b) {
        var c = $(this).val().toLowerCase();
        $(".theList li").each(function () {
            -1 < $(this).attr("data-search").toLowerCase().indexOf(c) ? $(this).show() : $(this).hide()
        });
        if (13 == b.which)return b.preventDefault(), !1
    });
    $("#cities-list").on("keyup keydown keypress",
        ".searchListInput input", function (b) {
            var c = $(this).val().toLowerCase();
            $(this).parent().next().find("li").each(function () {
                var a = $(this).attr("data-search").toLowerCase();
                -1 < $.trim(a).indexOf(c) ? ($(this).closest('li[data-region="true"]').show(), $(this).show()) : $(this).hide()
            });
            if (13 == b.which)return b.preventDefault(), !1
        });
    $("#nav").on("click", "#brandsList li", function (b) {
        b = $(this);
        var c = b.closest("div").find("input"), a = $.trim(b.attr("data-value")), c = c.attr("data-attr");
        $("#searchDynamic-" + c).val(a);
        b = b.text();
        $(".typeTitle-" + c).text(b);
        $("#searchDynamic-" + c + "_child").length && ($(".typeTitle-" + c + "_child").text(""), $("#searchDynamic-" + c + "_child").val(""));
        $(".menuBox ").fadeOut();
        $(".fade_bg").fadeOut();
        doSearch()
    });
    $("#gridPostListing li.rectLi > div[id]").on("click", function (b) {
        var c = $(this).find("a.postLink").attr("href");
        if (1 == b.which)if (b.metaKey || b.ctrlKey)window.open(c, "_blank").focus(); else return document.location.href = c, !1;
        2 == b.which && window.open(c, "_blank").focus();
        return !1
    });
    $("#gridPostListing li.rectLi div[id]").on("mousedown",
        function (b) {
            var c = $(this).find("a.postLink").attr("href");
            if (1 == b.which)if (!window.attachEvent || window.addEventListener)b.metaKey || b.ctrlKey || (document.location.href = c); else {
                if (1 == b.which)if (b.metaKey || b.ctrlKey)window.open(c, "_blank").focus(); else return document.location.href = c, !1;
                if (2 == b.which)return window.open(c, "_blank").focus(), !1
            }
            (window.attachEvent && !window.addEventListener || -1 < navigator.userAgent.toLowerCase().indexOf("firefox")) && 2 == b.which && window.open(c, "_blank").focus();
            return !1
        });
    $('a[data-role="toggle-fav"]').click(function () {
        if ("javascript:" !=
            $(this).attr("href"))return !0;
        var b = $(this), c = b.attr("data-post-id");
        b.find("span").toggleClass("fullStar");
        btnStar = b;
        favStar = b.find("span");
        toggleBookmark(c, function (a) {
            !a.status && a.redirect && (window.location.href = a.redirect);
            favStar.hasClass("fullStar") ? (postFavEvent(a.gtm_data), gravityEvent("ADD_TO_FAVORITES", c)) : gravityEvent("REMOVE_FROM_FAVORITES", c);
            b.next().show();
            b.remove()
        });
        return !1
    });
    $(".desc .rBtn").click(function () {
        text = $(".firstPart").html();
        $(this).hasClass("showMore") ? ($(".showMore").hide(),
            $(".showLess,.secondPart").show(), $(".firstPart").html(text.substr(0, text.length - 3))) : ($(".showMore").show(), $(".showLess,.secondPart").hide(), $(".firstPart").html(text + "..."));
        return !1
    });
    $(".listingLeft .square li.rectLi:nth-child(3n+3)").addClass("resetMargin");
    $(".fullWidth .listingLeft .square li.rectLi:nth-child(3n+3)").removeClass("resetMargin");
    $(".fullWidth .listingLeft .square li.rectLi:nth-child(4n+4)").addClass("resetMargin");
    $("body").on("afterValidate", "form[data-type=captchaForm]", function () {
        $(this).find(".has-error").length &&
        $(this).find(".captchaField").length && refreshCaptcha()
    });
    $("#nav").on("change", '*[id^="searchDynamic-"]', function (b) {
        var c = $(this);
        b = c.closest("div").find("input");
        c = $.trim(c.attr("data-value"));
        b = b.attr("data-attr");
        $("#searchDynamic-" + b).val(c);
        doSearch()
    });
    $("#searchBox").autoComplete({
        minChars: 1, source: function (b, c) {
            $.ajax({
                url: "/post/auto-complete", data: {term: b}, dataType: "json", success: function (a) {
                    c(a)
                }
            })
        }, onSelect: function (b, c, a) {
            doSearch()
        }
    });
    $(".moreOptions").click(function () {
        $(this).parent("li").siblings("li.hide").slideToggle("fast");
        $(this).find(".readIcon").toggleClass("icon-expandup icon-expand38 claer");
        $(this).find(".readIcon").hasClass("icon-expandup") ? $(this).parent("li").addClass("lessOptions") : $(this).parent("li").removeClass("lessOptions");
        $(this).find(".readText").text($(this).text() == JS["js.main_extra"] ? JS["js.main.less"] : JS["js.main_extra"]);
        return !1
    });
    $("#markAllReadBtn").click(function (b) {
        setReadAll($(this))
    });
    $("#searchOptionsFacet li").click(function (b) {
        b = $(this).parent().attr("data-type");
        var c = $.trim($(this).attr("data-value"));
        switch (b) {
            case "subcategories_id":
                $("#navbarSearchForm [name=cat_id]").val(c);
                break;
            case "categories_id":
                $("#navbarSearchForm [name=cat_id]").val(c);
                break;
            default:
                $("#searchDynamic-" + b).val(c)
        }
        doSearch();
        return !1
    })
});
function floatLabels() {
    $("input.floatLabel,textarea.floatLabel").floatlabel({slideInput: !1})
}
function getFacetSearch(b) {
    b = parseInt(b);
    $("#landingPostDynamicField").html("");
    isNaN(b) || ($("#facetSearchLoading").show(), $.ajax({
        url: "/main/get-facets-search",
        type: "get",
        cache: !0,
        data: {cateId: b},
        success: function (b) {
            $("#landingPostDynamicField").html(b);
            $("#facetSearchLoading").hide()
        }
    }), $.ajax({
        type: "get", cache: !0, url: "/category/info", data: {id: b}, success: function (b) {
            $;
            0 < b.has_price ? $(".priceSelect").removeClass("forceHide") : $(".priceSelect").addClass("forceHide")
        }, error: function (b, c, a) {
        }
    }))
}
function setTime() {
    currentTime = new Date;
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    suffix = "AM";
    12 <= hours && (suffix = "PM", hours -= 12);
    0 == hours && (hours = 12);
    10 > minutes && (minutes = "0" + minutes);
    result = hours + ":" + minutes + " " + suffix;
    document.getElementById("hidden1").value = result
}
function successMessge() {
    $("#feedbackPopup h2,#feedbackPopup .popupCont").fadeOut(0);
    $("#feedbackPopup .flashMsg").fadeIn(0);
    $.fancybox.reposition();
    $(".fancybox-wrap").css("top", "50%");
    setTimeout(function () {
        $.fancybox.close();
        $("#feedbackPopup .flashMsg").fadeOut(0);
        andTheRest()
    }, 2500);
    return !1
}
function andTheRest() {
    $.fancybox.close();
    $("#feedbackPopup h2,#feedbackPopup .popupCont").fadeIn(0)
}
function toggleBookmark(b, e) {
    $.ajax({
        url: "/bookmark/toggle", data: {id: b}, dataType: "json", success: e, error: function (b, a, d) {
            window.location.href = "/site/login"
        }
    })
}
function getBrowserInfo() {
    var b = navigator.userAgent, e, c = b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(c[1]))return e = /\brv[ :]+(\d+)/g.exec(b) || [], {name: "IE ", version: e[1] || ""};
    if ("Chrome" === c[1] && (e = b.match(/\bOPR\/(\d+)/), null != e))return {name: "Opera", version: e[1]};
    c = c[2] ? [c[1], c[2]] : [navigator.appName, navigator.appVersion, "-?"];
    null != (e = b.match(/version\/(\d+)/i)) && c.splice(1, 1, e[1]);
    return {name: c[0], version: c[1]}
}
function setGetParameter(b, e) {
    var c = window.location.href;
    if (0 <= c.indexOf(b + "="))var a = c.substring(0, c.indexOf(b)), c = c.substring(c.indexOf(b)), c = c.substring(c.indexOf("=") + 1), c = 0 <= c.indexOf("&") ? c.substring(c.indexOf("&")) : "", c = a + b + "=" + e + c; else c = 0 > c.indexOf("?") ? c + ("?" + b + "=" + e) : c + ("&" + b + "=" + e);
    window.location.href = c
}
function haveImageSearch(b) {
    var e = $(b).attr("data-url");
    $(b).is(":checked") && (-1 !== e.indexOf("?") ? e += "&have_images=true" : -1 === e.indexOf("?") && (e += "?have_images=true"));
    window.location.href = e
}
function showMore(b, e) {
    b.parent().hide();
    b.css("display", "none");
    $(e).show();
    $(e).last("li").remove();
    return !1
}
function refreshCaptcha() {
    $(".postCaptcha img").click()
}
function hashComp(b, e, c) {
    b = b[e] || "";
    0 == e && (b = b.substr(1));
    switch (c) {
        case "t":
            a = b;
            break;
        case "i":
            var a = parseInt(b);
            isNaN(a) && (a = 0);
            break;
        case "p":
            if (a = parseInt(b.substr(1)), isNaN(a) || 1 > a)a = 1
    }
    return a
}
function goToHash(b) {
    document.URL.replace(/^.*\/\/[^\/]+/, "");
    if (window.location.hash == "#" + b || window.location.hash == b)b += "/redirect";
    window.location.hash = b
}
function handleHashChanges(b) {
    if ("onhashchange" in window)$(window).bind("hashchange", b); else {
        var e = window.location.hash;
        window.setInterval(function () {
            window.location.hash != e && (e = window.location.hash, b())
        }, 250)
    }
    b()
}
function setRead(b, e) {
    notification_id = $(b).attr("data-notification-id");
    redirect = $(b).attr("data-notification-redirect");
    $.ajax({
        url: "/site/set-read", type: "get", data: {notification_id: notification_id}, success: function (c) {
            "true" === redirect ? window.location = e : ($(b).parent().addClass("read").removeClass("unread"), $(b).parent().find(".readCircle").remove())
        }
    })
}
function setReadParse(b, e) {
    notification_id = $(b).attr("data-notification-id");
    $.ajax({
        url: "/site/set-read-parse", type: "get", data: {notification_id: notification_id}, success: function (b) {
            setTimeout(function () {
                window.location = e
            }, 1E3)
        }
    })
}
function registerDynamicDependentChildren(b) {
    for (var e in b)$('*[name="' + b[e] + '"]').on("change", function () {
        var b = $.trim($(this).attr("data-child")), a = $('*[name="' + b + '"]');
        getChildrenOptions($(this).find("option:selected").attr("data-id"), function (b) {
            "" == b && (b = a.find("option").first());
            a.html(b)
        })
    })
}
function getChildrenOptions(b, e) {
    $.ajax({url: "/main/dynamic-options-children", type: "get", data: {parent_id: b, search: !0}, success: e})
}
function disableDynamicSearch() {
    $("[name=searchListInput]").remove();
    return !0
}
function doSearch() {
    $("#navbarSearchForm").submit()
}
function setReadAll(b) {
    var e = $(b).data("items");
    b = $(b).data("action");
    $.ajax({
        url: b, type: "get", success: function (b) {
            $("#" + e + " li").each(function (a) {
                $("#noNoti").remove();
                $(this).removeClass("unread").addClass("read");
                $(this).find(".readCircle").remove()
            })
        }
    })
}
function getPhoneNumber(b) {
    var e = b.attr("data-id"),
        c = b.attr("data-type");
    0 < b.find(".popupPhone").length && $.ajax({
            url: "/" + window.lang + "/post/get-phone-number", type: "get", dataType: "html",
            data: {model_id: e, model_type: c}, success: function (a) {
                var d = document.createElement("img");
                d.src = "data:image/jpeg;base64," + a;
                b.find(".sellerPhone").html(d);
                window.phoneDrown = !0;
                postCallEvent(e, c)
            }
        }
    )
}
function registerMemberCard() {
    $.fn.powerTip.smartPlacementLists.s = ["s", "e", "w"];
    $("[data-card]").powerTip({placement: "s", smartPlacement: !0, mouseOnToPopup: !0, followMouse: !1});
    $("[data-card]").data("powertiptarget", "memberCard");
    $("[data-card]").on({
        powerTipPreRender: function () {
            $("#memberCard .popupCard .memberName").html($(this).attr("data-mc_name"));
            $("#memberCard .popupCard .joinDate").html($(this).attr("data-mc_joindate"));
            $("#memberCard .popupCard .userCardImg").html('<img src="" alt="">');
            $("#memberCard .popupCard .userCardImg img").attr("alt",
                $(this).attr("data-mc_name"));
            "1" == $(this).attr("data-mc_email_verified") ? $("#memberCard .popupCard .midCardVerifiedEmail").show() : $("#memberCard .popupCard .midCardVerifiedEmail").hide();
            "1" == $(this).attr("data-mc_phone_verified") ? $("#memberCard .popupCard .midCardVerifiedPhone").show() : $("#memberCard .popupCard .midCardVerifiedPhone").hide();
            $(this).attr("data-mc_phone").length ? ($("#memberCard .popupCard .phoneNumber").show(), $("#memberCard .popupCard .popupPhone").html($(this).attr("data-mc_phone")),
                $("#memberCard .popupCard .phoneNumber").attr("data-id", $(this).attr("data-mc_id"))) : $("#memberCard .popupCard .phoneNumber").hide();
            "true" == $(this).attr("data-mc_isonline") ? $("#memberCard .popupCard .userDet .userOffline").addClass("userOnline") : $("#memberCard .popupCard .userDet .userOffline").removeClass("userOnline");
            $("#memberCard .popupCard img").attr("src", $(this).attr("data-mc_image"));
            $("#memberCard .popupCard .getPhoneNumber").attr("data-id", $(this).attr("data-mc_id"));
            $("#memberCard .popupCard .getPhoneNumber").attr("data-type",
                "member");
            $("#memberCard .popupCard .getPhoneNumber").attr("data-track", $(this).attr("data-mc_dataTrack"));
            $("#memberCard .popupCard a").attr("href", $(this).attr("data-mc_link"))
        }
    })
}
function formatAMPM(b) {
    var e = b.getHours();
    b = b.getMinutes();
    var c = 12 <= e ? "pm" : "am", e = e % 12;
    return (e ? e : 12) + ":" + (10 > b ? "0" + b : b) + " " + c
}
function createCookie(b, e, c) {
    if (c) {
        var a = new Date;
        a.setTime(a.getTime() + 864E5 * c);
        c = "; expires=" + a.toGMTString()
    } else c = "";
    document.cookie = b + "=" + e + c + "; path=/"
}
function readCookie(b) {
    b = ("; " + document.cookie).split("; " + b + "=");
    if (2 == b.length)return b.pop().split(";").shift()
}
function eraseCookie(b) {
    createCookie(b, "", -1)
}
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(window.jQuery)
})(function (b) {
    var e = 0;
    b.ajaxTransport("iframe", function (c) {
        if (c.async) {
            var a = c.initialIframeSrc || "javascript:false;", d, k, h;
            return {
                send: function (f, p) {
                    d = b('<form style="display:none;"></form>');
                    d.attr("accept-charset", c.formAcceptCharset);
                    h = /\?/.test(c.url) ? "&" : "?";
                    "DELETE" === c.type ? (c.url = c.url + h + "_method=DELETE", c.type = "POST") : "PUT" === c.type ? (c.url = c.url + h + "_method=PUT", c.type = "POST") : "PATCH" === c.type && (c.url =
                        c.url + h + "_method=PATCH", c.type = "POST");
                    e += 1;
                    k = b('<iframe src="' + a + '" name="iframe-transport-' + e + '"></iframe>').bind("load", function () {
                        var e, f = b.isArray(c.paramName) ? c.paramName : [c.paramName];
                        k.unbind("load").bind("load", function () {
                            var c;
                            try {
                                if (c = k.contents(), !c.length || !c[0].firstChild)throw Error();
                            } catch (e) {
                                c = void 0
                            }
                            p(200, "success", {iframe: c});
                            b('<iframe src="' + a + '"></iframe>').appendTo(d);
                            window.setTimeout(function () {
                                d.remove()
                            }, 0)
                        });
                        d.prop("target", k.prop("name")).prop("action", c.url).prop("method",
                            c.type);
                        c.formData && b.each(c.formData, function (a, c) {
                            b('<input type="hidden"/>').prop("name", c.name).val(c.value).appendTo(d)
                        });
                        c.fileInput && c.fileInput.length && "POST" === c.type && (e = c.fileInput.clone(), c.fileInput.after(function (a) {
                            return e[a]
                        }), c.paramName && c.fileInput.each(function (a) {
                            b(this).prop("name", f[a] || c.paramName)
                        }), d.append(c.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), c.fileInput.removeAttr("form"));
                        d.submit();
                        e && e.length && c.fileInput.each(function (a,
                                                                    c) {
                            var d = b(e[a]);
                            b(c).prop("name", d.prop("name")).attr("form", d.attr("form"));
                            d.replaceWith(c)
                        })
                    });
                    d.append(k).appendTo(document.body)
                }, abort: function () {
                    k && k.unbind("load").prop("src", a);
                    d && d.remove()
                }
            }
        }
    });
    b.ajaxSetup({
        converters: {
            "iframe text": function (c) {
                return c && b(c[0].body).text()
            }, "iframe json": function (c) {
                return c && b.parseJSON(b(c[0].body).text())
            }, "iframe html": function (c) {
                return c && b(c[0].body).html()
            }, "iframe xml": function (c) {
                return (c = c && c[0]) && b.isXMLDoc(c) ? c : b.parseXML(c.XMLDocument &&
                    c.XMLDocument.xml || b(c.body).html())
            }, "iframe script": function (c) {
                return c && b.globalEval(b(c[0].body).text())
            }
        }
    })
});
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
})(function (b) {
    var e = 0, c = Array.prototype.slice;
    b.cleanData = function (a) {
        return function (c) {
            var e, h, f;
            for (f = 0; null != (h = c[f]); f++)try {
                (e = b._data(h, "events")) && e.remove && b(h).triggerHandler("remove")
            } catch (p) {
            }
            a(c)
        }
    }(b.cleanData);
    b.widget = function (a, c, e) {
        var h, f, p, r, m = {}, v = a.split(".")[0];
        a = a.split(".")[1];
        h = v + "-" + a;
        e || (e = c, c = b.Widget);
        b.expr[":"][h.toLowerCase()] = function (a) {
            return !!b.data(a, h)
        };
        b[v] = b[v] || {};
        f = b[v][a];
        p = b[v][a] = function (a, b) {
            if (!this._createWidget)return new p(a, b);
            arguments.length && this._createWidget(a, b)
        };
        b.extend(p, f, {version: e.version, _proto: b.extend({}, e), _childConstructors: []});
        r = new c;
        r.options = b.widget.extend({}, r.options);
        b.each(e, function (a, e) {
            b.isFunction(e) ? m[a] = function () {
                var b = function () {
                    return c.prototype[a].apply(this, arguments)
                }, f = function (b) {
                    return c.prototype[a].apply(this, b)
                };
                return function () {
                    var a = this._super, c = this._superApply, d;
                    this._super = b;
                    this._superApply = f;
                    d = e.apply(this,
                        arguments);
                    this._super = a;
                    this._superApply = c;
                    return d
                }
            }() : m[a] = e
        });
        p.prototype = b.widget.extend(r, {widgetEventPrefix: f ? r.widgetEventPrefix || a : a}, m, {
            constructor: p,
            namespace: v,
            widgetName: a,
            widgetFullName: h
        });
        f ? (b.each(f._childConstructors, function (a, c) {
            var d = c.prototype;
            b.widget(d.namespace + "." + d.widgetName, p, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(p);
        b.widget.bridge(a, p);
        return p
    };
    b.widget.extend = function (a) {
        for (var d = c.call(arguments, 1), e = 0, h = d.length, f, p; e < h; e++)for (f in d[e])p =
            d[e][f], d[e].hasOwnProperty(f) && void 0 !== p && (b.isPlainObject(p) ? a[f] = b.isPlainObject(a[f]) ? b.widget.extend({}, a[f], p) : b.widget.extend({}, p) : a[f] = p);
        return a
    };
    b.widget.bridge = function (a, d) {
        var e = d.prototype.widgetFullName || a;
        b.fn[a] = function (h) {
            var f = "string" === typeof h, p = c.call(arguments, 1), r = this;
            h = !f && p.length ? b.widget.extend.apply(null, [h].concat(p)) : h;
            f ? this.each(function () {
                var c, d = b.data(this, e);
                if ("instance" === h)return r = d, !1;
                if (!d)return b.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" +
                    h + "'");
                if (!b.isFunction(d[h]) || "_" === h.charAt(0))return b.error("no such method '" + h + "' for " + a + " widget instance");
                c = d[h].apply(d, p);
                if (c !== d && void 0 !== c)return r = c && c.jquery ? r.pushStack(c.get()) : c, !1
            }) : this.each(function () {
                var a = b.data(this, e);
                a ? (a.option(h || {}), a._init && a._init()) : b.data(this, e, new d(h, this))
            });
            return r
        }
    };
    b.Widget = function () {
    };
    b.Widget._childConstructors = [];
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (a,
                                 c) {
            c = b(c || this.defaultElement || this)[0];
            this.element = b(c);
            this.uuid = e++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = b.widget.extend({}, this.options, this._getCreateOptions(), a);
            this.bindings = b();
            this.hoverable = b();
            this.focusable = b();
            c !== this && (b.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (a) {
                    a.target === c && this.destroy()
                }
            }), this.document = b(c.style ? c.ownerDocument : c.document || c), this.window = b(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function () {
            return this.element
        },
        option: function (a, c) {
            var e = a, h, f, p;
            if (0 === arguments.length)return b.widget.extend({}, this.options);
            if ("string" === typeof a)if (e = {}, h = a.split("."), a = h.shift(), h.length) {
                f = e[a] = b.widget.extend({}, this.options[a]);
                for (p = 0; p < h.length - 1; p++)f[h[p]] = f[h[p]] || {}, f = f[h[p]];
                a = h.pop();
                if (1 === arguments.length)return void 0 === f[a] ? null : f[a];
                f[a] = c
            } else {
                if (1 === arguments.length)return void 0 === this.options[a] ? null :
                    this.options[a];
                e[a] = c
            }
            this._setOptions(e);
            return this
        },
        _setOptions: function (a) {
            for (var b in a)this._setOption(b, a[b]);
            return this
        },
        _setOption: function (a, b) {
            this.options[a] = b;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")));
            return this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (a, c, e) {
            var h,
                f = this;
            "boolean" !== typeof a && (e = c, c = a, a = !1);
            e ? (c = h = b(c), this.bindings = this.bindings.add(c)) : (e = c, c = this.element, h = this.widget());
            b.each(e, function (e, k) {
                function m() {
                    if (a || !0 !== f.options.disabled && !b(this).hasClass("ui-state-disabled"))return ("string" === typeof k ? f[k] : k).apply(f, arguments)
                }

                "string" !== typeof k && (m.guid = k.guid = k.guid || m.guid || b.guid++);
                var v = e.match(/^([\w:-]*)\s*(.*)$/), w = v[1] + f.eventNamespace;
                (v = v[2]) ? h.delegate(v, w, m) : c.bind(w, m)
            })
        },
        _off: function (a, b) {
            b = (b || "").split(" ").join(this.eventNamespace +
                    " ") + this.eventNamespace;
            a.unbind(b).undelegate(b)
        },
        _delay: function (a, b) {
            var c = this;
            return setTimeout(function () {
                return ("string" === typeof a ? c[a] : a).apply(c, arguments)
            }, b || 0)
        },
        _hoverable: function (a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function (a) {
                    b(a.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (a) {
                    b(a.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (a) {
            this.focusable = this.focusable.add(a);
            this._on(a, {
                focusin: function (a) {
                    b(a.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (a) {
                    b(a.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (a, c, e) {
            var h, f = this.options[a];
            e = e || {};
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            c.target = this.element[0];
            if (a = c.originalEvent)for (h in a)h in c || (c[h] = a[h]);
            this.element.trigger(c, e);
            return !(b.isFunction(f) && !1 === f.apply(this.element[0], [c].concat(e)) || c.isDefaultPrevented())
        }
    };
    b.each({show: "fadeIn", hide: "fadeOut"}, function (a, c) {
        b.Widget.prototype["_" + a] = function (e,
                                                h, f) {
            "string" === typeof h && (h = {effect: h});
            var p, r = h ? !0 === h || "number" === typeof h ? c : h.effect || c : a;
            h = h || {};
            "number" === typeof h && (h = {duration: h});
            p = !b.isEmptyObject(h);
            h.complete = f;
            h.delay && e.delay(h.delay);
            if (p && b.effects && b.effects.effect[r])e[a](h); else if (r !== a && e[r])e[r](h.duration, h.easing, f); else e.queue(function (c) {
                b(this)[a]();
                f && f.call(e[0]);
                c()
            })
        }
    })
});
(function (b) {
    "function" === typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], b) : "object" === typeof exports ? b(require("jquery"), require("./vendor/jquery.ui.widget")) : b(window.jQuery)
})(function (b) {
    function e(c) {
        var a = "dragover" === c;
        return function (d) {
            d.dataTransfer = d.originalEvent && d.originalEvent.dataTransfer;
            var e = d.dataTransfer;
            e && -1 !== b.inArray("Files", e.types) && !1 !== this._trigger(c, b.Event(c, {delegatedEvent: d})) && (d.preventDefault(), a && (e.dropEffect = "copy"))
        }
    }

    b.support.fileInput = !(/(Android (1\.[0156]|2\.[01]))|(Windows Phone (OS 7|8\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1\.0|2\.[05]|3\.0))/.test(window.navigator.userAgent) ||
    b('<input type="file">').prop("disabled"));
    b.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader);
    b.support.xhrFormDataFileUpload = !!window.FormData;
    b.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    b.widget("blueimp.fileupload", {
        options: {
            dropZone: b(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {uploadedBytes: "Uploaded bytes exceed file size"},
            i18n: function (c, a) {
                c = this.messages[c] || c.toString();
                a && b.each(a, function (a, b) {
                    c = c.replace("{" + a + "}", b)
                });
                return c
            },
            formData: function (b) {
                return b.serializeArray()
            },
            add: function (c,
                           a) {
                if (c.isDefaultPrevented())return !1;
                (a.autoUpload || !1 !== a.autoUpload && b(this).fileupload("option", "autoUpload")) && a.process().done(function () {
                    a.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1,
            timeout: 0
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: b.support.blobSlice && function () {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        },
        _BitrateTimer: function () {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime();
            this.bitrate =
                this.loaded = 0;
            this.getBitrate = function (b, a, d) {
                var e = b - this.timestamp;
                if (!this.bitrate || !d || e > d)this.bitrate = 1E3 / e * (a - this.loaded) * 8, this.loaded = a, this.timestamp = b;
                return this.bitrate
            }
        },
        _isXHRUpload: function (c) {
            return !c.forceIframeTransport && (!c.multipart && b.support.xhrFileUpload || b.support.xhrFormDataFileUpload)
        },
        _getFormData: function (c) {
            var a;
            return "function" === b.type(c.formData) ? c.formData(c.form) : b.isArray(c.formData) ? c.formData : "object" === b.type(c.formData) ? (a = [], b.each(c.formData, function (b,
                                                                                                                                                                                         c) {
                a.push({name: b, value: c})
            }), a) : []
        },
        _getTotal: function (c) {
            var a = 0;
            b.each(c, function (b, c) {
                a += c.size || 1
            });
            return a
        },
        _initProgressObject: function (c) {
            var a = {loaded: 0, total: 0, bitrate: 0};
            c._progress ? b.extend(c._progress, a) : c._progress = a
        },
        _initResponseObject: function (b) {
            var a;
            if (b._response)for (a in b._response)b._response.hasOwnProperty(a) && delete b._response[a]; else b._response = {}
        },
        _onProgress: function (c, a) {
            if (c.lengthComputable) {
                var d = Date.now ? Date.now() : (new Date).getTime(), e;
                a._time && a.progressInterval &&
                d - a._time < a.progressInterval && c.loaded !== c.total || (a._time = d, e = Math.floor(c.loaded / c.total * (a.chunkSize || a._progress.total)) + (a.uploadedBytes || 0), this._progress.loaded += e - a._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(d, this._progress.loaded, a.bitrateInterval), a._progress.loaded = a.loaded = e, a._progress.bitrate = a.bitrate = a._bitrateTimer.getBitrate(d, e, a.bitrateInterval), this._trigger("progress", b.Event("progress", {delegatedEvent: c}), a), this._trigger("progressall", b.Event("progressall",
                    {delegatedEvent: c}), this._progress))
            }
        },
        _initProgressListener: function (c) {
            var a = this, d = c.xhr ? c.xhr() : b.ajaxSettings.xhr();
            d.upload && (b(d.upload).bind("progress", function (b) {
                var d = b.originalEvent;
                b.lengthComputable = d.lengthComputable;
                b.loaded = d.loaded;
                b.total = d.total;
                a._onProgress(b, c)
            }), c.xhr = function () {
                return d
            })
        },
        _isInstanceOf: function (b, a) {
            return Object.prototype.toString.call(a) === "[object " + b + "]"
        },
        _initXHRData: function (c) {
            var a = this, d, e = c.files[0], h = c.multipart || !b.support.xhrFileUpload, f = "array" ===
            b.type(c.paramName) ? c.paramName[0] : c.paramName;
            c.headers = b.extend({}, c.headers);
            c.contentRange && (c.headers["Content-Range"] = c.contentRange);
            h && !c.blob && this._isInstanceOf("File", e) || (c.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(e.name) + '"');
            h ? b.support.xhrFormDataFileUpload && (c.postMessage ? (d = this._getFormData(c), c.blob ? d.push({
                name: f,
                value: c.blob
            }) : b.each(c.files, function (a, e) {
                d.push({name: "array" === b.type(c.paramName) && c.paramName[a] || f, value: e})
            })) : (a._isInstanceOf("FormData",
                c.formData) ? d = c.formData : (d = new FormData, b.each(this._getFormData(c), function (a, b) {
                d.append(b.name, b.value)
            })), c.blob ? d.append(f, c.blob, e.name) : b.each(c.files, function (e, h) {
                (a._isInstanceOf("File", h) || a._isInstanceOf("Blob", h)) && d.append("array" === b.type(c.paramName) && c.paramName[e] || f, h, h.uploadName || h.name)
            })), c.data = d) : (c.contentType = e.type || "application/octet-stream", c.data = c.blob || e);
            c.blob = null
        },
        _initIframeSettings: function (c) {
            var a = b("<a></a>").prop("href", c.url).prop("host");
            c.dataType = "iframe " +
                (c.dataType || "");
            c.formData = this._getFormData(c);
            c.redirect && a && a !== location.host && c.formData.push({
                name: c.redirectParamName || "redirect",
                value: c.redirect
            })
        },
        _initDataSettings: function (b) {
            this._isXHRUpload(b) ? (this._chunkedUpload(b, !0) || (b.data || this._initXHRData(b), this._initProgressListener(b)), b.postMessage && (b.dataType = "postmessage " + (b.dataType || ""))) : this._initIframeSettings(b)
        },
        _getParamName: function (c) {
            var a = b(c.fileInput), d = c.paramName;
            d ? b.isArray(d) || (d = [d]) : (d = [], a.each(function () {
                for (var a =
                    b(this), c = a.prop("name") || "files[]", a = (a.prop("files") || [1]).length; a;)d.push(c), --a
            }), d.length || (d = [a.prop("name") || "files[]"]));
            return d
        },
        _initFormSettings: function (c) {
            c.form && c.form.length || (c.form = b(c.fileInput.prop("form")), c.form.length || (c.form = b(this.options.fileInput.prop("form"))));
            c.paramName = this._getParamName(c);
            c.url || (c.url = c.form.prop("action") || location.href);
            c.type = (c.type || "string" === b.type(c.form.prop("method")) && c.form.prop("method") || "").toUpperCase();
            "POST" !== c.type && "PUT" !==
            c.type && "PATCH" !== c.type && (c.type = "POST");
            c.formAcceptCharset || (c.formAcceptCharset = c.form.attr("accept-charset"))
        },
        _getAJAXSettings: function (c) {
            c = b.extend({}, this.options, c);
            this._initFormSettings(c);
            this._initDataSettings(c);
            return c
        },
        _getDeferredState: function (b) {
            return b.state ? b.state() : b.isResolved() ? "resolved" : b.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function (b) {
            b.success = b.done;
            b.error = b.fail;
            b.complete = b.always;
            return b
        },
        _getXHRPromise: function (c, a, d) {
            var e = b.Deferred(), h = e.promise();
            a = a || this.options.context || h;
            !0 === c ? e.resolveWith(a, d) : !1 === c && e.rejectWith(a, d);
            h.abort = e.promise;
            return this._enhancePromise(h)
        },
        _addConvenienceMethods: function (c, a) {
            var d = this, e = function (a) {
                return b.Deferred().resolveWith(d, a).promise()
            };
            a.process = function (c, f) {
                if (c || f)a._processQueue = this._processQueue = (this._processQueue || e([this])).pipe(function () {
                    return a.errorThrown ? b.Deferred().rejectWith(d, [a]).promise() : e(arguments)
                }).pipe(c, f);
                return this._processQueue || e([this])
            };
            a.submit = function () {
                "pending" !==
                this.state() && (a.jqXHR = this.jqXHR = !1 !== d._trigger("submit", b.Event("submit", {delegatedEvent: c}), this) && d._onSend(c, this));
                return this.jqXHR || d._getXHRPromise()
            };
            a.abort = function () {
                if (this.jqXHR)return this.jqXHR.abort();
                this.errorThrown = "abort";
                d._trigger("fail", null, this);
                return d._getXHRPromise(!1)
            };
            a.state = function () {
                if (this.jqXHR)return d._getDeferredState(this.jqXHR);
                if (this._processQueue)return d._getDeferredState(this._processQueue)
            };
            a.processing = function () {
                return !this.jqXHR && this._processQueue &&
                    "pending" === d._getDeferredState(this._processQueue)
            };
            a.progress = function () {
                return this._progress
            };
            a.response = function () {
                return this._response
            }
        },
        _getUploadedBytes: function (b) {
            return (b = (b = (b = b.getResponseHeader("Range")) && b.split("-")) && 1 < b.length && parseInt(b[1], 10)) && b + 1
        },
        _chunkedUpload: function (c, a) {
            c.uploadedBytes = c.uploadedBytes || 0;
            var d = this, e = c.files[0], h = e.size, f = c.uploadedBytes, p = c.maxChunkSize || h, r = this._blobSlice, m = b.Deferred(), v = m.promise(), w, x;
            if (!(this._isXHRUpload(c) && r && (f || p < h)) || c.data)return !1;
            if (a)return !0;
            if (f >= h)return e.error = c.i18n("uploadedBytes"), this._getXHRPromise(!1, c.context, [null, "error", e.error]);
            x = function () {
                var a = b.extend({}, c), q = a._progress.loaded;
                a.blob = r.call(e, f, f + p, e.type);
                a.chunkSize = a.blob.size;
                a.contentRange = "bytes " + f + "-" + (f + a.chunkSize - 1) + "/" + h;
                d._initXHRData(a);
                d._initProgressListener(a);
                w = (!1 !== d._trigger("chunksend", null, a) && b.ajax(a) || d._getXHRPromise(!1, a.context)).done(function (e, k, p) {
                    f = d._getUploadedBytes(p) || f + a.chunkSize;
                    q + a.chunkSize - a._progress.loaded &&
                    d._onProgress(b.Event("progress", {
                        lengthComputable: !0,
                        loaded: f - a.uploadedBytes,
                        total: f - a.uploadedBytes
                    }), a);
                    c.uploadedBytes = a.uploadedBytes = f;
                    a.result = e;
                    a.textStatus = k;
                    a.jqXHR = p;
                    d._trigger("chunkdone", null, a);
                    d._trigger("chunkalways", null, a);
                    f < h ? x() : m.resolveWith(a.context, [e, k, p])
                }).fail(function (b, c, e) {
                    a.jqXHR = b;
                    a.textStatus = c;
                    a.errorThrown = e;
                    d._trigger("chunkfail", null, a);
                    d._trigger("chunkalways", null, a);
                    m.rejectWith(a.context, [b, c, e])
                })
            };
            this._enhancePromise(v);
            v.abort = function () {
                return w.abort()
            };
            x();
            return v
        },
        _beforeSend: function (b, a) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0);
            this._initResponseObject(a);
            this._initProgressObject(a);
            a._progress.loaded = a.loaded = a.uploadedBytes || 0;
            a._progress.total = a.total = this._getTotal(a.files) || 1;
            a._progress.bitrate = a.bitrate = 0;
            this._active += 1;
            this._progress.loaded += a.loaded;
            this._progress.total += a.total
        },
        _onDone: function (c, a, d, e) {
            var h = e._progress.total,
                f = e._response;
            e._progress.loaded < h && this._onProgress(b.Event("progress", {
                lengthComputable: !0,
                loaded: h,
                total: h
            }), e);
            f.result = e.result = c;
            f.textStatus = e.textStatus = a;
            f.jqXHR = e.jqXHR = d;
            this._trigger("done", null, e)
        },
        _onFail: function (b, a, d, e) {
            var h = e._response;
            e.recalculateProgress && (this._progress.loaded -= e._progress.loaded, this._progress.total -= e._progress.total);
            h.jqXHR = e.jqXHR = b;
            h.textStatus = e.textStatus = a;
            h.errorThrown = e.errorThrown = d;
            this._trigger("fail", null, e)
        },
        _onAlways: function (b, a, d, e) {
            this._trigger("always",
                null, e)
        },
        _onSend: function (c, a) {
            a.submit || this._addConvenienceMethods(c, a);
            var d = this, e, h, f, p, r = d._getAJAXSettings(a), m = function () {
                d._sending += 1;
                r._bitrateTimer = new d._BitrateTimer;
                return e = e || ((h || !1 === d._trigger("send", b.Event("send", {delegatedEvent: c}), r)) && d._getXHRPromise(!1, r.context, h) || d._chunkedUpload(r) || b.ajax(r)).done(function (a, b, c) {
                        d._onDone(a, b, c, r)
                    }).fail(function (a, b, c) {
                        d._onFail(a, b, c, r)
                    }).always(function (a, b, c) {
                        d._onAlways(a, b, c, r);
                        --d._sending;
                        --d._active;
                        if (r.limitConcurrentUploads &&
                            r.limitConcurrentUploads > d._sending)for (a = d._slots.shift(); a;) {
                            if ("pending" === d._getDeferredState(a)) {
                                a.resolve();
                                break
                            }
                            a = d._slots.shift()
                        }
                        0 === d._active && d._trigger("stop")
                    })
            };
            this._beforeSend(c, r);
            return this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (1 < this.options.limitConcurrentUploads ? (f = b.Deferred(), this._slots.push(f), p = f.pipe(m)) : p = this._sequence = this._sequence.pipe(m, m), p.abort = function () {
                h = [void 0, "abort", "abort"];
                return e ? e.abort() : (f && f.rejectWith(r.context, h), m())
            }, this._enhancePromise(p)) : m()
        },
        _onAdd: function (c, a) {
            var d = this, e = !0, h = b.extend({}, this.options, a), f = a.files, p = f.length, r = h.limitMultiFileUploads, m = h.limitMultiFileUploadSize, v = h.limitMultiFileUploadSizeOverhead, w = 0, x = this._getParamName(h), n, q, l = 0;
            if (!p)return !1;
            m && void 0 === f[0].size && (m = void 0);
            if ((h.singleFileUploads || r || m) && this._isXHRUpload(h))if (h.singleFileUploads || m || !r)if (!h.singleFileUploads && m)for (q = [], n = [], h = 0; h < p; h += 1) {
                if (w += f[h].size +
                        v, h + 1 === p || w + f[h + 1].size + v > m || r && h + 1 - l >= r)q.push(f.slice(l, h + 1)), w = x.slice(l, h + 1), w.length || (w = x), n.push(w), l = h + 1, w = 0
            } else n = x; else for (q = [], n = [], h = 0; h < p; h += r)q.push(f.slice(h, h + r)), w = x.slice(h, h + r), w.length || (w = x), n.push(w); else q = [f], n = [x];
            a.originalFiles = f;
            b.each(q || f, function (f, h) {
                var m = b.extend({}, a);
                m.files = q ? h : [h];
                m.paramName = n[f];
                d._initResponseObject(m);
                d._initProgressObject(m);
                d._addConvenienceMethods(c, m);
                return e = d._trigger("add", b.Event("add", {delegatedEvent: c}), m)
            });
            return e
        },
        _replaceFileInput: function (c) {
            var a =
                c.fileInput, d = a.clone(!0), e = a.is(document.activeElement);
            c.fileInputClone = d;
            b("<form></form>").append(d)[0].reset();
            a.after(d).detach();
            e && d.focus();
            b.cleanData(a.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function (b, c) {
                return c === a[0] ? d[0] : c
            });
            a[0] === this.element[0] && (this.element = d)
        },
        _handleFileTreeEntry: function (c, a) {
            var d = this, e = b.Deferred(), h = function (a) {
                    a && !a.entry && (a.entry = c);
                    e.resolve([a])
                }, f = function (b) {
                    d._handleFileTreeEntries(b, a + c.name + "/").done(function (a) {
                        e.resolve(a)
                    }).fail(h)
                },
                p = function () {
                    r.readEntries(function (a) {
                        a.length ? (m = m.concat(a), p()) : f(m)
                    }, h)
                }, r, m = [];
            a = a || "";
            c.isFile ? c._file ? (c._file.relativePath = a, e.resolve(c._file)) : c.file(function (b) {
                b.relativePath = a;
                e.resolve(b)
            }, h) : c.isDirectory ? (r = c.createReader(), p()) : e.resolve([]);
            return e.promise()
        },
        _handleFileTreeEntries: function (c, a) {
            var d = this;
            return b.when.apply(b, b.map(c, function (b) {
                return d._handleFileTreeEntry(b, a)
            })).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function (c) {
            c =
                c || {};
            var a = c.items;
            return a && a.length && (a[0].webkitGetAsEntry || a[0].getAsEntry) ? this._handleFileTreeEntries(b.map(a, function (a) {
                var b;
                if (a.webkitGetAsEntry) {
                    if (b = a.webkitGetAsEntry())b._file = a.getAsFile();
                    return b
                }
                return a.getAsEntry()
            })) : b.Deferred().resolve(b.makeArray(c.files)).promise()
        },
        _getSingleFileInputFiles: function (c) {
            c = b(c);
            var a = c.prop("webkitEntries") || c.prop("entries");
            if (a && a.length)return this._handleFileTreeEntries(a);
            a = b.makeArray(c.prop("files"));
            if (a.length)void 0 === a[0].name &&
            a[0].fileName && b.each(a, function (a, b) {
                b.name = b.fileName;
                b.size = b.fileSize
            }); else {
                c = c.prop("value");
                if (!c)return b.Deferred().resolve([]).promise();
                a = [{name: c.replace(/^.*\\/, "")}]
            }
            return b.Deferred().resolve(a).promise()
        },
        _getFileInputFiles: function (c) {
            return c instanceof b && 1 !== c.length ? b.when.apply(b, b.map(c, this._getSingleFileInputFiles)).pipe(function () {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(c)
        },
        _onChange: function (c) {
            var a = this, d = {
                fileInput: b(c.target),
                form: b(c.target.form)
            };
            this._getFileInputFiles(d.fileInput).always(function (e) {
                d.files = e;
                a.options.replaceFileInput && a._replaceFileInput(d);
                !1 !== a._trigger("change", b.Event("change", {delegatedEvent: c}), d) && a._onAdd(c, d)
            })
        },
        _onPaste: function (c) {
            var a = c.originalEvent && c.originalEvent.clipboardData && c.originalEvent.clipboardData.items, d = {files: []};
            a && a.length && (b.each(a, function (a, b) {
                var c = b.getAsFile && b.getAsFile();
                c && d.files.push(c)
            }), !1 !== this._trigger("paste", b.Event("paste", {delegatedEvent: c}),
                d) && this._onAdd(c, d))
        },
        _onDrop: function (c) {
            c.dataTransfer = c.originalEvent && c.originalEvent.dataTransfer;
            var a = this, d = c.dataTransfer, e = {};
            d && d.files && d.files.length && (c.preventDefault(), this._getDroppedFiles(d).always(function (d) {
                e.files = d;
                !1 !== a._trigger("drop", b.Event("drop", {delegatedEvent: c}), e) && a._onAdd(c, e)
            }))
        },
        _onDragOver: e("dragover"),
        _onDragEnter: e("dragenter"),
        _onDragLeave: e("dragleave"),
        _initEventHandlers: function () {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop, dragenter: this._onDragEnter, dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {paste: this._onPaste}));
            b.support.fileInput && this._on(this.options.fileInput, {change: this._onChange})
        },
        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop");
            this._off(this.options.pasteZone, "paste");
            this._off(this.options.fileInput, "change")
        },
        _setOption: function (c, a) {
            var d = -1 !== b.inArray(c, this._specialOptions);
            d && this._destroyEventHandlers();
            this._super(c, a);
            d && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function () {
            var c = this.options;
            void 0 === c.fileInput ? c.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : c.fileInput instanceof b || (c.fileInput = b(c.fileInput));
            c.dropZone instanceof b || (c.dropZone = b(c.dropZone));
            c.pasteZone instanceof b || (c.pasteZone = b(c.pasteZone))
        },
        _getRegExp: function (b) {
            b = b.split("/");
            var a = b.pop();
            b.shift();
            return new RegExp(b.join("/"),
                a)
        },
        _isRegExpOption: function (c, a) {
            return "url" !== c && "string" === b.type(a) && /^\/.*\/[igm]{0,3}$/.test(a)
        },
        _initDataAttributes: function () {
            var c = this, a = this.options, d = this.element.data();
            b.each(this.element[0].attributes, function (b, e) {
                var f = e.name.toLowerCase(), p;
                /^data-/.test(f) && (f = f.slice(5).replace(/-[a-z]/g, function (a) {
                    return a.charAt(1).toUpperCase()
                }), p = d[f], c._isRegExpOption(f, p) && (p = c._getRegExp(p)), a[f] = p)
            })
        },
        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots =
                [];
            this._sequence = this._getXHRPromise(!0);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers()
        },
        active: function () {
            return this._active
        },
        progress: function () {
            return this._progress
        },
        add: function (c) {
            var a = this;
            c && !this.options.disabled && (c.fileInput && !c.files ? this._getFileInputFiles(c.fileInput).always(function (b) {
                c.files = b;
                a._onAdd(null, c)
            }) : (c.files = b.makeArray(c.files), this._onAdd(null, c)))
        },
        send: function (c) {
            if (c && !this.options.disabled) {
                if (c.fileInput && !c.files) {
                    var a =
                        this, d = b.Deferred(), e = d.promise(), h, f;
                    e.abort = function () {
                        f = !0;
                        if (h)return h.abort();
                        d.reject(null, "abort", "abort");
                        return e
                    };
                    this._getFileInputFiles(c.fileInput).always(function (b) {
                        f || (b.length ? (c.files = b, h = a._onSend(null, c), h.then(function (a, b, c) {
                            d.resolve(a, b, c)
                        }, function (a, b, c) {
                            d.reject(a, b, c)
                        })) : d.reject())
                    });
                    return this._enhancePromise(e)
                }
                c.files = b.makeArray(c.files);
                if (c.files.length)return this._onSend(null, c)
            }
            return this._getXHRPromise(!1, c && c.context)
        }
    })
});
!function (b) {
    b.flexslider = function (e, c) {
        var a = b(e);
        a.vars = b.extend({}, b.flexslider.defaults, c);
        var d, k = a.vars.namespace, h = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, f = ("ontouchstart" in window || h || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch, p = "", r = "vertical" === a.vars.direction, m = a.vars.reverse, v = 0 < a.vars.itemWidth, w = "fade" === a.vars.animation, x = "" !== a.vars.asNavFor, n = {};
        b.data(e, "flexslider", a);
        n = {
            init: function () {
                a.animating = !1;
                a.currentSlide = parseInt(a.vars.startAt ?
                    a.vars.startAt : 0, 10);
                isNaN(a.currentSlide) && (a.currentSlide = 0);
                a.animatingTo = a.currentSlide;
                a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
                a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" "));
                a.slides = b(a.vars.selector, a);
                a.container = b(a.containerSelector, a);
                a.count = a.slides.length;
                a.syncExists = 0 < b(a.vars.sync).length;
                "slide" === a.vars.animation && (a.vars.animation = "swing");
                a.prop = r ? "top" : a.vars.rtl ? "marginRight" : "marginLeft";
                a.args = {};
                a.manualPause = !1;
                a.stopped = !1;
                a.started = !1;
                a.startTimeout = null;
                a.transitions = !a.vars.video && !w && a.vars.useCSS && function () {
                        var b = document.createElement("div"), c = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], d;
                        for (d in c)if (void 0 !== b.style[c[d]])return a.pfx = c[d].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
                        return !1
                    }();
                a.ensureAnimationEnd = "";
                "" !== a.vars.controlsContainer && (a.controlsContainer = 0 < b(a.vars.controlsContainer).length && b(a.vars.controlsContainer));
                "" !==
                a.vars.manualControls && (a.manualControls = 0 < b(a.vars.manualControls).length && b(a.vars.manualControls));
                "" !== a.vars.customDirectionNav && (a.customDirectionNav = 2 === b(a.vars.customDirectionNav).length && b(a.vars.customDirectionNav));
                a.vars.randomize && (a.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), a.container.empty().append(a.slides));
                a.doMath();
                a.setup("init");
                a.vars.controlNav && n.controlNav.setup();
                a.vars.directionNav && n.directionNav.setup();
                a.vars.keyboard && (1 === b(a.containerSelector).length ||
                a.vars.multipleKeyboard) && b(document).bind("keyup", function (b) {
                    b = b.keyCode;
                    a.animating || 39 !== b && 37 !== b || (b = a.vars.rtl ? 37 === b ? a.getTarget("next") : 39 === b ? a.getTarget("prev") : !1 : 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1, a.flexAnimate(b, a.vars.pauseOnAction))
                });
                a.vars.mousewheel && a.bind("mousewheel", function (b, c) {
                    b.preventDefault();
                    var d = a.getTarget(0 > c ? "next" : "prev");
                    a.flexAnimate(d, a.vars.pauseOnAction)
                });
                a.vars.pausePlay && n.pausePlay.setup();
                a.vars.slideshow && a.vars.pauseInvisible &&
                n.pauseInvisible.init();
                a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function () {
                    a.manualPlay || a.manualPause || a.pause()
                }, function () {
                    a.manualPause || a.manualPlay || a.stopped || a.play()
                }), a.vars.pauseInvisible && n.pauseInvisible.isHidden() || (0 < a.vars.initDelay ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play()));
                x && n.asNav.setup();
                f && a.vars.touch && n.touch();
                (!w || w && a.vars.smoothHeight) && b(window).bind("resize orientationchange focus", n.resize);
                a.find("img").attr("draggable", "false");
                setTimeout(function () {
                        a.vars.start(a)
                    },
                    200)
            }, asNav: {
                setup: function () {
                    a.asNav = !0;
                    a.animatingTo = Math.floor(a.currentSlide / a.move);
                    a.currentItem = a.currentSlide;
                    a.slides.removeClass(k + "active-slide").eq(a.currentItem).addClass(k + "active-slide");
                    h ? (e._slider = a, a.slides.each(function () {
                        this._gesture = new MSGesture;
                        this._gesture.target = this;
                        this.addEventListener("MSPointerDown", function (a) {
                            a.preventDefault();
                            a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                        }, !1);
                        this.addEventListener("MSGestureTap", function (c) {
                            c.preventDefault();
                            c = b(this);
                            var d = c.index();
                            b(a.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (a.direction = a.currentItem < d ? "next" : "prev", a.flexAnimate(d, a.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : a.slides.on("click touchend MSPointerUp keyup", function (c) {
                        c.preventDefault();
                        c = b(this);
                        var d = c.index();
                        0 >= (a.vars.rtl ? -1 * (c.offset().right - b(a).scrollLeft()) : c.offset().left - b(a).scrollLeft()) && c.hasClass(k + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : b(a.vars.asNavFor).data("flexslider").animating ||
                        c.hasClass(k + "active-slide") || (a.direction = a.currentItem < d ? "next" : "prev", a.flexAnimate(d, a.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    a.manualControls ? n.controlNav.setupManual() : n.controlNav.setupPaging()
                }, setupPaging: function () {
                    var c, d, e = 1;
                    if (a.controlNavScaffold = b('<ol class="' + k + "control-nav " + k + ("thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging") + '"></ol>'), 1 < a.pagingCount)for (var f = 0; f < a.pagingCount; f++) {
                        if (d = a.slides.eq(f), c = "thumbnails" === a.vars.controlNav ?
                            '<img src="' + d.attr("data-thumb") + '"/>' : "<a>" + e + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions) {
                            var h = d.attr("data-thumbcaption");
                            "" !== h && void 0 !== h && (c += '<span class="' + k + 'caption">' + h + "</span>")
                        }
                        a.controlNavScaffold.append("<li>" + c + "</li>");
                        e++
                    }
                    a.controlsContainer ? b(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                    n.controlNav.set();
                    n.controlNav.active();
                    a.controlNavScaffold.delegate("a, img", "click touchend MSPointerUp keyup", function (c) {
                        if (c.preventDefault(),
                            "" === p || p === c.type) {
                            var d = b(this), e = a.controlNav.index(d);
                            d.hasClass(k + "active") || (a.direction = e > a.currentSlide ? "next" : "prev", a.flexAnimate(e, a.vars.pauseOnAction))
                        }
                        "" === p && (p = c.type);
                        n.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    a.controlNav = a.manualControls;
                    n.controlNav.active();
                    a.controlNav.bind("click touchend MSPointerUp keyup", function (c) {
                        if (c.preventDefault(), "" === p || p === c.type) {
                            var d = b(this), e = a.controlNav.index(d);
                            d.hasClass(k + "active") || (a.direction = e > a.currentSlide ? "next" : "prev",
                                a.flexAnimate(e, a.vars.pauseOnAction))
                        }
                        "" === p && (p = c.type);
                        n.setToClearWatchedEvent()
                    })
                }, set: function () {
                    a.controlNav = b("." + k + "control-nav li " + ("thumbnails" === a.vars.controlNav ? "img" : "a"), a.controlsContainer ? a.controlsContainer : a)
                }, active: function () {
                    a.controlNav.removeClass(k + "active").eq(a.animatingTo).addClass(k + "active")
                }, update: function (c, d) {
                    1 < a.pagingCount && "add" === c ? a.controlNavScaffold.append(b("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(d).closest("li").remove();
                    n.controlNav.set();
                    1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(d, c) : n.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var c = b('<ul class="' + k + 'direction-nav"><li class="' + k + 'nav-prev"><a class="' + k + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + k + 'nav-next"><a class="' + k + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
                    a.customDirectionNav ? a.directionNav = a.customDirectionNav : a.controlsContainer ? (b(a.controlsContainer).append(c), a.directionNav = b("." + k + "direction-nav li a",
                        a.controlsContainer)) : (a.append(c), a.directionNav = b("." + k + "direction-nav li a", a));
                    n.directionNav.update();
                    a.directionNav.bind("click touchend MSPointerUp keyup", function (c) {
                        c.preventDefault();
                        var d;
                        "" !== p && p !== c.type || (d = a.getTarget(b(this).hasClass(k + "next") ? "next" : "prev"), a.flexAnimate(d, a.vars.pauseOnAction));
                        "" === p && (p = c.type);
                        n.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var b = k + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(b).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(b).removeAttr("tabindex") :
                        0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + k + "prev").addClass(b).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + k + "next").addClass(b).attr("tabindex", "-1") : a.directionNav.removeClass(b).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var c = b('<div class="' + k + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(c), a.pausePlay = b("." + k + "pauseplay a", a.controlsContainer)) : (a.append(c), a.pausePlay = b("." + k + "pauseplay a",
                        a));
                    n.pausePlay.update(a.vars.slideshow ? k + "pause" : k + "play");
                    a.pausePlay.bind("click touchend MSPointerUp keyup", function (c) {
                        c.preventDefault();
                        ("" === p || p === c.type) && (b(this).hasClass(k + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play()));
                        "" === p && (p = c.type);
                        n.setToClearWatchedEvent()
                    })
                }, update: function (b) {
                    "play" === b ? a.pausePlay.removeClass(k + "pause").addClass(k + "play").html(a.vars.playText) : a.pausePlay.removeClass(k + "play").addClass(k + "pause").html(a.vars.pauseText)
                }
            },
            touch: function () {
                function b(c) {
                    c.stopPropagation();
                    a.animating ? c.preventDefault() : (a.pause(), e._gesture.addPointer(c.pointerId), B = 0, p = r ? a.h : a.w, F = Number(new Date), n = v && m && a.animatingTo === a.last ? 0 : v && m ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : v && a.currentSlide === a.last ? a.limit : v ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : m ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p)
                }

                function c(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        var d = -a.translationX,
                            f = -a.translationY;
                        return B += r ? f : d, x = (b.vars.rtl ? -1 : 1) * B, N = r ? Math.abs(B) < Math.abs(-d) : Math.abs(B) < Math.abs(-f), a.detail === a.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            e._gesture.stop()
                        }) : void((!N || 500 < Number(new Date) - F) && (a.preventDefault(), !w && b.transitions && (b.vars.animationLoop || (x = B / (0 === b.currentSlide && 0 > B || b.currentSlide === b.last && 0 < B ? Math.abs(B) / p + 2 : 1)), b.setProps(n + x, "setTouch"))))
                    }
                }

                function d(a) {
                    a.stopPropagation();
                    if (a = a.target._slider) {
                        if (a.animatingTo === a.currentSlide && !N && null !==
                            x) {
                            var b = m ? -x : x, c = a.getTarget(0 < b ? "next" : "prev");
                            a.canAdvance(c) && (550 > Number(new Date) - F && 50 < Math.abs(b) || Math.abs(b) > p / 2) ? a.flexAnimate(c, a.vars.pauseOnAction) : w || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
                        }
                        n = x = k = f = null;
                        B = 0
                    }
                }

                var f, k, n, p, x, F, E, K, da, N = !1, Y = 0, T = 0, B = 0;
                h ? (e.style.msTouchAction = "none", e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", b, !1), e._slider = a, e.addEventListener("MSGestureChange", c, !1), e.addEventListener("MSGestureEnd", d, !1)) : (E = function (b) {
                    a.animating ?
                        b.preventDefault() : (window.navigator.msPointerEnabled || 1 === b.touches.length) && (a.pause(), p = r ? a.h : a.w, F = Number(new Date), Y = b.touches[0].pageX, T = b.touches[0].pageY, n = v && m && a.animatingTo === a.last ? 0 : v && m ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : v && a.currentSlide === a.last ? a.limit : v ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : m ? (a.last - a.currentSlide + a.cloneOffset) * p : (a.currentSlide + a.cloneOffset) * p, f = r ? T : Y, k = r ? Y : T, e.addEventListener("touchmove", K, !1), e.addEventListener("touchend",
                        da, !1))
                }, K = function (b) {
                    Y = b.touches[0].pageX;
                    T = b.touches[0].pageY;
                    x = r ? f - T : (a.vars.rtl ? -1 : 1) * (f - Y);
                    N = r ? Math.abs(x) < Math.abs(Y - k) : Math.abs(x) < Math.abs(T - k);
                    (!N || 500 < Number(new Date) - F) && (b.preventDefault(), !w && a.transitions && (a.vars.animationLoop || (x /= 0 === a.currentSlide && 0 > x || a.currentSlide === a.last && 0 < x ? Math.abs(x) / p + 2 : 1), a.setProps(n + x, "setTouch")))
                }, da = function () {
                    if (e.removeEventListener("touchmove", K, !1), a.animatingTo === a.currentSlide && !N && null !== x) {
                        var b = m ? -x : x, c = a.getTarget(0 < b ? "next" : "prev");
                        a.canAdvance(c) && (550 > Number(new Date) - F && 50 < Math.abs(b) || Math.abs(b) > p / 2) ? a.flexAnimate(c, a.vars.pauseOnAction) : w || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
                    }
                    e.removeEventListener("touchend", da, !1);
                    n = x = k = f = null
                }, e.addEventListener("touchstart", E, !1))
            }, resize: function () {
                !a.animating && a.is(":visible") && (v || a.doMath(), w ? n.smoothHeight() : v ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : r ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && n.smoothHeight(),
                    a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            }, smoothHeight: function (b) {
                if (!r || w) {
                    var c = w ? a : a.viewport;
                    b ? c.animate({height: a.slides.eq(a.animatingTo).height()}, b) : c.height(a.slides.eq(a.animatingTo).height())
                }
            }, sync: function (c) {
                var d = b(a.vars.sync).data("flexslider"), e = a.animatingTo;
                switch (c) {
                    case "animate":
                        d.flexAnimate(e, a.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        d.playing || d.asNav || d.play();
                        break;
                    case "pause":
                        d.pause()
                }
            }, uniqueID: function (a) {
                return a.filter("[id]").add(a.find("[id]")).each(function () {
                    var a =
                        b(this);
                    a.attr("id", a.attr("id") + "_clone")
                }), a
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var b = n.pauseInvisible.getHiddenProp();
                    b && (b = b.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, function () {
                        n.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : 0 < a.vars.initDelay ? setTimeout(a.play, a.vars.initDelay) : a.play()
                    }))
                }, isHidden: function () {
                    var a = n.pauseInvisible.getHiddenProp();
                    return a ? document[a] : !1
                }, getHiddenProp: function () {
                    var a =
                        ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document)return "hidden";
                    for (var b = 0; b < a.length; b++)if (a[b] + "Hidden" in document)return a[b] + "Hidden";
                    return null
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(d);
                d = setTimeout(function () {
                    p = ""
                }, 3E3)
            }
        };
        a.flexAnimate = function (c, d, e, h, p) {
            if (a.vars.animationLoop || c === a.currentSlide || (a.direction = c > a.currentSlide ? "next" : "prev"), x && 1 === a.pagingCount && (a.direction = a.currentItem < c ? "next" : "prev"), !a.animating && (a.canAdvance(c, p) || e) && a.is(":visible")) {
                if (x && h) {
                    e = b(a.vars.asNavFor).data("flexslider");
                    if (a.atEnd = 0 === c || c === a.count - 1, e.flexAnimate(c, !0, !1, !0, p), a.direction = a.currentItem < c ? "next" : "prev", e.direction = a.direction, Math.ceil((c + 1) / a.visible) - 1 === a.currentSlide || 0 === c)return a.currentItem = c, a.slides.removeClass(k + "active-slide").eq(c).addClass(k + "active-slide"), !1;
                    a.currentItem = c;
                    a.slides.removeClass(k + "active-slide").eq(c).addClass(k + "active-slide");
                    c = Math.floor(c / a.visible)
                }
                if (a.animating = !0, a.animatingTo = c, d && a.pause(), a.vars.before(a), a.syncExists && !p && n.sync("animate"), a.vars.controlNav &&
                    n.controlNav.active(), v || a.slides.removeClass(k + "active-slide").eq(c).addClass(k + "active-slide"), a.atEnd = 0 === c || c === a.last, a.vars.directionNav && n.directionNav.update(), c === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause()), w)f ? (a.slides.eq(a.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), a.slides.eq(c).css({
                    opacity: 1,
                    zIndex: 2
                }), a.wrapup(F)) : (a.slides.eq(a.currentSlide).css({zIndex: 1}).animate({opacity: 0}, a.vars.animationSpeed, a.vars.easing), a.slides.eq(c).css({zIndex: 2}).animate({opacity: 1}, a.vars.animationSpeed,
                    a.vars.easing, a.wrapup)); else {
                    var C, J, A, F = r ? a.slides.filter(":first").height() : a.computedW;
                    v ? (C = a.vars.itemMargin, A = (a.itemW + C) * a.move * a.animatingTo, J = A > a.limit && 1 !== a.visible ? a.limit : A) : J = 0 === a.currentSlide && c === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? m ? (a.count + a.cloneOffset) * F : 0 : a.currentSlide === a.last && 0 === c && a.vars.animationLoop && "prev" !== a.direction ? m ? 0 : (a.count + 1) * F : m ? (a.count - 1 - c + a.cloneOffset) * F : (c + a.cloneOffset) * F;
                    a.setProps(J, "", a.vars.animationSpeed);
                    a.transitions ? (a.vars.animationLoop &&
                    a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(a.ensureAnimationEnd);
                        a.wrapup(F)
                    }), clearTimeout(a.ensureAnimationEnd), a.ensureAnimationEnd = setTimeout(function () {
                        a.wrapup(F)
                    }, a.vars.animationSpeed + 100)) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function () {
                        a.wrapup(F)
                    })
                }
                a.vars.smoothHeight && n.smoothHeight(a.vars.animationSpeed)
            }
        };
        a.wrapup =
            function (b) {
                w || v || (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(b, "jumpStart"));
                a.animating = !1;
                a.currentSlide = a.animatingTo;
                a.vars.after(a)
            };
        a.animateSlides = function () {
            !a.animating && a.flexAnimate(a.getTarget("next"))
        };
        a.pause = function () {
            clearInterval(a.animatedSlides);
            a.animatedSlides = null;
            a.playing = !1;
            a.vars.pausePlay && n.pausePlay.update("play");
            a.syncExists && n.sync("pause")
        };
        a.play = function () {
            a.playing && clearInterval(a.animatedSlides);
            a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed);
            a.started = a.playing = !0;
            a.vars.pausePlay && n.pausePlay.update("pause");
            a.syncExists && n.sync("play")
        };
        a.stop = function () {
            a.pause();
            a.stopped = !0
        };
        a.canAdvance = function (b, c) {
            var d = x ? a.pagingCount - 1 : a.last;
            return c ? !0 : x && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : x && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b !== a.currentSlide ||
            x ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1 : !0 : !1
        };
        a.getTarget = function (b) {
            return a.direction = b, "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
        };
        a.setProps = function (b, c, d) {
            var e = function () {
                var d = b ? b : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo;
                return -1 * function () {
                        if (v)return "setTouch" === c ? b : m && a.animatingTo === a.last ? 0 : m ? a.limit - (a.itemW + a.vars.itemMargin) *
                        a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : d;
                        switch (c) {
                            case "setTotal":
                                return m ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b;
                            case "setTouch":
                                return b;
                            case "jumpEnd":
                                return m ? b : a.count * b;
                            case "jumpStart":
                                return m ? a.count * b : b;
                            default:
                                return b
                        }
                    }() + "px"
            }();
            a.transitions && (e = r ? "translate3d(0," + e + ",0)" : "translate3d(" + ((a.vars.rtl ? -1 : 1) * parseInt(e) + "px") + ",0,0)", d = void 0 !== d ? d / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", d), a.container.css("transition-duration",
                d));
            a.args[a.prop] = e;
            (a.transitions || void 0 === d) && a.container.css(a.args);
            a.container.css("transform", e)
        };
        a.setup = function (c) {
            if (w)a.slides.css({
                width: "100%",
                "float": a.vars.rtl ? "right" : "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === c && (f ? a.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + a.vars.animationSpeed / 1E3 + "s ease",
                zIndex: 1
            }).eq(a.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == a.vars.fadeFirstSlide ? a.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(a.currentSlide).css({zIndex: 2}).css({opacity: 1}) :
                a.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(a.currentSlide).css({zIndex: 2}).animate({opacity: 1}, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && n.smoothHeight(); else {
                var d, e;
                "init" === c && (a.viewport = b('<div class="' + k + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, m && (e = b.makeArray(a.slides).reverse(), a.slides = b(e), a.container.empty().append(a.slides)));
                a.vars.animationLoop && !v && (a.cloneCount = 2, a.cloneOffset =
                    1, "init" !== c && a.container.find(".clone").remove(), a.container.append(n.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(n.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true")));
                a.newSlides = b(a.vars.selector, a);
                d = m ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
                r && !v ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    a.newSlides.css({display: "block"});
                    a.doMath();
                    a.viewport.height(a.h);
                    a.setProps(d * a.h, "init")
                }, "init" === c ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(d * a.computedW, "init"), setTimeout(function () {
                    a.doMath();
                    a.newSlides.css({width: a.computedW, "float": a.vars.rtl ? "right" : "left", display: "block"});
                    a.vars.smoothHeight && n.smoothHeight()
                }, "init" === c ? 100 : 0))
            }
            v || a.slides.removeClass(k + "active-slide").eq(a.currentSlide).addClass(k + "active-slide");
            a.vars.init(a)
        };
        a.doMath = function () {
            var b = a.slides.first(), c = a.vars.itemMargin,
                d = a.vars.minItems, e = a.vars.maxItems;
            a.w = void 0 === a.viewport ? a.width() : a.viewport.width();
            a.h = b.height();
            a.boxPadding = b.outerWidth() - b.width();
            v ? (a.itemT = a.vars.itemWidth + c, a.minW = d ? d * a.itemT : a.w, a.maxW = e ? e * a.itemT - c : a.w, a.itemW = a.minW > a.w ? (a.w - c * (d - 1)) / d : a.maxW < a.w ? (a.w - c * (e - 1)) / e : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = 0 < a.vars.move && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1,
                a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + c * (a.count - 1) : (a.itemW + c) * a.count - a.w - c) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
            a.computedW = a.itemW - a.boxPadding
        };
        a.update = function (b, c) {
            a.doMath();
            v || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && --a.currentSlide, a.animatingTo = a.currentSlide);
            a.vars.controlNav && !a.manualControls && ("add" === c && !v || a.pagingCount > a.controlNav.length ? n.controlNav.update("add") : ("remove" === c && !v || a.pagingCount < a.controlNav.length) &&
            (v && a.currentSlide > a.last && (--a.currentSlide, --a.animatingTo), n.controlNav.update("remove", a.last)));
            a.vars.directionNav && n.directionNav.update()
        };
        a.addSlide = function (c, d) {
            var e = b(c);
            a.count += 1;
            a.last = a.count - 1;
            r && m ? void 0 !== d ? a.slides.eq(a.count - d).after(e) : a.container.prepend(e) : void 0 !== d ? a.slides.eq(d).before(e) : a.container.append(e);
            a.update(d, "add");
            a.slides = b(a.vars.selector + ":not(.clone)", a);
            a.setup();
            a.vars.added(a)
        };
        a.removeSlide = function (c) {
            var d = isNaN(c) ? a.slides.index(b(c)) : c;
            --a.count;
            a.last = a.count - 1;
            isNaN(c) ? b(c, a.slides).remove() : r && m ? a.slides.eq(a.last).remove() : a.slides.eq(c).remove();
            a.doMath();
            a.update(d, "remove");
            a.slides = b(a.vars.selector + ":not(.clone)", a);
            a.setup();
            a.vars.removed(a)
        };
        n.init()
    };
    b(window).blur(function () {
        focused = !1
    }).focus(function () {
        focused = !0
    });
    b.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7E3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "",
        nextText: "",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        },
        rtl: !1
    };
    b.fn.flexslider = function (e) {
        if (void 0 === e && (e = {}), "object" == typeof e)return this.each(function () {
            var a = b(this), c = a.find(e.selector ? e.selector : ".slides > li");
            1 === c.length && !0 === e.allowOneSlide || 0 === c.length ? (c.fadeIn(400), e.start && e.start(a)) : void 0 === a.data("flexslider") && new b.flexslider(this, e)
        });
        var c = b(this).data("flexslider");
        switch (e) {
            case "play":
                c.play();
                break;
            case "pause":
                c.pause();
                break;
            case "stop":
                c.stop();
                break;
            case "next":
                c.flexAnimate(c.getTarget("next"),
                    !0);
                break;
            case "prev":
            case "previous":
                c.flexAnimate(c.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && c.flexAnimate(e, !0)
        }
    }
}(jQuery);
(function (b) {
    b.fn.extend({
        stickyMojo: function (e) {
            function c() {
                k.el.css("left", k.stickyLeft);
                k.win.bind({
                    load: a, scroll: a, resize: function () {
                        k.el.css("left", k.stickyLeft);
                        a()
                    }
                })
            }

            function a() {
                var a = d.footerID.offset().top - k.stickyHeight, c = k.win.scrollTop();
                k.stickyTop2 - k.marg < c + d.offsetTop && k.win.width() >= k.breakPoint ? (k.el.css({
                    position: "fixed",
                    top: d.offsetTop + "px"
                }), b("#stickyBanner").addClass("startSticky")) : (k.el.css({
                    position: "static",
                    "margin-left": "0px"
                }), d.contentID.css("margin-left", "0px"), b("#stickyBanner").removeClass("startSticky"));
                a < c && k.el.css({top: a - c})
            }

            if (0 === this.length)return this;
            var d = b.extend({
                footerID: "",
                contentID: "",
                orientation: b(this).css("float"),
                offsetTop: 0
            }, e), k = {
                el: b(this),
                stickyLeft: b(d.contentID).outerWidth() + b(d.contentID).offset.left,
                stickyTop2: b(this).offset().top,
                stickyHeight: b(this).outerHeight(!0),
                contentHeight: b(d.contentID).outerHeight(!0),
                win: b(window),
                breakPoint: b(this).outerWidth(!0) + b(d.contentID).outerWidth(!0),
                marg: parseInt(b(this).css("margin-top"), 10)
            };
            d.footerID = b(d.footerID);
            d.contentID = b(d.contentID);
            return this.each(function () {
                c()
            })
        }
    })
})(jQuery);
"function" !== typeof Object.create && (Object.create = function (b) {
    function e() {
    }

    e.prototype = b;
    return new e
});
!function () {
    function b(a, b) {
        if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        b && (a.__proto__ = b)
    }

    function e(a, b) {
        if (!(a instanceof b))throw new TypeError("Cannot call a class as a function");
    }

    function c(a, b) {
        if ("function" != typeof b && null !== b)throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        b && (a.__proto__ = b)
    }

    function a(a, b) {
        if (!(a instanceof b))throw new TypeError("Cannot call a class as a function");
    }

    function d(a) {
        return a instanceof n || a instanceof Y
    }

    function k(a) {
        return a
    }

    function h(a, b) {
        return "url" === b ? "_blank" : null
    }

    function f(a) {
        if (a && a.__esModule)return a;
        var b = {};
        if (null != a)for (var c in a)Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b["default"] =
            a, b
    }

    var p = {__esModule: !0}, r = function () {
        function a(b) {
            e(this, a);
            this.j = [];
            this.T = b || null
        }

        return a.prototype.on = function (a, b) {
            if (a instanceof Array)for (var c = 0; c < a.length; c++)this.j.push([a[c], b]); else this.j.push([a, b])
        }, a.prototype.next = function (a) {
            for (var b = 0; b < this.j.length; b++) {
                var c = this.j[b], d = c[1];
                if (this.test(a, c[0]))return d
            }
            return !1
        }, a.prototype.accepts = function () {
            return !!this.T
        }, a.prototype.test = function (a, b) {
            return a === b
        }, a.prototype.emit = function () {
            return this.T
        }, a
    }(), m = function (a) {
        function c() {
            e(this,
                c);
            null != a && a.apply(this, arguments)
        }

        return b(c, a), c.prototype.test = function (a, b) {
            return a === b || b instanceof RegExp && b.test(a)
        }, c
    }(r), v = function (a) {
        function c() {
            e(this, c);
            null != a && a.apply(this, arguments)
        }

        return b(c, a), c.prototype.test = function (a, b) {
            return a instanceof b
        }, c
    }(r);
    p.CharacterState = m;
    p.TokenState = v;
    p.stateify = function (a, b, c, d) {
        for (var e = 0, f = a.length, g = [], h = void 0; f > e && (h = b.next(a[e]));)b = h, e++;
        if (e >= f)return [];
        for (; f - 1 > e;)h = new m(d), g.push(h), b.on(a[e], h), b = h, e++;
        return h = new m(c), g.push(h),
            b.on(a[f - 1], h), g
    };
    var w, x = function () {
        function b(c) {
            a(this, b);
            this.v = c
        }

        return b.prototype.toString = function () {
            return this.v + ""
        }, b
    }(), n = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), q = function (b) {
        function d() {
            a(this, d);
            b.call(this, "@")
        }

        return c(d, b), d
    }(x), l = function (b) {
        function d() {
            a(this, d);
            b.call(this, ":")
        }

        return c(d, b), d
    }(x), u = function (b) {
        function d() {
            a(this, d);
            b.call(this, ".")
        }

        return c(d, b), d
    }(x), M = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this,
                arguments)
        }

        return c(d, b), d
    }(x), D = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), C = function (b) {
        function d() {
            a(this, d);
            b.call(this, "\n")
        }

        return c(d, b), d
    }(x), J = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), A = function (b) {
        function d() {
            a(this, d);
            b.call(this, "+")
        }

        return c(d, b), d
    }(x), F = function (b) {
        function d() {
            a(this, d);
            b.call(this, "#")
        }

        return c(d, b), d
    }(x), E = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), K = function (b) {
        function d() {
            a(this, d);
            b.call(this, "?")
        }

        return c(d, b), d
    }(x), da = function (b) {
        function d() {
            a(this, d);
            b.call(this, "/")
        }

        return c(d, b), d
    }(x), N = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), Y = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), T = function (b) {
        function d() {
            a(this, d);
            null != b && b.apply(this, arguments)
        }

        return c(d, b), d
    }(x), B = {
        Base: x, DOMAIN: n, AT: q, COLON: l, DOT: u, PUNCTUATION: M, LOCALHOST: D,
        NL: C, NUM: J, PLUS: A, POUND: F, QUERY: K, PROTOCOL: E, SLASH: da, SYM: N, TLD: Y, WS: T
    }, I = function () {
        function b(c) {
            a(this, b);
            this.v = c;
            this.type = "token";
            this.isLink = !1
        }

        return b.prototype.toString = function () {
            for (var a = [], b = 0; b < this.v.length; b++)a.push(this.v[b].toString());
            return a.join("")
        }, b.prototype.toHref = function () {
            return this.toString()
        }, b.prototype.toObject = function (a) {
            return {type: this.type, value: this.toString(), href: this.toHref(void 0 === a ? "http" : a)}
        }, b
    }(), sa = function (b) {
        function d(c) {
            a(this, d);
            b.call(this,
                c);
            this.type = "email";
            this.isLink = !0
        }

        return c(d, b), d.prototype.toHref = function () {
            return "mailto:" + this.toString()
        }, d
    }(I), va = function (b) {
        function d(c) {
            a(this, d);
            b.call(this, c);
            this.type = "text"
        }

        return c(d, b), d
    }(I), ja = function (b) {
        function d(c) {
            a(this, d);
            b.call(this, c);
            this.type = "nl"
        }

        return c(d, b), d
    }(I), Fa = function (b) {
        function e(c) {
            a(this, e);
            b.call(this, c);
            this.type = "url";
            this.isLink = !0
        }

        return c(e, b), e.prototype.toHref = function (a) {
            a = void 0 === a ? "http" : a;
            for (var b = !1, c = !1, e = this.v, f = [], g = 0; e[g] instanceof E;)b = !0, f.push(e[g].toString().toLowerCase()), g++;
            for (; e[g] instanceof da;)c = !0, f.push(e[g].toString()), g++;
            for (; d(e[g]);)f.push(e[g].toString().toLowerCase()), g++;
            for (; g < e.length; g++)f.push(e[g].toString());
            return f = f.join(""), b || c || (f = a + "://" + f), f
        }, e.prototype.hasProtocol = function () {
            return this.v[0] instanceof E
        }, e
    }(I);
    w = {Base: I, EMAIL: sa, NL: ja, TEXT: va, URL: Fa};
    var Z = {__esModule: !0}, H = function (a) {
            return new p.TokenState(a)
        }, Q = B.DOMAIN, ia = B.AT, aa = B.COLON, R = B.DOT, jb = B.PUNCTUATION, U = B.LOCALHOST, Ba = B.NL,
        qa = B.NUM, $a = B.PLUS, kb = B.POUND, Pa = B.PROTOCOL, rb = B.QUERY, ka = B.SLASH, ab = B.SYM, y = B.TLD, g = w.EMAIL, Hb = w.NL, sb = w.TEXT, Qa = w.URL, ba = H(), Ga = H(), bb = H(), Ka = H(), ua = H(), ra = H(), z = H(Qa), tb = H(), ub = H(Qa), Ha = H(), W = H(), Ia = H(Qa), Ra = H(), vb = H(Qa), ya = H(Qa), Ya = H(), wa = H(), la = H(), Aa = H(g), Ca = H(), ib = H(g), ta = H(), La = H(), wb = H(), xb = H(Hb);
    ba.on(Ba, xb);
    ba.on(Pa, Ga);
    ba.on(ka, bb);
    Ga.on(ka, bb);
    bb.on(ka, Ka);
    ba.on(y, ua);
    ba.on(Q, ua);
    ba.on(U, z);
    ba.on(qa, ua);
    Ka.on(y, Ha);
    Ka.on(Q, Ha);
    Ka.on(qa, Ha);
    Ka.on(U, Ia);
    ua.on(R, ra);
    Ha.on(R, W);
    wa.on(R, la);
    ra.on(y, z);
    ra.on(Q, ua);
    ra.on(qa, ua);
    ra.on(U, ua);
    W.on(y, Ia);
    W.on(Q, Ha);
    W.on(qa, Ha);
    W.on(U, Ha);
    la.on(y, Aa);
    la.on(Q, wa);
    la.on(qa, wa);
    la.on(U, wa);
    z.on(R, ra);
    Ia.on(R, W);
    Aa.on(R, la);
    z.on(aa, tb);
    z.on(ka, ya);
    tb.on(qa, ub);
    ub.on(ka, ya);
    Ia.on(aa, Ra);
    Ia.on(ka, ya);
    Ra.on(qa, vb);
    vb.on(ka, ya);
    Aa.on(aa, Ca);
    Ca.on(qa, ib);
    var lb = [Q, ia, U, qa, $a, kb, Pa, ka, y, ab], hb = [aa, R, rb, jb];
    ya.on(lb, ya);
    Ya.on(lb, ya);
    ya.on(hb, Ya);
    Ya.on(hb, Ya);
    var Sa = [Q, qa, $a, kb, rb, ab, y];
    ua.on(Sa, ta);
    ua.on(ia, La);
    ra.on(Sa, ta);
    z.on(Sa, ta);
    z.on(ia, La);
    ta.on(Sa,
        ta);
    ta.on(ia, La);
    ta.on(R, wb);
    wb.on(Sa, ta);
    La.on(y, wa);
    La.on(Q, wa);
    La.on(U, Aa);
    Z.State = p.TokenState;
    Z.TOKENS = w;
    Z.run = function (a) {
        for (var b = a.length, c = 0, d = [], e = []; b > c;) {
            for (var f = ba, g = null, h = null, k = 0, m = null, l = -1; b > c && !(g = f.next(a[c]));)e.push(a[c++]);
            for (; b > c && (h = g || f.next(a[c]));)g = null, f = h, f.accepts() ? (l = 0, m = f) : 0 <= l && l++, c++, k++;
            if (0 > l)for (k = c - k; c > k; k++)e.push(a[k]); else 0 < e.length && (d.push(new sb(e)), e = []), c -= l, k -= l, f = m.emit(), d.push(new f(a.slice(c - k, c)))
        }
        return 0 < e.length && d.push(new sb(e)), d
    };
    Z.start = ba;
    var Ma = {__esModule: !0}, cb = "abogado ac academy accountants active actor ad adult ae aero af ag agency ai airforce al allfinanz alsace am an android ao aq aquarelle ar archi army arpa as asia associates at attorney au auction audio autos aw ax axa az ba band bar bargains bayern bb bd be beer berlin best bf bg bh bi bid bike bio biz bj black blackfriday bloomberg blue bm bmw bn bnpparibas bo boo boutique br brussels bs bt budapest build builders business buzz bv bw by bz bzh ca cab cal camera camp cancerresearch capetown capital caravan cards care career careers casa cash cat catering cc cd center ceo cern cf cg ch channel cheap christmas chrome church ci citic city ck cl claims cleaning click clinic clothing club cm cn co coach codes coffee college cologne com community company computer condos construction consulting contractors cooking cool coop country cr credit creditcard cricket crs cruises cu cuisinella cv cw cx cy cymru cz dad dance dating day de deals degree delivery democrat dental dentist desi diamonds diet digital direct directory discount dj dk dm dnp do domains durban dvag dz eat ec edu education ee eg email emerck energy engineer engineering enterprises equipment er es esq estate et eu eurovision eus events everbank exchange expert exposed fail farm fashion feedback fi finance financial firmdale fish fishing fitness fj fk flights florist flsmidth fly fm fo foo forsale foundation fr frl frogans fund furniture futbol ga gal gallery gb gbiz gd ge gent gf gg gh gi gift gifts gives gl glass gle global globo gm gmail gmo gmx gn google gop gov gp gq gr graphics gratis green gripe gs gt gu guide guitars guru gw gy hamburg haus healthcare help here hiphop hiv hk hm hn holdings holiday homes horse host hosting house how hr ht hu ibm id ie il im immo immobilien in industries info ing ink institute insure int international investments io iq ir irish is it je jetzt jm jo jobs joburg jp juegos kaufen ke kg kh ki kim kitchen kiwi km kn koeln kp kr krd kred kw ky kz la lacaixa land latrobe lawyer lb lc lds lease legal lgbt li life lighting limited limo link lk loans london lotto lr ls lt ltda lu luxe luxury lv ly ma madrid maison management mango market marketing mc md me media meet melbourne meme memorial menu mg mh miami mil mini mk ml mm mn mo mobi moda moe monash money mormon mortgage moscow motorcycles mov mp mq mr ms mt mu museum mv mw mx my mz na nagoya name navy nc ne net network neustar new nexus nf ng ngo nhk ni ninja nl no np nr nra nrw nu nyc nz okinawa om ong onl ooo org organic otsuka ovh pa paris partners parts party pe pf pg ph pharmacy photo photography photos physio pics pictures pink pizza pk pl place plumbing pm pn pohl poker porn post pr praxi press pro prod productions prof properties property ps pt pub pw py qa qpon quebec re realtor recipes red rehab reise reisen reit ren rentals repair report republican rest restaurant reviews rich rio rip ro rocks rodeo rs rsvp ru ruhr rw ryukyu sa saarland sarl sb sc sca scb schmidt schule science scot sd se services sexy sg sh shiksha shoes si singles sj sk sl sm sn so social software sohu solar solutions soy space spiegel sr st su supplies supply support surf surgery suzuki sv sx sy sydney systems sz taipei tatar tattoo tax tc td technology tel tf tg th tienda tips tirol tj tk tl tm tn to today tokyo tools top town toys tp tr trade training travel trust tt tui tv tw tz ua ug uk university uno uol us uy uz va vacations vc ve vegas ventures versicherung vet vg vi viajes villas vision vlaanderen vn vodka vote voting voto voyage vu wales wang watch webcam website wed wedding wf whoswho wien wiki williamhill wme work works world ws wtc wtf xxx xyz yachts yandex ye yoga yokohama youtube yt za zip zm zone zw".split(" "),
        db = /[0-9]/, Ta = /[a-z0-9]/, ca = [], P = function (a) {
            return new p.CharacterState(a)
        }, na = B.DOMAIN, Ib = B.LOCALHOST, yb = B.NUM, Fb = B.PROTOCOL, Jb = B.TLD, fa = B.WS, S = P(), X = P(yb), za = P(na), Da = P(), Ja = P(fa);
    S.on("@", P(B.AT));
    S.on(".", P(B.DOT));
    S.on("+", P(B.PLUS));
    S.on("#", P(B.POUND));
    S.on("?", P(B.QUERY));
    S.on("/", P(B.SLASH));
    S.on(":", P(B.COLON));
    S.on(/[,;!]/, P(B.PUNCTUATION));
    S.on(/\n/, P(B.NL));
    S.on(/\s/, Ja);
    Ja.on(/[^\S\n]/, Ja);
    for (var ha = 0; ha < cb.length; ha++) {
        var Ea = p.stateify(cb[ha], S, Jb, na);
        ca.push.apply(ca, Ea)
    }
    var zb =
        p.stateify("file", S, na, na), eb = p.stateify("ftp", S, na, na), Ab = p.stateify("http", S, na, na);
    ca.push.apply(ca, zb);
    ca.push.apply(ca, eb);
    ca.push.apply(ca, Ab);
    var Kb = zb.pop(), qb = eb.pop(), Bb = Ab.pop(), fb = P(na), Ua = P(Fb);
    qb.on("s", fb);
    Bb.on("s", fb);
    ca.push(fb);
    Kb.on(":", Ua);
    qb.on(":", Ua);
    Bb.on(":", Ua);
    fb.on(":", Ua);
    var pb = p.stateify("localhost", S, Ib, na);
    ca.push.apply(ca, pb);
    S.on(db, X);
    X.on("-", Da);
    X.on(db, X);
    X.on(Ta, za);
    za.on("-", Da);
    za.on(Ta, za);
    for (ha = 0; ha < ca.length; ha++)ca[ha].on("-", Da), ca[ha].on(Ta, za);
    Da.on("-",
        Da);
    Da.on(db, za);
    Da.on(Ta, za);
    S.on(/./, P(B.SYM));
    Ma.State = p.CharacterState;
    Ma.TOKENS = B;
    Ma.run = function (a) {
        for (var b = a.toLowerCase(), c = a.length, d = 0, e = []; c > d;) {
            for (var f = S, g = null, h = 0, k = null, m = -1; c > d && (g = f.next(b[d]));)f = g, f.accepts() ? (m = 0, k = f) : 0 <= m && m++, h++, d++;
            0 > m || (d -= m, h -= m, f = k.emit(), e.push(new f(a.substr(d - h, h))))
        }
        return e
    };
    Ma.start = S;
    var ma = {__esModule: !0}, gb = f({
        __esModule: !0, normalize: function (a) {
            return a = a || {}, {
                attributes: a.linkAttributes || null,
                defaultProtocol: a.defaultProtocol || "http",
                events: a.events ||
                null,
                format: a.format || k,
                formatHref: a.formatHref || k,
                newLine: a.newLine || !1,
                nl2br: !!a.newLine || a.nl2br || !1,
                tagName: a.tagName || "a",
                target: a.target || h,
                linkClass: a.linkClass || "linkified"
            }
        }, resolve: function (a) {
            for (var b = arguments.length, c = Array(1 < b ? b - 1 : 0), d = 1; b > d; d++)c[d - 1] = arguments[d];
            return "function" == typeof a ? a.apply(void 0, c) : a
        }
    }), Cb = f(Ma), mb = f(Z);
    Array.isArray || (Array.isArray = function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    });
    var nb = function (a) {
        return mb.run(Cb.run(a))
    };
    ma.find =
        function (a, b) {
            for (var c = void 0 === b ? null : b, d = nb(a), e = [], f = 0; f < d.length; f++)!d[f].isLink || c && d[f].type !== c || e.push(d[f].toObject());
            return e
        };
    ma.options = gb;
    ma.parser = mb;
    ma.scanner = Cb;
    ma.test = function (a, b) {
        var c = void 0 === b ? null : b, d = nb(a);
        return 1 === d.length && d[0].isLink && (!c || d[0].type === c)
    };
    ma.tokenize = nb;
    window.linkify = ma
}();
!function (b, e) {
    function c(a, b, d) {
        if (!a || "object" != typeof a || a.nodeType !== f)throw Error("Cannot linkify " + a + " - Invalid DOM Node type");
        if ("A" === a.tagName)return a;
        for (var e = a.firstChild; e;) {
            switch (e.nodeType) {
                case f:
                    c(e, b, d);
                    break;
                case p:
                    var m;
                    m = k(e.nodeValue);
                    for (var l = b, r = d, M = [], D = 0; D < m.length; D++) {
                        var C = m[D];
                        if (C.isLink) {
                            var J = C.toHref(l.defaultProtocol), A = h.resolve(l.format, C.toString(), C.type), F = h.resolve(l.formatHref, J, C.type), E = h.resolve(l.attributes, J, C.type), K = h.resolve(l.tagName, J, C.type),
                                da = h.resolve(l.linkClass, J, C.type), N = h.resolve(l.target, J, C.type), C = h.resolve(l.events, J, C.type), K = r.createElement(K);
                            if (K.setAttribute("href", F), K.setAttribute("class", da), N && K.setAttribute("target", N), E)for (var Y in E)K.setAttribute(Y, E[Y]);
                            if (C)for (var T in C)K.addEventListener ? K.addEventListener(T, C[T]) : K.attachEvent && K.attachEvent("on" + T, C[T]);
                            K.appendChild(r.createTextNode(A));
                            M.push(K)
                        } else M.push("nl" === C.type && l.nl2br ? r.createElement("br") : r.createTextNode(C.toString()))
                    }
                    m = M;
                    l = a;
                    r = m;
                    M = r[r.length -
                    1];
                    l.replaceChild(M, e);
                    for (e = r.length - 2; 0 <= e; e--)l.insertBefore(r[e], M), M = r[e];
                    e = m[m.length - 1]
            }
            e = e.nextSibling
        }
        return a
    }

    function a(a, b, d) {
        d = void 0 === d ? null : d;
        try {
            d = d || window && window.document || global && global.document
        } catch (e) {
        }
        if (!d)throw Error("Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the third argument to linkifyElement.");
        return b = h.normalize(b), c(a, b, d)
    }

    function d(b, c) {
        function d(b) {
            return b = a.normalize(b), this.each(function () {
                a.helper(this,
                    b, e)
            })
        }

        var e = void 0 === c ? null : c;
        b.fn = b.fn || {};
        try {
            e = e || window && window.document || global && global.document
        } catch (f) {
        }
        if (!e)throw Error("Cannot find document implementation. If you are in a non-browser environment like Node.js, pass the document implementation as the third argument to linkifyElement.");
        "function" != typeof b.fn.linkify && (b.fn.linkify = d, b(e).ready(function () {
            b("[data-linkify]").each(function () {
                var a = b(this), c = a.data(), d = c.linkify, e = c.linkifyNlbr, c = {
                    linkAttributes: c.linkifyAttributes,
                    defaultProtocol: c.linkifyDefaultProtocol,
                    events: c.linkifyEvents,
                    format: c.linkifyFormat,
                    formatHref: c.linkifyFormatHref,
                    newLine: c.linkifyNewline,
                    nl2br: !!e && 0 !== e && "false" !== e,
                    tagName: c.linkifyTagname,
                    target: c.linkifyTarget,
                    linkClass: c.linkifyLinkclass
                };
                ("this" === d ? a : a.find(d)).linkify(c)
            })
        }))
    }

    var k = e.tokenize, h = e.options, f = 1, p = 3;
    a.helper = c;
    a.normalize = h.normalize;
    var r = void 0;
    try {
        r = document
    } catch (m) {
        r = null
    }
    "undefined" != typeof b && r && d(b, r);
    window.linkifyElement = a
}(window.jQuery, window.linkify);
var postId = 0;
$(document).ready(function () {
    function b() {
        $('.postDesc a:contains("watch?v=")').addClass(".fancybox.iframe youtubePopup");
        $(".postDesc a").each(function () {
            this.href = this.href.replace("watch?v=", "embed/");
            this.href = this.href.replace("http", "https")
        });
        $(".youtubePopup").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: !1,
            width: "70%",
            height: "70%",
            autoSize: !1,
            closeClick: !1,
            openEffect: "none",
            closeEffect: "none"
        })
    }

    function e(a, b) {
        $("#repostPopup h2,#repostPopup .popupCont").fadeOut();
        a ? ($("#repostPopup .success").fadeIn(),
            $("tr[data-key= " + b + " ]").insertBefore($(".myAdsTable tbody tr:nth-child(1)"))) : $("#repostPopup .failed").fadeIn().css("display", "block");
        $.fancybox.reposition();
        setTimeout(function () {
            $.fancybox.close()
        }, 2500);
        return !1
    }

    $(".add_comment_btn").click(function () {
        "" == $("#postcomment-price").text() && ($(".field-postcomment-price > .help-block").hide(), $(".field-postcomment-comment > .help-block").show());
        0 < $("#postcomment-price").length && 0 != $("#postcomment-price").val().length && 0 != $("#postcomment-comment").val().length &&
        $("#postcomment-price").val("")
    });
    $(".makeAnofferBtn").click(function () {
        "" == $("#postcomment-comment").text() && ($(".field-postcomment-price > .help-block").show(), $(".field-postcomment-comment > .help-block").hide());
        0 != $("#postcomment-comment").val().length && 0 != $("#postcomment-price").val().length && $("#postcomment-comment").val("")
    });
    $(".commentTab").click(function () {
        $(".addCommentCont").show();
        $(".makeofferComment").hide();
        $(this).addClass("selectedTitle").removeClass("commentTitle");
        $(".offerTab").addClass("commentTitle").removeClass("selectedTitle");
        $(".blueDownArr").hide();
        $(this).find(".blueDownArr").show()
    });
    $(".offerTab").click(function () {
        $(".addCommentCont").hide();
        $(".makeofferComment").show();
        $(this).addClass("selectedTitle").removeClass("commentTitle");
        $(".commentTab").addClass("commentTitle").removeClass("selectedTitle");
        $(".blueDownArr").hide();
        $(this).find(".blueDownArr").show()
    });
    $(".next_ad,.prev_ad").mouseenter(function () {
        $(this).animate({width: "240px"}, 250, function () {
            210 == $(this).width() && $(this).find(".arrowText, img").fadeIn("fast")
        })
    });
    $(".next_ad,.prev_ad").mouseleave(function () {
        $(this).find(".arrowText, img").hide("fast");
        $(this).animate({width: "40px"}, 250, function () {
            $(this).removeAttr("style");
            $(this).find(".arrowText, img").removeAttr("style")
        })
    });
    $(".deleteOne").click(function (a) {
        deletePostReason(this)
    });
    $("body").on("beforeSubmit", "form#deletion-no-reason-form", function () {
        if ($(this).find(".has-error").length)return !1;
        $.ajax({
            url: "/" + window.lang + "/post/delete/" + postId,
            type: "POST",
            data: {Post: postId},
            success: function () {
                $.fancybox.close()
            }
        });
        return !1
    });
    $("body").on("beforeSubmit", "form#deletion-form", function () {
        var a = $(this), b = $('input[name="PostDeletionReason[reason_label_id]"]:checked').val(), c = $('input[name="PostDeletionReason[other_reason_text]"]').val();
        if (a.find(".has-error").length)return !1;
        $.ajax({
            url: "/" + window.lang + "/post/delete/" + postId,
            type: "POST",
            data: {Post: postId, labelId: b, otherText: c},
            success: function () {
                $.fancybox.close();
                window.location = window.location.protocol + "//" + window.location.host + "/" + window.lang + "/myprofile"
            }
        });
        return !1
    });
    $(".descBtn").click(function () {
        $(this).hasClass("showMore") && ($(".secondPart").show(), $(".firstPart").hide(), $(".postDesc").linkify(), b(), $(this).hide())
    });
    1 > $(".showText").length && ($(".postDesc").linkify(), b());
    $("body").find("#mainContent").addClass("relative");
    var c;
    c = "rtl" == $("html").attr("dir") ? !0 : !1;
    $(".carousel").flexslider({
        animation: "slide",
        animationLoop: !1,
        itemWidth: 150,
        itemMargin: 0,
        reverse: !0,
        rtl: c
    });
    $(".gellaryPopup").fancybox({
        padding: 0, onUpdate: function (a, b) {
            $.fancybox.reposition();
            floatLabels()
        }, afterLoad: function () {
            $("#slider").flexslider({
                animation: "slide",
                controlNav: !1,
                animationLoop: !1,
                slideshow: !1,
                multipleKeyboard: !0,
                animationSpeed: 200,
                sync: "#carousel",
                itemWidth: 610,
                rtl: c,
                start: function () {
                    $("#slider").data("flexslider").flexAnimate(galleryStartAt);
                    $("#slider").show();
                    $("#slider").flexslider("play")
                },
                after: function (a) {
                    pageView()
                }
            });
            $("#carousel").flexslider({
                animation: "slide",
                controlNav: !1,
                animationLoop: !1,
                slideshow: !1,
                itemWidth: 85,
                itemMargin: 0,
                asNavFor: "#slider",
                rtl: c,
                start: function () {
                    $("#carousel").show()
                }
            });
            setTimeout(function () {
                click_ul || (galleryStartAt = 0);
                $("#slider").data("flexslider").flexAnimate(galleryStartAt);
                click_ul = !1
            }, 100)
        }, afterClose: function () {
            -1 < window.location.href.indexOf("#img_") && window.history.go(-1)
        }
    });
    setTimeout(function () {
        var a = $("#postWrapper").height();
        $("#expiredDiv").css("height", a + "px")
    }, 1E3);
    1279 >= $(window).width() ? ($(".next_ad,.prev_ad").hide(), $(".nextPrevTop").show()) : ($(".next_ad,.prev_ad").show(), $(".nextPrevTop").hide());
    $(window).resize(function () {
        1279 >=
        $(window).width() ? ($(".next_ad,.prev_ad").hide(), $(".nextPrevTop").show()) : ($(".next_ad,.prev_ad").show(), $(".nextPrevTop").hide())
    });
    googletag.cmd.push(function () {
        googletag.on("gpt-page_load_complete", function (a, b, c, d, e, m) {
            (null == navigator.userAgent.match(/iPad/i) || $("#expiredDiv").is(":hidden")) && setTimeout(function () {
                $("#stickyBanner").stickyMojo({footerID: "#stopHere", contentID: "#postRight"})
            }, 1E3)
        })
    });
    var a = 0;
    $(".canRepost").click(function (b) {
        $("#repostPopup .success").fadeOut();
        $("#repostPopup .failed").fadeOut();
        $("#repostPopup h2,#repostPopup .popupCont").fadeIn();
        a = $(this).attr("data-id");
        $.fancybox("#repostPopup");
        return !1
    });
    $("#repost").click(function (b) {
        $.ajax({
            url: "/" + window.lang + "/post/repost/" + a,
            type: "get",
            dataType: "html",
            data: {id: a},
            success: function (b) {
                b = jQuery.parseJSON(b);
                e(b.status, a);
                setTimeout(function () {
                    window.location = window.location.protocol + "//" + window.location.host + "/search/" + a
                }, 3E3)
            }
        })
    });
    var d = 0;
    $("body").on("click", ".getOfferPhoneNumber", function (a) {
        var b = $(this).attr("data-id");
        $.ajax({
            url: "/post/get-offer-phone-number",
            type: "get", dataType: "html", data: {commentID: b}, success: function (a) {
                drawOfferPhone(a, b);
                window.phoneDrown && 0 == d && (offerCallEvent(b), d = 1)
            }
        })
    });
    $('a[data-rule="cpLink"]').click(function (a) {
        a = [];
        var b = $.trim($(this).attr("data-current")), c = $.trim($(this).attr("data-parent-value")), d = $.trim($(this).attr("data-child-value")), e = $.trim($(this).attr("data-other-value")), m = $.trim($(this).attr("data-cat")), v = $.trim($(this).attr("data-parent-type")), w = $.trim($(this).attr("data-child-type")), x = $.trim($(this).attr("data-other-type")),
            n = $.trim($(this).attr("data-city"));
        a.push({
            parentDataType: v,
            parentDataValue: c,
            childDataType: w,
            childDataValue: d,
            otherDataType: x,
            otherDataValue: e,
            categoryValue: m,
            cityId: n
        });
        buildCustomUrl(b, a);
        return !1
    })
});
function popUpHandeler(b, e) {
    $.fancybox("#offerMsg");
    var c = $("#offer-contact-form").attr("data-url"), c = c + b;
    $("#offer-contact-form").attr("action", c);
    $(".forOfferMember").text(offerSpanText + " " + e)
}
function deletePostReason(b) {
    $("#deletePostProfilePopup").html("");
    postId = $(b).attr("data-id");
    b = $(b).attr("data-cat-name");
    $.ajax({
        url: "/" + window.lang + "/post/deletion-reason",
        type: "post",
        data: {reportingName: b, postId: postId},
        success: function (b) {
            $("#deletePostProfilePopup").html(b);
            $.fancybox("#deletePostProfilePopup");
            floatLabels()
        }
    })
}
function buildCustomUrl(b, e) {
    var c = window.location.protocol + "//" + window.location.host, a = "/find", d = "";
    jQuery.each(e, function (c, e) {
        switch (b) {
            case e.parentDataType:
                a += "?term=&cat_id=" + e.categoryValue + "&scid=" + e.cityId + "&searchListInput=&search[" + e.parentDataType + "]=" + e.parentDataValue + "";
                break;
            case e.childDataType:
                a += "?term=&cat_id=" + e.categoryValue + "&scid=" + e.cityId + "&search[" + e.parentDataType + "]=" + e.parentDataValue + "&search[" + e.childDataType + "]=" + e.childDataValue + "";
                break;
            case e.otherDataType:
                a += "?term=&cat_id=" +
                    e.categoryValue + "&scid=" + e.cityId + "&search[" + e.parentDataType + "]=" + e.parentDataValue + "&search[" + e.childDataType + "]=" + e.childDataValue + "&search[" + e.otherDataType + "]=" + e.otherDataValue + "", -1 < e.otherDataType.indexOf("_from") && (d = e.otherDataType.replace("_from", "_to"), a += "&search[" + d + "]=" + e.otherDataValue + "")
        }
    });
    var k = a.replace(/&search\[]=/gi, "");
    window.location = c + k;
    return !1
}
function drawPhone(b) {
    var e = document.createElement("img");
    e.src = "data:image/jpeg;base64," + b;
    $(".seller_phone").html(e);
    window.phoneDrown = !0
}
function drawOfferPhone(b, e) {
    var c = document.createElement("img");
    c.src = "data:image/jpeg;base64," + b;
    $("." + e).html(c);
    window.phoneDrown = !0
}
function contactSeller() {
    $(".emailPostView,.phonePostView,.captchaPostView,.phoneFlagPostView").show()
}
function contactSellerGallery() {
    $(".emailGallery,.phoneGallery,.captchaMessageGallery,.flagGallery").show()
}
function sendAgainGallery() {
    $(".successGallery,.sendAgainGallery").hide();
    $(".contactFormMessageGallery,.replyGallery").show()
}
function sendAgain() {
    $(".successPostView,.sendAgainPostView").hide();
    $(".contactFormMessage,.replyPostView").show()
}
function sendBuyerAgain() {
    $(".sendBuyerMsg textarea").val("");
    $("#message-captcha").val("");
    $(".successSend,.sendAgain").fadeOut();
    setTimeout(function () {
        $(".successSend,.sendAgain").remove()
    }, 300)
}
function getPhoneNumberGallery(b) {
    $.ajax({
        url: "/post/get-phone-number", type: "get", dataType: "html", data: {post_id: b}, success: function (e) {
            drawPhone(e);
            window.phoneDrown && 0 == firstTime && (postCallEvent(b, "post"), firstTime = 1)
        }
    })
}
(function (b) {
    jQuery.mbEmoticons = {
        smilesPath: "", smiles: {
            "\ud83d\ude07": "1f607",
            "\ud83d\ude21": "1f621",
            "\ud83d\ude01": "1f601",
            "\ud83d\ude0e": "1f60e",
            "\ud83d\ude2d": "1f62d",
            "\ud83d\ude33": "1f633",
            "\ud83d\ude42": "1f642",
            "\u2764\ufe0f": "2764",
            "\ud83d\ude0d": "1f60d",
            "\ud83d\ude18": "1f618",
            "\ud83d\udcaa": "1f4aa",
            "\ud83d\udc4e": "1f44e",
            "\ud83d\ude1e": "1f61e",
            "\ud83d\ude10": "1f610",
            "\ud83d\ude32": "1f632",
            "\ud83d\ude13": "1f613",
            "\ud83d\ude0b": "1f60b",
            "\ud83d\ude09": "1f609",
            "\ud83d\ude12": "1f612",
            "\ud83d\ude16": "1f616",
            "\ud83d\udc4d": "1f44d"
        }, smilesVariations: {}, smileBoxBtn: "#smileBoxBtn", getRegExp: function () {
            var e = "/";
            b.each(b.mbEmoticons.smilesVariations, function (b) {
                b = b.replace(/\)/g, "\\)").replace(/\(/g, "\\(").replace(/\|/g, "\\|").replace(/\*/g, "\\*").replace(/\^/g, "\\^");
                e += "(" + b + ")|"
            });
            e += "/g";
            return eval(e)
        }, addSmilesBox: function () {
            b(this).each(function () {
                var e = b(this), c = b("<span/>").addClass("mbSmilesWrapper");
                e.wrapAll(c);
                e.data("caret", e.caret());
                e.data("smilesIsOpen", !0);
                var a = b("<div/>").addClass("mbSmilesBox").hide(),
                    c = b("<span/>").addClass("mbSmilesButton").html("<img class='emojione' src='//cdn.jsdelivr.net/emojione/assets/png/263a.png?v=2.1.1'>").emoticonize();
                b.each(b.mbEmoticons.smiles, function (c) {
                    var e = b("<span/>").addClass("emoticon").html(c);
                    a.append(e);
                    e.emoticonize().data("emoticon", c)
                });
                e.before(c);
                c.click(function (a) {
                    e.mbOpenSmilesBox();
                    return !1
                });
                e.before(a);
                e.data("smilesBox", a);
                a.find(".emoticon").each(function () {
                    var a = b(this);
                    b(this).click(function () {
                        e.insertAtCaret(" " + a.data("emoticon") + " ")
                    })
                });
                e.focus();
                e.caret(e.data("caret"))
            });
            return this
        }, openSmileBox: function () {
            var e = b(this), c = e.data("smilesBox"), a = e.position().left + e.outerWidth() / 2;
            c.css({left: a});
            c.fadeIn();
            setTimeout(function () {
                b(document).one("click", function () {
                    e.mbCloseSmilesBox()
                })
            }, 100)
        }, removeSmilesBox: function () {
            b(this).data("smilesIsOpen", !1);
            b(this).data("smilesBox").fadeOut(500)
        }
    };
    jQuery.fn.insertAtCaret = function (b) {
        return this.each(function () {
            document.selection ? (this.focus(), sel = document.selection.createRange(), sel.text =
                b, this.focus()) : this.selectionStart || "0" == this.selectionStart ? (startPos = this.selectionStart, endPos = this.selectionEnd, scrollTop = this.scrollTop, this.value = this.value.substring(0, startPos) + b + this.value.substring(endPos, this.value.length), this.focus(), this.selectionStart = startPos + b.length, this.selectionEnd = startPos + b.length, this.scrollTop = scrollTop) : (this.value += b, this.focus())
        })
    };
    jQuery.fn.caret = function (b) {
        var c = this[0];
        if (0 == arguments.length) {
            if (c.selectionStart)return b = c.selectionStart, 0 < b ? b : 0;
            if (c.createTextRange) {
                setTimeout(function () {
                        c.focus()
                    },
                    300);
                var a = document.selection.createRange();
                if (null == a)return "0";
                var d = c.createTextRange(), k = d.duplicate();
                d.moveToBookmark(a.getBookmark());
                k.setEndPoint("EndToStart", d);
                return k.text.length
            }
            return 0
        }
        c.setSelectionRange ? c.setSelectionRange(b, b) : c.createTextRange && (a = c.createTextRange(), a.collapse(!0), a.moveEnd("character", b), a.moveStart("character", b), a.select())
    };
    jQuery.fn.emoticonize = function (e) {
        function c(a) {
            var c = b.mbEmoticons.getRegExp();
            return a.replace(c, function (a) {
                var c = b.mbEmoticons.smilesVariations[a];
                return c ? "<span class='emojiSprite em-" + c + "'></span>" : a
            })
        }

        this.each(function () {
            var a = b(this), d = c(a.html()).replace(/\n/g, "<br>");
            a.html(d)
        });
        return this
    };
    b.extend(b.mbEmoticons.smilesVariations, b.mbEmoticons.smiles);
    jQuery.fn.mbSmilesBox = b.mbEmoticons.addSmilesBox;
    jQuery.fn.mbOpenSmilesBox = b.mbEmoticons.openSmileBox;
    jQuery.fn.mbCloseSmilesBox = b.mbEmoticons.removeSmilesBox
})(jQuery);
(function (b) {
    b.emojioneList = {
        ":kiss_ww:": ["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469", "1f469-2764-1f48b-1f469"],
        ":couplekiss_ww:": ["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469", "1f469-2764-1f48b-1f469"],
        ":kiss_mm:": ["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468", "1f468-2764-1f48b-1f468"],
        ":couplekiss_mm:": ["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468", "1f468-2764-1f48b-1f468"],
        ":family_mmbb:": ["1f468-200d-1f468-200d-1f466-200d-1f466", "1f468-1f468-1f466-1f466"],
        ":family_mmgb:": ["1f468-200d-1f468-200d-1f467-200d-1f466",
            "1f468-1f468-1f467-1f466"],
        ":family_mmgg:": ["1f468-200d-1f468-200d-1f467-200d-1f467", "1f468-1f468-1f467-1f467"],
        ":family_mwbb:": ["1f468-200d-1f469-200d-1f466-200d-1f466", "1f468-1f469-1f466-1f466"],
        ":family_mwgb:": ["1f468-200d-1f469-200d-1f467-200d-1f466", "1f468-1f469-1f467-1f466"],
        ":family_mwgg:": ["1f468-200d-1f469-200d-1f467-200d-1f467", "1f468-1f469-1f467-1f467"],
        ":family_wwbb:": ["1f469-200d-1f469-200d-1f466-200d-1f466", "1f469-1f469-1f466-1f466"],
        ":family_wwgb:": ["1f469-200d-1f469-200d-1f467-200d-1f466",
            "1f469-1f469-1f467-1f466"],
        ":family_wwgg:": ["1f469-200d-1f469-200d-1f467-200d-1f467", "1f469-1f469-1f467-1f467"],
        ":couple_ww:": ["1f469-200d-2764-fe0f-200d-1f469", "1f469-2764-1f469"],
        ":couple_with_heart_ww:": ["1f469-200d-2764-fe0f-200d-1f469", "1f469-2764-1f469"],
        ":couple_mm:": ["1f468-200d-2764-fe0f-200d-1f468", "1f468-2764-1f468"],
        ":couple_with_heart_mm:": ["1f468-200d-2764-fe0f-200d-1f468", "1f468-2764-1f468"],
        ":family_mmb:": ["1f468-200d-1f468-200d-1f466", "1f468-1f468-1f466"],
        ":family_mmg:": ["1f468-200d-1f468-200d-1f467",
            "1f468-1f468-1f467"],
        ":family_mwg:": ["1f468-200d-1f469-200d-1f467", "1f468-1f469-1f467"],
        ":family_wwb:": ["1f469-200d-1f469-200d-1f466", "1f469-1f469-1f466"],
        ":family_wwg:": ["1f469-200d-1f469-200d-1f467", "1f469-1f469-1f467"],
        ":eye_in_speech_bubble:": ["1f441-200d-1f5e8", "1f441-1f5e8"],
        ":hash:": ["0023-fe0f-20e3", "0023-20e3"],
        ":zero:": ["0030-fe0f-20e3", "0030-20e3"],
        ":one:": ["0031-fe0f-20e3", "0031-20e3"],
        ":two:": ["0032-fe0f-20e3", "0032-20e3"],
        ":three:": ["0033-fe0f-20e3", "0033-20e3"],
        ":four:": ["0034-fe0f-20e3",
            "0034-20e3"],
        ":five:": ["0035-fe0f-20e3", "0035-20e3"],
        ":six:": ["0036-fe0f-20e3", "0036-20e3"],
        ":seven:": ["0037-fe0f-20e3", "0037-20e3"],
        ":eight:": ["0038-fe0f-20e3", "0038-20e3"],
        ":nine:": ["0039-fe0f-20e3", "0039-20e3"],
        ":asterisk:": ["002a-fe0f-20e3", "002a-20e3"],
        ":keycap_asterisk:": ["002a-fe0f-20e3", "002a-20e3"],
        ":metal_tone5:": ["1f918-1f3ff"],
        ":sign_of_the_horns_tone5:": ["1f918-1f3ff"],
        ":metal_tone4:": ["1f918-1f3fe"],
        ":sign_of_the_horns_tone4:": ["1f918-1f3fe"],
        ":metal_tone3:": ["1f918-1f3fd"],
        ":sign_of_the_horns_tone3:": ["1f918-1f3fd"],
        ":metal_tone2:": ["1f918-1f3fc"],
        ":sign_of_the_horns_tone2:": ["1f918-1f3fc"],
        ":metal_tone1:": ["1f918-1f3fb"],
        ":sign_of_the_horns_tone1:": ["1f918-1f3fb"],
        ":bath_tone5:": ["1f6c0-1f3ff"],
        ":bath_tone4:": ["1f6c0-1f3fe"],
        ":bath_tone3:": ["1f6c0-1f3fd"],
        ":bath_tone2:": ["1f6c0-1f3fc"],
        ":bath_tone1:": ["1f6c0-1f3fb"],
        ":walking_tone5:": ["1f6b6-1f3ff"],
        ":walking_tone4:": ["1f6b6-1f3fe"],
        ":walking_tone3:": ["1f6b6-1f3fd"],
        ":walking_tone2:": ["1f6b6-1f3fc"],
        ":walking_tone1:": ["1f6b6-1f3fb"],
        ":mountain_bicyclist_tone5:": ["1f6b5-1f3ff"],
        ":mountain_bicyclist_tone4:": ["1f6b5-1f3fe"],
        ":mountain_bicyclist_tone3:": ["1f6b5-1f3fd"],
        ":mountain_bicyclist_tone2:": ["1f6b5-1f3fc"],
        ":mountain_bicyclist_tone1:": ["1f6b5-1f3fb"],
        ":bicyclist_tone5:": ["1f6b4-1f3ff"],
        ":bicyclist_tone4:": ["1f6b4-1f3fe"],
        ":bicyclist_tone3:": ["1f6b4-1f3fd"],
        ":bicyclist_tone2:": ["1f6b4-1f3fc"],
        ":bicyclist_tone1:": ["1f6b4-1f3fb"],
        ":rowboat_tone5:": ["1f6a3-1f3ff"],
        ":rowboat_tone4:": ["1f6a3-1f3fe"],
        ":rowboat_tone3:": ["1f6a3-1f3fd"],
        ":rowboat_tone2:": ["1f6a3-1f3fc"],
        ":rowboat_tone1:": ["1f6a3-1f3fb"],
        ":pray_tone5:": ["1f64f-1f3ff"],
        ":pray_tone4:": ["1f64f-1f3fe"],
        ":pray_tone3:": ["1f64f-1f3fd"],
        ":pray_tone2:": ["1f64f-1f3fc"],
        ":pray_tone1:": ["1f64f-1f3fb"],
        ":person_with_pouting_face_tone5:": ["1f64e-1f3ff"],
        ":person_with_pouting_face_tone4:": ["1f64e-1f3fe"],
        ":person_with_pouting_face_tone3:": ["1f64e-1f3fd"],
        ":person_with_pouting_face_tone2:": ["1f64e-1f3fc"],
        ":person_with_pouting_face_tone1:": ["1f64e-1f3fb"],
        ":person_frowning_tone5:": ["1f64d-1f3ff"],
        ":person_frowning_tone4:": ["1f64d-1f3fe"],
        ":person_frowning_tone3:": ["1f64d-1f3fd"],
        ":person_frowning_tone2:": ["1f64d-1f3fc"],
        ":person_frowning_tone1:": ["1f64d-1f3fb"],
        ":raised_hands_tone5:": ["1f64c-1f3ff"],
        ":raised_hands_tone4:": ["1f64c-1f3fe"],
        ":raised_hands_tone3:": ["1f64c-1f3fd"],
        ":raised_hands_tone2:": ["1f64c-1f3fc"],
        ":raised_hands_tone1:": ["1f64c-1f3fb"],
        ":raising_hand_tone5:": ["1f64b-1f3ff"],
        ":raising_hand_tone4:": ["1f64b-1f3fe"],
        ":raising_hand_tone3:": ["1f64b-1f3fd"],
        ":raising_hand_tone2:": ["1f64b-1f3fc"],
        ":raising_hand_tone1:": ["1f64b-1f3fb"],
        ":bow_tone5:": ["1f647-1f3ff"],
        ":bow_tone4:": ["1f647-1f3fe"],
        ":bow_tone3:": ["1f647-1f3fd"],
        ":bow_tone2:": ["1f647-1f3fc"],
        ":bow_tone1:": ["1f647-1f3fb"],
        ":ok_woman_tone5:": ["1f646-1f3ff"],
        ":ok_woman_tone4:": ["1f646-1f3fe"],
        ":ok_woman_tone3:": ["1f646-1f3fd"],
        ":ok_woman_tone2:": ["1f646-1f3fc"],
        ":ok_woman_tone1:": ["1f646-1f3fb"],
        ":no_good_tone5:": ["1f645-1f3ff"],
        ":no_good_tone4:": ["1f645-1f3fe"],
        ":no_good_tone3:": ["1f645-1f3fd"],
        ":no_good_tone2:": ["1f645-1f3fc"],
        ":no_good_tone1:": ["1f645-1f3fb"],
        ":vulcan_tone5:": ["1f596-1f3ff"],
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone5:": ["1f596-1f3ff"],
        ":vulcan_tone4:": ["1f596-1f3fe"],
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone4:": ["1f596-1f3fe"],
        ":vulcan_tone3:": ["1f596-1f3fd"],
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone3:": ["1f596-1f3fd"],
        ":vulcan_tone2:": ["1f596-1f3fc"],
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone2:": ["1f596-1f3fc"],
        ":vulcan_tone1:": ["1f596-1f3fb"],
        ":raised_hand_with_part_between_middle_and_ring_fingers_tone1:": ["1f596-1f3fb"],
        ":middle_finger_tone5:": ["1f595-1f3ff"],
        ":reversed_hand_with_middle_finger_extended_tone5:": ["1f595-1f3ff"],
        ":middle_finger_tone4:": ["1f595-1f3fe"],
        ":reversed_hand_with_middle_finger_extended_tone4:": ["1f595-1f3fe"],
        ":middle_finger_tone3:": ["1f595-1f3fd"],
        ":reversed_hand_with_middle_finger_extended_tone3:": ["1f595-1f3fd"],
        ":middle_finger_tone2:": ["1f595-1f3fc"],
        ":reversed_hand_with_middle_finger_extended_tone2:": ["1f595-1f3fc"],
        ":middle_finger_tone1:": ["1f595-1f3fb"],
        ":reversed_hand_with_middle_finger_extended_tone1:": ["1f595-1f3fb"],
        ":hand_splayed_tone5:": ["1f590-1f3ff"],
        ":raised_hand_with_fingers_splayed_tone5:": ["1f590-1f3ff"],
        ":hand_splayed_tone4:": ["1f590-1f3fe"],
        ":raised_hand_with_fingers_splayed_tone4:": ["1f590-1f3fe"],
        ":hand_splayed_tone3:": ["1f590-1f3fd"],
        ":raised_hand_with_fingers_splayed_tone3:": ["1f590-1f3fd"],
        ":hand_splayed_tone2:": ["1f590-1f3fc"],
        ":raised_hand_with_fingers_splayed_tone2:": ["1f590-1f3fc"],
        ":hand_splayed_tone1:": ["1f590-1f3fb"],
        ":raised_hand_with_fingers_splayed_tone1:": ["1f590-1f3fb"],
        ":spy_tone5:": ["1f575-1f3ff"],
        ":sleuth_or_spy_tone5:": ["1f575-1f3ff"],
        ":spy_tone4:": ["1f575-1f3fe"],
        ":sleuth_or_spy_tone4:": ["1f575-1f3fe"],
        ":spy_tone3:": ["1f575-1f3fd"],
        ":sleuth_or_spy_tone3:": ["1f575-1f3fd"],
        ":spy_tone2:": ["1f575-1f3fc"],
        ":sleuth_or_spy_tone2:": ["1f575-1f3fc"],
        ":spy_tone1:": ["1f575-1f3fb"],
        ":sleuth_or_spy_tone1:": ["1f575-1f3fb"],
        ":muscle_tone5:": ["1f4aa-1f3ff"],
        ":muscle_tone4:": ["1f4aa-1f3fe"],
        ":muscle_tone3:": ["1f4aa-1f3fd"],
        ":muscle_tone2:": ["1f4aa-1f3fc"],
        ":muscle_tone1:": ["1f4aa-1f3fb"],
        ":haircut_tone5:": ["1f487-1f3ff"],
        ":haircut_tone4:": ["1f487-1f3fe"],
        ":haircut_tone3:": ["1f487-1f3fd"],
        ":haircut_tone2:": ["1f487-1f3fc"],
        ":haircut_tone1:": ["1f487-1f3fb"],
        ":massage_tone5:": ["1f486-1f3ff"],
        ":massage_tone4:": ["1f486-1f3fe"],
        ":massage_tone3:": ["1f486-1f3fd"],
        ":massage_tone2:": ["1f486-1f3fc"],
        ":massage_tone1:": ["1f486-1f3fb"],
        ":nail_care_tone5:": ["1f485-1f3ff"],
        ":nail_care_tone4:": ["1f485-1f3fe"],
        ":nail_care_tone3:": ["1f485-1f3fd"],
        ":nail_care_tone2:": ["1f485-1f3fc"],
        ":nail_care_tone1:": ["1f485-1f3fb"],
        ":dancer_tone5:": ["1f483-1f3ff"],
        ":dancer_tone4:": ["1f483-1f3fe"],
        ":dancer_tone3:": ["1f483-1f3fd"],
        ":dancer_tone2:": ["1f483-1f3fc"],
        ":dancer_tone1:": ["1f483-1f3fb"],
        ":guardsman_tone5:": ["1f482-1f3ff"],
        ":guardsman_tone4:": ["1f482-1f3fe"],
        ":guardsman_tone3:": ["1f482-1f3fd"],
        ":guardsman_tone2:": ["1f482-1f3fc"],
        ":guardsman_tone1:": ["1f482-1f3fb"],
        ":information_desk_person_tone5:": ["1f481-1f3ff"],
        ":information_desk_person_tone4:": ["1f481-1f3fe"],
        ":information_desk_person_tone3:": ["1f481-1f3fd"],
        ":information_desk_person_tone2:": ["1f481-1f3fc"],
        ":information_desk_person_tone1:": ["1f481-1f3fb"],
        ":angel_tone5:": ["1f47c-1f3ff"],
        ":angel_tone4:": ["1f47c-1f3fe"],
        ":angel_tone3:": ["1f47c-1f3fd"],
        ":angel_tone2:": ["1f47c-1f3fc"],
        ":angel_tone1:": ["1f47c-1f3fb"],
        ":princess_tone5:": ["1f478-1f3ff"],
        ":princess_tone4:": ["1f478-1f3fe"],
        ":princess_tone3:": ["1f478-1f3fd"],
        ":princess_tone2:": ["1f478-1f3fc"],
        ":princess_tone1:": ["1f478-1f3fb"],
        ":construction_worker_tone5:": ["1f477-1f3ff"],
        ":construction_worker_tone4:": ["1f477-1f3fe"],
        ":construction_worker_tone3:": ["1f477-1f3fd"],
        ":construction_worker_tone2:": ["1f477-1f3fc"],
        ":construction_worker_tone1:": ["1f477-1f3fb"],
        ":baby_tone5:": ["1f476-1f3ff"],
        ":baby_tone4:": ["1f476-1f3fe"],
        ":baby_tone3:": ["1f476-1f3fd"],
        ":baby_tone2:": ["1f476-1f3fc"],
        ":baby_tone1:": ["1f476-1f3fb"],
        ":older_woman_tone5:": ["1f475-1f3ff"],
        ":grandma_tone5:": ["1f475-1f3ff"],
        ":older_woman_tone4:": ["1f475-1f3fe"],
        ":grandma_tone4:": ["1f475-1f3fe"],
        ":older_woman_tone3:": ["1f475-1f3fd"],
        ":grandma_tone3:": ["1f475-1f3fd"],
        ":older_woman_tone2:": ["1f475-1f3fc"],
        ":grandma_tone2:": ["1f475-1f3fc"],
        ":older_woman_tone1:": ["1f475-1f3fb"],
        ":grandma_tone1:": ["1f475-1f3fb"],
        ":older_man_tone5:": ["1f474-1f3ff"],
        ":older_man_tone4:": ["1f474-1f3fe"],
        ":older_man_tone3:": ["1f474-1f3fd"],
        ":older_man_tone2:": ["1f474-1f3fc"],
        ":older_man_tone1:": ["1f474-1f3fb"],
        ":man_with_turban_tone5:": ["1f473-1f3ff"],
        ":man_with_turban_tone4:": ["1f473-1f3fe"],
        ":man_with_turban_tone3:": ["1f473-1f3fd"],
        ":man_with_turban_tone2:": ["1f473-1f3fc"],
        ":man_with_turban_tone1:": ["1f473-1f3fb"],
        ":man_with_gua_pi_mao_tone5:": ["1f472-1f3ff"],
        ":man_with_gua_pi_mao_tone4:": ["1f472-1f3fe"],
        ":man_with_gua_pi_mao_tone3:": ["1f472-1f3fd"],
        ":man_with_gua_pi_mao_tone2:": ["1f472-1f3fc"],
        ":man_with_gua_pi_mao_tone1:": ["1f472-1f3fb"],
        ":person_with_blond_hair_tone5:": ["1f471-1f3ff"],
        ":person_with_blond_hair_tone4:": ["1f471-1f3fe"],
        ":person_with_blond_hair_tone3:": ["1f471-1f3fd"],
        ":person_with_blond_hair_tone2:": ["1f471-1f3fc"],
        ":person_with_blond_hair_tone1:": ["1f471-1f3fb"],
        ":bride_with_veil_tone5:": ["1f470-1f3ff"],
        ":bride_with_veil_tone4:": ["1f470-1f3fe"],
        ":bride_with_veil_tone3:": ["1f470-1f3fd"],
        ":bride_with_veil_tone2:": ["1f470-1f3fc"],
        ":bride_with_veil_tone1:": ["1f470-1f3fb"],
        ":cop_tone5:": ["1f46e-1f3ff"],
        ":cop_tone4:": ["1f46e-1f3fe"],
        ":cop_tone3:": ["1f46e-1f3fd"],
        ":cop_tone2:": ["1f46e-1f3fc"],
        ":cop_tone1:": ["1f46e-1f3fb"],
        ":woman_tone5:": ["1f469-1f3ff"],
        ":woman_tone4:": ["1f469-1f3fe"],
        ":woman_tone3:": ["1f469-1f3fd"],
        ":woman_tone2:": ["1f469-1f3fc"],
        ":woman_tone1:": ["1f469-1f3fb"],
        ":man_tone5:": ["1f468-1f3ff"],
        ":man_tone4:": ["1f468-1f3fe"],
        ":man_tone3:": ["1f468-1f3fd"],
        ":man_tone2:": ["1f468-1f3fc"],
        ":man_tone1:": ["1f468-1f3fb"],
        ":girl_tone5:": ["1f467-1f3ff"],
        ":girl_tone4:": ["1f467-1f3fe"],
        ":girl_tone3:": ["1f467-1f3fd"],
        ":girl_tone2:": ["1f467-1f3fc"],
        ":girl_tone1:": ["1f467-1f3fb"],
        ":boy_tone5:": ["1f466-1f3ff"],
        ":boy_tone4:": ["1f466-1f3fe"],
        ":boy_tone3:": ["1f466-1f3fd"],
        ":boy_tone2:": ["1f466-1f3fc"],
        ":boy_tone1:": ["1f466-1f3fb"],
        ":open_hands_tone5:": ["1f450-1f3ff"],
        ":open_hands_tone4:": ["1f450-1f3fe"],
        ":open_hands_tone3:": ["1f450-1f3fd"],
        ":open_hands_tone2:": ["1f450-1f3fc"],
        ":open_hands_tone1:": ["1f450-1f3fb"],
        ":clap_tone5:": ["1f44f-1f3ff"],
        ":clap_tone4:": ["1f44f-1f3fe"],
        ":clap_tone3:": ["1f44f-1f3fd"],
        ":clap_tone2:": ["1f44f-1f3fc"],
        ":clap_tone1:": ["1f44f-1f3fb"],
        ":thumbsdown_tone5:": ["1f44e-1f3ff"],
        ":-1_tone5:": ["1f44e-1f3ff"],
        ":thumbsdown_tone4:": ["1f44e-1f3fe"],
        ":-1_tone4:": ["1f44e-1f3fe"],
        ":thumbsdown_tone3:": ["1f44e-1f3fd"],
        ":-1_tone3:": ["1f44e-1f3fd"],
        ":thumbsdown_tone2:": ["1f44e-1f3fc"],
        ":-1_tone2:": ["1f44e-1f3fc"],
        ":thumbsdown_tone1:": ["1f44e-1f3fb"],
        ":-1_tone1:": ["1f44e-1f3fb"],
        ":thumbsup_tone5:": ["1f44d-1f3ff"],
        ":+1_tone5:": ["1f44d-1f3ff"],
        ":thumbsup_tone4:": ["1f44d-1f3fe"],
        ":+1_tone4:": ["1f44d-1f3fe"],
        ":thumbsup_tone3:": ["1f44d-1f3fd"],
        ":+1_tone3:": ["1f44d-1f3fd"],
        ":thumbsup_tone2:": ["1f44d-1f3fc"],
        ":+1_tone2:": ["1f44d-1f3fc"],
        ":thumbsup_tone1:": ["1f44d-1f3fb"],
        ":+1_tone1:": ["1f44d-1f3fb"],
        ":ok_hand_tone5:": ["1f44c-1f3ff"],
        ":ok_hand_tone4:": ["1f44c-1f3fe"],
        ":ok_hand_tone3:": ["1f44c-1f3fd"],
        ":ok_hand_tone2:": ["1f44c-1f3fc"],
        ":ok_hand_tone1:": ["1f44c-1f3fb"],
        ":wave_tone5:": ["1f44b-1f3ff"],
        ":wave_tone4:": ["1f44b-1f3fe"],
        ":wave_tone3:": ["1f44b-1f3fd"],
        ":wave_tone2:": ["1f44b-1f3fc"],
        ":wave_tone1:": ["1f44b-1f3fb"],
        ":punch_tone5:": ["1f44a-1f3ff"],
        ":punch_tone4:": ["1f44a-1f3fe"],
        ":punch_tone3:": ["1f44a-1f3fd"],
        ":punch_tone2:": ["1f44a-1f3fc"],
        ":punch_tone1:": ["1f44a-1f3fb"],
        ":point_right_tone5:": ["1f449-1f3ff"],
        ":point_right_tone4:": ["1f449-1f3fe"],
        ":point_right_tone3:": ["1f449-1f3fd"],
        ":point_right_tone2:": ["1f449-1f3fc"],
        ":point_right_tone1:": ["1f449-1f3fb"],
        ":point_left_tone5:": ["1f448-1f3ff"],
        ":point_left_tone4:": ["1f448-1f3fe"],
        ":point_left_tone3:": ["1f448-1f3fd"],
        ":point_left_tone2:": ["1f448-1f3fc"],
        ":point_left_tone1:": ["1f448-1f3fb"],
        ":point_down_tone5:": ["1f447-1f3ff"],
        ":point_down_tone4:": ["1f447-1f3fe"],
        ":point_down_tone3:": ["1f447-1f3fd"],
        ":point_down_tone2:": ["1f447-1f3fc"],
        ":point_down_tone1:": ["1f447-1f3fb"],
        ":point_up_2_tone5:": ["1f446-1f3ff"],
        ":point_up_2_tone4:": ["1f446-1f3fe"],
        ":point_up_2_tone3:": ["1f446-1f3fd"],
        ":point_up_2_tone2:": ["1f446-1f3fc"],
        ":point_up_2_tone1:": ["1f446-1f3fb"],
        ":nose_tone5:": ["1f443-1f3ff"],
        ":nose_tone4:": ["1f443-1f3fe"],
        ":nose_tone3:": ["1f443-1f3fd"],
        ":nose_tone2:": ["1f443-1f3fc"],
        ":nose_tone1:": ["1f443-1f3fb"],
        ":ear_tone5:": ["1f442-1f3ff"],
        ":ear_tone4:": ["1f442-1f3fe"],
        ":ear_tone3:": ["1f442-1f3fd"],
        ":ear_tone2:": ["1f442-1f3fc"],
        ":ear_tone1:": ["1f442-1f3fb"],
        ":lifter_tone5:": ["1f3cb-1f3ff"],
        ":weight_lifter_tone5:": ["1f3cb-1f3ff"],
        ":lifter_tone4:": ["1f3cb-1f3fe"],
        ":weight_lifter_tone4:": ["1f3cb-1f3fe"],
        ":lifter_tone3:": ["1f3cb-1f3fd"],
        ":weight_lifter_tone3:": ["1f3cb-1f3fd"],
        ":lifter_tone2:": ["1f3cb-1f3fc"],
        ":weight_lifter_tone2:": ["1f3cb-1f3fc"],
        ":lifter_tone1:": ["1f3cb-1f3fb"],
        ":weight_lifter_tone1:": ["1f3cb-1f3fb"],
        ":swimmer_tone5:": ["1f3ca-1f3ff"],
        ":swimmer_tone4:": ["1f3ca-1f3fe"],
        ":swimmer_tone3:": ["1f3ca-1f3fd"],
        ":swimmer_tone2:": ["1f3ca-1f3fc"],
        ":swimmer_tone1:": ["1f3ca-1f3fb"],
        ":horse_racing_tone5:": ["1f3c7-1f3ff"],
        ":horse_racing_tone4:": ["1f3c7-1f3fe"],
        ":horse_racing_tone3:": ["1f3c7-1f3fd"],
        ":horse_racing_tone2:": ["1f3c7-1f3fc"],
        ":horse_racing_tone1:": ["1f3c7-1f3fb"],
        ":surfer_tone5:": ["1f3c4-1f3ff"],
        ":surfer_tone4:": ["1f3c4-1f3fe"],
        ":surfer_tone3:": ["1f3c4-1f3fd"],
        ":surfer_tone2:": ["1f3c4-1f3fc"],
        ":surfer_tone1:": ["1f3c4-1f3fb"],
        ":runner_tone5:": ["1f3c3-1f3ff"],
        ":runner_tone4:": ["1f3c3-1f3fe"],
        ":runner_tone3:": ["1f3c3-1f3fd"],
        ":runner_tone2:": ["1f3c3-1f3fc"],
        ":runner_tone1:": ["1f3c3-1f3fb"],
        ":santa_tone5:": ["1f385-1f3ff"],
        ":santa_tone4:": ["1f385-1f3fe"],
        ":santa_tone3:": ["1f385-1f3fd"],
        ":santa_tone2:": ["1f385-1f3fc"],
        ":santa_tone1:": ["1f385-1f3fb"],
        ":flag_zw:": ["1f1ff-1f1fc"],
        ":zw:": ["1f1ff-1f1fc"],
        ":flag_zm:": ["1f1ff-1f1f2"],
        ":zm:": ["1f1ff-1f1f2"],
        ":flag_za:": ["1f1ff-1f1e6"],
        ":za:": ["1f1ff-1f1e6"],
        ":flag_yt:": ["1f1fe-1f1f9"],
        ":yt:": ["1f1fe-1f1f9"],
        ":flag_ye:": ["1f1fe-1f1ea"],
        ":ye:": ["1f1fe-1f1ea"],
        ":flag_xk:": ["1f1fd-1f1f0"],
        ":xk:": ["1f1fd-1f1f0"],
        ":flag_ws:": ["1f1fc-1f1f8"],
        ":ws:": ["1f1fc-1f1f8"],
        ":flag_wf:": ["1f1fc-1f1eb"],
        ":wf:": ["1f1fc-1f1eb"],
        ":flag_vu:": ["1f1fb-1f1fa"],
        ":vu:": ["1f1fb-1f1fa"],
        ":flag_vn:": ["1f1fb-1f1f3"],
        ":vn:": ["1f1fb-1f1f3"],
        ":flag_vi:": ["1f1fb-1f1ee"],
        ":vi:": ["1f1fb-1f1ee"],
        ":flag_vg:": ["1f1fb-1f1ec"],
        ":vg:": ["1f1fb-1f1ec"],
        ":flag_ve:": ["1f1fb-1f1ea"],
        ":ve:": ["1f1fb-1f1ea"],
        ":flag_vc:": ["1f1fb-1f1e8"],
        ":vc:": ["1f1fb-1f1e8"],
        ":flag_va:": ["1f1fb-1f1e6"],
        ":va:": ["1f1fb-1f1e6"],
        ":flag_uz:": ["1f1fa-1f1ff"],
        ":uz:": ["1f1fa-1f1ff"],
        ":flag_uy:": ["1f1fa-1f1fe"],
        ":uy:": ["1f1fa-1f1fe"],
        ":flag_us:": ["1f1fa-1f1f8"],
        ":us:": ["1f1fa-1f1f8"],
        ":flag_um:": ["1f1fa-1f1f2"],
        ":um:": ["1f1fa-1f1f2"],
        ":flag_ug:": ["1f1fa-1f1ec"],
        ":ug:": ["1f1fa-1f1ec"],
        ":flag_ua:": ["1f1fa-1f1e6"],
        ":ua:": ["1f1fa-1f1e6"],
        ":flag_tz:": ["1f1f9-1f1ff"],
        ":tz:": ["1f1f9-1f1ff"],
        ":flag_tw:": ["1f1f9-1f1fc"],
        ":tw:": ["1f1f9-1f1fc"],
        ":flag_tv:": ["1f1f9-1f1fb"],
        ":tuvalu:": ["1f1f9-1f1fb"],
        ":flag_tt:": ["1f1f9-1f1f9"],
        ":tt:": ["1f1f9-1f1f9"],
        ":flag_tr:": ["1f1f9-1f1f7"],
        ":tr:": ["1f1f9-1f1f7"],
        ":flag_to:": ["1f1f9-1f1f4"],
        ":to:": ["1f1f9-1f1f4"],
        ":flag_tn:": ["1f1f9-1f1f3"],
        ":tn:": ["1f1f9-1f1f3"],
        ":flag_tm:": ["1f1f9-1f1f2"],
        ":turkmenistan:": ["1f1f9-1f1f2"],
        ":flag_tl:": ["1f1f9-1f1f1"],
        ":tl:": ["1f1f9-1f1f1"],
        ":flag_tk:": ["1f1f9-1f1f0"],
        ":tk:": ["1f1f9-1f1f0"],
        ":flag_tj:": ["1f1f9-1f1ef"],
        ":tj:": ["1f1f9-1f1ef"],
        ":flag_th:": ["1f1f9-1f1ed"],
        ":th:": ["1f1f9-1f1ed"],
        ":flag_tg:": ["1f1f9-1f1ec"],
        ":tg:": ["1f1f9-1f1ec"],
        ":flag_tf:": ["1f1f9-1f1eb"],
        ":tf:": ["1f1f9-1f1eb"],
        ":flag_td:": ["1f1f9-1f1e9"],
        ":td:": ["1f1f9-1f1e9"],
        ":flag_tc:": ["1f1f9-1f1e8"],
        ":tc:": ["1f1f9-1f1e8"],
        ":flag_ta:": ["1f1f9-1f1e6"],
        ":ta:": ["1f1f9-1f1e6"],
        ":flag_sz:": ["1f1f8-1f1ff"],
        ":sz:": ["1f1f8-1f1ff"],
        ":flag_sy:": ["1f1f8-1f1fe"],
        ":sy:": ["1f1f8-1f1fe"],
        ":flag_sx:": ["1f1f8-1f1fd"],
        ":sx:": ["1f1f8-1f1fd"],
        ":flag_sv:": ["1f1f8-1f1fb"],
        ":sv:": ["1f1f8-1f1fb"],
        ":flag_st:": ["1f1f8-1f1f9"],
        ":st:": ["1f1f8-1f1f9"],
        ":flag_ss:": ["1f1f8-1f1f8"],
        ":ss:": ["1f1f8-1f1f8"],
        ":flag_sr:": ["1f1f8-1f1f7"],
        ":sr:": ["1f1f8-1f1f7"],
        ":flag_so:": ["1f1f8-1f1f4"],
        ":so:": ["1f1f8-1f1f4"],
        ":flag_sn:": ["1f1f8-1f1f3"],
        ":sn:": ["1f1f8-1f1f3"],
        ":flag_sm:": ["1f1f8-1f1f2"],
        ":sm:": ["1f1f8-1f1f2"],
        ":flag_sl:": ["1f1f8-1f1f1"],
        ":sl:": ["1f1f8-1f1f1"],
        ":flag_sk:": ["1f1f8-1f1f0"],
        ":sk:": ["1f1f8-1f1f0"],
        ":flag_sj:": ["1f1f8-1f1ef"],
        ":sj:": ["1f1f8-1f1ef"],
        ":flag_si:": ["1f1f8-1f1ee"],
        ":si:": ["1f1f8-1f1ee"],
        ":flag_sh:": ["1f1f8-1f1ed"],
        ":sh:": ["1f1f8-1f1ed"],
        ":flag_sg:": ["1f1f8-1f1ec"],
        ":sg:": ["1f1f8-1f1ec"],
        ":flag_se:": ["1f1f8-1f1ea"],
        ":se:": ["1f1f8-1f1ea"],
        ":flag_sd:": ["1f1f8-1f1e9"],
        ":sd:": ["1f1f8-1f1e9"],
        ":flag_sc:": ["1f1f8-1f1e8"],
        ":sc:": ["1f1f8-1f1e8"],
        ":flag_sb:": ["1f1f8-1f1e7"],
        ":sb:": ["1f1f8-1f1e7"],
        ":flag_sa:": ["1f1f8-1f1e6"],
        ":saudiarabia:": ["1f1f8-1f1e6"],
        ":saudi:": ["1f1f8-1f1e6"],
        ":flag_rw:": ["1f1f7-1f1fc"],
        ":rw:": ["1f1f7-1f1fc"],
        ":flag_ru:": ["1f1f7-1f1fa"],
        ":ru:": ["1f1f7-1f1fa"],
        ":flag_rs:": ["1f1f7-1f1f8"],
        ":rs:": ["1f1f7-1f1f8"],
        ":flag_ro:": ["1f1f7-1f1f4"],
        ":ro:": ["1f1f7-1f1f4"],
        ":flag_re:": ["1f1f7-1f1ea"],
        ":re:": ["1f1f7-1f1ea"],
        ":flag_qa:": ["1f1f6-1f1e6"],
        ":qa:": ["1f1f6-1f1e6"],
        ":flag_py:": ["1f1f5-1f1fe"],
        ":py:": ["1f1f5-1f1fe"],
        ":flag_pw:": ["1f1f5-1f1fc"],
        ":pw:": ["1f1f5-1f1fc"],
        ":flag_pt:": ["1f1f5-1f1f9"],
        ":pt:": ["1f1f5-1f1f9"],
        ":flag_ps:": ["1f1f5-1f1f8"],
        ":ps:": ["1f1f5-1f1f8"],
        ":flag_pr:": ["1f1f5-1f1f7"],
        ":pr:": ["1f1f5-1f1f7"],
        ":flag_pn:": ["1f1f5-1f1f3"],
        ":pn:": ["1f1f5-1f1f3"],
        ":flag_pm:": ["1f1f5-1f1f2"],
        ":pm:": ["1f1f5-1f1f2"],
        ":flag_pl:": ["1f1f5-1f1f1"],
        ":pl:": ["1f1f5-1f1f1"],
        ":flag_pk:": ["1f1f5-1f1f0"],
        ":pk:": ["1f1f5-1f1f0"],
        ":flag_ph:": ["1f1f5-1f1ed"],
        ":ph:": ["1f1f5-1f1ed"],
        ":flag_pg:": ["1f1f5-1f1ec"],
        ":pg:": ["1f1f5-1f1ec"],
        ":flag_pf:": ["1f1f5-1f1eb"],
        ":pf:": ["1f1f5-1f1eb"],
        ":flag_pe:": ["1f1f5-1f1ea"],
        ":pe:": ["1f1f5-1f1ea"],
        ":flag_pa:": ["1f1f5-1f1e6"],
        ":pa:": ["1f1f5-1f1e6"],
        ":flag_om:": ["1f1f4-1f1f2"],
        ":om:": ["1f1f4-1f1f2"],
        ":flag_nz:": ["1f1f3-1f1ff"],
        ":nz:": ["1f1f3-1f1ff"],
        ":flag_nu:": ["1f1f3-1f1fa"],
        ":nu:": ["1f1f3-1f1fa"],
        ":flag_nr:": ["1f1f3-1f1f7"],
        ":nr:": ["1f1f3-1f1f7"],
        ":flag_np:": ["1f1f3-1f1f5"],
        ":np:": ["1f1f3-1f1f5"],
        ":flag_no:": ["1f1f3-1f1f4"],
        ":no:": ["1f1f3-1f1f4"],
        ":flag_nl:": ["1f1f3-1f1f1"],
        ":nl:": ["1f1f3-1f1f1"],
        ":flag_ni:": ["1f1f3-1f1ee"],
        ":ni:": ["1f1f3-1f1ee"],
        ":flag_ng:": ["1f1f3-1f1ec"],
        ":nigeria:": ["1f1f3-1f1ec"],
        ":flag_nf:": ["1f1f3-1f1eb"],
        ":nf:": ["1f1f3-1f1eb"],
        ":flag_ne:": ["1f1f3-1f1ea"],
        ":ne:": ["1f1f3-1f1ea"],
        ":flag_nc:": ["1f1f3-1f1e8"],
        ":nc:": ["1f1f3-1f1e8"],
        ":flag_na:": ["1f1f3-1f1e6"],
        ":na:": ["1f1f3-1f1e6"],
        ":flag_mz:": ["1f1f2-1f1ff"],
        ":mz:": ["1f1f2-1f1ff"],
        ":flag_my:": ["1f1f2-1f1fe"],
        ":my:": ["1f1f2-1f1fe"],
        ":flag_mx:": ["1f1f2-1f1fd"],
        ":mx:": ["1f1f2-1f1fd"],
        ":flag_mw:": ["1f1f2-1f1fc"],
        ":mw:": ["1f1f2-1f1fc"],
        ":flag_mv:": ["1f1f2-1f1fb"],
        ":mv:": ["1f1f2-1f1fb"],
        ":flag_mu:": ["1f1f2-1f1fa"],
        ":mu:": ["1f1f2-1f1fa"],
        ":flag_mt:": ["1f1f2-1f1f9"],
        ":mt:": ["1f1f2-1f1f9"],
        ":flag_ms:": ["1f1f2-1f1f8"],
        ":ms:": ["1f1f2-1f1f8"],
        ":flag_mr:": ["1f1f2-1f1f7"],
        ":mr:": ["1f1f2-1f1f7"],
        ":flag_mq:": ["1f1f2-1f1f6"],
        ":mq:": ["1f1f2-1f1f6"],
        ":flag_mp:": ["1f1f2-1f1f5"],
        ":mp:": ["1f1f2-1f1f5"],
        ":flag_mo:": ["1f1f2-1f1f4"],
        ":mo:": ["1f1f2-1f1f4"],
        ":flag_mn:": ["1f1f2-1f1f3"],
        ":mn:": ["1f1f2-1f1f3"],
        ":flag_mm:": ["1f1f2-1f1f2"],
        ":mm:": ["1f1f2-1f1f2"],
        ":flag_ml:": ["1f1f2-1f1f1"],
        ":ml:": ["1f1f2-1f1f1"],
        ":flag_mk:": ["1f1f2-1f1f0"],
        ":mk:": ["1f1f2-1f1f0"],
        ":flag_mh:": ["1f1f2-1f1ed"],
        ":mh:": ["1f1f2-1f1ed"],
        ":flag_mg:": ["1f1f2-1f1ec"],
        ":mg:": ["1f1f2-1f1ec"],
        ":flag_mf:": ["1f1f2-1f1eb"],
        ":mf:": ["1f1f2-1f1eb"],
        ":flag_me:": ["1f1f2-1f1ea"],
        ":me:": ["1f1f2-1f1ea"],
        ":flag_md:": ["1f1f2-1f1e9"],
        ":md:": ["1f1f2-1f1e9"],
        ":flag_mc:": ["1f1f2-1f1e8"],
        ":mc:": ["1f1f2-1f1e8"],
        ":flag_ma:": ["1f1f2-1f1e6"],
        ":ma:": ["1f1f2-1f1e6"],
        ":flag_ly:": ["1f1f1-1f1fe"],
        ":ly:": ["1f1f1-1f1fe"],
        ":flag_lv:": ["1f1f1-1f1fb"],
        ":lv:": ["1f1f1-1f1fb"],
        ":flag_lu:": ["1f1f1-1f1fa"],
        ":lu:": ["1f1f1-1f1fa"],
        ":flag_lt:": ["1f1f1-1f1f9"],
        ":lt:": ["1f1f1-1f1f9"],
        ":flag_ls:": ["1f1f1-1f1f8"],
        ":ls:": ["1f1f1-1f1f8"],
        ":flag_lr:": ["1f1f1-1f1f7"],
        ":lr:": ["1f1f1-1f1f7"],
        ":flag_lk:": ["1f1f1-1f1f0"],
        ":lk:": ["1f1f1-1f1f0"],
        ":flag_li:": ["1f1f1-1f1ee"],
        ":li:": ["1f1f1-1f1ee"],
        ":flag_lc:": ["1f1f1-1f1e8"],
        ":lc:": ["1f1f1-1f1e8"],
        ":flag_lb:": ["1f1f1-1f1e7"],
        ":lb:": ["1f1f1-1f1e7"],
        ":flag_la:": ["1f1f1-1f1e6"],
        ":la:": ["1f1f1-1f1e6"],
        ":flag_kz:": ["1f1f0-1f1ff"],
        ":kz:": ["1f1f0-1f1ff"],
        ":flag_ky:": ["1f1f0-1f1fe"],
        ":ky:": ["1f1f0-1f1fe"],
        ":flag_kw:": ["1f1f0-1f1fc"],
        ":kw:": ["1f1f0-1f1fc"],
        ":flag_kr:": ["1f1f0-1f1f7"],
        ":kr:": ["1f1f0-1f1f7"],
        ":flag_kp:": ["1f1f0-1f1f5"],
        ":kp:": ["1f1f0-1f1f5"],
        ":flag_kn:": ["1f1f0-1f1f3"],
        ":kn:": ["1f1f0-1f1f3"],
        ":flag_km:": ["1f1f0-1f1f2"],
        ":km:": ["1f1f0-1f1f2"],
        ":flag_ki:": ["1f1f0-1f1ee"],
        ":ki:": ["1f1f0-1f1ee"],
        ":flag_kh:": ["1f1f0-1f1ed"],
        ":kh:": ["1f1f0-1f1ed"],
        ":flag_kg:": ["1f1f0-1f1ec"],
        ":kg:": ["1f1f0-1f1ec"],
        ":flag_ke:": ["1f1f0-1f1ea"],
        ":ke:": ["1f1f0-1f1ea"],
        ":flag_jp:": ["1f1ef-1f1f5"],
        ":jp:": ["1f1ef-1f1f5"],
        ":flag_jo:": ["1f1ef-1f1f4"],
        ":jo:": ["1f1ef-1f1f4"],
        ":flag_jm:": ["1f1ef-1f1f2"],
        ":jm:": ["1f1ef-1f1f2"],
        ":flag_je:": ["1f1ef-1f1ea"],
        ":je:": ["1f1ef-1f1ea"],
        ":flag_it:": ["1f1ee-1f1f9"],
        ":it:": ["1f1ee-1f1f9"],
        ":flag_is:": ["1f1ee-1f1f8"],
        ":is:": ["1f1ee-1f1f8"],
        ":flag_ir:": ["1f1ee-1f1f7"],
        ":ir:": ["1f1ee-1f1f7"],
        ":flag_iq:": ["1f1ee-1f1f6"],
        ":iq:": ["1f1ee-1f1f6"],
        ":flag_io:": ["1f1ee-1f1f4"],
        ":io:": ["1f1ee-1f1f4"],
        ":flag_in:": ["1f1ee-1f1f3"],
        ":in:": ["1f1ee-1f1f3"],
        ":flag_im:": ["1f1ee-1f1f2"],
        ":im:": ["1f1ee-1f1f2"],
        ":flag_il:": ["1f1ee-1f1f1"],
        ":il:": ["1f1ee-1f1f1"],
        ":flag_ie:": ["1f1ee-1f1ea"],
        ":ie:": ["1f1ee-1f1ea"],
        ":flag_id:": ["1f1ee-1f1e9"],
        ":indonesia:": ["1f1ee-1f1e9"],
        ":flag_ic:": ["1f1ee-1f1e8"],
        ":ic:": ["1f1ee-1f1e8"],
        ":flag_hu:": ["1f1ed-1f1fa"],
        ":hu:": ["1f1ed-1f1fa"],
        ":flag_ht:": ["1f1ed-1f1f9"],
        ":ht:": ["1f1ed-1f1f9"],
        ":flag_hr:": ["1f1ed-1f1f7"],
        ":hr:": ["1f1ed-1f1f7"],
        ":flag_hn:": ["1f1ed-1f1f3"],
        ":hn:": ["1f1ed-1f1f3"],
        ":flag_hm:": ["1f1ed-1f1f2"],
        ":hm:": ["1f1ed-1f1f2"],
        ":flag_hk:": ["1f1ed-1f1f0"],
        ":hk:": ["1f1ed-1f1f0"],
        ":flag_gy:": ["1f1ec-1f1fe"],
        ":gy:": ["1f1ec-1f1fe"],
        ":flag_gw:": ["1f1ec-1f1fc"],
        ":gw:": ["1f1ec-1f1fc"],
        ":flag_gu:": ["1f1ec-1f1fa"],
        ":gu:": ["1f1ec-1f1fa"],
        ":flag_gt:": ["1f1ec-1f1f9"],
        ":gt:": ["1f1ec-1f1f9"],
        ":flag_gs:": ["1f1ec-1f1f8"],
        ":gs:": ["1f1ec-1f1f8"],
        ":flag_gr:": ["1f1ec-1f1f7"],
        ":gr:": ["1f1ec-1f1f7"],
        ":flag_gq:": ["1f1ec-1f1f6"],
        ":gq:": ["1f1ec-1f1f6"],
        ":flag_gp:": ["1f1ec-1f1f5"],
        ":gp:": ["1f1ec-1f1f5"],
        ":flag_gn:": ["1f1ec-1f1f3"],
        ":gn:": ["1f1ec-1f1f3"],
        ":flag_gm:": ["1f1ec-1f1f2"],
        ":gm:": ["1f1ec-1f1f2"],
        ":flag_gl:": ["1f1ec-1f1f1"],
        ":gl:": ["1f1ec-1f1f1"],
        ":flag_gi:": ["1f1ec-1f1ee"],
        ":gi:": ["1f1ec-1f1ee"],
        ":flag_gh:": ["1f1ec-1f1ed"],
        ":gh:": ["1f1ec-1f1ed"],
        ":flag_gg:": ["1f1ec-1f1ec"],
        ":gg:": ["1f1ec-1f1ec"],
        ":flag_gf:": ["1f1ec-1f1eb"],
        ":gf:": ["1f1ec-1f1eb"],
        ":flag_ge:": ["1f1ec-1f1ea"],
        ":ge:": ["1f1ec-1f1ea"],
        ":flag_gd:": ["1f1ec-1f1e9"],
        ":gd:": ["1f1ec-1f1e9"],
        ":flag_gb:": ["1f1ec-1f1e7"],
        ":gb:": ["1f1ec-1f1e7"],
        ":flag_ga:": ["1f1ec-1f1e6"],
        ":ga:": ["1f1ec-1f1e6"],
        ":flag_fr:": ["1f1eb-1f1f7"],
        ":fr:": ["1f1eb-1f1f7"],
        ":flag_fo:": ["1f1eb-1f1f4"],
        ":fo:": ["1f1eb-1f1f4"],
        ":flag_fm:": ["1f1eb-1f1f2"],
        ":fm:": ["1f1eb-1f1f2"],
        ":flag_fk:": ["1f1eb-1f1f0"],
        ":fk:": ["1f1eb-1f1f0"],
        ":flag_fj:": ["1f1eb-1f1ef"],
        ":fj:": ["1f1eb-1f1ef"],
        ":flag_fi:": ["1f1eb-1f1ee"],
        ":fi:": ["1f1eb-1f1ee"],
        ":flag_eu:": ["1f1ea-1f1fa"],
        ":eu:": ["1f1ea-1f1fa"],
        ":flag_et:": ["1f1ea-1f1f9"],
        ":et:": ["1f1ea-1f1f9"],
        ":flag_es:": ["1f1ea-1f1f8"],
        ":es:": ["1f1ea-1f1f8"],
        ":flag_er:": ["1f1ea-1f1f7"],
        ":er:": ["1f1ea-1f1f7"],
        ":flag_eh:": ["1f1ea-1f1ed"],
        ":eh:": ["1f1ea-1f1ed"],
        ":flag_eg:": ["1f1ea-1f1ec"],
        ":eg:": ["1f1ea-1f1ec"],
        ":flag_ee:": ["1f1ea-1f1ea"],
        ":ee:": ["1f1ea-1f1ea"],
        ":flag_ec:": ["1f1ea-1f1e8"],
        ":ec:": ["1f1ea-1f1e8"],
        ":flag_ea:": ["1f1ea-1f1e6"],
        ":ea:": ["1f1ea-1f1e6"],
        ":flag_dz:": ["1f1e9-1f1ff"],
        ":dz:": ["1f1e9-1f1ff"],
        ":flag_do:": ["1f1e9-1f1f4"],
        ":do:": ["1f1e9-1f1f4"],
        ":flag_dm:": ["1f1e9-1f1f2"],
        ":dm:": ["1f1e9-1f1f2"],
        ":flag_dk:": ["1f1e9-1f1f0"],
        ":dk:": ["1f1e9-1f1f0"],
        ":flag_dj:": ["1f1e9-1f1ef"],
        ":dj:": ["1f1e9-1f1ef"],
        ":flag_dg:": ["1f1e9-1f1ec"],
        ":dg:": ["1f1e9-1f1ec"],
        ":flag_de:": ["1f1e9-1f1ea"],
        ":de:": ["1f1e9-1f1ea"],
        ":flag_cz:": ["1f1e8-1f1ff"],
        ":cz:": ["1f1e8-1f1ff"],
        ":flag_cy:": ["1f1e8-1f1fe"],
        ":cy:": ["1f1e8-1f1fe"],
        ":flag_cx:": ["1f1e8-1f1fd"],
        ":cx:": ["1f1e8-1f1fd"],
        ":flag_cw:": ["1f1e8-1f1fc"],
        ":cw:": ["1f1e8-1f1fc"],
        ":flag_cv:": ["1f1e8-1f1fb"],
        ":cv:": ["1f1e8-1f1fb"],
        ":flag_cu:": ["1f1e8-1f1fa"],
        ":cu:": ["1f1e8-1f1fa"],
        ":flag_cr:": ["1f1e8-1f1f7"],
        ":cr:": ["1f1e8-1f1f7"],
        ":flag_cp:": ["1f1e8-1f1f5"],
        ":cp:": ["1f1e8-1f1f5"],
        ":flag_co:": ["1f1e8-1f1f4"],
        ":co:": ["1f1e8-1f1f4"],
        ":flag_cn:": ["1f1e8-1f1f3"],
        ":cn:": ["1f1e8-1f1f3"],
        ":flag_cm:": ["1f1e8-1f1f2"],
        ":cm:": ["1f1e8-1f1f2"],
        ":flag_cl:": ["1f1e8-1f1f1"],
        ":chile:": ["1f1e8-1f1f1"],
        ":flag_ck:": ["1f1e8-1f1f0"],
        ":ck:": ["1f1e8-1f1f0"],
        ":flag_ci:": ["1f1e8-1f1ee"],
        ":ci:": ["1f1e8-1f1ee"],
        ":flag_ch:": ["1f1e8-1f1ed"],
        ":ch:": ["1f1e8-1f1ed"],
        ":flag_cg:": ["1f1e8-1f1ec"],
        ":cg:": ["1f1e8-1f1ec"],
        ":flag_cf:": ["1f1e8-1f1eb"],
        ":cf:": ["1f1e8-1f1eb"],
        ":flag_cd:": ["1f1e8-1f1e9"],
        ":congo:": ["1f1e8-1f1e9"],
        ":flag_cc:": ["1f1e8-1f1e8"],
        ":cc:": ["1f1e8-1f1e8"],
        ":flag_ca:": ["1f1e8-1f1e6"],
        ":ca:": ["1f1e8-1f1e6"],
        ":flag_bz:": ["1f1e7-1f1ff"],
        ":bz:": ["1f1e7-1f1ff"],
        ":flag_by:": ["1f1e7-1f1fe"],
        ":by:": ["1f1e7-1f1fe"],
        ":flag_bw:": ["1f1e7-1f1fc"],
        ":bw:": ["1f1e7-1f1fc"],
        ":flag_bv:": ["1f1e7-1f1fb"],
        ":bv:": ["1f1e7-1f1fb"],
        ":flag_bt:": ["1f1e7-1f1f9"],
        ":bt:": ["1f1e7-1f1f9"],
        ":flag_bs:": ["1f1e7-1f1f8"],
        ":bs:": ["1f1e7-1f1f8"],
        ":flag_br:": ["1f1e7-1f1f7"],
        ":br:": ["1f1e7-1f1f7"],
        ":flag_bq:": ["1f1e7-1f1f6"],
        ":bq:": ["1f1e7-1f1f6"],
        ":flag_bo:": ["1f1e7-1f1f4"],
        ":bo:": ["1f1e7-1f1f4"],
        ":flag_bn:": ["1f1e7-1f1f3"],
        ":bn:": ["1f1e7-1f1f3"],
        ":flag_bm:": ["1f1e7-1f1f2"],
        ":bm:": ["1f1e7-1f1f2"],
        ":flag_bl:": ["1f1e7-1f1f1"],
        ":bl:": ["1f1e7-1f1f1"],
        ":flag_bj:": ["1f1e7-1f1ef"],
        ":bj:": ["1f1e7-1f1ef"],
        ":flag_bi:": ["1f1e7-1f1ee"],
        ":bi:": ["1f1e7-1f1ee"],
        ":flag_bh:": ["1f1e7-1f1ed"],
        ":bh:": ["1f1e7-1f1ed"],
        ":flag_bg:": ["1f1e7-1f1ec"],
        ":bg:": ["1f1e7-1f1ec"],
        ":flag_bf:": ["1f1e7-1f1eb"],
        ":bf:": ["1f1e7-1f1eb"],
        ":flag_be:": ["1f1e7-1f1ea"],
        ":be:": ["1f1e7-1f1ea"],
        ":flag_bd:": ["1f1e7-1f1e9"],
        ":bd:": ["1f1e7-1f1e9"],
        ":flag_bb:": ["1f1e7-1f1e7"],
        ":bb:": ["1f1e7-1f1e7"],
        ":flag_ba:": ["1f1e7-1f1e6"],
        ":ba:": ["1f1e7-1f1e6"],
        ":flag_az:": ["1f1e6-1f1ff"],
        ":az:": ["1f1e6-1f1ff"],
        ":flag_ax:": ["1f1e6-1f1fd"],
        ":ax:": ["1f1e6-1f1fd"],
        ":flag_aw:": ["1f1e6-1f1fc"],
        ":aw:": ["1f1e6-1f1fc"],
        ":flag_au:": ["1f1e6-1f1fa"],
        ":au:": ["1f1e6-1f1fa"],
        ":flag_at:": ["1f1e6-1f1f9"],
        ":at:": ["1f1e6-1f1f9"],
        ":flag_as:": ["1f1e6-1f1f8"],
        ":as:": ["1f1e6-1f1f8"],
        ":flag_ar:": ["1f1e6-1f1f7"],
        ":ar:": ["1f1e6-1f1f7"],
        ":flag_aq:": ["1f1e6-1f1f6"],
        ":aq:": ["1f1e6-1f1f6"],
        ":flag_ao:": ["1f1e6-1f1f4"],
        ":ao:": ["1f1e6-1f1f4"],
        ":flag_am:": ["1f1e6-1f1f2"],
        ":am:": ["1f1e6-1f1f2"],
        ":flag_al:": ["1f1e6-1f1f1"],
        ":al:": ["1f1e6-1f1f1"],
        ":flag_ai:": ["1f1e6-1f1ee"],
        ":ai:": ["1f1e6-1f1ee"],
        ":flag_ag:": ["1f1e6-1f1ec"],
        ":ag:": ["1f1e6-1f1ec"],
        ":flag_af:": ["1f1e6-1f1eb"],
        ":af:": ["1f1e6-1f1eb"],
        ":flag_ae:": ["1f1e6-1f1ea"],
        ":ae:": ["1f1e6-1f1ea"],
        ":flag_ad:": ["1f1e6-1f1e9"],
        ":ad:": ["1f1e6-1f1e9"],
        ":flag_ac:": ["1f1e6-1f1e8"],
        ":ac:": ["1f1e6-1f1e8"],
        ":mahjong:": ["1f004-fe0f", "1f004"],
        ":parking:": ["1f17f-fe0f", "1f17f"],
        ":sa:": ["1f202-fe0f", "1f202"],
        ":u7121:": ["1f21a-fe0f", "1f21a"],
        ":u6307:": ["1f22f-fe0f", "1f22f"],
        ":u6708:": ["1f237-fe0f", "1f237"],
        ":film_frames:": ["1f39e-fe0f", "1f39e"],
        ":tickets:": ["1f39f-fe0f", "1f39f"],
        ":admission_tickets:": ["1f39f-fe0f", "1f39f"],
        ":lifter:": ["1f3cb-fe0f", "1f3cb"],
        ":weight_lifter:": ["1f3cb-fe0f", "1f3cb"],
        ":golfer:": ["1f3cc-fe0f", "1f3cc"],
        ":motorcycle:": ["1f3cd-fe0f", "1f3cd"],
        ":racing_motorcycle:": ["1f3cd-fe0f", "1f3cd"],
        ":race_car:": ["1f3ce-fe0f", "1f3ce"],
        ":racing_car:": ["1f3ce-fe0f", "1f3ce"],
        ":military_medal:": ["1f396-fe0f", "1f396"],
        ":reminder_ribbon:": ["1f397-fe0f", "1f397"],
        ":hot_pepper:": ["1f336-fe0f", "1f336"],
        ":cloud_rain:": ["1f327-fe0f", "1f327"],
        ":cloud_with_rain:": ["1f327-fe0f", "1f327"],
        ":cloud_snow:": ["1f328-fe0f", "1f328"],
        ":cloud_with_snow:": ["1f328-fe0f", "1f328"],
        ":cloud_lightning:": ["1f329-fe0f", "1f329"],
        ":cloud_with_lightning:": ["1f329-fe0f", "1f329"],
        ":cloud_tornado:": ["1f32a-fe0f", "1f32a"],
        ":cloud_with_tornado:": ["1f32a-fe0f", "1f32a"],
        ":fog:": ["1f32b-fe0f", "1f32b"],
        ":wind_blowing_face:": ["1f32c-fe0f", "1f32c"],
        ":chipmunk:": ["1f43f-fe0f", "1f43f"],
        ":spider:": ["1f577-fe0f", "1f577"],
        ":spider_web:": ["1f578-fe0f",
            "1f578"],
        ":thermometer:": ["1f321-fe0f", "1f321"],
        ":microphone2:": ["1f399-fe0f", "1f399"],
        ":studio_microphone:": ["1f399-fe0f", "1f399"],
        ":level_slider:": ["1f39a-fe0f", "1f39a"],
        ":control_knobs:": ["1f39b-fe0f", "1f39b"],
        ":flag_white:": ["1f3f3-fe0f", "1f3f3"],
        ":waving_white_flag:": ["1f3f3-fe0f", "1f3f3"],
        ":rosette:": ["1f3f5-fe0f", "1f3f5"],
        ":label:": ["1f3f7-fe0f", "1f3f7"],
        ":projector:": ["1f4fd-fe0f", "1f4fd"],
        ":film_projector:": ["1f4fd-fe0f", "1f4fd"],
        ":om_symbol:": ["1f549-fe0f", "1f549"],
        ":dove:": ["1f54a-fe0f",
            "1f54a"],
        ":dove_of_peace:": ["1f54a-fe0f", "1f54a"],
        ":candle:": ["1f56f-fe0f", "1f56f"],
        ":clock:": ["1f570-fe0f", "1f570"],
        ":mantlepiece_clock:": ["1f570-fe0f", "1f570"],
        ":hole:": ["1f573-fe0f", "1f573"],
        ":dark_sunglasses:": ["1f576-fe0f", "1f576"],
        ":joystick:": ["1f579-fe0f", "1f579"],
        ":paperclips:": ["1f587-fe0f", "1f587"],
        ":linked_paperclips:": ["1f587-fe0f", "1f587"],
        ":pen_ballpoint:": ["1f58a-fe0f", "1f58a"],
        ":lower_left_ballpoint_pen:": ["1f58a-fe0f", "1f58a"],
        ":pen_fountain:": ["1f58b-fe0f", "1f58b"],
        ":lower_left_fountain_pen:": ["1f58b-fe0f",
            "1f58b"],
        ":paintbrush:": ["1f58c-fe0f", "1f58c"],
        ":lower_left_paintbrush:": ["1f58c-fe0f", "1f58c"],
        ":crayon:": ["1f58d-fe0f", "1f58d"],
        ":lower_left_crayon:": ["1f58d-fe0f", "1f58d"],
        ":desktop:": ["1f5a5-fe0f", "1f5a5"],
        ":desktop_computer:": ["1f5a5-fe0f", "1f5a5"],
        ":printer:": ["1f5a8-fe0f", "1f5a8"],
        ":trackball:": ["1f5b2-fe0f", "1f5b2"],
        ":frame_photo:": ["1f5bc-fe0f", "1f5bc"],
        ":frame_with_picture:": ["1f5bc-fe0f", "1f5bc"],
        ":dividers:": ["1f5c2-fe0f", "1f5c2"],
        ":card_index_dividers:": ["1f5c2-fe0f", "1f5c2"],
        ":card_box:": ["1f5c3-fe0f",
            "1f5c3"],
        ":card_file_box:": ["1f5c3-fe0f", "1f5c3"],
        ":file_cabinet:": ["1f5c4-fe0f", "1f5c4"],
        ":wastebasket:": ["1f5d1-fe0f", "1f5d1"],
        ":notepad_spiral:": ["1f5d2-fe0f", "1f5d2"],
        ":spiral_note_pad:": ["1f5d2-fe0f", "1f5d2"],
        ":calendar_spiral:": ["1f5d3-fe0f", "1f5d3"],
        ":spiral_calendar_pad:": ["1f5d3-fe0f", "1f5d3"],
        ":compression:": ["1f5dc-fe0f", "1f5dc"],
        ":key2:": ["1f5dd-fe0f", "1f5dd"],
        ":old_key:": ["1f5dd-fe0f", "1f5dd"],
        ":newspaper2:": ["1f5de-fe0f", "1f5de"],
        ":rolled_up_newspaper:": ["1f5de-fe0f", "1f5de"],
        ":dagger:": ["1f5e1-fe0f",
            "1f5e1"],
        ":dagger_knife:": ["1f5e1-fe0f", "1f5e1"],
        ":speaking_head:": ["1f5e3-fe0f", "1f5e3"],
        ":speaking_head_in_silhouette:": ["1f5e3-fe0f", "1f5e3"],
        ":anger_right:": ["1f5ef-fe0f", "1f5ef"],
        ":right_anger_bubble:": ["1f5ef-fe0f", "1f5ef"],
        ":ballot_box:": ["1f5f3-fe0f", "1f5f3"],
        ":ballot_box_with_ballot:": ["1f5f3-fe0f", "1f5f3"],
        ":map:": ["1f5fa-fe0f", "1f5fa"],
        ":world_map:": ["1f5fa-fe0f", "1f5fa"],
        ":tools:": ["1f6e0-fe0f", "1f6e0"],
        ":hammer_and_wrench:": ["1f6e0-fe0f", "1f6e0"],
        ":shield:": ["1f6e1-fe0f", "1f6e1"],
        ":oil:": ["1f6e2-fe0f",
            "1f6e2"],
        ":oil_drum:": ["1f6e2-fe0f", "1f6e2"],
        ":satellite_orbital:": ["1f6f0-fe0f", "1f6f0"],
        ":fork_knife_plate:": ["1f37d-fe0f", "1f37d"],
        ":fork_and_knife_with_plate:": ["1f37d-fe0f", "1f37d"],
        ":eye:": ["1f441-fe0f", "1f441"],
        ":levitate:": ["1f574-fe0f", "1f574"],
        ":man_in_business_suit_levitating:": ["1f574-fe0f", "1f574"],
        ":spy:": ["1f575-fe0f", "1f575"],
        ":sleuth_or_spy:": ["1f575-fe0f", "1f575"],
        ":hand_splayed:": ["1f590-fe0f", "1f590"],
        ":raised_hand_with_fingers_splayed:": ["1f590-fe0f", "1f590"],
        ":mountain_snow:": ["1f3d4-fe0f",
            "1f3d4"],
        ":snow_capped_mountain:": ["1f3d4-fe0f", "1f3d4"],
        ":camping:": ["1f3d5-fe0f", "1f3d5"],
        ":beach:": ["1f3d6-fe0f", "1f3d6"],
        ":beach_with_umbrella:": ["1f3d6-fe0f", "1f3d6"],
        ":construction_site:": ["1f3d7-fe0f", "1f3d7"],
        ":building_construction:": ["1f3d7-fe0f", "1f3d7"],
        ":homes:": ["1f3d8-fe0f", "1f3d8"],
        ":house_buildings:": ["1f3d8-fe0f", "1f3d8"],
        ":cityscape:": ["1f3d9-fe0f", "1f3d9"],
        ":house_abandoned:": ["1f3da-fe0f", "1f3da"],
        ":derelict_house_building:": ["1f3da-fe0f", "1f3da"],
        ":classical_building:": ["1f3db-fe0f",
            "1f3db"],
        ":desert:": ["1f3dc-fe0f", "1f3dc"],
        ":island:": ["1f3dd-fe0f", "1f3dd"],
        ":desert_island:": ["1f3dd-fe0f", "1f3dd"],
        ":park:": ["1f3de-fe0f", "1f3de"],
        ":national_park:": ["1f3de-fe0f", "1f3de"],
        ":stadium:": ["1f3df-fe0f", "1f3df"],
        ":couch:": ["1f6cb-fe0f", "1f6cb"],
        ":couch_and_lamp:": ["1f6cb-fe0f", "1f6cb"],
        ":shopping_bags:": ["1f6cd-fe0f", "1f6cd"],
        ":bellhop:": ["1f6ce-fe0f", "1f6ce"],
        ":bellhop_bell:": ["1f6ce-fe0f", "1f6ce"],
        ":bed:": ["1f6cf-fe0f", "1f6cf"],
        ":motorway:": ["1f6e3-fe0f", "1f6e3"],
        ":railway_track:": ["1f6e4-fe0f",
            "1f6e4"],
        ":railroad_track:": ["1f6e4-fe0f", "1f6e4"],
        ":motorboat:": ["1f6e5-fe0f", "1f6e5"],
        ":airplane_small:": ["1f6e9-fe0f", "1f6e9"],
        ":small_airplane:": ["1f6e9-fe0f", "1f6e9"],
        ":cruise_ship:": ["1f6f3-fe0f", "1f6f3"],
        ":passenger_ship:": ["1f6f3-fe0f", "1f6f3"],
        ":white_sun_small_cloud:": ["1f324-fe0f", "1f324"],
        ":white_sun_with_small_cloud:": ["1f324-fe0f", "1f324"],
        ":white_sun_cloud:": ["1f325-fe0f", "1f325"],
        ":white_sun_behind_cloud:": ["1f325-fe0f", "1f325"],
        ":white_sun_rain_cloud:": ["1f326-fe0f", "1f326"],
        ":white_sun_behind_cloud_with_rain:": ["1f326-fe0f",
            "1f326"],
        ":mouse_three_button:": ["1f5b1-fe0f", "1f5b1"],
        ":three_button_mouse:": ["1f5b1-fe0f", "1f5b1"],
        ":point_up_tone1:": ["261d-1f3fb"],
        ":point_up_tone2:": ["261d-1f3fc"],
        ":point_up_tone3:": ["261d-1f3fd"],
        ":point_up_tone4:": ["261d-1f3fe"],
        ":copyright:": ["00a9-fe0f", "00a9"],
        ":registered:": ["00ae-fe0f", "00ae"],
        ":bangbang:": ["203c-fe0f", "203c"],
        ":interrobang:": ["2049-fe0f", "2049"],
        ":tm:": ["2122-fe0f", "2122"],
        ":information_source:": ["2139-fe0f", "2139"],
        ":left_right_arrow:": ["2194-fe0f", "2194"],
        ":arrow_up_down:": ["2195-fe0f",
            "2195"],
        ":arrow_upper_left:": ["2196-fe0f", "2196"],
        ":arrow_upper_right:": ["2197-fe0f", "2197"],
        ":arrow_lower_right:": ["2198-fe0f", "2198"],
        ":arrow_lower_left:": ["2199-fe0f", "2199"],
        ":leftwards_arrow_with_hook:": ["21a9-fe0f", "21a9"],
        ":arrow_right_hook:": ["21aa-fe0f", "21aa"],
        ":watch:": ["231a-fe0f", "231a"],
        ":hourglass:": ["231b-fe0f", "231b"],
        ":m:": ["24c2-fe0f", "24c2"],
        ":black_small_square:": ["25aa-fe0f", "25aa"],
        ":white_small_square:": ["25ab-fe0f", "25ab"],
        ":arrow_forward:": ["25b6-fe0f", "25b6"],
        ":arrow_backward:": ["25c0-fe0f",
            "25c0"],
        ":white_medium_square:": ["25fb-fe0f", "25fb"],
        ":black_medium_square:": ["25fc-fe0f", "25fc"],
        ":white_medium_small_square:": ["25fd-fe0f", "25fd"],
        ":black_medium_small_square:": ["25fe-fe0f", "25fe"],
        ":sunny:": ["2600-fe0f", "2600"],
        ":cloud:": ["2601-fe0f", "2601"],
        ":telephone:": ["260e-fe0f", "260e"],
        ":ballot_box_with_check:": ["2611-fe0f", "2611"],
        ":umbrella:": ["2614-fe0f", "2614"],
        ":coffee:": ["2615-fe0f", "2615"],
        ":point_up:": ["261d-fe0f", "261d"],
        ":relaxed:": ["263a-fe0f", "263a"],
        ":aries:": ["2648-fe0f", "2648"],
        ":taurus:": ["2649-fe0f", "2649"],
        ":gemini:": ["264a-fe0f", "264a"],
        ":cancer:": ["264b-fe0f", "264b"],
        ":leo:": ["264c-fe0f", "264c"],
        ":virgo:": ["264d-fe0f", "264d"],
        ":libra:": ["264e-fe0f", "264e"],
        ":scorpius:": ["264f-fe0f", "264f"],
        ":sagittarius:": ["2650-fe0f", "2650"],
        ":capricorn:": ["2651-fe0f", "2651"],
        ":aquarius:": ["2652-fe0f", "2652"],
        ":pisces:": ["2653-fe0f", "2653"],
        ":spades:": ["2660-fe0f", "2660"],
        ":clubs:": ["2663-fe0f", "2663"],
        ":hearts:": ["2665-fe0f", "2665"],
        ":diamonds:": ["2666-fe0f", "2666"],
        ":hotsprings:": ["2668-fe0f",
            "2668"],
        ":recycle:": ["267b-fe0f", "267b"],
        ":wheelchair:": ["267f-fe0f", "267f"],
        ":anchor:": ["2693-fe0f", "2693"],
        ":warning:": ["26a0-fe0f", "26a0"],
        ":zap:": ["26a1-fe0f", "26a1"],
        ":white_circle:": ["26aa-fe0f", "26aa"],
        ":black_circle:": ["26ab-fe0f", "26ab"],
        ":soccer:": ["26bd-fe0f", "26bd"],
        ":baseball:": ["26be-fe0f", "26be"],
        ":snowman:": ["26c4-fe0f", "26c4"],
        ":partly_sunny:": ["26c5-fe0f", "26c5"],
        ":no_entry:": ["26d4-fe0f", "26d4"],
        ":church:": ["26ea-fe0f", "26ea"],
        ":fountain:": ["26f2-fe0f", "26f2"],
        ":golf:": ["26f3-fe0f",
            "26f3"],
        ":sailboat:": ["26f5-fe0f", "26f5"],
        ":tent:": ["26fa-fe0f", "26fa"],
        ":fuelpump:": ["26fd-fe0f", "26fd"],
        ":scissors:": ["2702-fe0f", "2702"],
        ":airplane:": ["2708-fe0f", "2708"],
        ":envelope:": ["2709-fe0f", "2709"],
        ":v:": ["270c-fe0f", "270c"],
        ":pencil2:": ["270f-fe0f", "270f"],
        ":black_nib:": ["2712-fe0f", "2712"],
        ":heavy_check_mark:": ["2714-fe0f", "2714"],
        ":heavy_multiplication_x:": ["2716-fe0f", "2716"],
        ":eight_spoked_asterisk:": ["2733-fe0f", "2733"],
        ":eight_pointed_black_star:": ["2734-fe0f", "2734"],
        ":snowflake:": ["2744-fe0f",
            "2744"],
        ":sparkle:": ["2747-fe0f", "2747"],
        ":exclamation:": ["2757-fe0f", "2757"],
        ":heart:": ["2764-fe0f", "2764"],
        ":arrow_right:": ["27a1-fe0f", "27a1"],
        ":arrow_heading_up:": ["2934-fe0f", "2934"],
        ":arrow_heading_down:": ["2935-fe0f", "2935"],
        ":arrow_left:": ["2b05-fe0f", "2b05"],
        ":arrow_up:": ["2b06-fe0f", "2b06"],
        ":arrow_down:": ["2b07-fe0f", "2b07"],
        ":black_large_square:": ["2b1b-fe0f", "2b1b"],
        ":white_large_square:": ["2b1c-fe0f", "2b1c"],
        ":star:": ["2b50-fe0f", "2b50"],
        ":o:": ["2b55-fe0f", "2b55"],
        ":wavy_dash:": ["3030-fe0f",
            "3030"],
        ":part_alternation_mark:": ["303d-fe0f", "303d"],
        ":congratulations:": ["3297-fe0f", "3297"],
        ":secret:": ["3299-fe0f", "3299"],
        ":cross:": ["271d-fe0f", "271d"],
        ":latin_cross:": ["271d-fe0f", "271d"],
        ":keyboard:": ["2328-fe0f", "2328"],
        ":writing_hand:": ["270d-fe0f", "270d"],
        ":track_next:": ["23ed-fe0f", "23ed"],
        ":next_track:": ["23ed-fe0f", "23ed"],
        ":track_previous:": ["23ee-fe0f", "23ee"],
        ":previous_track:": ["23ee-fe0f", "23ee"],
        ":play_pause:": ["23ef-fe0f", "23ef"],
        ":stopwatch:": ["23f1-fe0f", "23f1"],
        ":timer:": ["23f2-fe0f",
            "23f2"],
        ":timer_clock:": ["23f2-fe0f", "23f2"],
        ":pause_button:": ["23f8-fe0f", "23f8"],
        ":double_vertical_bar:": ["23f8-fe0f", "23f8"],
        ":stop_button:": ["23f9-fe0f", "23f9"],
        ":record_button:": ["23fa-fe0f", "23fa"],
        ":umbrella2:": ["2602-fe0f", "2602"],
        ":snowman2:": ["2603-fe0f", "2603"],
        ":comet:": ["2604-fe0f", "2604"],
        ":shamrock:": ["2618-fe0f", "2618"],
        ":skull_crossbones:": ["2620-fe0f", "2620"],
        ":skull_and_crossbones:": ["2620-fe0f", "2620"],
        ":radioactive:": ["2622-fe0f", "2622"],
        ":radioactive_sign:": ["2622-fe0f", "2622"],
        ":biohazard:": ["2623-fe0f", "2623"],
        ":biohazard_sign:": ["2623-fe0f", "2623"],
        ":orthodox_cross:": ["2626-fe0f", "2626"],
        ":star_and_crescent:": ["262a-fe0f", "262a"],
        ":peace:": ["262e-fe0f", "262e"],
        ":peace_symbol:": ["262e-fe0f", "262e"],
        ":yin_yang:": ["262f-fe0f", "262f"],
        ":wheel_of_dharma:": ["2638-fe0f", "2638"],
        ":frowning2:": ["2639-fe0f", "2639"],
        ":white_frowning_face:": ["2639-fe0f", "2639"],
        ":hammer_pick:": ["2692-fe0f", "2692"],
        ":hammer_and_pick:": ["2692-fe0f", "2692"],
        ":crossed_swords:": ["2694-fe0f", "2694"],
        ":scales:": ["2696-fe0f",
            "2696"],
        ":alembic:": ["2697-fe0f", "2697"],
        ":gear:": ["2699-fe0f", "2699"],
        ":atom:": ["269b-fe0f", "269b"],
        ":atom_symbol:": ["269b-fe0f", "269b"],
        ":fleur-de-lis:": ["269c-fe0f", "269c"],
        ":coffin:": ["26b0-fe0f", "26b0"],
        ":urn:": ["26b1-fe0f", "26b1"],
        ":funeral_urn:": ["26b1-fe0f", "26b1"],
        ":thunder_cloud_rain:": ["26c8-fe0f", "26c8"],
        ":thunder_cloud_and_rain:": ["26c8-fe0f", "26c8"],
        ":pick:": ["26cf-fe0f", "26cf"],
        ":helmet_with_cross:": ["26d1-fe0f", "26d1"],
        ":helmet_with_white_cross:": ["26d1-fe0f", "26d1"],
        ":chains:": ["26d3-fe0f",
            "26d3"],
        ":shinto_shrine:": ["26e9-fe0f", "26e9"],
        ":mountain:": ["26f0-fe0f", "26f0"],
        ":beach_umbrella:": ["26f1-fe0f", "26f1"],
        ":umbrella_on_ground:": ["26f1-fe0f", "26f1"],
        ":ferry:": ["26f4-fe0f", "26f4"],
        ":skier:": ["26f7-fe0f", "26f7"],
        ":ice_skate:": ["26f8-fe0f", "26f8"],
        ":basketball_player:": ["26f9-fe0f", "26f9"],
        ":person_with_ball:": ["26f9-fe0f", "26f9"],
        ":star_of_david:": ["2721-fe0f", "2721"],
        ":heart_exclamation:": ["2763-fe0f", "2763"],
        ":heavy_heart_exclamation_mark_ornament:": ["2763-fe0f", "2763"],
        ":black_joker:": ["1f0cf"],
        ":a:": ["1f170"],
        ":b:": ["1f171"],
        ":o2:": ["1f17e"],
        ":ab:": ["1f18e"],
        ":cl:": ["1f191"],
        ":cool:": ["1f192"],
        ":free:": ["1f193"],
        ":id:": ["1f194"],
        ":new:": ["1f195"],
        ":ng:": ["1f196"],
        ":ok:": ["1f197"],
        ":sos:": ["1f198"],
        ":up:": ["1f199"],
        ":vs:": ["1f19a"],
        ":koko:": ["1f201"],
        ":u7981:": ["1f232"],
        ":u7a7a:": ["1f233"],
        ":u5408:": ["1f234"],
        ":u6e80:": ["1f235"],
        ":u6709:": ["1f236"],
        ":u7533:": ["1f238"],
        ":u5272:": ["1f239"],
        ":u55b6:": ["1f23a"],
        ":ideograph_advantage:": ["1f250"],
        ":accept:": ["1f251"],
        ":cyclone:": ["1f300"],
        ":foggy:": ["1f301"],
        ":closed_umbrella:": ["1f302"],
        ":night_with_stars:": ["1f303"],
        ":sunrise_over_mountains:": ["1f304"],
        ":sunrise:": ["1f305"],
        ":city_dusk:": ["1f306"],
        ":city_sunset:": ["1f307"],
        ":city_sunrise:": ["1f307"],
        ":rainbow:": ["1f308"],
        ":bridge_at_night:": ["1f309"],
        ":ocean:": ["1f30a"],
        ":volcano:": ["1f30b"],
        ":milky_way:": ["1f30c"],
        ":earth_asia:": ["1f30f"],
        ":new_moon:": ["1f311"],
        ":first_quarter_moon:": ["1f313"],
        ":waxing_gibbous_moon:": ["1f314"],
        ":full_moon:": ["1f315"],
        ":crescent_moon:": ["1f319"],
        ":first_quarter_moon_with_face:": ["1f31b"],
        ":star2:": ["1f31f"],
        ":stars:": ["1f320"],
        ":chestnut:": ["1f330"],
        ":seedling:": ["1f331"],
        ":palm_tree:": ["1f334"],
        ":cactus:": ["1f335"],
        ":tulip:": ["1f337"],
        ":cherry_blossom:": ["1f338"],
        ":rose:": ["1f339"],
        ":hibiscus:": ["1f33a"],
        ":sunflower:": ["1f33b"],
        ":blossom:": ["1f33c"],
        ":corn:": ["1f33d"],
        ":ear_of_rice:": ["1f33e"],
        ":herb:": ["1f33f"],
        ":four_leaf_clover:": ["1f340"],
        ":maple_leaf:": ["1f341"],
        ":fallen_leaf:": ["1f342"],
        ":leaves:": ["1f343"],
        ":mushroom:": ["1f344"],
        ":red_heart:": ["2764"],
        ":tomato:": ["1f345"],
        ":eggplant:": ["1f346"],
        ":grapes:": ["1f347"],
        ":melon:": ["1f348"],
        ":watermelon:": ["1f349"],
        ":tangerine:": ["1f34a"],
        ":banana:": ["1f34c"],
        ":pineapple:": ["1f34d"],
        ":apple:": ["1f34e"],
        ":green_apple:": ["1f34f"],
        ":peach:": ["1f351"],
        ":cherries:": ["1f352"],
        ":strawberry:": ["1f353"],
        ":hamburger:": ["1f354"],
        ":pizza:": ["1f355"],
        ":meat_on_bone:": ["1f356"],
        ":poultry_leg:": ["1f357"],
        ":rice_cracker:": ["1f358"],
        ":rice_ball:": ["1f359"],
        ":rice:": ["1f35a"],
        ":curry:": ["1f35b"],
        ":ramen:": ["1f35c"],
        ":spaghetti:": ["1f35d"],
        ":bread:": ["1f35e"],
        ":fries:": ["1f35f"],
        ":sweet_potato:": ["1f360"],
        ":dango:": ["1f361"],
        ":oden:": ["1f362"],
        ":sushi:": ["1f363"],
        ":fried_shrimp:": ["1f364"],
        ":fish_cake:": ["1f365"],
        ":icecream:": ["1f366"],
        ":shaved_ice:": ["1f367"],
        ":ice_cream:": ["1f368"],
        ":doughnut:": ["1f369"],
        ":cookie:": ["1f36a"],
        ":chocolate_bar:": ["1f36b"],
        ":candy:": ["1f36c"],
        ":lollipop:": ["1f36d"],
        ":custard:": ["1f36e"],
        ":honey_pot:": ["1f36f"],
        ":cake:": ["1f370"],
        ":bento:": ["1f371"],
        ":stew:": ["1f372"],
        ":egg:": ["1f373"],
        ":fork_and_knife:": ["1f374"],
        ":tea:": ["1f375"],
        ":sake:": ["1f376"],
        ":wine_glass:": ["1f377"],
        ":cocktail:": ["1f378"],
        ":tropical_drink:": ["1f379"],
        ":beer:": ["1f37a"],
        ":beers:": ["1f37b"],
        ":ribbon:": ["1f380"],
        ":gift:": ["1f381"],
        ":birthday:": ["1f382"],
        ":jack_o_lantern:": ["1f383"],
        ":christmas_tree:": ["1f384"],
        ":santa:": ["1f385"],
        ":fireworks:": ["1f386"],
        ":sparkler:": ["1f387"],
        ":balloon:": ["1f388"],
        ":tada:": ["1f389"],
        ":confetti_ball:": ["1f38a"],
        ":tanabata_tree:": ["1f38b"],
        ":crossed_flags:": ["1f38c"],
        ":bamboo:": ["1f38d"],
        ":dolls:": ["1f38e"],
        ":flags:": ["1f38f"],
        ":wind_chime:": ["1f390"],
        ":rice_scene:": ["1f391"],
        ":school_satchel:": ["1f392"],
        ":mortar_board:": ["1f393"],
        ":carousel_horse:": ["1f3a0"],
        ":ferris_wheel:": ["1f3a1"],
        ":roller_coaster:": ["1f3a2"],
        ":fishing_pole_and_fish:": ["1f3a3"],
        ":microphone:": ["1f3a4"],
        ":movie_camera:": ["1f3a5"],
        ":cinema:": ["1f3a6"],
        ":headphones:": ["1f3a7"],
        ":art:": ["1f3a8"],
        ":tophat:": ["1f3a9"],
        ":circus_tent:": ["1f3aa"],
        ":ticket:": ["1f3ab"],
        ":clapper:": ["1f3ac"],
        ":performing_arts:": ["1f3ad"],
        ":video_game:": ["1f3ae"],
        ":dart:": ["1f3af"],
        ":slot_machine:": ["1f3b0"],
        ":8ball:": ["1f3b1"],
        ":game_die:": ["1f3b2"],
        ":bowling:": ["1f3b3"],
        ":flower_playing_cards:": ["1f3b4"],
        ":musical_note:": ["1f3b5"],
        ":notes:": ["1f3b6"],
        ":saxophone:": ["1f3b7"],
        ":guitar:": ["1f3b8"],
        ":musical_keyboard:": ["1f3b9"],
        ":trumpet:": ["1f3ba"],
        ":violin:": ["1f3bb"],
        ":musical_score:": ["1f3bc"],
        ":running_shirt_with_sash:": ["1f3bd"],
        ":tennis:": ["1f3be"],
        ":ski:": ["1f3bf"],
        ":basketball:": ["1f3c0"],
        ":checkered_flag:": ["1f3c1"],
        ":snowboarder:": ["1f3c2"],
        ":runner:": ["1f3c3"],
        ":surfer:": ["1f3c4"],
        ":trophy:": ["1f3c6"],
        ":football:": ["1f3c8"],
        ":swimmer:": ["1f3ca"],
        ":house:": ["1f3e0"],
        ":house_with_garden:": ["1f3e1"],
        ":office:": ["1f3e2"],
        ":post_office:": ["1f3e3"],
        ":hospital:": ["1f3e5"],
        ":bank:": ["1f3e6"],
        ":atm:": ["1f3e7"],
        ":hotel:": ["1f3e8"],
        ":love_hotel:": ["1f3e9"],
        ":convenience_store:": ["1f3ea"],
        ":school:": ["1f3eb"],
        ":department_store:": ["1f3ec"],
        ":factory:": ["1f3ed"],
        ":izakaya_lantern:": ["1f3ee"],
        ":japanese_castle:": ["1f3ef"],
        ":european_castle:": ["1f3f0"],
        ":snail:": ["1f40c"],
        ":snake:": ["1f40d"],
        ":racehorse:": ["1f40e"],
        ":sheep:": ["1f411"],
        ":monkey:": ["1f412"],
        ":chicken:": ["1f414"],
        ":boar:": ["1f417"],
        ":elephant:": ["1f418"],
        ":octopus:": ["1f419"],
        ":shell:": ["1f41a"],
        ":bug:": ["1f41b"],
        ":ant:": ["1f41c"],
        ":bee:": ["1f41d"],
        ":beetle:": ["1f41e"],
        ":fish:": ["1f41f"],
        ":tropical_fish:": ["1f420"],
        ":blowfish:": ["1f421"],
        ":turtle:": ["1f422"],
        ":hatching_chick:": ["1f423"],
        ":baby_chick:": ["1f424"],
        ":hatched_chick:": ["1f425"],
        ":bird:": ["1f426"],
        ":penguin:": ["1f427"],
        ":koala:": ["1f428"],
        ":poodle:": ["1f429"],
        ":camel:": ["1f42b"],
        ":dolphin:": ["1f42c"],
        ":mouse:": ["1f42d"],
        ":cow:": ["1f42e"],
        ":tiger:": ["1f42f"],
        ":rabbit:": ["1f430"],
        ":cat:": ["1f431"],
        ":dragon_face:": ["1f432"],
        ":whale:": ["1f433"],
        ":horse:": ["1f434"],
        ":monkey_face:": ["1f435"],
        ":dog:": ["1f436"],
        ":pig:": ["1f437"],
        ":frog:": ["1f438"],
        ":hamster:": ["1f439"],
        ":wolf:": ["1f43a"],
        ":bear:": ["1f43b"],
        ":panda_face:": ["1f43c"],
        ":pig_nose:": ["1f43d"],
        ":feet:": ["1f43e"],
        ":paw_prints:": ["1f43e"],
        ":eyes:": ["1f440"],
        ":ear:": ["1f442"],
        ":nose:": ["1f443"],
        ":lips:": ["1f444"],
        ":tongue:": ["1f445"],
        ":point_up_2:": ["1f446"],
        ":point_down:": ["1f447"],
        ":point_left:": ["1f448"],
        ":point_right:": ["1f449"],
        ":punch:": ["1f44a"],
        ":wave:": ["1f44b"],
        ":ok_hand:": ["1f44c"],
        ":thumbsup:": ["1f44d"],
        ":+1:": ["1f44d"],
        ":thumbsdown:": ["1f44e"],
        ":-1:": ["1f44e"],
        ":clap:": ["1f44f"],
        ":open_hands:": ["1f450"],
        ":crown:": ["1f451"],
        ":womans_hat:": ["1f452"],
        ":eyeglasses:": ["1f453"],
        ":necktie:": ["1f454"],
        ":shirt:": ["1f455"],
        ":jeans:": ["1f456"],
        ":dress:": ["1f457"],
        ":kimono:": ["1f458"],
        ":bikini:": ["1f459"],
        ":womans_clothes:": ["1f45a"],
        ":purse:": ["1f45b"],
        ":handbag:": ["1f45c"],
        ":pouch:": ["1f45d"],
        ":mans_shoe:": ["1f45e"],
        ":athletic_shoe:": ["1f45f"],
        ":high_heel:": ["1f460"],
        ":sandal:": ["1f461"],
        ":boot:": ["1f462"],
        ":footprints:": ["1f463"],
        ":bust_in_silhouette:": ["1f464"],
        ":boy:": ["1f466"],
        ":girl:": ["1f467"],
        ":man:": ["1f468"],
        ":woman:": ["1f469"],
        ":family:": ["1f46a"],
        ":couple:": ["1f46b"],
        ":cop:": ["1f46e"],
        ":dancers:": ["1f46f"],
        ":bride_with_veil:": ["1f470"],
        ":person_with_blond_hair:": ["1f471"],
        ":man_with_gua_pi_mao:": ["1f472"],
        ":man_with_turban:": ["1f473"],
        ":older_man:": ["1f474"],
        ":older_woman:": ["1f475"],
        ":grandma:": ["1f475"],
        ":baby:": ["1f476"],
        ":construction_worker:": ["1f477"],
        ":princess:": ["1f478"],
        ":japanese_ogre:": ["1f479"],
        ":japanese_goblin:": ["1f47a"],
        ":ghost:": ["1f47b"],
        ":angel:": ["1f47c"],
        ":alien:": ["1f47d"],
        ":space_invader:": ["1f47e"],
        ":imp:": ["1f47f"],
        ":skull:": ["1f480"],
        ":skeleton:": ["1f480"],
        ":card_index:": ["1f4c7"],
        ":information_desk_person:": ["1f481"],
        ":guardsman:": ["1f482"],
        ":dancer:": ["1f483"],
        ":lipstick:": ["1f484"],
        ":nail_care:": ["1f485"],
        ":ledger:": ["1f4d2"],
        ":massage:": ["1f486"],
        ":notebook:": ["1f4d3"],
        ":haircut:": ["1f487"],
        ":notebook_with_decorative_cover:": ["1f4d4"],
        ":barber:": ["1f488"],
        ":closed_book:": ["1f4d5"],
        ":syringe:": ["1f489"],
        ":book:": ["1f4d6"],
        ":pill:": ["1f48a"],
        ":green_book:": ["1f4d7"],
        ":kiss:": ["1f48b"],
        ":blue_book:": ["1f4d8"],
        ":love_letter:": ["1f48c"],
        ":orange_book:": ["1f4d9"],
        ":ring:": ["1f48d"],
        ":books:": ["1f4da"],
        ":gem:": ["1f48e"],
        ":name_badge:": ["1f4db"],
        ":couplekiss:": ["1f48f"],
        ":scroll:": ["1f4dc"],
        ":bouquet:": ["1f490"],
        ":pencil:": ["1f4dd"],
        ":couple_with_heart:": ["1f491"],
        ":telephone_receiver:": ["1f4de"],
        ":wedding:": ["1f492"],
        ":pager:": ["1f4df"],
        ":fax:": ["1f4e0"],
        ":heartbeat:": ["1f493"],
        ":satellite:": ["1f4e1"],
        ":loudspeaker:": ["1f4e2"],
        ":broken_heart:": ["1f494"],
        ":mega:": ["1f4e3"],
        ":outbox_tray:": ["1f4e4"],
        ":two_hearts:": ["1f495"],
        ":inbox_tray:": ["1f4e5"],
        ":package:": ["1f4e6"],
        ":sparkling_heart:": ["1f496"],
        ":e-mail:": ["1f4e7"],
        ":email:": ["1f4e7"],
        ":incoming_envelope:": ["1f4e8"],
        ":heartpulse:": ["1f497"],
        ":envelope_with_arrow:": ["1f4e9"],
        ":mailbox_closed:": ["1f4ea"],
        ":cupid:": ["1f498"],
        ":mailbox:": ["1f4eb"],
        ":postbox:": ["1f4ee"],
        ":blue_heart:": ["1f499"],
        ":newspaper:": ["1f4f0"],
        ":iphone:": ["1f4f1"],
        ":green_heart:": ["1f49a"],
        ":calling:": ["1f4f2"],
        ":vibration_mode:": ["1f4f3"],
        ":yellow_heart:": ["1f49b"],
        ":mobile_phone_off:": ["1f4f4"],
        ":signal_strength:": ["1f4f6"],
        ":purple_heart:": ["1f49c"],
        ":camera:": ["1f4f7"],
        ":video_camera:": ["1f4f9"],
        ":gift_heart:": ["1f49d"],
        ":tv:": ["1f4fa"],
        ":radio:": ["1f4fb"],
        ":revolving_hearts:": ["1f49e"],
        ":vhs:": ["1f4fc"],
        ":arrows_clockwise:": ["1f503"],
        ":heart_decoration:": ["1f49f"],
        ":loud_sound:": ["1f50a"],
        ":battery:": ["1f50b"],
        ":diamond_shape_with_a_dot_inside:": ["1f4a0"],
        ":electric_plug:": ["1f50c"],
        ":mag:": ["1f50d"],
        ":bulb:": ["1f4a1"],
        ":mag_right:": ["1f50e"],
        ":lock_with_ink_pen:": ["1f50f"],
        ":anger:": ["1f4a2"],
        ":closed_lock_with_key:": ["1f510"],
        ":key:": ["1f511"],
        ":bomb:": ["1f4a3"],
        ":lock:": ["1f512"],
        ":unlock:": ["1f513"],
        ":zzz:": ["1f4a4"],
        ":bell:": ["1f514"],
        ":bookmark:": ["1f516"],
        ":boom:": ["1f4a5"],
        ":link:": ["1f517"],
        ":radio_button:": ["1f518"],
        ":sweat_drops:": ["1f4a6"],
        ":back:": ["1f519"],
        ":end:": ["1f51a"],
        ":droplet:": ["1f4a7"],
        ":on:": ["1f51b"],
        ":soon:": ["1f51c"],
        ":dash:": ["1f4a8"],
        ":top:": ["1f51d"],
        ":underage:": ["1f51e"],
        ":poop:": ["1f4a9"],
        ":shit:": ["1f4a9"],
        ":hankey:": ["1f4a9"],
        ":poo:": ["1f4a9"],
        ":ten:": ["1f51f"],
        ":muscle:": ["1f4aa"],
        ":capital_abcd:": ["1f520"],
        ":abcd:": ["1f521"],
        ":dizzy:": ["1f4ab"],
        ":1234:": ["1f522"],
        ":symbols:": ["1f523"],
        ":speech_balloon:": ["1f4ac"],
        ":abc:": ["1f524"],
        ":fire:": ["1f525"],
        ":flame:": ["1f525"],
        ":white_flower:": ["1f4ae"],
        ":flashlight:": ["1f526"],
        ":wrench:": ["1f527"],
        ":100:": ["1f4af"],
        ":hammer:": ["1f528"],
        ":nut_and_bolt:": ["1f529"],
        ":moneybag:": ["1f4b0"],
        ":knife:": ["1f52a"],
        ":gun:": ["1f52b"],
        ":currency_exchange:": ["1f4b1"],
        ":crystal_ball:": ["1f52e"],
        ":heavy_dollar_sign:": ["1f4b2"],
        ":six_pointed_star:": ["1f52f"],
        ":credit_card:": ["1f4b3"],
        ":beginner:": ["1f530"],
        ":trident:": ["1f531"],
        ":yen:": ["1f4b4"],
        ":black_square_button:": ["1f532"],
        ":white_square_button:": ["1f533"],
        ":dollar:": ["1f4b5"],
        ":red_circle:": ["1f534"],
        ":large_blue_circle:": ["1f535"],
        ":money_with_wings:": ["1f4b8"],
        ":large_orange_diamond:": ["1f536"],
        ":large_blue_diamond:": ["1f537"],
        ":chart:": ["1f4b9"],
        ":small_orange_diamond:": ["1f538"],
        ":small_blue_diamond:": ["1f539"],
        ":seat:": ["1f4ba"],
        ":small_red_triangle:": ["1f53a"],
        ":small_red_triangle_down:": ["1f53b"],
        ":computer:": ["1f4bb"],
        ":arrow_up_small:": ["1f53c"],
        ":briefcase:": ["1f4bc"],
        ":arrow_down_small:": ["1f53d"],
        ":clock1:": ["1f550"],
        ":minidisc:": ["1f4bd"],
        ":clock2:": ["1f551"],
        ":floppy_disk:": ["1f4be"],
        ":clock3:": ["1f552"],
        ":cd:": ["1f4bf"],
        ":clock4:": ["1f553"],
        ":dvd:": ["1f4c0"],
        ":clock5:": ["1f554"],
        ":clock6:": ["1f555"],
        ":file_folder:": ["1f4c1"],
        ":clock7:": ["1f556"],
        ":clock8:": ["1f557"],
        ":open_file_folder:": ["1f4c2"],
        ":clock9:": ["1f558"],
        ":clock10:": ["1f559"],
        ":page_with_curl:": ["1f4c3"],
        ":clock11:": ["1f55a"],
        ":clock12:": ["1f55b"],
        ":page_facing_up:": ["1f4c4"],
        ":mount_fuji:": ["1f5fb"],
        ":tokyo_tower:": ["1f5fc"],
        ":date:": ["1f4c5"],
        ":statue_of_liberty:": ["1f5fd"],
        ":japan:": ["1f5fe"],
        ":calendar:": ["1f4c6"],
        ":moyai:": ["1f5ff"],
        ":grin:": ["1f601"],
        ":joy:": ["1f602"],
        ":smiley:": ["1f603"],
        ":chart_with_upwards_trend:": ["1f4c8"],
        ":smile:": ["1f604"],
        ":sweat_smile:": ["1f605"],
        ":chart_with_downwards_trend:": ["1f4c9"],
        ":laughing:": ["1f606"],
        ":satisfied:": ["1f606"],
        ":wink:": ["1f609"],
        ":bar_chart:": ["1f4ca"],
        ":blush:": ["1f60a"],
        ":yum:": ["1f60b"],
        ":clipboard:": ["1f4cb"],
        ":relieved:": ["1f60c"],
        ":heart_eyes:": ["1f60d"],
        ":pushpin:": ["1f4cc"],
        ":smirk:": ["1f60f"],
        ":unamused:": ["1f612"],
        ":round_pushpin:": ["1f4cd"],
        ":sweat:": ["1f613"],
        ":pensive:": ["1f614"],
        ":paperclip:": ["1f4ce"],
        ":confounded:": ["1f616"],
        ":kissing_heart:": ["1f618"],
        ":straight_ruler:": ["1f4cf"],
        ":kissing_closed_eyes:": ["1f61a"],
        ":stuck_out_tongue_winking_eye:": ["1f61c"],
        ":triangular_ruler:": ["1f4d0"],
        ":stuck_out_tongue_closed_eyes:": ["1f61d"],
        ":disappointed:": ["1f61e"],
        ":bookmark_tabs:": ["1f4d1"],
        ":angry:": ["1f620"],
        ":rage:": ["1f621"],
        ":cry:": ["1f622"],
        ":persevere:": ["1f623"],
        ":triumph:": ["1f624"],
        ":disappointed_relieved:": ["1f625"],
        ":fearful:": ["1f628"],
        ":weary:": ["1f629"],
        ":sleepy:": ["1f62a"],
        ":tired_face:": ["1f62b"],
        ":sob:": ["1f62d"],
        ":cold_sweat:": ["1f630"],
        ":scream:": ["1f631"],
        ":astonished:": ["1f632"],
        ":flushed:": ["1f633"],
        ":dizzy_face:": ["1f635"],
        ":mask:": ["1f637"],
        ":smile_cat:": ["1f638"],
        ":joy_cat:": ["1f639"],
        ":smiley_cat:": ["1f63a"],
        ":heart_eyes_cat:": ["1f63b"],
        ":smirk_cat:": ["1f63c"],
        ":kissing_cat:": ["1f63d"],
        ":pouting_cat:": ["1f63e"],
        ":crying_cat_face:": ["1f63f"],
        ":scream_cat:": ["1f640"],
        ":no_good:": ["1f645"],
        ":ok_woman:": ["1f646"],
        ":bow:": ["1f647"],
        ":see_no_evil:": ["1f648"],
        ":hear_no_evil:": ["1f649"],
        ":speak_no_evil:": ["1f64a"],
        ":raising_hand:": ["1f64b"],
        ":raised_hands:": ["1f64c"],
        ":person_frowning:": ["1f64d"],
        ":person_with_pouting_face:": ["1f64e"],
        ":pray:": ["1f64f"],
        ":rocket:": ["1f680"],
        ":railway_car:": ["1f683"],
        ":bullettrain_side:": ["1f684"],
        ":bullettrain_front:": ["1f685"],
        ":metro:": ["1f687"],
        ":station:": ["1f689"],
        ":bus:": ["1f68c"],
        ":busstop:": ["1f68f"],
        ":ambulance:": ["1f691"],
        ":fire_engine:": ["1f692"],
        ":police_car:": ["1f693"],
        ":taxi:": ["1f695"],
        ":red_car:": ["1f697"],
        ":blue_car:": ["1f699"],
        ":truck:": ["1f69a"],
        ":ship:": ["1f6a2"],
        ":speedboat:": ["1f6a4"],
        ":traffic_light:": ["1f6a5"],
        ":construction:": ["1f6a7"],
        ":rotating_light:": ["1f6a8"],
        ":triangular_flag_on_post:": ["1f6a9"],
        ":door:": ["1f6aa"],
        ":no_entry_sign:": ["1f6ab"],
        ":smoking:": ["1f6ac"],
        ":no_smoking:": ["1f6ad"],
        ":bike:": ["1f6b2"],
        ":walking:": ["1f6b6"],
        ":mens:": ["1f6b9"],
        ":womens:": ["1f6ba"],
        ":restroom:": ["1f6bb"],
        ":baby_symbol:": ["1f6bc"],
        ":toilet:": ["1f6bd"],
        ":wc:": ["1f6be"],
        ":bath:": ["1f6c0"],
        ":metal:": ["1f918"],
        ":sign_of_the_horns:": ["1f918"],
        ":grinning:": ["1f600"],
        ":innocent:": ["1f607"],
        ":smiling_imp:": ["1f608"],
        ":sunglasses:": ["1f60e"],
        ":neutral_face:": ["1f610"],
        ":expressionless:": ["1f611"],
        ":confused:": ["1f615"],
        ":kissing:": ["1f617"],
        ":kissing_smiling_eyes:": ["1f619"],
        ":stuck_out_tongue:": ["1f61b"],
        ":worried:": ["1f61f"],
        ":frowning:": ["1f626"],
        ":anguished:": ["1f627"],
        ":grimacing:": ["1f62c"],
        ":open_mouth:": ["1f62e"],
        ":hushed:": ["1f62f"],
        ":sleeping:": ["1f634"],
        ":no_mouth:": ["1f636"],
        ":helicopter:": ["1f681"],
        ":steam_locomotive:": ["1f682"],
        ":train2:": ["1f686"],
        ":light_rail:": ["1f688"],
        ":tram:": ["1f68a"],
        ":oncoming_bus:": ["1f68d"],
        ":trolleybus:": ["1f68e"],
        ":minibus:": ["1f690"],
        ":oncoming_police_car:": ["1f694"],
        ":oncoming_taxi:": ["1f696"],
        ":oncoming_automobile:": ["1f698"],
        ":articulated_lorry:": ["1f69b"],
        ":tractor:": ["1f69c"],
        ":monorail:": ["1f69d"],
        ":mountain_railway:": ["1f69e"],
        ":suspension_railway:": ["1f69f"],
        ":mountain_cableway:": ["1f6a0"],
        ":aerial_tramway:": ["1f6a1"],
        ":rowboat:": ["1f6a3"],
        ":vertical_traffic_light:": ["1f6a6"],
        ":put_litter_in_its_place:": ["1f6ae"],
        ":do_not_litter:": ["1f6af"],
        ":potable_water:": ["1f6b0"],
        ":non-potable_water:": ["1f6b1"],
        ":no_bicycles:": ["1f6b3"],
        ":bicyclist:": ["1f6b4"],
        ":mountain_bicyclist:": ["1f6b5"],
        ":no_pedestrians:": ["1f6b7"],
        ":children_crossing:": ["1f6b8"],
        ":shower:": ["1f6bf"],
        ":bathtub:": ["1f6c1"],
        ":passport_control:": ["1f6c2"],
        ":customs:": ["1f6c3"],
        ":baggage_claim:": ["1f6c4"],
        ":left_luggage:": ["1f6c5"],
        ":earth_africa:": ["1f30d"],
        ":earth_americas:": ["1f30e"],
        ":globe_with_meridians:": ["1f310"],
        ":waxing_crescent_moon:": ["1f312"],
        ":waning_gibbous_moon:": ["1f316"],
        ":last_quarter_moon:": ["1f317"],
        ":waning_crescent_moon:": ["1f318"],
        ":new_moon_with_face:": ["1f31a"],
        ":last_quarter_moon_with_face:": ["1f31c"],
        ":full_moon_with_face:": ["1f31d"],
        ":sun_with_face:": ["1f31e"],
        ":evergreen_tree:": ["1f332"],
        ":deciduous_tree:": ["1f333"],
        ":lemon:": ["1f34b"],
        ":pear:": ["1f350"],
        ":baby_bottle:": ["1f37c"],
        ":horse_racing:": ["1f3c7"],
        ":rugby_football:": ["1f3c9"],
        ":european_post_office:": ["1f3e4"],
        ":rat:": ["1f400"],
        ":mouse2:": ["1f401"],
        ":ox:": ["1f402"],
        ":water_buffalo:": ["1f403"],
        ":cow2:": ["1f404"],
        ":tiger2:": ["1f405"],
        ":leopard:": ["1f406"],
        ":rabbit2:": ["1f407"],
        ":cat2:": ["1f408"],
        ":dragon:": ["1f409"],
        ":crocodile:": ["1f40a"],
        ":whale2:": ["1f40b"],
        ":ram:": ["1f40f"],
        ":goat:": ["1f410"],
        ":rooster:": ["1f413"],
        ":dog2:": ["1f415"],
        ":pig2:": ["1f416"],
        ":dromedary_camel:": ["1f42a"],
        ":busts_in_silhouette:": ["1f465"],
        ":two_men_holding_hands:": ["1f46c"],
        ":two_women_holding_hands:": ["1f46d"],
        ":thought_balloon:": ["1f4ad"],
        ":euro:": ["1f4b6"],
        ":pound:": ["1f4b7"],
        ":mailbox_with_mail:": ["1f4ec"],
        ":mailbox_with_no_mail:": ["1f4ed"],
        ":postal_horn:": ["1f4ef"],
        ":no_mobile_phones:": ["1f4f5"],
        ":twisted_rightwards_arrows:": ["1f500"],
        ":repeat:": ["1f501"],
        ":repeat_one:": ["1f502"],
        ":arrows_counterclockwise:": ["1f504"],
        ":low_brightness:": ["1f505"],
        ":high_brightness:": ["1f506"],
        ":mute:": ["1f507"],
        ":sound:": ["1f509"],
        ":no_bell:": ["1f515"],
        ":microscope:": ["1f52c"],
        ":telescope:": ["1f52d"],
        ":clock130:": ["1f55c"],
        ":clock230:": ["1f55d"],
        ":clock330:": ["1f55e"],
        ":clock430:": ["1f55f"],
        ":clock530:": ["1f560"],
        ":clock630:": ["1f561"],
        ":clock730:": ["1f562"],
        ":clock830:": ["1f563"],
        ":clock930:": ["1f564"],
        ":clock1030:": ["1f565"],
        ":clock1130:": ["1f566"],
        ":clock1230:": ["1f567"],
        ":speaker:": ["1f508"],
        ":train:": ["1f68b"],
        ":medal:": ["1f3c5"],
        ":sports_medal:": ["1f3c5"],
        ":flag_black:": ["1f3f4"],
        ":waving_black_flag:": ["1f3f4"],
        ":camera_with_flash:": ["1f4f8"],
        ":sleeping_accommodation:": ["1f6cc"],
        ":middle_finger:": ["1f595"],
        ":reversed_hand_with_middle_finger_extended:": ["1f595"],
        ":vulcan:": ["1f596"],
        ":raised_hand_with_part_between_middle_and_ring_fingers:": ["1f596"],
        ":slight_frown:": ["1f641"],
        ":slightly_frowning_face:": ["1f641"],
        ":slight_smile:": ["1f642"],
        ":slightly_smiling_face:": ["1f642"],
        ":airplane_departure:": ["1f6eb"],
        ":airplane_arriving:": ["1f6ec"],
        ":tone1:": ["1f3fb"],
        ":tone2:": ["1f3fc"],
        ":tone3:": ["1f3fd"],
        ":tone4:": ["1f3fe"],
        ":tone5:": ["1f3ff"],
        ":upside_down:": ["1f643"],
        ":upside_down_face:": ["1f643"],
        ":money_mouth:": ["1f911"],
        ":money_mouth_face:": ["1f911"],
        ":nerd:": ["1f913"],
        ":nerd_face:": ["1f913"],
        ":hugging:": ["1f917"],
        ":hugging_face:": ["1f917"],
        ":rolling_eyes:": ["1f644"],
        ":face_with_rolling_eyes:": ["1f644"],
        ":thinking:": ["1f914"],
        ":thinking_face:": ["1f914"],
        ":zipper_mouth:": ["1f910"],
        ":zipper_mouth_face:": ["1f910"],
        ":thermometer_face:": ["1f912"],
        ":face_with_thermometer:": ["1f912"],
        ":head_bandage:": ["1f915"],
        ":face_with_head_bandage:": ["1f915"],
        ":robot:": ["1f916"],
        ":robot_face:": ["1f916"],
        ":lion_face:": ["1f981"],
        ":lion:": ["1f981"],
        ":unicorn:": ["1f984"],
        ":unicorn_face:": ["1f984"],
        ":scorpion:": ["1f982"],
        ":crab:": ["1f980"],
        ":turkey:": ["1f983"],
        ":cheese:": ["1f9c0"],
        ":cheese_wedge:": ["1f9c0"],
        ":hotdog:": ["1f32d"],
        ":hot_dog:": ["1f32d"],
        ":taco:": ["1f32e"],
        ":burrito:": ["1f32f"],
        ":popcorn:": ["1f37f"],
        ":champagne:": ["1f37e"],
        ":bottle_with_popping_cork:": ["1f37e"],
        ":bow_and_arrow:": ["1f3f9"],
        ":archery:": ["1f3f9"],
        ":amphora:": ["1f3fa"],
        ":place_of_worship:": ["1f6d0"],
        ":worship_symbol:": ["1f6d0"],
        ":kaaba:": ["1f54b"],
        ":mosque:": ["1f54c"],
        ":synagogue:": ["1f54d"],
        ":menorah:": ["1f54e"],
        ":prayer_beads:": ["1f4ff"],
        ":cricket:": ["1f3cf"],
        ":cricket_bat_ball:": ["1f3cf"],
        ":volleyball:": ["1f3d0"],
        ":field_hockey:": ["1f3d1"],
        ":hockey:": ["1f3d2"],
        ":ping_pong:": ["1f3d3"],
        ":table_tennis:": ["1f3d3"],
        ":badminton:": ["1f3f8"],
        ":fast_forward:": ["23e9"],
        ":rewind:": ["23ea"],
        ":arrow_double_up:": ["23eb"],
        ":arrow_double_down:": ["23ec"],
        ":alarm_clock:": ["23f0"],
        ":hourglass_flowing_sand:": ["23f3"],
        ":ophiuchus:": ["26ce"],
        ":white_check_mark:": ["2705"],
        ":fist:": ["270a"],
        ":raised_hand:": ["270b"],
        ":sparkles:": ["2728"],
        ":x:": ["274c"],
        ":negative_squared_cross_mark:": ["274e"],
        ":question:": ["2753"],
        ":grey_question:": ["2754"],
        ":grey_exclamation:": ["2755"],
        ":heavy_plus_sign:": ["2795"],
        ":heavy_minus_sign:": ["2796"],
        ":heavy_division_sign:": ["2797"],
        ":curly_loop:": ["27b0"],
        ":loop:": ["27bf"]
    };
    var e = [], c;
    for (c in b.emojioneList)b.emojioneList.hasOwnProperty(c) && e.push(c.replace(/[+]/g, "\\$&"));
    b.shortnames = e.join("|");
    b.asciiList = {};
    b.asciiRegexp = "(\\<3|&lt;3|\\<\\/3|&lt;\\/3|\\:'\\)|\\:'\\-\\)|\\:D|\\:\\-D|\\=D|\\:\\)|\\:\\-\\)|\\=\\]|\\=\\)|\\:\\]|'\\:\\)|'\\:\\-\\)|'\\=\\)|'\\:D|'\\:\\-D|'\\=D|\\>\\:\\)|&gt;\\:\\)|\\>;\\)|&gt;;\\)|\\>\\:\\-\\)|&gt;\\:\\-\\)|\\>\\=\\)|&gt;\\=\\)|;\\)|;\\-\\)|\\*\\-\\)|\\*\\)|;\\-\\]|;\\]|;D|;\\^\\)|'\\:\\(|'\\:\\-\\(|'\\=\\(|\\:\\*|\\:\\-\\*|\\=\\*|\\:\\^\\*|\\>\\:P|&gt;\\:P|X\\-P|x\\-p|\\>\\:\\[|&gt;\\:\\[|\\:\\-\\(|\\:\\(|\\:\\-\\[|\\:\\[|\\=\\(|\\>\\:\\(|&gt;\\:\\(|\\>\\:\\-\\(|&gt;\\:\\-\\(|\\:@|\\:'\\(|\\:'\\-\\(|;\\(|;\\-\\(|\\>\\.\\<|&gt;\\.&lt;|D\\:|\\:\\$|\\=\\$|#\\-\\)|#\\)|%\\-\\)|%\\)|X\\)|X\\-\\)|\\*\\\\0\\/\\*|\\\\0\\/|\\*\\\\O\\/\\*|\\\\O\\/|O\\:\\-\\)|0\\:\\-3|0\\:3|0\\:\\-\\)|0\\:\\)|0;\\^\\)|O\\:\\-\\)|O\\:\\)|O;\\-\\)|O\\=\\)|0;\\-\\)|O\\:\\-3|O\\:3|B\\-\\)|B\\)|8\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\-__\\-|\\-___\\-|\\>\\:\\\\|&gt;\\:\\\\|\\>\\:\\/|&gt;\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\:\\-P|\\=P|\\:\\-p|\\:p|\\=p|\\:\\-\u00de|\\:\\-&THORN;|\\:\u00de|\\:&THORN;|\\:\u00fe|\\:&thorn;|\\:\\-\u00fe|\\:\\-&thorn;|\\:\\-b|\\:b|d\\:|\\:\\-O|\\:O|\\:\\-o|\\:o|O_O|\\>\\:O|&gt;\\:O|\\:\\-X|\\:X|\\:\\-#|\\:#|\\=X|\\=x|\\:x|\\:\\-x|\\=#)";
    b.unicodeRegexp = "(\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66|\\uD83D\\uDC41\\u200D\\uD83D\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE9|\\uD83C\\uDDE6\\uD83C\\uDDEA|\\uD83C\\uDDE6\\uD83C\\uDDEB|\\uD83C\\uDDE6\\uD83C\\uDDEC|\\uD83C\\uDDE6\\uD83C\\uDDEE|\\uD83C\\uDDE6\\uD83C\\uDDF1|\\uD83C\\uDDE6\\uD83C\\uDDF2|\\uD83C\\uDDE6\\uD83C\\uDDF4|\\uD83C\\uDDE6\\uD83C\\uDDF6|\\uD83C\\uDDE6\\uD83C\\uDDF7|\\uD83C\\uDDE6\\uD83C\\uDDF8|\\uD83E\\uDD18\\uD83C\\uDFFF|\\uD83E\\uDD18\\uD83C\\uDFFE|\\uD83E\\uDD18\\uD83C\\uDFFD|\\uD83E\\uDD18\\uD83C\\uDFFC|\\uD83E\\uDD18\\uD83C\\uDFFB|\\uD83D\\uDEC0\\uD83C\\uDFFF|\\uD83D\\uDEC0\\uD83C\\uDFFE|\\uD83D\\uDEC0\\uD83C\\uDFFD|\\uD83D\\uDEC0\\uD83C\\uDFFC|\\uD83D\\uDEC0\\uD83C\\uDFFB|\\uD83D\\uDEB6\\uD83C\\uDFFF|\\uD83D\\uDEB6\\uD83C\\uDFFE|\\uD83D\\uDEB6\\uD83C\\uDFFD|\\uD83D\\uDEB6\\uD83C\\uDFFC|\\uD83D\\uDEB6\\uD83C\\uDFFB|\\uD83D\\uDEB5\\uD83C\\uDFFF|\\uD83D\\uDEB5\\uD83C\\uDFFE|\\uD83D\\uDEB5\\uD83C\\uDFFD|\\uD83D\\uDEB5\\uD83C\\uDFFC|\\uD83D\\uDEB5\\uD83C\\uDFFB|\\uD83D\\uDEB4\\uD83C\\uDFFF|\\uD83D\\uDEB4\\uD83C\\uDFFE|\\uD83D\\uDEB4\\uD83C\\uDFFD|\\uD83D\\uDEB4\\uD83C\\uDFFC|\\uD83D\\uDEB4\\uD83C\\uDFFB|\\uD83D\\uDEA3\\uD83C\\uDFFF|\\uD83D\\uDEA3\\uD83C\\uDFFE|\\uD83D\\uDEA3\\uD83C\\uDFFD|\\uD83D\\uDEA3\\uD83C\\uDFFC|\\uD83D\\uDEA3\\uD83C\\uDFFB|\\uD83D\\uDE4F\\uD83C\\uDFFF|\\uD83D\\uDE4F\\uD83C\\uDFFE|\\uD83D\\uDE4F\\uD83C\\uDFFD|\\uD83D\\uDE4F\\uD83C\\uDFFC|\\uD83D\\uDE4F\\uD83C\\uDFFB|\\uD83D\\uDE4E\\uD83C\\uDFFF|\\uD83D\\uDE4E\\uD83C\\uDFFE|\\uD83D\\uDE4E\\uD83C\\uDFFD|\\uD83D\\uDE4E\\uD83C\\uDFFC|\\uD83D\\uDE4E\\uD83C\\uDFFB|\\uD83D\\uDE4D\\uD83C\\uDFFF|\\uD83D\\uDE4D\\uD83C\\uDFFE|\\uD83D\\uDE4D\\uD83C\\uDFFD|\\uD83D\\uDE4D\\uD83C\\uDFFC|\\uD83D\\uDE4D\\uD83C\\uDFFB|\\uD83D\\uDE4C\\uD83C\\uDFFF|\\uD83D\\uDE4C\\uD83C\\uDFFE|\\uD83D\\uDE4C\\uD83C\\uDFFD|\\uD83D\\uDE4C\\uD83C\\uDFFC|\\uD83D\\uDE4C\\uD83C\\uDFFB|\\uD83D\\uDE4B\\uD83C\\uDFFF|\\uD83D\\uDE4B\\uD83C\\uDFFE|\\uD83D\\uDE4B\\uD83C\\uDFFD|\\uD83D\\uDE4B\\uD83C\\uDFFC|\\uD83D\\uDE4B\\uD83C\\uDFFB|\\uD83D\\uDE47\\uD83C\\uDFFF|\\uD83D\\uDE47\\uD83C\\uDFFE|\\uD83D\\uDE47\\uD83C\\uDFFD|\\uD83D\\uDE47\\uD83C\\uDFFC|\\uD83D\\uDE47\\uD83C\\uDFFB|\\uD83D\\uDE46\\uD83C\\uDFFF|\\uD83D\\uDE46\\uD83C\\uDFFE|\\uD83D\\uDE46\\uD83C\\uDFFD|\\uD83D\\uDE46\\uD83C\\uDFFC|\\uD83D\\uDE46\\uD83C\\uDFFB|\\uD83D\\uDE45\\uD83C\\uDFFF|\\uD83D\\uDE45\\uD83C\\uDFFE|\\uD83D\\uDE45\\uD83C\\uDFFD|\\uD83D\\uDE45\\uD83C\\uDFFC|\\uD83D\\uDE45\\uD83C\\uDFFB|\\uD83D\\uDD96\\uD83C\\uDFFF|\\uD83D\\uDD96\\uD83C\\uDFFE|\\uD83D\\uDD96\\uD83C\\uDFFD|\\uD83D\\uDD96\\uD83C\\uDFFC|\\uD83D\\uDD96\\uD83C\\uDFFB|\\uD83D\\uDD95\\uD83C\\uDFFF|\\uD83D\\uDD95\\uD83C\\uDFFE|\\uD83D\\uDD95\\uD83C\\uDFFD|\\uD83D\\uDD95\\uD83C\\uDFFC|\\uD83D\\uDD95\\uD83C\\uDFFB|\\uD83D\\uDD90\\uD83C\\uDFFF|\\uD83D\\uDD90\\uD83C\\uDFFE|\\uD83D\\uDD90\\uD83C\\uDFFD|\\uD83D\\uDD90\\uD83C\\uDFFC|\\uD83D\\uDD90\\uD83C\\uDFFB|\\uD83D\\uDD75\\uD83C\\uDFFF|\\uD83D\\uDD75\\uD83C\\uDFFE|\\uD83D\\uDD75\\uD83C\\uDFFD|\\uD83D\\uDD75\\uD83C\\uDFFC|\\uD83D\\uDD75\\uD83C\\uDFFB|\\uD83D\\uDCAA\\uD83C\\uDFFF|\\uD83D\\uDCAA\\uD83C\\uDFFE|\\uD83D\\uDCAA\\uD83C\\uDFFD|\\uD83D\\uDCAA\\uD83C\\uDFFC|\\uD83D\\uDCAA\\uD83C\\uDFFB|\\uD83D\\uDC87\\uD83C\\uDFFF|\\uD83D\\uDC87\\uD83C\\uDFFE|\\uD83D\\uDC87\\uD83C\\uDFFD|\\uD83D\\uDC87\\uD83C\\uDFFC|\\uD83D\\uDC87\\uD83C\\uDFFB|\\uD83D\\uDC86\\uD83C\\uDFFF|\\uD83D\\uDC86\\uD83C\\uDFFE|\\uD83D\\uDC86\\uD83C\\uDFFD|\\uD83D\\uDC86\\uD83C\\uDFFC|\\uD83D\\uDC86\\uD83C\\uDFFB|\\uD83D\\uDC85\\uD83C\\uDFFF|\\uD83D\\uDC85\\uD83C\\uDFFE|\\uD83D\\uDC85\\uD83C\\uDFFD|\\uD83D\\uDC85\\uD83C\\uDFFC|\\uD83D\\uDC85\\uD83C\\uDFFB|\\uD83D\\uDC83\\uD83C\\uDFFF|\\uD83D\\uDC83\\uD83C\\uDFFE|\\uD83D\\uDC83\\uD83C\\uDFFD|\\uD83D\\uDC83\\uD83C\\uDFFC|\\uD83D\\uDC83\\uD83C\\uDFFB|\\uD83D\\uDC82\\uD83C\\uDFFF|\\uD83D\\uDC82\\uD83C\\uDFFE|\\uD83D\\uDC82\\uD83C\\uDFFD|\\uD83D\\uDC82\\uD83C\\uDFFC|\\uD83D\\uDC82\\uD83C\\uDFFB|\\uD83D\\uDC81\\uD83C\\uDFFF|\\uD83D\\uDC81\\uD83C\\uDFFE|\\uD83D\\uDC81\\uD83C\\uDFFD|\\uD83D\\uDC81\\uD83C\\uDFFC|\\uD83D\\uDC81\\uD83C\\uDFFB|\\uD83D\\uDC7C\\uD83C\\uDFFF|\\uD83D\\uDC7C\\uD83C\\uDFFE|\\uD83D\\uDC7C\\uD83C\\uDFFD|\\uD83D\\uDC7C\\uD83C\\uDFFC|\\uD83D\\uDC7C\\uD83C\\uDFFB|\\uD83D\\uDC78\\uD83C\\uDFFF|\\uD83D\\uDC78\\uD83C\\uDFFE|\\uD83D\\uDC78\\uD83C\\uDFFD|\\uD83D\\uDC78\\uD83C\\uDFFC|\\uD83D\\uDC78\\uD83C\\uDFFB|\\uD83D\\uDC77\\uD83C\\uDFFF|\\uD83D\\uDC77\\uD83C\\uDFFE|\\uD83D\\uDC77\\uD83C\\uDFFD|\\uD83D\\uDC77\\uD83C\\uDFFC|\\uD83D\\uDC77\\uD83C\\uDFFB|\\uD83D\\uDC76\\uD83C\\uDFFF|\\uD83D\\uDC76\\uD83C\\uDFFE|\\uD83D\\uDC76\\uD83C\\uDFFD|\\uD83D\\uDC76\\uD83C\\uDFFC|\\uD83D\\uDC76\\uD83C\\uDFFB|\\uD83D\\uDC75\\uD83C\\uDFFF|\\uD83D\\uDC75\\uD83C\\uDFFE|\\uD83D\\uDC75\\uD83C\\uDFFD|\\uD83D\\uDC75\\uD83C\\uDFFC|\\uD83D\\uDC75\\uD83C\\uDFFB|\\uD83D\\uDC74\\uD83C\\uDFFF|\\uD83D\\uDC74\\uD83C\\uDFFE|\\uD83D\\uDC74\\uD83C\\uDFFD|\\uD83D\\uDC74\\uD83C\\uDFFC|\\uD83D\\uDC74\\uD83C\\uDFFB|\\uD83D\\uDC73\\uD83C\\uDFFF|\\uD83D\\uDC73\\uD83C\\uDFFE|\\uD83D\\uDC73\\uD83C\\uDFFD|\\uD83D\\uDC73\\uD83C\\uDFFC|\\uD83D\\uDC73\\uD83C\\uDFFB|\\uD83D\\uDC72\\uD83C\\uDFFF|\\uD83D\\uDC72\\uD83C\\uDFFE|\\uD83D\\uDC72\\uD83C\\uDFFD|\\uD83D\\uDC72\\uD83C\\uDFFC|\\uD83D\\uDC72\\uD83C\\uDFFB|\\uD83D\\uDC71\\uD83C\\uDFFF|\\uD83D\\uDC71\\uD83C\\uDFFE|\\uD83D\\uDC71\\uD83C\\uDFFD|\\uD83D\\uDC71\\uD83C\\uDFFC|\\uD83D\\uDC71\\uD83C\\uDFFB|\\uD83D\\uDC70\\uD83C\\uDFFF|\\uD83D\\uDC70\\uD83C\\uDFFE|\\uD83D\\uDC70\\uD83C\\uDFFD|\\uD83D\\uDC70\\uD83C\\uDFFC|\\uD83D\\uDC70\\uD83C\\uDFFB|\\uD83D\\uDC6E\\uD83C\\uDFFF|\\uD83D\\uDC6E\\uD83C\\uDFFE|\\uD83D\\uDC6E\\uD83C\\uDFFD|\\uD83D\\uDC6E\\uD83C\\uDFFC|\\uD83D\\uDC6E\\uD83C\\uDFFB|\\uD83D\\uDC69\\uD83C\\uDFFF|\\uD83D\\uDC69\\uD83C\\uDFFE|\\uD83D\\uDC69\\uD83C\\uDFFD|\\uD83D\\uDC69\\uD83C\\uDFFC|\\uD83D\\uDC69\\uD83C\\uDFFB|\\uD83D\\uDC68\\uD83C\\uDFFF|\\uD83D\\uDC68\\uD83C\\uDFFE|\\uD83D\\uDC68\\uD83C\\uDFFD|\\uD83D\\uDC68\\uD83C\\uDFFC|\\uD83D\\uDC68\\uD83C\\uDFFB|\\uD83D\\uDC67\\uD83C\\uDFFF|\\uD83D\\uDC67\\uD83C\\uDFFE|\\uD83D\\uDC67\\uD83C\\uDFFD|\\uD83D\\uDC67\\uD83C\\uDFFC|\\uD83D\\uDC67\\uD83C\\uDFFB|\\uD83D\\uDC66\\uD83C\\uDFFF|\\uD83D\\uDC66\\uD83C\\uDFFE|\\uD83D\\uDC66\\uD83C\\uDFFD|\\uD83D\\uDC66\\uD83C\\uDFFC|\\uD83D\\uDC66\\uD83C\\uDFFB|\\uD83D\\uDC50\\uD83C\\uDFFF|\\uD83D\\uDC50\\uD83C\\uDFFE|\\uD83D\\uDC50\\uD83C\\uDFFD|\\uD83D\\uDC50\\uD83C\\uDFFC|\\uD83D\\uDC50\\uD83C\\uDFFB|\\uD83D\\uDC4F\\uD83C\\uDFFF|\\uD83D\\uDC4F\\uD83C\\uDFFE|\\uD83D\\uDC4F\\uD83C\\uDFFD|\\uD83D\\uDC4F\\uD83C\\uDFFC|\\uD83D\\uDC4F\\uD83C\\uDFFB|\\uD83D\\uDC4E\\uD83C\\uDFFF|\\uD83D\\uDC4E\\uD83C\\uDFFE|\\uD83D\\uDC4E\\uD83C\\uDFFD|\\uD83D\\uDC4E\\uD83C\\uDFFC|\\uD83D\\uDC4E\\uD83C\\uDFFB|\\uD83D\\uDC4D\\uD83C\\uDFFF|\\uD83D\\uDC4D\\uD83C\\uDFFE|\\uD83D\\uDC4D\\uD83C\\uDFFD|\\uD83D\\uDC4D\\uD83C\\uDFFC|\\uD83D\\uDC4D\\uD83C\\uDFFB|\\uD83D\\uDC4C\\uD83C\\uDFFF|\\uD83D\\uDC4C\\uD83C\\uDFFE|\\uD83D\\uDC4C\\uD83C\\uDFFD|\\uD83D\\uDC4C\\uD83C\\uDFFC|\\uD83D\\uDC4C\\uD83C\\uDFFB|\\uD83D\\uDC4B\\uD83C\\uDFFF|\\uD83D\\uDC4B\\uD83C\\uDFFE|\\uD83D\\uDC4B\\uD83C\\uDFFD|\\uD83D\\uDC4B\\uD83C\\uDFFC|\\uD83D\\uDC4B\\uD83C\\uDFFB|\\uD83D\\uDC4A\\uD83C\\uDFFF|\\uD83D\\uDC4A\\uD83C\\uDFFE|\\uD83D\\uDC4A\\uD83C\\uDFFD|\\uD83D\\uDC4A\\uD83C\\uDFFC|\\uD83D\\uDC4A\\uD83C\\uDFFB|\\uD83D\\uDC49\\uD83C\\uDFFF|\\uD83D\\uDC49\\uD83C\\uDFFE|\\uD83D\\uDC49\\uD83C\\uDFFD|\\uD83D\\uDC49\\uD83C\\uDFFC|\\uD83D\\uDC49\\uD83C\\uDFFB|\\uD83D\\uDC48\\uD83C\\uDFFF|\\uD83D\\uDC48\\uD83C\\uDFFE|\\uD83D\\uDC48\\uD83C\\uDFFD|\\uD83D\\uDC48\\uD83C\\uDFFC|\\uD83D\\uDC48\\uD83C\\uDFFB|\\uD83D\\uDC47\\uD83C\\uDFFF|\\uD83D\\uDC47\\uD83C\\uDFFE|\\uD83D\\uDC47\\uD83C\\uDFFD|\\uD83D\\uDC47\\uD83C\\uDFFC|\\uD83D\\uDC47\\uD83C\\uDFFB|\\uD83D\\uDC46\\uD83C\\uDFFF|\\uD83D\\uDC46\\uD83C\\uDFFE|\\uD83D\\uDC46\\uD83C\\uDFFD|\\uD83D\\uDC46\\uD83C\\uDFFC|\\uD83D\\uDC46\\uD83C\\uDFFB|\\uD83D\\uDC43\\uD83C\\uDFFF|\\uD83D\\uDC43\\uD83C\\uDFFE|\\uD83D\\uDC43\\uD83C\\uDFFD|\\uD83D\\uDC43\\uD83C\\uDFFC|\\uD83D\\uDC43\\uD83C\\uDFFB|\\uD83D\\uDC42\\uD83C\\uDFFF|\\uD83D\\uDC42\\uD83C\\uDFFE|\\uD83D\\uDC42\\uD83C\\uDFFD|\\uD83D\\uDC42\\uD83C\\uDFFC|\\uD83D\\uDC42\\uD83C\\uDFFB|\\uD83C\\uDFCB\\uD83C\\uDFFF|\\uD83C\\uDFCB\\uD83C\\uDFFE|\\uD83C\\uDFCB\\uD83C\\uDFFD|\\uD83C\\uDFCB\\uD83C\\uDFFC|\\uD83C\\uDFCB\\uD83C\\uDFFB|\\uD83C\\uDFCA\\uD83C\\uDFFF|\\uD83C\\uDFCA\\uD83C\\uDFFE|\\uD83C\\uDFCA\\uD83C\\uDFFD|\\uD83C\\uDFCA\\uD83C\\uDFFC|\\uD83C\\uDFCA\\uD83C\\uDFFB|\\uD83C\\uDFC7\\uD83C\\uDFFF|\\uD83C\\uDFC7\\uD83C\\uDFFE|\\uD83C\\uDFC7\\uD83C\\uDFFD|\\uD83C\\uDFC7\\uD83C\\uDFFC|\\uD83C\\uDFC7\\uD83C\\uDFFB|\\uD83C\\uDFC4\\uD83C\\uDFFF|\\uD83C\\uDFC4\\uD83C\\uDFFE|\\uD83C\\uDFC4\\uD83C\\uDFFD|\\uD83C\\uDFC4\\uD83C\\uDFFC|\\uD83C\\uDFC4\\uD83C\\uDFFB|\\uD83C\\uDFC3\\uD83C\\uDFFF|\\uD83C\\uDFC3\\uD83C\\uDFFE|\\uD83C\\uDFC3\\uD83C\\uDFFD|\\uD83C\\uDFC3\\uD83C\\uDFFC|\\uD83C\\uDFC3\\uD83C\\uDFFB|\\uD83C\\uDF85\\uD83C\\uDFFF|\\uD83C\\uDF85\\uD83C\\uDFFE|\\uD83C\\uDF85\\uD83C\\uDFFD|\\uD83C\\uDF85\\uD83C\\uDFFC|\\uD83C\\uDF85\\uD83C\\uDFFB|\\uD83C\\uDDFF\\uD83C\\uDDFC|\\uD83C\\uDDFF\\uD83C\\uDDF2|\\uD83C\\uDDFF\\uD83C\\uDDE6|\\uD83C\\uDDFE\\uD83C\\uDDF9|\\uD83C\\uDDFE\\uD83C\\uDDEA|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDFC\\uD83C\\uDDF8|\\uD83C\\uDDFC\\uD83C\\uDDEB|\\uD83C\\uDDFB\\uD83C\\uDDFA|\\uD83C\\uDDFB\\uD83C\\uDDF3|\\uD83C\\uDDFB\\uD83C\\uDDEE|\\uD83C\\uDDFB\\uD83C\\uDDEC|\\uD83C\\uDDFB\\uD83C\\uDDEA|\\uD83C\\uDDFB\\uD83C\\uDDE8|\\uD83C\\uDDFB\\uD83C\\uDDE6|\\uD83C\\uDDFA\\uD83C\\uDDFF|\\uD83C\\uDDFA\\uD83C\\uDDFE|\\uD83C\\uDDFA\\uD83C\\uDDF8|\\uD83C\\uDDFA\\uD83C\\uDDF2|\\uD83C\\uDDFA\\uD83C\\uDDEC|\\uD83C\\uDDFA\\uD83C\\uDDE6|\\uD83C\\uDDF9\\uD83C\\uDDFF|\\uD83C\\uDDE6\\uD83C\\uDDE8|\\uD83C\\uDDF9\\uD83C\\uDDFB|\\uD83C\\uDDF9\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDF7|\\uD83C\\uDDF9\\uD83C\\uDDF4|\\uD83C\\uDDF9\\uD83C\\uDDF3|\\uD83C\\uDDF9\\uD83C\\uDDF2|\\uD83C\\uDDF9\\uD83C\\uDDF1|\\uD83C\\uDDF9\\uD83C\\uDDF0|\\uD83C\\uDDF9\\uD83C\\uDDEF|\\uD83C\\uDDF9\\uD83C\\uDDED|\\uD83C\\uDDF9\\uD83C\\uDDEC|\\uD83C\\uDDF9\\uD83C\\uDDEB|\\uD83C\\uDDF9\\uD83C\\uDDE9|\\uD83C\\uDDF9\\uD83C\\uDDE8|\\uD83C\\uDDF9\\uD83C\\uDDE6|\\uD83C\\uDDF8\\uD83C\\uDDFF|\\uD83C\\uDDF8\\uD83C\\uDDFE|\\uD83C\\uDDF8\\uD83C\\uDDFD|\\uD83C\\uDDF8\\uD83C\\uDDFB|\\uD83C\\uDDF8\\uD83C\\uDDF9|\\uD83C\\uDDF8\\uD83C\\uDDF8|\\uD83C\\uDDF8\\uD83C\\uDDF7|\\uD83C\\uDDF8\\uD83C\\uDDF4|\\uD83C\\uDDF8\\uD83C\\uDDF3|\\uD83C\\uDDF8\\uD83C\\uDDF2|\\uD83C\\uDDF8\\uD83C\\uDDF1|\\uD83C\\uDDF8\\uD83C\\uDDF0|\\uD83C\\uDDF8\\uD83C\\uDDEF|\\uD83C\\uDDF8\\uD83C\\uDDEE|\\uD83C\\uDDF8\\uD83C\\uDDED|\\uD83C\\uDDF8\\uD83C\\uDDEC|\\uD83C\\uDDF8\\uD83C\\uDDEA|\\uD83C\\uDDF8\\uD83C\\uDDE9|\\uD83C\\uDDF8\\uD83C\\uDDE8|\\uD83C\\uDDF8\\uD83C\\uDDE7|\\uD83C\\uDDF8\\uD83C\\uDDE6|\\uD83C\\uDDF7\\uD83C\\uDDFC|\\uD83C\\uDDF7\\uD83C\\uDDFA|\\uD83C\\uDDF7\\uD83C\\uDDF8|\\uD83C\\uDDF7\\uD83C\\uDDF4|\\uD83C\\uDDF7\\uD83C\\uDDEA|\\uD83C\\uDDF6\\uD83C\\uDDE6|\\uD83C\\uDDF5\\uD83C\\uDDFE|\\uD83C\\uDDF5\\uD83C\\uDDFC|\\uD83C\\uDDF5\\uD83C\\uDDF9|\\uD83C\\uDDF5\\uD83C\\uDDF8|\\uD83C\\uDDF5\\uD83C\\uDDF7|\\uD83C\\uDDF5\\uD83C\\uDDF3|\\uD83C\\uDDF5\\uD83C\\uDDF2|\\uD83C\\uDDF5\\uD83C\\uDDF1|\\uD83C\\uDDF5\\uD83C\\uDDF0|\\uD83C\\uDDF5\\uD83C\\uDDED|\\uD83C\\uDDF5\\uD83C\\uDDEC|\\uD83C\\uDDF5\\uD83C\\uDDEB|\\uD83C\\uDDF5\\uD83C\\uDDEA|\\uD83C\\uDDF5\\uD83C\\uDDE6|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83C\\uDDF3\\uD83C\\uDDFF|\\uD83C\\uDDF3\\uD83C\\uDDFA|\\uD83C\\uDDF3\\uD83C\\uDDF7|\\uD83C\\uDDF3\\uD83C\\uDDF5|\\uD83C\\uDDF3\\uD83C\\uDDF4|\\uD83C\\uDDF3\\uD83C\\uDDF1|\\uD83C\\uDDF3\\uD83C\\uDDEE|\\uD83C\\uDDF3\\uD83C\\uDDEC|\\uD83C\\uDDF3\\uD83C\\uDDEB|\\uD83C\\uDDF3\\uD83C\\uDDEA|\\uD83C\\uDDF3\\uD83C\\uDDE8|\\uD83C\\uDDF3\\uD83C\\uDDE6|\\uD83C\\uDDF2\\uD83C\\uDDFF|\\uD83C\\uDDF2\\uD83C\\uDDFE|\\uD83C\\uDDF2\\uD83C\\uDDFD|\\uD83C\\uDDF2\\uD83C\\uDDFC|\\uD83C\\uDDF2\\uD83C\\uDDFB|\\uD83C\\uDDF2\\uD83C\\uDDFA|\\uD83C\\uDDF2\\uD83C\\uDDF9|\\uD83C\\uDDF2\\uD83C\\uDDF8|\\uD83C\\uDDF2\\uD83C\\uDDF7|\\uD83C\\uDDF2\\uD83C\\uDDF6|\\uD83C\\uDDF2\\uD83C\\uDDF5|\\uD83C\\uDDF2\\uD83C\\uDDF4|\\uD83C\\uDDF2\\uD83C\\uDDF3|\\uD83C\\uDDF2\\uD83C\\uDDF2|\\uD83C\\uDDF2\\uD83C\\uDDF1|\\uD83C\\uDDF2\\uD83C\\uDDF0|\\uD83C\\uDDF2\\uD83C\\uDDED|\\uD83C\\uDDF2\\uD83C\\uDDEC|\\uD83C\\uDDF2\\uD83C\\uDDEB|\\uD83C\\uDDF2\\uD83C\\uDDEA|\\uD83C\\uDDF2\\uD83C\\uDDE9|\\uD83C\\uDDF2\\uD83C\\uDDE8|\\uD83C\\uDDF2\\uD83C\\uDDE6|\\uD83C\\uDDF1\\uD83C\\uDDFE|\\uD83C\\uDDF1\\uD83C\\uDDFB|\\uD83C\\uDDF1\\uD83C\\uDDFA|\\uD83C\\uDDF1\\uD83C\\uDDF9|\\uD83C\\uDDF1\\uD83C\\uDDF8|\\uD83C\\uDDF1\\uD83C\\uDDF7|\\uD83C\\uDDF1\\uD83C\\uDDF0|\\uD83C\\uDDF1\\uD83C\\uDDEE|\\uD83C\\uDDF1\\uD83C\\uDDE8|\\uD83C\\uDDF1\\uD83C\\uDDE7|\\uD83C\\uDDF1\\uD83C\\uDDE6|\\uD83C\\uDDF0\\uD83C\\uDDFF|\\uD83C\\uDDF0\\uD83C\\uDDFE|\\uD83C\\uDDF0\\uD83C\\uDDFC|\\uD83C\\uDDF0\\uD83C\\uDDF7|\\uD83C\\uDDF0\\uD83C\\uDDF5|\\uD83C\\uDDF0\\uD83C\\uDDF3|\\uD83C\\uDDF0\\uD83C\\uDDF2|\\uD83C\\uDDF0\\uD83C\\uDDEE|\\uD83C\\uDDF0\\uD83C\\uDDED|\\uD83C\\uDDF0\\uD83C\\uDDEC|\\uD83C\\uDDF0\\uD83C\\uDDEA|\\uD83C\\uDDEF\\uD83C\\uDDF5|\\uD83C\\uDDEF\\uD83C\\uDDF4|\\uD83C\\uDDEF\\uD83C\\uDDF2|\\uD83C\\uDDEF\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDF9|\\uD83C\\uDDEE\\uD83C\\uDDF8|\\uD83C\\uDDEE\\uD83C\\uDDF7|\\uD83C\\uDDEE\\uD83C\\uDDF6|\\uD83C\\uDDEE\\uD83C\\uDDF4|\\uD83C\\uDDEE\\uD83C\\uDDF3|\\uD83C\\uDDEE\\uD83C\\uDDF2|\\uD83C\\uDDEE\\uD83C\\uDDF1|\\uD83C\\uDDEE\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDE9|\\uD83C\\uDDEE\\uD83C\\uDDE8|\\uD83C\\uDDED\\uD83C\\uDDFA|\\uD83C\\uDDED\\uD83C\\uDDF9|\\uD83C\\uDDED\\uD83C\\uDDF7|\\uD83C\\uDDED\\uD83C\\uDDF3|\\uD83C\\uDDED\\uD83C\\uDDF2|\\uD83C\\uDDED\\uD83C\\uDDF0|\\uD83C\\uDDEC\\uD83C\\uDDFE|\\uD83C\\uDDEC\\uD83C\\uDDFC|\\uD83C\\uDDEC\\uD83C\\uDDFA|\\uD83C\\uDDEC\\uD83C\\uDDF9|\\uD83C\\uDDEC\\uD83C\\uDDF8|\\uD83C\\uDDEC\\uD83C\\uDDF7|\\uD83C\\uDDEC\\uD83C\\uDDF6|\\uD83C\\uDDEC\\uD83C\\uDDF5|\\uD83C\\uDDEC\\uD83C\\uDDF3|\\uD83C\\uDDEC\\uD83C\\uDDF2|\\uD83C\\uDDEC\\uD83C\\uDDF1|\\uD83C\\uDDEC\\uD83C\\uDDEE|\\uD83C\\uDDEC\\uD83C\\uDDED|\\uD83C\\uDDEC\\uD83C\\uDDEC|\\uD83C\\uDDEC\\uD83C\\uDDEB|\\uD83C\\uDDEC\\uD83C\\uDDEA|\\uD83C\\uDDEC\\uD83C\\uDDE9|\\uD83C\\uDDEC\\uD83C\\uDDE7|\\uD83C\\uDDEC\\uD83C\\uDDE6|\\uD83C\\uDDEB\\uD83C\\uDDF7|\\uD83C\\uDDEB\\uD83C\\uDDF4|\\uD83C\\uDDEB\\uD83C\\uDDF2|\\uD83C\\uDDEB\\uD83C\\uDDF0|\\uD83C\\uDDEB\\uD83C\\uDDEF|\\uD83C\\uDDEB\\uD83C\\uDDEE|\\uD83C\\uDDEA\\uD83C\\uDDFA|\\uD83C\\uDDEA\\uD83C\\uDDF9|\\uD83C\\uDDEA\\uD83C\\uDDF8|\\uD83C\\uDDEA\\uD83C\\uDDF7|\\uD83C\\uDDEA\\uD83C\\uDDED|\\uD83C\\uDDEA\\uD83C\\uDDEC|\\uD83C\\uDDEA\\uD83C\\uDDEA|\\uD83C\\uDDEA\\uD83C\\uDDE8|\\uD83C\\uDDEA\\uD83C\\uDDE6|\\uD83C\\uDDE9\\uD83C\\uDDFF|\\uD83C\\uDDE9\\uD83C\\uDDF4|\\uD83C\\uDDE9\\uD83C\\uDDF2|\\uD83C\\uDDE9\\uD83C\\uDDF0|\\uD83C\\uDDE9\\uD83C\\uDDEF|\\uD83C\\uDDE9\\uD83C\\uDDEC|\\uD83C\\uDDE9\\uD83C\\uDDEA|\\uD83C\\uDDE8\\uD83C\\uDDFF|\\uD83C\\uDDE8\\uD83C\\uDDFE|\\uD83C\\uDDE8\\uD83C\\uDDFD|\\uD83C\\uDDE8\\uD83C\\uDDFC|\\uD83C\\uDDE8\\uD83C\\uDDFB|\\uD83C\\uDDE8\\uD83C\\uDDFA|\\uD83C\\uDDE8\\uD83C\\uDDF7|\\uD83C\\uDDE8\\uD83C\\uDDF5|\\uD83C\\uDDE8\\uD83C\\uDDF4|\\uD83C\\uDDE8\\uD83C\\uDDF3|\\uD83C\\uDDE8\\uD83C\\uDDF2|\\uD83C\\uDDE8\\uD83C\\uDDF1|\\uD83C\\uDDE8\\uD83C\\uDDF0|\\uD83C\\uDDE8\\uD83C\\uDDEE|\\uD83C\\uDDE8\\uD83C\\uDDED|\\uD83C\\uDDE8\\uD83C\\uDDEC|\\uD83C\\uDDE8\\uD83C\\uDDEB|\\uD83C\\uDDE8\\uD83C\\uDDE9|\\uD83C\\uDDE8\\uD83C\\uDDE8|\\uD83C\\uDDE8\\uD83C\\uDDE6|\\uD83C\\uDDE7\\uD83C\\uDDFF|\\uD83C\\uDDE7\\uD83C\\uDDFE|\\uD83C\\uDDE7\\uD83C\\uDDFC|\\uD83C\\uDDE7\\uD83C\\uDDFB|\\uD83C\\uDDE7\\uD83C\\uDDF9|\\uD83C\\uDDE7\\uD83C\\uDDF8|\\uD83C\\uDDE7\\uD83C\\uDDF7|\\uD83C\\uDDE7\\uD83C\\uDDF6|\\uD83C\\uDDE7\\uD83C\\uDDF4|\\uD83C\\uDDE7\\uD83C\\uDDF3|\\uD83C\\uDDE7\\uD83C\\uDDF2|\\uD83C\\uDDE7\\uD83C\\uDDF1|\\uD83C\\uDDE7\\uD83C\\uDDEF|\\uD83C\\uDDE7\\uD83C\\uDDEE|\\uD83C\\uDDE7\\uD83C\\uDDED|\\uD83C\\uDDE7\\uD83C\\uDDEC|\\uD83C\\uDDE7\\uD83C\\uDDEB|\\uD83C\\uDDE7\\uD83C\\uDDEA|\\uD83C\\uDDE7\\uD83C\\uDDE9|\\uD83C\\uDDE7\\uD83C\\uDDE7|\\uD83C\\uDDE7\\uD83C\\uDDE6|\\uD83C\\uDDE6\\uD83C\\uDDFF|\\uD83C\\uDDE6\\uD83C\\uDDFD|\\uD83C\\uDDE6\\uD83C\\uDDFC|\\uD83C\\uDDE6\\uD83C\\uDDFA|\\uD83C\\uDDE6\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDFC|\\uD83D\\uDDA5\\uFE0F|\\u261D\\uD83C\\uDFFE|\\u261D\\uD83C\\uDFFD|\\u261D\\uD83C\\uDFFC|\\u261D\\uD83C\\uDFFB|\\uD83D\\uDDB1\\uFE0F|\\uD83C\\uDF26\\uFE0F|\\uD83C\\uDF25\\uFE0F|\\uD83C\\uDF24\\uFE0F|\\uD83D\\uDEF3\\uFE0F|\\uD83D\\uDEE9\\uFE0F|\\uD83C\\uDC04\\uFE0F|\\uD83C\\uDD7F\\uFE0F|\\uD83C\\uDE02\\uFE0F|\\uD83C\\uDE1A\\uFE0F|\\uD83C\\uDE2F\\uFE0F|\\uD83C\\uDE37\\uFE0F|\\uD83C\\uDF9E\\uFE0F|\\uD83C\\uDF9F\\uFE0F|\\uD83C\\uDFCB\\uFE0F|\\uD83C\\uDFCC\\uFE0F|\\uD83C\\uDFCD\\uFE0F|\\uD83C\\uDFCE\\uFE0F|\\uD83C\\uDF96\\uFE0F|\\uD83C\\uDF97\\uFE0F|\\uD83C\\uDF36\\uFE0F|\\uD83C\\uDF27\\uFE0F|\\uD83C\\uDF28\\uFE0F|\\uD83C\\uDF29\\uFE0F|\\uD83C\\uDF2A\\uFE0F|\\uD83C\\uDF2B\\uFE0F|\\uD83C\\uDF2C\\uFE0F|\\uD83D\\uDC3F\\uFE0F|\\uD83D\\uDD77\\uFE0F|\\uD83D\\uDD78\\uFE0F|\\uD83C\\uDF21\\uFE0F|\\uD83C\\uDF99\\uFE0F|\\uD83C\\uDF9A\\uFE0F|\\uD83C\\uDF9B\\uFE0F|\\uD83C\\uDFF3\\uFE0F|\\uD83C\\uDFF5\\uFE0F|\\uD83C\\uDFF7\\uFE0F|\\uD83D\\uDCFD\\uFE0F|\\uD83D\\uDD49\\uFE0F|\\uD83D\\uDD4A\\uFE0F|\\uD83D\\uDD6F\\uFE0F|\\uD83D\\uDD70\\uFE0F|\\uD83D\\uDD73\\uFE0F|\\uD83D\\uDD76\\uFE0F|\\uD83D\\uDD79\\uFE0F|\\uD83D\\uDD87\\uFE0F|\\uD83D\\uDD8A\\uFE0F|\\uD83D\\uDD8B\\uFE0F|\\uD83D\\uDD8C\\uFE0F|\\uD83D\\uDD8D\\uFE0F|\\uD83D\\uDEE5\\uFE0F|\\uD83D\\uDDA8\\uFE0F|\\uD83D\\uDDB2\\uFE0F|\\uD83D\\uDDBC\\uFE0F|\\uD83D\\uDDC2\\uFE0F|\\uD83D\\uDDC3\\uFE0F|\\uD83D\\uDDC4\\uFE0F|\\uD83D\\uDDD1\\uFE0F|\\uD83D\\uDDD2\\uFE0F|\\uD83D\\uDDD3\\uFE0F|\\uD83D\\uDDDC\\uFE0F|\\uD83D\\uDDDD\\uFE0F|\\uD83D\\uDDDE\\uFE0F|\\uD83D\\uDDE1\\uFE0F|\\uD83D\\uDDE3\\uFE0F|\\uD83D\\uDDEF\\uFE0F|\\uD83D\\uDDF3\\uFE0F|\\uD83D\\uDDFA\\uFE0F|\\uD83D\\uDEE0\\uFE0F|\\uD83D\\uDEE1\\uFE0F|\\uD83D\\uDEE2\\uFE0F|\\uD83D\\uDEF0\\uFE0F|\\uD83C\\uDF7D\\uFE0F|\\uD83D\\uDC41\\uFE0F|\\uD83D\\uDD74\\uFE0F|\\uD83D\\uDD75\\uFE0F|\\uD83D\\uDD90\\uFE0F|\\uD83C\\uDFD4\\uFE0F|\\uD83C\\uDFD5\\uFE0F|\\uD83C\\uDFD6\\uFE0F|\\uD83C\\uDFD7\\uFE0F|\\uD83C\\uDFD8\\uFE0F|\\uD83C\\uDFD9\\uFE0F|\\uD83C\\uDFDA\\uFE0F|\\uD83C\\uDFDB\\uFE0F|\\uD83C\\uDFDC\\uFE0F|\\uD83C\\uDFDD\\uFE0F|\\uD83C\\uDFDE\\uFE0F|\\uD83C\\uDFDF\\uFE0F|\\uD83D\\uDECB\\uFE0F|\\uD83D\\uDECD\\uFE0F|\\uD83D\\uDECE\\uFE0F|\\uD83D\\uDECF\\uFE0F|\\uD83D\\uDEE3\\uFE0F|\\uD83D\\uDEE4\\uFE0F|4\\uFE0F\\u20E3|9\\uFE0F\\u20E3|0\\uFE0F\\u20E3|1\\uFE0F\\u20E3|2\\uFE0F\\u20E3|3\\uFE0F\\u20E3|#\\uFE0F\\u20E3|5\\uFE0F\\u20E3|6\\uFE0F\\u20E3|7\\uFE0F\\u20E3|8\\uFE0F\\u20E3|\\*\\uFE0F\\u20E3|\\u00A9\\uFE0F|\\u00AE\\uFE0F|\\u203C\\uFE0F|\\u2049\\uFE0F|\\u2122\\uFE0F|\\u2139\\uFE0F|\\u2194\\uFE0F|\\u2195\\uFE0F|\\u2196\\uFE0F|\\u2197\\uFE0F|\\u2198\\uFE0F|\\u2199\\uFE0F|\\u21A9\\uFE0F|\\u21AA\\uFE0F|\\u231A\\uFE0F|\\u231B\\uFE0F|\\u24C2\\uFE0F|\\u25AA\\uFE0F|\\u25AB\\uFE0F|\\u25B6\\uFE0F|\\u25C0\\uFE0F|\\u25FB\\uFE0F|\\u25FC\\uFE0F|\\u25FD\\uFE0F|\\u25FE\\uFE0F|\\u2600\\uFE0F|\\u2601\\uFE0F|\\u260E\\uFE0F|\\u2611\\uFE0F|\\u2614\\uFE0F|\\u2615\\uFE0F|\\u261D\\uFE0F|\\u263A\\uFE0F|\\u2648\\uFE0F|\\u2649\\uFE0F|\\u264A\\uFE0F|\\u264B\\uFE0F|\\u264C\\uFE0F|\\u264D\\uFE0F|\\u264E\\uFE0F|\\u264F\\uFE0F|\\u2650\\uFE0F|\\u2651\\uFE0F|\\u2652\\uFE0F|\\u2653\\uFE0F|\\u2660\\uFE0F|\\u2663\\uFE0F|\\u2665\\uFE0F|\\u2666\\uFE0F|\\u2668\\uFE0F|\\u267B\\uFE0F|\\u267F\\uFE0F|\\u2693\\uFE0F|\\u26A0\\uFE0F|\\u26A1\\uFE0F|\\u26AA\\uFE0F|\\u26AB\\uFE0F|\\u26BD\\uFE0F|\\u26BE\\uFE0F|\\u26C4\\uFE0F|\\u26C5\\uFE0F|\\u26D4\\uFE0F|\\u26EA\\uFE0F|\\u26F2\\uFE0F|\\u26F3\\uFE0F|\\u26F5\\uFE0F|\\u26FA\\uFE0F|\\u26FD\\uFE0F|\\u2702\\uFE0F|\\u2708\\uFE0F|\\u2709\\uFE0F|\\u270C\\uFE0F|\\u270F\\uFE0F|\\u2712\\uFE0F|\\u2714\\uFE0F|\\u2716\\uFE0F|\\u2733\\uFE0F|\\u2734\\uFE0F|\\u2744\\uFE0F|\\u2747\\uFE0F|\\u2757\\uFE0F|\\u2764\\uFE0F|\\u27A1\\uFE0F|\\u2934\\uFE0F|\\u2935\\uFE0F|\\u2B05\\uFE0F|\\u2B06\\uFE0F|\\u2B07\\uFE0F|\\u2B1B\\uFE0F|\\u2B1C\\uFE0F|\\u2B50\\uFE0F|\\u2B55\\uFE0F|\\u3030\\uFE0F|\\u303D\\uFE0F|\\u3297\\uFE0F|\\u3299\\uFE0F|\\u271D\\uFE0F|\\u2328\\uFE0F|\\u270D\\uFE0F|\\u23ED\\uFE0F|\\u23EE\\uFE0F|\\u23EF\\uFE0F|\\u23F1\\uFE0F|\\u23F2\\uFE0F|\\u23F8\\uFE0F|\\u23F9\\uFE0F|\\u23FA\\uFE0F|\\u2602\\uFE0F|\\u2603\\uFE0F|\\u2604\\uFE0F|\\u2618\\uFE0F|\\u2620\\uFE0F|\\u2622\\uFE0F|\\u2623\\uFE0F|\\u2626\\uFE0F|\\u262A\\uFE0F|\\u262E\\uFE0F|\\u262F\\uFE0F|\\u2638\\uFE0F|\\u2639\\uFE0F|\\u2692\\uFE0F|\\u2694\\uFE0F|\\u2696\\uFE0F|\\u2697\\uFE0F|\\u2699\\uFE0F|\\u269B\\uFE0F|\\u269C\\uFE0F|\\u26B0\\uFE0F|\\u26B1\\uFE0F|\\u26C8\\uFE0F|\\u26CF\\uFE0F|\\u26D1\\uFE0F|\\u26D3\\uFE0F|\\u26E9\\uFE0F|\\u26F0\\uFE0F|\\u26F1\\uFE0F|\\u26F4\\uFE0F|\\u26F7\\uFE0F|\\u26F8\\uFE0F|\\u26F9\\uFE0F|\\u2721\\uFE0F|\\u2763\\uFE0F|\\uD83C\\uDCCF|\\uD83C\\uDD70|\\uD83C\\uDD71|\\uD83C\\uDD7E|\\uD83C\\uDD8E|\\uD83C\\uDD91|\\uD83C\\uDD92|\\uD83C\\uDD93|\\uD83C\\uDD94|\\uD83C\\uDD95|\\uD83C\\uDD96|\\uD83C\\uDD97|\\uD83C\\uDD98|\\uD83C\\uDD99|\\uD83C\\uDD9A|\\uD83C\\uDE01|\\uD83C\\uDE32|\\uD83C\\uDE33|\\uD83C\\uDE34|\\uD83C\\uDE35|\\uD83C\\uDE36|\\uD83C\\uDE38|\\uD83C\\uDE39|\\uD83C\\uDE3A|\\uD83D\\uDDB1|\\uD83C\\uDE51|\\uD83C\\uDF00|\\uD83C\\uDF01|\\uD83C\\uDF02|\\uD83C\\uDF03|\\uD83C\\uDF04|\\uD83C\\uDF05|\\uD83C\\uDF06|\\uD83C\\uDF07|\\uD83C\\uDF08|\\uD83C\\uDF09|\\uD83C\\uDF0A|\\uD83C\\uDF0B|\\uD83C\\uDF0C|\\uD83C\\uDF0F|\\uD83C\\uDF11|\\uD83C\\uDF13|\\uD83C\\uDF14|\\uD83C\\uDF15|\\uD83C\\uDF19|\\uD83C\\uDF1B|\\uD83C\\uDF1F|\\uD83C\\uDF20|\\uD83C\\uDF30|\\uD83C\\uDF31|\\uD83C\\uDF34|\\uD83C\\uDF35|\\uD83C\\uDF37|\\uD83C\\uDF38|\\uD83C\\uDF39|\\uD83C\\uDF3A|\\uD83C\\uDF3B|\\uD83C\\uDF3C|\\uD83C\\uDF3D|\\uD83C\\uDF3E|\\uD83C\\uDF3F|\\uD83C\\uDF40|\\uD83C\\uDF41|\\uD83C\\uDF42|\\uD83C\\uDF43|\\uD83C\\uDF44|\\uD83C\\uDF45|\\uD83C\\uDF46|\\uD83C\\uDF47|\\uD83C\\uDF48|\\uD83C\\uDF49|\\uD83C\\uDF4A|\\uD83C\\uDF4C|\\uD83C\\uDF4D|\\uD83C\\uDF4E|\\uD83C\\uDF4F|\\uD83C\\uDF51|\\uD83C\\uDF52|\\uD83C\\uDF53|\\uD83C\\uDF54|\\uD83C\\uDF55|\\uD83C\\uDF56|\\uD83C\\uDF57|\\uD83C\\uDF58|\\uD83C\\uDF59|\\uD83C\\uDF5A|\\uD83C\\uDF5B|\\uD83C\\uDF5C|\\uD83C\\uDF5D|\\uD83C\\uDF5E|\\uD83C\\uDF5F|\\uD83C\\uDF60|\\uD83C\\uDF61|\\uD83C\\uDF62|\\uD83C\\uDF63|\\uD83C\\uDF64|\\uD83C\\uDF65|\\uD83C\\uDF66|\\uD83C\\uDF67|\\uD83C\\uDF68|\\uD83C\\uDF69|\\uD83C\\uDF6A|\\uD83C\\uDF6B|\\uD83C\\uDF6C|\\uD83C\\uDF6D|\\uD83C\\uDF6E|\\uD83C\\uDF6F|\\uD83C\\uDF70|\\uD83C\\uDF71|\\uD83C\\uDF72|\\uD83C\\uDF73|\\uD83C\\uDF74|\\uD83C\\uDF75|\\uD83C\\uDF76|\\uD83C\\uDF77|\\uD83C\\uDF78|\\uD83C\\uDF79|\\uD83C\\uDF7A|\\uD83C\\uDF7B|\\uD83C\\uDF80|\\uD83C\\uDF81|\\uD83C\\uDF82|\\uD83C\\uDF83|\\uD83C\\uDF84|\\uD83C\\uDF85|\\uD83C\\uDF86|\\uD83C\\uDF87|\\uD83C\\uDF88|\\uD83C\\uDF89|\\uD83C\\uDF8A|\\uD83C\\uDF8B|\\uD83C\\uDF8C|\\uD83C\\uDF8D|\\uD83C\\uDF8E|\\uD83C\\uDF8F|\\uD83C\\uDF90|\\uD83C\\uDF91|\\uD83C\\uDF92|\\uD83C\\uDF93|\\uD83C\\uDFA0|\\uD83C\\uDFA1|\\uD83C\\uDFA2|\\uD83C\\uDFA3|\\uD83C\\uDFA4|\\uD83C\\uDFA5|\\uD83C\\uDFA6|\\uD83C\\uDFA7|\\uD83C\\uDFA8|\\uD83C\\uDFA9|\\uD83C\\uDFAA|\\uD83C\\uDFAB|\\uD83C\\uDFAC|\\uD83C\\uDFAD|\\uD83C\\uDFAE|\\uD83C\\uDFAF|\\uD83C\\uDFB0|\\uD83C\\uDFB1|\\uD83C\\uDFB2|\\uD83C\\uDFB3|\\uD83C\\uDFB4|\\uD83C\\uDFB5|\\uD83C\\uDFB6|\\uD83C\\uDFB7|\\uD83C\\uDFB8|\\uD83C\\uDFB9|\\uD83C\\uDFBA|\\uD83C\\uDFBB|\\uD83C\\uDFBC|\\uD83C\\uDFBD|\\uD83C\\uDFBE|\\uD83C\\uDFBF|\\uD83C\\uDFC0|\\uD83C\\uDFC1|\\uD83C\\uDFC2|\\uD83C\\uDFC3|\\uD83C\\uDFC4|\\uD83C\\uDFC6|\\uD83C\\uDFC8|\\uD83C\\uDFCA|\\uD83C\\uDFE0|\\uD83C\\uDFE1|\\uD83C\\uDFE2|\\uD83C\\uDFE3|\\uD83C\\uDFE5|\\uD83C\\uDFE6|\\uD83C\\uDFE7|\\uD83C\\uDFE8|\\uD83C\\uDFE9|\\uD83C\\uDFEA|\\uD83C\\uDFEB|\\uD83C\\uDFEC|\\uD83C\\uDFED|\\uD83C\\uDFEE|\\uD83C\\uDFEF|\\uD83C\\uDFF0|\\uD83D\\uDC0C|\\uD83D\\uDC0D|\\uD83D\\uDC0E|\\uD83D\\uDC11|\\uD83D\\uDC12|\\uD83D\\uDC14|\\uD83D\\uDC17|\\uD83D\\uDC18|\\uD83D\\uDC19|\\uD83D\\uDC1A|\\uD83D\\uDC1B|\\uD83D\\uDC1C|\\uD83D\\uDC1D|\\uD83D\\uDC1E|\\uD83D\\uDC1F|\\uD83D\\uDC20|\\uD83D\\uDC21|\\uD83D\\uDC22|\\uD83D\\uDC23|\\uD83D\\uDC24|\\uD83D\\uDC25|\\uD83D\\uDC26|\\uD83D\\uDC27|\\uD83D\\uDC28|\\uD83D\\uDC29|\\uD83D\\uDC2B|\\uD83D\\uDC2C|\\uD83D\\uDC2D|\\uD83D\\uDC2E|\\uD83D\\uDC2F|\\uD83D\\uDC30|\\uD83D\\uDC31|\\uD83D\\uDC32|\\uD83D\\uDC33|\\uD83D\\uDC34|\\uD83D\\uDC35|\\uD83D\\uDC36|\\uD83D\\uDC37|\\uD83D\\uDC38|\\uD83D\\uDC39|\\uD83D\\uDC3A|\\uD83D\\uDC3B|\\uD83D\\uDC3C|\\uD83D\\uDC3D|\\uD83D\\uDC3E|\\uD83D\\uDC40|\\uD83D\\uDC42|\\uD83D\\uDC43|\\uD83D\\uDC44|\\uD83D\\uDC45|\\uD83D\\uDC46|\\uD83D\\uDC47|\\uD83D\\uDC48|\\uD83D\\uDC49|\\uD83D\\uDC4A|\\uD83D\\uDC4B|\\uD83D\\uDC4C|\\uD83D\\uDC4D|\\uD83D\\uDC4E|\\uD83D\\uDC4F|\\uD83D\\uDC50|\\uD83D\\uDC51|\\uD83D\\uDC52|\\uD83D\\uDC53|\\uD83D\\uDC54|\\uD83D\\uDC55|\\uD83D\\uDC56|\\uD83D\\uDC57|\\uD83D\\uDC58|\\uD83D\\uDC59|\\uD83D\\uDC5A|\\uD83D\\uDC5B|\\uD83D\\uDC5C|\\uD83D\\uDC5D|\\uD83D\\uDC5E|\\uD83D\\uDC5F|\\uD83D\\uDC60|\\uD83D\\uDC61|\\uD83D\\uDC62|\\uD83D\\uDC63|\\uD83D\\uDC64|\\uD83D\\uDC66|\\uD83D\\uDC67|\\uD83D\\uDC68|\\uD83D\\uDC69|\\uD83D\\uDC6A|\\uD83D\\uDC6B|\\uD83D\\uDC6E|\\uD83D\\uDC6F|\\uD83D\\uDC70|\\uD83D\\uDC71|\\uD83D\\uDC72|\\uD83D\\uDC73|\\uD83D\\uDC74|\\uD83D\\uDC75|\\uD83D\\uDC76|\\uD83D\\uDC77|\\uD83D\\uDC78|\\uD83D\\uDC79|\\uD83D\\uDC7A|\\uD83D\\uDC7B|\\uD83D\\uDC7C|\\uD83D\\uDC7D|\\uD83D\\uDC7E|\\uD83D\\uDC7F|\\uD83D\\uDC80|\\uD83D\\uDCC7|\\uD83D\\uDC81|\\uD83D\\uDC82|\\uD83D\\uDC83|\\uD83D\\uDC84|\\uD83D\\uDC85|\\uD83D\\uDCD2|\\uD83D\\uDC86|\\uD83D\\uDCD3|\\uD83D\\uDC87|\\uD83D\\uDCD4|\\uD83D\\uDC88|\\uD83D\\uDCD5|\\uD83D\\uDC89|\\uD83D\\uDCD6|\\uD83D\\uDC8A|\\uD83D\\uDCD7|\\uD83D\\uDC8B|\\uD83D\\uDCD8|\\uD83D\\uDC8C|\\uD83D\\uDCD9|\\uD83D\\uDC8D|\\uD83D\\uDCDA|\\uD83D\\uDC8E|\\uD83D\\uDCDB|\\uD83D\\uDC8F|\\uD83D\\uDCDC|\\uD83D\\uDC90|\\uD83D\\uDCDD|\\uD83D\\uDC91|\\uD83D\\uDCDE|\\uD83D\\uDC92|\\uD83D\\uDCDF|\\uD83D\\uDCE0|\\uD83D\\uDC93|\\uD83D\\uDCE1|\\uD83D\\uDCE2|\\uD83D\\uDC94|\\uD83D\\uDCE3|\\uD83D\\uDCE4|\\uD83D\\uDC95|\\uD83D\\uDCE5|\\uD83D\\uDCE6|\\uD83D\\uDC96|\\uD83D\\uDCE7|\\uD83D\\uDCE8|\\uD83D\\uDC97|\\uD83D\\uDCE9|\\uD83D\\uDCEA|\\uD83D\\uDC98|\\uD83D\\uDCEB|\\uD83D\\uDCEE|\\uD83D\\uDC99|\\uD83D\\uDCF0|\\uD83D\\uDCF1|\\uD83D\\uDC9A|\\uD83D\\uDCF2|\\uD83D\\uDCF3|\\uD83D\\uDC9B|\\uD83D\\uDCF4|\\uD83D\\uDCF6|\\uD83D\\uDC9C|\\uD83D\\uDCF7|\\uD83D\\uDCF9|\\uD83D\\uDC9D|\\uD83D\\uDCFA|\\uD83D\\uDCFB|\\uD83D\\uDC9E|\\uD83D\\uDCFC|\\uD83D\\uDD03|\\uD83D\\uDC9F|\\uD83D\\uDD0A|\\uD83D\\uDD0B|\\uD83D\\uDCA0|\\uD83D\\uDD0C|\\uD83D\\uDD0D|\\uD83D\\uDCA1|\\uD83D\\uDD0E|\\uD83D\\uDD0F|\\uD83D\\uDCA2|\\uD83D\\uDD10|\\uD83D\\uDD11|\\uD83D\\uDCA3|\\uD83D\\uDD12|\\uD83D\\uDD13|\\uD83D\\uDCA4|\\uD83D\\uDD14|\\uD83D\\uDD16|\\uD83D\\uDCA5|\\uD83D\\uDD17|\\uD83D\\uDD18|\\uD83D\\uDCA6|\\uD83D\\uDD19|\\uD83D\\uDD1A|\\uD83D\\uDCA7|\\uD83D\\uDD1B|\\uD83D\\uDD1C|\\uD83D\\uDCA8|\\uD83D\\uDD1D|\\uD83D\\uDD1E|\\uD83D\\uDCA9|\\uD83D\\uDD1F|\\uD83D\\uDCAA|\\uD83D\\uDD20|\\uD83D\\uDD21|\\uD83D\\uDCAB|\\uD83D\\uDD22|\\uD83D\\uDD23|\\uD83D\\uDCAC|\\uD83D\\uDD24|\\uD83D\\uDD25|\\uD83D\\uDCAE|\\uD83D\\uDD26|\\uD83D\\uDD27|\\uD83D\\uDCAF|\\uD83D\\uDD28|\\uD83D\\uDD29|\\uD83D\\uDCB0|\\uD83D\\uDD2A|\\uD83D\\uDD2B|\\uD83D\\uDCB1|\\uD83D\\uDD2E|\\uD83D\\uDCB2|\\uD83D\\uDD2F|\\uD83D\\uDCB3|\\uD83D\\uDD30|\\uD83D\\uDD31|\\uD83D\\uDCB4|\\uD83D\\uDD32|\\uD83D\\uDD33|\\uD83D\\uDCB5|\\uD83D\\uDD34|\\uD83D\\uDD35|\\uD83D\\uDCB8|\\uD83D\\uDD36|\\uD83D\\uDD37|\\uD83D\\uDCB9|\\uD83D\\uDD38|\\uD83D\\uDD39|\\uD83D\\uDCBA|\\uD83D\\uDD3A|\\uD83D\\uDD3B|\\uD83D\\uDCBB|\\uD83D\\uDD3C|\\uD83D\\uDCBC|\\uD83D\\uDD3D|\\uD83D\\uDD50|\\uD83D\\uDCBD|\\uD83D\\uDD51|\\uD83D\\uDCBE|\\uD83D\\uDD52|\\uD83D\\uDCBF|\\uD83D\\uDD53|\\uD83D\\uDCC0|\\uD83D\\uDD54|\\uD83D\\uDD55|\\uD83D\\uDCC1|\\uD83D\\uDD56|\\uD83D\\uDD57|\\uD83D\\uDCC2|\\uD83D\\uDD58|\\uD83D\\uDD59|\\uD83D\\uDCC3|\\uD83D\\uDD5A|\\uD83D\\uDD5B|\\uD83D\\uDCC4|\\uD83D\\uDDFB|\\uD83D\\uDDFC|\\uD83D\\uDCC5|\\uD83D\\uDDFD|\\uD83D\\uDDFE|\\uD83D\\uDCC6|\\uD83D\\uDDFF|\\uD83D\\uDE01|\\uD83D\\uDE02|\\uD83D\\uDE03|\\uD83D\\uDCC8|\\uD83D\\uDE04|\\uD83D\\uDE05|\\uD83D\\uDCC9|\\uD83D\\uDE06|\\uD83D\\uDE09|\\uD83D\\uDCCA|\\uD83D\\uDE0A|\\uD83D\\uDE0B|\\uD83D\\uDCCB|\\uD83D\\uDE0C|\\uD83D\\uDE0D|\\uD83D\\uDCCC|\\uD83D\\uDE0F|\\uD83D\\uDE12|\\uD83D\\uDCCD|\\uD83D\\uDE13|\\uD83D\\uDE14|\\uD83D\\uDCCE|\\uD83D\\uDE16|\\uD83D\\uDE18|\\uD83D\\uDCCF|\\uD83D\\uDE1A|\\uD83D\\uDE1C|\\uD83D\\uDCD0|\\uD83D\\uDE1D|\\uD83D\\uDE1E|\\uD83D\\uDCD1|\\uD83D\\uDE20|\\uD83D\\uDE21|\\uD83D\\uDE22|\\uD83D\\uDE23|\\uD83D\\uDE24|\\uD83D\\uDE25|\\uD83D\\uDE28|\\uD83D\\uDE29|\\uD83D\\uDE2A|\\uD83D\\uDE2B|\\uD83D\\uDE2D|\\uD83D\\uDE30|\\uD83D\\uDE31|\\uD83D\\uDE32|\\uD83D\\uDE33|\\uD83D\\uDE35|\\uD83D\\uDE37|\\uD83D\\uDE38|\\uD83D\\uDE39|\\uD83D\\uDE3A|\\uD83D\\uDE3B|\\uD83D\\uDE3C|\\uD83D\\uDE3D|\\uD83D\\uDE3E|\\uD83D\\uDE3F|\\uD83D\\uDE40|\\uD83D\\uDE45|\\uD83D\\uDE46|\\uD83D\\uDE47|\\uD83D\\uDE48|\\uD83D\\uDE49|\\uD83D\\uDE4A|\\uD83D\\uDE4B|\\uD83D\\uDE4C|\\uD83D\\uDE4D|\\uD83D\\uDE4E|\\uD83D\\uDE4F|\\uD83D\\uDE80|\\uD83D\\uDE83|\\uD83D\\uDE84|\\uD83D\\uDE85|\\uD83D\\uDE87|\\uD83D\\uDE89|\\uD83D\\uDE8C|\\uD83D\\uDE8F|\\uD83D\\uDE91|\\uD83D\\uDE92|\\uD83D\\uDE93|\\uD83D\\uDE95|\\uD83D\\uDE97|\\uD83D\\uDE99|\\uD83D\\uDE9A|\\uD83D\\uDEA2|\\uD83D\\uDEA4|\\uD83D\\uDEA5|\\uD83D\\uDEA7|\\uD83D\\uDEA8|\\uD83D\\uDEA9|\\uD83D\\uDEAA|\\uD83D\\uDEAB|\\uD83D\\uDEAC|\\uD83D\\uDEAD|\\uD83D\\uDEB2|\\uD83D\\uDEB6|\\uD83D\\uDEB9|\\uD83D\\uDEBA|\\uD83D\\uDEBB|\\uD83D\\uDEBC|\\uD83D\\uDEBD|\\uD83D\\uDEBE|\\uD83D\\uDEC0|\\uD83E\\uDD18|\\uD83D\\uDE00|\\uD83D\\uDE07|\\uD83D\\uDE08|\\uD83D\\uDE0E|\\uD83D\\uDE10|\\uD83D\\uDE11|\\uD83D\\uDE15|\\uD83D\\uDE17|\\uD83D\\uDE19|\\uD83D\\uDE1B|\\uD83D\\uDE1F|\\uD83D\\uDE26|\\uD83D\\uDE27|\\uD83D\\uDE2C|\\uD83D\\uDE2E|\\uD83D\\uDE2F|\\uD83D\\uDE34|\\uD83D\\uDE36|\\uD83D\\uDE81|\\uD83D\\uDE82|\\uD83D\\uDE86|\\uD83D\\uDE88|\\uD83D\\uDE8A|\\uD83D\\uDE8D|\\uD83D\\uDE8E|\\uD83D\\uDE90|\\uD83D\\uDE94|\\uD83D\\uDE96|\\uD83D\\uDE98|\\uD83D\\uDE9B|\\uD83D\\uDE9C|\\uD83D\\uDE9D|\\uD83D\\uDE9E|\\uD83D\\uDE9F|\\uD83D\\uDEA0|\\uD83D\\uDEA1|\\uD83D\\uDEA3|\\uD83D\\uDEA6|\\uD83D\\uDEAE|\\uD83D\\uDEAF|\\uD83D\\uDEB0|\\uD83D\\uDEB1|\\uD83D\\uDEB3|\\uD83D\\uDEB4|\\uD83D\\uDEB5|\\uD83D\\uDEB7|\\uD83D\\uDEB8|\\uD83D\\uDEBF|\\uD83D\\uDEC1|\\uD83D\\uDEC2|\\uD83D\\uDEC3|\\uD83D\\uDEC4|\\uD83D\\uDEC5|\\uD83C\\uDF0D|\\uD83C\\uDF0E|\\uD83C\\uDF10|\\uD83C\\uDF12|\\uD83C\\uDF16|\\uD83C\\uDF17|\\uD83C\\uDF18|\\uD83C\\uDF1A|\\uD83C\\uDF1C|\\uD83C\\uDF1D|\\uD83C\\uDF1E|\\uD83C\\uDF32|\\uD83C\\uDF33|\\uD83C\\uDF4B|\\uD83C\\uDF50|\\uD83C\\uDF7C|\\uD83C\\uDFC7|\\uD83C\\uDFC9|\\uD83C\\uDFE4|\\uD83D\\uDC00|\\uD83D\\uDC01|\\uD83D\\uDC02|\\uD83D\\uDC03|\\uD83D\\uDC04|\\uD83D\\uDC05|\\uD83D\\uDC06|\\uD83D\\uDC07|\\uD83D\\uDC08|\\uD83D\\uDC09|\\uD83D\\uDC0A|\\uD83D\\uDC0B|\\uD83D\\uDC0F|\\uD83D\\uDC10|\\uD83D\\uDC13|\\uD83D\\uDC15|\\uD83D\\uDC16|\\uD83D\\uDC2A|\\uD83D\\uDC65|\\uD83D\\uDC6C|\\uD83D\\uDC6D|\\uD83D\\uDCAD|\\uD83D\\uDCB6|\\uD83D\\uDCB7|\\uD83D\\uDCEC|\\uD83D\\uDCED|\\uD83D\\uDCEF|\\uD83D\\uDCF5|\\uD83D\\uDD00|\\uD83D\\uDD01|\\uD83D\\uDD02|\\uD83D\\uDD04|\\uD83D\\uDD05|\\uD83D\\uDD06|\\uD83D\\uDD07|\\uD83D\\uDD09|\\uD83D\\uDD15|\\uD83D\\uDD2C|\\uD83D\\uDD2D|\\uD83D\\uDD5C|\\uD83D\\uDD5D|\\uD83D\\uDD5E|\\uD83D\\uDD5F|\\uD83D\\uDD60|\\uD83D\\uDD61|\\uD83D\\uDD62|\\uD83D\\uDD63|\\uD83D\\uDD64|\\uD83D\\uDD65|\\uD83D\\uDD66|\\uD83D\\uDD67|\\uD83D\\uDD08|\\uD83D\\uDE8B|\\uD83C\\uDFC5|\\uD83C\\uDFF4|\\uD83D\\uDCF8|\\uD83D\\uDECC|\\uD83D\\uDD95|\\uD83D\\uDD96|\\uD83D\\uDE41|\\uD83D\\uDE42|\\uD83D\\uDEEB|\\uD83D\\uDEEC|\\uD83C\\uDFFB|\\uD83C\\uDFFC|\\uD83C\\uDFFD|\\uD83C\\uDFFE|\\uD83C\\uDFFF|\\uD83D\\uDE43|\\uD83E\\uDD11|\\uD83E\\uDD13|\\uD83E\\uDD17|\\uD83D\\uDE44|\\uD83E\\uDD14|\\uD83E\\uDD10|\\uD83E\\uDD12|\\uD83E\\uDD15|\\uD83E\\uDD16|\\uD83E\\uDD81|\\uD83E\\uDD84|\\uD83E\\uDD82|\\uD83E\\uDD80|\\uD83E\\uDD83|\\uD83E\\uDDC0|\\uD83C\\uDF2D|\\uD83C\\uDF2E|\\uD83C\\uDF2F|\\uD83C\\uDF7F|\\uD83C\\uDF7E|\\uD83C\\uDFF9|\\uD83C\\uDFFA|\\uD83D\\uDED0|\\uD83D\\uDD4B|\\uD83D\\uDD4C|\\uD83D\\uDD4D|\\uD83D\\uDD4E|\\uD83D\\uDCFF|\\uD83C\\uDFCF|\\uD83C\\uDFD0|\\uD83C\\uDFD1|\\uD83C\\uDFD2|\\uD83C\\uDFD3|\\uD83C\\uDFF8|\\uD83C\\uDF26|\\uD83C\\uDF25|\\uD83C\\uDF24|\\uD83D\\uDEF3|\\uD83D\\uDEE9|\\uD83D\\uDEE5|\\uD83D\\uDEE4|\\uD83D\\uDEE3|\\uD83D\\uDECF|\\uD83D\\uDECE|\\uD83D\\uDECD|\\uD83D\\uDECB|\\uD83C\\uDFDF|\\uD83C\\uDFDE|\\uD83C\\uDFDD|\\uD83C\\uDFDC|\\uD83C\\uDFDB|\\uD83C\\uDFDA|\\uD83C\\uDFD9|\\uD83C\\uDFD8|\\uD83C\\uDFD7|\\uD83C\\uDFD6|\\uD83C\\uDFD5|\\uD83C\\uDFD4|\\uD83D\\uDD90|\\uD83D\\uDD75|\\uD83D\\uDD74|\\uD83D\\uDC41|\\uD83C\\uDF7D|\\uD83D\\uDEF0|\\uD83D\\uDEE2|\\uD83D\\uDEE1|\\uD83D\\uDEE0|\\uD83D\\uDDFA|\\uD83D\\uDDF3|\\uD83D\\uDDEF|\\uD83D\\uDDE3|\\uD83D\\uDDE1|\\uD83D\\uDDDE|\\uD83D\\uDDDD|\\uD83D\\uDDDC|\\uD83D\\uDDD3|\\uD83D\\uDDD2|\\uD83D\\uDDD1|\\uD83D\\uDDC4|\\uD83D\\uDDC3|\\uD83D\\uDDC2|\\uD83D\\uDDBC|\\uD83D\\uDDB2|\\uD83D\\uDDA8|\\uD83D\\uDDA5|\\uD83D\\uDD8D|\\uD83D\\uDD8C|\\uD83D\\uDD8B|\\uD83D\\uDD8A|\\uD83D\\uDD87|\\uD83D\\uDD79|\\uD83D\\uDD76|\\uD83D\\uDD73|\\uD83D\\uDD70|\\uD83D\\uDD6F|\\uD83D\\uDD4A|\\uD83D\\uDD49|\\uD83D\\uDCFD|\\uD83C\\uDFF7|\\uD83C\\uDFF5|\\uD83C\\uDFF3|\\uD83C\\uDF9B|\\uD83C\\uDF9A|\\uD83C\\uDF99|\\uD83C\\uDF21|\\uD83D\\uDD78|\\uD83D\\uDD77|\\uD83D\\uDC3F|\\uD83C\\uDF2C|\\uD83C\\uDF2B|\\uD83C\\uDF2A|\\uD83C\\uDF29|\\uD83C\\uDF28|\\uD83C\\uDF27|\\uD83C\\uDF36|\\uD83C\\uDF97|\\uD83C\\uDF96|\\uD83C\\uDFCE|\\uD83C\\uDFCD|\\uD83C\\uDFCC|\\uD83C\\uDFCB|\\uD83C\\uDF9F|\\uD83C\\uDF9E|\\uD83C\\uDE37|\\uD83C\\uDE2F|\\uD83C\\uDE1A|\\uD83C\\uDE02|\\uD83C\\uDD7F|\\uD83C\\uDC04|\\uD83C\\uDE50|\\u2714|\\u2733|\\u2734|\\u2744|\\u2747|\\u2757|\\u2764|\\u27A1|\\u2934|\\u2935|\\u2B05|\\u2B06|\\u2B07|\\u2B1B|\\u2B1C|\\u2B50|\\u2B55|\\u3030|\\u303D|\\u3297|\\u3299|\\u2712|\\u270F|\\u270C|\\u2709|\\u2708|\\u2702|\\u26FD|\\u26FA|\\u26F5|\\u26F3|\\u26F2|\\u26EA|\\u26D4|\\u26C5|\\u26C4|\\u26BE|\\u26BD|\\u26AB|\\u26AA|\\u26A1|\\u26A0|\\u2693|\\u267F|\\u267B|\\u2668|\\u2666|\\u2665|\\u2663|\\u2660|\\u2653|\\u2652|\\u2651|\\u271D|\\u2650|\\u264F|\\u264E|\\u264D|\\u264C|\\u264B|\\u264A|\\u2649|\\u2648|\\u263A|\\u261D|\\u2615|\\u2614|\\u2611|\\u2328|\\u260E|\\u2601|\\u2600|\\u25FE|\\u25FD|\\u25FC|\\u25FB|\\u25C0|\\u25B6|\\u25AB|\\u25AA|\\u24C2|\\u2716|\\u231A|\\u21AA|\\u21A9|\\u2199|\\u2198|\\u2197|\\u2196|\\u2195|\\u2194|\\u2139|\\u2122|\\u270D|\\u2049|\\u203C|\\u00AE|\\u00A9|\\u27BF|\\u27B0|\\u2797|\\u2796|\\u2795|\\u2755|\\u2754|\\u2753|\\u274E|\\u274C|\\u2728|\\u270B|\\u270A|\\u2705|\\u26CE|\\u23F3|\\u23F0|\\u23EC|\\u23ED|\\u23EE|\\u23EF|\\u23F1|\\u23F2|\\u23F8|\\u23F9|\\u23FA|\\u2602|\\u2603|\\u2604|\\u2618|\\u2620|\\u2622|\\u2623|\\u2626|\\u262A|\\u262E|\\u262F|\\u2638|\\u2639|\\u2692|\\u2694|\\u2696|\\u2697|\\u2699|\\u269B|\\u269C|\\u26B0|\\u26B1|\\u26C8|\\u26CF|\\u26D1|\\u26D3|\\u26E9|\\u26F0|\\u26F1|\\u26F4|\\u26F7|\\u26F8|\\u26F9|\\u2721|\\u2763|\\u23EB|\\u23EA|\\u23E9|\\u231B)";
    b.jsEscapeMap = {
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69": "1f469-2764-1f48b-1f469",
        "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68": "1f468-2764-1f48b-1f468",
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66": "1f468-1f468-1f466-1f466",
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66": "1f468-1f468-1f467-1f466",
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67": "1f468-1f468-1f467-1f467",
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66": "1f468-1f469-1f466-1f466",
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66": "1f468-1f469-1f467-1f466",
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67": "1f468-1f469-1f467-1f467",
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66": "1f469-1f469-1f466-1f466",
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66": "1f469-1f469-1f467-1f466",
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67": "1f469-1f469-1f467-1f467",
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69": "1f469-2764-1f469",
        "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68": "1f468-2764-1f468",
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66": "1f468-1f468-1f466",
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67": "1f468-1f468-1f467",
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67": "1f468-1f469-1f467",
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66": "1f469-1f469-1f466",
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67": "1f469-1f469-1f467",
        "\ud83d\udc41\u200d\ud83d\udde8": "1f441-1f5e8",
        "#\ufe0f\u20e3": "0023-20e3",
        "0\ufe0f\u20e3": "0030-20e3",
        "1\ufe0f\u20e3": "0031-20e3",
        "2\ufe0f\u20e3": "0032-20e3",
        "3\ufe0f\u20e3": "0033-20e3",
        "4\ufe0f\u20e3": "0034-20e3",
        "5\ufe0f\u20e3": "0035-20e3",
        "6\ufe0f\u20e3": "0036-20e3",
        "7\ufe0f\u20e3": "0037-20e3",
        "8\ufe0f\u20e3": "0038-20e3",
        "9\ufe0f\u20e3": "0039-20e3",
        "*\ufe0f\u20e3": "002a-20e3",
        "\ud83e\udd18\ud83c\udfff": "1f918-1f3ff",
        "\ud83e\udd18\ud83c\udffe": "1f918-1f3fe",
        "\ud83e\udd18\ud83c\udffd": "1f918-1f3fd",
        "\ud83e\udd18\ud83c\udffc": "1f918-1f3fc",
        "\ud83e\udd18\ud83c\udffb": "1f918-1f3fb",
        "\ud83d\udec0\ud83c\udfff": "1f6c0-1f3ff",
        "\ud83d\udec0\ud83c\udffe": "1f6c0-1f3fe",
        "\ud83d\udec0\ud83c\udffd": "1f6c0-1f3fd",
        "\ud83d\udec0\ud83c\udffc": "1f6c0-1f3fc",
        "\ud83d\udec0\ud83c\udffb": "1f6c0-1f3fb",
        "\ud83d\udeb6\ud83c\udfff": "1f6b6-1f3ff",
        "\ud83d\udeb6\ud83c\udffe": "1f6b6-1f3fe",
        "\ud83d\udeb6\ud83c\udffd": "1f6b6-1f3fd",
        "\ud83d\udeb6\ud83c\udffc": "1f6b6-1f3fc",
        "\ud83d\udeb6\ud83c\udffb": "1f6b6-1f3fb",
        "\ud83d\udeb5\ud83c\udfff": "1f6b5-1f3ff",
        "\ud83d\udeb5\ud83c\udffe": "1f6b5-1f3fe",
        "\ud83d\udeb5\ud83c\udffd": "1f6b5-1f3fd",
        "\ud83d\udeb5\ud83c\udffc": "1f6b5-1f3fc",
        "\ud83d\udeb5\ud83c\udffb": "1f6b5-1f3fb",
        "\ud83d\udeb4\ud83c\udfff": "1f6b4-1f3ff",
        "\ud83d\udeb4\ud83c\udffe": "1f6b4-1f3fe",
        "\ud83d\udeb4\ud83c\udffd": "1f6b4-1f3fd",
        "\ud83d\udeb4\ud83c\udffc": "1f6b4-1f3fc",
        "\ud83d\udeb4\ud83c\udffb": "1f6b4-1f3fb",
        "\ud83d\udea3\ud83c\udfff": "1f6a3-1f3ff",
        "\ud83d\udea3\ud83c\udffe": "1f6a3-1f3fe",
        "\ud83d\udea3\ud83c\udffd": "1f6a3-1f3fd",
        "\ud83d\udea3\ud83c\udffc": "1f6a3-1f3fc",
        "\ud83d\udea3\ud83c\udffb": "1f6a3-1f3fb",
        "\ud83d\ude4f\ud83c\udfff": "1f64f-1f3ff",
        "\ud83d\ude4f\ud83c\udffe": "1f64f-1f3fe",
        "\ud83d\ude4f\ud83c\udffd": "1f64f-1f3fd",
        "\ud83d\ude4f\ud83c\udffc": "1f64f-1f3fc",
        "\ud83d\ude4f\ud83c\udffb": "1f64f-1f3fb",
        "\ud83d\ude4e\ud83c\udfff": "1f64e-1f3ff",
        "\ud83d\ude4e\ud83c\udffe": "1f64e-1f3fe",
        "\ud83d\ude4e\ud83c\udffd": "1f64e-1f3fd",
        "\ud83d\ude4e\ud83c\udffc": "1f64e-1f3fc",
        "\ud83d\ude4e\ud83c\udffb": "1f64e-1f3fb",
        "\ud83d\ude4d\ud83c\udfff": "1f64d-1f3ff",
        "\ud83d\ude4d\ud83c\udffe": "1f64d-1f3fe",
        "\ud83d\ude4d\ud83c\udffd": "1f64d-1f3fd",
        "\ud83d\ude4d\ud83c\udffc": "1f64d-1f3fc",
        "\ud83d\ude4d\ud83c\udffb": "1f64d-1f3fb",
        "\ud83d\ude4c\ud83c\udfff": "1f64c-1f3ff",
        "\ud83d\ude4c\ud83c\udffe": "1f64c-1f3fe",
        "\ud83d\ude4c\ud83c\udffd": "1f64c-1f3fd",
        "\ud83d\ude4c\ud83c\udffc": "1f64c-1f3fc",
        "\ud83d\ude4c\ud83c\udffb": "1f64c-1f3fb",
        "\ud83d\ude4b\ud83c\udfff": "1f64b-1f3ff",
        "\ud83d\ude4b\ud83c\udffe": "1f64b-1f3fe",
        "\ud83d\ude4b\ud83c\udffd": "1f64b-1f3fd",
        "\ud83d\ude4b\ud83c\udffc": "1f64b-1f3fc",
        "\ud83d\ude4b\ud83c\udffb": "1f64b-1f3fb",
        "\ud83d\ude47\ud83c\udfff": "1f647-1f3ff",
        "\ud83d\ude47\ud83c\udffe": "1f647-1f3fe",
        "\ud83d\ude47\ud83c\udffd": "1f647-1f3fd",
        "\ud83d\ude47\ud83c\udffc": "1f647-1f3fc",
        "\ud83d\ude47\ud83c\udffb": "1f647-1f3fb",
        "\ud83d\ude46\ud83c\udfff": "1f646-1f3ff",
        "\ud83d\ude46\ud83c\udffe": "1f646-1f3fe",
        "\ud83d\ude46\ud83c\udffd": "1f646-1f3fd",
        "\ud83d\ude46\ud83c\udffc": "1f646-1f3fc",
        "\ud83d\ude46\ud83c\udffb": "1f646-1f3fb",
        "\ud83d\ude45\ud83c\udfff": "1f645-1f3ff",
        "\ud83d\ude45\ud83c\udffe": "1f645-1f3fe",
        "\ud83d\ude45\ud83c\udffd": "1f645-1f3fd",
        "\ud83d\ude45\ud83c\udffc": "1f645-1f3fc",
        "\ud83d\ude45\ud83c\udffb": "1f645-1f3fb",
        "\ud83d\udd96\ud83c\udfff": "1f596-1f3ff",
        "\ud83d\udd96\ud83c\udffe": "1f596-1f3fe",
        "\ud83d\udd96\ud83c\udffd": "1f596-1f3fd",
        "\ud83d\udd96\ud83c\udffc": "1f596-1f3fc",
        "\ud83d\udd96\ud83c\udffb": "1f596-1f3fb",
        "\ud83d\udd95\ud83c\udfff": "1f595-1f3ff",
        "\ud83d\udd95\ud83c\udffe": "1f595-1f3fe",
        "\ud83d\udd95\ud83c\udffd": "1f595-1f3fd",
        "\ud83d\udd95\ud83c\udffc": "1f595-1f3fc",
        "\ud83d\udd95\ud83c\udffb": "1f595-1f3fb",
        "\ud83d\udd90\ud83c\udfff": "1f590-1f3ff",
        "\ud83d\udd90\ud83c\udffe": "1f590-1f3fe",
        "\ud83d\udd90\ud83c\udffd": "1f590-1f3fd",
        "\ud83d\udd90\ud83c\udffc": "1f590-1f3fc",
        "\ud83d\udd90\ud83c\udffb": "1f590-1f3fb",
        "\ud83d\udd75\ud83c\udfff": "1f575-1f3ff",
        "\ud83d\udd75\ud83c\udffe": "1f575-1f3fe",
        "\ud83d\udd75\ud83c\udffd": "1f575-1f3fd",
        "\ud83d\udd75\ud83c\udffc": "1f575-1f3fc",
        "\ud83d\udd75\ud83c\udffb": "1f575-1f3fb",
        "\ud83d\udcaa\ud83c\udfff": "1f4aa-1f3ff",
        "\ud83d\udcaa\ud83c\udffe": "1f4aa-1f3fe",
        "\ud83d\udcaa\ud83c\udffd": "1f4aa-1f3fd",
        "\ud83d\udcaa\ud83c\udffc": "1f4aa-1f3fc",
        "\ud83d\udcaa\ud83c\udffb": "1f4aa-1f3fb",
        "\ud83d\udc87\ud83c\udfff": "1f487-1f3ff",
        "\ud83d\udc87\ud83c\udffe": "1f487-1f3fe",
        "\ud83d\udc87\ud83c\udffd": "1f487-1f3fd",
        "\ud83d\udc87\ud83c\udffc": "1f487-1f3fc",
        "\ud83d\udc87\ud83c\udffb": "1f487-1f3fb",
        "\ud83d\udc86\ud83c\udfff": "1f486-1f3ff",
        "\ud83d\udc86\ud83c\udffe": "1f486-1f3fe",
        "\ud83d\udc86\ud83c\udffd": "1f486-1f3fd",
        "\ud83d\udc86\ud83c\udffc": "1f486-1f3fc",
        "\ud83d\udc86\ud83c\udffb": "1f486-1f3fb",
        "\ud83d\udc85\ud83c\udfff": "1f485-1f3ff",
        "\ud83d\udc85\ud83c\udffe": "1f485-1f3fe",
        "\ud83d\udc85\ud83c\udffd": "1f485-1f3fd",
        "\ud83d\udc85\ud83c\udffc": "1f485-1f3fc",
        "\ud83d\udc85\ud83c\udffb": "1f485-1f3fb",
        "\ud83d\udc83\ud83c\udfff": "1f483-1f3ff",
        "\ud83d\udc83\ud83c\udffe": "1f483-1f3fe",
        "\ud83d\udc83\ud83c\udffd": "1f483-1f3fd",
        "\ud83d\udc83\ud83c\udffc": "1f483-1f3fc",
        "\ud83d\udc83\ud83c\udffb": "1f483-1f3fb",
        "\ud83d\udc82\ud83c\udfff": "1f482-1f3ff",
        "\ud83d\udc82\ud83c\udffe": "1f482-1f3fe",
        "\ud83d\udc82\ud83c\udffd": "1f482-1f3fd",
        "\ud83d\udc82\ud83c\udffc": "1f482-1f3fc",
        "\ud83d\udc82\ud83c\udffb": "1f482-1f3fb",
        "\ud83d\udc81\ud83c\udfff": "1f481-1f3ff",
        "\ud83d\udc81\ud83c\udffe": "1f481-1f3fe",
        "\ud83d\udc81\ud83c\udffd": "1f481-1f3fd",
        "\ud83d\udc81\ud83c\udffc": "1f481-1f3fc",
        "\ud83d\udc81\ud83c\udffb": "1f481-1f3fb",
        "\ud83d\udc7c\ud83c\udfff": "1f47c-1f3ff",
        "\ud83d\udc7c\ud83c\udffe": "1f47c-1f3fe",
        "\ud83d\udc7c\ud83c\udffd": "1f47c-1f3fd",
        "\ud83d\udc7c\ud83c\udffc": "1f47c-1f3fc",
        "\ud83d\udc7c\ud83c\udffb": "1f47c-1f3fb",
        "\ud83d\udc78\ud83c\udfff": "1f478-1f3ff",
        "\ud83d\udc78\ud83c\udffe": "1f478-1f3fe",
        "\ud83d\udc78\ud83c\udffd": "1f478-1f3fd",
        "\ud83d\udc78\ud83c\udffc": "1f478-1f3fc",
        "\ud83d\udc78\ud83c\udffb": "1f478-1f3fb",
        "\ud83d\udc77\ud83c\udfff": "1f477-1f3ff",
        "\ud83d\udc77\ud83c\udffe": "1f477-1f3fe",
        "\ud83d\udc77\ud83c\udffd": "1f477-1f3fd",
        "\ud83d\udc77\ud83c\udffc": "1f477-1f3fc",
        "\ud83d\udc77\ud83c\udffb": "1f477-1f3fb",
        "\ud83d\udc76\ud83c\udfff": "1f476-1f3ff",
        "\ud83d\udc76\ud83c\udffe": "1f476-1f3fe",
        "\ud83d\udc76\ud83c\udffd": "1f476-1f3fd",
        "\ud83d\udc76\ud83c\udffc": "1f476-1f3fc",
        "\ud83d\udc76\ud83c\udffb": "1f476-1f3fb",
        "\ud83d\udc75\ud83c\udfff": "1f475-1f3ff",
        "\ud83d\udc75\ud83c\udffe": "1f475-1f3fe",
        "\ud83d\udc75\ud83c\udffd": "1f475-1f3fd",
        "\ud83d\udc75\ud83c\udffc": "1f475-1f3fc",
        "\ud83d\udc75\ud83c\udffb": "1f475-1f3fb",
        "\ud83d\udc74\ud83c\udfff": "1f474-1f3ff",
        "\ud83d\udc74\ud83c\udffe": "1f474-1f3fe",
        "\ud83d\udc74\ud83c\udffd": "1f474-1f3fd",
        "\ud83d\udc74\ud83c\udffc": "1f474-1f3fc",
        "\ud83d\udc74\ud83c\udffb": "1f474-1f3fb",
        "\ud83d\udc73\ud83c\udfff": "1f473-1f3ff",
        "\ud83d\udc73\ud83c\udffe": "1f473-1f3fe",
        "\ud83d\udc73\ud83c\udffd": "1f473-1f3fd",
        "\ud83d\udc73\ud83c\udffc": "1f473-1f3fc",
        "\ud83d\udc73\ud83c\udffb": "1f473-1f3fb",
        "\ud83d\udc72\ud83c\udfff": "1f472-1f3ff",
        "\ud83d\udc72\ud83c\udffe": "1f472-1f3fe",
        "\ud83d\udc72\ud83c\udffd": "1f472-1f3fd",
        "\ud83d\udc72\ud83c\udffc": "1f472-1f3fc",
        "\ud83d\udc72\ud83c\udffb": "1f472-1f3fb",
        "\ud83d\udc71\ud83c\udfff": "1f471-1f3ff",
        "\ud83d\udc71\ud83c\udffe": "1f471-1f3fe",
        "\ud83d\udc71\ud83c\udffd": "1f471-1f3fd",
        "\ud83d\udc71\ud83c\udffc": "1f471-1f3fc",
        "\ud83d\udc71\ud83c\udffb": "1f471-1f3fb",
        "\ud83d\udc70\ud83c\udfff": "1f470-1f3ff",
        "\ud83d\udc70\ud83c\udffe": "1f470-1f3fe",
        "\ud83d\udc70\ud83c\udffd": "1f470-1f3fd",
        "\ud83d\udc70\ud83c\udffc": "1f470-1f3fc",
        "\ud83d\udc70\ud83c\udffb": "1f470-1f3fb",
        "\ud83d\udc6e\ud83c\udfff": "1f46e-1f3ff",
        "\ud83d\udc6e\ud83c\udffe": "1f46e-1f3fe",
        "\ud83d\udc6e\ud83c\udffd": "1f46e-1f3fd",
        "\ud83d\udc6e\ud83c\udffc": "1f46e-1f3fc",
        "\ud83d\udc6e\ud83c\udffb": "1f46e-1f3fb",
        "\ud83d\udc69\ud83c\udfff": "1f469-1f3ff",
        "\ud83d\udc69\ud83c\udffe": "1f469-1f3fe",
        "\ud83d\udc69\ud83c\udffd": "1f469-1f3fd",
        "\ud83d\udc69\ud83c\udffc": "1f469-1f3fc",
        "\ud83d\udc69\ud83c\udffb": "1f469-1f3fb",
        "\ud83d\udc68\ud83c\udfff": "1f468-1f3ff",
        "\ud83d\udc68\ud83c\udffe": "1f468-1f3fe",
        "\ud83d\udc68\ud83c\udffd": "1f468-1f3fd",
        "\ud83d\udc68\ud83c\udffc": "1f468-1f3fc",
        "\ud83d\udc68\ud83c\udffb": "1f468-1f3fb",
        "\ud83d\udc67\ud83c\udfff": "1f467-1f3ff",
        "\ud83d\udc67\ud83c\udffe": "1f467-1f3fe",
        "\ud83d\udc67\ud83c\udffd": "1f467-1f3fd",
        "\ud83d\udc67\ud83c\udffc": "1f467-1f3fc",
        "\ud83d\udc67\ud83c\udffb": "1f467-1f3fb",
        "\ud83d\udc66\ud83c\udfff": "1f466-1f3ff",
        "\ud83d\udc66\ud83c\udffe": "1f466-1f3fe",
        "\ud83d\udc66\ud83c\udffd": "1f466-1f3fd",
        "\ud83d\udc66\ud83c\udffc": "1f466-1f3fc",
        "\ud83d\udc66\ud83c\udffb": "1f466-1f3fb",
        "\ud83d\udc50\ud83c\udfff": "1f450-1f3ff",
        "\ud83d\udc50\ud83c\udffe": "1f450-1f3fe",
        "\ud83d\udc50\ud83c\udffd": "1f450-1f3fd",
        "\ud83d\udc50\ud83c\udffc": "1f450-1f3fc",
        "\ud83d\udc50\ud83c\udffb": "1f450-1f3fb",
        "\ud83d\udc4f\ud83c\udfff": "1f44f-1f3ff",
        "\ud83d\udc4f\ud83c\udffe": "1f44f-1f3fe",
        "\ud83d\udc4f\ud83c\udffd": "1f44f-1f3fd",
        "\ud83d\udc4f\ud83c\udffc": "1f44f-1f3fc",
        "\ud83d\udc4f\ud83c\udffb": "1f44f-1f3fb",
        "\ud83d\udc4e\ud83c\udfff": "1f44e-1f3ff",
        "\ud83d\udc4e\ud83c\udffe": "1f44e-1f3fe",
        "\ud83d\udc4e\ud83c\udffd": "1f44e-1f3fd",
        "\ud83d\udc4e\ud83c\udffc": "1f44e-1f3fc",
        "\ud83d\udc4e\ud83c\udffb": "1f44e-1f3fb",
        "\ud83d\udc4d\ud83c\udfff": "1f44d-1f3ff",
        "\ud83d\udc4d\ud83c\udffe": "1f44d-1f3fe",
        "\ud83d\udc4d\ud83c\udffd": "1f44d-1f3fd",
        "\ud83d\udc4d\ud83c\udffc": "1f44d-1f3fc",
        "\ud83d\udc4d\ud83c\udffb": "1f44d-1f3fb",
        "\ud83d\udc4c\ud83c\udfff": "1f44c-1f3ff",
        "\ud83d\udc4c\ud83c\udffe": "1f44c-1f3fe",
        "\ud83d\udc4c\ud83c\udffd": "1f44c-1f3fd",
        "\ud83d\udc4c\ud83c\udffc": "1f44c-1f3fc",
        "\ud83d\udc4c\ud83c\udffb": "1f44c-1f3fb",
        "\ud83d\udc4b\ud83c\udfff": "1f44b-1f3ff",
        "\ud83d\udc4b\ud83c\udffe": "1f44b-1f3fe",
        "\ud83d\udc4b\ud83c\udffd": "1f44b-1f3fd",
        "\ud83d\udc4b\ud83c\udffc": "1f44b-1f3fc",
        "\ud83d\udc4b\ud83c\udffb": "1f44b-1f3fb",
        "\ud83d\udc4a\ud83c\udfff": "1f44a-1f3ff",
        "\ud83d\udc4a\ud83c\udffe": "1f44a-1f3fe",
        "\ud83d\udc4a\ud83c\udffd": "1f44a-1f3fd",
        "\ud83d\udc4a\ud83c\udffc": "1f44a-1f3fc",
        "\ud83d\udc4a\ud83c\udffb": "1f44a-1f3fb",
        "\ud83d\udc49\ud83c\udfff": "1f449-1f3ff",
        "\ud83d\udc49\ud83c\udffe": "1f449-1f3fe",
        "\ud83d\udc49\ud83c\udffd": "1f449-1f3fd",
        "\ud83d\udc49\ud83c\udffc": "1f449-1f3fc",
        "\ud83d\udc49\ud83c\udffb": "1f449-1f3fb",
        "\ud83d\udc48\ud83c\udfff": "1f448-1f3ff",
        "\ud83d\udc48\ud83c\udffe": "1f448-1f3fe",
        "\ud83d\udc48\ud83c\udffd": "1f448-1f3fd",
        "\ud83d\udc48\ud83c\udffc": "1f448-1f3fc",
        "\ud83d\udc48\ud83c\udffb": "1f448-1f3fb",
        "\ud83d\udc47\ud83c\udfff": "1f447-1f3ff",
        "\ud83d\udc47\ud83c\udffe": "1f447-1f3fe",
        "\ud83d\udc47\ud83c\udffd": "1f447-1f3fd",
        "\ud83d\udc47\ud83c\udffc": "1f447-1f3fc",
        "\ud83d\udc47\ud83c\udffb": "1f447-1f3fb",
        "\ud83d\udc46\ud83c\udfff": "1f446-1f3ff",
        "\ud83d\udc46\ud83c\udffe": "1f446-1f3fe",
        "\ud83d\udc46\ud83c\udffd": "1f446-1f3fd",
        "\ud83d\udc46\ud83c\udffc": "1f446-1f3fc",
        "\ud83d\udc46\ud83c\udffb": "1f446-1f3fb",
        "\ud83d\udc43\ud83c\udfff": "1f443-1f3ff",
        "\ud83d\udc43\ud83c\udffe": "1f443-1f3fe",
        "\ud83d\udc43\ud83c\udffd": "1f443-1f3fd",
        "\ud83d\udc43\ud83c\udffc": "1f443-1f3fc",
        "\ud83d\udc43\ud83c\udffb": "1f443-1f3fb",
        "\ud83d\udc42\ud83c\udfff": "1f442-1f3ff",
        "\ud83d\udc42\ud83c\udffe": "1f442-1f3fe",
        "\ud83d\udc42\ud83c\udffd": "1f442-1f3fd",
        "\ud83d\udc42\ud83c\udffc": "1f442-1f3fc",
        "\ud83d\udc42\ud83c\udffb": "1f442-1f3fb",
        "\ud83c\udfcb\ud83c\udfff": "1f3cb-1f3ff",
        "\ud83c\udfcb\ud83c\udffe": "1f3cb-1f3fe",
        "\ud83c\udfcb\ud83c\udffd": "1f3cb-1f3fd",
        "\ud83c\udfcb\ud83c\udffc": "1f3cb-1f3fc",
        "\ud83c\udfcb\ud83c\udffb": "1f3cb-1f3fb",
        "\ud83c\udfca\ud83c\udfff": "1f3ca-1f3ff",
        "\ud83c\udfca\ud83c\udffe": "1f3ca-1f3fe",
        "\ud83c\udfca\ud83c\udffd": "1f3ca-1f3fd",
        "\ud83c\udfca\ud83c\udffc": "1f3ca-1f3fc",
        "\ud83c\udfca\ud83c\udffb": "1f3ca-1f3fb",
        "\ud83c\udfc7\ud83c\udfff": "1f3c7-1f3ff",
        "\ud83c\udfc7\ud83c\udffe": "1f3c7-1f3fe",
        "\ud83c\udfc7\ud83c\udffd": "1f3c7-1f3fd",
        "\ud83c\udfc7\ud83c\udffc": "1f3c7-1f3fc",
        "\ud83c\udfc7\ud83c\udffb": "1f3c7-1f3fb",
        "\ud83c\udfc4\ud83c\udfff": "1f3c4-1f3ff",
        "\ud83c\udfc4\ud83c\udffe": "1f3c4-1f3fe",
        "\ud83c\udfc4\ud83c\udffd": "1f3c4-1f3fd",
        "\ud83c\udfc4\ud83c\udffc": "1f3c4-1f3fc",
        "\ud83c\udfc4\ud83c\udffb": "1f3c4-1f3fb",
        "\ud83c\udfc3\ud83c\udfff": "1f3c3-1f3ff",
        "\ud83c\udfc3\ud83c\udffe": "1f3c3-1f3fe",
        "\ud83c\udfc3\ud83c\udffd": "1f3c3-1f3fd",
        "\ud83c\udfc3\ud83c\udffc": "1f3c3-1f3fc",
        "\ud83c\udfc3\ud83c\udffb": "1f3c3-1f3fb",
        "\ud83c\udf85\ud83c\udfff": "1f385-1f3ff",
        "\ud83c\udf85\ud83c\udffe": "1f385-1f3fe",
        "\ud83c\udf85\ud83c\udffd": "1f385-1f3fd",
        "\ud83c\udf85\ud83c\udffc": "1f385-1f3fc",
        "\ud83c\udf85\ud83c\udffb": "1f385-1f3fb",
        "\ud83c\uddff\ud83c\uddfc": "1f1ff-1f1fc",
        "\ud83c\uddff\ud83c\uddf2": "1f1ff-1f1f2",
        "\ud83c\uddff\ud83c\udde6": "1f1ff-1f1e6",
        "\ud83c\uddfe\ud83c\uddf9": "1f1fe-1f1f9",
        "\ud83c\uddfe\ud83c\uddea": "1f1fe-1f1ea",
        "\ud83c\uddfd\ud83c\uddf0": "1f1fd-1f1f0",
        "\ud83c\uddfc\ud83c\uddf8": "1f1fc-1f1f8",
        "\ud83c\uddfc\ud83c\uddeb": "1f1fc-1f1eb",
        "\ud83c\uddfb\ud83c\uddfa": "1f1fb-1f1fa",
        "\ud83c\uddfb\ud83c\uddf3": "1f1fb-1f1f3",
        "\ud83c\uddfb\ud83c\uddee": "1f1fb-1f1ee",
        "\ud83c\uddfb\ud83c\uddec": "1f1fb-1f1ec",
        "\ud83c\uddfb\ud83c\uddea": "1f1fb-1f1ea",
        "\ud83c\uddfb\ud83c\udde8": "1f1fb-1f1e8",
        "\ud83c\uddfb\ud83c\udde6": "1f1fb-1f1e6",
        "\ud83c\uddfa\ud83c\uddff": "1f1fa-1f1ff",
        "\ud83c\uddfa\ud83c\uddfe": "1f1fa-1f1fe",
        "\ud83c\uddfa\ud83c\uddf8": "1f1fa-1f1f8",
        "\ud83c\uddfa\ud83c\uddf2": "1f1fa-1f1f2",
        "\ud83c\uddfa\ud83c\uddec": "1f1fa-1f1ec",
        "\ud83c\uddfa\ud83c\udde6": "1f1fa-1f1e6",
        "\ud83c\uddf9\ud83c\uddff": "1f1f9-1f1ff",
        "\ud83c\uddf9\ud83c\uddfc": "1f1f9-1f1fc",
        "\ud83c\uddf9\ud83c\uddfb": "1f1f9-1f1fb",
        "\ud83c\uddf9\ud83c\uddf9": "1f1f9-1f1f9",
        "\ud83c\uddf9\ud83c\uddf7": "1f1f9-1f1f7",
        "\ud83c\uddf9\ud83c\uddf4": "1f1f9-1f1f4",
        "\ud83c\uddf9\ud83c\uddf3": "1f1f9-1f1f3",
        "\ud83c\uddf9\ud83c\uddf2": "1f1f9-1f1f2",
        "\ud83c\uddf9\ud83c\uddf1": "1f1f9-1f1f1",
        "\ud83c\uddf9\ud83c\uddf0": "1f1f9-1f1f0",
        "\ud83c\uddf9\ud83c\uddef": "1f1f9-1f1ef",
        "\ud83c\uddf9\ud83c\udded": "1f1f9-1f1ed",
        "\ud83c\uddf9\ud83c\uddec": "1f1f9-1f1ec",
        "\ud83c\uddf9\ud83c\uddeb": "1f1f9-1f1eb",
        "\ud83c\uddf9\ud83c\udde9": "1f1f9-1f1e9",
        "\ud83c\uddf9\ud83c\udde8": "1f1f9-1f1e8",
        "\ud83c\uddf9\ud83c\udde6": "1f1f9-1f1e6",
        "\ud83c\uddf8\ud83c\uddff": "1f1f8-1f1ff",
        "\ud83c\uddf8\ud83c\uddfe": "1f1f8-1f1fe",
        "\ud83c\uddf8\ud83c\uddfd": "1f1f8-1f1fd",
        "\ud83c\uddf8\ud83c\uddfb": "1f1f8-1f1fb",
        "\ud83c\uddf8\ud83c\uddf9": "1f1f8-1f1f9",
        "\ud83c\uddf8\ud83c\uddf8": "1f1f8-1f1f8",
        "\ud83c\uddf8\ud83c\uddf7": "1f1f8-1f1f7",
        "\ud83c\uddf8\ud83c\uddf4": "1f1f8-1f1f4",
        "\ud83c\uddf8\ud83c\uddf3": "1f1f8-1f1f3",
        "\ud83c\uddf8\ud83c\uddf2": "1f1f8-1f1f2",
        "\ud83c\uddf8\ud83c\uddf1": "1f1f8-1f1f1",
        "\ud83c\uddf8\ud83c\uddf0": "1f1f8-1f1f0",
        "\ud83c\uddf8\ud83c\uddef": "1f1f8-1f1ef",
        "\ud83c\uddf8\ud83c\uddee": "1f1f8-1f1ee",
        "\ud83c\uddf8\ud83c\udded": "1f1f8-1f1ed",
        "\ud83c\uddf8\ud83c\uddec": "1f1f8-1f1ec",
        "\ud83c\uddf8\ud83c\uddea": "1f1f8-1f1ea",
        "\ud83c\uddf8\ud83c\udde9": "1f1f8-1f1e9",
        "\ud83c\uddf8\ud83c\udde8": "1f1f8-1f1e8",
        "\ud83c\uddf8\ud83c\udde7": "1f1f8-1f1e7",
        "\ud83c\uddf8\ud83c\udde6": "1f1f8-1f1e6",
        "\ud83c\uddf7\ud83c\uddfc": "1f1f7-1f1fc",
        "\ud83c\uddf7\ud83c\uddfa": "1f1f7-1f1fa",
        "\ud83c\uddf7\ud83c\uddf8": "1f1f7-1f1f8",
        "\ud83c\uddf7\ud83c\uddf4": "1f1f7-1f1f4",
        "\ud83c\uddf7\ud83c\uddea": "1f1f7-1f1ea",
        "\ud83c\uddf6\ud83c\udde6": "1f1f6-1f1e6",
        "\ud83c\uddf5\ud83c\uddfe": "1f1f5-1f1fe",
        "\ud83c\uddf5\ud83c\uddfc": "1f1f5-1f1fc",
        "\ud83c\uddf5\ud83c\uddf9": "1f1f5-1f1f9",
        "\ud83c\uddf5\ud83c\uddf8": "1f1f5-1f1f8",
        "\ud83c\uddf5\ud83c\uddf7": "1f1f5-1f1f7",
        "\ud83c\uddf5\ud83c\uddf3": "1f1f5-1f1f3",
        "\ud83c\uddf5\ud83c\uddf2": "1f1f5-1f1f2",
        "\ud83c\uddf5\ud83c\uddf1": "1f1f5-1f1f1",
        "\ud83c\uddf5\ud83c\uddf0": "1f1f5-1f1f0",
        "\ud83c\uddf5\ud83c\udded": "1f1f5-1f1ed",
        "\ud83c\uddf5\ud83c\uddec": "1f1f5-1f1ec",
        "\ud83c\uddf5\ud83c\uddeb": "1f1f5-1f1eb",
        "\ud83c\uddf5\ud83c\uddea": "1f1f5-1f1ea",
        "\ud83c\uddf5\ud83c\udde6": "1f1f5-1f1e6",
        "\ud83c\uddf4\ud83c\uddf2": "1f1f4-1f1f2",
        "\ud83c\uddf3\ud83c\uddff": "1f1f3-1f1ff",
        "\ud83c\uddf3\ud83c\uddfa": "1f1f3-1f1fa",
        "\ud83c\uddf3\ud83c\uddf7": "1f1f3-1f1f7",
        "\ud83c\uddf3\ud83c\uddf5": "1f1f3-1f1f5",
        "\ud83c\uddf3\ud83c\uddf4": "1f1f3-1f1f4",
        "\ud83c\uddf3\ud83c\uddf1": "1f1f3-1f1f1",
        "\ud83c\uddf3\ud83c\uddee": "1f1f3-1f1ee",
        "\ud83c\uddf3\ud83c\uddec": "1f1f3-1f1ec",
        "\ud83c\uddf3\ud83c\uddeb": "1f1f3-1f1eb",
        "\ud83c\uddf3\ud83c\uddea": "1f1f3-1f1ea",
        "\ud83c\uddf3\ud83c\udde8": "1f1f3-1f1e8",
        "\ud83c\uddf3\ud83c\udde6": "1f1f3-1f1e6",
        "\ud83c\uddf2\ud83c\uddff": "1f1f2-1f1ff",
        "\ud83c\uddf2\ud83c\uddfe": "1f1f2-1f1fe",
        "\ud83c\uddf2\ud83c\uddfd": "1f1f2-1f1fd",
        "\ud83c\uddf2\ud83c\uddfc": "1f1f2-1f1fc",
        "\ud83c\uddf2\ud83c\uddfb": "1f1f2-1f1fb",
        "\ud83c\uddf2\ud83c\uddfa": "1f1f2-1f1fa",
        "\ud83c\uddf2\ud83c\uddf9": "1f1f2-1f1f9",
        "\ud83c\uddf2\ud83c\uddf8": "1f1f2-1f1f8",
        "\ud83c\uddf2\ud83c\uddf7": "1f1f2-1f1f7",
        "\ud83c\uddf2\ud83c\uddf6": "1f1f2-1f1f6",
        "\ud83c\uddf2\ud83c\uddf5": "1f1f2-1f1f5",
        "\ud83c\uddf2\ud83c\uddf4": "1f1f2-1f1f4",
        "\ud83c\uddf2\ud83c\uddf3": "1f1f2-1f1f3",
        "\ud83c\uddf2\ud83c\uddf2": "1f1f2-1f1f2",
        "\ud83c\uddf2\ud83c\uddf1": "1f1f2-1f1f1",
        "\ud83c\uddf2\ud83c\uddf0": "1f1f2-1f1f0",
        "\ud83c\uddf2\ud83c\udded": "1f1f2-1f1ed",
        "\ud83c\uddf2\ud83c\uddec": "1f1f2-1f1ec",
        "\ud83c\uddf2\ud83c\uddeb": "1f1f2-1f1eb",
        "\ud83c\uddf2\ud83c\uddea": "1f1f2-1f1ea",
        "\ud83c\uddf2\ud83c\udde9": "1f1f2-1f1e9",
        "\ud83c\uddf2\ud83c\udde8": "1f1f2-1f1e8",
        "\ud83c\uddf2\ud83c\udde6": "1f1f2-1f1e6",
        "\ud83c\uddf1\ud83c\uddfe": "1f1f1-1f1fe",
        "\ud83c\uddf1\ud83c\uddfb": "1f1f1-1f1fb",
        "\ud83c\uddf1\ud83c\uddfa": "1f1f1-1f1fa",
        "\ud83c\uddf1\ud83c\uddf9": "1f1f1-1f1f9",
        "\ud83c\uddf1\ud83c\uddf8": "1f1f1-1f1f8",
        "\ud83c\uddf1\ud83c\uddf7": "1f1f1-1f1f7",
        "\ud83c\uddf1\ud83c\uddf0": "1f1f1-1f1f0",
        "\ud83c\uddf1\ud83c\uddee": "1f1f1-1f1ee",
        "\ud83c\uddf1\ud83c\udde8": "1f1f1-1f1e8",
        "\ud83c\uddf1\ud83c\udde7": "1f1f1-1f1e7",
        "\ud83c\uddf1\ud83c\udde6": "1f1f1-1f1e6",
        "\ud83c\uddf0\ud83c\uddff": "1f1f0-1f1ff",
        "\ud83c\uddf0\ud83c\uddfe": "1f1f0-1f1fe",
        "\ud83c\uddf0\ud83c\uddfc": "1f1f0-1f1fc",
        "\ud83c\uddf0\ud83c\uddf7": "1f1f0-1f1f7",
        "\ud83c\uddf0\ud83c\uddf5": "1f1f0-1f1f5",
        "\ud83c\uddf0\ud83c\uddf3": "1f1f0-1f1f3",
        "\ud83c\uddf0\ud83c\uddf2": "1f1f0-1f1f2",
        "\ud83c\uddf0\ud83c\uddee": "1f1f0-1f1ee",
        "\ud83c\uddf0\ud83c\udded": "1f1f0-1f1ed",
        "\ud83c\uddf0\ud83c\uddec": "1f1f0-1f1ec",
        "\ud83c\uddf0\ud83c\uddea": "1f1f0-1f1ea",
        "\ud83c\uddef\ud83c\uddf5": "1f1ef-1f1f5",
        "\ud83c\uddef\ud83c\uddf4": "1f1ef-1f1f4",
        "\ud83c\uddef\ud83c\uddf2": "1f1ef-1f1f2",
        "\ud83c\uddef\ud83c\uddea": "1f1ef-1f1ea",
        "\ud83c\uddee\ud83c\uddf9": "1f1ee-1f1f9",
        "\ud83c\uddee\ud83c\uddf8": "1f1ee-1f1f8",
        "\ud83c\uddee\ud83c\uddf7": "1f1ee-1f1f7",
        "\ud83c\uddee\ud83c\uddf6": "1f1ee-1f1f6",
        "\ud83c\uddee\ud83c\uddf4": "1f1ee-1f1f4",
        "\ud83c\uddee\ud83c\uddf3": "1f1ee-1f1f3",
        "\ud83c\uddee\ud83c\uddf2": "1f1ee-1f1f2",
        "\ud83c\uddee\ud83c\uddf1": "1f1ee-1f1f1",
        "\ud83c\uddee\ud83c\uddea": "1f1ee-1f1ea",
        "\ud83c\uddee\ud83c\udde9": "1f1ee-1f1e9",
        "\ud83c\uddee\ud83c\udde8": "1f1ee-1f1e8",
        "\ud83c\udded\ud83c\uddfa": "1f1ed-1f1fa",
        "\ud83c\udded\ud83c\uddf9": "1f1ed-1f1f9",
        "\ud83c\udded\ud83c\uddf7": "1f1ed-1f1f7",
        "\ud83c\udded\ud83c\uddf3": "1f1ed-1f1f3",
        "\ud83c\udded\ud83c\uddf2": "1f1ed-1f1f2",
        "\ud83c\udded\ud83c\uddf0": "1f1ed-1f1f0",
        "\ud83c\uddec\ud83c\uddfe": "1f1ec-1f1fe",
        "\ud83c\uddec\ud83c\uddfc": "1f1ec-1f1fc",
        "\ud83c\uddec\ud83c\uddfa": "1f1ec-1f1fa",
        "\ud83c\uddec\ud83c\uddf9": "1f1ec-1f1f9",
        "\ud83c\uddec\ud83c\uddf8": "1f1ec-1f1f8",
        "\ud83c\uddec\ud83c\uddf7": "1f1ec-1f1f7",
        "\ud83c\uddec\ud83c\uddf6": "1f1ec-1f1f6",
        "\ud83c\uddec\ud83c\uddf5": "1f1ec-1f1f5",
        "\ud83c\uddec\ud83c\uddf3": "1f1ec-1f1f3",
        "\ud83c\uddec\ud83c\uddf2": "1f1ec-1f1f2",
        "\ud83c\uddec\ud83c\uddf1": "1f1ec-1f1f1",
        "\ud83c\uddec\ud83c\uddee": "1f1ec-1f1ee",
        "\ud83c\uddec\ud83c\udded": "1f1ec-1f1ed",
        "\ud83c\uddec\ud83c\uddec": "1f1ec-1f1ec",
        "\ud83c\uddec\ud83c\uddeb": "1f1ec-1f1eb",
        "\ud83c\uddec\ud83c\uddea": "1f1ec-1f1ea",
        "\ud83c\uddec\ud83c\udde9": "1f1ec-1f1e9",
        "\ud83c\uddec\ud83c\udde7": "1f1ec-1f1e7",
        "\ud83c\uddec\ud83c\udde6": "1f1ec-1f1e6",
        "\ud83c\uddeb\ud83c\uddf7": "1f1eb-1f1f7",
        "\ud83c\uddeb\ud83c\uddf4": "1f1eb-1f1f4",
        "\ud83c\uddeb\ud83c\uddf2": "1f1eb-1f1f2",
        "\ud83c\uddeb\ud83c\uddf0": "1f1eb-1f1f0",
        "\ud83c\uddeb\ud83c\uddef": "1f1eb-1f1ef",
        "\ud83c\uddeb\ud83c\uddee": "1f1eb-1f1ee",
        "\ud83c\uddea\ud83c\uddfa": "1f1ea-1f1fa",
        "\ud83c\uddea\ud83c\uddf9": "1f1ea-1f1f9",
        "\ud83c\uddea\ud83c\uddf8": "1f1ea-1f1f8",
        "\ud83c\uddea\ud83c\uddf7": "1f1ea-1f1f7",
        "\ud83c\uddea\ud83c\udded": "1f1ea-1f1ed",
        "\ud83c\uddea\ud83c\uddec": "1f1ea-1f1ec",
        "\ud83c\uddea\ud83c\uddea": "1f1ea-1f1ea",
        "\ud83c\uddea\ud83c\udde8": "1f1ea-1f1e8",
        "\ud83c\uddea\ud83c\udde6": "1f1ea-1f1e6",
        "\ud83c\udde9\ud83c\uddff": "1f1e9-1f1ff",
        "\ud83c\udde9\ud83c\uddf4": "1f1e9-1f1f4",
        "\ud83c\udde9\ud83c\uddf2": "1f1e9-1f1f2",
        "\ud83c\udde9\ud83c\uddf0": "1f1e9-1f1f0",
        "\ud83c\udde9\ud83c\uddef": "1f1e9-1f1ef",
        "\ud83c\udde9\ud83c\uddec": "1f1e9-1f1ec",
        "\ud83c\udde9\ud83c\uddea": "1f1e9-1f1ea",
        "\ud83c\udde8\ud83c\uddff": "1f1e8-1f1ff",
        "\ud83c\udde8\ud83c\uddfe": "1f1e8-1f1fe",
        "\ud83c\udde8\ud83c\uddfd": "1f1e8-1f1fd",
        "\ud83c\udde8\ud83c\uddfc": "1f1e8-1f1fc",
        "\ud83c\udde8\ud83c\uddfb": "1f1e8-1f1fb",
        "\ud83c\udde8\ud83c\uddfa": "1f1e8-1f1fa",
        "\ud83c\udde8\ud83c\uddf7": "1f1e8-1f1f7",
        "\ud83c\udde8\ud83c\uddf5": "1f1e8-1f1f5",
        "\ud83c\udde8\ud83c\uddf4": "1f1e8-1f1f4",
        "\ud83c\udde8\ud83c\uddf3": "1f1e8-1f1f3",
        "\ud83c\udde8\ud83c\uddf2": "1f1e8-1f1f2",
        "\ud83c\udde8\ud83c\uddf1": "1f1e8-1f1f1",
        "\ud83c\udde8\ud83c\uddf0": "1f1e8-1f1f0",
        "\ud83c\udde8\ud83c\uddee": "1f1e8-1f1ee",
        "\ud83c\udde8\ud83c\udded": "1f1e8-1f1ed",
        "\ud83c\udde8\ud83c\uddec": "1f1e8-1f1ec",
        "\ud83c\udde8\ud83c\uddeb": "1f1e8-1f1eb",
        "\ud83c\udde8\ud83c\udde9": "1f1e8-1f1e9",
        "\ud83c\udde8\ud83c\udde8": "1f1e8-1f1e8",
        "\ud83c\udde8\ud83c\udde6": "1f1e8-1f1e6",
        "\ud83c\udde7\ud83c\uddff": "1f1e7-1f1ff",
        "\ud83c\udde7\ud83c\uddfe": "1f1e7-1f1fe",
        "\ud83c\udde7\ud83c\uddfc": "1f1e7-1f1fc",
        "\ud83c\udde7\ud83c\uddfb": "1f1e7-1f1fb",
        "\ud83c\udde7\ud83c\uddf9": "1f1e7-1f1f9",
        "\ud83c\udde7\ud83c\uddf8": "1f1e7-1f1f8",
        "\ud83c\udde7\ud83c\uddf7": "1f1e7-1f1f7",
        "\ud83c\udde7\ud83c\uddf6": "1f1e7-1f1f6",
        "\ud83c\udde7\ud83c\uddf4": "1f1e7-1f1f4",
        "\ud83c\udde7\ud83c\uddf3": "1f1e7-1f1f3",
        "\ud83c\udde7\ud83c\uddf2": "1f1e7-1f1f2",
        "\ud83c\udde7\ud83c\uddf1": "1f1e7-1f1f1",
        "\ud83c\udde7\ud83c\uddef": "1f1e7-1f1ef",
        "\ud83c\udde7\ud83c\uddee": "1f1e7-1f1ee",
        "\ud83c\udde7\ud83c\udded": "1f1e7-1f1ed",
        "\ud83c\udde7\ud83c\uddec": "1f1e7-1f1ec",
        "\ud83c\udde7\ud83c\uddeb": "1f1e7-1f1eb",
        "\ud83c\udde7\ud83c\uddea": "1f1e7-1f1ea",
        "\ud83c\udde7\ud83c\udde9": "1f1e7-1f1e9",
        "\ud83c\udde7\ud83c\udde7": "1f1e7-1f1e7",
        "\ud83c\udde7\ud83c\udde6": "1f1e7-1f1e6",
        "\ud83c\udde6\ud83c\uddff": "1f1e6-1f1ff",
        "\ud83c\udde6\ud83c\uddfd": "1f1e6-1f1fd",
        "\ud83c\udde6\ud83c\uddfc": "1f1e6-1f1fc",
        "\ud83c\udde6\ud83c\uddfa": "1f1e6-1f1fa",
        "\ud83c\udde6\ud83c\uddf9": "1f1e6-1f1f9",
        "\ud83c\udde6\ud83c\uddf8": "1f1e6-1f1f8",
        "\ud83c\udde6\ud83c\uddf7": "1f1e6-1f1f7",
        "\ud83c\udde6\ud83c\uddf6": "1f1e6-1f1f6",
        "\ud83c\udde6\ud83c\uddf4": "1f1e6-1f1f4",
        "\ud83c\udde6\ud83c\uddf2": "1f1e6-1f1f2",
        "\ud83c\udde6\ud83c\uddf1": "1f1e6-1f1f1",
        "\ud83c\udde6\ud83c\uddee": "1f1e6-1f1ee",
        "\ud83c\udde6\ud83c\uddec": "1f1e6-1f1ec",
        "\ud83c\udde6\ud83c\uddeb": "1f1e6-1f1eb",
        "\ud83c\udde6\ud83c\uddea": "1f1e6-1f1ea",
        "\ud83c\udde6\ud83c\udde9": "1f1e6-1f1e9",
        "\ud83c\udde6\ud83c\udde8": "1f1e6-1f1e8",
        "\ud83c\udc04\ufe0f": "1f004",
        "\ud83c\udd7f\ufe0f": "1f17f",
        "\ud83c\ude02\ufe0f": "1f202",
        "\ud83c\ude1a\ufe0f": "1f21a",
        "\ud83c\ude2f\ufe0f": "1f22f",
        "\ud83c\ude37\ufe0f": "1f237",
        "\ud83c\udf9e\ufe0f": "1f39e",
        "\ud83c\udf9f\ufe0f": "1f39f",
        "\ud83c\udfcb\ufe0f": "1f3cb",
        "\ud83c\udfcc\ufe0f": "1f3cc",
        "\ud83c\udfcd\ufe0f": "1f3cd",
        "\ud83c\udfce\ufe0f": "1f3ce",
        "\ud83c\udf96\ufe0f": "1f396",
        "\ud83c\udf97\ufe0f": "1f397",
        "\ud83c\udf36\ufe0f": "1f336",
        "\ud83c\udf27\ufe0f": "1f327",
        "\ud83c\udf28\ufe0f": "1f328",
        "\ud83c\udf29\ufe0f": "1f329",
        "\ud83c\udf2a\ufe0f": "1f32a",
        "\ud83c\udf2b\ufe0f": "1f32b",
        "\ud83c\udf2c\ufe0f": "1f32c",
        "\ud83d\udc3f\ufe0f": "1f43f",
        "\ud83d\udd77\ufe0f": "1f577",
        "\ud83d\udd78\ufe0f": "1f578",
        "\ud83c\udf21\ufe0f": "1f321",
        "\ud83c\udf99\ufe0f": "1f399",
        "\ud83c\udf9a\ufe0f": "1f39a",
        "\ud83c\udf9b\ufe0f": "1f39b",
        "\ud83c\udff3\ufe0f": "1f3f3",
        "\ud83c\udff5\ufe0f": "1f3f5",
        "\ud83c\udff7\ufe0f": "1f3f7",
        "\ud83d\udcfd\ufe0f": "1f4fd",
        "\ud83d\udd49\ufe0f": "1f549",
        "\ud83d\udd4a\ufe0f": "1f54a",
        "\ud83d\udd6f\ufe0f": "1f56f",
        "\ud83d\udd70\ufe0f": "1f570",
        "\ud83d\udd73\ufe0f": "1f573",
        "\ud83d\udd76\ufe0f": "1f576",
        "\ud83d\udd79\ufe0f": "1f579",
        "\ud83d\udd87\ufe0f": "1f587",
        "\ud83d\udd8a\ufe0f": "1f58a",
        "\ud83d\udd8b\ufe0f": "1f58b",
        "\ud83d\udd8c\ufe0f": "1f58c",
        "\ud83d\udd8d\ufe0f": "1f58d",
        "\ud83d\udda5\ufe0f": "1f5a5",
        "\ud83d\udda8\ufe0f": "1f5a8",
        "\ud83d\uddb2\ufe0f": "1f5b2",
        "\ud83d\uddbc\ufe0f": "1f5bc",
        "\ud83d\uddc2\ufe0f": "1f5c2",
        "\ud83d\uddc3\ufe0f": "1f5c3",
        "\ud83d\uddc4\ufe0f": "1f5c4",
        "\ud83d\uddd1\ufe0f": "1f5d1",
        "\ud83d\uddd2\ufe0f": "1f5d2",
        "\ud83d\uddd3\ufe0f": "1f5d3",
        "\ud83d\udddc\ufe0f": "1f5dc",
        "\ud83d\udddd\ufe0f": "1f5dd",
        "\ud83d\uddde\ufe0f": "1f5de",
        "\ud83d\udde1\ufe0f": "1f5e1",
        "\ud83d\udde3\ufe0f": "1f5e3",
        "\ud83d\uddef\ufe0f": "1f5ef",
        "\ud83d\uddf3\ufe0f": "1f5f3",
        "\ud83d\uddfa\ufe0f": "1f5fa",
        "\ud83d\udee0\ufe0f": "1f6e0",
        "\ud83d\udee1\ufe0f": "1f6e1",
        "\ud83d\udee2\ufe0f": "1f6e2",
        "\ud83d\udef0\ufe0f": "1f6f0",
        "\ud83c\udf7d\ufe0f": "1f37d",
        "\ud83d\udc41\ufe0f": "1f441",
        "\ud83d\udd74\ufe0f": "1f574",
        "\ud83d\udd75\ufe0f": "1f575",
        "\ud83d\udd90\ufe0f": "1f590",
        "\ud83c\udfd4\ufe0f": "1f3d4",
        "\ud83c\udfd5\ufe0f": "1f3d5",
        "\ud83c\udfd6\ufe0f": "1f3d6",
        "\ud83c\udfd7\ufe0f": "1f3d7",
        "\ud83c\udfd8\ufe0f": "1f3d8",
        "\ud83c\udfd9\ufe0f": "1f3d9",
        "\ud83c\udfda\ufe0f": "1f3da",
        "\ud83c\udfdb\ufe0f": "1f3db",
        "\ud83c\udfdc\ufe0f": "1f3dc",
        "\ud83c\udfdd\ufe0f": "1f3dd",
        "\ud83c\udfde\ufe0f": "1f3de",
        "\ud83c\udfdf\ufe0f": "1f3df",
        "\ud83d\udecb\ufe0f": "1f6cb",
        "\ud83d\udecd\ufe0f": "1f6cd",
        "\ud83d\udece\ufe0f": "1f6ce",
        "\ud83d\udecf\ufe0f": "1f6cf",
        "\ud83d\udee3\ufe0f": "1f6e3",
        "\ud83d\udee4\ufe0f": "1f6e4",
        "\ud83d\udee5\ufe0f": "1f6e5",
        "\ud83d\udee9\ufe0f": "1f6e9",
        "\ud83d\udef3\ufe0f": "1f6f3",
        "\ud83c\udf24\ufe0f": "1f324",
        "\ud83c\udf25\ufe0f": "1f325",
        "\ud83c\udf26\ufe0f": "1f326",
        "\ud83d\uddb1\ufe0f": "1f5b1",
        "\u261d\ud83c\udffb": "261d-1f3fb",
        "\u261d\ud83c\udffc": "261d-1f3fc",
        "\u261d\ud83c\udffd": "261d-1f3fd",
        "\u261d\ud83c\udffe": "261d-1f3fe",
        "\u00a9\ufe0f": "00a9",
        "\u00ae\ufe0f": "00ae",
        "\u203c\ufe0f": "203c",
        "\u2049\ufe0f": "2049",
        "\u2122\ufe0f": "2122",
        "\u2139\ufe0f": "2139",
        "\u2194\ufe0f": "2194",
        "\u2195\ufe0f": "2195",
        "\u2196\ufe0f": "2196",
        "\u2197\ufe0f": "2197",
        "\u2198\ufe0f": "2198",
        "\u2199\ufe0f": "2199",
        "\u21a9\ufe0f": "21a9",
        "\u21aa\ufe0f": "21aa",
        "\u231a\ufe0f": "231a",
        "\u231b\ufe0f": "231b",
        "\u24c2\ufe0f": "24c2",
        "\u25aa\ufe0f": "25aa",
        "\u25ab\ufe0f": "25ab",
        "\u25b6\ufe0f": "25b6",
        "\u25c0\ufe0f": "25c0",
        "\u25fb\ufe0f": "25fb",
        "\u25fc\ufe0f": "25fc",
        "\u25fd\ufe0f": "25fd",
        "\u25fe\ufe0f": "25fe",
        "\u2600\ufe0f": "2600",
        "\u2601\ufe0f": "2601",
        "\u260e\ufe0f": "260e",
        "\u2611\ufe0f": "2611",
        "\u2614\ufe0f": "2614",
        "\u2615\ufe0f": "2615",
        "\u261d\ufe0f": "261d",
        "\u263a\ufe0f": "263a",
        "\u2648\ufe0f": "2648",
        "\u2649\ufe0f": "2649",
        "\u264a\ufe0f": "264a",
        "\u264b\ufe0f": "264b",
        "\u264c\ufe0f": "264c",
        "\u264d\ufe0f": "264d",
        "\u264e\ufe0f": "264e",
        "\u264f\ufe0f": "264f",
        "\u2650\ufe0f": "2650",
        "\u2651\ufe0f": "2651",
        "\u2652\ufe0f": "2652",
        "\u2653\ufe0f": "2653",
        "\u2660\ufe0f": "2660",
        "\u2663\ufe0f": "2663",
        "\u2665\ufe0f": "2665",
        "\u2666\ufe0f": "2666",
        "\u2668\ufe0f": "2668",
        "\u267b\ufe0f": "267b",
        "\u267f\ufe0f": "267f",
        "\u2693\ufe0f": "2693",
        "\u26a0\ufe0f": "26a0",
        "\u26a1\ufe0f": "26a1",
        "\u26aa\ufe0f": "26aa",
        "\u26ab\ufe0f": "26ab",
        "\u26bd\ufe0f": "26bd",
        "\u26be\ufe0f": "26be",
        "\u26c4\ufe0f": "26c4",
        "\u26c5\ufe0f": "26c5",
        "\u26d4\ufe0f": "26d4",
        "\u26ea\ufe0f": "26ea",
        "\u26f2\ufe0f": "26f2",
        "\u26f3\ufe0f": "26f3",
        "\u26f5\ufe0f": "26f5",
        "\u26fa\ufe0f": "26fa",
        "\u26fd\ufe0f": "26fd",
        "\u2702\ufe0f": "2702",
        "\u2708\ufe0f": "2708",
        "\u2709\ufe0f": "2709",
        "\u270c\ufe0f": "270c",
        "\u270f\ufe0f": "270f",
        "\u2712\ufe0f": "2712",
        "\u2714\ufe0f": "2714",
        "\u2716\ufe0f": "2716",
        "\u2733\ufe0f": "2733",
        "\u2734\ufe0f": "2734",
        "\u2744\ufe0f": "2744",
        "\u2747\ufe0f": "2747",
        "\u2757\ufe0f": "2757",
        "\u2764\ufe0f": "2764",
        "\u27a1\ufe0f": "27a1",
        "\u2934\ufe0f": "2934",
        "\u2935\ufe0f": "2935",
        "\u2b05\ufe0f": "2b05",
        "\u2b06\ufe0f": "2b06",
        "\u2b07\ufe0f": "2b07",
        "\u2b1b\ufe0f": "2b1b",
        "\u2b1c\ufe0f": "2b1c",
        "\u2b50\ufe0f": "2b50",
        "\u2b55\ufe0f": "2b55",
        "\u3030\ufe0f": "3030",
        "\u303d\ufe0f": "303d",
        "\u3297\ufe0f": "3297",
        "\u3299\ufe0f": "3299",
        "\u271d\ufe0f": "271d",
        "\u2328\ufe0f": "2328",
        "\u270d\ufe0f": "270d",
        "\u23ed\ufe0f": "23ed",
        "\u23ee\ufe0f": "23ee",
        "\u23ef\ufe0f": "23ef",
        "\u23f1\ufe0f": "23f1",
        "\u23f2\ufe0f": "23f2",
        "\u23f8\ufe0f": "23f8",
        "\u23f9\ufe0f": "23f9",
        "\u23fa\ufe0f": "23fa",
        "\u2602\ufe0f": "2602",
        "\u2603\ufe0f": "2603",
        "\u2604\ufe0f": "2604",
        "\u2618\ufe0f": "2618",
        "\u2620\ufe0f": "2620",
        "\u2622\ufe0f": "2622",
        "\u2623\ufe0f": "2623",
        "\u2626\ufe0f": "2626",
        "\u262a\ufe0f": "262a",
        "\u262e\ufe0f": "262e",
        "\u262f\ufe0f": "262f",
        "\u2638\ufe0f": "2638",
        "\u2639\ufe0f": "2639",
        "\u2692\ufe0f": "2692",
        "\u2694\ufe0f": "2694",
        "\u2696\ufe0f": "2696",
        "\u2697\ufe0f": "2697",
        "\u2699\ufe0f": "2699",
        "\u269b\ufe0f": "269b",
        "\u269c\ufe0f": "269c",
        "\u26b0\ufe0f": "26b0",
        "\u26b1\ufe0f": "26b1",
        "\u26c8\ufe0f": "26c8",
        "\u26cf\ufe0f": "26cf",
        "\u26d1\ufe0f": "26d1",
        "\u26d3\ufe0f": "26d3",
        "\u26e9\ufe0f": "26e9",
        "\u26f0\ufe0f": "26f0",
        "\u26f1\ufe0f": "26f1",
        "\u26f4\ufe0f": "26f4",
        "\u26f7\ufe0f": "26f7",
        "\u26f8\ufe0f": "26f8",
        "\u26f9\ufe0f": "26f9",
        "\u2721\ufe0f": "2721",
        "\u2763\ufe0f": "2763",
        "\ud83c\udccf": "1f0cf",
        "\ud83c\udd70": "1f170",
        "\ud83c\udd71": "1f171",
        "\ud83c\udd7e": "1f17e",
        "\ud83c\udd8e": "1f18e",
        "\ud83c\udd91": "1f191",
        "\ud83c\udd92": "1f192",
        "\ud83c\udd93": "1f193",
        "\ud83c\udd94": "1f194",
        "\ud83c\udd95": "1f195",
        "\ud83c\udd96": "1f196",
        "\ud83c\udd97": "1f197",
        "\ud83c\udd98": "1f198",
        "\ud83c\udd99": "1f199",
        "\ud83c\udd9a": "1f19a",
        "\ud83c\ude01": "1f201",
        "\ud83c\ude32": "1f232",
        "\ud83c\ude33": "1f233",
        "\ud83c\ude34": "1f234",
        "\ud83c\ude35": "1f235",
        "\ud83c\ude36": "1f236",
        "\ud83c\ude38": "1f238",
        "\ud83c\ude39": "1f239",
        "\ud83c\ude3a": "1f23a",
        "\ud83c\ude50": "1f250",
        "\ud83c\ude51": "1f251",
        "\ud83c\udf00": "1f300",
        "\ud83c\udf01": "1f301",
        "\ud83c\udf02": "1f302",
        "\ud83c\udf03": "1f303",
        "\ud83c\udf04": "1f304",
        "\ud83c\udf05": "1f305",
        "\ud83c\udf06": "1f306",
        "\ud83c\udf07": "1f307",
        "\ud83c\udf08": "1f308",
        "\ud83c\udf09": "1f309",
        "\ud83c\udf0a": "1f30a",
        "\ud83c\udf0b": "1f30b",
        "\ud83c\udf0c": "1f30c",
        "\ud83c\udf0f": "1f30f",
        "\ud83c\udf11": "1f311",
        "\ud83c\udf13": "1f313",
        "\ud83c\udf14": "1f314",
        "\ud83c\udf15": "1f315",
        "\ud83c\udf19": "1f319",
        "\ud83c\udf1b": "1f31b",
        "\ud83c\udf1f": "1f31f",
        "\ud83c\udf20": "1f320",
        "\ud83c\udf30": "1f330",
        "\ud83c\udf31": "1f331",
        "\ud83c\udf34": "1f334",
        "\ud83c\udf35": "1f335",
        "\ud83c\udf37": "1f337",
        "\ud83c\udf38": "1f338",
        "\ud83c\udf39": "1f339",
        "\ud83c\udf3a": "1f33a",
        "\ud83c\udf3b": "1f33b",
        "\ud83c\udf3c": "1f33c",
        "\ud83c\udf3d": "1f33d",
        "\ud83c\udf3e": "1f33e",
        "\ud83c\udf3f": "1f33f",
        "\ud83c\udf40": "1f340",
        "\ud83c\udf41": "1f341",
        "\ud83c\udf42": "1f342",
        "\ud83c\udf43": "1f343",
        "\ud83c\udf44": "1f344",
        "\ud83c\udf45": "1f345",
        "\ud83c\udf46": "1f346",
        "\ud83c\udf47": "1f347",
        "\ud83c\udf48": "1f348",
        "\ud83c\udf49": "1f349",
        "\ud83c\udf4a": "1f34a",
        "\ud83c\udf4c": "1f34c",
        "\ud83c\udf4d": "1f34d",
        "\ud83c\udf4e": "1f34e",
        "\ud83c\udf4f": "1f34f",
        "\ud83c\udf51": "1f351",
        "\ud83c\udf52": "1f352",
        "\ud83c\udf53": "1f353",
        "\ud83c\udf54": "1f354",
        "\ud83c\udf55": "1f355",
        "\ud83c\udf56": "1f356",
        "\ud83c\udf57": "1f357",
        "\ud83c\udf58": "1f358",
        "\ud83c\udf59": "1f359",
        "\ud83c\udf5a": "1f35a",
        "\ud83c\udf5b": "1f35b",
        "\ud83c\udf5c": "1f35c",
        "\ud83c\udf5d": "1f35d",
        "\ud83c\udf5e": "1f35e",
        "\ud83c\udf5f": "1f35f",
        "\ud83c\udf60": "1f360",
        "\ud83c\udf61": "1f361",
        "\ud83c\udf62": "1f362",
        "\ud83c\udf63": "1f363",
        "\ud83c\udf64": "1f364",
        "\ud83c\udf65": "1f365",
        "\ud83c\udf66": "1f366",
        "\ud83c\udf67": "1f367",
        "\ud83c\udf68": "1f368",
        "\ud83c\udf69": "1f369",
        "\ud83c\udf6a": "1f36a",
        "\ud83c\udf6b": "1f36b",
        "\ud83c\udf6c": "1f36c",
        "\ud83c\udf6d": "1f36d",
        "\ud83c\udf6e": "1f36e",
        "\ud83c\udf6f": "1f36f",
        "\ud83c\udf70": "1f370",
        "\ud83c\udf71": "1f371",
        "\ud83c\udf72": "1f372",
        "\ud83c\udf73": "1f373",
        "\ud83c\udf74": "1f374",
        "\ud83c\udf75": "1f375",
        "\ud83c\udf76": "1f376",
        "\ud83c\udf77": "1f377",
        "\ud83c\udf78": "1f378",
        "\ud83c\udf79": "1f379",
        "\ud83c\udf7a": "1f37a",
        "\ud83c\udf7b": "1f37b",
        "\ud83c\udf80": "1f380",
        "\ud83c\udf81": "1f381",
        "\ud83c\udf82": "1f382",
        "\ud83c\udf83": "1f383",
        "\ud83c\udf84": "1f384",
        "\ud83c\udf85": "1f385",
        "\ud83c\udf86": "1f386",
        "\ud83c\udf87": "1f387",
        "\ud83c\udf88": "1f388",
        "\ud83c\udf89": "1f389",
        "\ud83c\udf8a": "1f38a",
        "\ud83c\udf8b": "1f38b",
        "\ud83c\udf8c": "1f38c",
        "\ud83c\udf8d": "1f38d",
        "\ud83c\udf8e": "1f38e",
        "\ud83c\udf8f": "1f38f",
        "\ud83c\udf90": "1f390",
        "\ud83c\udf91": "1f391",
        "\ud83c\udf92": "1f392",
        "\ud83c\udf93": "1f393",
        "\ud83c\udfa0": "1f3a0",
        "\ud83c\udfa1": "1f3a1",
        "\ud83c\udfa2": "1f3a2",
        "\ud83c\udfa3": "1f3a3",
        "\ud83c\udfa4": "1f3a4",
        "\ud83c\udfa5": "1f3a5",
        "\ud83c\udfa6": "1f3a6",
        "\ud83c\udfa7": "1f3a7",
        "\ud83c\udfa8": "1f3a8",
        "\ud83c\udfa9": "1f3a9",
        "\ud83c\udfaa": "1f3aa",
        "\ud83c\udfab": "1f3ab",
        "\ud83c\udfac": "1f3ac",
        "\ud83c\udfad": "1f3ad",
        "\ud83c\udfae": "1f3ae",
        "\ud83c\udfaf": "1f3af",
        "\ud83c\udfb0": "1f3b0",
        "\ud83c\udfb1": "1f3b1",
        "\ud83c\udfb2": "1f3b2",
        "\ud83c\udfb3": "1f3b3",
        "\ud83c\udfb4": "1f3b4",
        "\ud83c\udfb5": "1f3b5",
        "\ud83c\udfb6": "1f3b6",
        "\ud83c\udfb7": "1f3b7",
        "\ud83c\udfb8": "1f3b8",
        "\ud83c\udfb9": "1f3b9",
        "\ud83c\udfba": "1f3ba",
        "\ud83c\udfbb": "1f3bb",
        "\ud83c\udfbc": "1f3bc",
        "\ud83c\udfbd": "1f3bd",
        "\ud83c\udfbe": "1f3be",
        "\ud83c\udfbf": "1f3bf",
        "\ud83c\udfc0": "1f3c0",
        "\ud83c\udfc1": "1f3c1",
        "\ud83c\udfc2": "1f3c2",
        "\ud83c\udfc3": "1f3c3",
        "\ud83c\udfc4": "1f3c4",
        "\ud83c\udfc6": "1f3c6",
        "\ud83c\udfc8": "1f3c8",
        "\ud83c\udfca": "1f3ca",
        "\ud83c\udfe0": "1f3e0",
        "\ud83c\udfe1": "1f3e1",
        "\ud83c\udfe2": "1f3e2",
        "\ud83c\udfe3": "1f3e3",
        "\ud83c\udfe5": "1f3e5",
        "\ud83c\udfe6": "1f3e6",
        "\ud83c\udfe7": "1f3e7",
        "\ud83c\udfe8": "1f3e8",
        "\ud83c\udfe9": "1f3e9",
        "\ud83c\udfea": "1f3ea",
        "\ud83c\udfeb": "1f3eb",
        "\ud83c\udfec": "1f3ec",
        "\ud83c\udfed": "1f3ed",
        "\ud83c\udfee": "1f3ee",
        "\ud83c\udfef": "1f3ef",
        "\ud83c\udff0": "1f3f0",
        "\ud83d\udc0c": "1f40c",
        "\ud83d\udc0d": "1f40d",
        "\ud83d\udc0e": "1f40e",
        "\ud83d\udc11": "1f411",
        "\ud83d\udc12": "1f412",
        "\ud83d\udc14": "1f414",
        "\ud83d\udc17": "1f417",
        "\ud83d\udc18": "1f418",
        "\ud83d\udc19": "1f419",
        "\ud83d\udc1a": "1f41a",
        "\ud83d\udc1b": "1f41b",
        "\ud83d\udc1c": "1f41c",
        "\ud83d\udc1d": "1f41d",
        "\ud83d\udc1e": "1f41e",
        "\ud83d\udc1f": "1f41f",
        "\ud83d\udc20": "1f420",
        "\ud83d\udc21": "1f421",
        "\ud83d\udc22": "1f422",
        "\ud83d\udc23": "1f423",
        "\ud83d\udc24": "1f424",
        "\ud83d\udc25": "1f425",
        "\ud83d\udc26": "1f426",
        "\ud83d\udc27": "1f427",
        "\ud83d\udc28": "1f428",
        "\ud83d\udc29": "1f429",
        "\ud83d\udc2b": "1f42b",
        "\ud83d\udc2c": "1f42c",
        "\ud83d\udc2d": "1f42d",
        "\ud83d\udc2e": "1f42e",
        "\ud83d\udc2f": "1f42f",
        "\ud83d\udc30": "1f430",
        "\ud83d\udc31": "1f431",
        "\ud83d\udc32": "1f432",
        "\ud83d\udc33": "1f433",
        "\ud83d\udc34": "1f434",
        "\ud83d\udc35": "1f435",
        "\ud83d\udc36": "1f436",
        "\ud83d\udc37": "1f437",
        "\ud83d\udc38": "1f438",
        "\ud83d\udc39": "1f439",
        "\ud83d\udc3a": "1f43a",
        "\ud83d\udc3b": "1f43b",
        "\ud83d\udc3c": "1f43c",
        "\ud83d\udc3d": "1f43d",
        "\ud83d\udc3e": "1f43e",
        "\ud83d\udc40": "1f440",
        "\ud83d\udc42": "1f442",
        "\ud83d\udc43": "1f443",
        "\ud83d\udc44": "1f444",
        "\ud83d\udc45": "1f445",
        "\ud83d\udc46": "1f446",
        "\ud83d\udc47": "1f447",
        "\ud83d\udc48": "1f448",
        "\ud83d\udc49": "1f449",
        "\ud83d\udc4a": "1f44a",
        "\ud83d\udc4b": "1f44b",
        "\ud83d\udc4c": "1f44c",
        "\ud83d\udc4d": "1f44d",
        "\ud83d\udc4e": "1f44e",
        "\ud83d\udc4f": "1f44f",
        "\ud83d\udc50": "1f450",
        "\ud83d\udc51": "1f451",
        "\ud83d\udc52": "1f452",
        "\ud83d\udc53": "1f453",
        "\ud83d\udc54": "1f454",
        "\ud83d\udc55": "1f455",
        "\ud83d\udc56": "1f456",
        "\ud83d\udc57": "1f457",
        "\ud83d\udc58": "1f458",
        "\ud83d\udc59": "1f459",
        "\ud83d\udc5a": "1f45a",
        "\ud83d\udc5b": "1f45b",
        "\ud83d\udc5c": "1f45c",
        "\ud83d\udc5d": "1f45d",
        "\ud83d\udc5e": "1f45e",
        "\ud83d\udc5f": "1f45f",
        "\ud83d\udc60": "1f460",
        "\ud83d\udc61": "1f461",
        "\ud83d\udc62": "1f462",
        "\ud83d\udc63": "1f463",
        "\ud83d\udc64": "1f464",
        "\ud83d\udc66": "1f466",
        "\ud83d\udc67": "1f467",
        "\ud83d\udc68": "1f468",
        "\ud83d\udc69": "1f469",
        "\ud83d\udc6a": "1f46a",
        "\ud83d\udc6b": "1f46b",
        "\ud83d\udc6e": "1f46e",
        "\ud83d\udc6f": "1f46f",
        "\ud83d\udc70": "1f470",
        "\ud83d\udc71": "1f471",
        "\ud83d\udc72": "1f472",
        "\ud83d\udc73": "1f473",
        "\ud83d\udc74": "1f474",
        "\ud83d\udc75": "1f475",
        "\ud83d\udc76": "1f476",
        "\ud83d\udc77": "1f477",
        "\ud83d\udc78": "1f478",
        "\ud83d\udc79": "1f479",
        "\ud83d\udc7a": "1f47a",
        "\ud83d\udc7b": "1f47b",
        "\ud83d\udc7c": "1f47c",
        "\ud83d\udc7d": "1f47d",
        "\ud83d\udc7e": "1f47e",
        "\ud83d\udc7f": "1f47f",
        "\ud83d\udc80": "1f480",
        "\ud83d\udcc7": "1f4c7",
        "\ud83d\udc81": "1f481",
        "\ud83d\udc82": "1f482",
        "\ud83d\udc83": "1f483",
        "\ud83d\udc84": "1f484",
        "\ud83d\udc85": "1f485",
        "\ud83d\udcd2": "1f4d2",
        "\ud83d\udc86": "1f486",
        "\ud83d\udcd3": "1f4d3",
        "\ud83d\udc87": "1f487",
        "\ud83d\udcd4": "1f4d4",
        "\ud83d\udc88": "1f488",
        "\ud83d\udcd5": "1f4d5",
        "\ud83d\udc89": "1f489",
        "\ud83d\udcd6": "1f4d6",
        "\ud83d\udc8a": "1f48a",
        "\ud83d\udcd7": "1f4d7",
        "\ud83d\udc8b": "1f48b",
        "\ud83d\udcd8": "1f4d8",
        "\ud83d\udc8c": "1f48c",
        "\ud83d\udcd9": "1f4d9",
        "\ud83d\udc8d": "1f48d",
        "\ud83d\udcda": "1f4da",
        "\ud83d\udc8e": "1f48e",
        "\ud83d\udcdb": "1f4db",
        "\ud83d\udc8f": "1f48f",
        "\ud83d\udcdc": "1f4dc",
        "\ud83d\udc90": "1f490",
        "\ud83d\udcdd": "1f4dd",
        "\ud83d\udc91": "1f491",
        "\ud83d\udcde": "1f4de",
        "\ud83d\udc92": "1f492",
        "\ud83d\udcdf": "1f4df",
        "\ud83d\udce0": "1f4e0",
        "\ud83d\udc93": "1f493",
        "\ud83d\udce1": "1f4e1",
        "\ud83d\udce2": "1f4e2",
        "\ud83d\udc94": "1f494",
        "\ud83d\udce3": "1f4e3",
        "\ud83d\udce4": "1f4e4",
        "\ud83d\udc95": "1f495",
        "\ud83d\udce5": "1f4e5",
        "\ud83d\udce6": "1f4e6",
        "\ud83d\udc96": "1f496",
        "\ud83d\udce7": "1f4e7",
        "\ud83d\udce8": "1f4e8",
        "\ud83d\udc97": "1f497",
        "\ud83d\udce9": "1f4e9",
        "\ud83d\udcea": "1f4ea",
        "\ud83d\udc98": "1f498",
        "\ud83d\udceb": "1f4eb",
        "\ud83d\udcee": "1f4ee",
        "\ud83d\udc99": "1f499",
        "\ud83d\udcf0": "1f4f0",
        "\ud83d\udcf1": "1f4f1",
        "\ud83d\udc9a": "1f49a",
        "\ud83d\udcf2": "1f4f2",
        "\ud83d\udcf3": "1f4f3",
        "\ud83d\udc9b": "1f49b",
        "\ud83d\udcf4": "1f4f4",
        "\ud83d\udcf6": "1f4f6",
        "\ud83d\udc9c": "1f49c",
        "\ud83d\udcf7": "1f4f7",
        "\ud83d\udcf9": "1f4f9",
        "\ud83d\udc9d": "1f49d",
        "\ud83d\udcfa": "1f4fa",
        "\ud83d\udcfb": "1f4fb",
        "\ud83d\udc9e": "1f49e",
        "\ud83d\udcfc": "1f4fc",
        "\ud83d\udd03": "1f503",
        "\ud83d\udc9f": "1f49f",
        "\ud83d\udd0a": "1f50a",
        "\ud83d\udd0b": "1f50b",
        "\ud83d\udca0": "1f4a0",
        "\ud83d\udd0c": "1f50c",
        "\ud83d\udd0d": "1f50d",
        "\ud83d\udca1": "1f4a1",
        "\ud83d\udd0e": "1f50e",
        "\ud83d\udd0f": "1f50f",
        "\ud83d\udca2": "1f4a2",
        "\ud83d\udd10": "1f510",
        "\ud83d\udd11": "1f511",
        "\ud83d\udca3": "1f4a3",
        "\ud83d\udd12": "1f512",
        "\ud83d\udd13": "1f513",
        "\ud83d\udca4": "1f4a4",
        "\ud83d\udd14": "1f514",
        "\ud83d\udd16": "1f516",
        "\ud83d\udca5": "1f4a5",
        "\ud83d\udd17": "1f517",
        "\ud83d\udd18": "1f518",
        "\ud83d\udca6": "1f4a6",
        "\ud83d\udd19": "1f519",
        "\ud83d\udd1a": "1f51a",
        "\ud83d\udca7": "1f4a7",
        "\ud83d\udd1b": "1f51b",
        "\ud83d\udd1c": "1f51c",
        "\ud83d\udca8": "1f4a8",
        "\ud83d\udd1d": "1f51d",
        "\ud83d\udd1e": "1f51e",
        "\ud83d\udca9": "1f4a9",
        "\ud83d\udd1f": "1f51f",
        "\ud83d\udcaa": "1f4aa",
        "\ud83d\udd20": "1f520",
        "\ud83d\udd21": "1f521",
        "\ud83d\udcab": "1f4ab",
        "\ud83d\udd22": "1f522",
        "\ud83d\udd23": "1f523",
        "\ud83d\udcac": "1f4ac",
        "\ud83d\udd24": "1f524",
        "\ud83d\udd25": "1f525",
        "\ud83d\udcae": "1f4ae",
        "\ud83d\udd26": "1f526",
        "\ud83d\udd27": "1f527",
        "\ud83d\udcaf": "1f4af",
        "\ud83d\udd28": "1f528",
        "\ud83d\udd29": "1f529",
        "\ud83d\udcb0": "1f4b0",
        "\ud83d\udd2a": "1f52a",
        "\ud83d\udd2b": "1f52b",
        "\ud83d\udcb1": "1f4b1",
        "\ud83d\udd2e": "1f52e",
        "\ud83d\udcb2": "1f4b2",
        "\ud83d\udd2f": "1f52f",
        "\ud83d\udcb3": "1f4b3",
        "\ud83d\udd30": "1f530",
        "\ud83d\udd31": "1f531",
        "\ud83d\udcb4": "1f4b4",
        "\ud83d\udd32": "1f532",
        "\ud83d\udd33": "1f533",
        "\ud83d\udcb5": "1f4b5",
        "\ud83d\udd34": "1f534",
        "\ud83d\udd35": "1f535",
        "\ud83d\udcb8": "1f4b8",
        "\ud83d\udd36": "1f536",
        "\ud83d\udd37": "1f537",
        "\ud83d\udcb9": "1f4b9",
        "\ud83d\udd38": "1f538",
        "\ud83d\udd39": "1f539",
        "\ud83d\udcba": "1f4ba",
        "\ud83d\udd3a": "1f53a",
        "\ud83d\udd3b": "1f53b",
        "\ud83d\udcbb": "1f4bb",
        "\ud83d\udd3c": "1f53c",
        "\ud83d\udcbc": "1f4bc",
        "\ud83d\udd3d": "1f53d",
        "\ud83d\udd50": "1f550",
        "\ud83d\udcbd": "1f4bd",
        "\ud83d\udd51": "1f551",
        "\ud83d\udcbe": "1f4be",
        "\ud83d\udd52": "1f552",
        "\ud83d\udcbf": "1f4bf",
        "\ud83d\udd53": "1f553",
        "\ud83d\udcc0": "1f4c0",
        "\ud83d\udd54": "1f554",
        "\ud83d\udd55": "1f555",
        "\ud83d\udcc1": "1f4c1",
        "\ud83d\udd56": "1f556",
        "\ud83d\udd57": "1f557",
        "\ud83d\udcc2": "1f4c2",
        "\ud83d\udd58": "1f558",
        "\ud83d\udd59": "1f559",
        "\ud83d\udcc3": "1f4c3",
        "\ud83d\udd5a": "1f55a",
        "\ud83d\udd5b": "1f55b",
        "\ud83d\udcc4": "1f4c4",
        "\ud83d\uddfb": "1f5fb",
        "\ud83d\uddfc": "1f5fc",
        "\ud83d\udcc5": "1f4c5",
        "\ud83d\uddfd": "1f5fd",
        "\ud83d\uddfe": "1f5fe",
        "\ud83d\udcc6": "1f4c6",
        "\ud83d\uddff": "1f5ff",
        "\ud83d\ude01": "1f601",
        "\ud83d\ude02": "1f602",
        "\ud83d\ude03": "1f603",
        "\ud83d\udcc8": "1f4c8",
        "\ud83d\ude04": "1f604",
        "\ud83d\ude05": "1f605",
        "\ud83d\udcc9": "1f4c9",
        "\ud83d\ude06": "1f606",
        "\ud83d\ude09": "1f609",
        "\ud83d\udcca": "1f4ca",
        "\ud83d\ude0a": "1f60a",
        "\ud83d\ude0b": "1f60b",
        "\ud83d\udccb": "1f4cb",
        "\ud83d\ude0c": "1f60c",
        "\ud83d\ude0d": "1f60d",
        "\ud83d\udccc": "1f4cc",
        "\ud83d\ude0f": "1f60f",
        "\ud83d\ude12": "1f612",
        "\ud83d\udccd": "1f4cd",
        "\ud83d\ude13": "1f613",
        "\ud83d\ude14": "1f614",
        "\ud83d\udcce": "1f4ce",
        "\ud83d\ude16": "1f616",
        "\ud83d\ude18": "1f618",
        "\ud83d\udccf": "1f4cf",
        "\ud83d\ude1a": "1f61a",
        "\ud83d\ude1c": "1f61c",
        "\ud83d\udcd0": "1f4d0",
        "\ud83d\ude1d": "1f61d",
        "\ud83d\ude1e": "1f61e",
        "\ud83d\udcd1": "1f4d1",
        "\ud83d\ude20": "1f620",
        "\ud83d\ude21": "1f621",
        "\ud83d\ude22": "1f622",
        "\ud83d\ude23": "1f623",
        "\ud83d\ude24": "1f624",
        "\ud83d\ude25": "1f625",
        "\ud83d\ude28": "1f628",
        "\ud83d\ude29": "1f629",
        "\ud83d\ude2a": "1f62a",
        "\ud83d\ude2b": "1f62b",
        "\ud83d\ude2d": "1f62d",
        "\ud83d\ude30": "1f630",
        "\ud83d\ude31": "1f631",
        "\ud83d\ude32": "1f632",
        "\ud83d\ude33": "1f633",
        "\ud83d\ude35": "1f635",
        "\ud83d\ude37": "1f637",
        "\ud83d\ude38": "1f638",
        "\ud83d\ude39": "1f639",
        "\ud83d\ude3a": "1f63a",
        "\ud83d\ude3b": "1f63b",
        "\ud83d\ude3c": "1f63c",
        "\ud83d\ude3d": "1f63d",
        "\ud83d\ude3e": "1f63e",
        "\ud83d\ude3f": "1f63f",
        "\ud83d\ude40": "1f640",
        "\ud83d\ude45": "1f645",
        "\ud83d\ude46": "1f646",
        "\ud83d\ude47": "1f647",
        "\ud83d\ude48": "1f648",
        "\ud83d\ude49": "1f649",
        "\ud83d\ude4a": "1f64a",
        "\ud83d\ude4b": "1f64b",
        "\ud83d\ude4c": "1f64c",
        "\ud83d\ude4d": "1f64d",
        "\ud83d\ude4e": "1f64e",
        "\ud83d\ude4f": "1f64f",
        "\ud83d\ude80": "1f680",
        "\ud83d\ude83": "1f683",
        "\ud83d\ude84": "1f684",
        "\ud83d\ude85": "1f685",
        "\ud83d\ude87": "1f687",
        "\ud83d\ude89": "1f689",
        "\ud83d\ude8c": "1f68c",
        "\ud83d\ude8f": "1f68f",
        "\ud83d\ude91": "1f691",
        "\ud83d\ude92": "1f692",
        "\ud83d\ude93": "1f693",
        "\ud83d\ude95": "1f695",
        "\ud83d\ude97": "1f697",
        "\ud83d\ude99": "1f699",
        "\ud83d\ude9a": "1f69a",
        "\ud83d\udea2": "1f6a2",
        "\ud83d\udea4": "1f6a4",
        "\ud83d\udea5": "1f6a5",
        "\ud83d\udea7": "1f6a7",
        "\ud83d\udea8": "1f6a8",
        "\ud83d\udea9": "1f6a9",
        "\ud83d\udeaa": "1f6aa",
        "\ud83d\udeab": "1f6ab",
        "\ud83d\udeac": "1f6ac",
        "\ud83d\udead": "1f6ad",
        "\ud83d\udeb2": "1f6b2",
        "\ud83d\udeb6": "1f6b6",
        "\ud83d\udeb9": "1f6b9",
        "\ud83d\udeba": "1f6ba",
        "\ud83d\udebb": "1f6bb",
        "\ud83d\udebc": "1f6bc",
        "\ud83d\udebd": "1f6bd",
        "\ud83d\udebe": "1f6be",
        "\ud83d\udec0": "1f6c0",
        "\ud83e\udd18": "1f918",
        "\ud83d\ude00": "1f600",
        "\ud83d\ude07": "1f607",
        "\ud83d\ude08": "1f608",
        "\ud83d\ude0e": "1f60e",
        "\ud83d\ude10": "1f610",
        "\ud83d\ude11": "1f611",
        "\ud83d\ude15": "1f615",
        "\ud83d\ude17": "1f617",
        "\ud83d\ude19": "1f619",
        "\ud83d\ude1b": "1f61b",
        "\ud83d\ude1f": "1f61f",
        "\ud83d\ude26": "1f626",
        "\ud83d\ude27": "1f627",
        "\ud83d\ude2c": "1f62c",
        "\ud83d\ude2e": "1f62e",
        "\ud83d\ude2f": "1f62f",
        "\ud83d\ude34": "1f634",
        "\ud83d\ude36": "1f636",
        "\ud83d\ude81": "1f681",
        "\ud83d\ude82": "1f682",
        "\ud83d\ude86": "1f686",
        "\ud83d\ude88": "1f688",
        "\ud83d\ude8a": "1f68a",
        "\ud83d\ude8d": "1f68d",
        "\ud83d\ude8e": "1f68e",
        "\ud83d\ude90": "1f690",
        "\ud83d\ude94": "1f694",
        "\ud83d\ude96": "1f696",
        "\ud83d\ude98": "1f698",
        "\ud83d\ude9b": "1f69b",
        "\ud83d\ude9c": "1f69c",
        "\ud83d\ude9d": "1f69d",
        "\ud83d\ude9e": "1f69e",
        "\ud83d\ude9f": "1f69f",
        "\ud83d\udea0": "1f6a0",
        "\ud83d\udea1": "1f6a1",
        "\ud83d\udea3": "1f6a3",
        "\ud83d\udea6": "1f6a6",
        "\ud83d\udeae": "1f6ae",
        "\ud83d\udeaf": "1f6af",
        "\ud83d\udeb0": "1f6b0",
        "\ud83d\udeb1": "1f6b1",
        "\ud83d\udeb3": "1f6b3",
        "\ud83d\udeb4": "1f6b4",
        "\ud83d\udeb5": "1f6b5",
        "\ud83d\udeb7": "1f6b7",
        "\ud83d\udeb8": "1f6b8",
        "\ud83d\udebf": "1f6bf",
        "\ud83d\udec1": "1f6c1",
        "\ud83d\udec2": "1f6c2",
        "\ud83d\udec3": "1f6c3",
        "\ud83d\udec4": "1f6c4",
        "\ud83d\udec5": "1f6c5",
        "\ud83c\udf0d": "1f30d",
        "\ud83c\udf0e": "1f30e",
        "\ud83c\udf10": "1f310",
        "\ud83c\udf12": "1f312",
        "\ud83c\udf16": "1f316",
        "\ud83c\udf17": "1f317",
        "\ud83c\udf18": "1f318",
        "\ud83c\udf1a": "1f31a",
        "\ud83c\udf1c": "1f31c",
        "\ud83c\udf1d": "1f31d",
        "\ud83c\udf1e": "1f31e",
        "\ud83c\udf32": "1f332",
        "\ud83c\udf33": "1f333",
        "\ud83c\udf4b": "1f34b",
        "\ud83c\udf50": "1f350",
        "\ud83c\udf7c": "1f37c",
        "\ud83c\udfc7": "1f3c7",
        "\ud83c\udfc9": "1f3c9",
        "\ud83c\udfe4": "1f3e4",
        "\ud83d\udc00": "1f400",
        "\ud83d\udc01": "1f401",
        "\ud83d\udc02": "1f402",
        "\ud83d\udc03": "1f403",
        "\ud83d\udc04": "1f404",
        "\ud83d\udc05": "1f405",
        "\ud83d\udc06": "1f406",
        "\ud83d\udc07": "1f407",
        "\ud83d\udc08": "1f408",
        "\ud83d\udc09": "1f409",
        "\ud83d\udc0a": "1f40a",
        "\ud83d\udc0b": "1f40b",
        "\ud83d\udc0f": "1f40f",
        "\ud83d\udc10": "1f410",
        "\ud83d\udc13": "1f413",
        "\ud83d\udc15": "1f415",
        "\ud83d\udc16": "1f416",
        "\ud83d\udc2a": "1f42a",
        "\ud83d\udc65": "1f465",
        "\ud83d\udc6c": "1f46c",
        "\ud83d\udc6d": "1f46d",
        "\ud83d\udcad": "1f4ad",
        "\ud83d\udcb6": "1f4b6",
        "\ud83d\udcb7": "1f4b7",
        "\ud83d\udcec": "1f4ec",
        "\ud83d\udced": "1f4ed",
        "\ud83d\udcef": "1f4ef",
        "\ud83d\udcf5": "1f4f5",
        "\ud83d\udd00": "1f500",
        "\ud83d\udd01": "1f501",
        "\ud83d\udd02": "1f502",
        "\ud83d\udd04": "1f504",
        "\ud83d\udd05": "1f505",
        "\ud83d\udd06": "1f506",
        "\ud83d\udd07": "1f507",
        "\ud83d\udd09": "1f509",
        "\ud83d\udd15": "1f515",
        "\ud83d\udd2c": "1f52c",
        "\ud83d\udd2d": "1f52d",
        "\ud83d\udd5c": "1f55c",
        "\ud83d\udd5d": "1f55d",
        "\ud83d\udd5e": "1f55e",
        "\ud83d\udd5f": "1f55f",
        "\ud83d\udd60": "1f560",
        "\ud83d\udd61": "1f561",
        "\ud83d\udd62": "1f562",
        "\ud83d\udd63": "1f563",
        "\ud83d\udd64": "1f564",
        "\ud83d\udd65": "1f565",
        "\ud83d\udd66": "1f566",
        "\ud83d\udd67": "1f567",
        "\ud83d\udd08": "1f508",
        "\ud83d\ude8b": "1f68b",
        "\ud83c\udfc5": "1f3c5",
        "\ud83c\udff4": "1f3f4",
        "\ud83d\udcf8": "1f4f8",
        "\ud83d\udecc": "1f6cc",
        "\ud83d\udd95": "1f595",
        "\ud83d\udd96": "1f596",
        "\ud83d\ude41": "1f641",
        "\ud83d\ude42": "1f642",
        "\ud83d\udeeb": "1f6eb",
        "\ud83d\udeec": "1f6ec",
        "\ud83c\udffb": "1f3fb",
        "\ud83c\udffc": "1f3fc",
        "\ud83c\udffd": "1f3fd",
        "\ud83c\udffe": "1f3fe",
        "\ud83c\udfff": "1f3ff",
        "\ud83d\ude43": "1f643",
        "\ud83e\udd11": "1f911",
        "\ud83e\udd13": "1f913",
        "\ud83e\udd17": "1f917",
        "\ud83d\ude44": "1f644",
        "\ud83e\udd14": "1f914",
        "\ud83e\udd10": "1f910",
        "\ud83e\udd12": "1f912",
        "\ud83e\udd15": "1f915",
        "\ud83e\udd16": "1f916",
        "\ud83e\udd81": "1f981",
        "\ud83e\udd84": "1f984",
        "\ud83e\udd82": "1f982",
        "\ud83e\udd80": "1f980",
        "\ud83e\udd83": "1f983",
        "\ud83e\uddc0": "1f9c0",
        "\ud83c\udf2d": "1f32d",
        "\ud83c\udf2e": "1f32e",
        "\ud83c\udf2f": "1f32f",
        "\ud83c\udf7f": "1f37f",
        "\ud83c\udf7e": "1f37e",
        "\ud83c\udff9": "1f3f9",
        "\ud83c\udffa": "1f3fa",
        "\ud83d\uded0": "1f6d0",
        "\ud83d\udd4b": "1f54b",
        "\ud83d\udd4c": "1f54c",
        "\ud83d\udd4d": "1f54d",
        "\ud83d\udd4e": "1f54e",
        "\ud83d\udcff": "1f4ff",
        "\ud83c\udfcf": "1f3cf",
        "\ud83c\udfd0": "1f3d0",
        "\ud83c\udfd1": "1f3d1",
        "\ud83c\udfd2": "1f3d2",
        "\ud83c\udfd3": "1f3d3",
        "\ud83c\udff8": "1f3f8",
        "\u23e9": "23e9",
        "\u23ea": "23ea",
        "\u23eb": "23eb",
        "\u23ec": "23ec",
        "\u23f0": "23f0",
        "\u23f3": "23f3",
        "\u26ce": "26ce",
        "\u2705": "2705",
        "\u270a": "270a",
        "\u270b": "270b",
        "\u2728": "2728",
        "\u274c": "274c",
        "\u274e": "274e",
        "\u2753": "2753",
        "\u2754": "2754",
        "\u2755": "2755",
        "\u2795": "2795",
        "\u2796": "2796",
        "\u2797": "2797",
        "\u27b0": "27b0",
        "\u27bf": "27bf",
        "\u00a9": "00a9",
        "\u00ae": "00ae",
        "\u203c": "203c",
        "\u2049": "2049",
        "\u2122": "2122",
        "\u2139": "2139",
        "\u2194": "2194",
        "\u2195": "2195",
        "\u2196": "2196",
        "\u2197": "2197",
        "\u2198": "2198",
        "\u2199": "2199",
        "\u21a9": "21a9",
        "\u21aa": "21aa",
        "\u231a": "231a",
        "\u231b": "231b",
        "\u24c2": "24c2",
        "\u25aa": "25aa",
        "\u25ab": "25ab",
        "\u25b6": "25b6",
        "\u25c0": "25c0",
        "\u25fb": "25fb",
        "\u25fc": "25fc",
        "\u25fd": "25fd",
        "\u25fe": "25fe",
        "\u2600": "2600",
        "\u2601": "2601",
        "\u260e": "260e",
        "\u2611": "2611",
        "\u2614": "2614",
        "\u2615": "2615",
        "\u261d": "261d",
        "\u263a": "263a",
        "\u2648": "2648",
        "\u2649": "2649",
        "\u264a": "264a",
        "\u264b": "264b",
        "\u264c": "264c",
        "\u264d": "264d",
        "\u264e": "264e",
        "\u264f": "264f",
        "\u2650": "2650",
        "\u2651": "2651",
        "\u2652": "2652",
        "\u2653": "2653",
        "\u2660": "2660",
        "\u2663": "2663",
        "\u2665": "2665",
        "\u2666": "2666",
        "\u2668": "2668",
        "\u267b": "267b",
        "\u267f": "267f",
        "\u2693": "2693",
        "\u26a0": "26a0",
        "\u26a1": "26a1",
        "\u26aa": "26aa",
        "\u26ab": "26ab",
        "\u26bd": "26bd",
        "\u26be": "26be",
        "\u26c4": "26c4",
        "\u26c5": "26c5",
        "\u26d4": "26d4",
        "\u26ea": "26ea",
        "\u26f2": "26f2",
        "\u26f3": "26f3",
        "\u26f5": "26f5",
        "\u26fa": "26fa",
        "\u26fd": "26fd",
        "\u2702": "2702",
        "\u2708": "2708",
        "\u2709": "2709",
        "\u270c": "270c",
        "\u270f": "270f",
        "\u2712": "2712",
        "\u2714": "2714",
        "\u2716": "2716",
        "\u2733": "2733",
        "\u2734": "2734",
        "\u2744": "2744",
        "\u2747": "2747",
        "\u2757": "2757",
        "\u2764": "2764",
        "\u27a1": "27a1",
        "\u2934": "2934",
        "\u2935": "2935",
        "\u2b05": "2b05",
        "\u2b06": "2b06",
        "\u2b07": "2b07",
        "\u2b1b": "2b1b",
        "\u2b1c": "2b1c",
        "\u2b50": "2b50",
        "\u2b55": "2b55",
        "\u3030": "3030",
        "\u303d": "303d",
        "\u3297": "3297",
        "\u3299": "3299",
        "\ud83c\udc04": "1f004",
        "\ud83c\udd7f": "1f17f",
        "\ud83c\ude02": "1f202",
        "\ud83c\ude1a": "1f21a",
        "\ud83c\ude2f": "1f22f",
        "\ud83c\ude37": "1f237",
        "\ud83c\udf9e": "1f39e",
        "\ud83c\udf9f": "1f39f",
        "\ud83c\udfcb": "1f3cb",
        "\ud83c\udfcc": "1f3cc",
        "\ud83c\udfcd": "1f3cd",
        "\ud83c\udfce": "1f3ce",
        "\ud83c\udf96": "1f396",
        "\ud83c\udf97": "1f397",
        "\ud83c\udf36": "1f336",
        "\ud83c\udf27": "1f327",
        "\ud83c\udf28": "1f328",
        "\ud83c\udf29": "1f329",
        "\ud83c\udf2a": "1f32a",
        "\ud83c\udf2b": "1f32b",
        "\ud83c\udf2c": "1f32c",
        "\ud83d\udc3f": "1f43f",
        "\ud83d\udd77": "1f577",
        "\ud83d\udd78": "1f578",
        "\ud83c\udf21": "1f321",
        "\ud83c\udf99": "1f399",
        "\ud83c\udf9a": "1f39a",
        "\ud83c\udf9b": "1f39b",
        "\ud83c\udff3": "1f3f3",
        "\ud83c\udff5": "1f3f5",
        "\ud83c\udff7": "1f3f7",
        "\ud83d\udcfd": "1f4fd",
        "\u271d": "271d",
        "\ud83d\udd49": "1f549",
        "\ud83d\udd4a": "1f54a",
        "\ud83d\udd6f": "1f56f",
        "\ud83d\udd70": "1f570",
        "\ud83d\udd73": "1f573",
        "\ud83d\udd76": "1f576",
        "\ud83d\udd79": "1f579",
        "\ud83d\udd87": "1f587",
        "\ud83d\udd8a": "1f58a",
        "\ud83d\udd8b": "1f58b",
        "\ud83d\udd8c": "1f58c",
        "\ud83d\udd8d": "1f58d",
        "\ud83d\udda5": "1f5a5",
        "\ud83d\udda8": "1f5a8",
        "\u2328": "2328",
        "\ud83d\uddb2": "1f5b2",
        "\ud83d\uddbc": "1f5bc",
        "\ud83d\uddc2": "1f5c2",
        "\ud83d\uddc3": "1f5c3",
        "\ud83d\uddc4": "1f5c4",
        "\ud83d\uddd1": "1f5d1",
        "\ud83d\uddd2": "1f5d2",
        "\ud83d\uddd3": "1f5d3",
        "\ud83d\udddc": "1f5dc",
        "\ud83d\udddd": "1f5dd",
        "\ud83d\uddde": "1f5de",
        "\ud83d\udde1": "1f5e1",
        "\ud83d\udde3": "1f5e3",
        "\ud83d\uddef": "1f5ef",
        "\ud83d\uddf3": "1f5f3",
        "\ud83d\uddfa": "1f5fa",
        "\ud83d\udee0": "1f6e0",
        "\ud83d\udee1": "1f6e1",
        "\ud83d\udee2": "1f6e2",
        "\ud83d\udef0": "1f6f0",
        "\ud83c\udf7d": "1f37d",
        "\ud83d\udc41": "1f441",
        "\ud83d\udd74": "1f574",
        "\ud83d\udd75": "1f575",
        "\u270d": "270d",
        "\ud83d\udd90": "1f590",
        "\ud83c\udfd4": "1f3d4",
        "\ud83c\udfd5": "1f3d5",
        "\ud83c\udfd6": "1f3d6",
        "\ud83c\udfd7": "1f3d7",
        "\ud83c\udfd8": "1f3d8",
        "\ud83c\udfd9": "1f3d9",
        "\ud83c\udfda": "1f3da",
        "\ud83c\udfdb": "1f3db",
        "\ud83c\udfdc": "1f3dc",
        "\ud83c\udfdd": "1f3dd",
        "\ud83c\udfde": "1f3de",
        "\ud83c\udfdf": "1f3df",
        "\ud83d\udecb": "1f6cb",
        "\ud83d\udecd": "1f6cd",
        "\ud83d\udece": "1f6ce",
        "\ud83d\udecf": "1f6cf",
        "\ud83d\udee3": "1f6e3",
        "\ud83d\udee4": "1f6e4",
        "\ud83d\udee5": "1f6e5",
        "\ud83d\udee9": "1f6e9",
        "\ud83d\udef3": "1f6f3",
        "\u23ed": "23ed",
        "\u23ee": "23ee",
        "\u23ef": "23ef",
        "\u23f1": "23f1",
        "\u23f2": "23f2",
        "\u23f8": "23f8",
        "\u23f9": "23f9",
        "\u23fa": "23fa",
        "\u2602": "2602",
        "\u2603": "2603",
        "\u2604": "2604",
        "\u2618": "2618",
        "\u2620": "2620",
        "\u2622": "2622",
        "\u2623": "2623",
        "\u2626": "2626",
        "\u262a": "262a",
        "\u262e": "262e",
        "\u262f": "262f",
        "\u2638": "2638",
        "\u2639": "2639",
        "\u2692": "2692",
        "\u2694": "2694",
        "\u2696": "2696",
        "\u2697": "2697",
        "\u2699": "2699",
        "\u269b": "269b",
        "\u269c": "269c",
        "\u26b0": "26b0",
        "\u26b1": "26b1",
        "\u26c8": "26c8",
        "\u26cf": "26cf",
        "\u26d1": "26d1",
        "\u26d3": "26d3",
        "\u26e9": "26e9",
        "\u26f0": "26f0",
        "\u26f1": "26f1",
        "\u26f4": "26f4",
        "\u26f7": "26f7",
        "\u26f8": "26f8",
        "\u26f9": "26f9",
        "\u2721": "2721",
        "\u2763": "2763",
        "\ud83c\udf24": "1f324",
        "\ud83c\udf25": "1f325",
        "\ud83c\udf26": "1f326",
        "\ud83d\uddb1": "1f5b1"
    };
    b.imagePathPNG = "//opensooqui.os-cdn.com/os_web/emojis/";
    b.imagePathSVG = "//cdn.jsdelivr.net/emojione/assets/svg/";
    b.imagePathSVGSprites = "./../assets/sprites/emojione.sprites.svg";
    b.imageType = "png";
    b.sprites = !1;
    b.unicodeAlt = !0;
    b.ascii = !1;
    b.cacheBustParam = "?v=2.1.1";
    b.regShortNames = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" +
        b.shortnames + ")", "gi");
    b.regAscii = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)" + b.asciiRegexp + "(?=\\s|$|[!,.?]))", "g");
    b.regUnicode = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + b.unicodeRegexp + ")", "gi");
    b.toImage = function (a) {
        a = b.unicodeToImage(a);
        return a = b.shortnameToImage(a)
    };
    b.unifyUnicode = function (a) {
        a = b.toShort(a);
        return a = b.shortnameToUnicode(a)
    };
    b.shortnameToAscii =
        function (a) {
            var c, e = b.objectFlip(b.asciiList);
            return a = a.replace(b.regShortNames, function (a) {
                return "undefined" !== typeof a && "" !== a && a in b.emojioneList ? (c = b.emojioneList[a][b.emojioneList[a].length - 1], "undefined" !== typeof e[c] ? e[c] : a) : a
            })
        };
    b.shortnameToUnicode = function (a) {
        var c;
        a = a.replace(b.regShortNames, function (a) {
            if ("undefined" === typeof a || "" === a || !(a in b.emojioneList))return a;
            c = b.emojioneList[a][0].toUpperCase();
            return b.convert(c)
        });
        b.ascii && (a = a.replace(b.regAscii, function (a, e, f, p) {
            if ("undefined" === typeof p || "" === p || !(b.unescapeHTML(p) in b.asciiList))return a;
            p = b.unescapeHTML(p);
            c = b.asciiList[p].toUpperCase();
            return f + b.convert(c)
        }));
        return a
    };
    b.shortnameToImage = function (a) {
        var c, e, h;
        a = a.replace(b.regShortNames, function (a) {
            return "undefined" !== typeof a && "" !== a && a in b.emojioneList ? (e = b.emojioneList[a][b.emojioneList[a].length - 1], h = b.unicodeAlt ? b.convert(e.toUpperCase()) : a, c = "png" === b.imageType ? b.sprites ? '<span class="emojione-' + e + '" title="' + a + '">' + h + "</span>" : '<img class="emojione" alt="' + h +
            '" src="' + b.imagePathPNG + e + ".png" + b.cacheBustParam + '"/>' : b.sprites ? '<svg class="emojione"><description>' + h + '</description><use xlink:href="' + b.imagePathSVGSprites + "#emoji-" + e + '"></use></svg>' : '<object class="emojione" data="' + b.imagePathSVG + e + ".svg" + b.cacheBustParam + '" type="image/svg+xml" standby="' + h + '">' + h + "</object>") : a
        });
        b.ascii && (a = a.replace(b.regAscii, function (a, p, r, m) {
            if ("undefined" === typeof m || "" === m || !(b.unescapeHTML(m) in b.asciiList))return a;
            m = b.unescapeHTML(m);
            e = b.asciiList[m];
            h = b.unicodeAlt ?
                b.convert(e.toUpperCase()) : b.escapeHTML(m);
            return c = "png" === b.imageType ? b.sprites ? r + '<span class="emojione-' + e + '" title="' + b.escapeHTML(m) + '">' + h + "</span>" : r + '<img class="emojione" alt="' + h + '" src="' + b.imagePathPNG + e + ".png" + b.cacheBustParam + '"/>' : b.sprites ? '<svg class="emojione"><description>' + h + '</description><use xlink:href="' + b.imagePathSVGSprites + "#emoji-" + e + '"></use></svg>' : r + '<object class="emojione" data="' + b.imagePathSVG + e + ".svg" + b.cacheBustParam + '" type="image/svg+xml" standby="' + h + '">' +
            h + "</object>"
        }));
        return a
    };
    b.unicodeToImage = function (a) {
        var c, e, h;
        if (!b.unicodeAlt || b.sprites)var f = b.mapShortToUnicode();
        return a = a.replace(b.regUnicode, function (a) {
            return "undefined" !== typeof a && "" !== a && a in b.jsEscapeMap ? (e = b.jsEscapeMap[a], h = b.unicodeAlt ? b.convert(e.toUpperCase()) : f[e], c = "png" === b.imageType ? b.sprites ? '<span class="emojione-' + e + '" title="' + f[e] + '">' + h + "</span>" : '<img class="emojione" alt="" src="' + b.imagePathPNG + e + ".png" + b.cacheBustParam + '"/>' : b.sprites ? '<svg class="emojione"><description>' +
            h + '</description><use xlink:href="' + b.imagePathSVGSprites + "#emoji-" + e + '"></use></svg>' : '<img class="emojione" alt="' + h + '" src="' + b.imagePathSVG + e + ".svg" + b.cacheBustParam + '"/>') : a
        })
    };
    b.toShort = function (a) {
        for (var c in b.emojioneList)if (b.emojioneList.hasOwnProperty(c))for (var e = 0, h = b.emojioneList[c].length; e < h; e++)a = b.replaceAll(a, b.convert(b.emojioneList[c][e].toUpperCase()), c);
        return a
    };
    b.convert = function (a) {
        if (-1 < a.indexOf("-")) {
            var b = [];
            a = a.split("-");
            for (var c = 0; c < a.length; c++) {
                var e = parseInt(a[c],
                    16);
                if (65536 <= e && 1114111 >= e)var f = Math.floor((e - 65536) / 1024) + 55296, e = (e - 65536) % 1024 + 56320, e = String.fromCharCode(f) + String.fromCharCode(e); else e = String.fromCharCode(e);
                b.push(e)
            }
            return b.join("")
        }
        a = parseInt(a, 16);
        return 65536 <= a && 1114111 >= a ? (f = Math.floor((a - 65536) / 1024) + 55296, e = (a - 65536) % 1024 + 56320, String.fromCharCode(f) + String.fromCharCode(e)) : String.fromCharCode(a)
    };
    b.escapeHTML = function (a) {
        var b = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"};
        return a.replace(/[&<>"']/g, function (a) {
            return b[a]
        })
    };
    b.unescapeHTML = function (a) {
        var b = {
            "&amp;": "&",
            "&#38;": "&",
            "&#x26;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&#x3C;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&#x3E;": ">",
            "&quot;": '"',
            "&#34;": '"',
            "&#x22;": '"',
            "&apos;": "'",
            "&#39;": "'",
            "&#x27;": "'"
        };
        return a.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/ig, function (a) {
            return b[a]
        })
    };
    b.mapShortToUnicode = function () {
        var a = {}, c;
        for (c in b.emojioneList)if (b.emojioneList.hasOwnProperty(c))for (var e = 0, h = b.emojioneList[c].length; e < h; e++)a[b.emojioneList[c][e]] =
            c;
        return a
    };
    b.objectFlip = function (a) {
        var b, c = {};
        for (b in a)a.hasOwnProperty(b) && (c[a[b]] = b);
        return c
    };
    b.escapeRegExp = function (a) {
        return a.replace(/[-[\]{}()*+?.,;:&\\^$|#\s]/g, "\\$&")
    };
    b.replaceAll = function (a, c, e) {
        c = b.escapeRegExp(c);
        return a.replace(new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + c + ")", "gi"), function (a, b) {
            return "undefined" === typeof b || "" === b ? a : e
        })
    }
})(this.emojione = this.emojione || {});
"object" === typeof module && (module.exports = this.emojione);
$(document).ready(function () {
    setTimeout(function () {
        $(".ta").mbSmilesBox()
    }, 300)
});
function runEmoji() {
    $(".ta").mbSmilesBox();
    $(".blue:last-child > .msg, .myMessage:last-child > .msg").emoticonize(!0).show()
}
function ins2pos(b, e) {
    var c = document.getElementById(e), a = c.value, d = a.substring(0, c.selectionStart), a = a.substring(c.selectionEnd, a.length);
    c.value = d + b + a;
    setCursor(c, d.length + b.length)
}
function setCursor(b, e) {
    if (b.setSelectionRange)b.focus(), b.setSelectionRange(e, e); else if (b.createTextRange) {
        var c = b.createTextRange();
        c.collapse(!0);
        c.moveEnd("character", e);
        c.moveStart("character", e);
        c.select()
    }
}
Array.remove = function (b, e, c) {
    c = b.slice((c || e) + 1 || b.length);
    b.length = 0 > e ? b.length + e : e;
    return b.push.apply(b, c)
};
var total_popups = 0, popups = [];
function close_popup(b) {
    $("#" + b).find(".popup-messages").removeAttr("style");
    for (var e = 0; e < popups.length; e++)if (b == popups[e]) {
        Array.remove(popups, e);
        $("#" + b).fadeOut("fast").remove();
        calculate_popups();
        break
    }
    var e = readCookie("chatBoxs"), e = JSON.parse(e), c = {boxs: []};
    "undefined" != typeof e && ($.each(e.boxs, function (a, d) {
        d.pid + "-" + d.oid + "-" + d.uid != b && c.boxs.push(d)
    }), eraseCookie("chatBoxs"), createCookie("chatBoxs", JSON.stringify(c), 2))
}
function minimize_popup(b, e, c) {
    var a = $("#" + b).find(".popup-messages");
    "undefined" == typeof e ? a.animate({height: 0}, 200, function () {
        $(this).addClass("minimized hide");
        $(this).prev(".userWindowTop").addClass("minimizedTop")
    }) : (a.css("height", 0), a.addClass("minimized hide"), c && a.prev(".userWindowTop").addClass("minimizedTop"));
    $("#" + b).find(".windowAction").fadeOut("fast");
    $("#" + b + " .userWindowTop").attr("data-opened", "false");
    storePopupsToCookie();
    return !1
}
function maximize_popup(b) {
    var e = $(b).parents(".userWindow ").attr("id");
    window.markNotSeen = jQuery.grep(window.markNotSeen, function (b) {
        return b !== e
    });
    $(this).prev().removeClass("minimizedTop");
    b = $("#" + e).find(".popup-messages");
    b.hasClass("minimized") ? (b.removeClass("hide"), b.animate({height: 301}, 200, function () {
        $(this).removeClass("minimized");
        $(this).removeAttr("style");
        $(this).prev(".userWindowTop").removeClass("minimizedTop")
    }), $("#" + e).find(".windowAction").fadeIn("fast"), $("#" + e + " .userWindowTop").attr("data-opened",
        "true")) : (minimize_popup(e), $("#" + e).find(".windowAction").fadeOut("fast"));
    $("#" + e + " .userWindowTop .popupUnread").remove();
    b = e.split("-");
    $("#" + e + ' .userWindowTop .popup-head-left a [data-role="chat-online"]').length || (b = webChat.getLoggedUser().id == b[1] ? b[2] : b[1], $("#" + e + " .userWindowTop .popup-head-left a").html('<span data-role="chat-online" data-user-id="' + b + '" class="chatWindowStatus fLeft"></span>' + $("#" + e + " .userWindowTop .popup-head-left a").html()));
    storePopupsToCookie();
    return !1
}
function display_popups() {
    var b = 20, e = 0;
    for (e; e < total_popups; e++)if (void 0 != popups[e]) {
        var c = $("#" + popups[e]);
        c.css("right", b);
        b += 280;
        c.css("display", "block");
        registerChatAttachment($("#upload-" + popups[e] + "-upload1"));
        registerChatAttachment($("#upload-" + popups[e] + "-upload2"));
        registerChatAttachment($("#upload-" + popups[e] + "-upload3"))
    }
    $(".chatList").html("");
    for (b = e; b < popups.length; b++)c = $('<div class="hiddenChat overflowHidden"><span class="icon-cross97 closeHiddenChat" data-room-id="' + popups[b] + '"></span><span class="chat-name openHiddenPopup" data-room-id="' +
        popups[b] + '"></span></div>'), $(".chatListHolder").show(), $("#" + popups[b]).hide(), c.find(".chat-name").text($("#" + popups[b] + " .chatWindowName").text()), $(".chatNotNumb").text(b - total_popups + 1), $(".chatList").append(c), registerChatAttachment($("#upload-" + popups[e] + "-upload1")), registerChatAttachment($("#upload-" + popups[e] + "-upload2")), registerChatAttachment($("#upload-" + popups[e] + "-upload3"));
    popups.length <= total_popups && $(".chatListHolder").hide();
    storePopupsToCookie()
}
$("body").on("click", ".chatNotification", function () {
    $(this).hasClass("clicked") ? ($(".chatList").show(), $(this).removeClass("clicked")) : ($(".chatList").hide(), $(this).addClass("clicked"))
});
$("body").on("click", ".openHiddenPopup", function () {
    for (var b = $(this).data("room-id"), e = 0; e < popups.length; e++)if (b == popups[e]) {
        Array.remove(popups, e);
        break
    }
    popups.unshift(b);
    display_popups()
});
$("body").on("click", ".closeHiddenChat", function () {
    var b = $(this).data("room-id");
    close_popup(b)
});
function register_popup(b, e) {
    $.fancybox.close();
    b = $(b);
    var c = b.attr("data-pid"), a = b.attr("data-oid"), d = b.attr("data-uid"), k = b.attr("data-post-img"), h = b.attr("data-post-href"), f = b.attr("data-post-title"), p = b.attr("data-post-country"), r = b.attr("data-recipient-name"), m = b.attr("data-recipient-avatar"), v = b.attr("data-price"), w = !0;
    gravityEvent("LETTER_SEND", c.toString());
    "false" == b.attr("data-opened") && (w = !1);
    var x = c + "-" + a + "-" + d, n;
    n = webChat.getLoggedUser().id == a ? d : a;
    for (var q = 0; q < popups.length; q++)if (x ==
        popups[q]) {
        Array.remove(popups, q);
        popups.unshift(x);
        calculate_popups();
        return
    }
    q = $($("#template #mainBox").html());
    chat.watch(!0, [a, d]);
    q.attr("id", x);
    q.find('[data-role="chat-receiver-name"]').text(15 < r.length ? r.substr(0, 15) + "..." : r);
    q.find('[data-role="user-profile-href"]').attr("href", "/" + window.lang + "/mid/" + n);
    q.find('[data-role="chat-close-popup"]').attr("href", "javascript:close_popup('" + x + "');");
    q.find('[data-role="chat-minimize-popup"]').attr("onClick", "javascript:minimize_popup('" + x + "');");
    q.find('[data-role="chat-fullpage"]').attr("href", "/" + window.lang + "/message/chat-center#all/" + x);
    q.find('[data-role="chat-post-img"]').attr("src", k);
    q.find('[data-role="chat-online"]').attr("data-user-id", a);
    q.find('[data-role="chat-post-title"]').text(13 < f.length ? f.substr(0, 13) + "..." : f);
    q.find('[data-role="chat-post-href"]').attr("href", h);
    q.find('[data-role="chat-post-price"]').text(v);
    q.find('[data-role="chat-input"]').attr({"data-pid": c, "data-oid": a, "data-uid": d});
    q.find('[data-role="chat-send"]').attr({
        "data-pid": c,
        "data-oid": a,
        "data-uid": d,
        "data-post-img": k,
        "data-post-title": f,
        "data-recipient-name": r,
        "data-recipient-avatar": m,
        "data-post-country": p
    });
    q.find('[data-role="blockRoom"]').attr("onclick", 'webChat.block("' + x + '")');
    q.find('[data-role="blocked-msg"]').attr("data-block-id", n);
    q.find('ul [data-role="chat-upload"]').each(function () {
        var a = $(this).attr("id");
        $(this).attr("id", "upload-" + x + "-" + a);
        $(this).next().attr("for", "upload-" + x + "-" + a)
    });
    $("body").append(q);
    w || ("undefined" == typeof e && (e = !1), minimize_popup(x,
        !0, e));
    setTimeout(function () {
        webChat.switchRoom(x);
        webChat.isBlocked(parseInt(n))
    }, 100);
    popups.unshift(x);
    calculate_popups();
    $(".ta").mbSmilesBox()
}
function calculate_popups() {
    var b = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    total_popups = 540 > b ? 0 : parseInt((b - 200) / 320);
    storePopupsToCookie();
    display_popups()
}
isiPad = null != navigator.userAgent.match(/iPad/i);
$(".chatTabsWrap .content").length && 0 == isiPad && setTimeout(function () {
    myScroll2 = new IScroll("#wrapper2", {
        scrollbars: !0,
        mouseWheel: !0,
        interactiveScrollbars: !0,
        shrinkScrollbars: "scale",
        fadeScrollbars: !0,
        disableMouse: !0
    })
}, 500);
function scrollChatWindow() {
    setTimeout(function () {
        $(".chatTabsWrap .content").length && 0 == isiPad && void 0 != typeof myScroll2 && (myScroll2.refresh(), myScroll2.scrollTo(0, myScroll2.maxScrollY, 0))
    }, 300)
}
function getBoxDetails(b) {
    var e = $("#" + b), c = b.split("-");
    return {
        pid: c[0],
        oid: c[1],
        uid: c[2],
        post_img: e.find('[data-role="chat-post-img"]').attr("src"),
        post_href: e.find('[data-role="chat-post-href"]').attr("href"),
        post_title: e.find('[data-role="chat-post-title"]').text(),
        post_country: e.find('[data-role="chat-send"]').attr("data-post-country"),
        recipient_name: e.find('[data-role="chat-receiver-name"]').text(),
        price: e.find('[data-role="chat-post-price"]').text(),
        opened: $("#" + b + " .userWindowTop").attr("data-opened")
    }
}
function storePopupsToCookie() {
    var b = {boxs: []};
    for (i = 0; i < popups.length; i++)b.boxs.push(getBoxDetails(popups[i]));
    createCookie("chatBoxs", JSON.stringify(b), 2)
}
$(document).ready(function () {
    $("body").on("click", "[data-media-type]", function () {
        var b = $(this).attr("data-media-type"), c = $(this).attr("data-source1"), a = $(this).attr("data-source2");
        "video" == b ? $("#mediaPopup").html('<video controls autoplay><source data-role="source1" src="' + c + '" type="video/mp4"><source data-role="source2" src="' + a + '" type="video/ogg">Your browser does not support HTML5 video. </video>') : $("#mediaPopup").html('<audio controls autoplay><source data-role="source1" src="' + c + '" type="audio/mp3"><source data-role="source2" src="' +
            a + '" type="audio/ogg">Your browser does not support HTML5 video. </video>');
        $("#mediaPopup").removeClass("audio").removeClass("video").addClass($(this).attr("data-media-type"));
        $.fancybox("#mediaPopup");
        setTimeout(function () {
            $.fancybox.update()
        }, 4E3);
        $("video").attr("height", 70 * $(window).height() / 100 + "px")
    });
    setInterval(checkChatFiles, 1E3);
    registerChatAttachment();
    $("a.fancybox").fancybox();
    var b = [];
    $.map($('[data-role="chat-online"]'), function (e) {
        e = $(e).attr("data-user-id");
        "" != e && (e = parseInt(e),
        -1 === $.inArray(e, b) && b.push(e))
    });
    setTimeout(function () {
        webChat.watch(!1, b)
    }, 100);
    $("body").on("keypress", '[data-role="chat-input"]', function (b) {
        if (13 == b.which)return 1 < $('[data-role="chat-send"]').length ? ($(b.target).closest(".userWindowInput").find('[data-role="chat-send"]').trigger("click"), $(b.target).focus()) : $('[data-role="chat-send"]').trigger("click"), !1
    });
    $("body").on("click", ".userWindowTop", function () {
        "true" == $(this).attr("data-opened") && webChat.switchRoom($(this).closest(".chat-popup").attr("id"));
        return !0
    });
    $("body.post-create, body.message-chat-center").length || (window.addEventListener ? (window.addEventListener("resize", calculate_popups, !1), window.addEventListener("load", calculate_popups, !1)) : (window.attachEvent("resize", calculate_popups), window.attachEvent("load", calculate_popups)), setTimeout(function () {
        var b = readCookie("chatBoxs");
        "undefined" != typeof b && (b = JSON.parse(b), b.boxs.reverse(), $.each(b.boxs, function (b, a) {
            var d = $("<div>", {
                "data-pid": a.pid,
                "data-oid": a.oid,
                "data-uid": a.uid,
                "data-post-img": a.post_img,
                "data-post-title": a.post_title,
                "data-post-country": a.post_country,
                "data-post-href": a.post_href,
                "data-recipient-name": a.recipient_name,
                "data-recipient-avatar": a.recipient_avatar,
                "data-price": a.price,
                "data-opened": a.opened
            });
            register_popup(d)
        }))
    }, 10));
    registerMemberCard()
});
function handleMyProfileCount(b) {
    $.each(b, function (b, c) {
        var a = 0, d;
        $.each(c.rooms, function (b, c) {
            "undefined" == typeof d && (d = c.uid);
            a += c.unread
        });
        var k = "/" + window.lang + "/message/chat-center#all/" + c.pid + "-" + c.oid + "-" + d;
        $('tr[data-key="' + c.pid + '"] .my_ad_title .chatMsgs').remove();
        $('tr[data-key="' + c.pid + '"] .my_ad_title').prepend('<a href="' + k + '" class="chatMsgs ' + (0 < a ? "new" : null) + '"><span class="icon-chatIcon"></span><span>' + a + " " + JS["js.new_chats"] + "</span></a>")
    })
}
function registerChatAttachment(b) {
    var e = "/" + window.lang + "/site/chat-upload", c = "";
    if (void 0 == b)c = $(".popup-box[id] .uploadFile, body.message-chat-center .uploadFile"); else {
        if (void 0 != b.data("blueimpFileupload"))return;
        c = b
    }
    c.fileupload({
        url: e,
        dataType: "json",
        autoUpload: !0,
        maxFileSize: chatUploadMaxFileSize,
        disableImageResize: /Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),
        previewMaxWidth: 93,
        previewMaxHeight: 93,
        previewCrop: !1,
        add: function (a, b) {
            var c = [];
            b.files[0].size > chatUploadMaxFileSize &&
            c.push(uploadErrorFileSize);
            0 < c.length ? ($(".help-block").html(c.join("<br/>")), $(".inputHolder,.chatInputWrapper").addClass("has-error"), $(".chatInputWrapper .mbSmilesButton").addClass("emojiWithError")) : ($(".help-block").html(""), $(".inputHolder,.chatInputWrapper").removeClass("has-error"), $(".chatInputWrapper .mbSmilesButton").removeClass("emojiWithError"), b.submit(), $("#fileupload").fileupload("disable"))
        },
        send: function (a, b) {
            $(a.target).closest(".chat-popup").length ? $(a.target).closest(".chat-popup").find('.uploadOptions [data-role="chatUploading"]').removeClass("hide") :
                $('[data-role="chatUploading"]').show()
        },
        done: function (a, b) {
            $(a.target).closest(".chat-popup").length ? $(a.target).closest(".chat-popup").find('.uploadOptions [data-role="chatUploading"]').hide() : $('[data-role="chatUploading"]').hide()
        },
        fail: function (a, b) {
            $(a.target).closest(".chat-popup").length ? ($(a.target).closest(".chat-popup").find('.uploadOptions [data-role="chatUploading"]').hide(), $(a.target).closest(".chat-popup").find('.uploadOptions [data-role="chatUploadingError"]').removeClass("hide")) :
                ($('[data-role="chatUploading"]').hide(), $('[data-role="chatUploadingError"]').show())
        }
    }).on("fileuploaddone", function (a, b) {
        b = b.result.split(":");
        if ($("#cur-room").length)webChat.send($("#cur-room"), {size: b[0], mime: b[1], uri: b[2]}); else {
            var c = $("#" + a.target.id).closest("ul").find('[data-role="chat-send"]');
            webChat.send(c, {size: b[0], mime: b[1], uri: b[2]})
        }
    })
}
function checkChatFiles() {
    $(".chatLoading").each(function () {
        var b = $(this).attr("data-media-type"), e = $(this).attr("data-source1"), c = $(this).attr("data-source2"), a = $(this).attr("data-preview");
        loadingContainer = $(this);
        $.ajax({
            method: "HEAD", url: e, success: function () {
                console.log("success");
                "audio" == b ? loadingContainer.after('<div data-media-type="audio" class="mediaOverlay audioOverlay inline relative" data-source1="' + e + '" data-source2="' + c + '"><div><span class="icon-volume"></span></div></div>') : loadingContainer.after('<div data-media-type="video" class="mediaOverlay videoOverlay inline relative" data-source1="' +
                    e + '" data-source2="' + c + '"><div><span></span></div><img src="' + a + '"> </div>');
                loadingContainer.remove();
                scrollChatWindow()
            }
        })
    })
}
var chat = function (b, e, c, a) {
    var d = {}, k = [], h = 0, f = {}, p, r = !1, m = !1;
    d.test = function (a) {
    };
    d.getPostRoom = function (a) {
        p.emit("history-post-rooms", {pid: a}, d.onGotPostRoom)
    };
    d.connect = function (a) {
        p = io(a);
        p.on("connect", function (a) {
            r = !0;
            0 < k.length && d.watch(h, k);
            if (d.onConnect)d.onConnect(a)
        });
        p.on("authenticated", function (a) {
            m = !0;
            f = a;
            if (d.onLogin)d.onLogin(a)
        });
        p.on("unauthorized", function (a) {
            m = !1;
            f = {}
        });
        p.on("joined", function (a) {
            if (d.onJoined)d.onJoined(a)
        });
        p.on("left", function (a) {
            if (d.onLeft)d.onLeft(a)
        });
        p.on("seen", function (a, b, c, e, f) {
            if (d.onSeen)d.onSeen(a, b, c, e, f)
        });
        p.on("delivered", function (a, b, c, e, f) {
            if (d.onDelivered)d.onDelivered(a, b, c, e, f)
        });
        p.on("typing", function (a, b, c) {
            if (d.onTyping)d.onTyping({pid: a, oid: b, uid: c})
        });
        p.on("message", function (a, b, c, e) {
            if (d.onMsg)d.onMsg(a, b, c, e)
        });
        p.on("unreads", function (a) {
            if (d.onGotUnreads)d.onGotUnreads(a)
        })
    };
    d.isLogged = function () {
        return m
    };
    d.typing = function (a, b, c) {
        p.emit("typing", a, b, c)
    };
    d.getUnread = function () {
        p.emit("get-unreads")
    };
    d.send = function (a, b,
                       c, e) {
        p.emit("send", a, b, c, e, function (b) {
            e = {mid: b, pid: a};
            if (d.onSent)d.onSent(e)
        })
    };
    d.delivered = function (a, b, c, d) {
        p.emit("delivered", a, b, c, d)
    };
    d.seen = function (a, b, c, d) {
        p.emit("seen", a, b, c, d)
    };
    d.login = function (a, b, c, d, e, f) {
        if (!r)return !1;
        p.emit("authentication", {id: a, name: b, token: c, avatar: d, lang: e, platform: f}, function () {
        });
        return !1
    };
    d.getRooms = function (a, b) {
        a = a || {};
        a.user_id = f.id;
        p.emit("history-rooms", a, function (a) {
            d.onGotRooms(a, b)
        })
    };
    d.getMessages = function (a, b, c, e, f) {
        e = e || {};
        p.emit("history-messages",
            a, b, c, e, function (a) {
                d.onGotMessages(a, f)
            })
    };
    d.block = function (a, b, c, d) {
        p.emit("block-user", a, b, c, d)
    };
    d.isBlocked = function (a) {
        p.emit("is-blocked", a, function (b) {
            d.onIsBlocked(a, b)
        })
    };
    d.disconnect = function () {
    };
    d.watch = function (b, c) {
        h = b;
        if (!r)return b || (k = []), a.merge(k, c), !1;
        p.emit("watch-users", b, c, function (a) {
            if (d.onJoined)d.onJoined(a)
        })
    };
    return d
}(document, window, document.body, jQuery);
window.markNotSeen = [];
var webChat = function (b, e, c, a) {
    function d(b) {
        a("#cur-room").attr("data-pid", b.pid);
        a("#cur-room").attr("data-oid", b.oid);
        a("#cur-room").attr("data-uid", b.uid);
        a("#cur-room").attr("data-post-img", b.postImg);
        a("#cur-room").attr("data-post-title", b.postTitle);
        a("#cur-room").attr("data-post-country", b.postCountry);
        a("#cur-room").attr("data-recipient-avatar", b.recipientAvatar);
        a("#cur-room").attr("data-recipient-name", b.recipientName);
        a(".cl-top").show();
        a(".cl-chatInput").show()
    }

    function k(b) {
        var c = !1,
            d = "", f = a(a("#chat-msg-template-sender").html());
        b.sender_id == p.id && (c = !0, f = a(a("#chat-msg-template-me").html()));
        -1 != a.inArray(b.pid + "-" + b.oid + "-" + b.uid, e.markNotSeen) || 2 == b.status || b.sender_id == p.id && parseInt(b.recipient_id) != p.id || chat.seen(b.pid, b.oid, b.uid, b.mid);
        switch (b.status) {
            case 0:
                d = "statusUnread";
                break;
            case 1:
                d = "statusDelivered";
                break;
            case 2:
                d = "statusSeen"
        }
        var h = "", k = "undefined" !== typeof b.sent_at ? new Date(b.sent_at) : new Date, h = formatAMPM(k);
        f.attr("data-msg-id", b.mid);
        f.attr("data-sent",
            k.getFullYear() + "-" + ("0" + (k.getMonth() + 1)).slice(-2) + "-" + k.getDate());
        f.find('[data-role="chat-username"]').text(c ? "Me" : b.sender_name);
        f.find('[data-role="chat-time"]').text(h);
        void 0 != b.uri ? ((new Date).getTime(), h = (new Date).getTime() - 6E5, k = void 0 != b.sent_at && b.sent_at < (new Date).getTime() - chatSwitchToPersistentUrlTimeout ? persistentCDNBaseUrl : chatAttachmentPath, -1 != b.mime.indexOf("image") ? f.find('[data-role="chat-msg"]').html('<a class="fancybox" rel="fancybox-thumb" href="' + k + b.uri + '" ><img class="chatAttachment" src="' +
            k + b.uri + '.preview.jpg" /></a>') : -1 != b.mime.indexOf("video") ? b.sent_at < h ? f.find('[data-role="chat-msg"]').html('<div data-media-type="video" class="mediaOverlay videoOverlay inline relative" data-source1="' + k + b.uri + '.conv.mp4" data-source2="' + k + b.uri + '.conv.ogv"><div><span></span></div><img src="' + k + b.uri + '.preview.jpg"> </div>') : f.find('[data-role="chat-msg"]').html('<div class="chatLoading" data-media-type="video" data-source1="' + k + b.uri + '.conv.mp4" data-source2="' + k + b.uri + '.conv.ogv" data-preview="' +
            k + b.uri + '.preview.jpg"><img src="//opensooqui.os-cdn.com/os_web/desktop/loader-larger.gif"><div>Loading...</div></div>') : -1 != b.mime.indexOf("audio") ? b.sent_at < h ? f.find('[data-role="chat-msg"]').html('<div data-media-type="audio" class="mediaOverlay audioOverlay inline relative" data-source1="' + k + b.uri + '.conv.mp3" data-source2="' + k + b.uri + '.conv.ogv"><div><span class="icon-volume"></span></div></div>') : f.find('[data-role="chat-msg"]').html('<div class="chatLoading" data-media-type="audio" data-source1="' +
            k + b.uri + '.conv.mp3" data-source2="' + k + b.uri + '.conv.ogv"><img src="//opensooqui.os-cdn.com/os_web/desktop/loader-larger.gif"><div>Loading...</div></div>') : f.find('[data-role="chat-msg"]').html('<a href="' + k + b.uri + '" class="downloadAttachmentBtn"><span class="icon-expand38 inline pr15"></span>Download File</a>')) : f.find('[data-role="chat-msg"]').html(emojione.toImage(b.text));
        c && (b = a('#templates [data-type="' + d + '"]').html(), f.find('[data-role="chat-status"]').html(b));
        f.each(function () {
            /[\u0600-\u06FF]/.test(a(this).text()) ?
                a(this).attr("dir", "rtl") : a(this).attr("dir", "ltr")
        });
        return f
    }

    function h() {
        var b = e.location.hash.split("/");
        if ("redirect" == b[b.length - 1])b.pop(), e.location.hash = b.join("/"); else {
            var c = 0, d = hashComp(b, c, "t");
            d || (d = "all");
            0 > a.inArray(d, ["all", "buyer", "seller"]) && (e.location.hash = "#all");
            a('.tab-links a[href="#' + d + '"]').closest("li").addClass("active");
            c++;
            b = a.trim(hashComp(b, c, "t"));
            "" != b && f.switchRoom(b);
            a("#chat-rooms").hide();
            a("#chat-msg-box").hide();
            a("#chat-rooms-type li").removeClass("selected");
            a("#room-" + d + "-tab").addClass("selected");
            switch (d) {
                case "buyer":
                    webChat.getRoomsByType("buyer");
                    break;
                case "seller":
                    webChat.getRoomsByType("seller");
                    break;
                default:
                    webChat.getRoomsByType("all")
            }
            return !1
        }
    }

    var f = {}, p = {}, r;
    f.callbcak = function (a) {
    };
    chat.onConnect = function (a) {
        p.id && chat.login(p.id, p.name, p.token, p.avatar, p.lang, p.platform)
    };
    f.connect = function (a) {
        chat.connect(a.baseUrl);
        a.id && (p.id = a.id, p.name = a.name, p.avatar = a.avatar, p.token = a.token, p.lang = a.lang, p.platform = a.platform)
    };
    f.getLoggedUser =
        function () {
            return p
        };
    chat.onLogin = function (b) {
        a(".chatContainer").length ? handleHashChanges(h) : "function" == typeof f.callbcak && (f.callbcak(), f.callbcak = "");
        f.getUnreads()
    };
    f.getRoomsByType = function (a) {
        chat.getRooms({type: a, page: 0, limit: 1E3}, a)
    };
    f.onBlocked = function (b) {
        a("body.message-chat-center").length ? (a('[data-block-id="' + b + '"]').html('<span class="icon-block absolute"></span><span class="icon-user2 absolute "></span>' + JS["block.memberIsBlocked"]).removeAttr("onclick"), a.fancybox("#blockSuccess")) :
            (a('[data-block-id="' + b + '"]').show(), a('.chat-popup [data-block-id="' + b + '"]').closest(".chat-popup").find('[data-role="blockRoom"]').hide())
    };
    f.isBlocked = function (a) {
        chat.isBlocked(a)
    };
    chat.onIsBlocked = function (b, c) {
        console.log("isBlocked", b, c);
        c && (a("body.message-chat-center").length ? a('[data-block-id="' + b + '"]').html('<span class="icon-block absolute"></span><span class="icon-user2 absolute "></span>' + JS["block.memberIsBlocked"]).removeAttr("onclick") : (a('[data-block-id="' + b + '"]').show(), a('.chat-popup [data-block-id="' +
            b + '"]').closest(".chat-popup").find('[data-role="blockRoom"]').hide()))
    };
    f.switchRoom = function (b) {
        var c = b.split("-");
        a("#cur-room").attr({
            "data-pid": "",
            "data-oid": "",
            "data-uid": "",
            "data-post-img": "",
            "data-post-title": "",
            "data-post-country": ""
        });
        a('[data-role="msgsBox"]').html("");
        b && a("#" + b + " .userWindowBoxChat").html("");
        a(".welcomeImg").remove();
        a(".cl-top").show();
        a(".cl-chatInput").show();
        chat.getMessages(c[0], c[1], c[2], {limit: 11})
    };
    f.switchRoomHash = function (b, c) {
        var d, f = a(b);
        a(b).siblings('[data-role="unread"]').html("");
        a('[data-role="chat-input"]').val("");
        c || (c = "all");
        d = c;
        f.length && (d += "/" + f.attr("data-room"));
        e.location.hash = d;
        return !1
    };
    f.send = function (b, c) {
        b = a(b);
        var d = b.closest(".userWindowInput").find('input[name="msg"]'), e = b.attr("data-pid"), f = b.attr("data-oid"), h = b.attr("data-uid"), l = a.trim(d.val()), r = e + "-" + f + "-" + h;
        if (!l && void 0 == c)return !1;
        l = {
            text: l,
            post_img: b.attr("data-post-img"),
            post_title: b.attr("data-post-title"),
            post_country: b.attr("data-post-country"),
            recipient_name: b.attr("data-recipient-name"),
            recipient_avatar: b.attr("data-recipient-avatar")
        };
        void 0 != c && (l.size = c.size, l.mime = c.mime, l.uri = c.uri, l.is_captured = !1, l.text = "[attachment]");
        chat.send(e, f, h, l);
        l.sender_id = p.id;
        l.sender_name = p.name;
        l.pid = e;
        l.oid = f;
        l.uid = h;
        l.status = 0;
        e = new Date;
        e = e.getFullYear() + "-" + ("0" + (e.getMonth() + 1)).slice(-2) + "-" + e.getDate();
        a("#" + r + " .userWindowBoxChat").length ? (a("#" + r + " .userWindowBoxChat>div:last-child").attr("data-sent") != e && a("#" + r + " .userWindowBoxChat").append('<span class="windowChatDate block center">' +
            e + "</span>"), a("#" + r + " .userWindowBoxChat").append(k(l)), a("#" + r + ' [data-role="chat-fullpage"]').removeClass("hide"), a("#" + r + " .userWindowBoxChat")[0].scrollTop = a("#" + r + " .userWindowBoxChat")[0].scrollHeight) : (a('[data-role="msgsBox"]>div:last-child').attr("data-sent") != e && a('[data-role="msgsBox"]').append('<div class="groupChatDate"><span>' + e + "</span></div>"), a('[data-role="msgsBox"]').append(k(l)), scrollChatWindow());
        d.val("");
        a("body").hasClass("ie7_body") || a("#beep-one")[0].play();
        return !1
    };
    f.getHistoryMessages =
        function (b) {
            a("#loadMore").remove();
            var c = a("#cur-room");
            b = c.attr("data-pid");
            var d = c.attr("data-oid"), c = c.attr("data-uid"), e = a('[data-role="msgsBox"] div').eq(0).attr("data-msg-id");
            chat.getMessages(b, d, c, {limit: 11, before_mid: e}, "new")
        };
    f.block = function (a) {
        a = a.split("-");
        chat.block(a[0], a[1], a[2], f.onBlocked)
    };
    f.typing = function (b) {
        if (a("#cur-room").length) {
            b = a("#cur-room");
            var c = b.attr("data-pid"), d = b.attr("data-oid");
            b = b.attr("data-uid")
        } else c = a(b).attr("data-pid"), d = a(b).attr("data-oid"), b = a(b).attr("data-uid");
        var e = (new Date).getTime();
        if (r && 500 > e - r)return !0;
        r = e;
        chat.typing(c, d, b);
        return !0
    };
    chat.onSent = function (b) {
        a('[data-role="msgsBox"]>div:last-child').attr("data-msg-id", b.mid)
    };
    f.getUnreads = function (a) {
        chat.getUnread()
    };
    f.disconnect = function (a) {
        chat.disconnect()
    };
    chat.onGotUnreads = function (b) {
        99 < b.all && (b.all = "+99");
        99 < b.owner && (b.owner = "+99");
        99 < b.other && (b.other = "+99");
        a('.tab-links [href="#seller"]').find(".chatTabCounter").text(b.owner);
        a('.tab-links [href="#buyer"]').find(".chatTabCounter").text(b.other);
        0 < b.owner ? a('.tab-links [href="#seller"] .chatTabCounter').length ? a('.tab-links [href="#seller"] .chatTabCounter').text(b.all) : a('.tab-links [href="#seller"]').html(a('.tab-links [href="#seller"]').html() + '<span class="chatTabCounter" data-role="totalUnread">' + b.owner + "</span>") : a('.tab-links [href="#seller"]').find(".chatTabCounter").remove();
        0 < b.other ? a('.tab-links [href="#buyer"] .chatTabCounter').length ? a('.tab-links [href="#buyer"] .chatTabCounter').text(b.all) : a('.tab-links [href="#buyer"]').html(a('.tab-links [href="#buyer"]').html() +
            '<span class="chatTabCounter" data-role="totalUnread">' + b.other + "</span>") : a('.tab-links [href="#buyer"]').find(".chatTabCounter").remove();
        0 < b.all ? (a('.tab-links [href="#all"] .chatTabCounter').length ? a('.tab-links [href="#all"] .chatTabCounter').text(b.all) : a('.tab-links [href="#all"]').html(a('.tab-links [href="#all"]').html() + '<span class="chatTabCounter" data-role="totalUnread">' + b.all + "</span>"), a('#header .userMenu a[data-au="inbox-AU"] [data-role="unread-all"]').length ? a('#header .userMenu a[data-au="inbox-AU"] [data-role="unread-all"]').html(b.all) :
            a('#header .userMenu a[data-au="inbox-AU"]').html(a('#header .userMenu a[data-au="inbox-AU"]').html() + '<span data-role="unread-all" class="noNoti hide" style="display: inline;">' + b.all + "</span>")) : (a('.tab-links [href="#all"]').find(".chatTabCounter").remove(), a('#header .userMenu a[data-au="inbox-AU"] [data-role="unread-all"]').remove())
    };
    chat.onDelivered = function (b, c, d, e, f) {
        b = a('#templates [data-type="statusDelivered"]').html();
        a('[data-role="msgsBox"] .myMessage[data-msg-id=' + e + "]").find('[data-role="chat-status"]').html(b)
    };
    chat.onSeen = function (b, c, d, e, h) {
        f.getUnreads();
        var k = a('#templates [data-type="statusSeen"]').html();
        setTimeout(function () {
            a('[data-role="msgsBox"] .myMessage[data-msg-id="' + e + '"]').find('[data-role="chat-status"]').html(k)
        }, 1E3)
    };
    chat.onJoined = function (b) {
        b.length && (a('[data-role="chat-online"][data-user-id="' + b[0].id + '"]').addClass("online"), a('[data-role="chat-online-status"][data-user-id="' + b[0].id + '"] [data-role="chat-text-offline"]').hide(), a('[data-role="chat-online-status"][data-user-id="' +
            b[0].id + '"] [data-role="chat-text-online"]').show())
    };
    chat.onLeft = function (b) {
        b.length && (a('[data-role="chat-online"][data-user-id="' + b[0].id + '"]').removeClass("online"), a('[data-role="chat-online-status"][data-user-id="' + b[0].id + '"] [data-role="chat-text-offline"]').show(), a('[data-role="chat-online-status"][data-user-id="' + b[0].id + '"] [data-role="chat-text-online"]').hide())
    };
    f.watch = function (a, b) {
        chat.watch(a, b)
    };
    chat.onGotRooms = function (b, c) {
        f.getUnreads();
        if (a("body").hasClass("post-my-ads"))handleMyProfileCount(b);
        else {
            a("#chatRooms").html("");
            var d;
            a("#chat-rooms tbody").html("");
            var h = {seller: 0, buyer: 0};
            current_pid = a("#cur-room").attr("data-pid");
            current_pid == a("#postRooms").attr("data-post-id") ? (buyersNeedRefresh = !1, a(".talkingUsers").removeClass("selected"), a(".arrowDown").hide(), a('.talkingUsers[data-room="' + a("#cur-room").attr("data-pid") + "-" + a("#cur-room").attr("data-oid") + "-" + a("#cur-room").attr("data-uid") + '"]').addClass("selected").closest("li").find(".arrowDown").show()) : (buyersNeedRefresh = !0, a(".cl-hrSlider .flexslider").html('<ul class="slides" id="postRooms"></ul>'),
                a(".cl-hrSlider").hide());
            a(".chatLeftSide").addClass("noUsersSlider");
            a.each(b, function (b, f) {
                var h = f.rooms[0];
                d = f.pid + "-" + f.oid + "-" + h.uid;
                $post = a(a("#templates #room").html());
                $post.attr("data-room", d);
                $post.attr("data-post-img", f.post_img);
                $post.attr("data-post-title", f.post_title);
                $post.attr("data-post-country", f.post_country);
                $post.attr("onclick", "webChat.switchRoomHash(this,'" + c + "')");
                $post.find(".chatGroupTitle").text(25 < f.post_title.length ? f.post_title.substr(0, 22) + "..." : f.post_title);
                $post.find(".chatGroupImage").attr("src",
                    f.post_img);
                f.unread ? ($post.addClass("unreadMsgs"), $post.find(".chatUnreadCounter").html(f.unread)) : $post.find(".chatUnreadCounter").remove();
                var k = a("#cur-room").attr("data-pid");
                k == f.pid && $post.addClass("selected");
                var m = new Date(h.last_time), m = m.getFullYear() + "." + (m.getMonth() + 1) + "." + m.getDate();
                m == a("#server_dates").attr("data-date-today") && (m = JS["js.chat.today"]);
                m == a("#server_dates").attr("data-date-yesterday") && (m = JS["js.chat.yesterday"]);
                $post.find(".chatGroupDate").text(m);
                $post.find(".chatLastMsg").html(19 <
                h.snippets.length ? emojione.toImage(h.snippets.substr(0, 19)) + "..." : emojione.toImage(h.snippets));
                var n = 3;
                3 > f.rooms.length && (n = f.rooms.length);
                a.each(f.rooms, function (b, c) {
                    var d;
                    d = f.pid + "-" + f.oid + "-" + c.uid;
                    f.oid == p.id && k == f.pid && buyersNeedRefresh && (a("#postRooms").attr("data-post-id", f.pid), chat.watch(!0, [c.uid]), $miniRoomTemplate = a(a("#templates #postRoom").html()), $miniRoomTemplate.find("img").attr("src", c.avatar), $miniRoomTemplate.find("a").attr("data-room", d).attr("onclick", "webChat.switchRoomHash(this,'" +
                        hashComp(e.location.hash.split("/"), 0, "t") + "')"), $miniRoomTemplate.find('[data-role="chat-online"]').attr("data-user-id", c.uid), d == hashComp(e.location.hash.split("/"), 1, "t") && ($miniRoomTemplate.find("a").addClass("selected"), $miniRoomTemplate.find("a").siblings(".arrowDown").show()), c.unread && $miniRoomTemplate.find('[data-role="unread"]').html('<span class="blueCircle"></span>'), a(".cl-hrSlider #postRooms").append($miniRoomTemplate), a(".cl-hrSlider").show(), a(".chatLeftSide").removeClass("noUsersSlider"));
                    0 < n && ($circle = a(a("#templates #postMiniRooms").html()), $circle.addClass("c" + n), n--, $circle.find("img").attr("src", c.avatar), $post.find(".chatUsersCircles").append($circle))
                });
                a("#chatRooms").append($post)
            });
            buyersNeedRefresh ? runChatSlider() : a(".chatLeftSide").removeClass("noUsersSlider");
            if (!b.length) {
                var k = '<li> <span class="noChatRooms">' + JS["js.no_more_chat"] + ', <a class="block" href="/' + e.lang + '/find">' + JS["js.start_browsing_ads"] + "</a></span> </li>";
                a("#chatRooms").append(k)
            }
            "all" == c ? (a("#room-seller-tab .unread").text(h.seller).attr("data-count",
                h.seller), a("#room-buyer-tab .unread").text(h.buyer).attr("data-count", h.buyer), a("#room-all-tab .unread").text(h.buyer + h.seller).attr("data-count", h.buyer + h.seller)) : a("#room-" + c + "-tab .unread").text(h[c]).attr("data-count", h[c]);
            h = null != navigator.userAgent.match(/iPad/i);
            a(".chatTabsWrap .content").length && 0 == h && (setHeight(), setTimeout(function () {
                "undefined" == typeof myScroll1 && (myScroll1 = new IScroll("#wrapper1", {
                    scrollbars: !0,
                    mouseWheel: !0,
                    interactiveScrollbars: !0,
                    shrinkScrollbars: "scale",
                    fadeScrollbars: !0,
                    disableMouse: !0
                }));
                myScroll1.refresh()
            }, 500))
        }
    };
    chat.onGotMessages = function (b, c) {
        var h = "";
        if ("undefined" != typeof c && "new" == c)b.length ? (a.each(b, function (b, c) {
            r = c.pid + "-" + c.oid + "-" + c.uid;
            h.length || (h = c.send_date);
            h != c.send_date && (a("#" + r + " .userWindowBoxChat").prepend('<span class="windowChatDate block center">' + h + "</span>"), a('[data-role="msgsBox"]').prepend('<div class="groupChatDate"><span>' + h + "</span></div>"), h = c.send_date);
            a("#" + r + " .userWindowBoxChat").length ? a("#" + r + " .userWindowBoxChat").prepend(k(c,
                !1)) : a('[data-role="msgsBox"]').prepend(k(c, !1))
        }), $msgsDiv.prepend('<div class="groupChatDate" id="loadMore" onclick="javascript:webChat.getHistoryMessages();"><span>' + JS["js.load_more"] + "</span></div>"), a(".chatTabsWrap .content").length && myScroll2.refresh()) : a("#loadMore").remove(); else {
            var r;
            $msgsDiv = a('[data-role="msgsBox"]');
            $msgsDiv.html("");
            var n = !0;
            $msgsDiv.find("div").length && (n = !1);
            a.each(b, function (b, c) {
                r = c.pid + "-" + c.oid + "-" + c.uid;
                h.length || (h = c.send_date);
                h != c.send_date && (a("#" + r + " .userWindowBoxChat").prepend('<span class="windowChatDate block center">' +
                    h + "</span>"), a('[data-role="msgsBox"]').prepend('<div class="groupChatDate"><span>' + h + "</span></div>"), h = c.send_date);
                a("#" + r + " .userWindowBoxChat").length ? (a("#" + r + ' [data-role="chat-fullpage"]').removeClass("hide"), a("#" + r + " .userWindowBoxChat").prepend(k(c, !1))) : a('[data-role="msgsBox"]').prepend(k(c, !1))
            });
            var q = b[0];
            if (q) {
                var l = "", u, l = "", l = q.sender_id == q.oid ? q.recipient_id : q.sender_id;
                q.sender_id == p.id ? (chatingWithid = q.recipient_id, l = q.recipient_name, u = q.recipient_avatar) : (chatingWithid = q.sender_id,
                    l = q.sender_name, u = q.sender_avatar);
                a(".chatContainer").length && (a(".cl-top h3 a").text(29 < q.post_title.length ? q.post_title.substr(0, 70) + "..." : q.post_title), a('.cl-top [data-role="post-link"]').attr("href", "/" + e.lang + "/search/" + q.pid), a(".cl-top .cl-img img").attr("src", q.post_img), a('.cl-top [data-role="chat-online"]').removeClass("online").attr("data-user-id", chatingWithid), a('[data-role="chat-online-status"]').attr("data-user-id", chatingWithid), a('[data-role="chat-online-status"] [data-role="chat-text-offline"]').show(),
                    a('[data-role="chat-online-status"] [data-role="chat-text-online"]').hide(), a('[data-role="makePremium"]').attr("data-payment-postid", q.pid), chat.watch(!0, [chatingWithid]), a(".cl-top .cl-titleLeft img").attr("src", u), a(".cl-top .cl-titleLeft .ownerName").text(l), a('[data-role="user-profile-link"]').attr("href", "/" + e.lang + "/mid/" + chatingWithid), a('.cl-top [data-role="chat-typing"]').attr("data-room", q.pid + "-" + q.oid + "-" + q.uid), a('[data-role="blockRoom"]').attr("onclick", 'webChat.block("' + r + '")').attr("data-block-id",
                    chatingWithid).html('<span class="icon-block absolute"></span><span class="icon-user2 absolute "></span><span class="inline vTop mr15">' + JS.block + "</span>"), f.isBlocked(chatingWithid));
                a("#" + r + " .userWindowBoxChat").length && (a("#" + r + " .userWindowBoxChat").prepend('<span class="windowChatDate block center">' + h + "</span>"), a("#" + r + ' [data-role="chat-fullpage"]').removeClass("hide"), a("#" + r + " .userWindowBoxChat")[0].scrollTop = a("#" + r + " .userWindowBoxChat")[0].scrollHeight);
                n && (l = q.sender_id == q.oid ? q.recipient_id :
                    q.sender_id, q.sender_id == p.id ? (u = q.recipient_avatar, n = q.recipient_name) : (u = q.sender_avatar, n = q.sender_name), d({
                    pid: q.pid,
                    oid: q.oid,
                    uid: l,
                    postImg: q.post_img,
                    postTitle: q.post_title,
                    postCountry: q.post_country,
                    recipientAvatar: u,
                    recipientName: n
                }));
                11 <= b.length ? ($msgsDiv.prepend('<div class="groupChatDate" id="loadMore" onclick="javascript:webChat.getHistoryMessages();"><span>' + JS["js.load_more"] + "</span></div>"), a(".chatTabsWrap .content").length && myScroll2.refresh()) : a("#loadMore").remove()
            }
            scrollChatWindow();
            setTimeout(function () {
                scrollChatWindow()
            }, 800)
        }
    };
    chat.onTyping = function (b) {
        a('[data-role="chat-typing"][data-room="' + (b.pid + "-" + b.oid + "-" + b.uid) + '"]').css("display", "block");
        a('[data-role="chat-NotTyping"]').css("display", "none");
        var c = b.pid + "-" + b.oid + "-" + b.uid;
        a("#" + c).length && !a("#" + c + ' .userWindowBoxChat [data-role="chat-popup-typing"]').length && (a("#" + c + " .userWindowBoxChat").append('<span class="msgTime" data-role="chat-popup-typing">' + JS["js.typing"] + "</span>"), a("#" + c + " .userWindowBoxChat")[0].scrollTop =
            a("#" + c + " .userWindowBoxChat")[0].scrollHeight, setTimeout(function () {
            a("#" + b.pid + "-" + b.oid + "-" + b.uid + ' .userWindowBoxChat [data-role="chat-popup-typing"]').remove()
        }, 1500))
    };
    chat.onMsg = function (b, c, d, h) {
        var n = b + "-" + c + "-" + d;
        f.getUnreads();
        if (a(".chatContainer").length || a("body.post-create").length) {
            var q = a("#cur-room"), n = a('[data-role="msgsBox"]'), l = q.attr("data-pid"), r = q.attr("data-oid"), q = q.attr("data-uid");
            b == l && c == r && d == q ? 0 < n.length && (chat.seen(b, c, d, h.mid), h.status = 2, a("body").hasClass("ie7_body") ||
            (b = a("#beep-one")[0], b.play()), h = k(h), n.append(h)) : (a(".cl-hrSlider #postRooms").length && !a('.cl-hrSlider #postRooms a[data-room="' + h.room + '"]').length && a('.cl-hrSlider #postRooms[data-post-id="' + b + '"]').length && ($miniRoomTemplate = a(a("#templates #postRoom").html()), $miniRoomTemplate.attr("style", "float: right; display: block; width: 76px;"), $miniRoomTemplate.find("img").attr("src", h.sender_avatar), $miniRoomTemplate.find("a").attr("data-room", h.room).attr("onclick", "webChat.switchRoomHash(this,'" +
                hashComp(e.location.hash.split("/"), 0, "t") + "')"), $miniRoomTemplate.find('[data-role="chat-online"]').attr("data-user-id", d), $miniRoomTemplate.find('[data-role="unread"]').html('<span class="blueCircle"></span>'), a(".cl-hrSlider #postRooms").prepend($miniRoomTemplate), chat.watch(!0, [d])), a('#postRooms [data-room="' + b + "-" + c + "-" + d + '"]').siblings('[data-role="unread"]').html('<span class="blueCircle"></span>'), chat.delivered(b, c, d, h.mid));
            b = hashComp(e.location.hash.split("/"), 0, "t");
            chat.getRooms({type: b},
                b);
            scrollChatWindow()
        } else a("#" + n + " .userWindowBoxChat").length ? "true" == a("#" + n + " .userWindowTop").attr("data-opened") ? (a("body").hasClass("ie7_body") || (b = a("#beep-one")[0], b.play()), a("#" + n + " .userWindowBoxChat").append(k(h)), a("#" + n + " .userWindowBoxChat")[0].scrollTop = a("#" + n + " .userWindowBoxChat")[0].scrollHeight) : (l = a("#" + n + " .userWindowTop"), l.removeClass("minimizedTop"), l.find(".popupUnread").length ? a("#" + n + " .userWindowTop .popupUnread").text(parseInt(l.find(".popupUnread").text()) + 1) : (l.find('.popup-head-left [data-role="chat-online"]').remove(),
            a("#" + n + " .userWindowTop .popup-head-left a").html('<span class="popupUnread">1</span>' + l.find(".popup-head-left a").html())), chat.delivered(b, c, d, h.mid)) : (-1 == a.inArray(n, e.markNotSeen) && e.markNotSeen.push(n), h.sender_id == p.id ? (chatingWithName = h.recipient_name, chatingWithAvatar = h.recipient_avatar) : (chatingWithName = h.sender_name, chatingWithAvatar = h.sender_avatar), h = a("<div>", {
            "data-pid": b,
            "data-oid": c,
            "data-uid": d,
            "data-post-img": h.post_img,
            "data-post-title": h.post_title,
            "data-recipient-name": chatingWithName,
            "data-recipient-avatar": chatingWithAvatar,
            "data-post-country": h.post_country,
            "data-price": "",
            "data-opened": !1
        }), register_popup(h, !0), l = a("#" + b + "-" + c + "-" + d + " .userWindowTop"), l.find('.popup-head-left [data-role="chat-online"]').remove(), l.removeClass("minimizedTop"), chat.watch(!0, [d]), a("#" + n + " .userWindowTop .popup-head-left a").html('<span class="popupUnread">1</span>' + l.find(".popup-head-left a").html()))
    };
    setInterval(function () {
        a('[data-role="chat-typing"]').css("display", "none");
        a('[data-role="chat-NotTyping"]').css("display",
            "block")
    }, 1500);
    return f
}(document, window, document.body, jQuery);
