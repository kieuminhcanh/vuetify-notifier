import { defineComponent as g, ref as j, computed as w, resolveComponent as c, openBlock as f, createElementBlock as B, createVNode as s, withCtx as r, mergeProps as h, withModifiers as L, unref as C, createBlock as _, createCommentVNode as P, createTextVNode as b, toDisplayString as k, createElementVNode as Q, resolveDynamicComponent as $, Fragment as X, createApp as Y, getCurrentInstance as Z, inject as O } from "vue";
const S = {
  default: {
    defaultColor: "",
    defaultIcon: "mdi-alert-circle",
    successIcon: "mdi-check-circle",
    infoIcon: "mdi-information",
    warningIcon: "mdi-alert",
    errorIcon: "mdi-alert-circle"
  },
  dialogOptions: {
    transition: "dialog-bottom-transition",
    width: 500,
    minWidth: 300,
    minHeight: 250,
    textAlign: "center",
    primaryButtonText: "OK",
    secondaryButtonText: "Cancel",
    showDivider: !0,
    buttonProps: {
      width: "100"
    },
    handleCancel: "silent",
    inputProps: {
      label: "Input"
    }
  },
  toastOptions: {
    toastProps: {
      transition: "v-scroll-x-transition",
      location: "top right"
    }
  },
  componentOptions: {
    existsButton: !0
  }
}, tt = { class: "vuetify-notifier" }, et = /* @__PURE__ */ g({
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
  setup(e) {
    const t = e, n = j(!0), p = j(""), y = w(() => {
      var o;
      return typeof t.content == "object" ? (o = t.content) == null ? void 0 : o.title : void 0;
    }), V = w(() => {
      var o;
      return typeof t.content == "object" ? (o = t.content) == null ? void 0 : o.text : t.content;
    }), a = async (o) => {
      console.log(
        typeof o
      );
      const { valid: l } = await o;
      l && (n.value = !1, t.options.prompt ? t.onSubmit(p.value) : t.onSubmit(!0));
    }, d = () => {
      n.value = !1, t.onCancel();
    };
    return (o, l) => {
      const v = c("VIcon"), i = c("VToolbar"), u = c("v-col"), m = c("VTextField"), x = c("v-row"), I = c("VCardText"), D = c("VDivider"), q = c("VSpacer"), T = c("VBtn"), z = c("VCardActions"), K = c("VCard"), M = c("VForm"), R = c("VDialog"), G = c("VDefaultsProvider");
      return f(), B("div", tt, [
        s(G, null, {
          default: r(() => {
            var A, E;
            return [
              s(R, h({
                modelValue: n.value,
                "onUpdate:modelValue": l[1] || (l[1] = (N) => n.value = N),
                persistent: "",
                transition: (A = e.options) == null ? void 0 : A.transition,
                width: (E = e.options) == null ? void 0 : E.width,
                scrollable: ""
              }, e.options.dialogProps), {
                default: r(() => [
                  s(M, {
                    "validate-on": "submit",
                    onSubmit: L(a, ["prevent"])
                  }, {
                    default: r(() => {
                      var N, U;
                      return [
                        s(K, h(e.options.cardProps, {
                          "min-width": (N = e.options) == null ? void 0 : N.minWidth,
                          "min-height": (U = e.options) == null ? void 0 : U.minHeight
                        }), {
                          default: r(() => [
                            C(y) ? (f(), _(i, {
                              key: 0,
                              title: C(y),
                              density: "compact",
                              color: e.status === "default" ? e.options.defaultColor : e.status
                            }, {
                              default: r(() => [
                                s(v, {
                                  icon: e.options[`${e.status}Icon`],
                                  class: "mr-2"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["title", "color"])) : P("", !0),
                            s(I, null, {
                              default: r(() => [
                                s(x, {
                                  align: "center",
                                  justify: e.options.textAlign,
                                  class: "h-100"
                                }, {
                                  default: r(() => [
                                    s(u, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: r(() => [
                                        b(k(C(V)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    e.options.prompt ? (f(), _(u, {
                                      key: 0,
                                      cols: "12"
                                    }, {
                                      default: r(() => [
                                        s(m, h({
                                          modelValue: p.value,
                                          "onUpdate:modelValue": l[0] || (l[0] = (J) => p.value = J)
                                        }, e.options.inputProps), null, 16, ["modelValue"])
                                      ]),
                                      _: 1
                                    })) : P("", !0)
                                  ]),
                                  _: 1
                                }, 8, ["justify"])
                              ]),
                              _: 1
                            }),
                            e.options.showDivider ? (f(), _(D, { key: 1 })) : P("", !0),
                            s(z, null, {
                              default: r(() => [
                                s(q),
                                s(T, h(e.options.secondaryButtonProps || e.options.buttonProps, { onClick: d }), {
                                  default: r(() => [
                                    b(k(e.options.secondaryButtonText), 1)
                                  ]),
                                  _: 1
                                }, 16),
                                s(T, h({ variant: "tonal" }, e.options.primaryButtonProps || e.options.buttonProps, {
                                  color: "primary",
                                  type: "submit"
                                }), {
                                  default: r(() => [
                                    b(k(e.options.primaryButtonText), 1)
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
}), nt = { class: "vuetify-notifier-toast" }, ot = {
  key: 0,
  class: "font-weight-bold mb-2"
}, it = /* @__PURE__ */ g({
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
  setup(e) {
    const t = e, n = j(!0), p = w(() => {
      var a;
      return typeof t.content == "object" ? (a = t.content) == null ? void 0 : a.title : void 0;
    }), y = w(() => {
      var a;
      return typeof t.content == "object" ? (a = t.content) == null ? void 0 : a.text : t.content;
    }), V = () => {
      n.value = !1, t.onCancel();
    };
    return (a, d) => {
      const o = c("VBtn"), l = c("VSnackbar"), v = c("VDefaultsProvider");
      return f(), B("div", nt, [
        s(v, null, {
          default: r(() => [
            s(l, h({
              modelValue: n.value,
              "onUpdate:modelValue": [
                d[0] || (d[0] = (i) => n.value = i),
                V
              ],
              color: e.status === "default" ? e.options.defaultColor : e.status
            }, e.options.toastProps), {
              actions: r(() => [
                s(o, {
                  icon: "mdi-close-circle",
                  size: "small",
                  onClick: V
                })
              ]),
              default: r(() => [
                C(p) ? (f(), B("div", ot, k(C(p)), 1)) : P("", !0),
                Q("p", null, k(C(y)), 1)
              ]),
              _: 1
            }, 16, ["modelValue", "color"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), ct = { class: "vuetify-notifier" }, rt = /* @__PURE__ */ g({
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
  setup(e) {
    const t = e, n = j(!0);
    j("");
    const p = w(() => {
      var o;
      return typeof t.content == "object" ? (o = t.content) == null ? void 0 : o.title : void 0;
    }), y = w(() => {
      var o;
      return typeof t.content == "object" ? (o = t.content) == null ? void 0 : o.component : t.content;
    }), V = w(() => ({
      ...t.options.componentProps,
      onSubmit: a,
      onCancel: d
    })), a = async (o) => {
      n.value = !1, t.onSubmit(o);
    }, d = (o) => {
      n.value = !1, t.onCancel(o);
    };
    return (o, l) => {
      const v = c("v-icon"), i = c("v-btn"), u = c("VToolbar"), m = c("VCard"), x = c("VDialog"), I = c("VDefaultsProvider");
      return f(), B("div", ct, [
        s(I, null, {
          default: r(() => {
            var D, q;
            return [
              s(x, h({
                modelValue: n.value,
                "onUpdate:modelValue": l[0] || (l[0] = (T) => n.value = T),
                persistent: "",
                transition: (D = e.options) == null ? void 0 : D.transition,
                width: (q = e.options) == null ? void 0 : q.width,
                scrollable: ""
              }, e.options.dialogProps), {
                default: r(() => [
                  C(p) ? (f(), _(m, { key: 0 }, {
                    default: r(() => [
                      s(u, { title: C(p) }, {
                        default: r(() => [
                          e.options.existsButton ? (f(), _(i, {
                            key: 0,
                            icon: "",
                            onClick: d,
                            variant: "text"
                          }, {
                            default: r(() => [
                              s(v, null, {
                                default: r(() => [
                                  b("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : P("", !0)
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      (f(), _($(C(y)), h(C(V), {
                        onOnSubmit: a,
                        onOnCancel: d
                      }), null, 16))
                    ]),
                    _: 1
                  })) : (f(), B(X, { key: 1 }, [
                    (f(), _($(e.content), h(C(V), {
                      onOnSubmit: a,
                      onOnCancel: d
                    }), null, 16)),
                    e.options.existsButton ? (f(), _(i, {
                      key: 0,
                      position: "fixed",
                      location: "top right",
                      icon: "",
                      onClick: d,
                      variant: "text"
                    }, {
                      default: r(() => [
                        s(v, null, {
                          default: r(() => [
                            b("mdi-close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : P("", !0)
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
}), ut = () => document.querySelector("[data-v-app]"), st = () => document.createElement("div"), F = ({ component: e, app: t, content: n, status: p = "default", options: y }) => {
  const V = ut(), a = st();
  return new Promise((d, o) => {
    const l = Y(e, {
      content: n,
      status: p,
      options: y,
      onSubmit: (v) => {
        d(v), W(l, V, a);
      },
      onCancel: (v) => {
        switch (y == null ? void 0 : y.handleCancel) {
          case "resolve":
            d(v);
            break;
          case "reject":
            o(v);
            break;
        }
        W(l, V, a);
      }
    });
    Object.assign(l._context, t._context), V.appendChild(a), l.mount(a);
  });
}, W = (e, t, n) => {
  setTimeout(() => {
    e.unmount(), t.removeChild(n);
  }, 500);
}, H = Symbol.for("vuetify:notifier");
function at(e, t = {}) {
  const n = (i, u = "default", m) => {
    const x = { ...S.default, ...S.dialogOptions, ...t == null ? void 0 : t.default, ...t == null ? void 0 : t.dialogOptions, ...m };
    return console.log(x), F({
      component: et,
      app: e,
      content: i,
      status: u,
      options: x
    });
  };
  return {
    confirm: n,
    confirmSuccess: (i, u = {}) => n(i, "success", u),
    confirmInfo: (i, u = {}) => n(i, "info", u),
    confirmWarning: (i, u = {}) => n(i, "warning", u),
    confirmError: (i, u = {}) => n(i, "error", u),
    prompt: (i, u = "default", m = {}) => n(i, u, { ...m, prompt: !0 }),
    alert: (i, u = "default", m = {}) => n(i, u, { ...m, secondaryButtonProps: { style: "display:none" } }),
    toast: (i, u = "default", m = {}) => {
      const x = { ...S.default, ...S.toastOptions, ...t == null ? void 0 : t.default, ...t == null ? void 0 : t.toastOptions, ...m };
      return F({
        component: it,
        app: e,
        content: i,
        status: u,
        options: x
      });
    },
    component: (i, u = {}) => {
      const m = { ...S.default, ...S.componentOptions, ...t == null ? void 0 : t.default, ...t == null ? void 0 : t.componentOptions, ...u };
      return F({
        component: rt,
        app: e,
        content: i,
        status: "default",
        options: m
      });
    }
  };
}
function dt() {
  if (!Z())
    throw new Error("[Vuetify Notifier] useNotifier() must be called from inside a setup function");
  const t = O(H);
  if (!t)
    throw new Error("[Vuetify Notifier] Could not find Notifier injection");
  return t;
}
const mt = {
  install: (e, t) => {
    e.provide(H, at(e, t));
  }
};
export {
  H as NotifierSymbol,
  at as createNotifier,
  mt as default,
  dt as useNotifier
};
