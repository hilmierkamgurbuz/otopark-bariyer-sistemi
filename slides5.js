const slidesHTML_5 = `
<!-- SLAYT 11: ANİMASYON DOLU — SPLIT PANEL -->
<div class="slide slide-dark" data-anim="full" data-notes="Otopark dolu senaryosu. Sayaç MAX değerinde. PIC kırmızı LED yakar, motor sinyali göndermez, bariyer kapalı kalır.">
  <div class="slide-number" style="color:var(--accent);">SLAYT 11</div>
  <h2 class="slide-title" style="color:#fff;border-color:var(--accent);margin-bottom:4px;font-size:1.6rem;">Animasyon: Otopark Dolu Senaryosu</h2>
  <div class="split-anim">
    <div class="panel-circuit">
      <div class="panel-label">DEVRE ŞEMASI</div>
      <svg id="fCircuit" viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg">
        <!-- RA0 (pin17, RIGHT side y=84) ← Giriş Sensörü -->
        <path d="M295,84 L320,84 L320,10" fill="none" id="fc_w_ra0" class="wire-idle" stroke-width="1"/>
        <circle cx="320" cy="6" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="fc_sensorIn"/>
        <text x="326" y="9" fill="#89b4fa" font-size="6" font-weight="600">Giriş Sensörü (RA0)</text>
        <!-- PIC DIP-18 -->
        <rect x="155" y="30" width="140" height="165" rx="4" fill="#0a1929" stroke="#00b894" stroke-width="2" id="fc_pic"/>
        <circle cx="225" cy="30" r="5" fill="#0a1929" stroke="#00b894" stroke-width="1"/>
        <text x="225" y="50" text-anchor="middle" fill="#00b894" font-size="10" font-weight="800">PIC16F84A</text>
        <line x1="155" y1="56" x2="295" y2="56" stroke="#00b894" stroke-width="0.3" opacity="0.3"/>
        <text x="163" y="72" fill="#89b4fa" font-size="6.5">1  RA2</text>
        <text x="163" y="84" fill="#89b4fa" font-size="6.5">2  RA3</text>
        <text x="163" y="96" fill="#7f8c8d" font-size="6.5">3  RA4</text>
        <text x="163" y="108" fill="#f39c12" font-size="6.5">4  MCLR↑</text>
        <text x="163" y="120" fill="#7f8c8d" font-size="6.5">5  VSS</text>
        <text x="163" y="132" fill="#a6e3a1" font-size="6.5">6  RB0→IN1</text>
        <text x="163" y="144" fill="#a6e3a1" font-size="6.5">7  RB1→IN2</text>
        <text x="163" y="156" fill="#a6e3a1" font-size="6.5">8  RB2→LED</text>
        <text x="163" y="168" fill="#a6e3a1" font-size="6.5">9  RB3→LED</text>
        <text x="288" y="72" fill="#89b4fa" font-size="6.5" text-anchor="end">RA1  18</text>
        <text x="288" y="84" fill="#89b4fa" font-size="6.5" text-anchor="end">RA0  17</text>
        <text x="288" y="96" fill="#7f8c8d" font-size="6.5" text-anchor="end">OSC1  16</text>
        <text x="288" y="108" fill="#7f8c8d" font-size="6.5" text-anchor="end">OSC2  15</text>
        <text x="288" y="120" fill="#e74c3c" font-size="6.5" text-anchor="end">VDD  14</text>
        <text x="288" y="132" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB7  13</text>
        <text x="288" y="144" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB6  12</text>
        <text x="288" y="156" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB5  11</text>
        <text x="288" y="168" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB4  10</text>
        <rect x="185" y="175" width="80" height="18" rx="3" fill="#081420" stroke="#e74c3c" stroke-width="1"/>
        <text x="225" y="188" text-anchor="middle" fill="#e74c3c" font-size="8" font-weight="700">Sayaç: 5/5</text>
        <!-- RA1 (pin18, RIGHT side y=72) ← Çıkış Sensörü -->
        <path d="M295,72 L300,72 L300,10" fill="none" stroke="#334" stroke-width="0.5" stroke-dasharray="2 2"/>
        <text x="296" y="9" text-anchor="end" fill="#445" font-size="5">Çıkış (pasif)</text>
        <!-- RA2 (pin1, LEFT side y=72) ← Açık Limit SW -->
        <path d="M155,72 L60,72" fill="none" stroke="#334" stroke-width="0.5" stroke-dasharray="2 2"/>
        <circle cx="55" cy="72" r="4" fill="#0d1b2a" stroke="#253545" stroke-width="1"/>
        <text x="50" y="72" text-anchor="end" fill="#556" font-size="5.5">Açık Limit SW</text>
        <!-- RA3 (pin2, LEFT side y=84) ← Kapalı Limit SW -->
        <path d="M155,84 L60,84" fill="none" stroke="#334" stroke-width="0.5" stroke-dasharray="2 2"/>
        <circle cx="55" cy="84" r="4" fill="#0d1b2a" stroke="#253545" stroke-width="1"/>
        <text x="50" y="84" text-anchor="end" fill="#556" font-size="5.5">Kapalı Limit SW</text>
        <!-- Wires: PIC RB → L293D IN -->
        <path d="M155,132 L140,132 L140,57 L325,57" fill="none" id="fc_w_rb0" class="wire-idle" stroke-width="1"/>
        <path d="M155,144 L130,144 L130,107 L325,107" fill="none" id="fc_w_rb1" class="wire-idle" stroke-width="1"/>
        <!-- RB2 → Yeşil LED wire -->
        <path d="M155,156 L120,156 L120,255 L310,255" fill="none" stroke="#334" stroke-width="0.5" stroke-dasharray="2 2"/>
        <!-- RB3 → Kırmızı LED wire -->
        <path d="M155,168 L110,168 L110,305 L310,305" fill="none" id="fc_w_rb3" class="wire-idle" stroke-width="1"/>
        <!-- L293D DIP-16 -->
        <rect x="325" y="15" width="110" height="130" rx="3" fill="#0d1b2a" stroke="#f39c12" stroke-width="1.5"/>
        <circle cx="380" cy="15" r="4" fill="#0d1b2a" stroke="#f39c12" stroke-width="0.8"/>
        <text x="380" y="30" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="800">L293D</text>
        <line x1="325" y1="34" x2="435" y2="34" stroke="#f39c12" stroke-width="0.3" opacity="0.3"/>
        <text x="332" y="47" fill="#a6e3a1" font-size="5.5">1 EN1,2</text>
        <text x="332" y="57" fill="#a6e3a1" font-size="5.5">2 IN1←RB0</text>
        <text x="332" y="67" fill="#f39c12" font-size="5.5">3 OUT1→M+</text>
        <text x="332" y="77" fill="#556" font-size="5.5">4 GND</text>
        <text x="332" y="87" fill="#556" font-size="5.5">5 GND</text>
        <text x="332" y="97" fill="#f39c12" font-size="5.5">6 OUT2→M−</text>
        <text x="332" y="107" fill="#a6e3a1" font-size="5.5">7 IN2←RB1</text>
        <text x="332" y="117" fill="#e74c3c" font-size="5.5">8 VCC2</text>
        <text x="430" y="47" fill="#e74c3c" font-size="5.5" text-anchor="end">VCC1 16</text>
        <text x="430" y="57" fill="#556" font-size="5.5" text-anchor="end">IN4 15</text>
        <text x="430" y="67" fill="#556" font-size="5.5" text-anchor="end">OUT4 14</text>
        <text x="430" y="77" fill="#556" font-size="5.5" text-anchor="end">GND 13</text>
        <text x="430" y="87" fill="#556" font-size="5.5" text-anchor="end">GND 12</text>
        <text x="430" y="97" fill="#556" font-size="5.5" text-anchor="end">OUT3 11</text>
        <text x="430" y="107" fill="#556" font-size="5.5" text-anchor="end">IN3 10</text>
        <text x="430" y="117" fill="#556" font-size="5.5" text-anchor="end">EN3,4 9</text>
        <!-- OUT → Motor wires -->
        <path d="M325,67 L312,67 L312,168 L365,168" fill="none" stroke="#f39c12" stroke-width="1" stroke-dasharray="3 2"/>
        <path d="M325,97 L305,97 L305,175 L365,175" fill="none" stroke="#f39c12" stroke-width="1" stroke-dasharray="3 2"/>
        <text x="308" y="120" fill="#f39c12" font-size="5" transform="rotate(-90,308,120)">OUT1</text>
        <text x="301" y="140" fill="#f39c12" font-size="5" transform="rotate(-90,301,140)">OUT2</text>
        <!-- Motor -->
        <circle cx="380" cy="180" r="22" fill="#0d1b2a" stroke="#f39c12" stroke-width="1.5"/>
        <text x="380" y="177" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700">DC</text>
        <text x="380" y="188" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700">Motor</text>
        <text x="380" y="212" text-anchor="middle" fill="#556" font-size="7">Motor Çalışmıyor ✕</text>
        <!-- Bariyer -->
        <rect x="355" y="220" width="50" height="18" rx="3" fill="#0d1b2a" stroke="#7f8c8d" stroke-width="1"/>
        <text x="380" y="232" text-anchor="middle" fill="#7f8c8d" font-size="6.5" font-weight="600">BARİYER</text>
        <line x1="380" y1="202" x2="380" y2="220" stroke="#555" stroke-width="1" stroke-dasharray="3 2"/>
        <!-- LEDs -->
        <line x1="330" y1="255" x2="350" y2="255" stroke="#27ae60" stroke-width="1"/>
        <rect x="310" y="250" width="16" height="10" rx="1" fill="none" stroke="#556" stroke-width="0.8"/>
        <text x="318" y="270" text-anchor="middle" fill="#556" font-size="5">330Ω</text>
        <circle cx="365" cy="255" r="12" id="fc_greenLed" class="led-off"/>
        <text x="365" y="259" text-anchor="middle" fill="#555" font-size="7">LED</text>
        <text x="365" y="278" text-anchor="middle" fill="#556" font-size="7">Yeşil (RB2)</text>
        <line x1="330" y1="305" x2="350" y2="305" stroke="#e74c3c" stroke-width="1"/>
        <rect x="310" y="300" width="16" height="10" rx="1" fill="none" stroke="#556" stroke-width="0.8"/>
        <text x="318" y="320" text-anchor="middle" fill="#556" font-size="5">330Ω</text>
        <circle cx="365" cy="305" r="12" id="fc_redLed" class="led-off"/>
        <text x="365" y="309" text-anchor="middle" fill="#555" font-size="7">LED</text>
        <text x="365" y="328" text-anchor="middle" fill="#556" font-size="7">Kırmızı (RB3)</text>
        <!-- Decision -->
        <g id="fc_decision" opacity="0">
          <rect x="140" y="200" width="150" height="35" rx="6" fill="rgba(231,76,60,0.15)" stroke="#e74c3c" stroke-width="1"/>
          <text x="215" y="221" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="600">Sayaç = MAX → DOLU!</text>
        </g>
        <g id="fc_noSignal" opacity="0">
          <line x1="300" y1="50" x2="320" y2="70" stroke="#e74c3c" stroke-width="2.5"/>
          <line x1="320" y1="50" x2="300" y2="70" stroke="#e74c3c" stroke-width="2.5"/>
          <text x="310" y="85" text-anchor="middle" fill="#e74c3c" font-size="7" font-weight="600">Sinyal YOK</text>
        </g>
        <!-- Status -->
        <rect x="130" y="345" width="180" height="25" rx="5" fill="rgba(231,76,60,0.1)" stroke="rgba(231,76,60,0.3)" stroke-width="1"/>
        <text x="220" y="362" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="600" id="fc_status">Bekleme Modu</text>
      </svg>
    </div>
    <div class="panel-scene">
      <div class="panel-label">FİZİKSEL GÖRÜNÜM</div>
      <svg id="fScene" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="420" height="380" fill="#0a1628"/>
        <rect x="250" y="15" width="160" height="190" rx="8" fill="#0d1b2a" stroke="#253545" stroke-width="1"/>
        <text x="330" y="35" text-anchor="middle" fill="#556" font-size="9" font-weight="700">OTOPARK — DOLU</text>
        <rect x="265" y="45" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="292" y="63" text-anchor="middle" fill="#888" font-size="7">1 🚗</text>
        <rect x="340" y="45" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="367" y="63" text-anchor="middle" fill="#888" font-size="7">2 🚗</text>
        <rect x="265" y="85" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="292" y="103" text-anchor="middle" fill="#888" font-size="7">3 🚗</text>
        <rect x="340" y="85" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="367" y="103" text-anchor="middle" fill="#888" font-size="7">4 🚗</text>
        <rect x="265" y="125" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="292" y="143" text-anchor="middle" fill="#888" font-size="7">5 🚗</text>
        <rect x="275" y="165" width="100" height="22" rx="4" fill="#081420" stroke="#e74c3c" stroke-width="1"/>
        <text x="325" y="180" text-anchor="middle" fill="#e74c3c" font-size="9" font-weight="700">Doluluk: 5/5</text>
        <!-- Road -->
        <rect x="0" y="240" width="420" height="60" class="road-surface"/>
        <line x1="0" y1="270" x2="420" y2="270" class="road-line"/>
        <text x="80" y="235" text-anchor="middle" fill="#3498db" font-size="8" font-weight="600">GİRİŞ →</text>
        <!-- Sensor -->
        <rect x="140" y="225" width="8" height="75" rx="2" fill="#253545"/>
        <circle cx="144" cy="235" r="4" id="fs_sensorDot" class="sensor-inactive"/>
        <text x="144" y="310" text-anchor="middle" fill="#556" font-size="7">Sensör</text>
        <!-- Barrier -->
        <rect x="220" y="215" width="10" height="85" rx="2" fill="#3d3d5c"/>
        <g id="fs_barrier" style="transform-origin:225px 220px;">
          <rect x="225" y="217" width="90" height="6" rx="2" fill="#e74c3c"/>
          <rect x="225" y="217" width="12" height="6" rx="2" fill="#f39c12"/>
        </g>
        <!-- LEDs -->
        <circle cx="232" cy="340" r="6" id="fs_greenLed" class="led-off"/>
        <circle cx="250" cy="340" r="6" id="fs_redLed" class="led-off"/>
        <text x="232" y="355" text-anchor="middle" fill="#556" font-size="5">Y</text>
        <text x="250" y="355" text-anchor="middle" fill="#556" font-size="5">K</text>
        <!-- Car -->
        <g id="fs_car">
          <rect x="30" y="250" width="65" height="28" rx="8" fill="#e74c3c" opacity="0"/>
          <rect x="38" y="242" width="42" height="14" rx="5" fill="#c0392b" opacity="0"/>
          <circle cx="46" cy="282" r="5" fill="#111" opacity="0"/>
          <circle cx="82" cy="282" r="5" fill="#111" opacity="0"/>
        </g>
        <!-- Warning -->
        <g id="fs_warning" opacity="0">
          <rect x="80" y="130" width="180" height="55" rx="10" fill="rgba(231,76,60,0.25)" stroke="#e74c3c" stroke-width="2"/>
          <text x="170" y="155" text-anchor="middle" fill="#ff6b6b" font-size="14" font-weight="800">⛔ OTOPARK DOLU</text>
          <text x="170" y="175" text-anchor="middle" fill="#ff6b6b" font-size="9">Giriş Engellendi</text>
        </g>
      </svg>
    </div>
  </div>
  <div class="anim-bottom-bar">
    <div class="anim-step-badge" id="f_stepBadge">ADIM 1 / 5</div>
    <div class="anim-step-desc" id="f_stepDesc">Otopark tamamen dolu (5/5). Bekleme modu.</div>
    <div style="margin-left:auto;color:#556;font-size:0.72rem;">↓ ok ile ilerle</div>
  </div>
</div>

<!-- SLAYT 12: ANİMASYON ÇIKIŞ — SPLIT PANEL -->
<div class="slide slide-dark" data-anim="exit" data-notes="Çıkış senaryosu. Araç çıkış sensörünü tetikler, bariyer açılır, araç çıkar, sayaç azalır.">
  <div class="slide-number" style="color:var(--accent);">SLAYT 12</div>
  <h2 class="slide-title" style="color:#fff;border-color:var(--accent);margin-bottom:4px;font-size:1.6rem;">Animasyon: Çıkış Senaryosu</h2>
  <div class="split-anim">
    <div class="panel-circuit">
      <div class="panel-label">DEVRE ŞEMASI</div>
      <svg id="xCircuit" viewBox="0 0 440 380" xmlns="http://www.w3.org/2000/svg">
        <!-- RA1 (pin18, RIGHT side y=72) ← Çıkış Sensörü -->
        <path d="M295,72 L300,72 L300,10" fill="none" id="xc_w_ra1" class="wire-idle" stroke-width="1"/>
        <circle cx="300" cy="6" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="xc_sensorOut"/>
        <text x="296" y="9" text-anchor="end" fill="#89b4fa" font-size="6" font-weight="600">Çıkış Sensörü (RA1)</text>
        <!-- RA2 (pin1, LEFT side y=72) ← Açık Limit SW -->
        <path d="M155,72 L60,72" fill="none" id="xc_w_ra2" class="wire-idle" stroke-width="1"/>
        <circle cx="55" cy="72" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="xc_limOpen"/>
        <text x="50" y="72" text-anchor="end" fill="#89b4fa" font-size="6.5" font-weight="600">Açık Limit SW</text>
        <!-- RA3 (pin2, LEFT side y=84) ← Kapalı Limit SW -->
        <path d="M155,84 L60,84" fill="none" id="xc_w_ra3" class="wire-idle" stroke-width="1"/>
        <circle cx="55" cy="84" r="4" fill="#0d1b2a" stroke="#3498db" stroke-width="1" id="xc_limClose"/>
        <text x="50" y="84" text-anchor="end" fill="#89b4fa" font-size="6.5" font-weight="600">Kapalı Limit SW</text>
        <!-- RA0 (pin17, RIGHT y=84) ← Giriş Sensörü (pasif) -->
        <path d="M295,84 L320,84 L320,10" fill="none" stroke="#334" stroke-width="0.5" stroke-dasharray="2 2"/>
        <text x="326" y="9" fill="#445" font-size="5">Giriş (pasif)</text>
        <!-- PIC DIP-18 -->
        <rect x="155" y="30" width="140" height="165" rx="4" fill="#0a1929" stroke="#00b894" stroke-width="2" id="xc_pic"/>
        <circle cx="225" cy="30" r="5" fill="#0a1929" stroke="#00b894" stroke-width="1"/>
        <text x="225" y="50" text-anchor="middle" fill="#00b894" font-size="10" font-weight="800">PIC16F84A</text>
        <line x1="155" y1="56" x2="295" y2="56" stroke="#00b894" stroke-width="0.3" opacity="0.3"/>
        <text x="163" y="72" fill="#89b4fa" font-size="6.5">1  RA2</text>
        <text x="163" y="84" fill="#89b4fa" font-size="6.5">2  RA3</text>
        <text x="163" y="96" fill="#7f8c8d" font-size="6.5">3  RA4</text>
        <text x="163" y="108" fill="#f39c12" font-size="6.5">4  MCLR↑</text>
        <text x="163" y="120" fill="#7f8c8d" font-size="6.5">5  VSS</text>
        <text x="163" y="132" fill="#a6e3a1" font-size="6.5">6  RB0→IN1</text>
        <text x="163" y="144" fill="#a6e3a1" font-size="6.5">7  RB1→IN2</text>
        <text x="163" y="156" fill="#a6e3a1" font-size="6.5">8  RB2→LED</text>
        <text x="163" y="168" fill="#a6e3a1" font-size="6.5">9  RB3→LED</text>
        <text x="288" y="72" fill="#89b4fa" font-size="6.5" text-anchor="end">RA1  18</text>
        <text x="288" y="84" fill="#89b4fa" font-size="6.5" text-anchor="end">RA0  17</text>
        <text x="288" y="96" fill="#7f8c8d" font-size="6.5" text-anchor="end">OSC1  16</text>
        <text x="288" y="108" fill="#7f8c8d" font-size="6.5" text-anchor="end">OSC2  15</text>
        <text x="288" y="120" fill="#e74c3c" font-size="6.5" text-anchor="end">VDD  14</text>
        <text x="288" y="132" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB7  13</text>
        <text x="288" y="144" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB6  12</text>
        <text x="288" y="156" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB5  11</text>
        <text x="288" y="168" fill="#7f8c8d" font-size="6.5" text-anchor="end">RB4  10</text>
        <rect x="185" y="175" width="80" height="18" rx="3" fill="#081420" stroke="#f39c12" stroke-width="0.8"/>
        <text x="225" y="188" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700" id="xc_counter">Sayaç: 5/5</text>
        <!-- Wires: PIC RB → L293D IN -->
        <path d="M155,132 L140,132 L140,57 L325,57" fill="none" id="xc_w_rb0" class="wire-idle" stroke-width="1"/>
        <path d="M155,144 L130,144 L130,107 L325,107" fill="none" id="xc_w_rb1" class="wire-idle" stroke-width="1"/>
        <!-- RB2 → Yeşil LED wire -->
        <path d="M155,156 L120,156 L120,255 L310,255" fill="none" id="xc_w_rb2" class="wire-idle" stroke-width="1"/>
        <!-- RB3 → Kırmızı LED wire -->
        <path d="M155,168 L110,168 L110,305 L310,305" fill="none" stroke="#334" stroke-width="0.5" stroke-dasharray="2 2"/>
        <!-- L293D DIP-16 -->
        <rect x="325" y="15" width="110" height="130" rx="3" fill="#0d1b2a" stroke="#f39c12" stroke-width="1.5"/>
        <circle cx="380" cy="15" r="4" fill="#0d1b2a" stroke="#f39c12" stroke-width="0.8"/>
        <text x="380" y="30" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="800">L293D</text>
        <line x1="325" y1="34" x2="435" y2="34" stroke="#f39c12" stroke-width="0.3" opacity="0.3"/>
        <text x="332" y="47" fill="#a6e3a1" font-size="5.5">1 EN1,2</text>
        <text x="332" y="57" fill="#a6e3a1" font-size="5.5">2 IN1←RB0</text>
        <text x="332" y="67" fill="#f39c12" font-size="5.5">3 OUT1→M+</text>
        <text x="332" y="77" fill="#556" font-size="5.5">4 GND</text>
        <text x="332" y="87" fill="#556" font-size="5.5">5 GND</text>
        <text x="332" y="97" fill="#f39c12" font-size="5.5">6 OUT2→M−</text>
        <text x="332" y="107" fill="#a6e3a1" font-size="5.5">7 IN2←RB1</text>
        <text x="332" y="117" fill="#e74c3c" font-size="5.5">8 VCC2</text>
        <text x="430" y="47" fill="#e74c3c" font-size="5.5" text-anchor="end">VCC1 16</text>
        <text x="430" y="57" fill="#556" font-size="5.5" text-anchor="end">IN4 15</text>
        <text x="430" y="67" fill="#556" font-size="5.5" text-anchor="end">OUT4 14</text>
        <text x="430" y="77" fill="#556" font-size="5.5" text-anchor="end">GND 13</text>
        <text x="430" y="87" fill="#556" font-size="5.5" text-anchor="end">GND 12</text>
        <text x="430" y="97" fill="#556" font-size="5.5" text-anchor="end">OUT3 11</text>
        <text x="430" y="107" fill="#556" font-size="5.5" text-anchor="end">IN3 10</text>
        <text x="430" y="117" fill="#556" font-size="5.5" text-anchor="end">EN3,4 9</text>
        <!-- OUT → Motor wires -->
        <path d="M325,67 L312,67 L312,168 L365,168" fill="none" stroke="#f39c12" stroke-width="1" stroke-dasharray="3 2"/>
        <path d="M325,97 L305,97 L305,175 L365,175" fill="none" stroke="#f39c12" stroke-width="1" stroke-dasharray="3 2"/>
        <text x="308" y="120" fill="#f39c12" font-size="5" transform="rotate(-90,308,120)">OUT1</text>
        <text x="301" y="140" fill="#f39c12" font-size="5" transform="rotate(-90,301,140)">OUT2</text>
        <!-- Motor -->
        <circle cx="380" cy="180" r="22" fill="#0d1b2a" stroke="#f39c12" stroke-width="1.5" id="xc_motor"/>
        <text x="380" y="177" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700">DC</text>
        <text x="380" y="188" text-anchor="middle" fill="#f39c12" font-size="8" font-weight="700">Motor</text>
        <line x1="387" y1="158" x2="395" y2="145" id="xc_w_motor" class="wire-idle" stroke-width="1"/>
        <g id="xc_motorSpin" opacity="0"><text x="380" y="212" text-anchor="middle" fill="#27ae60" font-size="12">⟳</text></g>
        <!-- Bariyer -->
        <rect x="355" y="220" width="50" height="18" rx="3" fill="#0d1b2a" stroke="#7f8c8d" stroke-width="1"/>
        <text x="380" y="232" text-anchor="middle" fill="#7f8c8d" font-size="6.5" font-weight="600">BARİYER</text>
        <line x1="380" y1="202" x2="380" y2="220" stroke="#555" stroke-width="1" stroke-dasharray="3 2"/>
        <!-- Green LED -->
        <line x1="330" y1="255" x2="350" y2="255" stroke="#27ae60" stroke-width="1"/>
        <rect x="310" y="250" width="16" height="10" rx="1" fill="none" stroke="#556" stroke-width="0.8"/>
        <text x="318" y="270" text-anchor="middle" fill="#334" font-size="5">330Ω</text>
        <circle cx="365" cy="255" r="12" id="xc_greenLed" class="led-off"/>
        <text x="365" y="259" text-anchor="middle" fill="#555" font-size="7">LED</text>
        <text x="365" y="278" text-anchor="middle" fill="#556" font-size="7">Yeşil (RB2)</text>
        <!-- Red LED -->
        <line x1="330" y1="305" x2="350" y2="305" stroke="#e74c3c" stroke-width="1"/>
        <rect x="310" y="300" width="16" height="10" rx="1" fill="none" stroke="#556" stroke-width="0.8"/>
        <text x="318" y="320" text-anchor="middle" fill="#334" font-size="5">330Ω</text>
        <circle cx="365" cy="305" r="12" id="xc_redLed" class="led-off"/>
        <text x="365" y="309" text-anchor="middle" fill="#555" font-size="7">LED</text>
        <text x="365" y="328" text-anchor="middle" fill="#556" font-size="7">Kırmızı (RB3)</text>
        <!-- Status -->
        <rect x="130" y="345" width="180" height="25" rx="5" fill="rgba(243,156,18,0.1)" stroke="rgba(243,156,18,0.3)" stroke-width="1"/>
        <text x="220" y="362" text-anchor="middle" fill="#f39c12" font-size="9" font-weight="600" id="xc_status">Bekleme Modu</text>
      </svg>
    </div>
    <div class="panel-scene">
      <div class="panel-label">FİZİKSEL GÖRÜNÜM</div>
      <svg id="xScene" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="420" height="380" fill="#0a1628"/>
        <rect x="250" y="15" width="160" height="190" rx="8" fill="#0d1b2a" stroke="#253545" stroke-width="1"/>
        <text x="330" y="35" text-anchor="middle" fill="#556" font-size="9" font-weight="700" id="xs_parkLabel">OTOPARK — DOLU</text>
        <rect x="265" y="45" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="292" y="63" text-anchor="middle" fill="#888" font-size="7">1 🚗</text>
        <rect x="340" y="45" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="367" y="63" text-anchor="middle" fill="#888" font-size="7">2 🚗</text>
        <rect x="265" y="85" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="292" y="103" text-anchor="middle" fill="#888" font-size="7">3 🚗</text>
        <rect x="340" y="85" width="55" height="28" rx="3" class="spot-filled" stroke-width="0.8"/>
        <text x="367" y="103" text-anchor="middle" fill="#888" font-size="7">4 🚗</text>
        <rect x="265" y="125" width="55" height="28" rx="3" stroke-width="0.8" id="xs_spot5" class="spot-filled"/>
        <text x="292" y="143" text-anchor="middle" fill="#888" font-size="7" id="xs_spot5txt">5 🚗</text>
        <rect x="275" y="165" width="100" height="22" rx="4" fill="#081420" stroke="#f39c12" stroke-width="1"/>
        <text x="325" y="180" text-anchor="middle" fill="#f39c12" font-size="9" font-weight="700" id="xs_counter">Doluluk: 5/5</text>
        <!-- Road -->
        <rect x="0" y="240" width="420" height="60" class="road-surface"/>
        <line x1="0" y1="270" x2="420" y2="270" class="road-line"/>
        <text x="360" y="235" text-anchor="middle" fill="#9b59b6" font-size="8" font-weight="600">← ÇIKIŞ</text>
        <!-- Exit sensor -->
        <rect x="300" y="225" width="8" height="75" rx="2" fill="#253545"/>
        <circle cx="304" cy="235" r="4" id="xs_sensorDot" class="sensor-inactive"/>
        <text x="304" y="310" text-anchor="middle" fill="#556" font-size="7">Çıkış Sensör</text>
        <!-- Barrier -->
        <rect x="220" y="215" width="10" height="85" rx="2" fill="#3d3d5c"/>
        <g id="xs_barrier" style="transform-origin:225px 220px;transition:transform 0.8s ease;">
          <rect x="225" y="217" width="90" height="6" rx="2" fill="#e74c3c"/>
          <rect x="225" y="217" width="12" height="6" rx="2" fill="#f39c12"/>
        </g>
        <circle cx="232" cy="340" r="6" id="xs_greenLed" class="led-off"/>
        <text x="232" y="355" text-anchor="middle" fill="#556" font-size="5">Y</text>
        <!-- Car -->
        <g id="xs_car" style="transition:transform 1s ease;">
          <rect x="330" y="250" width="65" height="28" rx="8" fill="#9b59b6" opacity="0"/>
          <rect x="338" y="242" width="42" height="14" rx="5" fill="#8e44ad" opacity="0"/>
          <circle cx="346" cy="282" r="5" fill="#111" opacity="0"/>
          <circle cx="382" cy="282" r="5" fill="#111" opacity="0"/>
        </g>
      </svg>
    </div>
  </div>
  <div class="anim-bottom-bar">
    <div class="anim-step-badge" id="x_stepBadge">ADIM 1 / 7</div>
    <div class="anim-step-desc" id="x_stepDesc">Otopark dolu (5/5). Bir araç çıkmak istiyor.</div>
    <div style="margin-left:auto;color:#556;font-size:0.72rem;">↓ ok ile ilerle</div>
  </div>
</div>
`;
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('presentation').insertAdjacentHTML('beforeend', slidesHTML_5);
});
