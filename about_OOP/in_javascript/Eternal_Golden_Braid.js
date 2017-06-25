class EGB {
	constructor(a_number){
		this.root = a_number;
		this.left = this.root -7;
		this.right = this.root + 5;
	}
}
var that_completes_the_circle = function(an_egb_attribute){
var the_circle = [];

for (var a_number = an_egb_attribute; a_number<168; a_number++){

the_circle.push(a_number, an_egb_attribute);
if(a_number%2==0){an_egb_attribute += 5;}
else{an_egb_attribute -= 7;}
}
return the_circle
}


geb = new EGB(0);
console.log(geb.root,geb.left,geb.right);
console.log(that_completes_the_circle(geb.root));

