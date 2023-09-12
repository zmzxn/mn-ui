import { defineComponent as s, openBlock as c, createElementBlock as d, normalizeClass as i, createElementVNode as u, renderSlot as r } from "vue";
const f = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, a] of t)
    l[n] = a;
  return l;
}, m = ["disabled"], p = s({
  name: "MnButton"
}), _ = /* @__PURE__ */ Object.assign(p, {
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    circle: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const l = (n) => {
      t("click", n);
    };
    return (n, a) => (c(), d("button", {
      class: i(["mn-button", [
        `mn-button-${e.type}`,
        {
          "is-plain": e.plain,
          "is-round": e.round,
          "is-circle": e.circle,
          "is-disabled": e.disabled
        }
      ]]),
      disabled: e.disabled,
      onClick: l
    }, [
      u("span", null, [
        r(n.$slots, "default", {}, void 0, !0)
      ])
    ], 10, m));
  }
}), o = /* @__PURE__ */ f(_, [["__scopeId", "data-v-794ad816"]]);
o.install = function(e) {
  e.component(o.name, o);
};
const b = [o], y = (e) => {
  b.forEach((t) => {
    e.component(t.name, t);
  });
}, k = { install: y };
export {
  o as Button,
  k as default
};
