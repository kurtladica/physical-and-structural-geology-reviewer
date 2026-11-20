import type { Chapter } from '../types'

export const ch10: Chapter = {
  id: 'ch10',
  number: 10,
  title: 'Groundwater',
  subtitle: 'The hidden freshwater reservoir: zones, flow, wells, artesian systems and karst',
  pdf: 'GS 21L 9 Groundwater.pdf',
  pages: 'pp. 1–19',
  accent: '#2c6f8f',
  practice: [
    {
      id: 'ch10-p1',
      level: 'easy',
      question: 'A sediment sample has a total volume of 12 cm³, of which 3 cm³ is pore space. Calculate its porosity.',
      hint: 'Porosity = volume of voids ÷ total volume × 100%.',
      steps: ['Porosity = 3 cm³ / 12 cm³.', '= 0.25.', 'As a percentage: 25%.'],
      answer: '25%.',
    },
    {
      id: 'ch10-p2',
      level: 'medium',
      question:
        'A permeable layer has K = 10 m/day, cross-sectional area A = 100 m², and a hydraulic gradient of 0.02. Calculate the discharge Q using Darcy’s law.',
      hint: 'Q = K × A × gradient.',
      steps: [
        'Q = K · A · i, where i = (h₁ − h₂)/d.',
        'Q = 10 m/day × 100 m² × 0.02.',
        'Q = 20 m³/day.',
        'Check units: (m/day)(m²) = m³/day.',
      ],
      answer: '20 m³ per day.',
    },
    {
      id: 'ch10-p3',
      level: 'hard',
      question:
        'Two wells 500 m apart measure water-table elevations of 50 m and 45 m. The aquifer has K = 2 m/day and a cross-sectional area of 200 m². Calculate the hydraulic gradient and discharge, then explain why the cone of depression speeds up flow near a pumped well.',
      hint: 'Gradient = (h₁ − h₂)/d; Q = K A i. For the last part, think about how drawdown changes the gradient.',
      steps: [
        'Gradient i = (50 − 45) / 500 = 5/500 = 0.01.',
        'Q = K · A · i = 2 × 200 × 0.01 = 4 m³/day.',
        'Pumping lowers the water table around the well, creating a cone of depression.',
        'The cone steepens the hydraulic gradient near the well, so groundwater flows more rapidly toward the opening.',
      ],
      answer: 'Gradient 0.01; discharge 4 m³/day. Pumping steepens the local gradient, increasing flow toward the well.',
    },
  ],
  topics: [
    {
      id: 'groundwater-zones',
      title: 'Groundwater and Its Zones',
      tagline: 'Where water hides beneath your feet',
      source: { file: 'GS 21L 9 Groundwater.pdf', pages: 'pp. 3–5' },
      objectives: [
        'Define groundwater and explain why it matters.',
        'Describe the zone of soil moisture, vadose zone and phreatic zone.',
        'Define the water table and explain how it varies.',
      ],
      intro: {
        what: 'Groundwater is water in the zone of saturation — the largest reservoir of fresh water available to humans.',
        why: 'It supplies industry, agriculture and drinking water, stores rainwater, and shapes the landscape by dissolving rock.',
        before: ['Porosity and permeability (introduced here).', 'The hydrologic cycle: precipitation, infiltration, runoff.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Think of soil and rock as a sponge. Near the surface, the holes contain both air and water. Deeper down, all the holes are full — that is the saturated zone. The top of the saturated sponge is the water table, and it rises and falls with the seasons.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Groundwater is the water in the **zone of saturation**. It is the largest reservoir of fresh water available to humans. Its importance includes:',
        },
        {
          t: 'ol',
          items: [
            'An invaluable source of fresh water for industry, agriculture and human well-being.',
            'An important erosional agent, responsible for forming sinkholes and dolines.',
            'Storage of meteoric water during precipitation.',
          ],
        },
        {
          t: 'deflist',
          items: [
            { term: 'Zone of soil moisture', def: 'The uppermost layer of soil with moisture from meteoric water. Some infiltrating water does not travel far because it is held by molecular attraction as a surface film on soil particles.' },
            { term: 'Vadose zone (unsaturated zone)', def: 'The area above the water table that includes the capillary fringe and the zone of soil moisture. Its pore spaces contain both air and water.' },
            { term: 'Phreatic zone (saturated zone)', def: 'The zone reached by water percolating downward that is not held as soil moisture; all open spaces in sediment and rock are completely filled with water.' },
          ],
        },
        {
          t: 'p',
          text: 'The **water table** is the upper limit of the zone of saturation. Its configuration depends on the season and on the amount of precipitation. Its subsurface shape is a subdued replica of the surface topography. During droughts the water table falls, reducing streamflow and drying up some wells.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Which zone matters for a well?',
          text: 'A well must reach below the water table into the saturated zone. A hole that stops in the vadose zone will not fill with groundwater.',
        },
      ],
      diagram: {
        key: 'groundwater-zones',
        title: 'Zones beneath the surface',
        caption: 'Soil moisture and the vadose zone sit above the water table; below it, every pore is saturated (phreatic zone).',
      },
      example: {
        problem:
          'A well is dug 8 m deep. The water table is at 10 m. A second well is 15 m deep. Which produces water, and what would happen during a severe drought?',
        given: ['Water table at 10 m.', 'Well A: 8 m; Well B: 15 m.'],
        required: 'Explain which well produces water and the drought effect.',
        steps: [
          { label: 'Well A', text: 'It ends above the water table, in the vadose zone, so it does not reach saturated material.' },
          { label: 'Well B', text: 'It extends 5 m below the water table into the phreatic zone, so it fills with groundwater.' },
          { label: 'Drought', text: 'The water table falls; if it drops below 15 m, Well B also runs dry.' },
          { label: 'Seasonality', text: 'Water-table depth changes with precipitation, so well depth must account for dry-season lows.' },
        ],
        answer: 'Only the 15 m well reaches the saturated zone. In a drought the water table can fall below its intake and the well may dry up.',
      },
      selfCheck: [
        { q: 'What is groundwater?', a: 'Water in the zone of saturation, where all open spaces in sediment and rock are filled with water.' },
        { q: 'Which zone contains both air and water?', a: 'The vadose (unsaturated) zone.' },
        { q: 'What is the water table?', a: 'The upper limit of the zone of saturation; its shape is a subdued replica of the surface topography.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Groundwater is water in the:',
          options: ['Vadose zone', 'Zone of soil moisture', 'Phreatic (saturated) zone', 'Capillary fringe only'],
          answer: 2,
          explain: 'Groundwater is defined as water in the zone of saturation, the phreatic zone.',
        },
        {
          type: 'mcq',
          prompt: 'The upper limit of the zone of saturation is the:',
          options: ['Water table', 'Aquitard', 'Cone of depression', 'Capillary fringe'],
          answer: 0,
          explain: 'The water table is the top of the saturated zone.',
        },
        {
          type: 'tf',
          prompt: 'The water table is usually a subdued replica of the surface topography.',
          answer: true,
          explain: 'It generally follows the land surface in a subdued way and changes with rainfall and season.',
        },
      ],
      cards: [
        { front: 'Groundwater', back: 'Water in the zone of saturation; the largest reservoir of fresh water available to humans.' },
        { front: 'Three subsurface zones', back: 'Zone of soil moisture (near surface), vadose/unsaturated zone (air + water), phreatic/saturated zone (all pores full).' },
        { front: 'Water table', back: 'The upper limit of the saturated zone; a subdued replica of topography that falls during droughts.' },
      ],
    },
    {
      id: 'water-table-streams',
      title: 'The Water Table and Stream Interaction',
      tagline: 'Gaining and losing streams',
      source: { file: 'GS 21L 9 Groundwater.pdf', pages: 'pp. 5–8' },
      objectives: [
        'Explain how a stream can gain or lose water.',
        'Distinguish connected and disconnected losing streams.',
        'Describe recharge and discharge areas.',
      ],
      intro: {
        what: 'Streams and groundwater exchange water depending on whether the water table is higher or lower than the stream surface.',
        why: 'This exchange controls streamflow in dry seasons, pollution movement, and the health of rivers and wetlands.',
        before: ['The water table and saturated zone.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A stream is a window into the water table. If the water table is above the stream, groundwater flows in and the stream gains water. If it is below, the stream leaks into the ground. The stream can even be cut off from the water table by an unsaturated layer.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Groundwater and streams interact in three ways:',
        },
        {
          t: 'ol',
          items: [
            '**Gaining stream** — the elevation of the water table is higher than the stream surface, so groundwater flows into the stream.',
            '**Losing stream (connected)** — the water table is lower than the stream surface, and the stream loses water to the groundwater system through a continuous saturated zone.',
            '**Losing stream (disconnected)** — the stream is separated from the groundwater system by an unsaturated zone.',
          ],
        },
        {
          t: 'p',
          text: '**Recharge area** — where groundwater is replenished and begins moving along flow paths. **Discharge area** — where groundwater flows back to the surface, for example a stream. Drainage divides separate groundwater flow systems.',
        },
        {
          t: 'p',
          text: 'Two properties govern how much water a material can hold and transmit: **porosity** — the ability to hold and retain water; and **permeability** — the ability to transmit fluids. An **aquitard** is an impermeable layer that prevents water movement. An **aquifer** is permeable rock or sediment that can freely transmit water.',
        },
        {
          t: 'callout',
          kind: 'tip',
          title: 'Gaining versus losing: the test',
          text: 'Compare the water-table elevation with the stream-surface elevation. Higher water table = gaining stream; lower = losing stream. Then check whether a continuous saturated connection exists.',
        },
      ],
      diagram: {
        key: 'groundwater-zones',
        title: 'Water table and stream connection',
        caption: 'The water table’s height relative to the stream surface decides whether the stream gains or loses water.',
      },
      example: {
        problem:
          'In summer, a river’s flow increases downstream even though no tributaries enter. In winter, the same reach loses water. Explain the change.',
        given: ['Summer: flow increases downstream.', 'Winter: reach loses water.'],
        required: 'Relate the observations to the water table.',
        steps: [
          { label: 'Summer', text: 'The water table is relatively high (or the stream is low), so groundwater discharges into the channel — a gaining stream.' },
          { label: 'Winter', text: 'If the water table falls below the stream surface, the stream loses water into the ground.' },
          { label: 'Connection', text: 'The reach may alternate between connected gaining and connected losing states as the water table moves.' },
          { label: 'Caution', text: 'A disconnected losing stream would lose water through an unsaturated zone without a continuous saturated connection.' },
        ],
        answer: 'The reach changes from gaining to losing as the water table rises and falls relative to the stream surface.',
      },
      selfCheck: [
        { q: 'When is a stream gaining?', a: 'When the water table is higher than the stream surface, so groundwater flows into the stream.' },
        { q: 'What is the difference between porosity and permeability?', a: 'Porosity is the ability to hold and retain water; permeability is the ability to transmit fluids.' },
        { q: 'What is an aquitard?', a: 'An impermeable layer that prevents water movement.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A stream loses water to groundwater through a continuous saturated zone. This is a:',
          options: ['Gaining stream', 'Losing stream (connected)', 'Losing stream (disconnected)', 'Perched stream'],
          answer: 1,
          explain: 'Connected losing streams have a continuous saturated connection but the water table is below the stream surface.',
        },
        {
          type: 'mcq',
          prompt: 'Permeable rock that can freely transmit water is called a(n):',
          options: ['Aquitard', 'Aquifer', 'Aquiclude', 'Cone of depression'],
          answer: 1,
          explain: 'An aquifer transmits water freely; an aquitard prevents movement.',
        },
        {
          type: 'tf',
          prompt: 'A gaining stream occurs when the water table is lower than the stream surface.',
          answer: false,
          explain: 'A gaining stream requires the water table to be higher than the stream surface.',
        },
      ],
      cards: [
        { front: 'Gaining stream', back: 'A stream that receives groundwater because the water table is higher than the stream surface.' },
        { front: 'Losing streams', back: 'Connected: water table below stream, continuous saturated zone. Disconnected: separated from groundwater by an unsaturated zone.' },
        { front: 'Porosity and permeability', back: 'Porosity = ability to hold/retain water. Permeability = ability to transmit fluids. Aquifer transmits freely; aquitard prevents flow.' },
      ],
    },
    {
      id: 'groundwater-movement',
      title: 'Groundwater Movement and Darcy’s Law',
      tagline: 'Measuring an invisible flow',
      source: { file: 'GS 21L 9 Groundwater.pdf', pages: 'pp. 8–10' },
      objectives: [
        'Explain hydraulic gradient and hydraulic head.',
        'Apply Darcy’s equation Q = K·A·(h₁ − h₂)/d.',
        'Describe groundwater flow paths from recharge to discharge.',
      ],
      intro: {
        what: 'Groundwater moves through permeable material driven by differences in hydraulic head; Darcy’s law relates discharge to permeability, area and hydraulic gradient.',
        why: 'It lets engineers and geologists estimate how fast water — and contaminants — will travel underground.',
        before: ['Porosity and permeability.', 'Recharge and discharge areas.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Water flows downhill, even underground. The “hill” is the height of the water table: the steeper it drops over a distance, the faster the flow. Darcy’s law packages that idea into one equation: flow depends on how permeable the material is, how large the cross-section is, and how steep the gradient is.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'Groundwater moves from recharge areas, where it is replenished, along flow paths to discharge areas. The **hydraulic gradient** is the difference in elevation between two points on the water table (h₁ − h₂) divided by the distance between them, d. Wells are used to determine the height of the water table.',
        },
        { t: 'formula', tex: 'i = \\frac{h_1-h_2}{d}', note: 'Hydraulic gradient i (dimensionless): head difference divided by flow distance.' },
        { t: 'formula', tex: 'Q = K\\,A\\,\\frac{h_1-h_2}{d} = K\\,A\\,i', note: 'Darcy’s equation: Q = discharge, K = permeability (hydraulic conductivity), A = cross-sectional area, (h₁ − h₂)/d = hydraulic gradient.' },
        {
          t: 'p',
          text: 'Darcy’s equation was first introduced by the French scientist-engineer Henry Darcy. Discharge Q is the volume of water passing through a cross-section per unit time; K describes the permeability of the medium, and A is the area.',
        },
        {
          t: 'p',
          text: 'Flow systems can exist at several scales. The lesson’s hypothetical system includes subsystems at three different scales; variations in surface topography and subsurface geology can produce a complex situation, with horizontal scales from tens to hundreds of kilometres.',
        },
        {
          t: 'callout',
          kind: 'note',
          title: 'Units matter',
          text: 'If K is in metres per day, A in square metres and the gradient is dimensionless, Q comes out in cubic metres per day. Convert everything before substituting.',
        },
      ],
      example: {
        problem:
          'Two observation wells 400 m apart show water levels of 62 m and 58 m above sea level. K = 5 m/day and the cross-sectional area is 300 m². Calculate the gradient and discharge.',
        given: ['h₁ = 62 m, h₂ = 58 m, d = 400 m.', 'K = 5 m/day, A = 300 m².'],
        required: 'Hydraulic gradient and Q.',
        steps: [
          { label: 'Gradient', text: 'i = (62 − 58) / 400 = 4/400 = 0.01.' },
          { label: 'Darcy’s law', text: 'Q = K·A·i = 5 × 300 × 0.01.' },
          { label: 'Compute', text: '5 × 300 = 1,500; 1,500 × 0.01 = 15.' },
          { label: 'Units', text: '(m/day)(m²) = m³/day, so Q = 15 m³/day.' },
        ],
        answer: 'Hydraulic gradient = 0.01; discharge = 15 m³ per day.',
        check: 'Doubling the gradient would double Q; doubling K would also double Q. The relationship is linear.',
      },
      selfCheck: [
        { q: 'What is the hydraulic gradient?', a: 'The difference in water-table elevation between two points divided by the distance between them.' },
        { q: 'Who introduced Darcy’s equation?', a: 'Henry Darcy, a French scientist-engineer.' },
        { q: 'What does K represent?', a: 'The permeability (hydraulic conductivity) of the medium.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'In Darcy’s equation, Q represents:',
          options: ['Permeability', 'Cross-sectional area', 'Discharge', 'Hydraulic gradient'],
          answer: 2,
          explain: 'Q is discharge; K is permeability, A is area and the gradient is (h₁ − h₂)/d.',
        },
        {
          type: 'mcq',
          prompt: 'If the hydraulic gradient doubles while K and A stay constant, Q will:',
          options: ['Halve', 'Stay the same', 'Double', 'Quadruple'],
          answer: 2,
          explain: 'Q is directly proportional to the gradient in Darcy’s law.',
        },
        {
          type: 'tf',
          prompt: 'Groundwater flows from recharge areas toward discharge areas.',
          answer: true,
          explain: 'Recharge replenishes the system; discharge is where water returns to the surface.',
        },
      ],
      cards: [
        { front: 'Hydraulic gradient', back: 'i = (h₁ − h₂)/d — the drop in hydraulic head over a distance; drives groundwater flow.' },
        { front: 'Darcy’s law', back: 'Q = K·A·(h₁ − h₂)/d, where Q is discharge, K permeability, A area and the gradient is (h₁ − h₂)/d.' },
        { front: 'Flow paths', back: 'Groundwater moves from recharge areas to discharge areas along flow paths; systems can operate at local to regional scales.' },
      ],
    },
    {
      id: 'wells-artesian',
      title: 'Wells, Drawdown and Artesian Systems',
      tagline: 'Pumping, cones of depression and water that rises on its own',
      source: { file: 'GS 21L 9 Groundwater.pdf', pages: 'pp. 11–15' },
      objectives: [
        'Explain drawdown and the cone of depression.',
        'Define a perched water table.',
        'Distinguish flowing and nonflowing artesian wells.',
      ],
      intro: {
        what: 'Wells extract groundwater; pumping lowers the water table around them, and confined aquifers under pressure can produce artesian wells.',
        why: 'Well design, yield and interference between neighbouring wells all depend on these concepts.',
        before: ['The water table, aquifers and aquitards.'],
      },
      simple: [
        {
          t: 'p',
          text: 'Stick a straw into a wet sponge and suck: the water level around the straw dips into a cone. That is a cone of depression. If the sponge is sealed under pressure, water may rise up the straw by itself — that is an artesian well.',
        },
      ],
      full: [
        {
          t: 'p',
          text: 'The common method of groundwater extraction is through **wells**. **Drawdown** describes the lowering of the water table surrounding a well when water is extracted. A **cone of depression** is the conical depression in the water table created by drawing water out of a well. Because the cone increases the hydraulic gradient near the well, groundwater flows more rapidly toward the opening.',
        },
        {
          t: 'p',
          text: 'A **perched water table** forms where an aquitard is situated above the main water table, trapping a local saturated zone above the regional water table.',
        },
        {
          t: 'p',
          text: '**Artesian systems** are any situation in which groundwater under pressure rises above the level of the aquifer. There are two types:',
        },
        {
          t: 'ul',
          items: [
            '**Nonflowing artesian well** — the pressure surface is below ground level, so water rises in the well but does not flow out.',
            '**Flowing artesian well** — the pressure surface is above ground level and a well is drilled into the aquifer, so water flows out without pumping.',
          ],
        },
        {
          t: 'callout',
          kind: 'warn',
          title: 'Artesian wells are not unlimited',
          text: 'The pressure comes from a confined aquifer connected to a higher recharge area. Over-pumping lowers the pressure surface and can stop the flow.',
        },
      ],
      diagram: {
        key: 'groundwater-wells',
        title: 'Drawdown and artesian conditions',
        caption: 'Left: pumping creates a cone of depression and a perched water table above an aquitard. Right: a confined aquifer’s pressure surface allows a flowing artesian well.',
      },
      example: {
        problem:
          'A confined aquifer receives water at a recharge area 120 m above sea level and is tapped at a well 60 m above sea level. The pressure surface stands at 100 m. Will the well flow at the surface? What if the pressure surface falls to 50 m?',
        given: ['Recharge 120 m; wellhead 60 m; pressure surface 100 m.'],
        required: 'Determine whether the well flows, before and after pressure decline.',
        steps: [
          { label: 'Initial comparison', text: 'Pressure surface (100 m) is above the wellhead (60 m), so water rises above ground and flows — a flowing artesian well.' },
          { label: 'After decline', text: 'If the pressure surface drops to 50 m, it is below the 60 m wellhead.' },
          { label: 'New state', text: 'Water rises in the well to 50 m but does not reach the surface — a nonflowing artesian well.' },
        ],
        answer: 'Initially it flows, because the pressure surface is above the wellhead. At 50 m it becomes nonflowing.',
      },
      selfCheck: [
        { q: 'What is drawdown?', a: 'The lowering of the water table around a well when water is extracted.' },
        { q: 'What is a cone of depression, and why does it matter?', a: 'A conical depression in the water table around a pumped well; it steepens the hydraulic gradient and speeds groundwater flow toward the well.' },
        { q: 'What distinguishes a flowing from a nonflowing artesian well?', a: 'Whether the pressure surface is above ground level (flowing) or below it (nonflowing).' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'A perched water table forms when:',
          options: ['An aquitard lies above the main water table', 'The well is pumped dry', 'The aquifer is confined', 'A geyser erupts'],
          answer: 0,
          explain: 'An aquitard above the main water table traps a local saturated zone.',
        },
        {
          type: 'mcq',
          prompt: 'A flowing artesian well occurs when the pressure surface is:',
          options: ['Below ground level', 'Above ground level', 'Equal to the water table', 'Below the aquifer'],
          answer: 1,
          explain: 'Water flows out at the surface when the pressure surface stands above ground level.',
        },
        {
          type: 'tf',
          prompt: 'A cone of depression increases the hydraulic gradient near a pumped well.',
          answer: true,
          explain: 'The steepened gradient makes groundwater flow more rapidly toward the well.',
        },
      ],
      cards: [
        { front: 'Drawdown and cone of depression', back: 'Pumping lowers the water table around the well, forming a cone; the cone increases the hydraulic gradient and speeds flow toward the well.' },
        { front: 'Perched water table', back: 'A local saturated zone held above the main water table by an aquitard.' },
        { front: 'Artesian systems', back: 'Groundwater under pressure rises above the aquifer level. Flowing: pressure surface above ground. Nonflowing: pressure surface below ground.' },
      ],
    },
    {
      id: 'springs-environment',
      title: 'Springs, Geysers, Karst and Groundwater Problems',
      tagline: 'Where groundwater returns — and what happens when we overuse it',
      source: { file: 'GS 21L 9 Groundwater.pdf', pages: 'pp. 16–18' },
      objectives: [
        'Explain springs, hot springs and geysers.',
        'Describe how groundwater dissolves limestone to form caverns and sinkholes.',
        'Identify overuse, subsidence and contamination as groundwater problems.',
      ],
      intro: {
        what: 'Springs and geysers are natural discharges of groundwater; groundwater also dissolves soluble rock, creating karst landscapes, and is vulnerable to overuse and pollution.',
        why: 'These features connect groundwater to surface water, hazards and water supply — and show groundwater as a geological force.',
        before: ['Water table, aquifers and artesian pressure.'],
      },
      simple: [
        {
          t: 'p',
          text: 'A spring is where the water table meets the ground. A geyser is a hot spring with a plumbing system that lets pressure build until it erupts. And when groundwater flows through limestone, it slowly dissolves the rock like sugar in tea, leaving caves and sinkholes.',
        },
      ],
      full: [
        {
          t: 'p',
          text: '**Springs** occur where the water table intersects Earth’s surface, producing a natural outflow of groundwater. **Hot springs** occur when groundwater becomes heated and emerges with a temperature much higher than the mean air temperature. **Geysers** are intermittent hot springs or fountains in which columns of water are ejected with great force at various intervals, often rising 30–60 m (100–200 ft) into the air.',
        },
        {
          t: 'p',
          text: '**Environmental problems.** Groundwater is being exploited at an increasing rate. In some areas overuse threatens supply; elsewhere withdrawal has caused the ground and everything on it to sink; other localities are concerned with contamination.',
        },
        {
          t: 'p',
          text: '**Geologic work of groundwater.** Groundwater dissolves rock, which is key to caves and sinkholes. Soluble rocks, especially limestone, underlie millions of square kilometres. Limestone is nearly insoluble in pure water but easily dissolved by water containing small amounts of carbonic acid, which forms when rainwater dissolves CO₂ from air and decaying plants. The acid reacts with calcite to form calcium bicarbonate, a soluble material carried away in solution.',
        },
        { t: 'formula', tex: '\\mathrm{CaCO_3 + H_2CO_3 \\rightarrow Ca(HCO_3)_2}', note: 'Calcite + carbonic acid → soluble calcium bicarbonate, which is removed in solution.' },
        {
          t: 'callout',
          kind: 'note',
          title: 'Karst is a landscape, not just a hole',
          text: 'Sinkholes, dolines, caves and disappearing streams are surface and subsurface expressions of the same dissolution process in limestone.',
        },
      ],
      example: {
        problem:
          'A limestone region has caves, sinkholes and streams that disappear underground. A nearby town pumps groundwater heavily. Explain the landscape and two risks the town faces.',
        given: ['Limestone terrain.', 'Caves, sinkholes, disappearing streams.', 'Heavy groundwater pumping.'],
        required: 'Explain the karst features and identify risks.',
        steps: [
          { label: 'Dissolution', text: 'Rainwater absorbs CO₂, forming carbonic acid; it dissolves calcite as calcium bicarbonate.' },
          { label: 'Features', text: 'Dissolution enlarges fractures into caves; roof collapse or surface washing creates sinkholes and dolines; streams sink into the openings.' },
          { label: 'Risk 1 — subsidence', text: 'Heavy pumping lowers the water table and removes support, so cavities can collapse and the ground can sink.' },
          { label: 'Risk 2 — contamination', text: 'Karst conduits transmit pollutants rapidly with little filtration, so contamination spreads quickly.' },
          { label: 'Risk 3 — supply', text: 'Overuse can deplete the aquifer faster than recharge.' },
        ],
        answer:
          'The features are karst dissolution in limestone. The town risks land subsidence, rapid contamination of its water supply, and depletion of the aquifer.',
      },
      selfCheck: [
        { q: 'What is the difference between a spring and a geyser?', a: 'A spring is a natural outflow where the water table meets the surface; a geyser is an intermittent hot spring that erupts columns of water and steam.' },
        { q: 'How does carbonic acid dissolve limestone?', a: 'It reacts with calcite to form soluble calcium bicarbonate, which is carried away in solution.' },
        { q: 'Name three environmental problems of groundwater use.', a: 'Overuse/depletion, land subsidence, and contamination.' },
      ],
      quiz: [
        {
          type: 'mcq',
          prompt: 'Geysers are best described as:',
          options: ['Cold springs', 'Intermittent hot springs that eject water and steam', 'Artesian wells', 'Perched aquifers'],
          answer: 1,
          explain: 'Geysers are intermittent hot springs erupting columns of water, often 30–60 m high.',
        },
        {
          type: 'mcq',
          prompt: 'Groundwater dissolves limestone mainly because rainwater contains:',
          options: ['Sulfuric acid', 'Carbonic acid', 'Sodium chloride', 'Silica'],
          answer: 1,
          explain: 'Dissolved CO₂ forms weak carbonic acid, which converts calcite to soluble calcium bicarbonate.',
        },
        {
          type: 'tf',
          prompt: 'Groundwater withdrawal can cause the ground surface to sink.',
          answer: true,
          explain: 'The lesson lists subsidence as one of the environmental problems caused by groundwater withdrawal.',
        },
      ],
      cards: [
        { front: 'Spring, hot spring, geyser', back: 'Spring: natural outflow where the water table meets the surface. Hot spring: heated groundwater. Geyser: intermittent hot spring erupting water and steam 30–60 m.' },
        { front: 'Karst dissolution', back: 'Carbonic acid in rainwater reacts with calcite to form soluble calcium bicarbonate, creating caves, sinkholes and dolines.' },
        { front: 'Groundwater problems', back: 'Overuse and depletion, land subsidence from withdrawal, and contamination.' },
      ],
    },
  ],
}
