function getEmojis(className){
	var f = document.getElementsByClassName(className);
	var s = "\n";
	var a = "";

	//On boucle sur chaque image ayant pour classe 'className'
	for(var i=0;i<f.length;i++){

		//On récupère les liens 
		s+=".\\wget.exe " + String(f[i].getAttribute("src"))+" -O .\\";

		//On récupère le nom des images (alt)
		a = String(f[i].getAttribute("alt"));

		//Si le nom de l'image (alt) commence par ':', elle termine aussi nécessairement par ':', et on enlève les deux
		if (a[0]==':'){
			a = a.substring(1,a.length-1);
		}

		//Si le nom de l'image (alt) contient '~' en avant-dernière position, en retire les deux derniers caractères
		if(a[a.length-2] == '~'){
			a = a.substring(0,a.length-2);
		}

		//On rajoute le nom de l'image (alt) potentiellement modifié par les deux if ci-dessus, et l'extention .png
		s+=a+".png\n";
	}
	console.log(s);
}