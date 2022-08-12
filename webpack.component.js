const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const glob = require('glob');

const list = {};

async function makeList(dirPath, list){
    const files = glob.sync(`${dirPath}/**/index.js`);
    files.forEach(item => {
        const component = item.split(/[/.]/)[2];
        list[component] = `./${item}`
    })
    console.log(list, 999)
}

makeList('components/lib', list);

module.exports = {
    mode: 'development',
    entry: list,
    output: {
      filename: '[name].umd.js',  //card.umd.js
      path: path.resolve(__dirname, 'dist'),
      library: 'mui',
      libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
      rules: [
          {
              test: /\.vue$/,
              use: [
                  {
                      loader: 'vue-loader'
                  }
              ]
          }
      ]
    }
};
