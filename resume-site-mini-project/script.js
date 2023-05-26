

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        params = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!params.hasOwnProperty(n)) params[n] = [];
        params[n].push(nv.length === 2 ? v : null);
    }

   
    let displayString = '';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        displayString += key + ': ';
    
        if (Array.isArray(params[key])) {
          const values = params[key].join(', ');
          displayString += values;
        } else {
          displayString += params[key];
        }
    
        displayString += '<br>';
      }
    }
    
    document.getElementById('displayDetails').innerHTML = displayString;



document.getElementById('displayDetails').innerHTML = displayString;


     
}
const URL = document.URL;

parseURLParams(URL);
