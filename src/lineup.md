---
layout: page
title: Lineup
---

<div class="section first lineup">
    <h2 class="headline">Lineup</h2>
    <div id="masonry" class="row">    
      <ul>
      {% for artist in site.data.artists %}
        <li class="item">
          <a href="/artists/{{ artist.link }}/">
            <div class="place-image">
              <img src="/assets/images/lineup/{{artist.image}}" alt="{{artist.name}}">
              <h2>{{artist.name}}</h2>
              <div class="overlay"></div>
            </div>
          </a>
        </li>
      {% endfor %}
      </ul>
    </div>
</div>
