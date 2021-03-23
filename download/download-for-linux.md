---
layout: page
scrolljs: true
---
# Our game in Linux 

{% for dl in site.download_platforms %}
{% if dl.platform == "Linux" %}
{{dl.content}}
{% endif %}
{% endfor %}

Check out the game for other platforms by clicking this [link]({{site.baseurl}}/download/download-options)
