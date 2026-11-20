const label = 'd-label'
const small = 'd-small'

export function GroundwaterZones() {
  return (
    <svg viewBox="0 0 720 400" role="img" aria-label="Zones of groundwater beneath the surface">
      <rect x="0" y="80" width="720" height="300" className="d-subsurface" />
      <rect x="0" y="80" width="720" height="26" className="d-soil" />
      <rect x="0" y="106" width="720" height="52" className="d-vadose" />
      <rect x="0" y="164" width="720" height="216" className="d-phreatic" />
      <path d="M0 158 Q120 140 240 152 Q380 166 520 148 Q620 136 720 150" className="d-watertable" />
      <text x="18" y="100" className={small}>zone of soil moisture</text>
      <text x="18" y="138" className={small}>vadose (unsaturated) zone — air + water</text>
      <text x="18" y="188" className={small}>phreatic (saturated) zone — all pores full</text>
      <text x="400" y="146" className={small}>water table</text>
      <rect x="0" y="300" width="720" height="26" className="d-aquitard" />
      <text x="18" y="318" className={small}>aquitard (impermeable layer)</text>
      <rect x="240" y="326" width="220" height="54" className="d-aquifer" />
      <text x="350" y="358" textAnchor="middle" className={small}>aquifer (permeable, transmits water)</text>
      <path d="M620 80 L620 250 L660 250 L660 80" className="d-well" />
      <text x="600" y="70" className={small}>well</text>
      <path d="M660 150 L690 150" className="d-arrow" />
      <text x="18" y="386" className={small}>The water table is a subdued replica of the land surface and rises or falls with rainfall.</text>
      <text x="470" y="100" className={small}>capillary fringe</text>
      <line x1="470" y1="106" x2="470" y2="152" className="d-leader" />
    </svg>
  )
}

export function GroundwaterWells() {
  return (
    <svg viewBox="0 0 720 400" role="img" aria-label="Cone of depression, perched water table and artesian well">
      <rect x="0" y="60" width="380" height="320" className="d-subsurface" />
      <rect x="0" y="60" width="380" height="22" className="d-soil" />
      <rect x="0" y="82" width="380" height="220" className="d-vadose" />
      <rect x="0" y="200" width="380" height="180" className="d-phreatic" />
      <path d="M0 190 Q95 178 190 190 Q285 202 380 190" className="d-watertable" />
      <path d="M150 200 Q170 236 220 236 Q270 236 290 200" className="d-cone" />
      <rect x="214" y="60" width="14" height="170" className="d-well" />
      <text x="232" y="130" className={small}>pumping well</text>
      <text x="232" y="252" className={small}>cone of depression</text>
      <text x="16" y="230" className={small}>drawdown</text>
      <path d="M0 120 L380 120" className="d-aquitard-thin" />
      <rect x="0" y="120" width="130" height="14" className="d-aquitard" />
      <path d="M60 122 Q80 150 120 150 Q165 150 190 126" className="d-perched" />
      <text x="60" y="172" className={small}>perched water table</text>
      <text x="18" y="344" className={small}>Drawdown lowers the water table near a pumped well.</text>

      <rect x="400" y="60" width="320" height="320" className="d-subsurface" />
      <path d="M400 118 L720 150 L720 190 L400 160 Z" className="d-confining" />
      <rect x="400" y="200" width="320" height="70" className="d-aquifer" />
      <path d="M400 270 L720 280 L720 320 L400 310 Z" className="d-confining" />
      <line x1="400" y1="140" x2="720" y2="172" className="d-piezo" />
      <text x="520" y="132" className={small}>pressure surface (potentiometric)</text>
      <rect x="560" y="60" width="12" height="230" className="d-well" />
      <path d="M566 150 L566 120" className="d-waterjet" />
      <text x="580" y="96" className={small}>flowing artesian well</text>
      <text x="420" y="242" className={small}>confined aquifer</text>
      <text x="420" y="350" className={small}>Water rises above the aquifer because of pressure.</text>
      <text x="360" y="392" textAnchor="middle" className={small}>
        Artesian conditions need a confined aquifer, a recharge area and a sealing aquitard.
      </text>
    </svg>
  )
}

export function MassWastingTypes() {
  return (
    <svg viewBox="0 0 720 360" role="img" aria-label="Fall, slide and flow styles of mass wasting">
      <g>
        <text x="120" y="28" textAnchor="middle" className={label}>Fall</text>
        <path d="M20 300 L60 80 L180 80 L180 300 Z" className="d-cliff" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={120 + i * 12} y={190 + i * 22} width="12" height="12" className="d-block" transform={`rotate(${i * 18} 126 196)`} />
        ))}
        <path d="M60 80 L110 80 M60 120 L110 120" className="d-line" />
        <text x="100" y="300" textAnchor="middle" className={small}>talus cone builds at the base</text>
      </g>
      <g>
        <text x="360" y="28" textAnchor="middle" className={label}>Slide</text>
        <path d="M255 300 L255 100 L465 100 L465 300 Z" className="d-cliff" />
        <path d="M265 150 Q350 180 455 150" className="d-slide" />
        <path d="M265 150 Q350 180 455 150 L455 230 Q350 260 265 230 Z" className="d-slide-block" />
        <path d="M310 176 L330 205" className="d-arrow" />
        <path d="M405 176 L395 210" className="d-arrow" />
        <text x="360" y="286" textAnchor="middle" className={small}>rotational slide: spoon-shaped failure</text>
      </g>
      <g>
        <text x="600" y="28" textAnchor="middle" className={label}>Flow</text>
        <path d="M500 300 L560 90 L700 90 L700 300 Z" className="d-cliff" />
        <path d="M560 120 Q610 200 630 270 Q650 300 690 300 L700 300 L700 160 Q640 180 610 130 Z" className="d-flow" />
        <text x="610" y="320" textAnchor="middle" className={small}>viscous, water-rich lobe</text>
      </g>
      <text x="360" y="348" textAnchor="middle" className={small}>
        Material (rock or debris) + motion (fall, slide, flow) + speed are the three classification axes.
      </text>
    </svg>
  )
}

export function Unconformities() {
  return (
    <svg viewBox="0 0 720 360" role="img" aria-label="Angular unconformity, disconformity and nonconformity">
      <g>
        <text x="120" y="26" textAnchor="middle" className={label}>Angular</text>
        <rect x="20" y="60" width="200" height="230" className="d-subsurface" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="20" y={80 + i * 24} width="200" height="12" className="d-strata-tilted" transform={`rotate(-14 120 ${86 + i * 24})`} />
        ))}
        <path d="M20 170 L220 130" className="d-erosion" />
        {[0, 1, 2].map((i) => (
          <rect key={`f${i}`} x="20" y={185 + i * 26} width="200" height="14" className="d-strata" />
        ))}
        <text x="120" y="310" textAnchor="middle" className={small}>tilted beds cut by flat-lying beds</text>
      </g>
      <g>
        <text x="360" y="26" textAnchor="middle" className={label}>Disconformity</text>
        <rect x="260" y="60" width="200" height="230" className="d-subsurface" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="260" y={78 + i * 26} width="200" height="14" className="d-strata" />
        ))}
        <path d="M260 162 L460 162" className="d-erosion" />
        {[0, 1, 2].map((i) => (
          <rect key={`g${i}`} x="260" y={180 + i * 30} width="200" height="16" className="d-strata-2" />
        ))}
        <text x="360" y="310" textAnchor="middle" className={small}>parallel beds with an erosional gap</text>
      </g>
      <g>
        <text x="600" y="26" textAnchor="middle" className={label}>Nonconformity</text>
        <rect x="500" y="60" width="200" height="230" className="d-subsurface" />
        <rect x="500" y="60" width="200" height="130" className="d-basement" />
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="510" y1={80 + i * 28} x2="690" y2={96 + i * 28} className="d-vein" />
        ))}
        <path d="M500 190 L700 190" className="d-erosion" />
        {[0, 1, 2].map((i) => (
          <rect key={`h${i}`} x="500" y={206 + i * 26} width="200" height="14" className="d-strata-2" />
        ))}
        <text x="600" y="310" textAnchor="middle" className={small}>sedimentary rock over older igneous/metamorphic rock</text>
      </g>
      <text x="360" y="344" textAnchor="middle" className={small}>
        Unconformities record missing time: uplift, erosion, then renewed deposition.
      </text>
    </svg>
  )
}
