import type { Chapter } from '../types'

export const ch2: Chapter = {
  id: 'ch2',
  number: 2,
  title: 'The Planet Earth',
  subtitle: 'Spheres, origins, shape, internal structure and isostatic balance',
  pdf: 'Ch 2 - The Planet Earth.pdf',
  pages: 'pp. 1–22',
  accent: '#356a8a',
  practice: [
    {
      id: 'ch2-p1',
      level: 'easy',
      question: 'Earth’s equatorial radius is about 6,378 km and its polar radius about 6,357 km. How large is the equatorial bulge?',
      hint: 'Subtract the two radii.',
      steps: ['Difference = 6,378 km − 6,357 km.', '= 21 km.', 'The bulge is about 21 km — small compared with the 6,371 km mean radius, but measurable.'],
      answer: '21 km.',
    },
    {
      id: 'ch2-p2',
      level: 'medium',
      question:
        'Using Airy isostasy, how deep is the crustal root under a 2.5 km high mountain if crustal density is 2.8 g/cm³ and mantle density is 3.3 g/cm³?',
      hint: 'Use r = h × ρc / (ρm − ρc). Keep the densities in the same units and the answer in km.',
      steps: [
        'Write the relation: r = h · ρc / (ρm − ρc).',
        'Substitute: r = 2.5 km × 2.8 / (3.3 − 2.8).',
        'The density contrast is 0.5 g/cm³, so 2.8 / 0.5 = 5.6.',
        'r = 2.5 km × 5.6 = 14 km.',
      ],
      answer: 'The root extends about 14 km below the normal compensation level, for a mountain only 2.5 km high.',
    },
    {
      id: 'ch2-p3',
      level: 'hard',
      question:
        'Two mountains stand 2 km and 4 km above the surrounding crust, on crust of uniform density 2.7 g/cm³ over mantle of 3.3 g/cm³. Calculate both Airy roots and the ratio between them. Why is the ratio not 2:1 in total crustal thickness?',
      hint: 'Compute each root, then compare total thickness = normal crust + height + root.',
      steps: [
        'For h = 2 km: r = 2 × 2.7 / 0.6 = 9 km.',
        'For h = 4 km: r = 4 × 2.7 / 0.6 = 18 km.',
        'The roots are in a 1:2 ratio, matching the heights.',
        'Total thickness adds the same normal crustal thickness T to each: T + 2 + 9 and T + 4 + 18.',
        'Because T is common, the total thickness ratio is closer to 1 than 2; only the root and elevation parts scale.',
      ],
      answer: 'Roots are 9 km and 18 km. The roots scale with height, but total crustal thickness does not, because the normal crustal thickness is added equally to both.',
    },
  ],
  topics: [
    {
      id: 'spheres',
      title: 'Earth’s Four Spheres',
      tagline: 'A planet of overlapping systems, not separate boxes',
      source: { file: 'Ch 2 - The Planet Earth.pdf', pages: 'pp. 3–4' },
      objectives: [
        'Name and describe the atmosphere, hydrosphere, geosphere and biosphere.',
        'Recall key figures: 71% ocean cover, 97% saline water, geosphere ~6,400 km thick.',
        'Explain how the spheres exchange matter.',
      ],
      intro: {
        what: 'Earth is studied as four interacting spheres: the gaseous atmosphere, the water hydrosphere, the rocky geosphere and the living biosphere.',
        why: 'Geological processes rarely stay inside one sphere. Rain weathers rock (atmosphere–hydrosphere–geosphere), and life changes the chemistry of both air and rock.',
        before: ['The definition of geology from Chapter 1.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Picture a sealed terrarium: air, water, soil and plants. Nothing stays in its own layer. Water evaporates into the air, condenses on the glass, drips into the soil, and the plants swap gases with everything. Earth is that terrarium at planetary scale.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Atmosphere', def: 'The gaseous envelope that supports life and protects the surface from radiation.' },
            { term: 'Hydrosphere', def: 'The dynamic mass of water continually on the move. Oceans cover 71% of Earth’s surface, and 97% of that water is saline.' },
            { term: 'Geosphere', def: 'The thickest sphere, extending nearly 6,400 km downward to the core.' },
            { term: 'Biosphere', def: 'All life on Earth, deeply integrated with the other three spheres.' },
          ],
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'A useful number check',
          text: 'Only about 3% of Earth’s water is fresh, and most of that is locked in ice or deep groundwater. That is why groundwater — Chapter 10 — matters so much.',
        },
      ],
      diagram: {
        key: 'earth-spheres',
        title: 'The four spheres',
        caption: 'The geosphere is the solid planet; the other three surround, cover and inhabit it.',
      },
      example: {
        problem:
          'A volcanic eruption injects ash and sulfur dioxide into the air, melts snow on the summit, and triggers a lahar that buries a forest. Trace which spheres are involved and how matter moves between them.',
        given: ['Ash and SO₂ released.', 'Snow melted.', 'Lahar buries vegetation.'],
        required: 'Identify each sphere involved and the transfers between them.',
        steps: [
          { label: 'Geosphere → atmosphere', text: 'Magma (geosphere) releases gas and ash into the atmosphere.' },
          { label: 'Geosphere → hydrosphere/cryosphere', text: 'Heat melts snow and ice, adding liquid water.' },
          { label: 'Hydrosphere + geosphere → flow', text: 'Water mixes with volcanic debris to form a lahar, a mass movement of the geosphere lubricated by the hydrosphere.' },
          { label: 'Biosphere impact', text: 'The forest (biosphere) is buried; ash later weathers to fertile soil, feeding new life.' },
        ],
        answer:
          'All four spheres interact: the geosphere supplies heat and debris, the atmosphere receives gases and ash, water is redistributed, and the biosphere is destroyed locally and later renewed.',
      },
      selfCheck: [
        { q: 'Which sphere is the thickest, and how far does it extend?', a: 'The geosphere, extending nearly 6,400 km down to the core.' },
        { q: 'What percentage of Earth’s surface do oceans cover, and what percentage of water is saline?', a: '71% of the surface; 97% of the water is saline.' },
        { q: 'Give one example of two spheres exchanging matter.', a: 'Rain (hydrosphere) weathering rock (geosphere); or plants (biosphere) exchanging CO₂ with the atmosphere.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which sphere includes all life on Earth?',
          options: ['Atmosphere', 'Hydrosphere', 'Geosphere', 'Biosphere'],
          answer: 3,
          explain: 'The biosphere is all life, integrated with the other three spheres.',
        },
        {
          type: 'tf',
          prompt: 'Most of Earth’s water is fresh water stored in lakes and rivers.',
          answer: false,
          explain: '97% of Earth’s water is saline; fresh water is a small fraction, much of it frozen or underground.',
        },
        {
          type: 'short',
          prompt: 'Name the gaseous envelope that protects the surface from radiation.',
          accept: ['atmosphere'],
          explain: 'The atmosphere supports life and shields the surface from radiation.',
        },
      ],
      cards: [
        { front: 'Four spheres', back: 'Atmosphere (gas), hydrosphere (water), geosphere (rock to the core), biosphere (life).' },
        { front: 'Ocean coverage and salinity', back: 'Oceans cover 71% of Earth’s surface; 97% of Earth’s water is saline.' },
        { front: 'Geosphere thickness', back: 'Nearly 6,400 km, from the surface to the centre.' },
      ],
    },
    {
      id: 'origins',
      title: 'Origins: Big Bang, Solar Nebula, and the Iron Catastrophe',
      tagline: 'From a cooling universe to a layered planet',
      source: { file: 'Ch 2 - The Planet Earth.pdf', pages: 'pp. 5–9' },
      objectives: [
        'Outline the Big Bang account and the evidence cited for it.',
        'Explain the nebular theory and accretion of planets.',
        'Describe chemical differentiation and the iron catastrophe.',
      ],
      intro: {
        what: 'The lesson traces Earth’s origin from the expansion of the universe, through a collapsing solar nebula, to accretion of planets and the melting and layering of early Earth.',
        why: 'The layers and the magnetic field studied later in the course are products of this history. Differentiation is why Earth has a metal core and a rocky crust at all.',
        before: ['The four spheres.', 'The idea that density differences cause layering.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Imagine a huge cloud of gas and dust. Gravity pulls it inward, it spins faster and flattens like pizza dough, and the centre gets so hot that it ignites as the Sun. Around it, dust grains stick together into pebbles, pebbles into boulders, boulders into planets. Then the young Earth melts and separates like oil and water: heavy iron sinks, light rock floats.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**The Big Bang.** The lesson begins 13.7–13.8 billion years ago with a massive expansion that sent matter flying in all directions. As superheated debris expanded and cooled, subatomic particles coalesced into the first elements, mainly hydrogen and helium. Gravitational collapse of massive gas clouds initiated fusion, forming the first stars and galaxies. Cosmic Microwave Background (CMB) radiation is the primary modern evidence for the rapid initial expansion.',
        },
        {
          t: 'p',
          text: '**The nebular theory.** Our solar system originated from a massive, rotating cloud of interstellar gas and dust (mainly hydrogen and helium) called a solar nebula. Shockwaves, possibly from a nearby supernova, caused it to contract, spin faster and flatten into a protoplanetary disk. Most mass concentrated at the centre, where pressure and gravitational heating triggered nuclear fusion, igniting the young Sun.',
        },
        {
          t: 'p',
          text: '**Formation of the planets.** Near the Sun, temperatures were too high for ices and gases to condense, so particles with high melting points (metals, silicates) coalesced into rocky inner planets. Beyond the frost line, cooler temperatures allowed water, ammonia and methane ices to accumulate into the outer planets. Accretion is the process by which colliding particles fused over millions of years, growing from dust to planetesimals to full planets.',
        },
        {
          t: 'p',
          text: '**The iron catastrophe.** During the Hadean Eon, intense heating from radioactive decay and high-velocity impacts created a global magma ocean. Density drove differentiation: heavy metals such as iron and nickel sank to form the core, while lighter elements (silicon, aluminium) rose and eventually cooled to form the primitive crust and atmosphere.',
        },
        {
          t: 'steps',
          items: [
            { label: 'Nebula', text: 'A cold cloud of H, He and dust begins to collapse after a shockwave.' },
            { label: 'Disk and protostar', text: 'Conservation of angular momentum flattens the cloud; the centre becomes a protostar and ignites by fusion.' },
            { label: 'Accretion', text: 'Solids collide and stick: dust → planetesimals → protoplanets, inside the frost line rocky, outside icy.' },
            { label: 'Melting', text: 'Impacts and radioactive decay raise the temperature until Earth has a magma ocean.' },
            { label: 'Differentiation', text: 'Dense iron and nickel sink; silicate melt rises. The planet becomes layered and a metallic core forms.' },
          ],
        },
      ],
      example: {
        problem:
          'Explain why the inner planets are rocky and the outer planets are gas- and ice-rich, and why Earth’s core is metal rather than silicate.',
        given: ['A hot inner disk and a cooler outer disk.', 'Earth experienced a magma ocean.'],
        required: 'Connect temperature gradients to condensation, and density to layering.',
        steps: [
          { label: 'Inner disk', text: 'Temperatures near the young Sun exceeded the condensation temperatures of water, ammonia and methane; only metals and silicates could be solid.' },
          { label: 'Outer disk', text: 'Beyond the frost line, ices condensed, so more solid mass was available and gas giants could grow.' },
          { label: 'Earth’s bulk', text: 'Earth accreted from high-melting-point material — silicates and metals.' },
          { label: 'Melting', text: 'Impacts and radioactive decay melted the planet, allowing materials to move according to density.' },
          { label: 'Separation', text: 'Molten iron and nickel are denser than silicate melt, so they sank to the centre; silicates rose to form the mantle and crust.' },
        ],
        answer:
          'Distance from the Sun controlled which materials could condense, giving rocky inner planets and icy/gaseous outer planets. On Earth, melting allowed density-driven separation, producing a metal core and a silicate mantle and crust.',
        check: 'The same density principle explains both the iron core and the light continental crust — differentiation is a sorting process.',
      },
      selfCheck: [
        { q: 'What is the primary evidence cited for the Big Bang?', a: 'Cosmic Microwave Background (CMB) radiation.' },
        { q: 'What is accretion?', a: 'The process by which colliding particles fuse over millions of years, growing from dust to planetesimals to planets.' },
        { q: 'Why did iron and nickel sink to form Earth’s core?', a: 'Because they are denser than the surrounding silicate material, so density-driven differentiation sent them downward.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The Big Bang is dated at approximately:',
          options: ['4.6 billion years ago', '13.7–13.8 billion years ago', '541 million years ago', '2.5 billion years ago'],
          answer: 1,
          explain: 'The lesson gives 13.7–13.8 billion years ago; 4.6 billion is Earth’s age.',
        },
        {
          type: 'mcq',
          prompt: 'The process that produced Earth’s layered core, mantle and crust is called:',
          options: ['Accretion', 'Chemical differentiation', 'Subduction', 'Lithification'],
          answer: 1,
          explain: 'Chemical differentiation separated materials by density during the magma-ocean stage; accretion built the planet.',
        },
        {
          type: 'tf',
          prompt: 'Beyond the frost line, temperatures were low enough for water, ammonia and methane ices to accumulate.',
          answer: true,
          explain: 'That is why the outer planets could grow ice-rich and, with more solid mass, become gas and ice giants.',
        },
      ],
      cards: [
        { front: 'CMB radiation', back: 'Cosmic Microwave Background — the primary modern evidence for the Big Bang’s rapid initial expansion.' },
        { front: 'Nebular theory', back: 'The solar system formed from a rotating cloud of gas and dust that collapsed, flattened into a disk and ignited a protostar.' },
        { front: 'Iron catastrophe', back: 'Density-driven differentiation during the Hadean, when molten iron and nickel sank to form the core and lighter silicates rose to form crust and mantle.' },
      ],
    },
    {
      id: 'size-shape',
      title: 'The Size and Shape of the Earth',
      tagline: 'Why a planet that spins cannot be a perfect sphere',
      source: { file: 'Ch 2 - The Planet Earth.pdf', pages: 'pp. 10–11' },
      objectives: [
        'Explain the oblate spheroid and the cause of the equatorial bulge.',
        'Recall the equatorial and polar radii and the 21 km difference.',
        'Calculate flattening and understand the reference ellipsoid (WGS 84).',
      ],
      intro: {
        what: 'Earth is an oblate spheroid: slightly wider at the equator than pole-to-pole because rotation produces centrifugal force.',
        why: 'Satellite navigation, mapping and gravity surveys all depend on an accurate reference shape. A sphere model would misplace points by kilometres.',
        before: ['Earth’s rotation.', 'The distinction between radius and diameter.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Spin a ball of soft clay. It bulges at the middle and flattens at the top and bottom. Earth does the same thing, just with rock and metal and over a very long time. The bulge is only about 21 km — tiny for a 6,371 km planet, but real and measurable.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Earth is not a perfect geometric sphere. Its rotation generates centrifugal force, causing mass to bulge at the equator and flatten at the poles. The equatorial radius is approximately **6,378 km**, the polar radius about **6,357 km**, a difference of about **21 km**.',
        },
        {
          t: 'p',
          text: 'In modern geodesy this shape is defined mathematically as a reference ellipsoid, for example WGS 84. The flattening is a small dimensionless number:',
        },
        { t: 'formula', tex: 'f = \\frac{a-b}{a}', note: 'a = equatorial radius, b = polar radius. For Earth, f ≈ 0.00335, about 1/298.' },
        {
          t: 'callout',
          kind: 'note',
          title: 'Why “oblate” and not “egg-shaped”',
          text: 'An oblate spheroid is symmetric about its short axis: the equatorial bulge is a ring, not one lump. Earth is also lumpy at smaller scales (mountains, trenches), but the reference ellipsoid describes the smooth average shape.',
        },
      ],
      example: {
        problem:
          'Using a = 6,378 km and b = 6,357 km, calculate Earth’s flattening f and express it as a ratio 1/x.',
        given: ['Equatorial radius a = 6,378 km.', 'Polar radius b = 6,357 km.'],
        required: 'Flattening f = (a − b)/a, then the ratio 1/x.',
        steps: [
          { label: 'Find the difference', text: 'a − b = 6,378 − 6,357 = 21 km.' },
          { label: 'Divide by the equatorial radius', text: 'f = 21 / 6,378.' },
          { label: 'Compute', text: '21 ÷ 6,378 ≈ 0.00329.' },
          { label: 'Invert for the ratio', text: '1 / 0.00329 ≈ 304, so f ≈ 1/304.' },
          { label: 'Interpret', text: 'The bulge is about 0.33% of the equatorial radius — small, but far larger than the precision of modern surveying.' },
        ],
        answer: 'f ≈ 0.0033, or about 1/304 (the standard reference ellipsoid uses a slightly different value, ≈ 1/298).',
        check: 'A perfect sphere would give a − b = 0 and f = 0. Any positive f means an equatorial bulge.',
      },
      selfCheck: [
        { q: 'What force causes the equatorial bulge?', a: 'Centrifugal force produced by Earth’s rotation.' },
        { q: 'How much larger is the equatorial radius than the polar radius?', a: 'About 21 km (6,378 km vs 6,357 km).' },
        { q: 'What is a reference ellipsoid?', a: 'A mathematically defined smooth shape that approximates Earth’s oblate spheroid for geodesy and mapping, e.g. WGS 84.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Earth’s shape is best described as:',
          options: ['A perfect sphere', 'A prolate spheroid', 'An oblate spheroid', 'A flat disk'],
          answer: 2,
          explain: 'It bulges at the equator and flattens at the poles, which is an oblate spheroid.',
        },
        {
          type: 'short',
          prompt: 'Give the approximate equatorial radius in km.',
          accept: ['6378', '6378 km', '6,378 km', 'about 6378 km'],
          explain: 'The equatorial radius is approximately 6,378 km; the polar radius is about 6,357 km.',
        },
        {
          type: 'tf',
          prompt: 'The WGS 84 reference ellipsoid is a mathematical model of Earth’s shape used in geodesy.',
          answer: true,
          explain: 'WGS 84 is one standard reference ellipsoid used for positioning and mapping.',
        },
      ],
      cards: [
        { front: 'Oblate spheroid', back: 'The shape produced by rotation: equatorial bulge and polar flattening. Earth’s equatorial radius is ~6,378 km, polar ~6,357 km.' },
        { front: 'Flattening formula', back: 'f = (a − b)/a, where a is the equatorial radius and b the polar radius; for Earth f ≈ 1/300.' },
        { front: 'Reference ellipsoid', back: 'A mathematically defined smooth Earth shape (e.g. WGS 84) used in geodesy, navigation and gravity work.' },
      ],
    },
    {
      id: 'internal-layers',
      title: 'Earth’s Internal Layers and How We Know',
      tagline: 'Two ways of slicing the same planet, and the seismic evidence behind them',
      source: { file: 'Ch 2 - The Planet Earth.pdf', pages: 'pp. 12–15' },
      objectives: [
        'Describe the compositional layers: crust, mantle, core.',
        'Describe the physical layers: lithosphere, asthenosphere, mesosphere, outer core, inner core.',
        'Explain how seismic waves reveal the interior and why the outer core is liquid.',
      ],
      intro: {
        what: 'Earth is layered in two ways: by composition (crust, mantle, core) and by physical behaviour (lithosphere, asthenosphere, mesosphere, outer and inner core).',
        why: 'Plate tectonics, earthquakes, volcanoes and the magnetic field all depend on these layers and on the differences between them.',
        before: ['Density and differentiation from the origins topic.', 'A general idea of what a wave is.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A boiled egg is a useful first picture — shell, white, yolk — but Earth needs two labels per layer. One label says what it is made of (composition). The other says how it behaves (rigid, plastic, liquid, solid). The same rock can be “mantle” by composition and “asthenosphere” by behaviour.',
        },
        {
          t: 'p',
          text: 'We cannot drill to the mantle, so we use earthquakes as a scanner. Seismic waves speed up, bend or stop at boundaries, and the pattern of arrivals at stations around the world reveals the layers.',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Crust', def: 'The low-density outermost skin. Continental crust is thick and granitic (density ~2.7 g/cm³); oceanic crust is thin and basaltic (~3.0 g/cm³).' },
            { term: 'Mantle', def: 'A solid rocky shell extending to 2,900 km depth, comprising 82% of Earth’s volume and rich in iron–magnesium silicate minerals (peridotite).' },
            { term: 'Core', def: 'The dense central sphere, predominantly an iron–nickel alloy with minor oxygen, silicon and sulfur.' },
          ],
        },
        {
          t: 'deflist',
          items: [
            { term: 'Lithosphere', def: 'The rigid outer shell (~100 km thick) containing the crust and uppermost mantle; broken into tectonic plates.' },
            { term: 'Asthenosphere', def: 'A weak, ductile (plastic) layer of the upper mantle beneath the lithosphere, allowing plates to slide.' },
            { term: 'Mesosphere', def: 'The strong, solid lower mantle extending down to the D″ layer at the core boundary.' },
            { term: 'Outer core', def: 'A liquid iron–nickel layer whose convective flow generates Earth’s magnetic field (the geodynamo).' },
            { term: 'Inner core', def: 'Solid despite temperatures comparable to the Sun’s surface, because immense confining pressure keeps the alloy solid.' },
          ],
        },
        {
          t: 'p',
          text: 'Because we cannot drill into the mantle or core, knowledge of the interior comes primarily from **seismology**. P-waves and S-waves change velocity, refract or reflect when they meet materials of different density or state. S-waves cannot travel through liquids, creating a **shadow zone** that proved the outer core is liquid.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Composition versus physical state',
          text: 'The lithosphere includes crust *and* uppermost mantle — it is a behavioural layer, not a compositional one. This is why “the plates are made of crust” is only partly true.',
        },
      ],
      diagram: {
        key: 'earth-layers',
        title: 'Compositional and physical layering',
        caption: 'Both classifications describe the same planet; the physical layers control plate motion and the magnetic field.',
      },
      example: {
        problem:
          'An earthquake occurs near the surface. A station 120° away records P-waves but no direct S-waves. Explain what this tells us about the path and the material encountered.',
        given: ['P-waves arrive.', 'No direct S-waves at 120°.'],
        required: 'Interpret the shadow zone in terms of layer state.',
        steps: [
          { label: 'Recall wave behaviour', text: 'P-waves (compressional) travel through solids and liquids; S-waves (shear) cannot pass through liquids.' },
          { label: 'Trace the path', text: 'At 120° the direct path passes through the outer core.' },
          { label: 'Observe the missing wave', text: 'The absence of direct S-waves means the outer core cannot transmit shear.' },
          { label: 'Conclude', text: 'The outer core is liquid. P-waves still arrive because they can travel through liquid, though refracted.' },
          { label: 'Support', text: 'The P-wave shadow zone and the S-wave shadow zone together constrain the core’s radius and state.' },
        ],
        answer: 'The missing S-waves show that the outer core is liquid; P-waves pass through it but are refracted, producing the P-wave shadow zone as well.',
      },
      selfCheck: [
        { q: 'Which layers are defined by composition?', a: 'Crust, mantle and core.' },
        { q: 'Which layer is liquid, and how do we know?', a: 'The outer core; S-waves cannot pass through it, producing an S-wave shadow zone.' },
        { q: 'Why is the inner core solid despite extreme temperature?', a: 'Immense confining pressure keeps the iron–nickel alloy solid.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'The asthenosphere is best described as:',
          options: ['The rigid outer shell of plates', 'A weak, ductile layer of the upper mantle', 'The liquid outer core', 'The lower mantle'],
          answer: 1,
          explain: 'It is a weak, plastic layer beneath the lithosphere that allows plates to move.',
        },
        {
          type: 'mcq',
          prompt: 'Which observation proved that the outer core is liquid?',
          options: ['P-waves speed up in the mantle', 'S-waves cannot pass through the outer core', 'The magnetic field reverses', 'The Moho is at 35 km'],
          answer: 1,
          explain: 'S-waves are shear waves and cannot travel through liquids; their shadow zone revealed the liquid outer core.',
        },
        {
          type: 'tf',
          prompt: 'The lithosphere consists only of crust.',
          answer: false,
          explain: 'It contains the crust plus the uppermost mantle; it is defined by rigid behaviour, not composition alone.',
        },
      ],
      cards: [
        { front: 'Compositional layers', back: 'Crust (granitic continental ~2.7 g/cm³; basaltic oceanic ~3.0 g/cm³), mantle (to 2,900 km, 82% of volume), core (iron–nickel).' },
        { front: 'Physical layers', back: 'Lithosphere (rigid), asthenosphere (ductile), mesosphere (strong solid lower mantle), outer core (liquid), inner core (solid).' },
        { front: 'S-wave shadow zone', back: 'S-waves cannot pass through liquid, so their absence beyond ~103° proved the outer core is liquid.' },
      ],
    },
    {
      id: 'isostasy',
      title: 'Isostasy: Why Continents Float',
      tagline: 'Archimedes, applied to continents — and why Scandinavia is still rising',
      source: { file: 'Ch 2 - The Planet Earth.pdf', pages: 'pp. 16–20' },
      objectives: [
        'Define isostasy and the depth of compensation.',
        'Compare Airy’s and Pratt’s models.',
        'Explain isostatic rebound using glacial adjustment.',
      ],
      intro: {
        what: 'Isostasy is the tendency of Earth’s crust to seek equilibrium — a condition of ideal balance — so that thick or light crust stands higher and thin or dense crust sits lower.',
        why: 'It explains why mountains have deep roots, why some regions rise after ice melts, and why gravity surveys reveal hidden subsurface structure.',
        before: ['Density and buoyancy.', 'Earth’s internal layers, especially the crust–mantle boundary.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Float an ice cube in water. Most of it is below the surface; the tip above is supported by the submerged part. Earth’s crust floats on the denser mantle the same way: a mountain is not a pile sitting on top, it is the tip of a thick block with a deep root.',
        },
        {
          t: 'p',
          text: 'The classic analogy from the lesson is the iceberg: thicker crustal blocks project deeper into the mantle to support their elevated topography.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Clarence Edward Dutton defined isostasy as the tendency of the crust to seek equilibrium. The level at which the pressure is balanced is called the **depth of compensation**.',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Airy’s model (1855)', def: 'Uniform crustal density but varying thickness. Thicker blocks (mountains) have deeper “crustal roots” projecting into the denser mantle, like icebergs.' },
            { term: 'Pratt’s model (1859)', def: 'Varying crustal density but a uniform base depth (the depth of compensation). Mountains stand higher because they are made of lower-density rock than their surroundings.' },
            { term: 'Heiskanen’s model', def: 'A pragmatic compromise that combines varying crustal thickness (Airy) with varying crustal density (Pratt).' },
            { term: 'Hayford–Bowie concept', def: 'The most accepted model in geodesy. It showed that gravity anomalies relate directly to topographic features and established the formal mathematical concept of the depth of isostatic compensation.' },
          ],
        },
        {
          t: 'p',
          text: 'Isostasy is not static; it responds to changing loads. **Isostatic rebound** occurs when a massive load is removed, such as the melting of continental ice sheets after the last Ice Age. Scandinavia and Hudson Bay are still rising measurably today as the viscous mantle flows back underneath them (glacial isostatic adjustment).',
        },
        { t: 'formula', tex: 'r = h\\,\\frac{\\rho_c}{\\rho_m-\\rho_c}', note: 'Airy root depth r for a mountain of height h, crustal density ρc and mantle density ρm. This standard expression is a teaching aid for the qualitative model in the lesson.' },
      ],
      diagram: {
        key: 'isostasy',
        title: 'Airy versus Pratt',
        caption: 'Both models achieve balance; Airy varies thickness, Pratt varies density.',
      },
      example: {
        problem:
          'A mountain stands 3 km above the surrounding crust. Crustal density is 2.7 g/cm³ and mantle density is 3.3 g/cm³. Using the Airy model, calculate the root depth.',
        given: ['h = 3 km', 'ρc = 2.7 g/cm³', 'ρm = 3.3 g/cm³'],
        required: 'Root depth r using r = h ρc / (ρm − ρc).',
        steps: [
          { label: 'Write the relation', text: 'The buoyant support comes from the displaced mantle, so the root is r = h ρc/(ρm − ρc).' },
          { label: 'Density contrast', text: 'ρm − ρc = 3.3 − 2.7 = 0.6 g/cm³.' },
          { label: 'Ratio', text: 'ρc/(ρm − ρc) = 2.7 / 0.6 = 4.5.' },
          { label: 'Multiply by height', text: 'r = 3 km × 4.5 = 13.5 km.' },
          { label: 'Interpret', text: 'A 3 km mountain is supported by a root 4.5 times taller than the mountain itself.' },
        ],
        answer: 'The root extends about 13.5 km below the normal crustal level.',
        check: 'Units cancel correctly: km × (g/cm³ ÷ g/cm³) = km. A larger density contrast gives a shallower root.',
      },
      selfCheck: [
        { q: 'What does isostasy mean?', a: 'The tendency of the crust to seek equilibrium — a condition of ideal balance — by floating on the denser mantle.' },
        { q: 'How do Airy and Pratt differ?', a: 'Airy uses uniform density with varying crustal thickness (roots); Pratt uses varying density with a uniform base depth.' },
        { q: 'What is isostatic rebound, and where is it happening?', a: 'Crustal rising after a load such as an ice sheet is removed; Scandinavia and Hudson Bay are still rebounding.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which model proposes a uniform crustal density but varying thickness?',
          options: ['Pratt', 'Airy', 'Heiskanen', 'Hayford–Bowie'],
          answer: 1,
          explain: 'Airy’s iceberg model keeps density uniform and varies thickness, producing roots under mountains.',
        },
        {
          type: 'mcq',
          prompt: 'Glacial isostatic adjustment is caused by:',
          options: ['Erosion of mountains', 'Removal of a large ice load and slow crustal rebound', 'Seafloor spreading', 'Cooling of the outer core'],
          answer: 1,
          explain: 'When ice sheets melt, the load is removed and the crust slowly rises back toward equilibrium.',
        },
        {
          type: 'tf',
          prompt: 'The depth of compensation is the level at which isostatic pressure is balanced.',
          answer: true,
          explain: 'That is the definition used in the lesson and in the Hayford–Bowie concept.',
        },
      ],
      cards: [
        { front: 'Isostasy', back: 'The tendency of Earth’s crust to seek equilibrium — ideal balance — by floating on the denser mantle; the balance level is the depth of compensation.' },
        { front: 'Airy vs Pratt', back: 'Airy: uniform density, varying thickness (roots under mountains). Pratt: varying density, uniform base depth.' },
        { front: 'Isostatic rebound', back: 'Slow crustal uplift after a load (such as an ice sheet) is removed; observed in Scandinavia and Hudson Bay.' },
      ],
    },
  ],
}
