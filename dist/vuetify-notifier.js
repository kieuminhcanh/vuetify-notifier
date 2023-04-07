import { defineComponent as N, ref as j, computed as P, resolveComponent as r, openBlock as y, createElementBlock as O, createVNode as s, withCtx as c, mergeProps as w, withModifiers as G, unref as C, createBlock as _, createCommentVNode as k, createTextVNode as D, toDisplayString as T, createElementVNode as J, resolveDynamicComponent as $, Fragment as L, getCurrentInstance as Q, inject as R, createApp as I } from "vue";
const X = { class: "vuetify-notifier" }, Y = /* @__PURE__ */ N({
  __name: "NotifierDialog",
  props: {
    content: {
      type: [String, Object],
      required: !0,
      default: "Are you sure?"
    },
    options: {
      type: Object,
      required: !0
    },
    status: {
      type: String,
      required: !0
    },
    onSubmit: {
      type: Function,
      required: !0
    },
    onCancel: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = t, d = j(!0), h = j(""), S = P(() => {
      var i;
      return typeof e.content == "object" ? (i = e.content) == null ? void 0 : i.title : void 0;
    }), x = P(() => {
      var i;
      return typeof e.content == "object" ? (i = e.content) == null ? void 0 : i.text : e.content;
    }), f = async (i) => {
      console.log(
        typeof i
      );
      const { valid: v } = await i;
      v && (d.value = !1, e.options.prompt ? e.onSubmit(h.value) : e.onSubmit(!0));
    }, V = () => {
      d.value = !1, e.onCancel();
    };
    return (i, v) => {
      const o = r("VIcon"), n = r("VToolbar"), a = r("v-col"), u = r("VTextField"), l = r("v-row"), g = r("VCardText"), m = r("VDivider"), p = r("VSpacer"), b = r("VBtn"), B = r("VCardActions"), W = r("VCard"), H = r("VForm"), z = r("VDialog"), K = r("VDefaultsProvider");
      return y(), O("div", X, [
        s(K, null, {
          default: c(() => {
            var F, E;
            return [
              s(z, w({
                modelValue: d.value,
                "onUpdate:modelValue": v[1] || (v[1] = (q) => d.value = q),
                persistent: "",
                transition: (F = t.options) == null ? void 0 : F.transition,
                width: (E = t.options) == null ? void 0 : E.width,
                scrollable: ""
              }, t.options.dialogProps), {
                default: c(() => [
                  s(H, {
                    "validate-on": "submit",
                    onSubmit: G(f, ["prevent"])
                  }, {
                    default: c(() => {
                      var q, A;
                      return [
                        s(W, w(t.options.cardProps, {
                          "min-width": (q = t.options) == null ? void 0 : q.minWidth,
                          "min-height": (A = t.options) == null ? void 0 : A.minHeight
                        }), {
                          default: c(() => [
                            C(S) ? (y(), _(n, {
                              key: 0,
                              title: C(S),
                              density: "compact",
                              color: t.status === "default" ? t.options.defaultColor : t.status
                            }, {
                              default: c(() => [
                                s(o, {
                                  icon: t.options[`${t.status}Icon`],
                                  class: "mr-2"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["title", "color"])) : k("", !0),
                            s(g, null, {
                              default: c(() => [
                                s(l, {
                                  align: "center",
                                  justify: t.options.textAlign,
                                  class: "h-100"
                                }, {
                                  default: c(() => [
                                    s(a, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: c(() => [
                                        D(T(C(x)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    t.options.prompt ? (y(), _(a, {
                                      key: 0,
                                      cols: "12"
                                    }, {
                                      default: c(() => [
                                        s(u, w({
                                          modelValue: h.value,
                                          "onUpdate:modelValue": v[0] || (v[0] = (M) => h.value = M)
                                        }, t.options.inputProps), null, 16, ["modelValue"])
                                      ]),
                                      _: 1
                                    })) : k("", !0)
                                  ]),
                                  _: 1
                                }, 8, ["justify"])
                              ]),
                              _: 1
                            }),
                            t.options.showDivider ? (y(), _(m, { key: 1 })) : k("", !0),
                            s(B, null, {
                              default: c(() => [
                                s(p),
                                s(b, w(t.options.secondaryButtonProps || t.options.buttonProps, { onClick: V }), {
                                  default: c(() => [
                                    D(T(t.options.secondaryButtonText), 1)
                                  ]),
                                  _: 1
                                }, 16),
                                s(b, w({ variant: "tonal" }, t.options.primaryButtonProps || t.options.buttonProps, {
                                  color: "primary",
                                  type: "submit"
                                }), {
                                  default: c(() => [
                                    D(T(t.options.primaryButtonText), 1)
                                  ]),
                                  _: 1
                                }, 16)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 16, ["min-width", "min-height"])
                      ];
                    }),
                    _: 1
                  }, 8, ["onSubmit"])
                ]),
                _: 1
              }, 16, ["modelValue", "transition", "width"])
            ];
          }),
          _: 1
        })
      ]);
    };
  }
}), Z = { class: "vuetify-notifier-toast" }, tt = {
  key: 0,
  class: "font-weight-bold mb-2"
}, et = /* @__PURE__ */ N({
  __name: "NotifierToast",
  props: {
    content: {
      type: [String, Object],
      required: !0,
      default: "Are you sure?"
    },
    options: {
      type: Object,
      required: !0
    },
    status: {
      type: String,
      required: !0
    },
    onSubmit: {
      type: Function,
      required: !0
    },
    onCancel: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = t, d = j(!0), h = P(() => {
      var f;
      return typeof e.content == "object" ? (f = e.content) == null ? void 0 : f.title : void 0;
    }), S = P(() => {
      var f;
      return typeof e.content == "object" ? (f = e.content) == null ? void 0 : f.text : e.content;
    }), x = () => {
      d.value = !1, e.onCancel();
    };
    return (f, V) => {
      const i = r("VBtn"), v = r("VSnackbar"), o = r("VDefaultsProvider");
      return y(), O("div", Z, [
        s(o, null, {
          default: c(() => [
            s(v, w({
              modelValue: d.value,
              "onUpdate:modelValue": [
                V[0] || (V[0] = (n) => d.value = n),
                x
              ],
              color: t.status === "default" ? t.options.defaultColor : t.status
            }, t.options.toastProps), {
              actions: c(() => [
                s(i, {
                  icon: "mdi-close-circle",
                  size: "small",
                  onClick: x
                })
              ]),
              default: c(() => [
                C(h) ? (y(), O("div", tt, T(C(h)), 1)) : k("", !0),
                J("p", null, T(C(S)), 1)
              ]),
              _: 1
            }, 16, ["modelValue", "color"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), ot = {
  transition: "dialog-bottom-transition",
  width: "auto",
  minWidth: 300,
  minHeight: 250,
  textAlign: "center",
  duration: 1500,
  defaultColor: "",
  defaultIcon: "mdi-alert-circle",
  successIcon: "mdi-check-circle",
  infoIcon: "mdi-information",
  warningIcon: "mdi-alert",
  errorIcon: "mdi-alert-circle",
  primaryButtonText: "OK",
  secondaryButtonText: "Cancel",
  showDivider: !0,
  buttonProps: {
    width: "100"
  },
  dialogProps: {},
  cardProps: {},
  handleCancel: "silent",
  inputProps: {
    label: "Input",
    rules: [
      (t) => !!t || "Name is required",
      (t) => t && t.length <= 10 || "Name must be less than 10 characters"
    ]
  }
}, nt = {
  defaultColor: "primary",
  defaultIcon: "mdi-alert-circle",
  successIcon: "mdi-check-circle",
  infoIcon: "mdi-information",
  warningIcon: "mdi-alert",
  errorIcon: "mdi-alert-circle",
  toastProps: {
    transition: "v-scroll-x-transition",
    location: "top right"
  }
}, it = {
  existsButton: !0
}, rt = { class: "vuetify-notifier" }, ct = /* @__PURE__ */ N({
  __name: "NotifierComponent",
  props: {
    content: {
      type: [String, Object],
      required: !0,
      default: "Are you sure?"
    },
    options: {
      type: Object,
      required: !0
    },
    status: {
      type: String,
      required: !0
    },
    onSubmit: {
      type: Function,
      required: !0
    },
    onCancel: {
      type: Function,
      required: !0
    }
  },
  setup(t) {
    const e = t, d = j(!0);
    j("");
    const h = P(() => {
      var i;
      return typeof e.content == "object" ? (i = e.content) == null ? void 0 : i.title : void 0;
    }), S = P(() => {
      var i;
      return typeof e.content == "object" ? (i = e.content) == null ? void 0 : i.component : e.content;
    }), x = P(() => ({
      ...e.options.componentProps,
      onSubmit: f,
      onCancel: V
    })), f = async (i) => {
      d.value = !1, e.onSubmit(i);
    }, V = (i) => {
      d.value = !1, e.onCancel(i);
    };
    return (i, v) => {
      const o = r("v-icon"), n = r("v-btn"), a = r("VToolbar"), u = r("VCard"), l = r("VDialog"), g = r("VDefaultsProvider");
      return y(), O("div", rt, [
        s(g, null, {
          default: c(() => {
            var m, p;
            return [
              s(l, w({
                modelValue: d.value,
                "onUpdate:modelValue": v[0] || (v[0] = (b) => d.value = b),
                persistent: "",
                transition: (m = t.options) == null ? void 0 : m.transition,
                width: (p = t.options) == null ? void 0 : p.width,
                scrollable: ""
              }, t.options.dialogProps), {
                default: c(() => [
                  C(h) ? (y(), _(u, { key: 0 }, {
                    default: c(() => [
                      s(a, { title: C(h) }, {
                        default: c(() => [
                          t.options.existsButton ? (y(), _(n, {
                            key: 0,
                            icon: "",
                            onClick: V,
                            variant: "text"
                          }, {
                            default: c(() => [
                              s(o, null, {
                                default: c(() => [
                                  D("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : k("", !0)
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      (y(), _($(C(S)), w(C(x), {
                        onOnSubmit: f,
                        onOnCancel: V
                      }), null, 16))
                    ]),
                    _: 1
                  })) : (y(), O(L, { key: 1 }, [
                    (y(), _($(t.content), w(C(x), {
                      onOnSubmit: f,
                      onOnCancel: V
                    }), null, 16)),
                    t.options.existsButton ? (y(), _(n, {
                      key: 0,
                      position: "fixed",
                      location: "top right",
                      icon: "",
                      onClick: V,
                      variant: "text"
                    }, {
                      default: c(() => [
                        s(o, null, {
                          default: c(() => [
                            D("mdi-close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : k("", !0)
                  ], 64))
                ]),
                _: 1
              }, 16, ["modelValue", "transition", "width"])
            ];
          }),
          _: 1
        })
      ]);
    };
  }
}), U = Symbol.for("vuetify:notifier");
function st(t) {
  const e = (o, n = "default", a = {}) => {
    const u = document.querySelector("[data-v-app]"), l = document.createElement("div"), g = { ...ot, ...a };
    return new Promise((m, p) => {
      const b = I(Y, {
        content: o,
        status: n,
        options: g,
        onSubmit(B) {
          m(B), setTimeout(() => {
            b.unmount(), u.removeChild(l);
          }, 500);
        },
        onCancel() {
          switch (g.handleCancel) {
            case "resolve":
              m(!1);
              break;
            case "reject":
              p(!1);
              break;
          }
          setTimeout(() => {
            b.unmount(), u.removeChild(l);
          }, 500);
        }
      });
      Object.assign(b._context, t._context), u == null || u.appendChild(l), b.mount(l);
    });
  };
  return {
    confirm: e,
    confirmSuccess: (o, n = {}) => e(o, "success", n),
    confirmInfo: (o, n = {}) => e(o, "info", n),
    confirmWarning: (o, n = {}) => e(o, "warning", n),
    confirmError: (o, n = {}) => e(o, "error", n),
    prompt: (o, n = "default", a = {}) => e(o, n, { ...a, prompt: !0 }),
    alert: (o, n = "default", a = {}) => e(o, n, { ...a, secondaryButtonProps: { style: "display:none" } }),
    toast: (o, n = "default", a = {}) => {
      const u = document.querySelector("[data-v-app]"), l = document.createElement("div"), g = { ...nt, ...a };
      return new Promise((m) => {
        const p = I(et, {
          content: o,
          status: n,
          options: g,
          onSubmit(b) {
            m(b), setTimeout(() => {
              p.unmount(), u.removeChild(l);
            }, 500);
          },
          onCancel() {
            setTimeout(() => {
              p.unmount(), u.removeChild(l);
            }, 500);
          }
        });
        Object.assign(p._context, t._context), u == null || u.appendChild(l), p.mount(l);
      });
    },
    component: (o, n = {}) => {
      const a = document.querySelector("[data-v-app]"), u = document.createElement("div"), l = { ...it, ...n };
      return new Promise((g) => {
        const m = I(ct, {
          content: o,
          status,
          options: l,
          onSubmit(p) {
            g(p), setTimeout(() => {
              m.unmount(), a.removeChild(u);
            }, 500);
          },
          onCancel() {
            setTimeout(() => {
              m.unmount(), a.removeChild(u);
            }, 500);
          }
        });
        Object.assign(m._context, t._context), a == null || a.appendChild(u), m.mount(u);
      });
    }
  };
}
function at() {
  if (!Q())
    throw new Error("[Vuetify Notifier] useNotifier() must be called from inside a setup function");
  const e = R(U);
  if (!e)
    throw new Error("[Vuetify Notifier] Could not find Notifier injection");
  return e;
}
const lt = {
  install: (t) => {
    t.provide(U, st(t));
  }
};
export {
  U as NotifierSymbol,
  st as createNotifier,
  lt as default,
  at as useNotifier
};
