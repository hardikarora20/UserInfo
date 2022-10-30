window.onload = function(){
fetch('https://api.ipregistry.co/?key=pi0gwgtuajzmsz4h')
  .then(response => response.json())
  .then(json => {
    document.getElementById("flag").style.background="url("+json.location.country.flag.emojitwo+")";
    document.getElementById("carrier").innerHTML=json.carrier.name;
    document.getElementById("provider").innerHTML=json.company.name;
    document.getElementById("continent").innerHTML=json.location.continent.name;
    document.getElementById("country").innerHTML=json.location.country.name;
    document.getElementById("region").innerHTML=json.location.region.name;
    document.getElementById("city").innerHTML=json.location.city;
    document.getElementById("currency").innerHTML=json.currency.name+" ("+json.currency.symbol+")";
    document.getElementById("timezone").innerHTML=json.time_zone.name+" ("+json.time_zone.id+")";
    document.getElementById("time").innerHTML=json.time_zone.current_time;
    document.getElementById("vpn").innerHTML=json.security.is_vpn;
    document.getElementById("brand").innerHTML=json.user_agent.device.brand;
    document.getElementById("type").innerHTML=json.user_agent.type;
    document.getElementById("os").innerHTML=json.user_agent.os.name;
    document.getElementById("version").innerHTML=json.user_agent.version;

    document.getElementById("gmap_canvas").setAttribute("src","https://maps.google.com/maps?q="+json.location.latitude+","+json.location.longitude+"&t=&z=11&ie=UTF8&iwloc=&output=embed");
     console.log(json)
     console.log(json.ip)
     console.log(json.carrier.name)
     console.log(json.company.name)
     console.log(json.location.continent.name)
     console.log(json.location.country.flag.wikimedia)
     console.log(json.location.country.name)
     console.log(json.location.region.name)
     console.log(json.location.city)
     console.log(json.currency.name+" ("+json.currency.symbol+")")
     console.log(json.location.latitude+" "+json.location.longitude)
     console.log(json.time_zone.name)
     console.log(json.time_zone.current_time)
     console.log(json.time_zone.id)
     console.log(json.security.is_vpn)
     console.log(json.user_agent.device.brand)
     console.log(json.user_agent.type)
     console.log(json.user_agent.os.name)
     console.log(json.user_agent.version)
    }
//   .then(data => {
//     console.log(JSON.stringify(data, null, 2))
  );
}