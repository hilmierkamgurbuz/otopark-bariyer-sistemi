const slidesHTML_2 = `
<!-- SLAYT 4: BLOK DİYAGRAM -->
<div class="slide slide-dark" data-notes="Blok diyagramda sistemin genel yapısı görülmektedir. Sol tarafta giriş elemanları, ortada PIC16F84A, sağda çıkış elemanları yer alır.">
  <div class="slide-number" style="color:var(--accent);">SLAYT 04</div>
  <h2 class="slide-title" style="color:#fff;border-color:var(--accent);">Sistem Blok Diyagramı</h2>
  <p class="slide-subtitle">Bileşenler arası sinyal akışı</p>
  <div class="anim-container" style="flex:1;">
    <svg viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="150" height="50" rx="8" fill="#1a3a5c" stroke="#3498db" stroke-width="1.5"/>
      <text x="105" y="60" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Giriş Sensörü</text>
      <rect x="30" y="100" width="150" height="50" rx="8" fill="#1a3a5c" stroke="#3498db" stroke-width="1.5"/>
      <text x="105" y="130" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Çıkış Sensörü</text>
      <rect x="30" y="170" width="150" height="50" rx="8" fill="#1a3a5c" stroke="#3498db" stroke-width="1.5"/>
      <text x="105" y="200" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Açık Limit SW</text>
      <rect x="30" y="240" width="150" height="50" rx="8" fill="#1a3a5c" stroke="#3498db" stroke-width="1.5"/>
      <text x="105" y="270" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Kapalı Limit SW</text>
      <text x="105" y="320" text-anchor="middle" fill="#3498db" font-size="11" font-weight="600">GİRİŞLER (PORTA)</text>
      <defs>
        <marker id="arB" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#3498db"/></marker>
        <marker id="arG" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#27ae60"/></marker>
        <marker id="arY" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f39c12"/></marker>
      </defs>
      <line x1="180" y1="55" x2="320" y2="180" stroke="#3498db" stroke-width="1.5" marker-end="url(#arB)"/>
      <line x1="180" y1="125" x2="320" y2="195" stroke="#3498db" stroke-width="1.5" marker-end="url(#arB)"/>
      <line x1="180" y1="195" x2="320" y2="210" stroke="#3498db" stroke-width="1.5" marker-end="url(#arB)"/>
      <line x1="180" y1="265" x2="320" y2="225" stroke="#3498db" stroke-width="1.5" marker-end="url(#arB)"/>
      <rect x="320" y="140" width="200" height="120" rx="12" fill="#0d2137" stroke="#00b894" stroke-width="2"/>
      <text x="420" y="185" text-anchor="middle" fill="#00b894" font-size="16" font-weight="800">PIC16F84A</text>
      <text x="420" y="208" text-anchor="middle" fill="#7f8c8d" font-size="11">Mikrodenetleyici</text>
      <text x="420" y="245" text-anchor="middle" fill="#f39c12" font-size="10">[ Araç Sayacı ]</text>
      <line x1="520" y1="175" x2="620" y2="55" stroke="#27ae60" stroke-width="1.5" marker-end="url(#arG)"/>
      <line x1="520" y1="200" x2="620" y2="185" stroke="#27ae60" stroke-width="1.5" marker-end="url(#arG)"/>
      <line x1="520" y1="225" x2="620" y2="285" stroke="#27ae60" stroke-width="1.5" marker-end="url(#arG)"/>
      <line x1="520" y1="240" x2="620" y2="345" stroke="#27ae60" stroke-width="1.5" marker-end="url(#arG)"/>
      <rect x="620" y="30" width="150" height="50" rx="8" fill="#1a3a5c" stroke="#27ae60" stroke-width="1.5"/>
      <text x="695" y="52" text-anchor="middle" fill="#fff" font-size="12" font-weight="600">L293D Motor</text>
      <text x="695" y="68" text-anchor="middle" fill="#fff" font-size="12" font-weight="600">Sürücü</text>
      <rect x="620" y="160" width="150" height="50" rx="8" fill="#0d3320" stroke="#27ae60" stroke-width="1.5"/>
      <text x="695" y="190" text-anchor="middle" fill="#2ecc71" font-size="13" font-weight="600">Yeşil LED</text>
      <rect x="620" y="260" width="150" height="50" rx="8" fill="#3d1515" stroke="#e74c3c" stroke-width="1.5"/>
      <text x="695" y="290" text-anchor="middle" fill="#ff6b6b" font-size="13" font-weight="600">Kırmızı LED</text>
      <line x1="770" y1="55" x2="810" y2="55" stroke="#f39c12" stroke-width="1.5" marker-end="url(#arY)"/>
      <rect x="810" y="30" width="70" height="50" rx="8" fill="#2c1a00" stroke="#f39c12" stroke-width="1.5"/>
      <text x="845" y="52" text-anchor="middle" fill="#f39c12" font-size="11" font-weight="600">DC</text>
      <text x="845" y="68" text-anchor="middle" fill="#f39c12" font-size="11" font-weight="600">Motor</text>
      <text x="695" y="340" text-anchor="middle" fill="#27ae60" font-size="11" font-weight="600">ÇIKIŞLAR (PORTB)</text>
      <rect x="620" y="330" width="150" height="40" rx="8" fill="#1a3a5c" stroke="#f39c12" stroke-width="1.5"/>
      <text x="695" y="355" text-anchor="middle" fill="#f39c12" font-size="12" font-weight="600">Bariyer Kolu</text>
      <line x1="845" y1="80" x2="770" y2="340" stroke="#f39c12" stroke-width="1" stroke-dasharray="5 3"/>
    </svg>
  </div>
</div>

<!-- SLAYT 5: PIN BAĞLANTI TABLOSU -->
<div class="slide slide-content" data-notes="PIC16F84A'nın PORTA pinleri giriş, PORTB pinleri çıkış olarak yapılandırılmıştır. TRISA=FFh, TRISB=00h olarak ayarlanır.">
  <div class="slide-number">SLAYT 05</div>
  <h2 class="slide-title">Pin Bağlantı Tablosu</h2>
  <p class="slide-subtitle">PIC16F84A giriş/çıkış pin atamaları — TRISA = 0xFF, TRISB = 0x00</p>
  <div style="flex:1;overflow:auto;">
    <table class="tech-table">
      <thead><tr><th>Pin</th><th>Port</th><th>Yön</th><th>Bağlantı</th><th>Açıklama</th></tr></thead>
      <tbody>
        <tr><td><strong>RA0</strong></td><td>PORTA.0</td><td class="pin-input">GİRİŞ</td><td>Giriş Sensörü</td><td>Araç girişi algılar (aktif=1)</td></tr>
        <tr><td><strong>RA1</strong></td><td>PORTA.1</td><td class="pin-input">GİRİŞ</td><td>Çıkış Sensörü</td><td>Araç çıkışı algılar (aktif=1)</td></tr>
        <tr><td><strong>RA2</strong></td><td>PORTA.2</td><td class="pin-input">GİRİŞ</td><td>Açık Limit Switch</td><td>Bariyer tam açık (aktif=1)</td></tr>
        <tr><td><strong>RA3</strong></td><td>PORTA.3</td><td class="pin-input">GİRİŞ</td><td>Kapalı Limit Switch</td><td>Bariyer tam kapalı (aktif=1)</td></tr>
        <tr><td><strong>RB0</strong></td><td>PORTB.0</td><td class="pin-output">ÇIKIŞ</td><td>L293D IN1</td><td>Motor yön kontrolü — bit 1</td></tr>
        <tr><td><strong>RB1</strong></td><td>PORTB.1</td><td class="pin-output">ÇIKIŞ</td><td>L293D IN2</td><td>Motor yön kontrolü — bit 2</td></tr>
        <tr><td><strong>RB2</strong></td><td>PORTB.2</td><td class="pin-output">ÇIKIŞ</td><td>Yeşil LED</td><td>Giriş serbest göstergesi</td></tr>
        <tr><td><strong>RB3</strong></td><td>PORTB.3</td><td class="pin-output">ÇIKIŞ</td><td>Kırmızı LED</td><td>Otopark dolu göstergesi</td></tr>
      </tbody>
    </table>
    <div class="highlight-box" style="margin-top:20px;display:flex;gap:30px;flex-wrap:wrap;">
      <div><strong style="color:var(--blue);">PORTA:</strong> <code style="background:#e8f4fd;padding:3px 8px;border-radius:4px;">TRISA=0xFF</code> → Tüm pinler giriş</div>
      <div><strong style="color:var(--green);">PORTB:</strong> <code style="background:#f0faf4;padding:3px 8px;border-radius:4px;">TRISB=0x00</code> → Tüm pinler çıkış</div>
      <div><strong style="color:var(--yellow);">Bank:</strong> <code style="background:#fef9e7;padding:3px 8px;border-radius:4px;">STATUS,RP0=1</code> → Bank 1</div>
    </div>
  </div>
</div>

<!-- SLAYT 6: DETAYLI DEVRE ŞEMASI -->
<div class="slide slide-dark" data-notes="Detaylı devre şemasında PIC16F84A'nın 18 pinli DIP paketi, osilatör, güç bağlantıları, pull-down dirençleri, L293D entegresi ve LED akım sınırlama dirençleri gösterilmektedir.">
  <div class="slide-number" style="color:var(--accent);">SLAYT 06</div>
  <h2 class="slide-title" style="color:#fff;border-color:var(--accent);">Devre Şeması</h2>
  <p class="slide-subtitle">PIC16F84A merkezi kontrol devresi — tüm bağlantılar</p>
  <div class="anim-container" style="flex:1;">
    <svg viewBox="0 0 950 520" xmlns="http://www.w3.org/2000/svg">
      <!-- PIC16F84A DIP-18 -->
      <rect x="320" y="60" width="210" height="280" rx="6" fill="#0a1929" stroke="#00b894" stroke-width="2.5"/>
      <text x="425" y="90" text-anchor="middle" fill="#00b894" font-size="15" font-weight="800">PIC16F84A</text>
      <line x1="320" y1="100" x2="530" y2="100" stroke="#00b894" stroke-width="0.5" opacity="0.3"/>
      <!-- Left pins -->
      <text x="335" y="125" fill="#89b4fa" font-size="9" font-weight="600">1  RA2</text>
      <text x="335" y="150" fill="#89b4fa" font-size="9" font-weight="600">2  RA3</text>
      <text x="335" y="175" fill="#89b4fa" font-size="9" font-weight="600">3  RA4/T0CKI</text>
      <text x="335" y="200" fill="#f39c12" font-size="9" font-weight="600">4  MCLR</text>
      <text x="335" y="225" fill="#7f8c8d" font-size="9" font-weight="600">5  VSS (GND)</text>
      <text x="335" y="250" fill="#89b4fa" font-size="9" font-weight="600">6  RB0</text>
      <text x="335" y="275" fill="#89b4fa" font-size="9" font-weight="600">7  RB1</text>
      <text x="335" y="300" fill="#89b4fa" font-size="9" font-weight="600">8  RB2</text>
      <text x="335" y="325" fill="#89b4fa" font-size="9" font-weight="600">9  RB3</text>
      <!-- Right pins -->
      <text x="517" y="125" fill="#89b4fa" font-size="9" font-weight="600" text-anchor="end">RA1  18</text>
      <text x="517" y="150" fill="#89b4fa" font-size="9" font-weight="600" text-anchor="end">RA0  17</text>
      <text x="517" y="175" fill="#7f8c8d" font-size="9" font-weight="600" text-anchor="end">OSC1  16</text>
      <text x="517" y="200" fill="#7f8c8d" font-size="9" font-weight="600" text-anchor="end">OSC2  15</text>
      <text x="517" y="225" fill="#e74c3c" font-size="9" font-weight="600" text-anchor="end">VDD (+5V)  14</text>
      <text x="517" y="250" fill="#89b4fa" font-size="9" font-weight="600" text-anchor="end">RB7  13</text>
      <text x="517" y="275" fill="#89b4fa" font-size="9" font-weight="600" text-anchor="end">RB6  12</text>
      <text x="517" y="300" fill="#89b4fa" font-size="9" font-weight="600" text-anchor="end">RB5  11</text>
      <text x="517" y="325" fill="#89b4fa" font-size="9" font-weight="600" text-anchor="end">RB4  10</text>
      <!-- Notch -->
      <circle cx="425" cy="60" r="8" fill="#0a1929" stroke="#00b894" stroke-width="1"/>
      <!-- Input connections -->
      <!-- RA0 (pin17) - Giriş Sensörü -->
      <line x1="530" y1="148" x2="610" y2="148" stroke="#3498db" stroke-width="1.5"/>
      <rect x="610" y="135" width="100" height="26" rx="5" fill="#162338" stroke="#3498db" stroke-width="1.2"/>
      <text x="660" y="152" text-anchor="middle" fill="#3498db" font-size="8" font-weight="600">Giriş Sensörü</text>
      <!-- Pull-down R -->
      <line x1="570" y1="148" x2="570" y2="165" stroke="#7f8c8d" stroke-width="1"/>
      <rect x="565" y="165" width="10" height="18" rx="1" fill="none" stroke="#7f8c8d" stroke-width="1"/>
      <text x="585" y="177" fill="#556" font-size="6">10kΩ</text>
      <line x1="570" y1="183" x2="570" y2="192" stroke="#7f8c8d" stroke-width="1"/>
      <text x="570" y="200" text-anchor="middle" fill="#556" font-size="7">GND</text>
      <!-- RA1 (pin18) - Çıkış Sensörü -->
      <line x1="530" y1="123" x2="610" y2="123" stroke="#3498db" stroke-width="1.5"/>
      <rect x="610" y="110" width="100" height="26" rx="5" fill="#162338" stroke="#3498db" stroke-width="1.2"/>
      <text x="660" y="127" text-anchor="middle" fill="#3498db" font-size="8" font-weight="600">Çıkış Sensörü</text>
      <!-- RA2 (pin1) - Açık Limit SW -->
      <line x1="320" y1="123" x2="230" y2="123" stroke="#3498db" stroke-width="1.5"/>
      <rect x="120" y="110" width="110" height="26" rx="5" fill="#162338" stroke="#3498db" stroke-width="1.2"/>
      <text x="175" y="127" text-anchor="middle" fill="#3498db" font-size="8" font-weight="600">Açık Limit SW</text>
      <line x1="280" y1="123" x2="280" y2="140" stroke="#7f8c8d" stroke-width="1"/>
      <rect x="275" y="140" width="10" height="16" rx="1" fill="none" stroke="#7f8c8d" stroke-width="1"/>
      <text x="295" y="151" fill="#556" font-size="6">10kΩ</text>
      <!-- RA3 (pin2) - Kapalı Limit SW -->
      <line x1="320" y1="148" x2="230" y2="148" stroke="#3498db" stroke-width="1.5"/>
      <rect x="120" y="148" width="110" height="26" rx="5" fill="#162338" stroke="#3498db" stroke-width="1.2"/>
      <text x="175" y="165" text-anchor="middle" fill="#3498db" font-size="8" font-weight="600">Kapalı Limit SW</text>
      <!-- RB0 (pin6) → L293D IN1 (pin2, LEFT edge) -->
      <path d="M320,250 L265,250 L265,205 L45,205 L45,272 L55,272" fill="none" stroke="#27ae60" stroke-width="1.5"/>
      <!-- RB1 (pin7) → L293D IN2 (pin7, LEFT edge) -->
      <path d="M320,275 L260,275 L260,200 L38,200 L38,352 L55,352" fill="none" stroke="#27ae60" stroke-width="1.5"/>
      <!-- L293D DIP-16 -->
      <rect x="55" y="210" width="190" height="210" rx="4" fill="#0d1b2a" stroke="#f39c12" stroke-width="2"/>
      <circle cx="150" cy="210" r="6" fill="#0d1b2a" stroke="#f39c12" stroke-width="1"/>
      <text x="150" y="232" text-anchor="middle" fill="#f39c12" font-size="12" font-weight="800">L293D</text>
      <line x1="55" y1="238" x2="245" y2="238" stroke="#f39c12" stroke-width="0.3" opacity="0.3"/>
      <!-- Left pins 1-8 -->
      <text x="65" y="256" fill="#a6e3a1" font-size="7" font-weight="600">1  EN1,2 (VCC)</text>
      <text x="65" y="272" fill="#a6e3a1" font-size="7" font-weight="600">2  IN1 ← RB0</text>
      <!-- IN1 connection dot (LEFT edge) -->
      <circle cx="55" cy="272" r="3" fill="#27ae60"/>
      <text x="65" y="288" fill="#f39c12" font-size="7" font-weight="600">3  OUT1 → M+</text>
      <text x="65" y="304" fill="#7f8c8d" font-size="7">4  GND</text>
      <text x="65" y="320" fill="#7f8c8d" font-size="7">5  GND</text>
      <text x="65" y="336" fill="#f39c12" font-size="7" font-weight="600">6  OUT2 → M−</text>
      <text x="65" y="352" fill="#a6e3a1" font-size="7" font-weight="600">7  IN2 ← RB1</text>
      <text x="65" y="368" fill="#e74c3c" font-size="7" font-weight="600">8  VCC2 (Motor)</text>
      <!-- Right pins 16-9 -->
      <text x="237" y="256" fill="#e74c3c" font-size="7" font-weight="600" text-anchor="end">VCC1  16</text>
      <text x="237" y="272" fill="#7f8c8d" font-size="7" text-anchor="end">IN4  15</text>
      <text x="237" y="288" fill="#7f8c8d" font-size="7" text-anchor="end">OUT4  14</text>
      <text x="237" y="304" fill="#7f8c8d" font-size="7" text-anchor="end">GND  13</text>
      <text x="237" y="320" fill="#7f8c8d" font-size="7" text-anchor="end">GND  12</text>
      <text x="237" y="336" fill="#7f8c8d" font-size="7" text-anchor="end">OUT3  11</text>
      <text x="237" y="352" fill="#7f8c8d" font-size="7" text-anchor="end">IN3  10</text>
      <text x="237" y="368" fill="#7f8c8d" font-size="7" text-anchor="end">EN3,4  9</text>
      <!-- IN2 connection dot (LEFT edge) -->
      <circle cx="55" cy="352" r="3" fill="#27ae60"/>
      <!-- Kullanılmayan pinler grileştirildi -->
      <text x="150" y="395" text-anchor="middle" fill="#556" font-size="7">Kanal 2 (pin 9-15) kullanılmıyor</text>
      <!-- OUT1(pin3)→Motor+ wire -->
      <path d="M55,288 L35,288 L35,460 L122,460" fill="none" stroke="#f39c12" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="30" y="380" fill="#f39c12" font-size="7" transform="rotate(-90,30,380)">OUT1 (M+)</text>
      <!-- OUT2(pin6)→Motor- wire -->
      <path d="M55,336 L25,336 L25,480 L122,480" fill="none" stroke="#f39c12" stroke-width="1.5" stroke-dasharray="4 3"/>
      <text x="20" y="415" fill="#f39c12" font-size="7" transform="rotate(-90,20,415)">OUT2 (M−)</text>
      <!-- DC Motor -->
      <circle cx="150" cy="470" r="28" fill="#1a1a2e" stroke="#f39c12" stroke-width="2"/>
      <text x="150" y="467" text-anchor="middle" fill="#f39c12" font-size="10" font-weight="700">DC</text>
      <text x="150" y="480" text-anchor="middle" fill="#f39c12" font-size="10" font-weight="700">Motor</text>
      <text x="150" y="510" text-anchor="middle" fill="#7f8c8d" font-size="7">↔ Bariyer Mekanizması</text>
      <!-- RB2 (pin8) -> Yeşil LED -->
      <line x1="320" y1="298" x2="260" y2="298" stroke="#27ae60" stroke-width="1"/>
      <line x1="260" y1="298" x2="260" y2="365" stroke="#27ae60" stroke-width="1"/>
      <line x1="260" y1="365" x2="300" y2="365" stroke="#27ae60" stroke-width="1"/>
      <!-- LED R -->
      <rect x="300" y="360" width="18" height="10" rx="1" fill="none" stroke="#7f8c8d" stroke-width="1"/>
      <text x="309" y="380" text-anchor="middle" fill="#556" font-size="6">330Ω</text>
      <line x1="318" y1="365" x2="335" y2="365" stroke="#27ae60" stroke-width="1"/>
      <circle cx="350" cy="365" r="12" fill="#0d3320" stroke="#2ecc71" stroke-width="1.5"/>
      <text x="350" y="369" text-anchor="middle" fill="#2ecc71" font-size="7" font-weight="700">LED</text>
      <text x="350" y="385" text-anchor="middle" fill="#2ecc71" font-size="7">Yeşil</text>
      <!-- RB3 (pin9) -> Kırmızı LED -->
      <line x1="320" y1="323" x2="280" y2="323" stroke="#e74c3c" stroke-width="1"/>
      <line x1="280" y1="323" x2="280" y2="400" stroke="#e74c3c" stroke-width="1"/>
      <line x1="280" y1="400" x2="300" y2="400" stroke="#e74c3c" stroke-width="1"/>
      <rect x="300" y="395" width="18" height="10" rx="1" fill="none" stroke="#7f8c8d" stroke-width="1"/>
      <text x="309" y="415" text-anchor="middle" fill="#556" font-size="6">330Ω</text>
      <line x1="318" y1="400" x2="335" y2="400" stroke="#e74c3c" stroke-width="1"/>
      <circle cx="350" cy="400" r="12" fill="#3d1515" stroke="#e74c3c" stroke-width="1.5"/>
      <text x="350" y="404" text-anchor="middle" fill="#e74c3c" font-size="7" font-weight="700">LED</text>
      <text x="350" y="420" text-anchor="middle" fill="#e74c3c" font-size="7">Kırmızı</text>
      <!-- Osilatör -->
      <line x1="530" y1="173" x2="600" y2="173" stroke="#7f8c8d" stroke-width="1"/>
      <line x1="530" y1="198" x2="600" y2="198" stroke="#7f8c8d" stroke-width="1"/>
      <rect x="600" y="165" width="50" height="40" rx="4" fill="#162338" stroke="#7f8c8d" stroke-width="1"/>
      <text x="625" y="183" text-anchor="middle" fill="#7f8c8d" font-size="8" font-weight="600">4 MHz</text>
      <text x="625" y="196" text-anchor="middle" fill="#556" font-size="7">Kristal</text>
      <!-- 22pF caps -->
      <text x="580" y="215" fill="#556" font-size="6">22pF</text>
      <text x="610" y="215" fill="#556" font-size="6">22pF</text>
      <!-- VDD / VSS -->
      <line x1="530" y1="223" x2="580" y2="223" stroke="#e74c3c" stroke-width="1.5"/>
      <text x="590" y="227" fill="#e74c3c" font-size="9" font-weight="700">+5V</text>
      <line x1="320" y1="223" x2="280" y2="223" stroke="#556" stroke-width="1.5"/>
      <text x="270" y="227" fill="#556" font-size="9" font-weight="700" text-anchor="end">GND</text>
      <!-- MCLR -->
      <line x1="320" y1="198" x2="290" y2="198" stroke="#f39c12" stroke-width="1"/>
      <line x1="290" y1="188" x2="290" y2="208" stroke="#f39c12" stroke-width="1"/>
      <text x="275" y="202" fill="#f39c12" font-size="7" text-anchor="end">MCLR</text>
      <text x="275" y="212" fill="#556" font-size="6" text-anchor="end">+5V (10kΩ)</text>
      <!-- Power supply box -->
      <rect x="750" y="200" width="130" height="60" rx="8" fill="#162338" stroke="#e74c3c" stroke-width="1.5"/>
      <text x="815" y="225" text-anchor="middle" fill="#e74c3c" font-size="11" font-weight="700">GÜÇ KAYNAĞI</text>
      <text x="815" y="245" text-anchor="middle" fill="#7f8c8d" font-size="9">+5V DC Regüle</text>
      <line x1="750" y1="230" x2="610" y2="230" stroke="#e74c3c" stroke-width="1" stroke-dasharray="4 3"/>
      <!-- Sinyal yön etiketleri -->
      <text x="570" y="110" fill="#3498db" font-size="7" font-weight="600">→ GİRİŞ</text>
      <text x="240" y="240" fill="#27ae60" font-size="7" font-weight="600">← ÇIKIŞ</text>
    </svg>
  </div>
</div>
`;
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('presentation').insertAdjacentHTML('beforeend', slidesHTML_2);
});
