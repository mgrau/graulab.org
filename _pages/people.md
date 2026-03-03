---
layout: page
permalink: /people/
title: people
description: Current group members and alumni.
nav: true
nav_order: 2
---

{% assign pi = site.data.people.principal_investigator %}

## Principal Investigator

<div class="row mb-4 align-items-center">
  <div class="col-sm-auto mb-3 mb-sm-0">
    <img src="{{ '/assets/img/' | append: pi.img | relative_url }}" class="img-fluid rounded" style="max-width: 160px;" alt="{{ pi.name }}">
  </div>
  <div class="col">
    <h3 class="mt-0">{{ pi.name }}</h3>
    <p class="mb-1">
      {{ pi.role }}<br>
      {{ pi.department }}<br>
      {{ pi.institution }}<br>
      {{ pi.office }}<br>
      {{ pi.location }}
    </p>
    <p class="mb-0">
      <a href="{{ pi.profile_link | relative_url }}">Profile</a>
      &nbsp;·&nbsp;
      <a href="{{ pi.cv_link | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="CV (opens in new tab)">CV</a>
    </p>
  </div>
</div>

---

## Graduate Students

<div class="people-grid">
{% for person in site.data.people.graduate_students %}
{% include person_card.liquid person=person %}
{% endfor %}
</div>

---

## Undergraduate Students

<div class="people-grid">
{% for person in site.data.people.undergraduate_students %}
{% include person_card.liquid person=person %}
{% endfor %}
</div>

---

## Alumni

| Name | Role | Period |
| ---- | ---- | ------ |

{% for person in site.data.people.alumni -%}
| {{ person.name }} | {{ person.role }} | {{ person.period }} |
{% endfor %}
