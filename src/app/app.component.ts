import {Component} from "@angular/core"

@Component({
	selector:'my-app',
	templateUrl: '/app.component.html'
})
export class AppComponent {
	headline:string = "Angular";
	imgpath: string = 'images/ndtvlogo_blk.png';
	imgpath1 : string = 'https://cdn.ndtv.com/static/ndtv_2014/images/ndtvlogo_blk.png';
	isDisabled : boolean = false;
	firstName: string = "Ankit";
	lastName:string="Rajput";
	badHtml :string ="<script>alert();</script>";
	classToApply : string = 'boldClass';
	applyBoldClass:boolean  = true;
	applyItalicClass : boolean = true;
	addClasses(){
		let classes={
			boldClass : this.applyBoldClass,
			italicClass:this.applyItalicClass
		};
		return classes;
	}
	isBold : boolean = true;
	fontSize : number = 30;
	isItalic:boolean = true;
	
	addStyles(){
		let styles = {
			'font-weight' : this.isBold ? 'bold'  : 'normal',
			'font-size.px' : this.fontSize,
			'font-style'  : this.isItalic ? 'italic':'normal',
		};
		return styles;
	}
	
	onClick():void{
		console.log('Button Clicked');
	}
	
	name : string = "Tom";
	getFullname():string{
		return this.firstName + ' ' + this.lastName;
	}
}