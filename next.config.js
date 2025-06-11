module.exports = {
  output: 'standalone', // 修复Vercel输出目录问题
  experimental: {
    esmExternals: false // 强制禁用ESM警告
  }
}
