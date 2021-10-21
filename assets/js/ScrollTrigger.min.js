/*!
 * ScrollTrigger 3.8.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function J(e) {
        return e
    }

    function K(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function L() {
        return "undefined" != typeof window
    }

    function M() {
        return Le || L() && (Le = window.gsap) && Le.registerPlugin && Le
    }

    function N(e) {
        return !!~i.indexOf(e)
    }

    function O(e, t) {
        return ~Ze.indexOf(e) && Ze[Ze.indexOf(e) + 1][t]
    }

    function P(t, e) {
        var r = e.s,
            n = e.sc,
            i = v.indexOf(t),
            o = n === pt.sc ? 1 : 2;
        return ~i || (i = v.push(t) - 1), v[i + o] || (v[i + o] = O(t, r) || (N(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }))
    }

    function Q(e) {
        return O(e, "getBoundingClientRect") || (N(e) ? function() {
            return yt.width = Ne.innerWidth, yt.height = Ne.innerHeight, yt
        } : function() {
            return dt(e)
        })
    }

    function T(e, t) {
        var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
        return (r = "scroll" + n) && (o = O(e, r)) ? o() - Q(e)()[i] : N(e) ? (Fe[r] || Ie[r]) - (Ne["inner" + n] || Ie["client" + n] || Fe["client" + n]) : e[r] - e["offset" + n]
    }

    function U(e, t) {
        for (var r = 0; r < d.length; r += 3) t && !~t.indexOf(d[r + 1]) || e(d[r], d[r + 1], d[r + 2])
    }

    function V(e) {
        return "string" == typeof e
    }

    function W(e) {
        return "function" == typeof e
    }

    function X(e) {
        return "number" == typeof e
    }

    function Y(e) {
        return "object" == typeof e
    }

    function Z(e) {
        return W(e) && e()
    }

    function $(r, n) {
        return function() {
            var e = Z(r),
                t = Z(n);
            return function() {
                Z(e), Z(t)
            }
        }
    }

    function _(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function aa(e, t) {
        var r = t(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }

    function va(e) {
        return Ne.getComputedStyle(e)
    }

    function xa(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function za(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function Aa(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function Da(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function Ea(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        })
    }

    function Fa(e, t, r) {
        return e.removeEventListener(t, r)
    }

    function Ja(e, t) {
        if (V(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in S ? S[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function Ka(e, t, r, n, i, o, a, s) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            p = i.fontWeight,
            d = Re.createElement("div"),
            g = N(r) || "fixed" === O(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? Fe : r,
            m = -1 !== e.indexOf("start"),
            b = m ? l : c,
            x = "border-color:" + b + ";font-size:" + u + ";color:" + b + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (x += (n === pt ? y : w) + ":" + (o + parseFloat(f)) + "px;"), a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = m, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), d.style.cssText = x, d.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], E(d, 0, n, m), d
    }

    function Oa() {
        return 20 < qe() - $e && j()
    }

    function Pa() {
        var e = qe();
        $e !== e ? (j(), $e || z("scrollStart"), $e = e) : l = l || s(j)
    }

    function Qa() {
        return !Xe && !r && !Re.fullscreenElement && a.restart(!0)
    }

    function Wa(e) {
        var t, r = Le.ticker.frame,
            n = [],
            i = 0;
        if (g !== r || Ye) {
            for (F(); i < A.length; i += 4)(t = Ne.matchMedia(A[i]).matches) !== A[i + 3] && ((A[i + 3] = t) ? n.push(i) : F(1, A[i]) || W(A[i + 2]) && A[i + 2]());
            for (I(), i = 0; i < n.length; i++) t = n[i], He = A[t], A[t + 2] = A[t + 1](e);
            He = 0, o && B(0, 1), g = r, z("matchMedia")
        }
    }

    function Xa() {
        return Fa(te, "scrollEnd", Xa) || B(!0)
    }

    function ab() {
        return v.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }

    function jb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var i, o = H.length, a = t.style, s = e.style; o--;) a[i = H[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[w] = s[y] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[tt] = za(e, ft) + ut, a[rt] = za(e, pt) + ut, a[st] = s[lt] = s.top = s[b] = "0", xt(n), s[tt] = s.maxWidth = r[tt], s[rt] = s.maxHeight = r[rt], s[st] = r[st], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function mb(e) {
        for (var t = q.length, r = e.style, n = [], i = 0; i < t; i++) n.push(q[i], r[q[i]]);
        return n.t = e, n
    }

    function pb(e, t, r, n, i, o, a, s, l, c, u, f, p) {
        W(e) && (e = e(s)), V(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ja("0" + e.substr(3), r) : 0));
        var d, g, h, v = p ? p.time() : 0;
        if (p && p.seek(0), X(e)) a && E(a, r, n, !0);
        else {
            W(t) && (t = t(s));
            var m, b, x, y, w = e.split(" ");
            h = Be(t)[0] || Fe, (m = dt(h) || {}) && (m.left || m.top) || "none" !== va(h).display || (y = h.style.display, h.style.display = "block", m = dt(h), y ? h.style.display = y : h.style.removeProperty("display")), b = Ja(w[0], m[n.d]), x = Ja(w[1] || "0", r), e = m[n.p] - l[n.p] - c + b + i - x, a && E(a, x, n, r - x < 20 || a._isStart && 20 < x), r -= r - x
        }
        if (o) {
            var S = e + r,
                T = o._isStart;
            d = "scroll" + n.d2, E(o, S, n, T && 20 < S || !T && (u ? Math.max(Fe[d], Ie[d]) : o.parentNode[d]) <= S + 1), u && (l = dt(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + ut))
        }
        return p && h && (d = dt(h), p.seek(f), g = dt(h), p._caScrollDist = d[n.p] - g[n.p], e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e)
    }

    function rb(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === Fe) {
                for (i in e._stOrig = a.cssText, o = va(e)) + i || ee.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Le.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function sb(l, e) {
        function nf(e, t, r, n, i) {
            var o = nf.tween,
                a = t.onComplete,
                s = {};
            return o && o.kill(), c = Math.round(r), t[p] = e, (t.modifiers = s)[p] = function(e) {
                return (e = K(f())) !== c && e !== u && 2 < Math.abs(e - c) ? (o.kill(), nf.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = K(e)
            }, t.onComplete = function() {
                nf.tween = 0, a && a.call(o)
            }, o = nf.tween = Le.to(l, t)
        }
        var c, u, f = P(l, e),
            p = "_scroll" + e.p2;
        return l[p] = f, l.addEventListener("wheel", function() {
            return nf.tween && nf.tween.kill() && (nf.tween = 0)
        }, {
            passive: !0
        }), nf
    }
    var Le, o, Ne, Re, Ie, Fe, i, a, s, l, Be, Ve, De, c, Xe, je, u, Je, f, p, d, Qe, Ke, r, Ue, He, g, h, Ye = 1,
        Ze = [],
        v = [],
        qe = Date.now,
        m = qe(),
        $e = 0,
        Ge = 1,
        et = Math.abs,
        t = "scrollLeft",
        n = "scrollTop",
        b = "left",
        y = "right",
        w = "bottom",
        tt = "width",
        rt = "height",
        nt = "Right",
        it = "Left",
        ot = "Top",
        at = "Bottom",
        st = "padding",
        lt = "margin",
        ct = "Width",
        x = "Height",
        ut = "px",
        ft = {
            s: t,
            p: b,
            p2: it,
            os: y,
            os2: nt,
            d: tt,
            d2: ct,
            a: "x",
            sc: function sc(e) {
                return arguments.length ? Ne.scrollTo(e, pt.sc()) : Ne.pageXOffset || Re[t] || Ie[t] || Fe[t] || 0
            }
        },
        pt = {
            s: n,
            p: "top",
            p2: ot,
            os: w,
            os2: at,
            d: rt,
            d2: x,
            a: "y",
            op: ft,
            sc: function sc(e) {
                return arguments.length ? Ne.scrollTo(ft.sc(), e) : Ne.pageYOffset || Re[n] || Ie[n] || Fe[n] || 0
            }
        },
        dt = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== va(e)[u] && Le.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        gt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        ht = {
            toggleActions: "play",
            anticipatePin: 0
        },
        S = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        E = function _positionMarker(e, t, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + ct] = 1, i["border" + a + ct] = 0, i[r.p] = t + "px", Le.set(e, i)
        },
        vt = [],
        mt = {},
        k = {},
        C = [],
        A = [],
        z = function _dispatch(e) {
            return k[e] && k[e].map(function(e) {
                return e()
            }) || C
        },
        R = [],
        I = function _revertRecorded(e) {
            for (var t = 0; t < R.length; t += 5) e && R[t + 4] !== e || (R[t].style.cssText = R[t + 1], R[t].getBBox && R[t].setAttribute("transform", R[t + 2] || ""), R[t + 3].uncache = 1)
        },
        F = function _revertAll(e, t) {
            var r;
            for (Je = 0; Je < vt.length; Je++) r = vt[Je], t && r.media !== t || (e ? r.kill(1) : r.revert());
            t && I(t), t || z("revert")
        },
        B = function _refreshAll(e, t) {
            if (!$e || e) {
                h = !0;
                var r = z("refreshInit");
                Qe && te.sort(), t || F(), vt.forEach(function(e) {
                    return e.refresh()
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), ab(), a.pause(), h = !1, z("refresh")
            } else Ea(te, "scrollEnd", Xa)
        },
        D = 0,
        bt = 1,
        j = function _updateAll() {
            if (!h) {
                var e = vt.length,
                    t = qe(),
                    r = 50 <= t - m,
                    n = e && vt[0].scroll();
                if (bt = n < D ? -1 : 1, D = n, r && ($e && !je && 200 < t - $e && ($e = 0, z("scrollEnd")), De = m, m = t), bt < 0) {
                    for (Je = e; 0 < Je--;) vt[Je] && vt[Je].update(0, r);
                    bt = 1
                } else
                    for (Je = 0; Je < e; Je++) vt[Je] && vt[Je].update(0, r);
                l = 0
            }
        },
        H = [b, "top", w, y, lt + at, lt + nt, lt + ot, lt + it, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
        q = H.concat([tt, rt, "boxSizing", "max" + ct, "max" + x, "position", lt, st, st + ot, st + nt, st + at, st + it]),
        G = /([A-Z])/g,
        xt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    i = e.length,
                    o = 0;
                for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(G, "-$1").toLowerCase())
            }
        },
        yt = {
            left: 0,
            top: 0
        },
        ee = /(?:webkit|moz|length|cssText|inset)/i;
    ft.op = pt;
    var te = (ScrollTrigger.prototype.init = function init(E, k) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), Ge) {
            var m, n, f, C, M, A, z, L, R, I, F, e, B, D, j, K, U, t, H, b, Z, q, x, $, y, w, r, S, G, ee, i, p, te, re, ne, ie, oe, ae = (E = xa(V(E) || X(E) || E.nodeType ? {
                    trigger: E
                } : E, ht)).onUpdate,
                se = E.toggleClass,
                o = E.id,
                le = E.onToggle,
                ce = E.onRefresh,
                ue = E.scrub,
                fe = E.trigger,
                pe = E.pin,
                de = E.pinSpacing,
                ge = E.invalidateOnRefresh,
                he = E.anticipatePin,
                a = E.onScrubComplete,
                d = E.onSnapComplete,
                ve = E.once,
                me = E.snap,
                be = E.pinReparent,
                s = E.pinSpacer,
                xe = E.containerAnimation,
                ye = E.fastScrollEnd,
                we = E.preventOverlaps,
                Se = E.horizontal || E.containerAnimation && !1 !== E.horizontal ? ft : pt,
                Te = !ue && 0 !== ue,
                Oe = Be(E.scroller || Ne)[0],
                l = Le.core.getCache(Oe),
                Ee = N(Oe),
                _e = "fixed" === ("pinType" in E ? E.pinType : O(Oe, "pinType") || Ee && "fixed"),
                ke = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
                Ce = Te && E.toggleActions.split(" "),
                c = "markers" in E ? E.markers : ht.markers,
                Pe = Ee ? 0 : parseFloat(va(Oe)["border" + Se.p2 + ct]) || 0,
                Me = this,
                u = E.onRefreshInit && function() {
                    return E.onRefreshInit(Me)
                },
                Ae = function _getSizeFunc(e, t, r) {
                    var n = r.d,
                        i = r.d2,
                        o = r.a;
                    return (o = O(e, "getBoundingClientRect")) ? function() {
                        return o()[n]
                    } : function() {
                        return (t ? Ne["inner" + i] : e["client" + i]) || 0
                    }
                }(Oe, Ee, Se),
                We = function _getOffsetsFunc(e, t) {
                    return !t || ~Ze.indexOf(e) ? Q(e) : function() {
                        return yt
                    }
                }(Oe, Ee),
                g = 0,
                ze = P(Oe, Se);
            if (Me.media = He, he *= 45, Me.scroller = Oe, Me.scroll = xe ? xe.time.bind(xe) : ze, C = ze(), Me.vars = E, k = k || E.animation, "refreshPriority" in E && (Qe = 1), l.tweenScroll = l.tweenScroll || {
                    top: sb(Oe, pt),
                    left: sb(Oe, ft)
                }, Me.tweenTo = m = l.tweenScroll[Se.p], k && (k.vars.lazy = !1, k._initted || !1 !== k.vars.immediateRender && !1 !== E.immediateRender && k.render(0, !0, !0), Me.animation = k.pause(), k.scrollTrigger = Me, (i = X(ue) && ue) && (ee = Le.to(k, {
                    ease: "power3",
                    duration: i,
                    onComplete: function onComplete() {
                        return a && a(Me)
                    }
                })), S = 0, o = o || k.vars.id), vt.push(Me), me && (Y(me) && !me.push || (me = {
                    snapTo: me
                }), "scrollBehavior" in Fe.style && Le.set(Ee ? [Fe, Ie] : Oe, {
                    scrollBehavior: "auto"
                }), f = W(me.snapTo) ? me.snapTo : "labels" === me.snapTo ? function _getClosestLabel(t) {
                    return function(e) {
                        return Le.utils.snap(Aa(t), e)
                    }
                }(k) : "labelsDirectional" === me.snapTo ? function _getLabelAtDirection(i) {
                    return function(e, t) {
                        var r, n = Aa(i);
                        if (n.sort(function(e, t) {
                                return e - t
                            }), 0 < t.direction) {
                            for (e -= 1e-4, r = 0; r < n.length; r++)
                                if (n[r] >= e) return n[r];
                            return n.pop()
                        }
                        for (r = n.length, e += 1e-4; r--;)
                            if (n[r] <= e) return n[r];
                        return n[0]
                    }
                }(k) : Le.utils.snap(me.snapTo), p = me.duration || {
                    min: .1,
                    max: 2
                }, p = Y(p) ? Ve(p.min, p.max) : Ve(p, p), te = Le.delayedCall(me.delay || i / 2 || .1, function() {
                    if (Math.abs(Me.getVelocity()) < 10 && !je && g !== ze()) {
                        var e = k && !Te ? k.totalProgress() : Me.progress,
                            t = (e - G) / (qe() - De) * 1e3 || 0,
                            r = Le.utils.clamp(-Me.progress, 1 - Me.progress, et(t / 2) * t / .185),
                            n = Me.progress + (!1 === me.inertia ? 0 : r),
                            i = Ve(0, 1, f(n, Me)),
                            o = ze(),
                            a = Math.round(A + i * B),
                            s = me.onStart,
                            l = me.onInterrupt,
                            c = me.onComplete,
                            u = m.tween;
                        if (o <= z && A <= o && a !== o) {
                            if (u && !u._initted && u.data <= et(a - o)) return;
                            !1 === me.inertia && (r = i - Me.progress), m(a, {
                                duration: p(et(.185 * Math.max(et(n - e), et(i - e)) / t / .05 || 0)),
                                ease: me.ease || "power3",
                                data: et(a - o),
                                onInterrupt: function onInterrupt() {
                                    return te.restart(!0) && l && l(Me)
                                },
                                onComplete: function onComplete() {
                                    g = ze(), S = G = k && !Te ? k.totalProgress() : Me.progress, d && d(Me), c && c(Me)
                                }
                            }, o, r * B, a - o - r * B), s && s(Me, m.tween)
                        }
                    } else Me.isActive && te.restart(!0)
                }).pause()), o && (mt[o] = Me), fe = Me.trigger = Be(fe || pe)[0], pe = !0 === pe ? fe : Be(pe)[0], V(se) && (se = {
                    targets: fe,
                    className: se
                }), pe && (!1 === de || de === lt || (de = !(!de && "flex" === va(pe.parentNode).display) && st), Me.pin = pe, !1 !== E.force3D && Le.set(pe, {
                    force3D: !0
                }), (n = Le.core.getCache(pe)).spacer ? D = n.pinState : (s && ((s = Be(s)[0]) && !s.nodeType && (s = s.current || s.nativeElement), n.spacerIsNative = !!s, s && (n.spacerState = mb(s))), n.spacer = U = s || Re.createElement("div"), U.classList.add("pin-spacer"), o && U.classList.add("pin-spacer-" + o), n.pinState = D = mb(pe)), Me.spacer = U = n.spacer, r = va(pe), x = r[de + Se.os2], H = Le.getProperty(pe), b = Le.quickSetter(pe, Se.a, ut), jb(pe, U, r), K = mb(pe)), c && (e = Y(c) ? xa(c, gt) : gt, I = Ka("scroller-start", o, Oe, Se, e, 0), F = Ka("scroller-end", o, Oe, Se, e, 0, I), t = I["offset" + Se.op.d2], L = Ka("start", o, Oe, Se, e, t, 0, xe), R = Ka("end", o, Oe, Se, e, t, 0, xe), xe && (oe = Le.quickSetter([L, R], Se.a, ut)), _e || Ze.length && !0 === O(Oe, "fixedMarkers") || (function _makePositionable(e) {
                    var t = va(e).position;
                    e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                }(Ee ? Fe : Oe), Le.set([I, F], {
                    force3D: !0
                }), y = Le.quickSetter(I, Se.a, ut), w = Le.quickSetter(F, Se.a, ut))), xe) {
                var h = xe.vars.onUpdate,
                    v = xe.vars.onUpdateParams;
                xe.eventCallback("onUpdate", function() {
                    Me.update(0, 0, 1), h && h.apply(v || [])
                })
            }
            Me.previous = function() {
                return vt[vt.indexOf(Me) - 1]
            }, Me.next = function() {
                return vt[vt.indexOf(Me) + 1]
            }, Me.revert = function(e) {
                var t = !1 !== e || !Me.enabled,
                    r = Xe;
                t !== Me.isReverted && (t && (Me.scroll.rec || (Me.scroll.rec = ze()), ne = Math.max(ze(), Me.scroll.rec || 0), re = Me.progress, ie = k && k.progress()), L && [L, R, I, F].forEach(function(e) {
                    return e.style.display = t ? "none" : "block"
                }), t && (Xe = 1), Me.update(t), Xe = r, pe && (t ? function _swapPinOut(e, t, r) {
                    xt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative) xt(n.spacerState);
                    else if (e.parentNode === t) {
                        var i = t.parentNode;
                        i && (i.insertBefore(e, t), i.removeChild(t))
                    }
                }(pe, U, D) : be && Me.isActive || jb(pe, U, va(pe), $)), Me.isReverted = t)
            }, Me.refresh = function(e, t) {
                if (!Xe && Me.enabled || t)
                    if (pe && e && $e) Ea(ScrollTrigger, "scrollEnd", Xa);
                    else {
                        Xe = 1, ee && ee.pause(), ge && k && k.progress(0).invalidate(), Me.isReverted || Me.revert();
                        for (var r, n, i, o, a, s, l, c, u, f, p = Ae(), d = We(), g = xe ? xe.duration() : T(Oe, Se), h = 0, v = 0, m = E.end, b = E.endTrigger || fe, x = E.start || (0 !== E.start && fe ? pe ? "0 0" : "0 100%" : 0), y = E.pinnedContainer && Be(E.pinnedContainer)[0], w = fe && Math.max(0, vt.indexOf(Me)) || 0, S = w; S--;)(s = vt[S]).end || s.refresh(0, 1) || (Xe = 1), !(l = s.pin) || l !== fe && l !== pe || s.isReverted || ((f = f || []).unshift(s), s.revert());
                        for (W(x) && (x = x(Me)), A = pb(x, fe, p, Se, ze(), L, I, Me, d, Pe, _e, g, xe) || (pe ? -.001 : 0), W(m) && (m = m(Me)), V(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (V(x) ? x.split(" ")[0] : "") + m : (h = Ja(m.substr(2), p), m = V(x) ? x : A + h, b = fe)), z = Math.max(A, pb(m || (b ? "100% 0" : g), b, p, Se, ze() + h, R, F, Me, d, Pe, _e, g, xe)) || -.001, B = z - A || (A -= .01) && .001, h = 0, S = w; S--;)(l = (s = vt[S]).pin) && s.start - s._pinPush < A && !xe && (r = s.end - s.start, l !== fe && l !== y || X(x) || (h += r), l === pe && (v += r));
                        if (A += h, z += h, Me._pinPush = v, L && h && ((r = {})[Se.a] = "+=" + h, y && (r[Se.p] = "-=" + ze()), Le.set([L, R], r)), pe) r = va(pe), o = Se === pt, i = ze(), Z = parseFloat(H(Se.a)) + v, !g && 1 < z && ((Ee ? Fe : Oe).style["overflow-" + Se.a] = "scroll"), jb(pe, U, r), K = mb(pe), n = dt(pe, !0), c = _e && P(Oe, o ? ft : pt)(), de && (($ = [de + Se.os2, B + v + ut]).t = U, (S = de === st ? za(pe, Se) + B + v : 0) && $.push(Se.d, S + ut), xt($), _e && ze(ne)), _e && ((a = {
                            top: n.top + (o ? i - A : c) + ut,
                            left: n.left + (o ? c : i - A) + ut,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[tt] = a.maxWidth = Math.ceil(n.width) + ut, a[rt] = a.maxHeight = Math.ceil(n.height) + ut, a[lt] = a[lt + ot] = a[lt + nt] = a[lt + at] = a[lt + it] = "0", a[st] = r[st], a[st + ot] = r[st + ot], a[st + nt] = r[st + nt], a[st + at] = r[st + at], a[st + it] = r[st + it], j = function _copyState(e, t, r) {
                            for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                            return i.t = e.t, i
                        }(D, a, be)), k ? (u = k._initted, Ke(1), k.render(k.duration(), !0, !0), q = H(Se.a) - Z + B + v, B !== q && j.splice(j.length - 2, 2), k.render(0, !0, !0), u || k.invalidate(), Ke(0)) : q = B;
                        else if (fe && ze() && !xe)
                            for (n = fe.parentNode; n && n !== Fe;) n._pinOffset && (A -= n._pinOffset, z -= n._pinOffset), n = n.parentNode;
                        f && f.forEach(function(e) {
                            return e.revert(!1)
                        }), Me.start = A, Me.end = z, C = M = ze(), xe || (C < ne && ze(ne), Me.scroll.rec = 0), Me.revert(!1), Xe = 0, k && Te && k._initted && k.progress() !== ie && k.progress(ie, !0).render(k.time(), !0, !0), re !== Me.progress && (ee && k.totalProgress(re, !0), Me.progress = re, Me.update(0, 0, 1)), pe && de && (U._pinOffset = Math.round(Me.progress * q)), ce && ce(Me)
                    }
            }, Me.getVelocity = function() {
                return (ze() - M) / (qe() - De) * 1e3 || 0
            }, Me.endAnimation = function() {
                _(Me.callbackAnimation), k && (ee ? ee.progress(1) : k.paused() ? Te || _(k, Me.direction < 0, 1) : _(k, k.reversed()))
            }, Me.getTrailing = function() {
                var e = vt.indexOf(Me);
                return 0 < Me.direction ? vt.slice(0, e).reverse() : vt.slice(e + 1)
            }, Me.update = function(e, t, r) {
                if (!xe || r || e) {
                    var n, i, o, a, s, l, c, u = Me.scroll(),
                        f = e ? 0 : (u - A) / B,
                        p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                        d = Me.progress;
                    if (t && (M = C, C = xe ? ze() : u, me && (G = S, S = k && !Te ? k.totalProgress() : p)), he && !p && pe && !Xe && !Ye && $e && A < u + (u - M) / (qe() - De) * he && (p = 1e-4), p !== d && Me.enabled) {
                        if (a = (s = (n = Me.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, Me.direction = d < p ? 1 : -1, Me.progress = p, a && !Xe && (i = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, Te && (o = !s && "none" !== Ce[i + 1] && Ce[i + 1] || Ce[i], c = k && ("complete" === o || "reset" === o || o in k))), we && s && (c || ue || !k) && (W(we) ? we(Me) : Me.getTrailing().forEach(function(e) {
                                return e.endAnimation()
                            })), Te || (!ee || Xe || Ye ? k && k.totalProgress(p, !!Xe) : (ee.vars.totalProgress = p, ee.invalidate().restart())), pe)
                            if (e && de && (U.style[de + Se.os2] = x), _e) {
                                if (a) {
                                    if (l = !e && d < p && u < z + 1 && u + 1 >= T(Oe, Se), be)
                                        if (e || !n && !l) rb(pe, U);
                                        else {
                                            var g = dt(pe, !0),
                                                h = u - A;
                                            rb(pe, Fe, g.top + (Se === pt ? h : 0) + ut, g.left + (Se === pt ? 0 : h) + ut)
                                        }
                                    xt(n || l ? j : K), q !== B && p < 1 && n || b(Z + (1 !== p || l ? 0 : q))
                                }
                            } else b(Z + q * p);
                        !me || m.tween || Xe || Ye || te.restart(!0), se && (s || ve && p && (p < 1 || !Ue)) && Be(se.targets).forEach(function(e) {
                            return e.classList[n || ve ? "add" : "remove"](se.className)
                        }), !ae || Te || e || ae(Me), a && !Xe ? (Te && (c && ("complete" === o ? k.pause().totalProgress(1) : "reset" === o ? k.restart(!0).pause() : "restart" === o ? k.restart(!0) : k[o]()), ae && ae(Me)), !s && Ue || (le && s && aa(Me, le), ke[i] && aa(Me, ke[i]), ve && (1 === p ? Me.kill(!1, 1) : ke[i] = 0), s || ke[i = 1 === p ? 1 : 3] && aa(Me, ke[i])), ye && !n && Math.abs(Me.getVelocity()) > (X(ye) ? ye : 2500) && (_(Me.callbackAnimation), ee ? ee.progress(1) : _(k, !p, 1))) : Te && ae && !Xe && ae(Me)
                    }
                    if (w) {
                        var v = xe ? u / xe.duration() * (xe._caScrollDist || 0) : u;
                        y(v + (I._isFlipped ? 1 : 0)), w(v)
                    }
                    oe && oe(-u / xe.duration() * (xe._caScrollDist || 0))
                }
            }, Me.enable = function(e, t) {
                Me.enabled || (Me.enabled = !0, Ea(Oe, "resize", Qa), Ea(Oe, "scroll", Pa), u && Ea(ScrollTrigger, "refreshInit", u), !1 !== e && (Me.progress = re = 0, C = M = g = ze()), !1 !== t && Me.refresh())
            }, Me.getTween = function(e) {
                return e && m ? m.tween : ee
            }, Me.disable = function(e, t) {
                if (Me.enabled && (!1 !== e && Me.revert(), Me.enabled = Me.isActive = !1, t || ee && ee.pause(), ne = 0, n && (n.uncache = 1), u && Fa(ScrollTrigger, "refreshInit", u), te && (te.pause(), m.tween && m.tween.kill() && (m.tween = 0)), !Ee)) {
                    for (var r = vt.length; r--;)
                        if (vt[r].scroller === Oe && vt[r] !== Me) return;
                    Fa(Oe, "resize", Qa), Fa(Oe, "scroll", Pa)
                }
            }, Me.kill = function(e, t) {
                Me.disable(e, t), ee && ee.kill(), o && delete mt[o];
                var r = vt.indexOf(Me);
                vt.splice(r, 1), r === Je && 0 < bt && Je--, r = 0, vt.forEach(function(e) {
                    return e.scroller === Me.scroller && (r = 1)
                }), r || (Me.scroll.rec = 0), k && (k.scrollTrigger = null, e && k.render(-1), t || k.kill()), L && [L, R, I, F].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }), pe && (n && (n.uncache = 1), r = 0, vt.forEach(function(e) {
                    return e.pin === pe && r++
                }), r || (n.spacer = 0))
            }, Me.enable(!1, !1), k && k.add && !B ? Le.delayedCall(.01, function() {
                return A || z || Me.refresh()
            }) && (B = .01) && (A = z = 0) : Me.refresh()
        } else this.update = this.refresh = this.kill = J
    }, ScrollTrigger.register = function register(e) {
        if (!o && (Le = e || M(), L() && window.document && (Ne = window, Re = document, Ie = Re.documentElement, Fe = Re.body), Le && (Be = Le.utils.toArray, Ve = Le.utils.clamp, Ke = Le.core.suppressOverwrites || J, Le.core.globals("ScrollTrigger", ScrollTrigger), Fe))) {
            s = Ne.requestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }, Ea(Ne, "wheel", Pa), i = [Ne, Re, Ie, Fe], Ea(Re, "scroll", Pa);
            var t, r = Fe.style,
                n = r.borderTopStyle;
            r.borderTopStyle = "solid", t = dt(Fe), pt.m = Math.round(t.top + pt.sc()) || 0, ft.m = Math.round(t.left + ft.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), c = setInterval(Oa, 200), Le.delayedCall(.5, function() {
                return Ye = 0
            }), Ea(Re, "touchcancel", J), Ea(Fe, "touchstart", J), Da(Ea, Re, "pointerdown,touchstart,mousedown", function() {
                return je = 1
            }), Da(Ea, Re, "pointerup,touchend,mouseup", function() {
                return je = 0
            }), u = Le.utils.checkPrefix("transform"), q.push(u), o = qe(), a = Le.delayedCall(.2, B).pause(), d = [Re, "visibilitychange", function() {
                var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                Re.hidden ? (f = e, p = t) : f === e && p === t || Qa()
            }, Re, "DOMContentLoaded", B, Ne, "load", function() {
                return $e || B()
            }, Ne, "resize", Qa], U(Ea)
        }
        return o
    }, ScrollTrigger.defaults = function defaults(e) {
        for (var t in e) ht[t] = e[t]
    }, ScrollTrigger.kill = function kill() {
        Ge = 0, vt.slice(0).forEach(function(e) {
            return e.kill(1)
        })
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (Ue = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(Oa, t), "autoRefreshEvents" in e && (U(Fa) || U(Ea, e.autoRefreshEvents || "none"), r = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Be(e)[0],
            n = v.indexOf(r),
            i = N(r);
        ~n && v.splice(n, i ? 6 : 2), i ? Ze.unshift(Ne, t, Fe, t, Ie, t) : Ze.unshift(r, t)
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, i, o;
        for (r in e) n = A.indexOf(r), i = e[r], "all" === (He = r) ? i() : (t = Ne.matchMedia(r)) && (t.matches && (o = i()), ~n ? (A[n + 1] = $(A[n + 1], i), A[n + 2] = $(A[n + 2], o)) : (n = A.length, A.push(r, i, o), t.addListener ? t.addListener(Wa) : t.addEventListener("change", Wa)), A[n + 3] = t.matches), He = 0;
        return A
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (A.length = 0), 0 <= (e = A.indexOf(e)) && A.splice(e, 4)
    }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (V(e) ? Be(e)[0] : e).getBoundingClientRect(),
            i = n[r ? tt : rt] * t || 0;
        return r ? 0 < n.right - i && n.left + i < Ne.innerWidth : 0 < n.bottom - i && n.top + i < Ne.innerHeight
    }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        V(e) && (e = Be(e)[0]);
        var n = e.getBoundingClientRect(),
            i = n[r ? tt : rt],
            o = null == t ? i / 2 : t in S ? S[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return r ? (n.left + o) / Ne.innerWidth : (n.top + o) / Ne.innerHeight
    }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        o || ScrollTrigger.register(Le) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    te.version = "3.8.0", te.saveStyles = function(e) {
        return e ? Be(e).forEach(function(e) {
            if (e && e.style) {
                var t = R.indexOf(e);
                0 <= t && R.splice(t, 5), R.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Le.core.getCache(e), He)
            }
        }) : R
    }, te.revert = function(e, t) {
        return F(!e, t)
    }, te.create = function(e, t) {
        return new te(e, t)
    }, te.refresh = function(e) {
        return e ? Qa() : B(!0)
    }, te.update = j, te.clearScrollMemory = ab, te.maxScroll = function(e, t) {
        return T(e, t ? ft : pt)
    }, te.getScrollFunc = function(e, t) {
        return P(Be(e)[0], t ? ft : pt)
    }, te.getById = function(e) {
        return mt[e]
    }, te.getAll = function() {
        return vt.slice(0)
    }, te.isScrolling = function() {
        return !!$e
    }, te.addEventListener = function(e, t) {
        var r = k[e] || (k[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, te.removeEventListener = function(e, t) {
        var r = k[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, te.batch = function(e, t) {
        function wj(e, t) {
            var r = [],
                n = [],
                i = Le.delayedCall(o, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
        }
        var r, n = [],
            i = {},
            o = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && W(t[r]) && "onRefreshInit" !== r ? wj(0, t[r]) : t[r];
        return W(a) && (a = a(), Ea(te, "refresh", function() {
            return a = t.batchMax()
        })), Be(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(te.create(t))
        }), n
    }, te.sort = function(e) {
        return vt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, M() && Le.registerPlugin(te), e.ScrollTrigger = te, e.default = te;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});