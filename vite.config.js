import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Importamos resolve de 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Establecemos un alias para el directorio de los componentes
      '@components': resolve(__dirname, 'src/components')
    }
  },
  server: {
    // Configuramos el servidor de desarrollo para devolver index.html para todas las rutas desconocidas
    // Esto es necesario para que React Router maneje el enrutamiento del lado del cliente
    historyApiFallback: true
  }
});
