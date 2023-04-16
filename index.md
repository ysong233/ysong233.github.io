---
layout: default
---

{% for post in site.posts %}

  <div class="post-preview">
    <a href="{{ post.url | relative_url }}">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.date | date: "%B %-d, %Y" }}</h3>
    </a>
  </div>
{% endfor %}
