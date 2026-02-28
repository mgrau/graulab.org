---
layout: page
permalink: /mgrau/
title: About Me
nav: false
---

<div class="row mb-4 align-items-start">
  <div class="col-sm-auto mb-3 mb-sm-0 text-center">
    <img src="{{ '/assets/img/mgrau.jpg' | relative_url }}" class="img-fluid rounded" style="max-width: 200px;" alt="Matt Grau">
  </div>
  <div class="col">
    <h3 class="mt-0">Matt Grau</h3>
    <p class="mb-1">
      Assistant Professor<br>
      <a href="https://www.odu.edu/physics" target="_blank">Department of Physics</a><br>
      Old Dominion University<br>
      Room 2100K, Oceanography &amp; Physical Sciences<br>
      Norfolk, VA 23529<br>
      (757) 683-5827<br>
      <a href="mailto:mgrau@odu.edu">mgrau@odu.edu</a>
    </p>
    <div class="mt-1" style="font-size: 1.6rem; line-height: 1;">
      <a href="https://scholar.google.com/citations?user=lnh9kdIAAAAJ" target="_blank" title="Google Scholar" class="mr-3"><i class="ai ai-google-scholar"></i></a>
      <a href="https://orcid.org/0000-0002-2684-6923" target="_blank" title="ORCID" class="mr-3"><i class="ai ai-orcid"></i></a>
      <a href="https://inspirehep.net/authors/1904640" target="_blank" title="INSPIRE" class="mr-3"><i class="ai ai-inspire"></i></a>
      <a href="https://github.com/mgrau" target="_blank" title="GitHub" class="mr-3"><i class="fab fa-github"></i></a>
      <a href="{{ '/assets/pdf/grau-cv.pdf' | relative_url }}" target="_blank" title="Curriculum Vitae" class="mr-3" style="font-size: 1.3rem;"><i class="ai ai-cv"></i></a>
    </div>
  </div>
</div>

---

## Research Interests

My group works in experimental atomic physics, using trapped ions as a precision tool for quantum information and fundamental physics. I have several research interests:

- **Ba⁺ quantum information** — using trapped barium ions for quantum computation and simulation
- **Hybrid qubit-qumode computing** — theoretical and experimental exploration of trapped-ion platforms combining discrete (qubit) and continuous-variable (qumode) degrees of freedom for simulating quantum field theories
- **Nuclear CP violation** — precision spectroscopy of heavy molecular ions to search for CP-violating nuclear magnetic quadrupole moments and the electron electric dipole moment
- **Spin-polarized photocathodes** — developing high-performance semiconductor electron sources for particle accelerators, in collaboration with ODU ECE and Jefferson Lab

See the [Research](/research/) page for more detail.

---

## Education

| Year | Degree         | Institution                        |
| ---- | -------------- | ---------------------------------- |
| 2016 | Ph.D., Physics | University of Colorado Boulder     |
| 2012 | M.S., Physics  | University of Colorado Boulder     |
| 2009 | B.S., Physics  | California Institute of Technology |

_Ph.D. Thesis: ["Measuring the electron electric dipole moment with trapped molecular ions"](https://jila.colorado.edu/bibcite/reference/3828)_

---

## Academic Appointments

| Years          | Position                         | Institution                          |
| -------------- | -------------------------------- | ------------------------------------ |
| 2021 – present | Assistant Professor              | Old Dominion University, Norfolk, VA |
| 2020 – 2021    | Senior Scientist (Oberassistent) | ETH Zürich, Switzerland              |
| 2016 – 2019    | Postdoctoral Research Associate  | ETH Zürich, Switzerland              |
| 2009 – 2016    | Graduate Research Assistant      | JILA, University of Colorado Boulder |

---

## Awards and Honors

- 2025 — ODU SCHEV Outstanding Faculty Award "Rising Star" Nominee
- 2024 — Tenure Track Faculty Distinguished Teaching Award, ODU College of Sciences

---

## Calendar

<!-- FullCalendar: Mon–Fri, 8am–5pm week view -->
<!-- To activate: replace YOUR_GOOGLE_CALENDAR_API_KEY below with a key from -->
<!-- Google Cloud Console → APIs & Services → Credentials (Google Calendar API must be enabled) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.css">
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.15/index.global.min.js"></script>

<style>
  #fc-calendar {
    --fc-button-bg-color: #0096c7;
    --fc-button-border-color: #0096c7;
    --fc-button-hover-bg-color: #007ba8;
    --fc-button-hover-border-color: #007ba8;
    --fc-button-active-bg-color: #007ba8;
    --fc-today-bg-color: rgba(0, 150, 199, 0.08);
    --fc-now-indicator-color: #0096c7;
    font-size: 0.85rem;
  }
  #fc-calendar .fc-event { cursor: pointer; }
</style>

<!-- Event detail modal -->
<div class="modal fade" id="fc-event-modal" tabindex="-1" role="dialog" aria-labelledby="fc-modal-title" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="fc-modal-title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="fc-modal-body"></div>
    </div>
  </div>
</div>

<div id="fc-calendar" class="mt-3 mb-1"></div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('fc-calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      weekends: false,
      timeZone: 'America/New_York',
      slotMinTime: '08:00:00',
      slotMaxTime: '17:30:00',
      allDaySlot: true,
      nowIndicator: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      googleCalendarApiKey: 'AIzaSyDOstcOUu0RbbdKRLjCvI93VWjtAY8Ewr4',
      events: {
        googleCalendarId: '540c011986eedd9e30a54bc19a33df3866268e46ba2682b39d34d28e2b1dff89@group.calendar.google.com'
      },
      height: 'auto',
      eventDidMount: function(info) {
        var title = (info.event.title || '').toLowerCase();
        var color;
        if (/class|lecture|phys\s*\d|teaching/.test(title)) {
          color = '#2a9d8f';
        } else if (/office hours?/.test(title)) {
          color = '#e9a820';
        } else if (/colloquium|seminar|talk|symposium/.test(title)) {
          color = '#7209b7';
        } else if (/meeting|committee/.test(title)) {
          color = '#457b9d';
        } else if (/travel|away|out of office/.test(title)) {
          color = '#e76f51';
        } else {
          color = '#0096c7';
        }
        info.el.style.backgroundColor = color;
        info.el.style.borderColor = color;
      },
      eventClick: function(info) {
        info.jsEvent.preventDefault();
        var ev = info.event;
        var props = ev.extendedProps;

        document.getElementById('fc-modal-title').textContent = ev.title || '(Private event)';

        var tz = 'America/New_York';
        var dateOpts = { weekday: 'long', month: 'long', day: 'numeric', timeZone: tz };
        var timeOpts = { hour: 'numeric', minute: '2-digit', timeZone: tz };
        var lines = [];

        if (ev.start) {
          var dateStr = ev.start.toLocaleDateString('en-US', dateOpts);
          if (ev.allDay) {
            lines.push('<strong>When:</strong> ' + dateStr + ' (all day)');
          } else {
            var startStr = ev.start.toLocaleTimeString('en-US', timeOpts);
            var endStr   = ev.end ? ev.end.toLocaleTimeString('en-US', timeOpts) : '';
            lines.push('<strong>When:</strong> ' + dateStr + ', ' + startStr + (endStr ? '–' + endStr : ''));
          }
        }
        if (props.location) {
          lines.push('<strong>Where:</strong> ' + props.location);
        }
        if (props.description) {
          lines.push('<strong>Details:</strong> ' + props.description);
        }
        if (ev.url) {
          lines.push('<a href="' + ev.url + '" target="_blank" rel="noopener">View in Google Calendar</a>');
        }

        document.getElementById('fc-modal-body').innerHTML =
          lines.map(function(l) { return '<p class="mb-1">' + l + '</p>'; }).join('');

        $('#fc-event-modal').modal('show');
      }
    });
    calendar.render();
  });
</script>

<p class="text-muted small mt-1"><a href="https://calendar.google.com/calendar/u/0?cid=NTQwYzAxMTk4NmVlZGQ5ZTMwYTU0YmMxOWEzM2RmMzg2NjI2OGU0NmJhMjY4MmIzOWQzNGQyOGUyYjFkZmY4OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t" target="_blank">Open in Google Calendar</a></p>
