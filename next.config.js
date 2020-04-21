module.exports = {
  useFileSystemPublicRoutes: false,
  exportTrailingSlash: true,
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
  }
};