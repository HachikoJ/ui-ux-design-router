const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const scenarios = {
  solo: {
    label: '独居',
    summary: '一个人住，也为偶尔到访的朋友留位置。',
    priorities: ['一张可展开的工作桌', '4.8m 连续收纳墙', '保留四人聚餐位置'],
    budget: 0,
    duration: '10–12 周',
    storage: 38
  },
  couple: {
    label: '二人',
    summary: '两个人共享日常，也保留各自专注的角落。',
    priorities: ['双人工作与阅读位置', '家务动线互不打断', '六人可扩展餐桌'],
    budget: 12000,
    duration: '11–13 周',
    storage: 44
  },
  family: {
    label: '三口之家',
    summary: '让孩子能玩、物品能收，也让大人看得见彼此。',
    priorities: ['可观察的儿童活动区', '低位开放与封闭收纳', '客餐厅弹性分区'],
    budget: 26000,
    duration: '12–14 周',
    storage: 52
  }
};

const materials = {
  oak: { label: '隐雾橡木', cost: 0 },
  mineral: { label: '矿物灰', cost: 3800 },
  vermilion: { label: '朱砂点景', cost: 6200 }
};

const initialState = { scenario: 'solo', material: 'oak', storage: 4.5 };
let state = { ...initialState };
const history = [];
let toastTimer;

function createIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  else $$('.icon-fallback').forEach((item) => { item.style.display = 'inline'; });
}

function snapshot() {
  history.push({ ...state });
  if (history.length > 20) history.shift();
  $('#undo-change').disabled = false;
}

function formatMoney(value) {
  return new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY', maximumFractionDigits: 0 }).format(value);
}

function render() {
  const scenario = scenarios[state.scenario];
  const material = materials[state.material];
  const storageCost = Math.round((state.storage - 3) * 7200);
  const budget = 157200 + scenario.budget + material.cost + storageCost;
  const storageGain = scenario.storage + Math.round((state.storage - 4.5) * 8);

  document.body.dataset.material = state.material;
  $('#scenario-summary').textContent = scenario.summary;
  $('#priority-list').innerHTML = scenario.priorities.map((item) => `<li><i data-lucide="check" aria-hidden="true"></i>${item}</li>`).join('');
  $('#storage-range').value = String(state.storage);
  $('#storage-output').textContent = `${state.storage.toFixed(1)} m`;
  $('#storage-note').textContent = state.storage < 4 ? '覆盖玄关与餐边，清洁用品需要另设高柜。' : state.storage < 6 ? '覆盖玄关、餐边与清洁用品，保留一组开放展示格。' : '覆盖整面公共区墙体，并增加换季物品高位收纳。';
  $('#budget-value').textContent = formatMoney(budget);
  $('#duration-value').textContent = scenario.duration;
  $('#storage-value').textContent = `+${storageGain}%`;

  $$('[data-scenario]').forEach((button) => {
    const active = button.dataset.scenario === state.scenario;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $$('[data-material]').forEach((button) => {
    const active = button.dataset.material === state.material;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  createIcons();
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast-copy').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 7000);
}

$$('[data-scenario]').forEach((button) => button.addEventListener('click', () => {
  if (button.dataset.scenario === state.scenario) return;
  snapshot();
  state.scenario = button.dataset.scenario;
  render();
  showToast(`已切换为“${scenarios[state.scenario].label}”居住场景。`);
}));

$$('[data-material]').forEach((button) => button.addEventListener('click', () => {
  if (button.dataset.material === state.material) return;
  snapshot();
  state.material = button.dataset.material;
  render();
  showToast(`已应用“${materials[state.material].label}”材料方案。`);
}));

const storageRange = $('#storage-range');
let storageStart = state.storage;
storageRange.addEventListener('focus', () => { storageStart = state.storage; });
storageRange.addEventListener('pointerdown', () => { storageStart = state.storage; });
storageRange.addEventListener('change', () => {
  history.push({ ...state, storage: storageStart });
  if (history.length > 20) history.shift();
  $('#undo-change').disabled = false;
  state.storage = Number(storageRange.value);
  storageStart = state.storage;
  render();
  showToast(`连续收纳墙已调整为 ${state.storage.toFixed(1)} 米。`);
});
storageRange.addEventListener('input', () => {
  state.storage = Number(storageRange.value);
  render();
});

const compareRange = $('#compare-range');
compareRange.addEventListener('input', () => {
  const value = Number(compareRange.value);
  $('.visual-stage').style.setProperty('--after-clip', `${100 - value}%`);
  $('#compare-output').textContent = `方案 ${value}%`;
});

$('#undo-change').addEventListener('click', () => {
  if (!history.length) return;
  state = history.pop();
  $('#undo-change').disabled = history.length === 0;
  render();
  showToast('已撤销上一步配置。');
});

$('#reset-project').addEventListener('click', () => {
  history.length = 0;
  state = { ...initialState };
  $('#undo-change').disabled = true;
  compareRange.value = '66';
  compareRange.dispatchEvent(new Event('input'));
  render();
  showToast('已恢复初始概念方案。');
});

$('#generate-plan').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = '正在整理方案…';
  await new Promise((resolve) => setTimeout(resolve, 650));
  const scenario = scenarios[state.scenario];
  const content = [
    'ROOMSHIFT 格间 / CONCEPT PLAN',
    '项目：城南公寓 CN-048',
    `居住场景：${scenario.label}`,
    `主材：${materials[state.material].label}`,
    `连续收纳：${state.storage.toFixed(1)} m`,
    `概念预算：${$('#budget-value').textContent}`,
    `预计工期：${scenario.duration}`,
    '',
    '演示说明：本文件由概念界面生成，不构成真实报价、设计图纸或施工承诺。'
  ].join('\n');
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
  link.download = 'roomshift-concept-plan.txt';
  link.click();
  URL.revokeObjectURL(link.href);
  button.disabled = false;
  button.innerHTML = original;
  createIcons();
  showToast('双语概念摘要已生成并下载。');
});

const bookingDialog = $('#booking-dialog');
$('#book-review').addEventListener('click', () => bookingDialog.showModal());
$('#confirm-booking').addEventListener('click', () => {
  const name = $('#booking-name');
  const phone = $('#booking-phone');
  const error = $('#booking-error');
  if (!name.value.trim()) {
    error.textContent = '请填写姓名，已保留其他输入。';
    error.hidden = false;
    name.focus();
    return;
  }
  if (!phone.validity.valid || !phone.value.trim()) {
    error.textContent = '请填写 8–18 位有效联系电话，已保留其他输入。';
    error.hidden = false;
    phone.focus();
    return;
  }
  error.hidden = true;
  bookingDialog.close();
  showToast(`概念预约已记录：${$('#booking-time').value}。不会上传任何信息。`);
});

$('#close-toast').addEventListener('click', () => { $('#toast').hidden = true; });
createIcons();
render();
