import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'sediment-formation'
const b = 'detrital-rocks'
const c = 'chemical-rocks'
const d = 'coal'
const e = 'sedimentary-structures'

export const bank8: BankQuestion[] = [
  m(a, 'Sedimentary rock forms from:', ['Sediment that is deposited and lithified', 'Magma that cools', 'Rock that melts', 'Minerals that evaporate from lava'], 0, 'Deposition followed by lithification produces sedimentary rock.'),
  m(a, 'Weathering is:', ['The breakdown of rock at or near the surface', 'The transport of sediment', 'The deposition of sediment', 'The melting of rock'], 0, 'Weathering breaks rock in place; erosion removes it.'),
  m(a, 'Erosion is:', ['The removal and transport of weathered material', 'The chemical alteration of minerals', 'The cementation of grains', 'The formation of fossils'], 0, 'Erosion detaches and moves material.'),
  m(a, 'Deposition occurs when:', ['Transport energy drops and sediment settles', 'Rock melts', 'Minerals crystallise from magma', 'Pressure increases at depth'], 0, 'Sediment settles when the transporting medium can no longer carry it.'),
  m(a, 'Lithification includes:', ['Compaction and cementation', 'Melting and cooling', 'Folding and faulting', 'Weathering and erosion'], 0, 'Burial compacts sediment and cement precipitates between grains.'),
  m(a, 'Diagenesis refers to:', ['Low-temperature changes that turn sediment into rock', 'High-grade metamorphism', 'Melting of the crust', 'Volcanic eruption'], 0, 'Diagenesis covers compaction, cementation and related low-grade changes.'),
  m(a, 'Which sequence is correct?', ['Weathering → erosion → transport → deposition → lithification', 'Deposition → melting → weathering', 'Lithification → erosion → deposition', 'Erosion → melting → cementation'], 0, 'That is the order of the sedimentary pathway.'),
  m(a, 'Chemical weathering is especially effective on:', ['Limestone and other carbonate rocks', 'Quartz sand only', 'Gold', 'Obsidian only'], 0, 'Carbonate rocks dissolve readily in weakly acidic water.'),
  t(a, 'Compaction alone can lithify sediment without any cement.', true, 'Compaction reduces pore space and can bind grains, though cement commonly helps.'),
  t(a, 'Sediment must melt before it can become sedimentary rock.', false, 'Lithification occurs at low temperature without melting.'),
  s(a, 'Name the process that turns loose sediment into solid rock.', ['lithification'], 'Lithification includes compaction and cementation.'),

  m(b, 'Detrital sedimentary rock is made of:', ['Pieces of pre-existing rock and minerals', 'Precipitated salts only', 'Organic matter only', 'Volcanic glass only'], 0, 'Detrital rocks consist of transported fragments.'),
  m(b, 'Shale is composed mainly of:', ['Silt- and clay-size particles', 'Gravel', 'Sand', 'Shell fragments'], 0, 'Fine-grained detrital rock forms from quiet settling.'),
  m(b, 'Which detrital rock is most abundant?', ['Shale and other fine-grained rocks', 'Conglomerate', 'Breccia', 'Quartzite'], 0, 'Fine-grained detrital rocks account for well over half of sedimentary rocks.'),
  m(b, 'Sandstone is dominated by:', ['Sand-size grains', 'Clay-size grains', 'Gravel', 'Calcite cement only'], 0, 'Sand-size particles predominate in sandstone.'),
  m(b, 'Conglomerate contains:', ['Rounded gravel-size clasts', 'Angular gravel-size clasts', 'Only clay', 'Only shells'], 0, 'Rounding distinguishes conglomerate from breccia.'),
  m(b, 'Breccia contains:', ['Angular gravel-size clasts', 'Rounded gravel', 'Sand only', 'Fossils only'], 0, 'Angular clasts imply little transport.'),
  m(b, 'Angular clasts suggest:', ['A short transport distance', 'A very long journey', 'Deep burial', 'Chemical precipitation'], 0, 'Large particles round quickly during transport, so angularity means little travel.'),
  m(b, 'Well-sorted sediment indicates:', ['Grains of similar size, often from a consistent transport process', 'A mixture of all sizes', 'Chemical precipitation', 'Glacial deposition only'], 0, 'Sorting reflects how uniform the transport energy was.'),
  m(b, 'Mudstone differs from shale because mudstone:', ['Breaks into chunks rather than thin sheets', 'Is coarser than sandstone', 'Contains only gravel', 'Is chemical'], 0, 'Shale is fissile; mudstone is blocky.'),
  m(b, 'Which rock is fine-grained but lacks fissility?', ['Siltstone', 'Shale', 'Conglomerate', 'Breccia'], 0, 'Siltstone is silt-dominated without shale’s thin-sheet breakage.'),
  t(b, 'Rounding and sorting both increase with transport distance.', true, 'Longer transport abrades grains and separates sizes.'),
  t(b, 'Shale is coarser-grained than sandstone.', false, 'Shale is fine-grained; sandstone is coarser.'),
  s(b, 'Name the detrital rock made of rounded gravel-size clasts.', ['conglomerate'], 'Conglomerate has rounded gravel clasts.'),

  m(c, 'Chemical sedimentary rock forms by:', ['Precipitation of dissolved material', 'Transport of rock fragments', 'Melting', 'Metamorphism'], 0, 'Dissolved ions precipitate to form chemical rocks.'),
  m(c, 'The most abundant chemical sedimentary rock is:', ['Limestone', 'Chert', 'Rock salt', 'Gypsum'], 0, 'Limestone makes up about 10% of sedimentary rocks and is the most abundant chemical type.'),
  m(c, 'Limestone is composed chiefly of:', ['Calcite', 'Quartz', 'Halite', 'Gypsum'], 0, 'Calcium carbonate (calcite) dominates limestone.'),
  m(c, 'Dolostone is composed of:', ['Calcium–magnesium carbonate', 'Pure quartz', 'Sodium chloride', 'Iron oxide'], 0, 'Dolomite is CaMg(CO₃)₂.'),
  m(c, 'Dolomitization occurs when:', ['Magnesium-rich water replaces calcium in limestone', 'Limestone melts', 'Quartz dissolves', 'Gypsum dehydrates'], 0, 'Mg replaces some Ca in the carbonate lattice.'),
  m(c, 'Chert is made of:', ['Microcrystalline quartz', 'Calcite', 'Halite', 'Clay'], 0, 'Chert is a compact, hard silica rock.'),
  m(c, 'Flint is a dark variety of chert coloured by:', ['Organic matter', 'Iron oxide', 'Halite', 'Gypsum'], 0, 'Organic matter darkens flint.'),
  m(c, 'Jasper is red chert coloured by:', ['Iron oxide', 'Organic matter', 'Copper', 'Sulfur'], 0, 'Iron oxide gives jasper its red colour.'),
  m(c, 'Evaporites form by:', ['Precipitation from evaporating water', 'Cooling magma', 'Weathering of granite', 'Metamorphism of shale'], 0, 'Evaporation concentrates dissolved salts until they precipitate.'),
  m(c, 'Rock salt is composed mainly of:', ['Halite', 'Gypsum', 'Calcite', 'Quartz'], 0, 'Halite is NaCl, the chief component of rock salt.'),
  t(c, 'Limestone can form by inorganic precipitation or by biological processes.', true, 'Both routes produce calcium carbonate rock.'),
  t(c, 'Evaporites require a humid climate with abundant rainfall.', false, 'They require evaporation, typically in arid basins.'),
  s(c, 'Name the chemical sedimentary rock made of calcite.', ['limestone'], 'Limestone is the calcite-rich chemical sedimentary rock.'),

  m(d, 'Coal is classified as:', ['An organic sedimentary rock', 'A chemical sedimentary rock', 'A detrital rock', 'An igneous rock'], 0, 'Coal forms from accumulated plant material.'),
  m(d, 'The first stage of coal formation is:', ['Peat', 'Anthracite', 'Bituminous coal', 'Lignite'], 0, 'Peat is partially decomposed plant matter.'),
  m(d, 'The correct order of increasing coal rank is:', ['Peat → lignite → bituminous → anthracite', 'Anthracite → bituminous → lignite → peat', 'Lignite → peat → anthracite → bituminous', 'Bituminous → peat → lignite → anthracite'], 0, 'Heat and pressure progressively increase rank.'),
  m(d, 'Anthracite is:', ['The highest-rank coal, with the most carbon', 'The lowest-rank coal', 'A type of limestone', 'A mineral'], 0, 'Anthracite is hard, shiny and carbon-rich.'),
  m(d, 'As coal rank increases, its carbon content:', ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'], 0, 'Higher rank means more carbon and less volatile matter.'),
  m(d, 'Coal forms mainly in:', ['Swampy environments with abundant plant material', 'Deep ocean trenches', 'Volcanic craters', 'Deserts'], 0, 'Waterlogged swamps preserve plant matter.'),
  m(d, 'Anthracite forms from bituminous coal mainly by:', ['Heat and pressure during metamorphism', 'Weathering', 'Dissolution', 'Evaporation'], 0, 'Anthracite is the metamorphic grade of coal.'),
  t(d, 'Peat is a precursor of coal.', true, 'Peat compacts and alters into lignite and higher ranks.'),
  t(d, 'Lignite has a higher carbon content than anthracite.', false, 'Lignite is low rank; anthracite is highest.'),
  s(d, 'Name the highest rank of coal.', ['anthracite'], 'Anthracite is the highest-rank coal.'),

  m(e, 'Beds are:', ['Layers of sedimentary rock', 'Folds', 'Faults', 'Fossils'], 0, 'Sedimentary rocks accumulate in layers called beds or strata.'),
  m(e, 'Laminations are layers thinner than:', ['10 mm', '1 cm', '1 m', '10 cm'], 0, 'The lesson defines laminations as thinner than 10 mm.'),
  m(e, 'Cross-bedding forms when:', ['Layers are inclined by migrating dunes, bars or ripples', 'Beds are folded', 'A fault cuts the rock', 'Mud dries'], 0, 'Inclined layers record migration of bedforms.'),
  m(e, 'Ripple marks indicate:', ['Moving water or wind', 'Glacial ice only', 'Volcanic eruption', 'Deep burial'], 0, 'Ripples form on sediment surfaces under moving fluids.'),
  m(e, 'Mud cracks indicate:', ['Alternating wet and dry conditions', 'Deep marine deposition', 'Volcanic ash fall', 'Glacial transport'], 0, 'Drying mud contracts and cracks.'),
  m(e, 'Graded bedding is characterised by:', ['A gradual change in grain size within a bed', 'Inclined layers', 'Mud cracks', 'Ripple marks'], 0, 'Grain size grades upward, often after a single depositional event.'),
  m(e, 'Fossils in sedimentary rocks are useful for:', ['Interpreting past environments and ages', 'Measuring hardness', 'Identifying cleavage', 'Determining density'], 0, 'Fossils indicate environment and relative age.'),
  m(e, 'Which sedimentary resource is used to make cement?', ['Limestone', 'Halite', 'Gypsum only', 'Coal'], 0, 'Limestone is the main raw material for cement.'),
  m(e, 'Rock salt and gypsum are important:', ['Evaporite resources', 'Igneous minerals', 'Metamorphic rocks', 'Fossils'], 0, 'They are mined evaporite deposits.'),
  t(e, 'Cross-bedding can indicate the direction of ancient currents.', true, 'The inclination records transport direction.'),
  t(e, 'Mud cracks form in deep, permanently wet sediment.', false, 'They require drying and wetting cycles.'),
  s(e, 'Name the sedimentary structure formed by drying mud.', ['mud cracks', 'mudcracks'], 'Mud cracks record wet–dry cycles.'),
]
