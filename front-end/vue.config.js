module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080'
      }
    }
  },
  //웹팩에 새로운 진입접을 만들어서 모든 서드 파티 스타일을 하나의 .css로 묶는다.
  configureWebpack: {
	  entry: {
		  app:'./src/main.js',
		  style:[
			  'bootstrap/dist/css/bootstrap.min.css'
		  ]
	  }
  }
}
