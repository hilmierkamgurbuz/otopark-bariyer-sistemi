const slidesHTML_4 = `
<!-- SLAYT 9: MOTOR KONTROL -->
<div class="slide slide-content" data-notes="L293D motor sürücü, PIC'in düşük akımlı çıkışlarıyla DC motoru iki yönlü sürmemizi sağlar.">
  <div class="slide-number">SLAYT 09</div>
  <h2 class="slide-title">Motor Kontrol Mantığı</h2>
  <p class="slide-subtitle">L293D ile DC motor yön kontrolü</p>
  <div class="two-col" style="flex:1;">
    <div>
      <table class="tech-table">
        <thead><tr><th>RB0 (IN1)</th><th>RB1 (IN2)</th><th>Motor</th><th>Bariyer</th></tr></thead>
        <tbody>
          <tr><td><span class="tag tag-green">1</span></td><td><span class="tag tag-red">0</span></td><td>İleri</td><td style="color:var(--green);font-weight:600;">↑ Açılıyor</td></tr>
          <tr><td><span class="tag tag-red">0</span></td><td><span class="tag tag-green">1</span></td><td>Geri</td><td style="color:var(--blue);font-weight:600;">↓ Kapanıyor</td></tr>
          <tr><td><span class="tag tag-red">0</span></td><td><span class="tag tag-red">0</span></td><td>Dur</td><td style="color:var(--gray-mid);">— Sabit</td></tr>
        </tbody>
      </table>
      <div class="highlight-box" style="margin-top:20px;">
        <h4 style="margin-bottom:8px;font-size:0.9rem;">⚙️ Assembly Karşılığı</h4>
        <div class="code-block" style="padding:14px;font-size:0.78rem;line-height:1.9;">
<span class="comment">; Bariyer Aç (İleri Dönüş)</span>
    <span class="keyword">BSF</span>   <span class="register">PORTB</span>,<span class="number">0</span>      <span class="comment">; IN1 = 1</span>
    <span class="keyword">BCF</span>   <span class="register">PORTB</span>,<span class="number">1</span>      <span class="comment">; IN2 = 0</span>

<span class="comment">; Bariyer Kapat (Geri Dönüş)</span>
    <span class="keyword">BCF</span>   <span class="register">PORTB</span>,<span class="number">0</span>      <span class="comment">; IN1 = 0</span>
    <span class="keyword">BSF</span>   <span class="register">PORTB</span>,<span class="number">1</span>      <span class="comment">; IN2 = 1</span>

<span class="comment">; Motor Durdur</span>
    <span class="keyword">BCF</span>   <span class="register">PORTB</span>,<span class="number">0</span>      <span class="comment">; IN1 = 0</span>
    <span class="keyword">BCF</span>   <span class="register">PORTB</span>,<span class="number">1</span>      <span class="comment">; IN2 = 0</span>
        </div>
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;">
      <svg viewBox="0 0 280 300" width="260">
        <rect x="75" y="20" width="130" height="80" rx="8" fill="#f4f6f8" stroke="#2c3e50" stroke-width="2"/>
        <text x="140" y="50" text-anchor="middle" fill="#2c3e50" font-size="13" font-weight="800">L293D</text>
        <text x="140" y="68" text-anchor="middle" fill="#7f8c8d" font-size="9">Motor Sürücü</text>
        <text x="90" y="90" fill="#3498db" font-size="8">IN1  IN2</text>
        <text x="170" y="90" fill="#e67e22" font-size="8">OUT1 OUT2</text>
        <rect x="5" y="45" width="55" height="35" rx="4" fill="#e8f8f5" stroke="#00b894" stroke-width="1.5"/>
        <text x="32" y="62" text-anchor="middle" fill="#00b894" font-size="8" font-weight="700">PIC</text>
        <text x="32" y="73" text-anchor="middle" fill="#00b894" font-size="7">RB0, RB1</text>
        <line x1="60" y1="62" x2="75" y2="62" stroke="#3498db" stroke-width="1.5"/>
        <circle cx="140" cy="170" r="38" fill="#fff3e0" stroke="#e67e22" stroke-width="2"/>
        <text x="140" y="166" text-anchor="middle" fill="#e67e22" font-size="12" font-weight="700">DC</text>
        <text x="140" y="182" text-anchor="middle" fill="#e67e22" font-size="12" font-weight="700">MOTOR</text>
        <line x1="140" y1="100" x2="140" y2="132" stroke="#e67e22" stroke-width="1.5"/>
        <rect x="110" y="235" width="10" height="40" rx="2" fill="#7f8c8d"/>
        <rect x="110" y="230" width="65" height="7" rx="2" fill="#e74c3c"/>
        <text x="140" y="260" fill="#2c3e50" font-size="8" font-weight="600">BARİYER</text>
        <line x1="140" y1="208" x2="140" y2="230" stroke="#7f8c8d" stroke-width="1" stroke-dasharray="3 2"/>
      </svg>
    </div>
  </div>
</div>

<!-- SLAYT 10: ANİMASYON NORMAL GİRİŞ — SPLIT PANEL -->
<div class="slide slide-dark" data-anim="entry" data-notes="Normal giriş senaryosu. Sol: devre sinyalleri, sağ: fiziksel sahne. ↓ ok ile adım adım ilerleyin.">
  <div class="slide-number" style="color:var(--accent);">SLAYT 10</div>
  <h2 class="slide-title" style="color:#fff;border-color:var(--accent);margin-bottom:4px;font-size:1.6rem;">Animasyon: Normal Giriş Senaryosu</h2>
  <div class="split-anim">
    <!-- LEFT: CIRCUIT -->
    <div class="panel-circuit">
      <div class="panel-label">DEVRE ŞEMASI</div>
      <svg id="eCircuit" viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg">
        <!-- RA2 (pin1, LEFT side y=72) ← Açık Limit SW -->
        <path d="M155,72 L60,72" fill="none" id="ec_w_ra2" class="wire-idle" stroke-width="1"/>
        <circle cx="55" cy="72" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="ec_limOpen"/>
        <text x="50" y="72" text-anchor="end" fill="#89b4fa" font-size="6.5" font-weight="600">Açık Limit SW</text>
        <text x="50" y="80" text-anchor="end" fill="#556" font-size="5">10kΩ↓GND</text>
        <!-- RA3 (pin2, LEFT side y=84) ← Kapalı Limit SW -->
        <path d="M155,84 L60,84" fill="none" id="ec_w_ra3" class="wire-idle" stroke-width="1"/>
        <circle cx="55" cy="84" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="ec_limClose"/>
        <text x="50" y="84" text-anchor="end" fill="#89b4fa" font-size="6.5" font-weight="600">Kapalı Limit SW</text>
        <text x="50" y="92" text-anchor="end" fill="#556" font-size="5">10kΩ↓GND</text>
        <!-- RA0 (pin17, RIGHT side y=84) ← Giriş Sensörü -->
        <path d="M295,84 L320,84 L320,10" fill="none" id="ec_w_ra0" class="wire-idle" stroke-width="1"/>
        <circle cx="320" cy="6" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="ec_sensorIn"/>
        <text x="326" y="9" fill="#89b4fa" font-size="6" font-weight="600">Giriş Sensörü (RA0)</text>
        <!-- RA1 (pin18, RIGHT side y=72) ← Çıkış Sensörü -->
        <path d="M295,72 L300,72 L300,10" fill="none" id="ec_w_ra1" class="wire-idle" stroke-width="1"/>
        <circle cx="300" cy="6" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="ec_sensorOut2"/>
        <text x="296" y="9" text-anchor="end" fill="#89b4fa" font-size="6" font-weight="600">Çıkış Sensörü (RA1)</text>
        <!-- PIC16F84A DIP-18 Style -->
        <rect x="155" y="30" width="140" height="165" rx="4" fill="#0a1929" stroke="#00b894" stroke-width="2" id="ec_pic"/>
        <circle cx="225" cy="30" r="5" fill="#0a1929" stroke="#00b894" stroke-width="1"/>
        <text x="225" y="50" text-anchor="middle" fill="#00b894" font-size="10" font-weight="800">PIC16F84A</text>
        <line x1="155" y1="56" x2="295" y2="56" stroke="#00b894" stroke-width="0.3" opacity="0.3"/>
        <!-- Left pins -->
        <text x="163" y="72" fill="#89b4fa" font-size="6.5">1  RA2</text>
        <text x="163" y="84" fill="#89b4fa" font-size="6.5">2  RA3</text>
        <text x="163" y="96" fill="#7f8c8d" font-size="6.5">3  RA4</text>
        <text x="163" y="108" fill="#f39c12" font-size="6.5">4  MCLR↑</text>
        <text x="163" y="120" fill="#7f8c8d" font-size="6.5">5  VSS</text>
        <text x="163" y="132" fill="#a6e3a1" font-size="6.5">6  RB0→IN1</text>
        <text x="163" y="144" fill="#a6e3a1" font-size="6.5">7  RB1→IN2</text>
        <text x="163" y="156" fill="#a6e3a1" font-size="6.5">8  RB2→LED</text>
        <text x="163" y="168" fill="#a6e3a1" font-size="6.5">9  RB3→LED</text>
        <!-- Right pins -->
        <text x="288" y="72" fill="#89b4fa" font-size="6.5" text-anchor="end">RA1  18</text>
        <text x="288" y="84" fill="#89b4fa" font-size="6.5" text-anchor="end">RA0  17</text>
        <text x="288" y="96" fill="#7f8c8d" font-size="6.5" text-anchor="end">OSC1  16</text>
        <text x="288" y="108" fill="#7f8c8d" font-size="6.5" text-anchor="end">OSC2  15</text>
        <text x="288" y="120" fill="#e74c3c" font-size="6.5" text-anchor="end">VDD  14</text>
        <text x="288" y="132" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB7  13</text>
        <text x="288" y="144" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB6  12</text>
        <text x="288" y="156" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB5  11</text>
        <text x="288" y="168" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB4  10</text>
        <!-- Counter -->
        <rect x="185" y="175" width="80" height="18" rx="3" fill="#081420" stroke="#f39c12" stroke-width="0.8"/>
        <text x="225" y="188" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700" id="ec_counter">Sayaç: 2/5</text>
        <!-- Wires: PIC RB pins (left side) → L293D IN pins (left side) -->
        <path d="M155,132 L140,132 L140,57 L325,57" fill="none" id="ec_w_rb0" class="wire-idle" stroke-width="1"/>
        <path d="M155,144 L130,144 L130,107 L325,107" fill="none" id="ec_w_rb1" class="wire-idle" stroke-width="1"/>
        <!-- Wires: PIC RB2,RB3 → LEDs -->
        <path d="M155,156 L120,156 L120,255 L310,255" fill="none" id="ec_w_rb2" class="wire-idle" stroke-width="1"/>
        <path d="M155,168 L110,168 L110,305 L310,305" fill="none" id="ec_w_rb3" class="wire-idle" stroke-width="1"/>
        <!-- Pin values near wires -->
        <text x="140" y="30" fill="#556" font-size="6" id="ec_v_ra0">0</text>
        <text x="140" y="68" fill="#445" font-size="6" id="ec_v_ra1">0</text>
        <text x="140" y="106" fill="#556" font-size="6" id="ec_v_ra2">0</text>
        <text x="140" y="144" fill="#556" font-size="6" id="ec_v_ra3">0</text>
        <text x="135" y="132" fill="#556" font-size="6" id="ec_v_rb0">0</text>
        <text x="125" y="144" fill="#556" font-size="6" id="ec_v_rb1">0</text>
        <text x="115" y="200" fill="#556" font-size="6" id="ec_v_rb2">0</text>
        <text x="105" y="240" fill="#556" font-size="6" id="ec_v_rb3">0</text>
        <!-- L293D DIP-16 -->
        <rect x="325" y="15" width="110" height="130" rx="3" fill="#0d1b2a" stroke="#f39c12" stroke-width="1.5" id="ec_l293d"/>
        <circle cx="380" cy="15" r="4" fill="#0d1b2a" stroke="#f39c12" stroke-width="0.8"/>
        <text x="380" y="30" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="800">L293D</text>
        <line x1="325" y1="34" x2="435" y2="34" stroke="#f39c12" stroke-width="0.3" opacity="0.3"/>
        <!-- Left pins -->
        <text x="332" y="47" fill="#a6e3a1" font-size="5.5">1 EN1,2</text>
        <text x="332" y="57" fill="#a6e3a1" font-size="5.5">2 IN1←RB0</text>
        <text x="332" y="67" fill="#f39c12" font-size="5.5">3 OUT1→M+</text>
        <text x="332" y="77" fill="#556" font-size="5.5">4 GND</text>
        <text x="332" y="87" fill="#556" font-size="5.5">5 GND</text>
        <text x="332" y="97" fill="#f39c12" font-size="5.5">6 OUT2→M−</text>
        <text x="332" y="107" fill="#a6e3a1" font-size="5.5">7 IN2←RB1</text>
        <text x="332" y="117" fill="#e74c3c" font-size="5.5">8 VCC2</text>
        <!-- Right pins -->
        <text x="430" y="47" fill="#e74c3c" font-size="5.5" text-anchor="end">VCC1 16</text>
        <text x="430" y="57" fill="#556" font-size="5.5" text-anchor="end">IN4 15</text>
        <text x="430" y="67" fill="#556" font-size="5.5" text-anchor="end">OUT4 14</text>
        <text x="430" y="77" fill="#556" font-size="5.5" text-anchor="end">GND 13</text>
        <text x="430" y="87" fill="#556" font-size="5.5" text-anchor="end">GND 12</text>
        <text x="430" y="97" fill="#556" font-size="5.5" text-anchor="end">OUT3 11</text>
        <text x="430" y="107" fill="#556" font-size="5.5" text-anchor="end">IN3 10</text>
        <text x="430" y="117" fill="#556" font-size="5.5" text-anchor="end">EN3,4 9</text>
        <text x="380" y="137" text-anchor="middle" fill="#445" font-size="5">Kanal 2 kullanılmıyor</text>
        <!-- L293D OUT → Motor wires -->
        <path d="M325,67 L312,67 L312,168 L365,168" fill="none" stroke="#f39c12" stroke-width="1" stroke-dasharray="3 2"/>
        <path d="M325,97 L305,97 L305,175 L365,175" fill="none" stroke="#f39c12" stroke-width="1" stroke-dasharray="3 2"/>
        <text x="308" y="120" fill="#f39c12" font-size="5" transform="rotate(-90,308,120)">OUT1</text>
        <text x="301" y="140" fill="#f39c12" font-size="5" transform="rotate(-90,301,140)">OUT2</text>
        <!-- DC Motor -->
        <circle cx="380" cy="180" r="22" fill="#0d1b2a" stroke="#f39c12" stroke-width="1.5" id="ec_motor"/>
        <text x="380" y="177" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700">DC</text>
        <text x="380" y="188" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700">Motor</text>
        <line x1="387" y1="158" x2="395" y2="145" id="ec_w_motor" class="wire-idle" stroke-width="1"/>
        <!-- Motor spin -->
        <g id="ec_motorSpin" opacity="0"><text x="380" y="212" text-anchor="middle" fill="#27ae60" font-size="12">⟳</text></g>
        <!-- Bariyer -->
        <line x1="380" y1="202" x2="380" y2="220" stroke="#555" stroke-width="1" stroke-dasharray="3 2"/>
        <rect x="355" y="220" width="50" height="18" rx="3" fill="#0d1b2a" stroke="#7f8c8d" stroke-width="1"/>
        <text x="380" y="233" text-anchor="middle" fill="#7f8c8d" font-size="6.5" font-weight="600">BARİYER</text>
        <!-- Green LED with resistor -->
        <line x1="330" y1="255" x2="350" y2="255" stroke="#27ae60" stroke-width="1"/>
        <rect x="310" y="250" width="16" height="10" rx="1" fill="none" stroke="#556" stroke-width="0.8"/>
        <text x="318" y="270" text-anchor="middle" fill="#334" font-size="5">330Ω</text>
        <circle cx="365" cy="255" r="12" id="ec_greenLed" class="led-off"/>
        <text x="365" y="259" text-anchor="middle" fill="#555" font-size="7">LED</text>
        <text x="365" y="278" text-anchor="middle" fill="#556" font-size="7">Yeşil (RB2)</text>
        <!-- Red LED with resistor -->
        <line x1="330" y1="305" x2="350" y2="305" stroke="#e74c3c" stroke-width="1"/>
        <rect x="310" y="300" width="16" height="10" rx="1" fill="none" stroke="#556" stroke-width="0.8"/>
        <text x="318" y="320" text-anchor="middle" fill="#334" font-size="5">330Ω</text>
        <circle cx="365" cy="305" r="12" id="ec_redLed" class="led-off"/>
        <text x="365" y="309" text-anchor="middle" fill="#555" font-size="7">LED</text>
        <text x="365" y="328" text-anchor="middle" fill="#556" font-size="7">Kırmızı (RB3)</text>
        <!-- Decision box -->
        <g id="ec_decision" opacity="0">
          <rect x="140" y="200" width="150" height="35" rx="6" fill="rgba(0,184,148,0.1)" stroke="#00b894" stroke-width="1"/>
          <text x="215" y="221" text-anchor="middle" fill="#00b894" font-size="9" font-weight="600" id="ec_decisionText">Araç Sayısı &lt; MAX?</text>
        </g>
        <!-- Status bar -->
        <rect x="130" y="345" width="180" height="25" rx="5" fill="rgba(243,156,18,0.1)" stroke="rgba(243,156,18,0.3)" stroke-width="1"/>
        <text x="220" y="362" text-anchor="middle" fill="#f39c12" font-size="9" font-weight="600" id="ec_status">Bekleme Modu</text>
      </svg>
    </div>
    <!-- RIGHT: SCENE -->
    <div class="panel-scene">
      <div class="panel-label">FİZİKSEL GÖRÜNÜM</div>
      <svg id="eScene" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="420" height="380" fill="#0a1628"/>
        <!-- Parking -->
        <rect x="250" y="15" width="160" height="190" rx="8" fill="#0d1b2a" stroke="#253545" stroke-width="1"/>
        <text x="330" y="35" text-anchor="middle" fill="#556" font-size="9" font-weight="700">OTOPARK</text>
        <rect x="265" y="45" width="55" height="28" rx="3" stroke-width="0.8" class="spot-filled"/>
        <text x="292" y="63" text-anchor="middle" fill="#888" font-size="7">1 🚗</text>
        <rect x="340" y="45" width="55" height="28" rx="3" stroke-width="0.8" class="spot-filled"/>
        <text x="367" y="63" text-anchor="middle" fill="#888" font-size="7">2 🚗</text>
        <rect x="265" y="85" width="55" height="28" rx="3" stroke-width="0.8" class="spot-empty"/>
        <text x="292" y="103" text-anchor="middle" fill="#888" font-size="7">3</text>
        <rect x="340" y="85" width="55" height="28" rx="3" stroke-width="0.8" class="spot-empty"/>
        <text x="367" y="103" text-anchor="middle" fill="#888" font-size="7">4</text>
        <rect x="265" y="125" width="55" height="28" rx="3" stroke-width="0.8" class="spot-empty"/>
        <text x="292" y="143" text-anchor="middle" fill="#888" font-size="7">5</text>
        <rect x="275" y="165" width="100" height="22" rx="4" fill="#081420" stroke="#f39c12" stroke-width="1"/>
        <text x="325" y="180" text-anchor="middle" fill="#f39c12" font-size="9" font-weight="700" id="es_counter">Doluluk: 2/5</text>
        <!-- Road -->
        <rect x="0" y="240" width="420" height="60" class="road-surface"/>
        <line x1="0" y1="270" x2="420" y2="270" class="road-line"/>
        <text x="80" y="235" text-anchor="middle" fill="#3498db" font-size="8" font-weight="600">GİRİŞ →</text>
        <!-- Sensor -->
        <rect x="140" y="225" width="8" height="75" rx="2" fill="#253545"/>
        <circle cx="144" cy="235" r="4" id="es_sensorDot" class="sensor-inactive"/>
        <text x="144" y="310" text-anchor="middle" fill="#556" font-size="7">Sensör</text>
        <!-- Barrier -->
        <rect x="220" y="215" width="10" height="85" rx="2" fill="#3d3d5c"/>
        <g id="es_barrier" style="transform-origin:225px 220px;transition:transform 0.8s ease;">
          <rect x="225" y="217" width="90" height="6" rx="2" fill="#e74c3c"/>
          <rect x="225" y="217" width="12" height="6" rx="2" fill="#f39c12"/>
          <rect x="285" y="217" width="20" height="6" rx="2" fill="#fff" opacity="0.2"/>
        </g>
        <!-- Limit switches -->
        <rect x="225" y="206" width="28" height="7" rx="2" fill="#0d1b2a" stroke="#556" stroke-width="0.8" id="es_limOpen"/>
        <text x="239" y="204" text-anchor="middle" fill="#556" font-size="5">Açık LS</text>
        <rect x="225" y="298" width="28" height="7" rx="2" fill="#0d1b2a" stroke="#556" stroke-width="0.8" id="es_limClose"/>
        <text x="239" y="312" text-anchor="middle" fill="#556" font-size="5">Kapalı LS</text>
        <!-- LEDs -->
        <circle cx="232" cy="340" r="6" id="es_greenLed" class="led-off"/>
        <circle cx="250" cy="340" r="6" id="es_redLed" class="led-off"/>
        <text x="232" y="355" text-anchor="middle" fill="#556" font-size="5">Y</text>
        <text x="250" y="355" text-anchor="middle" fill="#556" font-size="5">K</text>
        <!-- Car -->
        <g id="es_car" style="transition:transform 1s ease;">
          <rect x="30" y="250" width="65" height="28" rx="8" fill="#3498db" opacity="0"/>
          <rect x="38" y="242" width="42" height="14" rx="5" fill="#2980b9" opacity="0"/>
          <circle cx="46" cy="282" r="5" fill="#111" opacity="0"/>
          <circle cx="82" cy="282" r="5" fill="#111" opacity="0"/>
          <circle cx="46" cy="282" r="2.5" fill="#444" opacity="0"/>
          <circle cx="82" cy="282" r="2.5" fill="#444" opacity="0"/>
        </g>
      </svg>
    </div>
  </div>
  <div class="anim-bottom-bar">
    <div class="anim-step-badge" id="e_stepBadge">ADIM 1 / 8</div>
    <div class="anim-step-desc" id="e_stepDesc">Sistem bekleme modunda. Bariyer kapalı, sensörler pasif.</div>
    <div style="margin-left:auto;color:#556;font-size:0.72rem;">↓ ok ile ilerle</div>
  </div>
</div>
`;
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('presentation').insertAdjacentHTML('beforeend', slidesHTML_4);
});
