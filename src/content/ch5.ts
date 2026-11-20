import type { Chapter } from '../types'

export const ch5: Chapter = {
  id: 'ch5',
  number: 5,
  title: 'Minerals and the Rock Cycle',
  subtitle: 'The building blocks: what minerals are, how to identify them, and how rocks transform',
  pdf: 'GS 21L 5 Minerals and Rock Cycle.pdf',
  pages: 'pp. 1–26',
  accent: '#5b7a3a',
  practice: [
    {
      id: 'ch5-p1',
      level: 'easy',
      question: 'Galena has a specific gravity of about 7.5 and quartz about 2.5. How many times denser is galena than quartz?',
      hint: 'Specific gravity is a ratio, so divide one by the other.',
      steps: ['Divide the specific gravities: 7.5 ÷ 2.5.', '= 3.', 'Galena is about three times as dense as quartz — typical of a lead sulfide ore mineral.'],
      answer: 'About 3 times denser.',
    },
    {
      id: 'ch5-p2',
      level: 'medium',
      question: 'A mineral sample has a mass of 54 g and a volume of 20 cm³. Calculate its density and suggest whether it could be quartz (specific gravity ≈ 2.65).',
      hint: 'Density = mass / volume; 1 g/cm³ = specific gravity 1.',
      steps: [
        'ρ = m / V = 54 g / 20 cm³.',
        'ρ = 2.7 g/cm³.',
        'Specific gravity is numerically the same in g/cm³, so SG ≈ 2.7.',
        'That is close to quartz (2.65) and to typical crustal rock (2.7); the sample is consistent with quartz.',
      ],
      answer: '2.7 g/cm³, consistent with quartz (though density alone does not identify a mineral).',
    },
    {
      id: 'ch5-p3',
      level: 'hard',
      question:
        'Using the atomic masses in the course element table (Si = 28, O = 16), calculate the mass percentage of oxygen in quartz, SiO₂, and in olivine, Mg₂SiO₄ (Mg = 24).',
      hint: 'Find the formula mass, then divide the total mass of oxygen by it.',
      steps: [
        'Quartz: formula mass = 28 + (2 × 16) = 60.',
        'Oxygen mass = 2 × 16 = 32.',
        'Oxygen % = 32/60 × 100 ≈ 53.3%.',
        'Olivine: formula mass = (2 × 24) + 28 + (4 × 16) = 48 + 28 + 64 = 140.',
        'Oxygen mass = 64; oxygen % = 64/140 × 100 ≈ 45.7%.',
        'Both are oxygen-rich, which is why oxygen is the most abundant element in the crust (46.6%).',
      ],
      answer: 'Quartz ≈ 53.3% oxygen; olivine ≈ 45.7% oxygen.',
    },
  ],
  topics: [
    {
      id: 'what-minerals-are',
      title: 'What Minerals Are and How They Form',
      tagline: 'Five tests, three formation routes, and one definition of a rock',
      source: { file: 'GS 21L 5 Minerals and Rock Cycle.pdf', pages: 'pp. 3–8' },
      objectives: [
        'State the five characteristics of a mineral.',
        'Decide whether ice, coal, petrified wood, quartz, sulfur and gold are minerals.',
        'Describe precipitation, crystallization and biological mineral formation.',
      ],
      intro: {
        what: 'A mineral is a naturally occurring, inorganic solid with an orderly crystalline structure and a definite chemical composition that allows for some variation.',
        why: 'Minerals are the ingredients of rocks. Identifying them is the first step in reading any rock’s origin.',
        before: ['Atoms, elements and chemical formulas.', 'The three states of matter.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A mineral is a natural crystal with a recipe. It must be made by nature, not by life, be solid, have its atoms in a repeating pattern, and have a chemical formula that stays basically the same. Table salt fits; coal does not, because it comes from plants and has no fixed crystal recipe.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Mineral:** any naturally occurring inorganic solid that possesses an orderly crystalline structure and a definite chemical composition that allows for some variation.',
        },
        {
          t: 'ol',
          items: [
            '**Naturally occurring** — formed by natural geologic processes.',
            '**Inorganic** — not produced by life; naturally occurring halite (table salt) counts as a mineral.',
            '**Solid substance** — only solid crystalline substances are considered minerals.',
            '**Ordered internal structure** — atoms are arranged in an orderly, repetitive manner.',
            '**Definite chemical composition** — certain elements can substitute for others of similar size without changing the internal structure, allowing limited variation.',
          ],
        },
        {
          t: 'p',
          text: '**Mineral or not?** The lesson poses this for ice, coal, petrified wood, quartz, sulfur and gold. Quartz, sulfur and gold are minerals. Ice is a naturally occurring crystalline solid and qualifies when formed naturally. Coal is organic and lacks a crystalline structure, so it is not a mineral. Petrified wood is wood replaced by silica: the material is mineral, but the object is a fossil, not a single mineral species.',
        },
        {
          t: 'p',
          text: '**Rock:** any solid mass of mineral, or mineral-like, matter that occurs naturally as part of our planet. Some rocks are composed almost entirely of one mineral; some are composed of non-mineral matter. Most rocks are aggregates of several minerals — granite, for example, is a mixture of quartz, feldspar, mica and amphibole.',
        },
        {
          t: 'p',
          text: 'Minerals form in three main ways:',
        },
        {
          t: 'deflist',
          items: [
            { term: '1. Precipitation from aqueous solution', def: 'Dissolved ions stay apart while the solution is unsaturated. A drop in temperature or water loss by evaporation brings it closer to saturation; once saturated, ions bond and solid crystals (salts) precipitate.' },
            { term: '2. Crystallization of molten rock', def: 'Similar to water freezing but more complicated. A crystallising molten mass produces igneous rock made of a mosaic of intergrown crystals that tend to lack well-developed faces.' },
            { term: '3. Biological processes', def: 'Water-dwelling organisms transform dissolved material into mineral matter. Most make calcium carbonate hard parts; diatoms and radiolarians make glassy silica skeletons, which become microscopic quartz crystals — the main constituent of chert and flint.' },
          ],
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Saturation',
          text: '“Saturated” means the solution can hold no more dissolved material. That is the trigger for crystals to appear — not simply “water plus minerals”.',
        },
      ],
      example: {
        problem:
          'A salty lake shrinks by evaporation and white crystals form on the shore. Another lake is cooled rapidly and the same mineral precipitates. Explain both using saturation, and name the mineral if the ions are Na⁺ and Cl⁻.',
        given: ['Evaporation in one lake.', 'Rapid cooling in another.', 'Ions Na⁺ and Cl⁻.'],
        required: 'Explain precipitation in both cases and identify the mineral.',
        steps: [
          { label: 'Starting state', text: 'Both lakes are undersaturated: dissolved ions are kept apart by motion in the water.' },
          { label: 'Evaporation', text: 'Water is lost, so ion concentration rises. When saturation is reached, ions bond and crystals form.' },
          { label: 'Cooling', text: 'Lower temperature reduces solubility, also pushing the solution to saturation and precipitation.' },
          { label: 'Mineral', text: 'Na⁺ + Cl⁻ forms halite, NaCl — the chief component of rock salt.' },
        ],
        answer: 'Halite forms in both cases: evaporation or cooling drives the solution to saturation so Na⁺ and Cl⁻ bond into crystals.',
      },
      selfCheck: [
        { q: 'List the five characteristics of a mineral.', a: 'Naturally occurring, inorganic, solid, ordered internal structure, and a definite chemical composition (with limited variation).' },
        { q: 'Why is coal not a mineral?', a: 'It is organic, from plant remains, and does not have a crystalline structure.' },
        { q: 'How do diatoms and radiolarians contribute to mineral formation?', a: 'They make glassy silica skeletons; on burial these form microscopic quartz that makes up chert and flint.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which substance is NOT a mineral by the lesson’s definition?',
          options: ['Quartz', 'Halite', 'Coal', 'Gold'],
          answer: 2,
          explain: 'Coal is organic and non-crystalline; the others are naturally occurring crystalline solids.',
        },
        {
          type: 'mcq',
          prompt: 'Minerals precipitate from a water solution when the solution becomes:',
          options: ['Hotter', 'Unsaturated', 'Saturated', 'More acidic'],
          answer: 2,
          explain: 'Once saturation is reached, dissolved ions bond and crystals precipitate.',
        },
        {
          type: 'tf',
          prompt: 'A rock can be composed almost entirely of one mineral.',
          answer: true,
          explain: 'Some rocks are nearly monomineralic, though most are aggregates of several minerals.',
        },
      ],
      cards: [
        { front: 'Mineral definition', back: 'A naturally occurring, inorganic solid with an orderly crystalline structure and a definite chemical composition that allows for some variation.' },
        { front: 'Five mineral characteristics', back: 'Naturally occurring, inorganic, solid, ordered internal structure, definite chemical composition.' },
        { front: 'Three ways minerals form', back: 'Precipitation from aqueous solution, crystallization of molten rock, and biological processes (e.g. shells, silica skeletons).' },
      ],
    },
    {
      id: 'mineral-properties',
      title: 'Identifying Minerals by Physical Properties',
      tagline: 'Lustre, streak, hardness, cleavage — reading a mineral without a lab',
      source: { file: 'GS 21L 5 Minerals and Rock Cycle.pdf', pages: 'pp. 9–15' },
      objectives: [
        'Describe the optical properties used in mineral identification.',
        'Explain hardness, tenacity, cleavage and the three fracture types.',
        'Use density, specific gravity and special properties as diagnostic tests.',
      ],
      intro: {
        what: 'Minerals are identified by measurable physical properties: how they reflect light, break, scratch, feel and respond to acid or magnets.',
        why: 'These tests are fast and require little equipment, and they are the basis of field identification.',
        before: ['Mineral definition.', 'Basic idea of crystal structure and bonding.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Identifying a mineral is like identifying a person from several clues: height, voice, handwriting. One clue can mislead — colour especially — but several together are reliable. A dark metallic mineral that leaves a grey streak and feels heavy is probably galena; a glassy mineral that scratches glass and has no cleavage is probably quartz.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**1. Optical properties**',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Lustre', def: 'The appearance or quality of light reflected from the surface. Metallic lustre resembles metal regardless of colour. Most minerals are nonmetallic: vitreous (glassy), dull or earthy, pearly, silky or greasy.' },
            { term: 'Ability to transmit light', def: 'Opaque transmits no light; translucent transmits light but not an image; transparent transmits both light and an image.' },
            { term: 'Colour', def: 'Diagnostic for only a few minerals. Using colour alone is often ambiguous or misleading (e.g. fluorite and quartz occur in many colours).' },
            { term: 'Streak', def: 'The colour of a mineral in powdered form, obtained by rubbing it on an unglazed porcelain streak plate. Although the hand-sample colour may vary, streak is usually consistent.' },
          ],
        },
        {
          t: 'p',
          text: '**2. Crystal shape or habit** is the common or characteristic shape of a crystal or aggregate. Terms include equant, bladed, fibrous, tabular, prismatic, platy and blocky. The lesson figure illustrates thin rounded crystals that break into fibres, elongated crystals flattened in one direction, minerals with stripes or bands of different colour or texture, and groups shaped like cubes.',
        },
        {
          t: 'p',
          text: '**3. Mineral strength** — how easily a mineral breaks or deforms:',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Tenacity', def: 'Toughness; resistance to breaking or deforming.' },
            { term: 'Hardness', def: 'Resistance to abrasion or scratching; one of the most useful diagnostic properties.' },
            { term: 'Cleavage', def: 'The tendency to break along planes of weak bonding, producing flat, repeated surfaces.' },
            { term: 'Fracture', def: 'Breaking where bonds are equally or nearly equally strong in all directions. Types: irregular (uneven), conchoidal (smooth curved surfaces), and splintery or fibrous (splinters or fibres).' },
          ],
        },
        {
          t: 'p',
          text: '**4. Density and specific gravity.** Density is mass per unit volume. Specific gravity is a dimensionless ratio of a mineral’s weight to the weight of an equal volume of water. Most common minerals have a specific gravity between 2 and 3. Quartz (SiO₂) is about 2.5; metallic minerals such as copper, magnetite and pyrite are more than twice the specific gravity of quartz; galena (PbS) is about 7.5.',
        },
        {
          t: 'p',
          text: '**Other properties** include magnetism, double refraction (a transparent calcite placed over text makes the letters appear twice) and effervescence (calcite reacting with weak acid).',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Do not trust colour alone',
          text: 'Quartz and fluorite come in many colours. Use streak, hardness, cleavage and lustre together. Colour is a hint, not a diagnosis.',
        },
      ],
      example: {
        problem:
          'A student has three samples: (A) dark grey, metallic, leaves a grey streak, very heavy; (B) colourless, glassy, scratches glass, breaks with curved smooth surfaces, no flat cleavage; (C) white, reacts with weak acid, shows double refraction. Identify each using the properties.',
        given: ['A: metallic, grey streak, heavy.', 'B: glassy, hard, conchoidal fracture.', 'C: carbonate, effervescence, double refraction.'],
        required: 'Match each sample to a mineral and justify with at least two properties.',
        steps: [
          { label: 'Sample A', text: 'Metallic lustre + grey streak + high specific gravity (~7.5) matches galena, PbS.' },
          { label: 'Sample B', text: 'Glassy, harder than glass, and conchoidal fracture with no cleavage matches quartz (SiO₂).' },
          { label: 'Sample C', text: 'Effervescence in weak acid and double refraction are diagnostic of calcite (CaCO₃).' },
          { label: 'Method', text: 'Each identification uses at least two independent properties, which is more reliable than colour.' },
        ],
        answer: 'A = galena; B = quartz; C = calcite.',
      },
      selfCheck: [
        { q: 'What is the difference between cleavage and fracture?', a: 'Cleavage breaks along planes of weak bonding, producing flat surfaces; fracture occurs where bonds are equally strong in all directions, producing uneven, curved or splintery surfaces.' },
        { q: 'Why is streak more reliable than colour?', a: 'Hand-sample colour varies between samples, but the powdered colour is usually consistent.' },
        { q: 'Which mineral fizzes in weak acid and shows double refraction?', a: 'Calcite.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The colour of a mineral in powdered form is its:',
          options: ['Lustre', 'Streak', 'Cleavage', 'Tenacity'],
          answer: 1,
          explain: 'Streak is obtained by rubbing the mineral on a streak plate and observing the powder colour.',
        },
        {
          type: 'mcq',
          prompt: 'Smooth, curved breakage surfaces are described as:',
          options: ['Irregular fracture', 'Conchoidal fracture', 'Splintery fracture', 'Cleavage'],
          answer: 1,
          explain: 'Conchoidal fracture produces smooth, curved surfaces, like broken glass.',
        },
        {
          type: 'mcq',
          prompt: 'Which mineral has a specific gravity of about 7.5?',
          options: ['Quartz', 'Galena', 'Calcite', 'Halite'],
          answer: 1,
          explain: 'Galena (PbS) is the lesson’s dense example at about 7.5; quartz is about 2.5.',
        },
      ],
      cards: [
        { front: 'Lustre', back: 'The appearance of light reflected from a mineral’s surface: metallic, vitreous, dull/earthy, pearly, silky or greasy.' },
        { front: 'Cleavage vs fracture', back: 'Cleavage breaks along planes of weak bonding (flat surfaces); fracture breaks where bonds are equally strong (irregular, conchoidal, splintery).' },
        { front: 'Specific gravity', back: 'The ratio of a mineral’s weight to the weight of an equal volume of water; most common minerals are 2–3, galena ~7.5.' },
        { front: 'Special properties', back: 'Magnetism, double refraction (calcite) and effervescence with weak acid (calcite).' },
      ],
    },
    {
      id: 'rock-forming-minerals',
      title: 'Rock-Forming Minerals and the Silicates',
      tagline: 'Eight elements, one tetrahedron, five structures',
      source: { file: 'GS 21L 5 Minerals and Rock Cycle.pdf', pages: 'pp. 16–22' },
      objectives: [
        'List the eight abundant elements of the continental crust with their percentages.',
        'Explain the silicon–oxygen tetrahedron and the five silicate structures.',
        'Distinguish silicates from nonsilicates and give examples of both.',
      ],
      intro: {
        what: 'Most rocks are built from a small set of silicate minerals, all based on the silicon–oxygen tetrahedron, plus a group of nonsilicates such as carbonates, oxides, sulfides and halides.',
        why: 'Knowing these minerals lets you read a rock’s composition and predict its behaviour — and the silicates dominate the crust.',
        before: ['Mineral definition and properties.', 'Elements and chemical formulas.'],
      },
      simple: [
        {
          t: 'p',
          text: 'The silicate tetrahedron is a tiny pyramid: one silicon atom at the centre, four oxygen atoms at the corners. Imagine these pyramids as Lego bricks. Joined alone, they make olivine; in chains, pyroxene; in double chains, amphibole; in sheets, mica; in a full 3-D framework, quartz and feldspar. The way the bricks connect controls how the mineral looks and breaks.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Only **eight elements** make up the vast majority of rock-forming minerals and represent more than **98 percent by weight** of the continental crust. Oxygen is 46.6%, silicon 27.7%, aluminium 8.1%, iron 5.0%, calcium 3.6%, sodium 2.8%, potassium 2.6%, magnesium 2.1%, with others 1.5%.',
        },
        {
          t: 'p',
          text: 'The two common rock-forming mineral groups are:',
        },
        {
          t: 'ol',
          items: [
            '**Silicates** — Si and O are the major components.',
            '**Nonsilicates** — other mineral groups without Si (as the lesson puts it, groups without Si and O; in practice they lack the silicate tetrahedron).',
          ],
        },
        {
          t: 'p',
          text: 'The **silicon–oxygen tetrahedron** consists of four oxygen ions covalently bonded to one comparatively small silicon ion, forming a tetrahedron — a pyramid with four identical faces.',
        },
        {
          t: 'table',
          head: ['Silicate structure', 'Example group'],
          rows: [
            ['Independent tetrahedra', 'Olivine group'],
            ['Single chain', 'Pyroxene group'],
            ['Double chain', 'Amphibole group'],
            ['Sheet structure', 'Mica group'],
            ['Three-dimensional network', 'Plagioclase group, quartz'],
          ],
          caption: 'Five basic silica structures from the lesson; structural complexity increases downward.',
        },
        {
          t: 'table',
          head: ['Group', 'Key ion', 'Minerals (formula)', 'Economic use'],
          rows: [
            ['Carbonates', 'CO₃²⁻', 'Calcite (CaCO₃); dolomite CaMg(CO₃)₂', 'Portland cement, lime'],
            ['Halides', 'Cl⁻, F⁻, Br⁻', 'Halite (NaCl); fluorite (CaF₂); sylvite (KCl)', 'Common salt; steelmaking; fertilizer'],
            ['Oxides', 'O²⁻', 'Hematite (Fe₂O₃); magnetite (Fe₃O₄); corundum (Al₂O₃); ice (H₂O)', 'Iron ore, pigment, gemstone, abrasive'],
            ['Sulfides', 'S²⁻', 'Galena (PbS); sphalerite (ZnS); pyrite (FeS₂); chalcopyrite (CuFeS₂); cinnabar (HgS)', 'Ores of lead, zinc, copper, mercury; sulfuric acid'],
            ['Sulfates', 'SO₄²⁻', 'Gypsum (CaSO₄·2H₂O); anhydrite (CaSO₄); barite (BaSO₄)', 'Plaster; drilling mud'],
            ['Native elements', 'single elements', 'Gold (Au); copper (Cu); diamond (C); sulfur (S); graphite (C); silver (Ag); platinum (Pt)', 'Jewellery, conductors, abrasives, chemicals'],
          ],
          caption: 'Table 5.1, Common nonsilicate mineral groups, reproduced from the lesson slide.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Why silicates dominate',
          text: 'Silicon and oxygen are the two most abundant elements in the crust, and the tetrahedron can polymerise in many ways. That combination makes the silicate group the largest and most important mineral family.',
        },
      ],
      diagram: {
        key: 'silicate-structures',
        title: 'Five ways to join tetrahedra',
        caption: 'Each structure corresponds to a mineral group, and the sharing of oxygen atoms controls cleavage and crystal habit.',
      },
      example: {
        problem:
          'A mineral is a sheet silicate with perfect basal cleavage and shiny, flexible flakes. Which structural group does it belong to, and which mineral group is it? Explain the link between structure and cleavage.',
        given: ['Sheet silicate.', 'Perfect basal cleavage.', 'Shiny flexible flakes.'],
        required: 'Identify the structure and mineral group, and explain the cleavage.',
        steps: [
          { label: 'Structure', text: 'Sheets of tetrahedra sharing three oxygens = sheet structure.' },
          { label: 'Mineral group', text: 'The mica group (biotite, muscovite) fits the description.' },
          { label: 'Cleavage', text: 'Strong bonds within sheets but weak bonds between sheets cause the mineral to split into thin flat sheets.' },
          { label: 'Contrast', text: 'A 3-D framework such as quartz has equally strong bonds in all directions, so it fractures instead of cleaving.' },
        ],
        answer: 'Sheet structure → mica group. Weak bonds between sheets produce perfect basal cleavage.',
      },
      selfCheck: [
        { q: 'What percentage of the continental crust do the eight abundant elements represent?', a: 'More than 98 percent by weight.' },
        { q: 'Which two elements are the major components of silicates?', a: 'Silicon and oxygen.' },
        { q: 'Match the structures to examples: independent tetrahedra, single chain, sheet, 3-D network.', a: 'Olivine, pyroxene, mica, and quartz/plagioclase respectively.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The most abundant element in the continental crust is:',
          options: ['Silicon', 'Oxygen', 'Aluminium', 'Iron'],
          answer: 1,
          explain: 'Oxygen is 46.6% by weight, ahead of silicon at 27.7%.',
        },
        {
          type: 'mcq',
          prompt: 'The mica group has which silicate structure?',
          options: ['Independent tetrahedra', 'Single chain', 'Sheet', 'Three-dimensional network'],
          answer: 2,
          explain: 'Mica is a sheet silicate, which explains its perfect basal cleavage.',
        },
        {
          type: 'mcq',
          prompt: 'Galena (PbS) belongs to which nonsilicate group?',
          options: ['Oxides', 'Sulfides', 'Carbonates', 'Halides'],
          answer: 1,
          explain: 'The sulfide group is built around S²⁻; galena is lead sulfide.',
        },
      ],
      cards: [
        { front: 'Eight abundant crustal elements', back: 'O 46.6%, Si 27.7%, Al 8.1%, Fe 5.0%, Ca 3.6%, Na 2.8%, K 2.6%, Mg 2.1% — over 98% of the continental crust.' },
        { front: 'Silicon–oxygen tetrahedron', back: 'Four oxygen ions covalently bonded to one small silicon ion, forming a four-faced pyramid — the building block of all silicates.' },
        { front: 'Five silicate structures', back: 'Independent tetrahedra (olivine), single chain (pyroxene), double chain (amphibole), sheet (mica), 3-D network (quartz, plagioclase).' },
        { front: 'Nonsilicate groups', back: 'Carbonates, halides, oxides, sulfides, sulfates and native elements — e.g. calcite, halite, hematite, galena, gypsum, gold.' },
      ],
    },
    {
      id: 'rock-cycle',
      title: 'Rocks, Texture, and the Rock Cycle',
      tagline: 'Three rock families and the paths that connect them',
      source: { file: 'GS 21L 5 Minerals and Rock Cycle.pdf', pages: 'pp. 23–25' },
      objectives: [
        'Explain how mineral composition and texture characterise a rock.',
        'Name the three rock groups and how each forms.',
        'Trace pathways through the rock cycle.',
      ],
      intro: {
        what: 'A rock is a solid mass of mineral or mineral-like matter. Its appearance is controlled by its minerals and its texture, and both reflect how it formed.',
        why: 'The rock cycle links igneous, sedimentary and metamorphic processes and shows that any rock can become any other rock.',
        before: ['Minerals, silicates and mineral properties.', 'A basic idea of weathering, heat and pressure.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of the rock cycle as a recycling system with three factories. The igneous factory melts and freezes rock. The sedimentary factory breaks rock down, moves it, and glues it together in layers. The metamorphic factory cooks and squeezes rock without melting it. Material moves between all three.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The nature and appearance of a rock is strongly influenced by the minerals that compose it. A rock’s **texture** — the size, shape and arrangement of its constituent minerals — also has a significant effect. Mineral composition and texture are a reflection of the geologic processes that created the rock.',
        },
        {
          t: 'p',
          text: 'Geologists divide rocks into three groups: **igneous, sedimentary and metamorphic**.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Igneous', def: 'Forms when molten rock cools and crystallises, either at depth or at the surface (Chapter 6).' },
            { term: 'Sedimentary', def: 'Forms from sediment produced by weathering, transported, deposited, then lithified by compaction and cementation (Chapter 8).' },
            { term: 'Metamorphic', def: 'Forms when a pre-existing rock is changed by heat, pressure and chemically active fluids without melting (Chapter 9).' },
          ],
        },
        {
          t: 'p',
          text: 'The rock cycle shows how the three groups are linked. Arrows represent processes: melting, cooling and crystallisation, weathering and erosion, transport and deposition, lithification, and metamorphism. The cycle is driven by Earth’s internal heat and by energy from the Sun acting on the surface.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Any rock can become any rock',
          text: 'A granite can be weathered into sand and become sandstone, or metamorphosed into gneiss, or melted into magma. The arrows are not a fixed loop.',
        },
      ],
      diagram: {
        key: 'rock-cycle',
        title: 'The rock cycle',
        caption: 'Processes link the three rock groups; the dashed path is one example of a sedimentary rock being buried and metamorphosed.',
      },
      example: {
        problem:
          'Trace a possible path from a granite outcrop to a shale, then to a gneiss, naming the processes at each step.',
        given: ['Start: granite (igneous, coarse-grained).', 'Middle: shale (fine-grained sedimentary).', 'End: gneiss (foliated metamorphic).'],
        required: 'A step-by-step pathway with named processes.',
        steps: [
          { label: 'Weathering', text: 'Granite is broken down physically and chemically; feldspars alter to clay minerals, quartz survives as sand.' },
          { label: 'Transport and deposition', text: 'Fine clay and silt are carried by water and settle in quiet water — the raw material of shale.' },
          { label: 'Lithification', text: 'Compaction and cementation turn the mud into shale.' },
          { label: 'Burial and metamorphism', text: 'Deep burial raises temperature and pressure; directed stress aligns mica, producing foliation.' },
          { label: 'Gneiss', text: 'At higher grade, light and dark minerals separate into bands — gneiss.' },
        ],
        answer:
          'Granite → weathering → transport → deposition → lithification → shale → burial and regional metamorphism → gneiss.',
        check: 'Note that the pathway crosses all three rock families and does not require melting.',
      },
      selfCheck: [
        { q: 'What two features characterise a rock and reflect its origin?', a: 'Mineral composition and texture.' },
        { q: 'Name the three rock groups.', a: 'Igneous, sedimentary and metamorphic.' },
        { q: 'What processes convert sediment into sedimentary rock?', a: 'Compaction and cementation (lithification), part of diagenesis.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A rock’s texture refers to:',
          options: ['Its colour only', 'The size, shape and arrangement of its minerals', 'Its chemical formula', 'Its age'],
          answer: 1,
          explain: 'Texture is the size, shape and arrangement of constituent minerals; together with composition it reflects origin.',
        },
        {
          type: 'mcq',
          prompt: 'Which rock group forms by cooling and crystallising molten rock?',
          options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Organic'],
          answer: 2,
          explain: 'Igneous rocks form when magma or lava solidifies.',
        },
        {
          type: 'tf',
          prompt: 'In the rock cycle, a sedimentary rock can only become another sedimentary rock.',
          answer: false,
          explain: 'Any rock can become any other through melting, weathering, burial or metamorphism.',
        },
      ],
      cards: [
        { front: 'Rock', back: 'Any solid mass of mineral, or mineral-like, matter that occurs naturally as part of our planet.' },
        { front: 'Texture and composition', back: 'The two basic rock features; together they reflect the geologic processes that formed the rock.' },
        { front: 'Three rock groups', back: 'Igneous (cooling melt), sedimentary (deposition + lithification), metamorphic (heat, pressure, fluids without melting).' },
      ],
    },
  ],
}
