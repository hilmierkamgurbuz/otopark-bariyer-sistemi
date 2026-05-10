const slidesHTML_3b = `
<!-- SLAYT 8 BİRLEŞİK: AKIŞ DİYAGRAMI + KOD ANİMASYONU -->
<div class="slide slide-dark" data-anim="flowcode" data-notes="Akış diyagramı ve Assembly kodu eşzamanlı animasyon. Her adımda ilgili akış kutusu ve kod satırları vurgulanır.">
  <div class="slide-number" style="color:var(--accent);">SLAYT 08</div>
  <h2 class="slide-title" style="color:#fff;border-color:var(--accent);margin-bottom:4px;font-size:1.5rem;">Akış Diyagramı & Assembly Kodu</h2>
  <div class="split-anim">
    <div class="panel-circuit">
      <svg id="fcFlow" viewBox="0 -20 440 360" xmlns="http://www.w3.org/2000/svg">
        <defs><marker id="fA" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill="#666"/></marker></defs>
        <!-- BAŞLA -->
        <ellipse cx="110" cy="18" rx="40" ry="13" fill="rgba(0,184,148,0.15)" stroke="#00b894" stroke-width="1.2" id="fc_n_basla"/>
        <text x="110" y="22" text-anchor="middle" fill="#00b894" font-size="9" font-weight="700">BAŞLA</text>
        <line x1="110" y1="31" x2="110" y2="43" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <!-- Port Ayarları -->
        <rect x="45" y="43" width="130" height="24" rx="3" fill="#1a2d47" stroke="#3498db" stroke-width="1.2" id="fc_n_port"/>
        <text x="110" y="59" text-anchor="middle" fill="#fff" font-size="8">TRISA=FF, TRISB=00, CLRF</text>
        <line x1="110" y1="67" x2="110" y2="79" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <!-- Ana Döngü -->
        <rect x="60" y="79" width="100" height="20" rx="3" fill="#0d2137" stroke="#00b894" stroke-width="1" id="fc_n_dongu"/>
        <text x="110" y="93" text-anchor="middle" fill="#00b894" font-size="8" font-weight="600">ANA DÖNGÜ</text>
        <line x1="110" y1="99" x2="110" y2="113" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <!-- RA0? -->
        <polygon points="110,113 165,133 110,153 55,133" fill="#1a2d47" stroke="#3498db" stroke-width="1.2" id="fc_n_ra0"/>
        <text x="110" y="132" text-anchor="middle" fill="#fff" font-size="7.5">RA0=1?</text>
        <text x="110" y="141" text-anchor="middle" fill="#3498db" font-size="6">Giriş Sensör</text>
        <!-- RA0=E → Dolu mu? -->
        <text x="170" y="130" fill="#27ae60" font-size="7">E</text>
        <line x1="165" y1="133" x2="205" y2="133" stroke="#27ae60" stroke-width="0.8" marker-end="url(#fA)"/>
        <polygon points="260,113 315,133 260,153 205,133" fill="#1a2d47" stroke="#f39c12" stroke-width="1.2" id="fc_n_dolu"/>
        <text x="260" y="130" text-anchor="middle" fill="#fff" font-size="7.5">Sayaç</text>
        <text x="260" y="140" text-anchor="middle" fill="#f39c12" font-size="6">=MAX?</text>
        <!-- Hayır → Yeşil LED + Motor -->
        <text x="265" y="110" fill="#27ae60" font-size="7">H</text>
        <line x1="260" y1="113" x2="260" y2="87" stroke="#27ae60" stroke-width="0.8" marker-end="url(#fA)"/>
        <rect x="210" y="63" width="100" height="24" rx="3" fill="#0d3320" stroke="#27ae60" stroke-width="1.2" id="fc_n_motor_ac"/>
        <text x="260" y="74" text-anchor="middle" fill="#2ecc71" font-size="7.5" font-weight="600">Yeşil LED + Motor Aç</text>
        <text x="260" y="82" text-anchor="middle" fill="#2ecc71" font-size="6">BSF RB0, BSF RB2</text>
        <!-- RA2 Bekle -->
        <line x1="310" y1="75" x2="330" y2="75" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <polygon points="330,63 355,75 330,87 330,63" fill="#1a2d47" stroke="#89b4fa" stroke-width="0.8" id="fc_n_ra2"/>
        <text x="342" y="78" text-anchor="middle" fill="#89b4fa" font-size="6">RA2?</text>
        <!-- Motor dur + Geçiş bekle -->
        <line x1="355" y1="75" x2="355" y2="43" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <rect x="330" y="25" width="80" height="18" rx="3" fill="#162338" stroke="#89b4fa" stroke-width="0.8" id="fc_n_gecis"/>
        <text x="370" y="37" text-anchor="middle" fill="#89b4fa" font-size="6.5">Motor Dur, Geçiş</text>
        <!-- Kapat + INCF -->
        <line x1="370" y1="25" x2="370" y2="12" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <rect x="340" y="0" width="70" height="14" rx="3" fill="#162338" stroke="#f39c12" stroke-width="0.8" id="fc_n_incf"/>
        <text x="375" y="10" text-anchor="middle" fill="#f39c12" font-size="6">Kapat + INCF</text>
        <!-- Dolu → Kırmızı LED -->
        <text x="320" y="130" fill="#e74c3c" font-size="7">E</text>
        <line x1="315" y1="133" x2="340" y2="133" stroke="#e74c3c" stroke-width="0.8" marker-end="url(#fA)"/>
        <rect x="340" y="121" width="70" height="24" rx="3" fill="#3d1515" stroke="#e74c3c" stroke-width="1.2" id="fc_n_kirmizi"/>
        <text x="375" y="132" text-anchor="middle" fill="#ff6b6b" font-size="8">🔴 DOLU</text>
        <text x="375" y="142" text-anchor="middle" fill="#e74c3c" font-size="6">BSF RB3</text>
        <!-- RA0=H → RA1? -->
        <text x="118" y="158" fill="#e74c3c" font-size="7">H</text>
        <line x1="110" y1="153" x2="110" y2="170" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <polygon points="110,170 165,190 110,210 55,190" fill="#1a2d47" stroke="#3498db" stroke-width="1.2" id="fc_n_ra1"/>
        <text x="110" y="189" text-anchor="middle" fill="#fff" font-size="7.5">RA1=1?</text>
        <text x="110" y="198" text-anchor="middle" fill="#3498db" font-size="6">Çıkış Sensör</text>
        <!-- RA1=E → Çıkış Detayları -->
        <text x="170" y="187" fill="#27ae60" font-size="7">E</text>
        <line x1="165" y1="190" x2="210" y2="190" stroke="#27ae60" stroke-width="0.8" marker-end="url(#fA)"/>
        
        <rect x="210" y="178" width="100" height="24" rx="3" fill="#0d3320" stroke="#27ae60" stroke-width="1.2" id="fc_n_cikis_motor"/>
        <text x="260" y="189" text-anchor="middle" fill="#2ecc71" font-size="7.5" font-weight="600">Bariyer Motor Aç</text>
        <text x="260" y="197" text-anchor="middle" fill="#2ecc71" font-size="6">BSF RB0</text>
        
        <!-- RA2 Bekle -->
        <line x1="310" y1="190" x2="330" y2="190" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <polygon points="330,178 355,190 330,202 330,178" fill="#1a2d47" stroke="#89b4fa" stroke-width="0.8" id="fc_n_cikis_ra2"/>
        <text x="342" y="193" text-anchor="middle" fill="#89b4fa" font-size="6">RA2?</text>

        <!-- Motor dur + Geçiş bekle + Kapat -->
        <line x1="355" y1="190" x2="355" y2="215" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <rect x="315" y="215" width="80" height="24" rx="3" fill="#162338" stroke="#89b4fa" stroke-width="0.8" id="fc_n_cikis_gecis"/>
        <text x="355" y="225" text-anchor="middle" fill="#89b4fa" font-size="6.5">Motor Dur, Geçiş</text>
        <text x="355" y="234" text-anchor="middle" fill="#89b4fa" font-size="6">BSF RB1 (Kapat)</text>

        <!-- RA3 Bekle -->
        <line x1="355" y1="239" x2="355" y2="255" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <polygon points="355,255 375,267 355,279 335,267" fill="#1a2d47" stroke="#f39c12" stroke-width="0.8" id="fc_n_cikis_ra3"/>
        <text x="355" y="269" text-anchor="middle" fill="#f39c12" font-size="6">RA3?</text>

        <!-- Dur + DECF -->
        <line x1="355" y1="279" x2="355" y2="295" stroke="#666" stroke-width="0.8" marker-end="url(#fA)"/>
        <rect x="320" y="295" width="70" height="20" rx="3" fill="#162338" stroke="#f39c12" stroke-width="0.8" id="fc_n_cikis_decf"/>
        <text x="355" y="304" text-anchor="middle" fill="#f39c12" font-size="6">Motor Dur, DECF</text>
        <text x="355" y="311" text-anchor="middle" fill="#f39c12" font-size="6">BCF RB3</text>
        <!-- RA1=H → Döngü -->
        <text x="118" y="215" fill="#e74c3c" font-size="7">H</text>
        <line x1="110" y1="210" x2="110" y2="225" stroke="#666" stroke-width="0.8"/>
        <!-- Loop backs -->
        <path d="M110,225 L110,240 L35,240 L35,89 L60,89" fill="none" stroke="#00b894" stroke-width="1.2" stroke-dasharray="4 2" marker-end="url(#fA)"/>
        <text x="40" y="170" fill="#00b894" font-size="7" transform="rotate(-90,40,170)">DÖNGÜ</text>
        <path d="M375,0 L375,-8 L25,-8 L25,85 L60,85" fill="none" stroke="#f39c12" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#fA)"/>
        <path d="M375,145 L375,155 L420,155 L420,-15 L15,-15 L15,93 L60,93" fill="none" stroke="#e74c3c" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#fA)"/>
        <path d="M355,315 L355,330 L45,330 L45,97 L60,97" fill="none" stroke="#3498db" stroke-width="1.2" stroke-dasharray="3 2" marker-end="url(#fA)"/>
        <!-- Aktif adım göstergesi -->
        <rect x="10" y="335" width="400" height="30" rx="6" fill="rgba(0,184,148,0.08)" stroke="rgba(0,184,148,0.2)" stroke-width="0.8"/>
        <text x="210" y="355" text-anchor="middle" fill="#00b894" font-size="9" font-weight="600" id="fc_flow_desc">↓ ok ile adım adım ilerle</text>
      </svg>
    </div>
    <div class="panel-scene" style="overflow-y:auto;">
      <div id="fcCodePanel" style="font-family:'Fira Code','Courier New',monospace;font-size:0.7rem;line-height:1.7;padding:8px;color:#8899aa;">
        <div class="fc-code-line" id="fcL1"><span style="color:#cba6f7">LIST</span>    P=16F84A</div>
        <div class="fc-code-line" id="fcL2"><span style="color:#cba6f7">INCLUDE</span> <span style="color:#a6e3a1">"P16F84A.INC"</span></div>
        <div class="fc-code-line" id="fcL3">&nbsp;</div>
        <div class="fc-code-line" id="fcL4"><span style="color:#f9e2af">SAYAC</span>   <span style="color:#cba6f7">EQU</span>  <span style="color:#fab387">0x0C</span>  <span style="color:#585b70">; Araç sayacı</span></div>
        <div class="fc-code-line" id="fcL5"><span style="color:#f9e2af">MAX</span>     <span style="color:#cba6f7">EQU</span>  <span style="color:#fab387">0x05</span>  <span style="color:#585b70">; Kapasite = 5</span></div>
        <div class="fc-code-line" id="fcL6">&nbsp;</div>
        <div class="fc-code-line" id="fcL7"><span style="color:#585b70">;=== BAŞLANGIÇ ===</span></div>
        <div class="fc-code-line" id="fcL8"><span style="color:#f38ba8">BASLA:</span></div>
        <div class="fc-code-line" id="fcL9">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">STATUS</span>,<span style="color:#f9e2af">RP0</span>  <span style="color:#585b70">; Bank 1'e geç (TRIS ayarları için)</span></div>
        <div class="fc-code-line" id="fcL10">    <span style="color:#89b4fa">MOVLW</span>   <span style="color:#fab387">0xFF</span>         <span style="color:#585b70">; W=FF (Tümü 1)</span></div>
        <div class="fc-code-line" id="fcL11">    <span style="color:#89b4fa">MOVWF</span>   <span style="color:#f9e2af">TRISA</span>        <span style="color:#585b70">; PORTA'daki tüm pinleri GİRİŞ yap</span></div>
        <div class="fc-code-line" id="fcL12">    <span style="color:#89b4fa">CLRF</span>    <span style="color:#f9e2af">TRISB</span>        <span style="color:#585b70">; PORTB'deki tüm pinleri ÇIKIŞ yap</span></div>
        <div class="fc-code-line" id="fcL13">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">STATUS</span>,<span style="color:#f9e2af">RP0</span>  <span style="color:#585b70">; Bank 0'a dön</span></div>
        <div class="fc-code-line" id="fcL14">    <span style="color:#89b4fa">CLRF</span>    <span style="color:#f9e2af">PORTB</span>        <span style="color:#585b70">; Motor ve LED'leri kapalı başlat</span></div>
        <div class="fc-code-line" id="fcL15">    <span style="color:#89b4fa">CLRF</span>    <span style="color:#f9e2af">SAYAC</span>        <span style="color:#585b70">; Otopark boş (Sayaç = 0)</span></div>
        <div class="fc-code-line" id="fcL16">&nbsp;</div>
        <div class="fc-code-line" id="fcL17"><span style="color:#585b70">;=== ANA DÖNGÜ ===</span></div>
        <div class="fc-code-line" id="fcL18"><span style="color:#f38ba8">DONGU:</span></div>
        <div class="fc-code-line" id="fcL19">    <span style="color:#89b4fa">BTFSC</span>   <span style="color:#f9e2af">PORTA</span>,<span style="color:#fab387">0</span>     <span style="color:#585b70">; Giriş Sensörü (RA0) = 1 mi?</span></div>
        <div class="fc-code-line" id="fcL20">    <span style="color:#89b4fa">CALL</span>    <span style="color:#f38ba8">GIRIS_KONTROL</span><span style="color:#585b70">; Evetse giriş senaryosuna git</span></div>
        <div class="fc-code-line" id="fcL21">    <span style="color:#89b4fa">BTFSC</span>   <span style="color:#f9e2af">PORTA</span>,<span style="color:#fab387">1</span>     <span style="color:#585b70">; Çıkış Sensörü (RA1) = 1 mi?</span></div>
        <div class="fc-code-line" id="fcL22">    <span style="color:#89b4fa">CALL</span>    <span style="color:#f38ba8">CIKIS_ISLEM</span>  <span style="color:#585b70">; Evetse çıkış senaryosuna git</span></div>
        <div class="fc-code-line" id="fcL23">    <span style="color:#89b4fa">GOTO</span>    <span style="color:#f38ba8">DONGU</span>        <span style="color:#585b70">; Hayırsa başa dön, sürekli dinle</span></div>
        <div class="fc-code-line" id="fcL24">&nbsp;</div>
        <div class="fc-code-line" id="fcL25"><span style="color:#585b70">;=== GİRİŞ KONTROL ===</span></div>
        <div class="fc-code-line" id="fcL26"><span style="color:#f38ba8">GIRIS_KONTROL:</span></div>
        <div class="fc-code-line" id="fcL27">    <span style="color:#89b4fa">MOVF</span>    <span style="color:#f9e2af">SAYAC</span>,<span style="color:#fab387">W</span>     <span style="color:#585b70">; Sayacı W kaydedicisine al</span></div>
        <div class="fc-code-line" id="fcL28">    <span style="color:#89b4fa">SUBLW</span>   <span style="color:#f9e2af">MAX</span>          <span style="color:#585b70">; W = 5(MAX) - W(Sayaç)</span></div>
        <div class="fc-code-line" id="fcL29">    <span style="color:#89b4fa">BTFSC</span>   <span style="color:#f9e2af">STATUS</span>,<span style="color:#f9e2af">Z</span>    <span style="color:#585b70">; Çıkarma sonucu 0 mı? (Dolu mu?)</span></div>
        <div class="fc-code-line" id="fcL30">    <span style="color:#89b4fa">GOTO</span>    <span style="color:#f38ba8">DOLU</span>         <span style="color:#585b70">; Sonuç 0 ise otopark DOLU!</span></div>
        <div class="fc-code-line" id="fcL31">&nbsp;</div>
        <div class="fc-code-line" id="fcL32">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">2</span>     <span style="color:#585b70">; Müsaitse Yeşil LED'i yak</span></div>
        <div class="fc-code-line" id="fcL33">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">0</span>     <span style="color:#585b70">; İleri yön: Motoru AÇ (Bariyer kalkar)</span></div>
        <div class="fc-code-line" id="fcL34"><span style="color:#f38ba8">ACIK_BEKLE:</span></div>
        <div class="fc-code-line" id="fcL35">    <span style="color:#89b4fa">BTFSS</span>   <span style="color:#f9e2af">PORTA</span>,<span style="color:#fab387">2</span>     <span style="color:#585b70">; Açık Limit Switch (RA2) basıldı mı?</span></div>
        <div class="fc-code-line" id="fcL36">    <span style="color:#89b4fa">GOTO</span>    <span style="color:#f38ba8">ACIK_BEKLE</span>   <span style="color:#585b70">; Basılmadıysa döngüde kalkmasını bekle</span></div>
        <div class="fc-code-line" id="fcL37">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">0</span>     <span style="color:#585b70">; Basıldı: Bariyer açık, motoru durdur</span></div>
        <div class="fc-code-line" id="fcL38">&nbsp;</div>
        <div class="fc-code-line" id="fcL39">    <span style="color:#585b70">; Araç geçiş bekleme süresi</span></div>
        <div class="fc-code-line" id="fcL40">&nbsp;</div>
        <div class="fc-code-line" id="fcL41">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">1</span>     <span style="color:#585b70">; Geri yön: Motoru KAPAT (Bariyer iner)</span></div>
        <div class="fc-code-line" id="fcL42"><span style="color:#f38ba8">KAPAT_BEKLE:</span></div>
        <div class="fc-code-line" id="fcL43">    <span style="color:#89b4fa">BTFSS</span>   <span style="color:#f9e2af">PORTA</span>,<span style="color:#fab387">3</span>     <span style="color:#585b70">; Kapalı Limit Switch (RA3) basıldı mı?</span></div>
        <div class="fc-code-line" id="fcL44">    <span style="color:#89b4fa">GOTO</span>    <span style="color:#f38ba8">KAPAT_BEKLE</span>  <span style="color:#585b70">; Basılmadıysa inmesini bekle</span></div>
        <div class="fc-code-line" id="fcL45">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">1</span>     <span style="color:#585b70">; Basıldı: Bariyer kapandı, motoru durdur</span></div>
        <div class="fc-code-line" id="fcL46">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">2</span>     <span style="color:#585b70">; İşlem bitti, Yeşil LED'i söndür</span></div>
        <div class="fc-code-line" id="fcL47">    <span style="color:#89b4fa">INCF</span>    <span style="color:#f9e2af">SAYAC</span>,<span style="color:#fab387">F</span>     <span style="color:#585b70">; Araç girdi: Sayacı 1 artır</span></div>
        <div class="fc-code-line" id="fcL48">    <span style="color:#89b4fa">RETURN</span>               <span style="color:#585b70">; Yeni araçlar için ana DONGU'ye dön</span></div>
        <div class="fc-code-line" id="fcL49">&nbsp;</div>
        <div class="fc-code-line" id="fcL50"><span style="color:#585b70">;=== DOLU ===</span></div>
        <div class="fc-code-line" id="fcL51"><span style="color:#f38ba8">DOLU:</span></div>
        <div class="fc-code-line" id="fcL52">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">3</span>     <span style="color:#585b70">; Dolu uyarısı: Kırmızı LED'i yak</span></div>
        <div class="fc-code-line" id="fcL53">    <span style="color:#89b4fa">RETURN</span>               <span style="color:#585b70">; Bariyeri hiç açmadan döngüye dön</span></div>
        <div class="fc-code-line" id="fcL54">&nbsp;</div>
        <div class="fc-code-line" id="fcL55"><span style="color:#585b70">;=== ÇIKIŞ İŞLEM ===</span></div>
        <div class="fc-code-line" id="fcL56"><span style="color:#f38ba8">CIKIS_ISLEM:</span></div>
        <div class="fc-code-line" id="fcL57">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">0</span>     <span style="color:#585b70">; Araç çıkıyor: Bariyer motorunu aç</span></div>
        <div class="fc-code-line" id="fcL58"><span style="color:#f38ba8">C_ACIK_BEKLE:</span></div>
        <div class="fc-code-line" id="fcL59">    <span style="color:#89b4fa">BTFSS</span>   <span style="color:#f9e2af">PORTA</span>,<span style="color:#fab387">2</span>     <span style="color:#585b70">; Açık Limit Switch basıldı mı?</span></div>
        <div class="fc-code-line" id="fcL60">    <span style="color:#89b4fa">GOTO</span>    <span style="color:#f38ba8">C_ACIK_BEKLE</span></div>
        <div class="fc-code-line" id="fcL61">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">0</span>     <span style="color:#585b70">; Basıldı: Motoru durdur</span></div>
        <div class="fc-code-line" id="fcL62">&nbsp;</div>
        <div class="fc-code-line" id="fcL63">    <span style="color:#89b4fa">BSF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">1</span>     <span style="color:#585b70">; Geçiş bitti: Bariyeri kapat</span></div>
        <div class="fc-code-line" id="fcL64"><span style="color:#f38ba8">C_KAPAT_BEKLE:</span></div>
        <div class="fc-code-line" id="fcL65">    <span style="color:#89b4fa">BTFSS</span>   <span style="color:#f9e2af">PORTA</span>,<span style="color:#fab387">3</span>     <span style="color:#585b70">; Kapalı Limit Switch basıldı mı?</span></div>
        <div class="fc-code-line" id="fcL66">    <span style="color:#89b4fa">GOTO</span>    <span style="color:#f38ba8">C_KAPAT_BEKLE</span></div>
        <div class="fc-code-line" id="fcL67">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">1</span>     <span style="color:#585b70">; Basıldı: Motoru durdur</span></div>
        <div class="fc-code-line" id="fcL68">    <span style="color:#89b4fa">DECF</span>    <span style="color:#f9e2af">SAYAC</span>,<span style="color:#fab387">F</span>     <span style="color:#585b70">; Araç çıktı: Sayacı 1 eksilt</span></div>
        <div class="fc-code-line" id="fcL69">    <span style="color:#89b4fa">BCF</span>     <span style="color:#f9e2af">PORTB</span>,<span style="color:#fab387">3</span>     <span style="color:#585b70">; Yer açıldı, Kırmızı LED yanıyorsa söndür</span></div>
        <div class="fc-code-line" id="fcL70">    <span style="color:#89b4fa">RETURN</span></div>
        <div class="fc-code-line" id="fcL71">&nbsp;</div>
        <div class="fc-code-line" id="fcL72">    <span style="color:#cba6f7">END</span></div>
      </div>
    </div>
  </div>
  <div class="anim-bottom-bar">
    <div class="anim-step-badge" id="fc_stepBadge">ADIM 1 / 10</div>
    <div class="anim-step-desc" id="fc_stepDesc">Program başlangıcı — değişken tanımları</div>
    <div style="margin-left:auto;color:#556;font-size:0.72rem;">↓ ok ile ilerle</div>
  </div>
</div>
`;
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('presentation').insertAdjacentHTML('beforeend', slidesHTML_3b);
});
