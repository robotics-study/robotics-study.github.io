import {defineConfig} from 'vite';


export default defineConfig(({mode}) => {
    return {
        base: '/',
        server: {
            host: true,
            port: 3000
        }
    }
});
