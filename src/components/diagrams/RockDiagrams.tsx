const label = 'd-label'
const small = 'd-small'

export function RockCycle() {
  return (
    <svg viewBox="0 0 720 420" role="img" aria-label="The rock cycle linking igneous, sedimentary and metamorphic rocks">
      <circle cx="360" cy="215" r="150" className="d-dash-circle" />
      <g>
        <rect x="290" y="55" width="140" height="52" rx="10" className="d-node d-node-magma" />
        <text x="360" y="78" textAnchor="middle" className={label}>Magma / lava</text>
        <text x="360" y="94" textAnchor="middle" className={small}>molten rock</text>
      </g>
      <g>
        <rect x="505" y="150" width="150" height="52" rx="10" className="d-node d-node-ign" />
        <text x="580" y="173" textAnchor="middle" className={label}>Igneous rock</text>
        <text x="580" y="189" textAnchor="middle" className={small}>cooling + crystallization</text>
      </g>
      <g>
        <rect x="465" y="290" width="160" height="52" rx="10" className="d-node d-node-sed" />
        <text x="545" y="313" textAnchor="middle" className={label}>Sediment</text>
        <text x="545" y="329" textAnchor="middle" className={small}>weathering + transport</text>
      </g>
      <g>
        <rect x="245" y="330" width="160" height="52" rx="10" className="d-node d-node-sedrock" />
        <text x="325" y="353" textAnchor="middle" className={label}>Sedimentary rock</text>
        <text x="325" y="369" textAnchor="middle" className={small}>deposition + lithification</text>
      </g>
      <g>
        <rect x="95" y="240" width="165" height="52" rx="10" className="d-node d-node-meta" />
        <text x="177" y="263" textAnchor="middle" className={label}>Metamorphic rock</text>
        <text x="177" y="279" textAnchor="middle" className={small}>heat + pressure + fluids</text>
      </g>
      <g>
        <rect x="95" y="110" width="150" height="52" rx="10" className="d-node d-node-ign" />
        <text x="170" y="133" textAnchor="middle" className={label}>Melting</text>
        <text x="170" y="149" textAnchor="middle" className={small}>deep burial / subduction</text>
      </g>

      <path d="M432 100 Q500 118 520 148" className="d-arrow-line" markerEnd="url(#rc-arrow)" />
      <path d="M600 204 Q590 250 575 286" className="d-arrow-line" markerEnd="url(#rc-arrow)" />
      <path d="M465 330 Q430 344 410 348" className="d-arrow-line" markerEnd="url(#rc-arrow)" />
      <path d="M245 356 Q225 350 210 330 Q195 300 190 296" className="d-arrow-line" markerEnd="url(#rc-arrow)" />
      <path d="M175 292 Q170 250 170 200" className="d-arrow-line" markerEnd="url(#rc-arrow)" />
      <path d="M245 130 Q290 105 320 100" className="d-arrow-line" markerEnd="url(#rc-arrow)" />
      <path d="M520 340 Q440 230 430 200 Q420 170 415 130" className="d-arrow-line dashed" markerEnd="url(#rc-arrow)" />

      <defs>
        <marker id="rc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="d-arrowhead" />
        </marker>
      </defs>
      <text x="360" y="404" textAnchor="middle" className={small}>
        Any rock can take any path. The dashed route is one example: sedimentary rock pushed deep and metamorphosed.
      </text>
    </svg>
  )
}

export function SilicateStructures() {
  const panels = [
    ['Independent tetrahedra', 'olivine', '1 tetrahedron'],
    ['Single chain', 'pyroxene', 'shares 2 oxygens'],
    ['Double chain', 'amphibole', 'shares 2–3 oxygens'],
    ['Sheet', 'mica', 'shares 3 oxygens'],
    ['3-D network', 'quartz, feldspar', 'shares all 4'],
  ]
  return (
    <svg viewBox="0 0 720 330" role="img" aria-label="Five basic silicate structures">
      {panels.map(([name, example, note], i) => {
        const x = 30 + i * 138
        return (
          <g key={name}>
            <rect x={x} y="40" width="118" height="210" rx="10" className="d-panel" />
            <text x={x + 59} y="62" textAnchor="middle" className="d-key">{name}</text>
            <g className="d-silicate">
              {i === 0 ? <polygon points={`${x + 59},100 ${x + 39},135 ${x + 79},135`} /> : null}
              {i === 1 ? (
                <polyline points={`${x + 22},132 ${x + 45},108 ${x + 68},132 ${x + 91},108`} />
              ) : null}
              {i === 2 ? (
                <>
                  <polyline points={`${x + 22},128 ${x + 45},104 ${x + 68},128 ${x + 91},104`} />
                  <polyline points={`${x + 22},152 ${x + 45},128 ${x + 68},152 ${x + 91},128`} />
                </>
              ) : null}
              {i === 3 ? (
                <>
                  <polygon points={`${x + 30},155 ${x + 60},120 ${x + 90},155`} />
                  <polygon points={`${x + 30},180 ${x + 60},145 ${x + 90},180`} />
                  <line x1={x + 30} y1="155" x2={x + 90} y2="155" />
                </>
              ) : null}
              {i === 4 ? (
                <>
                  <polygon points={`${x + 59},115 ${x + 39},150 ${x + 79},150`} />
                  <polygon points={`${x + 59},150 ${x + 39},185 ${x + 79},185`} />
                  <line x1={x + 59} y1="115" x2={x + 59} y2="185" />
                  <line x1={x + 39} y1="150" x2={x + 39} y2="185" />
                  <line x1={x + 79} y1="150" x2={x + 79} y2="185" />
                </>
              ) : null}
            </g>
            <text x={x + 59} y="212" textAnchor="middle" className={small}>{note}</text>
            <text x={x + 59} y="234" textAnchor="middle" className="d-key-sm">{example}</text>
          </g>
        )
      })}
      <text x="360" y="292" textAnchor="middle" className={small}>
        Silicon–oxygen tetrahedron (SiO₄⁴⁻): one small Si ion bonded to four O ions.
      </text>
      <text x="360" y="312" textAnchor="middle" className={small}>
        More shared oxygens → more complex structure → different mineral group and cleavage.
      </text>
    </svg>
  )
}

export function IgneousTextures() {
  const crystals = (x: number, big: boolean) =>
    Array.from({ length: big ? 14 : 46 }).map((_, i) => {
      const cx = x + 20 + ((i * 37) % 150)
      const cy = 70 + ((i * 53) % 120)
      const size = big ? 13 : 6
      return <rect key={i} x={cx} y={cy} width={size} height={size} rx="1.5" className="d-crystal" transform={`rotate(${(i * 29) % 90} ${cx + size / 2} ${cy + size / 2})`} />
    })

  return (
    <svg viewBox="0 0 720 320" role="img" aria-label="Igneous rock textures and cooling rate">
      {[
        ['Phaneritic', 'slow cooling, intrusive', true],
        ['Aphanitic', 'fast cooling, extrusive', false],
        ['Porphyritic', 'two cooling stages', null],
      ].map(([name, note, big], i) => {
        const x = 25 + i * 235
        return (
          <g key={String(name)}>
            <rect x={x} y="45" width="200" height="170" rx="10" className="d-panel" />
            <text x={x + 100} y="32" textAnchor="middle" className={label}>{name}</text>
            {big === null ? (
              <>
                {crystals(x, false)}
                {crystals(x, true)}
              </>
            ) : (
              crystals(x, Boolean(big))
            )}
            <text x={x + 100} y="242" textAnchor="middle" className={small}>{note}</text>
          </g>
        )
      })}
      <text x="360" y="286" textAnchor="middle" className={small}>
        Crystal size records cooling history. The slower the melt cools, the larger the crystals grow.
      </text>
      <text x="360" y="306" textAnchor="middle" className={small}>
        Glassy texture (e.g. obsidian) means the melt cooled so fast that crystals could not form.
      </text>
    </svg>
  )
}

export function VolcanoCrossSection() {
  return (
    <svg viewBox="0 0 720 400" role="img" aria-label="Volcano cross-section with eruption hazards">
      <rect x="0" y="120" width="720" height="260" className="d-mantle" />
      <path d="M0 300 L120 300 L250 150 L300 120 L340 120 L420 210 L520 260 L620 300 L720 300 L720 400 L0 400 Z" className="d-crust" />
      <ellipse cx="300" cy="340" rx="80" ry="34" className="d-magma" />
      <path d="M300 320 L300 140 L286 122 M300 320 L300 140 L316 122" className="d-magma" strokeWidth="9" />
      <ellipse cx="301" cy="122" rx="20" ry="9" className="d-crater" />
      <path d="M300 120 Q330 50 420 30 L470 30 Q390 70 360 120 Z" className="d-ash" />
      <text x="470" y="42" className={small}>ash column</text>
      <path d="M320 150 Q390 210 430 260" className="d-pyro" strokeWidth="10" />
      <text x="440" y="250" className={small}>pyroclastic flow</text>
      <path d="M330 170 Q420 300 500 330" className="d-lahar" strokeWidth="8" />
      <text x="505" y="330" className={small}>lahar</text>
      <path d="M270 160 Q220 220 200 290" className="d-lava" strokeWidth="8" />
      <text x="150" y="300" className={small}>lava flow</text>
      <text x="300" y="368" textAnchor="middle" className={small}>magma chamber</text>
      <line x1="300" y1="300" x2="300" y2="220" className="d-dash" />
      <text x="310" y="266" className={small}>conduit</text>
      <text x="360" y="386" textAnchor="middle" className={small}>
        Dissolved gas + viscosity decide whether the eruption is gentle or explosive.
      </text>
    </svg>
  )
}

export function CoalStages() {
  const stages = [
    ['Peat', 'plant remains, soft brown', 'lowest carbon', 'd-peat'],
    ['Lignite', 'soft brown coal', 'burial + compaction', 'd-lignite'],
    ['Bituminous', 'dense black coal', 'heat drives off volatiles', 'd-bituminous'],
    ['Anthracite', 'hard, shiny black', 'metamorphism, highest carbon', 'd-anthracite'],
  ]
  return (
    <svg viewBox="0 0 720 300" role="img" aria-label="Stages in the formation of coal">
      {stages.map(([name, desc, note, cls], i) => {
        const x = 20 + i * 175
        return (
          <g key={name}>
            <rect x={x} y="40" width="150" height="170" rx="10" className="d-panel" />
            <rect x={x + 25} y="65" width="100" height="60" rx="6" className={cls} />
            <text x={x + 75} y="145" textAnchor="middle" className={label}>{name}</text>
            <text x={x + 75} y="164" textAnchor="middle" className={small}>{desc}</text>
            <text x={x + 75} y="186" textAnchor="middle" className={small}>{note}</text>
            {i < 3 ? <path d={`M${x + 155} 120 L${x + 168} 120`} className="d-arrow" /> : null}
          </g>
        )
      })}
      <text x="360" y="246" textAnchor="middle" className={small}>
        Increasing heat, pressure and burial → higher fixed carbon → higher energy ranking.
      </text>
      <text x="360" y="268" textAnchor="middle" className={small}>
        Anthracite is a metamorphic rock; the earlier stages are sedimentary.
      </text>
    </svg>
  )
}

export function GeologicTime() {
  const rows: [string, string, string, string][] = [
    ['Hadean', '4,600–4,000 Ma', 'Earth forms, magma ocean, iron catastrophe', 'd-eon-1'],
    ['Archean', '4,000–2,500 Ma', 'first continents, earliest life', 'd-eon-2'],
    ['Proterozoic', '2,500–541 Ma', 'oxygenation, multicellular life', 'd-eon-3'],
    ['Paleozoic', '541–252 Ma', 'hard-shelled life, land plants, coal', 'd-eon-4'],
    ['Mesozoic', '252–66 Ma', 'dinosaurs; major petroleum source rocks', 'd-eon-5'],
    ['Cenozoic', '66 Ma–present', 'mammals, ice ages, humans', 'd-eon-6'],
  ]
  return (
    <svg viewBox="0 0 720 400" role="img" aria-label="The geologic time scale from 4,600 million years ago to the present">
      <text x="30" y="28" className={label}>Geologic time scale (not to scale)</text>
      {rows.map(([name, span, note, cls], i) => (
        <g key={name}>
          <rect x="30" y={48 + i * 52} width="120" height="44" className={cls} />
          <text x="42" y={68 + i * 52} className="d-key">{name}</text>
          <text x="42" y={84 + i * 52} className={small}>{span}</text>
          <text x="170" y={78 + i * 52} className={small}>{note}</text>
        </g>
      ))}
      <path d="M640 50 L640 360" className="d-arrow" />
      <text x="648" y="60" className={small}>older</text>
      <text x="648" y="356" className={small}>younger</text>
      <text x="365" y="388" textAnchor="middle" className={small}>
        Relative dating built the order; radiometric dates later added the numbers.
      </text>
    </svg>
  )
}

export function MetamorphicGrade() {
  const stages = ['Shale', 'Slate', 'Phyllite', 'Schist', 'Gneiss', 'Migmatite']
  return (
    <svg viewBox="0 0 720 330" role="img" aria-label="Increasing metamorphic grade from shale to migmatite">
      <defs>
        <linearGradient id="mg-grad" x1="0" x2="1">
          <stop offset="0" stopColor="var(--d-grad-1)" />
          <stop offset="0.5" stopColor="var(--d-grad-2)" />
          <stop offset="1" stopColor="var(--d-grad-3)" />
        </linearGradient>
      </defs>
      <rect x="40" y="60" width="640" height="34" rx="8" fill="url(#mg-grad)" />
      <text x="40" y="46" className={small}>low grade</text>
      <text x="600" y="46" className={small}>high grade → melting</text>
      {stages.map((name, i) => {
        const x = 55 + i * 108
        return (
          <g key={name}>
            <text x={x} y="82" className={label} fill="#141414">{name}</text>
            <line x1={x - 8} y1="98" x2={x - 8} y2="120" className="d-line" />
            <text x={x - 8} y="138" textAnchor="middle" className={small}>
              {['clay, quartz', 'clay, mica', 'mica, chlorite', 'biotite, garnet', 'feldspar, quartz', 'partial melt'][i]}
            </text>
          </g>
        )
      })}
      <text x="360" y="196" textAnchor="middle" className={small}>
        Index minerals appear in order as temperature and pressure rise.
      </text>
      <text x="360" y="220" textAnchor="middle" className={small}>
        Chlorite → muscovite → biotite → garnet → staurolite → sillimanite
      </text>
      <rect x="40" y="242" width="640" height="40" rx="8" className="d-panel" />
      <text x="360" y="266" textAnchor="middle" className={small}>
        Contact metamorphism = heat near magma (low pressure); regional = heat + directed stress (mountain belts).
      </text>
      <text x="360" y="310" textAnchor="middle" className={small}>
        Foliation develops because platy minerals rotate and recrystallize under differential stress.
      </text>
    </svg>
  )
}
