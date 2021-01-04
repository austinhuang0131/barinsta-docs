// https://github.com/xtensor-stack/xtensor/blob/master/docs/source/_static/goatcounter.js

(function() {
  window.goatcounter = {
    endpoint: 'https://barinsta.goatcounter.com/count',
    path: function(p) {
      if (p.startsWith('/en/latest/?'))
          return '/en/latest'

      return p
    }
  };

  var script = document.createElement('script');
  script.async = 1;
  script.src = '//gc.zgo.at/count.js';
  var ins = document.getElementsByTagName('script')[0];
  ins.parentNode.insertBefore(script, ins)
})();
