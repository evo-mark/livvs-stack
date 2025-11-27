import { Head, createInertiaApp, router, useForm, usePage } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { computed, createBlock, createSSRApp, createTextVNode, createVNode, getCurrentInstance, getCurrentScope, h, inject, isRef, mergeModels, mergeProps, onMounted, onScopeDispose, onUnmounted, openBlock, reactive, ref, renderSlot, resolveComponent, toValue, unref, useAttrs, useModel, useSSRContext, watch, withCtx, withModifiers } from "vue";
import useInertiaI18nVue from "inertia-i18n/vue";
import { ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { VApp } from "vuetify/components/VApp";
import { mdiAccount, mdiEye, mdiEyeOff, mdiLogoutVariant, mdiPlus } from "@mdi/js";
import { VAppBar } from "vuetify/components/VAppBar";
import { VDivider } from "vuetify/components/VDivider";
import { VList, VListItem } from "vuetify/components/VList";
import { VMain } from "vuetify/components/VMain";
import { VNavigationDrawer } from "vuetify/components/VNavigationDrawer";
import { registerComponents } from "vue3-auto-vite-components";
import { parse, stringify } from "qs";
import { lowerCase, omit, pick } from "es-toolkit";
import { castArray } from "es-toolkit/compat";
import SvgIcon from "vue3-icon";
import { createVuetify, useTheme } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";
import LuxonAdapter from "@date-io/luxon";
import { createPinia, defineStore } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { VFooter } from "vuetify/components/VFooter";
import { VToolbar } from "vuetify/components/VToolbar";
import { usePreferredDark } from "@vueuse/core";
import { VIcon } from "vuetify/components/VIcon";
import { VSwitch } from "vuetify/components/VSwitch";
import { VTextField } from "vuetify/components/VTextField";
import { VCol, VContainer, VRow } from "vuetify/components/VGrid";
import { VBtn } from "vuetify/components/VBtn";
import { VCard, VCardText } from "vuetify/components/VCard";
import { VForm } from "vuetify/components/VForm";
import { VCheckbox } from "vuetify/components/VCheckbox";
var __defProp = Object.defineProperty;
var __export = (all, symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var _sfc_main$14 = {
	__name: "Wrapper",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(VApp, _attrs, {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(ssrRenderComponent(unref(Head), { title: `${_ctx.$page.props.meta?.title}` }, null, _parent$1, _scopeId));
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push$1, _parent$1, _scopeId);
					} else return [createVNode(unref(Head), { title: `${_ctx.$page.props.meta?.title}` }, null, 8, ["title"]), renderSlot(_ctx.$slots, "default")];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Wrapper.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Wrapper_default = _sfc_main$14;
var _sfc_main$13 = {
	__name: "DefaultLayout",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_EvoLogo = resolveComponent("EvoLogo");
			const _component_EvoSidebarNavigation = resolveComponent("EvoSidebarNavigation");
			const _component_EvoAppBarThemeSwitcher = resolveComponent("EvoAppBarThemeSwitcher");
			_push(ssrRenderComponent(Wrapper_default, _attrs, {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(ssrRenderComponent(VNavigationDrawer, null, {
							append: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(ssrRenderComponent(VList, { nav: "" }, {
									default: withCtx((_$2, _push$3, _parent$3, _scopeId$2) => {
										if (_push$3) _push$3(ssrRenderComponent(VListItem, {
											title: "Logout",
											"prepend-icon": unref(mdiLogoutVariant),
											to: "auth.logout",
											method: "delete"
										}, null, _parent$3, _scopeId$2));
										else return [createVNode(VListItem, {
											title: "Logout",
											"prepend-icon": unref(mdiLogoutVariant),
											to: "auth.logout",
											method: "delete"
										}, null, 8, ["prepend-icon"])];
									}),
									_: 1
								}, _parent$2, _scopeId$1));
								else return [createVNode(VList, { nav: "" }, {
									default: withCtx(() => [createVNode(VListItem, {
										title: "Logout",
										"prepend-icon": unref(mdiLogoutVariant),
										to: "auth.logout",
										method: "delete"
									}, null, 8, ["prepend-icon"])]),
									_: 1
								})];
							}),
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) {
									_push$2(`<div class="py-4 px-4"${_scopeId$1}>`);
									_push$2(ssrRenderComponent(_component_EvoLogo, null, null, _parent$2, _scopeId$1));
									_push$2(`</div>`);
									_push$2(ssrRenderComponent(VDivider, null, null, _parent$2, _scopeId$1));
									_push$2(ssrRenderComponent(_component_EvoSidebarNavigation, null, null, _parent$2, _scopeId$1));
								} else return [
									createVNode("div", { class: "py-4 px-4" }, [createVNode(_component_EvoLogo)]),
									createVNode(VDivider),
									createVNode(_component_EvoSidebarNavigation)
								];
							}),
							_: 1
						}, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VAppBar, null, {
							append: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(ssrRenderComponent(_component_EvoAppBarThemeSwitcher, null, null, _parent$2, _scopeId$1));
								else return [createVNode(_component_EvoAppBarThemeSwitcher)];
							}),
							_: 1
						}, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VMain, null, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push$2, _parent$2, _scopeId$1);
								else return [renderSlot(_ctx.$slots, "default")];
							}),
							_: 3
						}, _parent$1, _scopeId));
					} else return [
						createVNode(VNavigationDrawer, null, {
							append: withCtx(() => [createVNode(VList, { nav: "" }, {
								default: withCtx(() => [createVNode(VListItem, {
									title: "Logout",
									"prepend-icon": unref(mdiLogoutVariant),
									to: "auth.logout",
									method: "delete"
								}, null, 8, ["prepend-icon"])]),
								_: 1
							})]),
							default: withCtx(() => [
								createVNode("div", { class: "py-4 px-4" }, [createVNode(_component_EvoLogo)]),
								createVNode(VDivider),
								createVNode(_component_EvoSidebarNavigation)
							]),
							_: 1
						}),
						createVNode(VAppBar, null, {
							append: withCtx(() => [createVNode(_component_EvoAppBarThemeSwitcher)]),
							_: 1
						}),
						createVNode(VMain, null, {
							default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
							_: 3
						})
					];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/DefaultLayout.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var DefaultLayout_default = _sfc_main$13;
const createInertiaPageResolver = (pages) => {
	return async function(name) {
		const resolvedPage = pages[`./pages/${name}.vue`];
		if (!resolvedPage) return h("div", { class: "flex justify-center items-center min-h-screen bg-slate-700 text-white text-2xl" }, [h("span", "Unable to find page: "), h("span", { class: "px-2 font-bold" }, name)]);
		const page = typeof resolvedPage === "function" ? await resolvedPage() : resolvedPage;
		page.default.layout = page.default.layout ?? DefaultLayout_default;
		return page;
	};
};
var C = Symbol.for("inertia-routes"), D = () => inject(C);
var w = class {
	constructor(e, t, r) {
		this.name = e, this.definition = t, this.bindings = t.bindings ?? {}, this.wheres = t.wheres ?? {}, this.config = r;
	}
	get template() {
		let e = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
		return e === "" ? "/" : e;
	}
	get origin() {
		return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
	}
	get parameterSegments() {
		return this.template.match(/{[^}?]+\??}/g)?.map((e) => ({
			name: e.replace(/{|\??}/g, ""),
			required: !/\?}$/.test(e)
		})) ?? [];
	}
	matchesUrl(e) {
		if (!this.definition.methods.includes("GET")) return !1;
		let t = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (l, s, c, a) => {
			let d = `(?<${c}>${this.wheres[c]?.replace(/(^\^)|(\$$)/g, "") || "[^/?]+"})`;
			return a ? `(${s}${d})?` : `${s}${d}`;
		}).replace(/^\w+:\/\//, ""), [r, o] = e.replace(/^\w+:\/\//, "").split("?"), i = (/* @__PURE__ */ new RegExp(`^${t}/?$`)).exec(r) ?? (/* @__PURE__ */ new RegExp(`^${t}/?$`)).exec(decodeURI(r));
		if (i) {
			for (let l in i.groups) i.groups[l] = typeof i.groups[l] == "string" ? decodeURIComponent(i.groups[l]) : i.groups[l];
			return {
				params: i.groups,
				query: parse(o)
			};
		}
		return !1;
	}
	compile(e) {
		return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (r, o, i) => {
			if (!i && [null, void 0].includes(e[o])) throw new Error(`Ziggy error: '${o}' parameter is required for route '${this.name}'.`);
			if (this.wheres[o] && !(/* @__PURE__ */ new RegExp(`^${i ? `(${this.wheres[o]})?` : this.wheres[o]}$`)).test(e[o] ?? "")) throw new Error(`Ziggy error: '${o}' parameter '${e[o]}' does not match required format '${this.wheres[o]}' for route '${this.name}'.`);
			return encodeURI(e[o] ?? "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
		}).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
	}
};
var T = class extends String {
	constructor(e, t, r = !0, o) {
		if (super(), this._config = o ?? (typeof Ziggy < "u" ? Ziggy : globalThis?.Ziggy), this._config = {
			...this._config,
			absolute: r
		}, e) {
			if (!this._config.routes[e]) throw new Error(`Ziggy error: route '${e}' is not in the route list.`);
			this._route = new w(e, this._config.routes[e], this._config), this._params = this._parse(t);
		}
	}
	toString() {
		let e = Object.keys(this._params).filter((t) => !this._route.parameterSegments.some(({ name: r }) => r === t)).filter((t) => t !== "_query").reduce((t, r) => ({
			...t,
			[r]: this._params[r]
		}), {});
		return this._route.compile(this._params) + stringify({
			...e,
			...this._params._query
		}, {
			addQueryPrefix: !0,
			arrayFormat: "indices",
			encodeValuesOnly: !0,
			skipNulls: !0,
			encoder: (t, r) => typeof t == "boolean" ? Number(t) : r(t)
		});
	}
	_unresolve(e) {
		e ? this._config.absolute && e.startsWith("/") && (e = this._location().host + e) : e = this._currentUrl();
		let t = {}, [r, o] = Object.entries(this._config.routes).find(([i, l]) => t = new w(i, l, this._config).matchesUrl(e)) || [void 0, void 0];
		return {
			name: r,
			...t,
			route: o
		};
	}
	_currentUrl() {
		let { host: e, pathname: t, search: r } = this._location();
		return (this._config.absolute ? e + t : t.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + r;
	}
	current(e, t) {
		let { name: r, params: o, query: i, route: l } = this._unresolve();
		if (!e) return r;
		let s = (/* @__PURE__ */ new RegExp(`^${e.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`)).test(r);
		if ([null, void 0].includes(t) || !s) return s;
		let c = new w(r, l, this._config);
		t = this._parse(t, c);
		let a = {
			...o,
			...i
		};
		if (Object.values(t).every((g) => !g) && !Object.values(a).some((g) => g !== void 0)) return !0;
		let d = (g, h$1) => Object.entries(g).every(([f, y]) => Array.isArray(y) && Array.isArray(h$1[f]) ? y.every((_) => h$1[f].includes(_)) : typeof y == "object" && typeof h$1[f] == "object" && y !== null && h$1[f] !== null ? d(y, h$1[f]) : h$1[f] == y);
		return d(t, a);
	}
	_location() {
		let { host: e = "", pathname: t = "", search: r = "" } = typeof window < "u" ? window.location : {};
		return {
			host: this._config.location?.host ?? e,
			pathname: this._config.location?.pathname ?? t,
			search: this._config.location?.search ?? r
		};
	}
	get params() {
		let { params: e, query: t } = this._unresolve();
		return {
			...e,
			...t
		};
	}
	get routeParams() {
		return this._unresolve().params;
	}
	get queryParams() {
		return this._unresolve().query;
	}
	has(e) {
		return this._config.routes.hasOwnProperty(e);
	}
	_parse(e = {}, t = this._route) {
		e ??= {}, e = ["string", "number"].includes(typeof e) ? [e] : e;
		let r = t.parameterSegments.filter(({ name: o }) => !this._config.defaults[o]);
		return Array.isArray(e) ? e = e.reduce((o, i, l) => r[l] ? {
			...o,
			[r[l].name]: i
		} : typeof i == "object" ? {
			...o,
			...i
		} : {
			...o,
			[i]: ""
		}, {}) : r.length === 1 && !e[r[0].name] && (e.hasOwnProperty(Object.values(t.bindings)[0]) || e.hasOwnProperty("id")) && (e = { [r[0].name]: e }), {
			...this._defaults(t),
			...this._substituteBindings(e, t)
		};
	}
	_defaults(e) {
		return e.parameterSegments.filter(({ name: t }) => this._config.defaults[t]).reduce((t, { name: r }, o) => ({
			...t,
			[r]: this._config.defaults[r]
		}), {});
	}
	_substituteBindings(e, { bindings: t, parameterSegments: r }) {
		return Object.entries(e).reduce((o, [i, l]) => {
			if (!l || typeof l != "object" || Array.isArray(l) || !r.some(({ name: s }) => s === i)) return {
				...o,
				[i]: l
			};
			if (!l.hasOwnProperty(t[i])) if (l.hasOwnProperty("id")) t[i] = "id";
			else throw new Error(`Ziggy error: object passed as '${i}' parameter is missing route model binding key '${t[i]}'.`);
			return {
				...o,
				[i]: l[t[i]]
			};
		}, {});
	}
	valueOf() {
		return this.toString();
	}
};
function L(n, e, t, r) {
	let o = new T(n, e, t, r);
	return n ? o.toString() : o;
}
var S = reactive({});
function ae(n) {
	return n.initialPage.props.ziggy && (Object.keys(n.initialPage.props.ziggy).forEach((e) => {
		S[e] = n.initialPage.props.ziggy[e];
	}), typeof S.location == "string" && (S.location = new URL(S.location))), { install: (e, t = {}) => {
		let r = t.global ?? !0, o = ((...i) => (i[0] ??= void 0, i[1] ??= void 0, i[2] ??= !0, i[3] ??= S, S.location && typeof window < "u" && (S.location = null), L(...i)));
		e.provide(C, o), r && (e.config.globalProperties.$route = o);
	} };
}
var F = (n) => {
	let e = D();
	return computed(() => {
		let t = toValue(n);
		for (; isRef(t);) t = toValue(t);
		if (t) {
			if (typeof t == "string" && /^http/.test(t)) return t;
			if (Array.isArray(t)) {
				let [r, o] = t;
				return r ? typeof o != "object" ? e(r) : e(r, toValue(o)) : "#";
			} else return t ? e(t) : "#";
		} else return console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp"), "#";
	});
};
function W(n) {
	return getCurrentScope() ? (onScopeDispose(n), !0) : !1;
}
var k = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var _e = Object.prototype.toString, B = (n) => _e.call(n) === "[object Object]";
function z(n) {
	return Object.entries(n);
}
function R(n) {
	return Array.isArray(n) ? n : [n];
}
function H(n) {
	let e = Object.create(null);
	return (t) => e[t] || (e[t] = n(t));
}
var xe = /\B([A-Z])/g;
H((n) => n.replace(xe, "-$1").toLowerCase());
var Te = /-(\w)/g;
H((n) => n.replace(Te, (e, t) => t ? t.toUpperCase() : ""));
function q(n, e, t) {
	return watch(n, e, {
		...t,
		immediate: !0
	});
}
var X = k ? window : void 0;
k && window.document;
k && window.navigator;
k && window.location;
function Ce(n) {
	var e;
	let t = toValue(n);
	return (e = t?.$el) != null ? e : t;
}
function Y(...n) {
	let e = [], t = () => {
		e.forEach((s) => s()), e.length = 0;
	}, r = (s, c, a, d) => (s.addEventListener(c, a, d), () => s.removeEventListener(c, a, d)), o = computed(() => {
		let s = R(toValue(n[0])).filter((c) => c != null);
		return s.every((c) => typeof c != "string") ? s : void 0;
	}), i = q(() => {
		var s, c;
		return [
			(c = (s = o.value) == null ? void 0 : s.map((a) => Ce(a))) != null ? c : [X].filter((a) => a != null),
			R(toValue(o.value ? n[1] : n[0])),
			R(unref(o.value ? n[2] : n[1])),
			toValue(o.value ? n[3] : n[2])
		];
	}, ([s, c, a, d]) => {
		if (t(), !s?.length || !c?.length || !a?.length) return;
		let g = B(d) ? { ...d } : d;
		e.push(...s.flatMap((h$1) => c.flatMap((f) => a.map((y) => r(h$1, f, y, g)))));
	}, { flush: "post" }), l = () => {
		i(), t();
	};
	return W(t), l;
}
var K = [
	"hash",
	"host",
	"hostname",
	"href",
	"pathname",
	"port",
	"protocol",
	"search"
];
function Z(n = {}) {
	let { window: e = X } = n, t = Object.fromEntries(K.map((i) => [i, ref()]));
	for (let [i, l] of z(t)) watch(l, (s) => {
		!e?.location || e.location[i] === s || (e.location[i] = s);
	});
	let r = (i) => {
		var l;
		let { state: s, length: c } = e?.history || {}, { origin: a } = e?.location || {};
		for (let d of K) t[d].value = (l = e?.location) == null ? void 0 : l[d];
		return reactive({
			trigger: i,
			state: s,
			length: c,
			origin: a,
			...t
		});
	}, o = ref(r("load"));
	if (e) {
		let i = { passive: !0 };
		Y(e, "popstate", () => o.value = r("popstate"), i), Y(e, "hashchange", () => o.value = r("hashchange"), i);
	}
	return o;
}
Number.POSITIVE_INFINITY;
var P = ref(), Ue = [
	"cache-for",
	"data",
	"method",
	"replace",
	"prefetch",
	"preserve-scroll",
	"preserve-state",
	"only",
	"except",
	"headers",
	"query-string-array-format",
	"on-before",
	"on-start",
	"on-progress",
	"on-finish",
	"on-cancel",
	"on-cancel-token",
	"on-error",
	"on-success",
	"async"
], We = (n) => n.replace(/-./g, (e) => e[1].toUpperCase()), Be = (n, e) => [
	"replace",
	"preserve-scroll",
	"preserve-state",
	"async"
].includes(n) ? !0 : n === "prefetch" ? e ? castArray(e) : ["hover"] : ["method"].includes(n) && typeof e == "string" ? lowerCase(e) : e, ze = (n) => {
	let e = Ue.reduce((t, r) => (typeof n[r] < "u" && (t[We(r)] = Be(r, n[r])), t), {});
	return e.method || (e.method = "get"), e;
}, He = (n) => {
	let e = getCurrentInstance(), t = new AbortController(), r = Z();
	P.value || (P.value = `${r.value.origin}${r.value.pathname}`);
	let o = F(n.to), l = ze(useAttrs());
	return onMounted(() => {
		let { prefetch: s } = l, c = () => {
			router.prefetch(o.value, omit(l, ["cacheFor"]), pick(l, ["cacheFor"]));
		};
		Array.isArray(s) && s?.length > 0 && (s.includes("mount") && c(), s.includes("hover") && e && e.proxy?.$el && e.proxy.$el.addEventListener("mouseenter", c, { signal: t.signal }), s.includes("click") && e && e.proxy?.$el && e.proxy.$el.addEventListener("click", c, { signal: t.signal }));
	}), onUnmounted(() => t.abort()), {
		route: computed(() => ({ href: o.value })),
		isExactActive: computed(() => P.value === o.value),
		isActive: computed(() => P.value?.startsWith(o.value) ?? !1),
		navigate(s) {
			s.shiftKey || s.metaKey || s.ctrlKey || (s.preventDefault(), P.value = o.value, router.visit(o.value, omit(l, ["prefetch", "cacheFor"])));
		}
	};
}, qe = {
	name: "RouterLink",
	useLink: He
}, Ge = { install: (n) => {
	n.component("RouterLink", qe);
} };
var vuetify_default = createVuetify({
	date: {
		adapter: LuxonAdapter,
		locale: { en: "en-GB" }
	},
	locale: { locale: "en" },
	defaults: {
		VSwitch: {
			color: "primary",
			hideDetails: "auto"
		},
		VCheckbox: { color: "primary" }
	},
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: { mdi }
	},
	theme: {
		defaultTheme: "light",
		themes: {
			light: {
				dark: false,
				colors: {
					primary: "#56faae",
					secondary: "#e49273"
				}
			},
			dark: {
				dark: true,
				colors: {
					primary: "#696CFF",
					secondary: "#e49273"
				}
			}
		}
	}
});
var __plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
var Footer_exports = /* @__PURE__ */ __export({ default: () => Footer_default });
var _sfc_main$12 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
	_push(ssrRenderComponent(VFooter, mergeProps({ class: "bg-slate-900 py-1 text-white" }, _attrs), {
		default: withCtx((_, _push$1, _parent$1, _scopeId) => {
			if (_push$1) _push$1(`<div class="container"${_scopeId}>This is the Footer</div>`);
			else return [createVNode("div", { class: "container" }, "This is the Footer")];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sync/Footer.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var Footer_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main$12, [["ssrRender", _sfc_ssrRender$2]]);
var Header_exports = /* @__PURE__ */ __export({ default: () => Header_default });
var _sfc_main$11 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(ssrRenderComponent(VToolbar, mergeProps({ class: "bg-slate-700 py-4 text-white" }, _attrs), {
		default: withCtx((_, _push$1, _parent$1, _scopeId) => {
			if (_push$1) _push$1(`<div class="container"${_scopeId}>This is the toolbar</div>`);
			else return [createVNode("div", { class: "container" }, "This is the toolbar")];
		}),
		_: 1
	}, _parent));
}
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sync/Header.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var Header_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main$11, [["ssrRender", _sfc_ssrRender$1]]);
var Logo_exports = /* @__PURE__ */ __export({ default: () => Logo_default });
var _sfc_main$10 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		x: "0px",
		y: "0px",
		viewBox: "0 0 769.4 120",
		style: { "enable-background": "new 0 0 769.4 120" },
		"xml:space": "preserve"
	}, _attrs))} data-v-38a918f4><path class="fill-neutral-900 dark:fill-white" d="M194.9,77.3c7.8,10,20.4,10.2,23.2,10.2c9.2,0,16.9-3.1,22.6-9.5l7.8,9.2c-7.1,8.3-17.9,12.7-30.9,12.7
	c-25.3,0-42.1-16.7-42.1-40.1S192.3,20,214.9,20s38.8,16.3,38.8,40.4c0,1.2-0.1,3-0.3,4.3h-55V54.4h41.7
	C238.6,41.3,228.7,32,214.9,32c-6.2-0.1-12.3,2.1-17,6.1c-8.5,7.5-8.5,18.4-8.4,21.7C189.5,62.8,189.6,70.4,194.9,77.3z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M341.2,20.7l-34.3,78.4h-14.5l-34.3-78.4h14.8l26.9,62.9l27.5-62.9H341.2z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M345,59.9c0-23.4,17.3-39.9,40.8-39.9c23.5,0,40.7,16.6,40.7,39.9S409.3,100,385.8,100
	C362.4,100,345,83.3,345,59.9z M412.2,59.9c0-16.7-11.2-27.5-26.3-27.5s-26.5,10.8-26.5,27.5s11.4,27.6,26.5,27.6
	C400.9,87.6,412.2,76.6,412.2,59.9z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M519.5,99.3L519.4,34l-32,55.2h-2.7l-32-55v65.2h-5.4V23h4.7l34.2,59l34.2-59h4.6l0.1,76.4L519.5,99.3z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M598.9,77.8h-44.3l-9.7,21.5h-6L574,23h5.6l35.1,76.4h-6L598.9,77.8z M596.8,73.1L576.7,29l-20,44.1H596.8z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M681.6,99.3l-18.2-25.5c-2.5,0.3-4.9,0.5-7.4,0.5h-21.8v25h-5.6V23H656c19.2,0,30.8,9.6,30.8,25.8
	c0,12.1-6.5,20.5-17.9,23.9l19.1,26.7L681.6,99.3z M656,69.4c16.4,0,25.1-7.6,25.1-20.7S672.3,28,656,28h-21.8v41.5L656,69.4z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M729.8,61.7l-17.1,17.6v20.1h-5.6V23h5.6v49.1L760.4,23h6.8l-33.6,34.7l35.9,41.7h-6.8L729.8,61.7z" data-v-38a918f4></path><path class="st1" d="M112.6,10.8L31.1,92.3L13.8,75L0,88.9L31.1,120l95.3-95.3C122.6,19.3,117.9,14.6,112.6,10.8z" data-v-38a918f4></path><path class="fill-neutral-900 dark:fill-white" d="M45.7,77.7L31.5,91.9c-36.7-54.1,27-117.7,81.1-81L98.4,25C64.3,5.2,25.9,43.6,45.7,77.7z M136.8,53l-19.3,5.2
	c0.9,24.8-25.1,44.7-48.8,37.4l-15.1,15.1C93.6,130.6,141.3,97.6,136.8,53L136.8,53z" data-v-38a918f4></path></svg>`);
}
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sync/Logo.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var Logo_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main$10, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-38a918f4"]]);
const useUserPreferencesStore = defineStore("userPreferences", () => {
	const vuetifyTheme = useTheme();
	const theme = ref(!usePreferredDark().value ? "light" : "dark");
	watch(theme, (v) => {
		vuetifyTheme.change(v);
		const isDark = v === "dark";
		if (typeof window !== "undefined") document.documentElement.classList.toggle("dark", isDark);
	}, { immediate: true });
	return { theme };
}, { persist: true });
var ThemeSwitcher_exports = /* @__PURE__ */ __export({ default: () => ThemeSwitcher_default });
var _sfc_main$9 = {
	__name: "ThemeSwitcher",
	__ssrInlineRender: true,
	setup(__props) {
		const userPreferencesStore = useUserPreferencesStore();
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(VSwitch, mergeProps({
				modelValue: unref(userPreferencesStore).theme,
				"onUpdate:modelValue": ($event) => unref(userPreferencesStore).theme = $event,
				class: "theme-switcher",
				inset: "",
				density: "compact",
				color: unref(userPreferencesStore).theme === "light" ? "yellow-darken-3" : "black",
				"false-value": "dark",
				"true-value": "light"
			}, _attrs), {
				thumb: withCtx(({ model }, _push$1, _parent$1, _scopeId) => {
					if (_push$1) _push$1(ssrRenderComponent(VIcon, {
						key: model.value,
						size: "18",
						icon: model.value === "light" ? "mdi-weather-sunny" : "mdi-weather-night"
					}, null, _parent$1, _scopeId));
					else return [(openBlock(), createBlock(VIcon, {
						key: model.value,
						size: "18",
						icon: model.value === "light" ? "mdi-weather-sunny" : "mdi-weather-night"
					}, null, 8, ["icon"]))];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sync/app-bar/ThemeSwitcher.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var ThemeSwitcher_default = _sfc_main$9;
var Password_exports = /* @__PURE__ */ __export({ default: () => Password_default });
var _sfc_main$8 = {
	__name: "Password",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({
		error: {
			type: [String, Array],
			default: null
		},
		label: {
			type: String,
			default: "Password"
		}
	}, {
		"modelValue": {
			type: String,
			default: ""
		},
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const modelValue = useModel(__props, "modelValue");
		const show = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(VTextField, mergeProps({
				modelValue: modelValue.value,
				"onUpdate:modelValue": ($event) => modelValue.value = $event,
				label: __props.label,
				placeholder: "············",
				type: unref(show) ? "text" : "password",
				"append-inner-icon": unref(show) ? unref(mdiEyeOff) : unref(mdiEye),
				"error-messages": __props.error,
				"onClick:appendInner": ($event) => show.value = !unref(show)
			}, _attrs), null, _parent));
		};
	}
};
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sync/input/Password.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Password_default = _sfc_main$8;
var Navigation_exports = /* @__PURE__ */ __export({ default: () => Navigation_default });
var _sfc_main$7 = {
	__name: "Navigation",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(VList, mergeProps({ nav: "" }, _attrs), {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(ssrRenderComponent(VListItem, {
							title: "Testing One",
							"prepend-icon": unref(mdiAccount)
						}, null, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VListItem, {
							title: "Testing Two",
							"prepend-icon": unref(mdiAccount)
						}, null, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VListItem, {
							title: "Testing Three",
							"prepend-icon": unref(mdiAccount)
						}, null, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VListItem, {
							title: "Testing Four",
							"prepend-icon": unref(mdiAccount)
						}, null, _parent$1, _scopeId));
					} else return [
						createVNode(VListItem, {
							title: "Testing One",
							"prepend-icon": unref(mdiAccount)
						}, null, 8, ["prepend-icon"]),
						createVNode(VListItem, {
							title: "Testing Two",
							"prepend-icon": unref(mdiAccount)
						}, null, 8, ["prepend-icon"]),
						createVNode(VListItem, {
							title: "Testing Three",
							"prepend-icon": unref(mdiAccount)
						}, null, 8, ["prepend-icon"]),
						createVNode(VListItem, {
							title: "Testing Four",
							"prepend-icon": unref(mdiAccount)
						}, null, 8, ["prepend-icon"])
					];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/sync/sidebar/Navigation.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Navigation_default = _sfc_main$7;
var pinia = createPinia({});
pinia.use(piniaPluginPersistedstate);
const registerPlugins = (app) => {
	app.use(registerComponents, {
		namespace: "Evo",
		resolveIndex: true,
		sync: {
			"../components/sync/Footer.vue": Footer_exports,
			"../components/sync/Header.vue": Header_exports,
			"../components/sync/Logo.vue": Logo_exports,
			"../components/sync/app-bar/ThemeSwitcher.vue": ThemeSwitcher_exports,
			"../components/sync/input/Password.vue": Password_exports,
			"../components/sync/sidebar/Navigation.vue": Navigation_exports
		},
		async: {},
		asyncLoading: {}
	});
	app.use(vuetify_default);
	app.use(Ge);
	app.use(pinia);
	app.component("SvgIcon", SvgIcon);
};
var Dashboard_exports = /* @__PURE__ */ __export({ default: () => Dashboard_default });
var _sfc_main$6 = {
	__name: "Dashboard",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(VContainer, mergeProps({
				fluid: "",
				class: "h-full flex flex-col justify-center items-center"
			}, _attrs), {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(`<header class="flex items-center gap-4 mb-8"${_scopeId}><div${_scopeId}><svg class="size-18" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M41 9.88889L33 5.44444L25 9.88889M41 9.88889L33 14.3333M41 9.88889V18.7778L33 23.2222M25 9.88889V18.7778M25 9.88889L33 14.3333M25 18.7778L33 23.2222M25 18.7778L9 27.6667M33 23.2222V32.1111L17 41M33 23.2222V14.3333M33 23.2222L17 32.1111M9 27.6667L17 32.1111M9 27.6667V9.88889M1 5.44444L9 1L17 5.44444M1 5.44444V32.1111L17 41M1 5.44444L9 9.88889M17 41V32.1111M9 9.88889L17 5.44444M17 5.44444V23.2222" stroke="#F53003" stroke-width="1.5"${_scopeId}></path></svg></div><div${_scopeId}>`);
						_push$1(ssrRenderComponent(VIcon, { icon: unref(mdiPlus) }, null, _parent$1, _scopeId));
						_push$1(`</div><div${_scopeId}><svg class="h-18 mb-3" viewBox="0 0 110 20" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><g clip-path="url(#clip0_207_25158)"${_scopeId}><path class="fill-black dark:fill-white" d="M91.5651 6.37624H84.5156L91.3275 13.1881L84.5156 20H91.5651L98.377 13.1881L91.5651 6.37624Z"${_scopeId}></path><path class="fill-black dark:fill-white" d="M102.218 6.37624H95.1689L101.981 13.1881L95.1689 20H102.218L109.03 13.1881L102.218 6.37624Z"${_scopeId}></path><path class="fill-black dark:fill-white" d="M2.37662 6.05941H6.45583L4.07959 19.604H0.00038147L2.37662 6.05941ZM2.61424 2.45545C2.85187 1.14851 4.07959 0 5.42612 0C6.77266 0 7.68355 1.10891 7.48553 2.45545C7.28751 3.80198 6.02018 4.91089 4.63405 4.91089C3.24791 4.91089 2.41622 3.72277 2.61424 2.45545ZM21.5053 11.2871L20.04 19.604H16.0004L17.3469 11.8812C17.6637 10.1386 16.7133 9.42574 15.4063 9.42574C14.0598 9.42574 12.8321 10.2178 12.436 12.0396L11.0895 19.604H7.04989L9.42612 6.05941H13.5053L13.3073 7.32673C14.2182 6.29703 15.7628 5.66337 17.3073 5.66337C20.04 5.70297 22.139 7.68317 21.5053 11.2871ZM37.4261 12.8317C37.3865 13.1485 37.2281 13.901 36.9905 14.4554H27.2875C27.5251 15.9604 28.7925 16.3564 30.0598 16.3564C31.2083 16.3564 32.1192 16.0396 32.9113 15.2871L35.7628 17.6238C34.1786 19.2079 32.3172 20 29.8222 20C25.1489 20 22.6935 16.6337 23.3667 12.5941C23.6779 10.6669 24.6666 8.91403 26.1549 7.6508C27.6432 6.38756 29.5334 5.69687 31.4855 5.70297C35.3667 5.70297 38.1786 8.71287 37.4261 12.8317ZM33.5845 11.3663C33.4657 9.86139 32.3964 9.26733 31.1291 9.26733C30.4354 9.25486 29.7535 9.44738 29.1688 9.82076C28.584 10.1941 28.1225 10.7318 27.842 11.3663H33.5845ZM49.0697 5.78218L48.2776 10.3762C46.6935 10.1386 44.1192 10.6931 43.6439 13.4653L43.6836 13.3069L42.5746 19.604H38.535L40.9113 6.05941H44.9905L44.5548 8.51485C45.3865 6.65347 47.1687 5.78218 49.0697 5.78218ZM54.5746 14.7723C54.3766 16 55.3667 16.0792 57.1885 15.9208L56.5548 19.604C51.6836 20.1584 49.8618 18.5347 50.535 14.7723L51.3667 9.9802H49.1885L49.9014 6.05941H52.04L52.5152 3.48515L56.7925 2.25743L56.1192 6.05941H58.9311L58.2182 9.9802H55.4459L54.5746 14.7723ZM61.5053 6.05941H65.5845L63.2083 19.604H59.1291L61.5053 6.05941ZM61.743 2.45545C61.941 1.14851 63.2083 0 64.5548 0C65.9014 0 66.8123 1.10891 66.6143 2.45545C66.4162 3.80198 65.1489 4.91089 63.7628 4.91089C62.3766 4.91089 61.5053 3.72277 61.743 2.45545ZM82.4162 6.05941L80.04 19.604H75.9608L76.1192 18.6931C74.9605 19.6044 73.5125 20.0683 72.04 20C67.6439 20 65.9806 16.198 66.6935 12.5149C67.3271 9.0297 70.0994 5.70297 74.2974 5.70297C76.0796 5.70297 77.3469 6.41584 78.0994 7.52475L78.337 6.09901H82.4162V6.05941ZM77.1885 12.8713C77.5449 10.8119 76.436 9.54455 74.5746 9.54455C73.6539 9.53718 72.7625 9.86769 72.0691 10.4735C71.3757 11.0793 70.9285 11.9183 70.8123 12.8317C70.4558 14.8515 71.5251 16.1188 73.4261 16.1188C75.2479 16.1584 76.8321 14.8911 77.1885 12.8713Z"${_scopeId}></path></g><defs${_scopeId}><clipPath id="clip0_207_25158"${_scopeId}><rect width="109.03" height="20" fill="white"${_scopeId}></rect></clipPath></defs></svg></div><div${_scopeId}>`);
						_push$1(ssrRenderComponent(VIcon, { icon: unref(mdiPlus) }, null, _parent$1, _scopeId));
						_push$1(`</div><div${_scopeId}><svg class="size-18" viewBox="0 0 128 128"${_scopeId}><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"${_scopeId}></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"${_scopeId}></path></svg></div><div${_scopeId}>`);
						_push$1(ssrRenderComponent(VIcon, { icon: unref(mdiPlus) }, null, _parent$1, _scopeId));
						_push$1(`</div><div${_scopeId}><svg class="size-18" viewBox="0 0 300 265" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M152.94 59.0434L93.217 164.384L149.768 264.167L224.668 132.084L299.535 0H186.399L152.94 59.0434Z" fill="#1697F6"${_scopeId}></path><path d="M74.9006 132.084L78.823 139.03L134.692 40.4621L157.646 0H149.767H0L74.9006 132.084Z" fill="#AEDDFF"${_scopeId}></path><path d="M186.399 0C214.709 94.8516 149.767 264.167 149.767 264.167L93.2168 164.384L186.399 0Z" fill="#1867C0"${_scopeId}></path><path d="M157.646 0C38.3716 0 78.8233 139.03 78.8233 139.03L157.646 0Z" fill="#7BC6FF"${_scopeId}></path></svg></div></header><p class="font-display font-bold text-4xl"${_scopeId}>Welcome to evoMark&#39;s LIVV Stack</p>`);
					} else return [createVNode("header", { class: "flex items-center gap-4 mb-8" }, [
						createVNode("div", null, [(openBlock(), createBlock("svg", {
							class: "size-18",
							width: "42",
							height: "42",
							viewBox: "0 0 42 42",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createVNode("path", {
							d: "M41 9.88889L33 5.44444L25 9.88889M41 9.88889L33 14.3333M41 9.88889V18.7778L33 23.2222M25 9.88889V18.7778M25 9.88889L33 14.3333M25 18.7778L33 23.2222M25 18.7778L9 27.6667M33 23.2222V32.1111L17 41M33 23.2222V14.3333M33 23.2222L17 32.1111M9 27.6667L17 32.1111M9 27.6667V9.88889M1 5.44444L9 1L17 5.44444M1 5.44444V32.1111L17 41M1 5.44444L9 9.88889M17 41V32.1111M9 9.88889L17 5.44444M17 5.44444V23.2222",
							stroke: "#F53003",
							"stroke-width": "1.5"
						})]))]),
						createVNode("div", null, [createVNode(VIcon, { icon: unref(mdiPlus) }, null, 8, ["icon"])]),
						createVNode("div", null, [(openBlock(), createBlock("svg", {
							class: "h-18 mb-3",
							viewBox: "0 0 110 20",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg"
						}, [createVNode("g", { "clip-path": "url(#clip0_207_25158)" }, [
							createVNode("path", {
								class: "fill-black dark:fill-white",
								d: "M91.5651 6.37624H84.5156L91.3275 13.1881L84.5156 20H91.5651L98.377 13.1881L91.5651 6.37624Z"
							}),
							createVNode("path", {
								class: "fill-black dark:fill-white",
								d: "M102.218 6.37624H95.1689L101.981 13.1881L95.1689 20H102.218L109.03 13.1881L102.218 6.37624Z"
							}),
							createVNode("path", {
								class: "fill-black dark:fill-white",
								d: "M2.37662 6.05941H6.45583L4.07959 19.604H0.00038147L2.37662 6.05941ZM2.61424 2.45545C2.85187 1.14851 4.07959 0 5.42612 0C6.77266 0 7.68355 1.10891 7.48553 2.45545C7.28751 3.80198 6.02018 4.91089 4.63405 4.91089C3.24791 4.91089 2.41622 3.72277 2.61424 2.45545ZM21.5053 11.2871L20.04 19.604H16.0004L17.3469 11.8812C17.6637 10.1386 16.7133 9.42574 15.4063 9.42574C14.0598 9.42574 12.8321 10.2178 12.436 12.0396L11.0895 19.604H7.04989L9.42612 6.05941H13.5053L13.3073 7.32673C14.2182 6.29703 15.7628 5.66337 17.3073 5.66337C20.04 5.70297 22.139 7.68317 21.5053 11.2871ZM37.4261 12.8317C37.3865 13.1485 37.2281 13.901 36.9905 14.4554H27.2875C27.5251 15.9604 28.7925 16.3564 30.0598 16.3564C31.2083 16.3564 32.1192 16.0396 32.9113 15.2871L35.7628 17.6238C34.1786 19.2079 32.3172 20 29.8222 20C25.1489 20 22.6935 16.6337 23.3667 12.5941C23.6779 10.6669 24.6666 8.91403 26.1549 7.6508C27.6432 6.38756 29.5334 5.69687 31.4855 5.70297C35.3667 5.70297 38.1786 8.71287 37.4261 12.8317ZM33.5845 11.3663C33.4657 9.86139 32.3964 9.26733 31.1291 9.26733C30.4354 9.25486 29.7535 9.44738 29.1688 9.82076C28.584 10.1941 28.1225 10.7318 27.842 11.3663H33.5845ZM49.0697 5.78218L48.2776 10.3762C46.6935 10.1386 44.1192 10.6931 43.6439 13.4653L43.6836 13.3069L42.5746 19.604H38.535L40.9113 6.05941H44.9905L44.5548 8.51485C45.3865 6.65347 47.1687 5.78218 49.0697 5.78218ZM54.5746 14.7723C54.3766 16 55.3667 16.0792 57.1885 15.9208L56.5548 19.604C51.6836 20.1584 49.8618 18.5347 50.535 14.7723L51.3667 9.9802H49.1885L49.9014 6.05941H52.04L52.5152 3.48515L56.7925 2.25743L56.1192 6.05941H58.9311L58.2182 9.9802H55.4459L54.5746 14.7723ZM61.5053 6.05941H65.5845L63.2083 19.604H59.1291L61.5053 6.05941ZM61.743 2.45545C61.941 1.14851 63.2083 0 64.5548 0C65.9014 0 66.8123 1.10891 66.6143 2.45545C66.4162 3.80198 65.1489 4.91089 63.7628 4.91089C62.3766 4.91089 61.5053 3.72277 61.743 2.45545ZM82.4162 6.05941L80.04 19.604H75.9608L76.1192 18.6931C74.9605 19.6044 73.5125 20.0683 72.04 20C67.6439 20 65.9806 16.198 66.6935 12.5149C67.3271 9.0297 70.0994 5.70297 74.2974 5.70297C76.0796 5.70297 77.3469 6.41584 78.0994 7.52475L78.337 6.09901H82.4162V6.05941ZM77.1885 12.8713C77.5449 10.8119 76.436 9.54455 74.5746 9.54455C73.6539 9.53718 72.7625 9.86769 72.0691 10.4735C71.3757 11.0793 70.9285 11.9183 70.8123 12.8317C70.4558 14.8515 71.5251 16.1188 73.4261 16.1188C75.2479 16.1584 76.8321 14.8911 77.1885 12.8713Z"
							})
						]), createVNode("defs", null, [createVNode("clipPath", { id: "clip0_207_25158" }, [createVNode("rect", {
							width: "109.03",
							height: "20",
							fill: "white"
						})])])]))]),
						createVNode("div", null, [createVNode(VIcon, { icon: unref(mdiPlus) }, null, 8, ["icon"])]),
						createVNode("div", null, [(openBlock(), createBlock("svg", {
							class: "size-18",
							viewBox: "0 0 128 128"
						}, [createVNode("path", {
							fill: "#42b883",
							d: "M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
						}), createVNode("path", {
							fill: "#35495e",
							d: "M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
						})]))]),
						createVNode("div", null, [createVNode(VIcon, { icon: unref(mdiPlus) }, null, 8, ["icon"])]),
						createVNode("div", null, [(openBlock(), createBlock("svg", {
							class: "size-18",
							viewBox: "0 0 300 265",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg"
						}, [
							createVNode("path", {
								d: "M152.94 59.0434L93.217 164.384L149.768 264.167L224.668 132.084L299.535 0H186.399L152.94 59.0434Z",
								fill: "#1697F6"
							}),
							createVNode("path", {
								d: "M74.9006 132.084L78.823 139.03L134.692 40.4621L157.646 0H149.767H0L74.9006 132.084Z",
								fill: "#AEDDFF"
							}),
							createVNode("path", {
								d: "M186.399 0C214.709 94.8516 149.767 264.167 149.767 264.167L93.2168 164.384L186.399 0Z",
								fill: "#1867C0"
							}),
							createVNode("path", {
								d: "M157.646 0C38.3716 0 78.8233 139.03 78.8233 139.03L157.646 0Z",
								fill: "#7BC6FF"
							})
						]))])
					]), createVNode("p", { class: "font-display font-bold text-4xl" }, "Welcome to evoMark's LIVV Stack")];
				}),
				_: 1
			}, _parent));
		};
	}
};
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Dashboard_default = _sfc_main$6;
var Error_exports = /* @__PURE__ */ __export({ default: () => Error_default });
var _sfc_main$5 = /* @__PURE__ */ Object.assign({ layout: false }, {
	__name: "Error",
	__ssrInlineRender: true,
	props: { status: {
		type: Number,
		required: true
	} },
	setup(__props) {
		const props = __props;
		const title = computed(() => {
			return {
				503: "503: Service Unavailable",
				500: "500: Server Error",
				404: "404: Page Not Found",
				403: "403: Forbidden"
			}[props.status];
		});
		const description = computed(() => {
			return {
				503: "Sorry, we are doing some maintenance. Please check back soon.",
				500: "Whoops, something went wrong on our servers.",
				404: "Sorry, the page you are looking for could not be found.",
				403: "Sorry, you are forbidden from accessing this page."
			}[props.status];
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full h-full justify-center items-center text-center flex-col grow" }, _attrs))}><h1 class="text-4xl uppercase font-bold mb-8">${ssrInterpolate(unref(title))}</h1><div>${ssrInterpolate(unref(description))}</div></div>`);
		};
	}
});
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Error.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Error_default = _sfc_main$5;
var _sfc_main$4 = {
	__name: "BlankLayout",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(Wrapper_default, _attrs, {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) _push$1(ssrRenderComponent(VMain, null, {
						default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
							if (_push$2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push$2, _parent$2, _scopeId$1);
							else return [renderSlot(_ctx.$slots, "default")];
						}),
						_: 3
					}, _parent$1, _scopeId));
					else return [createVNode(VMain, null, {
						default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
						_: 3
					})];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/BlankLayout.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var BlankLayout_default = _sfc_main$4;
var ForgotPassword_exports = /* @__PURE__ */ __export({ default: () => ForgotPassword_default });
var _sfc_main$3 = /* @__PURE__ */ Object.assign({ layout: BlankLayout_default }, {
	__name: "ForgotPassword",
	__ssrInlineRender: true,
	setup(__props) {
		const route = D();
		const forgot = useForm({ email: "" });
		const onSendRequest = () => {
			forgot.post(route("auth.forgot-password.store"), { onSuccess() {
				forgot.reset();
			} });
		};
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-center container h-full" }, _attrs))}>`);
			_push(ssrRenderComponent(VCard, {
				title: `Welcome to ${_ctx.$page.props.app.name}`,
				"max-width": "448"
			}, {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(ssrRenderComponent(VCardText, null, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(`<p${_scopeId$1}>Please enter your email below and, if registered, we&#39;ll send you a link to reset your password.</p>`);
								else return [createVNode("p", null, "Please enter your email below and, if registered, we'll send you a link to reset your password.")];
							}),
							_: 1
						}, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VCardText, null, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(ssrRenderComponent(VForm, { onSubmit: onSendRequest }, {
									default: withCtx((_$2, _push$3, _parent$3, _scopeId$2) => {
										if (_push$3) _push$3(ssrRenderComponent(VRow, null, {
											default: withCtx((_$3, _push$4, _parent$4, _scopeId$3) => {
												if (_push$4) {
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(VTextField, {
																modelValue: unref(forgot).email,
																"onUpdate:modelValue": ($event) => unref(forgot).email = $event,
																autofocus: "",
																placeholder: "johndoe@email.com",
																label: "Email",
																type: "email",
																"error-messages": unref(forgot).errors.email
															}, null, _parent$5, _scopeId$4));
															else return [createVNode(VTextField, {
																modelValue: unref(forgot).email,
																"onUpdate:modelValue": ($event) => unref(forgot).email = $event,
																autofocus: "",
																placeholder: "johndoe@email.com",
																label: "Email",
																type: "email",
																"error-messages": unref(forgot).errors.email
															}, null, 8, [
																"modelValue",
																"onUpdate:modelValue",
																"error-messages"
															])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) {
																_push$5(`<div class="flex flex-wrap items-center justify-end gap-8"${_scopeId$4}>`);
																_push$5(ssrRenderComponent(VBtn, {
																	class: "text-capitalize text-primary",
																	variant: "text",
																	to: "auth.login"
																}, {
																	default: withCtx((_$5, _push$6, _parent$6, _scopeId$5) => {
																		if (_push$6) _push$6(`<span class="capitalize"${_scopeId$5}>Return to Login</span>`);
																		else return [createVNode("span", { class: "capitalize" }, "Return to Login")];
																	}),
																	_: 1
																}, _parent$5, _scopeId$4));
																_push$5(`</div>`);
															} else return [createVNode("div", { class: "flex flex-wrap items-center justify-end gap-8" }, [createVNode(VBtn, {
																class: "text-capitalize text-primary",
																variant: "text",
																to: "auth.login"
															}, {
																default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Return to Login")]),
																_: 1
															})])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(VBtn, {
																color: "primary",
																block: "",
																type: "submit"
															}, {
																default: withCtx((_$5, _push$6, _parent$6, _scopeId$5) => {
																	if (_push$6) _push$6(` Send Reset Request `);
																	else return [createTextVNode(" Send Reset Request ")];
																}),
																_: 1
															}, _parent$5, _scopeId$4));
															else return [createVNode(VBtn, {
																color: "primary",
																block: "",
																type: "submit"
															}, {
																default: withCtx(() => [createTextVNode(" Send Reset Request ")]),
																_: 1
															})];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
												} else return [
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(VTextField, {
															modelValue: unref(forgot).email,
															"onUpdate:modelValue": ($event) => unref(forgot).email = $event,
															autofocus: "",
															placeholder: "johndoe@email.com",
															label: "Email",
															type: "email",
															"error-messages": unref(forgot).errors.email
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"error-messages"
														])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-end gap-8" }, [createVNode(VBtn, {
															class: "text-capitalize text-primary",
															variant: "text",
															to: "auth.login"
														}, {
															default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Return to Login")]),
															_: 1
														})])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(VBtn, {
															color: "primary",
															block: "",
															type: "submit"
														}, {
															default: withCtx(() => [createTextVNode(" Send Reset Request ")]),
															_: 1
														})]),
														_: 1
													})
												];
											}),
											_: 1
										}, _parent$3, _scopeId$2));
										else return [createVNode(VRow, null, {
											default: withCtx(() => [
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(VTextField, {
														modelValue: unref(forgot).email,
														"onUpdate:modelValue": ($event) => unref(forgot).email = $event,
														autofocus: "",
														placeholder: "johndoe@email.com",
														label: "Email",
														type: "email",
														"error-messages": unref(forgot).errors.email
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"error-messages"
													])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-end gap-8" }, [createVNode(VBtn, {
														class: "text-capitalize text-primary",
														variant: "text",
														to: "auth.login"
													}, {
														default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Return to Login")]),
														_: 1
													})])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(VBtn, {
														color: "primary",
														block: "",
														type: "submit"
													}, {
														default: withCtx(() => [createTextVNode(" Send Reset Request ")]),
														_: 1
													})]),
													_: 1
												})
											]),
											_: 1
										})];
									}),
									_: 1
								}, _parent$2, _scopeId$1));
								else return [createVNode(VForm, { onSubmit: withModifiers(onSendRequest, ["prevent"]) }, {
									default: withCtx(() => [createVNode(VRow, null, {
										default: withCtx(() => [
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(VTextField, {
													modelValue: unref(forgot).email,
													"onUpdate:modelValue": ($event) => unref(forgot).email = $event,
													autofocus: "",
													placeholder: "johndoe@email.com",
													label: "Email",
													type: "email",
													"error-messages": unref(forgot).errors.email
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"error-messages"
												])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-end gap-8" }, [createVNode(VBtn, {
													class: "text-capitalize text-primary",
													variant: "text",
													to: "auth.login"
												}, {
													default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Return to Login")]),
													_: 1
												})])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(VBtn, {
													color: "primary",
													block: "",
													type: "submit"
												}, {
													default: withCtx(() => [createTextVNode(" Send Reset Request ")]),
													_: 1
												})]),
												_: 1
											})
										]),
										_: 1
									})]),
									_: 1
								})];
							}),
							_: 1
						}, _parent$1, _scopeId));
					} else return [createVNode(VCardText, null, {
						default: withCtx(() => [createVNode("p", null, "Please enter your email below and, if registered, we'll send you a link to reset your password.")]),
						_: 1
					}), createVNode(VCardText, null, {
						default: withCtx(() => [createVNode(VForm, { onSubmit: withModifiers(onSendRequest, ["prevent"]) }, {
							default: withCtx(() => [createVNode(VRow, null, {
								default: withCtx(() => [
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(VTextField, {
											modelValue: unref(forgot).email,
											"onUpdate:modelValue": ($event) => unref(forgot).email = $event,
											autofocus: "",
											placeholder: "johndoe@email.com",
											label: "Email",
											type: "email",
											"error-messages": unref(forgot).errors.email
										}, null, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"error-messages"
										])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-end gap-8" }, [createVNode(VBtn, {
											class: "text-capitalize text-primary",
											variant: "text",
											to: "auth.login"
										}, {
											default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Return to Login")]),
											_: 1
										})])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(VBtn, {
											color: "primary",
											block: "",
											type: "submit"
										}, {
											default: withCtx(() => [createTextVNode(" Send Reset Request ")]),
											_: 1
										})]),
										_: 1
									})
								]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/ForgotPassword.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var ForgotPassword_default = _sfc_main$3;
var Login_exports = /* @__PURE__ */ __export({ default: () => Login_default });
var _sfc_main$2 = /* @__PURE__ */ Object.assign({ layout: BlankLayout_default }, {
	__name: "Login",
	__ssrInlineRender: true,
	setup(__props) {
		const route = D();
		const login = useForm({
			email: "",
			password: "",
			remember: true
		});
		const onLogin = () => {
			login.post(route("auth.login.store"), { onSuccess() {
				console.log("Done");
			} });
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_EvoInputPassword = resolveComponent("EvoInputPassword");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-center container h-full" }, _attrs))}>`);
			_push(ssrRenderComponent(VCard, {
				title: `Welcome to ${_ctx.$page.props.app.name}`,
				"max-width": "448"
			}, {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(ssrRenderComponent(VCardText, { class: "pt-2" }, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(`<p class="mb-0"${_scopeId$1}>Please sign-in to your account</p>`);
								else return [createVNode("p", { class: "mb-0" }, "Please sign-in to your account")];
							}),
							_: 1
						}, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VCardText, null, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(ssrRenderComponent(VForm, { onSubmit: onLogin }, {
									default: withCtx((_$2, _push$3, _parent$3, _scopeId$2) => {
										if (_push$3) _push$3(ssrRenderComponent(VRow, null, {
											default: withCtx((_$3, _push$4, _parent$4, _scopeId$3) => {
												if (_push$4) {
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(VTextField, {
																modelValue: unref(login).email,
																"onUpdate:modelValue": ($event) => unref(login).email = $event,
																autofocus: "",
																placeholder: "johndoe@email.com",
																label: "Email",
																type: "email",
																"error-messages": unref(login).errors.email
															}, null, _parent$5, _scopeId$4));
															else return [createVNode(VTextField, {
																modelValue: unref(login).email,
																"onUpdate:modelValue": ($event) => unref(login).email = $event,
																autofocus: "",
																placeholder: "johndoe@email.com",
																label: "Email",
																type: "email",
																"error-messages": unref(login).errors.email
															}, null, 8, [
																"modelValue",
																"onUpdate:modelValue",
																"error-messages"
															])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(_component_EvoInputPassword, {
																modelValue: unref(login).password,
																"onUpdate:modelValue": ($event) => unref(login).password = $event,
																error: unref(login).errors.password
															}, null, _parent$5, _scopeId$4));
															else return [createVNode(_component_EvoInputPassword, {
																modelValue: unref(login).password,
																"onUpdate:modelValue": ($event) => unref(login).password = $event,
																error: unref(login).errors.password
															}, null, 8, [
																"modelValue",
																"onUpdate:modelValue",
																"error"
															])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) {
																_push$5(`<div class="flex flex-wrap items-center justify-between gap-8"${_scopeId$4}>`);
																_push$5(ssrRenderComponent(VCheckbox, {
																	modelValue: unref(login).remember,
																	"onUpdate:modelValue": ($event) => unref(login).remember = $event,
																	label: "Remember me?",
																	"hide-details": "",
																	density: "compact"
																}, null, _parent$5, _scopeId$4));
																_push$5(ssrRenderComponent(VBtn, {
																	class: "text-capitalize text-primary",
																	variant: "text",
																	to: "auth.forgot-password"
																}, {
																	default: withCtx((_$5, _push$6, _parent$6, _scopeId$5) => {
																		if (_push$6) _push$6(`<span class="capitalize"${_scopeId$5}>Forgot Password?</span>`);
																		else return [createVNode("span", { class: "capitalize" }, "Forgot Password?")];
																	}),
																	_: 1
																}, _parent$5, _scopeId$4));
																_push$5(`</div>`);
															} else return [createVNode("div", { class: "flex flex-wrap items-center justify-between gap-8" }, [createVNode(VCheckbox, {
																modelValue: unref(login).remember,
																"onUpdate:modelValue": ($event) => unref(login).remember = $event,
																label: "Remember me?",
																"hide-details": "",
																density: "compact"
															}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
																class: "text-capitalize text-primary",
																variant: "text",
																to: "auth.forgot-password"
															}, {
																default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Forgot Password?")]),
																_: 1
															})])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(VBtn, {
																color: "primary",
																block: "",
																type: "submit"
															}, {
																default: withCtx((_$5, _push$6, _parent$6, _scopeId$5) => {
																	if (_push$6) _push$6(` Login `);
																	else return [createTextVNode(" Login ")];
																}),
																_: 1
															}, _parent$5, _scopeId$4));
															else return [createVNode(VBtn, {
																color: "primary",
																block: "",
																type: "submit"
															}, {
																default: withCtx(() => [createTextVNode(" Login ")]),
																_: 1
															})];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
												} else return [
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(VTextField, {
															modelValue: unref(login).email,
															"onUpdate:modelValue": ($event) => unref(login).email = $event,
															autofocus: "",
															placeholder: "johndoe@email.com",
															label: "Email",
															type: "email",
															"error-messages": unref(login).errors.email
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"error-messages"
														])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(_component_EvoInputPassword, {
															modelValue: unref(login).password,
															"onUpdate:modelValue": ($event) => unref(login).password = $event,
															error: unref(login).errors.password
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"error"
														])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-between gap-8" }, [createVNode(VCheckbox, {
															modelValue: unref(login).remember,
															"onUpdate:modelValue": ($event) => unref(login).remember = $event,
															label: "Remember me?",
															"hide-details": "",
															density: "compact"
														}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
															class: "text-capitalize text-primary",
															variant: "text",
															to: "auth.forgot-password"
														}, {
															default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Forgot Password?")]),
															_: 1
														})])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(VBtn, {
															color: "primary",
															block: "",
															type: "submit"
														}, {
															default: withCtx(() => [createTextVNode(" Login ")]),
															_: 1
														})]),
														_: 1
													})
												];
											}),
											_: 1
										}, _parent$3, _scopeId$2));
										else return [createVNode(VRow, null, {
											default: withCtx(() => [
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(VTextField, {
														modelValue: unref(login).email,
														"onUpdate:modelValue": ($event) => unref(login).email = $event,
														autofocus: "",
														placeholder: "johndoe@email.com",
														label: "Email",
														type: "email",
														"error-messages": unref(login).errors.email
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"error-messages"
													])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(_component_EvoInputPassword, {
														modelValue: unref(login).password,
														"onUpdate:modelValue": ($event) => unref(login).password = $event,
														error: unref(login).errors.password
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"error"
													])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-between gap-8" }, [createVNode(VCheckbox, {
														modelValue: unref(login).remember,
														"onUpdate:modelValue": ($event) => unref(login).remember = $event,
														label: "Remember me?",
														"hide-details": "",
														density: "compact"
													}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
														class: "text-capitalize text-primary",
														variant: "text",
														to: "auth.forgot-password"
													}, {
														default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Forgot Password?")]),
														_: 1
													})])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(VBtn, {
														color: "primary",
														block: "",
														type: "submit"
													}, {
														default: withCtx(() => [createTextVNode(" Login ")]),
														_: 1
													})]),
													_: 1
												})
											]),
											_: 1
										})];
									}),
									_: 1
								}, _parent$2, _scopeId$1));
								else return [createVNode(VForm, { onSubmit: withModifiers(onLogin, ["prevent"]) }, {
									default: withCtx(() => [createVNode(VRow, null, {
										default: withCtx(() => [
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(VTextField, {
													modelValue: unref(login).email,
													"onUpdate:modelValue": ($event) => unref(login).email = $event,
													autofocus: "",
													placeholder: "johndoe@email.com",
													label: "Email",
													type: "email",
													"error-messages": unref(login).errors.email
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"error-messages"
												])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(_component_EvoInputPassword, {
													modelValue: unref(login).password,
													"onUpdate:modelValue": ($event) => unref(login).password = $event,
													error: unref(login).errors.password
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"error"
												])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-between gap-8" }, [createVNode(VCheckbox, {
													modelValue: unref(login).remember,
													"onUpdate:modelValue": ($event) => unref(login).remember = $event,
													label: "Remember me?",
													"hide-details": "",
													density: "compact"
												}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
													class: "text-capitalize text-primary",
													variant: "text",
													to: "auth.forgot-password"
												}, {
													default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Forgot Password?")]),
													_: 1
												})])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(VBtn, {
													color: "primary",
													block: "",
													type: "submit"
												}, {
													default: withCtx(() => [createTextVNode(" Login ")]),
													_: 1
												})]),
												_: 1
											})
										]),
										_: 1
									})]),
									_: 1
								})];
							}),
							_: 1
						}, _parent$1, _scopeId));
					} else return [createVNode(VCardText, { class: "pt-2" }, {
						default: withCtx(() => [createVNode("p", { class: "mb-0" }, "Please sign-in to your account")]),
						_: 1
					}), createVNode(VCardText, null, {
						default: withCtx(() => [createVNode(VForm, { onSubmit: withModifiers(onLogin, ["prevent"]) }, {
							default: withCtx(() => [createVNode(VRow, null, {
								default: withCtx(() => [
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(VTextField, {
											modelValue: unref(login).email,
											"onUpdate:modelValue": ($event) => unref(login).email = $event,
											autofocus: "",
											placeholder: "johndoe@email.com",
											label: "Email",
											type: "email",
											"error-messages": unref(login).errors.email
										}, null, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"error-messages"
										])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(_component_EvoInputPassword, {
											modelValue: unref(login).password,
											"onUpdate:modelValue": ($event) => unref(login).password = $event,
											error: unref(login).errors.password
										}, null, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"error"
										])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode("div", { class: "flex flex-wrap items-center justify-between gap-8" }, [createVNode(VCheckbox, {
											modelValue: unref(login).remember,
											"onUpdate:modelValue": ($event) => unref(login).remember = $event,
											label: "Remember me?",
											"hide-details": "",
											density: "compact"
										}, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(VBtn, {
											class: "text-capitalize text-primary",
											variant: "text",
											to: "auth.forgot-password"
										}, {
											default: withCtx(() => [createVNode("span", { class: "capitalize" }, "Forgot Password?")]),
											_: 1
										})])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(VBtn, {
											color: "primary",
											block: "",
											type: "submit"
										}, {
											default: withCtx(() => [createTextVNode(" Login ")]),
											_: 1
										})]),
										_: 1
									})
								]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/Login.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Login_default = _sfc_main$2;
var MustVerifyEmail_exports = /* @__PURE__ */ __export({ default: () => MustVerifyEmail_default });
var _sfc_main$1 = {
	__name: "MustVerifyEmail",
	__ssrInlineRender: true,
	setup(__props) {
		D();
		ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><div class="prose prose-invert"><h1 class="uppercase">Email Verification Required</h1><p>Before you can access the application, we need you to verify your email address.</p><p>You should have received this email when you registered, but you can resend it using the link below.</p></div><div class="flex justify-end py-8"><button>Resend Verification Email</button></div></div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/MustVerifyEmail.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var MustVerifyEmail_default = _sfc_main$1;
var ResetPassword_exports = /* @__PURE__ */ __export({ default: () => ResetPassword_default });
var _sfc_main = /* @__PURE__ */ Object.assign({ layout: BlankLayout_default }, {
	__name: "ResetPassword",
	__ssrInlineRender: true,
	setup(__props) {
		const route = D();
		const reset = useForm({
			token: usePage().props.token,
			email: usePage().props.email,
			password: "",
			password_confirmation: ""
		});
		const onResetPassword = () => {
			reset.post(route("auth.reset-password.store"), { onSuccess() {
				reset.reset();
			} });
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_EvoInputPassword = resolveComponent("EvoInputPassword");
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-center container h-full" }, _attrs))}>`);
			_push(ssrRenderComponent(VCard, {
				title: "Reset Your Password",
				"max-width": "448"
			}, {
				default: withCtx((_, _push$1, _parent$1, _scopeId) => {
					if (_push$1) {
						_push$1(ssrRenderComponent(VCardText, { class: "pt-2" }, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(`<p class="mb-0"${_scopeId$1}>Please enter a new password for your account below</p>`);
								else return [createVNode("p", { class: "mb-0" }, "Please enter a new password for your account below")];
							}),
							_: 1
						}, _parent$1, _scopeId));
						_push$1(ssrRenderComponent(VCardText, null, {
							default: withCtx((_$1, _push$2, _parent$2, _scopeId$1) => {
								if (_push$2) _push$2(ssrRenderComponent(VForm, { onSubmit: onResetPassword }, {
									default: withCtx((_$2, _push$3, _parent$3, _scopeId$2) => {
										if (_push$3) _push$3(ssrRenderComponent(VRow, null, {
											default: withCtx((_$3, _push$4, _parent$4, _scopeId$3) => {
												if (_push$4) {
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(VTextField, {
																modelValue: unref(reset).email,
																"onUpdate:modelValue": ($event) => unref(reset).email = $event,
																autofocus: "",
																placeholder: "johndoe@email.com",
																label: "Email",
																type: "email",
																"error-messages": unref(reset).errors.email
															}, null, _parent$5, _scopeId$4));
															else return [createVNode(VTextField, {
																modelValue: unref(reset).email,
																"onUpdate:modelValue": ($event) => unref(reset).email = $event,
																autofocus: "",
																placeholder: "johndoe@email.com",
																label: "Email",
																type: "email",
																"error-messages": unref(reset).errors.email
															}, null, 8, [
																"modelValue",
																"onUpdate:modelValue",
																"error-messages"
															])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(_component_EvoInputPassword, {
																modelValue: unref(reset).password,
																"onUpdate:modelValue": ($event) => unref(reset).password = $event,
																error: unref(reset).errors.password
															}, null, _parent$5, _scopeId$4));
															else return [createVNode(_component_EvoInputPassword, {
																modelValue: unref(reset).password,
																"onUpdate:modelValue": ($event) => unref(reset).password = $event,
																error: unref(reset).errors.password
															}, null, 8, [
																"modelValue",
																"onUpdate:modelValue",
																"error"
															])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(_component_EvoInputPassword, {
																modelValue: unref(reset).password_confirmation,
																"onUpdate:modelValue": ($event) => unref(reset).password_confirmation = $event,
																error: unref(reset).errors.password_confirmation
															}, null, _parent$5, _scopeId$4));
															else return [createVNode(_component_EvoInputPassword, {
																modelValue: unref(reset).password_confirmation,
																"onUpdate:modelValue": ($event) => unref(reset).password_confirmation = $event,
																error: unref(reset).errors.password_confirmation
															}, null, 8, [
																"modelValue",
																"onUpdate:modelValue",
																"error"
															])];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
													_push$4(ssrRenderComponent(VCol, { cols: "12" }, {
														default: withCtx((_$4, _push$5, _parent$5, _scopeId$4) => {
															if (_push$5) _push$5(ssrRenderComponent(VBtn, {
																color: "primary",
																block: "",
																type: "submit"
															}, {
																default: withCtx((_$5, _push$6, _parent$6, _scopeId$5) => {
																	if (_push$6) _push$6(` Reset Password `);
																	else return [createTextVNode(" Reset Password ")];
																}),
																_: 1
															}, _parent$5, _scopeId$4));
															else return [createVNode(VBtn, {
																color: "primary",
																block: "",
																type: "submit"
															}, {
																default: withCtx(() => [createTextVNode(" Reset Password ")]),
																_: 1
															})];
														}),
														_: 1
													}, _parent$4, _scopeId$3));
												} else return [
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(VTextField, {
															modelValue: unref(reset).email,
															"onUpdate:modelValue": ($event) => unref(reset).email = $event,
															autofocus: "",
															placeholder: "johndoe@email.com",
															label: "Email",
															type: "email",
															"error-messages": unref(reset).errors.email
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"error-messages"
														])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(_component_EvoInputPassword, {
															modelValue: unref(reset).password,
															"onUpdate:modelValue": ($event) => unref(reset).password = $event,
															error: unref(reset).errors.password
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"error"
														])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(_component_EvoInputPassword, {
															modelValue: unref(reset).password_confirmation,
															"onUpdate:modelValue": ($event) => unref(reset).password_confirmation = $event,
															error: unref(reset).errors.password_confirmation
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"error"
														])]),
														_: 1
													}),
													createVNode(VCol, { cols: "12" }, {
														default: withCtx(() => [createVNode(VBtn, {
															color: "primary",
															block: "",
															type: "submit"
														}, {
															default: withCtx(() => [createTextVNode(" Reset Password ")]),
															_: 1
														})]),
														_: 1
													})
												];
											}),
											_: 1
										}, _parent$3, _scopeId$2));
										else return [createVNode(VRow, null, {
											default: withCtx(() => [
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(VTextField, {
														modelValue: unref(reset).email,
														"onUpdate:modelValue": ($event) => unref(reset).email = $event,
														autofocus: "",
														placeholder: "johndoe@email.com",
														label: "Email",
														type: "email",
														"error-messages": unref(reset).errors.email
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"error-messages"
													])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(_component_EvoInputPassword, {
														modelValue: unref(reset).password,
														"onUpdate:modelValue": ($event) => unref(reset).password = $event,
														error: unref(reset).errors.password
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"error"
													])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(_component_EvoInputPassword, {
														modelValue: unref(reset).password_confirmation,
														"onUpdate:modelValue": ($event) => unref(reset).password_confirmation = $event,
														error: unref(reset).errors.password_confirmation
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"error"
													])]),
													_: 1
												}),
												createVNode(VCol, { cols: "12" }, {
													default: withCtx(() => [createVNode(VBtn, {
														color: "primary",
														block: "",
														type: "submit"
													}, {
														default: withCtx(() => [createTextVNode(" Reset Password ")]),
														_: 1
													})]),
													_: 1
												})
											]),
											_: 1
										})];
									}),
									_: 1
								}, _parent$2, _scopeId$1));
								else return [createVNode(VForm, { onSubmit: withModifiers(onResetPassword, ["prevent"]) }, {
									default: withCtx(() => [createVNode(VRow, null, {
										default: withCtx(() => [
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(VTextField, {
													modelValue: unref(reset).email,
													"onUpdate:modelValue": ($event) => unref(reset).email = $event,
													autofocus: "",
													placeholder: "johndoe@email.com",
													label: "Email",
													type: "email",
													"error-messages": unref(reset).errors.email
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"error-messages"
												])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(_component_EvoInputPassword, {
													modelValue: unref(reset).password,
													"onUpdate:modelValue": ($event) => unref(reset).password = $event,
													error: unref(reset).errors.password
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"error"
												])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(_component_EvoInputPassword, {
													modelValue: unref(reset).password_confirmation,
													"onUpdate:modelValue": ($event) => unref(reset).password_confirmation = $event,
													error: unref(reset).errors.password_confirmation
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"error"
												])]),
												_: 1
											}),
											createVNode(VCol, { cols: "12" }, {
												default: withCtx(() => [createVNode(VBtn, {
													color: "primary",
													block: "",
													type: "submit"
												}, {
													default: withCtx(() => [createTextVNode(" Reset Password ")]),
													_: 1
												})]),
												_: 1
											})
										]),
										_: 1
									})]),
									_: 1
								})];
							}),
							_: 1
						}, _parent$1, _scopeId));
					} else return [createVNode(VCardText, { class: "pt-2" }, {
						default: withCtx(() => [createVNode("p", { class: "mb-0" }, "Please enter a new password for your account below")]),
						_: 1
					}), createVNode(VCardText, null, {
						default: withCtx(() => [createVNode(VForm, { onSubmit: withModifiers(onResetPassword, ["prevent"]) }, {
							default: withCtx(() => [createVNode(VRow, null, {
								default: withCtx(() => [
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(VTextField, {
											modelValue: unref(reset).email,
											"onUpdate:modelValue": ($event) => unref(reset).email = $event,
											autofocus: "",
											placeholder: "johndoe@email.com",
											label: "Email",
											type: "email",
											"error-messages": unref(reset).errors.email
										}, null, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"error-messages"
										])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(_component_EvoInputPassword, {
											modelValue: unref(reset).password,
											"onUpdate:modelValue": ($event) => unref(reset).password = $event,
											error: unref(reset).errors.password
										}, null, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"error"
										])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(_component_EvoInputPassword, {
											modelValue: unref(reset).password_confirmation,
											"onUpdate:modelValue": ($event) => unref(reset).password_confirmation = $event,
											error: unref(reset).errors.password_confirmation
										}, null, 8, [
											"modelValue",
											"onUpdate:modelValue",
											"error"
										])]),
										_: 1
									}),
									createVNode(VCol, { cols: "12" }, {
										default: withCtx(() => [createVNode(VBtn, {
											color: "primary",
											block: "",
											type: "submit"
										}, {
											default: withCtx(() => [createTextVNode(" Reset Password ")]),
											_: 1
										})]),
										_: 1
									})
								]),
								_: 1
							})]),
							_: 1
						})]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/auth/ResetPassword.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ResetPassword_default = _sfc_main;
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	resolve: createInertiaPageResolver({
		"./pages/Dashboard.vue": Dashboard_exports,
		"./pages/Error.vue": Error_exports,
		"./pages/auth/ForgotPassword.vue": ForgotPassword_exports,
		"./pages/auth/Login.vue": Login_exports,
		"./pages/auth/MustVerifyEmail.vue": MustVerifyEmail_exports,
		"./pages/auth/ResetPassword.vue": ResetPassword_exports
	}),
	setup({ App, props, plugin }) {
		const inertiaRoutesPlugin = ae(props);
		const inertiaI18nPlugin = useInertiaI18nVue(props);
		return createSSRApp({ render: () => h(App, props) }).use(registerPlugins).use(inertiaRoutesPlugin).use(inertiaI18nPlugin).use(plugin);
	}
}));
export {};
