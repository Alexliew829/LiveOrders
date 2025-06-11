// next.config.js
module.exports = {
  output: 'standalone',  // 关键配置：解决输出目录问题
  experimental: {
    esmExternals: false  // 禁用ESM警告
  }
}module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' }
        ]
      }
    ]
  }
}
