import type { Chapter } from '../types'

export const ch11: Chapter = {
  id: 'ch11',
  number: 11,
  title: 'Mass Wasting',
  subtitle: 'When gravity moves the ground: triggers, classification and mitigation',
  pdf: 'GS 21L 10 Mass Wasting.pdf',
  pages: 'pp. 1–19',
  accent: '#8a5a44',
  practice: [
    {
      id: 'ch11-p1',
      level: 'easy',
      question:
        'After a wildfire removes vegetation on a steep slope, the first heavy rain triggers a debris flow. Identify two factors that contributed and explain each.',
      hint: 'Use the trigger list: vegetation, water, slope angle.',
      steps: [
        'Removal of vegetation: roots no longer bind soil, and the surface is exposed to raindrop impact.',
        'Water: saturation fills pores, reduces friction and cohesion, adds weight, and lubricates clay.',
        'Steep slope: gravity provides a larger downslope component.',
      ],
      answer: 'Loss of vegetation and water saturation on a steep slope; the fire removed root support and the rain reduced friction and added weight.',
    },
    {
      id: 'ch11-p2',
      level: 'medium',
      question:
        'A slope fails along a spoon-shaped surface, with the moving mass rotating downward and outward. Another fails along a flat bedding plane with little rotation. Name both slide types.',
      hint: 'Compare the shape of the rupture surface and the amount of rotation.',
      steps: [
        'A concave-up, spoon-shaped rupture surface with rotation is a rotational slide (slump).',
        'A relatively flat surface such as a joint, fault or bedding plane, with little rotation, is a translational slide.',
      ],
      answer: 'Rotational slide (slump) and translational slide, respectively.',
    },
    {
      id: 'ch11-p3',
      level: 'hard',
      question:
        'A rock avalanche travels 5 km at an average speed of 200 km/h. How long does it take? Why is this faster than a simple friction model would predict?',
      hint: 'Time = distance/speed. Recall the lesson’s explanation of trapped air.',
      steps: [
        't = 5 km ÷ 200 km/h = 0.025 h.',
        '0.025 h × 60 min/h = 1.5 minutes.',
        'The lesson explains that rock avalanches literally “float on air”: air trapped and compressed beneath the debris lets it move as a buoyant, flexible sheet with reduced friction.',
      ],
      answer: '1.5 minutes; trapped and compressed air beneath the debris reduces friction, allowing unusually high speeds.',
    },
  ],
  topics: [
    {
      id: 'mass-wasting-triggers',
      title: 'Mass Wasting and Its Triggers',
      tagline: 'Gravity, water, steep slopes, missing roots and earthquakes',
      source: { file: 'GS 21L 10 Mass Wasting.pdf', pages: 'pp. 2–8' },
      objectives: [
        'Define mass wasting.',
        'Explain five factors that promote or trigger it.',
        'Explain liquefaction and the possibility of landslides without triggers.',
      ],
      intro: {
        what: 'Mass wasting is the downslope movement of soil, sand, regolith and rock as a solid, continuous or discontinuous mass, largely under gravity but often with flow-like behaviour.',
        why: 'It is a major natural hazard and a key link in the rock cycle, moving material from slopes to basins.',
        before: ['Weathering and erosion.', 'Slope stability (informal), water and sediment.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A pile of sand holds its shape until it gets too steep or too wet. Add water and the grains stop gripping each other; add weight and the pile fails; remove the plants holding it and it has nothing to anchor to. Mass wasting is gravity winning that contest.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The lesson defines mass wasting as the geomorphic process by which soil, sand, regolith and rock move downslope, typically as a solid, continuous or discontinuous mass, largely under the force of gravity but frequently with characteristics of a flow.',
        },
        {
          t: 'deflist',
          items: [
            {
              term: '1. The role of water',
              def: 'Heavy rain or snow-melt saturates surface materials. Water does not transport the material; it lets gravity set it in motion. When pores fill, cohesion among particles is destroyed and they move past one another. Saturation also adds weight, and wet clay becomes slick and lubricated.',
            },
            {
              term: '2. Oversteepened slopes',
              def: 'A stream cutting into a valley wall removes material from the base, making the slope too steep. Human activities such as building roads or houses also create oversteepened, unstable slopes.',
            },
            {
              term: '3. Removal of vegetation',
              def: 'Root systems bind soil and regolith, and plants shield the surface from raindrop impact. Where plants are removed by fire, timber cutting, farming or development, mass wasting is enhanced, especially on steep, wet slopes.',
            },
            {
              term: '4. Earthquakes',
              def: 'Intense ground shaking can dislodge enormous volumes of rock and unconsolidated material. Shaking can also cause water-saturated surface materials to lose strength and behave as fluid-like masses — liquefaction.',
            },
            {
              term: '5. Landslides without triggers',
              def: 'Rapid mass-wasting events do not always require an external trigger. At Sacred Falls, Hawaii, in May 1999, a rock mass fell about 150 m and killed 10 hikers; a USGS study concluded it occurred without any discernible external trigger.',
            },
          ],
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Water helps, but not by carrying',
          text: 'In mass wasting, water mainly reduces friction, destroys cohesion, adds weight and lubricates clay. Transport by water is erosion, a separate process.',
        },
      ],
      diagram: {
        key: 'mass-wasting',
        title: 'Fall, slide and flow',
        caption: 'The three basic styles of movement; water and slope angle determine which is likely.',
      },
      example: {
        problem:
          'A road cut steepens the base of a vegetated slope. A week of heavy rain follows, and a landslide buries the road. Identify every contributing factor and explain the sequence.',
        given: ['Road cut steepens the slope base.', 'Vegetation removed for construction.', 'Week of heavy rain.'],
        required: 'A factor-by-factor explanation of the failure.',
        steps: [
          { label: 'Oversteepening', text: 'Excavation removed the slope’s toe, increasing the gravitational driving force.' },
          { label: 'Vegetation loss', text: 'Roots no longer bind the soil, and the surface is exposed.' },
          { label: 'Water', text: 'Rain fills pores, destroys cohesion, adds weight and lubricates clay.' },
          { label: 'Failure', text: 'With support reduced and driving forces increased, the slope fails along a weakness.' },
          { label: 'Timing', text: 'The rain is the final trigger, but the road cut and vegetation removal set the stage.' },
        ],
        answer: 'Oversteepening + vegetation removal + water saturation; the cut and clearing preconditioned the slope, and the rain triggered failure.',
      },
      selfCheck: [
        { q: 'Define mass wasting.', a: 'The downslope movement of soil, regolith and rock as a solid or discontinuous mass, mainly under gravity but often with flow-like behaviour.' },
        { q: 'How does water promote mass wasting?', a: 'It destroys cohesion, reduces friction, adds weight and lubricates clay.' },
        { q: 'What is liquefaction?', a: 'Loss of strength in water-saturated material during earthquake shaking, so it behaves like a fluid.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Which is NOT a trigger or promoting factor for mass wasting?',
          options: ['Removal of vegetation', 'Oversteepened slopes', 'Earthquake shaking', 'Growth of deep plant roots'],
          answer: 3,
          explain: 'Roots bind soil and stabilise slopes; their removal promotes mass wasting.',
        },
        {
          type: 'mcq',
          prompt: 'Liquefaction occurs when:',
          options: ['Dry sand is compacted', 'Water-saturated material loses strength during shaking', 'A glacier melts', 'Rock is metamorphosed'],
          answer: 1,
          explain: 'Earthquake shaking can make saturated surface materials behave as fluid-like masses.',
        },
        {
          type: 'tf',
          prompt: 'Every rapid landslide requires a clear external trigger.',
          answer: false,
          explain: 'The Sacred Falls landslide in 1999 occurred without any discernible external trigger.',
        },
      ],
      cards: [
        { front: 'Mass wasting', back: 'Downslope movement of soil, regolith and rock largely under gravity, often with flow-like behaviour.' },
        { front: 'Triggers of mass wasting', back: 'Water saturation, oversteepened slopes, removal of vegetation, earthquakes (including liquefaction) — and sometimes no trigger at all.' },
        { front: 'Liquefaction', back: 'Water-saturated material loses strength during earthquake shaking and flows like a fluid.' },
      ],
    },
    {
      id: 'mass-wasting-classification',
      title: 'Classifying Mass Movements',
      tagline: 'Material, motion and speed',
      source: { file: 'GS 21L 10 Mass Wasting.pdf', pages: 'pp. 9–15' },
      objectives: [
        'Classify mass movements by material, motion and rate.',
        'Distinguish fall, rotational slide, translational slide and flow.',
        'Explain creep and the conditions that produce rock avalanches.',
      ],
      intro: {
        what: 'Mass movements are classified by the material involved (rock or debris/earth/mud), the type of motion (fall, slide or flow), and the rate of movement.',
        why: 'The classification predicts behaviour and hazard: a slow creep damages foundations, while a rock avalanche kills instantly.',
        before: ['Triggers and slope processes.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Ask three questions: what is moving (rock or soil)? how is it moving (falling, sliding or flowing)? how fast? Those three answers name almost any mass movement.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**1. Type of material.** If soil and regolith dominate, terms such as debris, mud or earth are used. When bedrock breaks loose and moves downslope, the term rock is used.',
        },
        {
          t: 'p',
          text: '**2. Type of motion** is described as a fall, a slide or a flow:',
        },
        {
          t: 'deflist',
          items: [
            { term: 'Fall', def: 'Free fall of detached individual pieces of any size. Common on slopes too steep for loose material to remain. Rock falls build and maintain talus slopes.' },
            { term: 'Slide', def: 'Movement with a distinct zone of weakness separating the slide material from the stable material below. Rotational slides have a concave-up, spoon-shaped rupture surface with downward and outward rotation. Translational slides move along a relatively flat surface such as a joint, fault or bedding plane, with little rotation or backward tilting.' },
            { term: 'Flow', def: 'Material moves downslope as a viscous fluid. Most flows are saturated with water and move as lobes or tongues.' },
          ],
        },
        {
          t: 'p',
          text: '**3. Rate of movement.** The fastest type is a **rock avalanche**. Debris from Peru’s Nevados Huascarán is estimated to have moved faster than 200 km/h. Rock avalanches must literally “float on air”: high velocities result when air is trapped and compressed beneath the falling debris, letting it move as a buoyant, flexible sheet. The prehistoric Blackhawk rock avalanche is considered one of the largest known landslides in North America.',
        },
        {
          t: 'p',
          text: '**Creep and landslides.** Soil creep is slow, long-term movement: small movements of soil or rock in various directions over time, directed gradually downslope by gravity. The steeper the slope, the faster the creep. Creep curves trees and shrubs as they grow to maintain verticality, and can trigger landslides if root footing is lost. A landslide (landslip) is a slow or rapid movement of a large mass of earth and rock down a hill or mountainside; little flowage occurs until heavy rain and lubrication facilitate movement.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'The same event can have several labels',
          text: 'A debris flow is a flow of soil and regolith; a rockslide is a slide of bedrock; a rockfall is a fall of rock. Use material + motion together.',
        },
      ],
      diagram: {
        key: 'mass-wasting',
        title: 'Fall, slide and flow',
        caption: 'Falls build talus, rotational slides move along spoon-shaped surfaces, and flows move as viscous water-rich lobes.',
      },
      example: {
        problem:
          'Classify each event: (a) rocks bouncing down a cliff onto a talus cone; (b) a hillside of soil sliding along a spoon-shaped surface; (c) saturated volcanic ash flowing down a valley as a lobe.',
        given: ['(a) rock fall onto talus.', '(b) soil along spoon-shaped surface.', '(c) saturated ash lobe.'],
        required: 'Material, motion and name for each.',
        steps: [
          { label: 'Event (a)', text: 'Material: rock. Motion: fall. Result: rockfall building a talus slope.' },
          { label: 'Event (b)', text: 'Material: earth/soil. Motion: rotational slide. Result: slump.' },
          { label: 'Event (c)', text: 'Material: debris (ash). Motion: flow. Result: debris flow (or lahar if volcanic).' },
          { label: 'Rate', text: 'Falls and flows are usually rapid; slides may be slow or rapid; creep is very slow.' },
        ],
        answer: '(a) rockfall; (b) rotational slide/slump; (c) debris flow.',
      },
      selfCheck: [
        { q: 'What three criteria are used to classify mass movements?', a: 'Type of material, type of motion and rate of movement.' },
        { q: 'How does a rotational slide differ from a translational slide?', a: 'Rotational slides have a concave-up spoon-shaped rupture surface and rotate; translational slides move along a flat surface with little rotation.' },
        { q: 'Why can rock avalanches exceed 200 km/h?', a: 'Trapped and compressed air beneath the debris reduces friction, letting it move as a buoyant sheet.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A mass movement along a flat bedding plane with little rotation is a:',
          options: ['Fall', 'Rotational slide', 'Translational slide', 'Flow'],
          answer: 2,
          explain: 'Translational slides move along a relatively flat surface such as a bedding plane, joint or fault.',
        },
        {
          type: 'mcq',
          prompt: 'Talus slopes are built mainly by:',
          options: ['Flows', 'Rock falls', 'Creep', 'Lahars'],
          answer: 1,
          explain: 'Rock falls are the primary way talus slopes are built and maintained.',
        },
        {
          type: 'tf',
          prompt: 'Soil creep is a slow, long-term downslope movement.',
          answer: true,
          explain: 'Creep is slow and long-term, and can curve trees as they grow.',
        },
      ],
      cards: [
        { front: 'Three classification criteria', back: 'Type of material (rock vs debris/earth/mud), type of motion (fall, slide, flow) and rate of movement.' },
        { front: 'Rotational vs translational slide', back: 'Rotational: spoon-shaped rupture surface, downward/outward rotation (slump). Translational: flat surface (joint, fault, bedding plane), little rotation.' },
        { front: 'Rock avalanche', back: 'The fastest mass movement, exceeding 200 km/h; trapped compressed air beneath the debris reduces friction.' },
      ],
    },
    {
      id: 'mass-wasting-mitigation',
      title: 'Mitigating Mass Wasting',
      tagline: 'Roots, terraces and engineering the slope',
      source: { file: 'GS 21L 10 Mass Wasting.pdf', pages: 'pp. 16–18' },
      objectives: [
        'Explain afforestation and reforestation.',
        'Describe terracing and its benefits.',
        'List slope-stabilisation techniques.',
      ],
      intro: {
        what: 'Mitigation reduces the likelihood or impact of mass wasting through vegetation, reshaping slopes and engineering works.',
        why: 'Landslides are costly and deadly; the right measures protect settlements, roads and farmland.',
        before: ['Triggers and classification of mass movements.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Three ways to keep a slope in place: hold it together (roots, nets, nails), stop water from running over it too fast (terraces, drainage), and protect the surface (rock armour, shotcrete).',
        },
      ],
      full: [
        {
          t: 'deflist',
          items: [
            { term: 'Afforestation', def: 'Introducing trees and tree seedlings to an area that has not previously been forested, through planting and seeding, naturally or artificially.' },
            { term: 'Reforestation', def: 'Restoring forest to an area that has been deforested. It can be considered a form of afforestation; the difference is that reforestation restores a previously forested area.' },
            { term: 'Terracing', def: 'Steps cut on slopes, or more generally re-modelling the slope shape. Terraces consist of ridges and channels constructed across the slope; they reduce the amount and velocity of water moving across the soil surface, greatly reducing erosion and permitting more intensive cropping.' },
            { term: 'Slope stabilisation', def: 'Calculating and assessing how much stress a particular slope can manage before failing, then applying engineering measures.' },
          ],
        },
        {
          t: 'p',
          text: 'Examples of stabilisation given in the lesson: **rip rap** (rock armour), **soil nailing**, **shotcreting** and **jute webbing**.',
        },
        {
          t: 'table',
          head: ['Measure', 'What it does', 'Best suited to'],
          rows: [
            ['Afforestation / reforestation', 'Roots bind soil; canopy reduces raindrop impact', 'Steep, wet, degraded slopes'],
            ['Terracing', 'Reduces runoff velocity and volume; conserves soil and water', 'Cultivated hillslopes'],
            ['Rip rap', 'Armours the surface against erosion', 'Slope toes, channels, shorelines'],
            ['Soil nailing', 'Reinforces the slope internally', 'Cut slopes, road embankments'],
            ['Shotcreting', 'Seals and supports the surface', 'Rock cuts, weathered faces'],
            ['Jute webbing', 'Holds soil and seed in place until vegetation establishes', 'Recently graded or burned slopes'],
          ],
          caption: 'Mitigation measures described in the lesson.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Vegetation is not instant',
          text: 'Newly planted roots take time to bind soil. Until vegetation is established, a slope may remain vulnerable, so engineering measures often accompany planting.',
        },
      ],
      example: {
        problem:
          'A steep cultivated hillside loses soil every rainy season. A road cut nearby has an exposed rock face. Propose suitable mitigation for each and justify.',
        given: ['Cultivated steep hillside.', 'Exposed road-cut rock face.'],
        required: 'Matched mitigation measures with reasons.',
        steps: [
          { label: 'Hillside problem', text: 'Runoff concentrates and erodes soil on a steep cultivated slope.' },
          { label: 'Hillside measure', text: 'Terracing with ridges and channels reduces runoff velocity and volume, conserving soil and water.' },
          { label: 'Add vegetation', text: 'Reforestation or planting binds soil and shields it from raindrop impact.' },
          { label: 'Road cut problem', text: 'An exposed rock face can shed blocks and erode.' },
          { label: 'Road cut measures', text: 'Shotcreting seals the face; soil nailing or rip rap may support or armour it; drainage reduces water pressure.' },
        ],
        answer: 'Terracing plus revegetation on the hillside; shotcreting, soil nailing and drainage on the road cut.',
      },
      selfCheck: [
        { q: 'What is the difference between afforestation and reforestation?', a: 'Afforestation introduces trees to an area not previously forested; reforestation restores forest to a deforested area.' },
        { q: 'How does terracing reduce erosion?', a: 'Ridges and channels across the slope reduce the amount and velocity of runoff, conserving soil and water.' },
        { q: 'Name three slope-stabilisation techniques.', a: 'Rip rap, soil nailing, shotcreting (also jute webbing).' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Restoring trees to a previously deforested area is called:',
          options: ['Afforestation', 'Reforestation', 'Terracing', 'Shotcreting'],
          answer: 1,
          explain: 'Reforestation restores forest to land that was previously forested; afforestation applies to land not previously forested.',
        },
        {
          type: 'mcq',
          prompt: 'Terracing mainly works by:',
          options: ['Increasing runoff speed', 'Reducing the amount and velocity of runoff', 'Removing all vegetation', 'Adding cement to soil'],
          answer: 1,
          explain: 'Terraces reduce runoff volume and velocity, conserving soil and water.',
        },
        {
          type: 'tf',
          prompt: 'Shotcreting and soil nailing are examples of slope stabilisation.',
          answer: true,
          explain: 'Both are listed among the stabilisation examples in the lesson.',
        },
      ],
      cards: [
        { front: 'Afforestation vs reforestation', back: 'Afforestation: trees introduced to land not previously forested. Reforestation: restoring forest to a deforested area.' },
        { front: 'Terracing', back: 'Ridges and channels built across a slope to reduce runoff amount and velocity, conserving soil and water.' },
        { front: 'Slope stabilisation examples', back: 'Rip rap, soil nailing, shotcreting and jute webbing.' },
      ],
    },
  ],
}
