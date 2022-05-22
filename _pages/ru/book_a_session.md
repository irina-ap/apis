---
title: "Забронировать сессию"
lang: ru
permalink: /ru/book-a-session/
author_profile: true
---

<form class="form scroll-effect" id="bookingForm">
  <label for="name">{{ site.data.translations.booking["name"][page.lang] }}</label>
  <input id="first_name" type="text" placeholder="{{ site.data.translations.booking['first_name'][page.lang] }}" required/>
  <input id="last_name" type="text" placeholder="{{ site.data.translations.booking['last_name'][page.lang] }}" required/>

  <label for="email">{{ site.data.translations.booking["email"][page.lang] }}</label>
  <input type="email" id="email" required />

  <label for="phone">{{ site.data.translations.booking["phone"][page.lang] }}</label>
  <input type="tel" id="phone" required />

  <label for="message">{{ site.data.translations.booking["message"][page.lang] }}</label>
  <textarea id="message" rows="5" maxlength="500" required></textarea>

  <input type="submit" id="submit" value='{{ site.data.translations.booking["submit"][page.lang] }}'/>
</form>

<script type="text/javascript">
  var email_template = '{{ site.data.translations.booking["template"][page.lang] }}';
  var confirmation_text = '{{ site.data.translations.booking["alert"][page.lang] }}'
</script>
<script type="text/javascript" src="/assets/js/emailjs.js"></script>
