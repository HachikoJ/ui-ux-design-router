const colors = {
  lichen: { label: 'Lichen', stage: '#e2c5b0', headphone: '#8ba79a', inset: '#d8e2da', caption: 'A1 / LICHEN' },
  ink: { label: 'Ink', stage: '#c3c9c9', headphone: '#252b31', inset: '#a5b0b2', caption: 'A1 / INK' },
  clay: { label: 'Clay', stage: '#d9c0a5', headphone: '#ae725a', inset: '#e6d5bf', caption: 'A1 / CLAY' }
};

const reviews = [
  ['“A1 is the first pair I\'ve used that makes a full afternoon feel like a small, private room.”', '— Mina K., product designer / Copenhagen'],
  ['“The controls disappear into the habit of using them. That is a very hard thing to design.”', '— Theo R., sound editor / London'],
  ['“It is calm without feeling precious. I put them on and the day gets a little more legible.”', '— Luca P., architect / Milan']
];

const $ = (selector, root = document) => root.querySelector(selector);
let reviewIndex = 0;
let selectedColor = 'Lichen';

document.querySelectorAll('.swatch').forEach((swatch) => {
  swatch.addEventListener('click', () => {
    const color = colors[swatch.dataset.color];
    document.querySelectorAll('.swatch').forEach((item) => {
      const active = item === swatch;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-checked', String(active));
    });
    $('#choice-stage').style.background = color.stage;
    $('.stage-headphones').style.borderColor = color.headphone;
    $('.stage-headphones').style.borderBottomColor = 'transparent';
    $('.stage-headphones').style.boxShadow = `inset 0 0 0 11px ${color.inset}`;
    $('.stage-headphones').style.setProperty('--cup-color', color.headphone);
    $('.stage-headphones').style.setProperty('color', color.headphone);
    $('.stage-headphones').style.background = 'transparent';
    $('.stage-caption').textContent = color.caption;
    $('#chosen-color').textContent = color.label;
    selectedColor = color.label;
  });
});

function updateReview(direction) {
  reviewIndex = (reviewIndex + direction + reviews.length) % reviews.length;
  $('#review-copy').textContent = reviews[reviewIndex][0];
  $('#review-author').textContent = reviews[reviewIndex][1];
}

$('#review-prev').addEventListener('click', () => updateReview(-1));
$('#review-next').addEventListener('click', () => updateReview(1));

$('#add-bag').addEventListener('click', () => {
  const button = $('#add-bag');
  button.disabled = true;
  button.innerHTML = 'Added to bag <span aria-hidden="true">✓</span>';
  $('#bag-count').textContent = '1';
  $('#buy-feedback').textContent = `A1 / ${selectedColor} is reserved in your bag.`;
});

$('#bag-button').addEventListener('click', () => {
  document.querySelector('.buy-section').scrollIntoView({ behavior: 'smooth' });
  $('#buy-feedback').textContent = $('#bag-count').textContent === '1' ? 'Your A1 is waiting below.' : 'Your bag is ready when you are.';
});
