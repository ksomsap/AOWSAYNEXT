module.exports = {
  useFileSystemPublicRoutes: false,
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blogs/theresume': { page: '/blogs/theresume' },
      '/blogs/gogaxy': { page: '/blogs/gogaxy' },
    };
  }
};