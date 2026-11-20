import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'what-geology-is'
const b = 'physical-vs-historical'
const c = 'catastrophism-uniformitarianism'

export const bank1: BankQuestion[] = [
  m(a, 'Geology is best defined as the science that studies:', ['Only earthquakes and volcanoes', 'Earth, its materials, structures, processes and history', 'The atmosphere and weather', 'The chemistry of living cells'], 1, 'The lesson defines geology as the fundamental science of Earth: its composition, structures, dynamic processes and long history.'),
  m(a, 'Which branch studies the chemical composition of Earth materials and the chemical changes they undergo?', ['Geophysics', 'Geochemistry', 'Paleontology', 'Sedimentology'], 1, 'Geochemistry analyses how elements are distributed among rocks and minerals and how those materials change chemically.'),
  m(a, 'Geophysics investigates Earth mainly by:', ['Collecting fossils', 'Measuring physical fields such as seismic waves, gravity and magnetism', 'Mapping groundwater quality', 'Describing ocean currents'], 1, 'Geophysics applies physics to the subsurface, using measurable fields to infer hidden structure and tectonic forces.'),
  m(a, 'The study of ancient life through fossils is called:', ['Paleontology', 'Sedimentology', 'Volcanology', 'Hydrogeology'], 0, 'Paleontology reconstructs ancient life and environments from fossils preserved in sedimentary rocks.'),
  m(a, 'Which branch studies erosion, transport, deposition and lithification?', ['Geochemistry', 'Sedimentology', 'Geophysics', 'Oceanography'], 1, 'Sedimentology covers the whole sediment pathway and the interpretation of past environments from strata.'),
  m(a, 'Groundwater distribution, movement and quality are the subject of:', ['Hydrogeology', 'Volcanology', 'Paleontology', 'Geophysics'], 0, 'Hydrogeology studies water in the soil and rock of the crust.'),
  m(a, 'Ocean currents, marine ecosystems and seafloor geology belong to:', ['Sedimentology', 'Oceanography', 'Geochemistry', 'Paleontology'], 1, 'Oceanography covers the marine environment, including the geology of the seafloor.'),
  m(a, 'Eruptive mechanisms and volcanic hazards are the focus of:', ['Volcanology', 'Hydrogeology', 'Geophysics', 'Sedimentology'], 0, 'Volcanology studies volcanoes, magma, lava and related hazards.'),
  m(a, 'A geologist measures seismic waves to image a buried magma chamber. The work is mainly:', ['Paleontology', 'Geophysics', 'Oceanography', 'Sedimentology'], 1, 'Seismic imaging is a geophysical technique for investigating the hidden interior.'),
  m(a, 'Isotopic dating of a volcanic ash layer is primarily a contribution from:', ['Geochemistry', 'Oceanography', 'Paleontology', 'Volcanology'], 0, 'Radiometric dating analyses the isotopes of elements in the material, which is geochemistry.'),
  m(a, 'Which pairing correctly matches a branch with its subject?', ['Hydrogeology — fossils', 'Sedimentology — deposition and strata', 'Geophysics — ocean currents', 'Paleontology — groundwater'], 1, 'Sedimentology is the branch concerned with sediment transport, deposition and sedimentary rocks.'),
  t(a, 'The branches of geology are independent, so one field project normally relies on a single branch.', false, 'The branches overlap heavily: a volcano involves chemistry, physics, sedimentology, groundwater and hazard science at once.'),
  t(a, 'Geology includes the study of Earth’s physical structures as well as its history.', true, 'The lesson’s definition explicitly names dynamic processes, history and physical structures.'),
  t(a, 'Oceanography has no connection to the solid Earth.', false, 'Oceanography includes seafloor geology, so it connects directly to the solid Earth.'),
  s(a, 'Name the branch that studies ancient life through fossils.', ['paleontology'], 'Paleontology is the fossil-based branch of geology.'),
  s(a, 'Name the branch that studies the distribution, movement and quality of groundwater.', ['hydrogeology'], 'Hydrogeology is the groundwater branch.'),

  m(b, 'Physical geology is chiefly concerned with:', ['The order of past events', 'Earth’s materials and the processes acting on and beneath the surface', 'Only fossils', 'The age of the universe'], 1, 'Physical geology studies materials and the processes that form and reshape them.'),
  m(b, 'Historical geology aims to:', ['Measure present-day erosion rates only', 'Establish Earth’s origin and development through time', 'Classify minerals by hardness', 'Map ocean currents'], 1, 'Historical geology builds a chronology of physical and biological change.'),
  m(b, '“How does magma crystallise at depth?” is a question of:', ['Historical geology', 'Physical geology', 'Paleontology', 'Stratigraphy'], 1, 'It asks how a process works now, which is physical geology.'),
  m(b, '“Which came first, the limestone or the dyke that cuts it?” is a question of:', ['Physical geology', 'Historical geology', 'Geophysics', 'Mineralogy'], 1, 'Ordering past events is historical geology, here using cross-cutting relationships.'),
  m(b, 'Historical geology depends on physical geology because:', ['It applies physical principles to reconstruct past events', 'It ignores processes', 'It studies only living organisms', 'It measures gravity'], 0, 'Superposition, cross-cutting and rock formation are physical principles used to build a chronology.'),
  m(b, 'Fossils are especially valuable in historical geology because they:', ['Show how minerals cleave', 'Act as time and environment indicators', 'Measure seismic velocity', 'Reveal the core’s composition'], 1, 'Some species existed only in known intervals, and their habits indicate past environments.'),
  m(b, 'A coral fossil in a limestone most directly suggests:', ['A cold deep-sea trench', 'A warm, shallow sea', 'A desert dune field', 'A glacial valley'], 1, 'Reef-building corals indicate warm, shallow marine conditions.'),
  m(b, 'Which tools are typical of historical geology?', ['Seismic reflection and gravity meters', 'Stratigraphy, fossils and dating', 'Rock hardness tests only', 'Ocean current meters'], 1, 'Historical geology relies on stratigraphy, fossils, and relative and numerical dating.'),
  t(b, 'Physical geology and historical geology are complementary rather than competing.', true, 'Historical conclusions rest on physical principles, so the two work together.'),
  t(b, 'Physical geology studies only events that happened millions of years ago.', false, 'Physical geology mostly studies how processes work, including processes operating today.'),
  t(b, 'A dyke that cuts both limestone and sandstone is younger than both units.', true, 'Cross-cutting relationships place the intrusion after the rocks it cuts.'),
  s(b, 'Name the subdivision that studies Earth’s materials and the processes beneath and upon its surface.', ['physical geology'], 'Physical geology covers materials and processes.'),
  s(b, 'Name the subdivision that arranges Earth’s past physical and biological changes in chronological order.', ['historical geology'], 'Historical geology builds the timeline of Earth history.'),
  m(b, 'Deciding that tilted beds were deformed after they were deposited uses:', ['Original horizontality', 'Uniformitarianism alone', 'The Big Bang model', 'Darcy’s law'], 0, 'Sediments are deposited horizontally, so tilted strata must have been disturbed later.'),

  m(c, 'Catastrophism is associated with:', ['James Hutton', 'James Ussher', 'Harry Hess', 'Alfred Wegener'], 1, 'Ussher proposed catastrophism in the mid-1600s.'),
  m(c, 'Uniformitarianism is associated with:', ['James Ussher', 'James Hutton', 'Charles Lyell only', 'Harry Hess'], 1, 'Hutton proposed uniformitarianism in the 1700s; the lesson credits him as its founder.'),
  m(c, 'Catastrophism placed Earth’s creation at:', ['4004 B.C.', 'A.D. 79', '10,000 B.C.', '4.6 billion years ago'], 0, 'Ussher’s chronology gave 4004 B.C.'),
  m(c, 'The slogan “the present is the key to the past” summarises:', ['Catastrophism', 'Uniformitarianism', 'Isostasy', 'Plate tectonics'], 1, 'Uniformitarianism extends present-day laws and processes into the past.'),
  m(c, 'Catastrophism held that landscapes were shaped mainly by:', ['Slow everyday erosion', 'Sudden, violent, global events', 'Plate subduction', 'Glacial rebound'], 1, 'It invoked great floods and massive earthquakes rather than gradual processes.'),
  m(c, 'Uniformitarianism holds that Earth is:', ['A few thousand years old', 'Incredibly old — billions of years', 'Exactly 4004 years old', 'Younger than the oceans'], 1, 'Deep time is a direct consequence of slow, ongoing processes.'),
  m(c, 'Which view is described as the foundation of all modern geological sciences?', ['Catastrophism', 'Uniformitarianism', 'Creationism', 'Neptunism'], 1, 'Uniformitarianism underpins modern geology.'),
  m(c, 'A canyon cut by a river over millions of years is the explanation favoured by:', ['Catastrophism', 'Uniformitarianism', 'Both equally', 'Neither'], 1, 'Gradual incision by an observable process is the uniformitarian reading.'),
  m(c, 'Uniformitarianism allows geologists to interpret ancient rocks because:', ['The physical, chemical and biological laws were the same in the past', 'All past rocks are identical to modern ones', 'No processes have changed rate', 'The past contained no catastrophes'], 0, 'The constancy of natural laws is the principle; rates and events can still vary.'),
  t(c, 'Uniformitarianism claims that every geological process is slow and steady.', false, 'It claims the laws are constant, not that all rates or events are slow.'),
  t(c, 'Catastrophism was based mainly on detailed field measurement of rock sequences.', false, 'The lesson describes it as based heavily on early chronological calculations rather than field evidence.'),
  t(c, 'Modern geology can accept rare large events while still using present-day physical laws to explain them.', true, 'Uniformity of law does not forbid unusual events.'),
  t(c, 'Ussher and Hutton lived and wrote in the same century.', false, 'Ussher worked in the mid-1600s and Hutton in the 1700s.'),
  s(c, 'Who proposed uniformitarianism?', ['james hutton', 'hutton'], 'James Hutton proposed it in the 1700s.'),
  s(c, 'Which paradigm is summarised by the phrase “the present is the key to the past”?', ['uniformitarianism'], 'That phrase is the classic statement of uniformitarianism.'),
  m(c, 'The main contrast in the lesson is between:', ['Two dating methods', 'Sudden unrepeatable catastrophes and observable ongoing processes', 'Two types of volcano', 'Two models of isostasy'], 1, 'That is the core comparison between catastrophism and uniformitarianism.'),
  m(c, 'A student says a 300 m canyon must have formed in one flood. The strongest uniformitarian reply is:', ['Rivers cannot erode rock', 'Measure present incision and dated terraces, and test whether the process explains the geometry', 'Floods never happen', 'Canyons are always volcanic'], 1, 'Uniformitarianism predicts measurable gradual incision and makes testable predictions.'),
]
