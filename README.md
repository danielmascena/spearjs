# spearjs

<query>
	<status>success</status>
	<country>United States</country>
	<countryCode>US</countryCode>
	<region>VA</region>
	<regionName>Virginia</regionName>
	<city>Ashburn</city>
	<zip>20149</zip>
	<lat>39.0438</lat>
	<lon>-77.4874</lon>
	<timezone>America/New_York</timezone>
	<isp>Amazon Technologies Inc.</isp>
	<org>Amazon Data Services NoVa</org>
	<as>AS14618 Amazon.com, Inc.</as>
	<query>3.88.25.171</query>
</query>

(function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://ip-api.com/xml/", true);
    	xhr.onreadystatechange = function() {
        	if(xhr.readyState == 4 && xhr.status == 200) {
  	        	var geo = xhr.responseXML;
			var g = geo.getElementsByTagName("query")[0];
			console.log("IP:", g.getElementsByTagName("query")[0].textContent);
			console.log("City:", g.getElementsByTagName("city")[0].textContent);
			console.log("Country:", g.getElementsByTagName("country")[0].textContent);
		}
	}
	xhr.send();
})();

IP: 52.71.177.219
City: Ashburn
Country: United States
