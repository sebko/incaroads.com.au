module Jekyll

  class ArtistPage < Page
    def initialize(site, base, dir, artist)
      @site = site
      @base = base
      @dir = dir
      @name = artist['link'] + '.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'artist.html')

      self.data['title'] = artist['name']
      self.data['bio'] = artist['bio']
      self.data['bio2'] = artist['bio2']
      self.data['image'] = artist['image']
      self.data['soundcloud'] = artist['soundcloud']
      self.data['facebook'] = artist['facebook']
    end
  end

  class ArtistPageGenerator < Generator
    safe true

    def generate(site)
      dir = 'artists'
      site.data['artists'].each do |artist|
        site.pages << ArtistPage.new(site, site.source, dir, artist)
      end
    end
  end

end
