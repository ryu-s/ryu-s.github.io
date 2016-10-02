require 'fileutils'
Jekyll::Hooks.register :site, :pre_render do |site, payload|
#Just before rendering the whole site
    for page in payload['site']['pages']
        modification_time = File.mtime( page.path )
        page.data['last-modified-date'] = modification_time
    end
end
Jekyll::Hooks.register :site, :post_write do |site, payload|
#Just before rendering the whole site
    FileUtils.cp('K:/Programming/workspace/ryu-s.github.io/_site/sitemap.xml','K:/Programming/workspace/ryu-s.github.io/sitemap.xml')
end
