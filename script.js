var names=new Array();
names[0]="mohan";
names[1]="John";
names[2]="Jenny";
names[3]="jason";
names[4]="parul";
names[5]="prang";
names[6]="paul";
names[7]="jaunilia";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}