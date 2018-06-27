(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_collapsed = function() {
	this.initialize(img.bg_collapsed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,50);


(lib.bg_expanded = function() {
	this.initialize(img.bg_expanded);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,500);// helper functions:

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


(lib.fade_collapsed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhOHAD6IAAnzMCcPAAAIAAHzg");
	this.shape.setTransform(500,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fade_collapsed, new cjs.Rectangle(0,0,1000,50), null);


// stage content:
(lib.JOB0000_expand_1000x50to500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{collapsed:1,"collapsed idle":14,expanded:25});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(2).call(this.frame_14).wait(32).call(this.frame_46).wait(3));

	// BORDER
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhOHAD6IAAnzMCcPAAAIAAHzgEhN9ADwMCb7AAAIAAnfMib7AAAg");
	this.shape.setTransform(500,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},25).wait(24));

	// text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("AgVAvQgNgLAAgWQAAgWAOgLQAHgGALAAQANAAAGAHIAAgiIASAAIAABnIgQAAIgBgIQgGAKgOAAQgLAAgIgGgAgLgEQgEAFAAAMQAAANAEAGQAFAGAGAAQASAAAAgZQAAgXgSAAQgGAAgFAGg");
	this.shape_1.setTransform(731.3,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AAOAnIAAgtQAAgPgMAAQgIAAgFAKQgCAFAAAOIAAAfIgSAAIAAhLIAPAAIABAKQAHgMAPAAQALAAAHAIQAHAHAAAMIAAAyg");
	this.shape_2.setTransform(723.2,26.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AgcAgQgHgGAAgKQAAgKAHgGQAHgGALgBIAWgBIAAgFQAAgMgMAAQgOAAAAALIgRAAQAAgMAJgHQAJgGANAAQAVAAAGAQQACAFAAAKIAAAbQAAAFAEAAIADAAIAAANQgFACgEAAQgGAAgEgDQgDgDAAgFQgDAFgGADQgFAEgIAAQgNAAgHgIgAgGAGQgFAAgDADQgEACAAAFQAAAEAEACQADADAFAAQAHAAAFgEQAGgFAAgIIAAgEg");
	this.shape_3.setTransform(715,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("AgiA1IAAhnIAQAAIABAIQAHgKANAAQALAAAHAGQAOALAAAWQAAAVgOAMQgHAGgLAAQgNAAgGgHIAAAigAgRgNQABAYAQAAQAHAAAEgHQAGgEAAgNQAAgMgGgGQgEgGgHAAQgQAAgBAYg");
	this.shape_4.setTransform(706.9,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AARAmIgRgZIgQAZIgTAAIAagmIgbglIAVAAIAQAZIARgZIATAAIgaAlIAaAmg");
	this.shape_5.setTransform(698.7,26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AgWAeQgMgLAAgTQAAgSALgLQAJgKAOAAQASAAAKAOQAHALgBAPIAAAFIgxAAQgBAJAGAFQAFAFAFAAQAIAAADgDQADgDABgEIARAAQAAAHgGAHQgJALgRAAQgNAAgJgKgAAQgGQAAgJgFgFQgEgEgHAAQgHAAgFAGQgDAEgBAIIAgAAIAAAAg");
	this.shape_6.setTransform(691.2,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AgaAcQgIgLAAgRQAAgQAIgLQAKgMAQAAQARAAAJAMQAJALAAAQQAAARgJALQgJAMgRAAQgQAAgKgMgAgLgSQgFAGAAAMQAAANAFAGQAFAFAGAAQAHAAAEgFQAGgGAAgNQAAgMgGgGQgEgFgHAAQgGAAgFAFg");
	this.shape_7.setTransform(680.1,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("AgLAbIAAglIgOAAIAAgPIAOAAIAAgTIARgFIAAAYIATAAIAAAPIgTAAIAAAjQAAAJAIAAIAMgBIAAAPQgIACgHAAQgWAAAAgXg");
	this.shape_8.setTransform(673.1,25.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("AAPA0IgUghIgMANIAAAUIgSAAIAAhnIASAAIAAA6IAcgdIAWAAIgbAcIAeAug");
	this.shape_9.setTransform(663.9,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AgYAbQgIgKAAgRQAAgQAIgLQAKgLAPAAQARAAAJALQAGAIAAAJIgSAAQAAgDgCgEQgEgGgIAAQgGAAgDAFQgGAGAAAMQAAANAGAGQAEAFAFAAQAIAAAEgGQACgDAAgEIASAAQAAAKgGAGQgJAMgRAAQgPAAgKgMg");
	this.shape_10.setTransform(655.5,26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AgIA0IAAhKIASAAIAABKgAgIghIAAgSIASAAIAAASg");
	this.shape_11.setTransform(649.7,24.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AgNAgIAAhUIARAAIAABSQAAAHAHAAIADAAIAAAPIgIABQgTAAAAgVg");
	this.shape_12.setTransform(645.9,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AgbAqQgIgIgCgLQgDgJAAgOQAAgOADgIQACgLAIgIQAMgLAQAAQASAAAMALQAIAJACAOIgUAAQAAgGgEgFQgFgGgLAAQgIAAgHAGQgHAIAAAVQAAAWAHAIQAHAGAIAAQALAAAFgGQAEgFAAgHIAUAAQgCAOgIAJQgMAMgSAAQgQAAgMgLg");
	this.shape_13.setTransform(639.1,24.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AprCWIAAkrITXAAIAAErg");
	this.shape_14.setTransform(685,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgmAxQgSgRAAgfQAAgeARgSQAQgSAbAAQAaAAANAPQAOAOAAAcIAAALIhcAAQABALADAJQADAIAGAFQAGAGAIADQAIADAJAAQAMgBAOgFQANgFAFgFIABAAIAAAYIgVAHQgMADgMAAQgeAAgRgRgAAkgMQAAgRgIgJQgJgKgQAAQgQAAgKAKQgLALgBAPIBHAAIAAAAg");
	this.shape_15.setTransform(186.3,27.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBHQgKgKABgXIAAhBIgPAAIAAgSIAPAAIAAgkIAVAAIAAAkIAqAAIAAASIgqAAIAAA4IAAAQQAAAFADAFQACAFAEACQAFABAJAAIAKgBIAIgCIABAAIAAATIgMACIgNABQgTAAgKgLg");
	this.shape_16.setTransform(175.3,26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoA3QgNgLAAgSQAAgOAHgJQAGgIALgFQALgFARgBIAigDIAAgEQgBgHgCgFQgDgEgEgDQgFgDgGAAIgNgBQgHAAgLACQgKACgLAEIgBAAIAAgVIASgEQALgCALAAQANAAAKADQAKABAHAGQAHAFAEAIQADAIAAAMIAABVIgUAAIAAgOIgIAFIgKAGIgLAEQgHACgJAAQgQAAgMgLgAAJAAQgMAAgHABQgKADgFAFQgGAGABAKQAAAKAGAGQAGAFAOAAQAKAAAJgEQAJgEAJgHIAAghg");
	this.shape_17.setTransform(163.6,27.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOBHQgKgKAAgXIAAhBIgPAAIAAgSIAPAAIAAgkIAVAAIAAAkIArAAIAAASIgrAAIAAA4IAAAQQAAAFADAFQACAFAEACQAFABAJAAIAKgBIAJgCIABAAIAAATIgOACIgMABQgSAAgKgLg");
	this.shape_18.setTransform(153,26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdA/QgLgEgIgEIAAgXIABAAQAKAHAMAFQANAEAKAAQANAAAJgFQAHgEABgKQgBgHgEgEQgEgEgNgCIgKgDIgNgDQgRgEgHgIQgGgIgBgMQAAgIAEgHQADgHAHgFQAFgGALgDQAJgDALAAQALAAAMADQAMADAHAEIAAAWIgBAAQgJgGgLgEQgLgEgLAAQgLAAgIAFQgIAEAAAJQAAAIAFADQAFAEAKADIAMADIAMACQAPADAIAIQAIAIAAAOQAAARgOALQgOALgYAAQgOAAgMgDg");
	this.shape_19.setTransform(142.9,27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBHQgNgRAAgfQAAgPAEgLQAFgNAIgJQAHgJALgEQAKgFAKABQAJAAAIACQAIACAIAEIAAg2IAVAAIAACuIgVAAIAAgOQgJAIgKAFQgKAEgKAAQgXAAgNgSgAgWgLQgKALAAAXQAAAXAHAMQAIALARAAQAIAAAJgEQAJgEAIgHIAAhHIgPgEQgHgCgIAAQgRAAgJAMg");
	this.shape_20.setTransform(121.7,25.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnAxQgRgRAAgfQAAgeARgSQAQgSAbAAQAZAAAOAPQAOAOAAAcIAAALIhbAAQAAALADAJQAEAIAFAFQAGAGAJADQAHADAJAAQANgBANgFQAMgFAGgFIACAAIAAAYIgXAHQgLADgMAAQgeAAgSgRgAAkgMQAAgRgIgJQgIgKgRAAQgQAAgKAKQgKALgBAPIBGAAIAAAAg");
	this.shape_21.setTransform(108.5,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdA/QgLgEgIgEIAAgXIABAAQAKAHAMAFQANAEAKAAQANAAAJgFQAHgEABgKQgBgHgEgEQgEgEgNgCIgKgDIgNgDQgRgEgHgIQgGgIgBgMQAAgIAEgHQADgHAHgFQAFgGALgDQAJgDALAAQALAAAMADQAMADAHAEIAAAWIgBAAQgJgGgLgEQgLgEgLAAQgLAAgIAFQgIAEAAAJQAAAIAFADQAFAEAKADIAMADIAMACQAPADAIAIQAIAIAAAOQAAARgOALQgOALgYAAQgOAAgMgDg");
	this.shape_22.setTransform(96.1,27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag2BYIAAirIAVAAIAAANQAJgHAKgFQALgFAKAAQAXAAANASQAMARAAAeQAAAPgEAMQgFANgHAIQgIAJgKAEQgKAFgLAAQgJAAgIgCQgIgDgIgEIAAA1gAgQg/QgIAEgJAHIAABGQAJAEAGABQAHACAIAAQARAAAKgMQAKgMgBgWQABgXgJgLQgHgMgQAAQgJAAgJAEg");
	this.shape_23.setTransform(83.5,30);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpA3QgLgLgBgSQABgOAGgJQAGgIAMgFQALgFAQgBIAigDIAAgEQAAgHgDgFQgDgEgEgDQgFgDgHAAIgLgBQgJAAgKACQgKACgLAEIgBAAIAAgVIARgEQAMgCAMAAQAMAAAKADQAJABAIAGQAHAFAEAIQADAIAAAMIAABVIgUAAIAAgOIgIAFIgJAGIgNAEQgFACgKAAQgRAAgMgLgAAJAAQgLAAgIABQgJADgGAFQgGAGABAKQgBAKAHAGQAGAFAOAAQAKAAAJgEQAJgEAJgHIAAghg");
	this.shape_24.setTransform(68.9,27.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBXIAAitIATAAIAACtg");
	this.shape_25.setTransform(59.6,25.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBXIAAitIAVAAIAACtg");
	this.shape_26.setTransform(53.6,25.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpAwQgQgRAAgfQAAgeAQgRQAPgSAaAAQAaAAAQASQAQARAAAeQAAAfgQARQgQASgaAAQgaAAgPgSgAgagjQgJAMAAAXQAAAYAJAMQAKAMAQAAQARAAAKgMQAJgMAAgYQAAgXgJgMQgKgMgRAAQgQAAgKAMg");
	this.shape_27.setTransform(43.7,27.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgTBSQgPgFgLgLQgLgLgGgQQgGgRAAgWQAAgTAGgRQAFgQALgLQALgLAPgGQAPgGASAAQANAAAOAEQANADAQAIIAAAbIgBAAQgOgMgOgFQgNgGgQAAQgMAAgKAFQgKAEgIAIQgIAJgEANQgEAMAAAQQAAASAFANQAEAMAIAIQAIAJAKAEQAKAEALAAQAQAAAPgGQAOgFAMgLIABAAIAAAaIgLAFIgNAFIgPADQgIACgJAAQgSAAgOgFg");
	this.shape_28.setTransform(29.2,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},24).wait(24));

	// fade
	this.instance = new lib.fade_collapsed();
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(39));

	// bg
	this.instance_1 = new lib.bg_collapsed();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},24).wait(24));

	// BORDER
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("EhOHAnEMAAAhOHMCcPAAAMAAABOHgEhN9Am6MCb7AAAMAAAhNzMib7AAAg");
	this.shape_29.setTransform(500,250);
	this.shape_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(25).to({_off:false},0).wait(24));

	// fade
	this.instance_2 = new lib.fade_collapsed();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,1,10);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({alpha:0},8).to({_off:true},1).wait(15));

	// text
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhEBVQgegdAAg3QAAg0AdgfQAdggAvAAQAsABAYAZQAYAaAAAvIAAATIigAAQAAAUAGAPQAGAPALAKQAKAJAOAFQAOAEAQAAQAWAAAXgIQAWgJAKgJIACAAIAAAoQgTAIgTAFQgUAFgVABQg1AAgfgegAA/gXQAAgdgOgQQgPgPgdAAQgcAAgSARQgRARgDAaIB8AAIAAAAg");
	this.shape_30.setTransform(311.9,465.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZB9QgSgSAAgoIAAhzIgZAAIAAgfIAZAAIAAg/IAlAAIAAA/IBLAAIAAAfIhLAAIAABiIABAbQAAAKAFAIQADAIAIAEQAHADAQAAQAJAAAKgCIAOgFIACAAIAAAhIgXAFIgWACQggAAgRgSg");
	this.shape_31.setTransform(293,462.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhHBfQgUgTgBgfQAAgYALgQQAKgOAVgJQATgJAcgDIA7gEIAAgGQAAgNgEgIQgFgIgIgFQgHgEgMgCIgWgBQgOAAgRAEQgSADgTAIIgCAAIAAgmIAegGQAVgEATAAQAXAAARAEQARAEAMAJQANAJAGAOQAGAPAAAVIAACTIgkAAIAAgXIgNAJIgQAJIgVAIQgLADgQAAQgdAAgVgUgAARgCQgWACgNADQgRAEgJAKQgKAJAAARQAAATAMAJQALAKAXAAQASAAARgIQAPgHAOgLIAAg8g");
	this.shape_32.setTransform(272.9,465.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZB9QgSgSAAgoIAAhzIgZAAIAAgfIAZAAIAAg/IAlAAIAAA/IBLAAIAAAfIhLAAIAABiIABAbQAAAKAFAIQADAIAIAEQAHADAQAAQAJAAAKgCIAOgFIACAAIAAAhIgXAFIgWACQggAAgRgSg");
	this.shape_33.setTransform(254.6,462.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgyBtQgVgGgNgHIAAgpIACAAQARANAVAIQAWAHATAAQAXAAAOgHQAOgJAAgQQAAgNgIgHQgHgGgVgFIgUgEIgXgFQgcgIgMgOQgMgPAAgVQAAgNAFgMQAGgMALgJQALgKARgFQARgGAUABQATAAAUAEQAUAFAOAHIAAAnIgCAAQgOgKgUgHQgVgIgTAAQgTABgOAHQgOAIAAAQQAAANAJAHQAIAGASAEIAWAGIAVADQAaAHANANQAOAOAAAYQAAAegYATQgZATgqAAQgYAAgUgFg");
	this.shape_34.setTransform(237.1,465.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhIB9QgXgeAAg1QAAgcAIgVQAIgWANgPQAOgPARgHQASgIASAAQARAAAOADQANAEAPAHIAAheIAkAAIAAEvIgkAAIAAgXQgQAOgSAHQgRAIgTAAQgnAAgXgegAgogTQgRAVAAAnQAAAmANAVQANAUAeAAQAOAAARgGQAQgIAOgKIAAh9QgQgHgLgCQgMgDgOAAQgeABgRAVg");
	this.shape_35.setTransform(200.6,461.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhEBVQgegdAAg3QAAg0AdgfQAdggAvAAQAsABAYAZQAYAaAAAvIAAATIigAAQAAAUAGAPQAGAPALAKQAKAJAOAFQAOAEAQAAQAWAAAXgIQAWgJAKgJIACAAIAAAoQgTAIgTAFQgUAFgVABQg1AAgfgegAA/gXQAAgdgOgQQgPgPgdAAQgcAAgSARQgRARgDAaIB8AAIAAAAg");
	this.shape_36.setTransform(177.8,465.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhIB9QgXgeAAg1QAAgcAIgVQAIgWANgPQAOgPASgHQARgIASAAQARAAANADQANAEAPAHIAAheIAlAAIAAEvIglAAIAAgXQgQAOgQAHQgSAIgTAAQgnAAgXgegAgogTQgRAVAAAnQAAAmAOAVQANAUAdAAQAOAAAQgGQAQgIAOgKIAAh9QgPgHgLgCQgMgDgOAAQgdABgSAVg");
	this.shape_37.setTransform(153.3,461.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA3BwIAAh7IgCgcQgCgOgFgHQgEgIgKgEQgJgFgPABQgOgBgQAIQgQAHgPAMIAACiIglAAIAAjZIAlAAIAAAYQARgOASgIQASgIATAAQAjAAATAVQASAVAAApIAACMg");
	this.shape_38.setTransform(129.7,465);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhHBfQgVgTABgfQAAgYAKgQQAKgOAUgJQAVgJAbgDIA7gEIAAgGQAAgNgEgIQgEgIgJgFQgIgEgLgCIgVgBQgPAAgSAEQgRADgUAIIgBAAIAAgmIAegGQAVgEAUAAQAWAAARAEQARAEANAJQAMAJAGAOQAHAPgBAVIAACTIgkAAIAAgXIgNAJIgQAJIgVAIQgLADgQAAQgeAAgUgUgAARgCQgWACgOADQgQAEgJAKQgKAJAAARQAAATALAJQAMAKAXAAQASAAAQgIQAQgHAOgLIAAg8g");
	this.shape_39.setTransform(105,465.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhfCYIAAkpIAlAAIAAAWQAPgMASgIQASgIAUAAQAnAAAXAdQAVAeAAA1QAAAbgIAVQgHAWgOAPQgNAOgRAIQgSAIgTAAQgRAAgNgEQgOgDgOgIIAABbgAgchuQgQAHgOALIAAB7QAPAHAMADQALACAOAAQAeAAARgVQARgUAAgoQAAgngNgUQgNgUgcAAQgQAAgQAHg");
	this.shape_40.setTransform(82.7,469);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AA8BtIg8hUIg/BUIgrAAIBWhtIhVhsIAvAAIA8BTIA+hTIArAAIhWBrIBWBug");
	this.shape_41.setTransform(58.4,465.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhfCRIAAkhIC/AAIAAAiIiYAAIAABPICYAAIAAAiIiYAAIAABsICYAAIAAAig");
	this.shape_42.setTransform(35.5,461.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},25).wait(24));

	// bg
	this.instance_3 = new lib.bg_expanded();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,250,1000,50);
// library properties:
lib.properties = {
	id: '494A493910DE41A3868E1D13856D569A',
	width: 1000,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bg_collapsed.jpg?1530067026048", id:"bg_collapsed"},
		{src:"./bg_expanded.jpg?1530067026048", id:"bg_expanded"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['494A493910DE41A3868E1D13856D569A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;