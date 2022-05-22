---
title: "Пациенту"
lang: ru
excerpt: {{ site.description }}
layout: archive
permalink: /ru/patient/
author_profile: true
---

<ul>
  <h1>{{ site.data.translations['posts'][page.lang] }}</h1>
  {% capture written_year %}'None'{% endcapture %}
  {% assign posts = site.posts | where:"lang", page.lang %}
  {% for post in posts %}
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% if year != written_year %}
      {% if written_year != "'None'" %}<br>{% endif %}
      <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
      {% capture written_year %}{{ year }}{% endcapture %}
    {% endif %}
    {% include archive-single.html %}
  {% endfor %}
</ul>
