import type { Chapter } from '../types'

export const ch4: Chapter = {
  id: 'ch4',
  number: 4,
  title: 'Historical Geology',
  subtitle: 'Reading the rock record: relative and numerical dating, fossils, and the time scale',
  pdf: 'CH 4 Historical Geology.pdf',
  pages: 'pp. 1–20',
  accent: '#7a5a8a',
  practice: [
    {
      id: 'ch4-p1',
      level: 'easy',
      question: 'A wood sample has passed through two carbon-14 half-lives (t½ = 5,730 years). What fraction of the original carbon-14 remains, and how old is the sample?',
      hint: 'Each half-life halves the parent isotope.',
      steps: [
        'After 1 half-life: 50% remains. After 2: 25% remains.',
        'Age = 2 × 5,730 years = 11,460 years.',
      ],
      answer: '25% remains; the sample is about 11,460 years old.',
    },
    {
      id: 'ch4-p2',
      level: 'medium',
      question:
        'In a mineral sample, the ratio of parent isotope to daughter isotope is 1:3. How many half-lives have passed, and what percentage of the parent remains?',
      hint: 'Parent + daughter = total. A 1:3 ratio means the parent is 1 part of 4.',
      steps: [
        'Parent fraction = 1 / (1 + 3) = 1/4 = 25%.',
        '25% remaining corresponds to 2 half-lives (1 → 1/2 → 1/4).',
        'If this were carbon-14, the age would be 2 × 5,730 = 11,460 years.',
      ],
      answer: 'Two half-lives; 25% of the parent remains.',
    },
    {
      id: 'ch4-p3',
      level: 'hard',
      question:
        'A charcoal sample retains 6.25% of its original carbon-14. How old is it? Explain why carbon-14 is unsuitable for a 5-million-year-old limestone.',
      hint: '6.25% = 1/16. Count the halvings. Compare the result with the useful range of radiocarbon dating.',
      steps: [
        '1/16 = (1/2)^4, so four half-lives have passed.',
        'Age = 4 × 5,730 = 22,920 years.',
        'Carbon-14 is useful only to about 70,000 years (the lesson’s stated limit), because too little parent remains after that.',
        'A 5-million-year-old limestone is far beyond that range; other isotope systems with longer half-lives are needed.',
      ],
      answer: 'About 22,920 years old. Carbon-14 cannot date a 5-million-year-old rock because its 5,730-year half-life leaves essentially no parent isotope after 70,000 years.',
    },
  ],
  topics: [
    {
      id: 'relative-dating',
      title: 'Relative Dating: Six Basic Principles',
      tagline: 'Putting rocks in order without knowing their age in years',
      source: { file: 'CH 4 Historical Geology.pdf', pages: 'pp. 4–10' },
      objectives: [
        'Define relative dating and distinguish it from numerical dating.',
        'Apply superposition, original horizontality, lateral continuity and cross-cutting relationships.',
        'Use inclusions to determine relative age.',
      ],
      intro: {
        what: 'Relative dating places rocks and events in order — older or younger — without giving a number of years.',
        why: 'It is the foundation of all stratigraphy and a prerequisite for numerical dating. Even with modern instruments, geologists first establish the sequence.',
        before: ['The difference between physical and historical geology.', 'Sedimentary layers and igneous intrusions.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Stack three books. The bottom one was placed first, the top last. Now imagine someone slices a knife through all three: the cut must be younger than the books. These two everyday observations — stacking order and “the cutter is younger than what it cuts” — are the heart of relative dating.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Historical geology uses two dating techniques. **Relative dating** cannot tell how long ago something occurred, only that it followed one event and preceded another; it places rocks in their order of formation and is non-numerical. **Absolute (numerical) dating** specifies the actual number of years since an event.',
        },
        {
          t: 'deflist',
          items: [
            { term: '1. Superposition', def: 'In an undeformed sequence of sedimentary rocks, each bed is older than the one above and younger than the one below. In the Grand Canyon, the Supai Group is oldest and the Kaibab Limestone youngest.' },
            { term: '2. Original horizontality', def: 'Layers of sediment are generally deposited horizontally. Folded or tilted strata were moved after deposition by crustal disturbance.' },
            { term: '3. Lateral continuity', def: 'Sedimentary beds originate as continuous layers extending in all directions until they grade into a different sediment or thin out at the basin edge.' },
            { term: '4. Cross-cutting relationships', def: 'Geologic features that cut across rocks must form after the rocks they cut. A fault is younger than the rocks it displaces; an igneous intrusion is younger than the rocks it intrudes.' },
            { term: '5. Inclusions', def: 'Fragments of one rock unit enclosed in another. The rock mass containing the inclusions is younger than the inclusions themselves.' },
            { term: '6. Unconformity', def: 'A long period during which deposition ceased, erosion removed rock, and deposition resumed — covered in the next topic.' },
          ],
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Order of operations',
          text: 'First find the oldest undeformed layer, then treat every fault, intrusion and erosion surface as an event that must be placed in the sequence. Do not assume a layer is continuous if a fault cuts it.',
        },
      ],
      example: {
        problem:
          'A cliff shows horizontal sandstone at the base, shale above it, a vertical basalt dyke cutting both, and a conglomerate containing basalt pebbles at the top. Put the events in order.',
        given: ['Sandstone below shale.', 'Dyke cuts both.', 'Conglomerate contains basalt pebbles and lies on top.'],
        required: 'A complete relative chronology with the principle used for each step.',
        steps: [
          { label: 'Sandstone then shale', text: 'Superposition: the lower sandstone is older than the shale above it.' },
          { label: 'Dyke after both', text: 'Cross-cutting: the dyke cuts sandstone and shale, so it is younger than both.' },
          { label: 'Weathering of basalt', text: 'The dyke must have been exposed and eroded to supply basalt pebbles.' },
          { label: 'Conglomerate last', text: 'It contains basalt inclusions, so it is younger than the basalt, and it lies on top, consistent with superposition.' },
        ],
        answer: 'Sandstone → shale → basalt dyke → erosion → conglomerate.',
        check: 'Inclusions give the same answer as superposition here, which is a good sign the ordering is consistent.',
      },
      selfCheck: [
        { q: 'What is the difference between relative and numerical dating?', a: 'Relative dating orders events without years; numerical dating gives the actual number of years since an event.' },
        { q: 'A fault cuts three sedimentary layers. Is the fault older or younger than the layers?', a: 'Younger — cross-cutting features form after the rocks they cut.' },
        { q: 'What does the principle of original horizontality tell us about tilted strata?', a: 'They were deposited horizontally and later tilted or folded by crustal disturbance.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The principle that each sedimentary bed is older than the one above it is:',
          options: ['Original horizontality', 'Superposition', 'Lateral continuity', 'Inclusions'],
          answer: 1,
          explain: 'Superposition states that in an undeformed sequence, lower beds are older.',
        },
        {
          type: 'mcq',
          prompt: 'A igneous dyke cuts across a sandstone layer. Which is younger?',
          options: ['The sandstone', 'The dyke', 'They are the same age', 'Cannot be determined'],
          answer: 1,
          explain: 'Cross-cutting relationships: the feature doing the cutting is younger.',
        },
        {
          type: 'tf',
          prompt: 'An inclusion inside a rock must be older than the rock that contains it.',
          answer: true,
          explain: 'The inclusion had to exist first to be enclosed, so the host rock is younger.',
        },
      ],
      cards: [
        { front: 'Relative dating', back: 'Placing rocks and events in order of formation without numerical ages; non-numerical.' },
        { front: 'Superposition', back: 'In an undeformed sedimentary sequence, each bed is older than the one above and younger than the one below.' },
        { front: 'Cross-cutting relationships', back: 'Faults, dykes and other features that cut across rocks are younger than the rocks they cut.' },
        { front: 'Inclusions', back: 'Fragments enclosed in a rock are older than the host rock containing them.' },
      ],
    },
    {
      id: 'unconformities',
      title: 'Unconformities: The Missing Pages',
      tagline: 'How erosion and uplift leave gaps in the rock record',
      source: { file: 'CH 4 Historical Geology.pdf', pages: 'pp. 11–12' },
      objectives: [
        'Define an unconformity and explain how it forms.',
        'Distinguish angular unconformity, disconformity and nonconformity.',
        'Interpret the sequence of events each type implies.',
      ],
      intro: {
        what: 'An unconformity is a surface representing a long period during which deposition stopped, erosion removed rock, and deposition later resumed.',
        why: 'Unconformities are missing time. Recognising them prevents false correlations and explains why the rock record is incomplete.',
        before: ['The six relative dating principles, especially superposition and cross-cutting.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A diary with pages torn out still tells a story — but you must notice the gap. An unconformity is a torn-out page: the layers above and below may look continuous, yet millions of years of erosion are missing between them.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'An unconformity represents a long period during which deposition ceased, erosion removed previously formed rocks, and then deposition resumed. In each case, uplift and erosion are followed by subsidence and renewed sedimentation.',
        },
        {
          t: 'deflist',
          items: [
            {
              term: 'Angular unconformity',
              def: 'Tilted or folded sedimentary rocks overlain by younger, flat-lying strata. It indicates a pause in deposition during which deformation (folding or tilting) and erosion occurred.',
            },
            {
              term: 'Disconformity',
              def: 'A gap in the rock record representing a period during which erosion rather than deposition was occurring; the layers on both sides are essentially parallel.',
            },
            {
              term: 'Nonconformity',
              def: 'Younger sedimentary strata overlie older metamorphic or intrusive igneous rocks.',
            },
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'What a nonconformity implies',
          text: 'For sedimentary rock to sit on plutonic igneous or metamorphic rock, the older rock must have been deeply buried, then uplifted and eroded before deposition resumed — a large amount of missing history.',
        },
      ],
      diagram: {
        key: 'unconformities',
        title: 'Three kinds of unconformity',
        caption: 'Angular unconformity = deformation + erosion; disconformity = erosion of parallel beds; nonconformity = sedimentary rock on older igneous or metamorphic rock.',
      },
      example: {
        problem:
          'A sequence shows folded limestone, an erosion surface, flat-lying sandstone, and then a basalt flow at the top. Identify the unconformity type and list the events.',
        given: ['Folded limestone.', 'Erosion surface.', 'Flat-lying sandstone above.', 'Basalt flow on top.'],
        required: 'Unconformity type plus an ordered event history.',
        steps: [
          { label: 'Deposition', text: 'Limestone was deposited horizontally.' },
          { label: 'Deformation', text: 'Tectonic forces folded the limestone.' },
          { label: 'Erosion', text: 'Uplift exposed and eroded the folded beds, cutting a surface across them.' },
          { label: 'Renewed deposition', text: 'Flat-lying sandstone was deposited on the erosion surface.' },
          { label: 'Volcanism', text: 'Basalt flowed over the sandstone.' },
          { label: 'Classification', text: 'Folded beds overlain by flat-lying beds = angular unconformity.' },
        ],
        answer: 'Angular unconformity. Events: limestone deposition → folding → uplift and erosion → sandstone deposition → basalt eruption.',
      },
      selfCheck: [
        { q: 'What does an unconformity represent?', a: 'A long period of non-deposition and erosion between two rock units.' },
        { q: 'Which unconformity has tilted beds below and flat beds above?', a: 'An angular unconformity.' },
        { q: 'What does a nonconformity consist of?', a: 'Younger sedimentary strata resting on older metamorphic or intrusive igneous rock.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A gap between parallel sedimentary layers caused by erosion is a:',
          options: ['Angular unconformity', 'Disconformity', 'Nonconformity', 'Fault'],
          answer: 1,
          explain: 'A disconformity is an erosional gap between essentially parallel beds.',
        },
        {
          type: 'mcq',
          prompt: 'Sedimentary rock lying on an older granite is an example of:',
          options: ['Disconformity', 'Angular unconformity', 'Nonconformity', 'Conformity'],
          answer: 2,
          explain: 'A nonconformity is younger sedimentary strata over older metamorphic or intrusive igneous rock.',
        },
        {
          type: 'tf',
          prompt: 'An angular unconformity records deformation followed by erosion.',
          answer: true,
          explain: 'The tilted/folded beds had to be deformed, then eroded, before flat-lying beds were deposited on top.',
        },
      ],
      cards: [
        { front: 'Unconformity', back: 'A surface representing a long period of non-deposition and erosion between rock units.' },
        { front: 'Angular unconformity', back: 'Tilted or folded beds overlain by flat-lying younger strata; records deformation then erosion.' },
        { front: 'Disconformity vs nonconformity', back: 'Disconformity: erosional gap between parallel sedimentary beds. Nonconformity: sedimentary strata on older metamorphic or intrusive igneous rock.' },
      ],
    },
    {
      id: 'fossils',
      title: 'Fossils and Fossilization',
      tagline: 'How life leaves a readable trace in rock',
      source: { file: 'CH 4 Historical Geology.pdf', pages: 'pp. 13–14' },
      objectives: [
        'Define fossils and paleontology.',
        'Describe the main fossilization types: permineralization, molds and casts, carbonization and impressions, amber, trace fossils.',
        'Explain what fossils tell us about age and environment.',
      ],
      intro: {
        what: 'Fossils are the remains or traces of prehistoric life preserved in sediment and sedimentary rock; paleontology is their scientific study.',
        why: 'Fossils are key indicators for relative dating and for reconstructing ancient environments and evolution.',
        before: ['Sedimentary rocks and relative dating.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Most living things disappear completely. A few are buried quickly enough to escape decay, and their hard parts are slowly replaced or impressed into rock. A fossil is the rare survivor of that race between burial and decomposition.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Fossils are basic and important tools for interpreting the geologic past. The lesson describes five preservation types:',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Permineralization', def: 'Mineral-rich groundwater permeates porous tissue such as bone or wood; minerals precipitate out of solution and fill pores and empty spaces.' },
            { term: 'Molds and casts', def: 'A shell or other structure is buried in sediment and then dissolved by underground water, leaving a cavity (mold); a cast forms when the cavity is later filled.' },
            { term: 'Carbonization and impressions', def: 'Fine sediment encases an organism, leaving a carbon film. If the film is lost, a replica of the surface — an impression — may still show considerable detail.' },
            { term: 'Amber', def: 'The hardened resin of ancient trees, which can preserve organisms trapped inside.' },
            { term: 'Trace fossils', def: 'Evidence of activity rather than the body: tracks, burrows, coprolites (fossil dung) and gastroliths (stomach stones).' },
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'What fossils can and cannot show',
          text: 'A fossil gives direct evidence of an organism and its environment, and its species may indicate a time interval. It does not give a numerical age by itself; that requires radiometric dating of associated material.',
        },
      ],
      example: {
        problem:
          'A student finds a leaf-shaped film of black material in fine-grained shale, a shell-shaped cavity in limestone, and a set of parallel grooves in sandstone. Identify the likely fossil type for each.',
        given: ['Black film in shale.', 'Shell-shaped cavity.', 'Parallel grooves in sandstone.'],
        required: 'Match each to a preservation mode.',
        steps: [
          { label: 'Black film', text: 'A thin carbon residue in fine sediment is carbonization; if the film is lost, the surface replica is an impression.' },
          { label: 'Cavity', text: 'A hollow shell-shaped space is a mold; if filled by mineral, it becomes a cast.' },
          { label: 'Grooves', text: 'Grooves record movement, so they are trace fossils — tracks or burrows made by an organism.' },
        ],
        answer: 'Carbonization/impression; mold (possibly cast); trace fossil.',
      },
      selfCheck: [
        { q: 'What is paleontology?', a: 'The scientific study of fossils.' },
        { q: 'How does permineralization preserve bone or wood?', a: 'Mineral-rich groundwater fills the pores with precipitated minerals, preserving the structure.' },
        { q: 'Give three examples of trace fossils.', a: 'Tracks, burrows and coprolites (also gastroliths).' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A fossil formed when a shell dissolved and left a cavity is called a:',
          options: ['Cast', 'Mold', 'Trace fossil', 'Gastrolith'],
          answer: 1,
          explain: 'The cavity is a mold; a cast forms if the cavity is later filled with mineral matter.',
        },
        {
          type: 'mcq',
          prompt: 'Coprolites and gastroliths are examples of:',
          options: ['Body fossils', 'Trace fossils', 'Molds', 'Amber inclusions'],
          answer: 1,
          explain: 'They record activity or behaviour rather than the body itself.',
        },
        {
          type: 'tf',
          prompt: 'Amber is hardened resin from ancient trees and can preserve organisms.',
          answer: true,
          explain: 'Amber is one of the preservation types listed in the lesson.',
        },
      ],
      cards: [
        { front: 'Fossil', back: 'The remains or traces of prehistoric life preserved in sediment and sedimentary rock; studied by paleontology.' },
        { front: 'Permineralization', back: 'Minerals from groundwater fill the pores of bone or wood, preserving its structure.' },
        { front: 'Trace fossils', back: 'Evidence of activity: tracks, burrows, coprolites and gastroliths.' },
      ],
    },
    {
      id: 'absolute-dating',
      title: 'Absolute Dating and Radioactive Decay',
      tagline: 'Turning atoms into clocks',
      source: { file: 'CH 4 Historical Geology.pdf', pages: 'pp. 15–17' },
      objectives: [
        'Define absolute (numerical) dating and half-life.',
        'Describe alpha decay, beta decay and electron capture.',
        'Explain radiocarbon dating and its limits.',
      ],
      intro: {
        what: 'Absolute dating, also called radiometric or numerical dating, uses the decay of radioactive parent isotopes to calculate how many years have passed.',
        why: 'It converts relative sequences into a timeline, and it is the only way to date events older than written history.',
        before: ['Atoms: protons, neutrons, atomic number and mass number.', 'Relative dating.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A radioactive parent is like a dripping tap: you cannot predict when one drop falls, but with enough drops you can predict the rate precisely. **Half-life** is the time for half of the parent atoms to decay. Count how many halves have gone, and you have a clock.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Absolute dating provides an approximate numerical date. It uses the principle of **half-life** on the decay of radioactive parent material. The lesson describes three decay types:',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Alpha (α) decay', def: 'An alpha particle (2 protons + 2 neutrons) is emitted. Mass number decreases by 4 and atomic number by 2.' },
            { term: 'Beta (β) decay', def: 'An electron is emitted from the nucleus. Mass number is unchanged, but a neutron becomes a proton, so atomic number increases by 1.' },
            { term: 'Electron capture', def: 'The nucleus captures an electron, which combines with a proton to form a neutron. Mass number is unchanged; atomic number decreases by 1.' },
          ],
        },
        {
          t: 'p',
          text: 'Common methods include using different radioactive isotopes and radiocarbon (carbon-14) dating. Because the half-life of carbon-14 is only **5,730 years**, it can date events from the historic past and very recent geologic history; in some cases as far back as **70,000 years**. It is valuable to anthropologists, archaeologists, historians and geologists studying very recent Earth history.',
        },
        { t: 'formula', tex: 'N = N_0\\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}', note: 'N = parent atoms remaining, N₀ = original parent atoms, t = elapsed time, t½ = half-life.' },
        { t: 'formula', tex: 't = t_{1/2}\\cdot\\log_2\\!\\left(\\frac{N_0}{N}\\right)', note: 'Rearranged to solve for age once the fraction of parent remaining is known.' },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Know the limits',
          text: 'Radiocarbon dates organic material only, and only for the last ~70,000 years. Older rocks need longer-lived isotopes such as those in the potassium–argon or uranium–lead systems.',
        },
      ],
      example: {
        problem:
          'A bone fragment contains 12.5% of its original carbon-14. Calculate its age using t½ = 5,730 years.',
        given: ['N/N₀ = 12.5% = 0.125.', 't½ = 5,730 years.'],
        required: 'Number of half-lives and the age in years.',
        steps: [
          { label: 'Express as a fraction', text: '12.5% = 12.5/100 = 1/8.' },
          { label: 'Count halvings', text: '1/2, 1/4, 1/8 — three half-lives.' },
          { label: 'Multiply', text: 't = 3 × 5,730 years.' },
          { label: 'Compute', text: 't = 17,190 years.' },
          { label: 'Check', text: 'After three half-lives, (1/2)³ = 1/8 = 12.5%, which matches the given fraction.' },
        ],
        answer: 'About 17,190 years old.',
      },
      selfCheck: [
        { q: 'What is a half-life?', a: 'The time required for half of the parent radioactive atoms in a sample to decay.' },
        { q: 'How does beta decay change the nucleus?', a: 'Mass number stays the same; a neutron becomes a proton, so atomic number increases by 1.' },
        { q: 'Why is radiocarbon dating limited to about 70,000 years?', a: 'Carbon-14 has a short half-life (5,730 years), so too little parent remains beyond that.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'After two half-lives, what fraction of the parent isotope remains?',
          options: ['1/2', '1/4', '1/8', '0'],
          answer: 1,
          explain: 'Each half-life halves the remainder: 1 → 1/2 → 1/4.',
        },
        {
          type: 'mcq',
          prompt: 'In alpha decay, the mass number:',
          options: ['increases by 1', 'decreases by 4', 'stays the same', 'decreases by 2'],
          answer: 1,
          explain: 'An alpha particle carries 2 protons and 2 neutrons, reducing mass number by 4 and atomic number by 2.',
        },
        {
          type: 'tf',
          prompt: 'Carbon-14 has a half-life of 5,730 years and can date samples up to about 70,000 years old.',
          answer: true,
          explain: 'Both figures are given in the lesson.',
        },
      ],
      cards: [
        { front: 'Half-life', back: 'The time for half of the parent radioactive atoms in a sample to decay.' },
        { front: 'Decay types', back: 'Alpha: mass −4, atomic number −2. Beta: mass unchanged, atomic number +1. Electron capture: mass unchanged, atomic number −1.' },
        { front: 'Carbon-14 dating', back: 'Half-life 5,730 years; useful for organic remains up to about 70,000 years.' },
        { front: 'Decay equation', back: 'N = N₀(1/2)^(t/t½); age t = t½ · log₂(N₀/N).' },
      ],
    },
    {
      id: 'time-scale',
      title: 'The Geologic Time Scale',
      tagline: 'A 4.6-billion-year calendar built from rocks',
      source: { file: 'CH 4 Historical Geology.pdf', pages: 'pp. 18–20' },
      objectives: [
        'Explain the purpose and hierarchy of the geologic time scale.',
        'Order eons, eras, periods and epochs.',
        'Describe how numerical dates were added to the relative scale.',
      ],
      intro: {
        what: 'The geologic time scale subdivides Earth’s 4.6-billion-year history into named units — eons, eras, periods and epochs.',
        why: 'It is the shared calendar of geology. Without it, “the Cretaceous” and “the Pleistocene” are just words rather than positions in a sequence.',
        before: ['Relative dating and radiometric dating.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of a year planner with months, weeks and days. Geologists do the same with 4.6 billion years: the biggest divisions are eons, then eras, then periods, then epochs. The order came first from fossils and layering; the numbers were added much later by radiometric dating.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The geologic time scale subdivides the 4.6-billion-year history of Earth into many different units and provides a meaningful framework within which past events are arranged. The hierarchy is **eons → eras → periods → epochs**.',
        },
        {
          t: 'table',
          head: ['Unit', 'Approximate span', 'Characteristic events'],
          rows: [
            ['Hadean', '4,600–4,000 Ma', 'Earth forms; magma ocean; iron catastrophe; no preserved rock record at the start'],
            ['Archean', '4,000–2,500 Ma', 'First stable continents; earliest life'],
            ['Proterozoic', '2,500–541 Ma', 'Rise of oxygen; multicellular life'],
            ['Paleozoic', '541–252 Ma', 'Hard-shelled life, land plants, major coal-forming swamps'],
            ['Mesozoic', '252–66 Ma', 'Dinosaurs; major petroleum source rocks'],
            ['Cenozoic', '66 Ma–present', 'Mammals, ice ages, humans'],
          ],
          caption: 'A simplified overview. The course figure (Fig. 4.11) gives the full scale with eons, eras, periods and epochs.',
        },
        {
          t: 'p',
          text: 'Numbers on the time scale represent millions of years before present. Numerical dates were added long after the scale was established using relative dating techniques. The lesson closes by relating the distribution of current petroleum reserves to the time scale: source rocks are concentrated in particular intervals, such as the Jurassic and Cretaceous.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Why the scale keeps changing',
          text: 'Boundaries are defined by changes in the fossil record and are refined as new dates are measured. The names and order are stable; the exact numbers are updated.',
        },
      ],
      diagram: {
        key: 'geologic-time',
        title: 'A simplified geologic time scale',
        caption: 'The full course figure includes eons, eras, periods and epochs; this overview shows the main intervals and their characteristic events.',
      },
      example: {
        problem:
          'A rock contains a trilobite (a Paleozoic index fossil) and is cut by a dyke dated at 250 Ma. Another rock contains a dinosaur bone. Which is older, and how do you know?',
        given: ['Trilobite-bearing rock cut by a 250 Ma dyke.', 'Dinosaur-bearing rock.'],
        required: 'Relative ages from fossils and cross-cutting.',
        steps: [
          { label: 'Age of the trilobite rock', text: 'Trilobites are Paleozoic, so the rock is older than the end of the Paleozoic (252 Ma).' },
          { label: 'Cross-cutting check', text: 'The dyke is 250 Ma and cuts the rock, so the rock must be older than 250 Ma — consistent.' },
          { label: 'Dinosaur rock', text: 'Non-avian dinosaurs are Mesozoic (252–66 Ma), so that rock is younger than the trilobite rock.' },
          { label: 'Conclusion', text: 'Fossils give the interval; cross-cutting and radiometric dates refine it.' },
        ],
        answer: 'The trilobite rock is older (Paleozoic, before 252 Ma); the dinosaur-bearing rock is Mesozoic and therefore younger.',
      },
      selfCheck: [
        { q: 'List the hierarchy of geologic time units from largest to smallest.', a: 'Eons → eras → periods → epochs.' },
        { q: 'How old is Earth according to the time scale?', a: 'About 4.6 billion years.' },
        { q: 'How were numerical dates added to the scale?', a: 'Later, using radiometric dating, after the relative sequence had been established.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which is the correct order from largest to smallest time unit?',
          options: ['Era → eon → period → epoch', 'Eon → era → period → epoch', 'Period → eon → era → epoch', 'Epoch → era → period → eon'],
          answer: 1,
          explain: 'The hierarchy is eon, era, period, epoch.',
        },
        {
          type: 'mcq',
          prompt: 'The geologic time scale divides Earth’s history of about:',
          options: ['4.6 million years', '4.6 billion years', '13.8 billion years', '541 million years'],
          answer: 1,
          explain: 'Earth is about 4.6 billion years old; 541 Ma marks the start of the Paleozoic.',
        },
        {
          type: 'tf',
          prompt: 'Numerical dates were added to the time scale before relative dating established the sequence.',
          answer: false,
          explain: 'Relative dating established the sequence first; numerical dates were added much later.',
        },
      ],
      cards: [
        { front: 'Geologic time hierarchy', back: 'Eon → era → period → epoch.' },
        { front: 'Age of Earth', back: 'About 4.6 billion years, the span subdivided by the geologic time scale.' },
        { front: 'How the scale was built', back: 'Relative dating established the order; radiometric dating later supplied numerical ages.' },
      ],
    },
  ],
}
