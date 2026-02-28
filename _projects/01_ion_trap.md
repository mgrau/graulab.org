---
layout: page
title: Barium Ion Qubits
description: Using trapped Ba⁺ ions as a platform for quantum information processing.
img: assets/img/projects/ion_trap.jpg
importance: 1
category: ion trapping
---

## Trapping a Single Ion

An ion trap confines charged atoms using electric fields, suspending them in space. Our trap is a **linear Paul trap**, which comprises four metal electrodes arranged in a square, driven with a radio-frequency voltage. The resulting oscillating electric field creates an effective potential well that pushes ions toward the central axis. Static voltages applied to end-cap electrodes confine the ion axially. The result is a single, isolated ion levitating in vacuum, confined by electric fields.

<div class="row justify-content-center mt-3">
  <div class="col-sm-8">
    {% include figure.liquid path="assets/img/projects/ba_trap.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Our linear Paul trap for Ba⁺ ions at Old Dominion University." %}
  </div>
</div>

## Laser Cooling and Fluorescence

At room temperature, atoms move at hundreds of meters per second. To trap and control a single ion, we first need to slow it down. We do this with **laser cooling**. By tuning a laser to just below the energy of ann atomic transition, the ion preferentially absorbs photons from whichever direction it is moving toward, receiving a small momentum kick opposing its motion with each absorption. After millions of such kicks, the ion's average speed drops to less than 1 meter per second, which corresponds to a temperature of less than a thousandth of a degree above absolute zero. This localizes the atom to a volume less than 100 nm on a side.

Once laser-cooled, the ion fluoresces. When illuminated by a resonant laser, a single Ba$^+$ ion scatters tens of millions of photons per second. We image this light with a camera and a microscope lens. Each trapped ion appears as a bright spot in the image.

<div class="row justify-content-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/ba_ions.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Single Ba⁺ ions fluorescing under 493 nm laser illumination. Each bright spot is one atom." %}
  </div>
</div>

## The Qubit

A quantum bit, known as a "qubit", is any two-level quantum system. In Ba$^+$, we use two hyperfine levels of the $S_{1/2}$ ground state as our qubit. These states are separated by a microwave frequency and are insensitive to magnetic field fluctuations at a clock transition, giving long coherence times. We prepare and manipulate the qubit using stimulated Raman transitions driven by 515 nm laser pulses, and read it out by state-selective fluorescence. One qubit state will appear "bright", and the other appears "dark", rendering the qubit into a classical bit.

Two-qubit gates between neighboring ions are mediated by their shared motional modes, the collective oscillations of the ion chain in the trap. By coupling internal qubit states to these shared motions, we can perform entangling gates.

## Relevant Publications

<span style="display:none">{% cite wipfli2023 reiter2021 jain2020 %}</span>
<div class="publications">
  {% bibliography --cited --group_by none --sort_by year --order descending %}
</div>
