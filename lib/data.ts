export type Project = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  assetDir: string;
  caseStudy: {
    context: string;
    problem: string;
    system: string;
    implementation: string;
    result: string;
    next: string;
  };
};

export const projects: Project[] = [
  {
    id: "tm4c",
    index: "01",
    category: "Embedded Systems",
    title: "TM4C123 ESC Controller Simulator",
    description:
      "A pre-ESC development rig on the Tiva C LaunchPad — arm/disarm logic, potentiometer-driven speed input, RGB status signaling, and serial diagnostics, built as a controlled testbed before touching a real motor.",
    tags: ["TM4C123", "Embedded C", "PlatformIO", "Serial Diagnostics"],
    date: "[PROJECT DATE]",
    assetDir: "/assets/projects/tm4c",
    caseStudy: {
      context:
        "Before driving an actual BLDC motor and ESC, the control logic needed a safe, observable environment. The Tiva C LaunchPad became the proving ground.",
      problem:
        "Motor control logic is dangerous to iterate on directly — an armed system with no interlocks risks hardware and fingers. The system needed a deliberate arm/disarm state machine and legible status feedback before any real current flowed.",
      system:
        "A push-button interlock gates an armed/disarmed state machine. A potentiometer maps to a motor-speed command only when armed. An RGB LED encodes system status at a glance, and UART serial output streams diagnostics for verification against expected behavior.",
      implementation:
        "Written in Embedded C against the TM4C123 (Tiva C) peripheral set, built and flashed with PlatformIO. GPIO interrupt handling drives the arm/disarm transition; ADC sampling reads the potentiometer; UART transmits a diagnostic frame per control cycle.",
      result: "[INSERT MEASURED RESULT]",
      next: "[INSERT OSCILLOSCOPE IMAGE] — validating timing on the real ESC PWM line before integration.",
    },
  },
  {
    id: "oled",
    index: "02",
    category: "Hardware / Linux",
    title: "Raspberry Pi + OLED Display",
    description:
      "A Raspberry Pi driving a 0.96-inch SSD1306 OLED over I²C, built as a Linux-based display interface for status and diagnostic output.",
    tags: ["Raspberry Pi", "I²C", "SSD1306", "Python", "Linux"],
    date: "[PROJECT DATE]",
    assetDir: "/assets/projects/oled",
    caseStudy: {
      context:
        "A compact, low-power display interface was needed for showing live system state without a full monitor attached.",
      problem:
        "Driving a small OLED over I²C from a Linux single-board computer requires correctly addressing the device, managing the display buffer, and keeping refresh logic efficient enough not to block other processes.",
      system:
        "The Raspberry Pi communicates with the SSD1306 module over I²C at address 0x3C. A Python-based driver layer handles buffer writes and display refresh.",
      implementation:
        "Implemented on Raspberry Pi OS (Linux), using the I²C bus enabled via raspi-config. The 0.96-inch SSD1306 panel is addressed directly at 0x3C for framebuffer writes.",
      result: "[INSERT MEASURED RESULT]",
      next: "[INSERT LAB PHOTOGRAPH] — extending the driver to render live sensor data instead of static frames.",
    },
  },
  {
    id: "rc-filter",
    index: "03",
    category: "Electronics Laboratory",
    title: "RC Filter Characterization",
    description:
      "Bench measurement of RC low-pass and high-pass filter response using the ADALM1000 and Pixelpulse2, grounding signals-and-systems theory in real waveforms.",
    tags: ["ADALM1000", "Pixelpulse2", "RC Filters", "Signals & Systems"],
    date: "[PROJECT DATE]",
    assetDir: "/assets/projects/rc-filter",
    caseStudy: {
      context:
        "Filter theory from coursework needed to be verified against a physical breadboard circuit and real measurement equipment.",
      problem:
        "Predicted cutoff frequencies and phase behavior from analysis needed confirmation — component tolerances and parasitic effects shift real circuits away from ideal models.",
      system:
        "RC low-pass and high-pass networks built on breadboard, driven and measured through the ADALM1000 active learning module, visualized in Pixelpulse2.",
      implementation:
        "Swept input frequency across each network, capturing amplitude and phase response in Pixelpulse2 and comparing against the calculated cutoff frequency for each RC combination.",
      result: "[INSERT MEASURED RESULT]",
      next: "[INSERT OSCILLOSCOPE TRACE] — extending to a second-order filter stage.",
    },
  },
  {
    id: "ropewalker",
    index: "04",
    category: "Robotics",
    title: "RopeWalker",
    description:
      "A rope-climbing robot built around BLDC-driven traction and deliberate wheel geometry, integrating mechanical design with a real power system.",
    tags: ["BLDC Motor", "Mechanical Design", "Power Systems", "Robotics"],
    date: "[PROJECT DATE]",
    assetDir: "/assets/projects/ropewalker",
    caseStudy: {
      context:
        "A robotics project exploring how traction and wheel geometry interact when the working surface is a rope rather than a flat floor.",
      problem:
        "Reliable grip and climbing traction on a rope demands a wheel profile and clamping approach that standard ground-robot geometry doesn't provide, alongside a power system sized correctly for an A2212 2200KV BLDC motor.",
      system:
        "A BLDC-driven traction assembly with wheel geometry shaped specifically for rope contact, paired with an ESC and LiPo power system sized to the motor's current draw.",
      implementation:
        "Mechanical iteration on wheel profile and clamping force, paired with electronic integration of the A2212 2200KV motor, ESC, and LiPo supply.",
      result: "[INSERT MEASURED RESULT]",
      next: "[INSERT FINAL HARDWARE PHOTO] — closed-loop speed control for consistent climb rate.",
    },
  },
];

export const systems = [
  {
    index: "01",
    title: "Electronics",
    items: ["Digital Electronics", "Analog Electronics", "Signals & Systems", "RC Filters"],
  },
  {
    index: "02",
    title: "Embedded",
    items: ["Embedded C", "GPIO / Interrupts", "Serial Communication", "Microcontrollers (TM4C123)"],
  },
  {
    index: "03",
    title: "Hardware",
    items: ["Raspberry Pi", "OLED / I²C Displays", "BLDC Motors", "Instrumentation (ADALM1000)"],
  },
  {
    index: "04",
    title: "Software & Tooling",
    items: ["Linux", "Git", "PlatformIO", "Python"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Systems", href: "#systems" },
  { label: "Work", href: "#work" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];
