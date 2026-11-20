import type { BankQuestion } from '../../types'
import { m, s, t } from './helpers'

const a = 'groundwater-zones'
const b = 'water-table-streams'
const c = 'groundwater-movement'
const d = 'wells-artesian'
const e = 'springs-environment'

export const bank10: BankQuestion[] = [
  m(a, 'Groundwater is:', ['Water stored in the pores and fractures of rock and sediment', 'Water flowing in rivers', 'Water vapour in the atmosphere', 'Sea water only'], 0, 'Groundwater occupies openings below the surface.'),
  m(a, 'The zone of soil moisture is:', ['The uppermost soil layer holding water by molecular attraction', 'The saturated zone', 'A confined aquifer', 'The capillary fringe'], 0, 'Soil moisture is held as films on particles.'),
  m(a, 'The vadose zone is:', ['The unsaturated zone above the water table', 'The saturated zone', 'A lava tube', 'The ocean'], 0, 'Its pores contain both air and water.'),
  m(a, 'The phreatic zone is:', ['The saturated zone where all openings are filled with water', 'The soil surface', 'The unsaturated zone', 'The atmosphere'], 0, 'All pores are water-filled below the water table.'),
  m(a, 'The water table is:', ['The top of the saturated zone', 'The bottom of the vadose zone only', 'The land surface everywhere', 'The base of the aquifer'], 0, 'It marks the boundary between saturated and unsaturated material.'),
  m(a, 'The capillary fringe is:', ['The zone just above the water table where water is drawn up by capillary action', 'A layer of pure clay', 'The bottom of the aquifer', 'A spring'], 0, 'Capillary forces pull water upward into small pores.'),
  m(a, 'Which material would store the most groundwater?', ['Well-sorted sand and gravel', 'Solid granite', 'Dense basalt', 'Frozen clay'], 0, 'High porosity allows sand and gravel to hold water.'),
  m(a, 'Porosity is:', ['The proportion of a material’s volume that is open space', 'The rate at which water flows', 'The ability to transmit water', 'The depth to bedrock'], 0, 'Porosity measures storage capacity, not flow rate.'),
  m(a, 'Permeability is:', ['The ability of a material to transmit water', 'The total pore volume', 'The depth of the water table', 'The water’s hardness'], 0, 'Permeability controls how easily water flows.'),
  t(a, 'A rock can be porous but still have low permeability.', true, 'Clay holds water but transmits it slowly.'),
  t(a, 'The water table is always perfectly flat.', false, 'It generally follows the topography in a subdued way.'),
  s(a, 'Name the zone below the water table where all pores are filled with water.', ['phreatic zone', 'saturated zone'], 'The phreatic (saturated) zone lies below the water table.'),

  m(b, 'A gaining stream is one that:', ['Receives water from groundwater', 'Loses water to groundwater', 'Has no water table', 'Flows only during storms'], 0, 'The water table stands above the stream, so groundwater flows into it.'),
  m(b, 'A losing stream is one that:', ['Loses water to the subsurface', 'Gains groundwater', 'Is always dry', 'Has a perched water table'], 0, 'The water table lies below the channel, so water leaks downward.'),
  m(b, 'A disconnected losing stream:', ['Loses water through an unsaturated zone beneath the channel', 'Is connected to a confined aquifer', 'Gains water from a spring', 'Never loses water'], 0, 'It is separated from the water table by unsaturated material.'),
  m(b, 'A recharge area is where:', ['Water enters the groundwater system', 'Groundwater discharges to the surface', 'Wells are pumped', 'The water table is lowest'], 0, 'Recharge adds water to the aquifer.'),
  m(b, 'A discharge area is where:', ['Groundwater leaves the subsurface', 'Rain infiltrates', 'Aquifers are confined', 'Water is stored'], 0, 'Discharge returns water to streams, springs or the sea.'),
  m(b, 'During a drought, the water table generally:', ['Falls', 'Rises sharply', 'Stays exactly constant', 'Becomes saturated'], 0, 'Less recharge and continued discharge lower the water table.'),
  m(b, 'Heavy rainfall typically causes the water table to:', ['Rise', 'Disappear', 'Become confined', 'Turn saline'], 0, 'Infiltration raises the saturated zone.'),
  t(b, 'A stream can both gain and lose water along its length.', true, 'Conditions change with the water table and geology.'),
  t(b, 'A losing stream always has a water table above the channel.', false, 'A losing stream has the water table below the channel.'),
  s(b, 'Name the stream type that receives water from the water table.', ['gaining stream', 'gaining'], 'Gaining streams are fed by groundwater.'),

  m(c, 'Hydraulic head is:', ['A measure of the energy driving groundwater flow', 'The depth of a well', 'The porosity of a rock', 'The volume of an aquifer'], 0, 'Water flows from higher to lower head.'),
  m(c, 'The hydraulic gradient is:', ['The change in head per unit distance', 'The total volume of water', 'The porosity of the aquifer', 'The well depth'], 0, 'Gradient is the slope of the water table or potentiometric surface.'),
  m(c, 'Darcy’s law states that discharge Q equals:', ['K·A·(h₁ − h₂)/d', 'K + A + h', 'A/h', 'K·d/h'], 0, 'Discharge depends on conductivity, area, head difference and distance.'),
  m(c, 'In Darcy’s law, K represents:', ['Hydraulic conductivity', 'The cross-sectional area', 'The head difference', 'The flow distance'], 0, 'K describes how easily the material transmits water.'),
  m(c, 'If the head difference doubles while everything else stays the same, discharge:', ['Doubles', 'Halves', 'Stays the same', 'Becomes zero'], 0, 'Q is proportional to the head difference.'),
  m(c, 'If the flow distance doubles while everything else stays the same, discharge:', ['Halves', 'Doubles', 'Quadruples', 'Stays the same'], 0, 'Q is inversely proportional to distance.'),
  m(c, 'Groundwater flow is generally:', ['Slow compared with surface water', 'Faster than a river', 'Instantaneous', 'Always vertical'], 0, 'Friction in small pores makes flow slow.'),
  m(c, 'Water in an unconfined aquifer flows:', ['From recharge areas toward discharge areas', 'From discharge to recharge', 'Only downward', 'Only upward'], 0, 'The overall path follows the water table slope.'),
  t(c, 'Groundwater flows from high hydraulic head to low hydraulic head.', true, 'Head differences drive flow direction.'),
  t(c, 'Hydraulic conductivity is the same as porosity.', false, 'Conductivity describes transmission; porosity describes storage.'),
  s(c, 'Name the law that relates discharge to conductivity, area and hydraulic gradient.', ['darcy s law', 'darcy law', 'darcys law'], 'Darcy’s law describes groundwater discharge.'),

  m(d, 'A well is:', ['A hole drilled into the saturated zone to extract water', 'A natural spring', 'A type of aquifer', 'A stream'], 0, 'Wells reach groundwater for pumping or monitoring.'),
  m(d, 'Drawdown is:', ['The lowering of the water table around a pumping well', 'The rise of groundwater during rain', 'The depth of an aquifer', 'The rate of recharge'], 0, 'Pumping lowers the water level near the well.'),
  m(d, 'The cone of depression is:', ['The funnel-shaped lowering of the water table around a pumped well', 'A volcanic crater', 'A sinkhole', 'A spring'], 0, 'Heavy pumping creates this depression.'),
  m(d, 'A perched water table is:', ['A local saturated zone above the main water table', 'The main regional water table', 'A confined aquifer', 'A spring'], 0, 'An impermeable layer holds water above the regional table.'),
  m(d, 'An unconfined aquifer is:', ['Open to the surface and recharged directly by infiltration', 'Sealed between impermeable layers', 'Always artesian', 'Always dry'], 0, 'Its upper boundary is the water table.'),
  m(d, 'A confined aquifer is:', ['Bounded by impermeable layers and under pressure', 'Open to the soil surface', 'The same as the vadose zone', 'A spring'], 0, 'Confining beds trap water under pressure.'),
  m(d, 'The potentiometric surface is:', ['The imaginary level to which water would rise in a confined aquifer', 'The top of the soil', 'The bottom of a well', 'The land surface'], 0, 'It represents the pressure head of a confined aquifer.'),
  m(d, 'A flowing artesian well occurs when:', ['The potentiometric surface lies above the land surface', 'The aquifer is unconfined', 'The water table is deep', 'The well is dry'], 0, 'Pressure pushes water above ground level.'),
  m(d, 'A nonflowing artesian well requires:', ['Pumping, because the potentiometric surface is below the surface', 'No pumping ever', 'A perched water table', 'A spring'], 0, 'Water rises partway but not to the surface.'),
  t(d, 'Pumping one well can lower the water level in nearby wells.', true, 'Overlapping cones of depression affect neighbouring wells.'),
  t(d, 'An artesian well always flows without a pump.', false, 'Only a flowing artesian well does; a nonflowing one needs pumping.'),
  s(d, 'Name the lowering of the water level caused by pumping.', ['drawdown'], 'Drawdown is the pumping-induced decline in water level.'),

  m(e, 'A spring forms where:', ['The water table intersects the land surface', 'A well is pumped', 'A river dries up', 'An aquifer is confined'], 0, 'Groundwater discharges naturally at the surface.'),
  m(e, 'A hot spring is heated by:', ['Geothermal heat at depth', 'Sunlight', 'Friction in rivers', 'Wind'], 0, 'Circumstances bring geothermally heated water to the surface.'),
  m(e, 'A geyser erupts periodically because:', ['A constriction traps steam until pressure forces water out', 'It is pumped by people', 'It is fed by a river', 'It is a lava fountain'], 0, 'Geysers require a plumbing system that builds and releases pressure.'),
  m(e, 'Karst landscapes develop by:', ['Dissolution of limestone by acidic groundwater', 'Freezing and thawing of granite', 'Wind erosion', 'Volcanic eruption'], 0, 'Carbonic acid dissolves calcium carbonate.'),
  m(e, 'A sinkhole forms when:', ['A cave roof collapses or sediment drains into a solution cavity', 'A river floods', 'A glacier retreats', 'Lava flows'], 0, 'Dissolution and collapse create sinkholes.'),
  m(e, 'Stalactites grow:', ['From the ceiling downward', 'From the floor upward', 'Sideways', 'Only underwater'], 0, 'Dripping water deposits calcite on cave ceilings.'),
  m(e, 'Stalagmites grow:', ['From the floor upward', 'From the ceiling downward', 'On the surface', 'In rivers'], 0, 'Drops falling to the floor build upward columns.'),
  m(e, 'Groundwater overuse can cause:', ['Land subsidence and aquifer depletion', 'Plate motion', 'Volcanic eruptions', 'Mountain building'], 0, 'Removing water lowers pore pressure and compacts sediments.'),
  m(e, 'Saltwater intrusion occurs when:', ['Freshwater is overpumped near a coast and seawater moves inland', 'Rainfall increases', 'A river floods', 'A glacier melts'], 0, 'The fresh–salt interface shifts inland.'),
  m(e, 'Groundwater contamination is hard to remediate because:', ['Water moves slowly through pores and pollutants persist', 'Groundwater flows faster than rivers', 'Aquifers are always empty', 'Pollutants evaporate quickly'], 0, 'Slow flow and low oxygen limit natural cleansing.'),
  t(e, 'Caverns in limestone form by dissolution.', true, 'Acidic water dissolves carbonate rock.'),
  t(e, 'Geysers erupt continuously without pauses.', false, 'They erupt periodically as pressure builds and releases.'),
  t(e, 'Land subsidence can result from excessive groundwater pumping.', true, 'Compaction follows pressure loss in the aquifer.'),
  s(e, 'Name the cave feature that hangs from the ceiling.', ['stalactite', 'stalactites'], 'Stalactites hang downward from cave ceilings.'),
]
