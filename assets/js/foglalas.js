
(() => {
  const form = document.querySelector('#bookingForm');
  if (!form) return;
  const dateInput = form.querySelector('[name="date"]');
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth()+1).padStart(2,'0');
  const dd = String(today.getDate()).padStart(2,'0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  const storageKey = 'menta_kavezo_foglalasok_v1';
  const success = document.querySelector('#bookingSuccess');
  const error = document.querySelector('#bookingError');
  const summary = document.querySelector('#reservationSummary');
  const list = document.querySelector('#savedBookings');
  const downloadBtn = document.querySelector('#downloadConfirmation');
  let latestBooking = null;

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const read = () => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); }
    catch { return []; }
  };
  const write = data => localStorage.setItem(storageKey, JSON.stringify(data));
  const fmtDate = date => new Intl.DateTimeFormat('hu-HU',{year:'numeric',month:'long',day:'numeric'}).format(new Date(date+'T12:00:00'));

  function renderList(){
    const data = read();
    if (!data.length) {
      list.innerHTML = '<p class="booking-empty">Még nincs ezen a böngészőn elmentett foglalás.</p>';
      return;
    }
    list.innerHTML = data.map(item => `
      <div class="booking-item">
        <div>
          <h3>${esc(item.name)} – ${esc(fmtDate(item.date))}, ${esc(item.time)}</h3>
          <p>${esc(item.guests)} fő • ${esc(item.phone)}${item.email ? ' • '+esc(item.email) : ''}</p>
          ${item.note ? `<p>Megjegyzés: ${esc(item.note)}</p>` : ''}
        </div>
        <button class="icon-btn" type="button" data-delete="${esc(item.id)}">Törlés</button>
      </div>`).join('');
    list.querySelectorAll('[data-delete]').forEach(btn => btn.addEventListener('click', () => {
      write(read().filter(item => item.id !== btn.dataset.delete));
      renderList();
    }));
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    success.classList.remove('show');
    error.classList.remove('show');
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      error.textContent = 'Kérlek, töltsd ki a kötelező mezőket.';
      error.classList.add('show');
      return;
    }
    if (new Date(data.date+'T23:59:59') < new Date()) {
      error.textContent = 'A foglalás dátuma nem lehet korábbi a mai napnál.';
      error.classList.add('show');
      return;
    }
    const booking = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      createdAt: new Date().toISOString(),
      name: data.name.trim(), phone: data.phone.trim(), email: data.email.trim(),
      date: data.date, time: data.time, guests: data.guests,
      seating: data.seating, note: data.note.trim()
    };
    const all = read(); all.unshift(booking); write(all);
    latestBooking = booking;
    summary.innerHTML = `<strong>${esc(booking.name)}</strong>, a foglalási kérésedet rögzítettük:<br>
      ${esc(fmtDate(booking.date))}, ${esc(booking.time)} • ${esc(booking.guests)} fő.<br>
      <small>Ez a bemutató weboldal a foglalást ezen a böngészőn, helyben menti el.</small>`;
    success.classList.add('show');
    form.reset();
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    renderList();
    success.scrollIntoView({behavior:'smooth', block:'center'});
  });

  downloadBtn?.addEventListener('click', () => {
    if (!latestBooking) return;
    const b = latestBooking;
    const text = [
      'MENTA KÁVÉZÓ – FOGLALÁSI VISSZAIGAZOLÁS',
      '',
      `Név: ${b.name}`,
      `Telefon: ${b.phone}`,
      `E-mail: ${b.email || '-'}`,
      `Dátum: ${fmtDate(b.date)}`,
      `Időpont: ${b.time}`,
      `Létszám: ${b.guests} fő`,
      `Elhelyezés: ${b.seating || 'nincs megadva'}`,
      `Megjegyzés: ${b.note || '-'}`,
      '',
      'Menta Kávézó – Egy csésze öröm, minden nap.'
    ].join('\r\n');
    const blob = new Blob([text],{type:'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'Menta-Kavezo-foglalas.txt'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 500);
  });

  renderList();
})();
