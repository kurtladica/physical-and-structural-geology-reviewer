import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'spheres'
const b = 'origins'
const c = 'size-shape'
const d = 'internal-layers'
const e = 'isostasy'

export const bank2: BankQuestion[] = [
  m(a, 'Which sphere is the gaseous envelope that supports life and shields the surface from radiation?', ['Atmosphere', 'Hydrosphere', 'Geosphere', 'Biosphere'], 0, 'The atmosphere is the gaseous envelope around Earth.'),
  m(a, 'Oceans cover roughly what share of Earth’s surface?', ['29%', '50%', '71%', '97%'], 2, 'The lesson gives 71% ocean cover.'),
  m(a, 'What percentage of Earth’s water is saline?', ['3%', '29%', '71%', '97%'], 3, 'About 97% of the water is saline; only a small fraction is fresh.'),
  m(a, 'Which sphere is the thickest, extending nearly 6,400 km down to the core?', ['Atmosphere', 'Geosphere', 'Hydrosphere', 'Biosphere'], 1, 'The geosphere is the thickest sphere.'),
  m(a, 'The biosphere is best described as:', ['All life on Earth, integrated with the other spheres', 'Only the oceans', 'The rocky interior', 'The upper atmosphere'], 0, 'The biosphere is all life, deeply connected to the other three spheres.'),
  m(a, 'Water moving between ocean, atmosphere and land is an example of:', ['Interaction among spheres', 'A closed geosphere', 'A nonrenewable resource', 'Isostatic rebound'], 0, 'Matter and energy are exchanged between the spheres.'),
  t(a, 'The four spheres are separate boxes that do not exchange matter.', false, 'The lesson stresses that the spheres overlap and constantly exchange matter and energy.'),
  t(a, 'The hydrosphere includes water in all its forms on Earth.', true, 'It is the dynamic mass of water continually on the move.'),
  s(a, 'Name the sphere that consists of all life on Earth.', ['biosphere'], 'All living things make up the biosphere.'),

  m(b, 'The Big Bang model places the origin of the universe at roughly:', ['13.7 billion years ago', '4.6 billion years ago', '540 million years ago', '10,000 years ago'], 0, 'The universe is dated at about 13.7 billion years, with Earth forming later at about 4.6 billion.'),
  m(b, 'The solar nebula theory explains the solar system as:', ['A collision of two stars', 'A collapsing cloud of gas and dust that flattened into a disk', 'A single huge volcano', 'A capture of the Moon'], 1, 'A rotating nebula collapsed, flattened and condensed into the Sun and planets.'),
  m(b, 'Accretion in the early solar system refers to:', ['Planetesimals colliding and sticking together', 'Iron sinking to the core', 'Continents drifting apart', 'Water condensing on the surface'], 0, 'Small bodies collided and grew into larger planetary bodies.'),
  m(b, 'The iron catastrophe describes:', ['A meteorite impact that killed the dinosaurs', 'Dense iron sinking to form Earth’s core and releasing heat', 'The breakup of Pangaea', 'The first volcanic eruption'], 1, 'As Earth heated, dense iron and nickel sank, producing the core and releasing gravitational energy.'),
  m(b, 'Chemical differentiation produced Earth’s layered structure because:', ['Materials separated according to density', 'The planet stopped rotating', 'Water dissolved the crust', 'The Sun pulled heavy elements away'], 0, 'Denser material sank and lighter material rose, forming layers.'),
  m(b, 'Which sequence matches the standard account of Earth’s early history?', ['Big Bang → solar nebula → accretion → iron catastrophe', 'Iron catastrophe → Big Bang → accretion', 'Accretion → Big Bang → differentiation', 'Solar nebula → Big Bang → accretion'], 0, 'The lesson follows the order: universe, nebula, accretion, then internal differentiation.'),
  t(b, 'Earth and the universe formed at the same time.', false, 'The universe formed about 13.7 billion years ago; Earth about 4.6 billion years ago.'),
  t(b, 'The iron catastrophe helped establish Earth’s layered interior.', true, 'Sinking iron formed the core and contributed to chemical differentiation.'),
  t(b, 'The solar nebula theory requires the planets to have formed from the Sun directly.', false, 'Planets formed from the surrounding disk of gas and dust, not out of the Sun itself.'),
  s(b, 'Name the process by which dense iron sank to form Earth’s core.', ['iron catastrophe', 'differentiation'], 'The iron catastrophe is the classic name for this differentiation event.'),
  s(b, 'Name the theory that the solar system formed from a collapsing cloud of gas and dust.', ['solar nebula theory', 'nebular theory', 'solar nebula'], 'The solar nebula (nebular) theory explains the disk and planets.'),

  m(c, 'Earth’s shape is best described as:', ['A perfect sphere', 'An oblate spheroid', 'A prolate spheroid', 'A cube'], 1, 'Rotation produces an equatorial bulge, making Earth an oblate spheroid.'),
  m(c, 'The equatorial bulge exists because:', ['Earth rotates and centrifugal effects reduce effective gravity at the equator', 'The Moon pulls the equator outward', 'The poles are denser than the core', 'Ocean currents push water sideways'], 0, 'Rotation makes the equatorial radius larger than the polar radius.'),
  m(c, 'The difference between Earth’s equatorial and polar radii is about:', ['21 km', '210 km', '2.1 km', '2,100 km'], 0, 'The radii differ by roughly 21 km.'),
  m(c, 'Flattening is calculated as:', ['(equatorial radius − polar radius) / equatorial radius', 'polar radius / equatorial radius', 'equatorial radius × polar radius', 'difference in radius × 2'], 0, 'Flattening f = (a − b)/a compares the radius difference with the equatorial radius.'),
  m(c, 'WGS 84 is:', ['A satellite', 'A reference ellipsoid used for geodesy and GPS', 'A mineral', 'A seismic wave'], 1, 'WGS 84 is the standard reference ellipsoid for positioning.'),
  m(c, 'Earth is called oblate rather than egg-shaped because:', ['It is flattened at the poles and bulges symmetrically at the equator', 'It is pointed at one end', 'It is larger in the southern hemisphere only', 'It has no symmetry'], 0, 'The bulge is an equatorial symmetry, not an egg-like asymmetry.'),
  t(c, 'Earth’s polar radius is longer than its equatorial radius.', false, 'The equator bulges, so the equatorial radius is the longer one.'),
  t(c, 'A rotating planet cannot remain a perfect sphere.', true, 'Rotation redistributes mass and produces an equatorial bulge.'),
  s(c, 'Name the reference ellipsoid used for GPS coordinates.', ['wgs 84', 'wgs84'], 'WGS 84 is the standard geodetic reference ellipsoid.'),

  m(d, 'Which compositional layer is the low-density outermost skin of Earth?', ['Crust', 'Mantle', 'Outer core', 'Inner core'], 0, 'The crust is the thin, low-density outer layer.'),
  m(d, 'Continental crust is generally:', ['Thin and basaltic', 'Thick and granitic', 'Liquid iron', 'Made of peridotite'], 1, 'Continental crust is thick and granitic, with a density near 2.7 g/cm³.'),
  m(d, 'Oceanic crust is generally:', ['Thick and granitic', 'Thin and basaltic, about 3.0 g/cm³', 'The same as mantle', 'Solid iron'], 1, 'Oceanic crust is thin, basaltic and denser than continental crust.'),
  m(d, 'The mantle extends to a depth of about:', ['100 km', '700 km', '2,900 km', '6,400 km'], 2, 'The mantle reaches roughly 2,900 km, where the core begins.'),
  m(d, 'The mantle makes up roughly what share of Earth’s volume?', ['18%', '50%', '82%', '97%'], 2, 'The lesson gives 82% of Earth’s volume.'),
  m(d, 'The dominant rock type of the mantle is:', ['Granite', 'Peridotite', 'Limestone', 'Basalt only'], 1, 'The mantle is rich in iron–magnesium silicates, represented by peridotite.'),
  m(d, 'Earth’s core is composed mainly of:', ['Iron and nickel', 'Silicate minerals', 'Water and ice', 'Calcium carbonate'], 0, 'The core is an iron–nickel alloy with minor lighter elements.'),
  m(d, 'The lithosphere consists of:', ['The crust and uppermost mantle', 'The outer and inner core', 'Only the crust', 'The asthenosphere and mesosphere'], 0, 'The rigid lithosphere includes the crust plus the uppermost mantle.'),
  m(d, 'The asthenosphere is important because it is:', ['Rigid and unmoving', 'Weak and ductile, allowing plates to move', 'Liquid iron', 'The same as the crust'], 1, 'Its plastic behaviour lets the lithospheric plates slide over it.'),
  m(d, 'Which layer is liquid and generates Earth’s magnetic field?', ['Inner core', 'Outer core', 'Mesosphere', 'Asthenosphere'], 1, 'Convection in the liquid outer core drives the geodynamo.'),
  m(d, 'The inner core is solid because:', ['It is made of rock', 'Immense confining pressure keeps the alloy solid despite high temperature', 'It never melted', 'Water cools it'], 1, 'Pressure raises the melting point enough to keep the inner core solid.'),
  m(d, 'S-waves cannot travel through the outer core. This shows that the outer core is:', ['Solid', 'Liquid', 'Gaseous', 'Granitic'], 1, 'Shear waves do not propagate through liquids, so the S-wave shadow reveals a liquid outer core.'),
  t(d, 'The Moho is the boundary between the crust and the mantle.', true, 'The Mohorovičić discontinuity marks the base of the crust.'),
  t(d, 'The compositional layers and the physical layers of Earth have exactly the same boundaries.', false, 'Compositional layering (crust, mantle, core) and mechanical layering (lithosphere, asthenosphere, mesosphere, outer and inner core) cut the planet differently.'),
  t(d, 'The mesosphere in Earth’s interior is the strong, solid lower mantle.', true, 'That is the mechanical layer beneath the asthenosphere.'),
  s(d, 'Name the rigid outer shell of Earth that is broken into tectonic plates.', ['lithosphere'], 'The lithosphere is the rigid, plate-forming outer shell.'),
  s(d, 'Name the weak, ductile layer beneath the lithosphere.', ['asthenosphere'], 'The asthenosphere allows the plates to move.'),

  m(e, 'Isostasy is the concept that:', ['Continents float in balance on the denser mantle', 'Earth’s crust is fixed and immobile', 'The core rotates faster than the mantle', 'Mountains are supported by pillars'], 0, 'Crustal blocks are buoyantly balanced on the mantle, like floating bodies.'),
  m(e, 'Airy’s model explains mountain support by:', ['Uniform density with varying crustal thickness and deep roots', 'Varying density with a flat base', 'A rigid global crust', 'Tidal forces'], 0, 'Airy used the iceberg analogy: thicker crust projects deeper into the mantle.'),
  m(e, 'Pratt’s model explains mountain support by:', ['Varying crustal density with a uniform depth of compensation', 'Varying crustal thickness only', 'A liquid crust', 'Magnetic forces'], 0, 'Pratt kept a common base level but varied the density of columns.'),
  m(e, 'The depth of compensation is:', ['The depth at which the weight of crustal columns is equal', 'The base of the crust everywhere', 'The top of the water table', 'The core–mantle boundary'], 0, 'Below that depth, isostatic pressure is balanced.'),
  m(e, 'Which model combines varying crustal thickness with varying density?', ['Airy', 'Pratt', 'Heiskanen', 'Ussher'], 2, 'Heiskanen’s pragmatic compromise blends Airy and Pratt.'),
  m(e, 'Isostatic rebound is best illustrated by:', ['Scandinavia rising after glacial ice melted', 'The Moon moving away from Earth', 'The core cooling', 'Basalt erupting at a ridge'], 0, 'Removing the ice load lets the crust slowly rise back toward equilibrium.'),
  t(e, 'An iceberg floating in water is a useful analogy for Airy’s model.', true, 'Thicker ice projects deeper, just as thicker crust has a deeper root.'),
  t(e, 'When a mountain is eroded, the crust beneath it may rise gradually.', true, 'Unloading the crust triggers isostatic adjustment and rebound.'),
  t(e, 'The Hayford–Bowie concept established the formal idea of the depth of isostatic compensation.', true, 'It linked gravity anomalies to topography and formalised the compensation depth.'),
  s(e, 'Name the principle of buoyant balance of crustal blocks on the mantle.', ['isostasy'], 'Isostasy describes that balance.'),
]
