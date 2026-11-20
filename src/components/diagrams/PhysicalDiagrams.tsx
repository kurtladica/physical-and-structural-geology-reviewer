const label = 'd-label'
const small = 'd-small'

export function EarthSpheres() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Earth's four spheres shown as nested systems">
      <circle cx="250" cy="190" r="160" className="d-atmos" />
      <circle cx="250" cy="190" r="136" className="d-hydro" />
      <circle cx="250" cy="190" r="116" className="d-geo" />
      <circle cx="250" cy="190" r="52" className="d-core" />
      <path d="M250 190 L250 74 M250 190 L334 96 M250 190 L140 250" className="d-line" />
      <circle cx="210" cy="120" r="7" className="d-bio" />
      <circle cx="300" cy="140" r="5" className="d-bio" />
      <circle cx="180" cy="230" r="6" className="d-bio" />
      <circle cx="310" cy="250" r="5" className="d-bio" />
      <circle cx="235" cy="80" r="4" className="d-bio" />

      <line x1="404" y1="120" x2="456" y2="90" className="d-leader" />
      <text x="462" y="86" className={label}>Atmosphere</text>
      <text x="462" y="102" className={small}>gases · protects from radiation</text>
      <line x1="380" y1="170" x2="456" y2="150" className="d-leader" />
      <text x="462" y="146" className={label}>Hydrosphere</text>
      <text x="462" y="162" className={small}>71% of surface · 97% saline</text>
      <line x1="344" y1="222" x2="456" y2="220" className="d-leader" />
      <text x="462" y="216" className={label}>Geosphere</text>
      <text x="462" y="232" className={small}>solid Earth · down to the core</text>
      <line x1="306" y1="290" x2="456" y2="300" className="d-leader" />
      <text x="462" y="296" className={label}>Biosphere</text>
      <text x="462" y="312" className={small}>all life, inside the other three</text>
      <text x="250" y="356" textAnchor="middle" className={small}>
        The four spheres overlap and exchange matter constantly.
      </text>
    </svg>
  )
}

export function EarthLayers() {
  const rows: [string, string, string][] = [
    ['Crust', '0–70 km', 'Low-density rock: granitic continents, basaltic ocean floor'],
    ['Mantle', 'to 2,900 km', 'Solid iron–magnesium silicate rock; 82% of Earth’s volume'],
    ['Core', 'to 6,371 km', 'Iron–nickel alloy with minor oxygen, silicon, sulfur'],
  ]
  return (
    <svg viewBox="0 0 720 400" role="img" aria-label="Earth's compositional and physical layers">
      <circle cx="220" cy="200" r="176" className="d-crust" />
      <circle cx="220" cy="200" r="166" className="d-mantle" />
      <circle cx="220" cy="200" r="88" className="d-outercore" />
      <circle cx="220" cy="200" r="42" className="d-innercore" />
      <path d="M220 200 L220 34 M220 200 L352 118 M220 200 L320 320" className="d-line" />
      <text x="220" y="44" textAnchor="middle" className={small} fill="#fff">lithosphere</text>
      <text x="295" y="112" className={small} fill="#fff">asthenosphere</text>
      <text x="220" y="196" textAnchor="middle" className={small} fill="#fff">outer core</text>
      <text x="220" y="218" textAnchor="middle" className={small} fill="#fff">inner core</text>

      <text x="430" y="40" className={label}>Compositional layers</text>
      {rows.map(([name, depth, desc], i) => (
        <g key={name}>
          <text x="430" y={72 + i * 62} className="d-key">{name}</text>
          <text x="530" y={72 + i * 62} className={small}>{depth}</text>
          <text x="430" y={88 + i * 62} className={small}>{desc}</text>
        </g>
      ))}
      <line x1="430" y1="252" x2="690" y2="252" className="d-rule" />
      <text x="430" y="276" className={label}>Physical layers</text>
      <text x="430" y="298" className={small}>Lithosphere (~100 km, rigid) → plates</text>
      <text x="430" y="318" className={small}>Asthenosphere (ductile; plates slide on it)</text>
      <text x="430" y="338" className={small}>Mesosphere (strong lower mantle) → D″ layer</text>
      <text x="430" y="358" className={small}>Outer core (liquid) · Inner core (solid, pressure-locked)</text>
    </svg>
  )
}

export function Isostasy() {
  return (
    <svg viewBox="0 0 720 400" role="img" aria-label="Airy and Pratt models of isostasy">
      <text x="30" y="26" className={label}>Airy (1855): uniform density, varying thickness</text>
      <rect x="20" y="200" width="320" height="20" className="d-crust" />
      <path d="M60 200 Q120 120 190 200 L190 200 L250 200 Q300 200 300 200 L300 200 L300 200 Z" className="d-crust" />
      <path d="M60 200 Q120 120 190 200" className="d-crust" />
      <path d="M300 200 L300 280 Q300 310 280 320 L120 320 Q90 300 90 280 L90 200" className="d-crust" />
      <rect x="20" y="220" width="320" height="160" className="d-mantle" />
      <path d="M300 200 L300 280 Q300 310 280 320 L120 320 Q90 300 90 280 L90 200" className="d-crust" />
      <path d="M60 200 Q120 120 190 200" className="d-crust" />
      <line x1="20" y1="320" x2="340" y2="320" className="d-dash" />
      <text x="30" y="340" className={small}>depth of compensation</text>
      <text x="115" y="250" className={small}>root</text>
      <text x="130" y="176" className={small}>mountain</text>
      <text x="30" y="386" className={small}>Thicker crust floats deeper; no density change needed.</text>

      <text x="390" y="26" className={label}>Pratt (1859): varying density, same base</text>
      <rect x="380" y="220" width="320" height="160" className="d-mantle" />
      <rect x="400" y="110" width="80" height="110" className="d-crust-light" />
      <rect x="490" y="150" width="80" height="70" className="d-crust" />
      <rect x="590" y="190" width="80" height="30" className="d-crust-dark" />
      <line x1="380" y1="220" x2="700" y2="220" className="d-dash" />
      <text x="404" y="104" className={small}>low density</text>
      <text x="498" y="144" className={small}>medium</text>
      <text x="598" y="184" className={small}>high density</text>
      <text x="390" y="240" className={small}>uniform base depth</text>
      <text x="390" y="386" className={small}>Higher topography is underlain by lighter rock.</text>
    </svg>
  )
}

export function PlateBoundaries() {
  return (
    <svg viewBox="0 0 720 380" role="img" aria-label="Divergent, convergent and transform plate boundaries">
      <g>
        <text x="115" y="24" textAnchor="middle" className={label}>Divergent</text>
        <rect x="20" y="60" width="190" height="180" className="d-mantle" />
        <path d="M20 140 L80 140 L95 122 L150 122 L165 140 L210 140 L210 240 L20 240 Z" className="d-crust" />
        <path d="M110 240 L110 150" className="d-magma" strokeWidth="12" />
        <path d="M95 122 L95 90 M125 122 L125 90" className="d-arrow" />
        <path d="M60 100 L42 100 M160 100 L178 100" className="d-arrow" />
        <text x="115" y="270" textAnchor="middle" className={small}>ridge · new crust</text>
        <text x="115" y="288" textAnchor="middle" className={small}>decompression melting</text>
      </g>
      <g>
        <text x="360" y="24" textAnchor="middle" className={label}>Convergent</text>
        <rect x="265" y="60" width="190" height="180" className="d-mantle" />
        <path d="M265 140 L330 140 L360 160 L400 230 L455 230 L455 240 L265 240 Z" className="d-crust" />
        <path d="M350 140 L330 120 L300 120 L300 240 L350 240 Z" className="d-crust-dark" />
        <path d="M330 140 L360 200 L390 220" className="d-magma" strokeWidth="8" />
        <path d="M390 150 L390 105 M410 160 L420 120" className="d-arrow" />
        <text x="360" y="270" textAnchor="middle" className={small}>trench · subduction</text>
        <text x="360" y="288" textAnchor="middle" className={small}>volcanic arc · earthquakes</text>
      </g>
      <g>
        <text x="605" y="24" textAnchor="middle" className={label}>Transform</text>
        <rect x="510" y="60" width="190" height="180" className="d-mantle" />
        <rect x="510" y="60" width="190" height="70" className="d-crust" />
        <rect x="510" y="190" width="190" height="50" className="d-crust" />
        <line x1="510" y1="130" x2="700" y2="130" className="d-fault" strokeWidth="6" />
        <line x1="510" y1="190" x2="700" y2="190" className="d-fault" strokeWidth="6" />
        <path d="M575 110 L575 80 M640 210 L640 240" className="d-arrow" />
        <path d="M570 165 L570 185 M645 165 L645 185" className="d-arrow" />
        <text x="605" y="270" textAnchor="middle" className={small}>lithosphere neither created</text>
        <text x="605" y="288" textAnchor="middle" className={small}>nor destroyed · shallow quakes</text>
      </g>
      <text x="360" y="342" textAnchor="middle" className={small}>
        Arrows show relative plate motion. Ridge push and slab pull are the forces behind them.
      </text>
    </svg>
  )
}

export function RiftStages() {
  return (
    <svg viewBox="0 0 720 360" role="img" aria-label="Three stages in the evolution of a divergent boundary">
      <g>
        <text x="120" y="26" textAnchor="middle" className={label}>1 · Continental rift</text>
        <rect x="20" y="70" width="200" height="180" className="d-crust" />
        <path d="M80 70 L105 140 L135 140 L160 70 L200 70 L200 250 L20 250 L20 70 Z" className="d-mantle" />
        <rect x="20" y="70" width="60" height="180" className="d-crust" />
        <rect x="160" y="70" width="60" height="180" className="d-crust" />
        <path d="M90 70 L90 96 M150 70 L150 96" className="d-arrow" />
        <text x="120" y="290" textAnchor="middle" className={small}>tension · fault blocks drop</text>
        <text x="120" y="308" textAnchor="middle" className={small}>East African Rift</text>
      </g>
      <g>
        <text x="360" y="26" textAnchor="middle" className={label}>2 · Linear sea</text>
        <rect x="260" y="70" width="200" height="180" className="d-crust" />
        <path d="M300 70 L325 130 L395 130 L420 70 Z" className="d-water" />
        <path d="M325 130 L360 210 L395 130" className="d-water" />
        <path d="M340 120 L340 90 M380 120 L380 90" className="d-arrow" />
        <text x="360" y="290" textAnchor="middle" className={small}>seawater floods the rift</text>
        <text x="360" y="308" textAnchor="middle" className={small}>Red Sea</text>
      </g>
      <g>
        <text x="600" y="26" textAnchor="middle" className={label}>3 · Mature ocean basin</text>
        <rect x="500" y="70" width="205" height="180" className="d-crust" />
        <path d="M500 120 L540 120 L555 100 L600 100 L620 120 L705 120 L705 250 L500 250 Z" className="d-water" />
        <path d="M500 250 L540 250 L560 210 L640 210 L670 250 L705 250 Z" className="d-crust" />
        <path d="M600 200 L600 140" className="d-magma" strokeWidth="10" />
        <path d="M570 140 L550 140 M630 140 L650 140" className="d-arrow" />
        <text x="600" y="290" textAnchor="middle" className={small}>mid-ocean ridge + passive margins</text>
        <text x="600" y="308" textAnchor="middle" className={small}>Atlantic Ocean</text>
      </g>
      <text x="360" y="344" textAnchor="middle" className={small}>Each stage takes millions of years.</text>
    </svg>
  )
}

export function MagneticStripes() {
  const stripes = [0, 1, 0, 1, 1, 0, 1, 0]
  return (
    <svg viewBox="0 0 720 330" role="img" aria-label="Symmetrical magnetic striping on the sea floor">
      <text x="30" y="26" className={label}>Sea floor magnetic stripes</text>
      {stripes.map((v, i) => (
        <rect
          key={`l${i}`}
          x={130 - (i + 1) * 26}
          y="80"
          width="26"
          height="90"
          className={v ? 'd-stripe-normal' : 'd-stripe-rev'}
        />
      ))}
      {stripes.map((v, i) => (
        <rect
          key={`r${i}`}
          x={356 + i * 26}
          y="80"
          width="26"
          height="90"
          className={v ? 'd-stripe-normal' : 'd-stripe-rev'}
        />
      ))}
      <rect x="330" y="46" width="26" height="156" className="d-ridge" />
      <text x="343" y="38" textAnchor="middle" className={small}>ridge</text>
      <path d="M330 210 L300 210 M356 210 L386 210" className="d-arrow" />
      <text x="580" y="120" className={label}>normal</text>
      <rect x="560" y="130" width="34" height="14" className="d-stripe-normal" />
      <text x="580" y="166" className={label}>reversed</text>
      <rect x="560" y="176" width="34" height="14" className="d-stripe-rev" />
      <text x="360" y="250" textAnchor="middle" className={small}>
        New crust records the field direction as it cools and moves away.
      </text>
      <text x="360" y="272" textAnchor="middle" className={small}>
        The pattern is symmetrical on both sides of the ridge — evidence of spreading.
      </text>
      <text x="360" y="302" textAnchor="middle" className={small}>older →&nbsp;&nbsp;← younger — ridge — younger →&nbsp;&nbsp;← older</text>
    </svg>
  )
}

export function HotspotTrack() {
  return (
    <svg viewBox="0 0 720 340" role="img" aria-label="A hotspot track records plate motion">
      <rect x="20" y="70" width="680" height="60" className="d-water" />
      <path d="M20 130 L140 130 L160 108 L240 108 L255 130 L420 130 L440 100 L470 100 L490 130 L700 130 L700 240 L20 240 Z" className="d-crust" />
      <path d="M250 240 L250 175 L235 130" className="d-magma" strokeWidth="9" />
      <path d="M226 130 L274 130 L250 108 Z" className="d-volcano" />
      <text x="250" y="96" textAnchor="middle" className={small}>active volcano</text>
      <circle cx="250" cy="270" r="16" className="d-magma" />
      <text x="250" y="302" textAnchor="middle" className={small}>fixed mantle plume</text>
      {[
        [430, 120, '2 Ma'],
        [500, 120, '4 Ma'],
        [560, 120, '6 Ma'],
        [620, 120, '8 Ma'],
      ].map(([x, y, age]) => (
        <g key={String(age)}>
          <path d={`M${Number(x) - 14} ${y} L${Number(x) + 14} ${y} L${x} ${Number(y) - 16} Z`} className="d-volcano" />
          <text x={Number(x)} y={Number(y) + 22} textAnchor="middle" className={small}>{age}</text>
        </g>
      ))}
      <path d="M400 60 L470 60" className="d-arrow" />
      <text x="480" y="64" className={small}>plate motion</text>
      <text x="360" y="322" textAnchor="middle" className={small}>
        Older volcanoes sit farther from the plume; their ages give the plate’s speed and direction.
      </text>
    </svg>
  )
}
