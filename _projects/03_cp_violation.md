---
layout: page
title: Nuclear CP Violation
description: Searching for CP-violating nuclear interactions using molecular ions as ultra-sensitive probes of physics beyond the Standard Model.
img: assets/img/projects/QLS.jpg
importance: 3
category: ion trapping
---

## The Matter-Antimatter Puzzle

The apparent lack of antimatter in the universe is one of the great mysteries in physics. At the origins of the universe, equal amounts of matter and antimatter should have been produced and soon after annihilated, leaving only photons. However, we live in a universe that is predominantly composed of matter, with essentially no antimatter observed. This asymmetry cannot be explained by the Standard Model of particle physics, which predicts CP violation far too weakly to account for the imbalance. The asymmetry could be explained by hypothetical new particles or forces that violate CP symmetry at high energy. Our research program searches for the small residual effects of such new-physics particles on low-energy precision measurements of atoms and molecules, rather than attempting to produce them directly at particle colliders.

One of the best places to look for new sources of CP violation is in the structure of atomic nuclei. CP-violating interactions can induce tiny, otherwise forbidden distortions of the nucleus. A particularly sensitive probe is the nuclear magnetic quadrupole moment (MQM), which can only be nonzero if CP symmetry is broken and is often enhanced in deformed nuclei with unpaired nucleons.

## Molecular Enhancement and the LuOH⁺ System

We have identified the molecular ion LuOH$^+$ as a particularly favorable system for this measurement. The $^{176}$Lu nucleus has a large quadrupole deformation and a high-spin ground state ($I=7$), giving rise to enhanced sensitivity to a nuclear MQM. Calculations indicate that LuOH$^+$ is among the most sensitive molecules proposed for MQM searches. A nonzero measurement of the MQM in LuOH$^+$ can be translated into constraints on the QCD vacuum angle $\bar\theta$, quark electric dipole moments, and quark chromo-EDMs—parameters that quantify CP violation in the strong sector.

## Quantum Logic Spectroscopy

The central challenge of precision spectroscopy with molecular ions is state preparation and detection. Unlike atoms, molecules have a rich internal structure with thousands of rotational, vibrational, and electronic states, making it impossible to read out the quantum state directly by fluorescence. We address this using **quantum logic spectroscopy (QLS)**, a technique borrowed from atomic clock research in which a co-trapped atomic ion (the "logic ion") shares a trap with the molecule of interest (the "spectroscopy ion"). Quantum gates transfer information about the molecular quantum state onto the logic ion, which is then read out by fluorescence. Working with a single molecule rather than an ensemble of thousands also provides better protection from systematic errors arising from sample and field inhomogeneity over the experimental volume.

<div class="row justify-content-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/QLS.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Schematic of quantum logic spectroscopy. A co-trapped atomic ion (left) acts as the readout ancilla for the molecular ion (right), connected via shared motional modes." %}
  </div>
</div>

## Relevant Publications

<span style="display:none">{% cite zhou2024 kurchavov2023 maison2022 roussy2021 maison2020 %}</span>

<div class="publications">
  {% bibliography --cited --group_by none --sort_by year --order descending %}
</div>
