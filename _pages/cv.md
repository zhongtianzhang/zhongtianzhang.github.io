---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Biomedical Engineering, Michigan Technological University, 2025
* M.S. in Biomedical Engineering, Michigan Technological University, 2018
* B.S. in Biomedical Engineering, Michigan Technological University, 2016

Work experience
======
* Research Assistant (2018-2025)
  * Michigan Technological University
  * Duties included: Conducted research on catechol-based biomaterials, including polymer synthesis, material characterization, and evaluation of adhesive and antimicrobial properties for biomedical applications
  * Supervisor: Dr. Bruce Lee
  
Skills
======
* Polymer synthesis (PEG, Acrylic monomer, Gelatin, Alginate)
* Organic chemistry (Carbodiimide, Schiff-base, Free radical polymerization)
* Spectroscopy (NMR, UV-vis, HPLC, EPR, Fluorimetry, FTIR, Raman)
* Microscopy (Optical microscope, FESEM with EDS)
* Mechanical tests (Rheometry, Tensile test, Compression test, Adhesion test)
* Cell study (Mammalian cell culture, Live/dead staining, Immunofluorescent assay)
* Antibacterial test (CFU counting, Zone of inhibition assay)
* Statistical analysis

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Awards
======
* Outstanding Scholarship Award, Michigan Technological University, 2022
* Outstanding Teaching Award, Michigan Technological University, 2021
