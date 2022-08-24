import sass from 'sass';
import webpack from 'webpack';

const compiler = webpack({
  mode: 'production',
  entry: {
    'styles': './src/style.scss',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: sass
            }
          }
        ]
      }
    ]
  }
});

compiler.run((err, stats) => {
  if (stats?.hasErrors()) {
    const erroMessage = stats.toString({
      errorDetails: true
    });
    console.error(erroMessage);
    process.exit(1);
  }
});
