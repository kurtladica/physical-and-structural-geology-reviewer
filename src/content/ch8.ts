import type { Chapter } from '../types'

export const ch8: Chapter = {
  id: 'ch8',
  number: 8,
  title: 'Sedimentary Rocks',
  subtitle: 'Weathering, deposition, classification, coal and the structures that record environments',
  pdf: 'GS 21L 8 Sedimentary Rocks.pdf',
  pages: 'pp. 1–24',
  accent: '#8a7433',
  practice: [
    {
      id: 'ch8-p1',
      level: 'easy',
      question: 'A detrital rock is made mostly of rounded gravel-size particles. Name the rock and explain why the rounding matters.',
      hint: 'Rounded versus angular gravel has different names.',
      steps: [
        'Gravel-size particles (>2 mm) cemented together form conglomerate if rounded, breccia if angular.',
        'Rounding develops as particles collide during transport.',
        'Well-rounded gravel implies a longer transport distance or higher-energy environment.',
      ],
      answer: 'Conglomerate; rounding indicates abrasion during transport, so the grains travelled some distance.',
    },
    {
      id: 'ch8-p2',
      level: 'medium',
      question:
        'A sandstone is well sorted, has rounded grains, and is over 90% quartz. Another is poorly sorted, angular, and rich in feldspar and rock fragments. Which had the longer transport history, and what does that imply about the source?',
      hint: 'Use the sandstone parameters: sorting, shape and mineral composition.',
      steps: [
        'Well sorted + rounded + quartz-rich = long transport and/or prolonged reworking; unstable minerals have been destroyed.',
        'Poorly sorted + angular + feldspar/rock fragments = short transport from the source, rapid burial.',
        'The second rock is likely a graywacke or arkose close to its source.',
        'The first is a mature quartz sandstone, far from its source or heavily reworked.',
      ],
      answer: 'The quartz-rich, well-sorted, rounded sandstone had the longer transport history; the feldspar-rich, angular one was deposited close to its source.',
    },
    {
      id: 'ch8-p3',
      level: 'hard',
      question:
        'A 3 km thick sedimentary succession is 55% shale, 30% sandstone and 15% limestone. Calculate the thickness of each and explain why shale dominates the sedimentary record.',
      hint: 'Multiply the total thickness by each percentage.',
      steps: [
        'Shale: 0.55 × 3,000 m = 1,650 m.',
        'Sandstone: 0.30 × 3,000 m = 900 m.',
        'Limestone: 0.15 × 3,000 m = 450 m.',
        'Shale is fine-grained silt and clay deposited from quiet, slow currents; such settings are widespread, and fine sediment is easily transported and preserved.',
        'The lesson notes shale accounts for well over half of all sedimentary rocks.',
      ],
      answer: 'Shale 1,650 m, sandstone 900 m, limestone 450 m. Shale dominates because fine sediment settles in quiet water and is widely preserved.',
    },
  ],
  topics: [
    {
      id: 'sediment-formation',
      title: 'From Weathering to Sedimentary Rock',
      tagline: 'Breaking, moving, settling, and locking sediment together',
      source: { file: 'GS 21L 8 Sedimentary Rocks.pdf', pages: 'pp. 3–7' },
      objectives: [
        'List the steps that create sedimentary rock.',
        'Explain the difference between weathering, erosion, transport and deposition.',
        'Define diagenesis, compaction and cementation.',
      ],
      intro: {
        what: 'Sedimentary rocks form from material produced by weathering, moved by erosion and transport, deposited, and then lithified by compaction and cementation.',
        why: 'They cover about 75% of land areas, contain most fossils, and record past environments — the main archive of Earth history.',
        before: ['The rock cycle.', 'Weathering as a surface process.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Break a brick, carry the pieces to a river, let them settle in a quiet pool, then press and glue them together. Weathering breaks, erosion and transport carry, deposition settles, and lithification glues. That is the sedimentary recipe.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Most of Earth’s solid surface consists of either sediment or sedimentary rock; about **75 percent of land areas** are covered by them. Sedimentary rocks contain fossils, vital tools for studying the geologic past, and provide much of the basic information needed to reconstruct Earth history.',
        },
        {
          t: 'p',
          text: 'Formation begins with **weathering**, **erosion**, **deposition** and **diagenesis/lithification**.',
        },
        {
          t: 'p',
          text: '**Weathering** involves the physical disintegration and chemical decomposition of pre-existing igneous, metamorphic and sedimentary rocks. It generates solid particles and ions in solution — the raw materials for sedimentary rocks. Soluble constituents are carried away by runoff and groundwater; solid particles are moved downslope by gravity (mass wasting) before running water, groundwater, wind and glacial ice transport them. **Transportation** moves materials from their source to where they accumulate.',
        },
        {
          t: 'p',
          text: '**Deposition** of solid particles occurs when wind and water currents slow down and when glacial ice melts. The word *sedimentary* comes from the Latin *sedimentum*, “to settle”, referring to solid material settling out of a fluid. Deposition of dissolved material is different: ions are removed when chemical or temperature changes cause crystallisation and precipitation, or when organisms remove dissolved material to build shells.',
        },
        {
          t: 'p',
          text: 'As deposition continues, older sediments are buried beneath younger layers and gradually converted to rock by **compaction** and **cementation**. These and other changes are called **diagenesis** (*dia* = change, *genesis* = origin) — all the changes short of metamorphism that take place in texture, composition and physical properties after deposition.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Lithification is not metamorphism',
          text: 'Compaction and cementation harden sediment into rock at low temperature and pressure. If heat and pressure become high enough to recrystallise the minerals, the rock becomes metamorphic instead.',
        },
      ],
      example: {
        problem:
          'A granite hill sheds sand and clay into a river that slows as it enters a lake. Trace the material from bedrock to a laminated lake sediment, naming each process.',
        given: ['Granite source.', 'River entering a lake.', 'Fine laminated sediment at the lake bottom.'],
        required: 'A process chain from source to sedimentary rock.',
        steps: [
          { label: 'Weathering', text: 'Feldspar in granite chemically alters to clay; quartz survives as sand-sized grains.' },
          { label: 'Erosion and transport', text: 'The river carries the sand and clay downstream; grains collide and round.' },
          { label: 'Deposition', text: 'As the current slows in the lake, coarse sand settles first, then fine clay.' },
          { label: 'Diagenesis', text: 'Burial compacts the mud; cement precipitates between grains.' },
          { label: 'Result', text: 'Fine clay-rich layers become shale; the coarser fraction becomes sandstone.' },
        ],
        answer: 'Weathering → erosion/transport → deposition (sorted by grain size) → compaction and cementation → shale and sandstone.',
      },
      selfCheck: [
        { q: 'What percentage of land areas is covered by sediment or sedimentary rock?', a: 'About 75 percent.' },
        { q: 'What is diagenesis?', a: 'All the changes short of metamorphism that occur in texture, composition and physical properties after sediments are deposited.' },
        { q: 'How does deposition of dissolved material differ from deposition of solid particles?', a: 'It is not controlled by current strength; ions precipitate when chemical or temperature changes cause crystallisation, or when organisms use them to build shells.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The term sedimentary comes from a Latin word meaning:',
          options: ['To melt', 'To settle', 'To fold', 'To erupt'],
          answer: 1,
          explain: 'Sedimentum means “to settle”, referring to solid material settling out of water or air.',
        },
        {
          type: 'mcq',
          prompt: 'Compaction and cementation together are called:',
          options: ['Weathering', 'Lithification', 'Metamorphism', 'Erosion'],
          answer: 1,
          explain: 'Lithification converts sediment into rock; it is part of diagenesis.',
        },
        {
          type: 'tf',
          prompt: 'Diagenesis includes metamorphism.',
          answer: false,
          explain: 'Diagenesis covers changes short of metamorphism.',
        },
      ],
      cards: [
        { front: 'Sedimentary sequence', back: 'Weathering → erosion/transport → deposition → diagenesis/lithification.' },
        { front: 'Diagenesis', back: 'All changes in texture, composition and physical properties after deposition, short of metamorphism; includes compaction and cementation.' },
        { front: 'Sedimentary cover', back: 'About 75% of land areas are covered by sediment or sedimentary rock; they contain most fossils and record past environments.' },
      ],
    },
    {
      id: 'detrital-rocks',
      title: 'Detrital Sedimentary Rocks',
      tagline: 'Particle size, sorting and shape tell the transport story',
      source: { file: 'GS 21L 8 Sedimentary Rocks.pdf', pages: 'pp. 8–14' },
      objectives: [
        'Define detrital sedimentary rock.',
        'Classify shale, siltstone, mudstone, sandstone, conglomerate and breccia.',
        'Interpret sorting, rounding and mineral composition in terms of transport distance and energy.',
      ],
      intro: {
        what: 'Detrital rocks are accumulations of solid particles produced by mechanical and chemical weathering, transported and deposited.',
        why: 'Particle size and texture let geologists reconstruct current strength, transport distance and depositional environment.',
        before: ['Weathering, transport and deposition.', 'Sediment sizes: gravel, sand, silt, clay.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Shake a jar of mixed sand and gravel in water, then let it settle: gravel drops first, sand next, mud last. Detrital rocks are that sorted mixture turned to stone. Round grains travelled far; angular grains stayed near home; quartz survives long journeys while feldspar does not.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Detrital** sedimentary rocks are an accumulation of material that originates and is transported as solid particles derived from both mechanical and chemical weathering. Other common minerals are feldspars and micas; because chemical weathering rapidly transforms these, their presence indicates that erosion and deposition were fast enough to preserve primary minerals from the source rock. Particle size is not only a convenient division — grain size also provides information about depositional environments, because currents sort particles: the stronger the current, the larger the particle carried.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Shale', def: 'A sedimentary rock of silt- and clay-size particles. Fine-grained detrital rocks account for well over half of all sedimentary rocks. The grains are too small to identify without great magnification, making shale harder to study. Tiny grains indicate gradual settling from relatively quiet, non-turbulent currents.' },
            { term: 'Siltstone', def: 'Silt-dominated rock without fissility.' },
            { term: 'Mudstone', def: 'Fine-grained rock that breaks into chunks rather than thin sheets.' },
            { term: 'Sandstone', def: 'Rock in which sand-size grains predominate; after shale, the most abundant sedimentary rock.' },
            { term: 'Conglomerate', def: 'Composed largely of gravels; the gravel-size particles are rounded.' },
            { term: 'Breccia', def: 'Also gravel-dominated, but the gravel-size particles are sharp and angular. Large particles abrade and round rapidly during transport, so angular clasts imply a short journey from the source.' },
          ],
        },
        {
          t: 'p',
          text: '**Sandstone parameters.** Three clues reveal the formation environment:',
        },
        {
          t: 'ol',
          items: [
            '**Sorting** — well sorted = long provenance, exposed to uniform energy for longer; poorly sorted = short provenance, possibly an abrupt change in energy at deposition.',
            '**Shape** — rounded/high sphericity = long provenance, high-energy environment; angular/low sphericity = short provenance, low-energy environment.',
            '**Mineral composition** — high quartz = long provenance; high ferromagnesian/feldspar content = short provenance.',
          ],
        },
        {
          t: 'p',
          text: 'Sandstone types: **quartz sandstone**, where quartz dominates because of its durability; **arkose**, containing appreciable feldspar (25 percent or more); and **graywacke**, a dark rock with abundant rock fragments and matrix. Graywacke’s poor sorting and angular grains suggest transport over only a relatively short distance followed by rapid deposition.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Reading a sandstone',
          text: 'Ask three questions in order: how well sorted? how rounded? how much quartz? The answers point to a nearby source (immature) or a distant, repeatedly reworked source (mature).',
        },
      ],
      example: {
        problem:
          'A sandstone contains 30% feldspar, abundant clay matrix, angular grains and a wide range of grain sizes. Name it and interpret its history.',
        given: ['30% feldspar.', 'Abundant matrix.', 'Angular, poorly sorted grains.'],
        required: 'Rock name plus transport and deposition interpretation.',
        steps: [
          { label: 'Feldspar content', text: 'At least 25% feldspar points to arkose (or a feldspar-rich graywacke if rock fragments and matrix dominate).' },
          { label: 'Sorting', text: 'Poorly sorted grains indicate a short transport distance or a rapidly changing current.' },
          { label: 'Shape', text: 'Angular grains confirm little abrasion — the sediment did not travel far.' },
          { label: 'Matrix', text: 'Abundant fine matrix suggests rapid deposition, burying fine material with the sand.' },
          { label: 'History', text: 'Erosion of a nearby granite or gneiss, short transport, rapid burial.' },
        ],
        answer: 'Arkose (feldspathic sandstone) deposited rapidly close to a feldspar-rich source.',
      },
      selfCheck: [
        { q: 'Which detrital rock accounts for well over half of all sedimentary rocks?', a: 'Shale.' },
        { q: 'What does poor sorting indicate?', a: 'A short transport distance or an abrupt change in current energy at deposition.' },
        { q: 'How do conglomerate and breccia differ?', a: 'Both are gravel-dominated; conglomerate has rounded clasts, breccia has angular clasts.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The primary basis for distinguishing detrital sedimentary rocks is:',
          options: ['Colour', 'Particle size', 'Fossil content', 'Chemical formula'],
          answer: 1,
          explain: 'Particle size is the main criterion for naming detrital rocks (shale, sandstone, conglomerate, etc.).',
        },
        {
          type: 'mcq',
          prompt: 'A sandstone with 30% feldspar is called:',
          options: ['Quartz sandstone', 'Arkose', 'Graywacke', 'Chert'],
          answer: 1,
          explain: 'Arkose contains appreciable feldspar (25% or more).',
        },
        {
          type: 'mcq',
          prompt: 'Angular gravel-size clasts cemented together form:',
          options: ['Conglomerate', 'Breccia', 'Shale', 'Limestone'],
          answer: 1,
          explain: 'Breccia has sharp, angular gravel clasts; conglomerate has rounded ones.',
        },
      ],
      cards: [
        { front: 'Detrital sedimentary rock', back: 'Rock formed from solid particles produced by weathering, transported and deposited; classified mainly by particle size.' },
        { front: 'Shale', back: 'Silt- and clay-size detrital rock with fissility; the most abundant sedimentary rock, deposited from quiet currents.' },
        { front: 'Sandstone types', back: 'Quartz sandstone (quartz-rich, durable), arkose (≥25% feldspar), graywacke (dark, poorly sorted, rock fragments and matrix).' },
        { front: 'Conglomerate vs breccia', back: 'Both gravel-dominated; conglomerate has rounded clasts, breccia has angular clasts indicating short transport.' },
      ],
    },
    {
      id: 'chemical-rocks',
      title: 'Chemical Sedimentary Rocks',
      tagline: 'Limestone, dolostone, chert and evaporites',
      source: { file: 'GS 21L 8 Sedimentary Rocks.pdf', pages: 'pp. 15–18' },
      objectives: [
        'Define chemical sedimentary rock and its two precipitation routes.',
        'Describe limestone, dolostone, chert and evaporites.',
        'Distinguish inorganic from biochemical origins.',
      ],
      intro: {
        what: 'Chemical sedimentary rocks form from ions carried in solution that precipitate, either inorganically or through organisms.',
        why: 'They record water chemistry, evaporation, reefs and biological activity, and they are major resources (cement, salt, gypsum).',
        before: ['Dissolved ions and precipitation.', 'The detrital classification.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Dissolve salt in water, then let the water evaporate: crystals appear. Chemical sedimentary rocks form the same way, either by evaporation or by organisms pulling ions out of water to build shells. Limestone is the most common; rock salt and gypsum form in drying basins.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Chemical sediments derive from ions carried in solution to lakes and seas. Some of the material precipitates, becoming rocks such as limestone, chert and rock salt. Precipitation occurs in two ways:',
        },
        {
          t: 'ul',
          items: [
            '**Inorganic processes** such as evaporation and chemical activity (e.g. travertine, oolitic limestone).',
            '**Organic (biochemical) processes** of water-dwelling organisms (e.g. reefal limestone, coquina, chalk).',
          ],
        },
        {
          t: 'deflist',
          items: [
            { term: 'Limestone', def: 'About 10 percent of the total volume of all sedimentary rocks and the most abundant chemical sedimentary rock. Composed chiefly of the mineral calcite (CaCO₃); forms by inorganic means or biochemical processes.' },
            { term: 'Dolostone', def: 'Composed of the calcium–magnesium carbonate mineral dolomite [CaMg(CO₃)₂]. Significant quantities form when magnesium-rich waters circulate through limestone, replacing some calcium ions with magnesium — dolomitization.' },
            { term: 'Chert', def: 'A name for compact, hard rocks made of microcrystalline quartz (SiO₂); colour varies with impurities. Types: flint (dark, from organic matter), jasper (red, from iron oxide), agate (banded), and petrified wood (silica-rich material such as volcanic ash buries trees and ancient wood is replaced by microcrystalline quartz).' },
            { term: 'Evaporites', def: 'Deposits formed by precipitation from evaporating water in basins. Common minerals: halite (NaCl, chief component of rock salt) and gypsum (hydrous calcium sulfate, CaSO₄·2H₂O, the main ingredient of rock gypsum).' },
          ],
        },
        {
          t: 'table',
          head: ['Rock', 'Composition', 'Origin', 'Example or use'],
          rows: [
            ['Limestone', 'Calcite (CaCO₃)', 'Inorganic or biochemical', 'Cement, reefal limestone, coquina, chalk'],
            ['Dolostone', 'Dolomite CaMg(CO₃)₂', 'Dolomitization of limestone', 'Similar uses to limestone'],
            ['Chert', 'Microcrystalline quartz (SiO₂)', 'Biochemical or replacement', 'Flint, jasper, agate, petrified wood'],
            ['Rock salt', 'Halite (NaCl)', 'Evaporation', 'Salt resource'],
            ['Rock gypsum', 'Gypsum (CaSO₄·2H₂O)', 'Evaporation', 'Plaster'],
          ],
          caption: 'Chemical sedimentary rocks and their compositions.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Biochemical is still chemical',
          text: 'A shell is made of ions removed from water by an organism. That is a biological process, but the resulting rock is still classified as chemical sedimentary rock (biochemical origin).',
        },
      ],
      example: {
        problem:
          'A rock is composed of CaCO₃, fizzes in weak acid, and consists of shell fragments cemented together. Another is made of microcrystalline quartz, is dark grey, and breaks with a conchoidal fracture. Identify both, including their likely origins.',
        given: ['Rock A: CaCO₃, effervesces, shell fragments.', 'Rock B: microcrystalline quartz, dark, conchoidal fracture.'],
        required: 'Names and origins.',
        steps: [
          { label: 'Rock A composition', text: 'CaCO₃ with effervescence identifies limestone.' },
          { label: 'Rock A origin', text: 'Shell fragments show a biochemical origin — this is coquina-like limestone.' },
          { label: 'Rock B composition', text: 'Microcrystalline quartz with conchoidal fracture is chert.' },
          { label: 'Rock B subtype', text: 'The dark colour comes from organic matter, so it is flint.' },
        ],
        answer: 'A = biochemical limestone (coquina); B = chert, specifically flint.',
      },
      selfCheck: [
        { q: 'What are the two ways chemical sediments precipitate?', a: 'Inorganic processes (evaporation, chemical activity) and organic/biochemical processes (organisms extracting ions).' },
        { q: 'What is dolomitization?', a: 'Magnesium-rich water circulating through limestone replaces some calcium with magnesium, converting calcite to dolomite.' },
        { q: 'Name the four types of chert described in the lesson.', a: 'Flint, jasper, agate and petrified wood.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The most abundant chemical sedimentary rock is:',
          options: ['Chert', 'Limestone', 'Rock salt', 'Gypsum'],
          answer: 1,
          explain: 'Limestone makes up about 10% of all sedimentary rock volume and is the most abundant chemical sedimentary rock.',
        },
        {
          type: 'mcq',
          prompt: 'Dolostone is composed mainly of:',
          options: ['CaCO₃', 'CaMg(CO₃)₂', 'SiO₂', 'NaCl'],
          answer: 1,
          explain: 'Dolostone is made of the mineral dolomite, CaMg(CO₃)₂.',
        },
        {
          type: 'mcq',
          prompt: 'Which chert variety is red because of iron oxide?',
          options: ['Flint', 'Jasper', 'Agate', 'Petrified wood'],
          answer: 1,
          explain: 'Jasper is red microcrystalline quartz coloured by iron oxide.',
        },
      ],
      cards: [
        { front: 'Chemical sedimentary rock', back: 'Rock formed from ions in solution that precipitate inorganically (evaporation, chemical activity) or biochemically (organisms).' },
        { front: 'Limestone and dolostone', back: 'Limestone: calcite (CaCO₃), most abundant chemical sedimentary rock. Dolostone: dolomite CaMg(CO₃)₂, formed by dolomitization.' },
        { front: 'Chert varieties', back: 'Microcrystalline quartz: flint (dark, organic matter), jasper (red, iron oxide), agate (banded), petrified wood (silica replacement).' },
        { front: 'Evaporites', back: 'Precipitates from evaporating basins: halite (NaCl) and gypsum (CaSO₄·2H₂O).' },
      ],
    },
    {
      id: 'coal',
      title: 'Organic Sedimentary Rocks and Coal',
      tagline: 'From swamp plants to anthracite',
      source: { file: 'GS 21L 8 Sedimentary Rocks.pdf', pages: 'pp. 18–20' },
      objectives: [
        'Define organic sedimentary rock and its main example, coal.',
        'List the stages of coal formation.',
        'Explain the link between carbon content, energy ranking and metamorphism.',
      ],
      intro: {
        what: 'Organic sedimentary rocks form from carbon-rich remains of organisms. Coal is the primary example: a combustible rock made of chemically altered plant material.',
        why: 'Coal records swamp environments, is a major energy resource, and its progression to anthracite links sedimentary and metamorphic processes.',
        before: ['Sediment deposition and diagenesis.', 'Metamorphism (preview).'],
      },
      simple: [
        {
          t: 'p',
          text: 'Pile up dead plants in a swamp where oxygen is low, bury them, squeeze out water and gases, and heat them. The result gets blacker, harder and more energy-rich: peat → lignite → bituminous coal → anthracite.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Coal** is a rock that burns. It usually forms in stagnant swamps where conditions are oxygen-deficient, and is composed of organic matter such as plant fragments that are chemically altered but still identifiable.',
        },
        {
          t: 'steps',
          items: [
            { label: 'Accumulation of plant remains', text: 'Dead plants normally decompose in oxygen-rich environments. A swamp allows plant material to build up because oxygen is limited.' },
            { label: 'Formation of peat', text: 'Partial decomposition in an oxygen-poor swamp creates peat, a soft brown material in which plant structures are still easily recognised. With shallow burial, peat slowly changes to lignite, a soft brown coal.' },
            { label: 'Lignite and bituminous coal', text: 'Higher temperatures drive chemical reactions that yield water and organic gases (volatiles). As more sediment accumulates, water and volatiles are pressed out and the proportion of fixed carbon — the remaining solid combustible material — increases. Greater carbon content means a higher energy ranking as a fuel.' },
            { label: 'Anthracite', text: 'When sedimentary layers are folded and deformed during mountain building, heat and pressure cause further loss of volatiles and water. This metamorphoses bituminous coal into anthracite, a very hard, shiny, black metamorphic rock.' },
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Coal crosses the rock-cycle boundary',
          text: 'Peat, lignite and bituminous coal are sedimentary; anthracite is metamorphic. The same organic material has been transformed by burial and then by tectonic heat and pressure.',
        },
      ],
      diagram: {
        key: 'coal',
        title: 'Stages of coal formation',
        caption: 'Increasing burial, heat and pressure raise the fixed-carbon content and the energy ranking.',
      },
      example: {
        problem:
          'A coal bed is folded and cleaved, very hard and shiny, and has a higher carbon content than a nearby flat-lying black coal. Identify both coals and explain the difference.',
        given: ['Flat-lying black coal.', 'Folded, hard, shiny coal with higher carbon.'],
        required: 'Names and the process that connects them.',
        steps: [
          { label: 'Flat-lying coal', text: 'A black, layered coal formed by burial and compaction is bituminous.' },
          { label: 'Folded coal', text: 'Deformation associated with mountain building adds heat and pressure.' },
          { label: 'Volatile loss', text: 'Water and volatiles are driven off, raising the fixed-carbon fraction.' },
          { label: 'Product', text: 'The hard, shiny, higher-carbon rock is anthracite — a metamorphic rock.' },
        ],
        answer: 'Bituminous coal transformed into anthracite by metamorphism during mountain building.',
      },
      selfCheck: [
        { q: 'In what environment does coal usually form?', a: 'Stagnant, oxygen-deficient swamps where plant remains accumulate.' },
        { q: 'List the stages from plant remains to anthracite.', a: 'Plant accumulation → peat → lignite → bituminous coal → anthracite.' },
        { q: 'What does higher fixed carbon mean for a coal?', a: 'A higher energy ranking as a fuel.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which coal stage is a metamorphic rock?',
          options: ['Peat', 'Lignite', 'Bituminous', 'Anthracite'],
          answer: 3,
          explain: 'Anthracite forms when bituminous coal is subjected to heat and pressure during mountain building.',
        },
        {
          type: 'mcq',
          prompt: 'Coal is classified as which type of sedimentary rock?',
          options: ['Detrital', 'Chemical', 'Organic', 'Evaporite'],
          answer: 2,
          explain: 'Coal forms from carbon-rich remains of organisms, making it an organic sedimentary rock.',
        },
        {
          type: 'tf',
          prompt: 'Increasing fixed carbon raises a coal’s energy ranking.',
          answer: true,
          explain: 'The lesson states that greater carbon content means greater energy ranking as a fuel.',
        },
      ],
      cards: [
        { front: 'Coal', back: 'An organic sedimentary rock that burns, formed from chemically altered plant remains in oxygen-poor swamps.' },
        { front: 'Coal stages', back: 'Plant accumulation → peat → lignite → bituminous coal → anthracite (metamorphic).' },
        { front: 'Fixed carbon', back: 'The remaining solid combustible material; higher fixed carbon means a higher energy ranking.' },
      ],
    },
    {
      id: 'sedimentary-structures',
      title: 'Sedimentary Structures and Resources',
      tagline: 'Reading ancient environments from beds, ripples and mud cracks',
      source: { file: 'GS 21L 8 Sedimentary Rocks.pdf', pages: 'pp. 21–23' },
      objectives: [
        'Identify beds, laminations, cross-bedding, ripple marks, mud cracks and fossils.',
        'Interpret what each structure says about the depositional environment.',
        'List resources obtained from sedimentary rocks.',
      ],
      intro: {
        what: 'Sedimentary structures are features formed during or shortly after deposition — layers, cross-beds, ripples, mud cracks and fossils.',
        why: 'They are the main clues to ancient currents, water depth, exposure and climate, and they matter for groundwater and resources.',
        before: ['Sedimentary rock classification.', 'Depositional processes.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Mud cracks mean the mud dried out. Ripples mean water or wind moved the sand. Cross-beds mean dunes or bars migrated. Each structure is a footprint of an environment you can no longer see.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Beds/strata', def: 'Sedimentary rocks form as layer upon layer of sediment accumulates in various depositional environments.' },
            { term: 'Laminations', def: 'Layering thinner than 10 mm, caused by fluctuations in flow conditions; expressed by variations in particle size, sediment composition or grain alignment.' },
            { term: 'Cross-bedding', def: 'Layers of sedimentary rock that are inclined to the horizontal, recording migrating dunes, bars or ripples.' },
            { term: 'Ripple marks', def: 'Small waves of sand that develop on the surface of a sediment layer by the action of moving water or air.' },
            { term: 'Mud cracks', def: 'Structures indicating that the sediment was alternately wet and dry.' },
            { term: 'Fossils', def: 'Remains or traces of prehistoric life; important inclusions in sediment and sedimentary rocks and key indicators of past environments.' },
          ],
        },
        {
          t: 'table',
          head: ['Resource', 'Material', 'Sedimentary rock or type'],
          rows: [
            ['Salt', 'Halite (NaCl)', 'Non-clastic; fine to coarse crystalline'],
            ['Gypsum', 'CaSO₄·2H₂O', 'Non-clastic; fine to coarse crystalline'],
            ['Gravel', 'Conglomerate, breccia', 'Coarse (over 2 mm)'],
            ['Oil/gas', 'Altered plant fragments', 'Non-clastic; fine-grained organic matter'],
            ['Cement (limestone)', 'Calcite (CaCO₃)', 'Limestone'],
          ],
          caption: 'Resources from sedimentary rocks, from the lesson’s summary table.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Structures plus composition',
          text: 'A rock’s name tells you what it is; its structures tell you where it formed. Combine both: “cross-bedded quartz sandstone” implies a high-energy sandy environment such as a dune or shallow marine bar.',
        },
      ],
      example: {
        problem:
          'A red sandstone contains large-scale cross-beds and no fossils; the overlying mudstone has mud cracks and ripple marks. Interpret the change in environment.',
        given: ['Cross-bedded red sandstone below.', 'Mud cracks and ripples in mudstone above.'],
        required: 'Environmental interpretation of each unit and the transition.',
        steps: [
          { label: 'Sandstone', text: 'Large cross-beds indicate migrating dunes or bars in a high-energy current; red colour suggests oxidising conditions.' },
          { label: 'Mudstone', text: 'Ripple marks indicate moving water or air; mud cracks indicate periodic drying.' },
          { label: 'Transition', text: 'The environment changed from an energetic sandy setting to quieter, intermittently exposed muddy flats.' },
          { label: 'Interpretation', text: 'A likely regression or shoreline progradation: dunes/beach sand overlain by tidal-flat mud.' },
        ],
        answer: 'High-energy sandy dunes or bars (oxidising) passing upward into quiet, periodically exposed mudflats — a shallowing or shoreline-progradation sequence.',
      },
      selfCheck: [
        { q: 'How thick is a lamination?', a: 'Less than 10 mm.' },
        { q: 'What do mud cracks indicate?', a: 'That the sediment was alternately wet and dry.' },
        { q: 'Name three resources from sedimentary rocks.', a: 'Salt, gypsum, gravel, oil/gas, and limestone for cement (any three).' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Layers inclined to the horizontal in a sedimentary rock are called:',
          options: ['Laminations', 'Cross-bedding', 'Mud cracks', 'Beds'],
          answer: 1,
          explain: 'Cross-bedding records inclined layers formed by migrating dunes, bars or ripples.',
        },
        {
          type: 'mcq',
          prompt: 'Mud cracks indicate:',
          options: ['Deep water', 'Alternating wet and dry conditions', 'High-grade metamorphism', 'Volcanic activity'],
          answer: 1,
          explain: 'The sediment dried out and cracked, then was often refilled — evidence of exposure.',
        },
        {
          type: 'tf',
          prompt: 'Ripple marks can be formed by either water or air.',
          answer: true,
          explain: 'The lesson defines them as small waves of sand formed by moving water or air.',
        },
      ],
      cards: [
        { front: 'Sedimentary structures', back: 'Beds/strata, laminations (<10 mm), cross-bedding, ripple marks, mud cracks and fossils — clues to depositional environments.' },
        { front: 'Cross-bedding', back: 'Layers inclined to the horizontal, recording migrating dunes, bars or ripples in moving water or wind.' },
        { front: 'Sedimentary resources', back: 'Salt (halite), gypsum, gravel (conglomerate/breccia), oil and gas (organic matter), and limestone for cement.' },
      ],
    },
  ],
}
