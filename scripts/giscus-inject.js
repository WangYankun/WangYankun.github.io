/* global hexo */
'use strict';

hexo.extend.filter.register('theme_inject', function(injects) {
  const giscusConfig = hexo.theme.config.giscus;
  if (giscusConfig && giscusConfig.enable) {
    // Register giscus as a comment inject
    injects.comment.raw('giscus', `
      <div class="comments giscus-container">
        <script src="https://giscus.app/client.js"
          data-repo="${giscusConfig.repo}"
          data-repo-id="${giscusConfig.repo_id}"
          data-category="${giscusConfig.category}"
          data-category-id="${giscusConfig.category_id}"
          data-mapping="${giscusConfig.mapping}"
          data-strict="${giscusConfig.strict}"
          data-reactions-enabled="${giscusConfig.reactions_enabled}"
          data-emit-metadata="${giscusConfig.emit_metadata}"
          data-input-position="${giscusConfig.input_position}"
          data-theme="preferred_color_scheme"
          data-lang="${giscusConfig.lang}"
          data-loading="${giscusConfig.loading}"
          crossorigin="anonymous"
          async>
        </script>
      </div>
    `, {}, { cache: true });

    // Also set comments.active to giscus so it shows by default
    if (!hexo.theme.config.comments.active) {
      hexo.theme.config.comments.active = 'giscus';
      hexo.theme.config.comments.activeClass = 'giscus';
    }
  }
});
