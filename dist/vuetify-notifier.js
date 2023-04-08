import { defineComponent as U, ref as N, computed as _, resolveComponent as c, openBlock as v, createElementBlock as g, createVNode as s, withCtx as u, mergeProps as w, withModifiers as L, unref as C, createBlock as S, createCommentVNode as k, createTextVNode as T, toDisplayString as I, createElementVNode as Q, resolveDynamicComponent as K, Fragment as X, createApp as Y, getCurrentInstance as Z, inject as O } from "vue";
const b = {
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
}, tt = { class: "vuetify-notifier" }, et = /* @__PURE__ */ U({
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
    const t = e, r = N(!0), d = N(""), f = _(() => {
      var i;
      return typeof t.content == "object" ? (i = t.content) == null ? void 0 : i.title : void 0;
    }), p = _(() => {
      var i;
      return typeof t.content == "object" ? (i = t.content) == null ? void 0 : i.text : t.content;
    }), a = async (i) => {
      const { valid: l } = await i;
      l && (r.value = !1, t.options.prompt ? t.onSubmit(d.value) : t.onSubmit(!0));
    }, m = () => {
      r.value = !1, t.onCancel();
    };
    return (i, l) => {
      const y = c("VIcon"), x = c("VToolbar"), P = c("v-col"), h = c("VTextField"), F = c("v-row"), A = c("VCardText"), j = c("VDivider"), B = c("VSpacer"), D = c("VBtn"), n = c("VCardActions"), o = c("VCard"), V = c("VForm"), q = c("VDialog"), G = c("VDefaultsProvider");
      return v(), g("div", tt, [
        s(G, null, {
          default: u(() => {
            var $, H;
            return [
              s(q, w({
                modelValue: r.value,
                "onUpdate:modelValue": l[1] || (l[1] = (E) => r.value = E),
                persistent: "",
                transition: ($ = e.options) == null ? void 0 : $.transition,
                width: (H = e.options) == null ? void 0 : H.width,
                scrollable: ""
              }, e.options.dialogProps), {
                default: u(() => [
                  s(V, {
                    "validate-on": "submit",
                    onSubmit: L(a, ["prevent"])
                  }, {
                    default: u(() => {
                      var E, z;
                      return [
                        s(o, w(e.options.cardProps, {
                          "min-width": (E = e.options) == null ? void 0 : E.minWidth,
                          "min-height": (z = e.options) == null ? void 0 : z.minHeight
                        }), {
                          default: u(() => [
                            C(f) ? (v(), S(x, {
                              key: 0,
                              title: C(f),
                              density: "compact",
                              color: e.status === "default" ? e.options.defaultColor : e.status
                            }, {
                              default: u(() => [
                                s(y, {
                                  icon: e.options[`${e.status}Icon`],
                                  class: "mr-2"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["title", "color"])) : k("", !0),
                            s(A, null, {
                              default: u(() => [
                                s(F, {
                                  align: "center",
                                  justify: e.options.textAlign,
                                  class: "h-100"
                                }, {
                                  default: u(() => [
                                    s(P, {
                                      cols: "12",
                                      class: "text-center"
                                    }, {
                                      default: u(() => [
                                        T(I(C(p)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    e.options.prompt ? (v(), S(P, {
                                      key: 0,
                                      cols: "12"
                                    }, {
                                      default: u(() => [
                                        s(h, w({
                                          modelValue: d.value,
                                          "onUpdate:modelValue": l[0] || (l[0] = (J) => d.value = J)
                                        }, e.options.inputProps), null, 16, ["modelValue"])
                                      ]),
                                      _: 1
                                    })) : k("", !0)
                                  ]),
                                  _: 1
                                }, 8, ["justify"])
                              ]),
                              _: 1
                            }),
                            e.options.showDivider ? (v(), S(j, { key: 1 })) : k("", !0),
                            s(n, null, {
                              default: u(() => [
                                s(B),
                                s(D, w(e.options.secondaryButtonProps || e.options.buttonProps, { onClick: m }), {
                                  default: u(() => [
                                    T(I(e.options.secondaryButtonText), 1)
                                  ]),
                                  _: 1
                                }, 16),
                                s(D, w({ variant: "tonal" }, e.options.primaryButtonProps || e.options.buttonProps, {
                                  color: "primary",
                                  type: "submit"
                                }), {
                                  default: u(() => [
                                    T(I(e.options.primaryButtonText), 1)
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
}, rt = /* @__PURE__ */ U({
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
    const t = e, r = N(!0), d = _(() => {
      var a;
      return typeof t.content == "object" ? (a = t.content) == null ? void 0 : a.title : void 0;
    }), f = _(() => {
      var a;
      return typeof t.content == "object" ? (a = t.content) == null ? void 0 : a.text : t.content;
    }), p = () => {
      r.value = !1, t.onCancel();
    };
    return (a, m) => {
      const i = c("VBtn"), l = c("VSnackbar"), y = c("VDefaultsProvider");
      return v(), g("div", nt, [
        s(y, null, {
          default: u(() => [
            s(l, w({
              modelValue: r.value,
              "onUpdate:modelValue": [
                m[0] || (m[0] = (x) => r.value = x),
                p
              ],
              color: e.status === "default" ? e.options.defaultColor : e.status
            }, e.options.toastProps), {
              actions: u(() => [
                s(i, {
                  icon: "mdi-close-circle",
                  size: "small",
                  onClick: p
                })
              ]),
              default: u(() => [
                C(d) ? (v(), g("div", ot, I(C(d)), 1)) : k("", !0),
                Q("p", null, I(C(f)), 1)
              ]),
              _: 1
            }, 16, ["modelValue", "color"])
          ]),
          _: 1
        })
      ]);
    };
  }
}), it = { class: "vuetify-notifier" }, ct = /* @__PURE__ */ U({
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
    const t = e, r = N(!0);
    N("");
    const d = _(() => {
      var i;
      return typeof t.content == "object" ? (i = t.content) == null ? void 0 : i.title : void 0;
    }), f = _(() => {
      var i;
      return typeof t.content == "object" ? (i = t.content) == null ? void 0 : i.component : t.content;
    }), p = _(() => ({
      ...t.options.componentProps,
      onSubmit: a,
      onCancel: m
    })), a = async (i) => {
      r.value = !1, t.onSubmit(i);
    }, m = (i) => {
      r.value = !1, t.onCancel(i);
    };
    return (i, l) => {
      const y = c("v-icon"), x = c("v-btn"), P = c("VToolbar"), h = c("VCard"), F = c("VDialog"), A = c("VDefaultsProvider");
      return v(), g("div", it, [
        s(A, null, {
          default: u(() => {
            var j, B;
            return [
              s(F, w({
                modelValue: r.value,
                "onUpdate:modelValue": l[0] || (l[0] = (D) => r.value = D),
                persistent: "",
                transition: (j = e.options) == null ? void 0 : j.transition,
                width: (B = e.options) == null ? void 0 : B.width,
                scrollable: ""
              }, e.options.dialogProps), {
                default: u(() => [
                  C(d) ? (v(), S(h, { key: 0 }, {
                    default: u(() => [
                      s(P, { title: C(d) }, {
                        default: u(() => [
                          e.options.existsButton ? (v(), S(x, {
                            key: 0,
                            icon: "",
                            onClick: m,
                            variant: "text"
                          }, {
                            default: u(() => [
                              s(y, null, {
                                default: u(() => [
                                  T("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : k("", !0)
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      (v(), S(K(C(f)), w(C(p), {
                        onOnSubmit: a,
                        onOnCancel: m
                      }), null, 16))
                    ]),
                    _: 1
                  })) : (v(), g(X, { key: 1 }, [
                    (v(), S(K(e.content), w(C(p), {
                      onOnSubmit: a,
                      onOnCancel: m
                    }), null, 16)),
                    e.options.existsButton ? (v(), S(x, {
                      key: 0,
                      position: "fixed",
                      location: "top right",
                      icon: "",
                      onClick: m,
                      variant: "text"
                    }, {
                      default: u(() => [
                        s(y, null, {
                          default: u(() => [
                            T("mdi-close")
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
}), ut = () => document.querySelector("[data-v-app]"), st = () => document.createElement("div"), W = ({ component: e, app: t, content: r, status: d = "default", options: f }) => {
  const p = ut(), a = st();
  return new Promise((m, i) => {
    const l = Y(e, {
      content: r,
      status: d,
      options: f,
      onSubmit: (y) => {
        m(y), M(l, p, a);
      },
      onCancel: (y) => {
        switch (f == null ? void 0 : f.handleCancel) {
          case "resolve":
            m(y);
            break;
          case "reject":
            i(y);
            break;
        }
        M(l, p, a);
      }
    });
    Object.assign(l._context, t._context), p.appendChild(a), l.mount(a);
  });
}, M = (e, t, r) => {
  setTimeout(() => {
    e.unmount(), t.removeChild(r);
  }, 500);
}, R = Symbol.for("vuetify:notifier");
function at(e, t = {}) {
  const r = (n, o = "default", V) => {
    const q = { ...b.default, ...b.dialogOptions, ...t == null ? void 0 : t.default, ...t == null ? void 0 : t.dialogOptions, ...V };
    return W({
      component: et,
      app: e,
      content: n,
      status: o,
      options: q
    });
  }, d = (n, o = "default", V = {}) => {
    const q = { ...b.default, ...b.toastOptions, ...t == null ? void 0 : t.default, ...t == null ? void 0 : t.toastOptions, ...V };
    return W({
      component: rt,
      app: e,
      content: n,
      status: o,
      options: q
    });
  }, f = (n, o = {}) => {
    const V = { ...b.default, ...b.componentOptions, ...t == null ? void 0 : t.default, ...t == null ? void 0 : t.componentOptions, ...o };
    return W({
      component: ct,
      app: e,
      content: n,
      status: "default",
      options: V
    });
  }, p = (n, o = {}) => r(n, "success", o), a = (n, o = {}) => r(n, "info", o), m = (n, o = {}) => r(n, "warning", o), i = (n, o = {}) => r(n, "error", o), l = (n, o = {}) => d(n, "success", o), y = (n, o = {}) => d(n, "info", o), x = (n, o = {}) => d(n, "warning", o), P = (n, o = {}) => d(n, "error", o), h = (n, o = "default", V = {}) => r(n, o, { ...V, secondaryButtonProps: { style: "display:none" } });
  return {
    confirm: r,
    confirmSuccess: p,
    confirmInfo: a,
    confirmWarning: m,
    confirmError: i,
    toast: d,
    toastSuccess: l,
    toastInfo: y,
    toastWarning: x,
    toastError: P,
    alert: h,
    alertSuccess: (n, o = {}) => h(n, "success", o),
    alertInfo: (n, o = {}) => h(n, "info", o),
    alertWarning: (n, o = {}) => h(n, "warning", o),
    alertError: (n, o = {}) => h(n, "error", o),
    prompt: (n, o = "default", V = {}) => r(n, o, { ...V, prompt: !0 }),
    component: f
  };
}
function dt() {
  if (!Z())
    throw new Error("[Vuetify Notifier] useNotifier() must be called from inside a setup function");
  const t = O(R);
  if (!t)
    throw new Error("[Vuetify Notifier] Could not find Notifier injection");
  return t;
}
const mt = {
  install: (e, t) => {
    e.provide(R, at(e, t));
  }
};
export {
  R as NotifierSymbol,
  at as createNotifier,
  mt as default,
  dt as useNotifier
};
