// Found on https://noam.hashnode.dev/using-vite-to-serve-and-hot-reload-react-app-express-api-together
// Simple way to host node backend and react dev server both on vite, without any fuckery with concurrent
// Literally all it takes is this plugin file in the project root, a change to the specified line in vite.config.js,
//  and the noted code block at the bottom of index.js in src/server

const express = (path) => {
  return{
    name: "vite3-plugin-express",
    configureServer: async (server) => {
      server.middlewares.use(async (req, res, next) => {
        process.env["VITE"] = "true";
        try{
          const {app} = await server.ssrLoadModule(path);
          app(req, res, next);
        }catch(err){
          console.error(err);
        }
      })
    }
  }
}

export default express;