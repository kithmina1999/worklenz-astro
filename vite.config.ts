export default {
    build: {
      minify: true,
      target: 'es2020',
      chunkSizeWarningLimit: 500, // Keep chunks small
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    }
  }
  