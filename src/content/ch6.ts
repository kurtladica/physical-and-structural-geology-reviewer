import type { Chapter } from '../types'

export const ch6: Chapter = {
  id: 'ch6',
  number: 6,
  title: 'Igneous Rocks',
  subtitle: 'From melt to crystal: settings, compositions and textures',
  pdf: 'GS 21L 6 Igneous Rocks.pdf',
  pages: 'pp. 1–14',
  accent: '#a4522f',
  practice: [
    {
      id: 'ch6-p1',
      level: 'easy',
      question: 'A granite contains about 70% quartz and potassium feldspar with only ~10% dark minerals. Is it felsic, intermediate or mafic?',
      hint: 'Use the lesson’s percentage boundaries.',
      steps: [
        'Granitic (felsic) rocks are composed mainly of non-ferromagnesian minerals such as quartz (~70%) and potassium feldspar, with about 10% dark silicates.',
        'Intermediate rocks contain at least 25% dark silicates.',
        'Mafic rocks contain at least 45% dark silicates.',
        'The sample matches the felsic description.',
      ],
      answer: 'Felsic (granitic).',
    },
    {
      id: 'ch6-p2',
      level: 'medium',
      question:
        'A lava flow cools in days at the surface; an intrusion of the same magma cools over 100,000 years at depth. Predict the texture of each and explain why.',
      hint: 'Crystal size depends on how long ions have to arrange themselves.',
      steps: [
        'Fast cooling at the surface leaves little time for crystals to grow → fine-grained (aphanitic) texture, possibly glassy.',
        'Slow cooling at depth gives ions time to organise → coarse-grained (phaneritic) texture.',
        'The surface rock is extrusive; the deep rock is intrusive.',
        'Both may have the same composition — texture records cooling history, not chemistry.',
      ],
      answer: 'Surface flow: aphanitic/extrusive. Deep intrusion: phaneritic/intrusive.',
    },
    {
      id: 'ch6-p3',
      level: 'hard',
      question:
        'A lava has 52% silica and erupts at about 1,100 °C. Another has 72% silica. Compare their viscosity, expected eruption style and likely dark-mineral content.',
      hint: 'Use the silica-as-composition-indicator section: high silica = felsic, viscous, lower temperature; low silica = mafic, fluid, hotter.',
      steps: [
        '52% silica is low/intermediate: mafic to intermediate, hotter (~1,100 °C), more fluid, richer in dark ferromagnesian minerals.',
        '72% silica is high: felsic, cooler (~650 °C), more viscous, dominated by quartz and feldspar with little dark mineral.',
        'Higher viscosity traps gas, so the felsic lava tends toward explosive eruptions; the hotter mafic lava tends toward effusive flows.',
        'The lesson also links high metal content to high melting temperature and low silica.',
      ],
      answer:
        'The 52% lava is hotter, more fluid, more mafic and effusive; the 72% lava is cooler, viscous, felsic and more explosive.',
    },
  ],
  topics: [
    {
      id: 'magma-crystallization',
      title: 'Magma, Lava, and Crystallization',
      tagline: 'What melt is made of and how it becomes rock',
      source: { file: 'GS 21L 6 Igneous Rocks.pdf', pages: 'pp. 3–6' },
      objectives: [
        'Define magma, lava and igneous rock.',
        'Describe the liquid, solid and gaseous components of magma.',
        'Explain crystallization and why early crystals are better formed.',
      ],
      intro: {
        what: 'Igneous rocks form when molten rock cools and solidifies. Magma is the molten material below the surface; lava is molten rock at the surface.',
        why: 'Igneous processes build new crust, feed volcanoes, and start the rock cycle.',
        before: ['Minerals and silicate structures from Chapter 5.', 'States of matter and cooling.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Cool a sugar solution and sugar crystals grow. Cool magma and silicate crystals grow in the same way, except the “solution” is molten rock and the crystals interlock as they compete for space. Magma below ground is called lava once it reaches the surface.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Igneous rocks (*ignis* = fire) form as molten rock cools and solidifies. Evidence supports the idea that their parent material, **magma**, forms by partial melting at various levels in the crust and upper mantle to depths of about **250 km** (about 150 miles). The lesson summarises the pathway as: magma → lava → crystallization → igneous rock.',
        },
        {
          t: 'p',
          text: 'Magma rises buoyantly because it is less dense than the surrounding rock — when rock melts it takes up more space. Most magmas contain three components:',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Liquid (melt)', def: 'Mainly mobile ions of the eight most common elements in the crust: silicon and oxygen, with lesser aluminium, potassium, calcium, sodium, iron and magnesium.' },
            { term: 'Solid', def: 'Crystals of silicate minerals, if present. As magma cools, the size and number of crystals increase.' },
            { term: 'Gaseous (volatiles)', def: 'Materials that vaporise at surface pressures, most commonly water vapour (H₂O), carbon dioxide (CO₂) and sulfur dioxide (SO₂), held in by the pressure of overlying rock.' },
          ],
        },
        {
          t: 'p',
          text: 'In a crystalline solid, ions vibrate about fixed points. As temperature rises they vibrate more vigorously; melting occurs when the bonds can no longer hold them in order. **Crystallization** reverses this: as the liquid cools, ions pack more closely, movement slows, and chemical bonds confine them into an orderly crystal lattice. The earliest-formed minerals have space to grow and tend to have better-developed crystal faces than later ones, which fill the remaining spaces. Eventually the melt becomes a solid mass of interlocking silicate minerals — an igneous rock.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Why crystals interlock',
          text: 'All the melt solidifies at once as a crowded mosaic. That is why igneous rocks lack the open cavities and well-formed faces of minerals that grow freely in water.',
        },
      ],
      example: {
        problem:
          'A magma contains dissolved water and CO₂ and rises toward the surface. Explain what happens to the gas and why it can drive an eruption.',
        given: ['Magma with dissolved H₂O and CO₂.', 'It is rising toward lower pressure.'],
        required: 'Explain the gas behaviour and its mechanical effect.',
        steps: [
          { label: 'Pressure falls', text: 'Confining pressure decreases as the magma rises.' },
          { label: 'Solubility falls', text: 'Gas that was dissolved at high pressure can no longer stay dissolved.' },
          { label: 'Bubbles form', text: 'Volatiles exsolve into bubbles (vesiculation), increasing the volume of the magma.' },
          { label: 'Eruption', text: 'Expanding gas pushes magma upward; if the melt is viscous, pressure builds until it is released explosively.' },
        ],
        answer:
          'Decompression causes dissolved water and CO₂ to form bubbles; expanding gas drives the magma upward and, in viscous magma, produces an explosive eruption.',
      },
      selfCheck: [
        { q: 'What is the difference between magma and lava?', a: 'Magma is molten rock below the surface; lava is molten rock that has reached the surface.' },
        { q: 'Name the three components of magma.', a: 'A liquid melt, solid crystals (if present), and gaseous volatiles (mainly H₂O, CO₂, SO₂).' },
        { q: 'Why do the earliest-formed crystals have better-developed faces?', a: 'They grow freely into the remaining melt space; later crystals fill the gaps between them.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Molten rock that reaches Earth’s surface is called:',
          options: ['Magma', 'Lava', 'Volatile', 'Melt'],
          answer: 1,
          explain: 'Magma below ground becomes lava at the surface.',
        },
        {
          type: 'mcq',
          prompt: 'Which is NOT a common volatile in magma?',
          options: ['Water vapour', 'Carbon dioxide', 'Sulfur dioxide', 'Quartz'],
          answer: 3,
          explain: 'Quartz is a silicate mineral, not a gas. The common volatiles listed are H₂O, CO₂ and SO₂.',
        },
        {
          type: 'tf',
          prompt: 'Igneous rocks consist of interlocking silicate minerals.',
          answer: true,
          explain: 'Crystallization produces a mosaic of intergrown crystals.',
        },
      ],
      cards: [
        { front: 'Magma vs lava', back: 'Magma is molten rock beneath the surface; lava is molten rock at the surface.' },
        { front: 'Three components of magma', back: 'Liquid melt (mobile ions), solid crystals (if present), and volatiles (H₂O, CO₂, SO₂).' },
        { front: 'Crystallization', back: 'Cooling reverses melting: ions slow, pack together and bond into an ordered crystal lattice, producing interlocking minerals.' },
      ],
    },
    {
      id: 'intrusive-extrusive',
      title: 'Intrusive and Extrusive Igneous Rocks',
      tagline: 'The same melt, two very different cooling histories',
      source: { file: 'GS 21L 6 Igneous Rocks.pdf', pages: 'pp. 7–8' },
      objectives: [
        'Distinguish intrusive (plutonic) from extrusive (volcanic) rocks.',
        'Relate cooling rate to crystal size.',
        'Give examples of settings for each.',
      ],
      intro: {
        what: 'Igneous rocks form either at depth (intrusive/plutonic) or at the surface (extrusive/volcanic).',
        why: 'The setting controls cooling rate, which controls texture — the most useful clue to a rock’s history.',
        before: ['Crystallization from the previous topic.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Bake a cake in a hot oven and it sets slowly with large bubbles; chill a thin pancake on a cold pan and it sets instantly. Same ingredients, different cooling. Deep magma cools slowly and grows large crystals; surface lava cools fast and stays fine-grained.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'When magma crystallizes at depth it forms **intrusive igneous rocks**, also called **plutonic** rocks — after Pluto, god of the lower world. When molten rock solidifies at the surface it forms **extrusive igneous rocks**, also called **volcanic** rocks — after Vulcan, the Roman fire god. Extrusive rocks form when lava solidifies or when volcanic debris falls to the surface.',
        },
        {
          t: 'p',
          text: 'Extrusive rocks are abundant in western parts of the Americas, where they make up the volcanic peaks of the Cascade Range and the Andes. Many oceanic islands, including Hawaii and Alaska’s Aleutian Islands, are composed almost entirely of extrusive igneous rocks.',
        },
        {
          t: 'table',
          head: ['Feature', 'Intrusive (plutonic)', 'Extrusive (volcanic)'],
          rows: [
            ['Where it cools', 'At depth, inside the crust', 'At or very near the surface'],
            ['Cooling rate', 'Slow', 'Fast'],
            ['Crystal size', 'Coarse (large, visible crystals)', 'Fine (small crystals) or glassy'],
            ['Typical example', 'Granite, diorite, gabbro', 'Basalt, andesite, rhyolite, obsidian'],
          ],
          caption: 'Texture is the main field clue to cooling history.',
        },
      ],
      diagram: {
        key: 'igneous-textures',
        title: 'Cooling rate and crystal size',
        caption: 'Slow cooling produces coarse crystals; fast cooling produces fine crystals; two-stage cooling produces a porphyritic texture.',
      },
      example: {
        problem:
          'Two rock samples have identical chemical composition. Sample A has crystals 5 mm across; Sample B has crystals too small to see. Which is intrusive, and what does that imply about where each formed?',
        given: ['Same composition.', 'A: 5 mm crystals; B: microscopic crystals.'],
        required: 'Identify cooling setting from texture.',
        steps: [
          { label: 'Compare crystal size', text: 'Large crystals need time and space to grow.' },
          { label: 'Sample A', text: 'Coarse grains indicate slow cooling at depth → intrusive/plutonic.' },
          { label: 'Sample B', text: 'Fine grains indicate rapid cooling at the surface → extrusive/volcanic.' },
          { label: 'Composition', text: 'Because the composition is identical, the difference is entirely due to cooling history, not magma chemistry.' },
        ],
        answer: 'Sample A is intrusive; Sample B is extrusive. The composition is the same, so texture records the cooling environment.',
      },
      selfCheck: [
        { q: 'What is another name for intrusive igneous rock?', a: 'Plutonic rock.' },
        { q: 'Why are extrusive rocks usually fine-grained?', a: 'They cool quickly at the surface, so crystals have little time to grow.' },
        { q: 'Name two regions or island groups built largely of extrusive rocks.', a: 'The Cascade Range and Andes; Hawaii and the Aleutian Islands.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Igneous rocks that solidify at depth are called:',
          options: ['Extrusive', 'Volcanic', 'Intrusive', 'Sedimentary'],
          answer: 2,
          explain: 'Intrusive (plutonic) rocks crystallize at depth and generally have coarse textures.',
        },
        {
          type: 'mcq',
          prompt: 'Fine-grained texture in an igneous rock indicates:',
          options: ['Slow cooling at depth', 'Rapid cooling at the surface', 'High silica content', 'A sedimentary origin'],
          answer: 1,
          explain: 'Fast cooling leaves little time for crystals to grow, producing a fine-grained rock.',
        },
        {
          type: 'tf',
          prompt: 'Extrusive igneous rocks include lava flows and volcanic debris.',
          answer: true,
          explain: 'Extrusive rocks form when lava solidifies or volcanic debris falls to the surface.',
        },
      ],
      cards: [
        { front: 'Intrusive (plutonic)', back: 'Igneous rock that crystallizes at depth; slow cooling gives coarse-grained texture (e.g. granite, gabbro).' },
        { front: 'Extrusive (volcanic)', back: 'Igneous rock that solidifies at the surface; fast cooling gives fine-grained or glassy texture (e.g. basalt, obsidian).' },
        { front: 'Texture clue', back: 'Crystal size records cooling rate: coarse = slow/deep, fine = fast/surface.' },
      ],
    },
    {
      id: 'igneous-composition',
      title: 'Composition, Silica and Classification',
      tagline: 'Granitic, andesitic and basaltic rocks — and what silica does to magma',
      source: { file: 'GS 21L 6 Igneous Rocks.pdf', pages: 'pp. 9–13' },
      objectives: [
        'Distinguish granitic (felsic), andesitic (intermediate) and basaltic (mafic) compositions.',
        'Explain silica as a composition and viscosity indicator.',
        'Classify igneous rocks using composition and texture.',
      ],
      intro: {
        what: 'Igneous rocks are grouped by composition into granitic (felsic), andesitic (intermediate) and basaltic (mafic), then named by combining composition with texture.',
        why: 'Composition controls colour, density, melting temperature, viscosity and eruption style — all central to volcanism in the next chapter.',
        before: ['Silicate minerals and the eight abundant crustal elements.', 'Intrusive versus extrusive settings.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of magma as soup with two kinds of ingredient: light, silica-rich material and dark, iron- and magnesium-rich material. More light material gives a pale, stiff, cooler magma; more dark material gives a dark, runny, hotter magma. Silica is the thickener.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Granitic (felsic)', def: 'Composed mainly of non-ferromagnesian minerals such as quartz (~70%) and potassium feldspar, with about 10% dark silicate minerals, usually biotite mica and amphibole.' },
            { term: 'Basaltic (mafic)', def: 'Contains at least 45% dark silicate minerals and calcium-rich plagioclase feldspar.' },
            { term: 'Andesitic (intermediate)', def: 'Contains at least 25% dark silicate minerals, mainly amphibole, pyroxene and biotite mica, with plagioclase feldspar as the other dominant mineral.' },
          ],
        },
        {
          t: 'p',
          text: '**Silica as a composition indicator.** High-silica rocks are generally felsic; their magmas are viscous and have lower eruption temperatures (~650 °C). Low-silica rocks are generally mafic; their magmas are more fluid because of their high temperature (1,050–1,250 °C). The lesson also notes the link between metal content and melting temperature: low metal content = low melting temperature; high metal content = high melting temperature.',
        },
        {
          t: 'p',
          text: 'Classification of igneous rocks is based on **mineral composition and texture**. A coarse-grained rock with high silica is granite; the same composition cooled quickly is rhyolite. A dark, low-silica magma that cools slowly forms gabbro; cooled quickly it forms basalt.',
        },
        {
          t: 'table',
          head: ['Composition', 'Dark minerals', 'Silica', 'Colour', 'Magma behaviour'],
          rows: [
            ['Granitic (felsic)', '~10%', 'High (~70% quartz)', 'Light', 'Viscous, ~650 °C'],
            ['Andesitic (intermediate)', 'At least 25%', 'Intermediate', 'Medium grey/green', 'Intermediate'],
            ['Basaltic (mafic)', 'At least 45%', 'Low', 'Dark', 'Fluid, 1,050–1,250 °C'],
          ],
          caption: 'Composition groups and their practical consequences, compiled from the lesson.',
        },
      ],
      example: {
        problem:
          'A dark, fine-grained rock contains abundant pyroxene and calcium-rich plagioclase, with only a little quartz. Name its composition group, its likely rock name and its eruption style.',
        given: ['Dark colour.', 'Fine-grained.', 'Abundant pyroxene and Ca-plagioclase.', 'Little quartz.'],
        required: 'Composition group, rock name and eruption style.',
        steps: [
          { label: 'Composition', text: 'Dark minerals dominate and silica is low → basaltic (mafic).' },
          { label: 'Texture', text: 'Fine-grained means it cooled quickly at the surface → extrusive.' },
          { label: 'Rock name', text: 'Mafic + fine-grained = basalt (slow-cooled equivalent is gabbro).' },
          { label: 'Eruption style', text: 'Low silica, high temperature → low viscosity, fluid lava, typically effusive.' },
        ],
        answer: 'Basaltic (mafic) composition, basalt, typically effusive/low-viscosity eruptions.',
      },
      selfCheck: [
        { q: 'Which composition group contains at least 45% dark silicate minerals?', a: 'Basaltic (mafic).' },
        { q: 'How does silica affect magma viscosity and temperature?', a: 'High silica → viscous, cooler (~650 °C); low silica → fluid, hotter (1,050–1,250 °C).' },
        { q: 'What two properties are used to classify igneous rocks?', a: 'Mineral composition and texture.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A rock with about 70% quartz and potassium feldspar is:',
          options: ['Basaltic', 'Andesitic', 'Granitic (felsic)', 'Ultramafic'],
          answer: 2,
          explain: 'High quartz and potassium feldspar with little dark mineral defines granitic (felsic) composition.',
        },
        {
          type: 'mcq',
          prompt: 'High-silica magmas are generally:',
          options: ['Hot and fluid', 'Cool and viscous', 'Hot and viscous', 'Cool and fluid'],
          answer: 1,
          explain: 'Felsic magmas are viscous with lower eruption temperatures (~650 °C).',
        },
        {
          type: 'tf',
          prompt: 'Andesitic rocks contain at least 25% dark silicate minerals.',
          answer: true,
          explain: 'That is the intermediate group’s defining threshold in the lesson.',
        },
      ],
      cards: [
        { front: 'Three composition groups', back: 'Granitic/felsic (high silica, ~10% dark), andesitic/intermediate (≥25% dark), basaltic/mafic (≥45% dark).' },
        { front: 'Silica and viscosity', back: 'High silica → felsic, viscous, ~650 °C. Low silica → mafic, fluid, 1,050–1,250 °C.' },
        { front: 'Classification basis', back: 'Igneous rocks are classified by mineral composition and texture.' },
      ],
    },
  ],
}
