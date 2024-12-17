const path = require('path');

module.exports = {
  useFileSystemPublicRoutes: false,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/product': { page: '/product' },
      '/term': { page: '/term' },
      '/policy': { page: '/policy' },
      '/blogs/theresume': { page: '/blogs/theresume' },
      '/blogs/gogaxy': { page: '/blogs/gogaxy' },
      '/blogs/eearth': { page: '/blogs/eearth' },
    };
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
