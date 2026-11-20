import { useState } from 'react'
import { MathBlock } from './RichText'

function Slider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (value: number) => void
}) {
  return (
    <label className="lab-control">
      <span>
        {label} <strong>{value}{unit}</strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  )
}

function HalfLifeLab() {
  const [lives, setLives] = useState(2)
  const remaining = 100 * Math.pow(0.5, lives)
  const age = lives * 5730
  return (
    <div className="lab">
      <p className="eyebrow">Interactive example · radiocarbon</p>
      <h4>Half-life explorer</h4>
      <p className="small muted">
        Drag the number of half-lives. The bar shows how much of the original carbon-14 is left; the age uses
        t½ = 5,730 years.
      </p>
      <Slider label="Half-lives elapsed" value={lives} min={0} max={6} step={0.1} unit="" onChange={setLives} />
      <div className="lab-bar">
        <span style={{ width: `${remaining}%` }} />
      </div>
      <div className="lab-readout">
        <div>
          <span className="muted tiny">Parent remaining</span>
          <strong>{remaining.toFixed(1)}%</strong>
        </div>
        <div>
          <span className="muted tiny">Equivalent age</span>
          <strong>{Math.round(age).toLocaleString()} years</strong>
        </div>
      </div>
      <p className="small muted">
        Beyond about 12 half-lives (≈ 70,000 years) too little carbon-14 remains to measure — the lesson’s limit for
        radiocarbon dating.
      </p>
    </div>
  )
}

function AiryLab() {
  const [height, setHeight] = useState(3)
  const [crust, setCrust] = useState(2.7)
  const [mantle, setMantle] = useState(3.3)
  const root = mantle > crust ? (height * crust) / (mantle - crust) : Number.POSITIVE_INFINITY
  return (
    <div className="lab">
      <p className="eyebrow">Interactive example · Airy isostasy</p>
      <h4>How deep is a mountain root?</h4>
      <p className="small muted">
        Change the mountain height and densities. The relation is r = h·ρc/(ρm − ρc); it expresses the lesson’s
        iceberg analogy mathematically.
      </p>
      <Slider label="Mountain height h" value={height} min={0.5} max={8} step={0.1} unit=" km" onChange={setHeight} />
      <Slider label="Crustal density ρc" value={crust} min={2.4} max={3} step={0.05} unit=" g/cm³" onChange={setCrust} />
      <Slider label="Mantle density ρm" value={mantle} min={3.1} max={3.5} step={0.05} unit=" g/cm³" onChange={setMantle} />
      <MathBlock tex="r=h\,\frac{\rho_c}{\rho_m-\rho_c}" />
      <div className="lab-readout">
        <div>
          <span className="muted tiny">Density contrast</span>
          <strong>{(mantle - crust).toFixed(2)} g/cm³</strong>
        </div>
        <div>
          <span className="muted tiny">Root depth</span>
          <strong>{Number.isFinite(root) ? `${root.toFixed(1)} km` : 'no root (density contrast ≤ 0)'}</strong>
        </div>
      </div>
      <p className="small muted">
        Notice that a smaller density contrast produces a much deeper root. Real isostasy is more complex, but the
        direction of the effect is captured here.
      </p>
    </div>
  )
}

function DarcyLab() {
  const [k, setK] = useState(10)
  const [area, setArea] = useState(100)
  const [head, setHead] = useState(4)
  const [distance, setDistance] = useState(400)
  const gradient = head / distance
  const discharge = k * area * gradient
  return (
    <div className="lab">
      <p className="eyebrow">Interactive example · groundwater</p>
      <h4>Darcy’s law calculator</h4>
      <p className="small muted">
        Q = K·A·(h₁ − h₂)/d. Change the permeability, area, head difference and distance; the discharge updates.
      </p>
      <Slider label="Permeability K" value={k} min={0.1} max={50} step={0.1} unit=" m/day" onChange={setK} />
      <Slider label="Cross-sectional area A" value={area} min={10} max={500} step={10} unit=" m²" onChange={setArea} />
      <Slider label="Head difference h₁ − h₂" value={head} min={0.5} max={20} step={0.5} unit=" m" onChange={setHead} />
      <Slider label="Distance d" value={distance} min={50} max={1000} step={50} unit=" m" onChange={setDistance} />
      <MathBlock tex={`Q=${k}\\times${area}\\times\\frac{${head}}{${distance}}=${discharge.toFixed(2)}\\ \\text{m}^3/\\text{day}`} />
      <div className="lab-readout">
        <div>
          <span className="muted tiny">Hydraulic gradient</span>
          <strong>{gradient.toFixed(4)}</strong>
        </div>
        <div>
          <span className="muted tiny">Discharge</span>
          <strong>{discharge.toFixed(2)} m³/day</strong>
        </div>
      </div>
    </div>
  )
}

function EruptionLab() {
  const [silica, setSilica] = useState(55)
  const [gas, setGas] = useState(3)
  const [water, setWater] = useState(false)

  let style = ''
  let why = ''
  if (water) {
    style = 'Phreatomagmatic / Surtseyan'
    why = 'Water meets magma, flashes to steam and fragments the melt into fine ash — the lesson’s “wet” eruption mechanism.'
  } else if (silica >= 68 && gas >= 4) {
    style = 'Plinian'
    why = 'High-silica, gas-rich magma traps pressure and produces a sustained, high eruption column.'
  } else if (silica >= 63 && gas >= 4) {
    style = 'Vulcanian'
    why = 'Viscous intermediate magma seals the vent until gas pressure breaks the cap, producing 5–10 km columns.'
  } else if (silica >= 63) {
    style = 'Peléan (dome)'
    why = 'Viscous felsic magma builds a dome or spine; collapse can generate a block-and-ash pyroclastic flow.'
  } else if (gas >= 3) {
    style = 'Strombolian'
    why = 'Gas slugs burst at the surface in rhythmic, loud blasts, as at Stromboli.'
  } else {
    style = 'Hawaiian'
    why = 'Low-silica, low-gas, fluid basalt erupts effusively as lava fountains and flows.'
  }

  return (
    <div className="lab">
      <p className="eyebrow">Interactive example · eruption styles</p>
      <h4>What kind of eruption would this magma produce?</h4>
      <p className="small muted">
        This is a teaching heuristic based on the lesson’s descriptions of viscosity, gas and water — not a forecast
        tool.
      </p>
      <Slider label="Silica content" value={silica} min={45} max={75} step={1} unit="%" onChange={setSilica} />
      <Slider label="Gas content (relative)" value={gas} min={1} max={5} step={1} unit="/5" onChange={setGas} />
      <label className="toggle">
        <input type="checkbox" checked={water} onChange={(event) => setWater(event.target.checked)} />
        <span>Water or shallow groundwater present</span>
      </label>
      <div className="lab-result">
        <span className="tiny muted">Likely style</span>
        <strong>{style}</strong>
        <p className="small">{why}</p>
      </div>
    </div>
  )
}

export function InteractiveExample({ topicKey }: { topicKey: string }) {
  switch (topicKey) {
    case 'ch2/isostasy':
      return <AiryLab />
    case 'ch4/absolute-dating':
      return <HalfLifeLab />
    case 'ch7/magmatic-styles':
      return <EruptionLab />
    case 'ch10/groundwater-movement':
      return <DarcyLab />
    default:
      return null
  }
}
