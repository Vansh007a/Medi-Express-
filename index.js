    var stateCity = {
      "Andaman and Nicobar Islands": ["Port Blair"],
"Andhra Pradesh": ["Amaravati", "Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
"Arunachal Pradesh": ["Itanagar", "Naharlagun", "Bomdila", "Tawang"],
"Assam": ["Dispur", "Guwahati", "Jorhat", "Dibrugarh", "Silchar"],
"Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
"Chandigarh": ["Chandigarh"],
"Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
"Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
"Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
"Goa": ["Panaji", "Margao", "Vasco da Gama", "Ponda", "Mapusa"],
"Gujarat": ["Gandhinagar", "Ahmedabad", "Surat", "Vadodara", "Rajkot"],
"Haryana": ["Chandigarh", "Faridabad", "Gurugram", "Hisar", "Rohtak"],
"Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Solan", "Nahan"],
"Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Hazaribagh"],
"Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
"Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
"Ladakh": ["Leh", "Kargil"],
"Lakshadweep": ["Kavaratti"],
"Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
"Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik"],
"Manipur": ["Imphal"],
"Meghalaya": ["Shillong"],
"Mizoram": ["Aizawl"],
"Nagaland": ["Kohima"],
"Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur"],
"Puducherry": ["Puducherry", "Karaikal", "Mahe", "Yanam"],
"Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
"Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
"Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing"],
"Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
"Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
"Tripura": ["Agartala"],
"Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi"],
"Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Haldwani", "Nainital"],
"West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
    }
    function populateCities() {
      var stateSelect = document.getElementById("state");
      var citySelect = document.getElementById("city");
      var selectedState = stateSelect.options[stateSelect.selectedIndex].value;
      while (citySelect.options.length) {
        citySelect.remove(0);
      }
      stateCity[selectedState].forEach(function(city) {
        var newOption = new Option(city, city);
        citySelect.add(newOption);
      });
    }