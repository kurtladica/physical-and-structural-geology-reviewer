import type { Chapter } from '../types'

export const ch9: Chapter = {
  id: 'ch9',
  number: 9,
  title: 'Metamorphic Rocks',
  subtitle: 'Change without melting: drivers, textures, classification and environments',
  pdf: '08Geoscie11_METAMORPHIC ROCKS.pdf',
  pages: 'pp. 1–22',
  accent: '#6d5680',
  practice: [
    {
      id: 'ch9-p1',
      level: 'easy',
      question: 'A limestone recrystallises into a nonfoliated rock made of interlocking calcite. Name the metamorphic rock and its parent.',
      hint: 'Use the classification table: limestone → ?',
      steps: ['Limestone is composed of calcite.', 'Under heat and pressure the calcite recrystallises into coarse interlocking grains.', 'The nonfoliated product is marble.'],
      answer: 'Marble, from limestone (or dolomite).',
    },
    {
      id: 'ch9-p2',
      level: 'medium',
      question:
        'A shale is buried to 12 km depth. Using a geothermal gradient of 25 °C per km and a surface temperature of 20 °C, estimate the temperature it reaches and the metamorphic grade.',
      hint: 'Temperature increase = gradient × depth.',
      steps: [
        'Increase = 25 °C/km × 12 km = 300 °C.',
        'Temperature = 20 °C + 300 °C = 320 °C.',
        'This is within the metamorphic field (roughly 200–700 °C), in the low-to-intermediate grade range.',
        'The shale would begin to form slate and, with more heat and directed pressure, phyllite or schist.',
      ],
      answer: 'About 320 °C — low-to-intermediate grade metamorphism.',
    },
    {
      id: 'ch9-p3',
      level: 'hard',
      question:
        'Explain why a shale metamorphosed during mountain building develops foliation, while a limestone metamorphosed near a magma body does not.',
      hint: 'Compare differential stress with confining pressure, and the minerals involved.',
      steps: [
        'Mountain building applies differential stress: pressure is greater in one direction, flattening the rock.',
        'Shale contains platy clay and mica minerals; under directed stress they rotate and recrystallise with parallel alignment, producing foliation (slate → phyllite → schist).',
        'Contact metamorphism near magma is dominated by heat with relatively low, equal confining pressure.',
        'Limestone is made of equant calcite grains, which recrystallise randomly; without directed stress there is no preferred orientation, so marble is nonfoliated.',
      ],
      answer:
        'Foliation requires directed (differential) stress and platy minerals. Regional metamorphism supplies both; contact metamorphism supplies heat under confining pressure, so limestone becomes nonfoliated marble.',
    },
  ],
  topics: [
    {
      id: 'metamorphism-drivers',
      title: 'Metamorphism and What Drives It',
      tagline: 'Heat, pressure, stress and fluids — change in the solid state',
      source: { file: '08Geoscie11_METAMORPHIC ROCKS.pdf', pages: 'pp. 3–10' },
      objectives: [
        'Define metamorphism, parent rock and metamorphic grade.',
        'Explain the four drivers of metamorphism.',
        'Describe metasomatism with the wollastonite example.',
      ],
      intro: {
        what: 'Metamorphism (“change form”) alters the mineralogy, texture and sometimes chemical composition of a parent rock without melting it.',
        why: 'Metamorphic rocks record the pressure, temperature and stress conditions deep in the crust, and they are a major source of resources and building stone.',
        before: ['Mineral stability and silicate structures.', 'The rock cycle.', 'Temperature increasing with depth.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of clay in a kiln. It does not melt, but it becomes a different, harder material. Metamorphism is the geological kiln: heat, pressure, directed squeeze and hot fluids rearrange the atoms in a solid rock. If it melted completely, it would become igneous instead.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Metamorphic rocks are produced from pre-existing sedimentary and igneous rocks, as well as from other metamorphic rocks. Every metamorphic rock has a **parent rock** — the rock from which it formed. The degree to which a parent rock changes is its **metamorphic grade**, from low grade (low temperature and pressure) to high grade (high temperature and pressure).',
        },
        {
          t: 'deflist',
          items: [
            { term: '1. Heat', def: 'Provides the energy for the chemical reactions that recrystallise existing minerals. Sources: the geothermal gradient (about 25 °C per km) and cooling magma bodies.' },
            { term: '2. Confining pressure', def: 'Increases with depth as overlying rock thickens. Forces are applied equally in all directions, like water pressure. Confining pressure does not fold or fracture rock.' },
            { term: '3. Differential stress', def: 'Forces that are unequal in different directions. Unlike confining pressure, it is greater in one direction, so the rock deforms and minerals can align.' },
            { term: '4. Chemically active fluids', def: 'Hot fluids dissolve and transport ions from one site in a crystal structure to another, aiding recrystallisation. They become more reactive as temperature rises.' },
          ],
        },
        {
          t: 'p',
          text: '**Metasomatism** is the overall change of chemical composition of the surrounding rocks due to exchange of ions between hot, chemically active fluids and host rocks. The lesson’s example: when a silica-rich hydrothermal solution invades limestone, calcite reacts with silica to generate wollastonite (CaSiO₃), and carbon dioxide is driven off.',
        },
        { t: 'formula', tex: '\\mathrm{CaCO_3 + SiO_2 \\rightarrow CaSiO_3 + CO_2}', note: 'Calcite + silica → wollastonite + carbon dioxide, a metasomatic reaction.' },
        {
          t: 'callout',
          kind: 'note',
          title: 'Metamorphism versus melting',
          text: 'Metamorphism occurs in the solid state. If temperature reaches the melting point, the rock partially melts — the resulting migmatite is a boundary case, and complete melting produces magma.',
        },
      ],
      example: {
        problem:
          'A shale buried 8 km deep is intruded by a nearby granite. Identify which metamorphic drivers act on it and which is likely dominant close to the intrusion.',
        given: ['Shale at 8 km depth.', 'Adjacent cooling granite.'],
        required: 'List the drivers and identify the dominant one near the intrusion.',
        steps: [
          { label: 'Heat', text: 'The geothermal gradient gives roughly 200 °C at 8 km; the cooling granite adds much more heat locally.' },
          { label: 'Confining pressure', text: '8 km of overlying rock presses equally in all directions.' },
          { label: 'Differential stress', text: 'Regional tectonic stress may be present, but contact metamorphism is not defined by it.' },
          { label: 'Fluids', text: 'The granite releases hot, ion-rich fluids that promote recrystallisation and metasomatism.' },
          { label: 'Dominant driver', text: 'Close to the intrusion, heat dominates; this is contact metamorphism, producing a baked aureole.' },
        ],
        answer: 'Heat, confining pressure and fluids all act; heat from the granite dominates close to the intrusion.',
      },
      selfCheck: [
        { q: 'What is a parent rock?', a: 'The pre-existing rock from which a metamorphic rock formed.' },
        { q: 'What is the geothermal gradient used in the lesson?', a: 'About 25 °C per kilometre.' },
        { q: 'What is metasomatism?', a: 'A change in the overall chemical composition of rock caused by ion exchange with hot, chemically active fluids.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which driver of metamorphism applies forces unequally in different directions?',
          options: ['Confining pressure', 'Differential stress', 'Geothermal gradient', 'Hydrothermal fluids'],
          answer: 1,
          explain: 'Differential stress is unequal and deforms rock; confining pressure is equal in all directions.',
        },
        {
          type: 'mcq',
          prompt: 'Metamorphic grade refers to:',
          options: ['The colour of the rock', 'The degree of change from low to high temperature and pressure', 'The age of the rock', 'The grain size only'],
          answer: 1,
          explain: 'Grade expresses how much a parent rock changed, from low to high temperature and pressure.',
        },
        {
          type: 'tf',
          prompt: 'Confining pressure folds and fractures rock.',
          answer: false,
          explain: 'The lesson states confining pressure does not fold or fracture rock; differential stress does.',
        },
      ],
      cards: [
        { front: 'Metamorphism', back: 'A process that changes the mineralogy, texture and sometimes chemical composition of a parent rock without melting it.' },
        { front: 'Four drivers of metamorphism', back: 'Heat (geothermal gradient ~25 °C/km, magma), confining pressure, differential stress, and chemically active fluids.' },
        { front: 'Metasomatism', back: 'Chemical change of host rock through ion exchange with hot fluids; e.g. calcite + silica → wollastonite + CO₂.' },
      ],
    },
    {
      id: 'metamorphic-textures',
      title: 'Metamorphic Textures and Classification',
      tagline: 'Foliated and nonfoliated rocks, from slate to gneiss',
      source: { file: '08Geoscie11_METAMORPHIC ROCKS.pdf', pages: 'pp. 11–15' },
      objectives: [
        'Explain foliation and the three ways it develops.',
        'Distinguish foliated from nonfoliated metamorphic rocks.',
        'Classify slate, phyllite, schist, gneiss, marble, quartzite and hornfels by texture and parent rock.',
      ],
      intro: {
        what: 'Metamorphic rocks are classified primarily by texture: foliated rocks have planar alignment of minerals; nonfoliated rocks have randomly oriented grains.',
        why: 'Texture reveals whether directed stress acted, and the sequence slate → phyllite → schist → gneiss records increasing metamorphic grade.',
        before: ['Differential stress versus confining pressure.', 'Parent rocks and their minerals.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Press a ball of layered dough from both sides: the layers flatten and line up. Metamorphic foliation is the same — platy minerals rotate into parallel sheets. If the pressure is equal from all sides, the grains recrystallise randomly instead, and the rock looks granular.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Foliation** refers to any planar arrangement of mineral grains or crystals within a rock. It is a fundamental characteristic of strongly deformed metamorphic rocks, mainly those affected by folding. In metamorphic environments it is driven by compressional stress that shortens rock units, causing mineral grains to develop parallel or nearly parallel alignments. Foliation can occur by:',
        },
        {
          t: 'ol',
          items: [
            'Rotation of platy mineral grains.',
            'Recrystallisation that produces new minerals.',
            'Flattening of spherically shaped grains.',
          ],
        },
        {
          t: 'p',
          text: '**Nonfoliated** rocks do not exhibit a foliated texture. They recrystallise under confining pressure, so mineral grains have a random orientation. Marble, for example, is produced when the calcite in a parent limestone grows into a crystalline mass. **Porphyroblasts** are large crystals of certain minerals, such as garnet, that form in some metamorphic rocks; they are larger than other grains and distributed with space between them, like chocolate chips in a cookie.',
        },
        {
          t: 'table',
          head: ['Texture', 'Rock', 'Typical minerals', 'Identifying characteristics', 'Parent rock'],
          rows: [
            ['Nonfoliated', 'Marble', 'Calcite (or dolomite)', 'Coarse interlocking grains; rhombohedral cleavage; effervesces in acid', 'Limestone, dolomite'],
            ['Nonfoliated', 'Quartzite', 'Quartz', 'Interlocking quartz grains; sugary, vitreous lustre; scratches glass', 'Quartz sandstone'],
            ['Nonfoliated', 'Hornfels', 'Fine micas, ferromagnesian minerals, plagioclase', 'Fine-grained, dark, tough; may contain coarser minerals', 'Shale, basalt'],
            ['Slaty', 'Slate', 'Clay and other sheet silicates', 'Very fine-grained, earthy; splits into thin flat sheets (slaty cleavage)', 'Shale, mudstone, siltstone'],
            ['Intermediate (slaty–schistose)', 'Phyllite', 'Mica', 'Fine-grained, glossy sheen; splits along wavy surfaces', 'Shale, mudstone, siltstone'],
            ['Schistose', 'Schist', 'Biotite, muscovite, amphibole', 'Visible platy or elongated minerals in planar alignment; many varieties', 'Shale, mudstone, siltstone'],
            ['Gneissic', 'Gneiss', 'Feldspar, quartz, amphibole, biotite', 'Light and dark minerals segregated into layers or lenses; layers may be folded', 'Shale, granite, volcanic rocks'],
          ],
          caption: 'Table 15.1, classification and naming of metamorphic rocks (based primarily on texture).',
        },
        {
          t: 'p',
          text: 'The lesson’s cross-section (Fig. 15.14) shows a ~30 km crustal profile: shale becomes slate with vertical slaty cleavage, then phyllite, mica schist, garnet–mica schist, gneiss and finally migmatite at the highest grade, with a contact aureole around a solidifying pluton. The index-mineral chart shows chlorite → muscovite → biotite → garnet → staurolite → sillimanite with increasing grade, while quartz and feldspar persist throughout.',
        },
      ],
      diagram: {
        key: 'metamorphic-grade',
        title: 'Increasing metamorphic grade',
        caption: 'Shale → slate → phyllite → schist → gneiss → migmatite, with index minerals appearing as temperature and pressure rise.',
      },
      example: {
        problem:
          'A fine-grained rock splits into thin flat sheets with a dull earthy surface. Another has visible aligned mica and garnet porphyroblasts. A third is a hard, sugary white rock that scratches glass. Identify each.',
        given: ['A: fine, splits into flat sheets, earthy.', 'B: visible aligned mica with garnet.', 'C: hard, sugary, scratches glass.'],
        required: 'Rock names and textures.',
        steps: [
          { label: 'Rock A', text: 'Very fine-grained, splits into flat sheets, earthy = slate; texture is slaty cleavage.' },
          { label: 'Rock B', text: 'Visible aligned mica plus garnet porphyroblasts = garnet–mica schist; texture is schistose.' },
          { label: 'Rock C', text: 'Sugary, vitreous, scratches glass, quartz-rich = quartzite; nonfoliated.' },
          { label: 'Parent rocks', text: 'Slate and schist from shale; quartzite from quartz sandstone.' },
        ],
        answer: 'A = slate; B = garnet–mica schist; C = quartzite.',
      },
      selfCheck: [
        { q: 'What causes foliation?', a: 'Compressional (differential) stress that rotates platy grains, produces new minerals, and flattens spherical grains into parallel alignment.' },
        { q: 'Which metamorphic rock forms from limestone, and what texture does it have?', a: 'Marble; nonfoliated, with interlocking calcite grains.' },
        { q: 'What is a porphyroblast?', a: 'A large crystal (e.g. garnet) that grows in a metamorphic rock and is larger than the surrounding grains.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which sequence shows increasing metamorphic grade of a shale?',
          options: ['Gneiss → schist → phyllite → slate', 'Slate → phyllite → schist → gneiss', 'Marble → quartzite → slate', 'Schist → slate → gneiss → phyllite'],
          answer: 1,
          explain: 'Slate → phyllite → schist → gneiss tracks increasing temperature and pressure.',
        },
        {
          type: 'mcq',
          prompt: 'Quartzite forms from:',
          options: ['Limestone', 'Quartz sandstone', 'Shale', 'Basalt'],
          answer: 1,
          explain: 'Quartz sandstone recrystallises to quartzite; the interlocking quartz grains scratch glass.',
        },
        {
          type: 'mcq',
          prompt: 'A metamorphic rock with light and dark minerals segregated into layers is:',
          options: ['Slate', 'Phyllite', 'Schist', 'Gneiss'],
          answer: 3,
          explain: 'Gneissic texture is defined by compositional banding of light and dark minerals.',
        },
      ],
      cards: [
        { front: 'Foliation', back: 'A planar arrangement of mineral grains caused by compressional stress: rotation of platy grains, recrystallisation, and flattening of spherical grains.' },
        { front: 'Foliated sequence', back: 'Slate (slaty) → phyllite → schist (schistose) → gneiss (gneissic), reflecting increasing metamorphic grade of shale.' },
        { front: 'Nonfoliated rocks', back: 'Marble (from limestone), quartzite (from quartz sandstone), hornfels (from shale/basalt) — random grain orientation under confining pressure.' },
        { front: 'Porphyroblast', back: 'A large crystal, such as garnet, grown in a metamorphic rock and set in a finer matrix — “chocolate chips in a cookie”.' },
      ],
    },
    {
      id: 'metamorphic-environments',
      title: 'Metamorphic Environments',
      tagline: 'Where in the crust metamorphism happens, and why it matters',
      source: { file: '08Geoscie11_METAMORPHIC ROCKS.pdf', pages: 'pp. 16–22' },
      objectives: [
        'Describe contact, hydrothermal, burial, subduction-zone and regional metamorphism.',
        'Explain fault-zone and impact metamorphism.',
        'Identify the most common and widespread type.',
      ],
      intro: {
        what: 'Metamorphism occurs in several distinct settings, each with a characteristic combination of heat, pressure, stress and fluids.',
        why: 'The setting explains the rock’s texture and mineral assemblage, and links metamorphism to plate tectonics and magma intrusion.',
        before: ['Metamorphic drivers and textures.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Bake bread next to a hot oven and only the crust hardens (contact). Bury it under a pile of books and it compacts (burial). Squeeze it in a vice and it flattens (regional/subduction). Each setting leaves a different signature.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Contact (thermal) metamorphism', def: 'Occurs in Earth’s upper crust at low pressure, when rocks immediately surrounding a molten igneous body are “baked” at high temperature. Produces a contact aureole.' },
            { term: 'Hydrothermal metamorphism', def: 'Hot, ion-rich water circulates through pore spaces or fractures in rock, promoting recrystallisation and chemical change.' },
            { term: 'Burial metamorphism', def: 'Tends to occur where massive amounts of sedimentary or volcanic material accumulate in subsiding basins.' },
            { term: 'Subduction-zone metamorphism', def: 'Differential stress plays a major role in deforming rock as it is metamorphosed.' },
            { term: 'Regional metamorphism', def: 'Occurs in and near a subduction zone where tectonic forces build mountains and deform rocks. It is the most common and widespread type and affects broad regions of the crust.' },
            { term: 'Fault-zone metamorphism', def: 'Metamorphism along fault zones, where localised shear and crushing operate.' },
            { term: 'Impact metamorphism', def: 'Occurs when high-speed projectiles called meteorites strike Earth’s surface.' },
          ],
        },
        {
          t: 'table',
          head: ['Environment', 'Dominant condition', 'Scale', 'Typical product'],
          rows: [
            ['Contact/thermal', 'High temperature, low pressure', 'Local, around an intrusion', 'Hornfels, baked aureole'],
            ['Hydrothermal', 'Hot ion-rich fluids', 'Local to regional', 'Altered rock, ore deposits'],
            ['Burial', 'Moderate temperature and pressure', 'Basin-wide', 'Low-grade foliated or nonfoliated rock'],
            ['Subduction zone', 'Differential stress + pressure', 'Plate boundary', 'Foliated, deformed rock'],
            ['Regional', 'Heat + directed stress, mountain building', 'Very broad', 'Slate, schist, gneiss'],
            ['Fault zone', 'Shear and crushing', 'Local', 'Mylonite, fault breccia'],
            ['Impact', 'Extreme shock pressure', 'Local, crater scale', 'Shocked quartz, impact breccia'],
          ],
          caption: 'Metamorphic environments and their characteristic conditions.',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Note on missing content',
          text: 'The outline lists “Resources from metamorphic rocks”, but the corresponding slide in the supplied PDF is blank. That subtopic could not be extracted; it is flagged in the coverage checklist rather than invented.',
        },
      ],
      example: {
        problem:
          'A belt of folded schist and gneiss extends for hundreds of kilometres along an ancient mountain chain. Nearby, a granite pluton has a thin baked hornfels zone. Identify the two metamorphic environments.',
        given: ['Regional folded schist and gneiss.', 'Baked zone around a granite pluton.'],
        required: 'Name each environment and its dominant conditions.',
        steps: [
          { label: 'Regional belt', text: 'Broad scale, foliated rocks and folding indicate regional metamorphism during mountain building.' },
          { label: 'Regional conditions', text: 'Heat plus directed stress at a convergent boundary, affecting a wide area.' },
          { label: 'Aureole', text: 'A narrow baked zone around an intrusion is contact metamorphism.' },
          { label: 'Contact conditions', text: 'High temperature, low pressure, local scale.' },
        ],
        answer: 'The belt is regional metamorphism; the baked zone is contact (thermal) metamorphism around the pluton.',
      },
      selfCheck: [
        { q: 'Which metamorphic environment is the most common and widespread?', a: 'Regional metamorphism.' },
        { q: 'What causes contact metamorphism?', a: 'Heat from a molten igneous body baking the surrounding rock at low pressure.' },
        { q: 'In which environment does differential stress play a major role?', a: 'Subduction-zone metamorphism (and regional metamorphism).' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Contact metamorphism is characterised by:',
          options: ['High pressure and low temperature', 'High temperature and low pressure', 'Equal pressure in all directions only', 'Meteorite impact'],
          answer: 1,
          explain: 'It occurs in the upper crust near an intrusion: high temperature, low pressure.',
        },
        {
          type: 'mcq',
          prompt: 'The most widespread type of metamorphism is:',
          options: ['Contact', 'Burial', 'Regional', 'Impact'],
          answer: 2,
          explain: 'Regional metamorphism affects broad regions during mountain building.',
        },
        {
          type: 'tf',
          prompt: 'Impact metamorphism is caused by meteorite strikes.',
          answer: true,
          explain: 'High-speed projectiles striking Earth’s surface produce shock metamorphism.',
        },
      ],
      cards: [
        { front: 'Contact metamorphism', back: 'High-temperature, low-pressure baking of rock around an igneous intrusion, producing a contact aureole (e.g. hornfels).' },
        { front: 'Regional metamorphism', back: 'The most common and widespread type, caused by heat and directed stress during mountain building; produces slate, schist and gneiss.' },
        { front: 'Other environments', back: 'Hydrothermal (hot fluids), burial (subsiding basins), subduction-zone (differential stress), fault-zone, and impact (meteorite) metamorphism.' },
      ],
    },
  ],
}
