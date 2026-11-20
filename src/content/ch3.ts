import type { Chapter } from '../types'

export const ch3: Chapter = {
  id: 'ch3',
  number: 3,
  title: 'Plate Tectonics',
  subtitle: 'The unifying theory: moving plates, their boundaries, their engine, and the Philippine setting',
  pdf: 'Chapter 3 Plate Tectonics.pdf',
  pages: 'pp. 1–24',
  accent: '#8a5a2b',
  practice: [
    {
      id: 'ch3-p1',
      level: 'easy',
      question: 'A magnetic stripe 600 km from a mid-ocean ridge is 6 million years old. What is the average spreading rate in cm/yr?',
      hint: 'Convert km/Myr to cm/yr: 1 cm/yr = 10 km per million years.',
      steps: [
        'Rate = distance / time = 600 km / 6 Ma = 100 km per million years.',
        'Convert: 100 km/Myr ÷ 10 = 10 cm/yr.',
        'This is within the 2–15 cm/yr range quoted for divergent boundaries.',
      ],
      answer: '10 cm/yr.',
    },
    {
      id: 'ch3-p2',
      level: 'medium',
      question:
        'A transform fault offsets a ridge by 150 km. If the average slip rate is 3 cm/yr, how long did the offset take to accumulate?',
      hint: 'Convert the rate to km per million years first.',
      steps: [
        '3 cm/yr = 30 km per million years.',
        'Time = distance / rate = 150 km / 30 km per Myr.',
        'Time = 5 million years.',
      ],
      answer: 'About 5 million years.',
    },
    {
      id: 'ch3-p3',
      level: 'hard',
      question:
        'A hotspot chain has volcanoes at 0, 2, 4, 6 and 8 million years old, spaced 200 km apart. Calculate the plate speed and state the assumption that makes the calculation valid.',
      hint: 'Use the spacing between adjacent volcanoes and their age difference; check that the plume is assumed stationary.',
      steps: [
        'Adjacent volcanoes differ by 2 million years and 200 km.',
        'Rate = 200 km / 2 Myr = 100 km/Myr.',
        'Convert: 100 km/Myr = 10 cm/yr.',
        'The calculation assumes the mantle plume stays fixed relative to the plate motion and that ages are accurate.',
        'If the plume itself drifted, the measured rate would be relative, not absolute.',
      ],
      answer: '10 cm/yr, assuming a stationary plume and reliable ages.',
    },
  ],
  topics: [
    {
      id: 'lithosphere-plates',
      title: 'Lithosphere, Asthenosphere, and the Plate Mosaic',
      tagline: 'Why the outer shell is broken, and what the pieces are',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'pp. 2–5' },
      objectives: [
        'Explain the mechanical difference between lithosphere and asthenosphere.',
        'Name the seven major plates.',
        'Summarise the three boundary types in a table.',
      ],
      intro: {
        what: 'Plate tectonics is the unifying model of Earth science: the lithosphere is divided into rigid plates that move slowly over the ductile asthenosphere.',
        why: 'It explains earthquakes, volcanoes, mountain belts, ocean basins and the distribution of continents — one framework for almost every other chapter.',
        before: ['Earth’s physical layers from Chapter 2.', 'Density and heat.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Imagine a cracked eggshell floating on thick honey. The shell pieces are the plates: rigid, separate and slowly drifting. The honey is the asthenosphere: solid, but able to flow over long times. The shell does not slide because it is slippery — it slides because the layer beneath it deforms.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The foundation of plate tectonics is the mechanical distinction between Earth’s outer layers. The **lithosphere** is the rigid outer part, consisting of the crust and upper mantle, broken into numerous distinct rigid plates. The **asthenosphere** lies directly below it, where there is relatively low resistance to plastic flow, so it behaves like a highly viscous, ductile solid. This physical difference lets the lithospheric plates move independently.',
        },
        {
          t: 'p',
          text: 'The theory proposes that the lithosphere is divided into tectonic plates in continuous, slow motion. Seven major plates are recognised:',
        },
        {
          t: 'ul',
          items: [
            'North American Plate',
            'South American Plate',
            'Pacific Plate — the largest, almost entirely oceanic',
            'African Plate',
            'Eurasian Plate',
            'Australian–Indian Plate',
            'Antarctic Plate',
          ],
        },
        {
          t: 'table',
          head: ['Boundary', 'Plate motion', 'Topographic effect', 'Volcanic activity'],
          rows: [
            ['Divergent', 'Spreading apart', 'Constructive — oceanic ridge or rift valley', 'Yes'],
            ['Convergent', 'Moving together (subduction)', 'Destructive — oceanic trench', 'Yes'],
            ['Transform', 'Lateral sliding past each other', 'Conservative — no major relief', 'No'],
          ],
          caption: 'Summary of plate boundaries from the lesson. Boundaries migrate and change over geologic time.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Not fixed lines',
          text: 'Plate boundaries are not static. They migrate and reorganise as plates are created and destroyed, which is why ancient mountain belts can sit far from any modern boundary.',
        },
      ],
      diagram: {
        key: 'plate-boundaries',
        title: 'The three boundary types',
        caption: 'Divergent margins build lithosphere, convergent margins destroy it, and transform margins neither build nor destroy it.',
      },
      example: {
        problem:
          'A region has a long ridge with shallow earthquakes and basaltic volcanism, no deep trench, and crust that becomes older with distance from the ridge on both sides. Identify the boundary type and explain each observation.',
        given: ['Ridge topography.', 'Shallow earthquakes and basalt eruptions.', 'Symmetric age increase away from the ridge.'],
        required: 'Identify the boundary and link each observation to the process.',
        steps: [
          { label: 'Boundary type', text: 'A ridge with symmetrical ages is a divergent boundary.' },
          { label: 'Topography', text: 'Upwelling mantle lifts the lithosphere, forming the ridge; extension may create a rift valley.' },
          { label: 'Earthquakes', text: 'Extension fractures the cold brittle lithosphere at shallow depths.' },
          { label: 'Volcanism', text: 'Decompression melting of rising mantle produces basaltic magma.' },
          { label: 'Age pattern', text: 'New crust forms at the ridge and moves away, so age increases with distance on both sides.' },
        ],
        answer: 'A divergent (constructive) boundary, most likely a mid-ocean ridge.',
      },
      selfCheck: [
        { q: 'What mechanical property allows plates to move?', a: 'The asthenosphere is ductile and flows plastically, so the rigid lithosphere above can move independently.' },
        { q: 'Which is the largest plate, and what is unusual about it?', a: 'The Pacific Plate; it is almost entirely oceanic.' },
        { q: 'Which boundary type creates no lithosphere and destroys none?', a: 'Transform boundaries (conservative margins).' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The lithosphere consists of:',
          options: ['The crust only', 'The crust and uppermost mantle', 'The entire mantle', 'The outer core'],
          answer: 1,
          explain: 'It is the rigid outer shell of crust plus uppermost mantle, broken into plates.',
        },
        {
          type: 'mcq',
          prompt: 'Which plate is the largest and almost entirely oceanic?',
          options: ['Eurasian', 'African', 'Pacific', 'Antarctic'],
          answer: 2,
          explain: 'The Pacific Plate is the largest and nearly all oceanic.',
        },
        {
          type: 'tf',
          prompt: 'Divergent boundaries are destructive margins where lithosphere is consumed.',
          answer: false,
          explain: 'Divergent boundaries are constructive; convergent boundaries are destructive.',
        },
      ],
      cards: [
        { front: 'Lithosphere vs asthenosphere', back: 'Lithosphere: rigid crust + uppermost mantle, broken into plates. Asthenosphere: weak, ductile upper mantle that allows plate motion.' },
        { front: 'Seven major plates', back: 'North American, South American, Pacific, African, Eurasian, Australian–Indian, Antarctic.' },
        { front: 'Boundary summary', back: 'Divergent = constructive, ridges/rifts, volcanism. Convergent = destructive, trenches, volcanism. Transform = conservative, lateral sliding, no volcanism.' },
      ],
    },
    {
      id: 'divergent',
      title: 'Divergent Boundaries and Continental Rifting',
      tagline: 'How a continent splits and an ocean is born',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'pp. 6–7' },
      objectives: [
        'Explain decompression melting and new crust formation at ridges.',
        'Describe the three stages of continental rifting with examples.',
        'Recall typical spreading rates.',
      ],
      intro: {
        what: 'Divergent boundaries are constructive margins where two plates pull apart, hot mantle rises, and new oceanic lithosphere forms.',
        why: 'They create ocean basins, drive seafloor spreading, and produce the ridge system that records plate motion.',
        before: ['Lithosphere and asthenosphere.', 'The boundary summary table.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Pull a sticky bun apart and the filling oozes up into the gap. At a divergent boundary, the “filling” is hot mantle rock. As it rises, pressure drops and it partially melts — without adding heat. The melt cools in the gap and becomes new sea floor.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'As plates separate, fractures are created and hot mantle rock ascends to fill the void, generating magma through **decompression melting**. This magma cools and crystallises to form new oceanic lithosphere. The topography is characterised by oceanic ridges (e.g. the Mid-Atlantic Ridge) and continental rift valleys. Spreading rates typically range from **2 to 15 cm per year**.',
        },
        {
          t: 'p',
          text: 'Continental rifting occurs when divergent forces act on a continental landmass and ultimately form a new ocean basin:',
        },
        {
          t: 'steps',
          items: [
            { label: '1 · Continental rift', text: 'Tensional forces stretch and thin the crust, causing it to fracture. Large blocks drop down, creating a rift valley. Example: the East African Rift System.' },
            { label: '2 · Linear sea', text: 'Spreading continues, the rift deepens and connects to the ocean, and seawater floods the valley to form a narrow linear sea. Example: the Red Sea.' },
            { label: '3 · Mature ocean basin', text: 'Millions of years of spreading produce a wide ocean basin with a central mid-ocean ridge and passive continental margins. Example: the Atlantic Ocean.' },
          ],
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Decompression melting, not “heat from below”',
          text: 'The mantle rock was already hot. What changes is pressure: as rock rises, its melting point falls, so it partially melts. This is why mid-ocean-ridge basalts are so common.',
        },
      ],
      diagram: {
        key: 'rift-stages',
        title: 'From rift valley to ocean basin',
        caption: 'The East African Rift, the Red Sea and the Atlantic Ocean represent successive stages of the same process.',
      },
      example: {
        problem:
          'A narrow sea has basaltic crust, a central ridge, and earthquakes concentrated along its margins. Is it an early ocean or a mature one? What evidence would tell you whether rifting is still active?',
        given: ['Narrow sea.', 'Basaltic crust and central ridge.', 'Margin earthquakes.'],
        required: 'Place it in the rift sequence and identify evidence of activity.',
        steps: [
          { label: 'Stage', text: 'A narrow sea with a ridge and basaltic crust matches the linear-sea stage (like the Red Sea).' },
          { label: 'Crust', text: 'Basaltic crust shows that seafloor spreading has already begun; continental crust may remain on the flanks.' },
          { label: 'Earthquakes', text: 'Shallow earthquakes along normal faults indicate active extension.' },
          { label: 'Rates', text: 'GPS measurements and magnetic stripe ages would give the current spreading rate.' },
          { label: 'Future', text: 'Continued spreading widens the basin and creates passive margins, as in the Atlantic.' },
        ],
        answer: 'It is a young ocean in the linear-sea stage; active normal faulting, present-day seismicity and measurable spreading show rifting is ongoing.',
      },
      selfCheck: [
        { q: 'What causes melting at a divergent boundary?', a: 'Decompression melting as hot mantle rock rises and pressure decreases.' },
        { q: 'Give the three stages of continental rifting and one example of each.', a: 'Continental rift (East African Rift) → linear sea (Red Sea) → mature ocean basin (Atlantic Ocean).' },
        { q: 'What is the typical range of spreading rates?', a: 'About 2 to 15 cm per year.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Magma at a mid-ocean ridge is generated mainly by:',
          options: ['Friction between plates', 'Decompression melting of rising mantle', 'Melting of continental crust', 'Meteorite impacts'],
          answer: 1,
          explain: 'Rising mantle rock partially melts as pressure falls, without any added heat.',
        },
        {
          type: 'mcq',
          prompt: 'Which sequence correctly describes continental rifting?',
          options: ['Ocean basin → rift → linear sea', 'Rift valley → linear sea → ocean basin', 'Trench → ridge → rift', 'Linear sea → trench → ocean basin'],
          answer: 1,
          explain: 'Extension first drops a rift valley, then seawater floods it, then spreading builds a wide basin.',
        },
        {
          type: 'tf',
          prompt: 'Divergent boundaries are constructive because they create new lithosphere.',
          answer: true,
          explain: 'New oceanic crust forms as magma rises, cools and is added to the plate edges.',
        },
      ],
      cards: [
        { front: 'Decompression melting', back: 'Partial melting caused by a drop in pressure as hot mantle rock rises — the main magma source at divergent boundaries.' },
        { front: 'Rifting sequence', back: 'Continental rift (East African Rift) → linear sea (Red Sea) → mature ocean basin (Atlantic).' },
        { front: 'Spreading rate range', back: 'Typically 2–15 cm per year at divergent boundaries.' },
      ],
    },
    {
      id: 'convergent',
      title: 'Convergent Boundaries',
      tagline: 'Where lithosphere is destroyed and mountains and arcs are built',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'pp. 8–9' },
      objectives: [
        'Explain subduction, trenches and subduction-related volcanism.',
        'Distinguish oceanic–continental, oceanic–oceanic and continental–continental convergence.',
        'Match each type to its landform and example.',
      ],
      intro: {
        what: 'Convergent boundaries are destructive margins where plates collide and lithosphere is consumed, producing trenches, volcanic arcs and mountain belts.',
        why: 'They generate the largest earthquakes, explosive volcanic arcs, and the highest mountains on Earth.',
        before: ['Divergent boundaries.', 'Density differences between oceanic and continental crust.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Push two sheets of paper together on a table. One buckles upward, one dives under. In Earth, the older, colder, denser oceanic plate is the one that dives — and where it sinks, it drags water down with it. That water makes the hot mantle above melt, feeding volcanoes behind the trench.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Convergent boundaries are destructive margins where two plates collide, consuming lithosphere. **Subduction zones** occur where older, denser oceanic lithosphere plunges beneath an overriding plate into the mantle. **Deep-ocean trenches** are the surface expression of subduction and form the deepest parts of the ocean floor. Subduction introduces water to the hot mantle, triggering partial melting and generating magma that rises to form volcanic arcs.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Oceanic–continental', def: 'A denser oceanic slab subducts beneath continental crust; magma rises to form a continental volcanic arc. Example: the Andes Mountains.' },
            { term: 'Oceanic–oceanic', def: 'One oceanic slab subducts beneath another; magma produces a chain of volcanic islands called a volcanic island arc. Example: the Philippine Archipelago.' },
            { term: 'Continental–continental', def: 'Continuing convergence brings two continents together; buoyant continental crust resists deep subduction, causing a massive collision and mountain building. Example: the Himalayas.' },
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Why water matters',
          text: 'Subducting slabs carry water into the mantle. Water lowers the melting point of hot rock, so melting happens where it otherwise would not. This is why arcs sit behind trenches rather than directly above them.',
        },
      ],
      diagram: {
        key: 'plate-boundaries',
        title: 'Convergent geometry',
        caption: 'The middle panel shows the essential parts: trench, subducting slab, melt generation and volcanic arc.',
      },
      example: {
        problem:
          'An ocean basin is bordered by a deep trench, a line of active andesitic volcanoes on land about 250 km inland, and frequent deep earthquakes beneath the volcanoes. Explain the setting.',
        given: ['Trench offshore.', 'Andesitic volcanoes inland.', 'Deep earthquakes beneath the volcanoes.'],
        required: 'Identify the boundary and explain each feature.',
        steps: [
          { label: 'Boundary', text: 'Trench + arc + deep earthquakes = oceanic–continental convergence.' },
          { label: 'Trench', text: 'The oceanic plate bends and begins to descend, forming the deepest part of the ocean floor.' },
          { label: 'Magma', text: 'Water released from the slab lowers the mantle melting point; magma rises through the continental crust.' },
          { label: 'Andesite', text: 'Interaction of magma with continental crust produces intermediate (andesitic) compositions, typical of continental arcs.' },
          { label: 'Deep earthquakes', text: 'Earthquakes occur along the descending slab, reaching hundreds of kilometres deep.' },
        ],
        answer: 'An oceanic–continental subduction zone, like the Andes, where an oceanic plate descends beneath continental crust.',
      },
      selfCheck: [
        { q: 'Why is water important at subduction zones?', a: 'It lowers the melting point of hot mantle rock, triggering partial melting and magma generation.' },
        { q: 'What landform forms where two continents collide, and why?', a: 'A major mountain belt, because buoyant continental crust resists subduction and is crumpled and thickened.' },
        { q: 'Which convergence type produces a volcanic island arc?', a: 'Oceanic–oceanic convergence, e.g. the Philippine Archipelago.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The Himalayas formed mainly by:',
          options: ['Oceanic–oceanic subduction', 'Continental–continental collision', 'Divergent rifting', 'Transform faulting'],
          answer: 1,
          explain: 'Continental crust is buoyant and resists deep subduction, so the continents collide and thicken the crust.',
        },
        {
          type: 'mcq',
          prompt: 'A deep-ocean trench is the surface expression of:',
          options: ['Seafloor spreading', 'Subduction', 'Hotspot volcanism', 'Isostatic rebound'],
          answer: 1,
          explain: 'Trenches mark where a slab bends and descends into the mantle.',
        },
        {
          type: 'tf',
          prompt: 'The Andes are an example of an oceanic–continental convergent boundary.',
          answer: true,
          explain: 'The Nazca oceanic plate subducts beneath South America, producing a continental volcanic arc.',
        },
      ],
      cards: [
        { front: 'Subduction', back: 'The descent of older, denser oceanic lithosphere beneath an overriding plate, producing a trench, earthquakes and arc volcanism.' },
        { front: 'Three convergent settings', back: 'Oceanic–continental (Andes), oceanic–oceanic (Philippine Archipelago), continental–continental (Himalayas).' },
        { front: 'Why arcs form behind trenches', back: 'Water released from the slab lowers mantle melting temperature, so magma rises inland of the trench.' },
      ],
    },
    {
      id: 'transform',
      title: 'Transform Fault Boundaries',
      tagline: 'Plates that slide past each other — and the earthquakes they cause',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'p. 10' },
      objectives: [
        'Define a transform boundary and explain why it is conservative.',
        'Distinguish oceanic fracture zones from continental transforms.',
        'Give two major examples and their hazard.',
      ],
      intro: {
        what: 'Transform boundaries are conservative margins where plates slide horizontally past one another. Lithosphere is neither created nor destroyed.',
        why: 'They produce large shallow earthquakes, including some of the most destructive events near populated areas.',
        before: ['The three boundary types.', 'Faults as fractures along which rock moves.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Rub your palms together. Neither hand loses material; they just slide and heat up. A transform boundary is the same: two plates grind sideways, stick, then slip — and the slip is an earthquake.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Transform boundaries are conservative margins where plates slide horizontally. No lithosphere is created or destroyed. Most transform faults are located on the ocean floor, where they offset segments of the oceanic ridge system; these are **fracture zones**. A few large transform faults cut through continental crust, accommodating plate motion and causing severe shallow earthquakes.',
        },
        {
          t: 'p',
          text: 'Examples given in the lesson: the **San Andreas Fault** in California and the **Philippine Fault Zone**.',
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Ridge offset versus transform motion',
          text: 'Only the segment between two offset ridge axes is an active transform. Beyond the ridge tips the same line is a fracture zone, where the two sides move in the same direction and earthquakes are far less common.',
        },
      ],
      diagram: {
        key: 'plate-boundaries',
        title: 'Transform geometry',
        caption: 'The right panel shows lateral sliding with no major relief; ridges are offset, not destroyed.',
      },
      example: {
        problem:
          'A satellite survey measures 3 cm/yr of lateral offset across a 1,200 km fault. A road crossing the fault is offset by 9 m. Estimate how long the offset took, stating any assumption.',
        given: ['Slip rate 3 cm/yr.', 'Offset 9 m = 900 cm.'],
        required: 'Time = offset / rate.',
        steps: [
          { label: 'Convert units', text: '9 m = 900 cm.' },
          { label: 'Divide', text: 't = 900 cm ÷ 3 cm/yr = 300 years.' },
          { label: 'Assumption', text: 'The rate has been constant and the road was built straight across the fault.' },
          { label: 'Interpretation', text: 'The offset is consistent with a few centuries of steady slip, though real faults move in earthquakes with long quiet intervals.' },
        ],
        answer: 'About 300 years at a constant 3 cm/yr, assuming steady slip.',
      },
      selfCheck: [
        { q: 'Why is a transform boundary called conservative?', a: 'Because lithosphere is neither created nor destroyed there.' },
        { q: 'Where are most transform faults located?', a: 'On the ocean floor, offsetting segments of the oceanic ridge system (fracture zones).' },
        { q: 'Name the two continental transform examples from the lesson.', a: 'The San Andreas Fault and the Philippine Fault Zone.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'At a transform boundary, plates:',
          options: ['Move apart', 'Collide and subduct', 'Slide horizontally past each other', 'Melt completely'],
          answer: 2,
          explain: 'Transform motion is lateral; lithosphere is conserved.',
        },
        {
          type: 'tf',
          prompt: 'Transform boundaries commonly produce explosive arc volcanism.',
          answer: false,
          explain: 'The boundary summary lists no volcanic activity at transform margins; they produce shallow earthquakes.',
        },
        {
          type: 'short',
          prompt: 'Name one continental transform fault from the lesson.',
          accept: ['san andreas', 'san andreas fault', 'philippine fault', 'philippine fault zone'],
          explain: 'The San Andreas Fault in California and the Philippine Fault Zone are the lesson’s examples.',
        },
      ],
      cards: [
        { front: 'Transform boundary', back: 'A conservative margin where plates slide horizontally past each other; lithosphere is neither created nor destroyed.' },
        { front: 'Fracture zone', back: 'The seafloor trace of a transform fault that offsets ridge segments; active slip is concentrated between ridge axes.' },
        { front: 'Examples of continental transforms', back: 'San Andreas Fault (California) and the Philippine Fault Zone; both generate severe shallow earthquakes.' },
      ],
    },
    {
      id: 'drift-spreading',
      title: 'Continental Drift and Seafloor Spreading',
      tagline: 'Wegener’s evidence, Hess’s mechanism, and the proof from the ocean floor',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'pp. 11–15' },
      objectives: [
        'List Wegener’s four lines of evidence for continental drift.',
        'Explain seafloor spreading and Harry Hess’s contribution.',
        'Describe the evidence from drilling, hotspots and paleomagnetism.',
      ],
      intro: {
        what: 'Continental drift proposed that continents once formed Pangaea and later separated. Seafloor spreading supplied the mechanism: new oceanic crust forms at ridges and moves away.',
        why: 'This is the historical core of plate tectonics — the hypothesis, the missing mechanism, and the evidence that resolved it.',
        before: ['Divergent and convergent boundaries.', 'Earth’s magnetic field (a basic idea of a dipole).'],
      },
      simple: [
        {
          t: 'p',
          text: 'Wegener had the puzzle pieces: the coastlines fit, the same fossils appear on opposite sides of an ocean, and the same rock belts line up. What he lacked was a way to move continents. Hess supplied it: the ocean floor is a conveyor belt, made at the ridge and consumed at trenches.',
        },
        {
          t: 'p',
          text: 'The clincher was magnetism. As basaltic lava cools, iron minerals lock in the direction of Earth’s field. The sea floor is striped with alternating magnetic directions — and the stripes are symmetrical about the ridges.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Continental drift.** Proposed by Alfred Wegener in 1915, the hypothesis argued that continents were once united in a supercontinent called **Pangaea**. Wegener cited:',
        },
        {
          t: 'ul',
          items: [
            '**The continental jigsaw** — the remarkable fit of coastlines, particularly South America and Africa.',
            '**Fossil evidence** — identical fossil organisms such as *Mesosaurus* on landmasses separated by vast oceans.',
            '**Rock types and structures** — matching geologic features, mountain belts and rock ages across the Atlantic.',
            '**Ancient climates** — paleoclimatic data such as glacial deposits in modern tropical latitudes.',
          ],
        },
        {
          t: 'p',
          text: '**Seafloor spreading.** Proposed by Harry Hess in the early 1960s, it supplied the mechanism Wegener lacked. New oceanic crust forms continuously at mid-ocean ridges and spreads laterally, pushing older crust away like a conveyor belt.',
        },
        {
          t: 'p',
          text: '**Evidence from drilling.** From 1968 to 1983 the *Glomar Challenger* collected hundreds of core samples under the Deep Sea Drilling Project. Sediment dating confirmed that the age of oceanic crust increases with distance from the ridge. The oldest oceanic crust is roughly **180 million years** old, compared with continental rocks exceeding **4 billion years**.',
        },
        {
          t: 'p',
          text: '**Mantle plumes and hotspots.** A mantle plume is a cylindrical upwelling of exceptionally hot rock from deep in the mantle. Its surface expression — an area of volcanism, high heat flow and crustal uplift — is a hotspot. As a plate moves over a stationary plume, a linear chain of volcanoes forms. Dating the chain (e.g. the Hawaiian Islands) gives the direction and rate of plate motion.',
        },
        {
          t: 'p',
          text: '**Paleomagnetism.** Earth’s magnetic field periodically reverses polarity. Iron-rich minerals in cooling basaltic lava align with the field, locking in a record of polarity at the time of eruption. Magnetometers towed across the ocean floor revealed alternating stripes of high and low intensity, perfectly symmetrical on either side of mid-ocean ridges. This symmetry is definitive proof of seafloor spreading.',
        },
      ],
      diagram: {
        key: 'magnetic-stripes',
        title: 'Symmetrical magnetic stripes',
        caption: 'The mirror-image pattern of normal and reversed polarity records crust forming at the ridge and moving away on both sides.',
      },
      example: {
        problem:
          'A student says: “The Atlantic is widening, so the Pacific must be shrinking.” Evaluate this using seafloor spreading, and explain why oceanic crust is nowhere older than about 180 Ma while continents exceed 4 Ga.',
        given: ['Atlantic widening.', 'Oldest ocean crust ~180 Ma.', 'Continental rocks >4 Ga.'],
        required: 'Use creation and destruction of lithosphere to explain both observations.',
        steps: [
          { label: 'Creation', text: 'New oceanic crust forms at the Mid-Atlantic Ridge and moves outward, widening the Atlantic.' },
          { label: 'Consumption', text: 'Oceanic lithosphere is destroyed at subduction zones, especially around the Pacific (the “Ring of Fire”).' },
          { label: 'Balance', text: 'Earth’s surface area is fixed, so creation somewhere requires destruction elsewhere; the Pacific is indeed bordered by many trenches.' },
          { label: 'Age of the ocean floor', text: 'Oceanic crust is continuously recycled, so it is geologically young (~180 Ma at most).' },
          { label: 'Age of continents', text: 'Continental crust is buoyant and is not readily subducted, so it survives for billions of years.' },
        ],
        answer:
          'Spreading creates new ocean floor and subduction destroys old ocean floor, so the Atlantic can widen while the Pacific shrinks. Oceanic crust is young because it is recycled; continents are old because they float.',
      },
      selfCheck: [
        { q: 'List Wegener’s four kinds of evidence for continental drift.', a: 'Coastline fit, matching fossils, matching rock types/structures, and ancient climate evidence such as glacial deposits in the tropics.' },
        { q: 'What did Harry Hess add to Wegener’s hypothesis?', a: 'The mechanism of seafloor spreading: new crust forms at ridges and moves laterally away.' },
        { q: 'How does paleomagnetism prove seafloor spreading?', a: 'Magnetic polarity stripes are symmetrical on both sides of ridges, recording crust that formed at the ridge and moved away.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Who proposed the seafloor spreading concept?',
          options: ['Alfred Wegener', 'Harry Hess', 'James Hutton', 'Clarence Dutton'],
          answer: 1,
          explain: 'Harry Hess proposed seafloor spreading in the early 1960s, supplying the mechanism for continental drift.',
        },
        {
          type: 'mcq',
          prompt: 'The oldest oceanic crust is roughly:',
          options: ['4.6 billion years old', '1 billion years old', '180 million years old', '10 million years old'],
          answer: 2,
          explain: 'Oceanic crust is recycled at subduction zones, so the oldest is about 180 Ma, unlike continental rocks older than 4 Ga.',
        },
        {
          type: 'tf',
          prompt: 'Magnetic stripes on the sea floor are symmetrical about mid-ocean ridges.',
          answer: true,
          explain: 'That symmetry is the definitive evidence of seafloor spreading.',
        },
      ],
      cards: [
        { front: 'Wegener’s evidence for drift', back: 'Continental jigsaw fit, matching fossils (e.g. Mesosaurus), matching rock belts and ages, and paleoclimate evidence like glacial deposits in the tropics.' },
        { front: 'Seafloor spreading', back: 'Hess’s mechanism: new oceanic crust forms at mid-ocean ridges and spreads laterally, pushing older crust away.' },
        { front: 'Paleomagnetic stripes', back: 'Alternating normal/reversed polarity recorded in cooling basalt, symmetrical on both sides of ridges — proof of spreading.' },
        { front: 'Hotspot track', back: 'A linear chain of volcanoes formed as a plate moves over a stationary mantle plume; ages reveal plate direction and speed.' },
      ],
    },
    {
      id: 'driving-forces',
      title: 'What Drives Plate Motion',
      tagline: 'Slab pull, ridge push, and the convection beneath it all',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'pp. 16–18' },
      objectives: [
        'Explain mantle convection as the fundamental driving force.',
        'Compare slab pull and ridge push.',
        'Distinguish the whole-mantle (plume) and layer-cake convection models.',
      ],
      intro: {
        what: 'Plate motion is powered by Earth’s internal heat. Mantle convection provides the setting; slab pull and ridge push are the forces applied at plate boundaries.',
        why: 'Without a driving mechanism, plate tectonics is only a description. This topic explains why plates move and why some move faster than others.',
        before: ['Divergent and convergent boundaries.', 'Density and heat from earlier chapters.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A pot of thick soup on a stove: hot soup rises at the middle, spreads sideways, cools and sinks at the edges. Earth’s mantle does this, extremely slowly. The plates are the cool, rigid skin riding on top of that circulation.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Convection in the mantle — warm, buoyant rock rising and cooler, denser material sinking — is the fundamental driving force. Earth’s internal heat comes from radioactive decay and residual planetary formation heat. Tectonic plates are the cool, rigid outermost layer of this convective system, driven laterally by forces at their boundaries and bases.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Slab pull', def: 'Considered the primary driver. Cold oceanic lithosphere becomes denser than the asthenosphere; as it subducts, gravity pulls the cold slab downward, dragging the trailing plate with it.' },
            { term: 'Ridge push', def: 'A gravity-driven mechanism at divergent boundaries. The elevated mid-ocean ridge causes new, buoyant lithosphere to slide down its flanks, gently pushing the plate ahead of it.' },
          ],
        },
        {
          t: 'p',
          text: 'Two end-member convection models are described:',
        },
        {
          t: 'ul',
          items: [
            '**Whole-mantle (plume) model** — cold oceanic lithosphere descends all the way to the core–mantle boundary, stirring the entire 2,900 km thickness, balanced by rising plumes of hot rock from the core–mantle interface.',
            '**Layer-cake model** — the mantle is divided into two convection zones: a dynamic upper layer driven by subducting slabs above a sluggish, isolated lower mantle. The layers do not mix significantly.',
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Force versus energy source',
          text: 'Convection is the overall engine that moves heat; slab pull and ridge push are the local forces on plate edges. Exam questions often ask for both levels.',
        },
      ],
      diagram: {
        key: 'hotspot-track',
        title: 'Reading motion from a hotspot',
        caption: 'Because plumes are assumed fixed, the age progression along a hotspot chain measures the plate’s direction and speed.',
      },
      example: {
        problem:
          'Two plates are both oceanic. Plate A has a long, old subducting slab attached; Plate B has no subduction zone but sits next to a high ridge. Predict which moves faster and justify your answer.',
        given: ['Plate A: old, dense subducting slab.', 'Plate B: ridge-adjacent, no subduction.'],
        required: 'Compare slab pull and ridge push.',
        steps: [
          { label: 'Plate A force', text: 'The cold, dense slab is heavy; gravity pulls it down and drags the plate. Slab pull is considered the primary driver.' },
          { label: 'Plate B force', text: 'Ridge push comes from gravitational sliding off the elevated ridge; it is generally weaker than slab pull.' },
          { label: 'Prediction', text: 'Plate A should move faster, all else being equal.' },
          { label: 'Caveat', text: 'Real plates also experience mantle drag and neighbouring plate interactions, so the prediction is a tendency, not a law.' },
        ],
        answer: 'Plate A, because slab pull from its dense subducting slab is the stronger driving force.',
      },
      selfCheck: [
        { q: 'Which force is considered the primary driver of plate motion?', a: 'Slab pull.' },
        { q: 'What causes ridge push?', a: 'Gravitational sliding of newly formed, buoyant lithosphere down the flanks of the elevated mid-ocean ridge.' },
        { q: 'How do the whole-mantle and layer-cake models differ?', a: 'Whole-mantle convection stirs the full 2,900 km; layer-cake has separate upper and lower convection zones that do not mix significantly.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The primary driver of plate motion is:',
          options: ['Ridge push', 'Slab pull', 'Tidal forces', 'Solar heating'],
          answer: 1,
          explain: 'The lesson names slab pull as the primary driver; ridge push is secondary.',
        },
        {
          type: 'mcq',
          prompt: 'The layer-cake model proposes that:',
          options: [
            'the whole mantle convects as one cell',
            'the mantle has separate upper and lower convection zones',
            'plates are pushed only by ridges',
            'the core does not lose heat',
          ],
          answer: 1,
          explain: 'It divides the mantle into a dynamic upper layer and a sluggish lower layer, with little mixing.',
        },
        {
          type: 'tf',
          prompt: 'Earth’s internal heat comes from radioactive decay and residual heat from planetary formation.',
          answer: true,
          explain: 'Both sources drive mantle convection.',
        },
      ],
      cards: [
        { front: 'Slab pull', back: 'Gravity pulling a cold, dense subducting slab downward, dragging the rest of the plate — the primary driver of plate motion.' },
        { front: 'Ridge push', back: 'Gravitational sliding of new, buoyant lithosphere off the elevated mid-ocean ridge, pushing the plate away.' },
        { front: 'Two convection models', back: 'Whole-mantle (plume) model — full 2,900 km stirring. Layer-cake model — separate upper and lower convection zones with little mixing.' },
      ],
    },
    {
      id: 'philippine-tectonics',
      title: 'The Philippine Tectonic Setting',
      tagline: 'A real-world laboratory of subduction, collision and strike-slip faulting',
      source: { file: 'Chapter 3 Plate Tectonics.pdf', pages: 'pp. 19–23' },
      objectives: [
        'Describe the three-plate interaction around the Philippines.',
        'Distinguish the Philippine Mobile Belt from the Palawan–Mindoro Continental Block.',
        'Explain the Philippine Fault Zone and the resulting hazards.',
      ],
      intro: {
        what: 'The Philippine archipelago sits where the Eurasian (Sunda), Philippine Sea and Indo-Australian plates interact, producing complex subduction zones, collision zones and major wrench faults.',
        why: 'It is one of the most seismically active regions on Earth, and the lesson uses it as a concrete case of plate tectonics in action.',
        before: ['Convergent and transform boundaries.', 'Subduction and volcanic arcs.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Imagine three crowd members pushing through the same doorway from different directions: one plate from the west, one from the east, one from the south. The result is not a simple collision but a jigsaw of broken blocks, opposing trenches and a long tear down the middle. That is the Philippines.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The archipelago is situated in one of the most structurally complex and seismically active regions on Earth. Its tectonics are dominated by the interaction of three major plates: the **Eurasian Plate (Sunda Block)**, the **Pacific Plate (via the Philippine Sea Plate)**, and the **Indo-Australian Plate**. This interaction forms a network of subduction zones, collision zones and major wrench faults.',
        },
        {
          t: 'deflist',
          items: [
            {
              term: 'Philippine Mobile Belt (PMB)',
              def: 'Defined by Gervasio (1967), the seismically active, rapidly deforming portion of the archipelago. It comprises island arcs constrained by subduction zones of opposing polarities — the Philippine Trench to the east and the Manila/Negros Trenches to the west.',
            },
            {
              term: 'Palawan–Mindoro Continental Block (PCB)',
              def: 'An aseismic microcontinental block consisting of Palawan, Mindoro, Romblon and the Busuanga Peninsula. It originated from the Eurasian plate (southeastern China), drifted southward and collided with the PMB, driving major tectonic reorganisation.',
            },
          ],
        },
        {
          t: 'p',
          text: 'The **Philippine Fault Zone**, first detailed by Willis (1937), traverses the entire length of the PMB. It extends more than **1,200 km** from Luzon to eastern Mindanao, is an active **left-lateral strike-slip** system in a shear-partitioning regime, and moves at an average of **2–3 cm/year**, accommodating oblique convergence of the Philippine Sea Plate. Its significance is compared with the San Andreas Fault.',
        },
        {
          t: 'p',
          text: 'The Philippines is surrounded by active subduction zones and dissected by the Philippine Fault. GPS data indicate rapid block rotation and internal deformation within the PMB. The dense network of trenches (Philippine, Manila, Cotabato, Sulu) and active faults produces frequent shallow to deep-focus earthquakes, and the setting is responsible for devastating earthquakes, tsunamis and prolific volcanism.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'The dynamic Earth',
          text: 'The lesson closes by describing plate tectonics as the unifying framework for mountain building, volcanism, earthquakes and the continuous evolution of Earth’s surface — with the Philippine archipelago as one of the most profound examples of the system in action.',
        },
      ],
      example: {
        problem:
          'A city lies west of the Philippine Fault, east of the Manila Trench, and experiences frequent shallow strike-slip earthquakes plus a distant subduction-zone tsunami hazard. Explain how both hazards come from the same plate setting.',
        given: ['West of the PFZ.', 'East of the Manila Trench.', 'Shallow strike-slip quakes plus tsunami risk.'],
        required: 'Link each hazard to a specific structure.',
        steps: [
          { label: 'Regional setting', text: 'The area lies within the PMB, between the westward-dipping Manila Trench and the Philippine Fault.' },
          { label: 'Strike-slip quakes', text: 'The PFZ is a left-lateral strike-slip fault; friction and slip at shallow depth produce frequent earthquakes.' },
          { label: 'Tsunami source', text: 'Subduction along the Manila Trench can displace the sea floor, generating a tsunami that reaches nearby coasts.' },
          { label: 'Volcanism', text: 'Subduction-related melting feeds arc volcanoes, adding ashfall and lahar hazards.' },
          { label: 'Why both', text: 'A single convergent plate setting partitions strain into a trench (thrust/subduction) and a strike-slip fault, so both hazards coexist.' },
        ],
        answer:
          'The trench produces subduction earthquakes, tsunamis and arc volcanism; the Philippine Fault produces shallow strike-slip earthquakes. Shear partitioning of oblique convergence creates both systems side by side.',
      },
      selfCheck: [
        { q: 'Which three plates interact around the Philippines?', a: 'The Eurasian (Sunda) Plate, the Pacific Plate (via the Philippine Sea Plate), and the Indo-Australian Plate.' },
        { q: 'What is the PMB, and who defined it?', a: 'The seismically active, rapidly deforming island-arc portion of the archipelago, defined by Gervasio (1967).' },
        { q: 'What kind of fault is the Philippine Fault Zone, and how fast does it move?', a: 'A left-lateral strike-slip fault moving about 2–3 cm per year.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The Palawan–Mindoro Continental Block originated from:',
          options: ['The Pacific Plate', 'Southeastern China (Eurasian plate)', 'The Indo-Australian Plate', 'The Philippine Sea Plate'],
          answer: 1,
          explain: 'It is a microcontinental fragment derived from the Eurasian plate (SE China) that drifted south and collided with the PMB.',
        },
        {
          type: 'mcq',
          prompt: 'The Philippine Fault Zone is:',
          options: ['A right-lateral normal fault', 'A left-lateral strike-slip fault', 'A subduction thrust', 'A mid-ocean ridge'],
          answer: 1,
          explain: 'It is an active left-lateral strike-slip fault, >1,200 km long, moving 2–3 cm/yr.',
        },
        {
          type: 'tf',
          prompt: 'The Philippine Mobile Belt is bounded by subduction zones of opposing polarities.',
          answer: true,
          explain: 'The Philippine Trench lies to the east and the Manila/Negros Trenches to the west.',
        },
      ],
      cards: [
        { front: 'Three plates around the Philippines', back: 'Eurasian (Sunda) Plate, Pacific Plate via the Philippine Sea Plate, and Indo-Australian Plate.' },
        { front: 'Philippine Mobile Belt (PMB)', back: 'Seismically active, rapidly deforming island-arc region defined by Gervasio (1967), bounded by opposing subduction zones.' },
        { front: 'Palawan–Mindoro Continental Block', back: 'Aseismic microcontinental block (Palawan, Mindoro, Romblon, Busuanga) derived from SE China, which collided with the PMB.' },
        { front: 'Philippine Fault Zone', back: 'Left-lateral strike-slip fault >1,200 km long, moving 2–3 cm/yr, first detailed by Willis (1937).' },
      ],
    },
  ],
}
