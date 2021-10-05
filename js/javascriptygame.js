	"Strict Mode"
	let wrong = 0;	
	let left = 0;
	var already = [];
	let img = ["angle.png", "angle_rope.png", "angle_head.png", "angle_man.png", "angle_dead.png"]
	let index = Math.floor((Math.random()*(17-0+1)))+0;
	const country =["China", "India", "Niger", "American Samoa","Canada", "Saudi Arabia", "Greenland", "Maldives", "Suriname","Russia", "Singapore", "Bulgaria", "Falkland Island", "USA", "Bhutan","France", "Canada", "Guam"]
	const questions = ["Largest population in the world.", "Most Number Of International Cricket Stadiums.", "World's Youngest Population.", "Most Overweight Population", "Country With Most Lakes", "Land With No Rivers", "Least Densely Populated Country", "Most Likely To Have Lowest Elevation.", "The Country Mostly Covered With Forest.", "Most Number Of Battle Tanks", "Largest Country With No Farms","Fastest-Shrinking Country", "Has 153 Sheep For Every Person", "Most People Behind Bars", "Highest Domestic Happiness", "Covers The Most Time Zones", "Most Educated Country", "Roads Made Of Coral"]
	let answer = "";
<!-- https://www.indiatimes.com/trending/social-relevance/21-interesting-facts-about-countries-519541.html?picid=1990506 -->

            function lbl(n){
                var i =0;
                for(i=0; i<n; i++){
                    document.getElementById("lbl").innerHTML += "<label class='lbl_key' id='"+i+"' style='text-indent: 1em'>_</label> ";
                
                }
            };
	function win(){
		if (wrong == 5){
			alert("You Loose");	
		}
		if (left == 0){
			alert("Yoy Win");
		}
	};
	function display(val, idx){
		var ans = answer.toUpperCase();
		var i = 0;
		for(i=0; i<idx.length; i++){
			document.getElementById(idx[i]).innerHTML = val;
		}

	};		
	function check(val){
		var i = 0;
		var idx = [];
		var ans = answer.toUpperCase();
		for(i=0;i<ans.length; i++){
			if (val == ans[i]){
				idx.push(i);
			}	
		}
		return idx;
	};
	function start(){
		let question = questions[index];
		document.getElementById("question").innerHTML = "Country name <br>"+question;
		let answer_length = country[index];
		answer = country[index];
		lbl(answer_length.length);
		left =  answer_length.length;
		document.getElementById("wlen").innerHTML = answer_length.length;
	};

	function clicks(val){
		var idx = check(val)
	
		if(already.indexOf(val) == -1){
		if (idx.length ==  0){
			wrong +=  1;
			document.getElementById("wwrong").innerHTML = wrong; 
			im = img[wrong-1];
			document.getElementById("man").setAttribute("style", "background-image: url(" + img[wrong-1] + ");background-repeat: no-repeat;background-size: 310px 300px");; 		
			already.push(val);
			display(val, idx);
			
		}
		else{
			left -= idx.length;
			document.getElementById("wleft").innerHTML = left;
	                already.push(val);
			display(val, idx);

		}
		win();
		}
		else{
			alert("You already select this alphabet");
			}
		
		
	};