/* @ds-bundle: {"format":4,"namespace":"KageLabsDesignSystem_d8ed30","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"be8d4e2a8d52","components/core/Button.jsx":"8bf6643ff2c9","components/core/Card.jsx":"184cddff3894","components/core/Icon.jsx":"e40d23280596","components/core/IconButton.jsx":"3068ba2a8c3a","components/core/Logo.jsx":"a941fa84af36","components/core/Tag.jsx":"34d95bb895b2","components/feedback/Dialog.jsx":"ddee83fdb0fc","components/feedback/Toast.jsx":"653e2e18d94b","components/feedback/Tooltip.jsx":"a4bfa4857831","components/forms/Checkbox.jsx":"b50388678bcd","components/forms/Field.jsx":"af6e4919ce91","components/forms/Input.jsx":"4063186ae6be","components/forms/Radio.jsx":"90d561ae0326","components/forms/Select.jsx":"fa477bc93b63","components/forms/Switch.jsx":"ba802e0475ea","components/navigation/Tabs.jsx":"75c798ee6d22","ui_kits/estate-console/ConsoleSidebar.jsx":"81aff33a7796","ui_kits/estate-console/ConsoleTopBar.jsx":"489b0f4b7d26","ui_kits/estate-console/ListingDetail.jsx":"d053743a4438","ui_kits/estate-console/ListingsTable.jsx":"522b6a4384eb","ui_kits/estate-console/data.js":"02bc38f839f7","ui_kits/marketing-site/ProductGrid.jsx":"87125b6de383","ui_kits/marketing-site/ProofBand.jsx":"fa3ffe6d134f","ui_kits/marketing-site/SiteFooter.jsx":"e5400b3cf581","ui_kits/marketing-site/SiteHero.jsx":"1e4ab4e102a5","ui_kits/marketing-site/SiteNav.jsx":"408d4877f02a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KageLabsDesignSystem_d8ed30 = window.KageLabsDesignSystem_d8ed30 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    background: "var(--surface-muted)",
    color: "var(--text-strong)",
    borderColor: "var(--border-strong)"
  },
  solid: {
    background: "var(--kage-black)",
    color: "var(--kage-cream)",
    borderColor: "var(--kage-black)"
  },
  accent: {
    background: "var(--status-info-surface)",
    color: "var(--teal-700)",
    borderColor: "var(--teal-500)"
  },
  success: {
    background: "var(--status-success-surface)",
    color: "var(--green-700)",
    borderColor: "var(--green-500)"
  },
  warning: {
    background: "var(--status-warning-surface)",
    color: "var(--amber-700)",
    borderColor: "var(--amber-500)"
  },
  danger: {
    background: "var(--status-danger-surface)",
    color: "var(--red-700)",
    borderColor: "var(--red-500)"
  }
};
function Badge({
  tone = "neutral",
  dot = false,
  children,
  style,
  ...rest
}) {
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      height: 22,
      padding: "0 8px",
      border: "var(--border-hairline) solid",
      borderRadius: "var(--radius-none)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-3xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      ...TONES[tone],
      ...style
    },
    ...rest
  }, dot ? React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const PAD = {
  sm: "0 12px",
  md: "0 20px",
  lg: "0 28px"
};
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
const FS = {
  sm: "var(--text-2xs)",
  md: "var(--text-xs)",
  lg: "var(--text-sm)"
};
const VARIANTS = {
  primary: {
    background: "var(--kage-black)",
    color: "var(--kage-cream)",
    borderColor: "var(--kage-black)"
  },
  secondary: {
    background: "transparent",
    color: "var(--text-strong)",
    borderColor: "var(--border-strong)"
  },
  accent: {
    background: "var(--teal-500)",
    color: "var(--kage-cream)",
    borderColor: "var(--teal-500)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)",
    borderColor: "transparent"
  },
  danger: {
    background: "var(--red-500)",
    color: "var(--neutral-0)",
    borderColor: "var(--red-500)"
  }
};
const HOVER = {
  primary: {
    background: "var(--teal-700)",
    borderColor: "var(--teal-700)"
  },
  secondary: {
    background: "var(--kage-black)",
    color: "var(--kage-cream)"
  },
  accent: {
    background: "var(--teal-700)",
    borderColor: "var(--teal-700)"
  },
  ghost: {
    background: "var(--surface-muted)"
  },
  danger: {
    background: "var(--red-700)",
    borderColor: "var(--red-700)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-3)",
    height: H[size],
    padding: PAD[size],
    width: fullWidth ? "100%" : "auto",
    fontFamily: "var(--font-sans)",
    fontSize: FS[size],
    fontWeight: "var(--weight-bold)",
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    border: "var(--border-rule) solid",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? .4 : 1,
    transition: "var(--transition-control)",
    translate: down && !disabled ? "var(--press-offset) var(--press-offset)" : "0 0",
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : null),
    ...style
  };
  return React.createElement("button", {
    type,
    disabled,
    onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  variant = "ruled",
  padding = "var(--pad-card)",
  as = "div",
  children,
  style,
  ...rest
}) {
  const V = {
    ruled: {
      background: "var(--surface-card)",
      border: "var(--border-rule) solid var(--border-default)",
      boxShadow: "none"
    },
    lifted: {
      background: "var(--surface-card)",
      border: "var(--border-rule) solid var(--border-strong)",
      boxShadow: "var(--shadow-hard)"
    },
    flat: {
      background: "var(--surface-raised)",
      border: "var(--border-hairline) solid var(--border-subtle)",
      boxShadow: "none"
    },
    inverse: {
      background: "var(--kage-black)",
      border: "var(--border-rule) solid var(--kage-black)",
      color: "var(--kage-cream)",
      boxShadow: "none"
    }
  };
  return React.createElement(as, {
    className: variant === "inverse" ? "kage-invert" : undefined,
    style: {
      borderRadius: "var(--radius-none)",
      padding,
      ...V[variant],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* Lucide is a documented SUBSTITUTION: the brand assets shipped no icon set.
   Rendered as a currentColor mask so stroke colour follows text colour. */
function Icon({
  name,
  size = 20,
  strokeAlign = "center",
  label,
  style,
  ...rest
}) {
  const url = "url(\"" + CDN + name + ".svg\")";
  return React.createElement("span", {
    role: label ? "img" : "presentation",
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: strokeAlign,
      maskPosition: strokeAlign,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
const G = {
  sm: 16,
  md: 20,
  lg: 24
};
function IconButton({
  icon,
  label,
  variant = "secondary",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const solid = variant === "primary";
  return React.createElement("button", {
    type: "button",
    "aria-label": label,
    disabled,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: H[size],
      height: H[size],
      padding: 0,
      borderRadius: "var(--radius-none)",
      border: "var(--border-rule) solid " + (variant === "ghost" ? "transparent" : "var(--border-strong)"),
      background: solid ? "var(--kage-black)" : hover && !disabled ? variant === "ghost" ? "var(--surface-muted)" : "var(--kage-black)" : "transparent",
      color: solid || hover && !disabled && variant !== "ghost" ? "var(--kage-cream)" : "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .4 : 1,
      transition: "var(--transition-control)",
      ...style
    },
    ...rest
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: G[size]
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  mark: "mark",
  lockup: "lockup"
};
function Logo({
  variant = "lockup",
  height = 40,
  assetBase = "assets",
  alt = "KageLabs",
  style,
  ...rest
}) {
  const file = assetBase + "/logo-" + SRC[variant] + ".png";
  return React.createElement("img", {
    src: file,
    alt,
    style: {
      height,
      width: "auto",
      display: "block",
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  selected = false,
  onRemove,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);
  return React.createElement("span", {
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 28,
      padding: "0 10px",
      border: "var(--border-rule) solid " + (selected ? "var(--kage-black)" : "var(--border-subtle)"),
      background: selected ? "var(--kage-black)" : hover && interactive ? "var(--surface-muted)" : "transparent",
      color: selected ? "var(--kage-cream)" : "var(--text-body)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-tight)",
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    },
    ...rest
  }, children, onRemove ? React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      lineHeight: 1,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      opacity: .6
    }
  }, "\u00d7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-7)",
      background: "var(--overlay-scrim)",
      backdropFilter: "blur(var(--overlay-blur))"
    }
  }, React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "var(--border-heavy) solid var(--kage-black)",
      boxShadow: "var(--shadow-hard-lg)",
      borderRadius: "var(--radius-none)",
      ...style
    },
    ...rest
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-6) var(--pad-card)",
      borderBottom: "var(--border-rule) solid var(--border-default)"
    }
  }, React.createElement("div", null, React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-tight)",
      margin: 0,
      color: "var(--text-strong)"
    }
  }, title), description ? React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose
  }) : null), React.createElement("div", {
    style: {
      padding: "var(--pad-card)"
    }
  }, children), footer ? React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--pad-card)",
      borderTop: "var(--border-rule) solid var(--border-default)",
      background: "var(--surface-raised)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  info: {
    icon: "info",
    bar: "var(--teal-500)"
  },
  success: {
    icon: "check",
    bar: "var(--green-500)"
  },
  warning: {
    icon: "triangle-alert",
    bar: "var(--amber-500)"
  },
  danger: {
    icon: "octagon-alert",
    bar: "var(--red-500)"
  }
};
function Toast({
  tone = "info",
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone];
  return React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      minWidth: 280,
      maxWidth: 420,
      padding: "var(--space-4) var(--space-5)",
      background: "var(--kage-black)",
      color: "var(--kage-cream)",
      borderLeft: "var(--border-frame) solid " + t.bar,
      borderRadius: "var(--radius-none)",
      boxShadow: "var(--shadow-overlay)",
      ...style
    },
    ...rest
  }, React.createElement("span", {
    style: {
      display: "flex",
      paddingTop: 2,
      color: t.bar
    }
  }, React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase"
    }
  }, title), message ? React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: "var(--text-sm)",
      color: "var(--neutral-300)"
    }
  }, message) : null), onDismiss ? React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    variant: "ghost",
    size: "sm",
    onClick: onDismiss,
    style: {
      color: "var(--kage-cream)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === "top" ? {
    bottom: "calc(100% + 8px)",
    left: "50%",
    translate: "-50% 0"
  } : placement === "bottom" ? {
    top: "calc(100% + 8px)",
    left: "50%",
    translate: "-50% 0"
  } : placement === "left" ? {
    right: "calc(100% + 8px)",
    top: "50%",
    translate: "0 -50%"
  } : {
    left: "calc(100% + 8px)",
    top: "50%",
    translate: "0 -50%"
  };
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    ...rest
  }, children, open ? React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 70,
      whiteSpace: "nowrap",
      padding: "6px 10px",
      background: "var(--kage-black)",
      color: "var(--kage-cream)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      borderRadius: "var(--radius-none)",
      ...pos
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    },
    ...rest
  }, React.createElement("input", {
    type: "checkbox",
    checked,
    disabled,
    onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "0 0 auto",
      borderRadius: "var(--radius-none)",
      border: "var(--border-rule) solid " + (on ? "var(--kage-black)" : "var(--border-subtle)"),
      background: on ? "var(--kage-black)" : "var(--surface-card)",
      color: "var(--kage-cream)",
      transition: "var(--transition-control)"
    }
  }, on ? React.createElement(__ds_scope.Icon, {
    name: indeterminate ? "minus" : "check",
    size: 14
  }) : null), label ? React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    },
    ...rest
  }, label ? React.createElement("label", {
    htmlFor,
    className: "kage-eyebrow",
    style: {
      color: "var(--text-strong)"
    }
  }, label, required ? React.createElement("span", {
    style: {
      color: "var(--status-danger)",
      marginLeft: 4
    }
  }, "*") : null) : null, children, error ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--status-danger)"
    }
  }, error) : hint ? React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--status-danger)" : focus ? "var(--kage-black)" : "var(--border-subtle)";
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: H[size],
      padding: "0 var(--pad-control)",
      background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
      border: "var(--border-rule) solid " + border,
      borderRadius: "var(--radius-none)",
      boxShadow: focus ? "var(--shadow-hard-sm)" : "none",
      transition: "var(--transition-control)",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, prefix ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, prefix) : null, React.createElement("input", {
    disabled,
    ...rest,
    style: {
      all: "unset",
      flex: 1,
      minWidth: 0,
      fontFamily: "var(--font-sans)",
      fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "text"
    },
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }), suffix ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    },
    ...rest
  }, React.createElement("input", {
    type: "radio",
    checked,
    disabled,
    name,
    value,
    onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      flex: "0 0 auto",
      borderRadius: "var(--radius-full)",
      border: "var(--border-rule) solid " + (checked ? "var(--kage-black)" : "var(--border-subtle)"),
      background: "var(--surface-card)",
      transition: "var(--transition-control)"
    }
  }, checked ? React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-full)",
      background: "var(--kage-black)"
    }
  }) : null), label ? React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
function Select({
  options = [],
  size = "md",
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      height: H[size],
      width: "100%",
      background: disabled ? "var(--surface-muted)" : "var(--surface-card)",
      border: "var(--border-rule) solid " + (invalid ? "var(--status-danger)" : focus ? "var(--kage-black)" : "var(--border-subtle)"),
      boxShadow: focus ? "var(--shadow-hard-sm)" : "none",
      transition: "var(--transition-control)",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, React.createElement("select", {
    disabled,
    ...rest,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      all: "unset",
      flex: 1,
      height: "100%",
      padding: "0 36px 0 var(--pad-control)",
      fontFamily: "var(--font-sans)",
      fontSize: size === "sm" ? "var(--text-xs)" : "var(--text-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value,
      l = typeof o === "string" ? o : o.label;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), React.createElement("span", {
    style: {
      position: "absolute",
      right: "var(--space-4)",
      display: "flex",
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    },
    ...rest
  }, React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked,
    disabled,
    onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      width: 40,
      height: 22,
      flex: "0 0 auto",
      border: "var(--border-rule) solid " + (checked ? "var(--kage-black)" : "var(--border-subtle)"),
      background: checked ? "var(--kage-black)" : "var(--surface-card)",
      borderRadius: "var(--radius-none)",
      transition: "var(--transition-control)"
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 20 : 2,
      width: 14,
      height: 14,
      background: checked ? "var(--kage-cream)" : "var(--neutral-400)",
      transition: "left var(--duration-fast) var(--ease-out),background-color var(--duration-fast) var(--ease-out)"
    }
  })), label ? React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = "rule",
  style,
  ...rest
}) {
  const active = value !== undefined ? value : items[0] && (items[0].value || items[0]);
  return React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: variant === "block" ? "var(--space-3)" : "var(--space-7)",
      borderBottom: variant === "rule" ? "var(--border-rule) solid var(--border-subtle)" : "none",
      ...style
    },
    ...rest
  }, items.map(it => {
    const v = typeof it === "string" ? it : it.value,
      l = typeof it === "string" ? it : it.label;
    const on = v === active;
    const block = variant === "block";
    return React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: block ? "0 14px" : "0 0 10px",
        height: block ? 32 : "auto",
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-3)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        color: on ? block ? "var(--kage-cream)" : "var(--text-strong)" : "var(--text-muted)",
        background: block && on ? "var(--kage-black)" : "transparent",
        border: block ? "var(--border-rule) solid " + (on ? "var(--kage-black)" : "var(--border-subtle)") : "none",
        boxShadow: !block && on ? "inset 0 -3px 0 var(--kage-black)" : "none",
        transition: "var(--transition-control)"
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/estate-console/ConsoleSidebar.jsx
try { (() => {
const {
  Logo,
  Icon,
  Badge
} = window.KageLabsDesignSystem_d8ed30;
const NAV = [{
  icon: "layout-dashboard",
  label: "Overview"
}, {
  icon: "building-2",
  label: "Listings",
  count: 6
}, {
  icon: "inbox",
  label: "Leads",
  count: 14
}, {
  icon: "sparkles",
  label: "Valuations"
}, {
  icon: "file-text",
  label: "Documents"
}, {
  icon: "chart-no-axes-column",
  label: "Reports"
}];
function ConsoleSidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "kage-invert",
    style: {
      width: 248,
      flex: "0 0 248px",
      display: "flex",
      flexDirection: "column",
      borderRight: "var(--border-rule) solid var(--kage-black)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      borderBottom: "var(--border-hairline) solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 26,
    assetBase: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "var(--space-5) var(--space-4)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      flex: 1
    }
  }, NAV.map(n => {
    const on = n.label === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.label,
      type: "button",
      onClick: () => onNavigate && onNavigate(n.label),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        height: 36,
        padding: "0 var(--space-4)",
        background: on ? "var(--kage-cream)" : "transparent",
        color: on ? "var(--kage-black)" : "var(--text-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "var(--tracking-caps)",
        textTransform: "uppercase",
        transition: "var(--transition-control)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, n.label), n.count ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-3xs)",
        opacity: .7
      }
    }, n.count) : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-5)",
      borderTop: "var(--border-hairline) solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      display: "grid",
      placeItems: "center",
      background: "var(--kage-cream)",
      color: "var(--kage-black)",
      fontFamily: "var(--font-display)",
      fontSize: 12
    }
  }, "AF"), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-strong)"
    }
  }, "Ana Ferreira"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-3xs)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, "Prata Imobili\xE1ria"))));
}
Object.assign(window, {
  ConsoleSidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/estate-console/ConsoleSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/estate-console/ConsoleTopBar.jsx
try { (() => {
const {
  Input,
  IconButton,
  Button,
  Tooltip,
  Icon
} = window.KageLabsDesignSystem_d8ed30;
function ConsoleTopBar({
  title,
  crumb,
  onNew
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      padding: "var(--space-4) var(--space-6)",
      borderBottom: "var(--border-rule) solid var(--border-default)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, crumb ? /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, crumb) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: crumb ? "2px 0 0" : 0,
      fontSize: "var(--text-xl)"
    }
  }, title)), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    placeholder: "Search listings, leads, documents",
    style: {
      width: 300
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Filters"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "sliders-horizontal",
    label: "Filters",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Notifications"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onNew
  }, "New listing"));
}
Object.assign(window, {
  ConsoleTopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/estate-console/ConsoleTopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/estate-console/ListingDetail.jsx
try { (() => {
const {
  Card,
  Tabs,
  Badge,
  Button,
  IconButton,
  Field,
  Input,
  Select,
  Switch,
  Icon,
  Tooltip
} = window.KageLabsDesignSystem_d8ed30;
const fmt = n => "€" + n.toLocaleString("en-US");
function ListingDetail({
  listing,
  onBack,
  onValuate,
  valuation,
  running
}) {
  const [tab, setTab] = React.useState("Overview");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Back to listings",
    size: "sm",
    onClick: onBack
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, listing.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, listing.id, " \xB7 ", listing.days, " days on market"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Share"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Publish")), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Overview", "Valuation", "Documents", "Activity"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "ruled",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: "var(--kage-black)",
      display: "grid",
      placeItems: "center",
      borderBottom: "var(--border-rule) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--neutral-500)"
    }
  }, "Property photography \u2014 not supplied")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-3xl)",
      lineHeight: "var(--leading-flush)"
    }
  }, listing.address), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, listing.city, " \xB7 ", listing.beds, " bed \xB7 ", listing.area, " m\xB2 \xB7 asking ", fmt(listing.price)), /*#__PURE__*/React.createElement("p", {
    className: "kage-serif",
    style: {
      margin: "var(--space-5) 0 0",
      fontSize: "var(--text-md)",
      lineHeight: 1.45
    }
  }, "Draft summary, generated from the deed, the energy certificate and the last three comparable sales on the street."))), /*#__PURE__*/React.createElement(Card, {
    variant: "ruled"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, "Record"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: "var(--space-5)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Asking price"
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: "\u20AC",
    defaultValue: listing.price.toLocaleString("en-US")
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Floor area"
  }, /*#__PURE__*/React.createElement(Input, {
    suffix: "m\xB2",
    defaultValue: String(listing.area)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Market"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Lisbon", "Porto", "Faro"],
    defaultValue: listing.city
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Bedrooms"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["1", "2", "3", "4"],
    defaultValue: String(listing.beds)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      paddingTop: "var(--space-5)",
      borderTop: "var(--border-hairline) solid var(--border-subtle)",
      display: "flex",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    label: "Auto-reply to leads"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Syndicate to portals"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "var(--pad-card)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow",
    style: {
      color: "var(--text-muted)"
    }
  }, "AI valuation")), valuation ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-3xl)",
      marginTop: "var(--space-5)",
      color: "var(--text-strong)"
    }
  }, fmt(valuation.mid)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: "var(--space-3)"
    }
  }, "range ", fmt(valuation.low), " \u2013 ", fmt(valuation.high), " \xB7 conf ", listing.conf.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--neutral-800)",
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: listing.conf * 100 + "%",
      background: "var(--teal-300)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 0",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Based on 14 comparable sales within 400 m, adjusted for floor and condition.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 var(--space-6)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "No valuation on this record yet. The model reads the deed, the certificate and local comparables."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    fullWidth: true,
    onClick: onValuate
  }, running ? "Running…" : "Run valuation"))), /*#__PURE__*/React.createElement(Card, {
    variant: "flat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, "Documents"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-5) 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [["Deed of purchase", "PDF · 2.1 MB"], ["Energy certificate", "PDF · 480 KB"], ["Floor plan", "PDF · 1.4 MB"]].map(([n, m]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "var(--text-sm)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-3xs)",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, m)), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Read with AI"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "sparkles",
    label: "Read with AI",
    variant: "ghost",
    size: "sm"
  })))))))));
}
Object.assign(window, {
  ListingDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/estate-console/ListingDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/estate-console/ListingsTable.jsx
try { (() => {
const {
  Tabs,
  Tag,
  Badge,
  Checkbox,
  Icon
} = window.KageLabsDesignSystem_d8ed30;
const TONE = {
  "Live": "success",
  "Under offer": "warning",
  "Draft": "neutral",
  "Archived": "neutral"
};
const money = n => "€" + n.toLocaleString("en-US");
function ListingsTable({
  onOpen
}) {
  const [filter, setFilter] = React.useState("All");
  const [city, setCity] = React.useState("All cities");
  const rows = window.LISTINGS.filter(r => (filter === "All" || r.status === filter) && (city === "All cities" || r.city === city));
  const th = {
    textAlign: "left",
    padding: "0 var(--space-5)",
    height: 34,
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-3xs)",
    fontWeight: 700,
    letterSpacing: "var(--tracking-caps)",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    borderBottom: "var(--border-rule) solid var(--border-default)",
    whiteSpace: "nowrap"
  };
  const td = {
    padding: "var(--space-4) var(--space-5)",
    fontSize: "var(--text-sm)",
    borderBottom: "var(--border-hairline) solid var(--border-subtle)",
    whiteSpace: "nowrap"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "block",
    items: ["All", "Live", "Under offer", "Draft", "Archived"],
    value: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, ["All cities", "Lisbon", "Porto", "Faro"].map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: city === c,
    onClick: () => setCity(c)
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "var(--border-rule) solid var(--border-default)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 44
    }
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Reference"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Address"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Beds"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Area"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Asking"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "AI confidence"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 44
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id,
    onClick: () => onOpen(r),
    style: {
      cursor: "pointer"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-raised)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, r.id), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 500
    }
  }, r.address, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, ", ", r.city)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.beds), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)"
    }
  }, r.area, " m\xB2"), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: "var(--font-mono)"
    }
  }, money(r.price)), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 6,
      background: "var(--surface-muted)",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: r.conf * 100 + "%",
      height: "100%",
      background: r.conf > .8 ? "var(--teal-500)" : "var(--amber-500)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      color: "var(--text-muted)"
    }
  }, r.conf.toFixed(2)))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: TONE[r.status],
    dot: r.status === "Live"
  }, r.status)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, rows.length, " of ", window.LISTINGS.length, " records"));
}
Object.assign(window, {
  ListingsTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/estate-console/ListingsTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/estate-console/data.js
try { (() => {
window.LISTINGS = [{
  id: "LSB-1184",
  address: "12 Rua da Prata",
  city: "Lisbon",
  beds: 2,
  area: 84,
  price: 480000,
  status: "Live",
  conf: 0.86,
  owner: "Ana Ferreira",
  days: 9
}, {
  id: "LSB-1179",
  address: "48 Av. da Liberdade",
  city: "Lisbon",
  beds: 3,
  area: 132,
  price: 1250000,
  status: "Under offer",
  conf: 0.79,
  owner: "Ana Ferreira",
  days: 23
}, {
  id: "PRT-0932",
  address: "7 Rua de Cedofeita",
  city: "Porto",
  beds: 1,
  area: 52,
  price: 265000,
  status: "Live",
  conf: 0.91,
  owner: "Tomás Dias",
  days: 4
}, {
  id: "PRT-0928",
  address: "210 Rua da Boavista",
  city: "Porto",
  beds: 4,
  area: 186,
  price: 890000,
  status: "Draft",
  conf: 0.64,
  owner: "Tomás Dias",
  days: 1
}, {
  id: "FAR-0411",
  address: "3 Travessa do Mar",
  city: "Faro",
  beds: 2,
  area: 96,
  price: 395000,
  status: "Live",
  conf: 0.88,
  owner: "Rita Nunes",
  days: 14
}, {
  id: "LSB-1166",
  address: "85 Rua dos Anjos",
  city: "Lisbon",
  beds: 2,
  area: 71,
  price: 410000,
  status: "Archived",
  conf: 0.72,
  owner: "Rita Nunes",
  days: 61
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/estate-console/data.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProductGrid.jsx
try { (() => {
const {
  Card,
  Icon,
  Badge
} = window.KageLabsDesignSystem_d8ed30;
const PRODUCTS = [{
  icon: "building-2",
  name: "Kage Estate",
  who: "Real estate",
  copy: "Valuations, listings and lead replies drafted from your own data.",
  tag: "Live"
}, {
  icon: "briefcase",
  name: "Kage Ops",
  who: "Business",
  copy: "Contracts read, summarised and routed before anyone opens them.",
  tag: "Live"
}, {
  icon: "store",
  name: "Kage Counter",
  who: "Small business",
  copy: "Quotes, invoices and follow-ups for people who do their own admin.",
  tag: "Beta"
}, {
  icon: "user-round",
  name: "Kage Personal",
  who: "People",
  copy: "One assistant for the documents that decide where you live.",
  tag: "Waitlist"
}];
function ProductGrid() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-10) var(--pad-page)",
      borderBottom: "var(--border-rule) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, "The products"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "var(--space-4) 0 0"
    }
  }, "Four surfaces,", /*#__PURE__*/React.createElement("br", null), "one model of your work")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "40ch",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "Each product reads the same records. Set something once and the rest of the stack knows it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-5)"
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    variant: "ruled",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, p.who), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "var(--space-2) 0 0",
      fontSize: "var(--text-lg)"
    }
  }, p.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)",
      flex: 1
    }
  }, p.copy), /*#__PURE__*/React.createElement(Badge, {
    tone: p.tag === "Live" ? "success" : p.tag === "Beta" ? "accent" : "neutral",
    dot: p.tag === "Live"
  }, p.tag)))));
}
Object.assign(window, {
  ProductGrid
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProductGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ProofBand.jsx
try { (() => {
function ProofBand() {
  const stats = [{
    n: "1,240",
    l: "Agencies on Kage Estate"
  }, {
    n: "8.4M",
    l: "Documents read in 2026"
  }, {
    n: "41s",
    l: "Median time to a drafted reply"
  }, {
    n: "0",
    l: "Customer data used for training"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "kage-invert",
    style: {
      padding: "var(--space-9) var(--pad-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      gap: "var(--space-7)"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      borderTop: "var(--border-frame) solid var(--kage-cream)",
      paddingTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-3xl)",
      letterSpacing: "-.02em",
      color: "var(--text-strong)"
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, s.l)))));
}
Object.assign(window, {
  ProofBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ProofBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteFooter.jsx
try { (() => {
const {
  Logo,
  Input,
  Button,
  Field
} = window.KageLabsDesignSystem_d8ed30;
function SiteFooter() {
  const cols = [{
    h: "Products",
    items: ["Kage Estate", "Kage Ops", "Kage Counter", "Kage Personal"]
  }, {
    h: "Company",
    items: ["About", "Careers", "Press", "Contact"]
  }, {
    h: "Legal",
    items: ["Privacy", "Terms", "DPA", "Security"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "var(--space-9) var(--pad-page) var(--space-7)",
      borderTop: "var(--border-rule) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr) 1.4fr",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    height: 56,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 0",
      maxWidth: "26ch",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, "KageLabs builds AI software for property, business and the people in between.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: "var(--space-4) 0 0",
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      fontSize: "var(--text-sm)",
      textDecoration: "none"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Field, {
    label: "Get the monthly note",
    hint: "One email a month. Product and nothing else."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@company.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "md"
  }, "Join"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "var(--space-8)",
      paddingTop: "var(--space-5)",
      borderTop: "var(--border-hairline) solid var(--border-subtle)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KageLabs"), /*#__PURE__*/React.createElement("span", null, "Lisbon \xB7 Porto")));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteHero.jsx
try { (() => {
const {
  Button,
  Badge,
  Icon
} = window.KageLabsDesignSystem_d8ed30;
function SiteHero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      borderBottom: "var(--border-rule) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-10) var(--pad-page)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kage-eyebrow"
  }, "Software company \xB7 Est. Lisbon"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "var(--space-5) 0 0",
      fontSize: "var(--text-6xl)",
      lineHeight: "var(--leading-flush)"
    }
  }, "Vanguard", /*#__PURE__*/React.createElement("br", null), "of software"), /*#__PURE__*/React.createElement("p", {
    className: "kage-serif",
    style: {
      margin: "var(--space-6) 0 0",
      maxWidth: "30ch",
      fontSize: "var(--text-xl)",
      lineHeight: 1.25,
      color: "var(--text-body)"
    }
  }, "We build the AI layer for property, business and the paperwork in between."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onCta
  }, "Request access"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "See the products")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "4 products"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "1,240 agencies"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "EU-hosted"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderLeft: "var(--border-rule) solid var(--border-default)",
      background: "var(--kage-black)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    alt: "KageLabs",
    style: {
      width: "70%",
      maxWidth: 340,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: 16,
      background: "repeating-conic-gradient(var(--kage-cream) 0% 25%,transparent 0% 50%) 0 0/16px 16px"
    }
  })));
}
Object.assign(window, {
  SiteHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/SiteNav.jsx
try { (() => {
const {
  Logo,
  Button,
  Icon
} = window.KageLabsDesignSystem_d8ed30;
function SiteNav({
  onCta
}) {
  const links = ["Real estate", "Business", "Small business", "People", "Company"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      padding: "14px var(--pad-page)",
      background: "var(--surface-page)",
      borderBottom: "var(--border-rule) solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "flex",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "lockup",
    height: 30,
    assetBase: "../../assets"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#top",
    className: "kage-eyebrow",
    style: {
      textDecoration: "none",
      color: "var(--text-muted)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "kage-eyebrow",
    style: {
      textDecoration: "none",
      color: "var(--text-strong)"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onCta
  }, "Request access")));
}
Object.assign(window, {
  SiteNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/SiteNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
