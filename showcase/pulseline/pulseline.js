const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const routeData = {
  5: {
    title: '5K 城市闪跑',
    summary: '节奏平缓，两个转弯密集区，适合首次夜跑。',
    distance: '5.0',
    elevation: '28',
    stops: '2',
    time: '35–55',
    lit: '94%',
    start: { A: '19:30', B: '19:38', C: '19:46' },
    finish: { time: '00:24:18', pace: '4\'52"', rank: '128 / 2,400' }
  },
  10: {
    title: '10K 夜湾环线',
    summary: '前缓后陡，跨越三处城市界面，适合稳定完成 8K 以上训练的跑者。',
    distance: '10.0',
    elevation: '76',
    stops: '4',
    time: '55–90',
    lit: '91%',
    start: { A: '19:30', B: '19:38', C: '19:46' },
    finish: { time: '00:47:26', pace: '4\'44"', rank: '128 / 3,200' }
  }
};

const courseDetails = {
  safety: {
    icon: 'shield-check',
    title: { 5: '整体风险：低', 10: '整体风险：中低' },
    note: { 5: '3.7km 处有 120m 照明较弱路段，现场设反光导向。', 10: '7.6km 跨桥段风力较大，9.1km 有连续急转。' },
    rows: {
      5: [['1.8km 连续转弯', '减速并保持内外侧跑者间距。'], ['3.7km 暗区', '跟随反光路标，不要离开封闭赛道。']],
      10: [['4.2km 临水路段', '护栏外侧禁止停留或超越。'], ['7.6km 跨桥风口', '大风时降低配速，服从现场分流。']]
    }
  },
  hydration: {
    icon: 'droplets',
    title: { 5: '补给间隔：约 2.4km', 10: '补给间隔：约 2.5km' },
    note: { 5: '起终点和中途各一处饮水，轻装即可完成。', 10: '四处饮水，其中 7.5km 点提供电解质饮品。' },
    rows: {
      5: [['2.4km 饮水点', '小口补水，离开补给桌后再并线。'], ['终点恢复区', '饮水、拉伸与医疗观察在同一区域。']],
      10: [['2.5 / 5.0km', '两处常规饮水点，保持自己的补水节奏。'], ['7.5km 电解质', '入口分左右两侧，避免横向穿越。']]
    }
  },
  elevation: {
    icon: 'mountain',
    title: { 5: '累计爬升：28m', 10: '累计爬升：76m' },
    note: { 5: '仅 2.8km 有一段 3% 缓坡，整体平缓。', 10: '6.8–7.6km 为全程主要爬升段，平均坡度 4.2%。' },
    rows: {
      5: [['0–2.8km 平路', '先稳住呼吸，不必在起跑后立刻加速。'], ['2.8–3.4km 缓坡', '缩短步幅，坡顶后再恢复目标配速。']],
      10: [['3.4km 短坡', '第一段爬升较短，保持体感即可。'], ['6.8–7.6km 主坡', '连续爬升后接桥面，预留体力到 8km。']]
    }
  }
};

let selectedDistance = 5;
let selectedCourseTab = 'safety';
let toastTimer;
let isSubmitting = false;

function initializeIcons() {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons({ attrs: { 'stroke-width': 1.8 } });
  } else {
    document.body.classList.add('icons-unavailable');
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast-copy').textContent = message;
  $('#toast').hidden = false;
  toastTimer = window.setTimeout(() => { $('#toast').hidden = true; }, 7000);
}

function renderCourseDetail() {
  const detail = courseDetails[selectedCourseTab];
  const rows = detail.rows[selectedDistance];
  $('#course-detail').innerHTML = `
    <div class="detail-status">
      <i data-lucide="${detail.icon}" aria-hidden="true"></i>
      <span><b>${detail.title[selectedDistance]}</b><small>${detail.note[selectedDistance]}</small></span>
    </div>
    <ol>${rows.map(([title, note], index) => `<li><span>0${index + 1}</span><p><b>${title}</b><small>${note}</small></p></li>`).join('')}</ol>`;
  initializeIcons();
}

function updateRoute(distance, announce = true) {
  selectedDistance = Number(distance);
  const data = routeData[selectedDistance];

  $$('.route-option').forEach((button) => {
    const active = Number(button.dataset.distance) === selectedDistance;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $$('.route-path').forEach((path) => path.classList.toggle('is-active', path.classList.contains(`route-path-${selectedDistance}`)));
  $('#inspector-title').textContent = data.title;
  $('#route-summary').textContent = data.summary;
  $('#metric-distance').innerHTML = `${data.distance}<small>km</small>`;
  $('#metric-elevation').innerHTML = `${data.elevation}<small>m</small>`;
  $('#metric-stops').innerHTML = `${data.stops}<small>处</small>`;
  $('#metric-time').innerHTML = `${data.time}<small>min</small>`;
  $('#lit-percent').textContent = data.lit;
  $('.route-inspector > .button').firstChild.textContent = `选择 ${selectedDistance}K 并报名 `;
  $('#map-desc').textContent = `抽象城市街区底图，显示起终点、补给、观景台、缓坡和暗区提示。当前选择${selectedDistance}公里路线。`;
  renderCourseDetail();
  if (announce) showToast(`已选择 ${data.title}，路线信息已更新。`);
}

function updateSelectedWave() {
  $$('.wave-option').forEach((label) => label.classList.toggle('is-selected', label.querySelector('input').checked));
}

function setProgress(step) {
  $$('.registration-progress span').forEach((item) => {
    const itemStep = Number(item.dataset.step);
    item.classList.toggle('is-current', itemStep === step);
    item.classList.toggle('is-complete', itemStep < step);
  });
}

function validateForm() {
  const form = $('#registration-form');
  const requiredFields = $$('input[required]', form);
  let firstInvalid;

  requiredFields.forEach((field) => {
    const valid = field.checkValidity();
    field.setAttribute('aria-invalid', String(!valid));
    if (!valid && !firstInvalid) firstInvalid = field;
  });

  if (firstInvalid) {
    const message = firstInvalid.type === 'checkbox'
      ? '请先阅读并确认路线安全提示。'
      : firstInvalid.value.trim()
        ? '请检查标记字段的格式，手机号码需填写 8–18 位数字。'
        : '请完整填写跑者与紧急联系人信息。';
    $('#form-error').textContent = message;
    $('#form-error').hidden = false;
    firstInvalid.focus();
    return false;
  }

  $('#form-error').hidden = true;
  return true;
}

function fillReview() {
  const form = $('#registration-form');
  const wave = new FormData(form).get('wave');
  const data = routeData[selectedDistance];
  $('#review-name').textContent = $('#runner-name').value.trim();
  $('#review-distance').textContent = data.title;
  $('#review-wave').textContent = `${wave} 组 · ${data.start[wave]}`;
  $('#review-emergency').textContent = `${$('#emergency-name').value.trim()} · ${$('#emergency-phone').value.trim()}`;
  $('#submission-error').hidden = true;
}

function completeRegistration() {
  const form = $('#registration-form');
  const wave = new FormData(form).get('wave');
  const data = routeData[selectedDistance];
  const runnerName = $('#runner-name').value.trim();

  $('.registration-shell').dataset.registrationState = 'bib';
  form.hidden = true;
  $('#finish-result').hidden = true;
  $('#bib-result').hidden = false;
  setProgress(3);
  $('#result-wave-copy').textContent = `${wave} 组`;
  $('#result-route-copy').textContent = data.title;
  $('#result-start-copy').textContent = `${data.start[wave]} · ${wave} 组`;
  $('#digital-distance').innerHTML = `${String(selectedDistance).padStart(2, '0')}<small>K</small>`;
  $('#digital-number').textContent = `${wave} ${selectedDistance === 5 ? '1048' : '2048'}`;
  $('#digital-name').textContent = runnerName || 'RUNNER';
  $('.digital-bib footer b').textContent = `10.18 · ${data.start[wave]}`;
  $('#review-dialog').close();
  $('#bib-result').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  showToast('模拟报名已完成，数字号码布已生成。');
}

function submitRegistration() {
  if (isSubmitting) return;
  const button = $('#confirm-registration');
  isSubmitting = true;
  button.disabled = true;
  button.textContent = '正在生成号码布…';
  $('#submission-error').hidden = true;

  window.setTimeout(() => {
    isSubmitting = false;
    button.disabled = false;
    button.innerHTML = '确认并生成号码布 <i data-lucide="ticket-check" aria-hidden="true"></i>';
    initializeIcons();
    if (!navigator.onLine) {
      $('#submission-error').textContent = '当前处于离线状态，报名资料仍保留。恢复网络后可再次确认。';
      $('#submission-error').hidden = false;
      return;
    }
    completeRegistration();
  }, 650);
}

function showFinishResult() {
  const data = routeData[selectedDistance];
  $('#bib-result').hidden = true;
  $('#finish-result').hidden = false;
  $('.registration-shell').dataset.registrationState = 'finish';
  $('#finish-distance').textContent = `${selectedDistance}K`;
  $('#finish-time').textContent = data.finish.time;
  $('#finish-pace').textContent = data.finish.pace;
  $('#finish-rank').textContent = data.finish.rank;
  $('#finish-summary').textContent = `${selectedDistance}K 完赛结果为模拟数据，仅用于展示赛事品牌与产品闭环。`;
  $('#finish-result').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
}

function returnToForm() {
  $('#bib-result').hidden = true;
  $('#finish-result').hidden = true;
  $('#registration-form').hidden = false;
  $('.registration-shell').dataset.registrationState = 'form';
  setProgress(1);
  $('#registration-form').scrollIntoView({ behavior: 'auto', block: 'start' });
}

function resetFlow(options = {}) {
  const form = $('#registration-form');
  form.reset();
  $$('input', form).forEach((input) => input.removeAttribute('aria-invalid'));
  $('#form-error').hidden = true;
  $('#submission-error').hidden = true;
  updateSelectedWave();
  updateRoute(5, false);
  returnToForm();
  if (options.scroll) $('#route-lab').scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (options.announce !== false) showToast('演示状态与所填资料已清除。');
}

$$('.route-option').forEach((button) => button.addEventListener('click', () => updateRoute(button.dataset.distance)));

$$('.course-tabs button').forEach((button) => button.addEventListener('click', () => {
  selectedCourseTab = button.dataset.courseTab;
  $$('.course-tabs button').forEach((item) => {
    const active = item === button;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
  });
  renderCourseDetail();
}));

$$('input[name="wave"]').forEach((input) => input.addEventListener('change', updateSelectedWave));

$$('#registration-form input').forEach((input) => input.addEventListener('input', () => {
  input.removeAttribute('aria-invalid');
  $('#form-error').hidden = true;
}));

$('#registration-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateForm()) return;
  fillReview();
  setProgress(2);
  $('#review-dialog').showModal();
});

$('#review-dialog').addEventListener('close', () => {
  if ($('.registration-shell').dataset.registrationState === 'form') setProgress(1);
});

$('#confirm-registration').addEventListener('click', submitRegistration);
$('#clear-form').addEventListener('click', () => {
  $('#registration-form').reset();
  $$('#registration-form input').forEach((input) => input.removeAttribute('aria-invalid'));
  $('#form-error').hidden = true;
  updateSelectedWave();
  $('#runner-name').focus();
  showToast('报名资料已清空，路线选择仍保留。');
});
$('#edit-registration').addEventListener('click', returnToForm);
$('#simulate-finish').addEventListener('click', showFinishResult);
$('#back-to-bib').addEventListener('click', () => {
  $('#finish-result').hidden = true;
  $('#bib-result').hidden = false;
  $('.registration-shell').dataset.registrationState = 'bib';
});
$('#share-result').addEventListener('click', () => showToast('分享提示已生成：概念案例未调用系统分享或下载。'));
$('#restart-flow').addEventListener('click', () => resetFlow({ scroll: true }));
$('#reset-demo').addEventListener('click', () => resetFlow({ scroll: true }));
$('#close-toast').addEventListener('click', () => { $('#toast').hidden = true; });

window.addEventListener('offline', () => showToast('网络已断开；已填内容仍保留，可恢复后重试。'));
window.addEventListener('online', () => showToast('网络已恢复，可以继续确认报名。'));

initializeIcons();
updateSelectedWave();
updateRoute(5, false);
