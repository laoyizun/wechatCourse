const PARTS = {
  motherboard: {
    code: "SYSTEM BOARD",
    zh: "主板",
    en: "Motherboard",
    image: "motherboard-overview.jpg",
    job: "把 CPU、内存、存储设备、显卡、电源和外部设备连接成一个完整系统。",
    location: "固定在机箱内部，是大多数配件的安装基础。",
    connection: "CPU 插槽、DIMM 内存槽、SATA、PCIe、供电与外部 I/O。",
    impact: "决定可以使用哪一代 CPU、哪种内存以及能够连接多少设备。",
    parameter: "关注 CPU 插槽、芯片组、内存类型、SATA/PCIe 数量和板型。本机很可能是 LGA1155、DDR3 平台，仍需以主板型号为准。",
    analogy: "像一座城市的道路与地基：配件是建筑，主板负责规定它们可以建在哪里、用什么道路互相联系。",
    note: "安装前确认机箱铜柱位置，避免主板背面与机箱短路。"
  },
  cpu: {
    code: "PROCESSING",
    zh: "中央处理器",
    en: "Central Processing Unit · CPU",
    image: "cpu-top.jpg",
    job: "执行程序指令，完成运算、比较和控制，是计算机处理任务的核心。",
    location: "安装在主板 CPU 插槽中，本机很可能使用 Intel LGA1155 插槽。",
    connection: "通过主板与 RAM、存储设备和其他控制器交换数据。",
    impact: "核心数量、时钟频率和架构会影响处理速度，但不能只看 GHz。",
    parameter: "第三代 Core i3 通常为 2 核 4 线程，基础时钟大约 2.8–3.4 GHz，具体以 CPU 型号为准。3 GHz 表示每秒约 30 亿个时钟周期，不等于每秒只执行 30 亿条指令。",
    analogy: "像负责解题的学生：核心数像同时工作的学生人数，时钟频率像每个人工作的节奏，但解题方法和任务难度同样影响速度。",
    note: "只拿边缘，对准三角标记轻放；不要触摸 CPU 底部或插槽针脚。"
  },
  cooler: {
    code: "THERMAL",
    zh: "CPU 散热器",
    en: "CPU Cooler",
    image: "cpu-cooler.jpg",
    job: "把 CPU 工作时产生的热量传到散热片，再由风扇带走。",
    location: "覆盖在 CPU 上方，与 CPU 表面之间使用导热硅脂。",
    connection: "风扇电缆连接主板 CPU_FAN 接口。",
    impact: "散热不足会让 CPU 降低速度，严重时会自动关机保护。",
    parameter: "常见 CPU 风扇大约 800–2500 RPM，转速会随温度变化。散热能力还与散热片大小、风量、硅脂和环境温度有关。",
    analogy: "像给跑步者降温的风扇和汗液：转得快不一定代表散热一定更好，散热片、接触和空气流动要一起工作。",
    note: "固定脚要均匀锁紧，风扇必须接入 CPU_FAN。"
  },
  ram: {
    code: "WORKING MEMORY",
    zh: "内存",
    en: "Random Access Memory · RAM",
    image: "ram-module.jpg",
    job: "临时保存正在运行的程序和 CPU 当前需要的数据；断电后内容消失。",
    location: "安装在主板 DIMM 插槽中，本机使用 DDR3 内存。",
    connection: "通过主板内存通道与 CPU 高速交换数据。",
    impact: "容量影响可以同时处理多少任务，频率和延迟也会影响性能。",
    parameter: "本机 DDR3 常见容量为每条 2–8 GB，常见传输率为 DDR3-1333 或 DDR3-1600（约 1333/1600 MT/s）。内存使用“频率或传输率”，不是画面“帧率”。",
    analogy: "像书桌：容量是桌面大小，传输率是取放资料的速度。桌面越大，可以同时摊开的课本和作业越多。",
    note: "对齐缺口，垂直用力压下，确认两端卡扣锁定。"
  },
  sata: {
    code: "STORAGE",
    zh: "SATA 存储设备",
    en: "SATA HDD / SATA SSD",
    image: "sata-drive.jpg",
    job: "长期保存操作系统、程序和个人文件，断电后数据仍然存在。",
    location: "固定在机箱硬盘位，通过线缆连接主板和电源。",
    connection: "SATA 数据线接主板；SATA 电源线接电源。两条都要连接。",
    impact: "SATA SSD 通常比机械硬盘启动和载入更快。",
    parameter: "SATA II 接口理论速率 3 Gb/s，SATA III 为 6 Gb/s。SATA SSD 实际连续读取常见约 400–550 MB/s；机械硬盘常见约 100–200 MB/s，实际会因设备和文件类型变化。",
    analogy: "像仓库和送货道路：硬盘容量是仓库大小，SATA 版本是道路上限，设备实际速度则是送货车真正能跑多快。",
    note: "接口为 L 形防呆结构，不要反向硬插。"
  },
  m2: {
    code: "MODERN STORAGE",
    zh: "M.2 固态硬盘",
    en: "M.2 SSD",
    image: "m2-nvme-ssd.jpg",
    job: "使用小型板卡形态保存数据。常见 M.2 NVMe SSD 通过 PCIe 传输。",
    location: "现代主板的 M.2 插槽；课堂旧主板可能没有此插槽。",
    connection: "直接插入主板并用螺丝固定，通常不需要独立数据线和电源线。",
    impact: "NVMe SSD 通常比 SATA SSD 有更高的顺序传输速度。",
    parameter: "常见 PCIe 3.0 x4 NVMe SSD 连续读取可达约 3000–3500 MB/s，PCIe 4.0 x4 常见可达约 5000–7000 MB/s。具体速度取决于 SSD、主板和任务。",
    analogy: "SATA 像普通公路，NVMe/PCIe 像多车道高速公路；但小文件很多时，收费站和车辆调度也会影响实际时间。",
    note: "M.2 是外形规格，不等于 NVMe；购买前要核对主板支持的协议和尺寸。"
  },
  gpu: {
    code: "GRAPHICS",
    zh: "图形处理器",
    en: "Graphics Processing Unit · GPU",
    image: "graphics-card.jpg",
    job: "处理图形和并行计算，把画面输出到显示器。",
    location: "独立显卡安装在 PCIe x16 插槽；部分 CPU 也内置核芯显卡。",
    connection: "通过 PCIe 与系统连接；高功耗显卡还需要电源直接供电。",
    impact: "影响 3D 图形、游戏、视频处理等任务；日常办公不一定需要独立显卡。",
    parameter: "独立显卡常见显存容量有 2、4、8 GB 或更多；显存类型、带宽、GPU 核心和功耗也会影响性能。第三代 Core i3 的核芯显卡通常共享系统内存，没有独立显存条。",
    analogy: "像专门负责绘图的小组：GPU 有许多成员同时处理像素，显存则是他们放纹理、模型和画面资料的专用工作台。",
    note: "使用独立显卡时，显示器通常应连接显卡的视频输出接口。"
  },
  psu: {
    code: "POWER",
    zh: "电源",
    en: "Power Supply Unit · PSU",
    image: "power-supply.jpg",
    job: "把墙上交流电转换成电脑配件需要的稳定直流电。",
    location: "固定在机箱电源仓，通过多组线缆向不同部件供电。",
    connection: "24-pin 主板供电、4/8-pin CPU 供电、SATA 供电及显卡供电。",
    impact: "功率和质量必须满足整机需要；电源不是数据存储设备。",
    parameter: "老办公台式机常见额定功率约 250–400 W，带独立显卡的电脑可能需要 450 W 或更高。必须查看电源铭牌的“额定功率”，不能只看型号中的数字。",
    analogy: "像整栋房子的供电系统：瓦数表示最多能稳定提供多少电力，各种插头则像送往不同房间的电路。",
    note: "电源内部有危险高压，不得拆开电源外壳。"
  },
  io: {
    code: "INPUT & OUTPUT",
    zh: "输入输出接口",
    en: "Input / Output Ports",
    image: "rear-io-ports.jpg",
    job: "让计算机接收键盘、鼠标、网络等输入，并输出画面、声音和数据。",
    location: "主要位于主板后部 I/O 区域和机箱前面板。",
    connection: "USB、网络、音频、视频等接口使用不同协议传输数据。",
    impact: "接口类型和版本会影响兼容性、速度与可连接设备。",
    parameter: "USB 2.0 理论速率 480 Mb/s，USB 3.x 常见从 5 Gb/s 起；千兆网口理论速率为 1 Gb/s。接口实际速度还受设备、线材和协议影响。",
    analogy: "像学校的门和通道：键盘、网络、声音和画面走不同入口，门的形状和通行规则必须与设备匹配。",
    note: "外形相似不代表功能相同，连接前先识别接口标志。"
  }
};

const CONNECTIONS = [
  { from: "motherboard", to: "cpu", kind: "data" },
  { from: "motherboard", to: "ram", kind: "data" },
  { from: "motherboard", to: "sata", kind: "data" },
  { from: "motherboard", to: "gpu", kind: "data" },
  { from: "motherboard", to: "m2", kind: "data" },
  { from: "motherboard", to: "io", kind: "external" },
  { from: "psu", to: "motherboard", kind: "power" },
  { from: "psu", to: "cpu", kind: "power" },
  { from: "psu", to: "sata", kind: "power" },
  { from: "psu", to: "gpu", kind: "power" },
  { from: "motherboard", to: "cooler", kind: "power" }
];

let currentMode = "all";
let currentPart = "motherboard";

function drawConnections() {
  const map = document.querySelector(".hardware-map");
  const canvas = document.querySelector(".connection-canvas");
  if (!map || !canvas) return;

  const mapRect = map.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.round(mapRect.width * ratio);
  canvas.height = Math.round(mapRect.height * ratio);
  canvas.style.width = `${mapRect.width}px`;
  canvas.style.height = `${mapRect.height}px`;

  const context = canvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, mapRect.width, mapRect.height);
  context.lineCap = "round";

  const colors = {
    data: "#176b87",
    power: "#a76313",
    external: "#6650a4"
  };

  CONNECTIONS.forEach((connection) => {
    const from = document.querySelector(`[data-part="${connection.from}"]`);
    const to = document.querySelector(`[data-part="${connection.to}"]`);
    if (!from || !to) return;

    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const start = {
      x: fromRect.left - mapRect.left + fromRect.width / 2,
      y: fromRect.top - mapRect.top + fromRect.height / 2
    };
    const end = {
      x: toRect.left - mapRect.left + toRect.width / 2,
      y: toRect.top - mapRect.top + toRect.height / 2
    };

    const matchesMode = currentMode === "all" || connection.kind === currentMode;
    const touchesSelected = connection.from === currentPart || connection.to === currentPart;

    context.globalAlpha = matchesMode ? 1 : 0.05;
    context.strokeStyle = colors[connection.kind];
    context.lineWidth = matchesMode && touchesSelected ? 5 : 3;

    const bend = Math.min(54, Math.abs(end.x - start.x) * 0.22);
    const direction = end.x >= start.x ? 1 : -1;
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.bezierCurveTo(
      start.x + bend * direction,
      start.y,
      end.x - bend * direction,
      end.y,
      end.x,
      end.y
    );
    context.stroke();
  });

  context.globalAlpha = 1;
}

function imageFallback(image) {
  image.classList.add("missing");
  const placeholder = image.nextElementSibling;
  if (placeholder) placeholder.hidden = false;
}

function setupImageFallbacks() {
  document.querySelectorAll(".photo-frame img").forEach((image) => {
    image.addEventListener("error", () => imageFallback(image));
    if (image.src && image.complete && image.naturalWidth === 0) {
      imageFallback(image);
    }
  });
}

function selectPart(partKey) {
  const part = PARTS[partKey];
  if (!part) return;
  currentPart = partKey;

  document.querySelectorAll(".component, .board").forEach((button) => {
    button.classList.toggle("active", button.dataset.part === partKey);
  });

  const fields = ["code", "zh", "en", "job", "location", "connection", "impact", "parameter", "analogy", "note"];
  fields.forEach((field) => {
    const target = document.querySelector(`[data-detail="${field}"]`);
    if (target) target.textContent = part[field];
  });

  const image = document.querySelector("[data-detail-image]");
  if (image) {
    image.classList.remove("missing");
    image.src = `images/${part.image}`;
    image.alt = `${part.zh} ${part.en}`;
  }
  drawConnections();
}

function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.mode === mode));
  });

  document.querySelectorAll(".component, .board").forEach((part) => {
    const kinds = (part.dataset.connections || "").split(" ");
    part.classList.toggle("dimmed", mode !== "all" && !kinds.includes(mode));
  });
  drawConnections();
}

function updateSafetyStatus() {
  const checks = [...document.querySelectorAll("[data-safety-check]")];
  const status = document.querySelector("[data-safety-status]");
  if (!checks.length || !status) return;
  const complete = checks.every((check) => check.checked);
  status.classList.toggle("ready", complete);
  status.textContent = complete
    ? "安全确认完成，可以在教师指导下开始拆装。"
    : "完成全部安全确认后，再开始拆装。";
}

document.addEventListener("DOMContentLoaded", () => {
  setupImageFallbacks();

  document.querySelectorAll(".component, .board").forEach((button) => {
    button.addEventListener("click", () => selectPart(button.dataset.part));
  });

  document.querySelectorAll(".mode-tab").forEach((tab) => {
    tab.addEventListener("click", () => setMode(tab.dataset.mode));
  });

  document.querySelectorAll("[data-safety-check]").forEach((check) => {
    check.addEventListener("change", updateSafetyStatus);
  });

  if (document.querySelector(".hardware-map")) {
    selectPart("motherboard");
    setMode("all");
    window.addEventListener("resize", drawConnections);
  }
  updateSafetyStatus();
});
