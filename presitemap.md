---
    layout: null
    sitemap: false
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for page in site.pages %}
     {% if page.sitemap == false %}
        {% continue %}
    {% endif %}
  <url>
    <loc>{{ site.url }}{{ page.url }}</loc>
    {% if page.sitemap.lastmod %}
        <lastmod>{{ page.sitemap.lastmod | date: "%Y-%m-%d" }}</lastmod>
    {% elsif page.last-modified-date %}
        <lastmod>{{ page.last-modified-date | date: "%Y-%m-%d" }}</lastmod>
    {% else %}
        <lastmod>123</lastmod>
    {% endif %}
    {% if page.sitemap.changefreq %}
      <changefreq>{{ page.sitemap.changefreq }}</changefreq>
    {% else %}
      <changefreq>monthly</changefreq>
    {% endif %}
    {% if page.sitemap.priority %}
      <priority>{{ page.sitemap.priority }}</priority>
    {% else %}
      <priority>0.3</priority>
    {% endif %}
  </url>
  {% endfor %}
  {% for post in site.posts %}
     {% if post.sitemap == false %}
        {% continue %}
    {% endif %}
    <url>
      <loc>{{ site.url }}{{ post.url }}</loc>
      {% if post.lastmod == null %}
        <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ post.lastmod | date_to_xmlschema }}</lastmod>
      {% endif %}
      <changefreq>monthly</changefreq>
      <priority>0.5</priority>
    </url>
  {% endfor %}
</urlset>
