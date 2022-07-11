---
title: "Book a session"
lang: en
permalink: /book-a-session/
author_profile: true
---

<form class="form scroll-effect" id="bookingForm">
  <input id="first_name" type="text" placeholder="{{ site.data.translations.booking['first_name'][page.lang] }}" required/>
  <input id="last_name" type="text" placeholder="{{ site.data.translations.booking['last_name'][page.lang] }}" required/>

  <input type="email" id="email" placeholder="{{ site.data.translations.booking['email'][page.lang] }}" required />

  <input type="tel" id="telephone" placeholder="{{ site.data.translations.booking['phone'][page.lang] }}" required />

  <textarea id="message" rows="5" maxlength="500" placeholder="{{ site.data.translations.booking['message'][page.lang] }}" required></textarea>

  <div style="display:flex; justify-content:flex-end; width:100%; padding:0;">
    <input type="submit" id="submit" value='{{ site.data.translations.booking["submit"][page.lang] }}'/>
  </div>
</form>

<script type="text/javascript">
  var email_template = '{{ site.data.translations.booking["template"][page.lang] }}';
  var confirmation_text = '{{ site.data.translations.booking["alert"][page.lang] }}'
</script>
<script type="text/javascript" src="/assets/js/emailjs.js"></script>
