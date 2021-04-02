const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !==  'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
		// Diz qual o arquivo principal da aplicação "entry: "src/index.jsx"
    entry: path.resolve(__dirname, 'src', 'index.js'),
		// informa qual arquivo será gerado com o webpack, 
		// que é o bundle na pasta dist
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
		// diz ṕara o web pack que tipos extensão de arquivos ele pode ler
    resolve: {
        extensions: ['.js'],
    },
		// informa ao webpack quando houve alteração em nossa API 
		devServer: {
        contentBase: path.resolve(__dirname, 'public')
    },
    // adicionar plugin ao webpack
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html' )
      })
    ],
		// informa como a aplicação vai ser comportar quanto importar arquivos
    module: {
        rules: [
            {
								// expressão regular que informa se o o arquivo é JS ou não
                test: /\.js$/,
								// excluir os arquivos do node_modules, 
								// pois os mesmo ja vem prontos para serem lidos
                exclude: /node_modules/,
								// 
                use: 'babel-loader'
            },
            // Config css e sass
            {
              test: /\.scss$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader', 'sass-loader']
            },
            //Config file-loader
            // {
            //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //   loader: 'file-loader',
            //   options: {
            //     outputPath: path.resolve(__dirname, 'src', 'styles', 'images'),
            //   }
            // },

            {
              test: /\.(png|jpe?g|gif)$/i,
              use:[
                {
                  loader: 'file-loader',
                }
              ]
            },
      
        ],
    }
}