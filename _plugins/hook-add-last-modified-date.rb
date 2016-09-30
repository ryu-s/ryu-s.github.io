Jekyll::Hooks.register :site, :pre_render do |site, payload|
#Just before rendering the whole site
    for page in payload['site']['pages']
        modification_time = File.mtime( page.path )
        page.data['last-modified-date'] = modification_time
    end
end
