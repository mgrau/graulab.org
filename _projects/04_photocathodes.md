---
layout: page
title: Spin-Polarized Photocathodes
description: Developing next-generation spin-polarized electron sources for particle accelerators, in collaboration with ODU ECE and Jefferson Lab.
img: assets/img/projects/photocathode.jpg
importance: 1
category: photocathodes
---

## Why Spin-Polarized Electrons?

Many important experiments in nuclear and particle physics require electron beams where the electrons all spin in the same direction. At CEBAF at Jefferson Lab in Newport News, Virginia, spin-polarized electrons are used to probe the internal structure of protons and neutrons, map the distribution of quarks and gluons inside the nucleus, and search for signatures of physics beyond the Standard Model. The degree of beam polarization directly determines the sensitivity of these experiments. A more highly polarized beam means cleaner results with less beam time.

Spin-polarized electron beams are produced by shining a laser on a specially engineered semiconductor called a photocathode, which then emits electrons. The challenge is to make both the spin polarization and the photoemission efficiency (quantum efficiency, or QE) as high as possible simultaneously.

<div class="row justify-content-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/photocathode_stalk.png" class="img-fluid rounded z-depth-1" zoomable=true caption="A GaAs-based strained superlattice photocathode mounted on its stalk for installation in the polarized source." %}
  </div>
</div>

## How Strained Semiconductors Produce Spin-Polarized Electrons

In bulk GaAs, the valence band contains two types of states with different total angular momentum: heavy holes ($m_j = \pm 3/2$) and light holes ($m_j = \pm 1/2$). When a circularly polarized laser excites electrons from the valence band to the conduction band, the heavy-hole and light-hole transitions contribute electrons with opposite spin polarization, partially canceling each other out. In a typical crystal, the theoretical maximum polarization is 50%.

If we apply mechanical strain to the crystal this splits the heavy-hole and light-hole energy bands. If the splitting is large enough, only heavy-hole electrons are excited by the laser, and the photoemitted electrons can reach polarizations approaching 100%. We introduce strain to the photocathode by growing thin layers of GaAs sandwiched between layers of a different semiconductor in a **superlattice** structure. Mismatched lattice constants between the layers create a built-in compressive or tensile stress that splits the bands.

<div class="row justify-content-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/projects/band_splitting.svg" class="img-fluid rounded z-depth-1" zoomable=true caption="Schematic band structure of GaAs without strain (left) and with compressive strain (right). Strain splits the heavy-hole (HH) and light-hole (LH) valence bands, enabling selective excitation and spin polarization approaching 100%." %}
  </div>
</div>

In addition to strain, **quantum confinement** in the thin GaAs quantum wells further enhances the band splitting. When electrons are confined to a layer only a few nanometers thick, their energies are quantized (like a particle in a box), and the confinement energy shifts the heavy-hole and light-hole levels by different amounts, adding to the strain-induced splitting. By carefully engineering both the composition and thickness of each layer, we can maximize the splitting while maintaining good electron transport to the surface.

## Relevant Publications

<span style="display:none">{% cite masters2026 kachwala2025 belfore2023 %}</span>
<div class="publications">
  {% bibliography --cited --group_by none --sort_by year --order descending %}
</div>
