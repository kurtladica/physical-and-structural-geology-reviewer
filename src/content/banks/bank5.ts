import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'what-minerals-are'
const b = 'mineral-properties'
const c = 'rock-forming-minerals'
const d = 'rock-cycle'

export const bank5: BankQuestion[] = [
  m(a, 'Which is NOT one of the five characteristics of a mineral?', ['Naturally occurring', 'Solid', 'Organic in origin', 'Definite chemical composition'], 2, 'Minerals are inorganic solids with a definite composition and ordered structure.'),
  m(a, 'A mineral must have:', ['An ordered crystalline structure', 'A biological origin', 'A liquid state', 'No fixed composition'], 0, 'Atoms are arranged in an orderly repeating pattern.'),
  m(a, 'Ice is considered a mineral because it is:', ['A naturally occurring solid with a crystalline structure', 'Organic', 'A liquid', 'Man-made'], 0, 'Ice meets the mineral definition when it occurs naturally.'),
  m(a, 'Coal is not a mineral mainly because it:', ['Is organic and lacks a crystalline structure', 'Is too hard', 'Contains carbon', 'Is found underground'], 0, 'Coal is an organic rock, not a mineral.'),
  m(a, 'Quartz, sulfur and gold are all:', ['Minerals', 'Rocks', 'Fossils', 'Sediments'], 0, 'Each is a naturally occurring solid with a defined composition.'),
  m(a, 'Minerals form by precipitation when:', ['A solution becomes saturated and ions bond into crystals', 'Water freezes only', 'Rock melts completely', 'Wind deposits sand'], 0, 'Evaporation or cooling can saturate a solution and trigger crystallization.'),
  m(a, 'Crystallization of molten rock produces:', ['An interlocking mosaic of crystals', 'Layered sediment', 'Fossils', 'Soil'], 0, 'Igneous rocks consist of intergrown crystals.'),
  m(a, 'Biological mineral formation is illustrated by:', ['Corals and diatoms building hard parts', 'Basalt erupting', 'Salt evaporating', 'Quartz veins filling cracks'], 0, 'Organisms precipitate calcium carbonate or silica skeletons.'),
  m(a, 'A rock is best defined as:', ['An aggregate of minerals or mineral-like material', 'A single crystal', 'A pure element', 'A fossil'], 0, 'Rocks are aggregates, usually of several minerals.'),
  t(a, 'A mineral can be liquid at room temperature and still fit the definition.', false, 'A mineral must be a solid.'),
  t(a, 'Petrified wood is a mineral because it contains silica.', false, 'Petrified wood is a rock: silica has replaced the original wood.'),
  s(a, 'Name the property describing a mineral’s orderly internal atomic arrangement.', ['crystalline structure', 'crystal structure'], 'Ordered atomic arrangement is the crystalline structure.'),

  m(b, 'Lustre describes:', ['How a mineral’s surface reflects light', 'The colour of its powder', 'Its resistance to scratching', 'Its density'], 0, 'Lustre is the appearance of reflected light, metallic or nonmetallic.'),
  m(b, 'Which lustre type resembles metal regardless of colour?', ['Metallic', 'Vitreous', 'Pearly', 'Silky'], 0, 'Metallic lustre looks like metal.'),
  m(b, 'A glassy appearance is called:', ['Vitreous', 'Earthy', 'Greasy', 'Resinous'], 0, 'Vitreous means glass-like.'),
  m(b, 'Streak is:', ['The colour of a mineral in powdered form', 'The colour of the hand sample', 'The way a mineral breaks', 'Its density'], 0, 'Rubbing the mineral on a streak plate reveals the powder colour.'),
  m(b, 'Streak is more reliable than colour because:', ['It is usually constant even when hand-sample colour varies', 'It is always white', 'It measures hardness', 'It identifies density'], 0, 'Colour varies in minerals such as quartz and fluorite, but streak tends to be consistent.'),
  m(b, 'Hardness measures:', ['Resistance to abrasion or scratching', 'Resistance to breaking', 'Density', 'Light transmission'], 0, 'Hardness is scratch resistance.'),
  m(b, 'On the Mohs scale, diamond has a hardness of:', ['1', '5', '7', '10'], 3, 'Diamond is the hardest mineral on Mohs’ scale, at 10.'),
  m(b, 'Cleavage is:', ['Breaking along planes of weak bonding', 'Breaking with no preferred direction', 'Melting along a plane', 'Dissolving in acid'], 0, 'Cleavage produces flat, repeated surfaces controlled by atomic structure.'),
  m(b, 'Conchoidal fracture produces:', ['Smooth, curved surfaces', 'Flat repeated planes', 'Splinters', 'Powder'], 0, 'Conchoidal fracture is shell-like and curved, as in quartz.'),
  m(b, 'Tenacity describes:', ['A mineral’s toughness and resistance to breaking or deforming', 'Its colour', 'Its streak', 'Its crystal system'], 0, 'Tenacity is the mechanical response to stress.'),
  m(b, 'A mineral that transmits light but not an image is:', ['Transparent', 'Translucent', 'Opaque', 'Metallic'], 1, 'Translucent materials pass light without a clear image.'),
  t(b, 'Colour alone is a reliable way to identify every mineral.', false, 'Many minerals occur in several colours, so colour alone is often misleading.'),
  t(b, 'Cleavage and fracture both describe how a mineral breaks.', true, 'Cleavage follows weak-bond planes; fracture is breakage without them.'),
  t(b, 'Specific gravity compares a mineral’s density with that of water.', true, 'Specific gravity is a density ratio.'),
  s(b, 'Name the test that measures resistance to scratching.', ['hardness'], 'Hardness is scratch resistance, as on the Mohs scale.'),

  m(c, 'Which two elements make up most of the continental crust?', ['Oxygen and silicon', 'Iron and nickel', 'Calcium and carbon', 'Hydrogen and helium'], 0, 'Oxygen and silicon dominate crustal composition.'),
  m(c, 'The basic building block of silicate minerals is the:', ['Silica tetrahedron', 'Calcite rhomb', 'Halite cube', 'Iron octahedron'], 0, 'One silicon atom bonds with four oxygen atoms.'),
  m(c, 'In the silica tetrahedron, silicon is surrounded by:', ['Four oxygen atoms', 'Two oxygen atoms', 'Six oxygen atoms', 'One oxygen atom'], 0, 'SiO₄ has four oxygens around each silicon.'),
  m(c, 'Olivine has which silicate structure?', ['Isolated tetrahedra', 'Single chains', 'Sheets', 'Framework'], 0, 'Olivine is built from independent tetrahedra.'),
  m(c, 'Pyroxene is characterised by:', ['Single chains of tetrahedra', 'Sheets', 'Frameworks', 'Isolated tetrahedra'], 0, 'Single chains give pyroxene its structure and cleavage.'),
  m(c, 'Amphibole has:', ['Double chains of tetrahedra', 'Isolated tetrahedra', 'Sheets', 'No silicon'], 0, 'Double chains distinguish amphibole from pyroxene.'),
  m(c, 'Mica and clay minerals have which structure?', ['Sheets', 'Single chains', 'Frameworks', 'Isolated tetrahedra'], 0, 'Sheet structures explain mica’s perfect cleavage.'),
  m(c, 'Quartz and feldspar have which silicate structure?', ['Framework', 'Sheet', 'Chain', 'Isolated tetrahedra'], 0, 'Three-dimensional frameworks make quartz and feldspar strong and hard.'),
  m(c, 'Which is a nonsilicate mineral group?', ['Carbonates', 'Feldspars', 'Micas', 'Pyroxenes'], 0, 'Carbonates lack the silica tetrahedron.'),
  m(c, 'Calcite belongs to which mineral group?', ['Carbonate', 'Silicate', 'Sulfide', 'Native element'], 0, 'Calcite is calcium carbonate.'),
  m(c, 'Silicates dominate Earth’s crust because:', ['Silicon and oxygen are the most abundant crustal elements', 'They are the only minerals that exist', 'They form only at the surface', 'They contain no oxygen'], 0, 'Abundant Si and O combine into silicate structures.'),
  t(c, 'All silicate minerals contain silicon and oxygen.', true, 'The silica tetrahedron is their fundamental unit.'),
  t(c, 'The way tetrahedra are joined affects a silicate’s cleavage and shape.', true, 'Structure controls properties such as cleavage.'),
  t(c, 'Feldspar is a nonsilicate mineral.', false, 'Feldspar is a framework silicate.'),
  s(c, 'Name the fundamental building block of silicate minerals.', ['silica tetrahedron', 'silicon oxygen tetrahedron', 'tetrahedron'], 'The silica tetrahedron is the silicate building block.'),

  m(d, 'Igneous rock forms by:', ['Cooling and crystallising molten rock', 'Compaction of sediment', 'Metamorphism of limestone', 'Evaporation of seawater'], 0, 'Solidification of magma or lava produces igneous rock.'),
  m(d, 'Sedimentary rock forms by:', ['Weathering, transport, deposition and lithification', 'Melting and cooling', 'Heat and pressure only', 'Crystallising from lava'], 0, 'Sediment is buried and lithified into rock.'),
  m(d, 'Metamorphic rock forms when:', ['Existing rock changes by heat, pressure and fluids without melting', 'Magma cools', 'Sediment settles', 'Water evaporates'], 0, 'Metamorphism is change in the solid state.'),
  m(d, 'The rock cycle shows that:', ['Any rock type can transform into any other', 'Rocks never change', 'Only igneous rocks exist', 'Sediment cannot become rock'], 0, 'The cycle links all three rock families.'),
  m(d, 'Weathering and erosion convert rock into:', ['Sediment', 'Magma', 'Minerals only', 'Fossils'], 0, 'Breakdown produces sediment for sedimentary rocks.'),
  m(d, 'Melting a sedimentary rock produces:', ['Magma, which can cool into igneous rock', 'Metamorphic rock directly', 'More sediment', 'Soil'], 0, 'Melting resets the cycle to igneous material.'),
  m(d, 'Heat and pressure applied to limestone produce:', ['Marble', 'Basalt', 'Shale', 'Granite'], 0, 'Limestone metamorphoses into marble.'),
  m(d, 'Texture in a rock refers to:', ['The size, shape and arrangement of its grains', 'Its colour only', 'Its age', 'Its location'], 0, 'Texture records how the rock formed.'),
  m(d, 'Which statement about the rock cycle is correct?', ['It has no fixed starting point', 'It always begins with igneous rock', 'It always ends with sedimentary rock', 'It only operates underwater'], 0, 'The cycle is a network of possible pathways, not a line.'),
  t(d, 'Metamorphic rocks form by melting.', false, 'Metamorphism occurs in the solid state; melting produces magma.'),
  t(d, 'A rock’s mineral composition and texture are both used to classify it.', true, 'Both are essential classification criteria.'),
  t(d, 'Sediment can lithify into sedimentary rock without melting.', true, 'Compaction and cementation lithify sediment.'),
  s(d, 'Name the rock type formed by cooling magma or lava.', ['igneous', 'igneous rock'], 'Igneous rocks solidify from molten material.'),
]
