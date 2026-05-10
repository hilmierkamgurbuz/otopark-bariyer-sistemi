// ===== PRESENTATION ENGINE =====
let currentSlide = 0, totalSlides = 0, notesVisible = false;
let animSteps = {}, currentAnimStep = {};

function initPresentation() {
  totalSlides = document.querySelectorAll('.slide').length;
  buildNavDots();
  goToSlide(0);
  document.addEventListener('keydown', handleKeys);
  document.getElementById('prevBtn').onclick = prevSlide;
  document.getElementById('nextBtn').onclick = nextSlide;
  document.getElementById('notesBtn').onclick = toggleNotes;
}

function handleKeys(e) {
  if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextSlide(); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
  else if (e.key === 'n') toggleNotes();
  else if (e.key === 'ArrowDown') { e.preventDefault(); advanceAnimStep(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); rewindAnimStep(); }
}

function goToSlide(n) {
  if (n < 0 || n >= totalSlides) return;
  const slides = document.querySelectorAll('.slide');
  slides.forEach(s => s.classList.remove('active'));
  slides[n].classList.add('active');
  currentSlide = n;
  updateNav(); updateNotes(); initSlideAnim(n);
}

function nextSlide() {
  const s = document.querySelectorAll('.slide')[currentSlide];
  const a = s.getAttribute('data-anim');
  if (a && currentAnimStep[a] < (animSteps[a]||0) - 1) { advanceAnimStep(); return; }
  goToSlide(currentSlide + 1);
}
function prevSlide() { goToSlide(currentSlide - 1); }

function buildNavDots() {
  const c = document.getElementById('navDots');
  for (let i = 0; i < totalSlides; i++) {
    const d = document.createElement('div');
    d.className = 'nav-dot';
    d.onclick = () => goToSlide(i);
    c.appendChild(d);
  }
}
function updateNav() {
  document.querySelectorAll('.nav-dot').forEach((d,i) => d.classList.toggle('active', i===currentSlide));
  document.getElementById('slideCounter').textContent = `${currentSlide+1} / ${totalSlides}`;
}
function updateNotes() {
  const n = document.querySelectorAll('.slide')[currentSlide].getAttribute('data-notes')||'';
  document.getElementById('notesContent').textContent = n;
}
function toggleNotes() {
  notesVisible = !notesVisible;
  document.getElementById('speakerNotes').classList.toggle('visible', notesVisible);
}

function initSlideAnim(n) {
  const a = document.querySelectorAll('.slide')[n].getAttribute('data-anim');
  if (!a) return;
  currentAnimStep[a] = 0;
  runAnimStep(a, 0);
}
function advanceAnimStep() {
  const a = document.querySelectorAll('.slide')[currentSlide].getAttribute('data-anim');
  if (!a) return;
  if (currentAnimStep[a] < (animSteps[a]||0) - 1) { currentAnimStep[a]++; runAnimStep(a, currentAnimStep[a]); }
}
function rewindAnimStep() {
  const a = document.querySelectorAll('.slide')[currentSlide].getAttribute('data-anim');
  if (!a) return;
  if (currentAnimStep[a] > 0) { currentAnimStep[a]--; runAnimStep(a, currentAnimStep[a]); }
}

function runAnimStep(id, step) {
  if (id==='entry') runEntryAnim(step);
  else if (id==='full') runFullAnim(step);
  else if (id==='exit') runExitAnim(step);
  else if (id==='flowcode') runFlowCodeAnim(step);
}

// Helper functions
function $(id) { return document.getElementById(id); }
function setWire(id, cls) { const e=$(id); if(e) e.setAttribute('class', cls); }
function setLed(id, cls) { const e=$(id); if(e) e.setAttribute('class', cls); }
function setSensor(id, cls, blink) { const e=$(id); if(e) { e.setAttribute('class', cls); if(blink) e.classList.add('sensor-blinking'); } }
function setText(id, txt) { const e=$(id); if(e) e.textContent=txt; }
function setOpacity(id, v) { const e=$(id); if(e) e.setAttribute('opacity', v); }
function setCarVis(prefix, show) {
  const g = $(prefix);
  if (!g) return;
  g.querySelectorAll('rect,circle').forEach(el => el.setAttribute('opacity', show?'1':'0'));
}
function setPinVal(id, val, high) {
  const e=$(id);
  if(e) { e.textContent=val; e.setAttribute('fill', high?'#2ecc71':'#556'); }
}

// ===== ENTRY ANIMATION =====
function runEntryAnim(step) {
  animSteps['entry'] = 8;
  // Reset everything
  setWire('ec_w_ra0','wire-idle'); setWire('ec_w_ra1','wire-idle');
  setWire('ec_w_ra2','wire-idle'); setWire('ec_w_ra3','wire-idle');
  setWire('ec_w_rb0','wire-idle'); setWire('ec_w_rb1','wire-idle');
  setWire('ec_w_rb2','wire-idle'); setWire('ec_w_rb3','wire-idle');
  setWire('ec_w_motor','wire-idle');
  setLed('ec_greenLed','led-off'); setLed('ec_redLed','led-off');
  setLed('es_greenLed','led-off'); setLed('es_redLed','led-off');
  setSensor('es_sensorDot','sensor-inactive');
  const pic=$('ec_pic'); if(pic) pic.setAttribute('class','chip-idle');
  const sIn=$('ec_sensorIn'); if(sIn) sIn.setAttribute('stroke','#253545');
  setOpacity('ec_decision','0'); setOpacity('ec_motorSpin','0');
  setCarVis('es_car', false);
  const bar=$('es_barrier'); if(bar) bar.style.transform='rotate(0deg)';
  const car=$('es_car'); if(car) car.style.transform='translateX(0)';
  setText('ec_counter','Sayaç: 2/5'); setText('es_counter','Doluluk: 2/5');
  setText('ec_status','Bekleme Modu');
  setPinVal('ec_v_ra0','0',false); setPinVal('ec_v_rb0','0',false);
  setPinVal('ec_v_rb1','0',false); setPinVal('ec_v_rb2','0',false); setPinVal('ec_v_rb3','0',false);

  // Step 0: Bekleme
  if (step>=0) {
    setText('e_stepBadge','ADIM 1 / 8');
    setText('e_stepDesc','Sistem bekleme modunda. Bariyer kapalı, sensörler pasif.');
  }
  // Step 1: Araç geldi, sensör aktif
  if (step>=1) {
    setCarVis('es_car', true);
    setSensor('es_sensorDot','sensor-active', true);
    sIn.setAttribute('stroke','#f39c12');
    setWire('ec_w_ra0','wire-active');
    setPinVal('ec_v_ra0','1',true);
    setText('e_stepBadge','ADIM 2 / 8');
    setText('e_stepDesc','Araç giriş sensörüne geldi. RA0=1, sinyal PIC\'e iletiliyor.');
    setText('ec_status','Sensör Algılandı');
  }
  // Step 2: PIC kontrol — karar
  if (step>=2) {
    pic.setAttribute('class','chip-active');
    setOpacity('ec_decision','1');
    setText('ec_decisionText','Sayaç(2) < MAX(5) → EVET ✓');
    setText('e_stepBadge','ADIM 3 / 8');
    setText('e_stepDesc','PIC doluluk kontrolü yapıyor: Araç sayısı < MAX? → Evet, boş yer var!');
    setText('ec_status','Doluluk Kontrolü');
  }
  // Step 3: Yeşil LED + motor sinyali
  if (step>=3) {
    setLed('ec_greenLed','led-green-on'); setLed('es_greenLed','led-green-on');
    setWire('ec_w_rb0','wire-active-yellow'); setWire('ec_w_rb2','wire-active');
    setWire('ec_w_motor','wire-active-yellow');
    setPinVal('ec_v_rb0','1',true); setPinVal('ec_v_rb2','1',true);
    setOpacity('ec_motorSpin','1');
    setText('e_stepBadge','ADIM 4 / 8');
    setText('e_stepDesc','Yeşil LED yandı (RB2=1). Motor açma sinyali gönderiliyor (RB0=1, RB1=0).');
    setText('ec_status','Motor Açılıyor');
  }
  // Step 4: Bariyer açılıyor
  if (step>=4) {
    bar.style.transform='rotate(-90deg)';
    setWire('ec_w_ra2','wire-active');
    setPinVal('ec_v_ra2','1',true);
    const lo=$('ec_limOpen'); if(lo) lo.setAttribute('stroke','#27ae60');
    const elo=$('es_limOpen'); if(elo) elo.setAttribute('stroke','#27ae60');
    setText('e_stepBadge','ADIM 5 / 8');
    setText('e_stepDesc','Bariyer açıldı. Açık limit switch tetiklendi (RA2=1). Motor duracak.');
    setText('ec_status','Bariyer Açık');
  }
  // Step 5: Motor durdu, araç geçiyor
  if (step>=5) {
    setWire('ec_w_rb0','wire-idle'); setWire('ec_w_motor','wire-idle');
    setPinVal('ec_v_rb0','0',false);
    setOpacity('ec_motorSpin','0');
    car.style.transform='translateX(200px)';
    setText('e_stepBadge','ADIM 6 / 8');
    setText('e_stepDesc','Motor durdu (RB0=0, RB1=0). Araç bariyerin altından geçiyor...');
    setText('ec_status','Araç Geçiyor');
  }
  // Step 6: Bariyer kapanıyor
  if (step>=6) {
    bar.style.transform='rotate(0deg)';
    setCarVis('es_car', false);
    setLed('ec_greenLed','led-off'); setLed('es_greenLed','led-off');
    setSensor('es_sensorDot','sensor-inactive');
    sIn.setAttribute('stroke','#253545');
    setWire('ec_w_ra0','wire-idle'); setWire('ec_w_ra2','wire-idle');
    setWire('ec_w_rb1','wire-active-yellow'); setWire('ec_w_rb2','wire-idle');
    setWire('ec_w_motor','wire-active-yellow');
    setPinVal('ec_v_ra0','0',false); setPinVal('ec_v_ra2','0',false);
    setPinVal('ec_v_rb1','1',true); setPinVal('ec_v_rb2','0',false);
    setWire('ec_w_ra3','wire-active');
    setPinVal('ec_v_ra3','1',true);
    setOpacity('ec_motorSpin','1');
    setText('e_stepBadge','ADIM 7 / 8');
    setText('e_stepDesc','Bariyer kapanıyor (RB0=0, RB1=1). Kapalı limit switch tetiklendi (RA3=1).');
    setText('ec_status','Bariyer Kapanıyor');
  }
  // Step 7: Tamamlandı
  if (step>=7) {
    setWire('ec_w_rb1','wire-idle'); setWire('ec_w_motor','wire-idle');
    setWire('ec_w_ra3','wire-idle');
    setPinVal('ec_v_rb1','0',false); setPinVal('ec_v_ra3','0',false);
    setOpacity('ec_motorSpin','0'); setOpacity('ec_decision','0');
    pic.setAttribute('class','chip-idle');
    setText('ec_counter','Sayaç: 3/5'); setText('es_counter','Doluluk: 3/5');
    setText('e_stepBadge','ADIM 8 / 8');
    setText('e_stepDesc','Giriş tamamlandı! Sayaç 2→3 oldu (INCF). Sistem beklemeye döndü.');
    setText('ec_status','✓ Giriş Tamamlandı');
  }
}

// ===== FULL (DOLU) ANIMATION =====
function runFullAnim(step) {
  animSteps['full'] = 5;
  // Reset
  setWire('fc_w_ra0','wire-idle'); setWire('fc_w_rb0','wire-idle');
  setWire('fc_w_rb1','wire-idle'); setWire('fc_w_rb3','wire-idle');
  setLed('fc_greenLed','led-off'); setLed('fc_redLed','led-off');
  setLed('fs_greenLed','led-off'); setLed('fs_redLed','led-off');
  setSensor('fs_sensorDot','sensor-inactive');
  const pic=$('fc_pic'); if(pic) pic.setAttribute('class','chip-idle');
  const sIn=$('fc_sensorIn'); if(sIn) sIn.setAttribute('stroke','#253545');
  setOpacity('fc_decision','0'); setOpacity('fc_noSignal','0'); setOpacity('fs_warning','0');
  setCarVis('fs_car', false);
  setText('fc_status','Bekleme Modu');

  if (step>=0) {
    setText('f_stepBadge','ADIM 1 / 5');
    setText('f_stepDesc','Otopark tamamen dolu (5/5). Sistem bekleme modunda.');
  }
  if (step>=1) {
    setCarVis('fs_car', true);
    setSensor('fs_sensorDot','sensor-active', true);
    sIn.setAttribute('stroke','#f39c12');
    setWire('fc_w_ra0','wire-active');
    setText('f_stepBadge','ADIM 2 / 5');
    setText('f_stepDesc','Araç giriş sensörüne geldi. RA0=1. Sinyal PIC\'e gidiyor.');
    setText('fc_status','Sensör Algılandı');
  }
  if (step>=2) {
    pic.setAttribute('class','chip-active-red');
    setOpacity('fc_decision','1');
    setText('f_stepBadge','ADIM 3 / 5');
    setText('f_stepDesc','PIC kontrol ediyor: Sayaç(5) = MAX(5) → OTOPARK DOLU!');
    setText('fc_status','Doluluk: DOLU!');
  }
  if (step>=3) {
    setLed('fc_redLed','led-red-on'); setLed('fs_redLed','led-red-on');
    setWire('fc_w_rb3','wire-active-red');
    setOpacity('fc_noSignal','1');
    setText('f_stepBadge','ADIM 4 / 5');
    setText('f_stepDesc','Kırmızı LED yandı (RB3=1). Motor sinyali GÖNDERİLMİYOR. Bariyer kapalı.');
    setText('fc_status','⛔ Giriş Engellendi');
  }
  if (step>=4) {
    setOpacity('fs_warning','1');
    setText('f_stepBadge','ADIM 5 / 5');
    setText('f_stepDesc','OTOPARK DOLU — Bariyer kapalı kalıyor. Araç giremez. Çıkış bekleniyor.');
    setText('fc_status','⛔ Otopark Dolu');
  }
}

// ===== EXIT ANIMATION =====
function runExitAnim(step) {
  animSteps['exit'] = 7;
  // Reset
  setWire('xc_w_ra1','wire-idle'); setWire('xc_w_ra2','wire-idle'); setWire('xc_w_ra3','wire-idle');
  setWire('xc_w_rb0','wire-idle'); setWire('xc_w_rb1','wire-idle'); setWire('xc_w_rb2','wire-idle');
  setWire('xc_w_motor','wire-idle');
  setLed('xc_greenLed','led-off'); setLed('xs_greenLed','led-off');
  setSensor('xs_sensorDot','sensor-inactive');
  const pic=$('xc_pic'); if(pic) pic.setAttribute('class','chip-idle');
  const sOut=$('xc_sensorOut'); if(sOut) sOut.setAttribute('stroke','#253545');
  setOpacity('xc_motorSpin','0');
  setCarVis('xs_car', false);
  const bar=$('xs_barrier'); if(bar) bar.style.transform='rotate(0deg)';
  const car=$('xs_car'); if(car) car.style.transform='translateX(0)';
  setText('xc_counter','Sayaç: 5/5'); setText('xs_counter','Doluluk: 5/5');
  setText('xc_status','Bekleme Modu');
  setText('xs_parkLabel','OTOPARK — DOLU');

  if (step>=0) {
    setText('x_stepBadge','ADIM 1 / 7');
    setText('x_stepDesc','Otopark dolu (5/5). İçerideki bir araç çıkmak istiyor.');
  }
  if (step>=1) {
    setCarVis('xs_car', true);
    setSensor('xs_sensorDot','sensor-active', true);
    sOut.setAttribute('stroke','#f39c12');
    setWire('xc_w_ra1','wire-active');
    setText('x_stepBadge','ADIM 2 / 7');
    setText('x_stepDesc','Araç çıkış sensörünü tetikledi. RA1=1. PIC çıkış izni veriyor.');
    setText('xc_status','Çıkış Sensörü Aktif');
  }
  if (step>=2) {
    pic.setAttribute('class','chip-active');
    setLed('xc_greenLed','led-green-on'); setLed('xs_greenLed','led-green-on');
    setWire('xc_w_rb0','wire-active-yellow'); setWire('xc_w_rb2','wire-active');
    setWire('xc_w_motor','wire-active-yellow');
    setOpacity('xc_motorSpin','1');
    setText('x_stepBadge','ADIM 3 / 7');
    setText('x_stepDesc','Yeşil LED yandı. Motor açma sinyali (RB0=1). Bariyer açılıyor.');
    setText('xc_status','Motor Açılıyor');
  }
  if (step>=3) {
    bar.style.transform='rotate(-90deg)';
    setWire('xc_w_ra2','wire-active');
    setText('x_stepBadge','ADIM 4 / 7');
    setText('x_stepDesc','Bariyer açıldı. Açık limit switch (RA2=1). Motor duracak.');
    setText('xc_status','Bariyer Açık');
  }
  if (step>=4) {
    setWire('xc_w_rb0','wire-idle'); setWire('xc_w_motor','wire-idle');
    setOpacity('xc_motorSpin','0');
    car.style.transform='translateX(-200px)';
    setText('x_stepBadge','ADIM 5 / 7');
    setText('x_stepDesc','Motor durdu. Araç dışarı çıkıyor...');
    setText('xc_status','Araç Çıkıyor');
  }
  if (step>=5) {
    bar.style.transform='rotate(0deg)';
    setCarVis('xs_car', false);
    setLed('xc_greenLed','led-off'); setLed('xs_greenLed','led-off');
    setSensor('xs_sensorDot','sensor-inactive');
    sOut.setAttribute('stroke','#253545');
    setWire('xc_w_ra1','wire-idle'); setWire('xc_w_ra2','wire-idle');
    setWire('xc_w_rb1','wire-active-yellow'); setWire('xc_w_rb2','wire-idle');
    setWire('xc_w_motor','wire-active-yellow');
    setWire('xc_w_ra3','wire-active');
    setOpacity('xc_motorSpin','1');
    setText('x_stepBadge','ADIM 6 / 7');
    setText('x_stepDesc','Bariyer kapanıyor (RB1=1). Kapalı limit switch (RA3=1).');
    setText('xc_status','Bariyer Kapanıyor');
  }
  if (step>=6) {
    setWire('xc_w_rb1','wire-idle'); setWire('xc_w_motor','wire-idle');
    setWire('xc_w_ra3','wire-idle');
    setOpacity('xc_motorSpin','0');
    pic.setAttribute('class','chip-idle');
    setText('xc_counter','Sayaç: 4/5'); setText('xs_counter','Doluluk: 4/5');
    const s5=$('xs_spot5'); if(s5) s5.setAttribute('class','spot-empty');
    setText('xs_spot5txt','5');
    setText('xs_parkLabel','OTOPARK');
    setText('x_stepBadge','ADIM 7 / 7');
    setText('x_stepDesc','Çıkış tamamlandı! Sayaç 5→4 (DECF). Artık 1 boş yer var. Sistem hazır.');
    setText('xc_status','✓ Çıkış Tamamlandı');
  }
}

// ===== FLOWCODE ANIMATION =====
animSteps['flowcode'] = 14;

function fcClearAll() {
  // Clear all node highlights
  const nodes = ['fc_n_basla','fc_n_port','fc_n_dongu','fc_n_ra0','fc_n_dolu',
    'fc_n_motor_ac','fc_n_ra2','fc_n_gecis','fc_n_incf','fc_n_kirmizi',
    'fc_n_ra1','fc_n_cikis','fc_n_cikis_motor','fc_n_cikis_ra2',
    'fc_n_cikis_gecis','fc_n_cikis_ra3','fc_n_cikis_decf'];
  nodes.forEach(id => { const e=$(id); if(e) e.classList.remove('fc-node-active'); });
  // Clear all code highlights
  for(let i=1;i<=80;i++) {
    const el=$('fcL'+i);
    if(el) { el.classList.remove('fc-highlight','fc-highlight-red','fc-highlight-blue','fc-dim'); }
  }
}

function fcHighlight(nodeIds, codeLines, cls, desc, badge) {
  fcClearAll();
  // Dim all lines first
  for(let i=1;i<=80;i++) { const el=$('fcL'+i); if(el) el.classList.add('fc-dim'); }
  // Highlight nodes
  nodeIds.forEach(id => { const e=$(id); if(e) e.classList.add('fc-node-active'); });
  // Highlight code lines
  const hlCls = cls || 'fc-highlight';
  codeLines.forEach(n => {
    const el=$('fcL'+n);
    if(el) { el.classList.remove('fc-dim'); el.classList.add(hlCls); }
  });
  setText('fc_stepBadge', badge);
  setText('fc_stepDesc', desc);
  setText('fc_flow_desc', desc);
  // Scroll code into view
  if(codeLines.length>0) {
    const first=$('fcL'+codeLines[0]);
    if(first) first.scrollIntoView({behavior:'smooth',block:'center'});
  }
}

function runFlowCodeAnim(step) {
  if(step===0) {
    fcHighlight(
      ['fc_n_basla'],
      [1,2,3,4,5],
      'fc-highlight',
      'Program başlangıcı — LIST, INCLUDE ve değişken tanımları',
      'ADIM 1 / 14'
    );
  } else if(step===1) {
    fcHighlight(
      ['fc_n_port'],
      [8,9,10,11,12,13,14,15],
      'fc-highlight',
      'Port ayarları: TRISA=FF (giriş), TRISB=00 (çıkış), CLRF SAYAC',
      'ADIM 2 / 14'
    );
  } else if(step===2) {
    fcHighlight(
      ['fc_n_dongu'],
      [17,18,19,20,21,22,23],
      'fc-highlight',
      'Ana döngü: RA0 ve RA1 sensörleri sürekli taranıyor',
      'ADIM 3 / 14'
    );
  } else if(step===3) {
    fcHighlight(
      ['fc_n_ra0'],
      [19,20],
      'fc-highlight',
      'RA0 = 1? → Giriş sensörü tetiklendi mi? BTFSC PORTA,0',
      'ADIM 4 / 14'
    );
  } else if(step===4) {
    fcHighlight(
      ['fc_n_dolu'],
      [26,27,28,29,30],
      'fc-highlight',
      'Doluluk kontrolü: MOVF SAYAC → SUBLW MAX → STATUS,Z kontrol',
      'ADIM 5 / 14'
    );
  } else if(step===5) {
    fcHighlight(
      ['fc_n_motor_ac'],
      [32,33],
      'fc-highlight',
      'Boş yer var! Yeşil LED yak (BSF RB2) + Motor aç (BSF RB0)',
      'ADIM 6 / 14'
    );
  } else if(step===6) {
    fcHighlight(
      ['fc_n_ra2','fc_n_gecis'],
      [34,35,36,37,38,39],
      'fc-highlight-blue',
      'Açık limit switch bekle (RA2), motor dur, araç geçişi bekle',
      'ADIM 7 / 14'
    );
  } else if(step===7) {
    fcHighlight(
      ['fc_n_incf'],
      [41,42,43,44,45,46,47,48],
      'fc-highlight',
      'Bariyer kapat (BSF RB1), kapalı LS bekle, INCF SAYAC, RETURN',
      'ADIM 8 / 14'
    );
  } else if(step===8) {
    fcHighlight(
      ['fc_n_kirmizi'],
      [50,51,52,53],
      'fc-highlight-red',
      'DOLU senaryosu: Sayaç=MAX → BSF RB3 (kırmızı LED), bariyer açılmaz',
      'ADIM 9 / 14'
    );
  } else if(step===9) {
    fcHighlight(
      ['fc_n_ra1'],
      [21],
      'fc-highlight-blue',
      'RA1=1? Çıkış sensörü okuması (BTFSC PORTA,1)',
      'ADIM 10 / 14'
    );
  } else if(step===10) {
    fcHighlight(
      ['fc_n_cikis_motor'],
      [22, 56, 57],
      'fc-highlight-blue',
      'CALL CIKIS_ISLEM → Çıkış İşlemi Başlıyor: Bariyer motorunu aç (BSF RB0)',
      'ADIM 11 / 14'
    );
  } else if(step===11) {
    fcHighlight(
      ['fc_n_cikis_ra2', 'fc_n_cikis_gecis'],
      [58, 59, 60, 61, 63],
      'fc-highlight-blue',
      'Açık LS bekle (RA2), motor dur, geçiş bekle, bariyeri kapat (BSF RB1)',
      'ADIM 12 / 14'
    );
  } else if(step===12) {
    fcHighlight(
      ['fc_n_cikis_ra3'],
      [64, 65, 66],
      'fc-highlight-blue',
      'Kapalı LS bekle (RA3)',
      'ADIM 13 / 14'
    );
  } else if(step===13) {
    fcHighlight(
      ['fc_n_cikis_decf'],
      [67, 68, 69, 70],
      'fc-highlight-blue',
      'Motor dur, sayaç azalt (DECF SAYAC), kırmızı LED kapat ve DÖNGÜYE dön',
      'ADIM 14 / 14'
    );
  }
}

document.addEventListener('DOMContentLoaded', initPresentation);
