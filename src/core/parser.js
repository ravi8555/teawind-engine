// Style definitions
export const styleMap = {
  // Flex utilities
  "flex": { display: "flex" },
  "flex-center": { display: "flex", alignItems: "center", justifyContent: "center" },
  "flex-col": { display: "flex", flexDirection: "column" },
  "justify-between": { display: "flex", justifyContent: "space-between" },
  "gap-10": { gap: "10px" },
  
  // Border utilities
  "border-2": { borderWidth: "2px", borderStyle: "solid" },
  "border-4": { borderWidth: "4px", borderStyle: "solid" },
  "rounded-10": { borderRadius: "10px" },
  "rounded-20": { borderRadius: "20px" },
  "border-red": { borderColor: "#ef4444" },
  
  // Transform utilities
  "scale-2": { transform: "scale(2)" },
  "scale-3": { transform: "scale(3)" },
  "scale-1": { transform: "scale(1)" },
  "rotate-45": { transform: "rotate(45deg)" },
  "rotate-90": { transform: "rotate(90deg)" },
};

const spacingUnit = 4;
const colors = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#22c55e",
  yellow: "#facc15",
  black: "#000",
  white: "#fff",
  gray: "#6b7280"
};

export function parseDynamicClass(className, styles) {
  // Background colors
  if (className.startsWith("bg-")) {
    const color = className.split("-")[1];
    styles.backgroundColor = colors[color] || color;
  }

  // Text color & size
  if (className.startsWith("text-")) {
    const value = className.split("-")[1];
    if (colors[value]) {
      styles.color = colors[value];
    } else if (!isNaN(value)) {
      styles.fontSize = `${value}px`;
    }
  }

  // Text align
  if (className === "text-center") styles.textAlign = "center";
  if (className === "text-left") styles.textAlign = "left";
  if (className === "text-right") styles.textAlign = "right";

  // Width
  if (className.startsWith("w-")) {
    const val = className.split("-")[1];
    if (val === "full") styles.width = "100%";
    else if (val.includes("/")) {
      const [a, b] = val.split("/");
      styles.width = `${(a / b) * 100}%`;
    } else {
      styles.width = `${val * spacingUnit}px`;
    }
  }

  // Height
  if (className.startsWith("h-")) {
    const val = className.split("-")[1];
    if (val === "full") styles.height = "100%";
    else if (val === "screen") styles.height = "100vh";
    else {
      styles.height = `${val * spacingUnit}px`;
    }
  }

  // Padding
  if (className.startsWith("p-")) {
    const val = className.split("-")[1];
    styles.padding = `${val * spacingUnit}px`;
  }
  if (className.startsWith("px-")) {
    const val = className.split("-")[1];
    styles.paddingLeft = `${val * spacingUnit}px`;
    styles.paddingRight = `${val * spacingUnit}px`;
  }
  if (className.startsWith("py-")) {
    const val = className.split("-")[1];
    styles.paddingTop = `${val * spacingUnit}px`;
    styles.paddingBottom = `${val * spacingUnit}px`;
  }

  // Margin
  if (className.startsWith("m-")) {
    const val = className.split("-")[1];
    styles.margin = `${val * spacingUnit}px`;
  }
  if (className.startsWith("mt-")) {
    const val = className.split("-")[1];
    styles.marginTop = `${val * spacingUnit}px`;
  }
  if (className.startsWith("mb-")) {
    const val = className.split("-")[1];
    styles.marginBottom = `${val * spacingUnit}px`;
  }
  if (className.startsWith("ml-")) {
    const val = className.split("-")[1];
    styles.marginLeft = `${val * spacingUnit}px`;
  }
  if (className.startsWith("mr-")) {
    const val = className.split("-")[1];
    styles.marginRight = `${val * spacingUnit}px`;
  }

  // Font bold
  if (className === "font-bold") {
    styles.fontWeight = "bold";
  }
}