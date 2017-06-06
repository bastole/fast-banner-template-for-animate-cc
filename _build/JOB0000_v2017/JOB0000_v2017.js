(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6633CC").s().p("Ag1BQIAAgcIAjAAIAAhTIgjAAIAAgaIAQgBQAGgBAFgCQAGgDADgEQACgFABgGIAiAAIAACDIAhAAIAAAcg");
	this.shape.setTransform(203.9,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6633CC").s().p("AgrAwQgUgRAAgeQAAgdATgRQASgSAfAAQAdAAAPAPQAPAPAAAcIAAANIhYAAQABAOAKAHQAKAIASAAQANAAALgFQAMgEAGgFIAFAAIAAAfQgOAFgLADQgMACgOAAQgjAAgTgQgAAZgOQAAgMgGgGQgFgGgMAAQgLAAgHAFQgHAGgBANIAxAAIAAAAg");
	this.shape_1.setTransform(180.9,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6633CC").s().p("AgSBUIAAinIAlAAIAACng");
	this.shape_2.setTransform(169.9,22.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6633CC").s().p("Ag+BUIAAikIAnAAIAAANQAJgHAJgFQAIgEAMAAQAXAAAMAQQANARAAAdQAAAPgFALQgEAMgIAIQgHAJgKAEQgKAEgLAAQgJAAgHgCQgIgCgHgEIAAAygAgMg0QgGABgFAEIAAA7IAIACIAJABQAOAAAIgJQAHgIAAgSQAAgSgGgIQgGgIgMAAIgLACg");
	this.shape_3.setTransform(158.9,27.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6633CC").s().p("AA8A+IAAg9IgBgNIgCgKQgCgEgEgCQgEgCgHABQgFgBgEACIgMAGIAABUIglAAIAAg9IgBgNQAAgGgCgEQgCgEgEgCQgEgCgHABQgGAAgFABIgKAGIAABUIgnAAIAAh3IAnAAIAAAMQAKgHAJgEQAJgFAMAAQALAAAIAGQAKAEAFALQALgKALgFQALgGALAAQATAAAKAMQALALAAAWIAABOg");
	this.shape_4.setTransform(139.2,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6633CC").s().p("AgvA1QgMgLAAgQQAAgNAGgJQAGgHALgFQAKgEAQgDIAggDIAAAAQAAgLgIgDQgIgEgPAAQgKAAgKADIgQAGIgDAAIAAgeIATgEQAOgBAOAAQAggBAPALQAOAKAAAVIAABSIgmAAIAAgOIgIAHIgIAEQgGAEgFABIgOABQgRAAgLgLgAAFAFIgNAEQgGABgDADQgDAEAAAFIABAHIADAFIAGADIAKAAQAGAAAGgCQAGgCAEgEIAAgZg");
	this.shape_5.setTransform(119.8,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6633CC").s().p("AAaA8IgagkIgaAkIgsAAIAwg8Igvg7IAtAAIAYAjIAagjIAsAAIgvA7IAwA8g");
	this.shape_6.setTransform(105.5,25.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6633CC").s().p("Ag5BQIAAifIBzAAIAAAfIhKAAIAAAcIBEAAIAAAdIhEAAIAAAoIBKAAIAAAfg");
	this.shape_7.setTransform(91,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6633CC").s().p("AgoBSIATgtIgvh2IAqAAIAbBNIAchNIAnAAIhCCjg");
	this.shape_8.setTransform(68.5,27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6633CC").s().p("Ag+BUIAAikIAnAAIAAANQAJgHAJgFQAIgEAMAAQAXAAAMAQQANARAAAdQAAAPgFALQgEAMgIAIQgHAJgKAEQgKAEgLAAQgJAAgHgCQgIgCgHgEIAAAygAgMg0QgGABgFAEIAAA7IAIACIAJABQAOAAAIgJQAHgIAAgSQAAgSgGgIQgGgIgMAAIgLACg");
	this.shape_9.setTransform(54.1,27.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6633CC").s().p("AgwAvQgRgRAAgeQAAgdARgRQASgRAeAAQAgAAARARQARARAAAdQAAAegRARQgRARggAAQgeAAgSgRgAgJgjQgFACgDAEQgEAFgCAHQgCAHAAAKQAAAKACAHQACAIADAEQADAEAGACQAEACAGAAQAFAAAFgCQAEgBAEgFQAEgEABgHQACgGAAgMQAAgJgCgIQgCgHgDgEQgDgFgFgBQgFgCgGAAQgFAAgEABg");
	this.shape_10.setTransform(38.5,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6633CC").s().p("AgTBOQgQgGgKgKQgLgKgGgQQgGgPAAgVQAAgSAGgQQAFgPALgLQAKgLAQgFQAPgGASAAIASABIAPADIANAFIAKAEIAAAnIgFAAIgHgGIgLgHIgMgGQgHgCgIAAQgJAAgIADQgGACgHAHQgGAGgEAKQgEAKAAANQAAAPAEAKQAEALAHAFQAGAGAHADQAIACAIAAQAIAAAHgCIAOgGIAJgHIAIgGIAEAAIAAAnIgLAEIgMAFIgPADIgTABQgQAAgPgFg");
	this.shape_11.setTransform(23,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(13,7,200.5,30.7), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABfBeQgLgLAAgSQAAgTALgKQALgMASAAQATAAALAMQALAKAAATQAAASgLALQgLALgTAAQgSAAgLgLgAB1AoQgDACgDADIgEAIQgCAFAAAHQAAAHACAFQABAFADADQADADADACQADABAEAAQAEAAAEgBQADgCADgEQADgDABgFQACgEAAgHQAAgHgCgFIgEgIQgDgDgDgCQgEgBgEAAIgHABgAAJBfQgLgLAAgTQAAgSALgLQALgMAVAAQAHAAAHACQAHABAJAEIAAASIgDAAIgJgGIgHgDIgJgBQgFAAgFABQgEACgDAEQgEACgCAGQgCAEAAAHQAAANAHAGQAHAHANAAIAFAAIAAgQIgPAAIAAgOIAkAAIAAAnIgOADQgIACgJAAQgUABgLgLgAhSBeQgLgLAAgSQAAgTALgKQALgMATAAQASAAALAMQALAKAAATQAAASgLALQgLALgSAAQgTAAgLgLgAg8AoIgGAFIgEAIQgCAFAAAHQAAAHACAFIAEAIQADADADACQAEABAEAAQAEAAADgBQADgCADgEQADgDABgFQACgEAAgHQAAgHgCgFQgBgFgDgDQgDgDgDgCIgHgBQgEAAgEABgAicBoIAAhOIAUAAIAAA/IAkAAIAAAPgAgBgZQgHgCgHgDIAAgTIADAAQAGAFAHADQAHADAHAAIAFgBIAFgBIAEgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQgCgCgEgBIgJgCIgKgDQgIgDgFgGQgEgFAAgIQAAgLAKgGQAIgIAQAAIAPACIANAEIAAASIgCAAQgFgEgHgCQgHgDgHAAIgFAAIgEACIgEACIgBADQAAAEACACQACABAHABIARAFQAIACAFAGQAEAFAAAHQAAAMgKAHQgJAHgRAAQgKAAgGgBgABRgZIAAg/IgYAAIAAgPIBFAAIAAAPIgZAAIAAA/gAhTgZIAAhOIA4AAIAAAPIgkAAIAAANIAhAAIAAAPIghAAIAAAUIAkAAIAAAPgAiMgZIAAg/IgYAAIAAgPIBFAAIAAAPIgZAAIAAA/g");
	this.shape.setTransform(16.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,33,21.1), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AgtAaIA/gaIg/gZIAAgUIBbAmIAAAPIhbAmg");
	this.shape.setTransform(114.3,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AAOAnIAAgmIgBgIIgBgHIgEgDIgHgBIgGABIgIADIAAA1IgZAAIAAhLIAZAAIAAAIQAHgFAGgCQAFgDAHAAQAMgBAIAIQAGAHABAPIAAAwg");
	this.shape_1.setTransform(93.7,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AgeAeQgLgLAAgTQAAgSALgLQALgLATAAQAUAAALALQALALAAASQAAATgLALQgLALgUAAQgTAAgLgLgAgFgWQgDABgDADQgCADgBAEQgCAFABAGIAAALQACAFACACQADADACABIAHABIAFgBQADgBADgCIADgHIACgMIgCgKIgDgIQgCgCgEgCIgGgBIgFABg");
	this.shape_2.setTransform(83.9,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgLAsQgHgFAAgOIAAgjIgKAAIAAgRIAKAAIAAgWIAYAAIAAAWIAXAAIAAARIgXAAIAAAaIAAAGIABAGIADAEQADACAFAAIAFgBIAEgCIACAAIAAARIgIABIgLABQgOAAgHgGg");
	this.shape_3.setTransform(75.9,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgLAsQgHgFAAgOIAAgjIgKAAIAAgRIAKAAIAAgWIAYAAIAAAWIAXAAIAAARIgXAAIAAAaIAAAGIABAGIADAEQADACAFAAIAFgBIAEgCIACAAIAAARIgIABIgLABQgOAAgHgGg");
	this.shape_4.setTransform(69.6,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AgfAhQgGgIgBgPIAAgwIAZAAIAAAmIAAAIIACAHQACADADAAIAGABIAGgBQAFAAADgDIAAg1IAZAAIAABLIgZAAIAAgIIgMAIQgFADgIAAQgNgBgHgGg");
	this.shape_5.setTransform(61.4,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgFA0QgFgBgEgCIgBADIgYAAIAAhpIAZAAIAAAmQAGgFAFgCQAGgDAHAAQAPgBAHALQAIALAAARQAAASgKALQgKAMgPAAQgFAAgFgCgAgHgFIgHACIAAAmIAFABIAFABQAKAAAEgGQAFgGAAgMQAAgKgDgEQgEgGgIABIgHABg");
	this.shape_6.setTransform(51.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AAaAzIgHgUIglAAIgHAUIgbAAIAmhlIAdAAIAmBlgAAMAMIgMgkIgMAkIAYAAg");
	this.shape_7.setTransform(36.5,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgMAzIAAhRIggAAIAAgUIBZAAIAAAUIggAAIAABRg");
	this.shape_8.setTransform(26.4,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AgMAyQgKgEgGgGQgIgHgDgKQgEgKAAgNQAAgLADgJQAFgLAGgGQAHgIAJgDQAKgEALAAIALABIAKACIAIADIAHACIAAAaIgDAAIgFgEIgHgFIgIgDQgEgCgFAAQgGAAgFACQgEACgEADQgDAFgDAFQgCAHgBAIQABAKACAGQACAGAFAEQAEAEAEACQAFACAFAAQAFgBAEgBIAJgEIAGgEIAGgEIACAAIAAAYIgIADIgHADIgJACIgMABQgLAAgJgDg");
	this.shape_9.setTransform(16.6,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// white
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqYCWIAAkrIUxAAIAAErg");
	this.shape_10.setTransform(66.5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,133,30), null);


(lib.bg_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_white, new cjs.Rectangle(0,0,300,250), null);


(lib.bg_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg.jpg
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_ani, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.JOB0000_v2017 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:1});

	// timeline functions:
	this.frame_0 = function() {
		this.pauseFor = function(mc,i){
			mc.stop();
			console.log("Paused : "+i.toString()+"s. ");
			var t=setTimeout(function(){
				mc.play();
			}, i*1000);
			
		}
		
		this.loop = 1;
	}
	this.frame_20 = function() {
		this.pauseFor(this,0.4);
	}
	this.frame_31 = function() {
		this.pauseFor(this,2.5);
	}
	this.frame_48 = function() {
		this.pauseFor(this,7);
	}
	this.frame_54 = function() {
		if(this.loop >= 2) this.stop();
		else {
			this.loop++;
			this.gotoAndPlay("loop");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(11).call(this.frame_31).wait(17).call(this.frame_48).wait(6).call(this.frame_54).wait(5));

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDgA3RTYMAujAAAMAAAgmvMgujAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(59));

	// bg_white
	this.instance = new lib.bg_white();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({alpha:0},11).to({_off:true},1).wait(45));

	// cta
	this.cta = new lib.cta();
	this.cta.parent = this;
	this.cta.setTransform(-120,207);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(36).to({_off:false},0).to({x:15},9,cjs.Ease.get(1)).wait(14));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({alpha:1},9).wait(29));

	// logo
	this.logo = new lib.logo();
	this.logo.parent = this;
	this.logo.setTransform(260,218);
	this.logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(2).to({_off:false},0).wait(57));

	// bg1
	this.instance_2 = new lib.bg_ani();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"./bg.jpg", id:"bg"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;