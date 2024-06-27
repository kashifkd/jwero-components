import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'JweroComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `jwero-components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/material'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
          '@mui/material': 'muiMaterial'
        }
      }
    }
  }
});
