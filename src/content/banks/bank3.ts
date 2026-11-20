import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'lithosphere-plates'
const b = 'divergent'
const c = 'convergent'
const d = 'transform'
const e = 'drift-spreading'
const f = 'driving-forces'
const g = 'philippine-tectonics'

export const bank3: BankQuestion[] = [
  m(a, 'The lithosphere is broken into tectonic plates because:', ['It is rigid but weak at depth, and the asthenosphere allows movement', 'It is liquid', 'It is thicker than the core', 'It floats on the ocean'], 0, 'A rigid lithosphere over a ductile asthenosphere permits plate motion.'),
  m(a, 'Which is one of the seven major plates?', ['Pacific Plate', 'Manila Plate', 'Palawan Plate', 'Sunda Plate'], 0, 'The Pacific is one of the seven major plates; the others are regional or minor.'),
  m(a, 'The three types of plate boundary are:', ['Divergent, convergent and transform', 'Hot, cold and warm', 'Oceanic, coastal and inland', 'Ridge, trench and plateau'], 0, 'Boundaries are classified by relative motion: apart, together or past.'),
  m(a, 'At which boundary is new lithosphere created?', ['Divergent', 'Convergent', 'Transform', 'None'], 0, 'Divergent boundaries create new crust as plates move apart.'),
  m(a, 'At which boundary is lithosphere destroyed?', ['Divergent', 'Convergent', 'Transform', 'All of them'], 1, 'Subduction at convergent boundaries recycles lithosphere into the mantle.'),
  t(a, 'Plate boundaries are fixed lines that never change position.', false, 'Boundaries migrate and reorganise as plates and forces change.'),
  t(a, 'The asthenosphere is rigid and prevents plate motion.', false, 'It is weak and ductile, which is what allows plates to move.'),
  s(a, 'Name the rigid outer shell broken into tectonic plates.', ['lithosphere'], 'The lithosphere is the plate-bearing shell.'),

  m(b, 'New oceanic crust forms at divergent boundaries because:', ['Decompression melting produces magma as the mantle rises', 'Water boils the mantle', 'Plates are compressed', 'Friction melts the crust'], 0, 'Rising mantle rock melts as pressure falls, without added heat.'),
  m(b, 'The first stage of continental rifting produces:', ['A rift valley with normal faulting', 'A deep ocean trench', 'A volcanic island arc', 'A transform fault'], 0, 'Crust stretches and breaks into fault blocks, forming a rift valley.'),
  m(b, 'The East African Rift is a modern example of:', ['Continental rifting', 'Continental collision', 'Transform motion', 'Subduction'], 0, 'It is the classic active continental rift.'),
  m(b, 'As a rift continues to open, the next stage is:', ['A narrow sea such as the Red Sea', 'A mountain range', 'A subduction trench', 'A stable craton'], 0, 'The Red Sea represents a young ocean basin between separating plates.'),
  m(b, 'Typical seafloor spreading rates are on the order of:', ['Centimetres per year', 'Metres per day', 'Kilometres per year', 'Millimetres per century'], 0, 'Plates move at roughly a few centimetres per year.'),
  t(b, 'Decompression melting occurs because pressure decreases as mantle rock rises.', true, 'Lower pressure allows melting without adding heat.'),
  t(b, 'Continental rifting can eventually produce a new ocean basin.', true, 'Rifting progresses from rift valley to narrow sea to ocean.'),
  s(b, 'Name the boundary where plates move apart and new crust forms.', ['divergent boundary', 'divergent', 'spreading ridge'], 'Divergent boundaries create new lithosphere.'),

  m(c, 'At an oceanic–continental convergent boundary, the oceanic plate subducts because it is:', ['Denser', 'Hotter', 'Thicker', 'Less dense'], 0, 'Dense oceanic lithosphere sinks beneath buoyant continental crust.'),
  m(c, 'The Andes Mountains are the classic example of:', ['Oceanic–continental convergence', 'Continental collision', 'Continental rifting', 'Transform faulting'], 0, 'Subduction of an oceanic plate beneath South America built the Andes.'),
  m(c, 'A volcanic island arc forms at:', ['Oceanic–oceanic convergence', 'Continental collision', 'A divergent boundary', 'A transform boundary'], 0, 'One oceanic slab subducts beneath another, producing an arc of volcanic islands.'),
  m(c, 'The Himalayas formed by:', ['Continental–continental collision', 'Oceanic subduction', 'Seafloor spreading', 'Rifting'], 0, 'Buoyant continental crust resists subduction and crumples into mountains.'),
  m(c, 'A deep ocean trench marks:', ['A subduction zone', 'A mid-ocean ridge', 'A transform fault', 'A hotspot'], 0, 'Trenches form where a slab bends downward into the mantle.'),
  m(c, 'Water plays a key role at subduction zones because it:', ['Lowers the melting point of the mantle wedge', 'Increases rock density', 'Stops plate motion', 'Cools the core'], 0, 'Released water promotes partial melting above the slab.'),
  t(c, 'Continental crust subducts easily because it is dense.', false, 'Continental crust is buoyant and resists deep subduction, which is why collisions build mountains.'),
  t(c, 'Oceanic–oceanic convergence can produce a volcanic island arc.', true, 'The Philippine Archipelago is the lesson’s example.'),
  s(c, 'Name the boundary where one plate sinks beneath another.', ['convergent boundary', 'subduction zone', 'convergent'], 'Convergent boundaries consume lithosphere by subduction.'),

  m(d, 'A transform boundary is called conservative because:', ['Lithosphere is neither created nor destroyed', 'Plates move apart', 'Magma erupts constantly', 'Mountains grow rapidly'], 0, 'The plates slide past each other, conserving lithosphere.'),
  m(d, 'The San Andreas Fault is an example of:', ['A continental transform boundary', 'A subduction zone', 'A mid-ocean ridge', 'A rift valley'], 0, 'It is the classic continental strike-slip fault.'),
  m(d, 'Earthquakes at transform boundaries occur because:', ['Rocks stick, then rupture as strain accumulates', 'Magma explodes', 'The mantle melts', 'Plates are pulled apart'], 0, 'Strike-slip motion produces shallow, often strong earthquakes.'),
  m(d, 'Oceanic fracture zones differ from continental transforms in that they:', ['Offset ridge segments and may record past plate motion', 'Produce no earthquakes', 'Are always subduction zones', 'Create new continental crust'], 0, 'Fracture zones are ridge-offset structures; continental transforms cut through land.'),
  t(d, 'Transform boundaries create new oceanic crust.', false, 'They conserve lithosphere: plates slide past one another.'),
  t(d, 'Transform faults can produce damaging shallow earthquakes.', true, 'The San Andreas and Philippine Fault Zone are examples.'),
  s(d, 'Name the boundary where two plates slide past each other.', ['transform boundary', 'transform fault', 'transform'], 'Transform boundaries accommodate horizontal motion.'),

  m(e, 'Alfred Wegener proposed:', ['Continental drift', 'Seafloor spreading', 'Plate subduction', 'Isostasy'], 0, 'Wegener argued that continents had drifted apart.'),
  m(e, 'Which is NOT one of Wegener’s lines of evidence?', ['Fit of continental coastlines', 'Matching fossils across oceans', 'Matching rock structures', 'GPS satellite measurements'], 3, 'GPS did not exist in Wegener’s time; he used coastlines, fossils, rocks and paleoclimate.'),
  m(e, 'Harry Hess contributed:', ['The seafloor spreading hypothesis', 'The theory of isostasy', 'Uniformitarianism', 'The geologic time scale'], 0, 'Hess proposed that new seafloor forms at ridges and moves away.'),
  m(e, 'Symmetrical magnetic stripes on the seafloor record:', ['Reversals of Earth’s magnetic field during spreading', 'Mineral cleavage', 'Fossil migrations', 'Glacial advances'], 0, 'New crust locks in the field direction as it cools, producing mirror-image stripes.'),
  m(e, 'A chain of volcanic islands formed over a hotspot records:', ['The direction and rate of plate motion', 'The age of the universe', 'The depth of the crust', 'The composition of the atmosphere'], 0, 'Increasing age away from the hotspot tracks plate movement.'),
  m(e, 'Seafloor drilling supported spreading because:', ['Sediment and crust age increase away from ridges', 'The seafloor is flat everywhere', 'Ridges are the oldest rocks', 'Fossils are absent from the ocean'], 0, 'Age patterns match the prediction that crust forms at ridges.'),
  t(e, 'Wegener’s continental drift idea was immediately accepted by all geologists.', false, 'It was controversial until a mechanism, seafloor spreading, was found.'),
  t(e, 'Paleomagnetism provided strong evidence for seafloor spreading.', true, 'Magnetic stripe symmetry is a key confirmation.'),
  t(e, 'Hotspot tracks can be used to reconstruct plate motion.', true, 'The Hawaiian–Emperor chain is the classic example.'),
  s(e, 'Who proposed seafloor spreading?', ['harry hess', 'hess'], 'Harry Hess proposed seafloor spreading.'),
  s(e, 'Name the process by which new oceanic crust forms at ridges and moves away.', ['seafloor spreading'], 'Seafloor spreading creates and moves oceanic lithosphere.'),

  m(f, 'The primary driver of plate motion is generally considered to be:', ['Slab pull', 'Ridge push', 'Tidal forces', 'Wind'], 0, 'Cold, dense subducting slabs pull the trailing plate downward.'),
  m(f, 'Ridge push operates because:', ['Elevated new lithosphere slides down the ridge flanks', 'Magma explodes at the ridge', 'The core pulls the plates', 'Water lubricates the trench'], 0, 'Gravity moves buoyant, elevated lithosphere away from the ridge.'),
  m(f, 'Mantle convection provides:', ['The fundamental energy source for plate motion', 'The magnetic field', 'The ocean tides', 'The atmosphere'], 0, 'Convection in the mantle is the underlying engine.'),
  m(f, 'The whole-mantle (plume) model proposes:', ['Convection cells spanning the whole mantle', 'No convection at all', 'Convection only in the crust', 'Convection only in the core'], 0, 'Plumes rise from deep in the mantle in this model.'),
  t(f, 'Slab pull is driven by gravity acting on dense subducting lithosphere.', true, 'Density contrast with the asthenosphere makes the slab sink.'),
  t(f, 'Ridge push is the only force moving plates.', false, 'Slab pull and mantle convection are also important; slab pull is often dominant.'),
  s(f, 'Name the force caused by a dense slab sinking at a subduction zone.', ['slab pull'], 'Slab pull drags the plate toward the trench.'),

  m(g, 'The Philippine Mobile Belt is characterised by:', ['Active subduction zones of opposing polarity', 'A single quiet craton', 'No earthquakes', 'Only transform motion'], 0, 'It lies between the Philippine Trench to the east and the Manila and Negros Trenches to the west.'),
  m(g, 'The Palawan–Mindoro Continental Block originated from:', ['The Eurasian margin', 'The Pacific Plate', 'The African Plate', 'The Antarctic Plate'], 0, 'It is a microcontinental block derived from southeastern China.'),
  m(g, 'The Philippine Fault Zone is primarily:', ['A strike-slip fault system', 'A mid-ocean ridge', 'A hotspot', 'A passive margin'], 0, 'It accommodates lateral motion and produces damaging earthquakes.'),
  m(g, 'Which pair correctly matches a trench with its position relative to the Philippines?', ['Philippine Trench — east; Manila Trench — west', 'Philippine Trench — west; Manila Trench — east', 'Both are east', 'Both are west'], 0, 'Opposing subduction polarity is the key to the Philippine setting.'),
  t(g, 'The Palawan–Mindoro block is aseismic compared with the Philippine Mobile Belt.', true, 'It is a relatively stable microcontinental block.'),
  t(g, 'The Philippines has no significant seismic or volcanic hazard.', false, 'Active subduction, collision and strike-slip faulting make it highly hazardous.'),
  s(g, 'Name the microcontinental block that collided with the Philippine Mobile Belt.', ['palawan mindoro continental block', 'palawan-mindoro continental block', 'pcb'], 'The Palawan–Mindoro Continental Block drifted from Eurasia and collided with the mobile belt.'),
]
