const path = require('path');

module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
  ],
  resolver: {
    assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg'],
  },
  transformer: {
    // ...
  },
  watch: {
    // Use chokidar as the file watcher
    useChokidar: true,
  },
};
