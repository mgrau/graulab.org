---
layout: page
title: Hybrid Qubit-Qumode Systems
description: Trapped-ion platforms for hybrid quantum computation and simulation using both discrete (qubit) and continuous-variable (qumode) degrees of freedom.
img: assets/img/projects/hybrid_qc.png
importance: 2
category: ion trapping
---

## Two Kinds of Quantum Information

A standard quantum computer stores information in **qubits**, two-level quantum systems, for example the spin of an electron pointing up or down, or an atom in its ground or excited state. But nature is full of systems that can't be naturally described by just two levels. The electromagnetic field of a laser, the vibration of a molecule, and the oscillation of a mechanical resonator are continuous-variable systems, with an infinite ladder of energy levels.

A hybrid quantum computer uses both. The discrete qubit degrees of freedom handle logic and measurement; the continuous-variable **qumode** degrees of freedom handle the bosonic, wave-like parts of a problem. Together they can naturally encode the structure of interacting quantum field theories, the language of modern particle and nuclear physics.

## Trapped Ions as a Natural Hybrid Platform

In a chain of trapped ions, these two types of degrees of freedom arise automatically. Each ion has internal energy levels that serve as qubits. The entire chain also has oscillations where all ions move together, like atoms in a crystal, called collective motional modes. These motional modes serve as qumodes, representing bosonic degrees of freedom.

The coupling between an ion's electronic state and the shared motional modes is well understood and experimentally controllable. This makes trapped ions one of the promising near-term platforms for hybrid quantum computation.

## Simulating Quantum Field Theories

A key application of hybrid quantum computing is the simulation of quantum field theories, the fundamental language of particle and nuclear physics, and of many condensed matter phenomena. These theories describe particles as excitations of fields that carry both discrete and continuous degrees of freedom. Classical computers struggle with them, because the quantum state space grows exponentially with system size.

<div class="row justify-content-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/JC_hamiltonian.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Qubit-qumode representation of the Jaynes-Cummings-Hubbard model. Each site couples a bosonic mode (qumode, top) to a two-level system (qubit, bottom), with photon hopping between adjacent sites." %}
  </div>
</div>

## Relevant Publications

<span style="display:none">{% cite rainaldi2026 araz2025 araz2024 %}</span>

<div class="publications">
  {% bibliography --cited --group_by none --sort_by year --order descending %}
</div>
