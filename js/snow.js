/*
 * http://circlecube.com/2011/12/snow-via-javascript-canvas-tis-the-season/
 */
jQuery( document ).ready( function ( $ ) {
	var canvas, context, width, height, x, y, radius = 25, clickX, clickY, drag = false;
	var total_dots = 5;
	var fps = 24;

	canvas = $("#canvas")[0];
	context = canvas.getContext("2d");
 	var dots = new Array();
	var drag_i = -1;
	var gravity = .05;
	var friction = .98;
	var bounce = -.96;
	var wrap = true;
	var float = true;

	var imgs = new Array();
	var img1 = new Image();
	var img2 = new Image();
	var img3 = new Image();
	img1.src = wnm_custom.template_url + "/images/snowflake_1.png";
	img2.src = wnm_custom.template_url + "/images/snowflake_2.png";
	img3.src = wnm_custom.template_url + "/images/snowflake_3.png";
	imgs[0] = img1;
	imgs[1] = img2;
	imgs[2] = img3;
	var this_dot = {};

	$("#canvas").attr("height", $(window).height());
	$("#canvas").attr("width", $(".site-header").width());

	for (var i=0; i < total_dots; i++){
		createDot();
	}
	function createDot(x, y, r, vx, vy){
		var this_dot = {
			x: 	typeof(x) != 'undefined' ? x : Math.random()*canvas.width, 
			y: 	typeof(y) != 'undefined' ? y : Math.random()*-canvas.height,
			radius: typeof(r) != 'undefined' ? r : 25,
			scale: 	Math.floor(10 + (1+50-10)*Math.random()),
			vx: 	typeof(vx) != 'undefined' ? vx : Math.random()*3-1,
			vy: 	typeof(vy) != 'undefined' ? vy : Math.random()*3,
			src:	(dots.length % 3) + 1,
			r:	0,
			vr:	0
		};
		dots.push(this_dot);
	}

	draw();

	$("#canvas").mousedown(function (event) {
		createDot(event.pageX - this.offsetLeft-25, event.pageY - this.offsetTop-25);
	});

	$("#canvas").mouseup(function (event) {
		drag = false;
		drag_i = -1;
	});

 	function update(){
		for (var i=0; i < dots.length; i++){
			if (drag_i != i){
				var this_dot = dots[i];
				if (float){
					this_dot.vx += Math.random() - .5;
					this_dot.vy += Math.random() - .5;
					this_dot.vr += Math.random()*.01 - .005;
				}
				this_dot.vx *= friction;
				this_dot.vy = this_dot.vy * friction + gravity;
				this_dot.x += this_dot.vx;
				this_dot.y += this_dot.vy;
				this_dot.r += this_dot.vr;

				if (this_dot.x > canvas.width + this_dot.radius){
					this_dot.x -= canvas.width + this_dot.radius*2;
					this_dot.vr = 0;
				}
				else if(this_dot.x < 0 - this_dot.radius){
					this_dot.x += canvas.width + this_dot.radius*2;
					this_dot.vr = 0;
				}
				if (this_dot.y > canvas.height + this_dot.radius){
					this_dot.y -= canvas.height + this_dot.radius*2;
					this_dot.vr = 0;
				}
			}
		}
	}
	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		for (var i=0; i < dots.length; i++){
			var src = img1;
			if (dots[i].src == 1){  }
			else if (dots[i].src == 2){ src = img2; }
			else { src = img3; }
			context.save();
			context.translate(dots[i].x+dots[i].scale/2, dots[i].y+dots[i].scale/2);
			context.rotate(dots[i].r);
			context.translate(-dots[i].x-dots[i].scale/2, -dots[i].y-dots[i].scale/2);
			context.drawImage(src, dots[i].x, dots[i].y, dots[i].scale, dots[i].scale);
			context.restore();
		}
	}

	setInterval(function() {
		update();
		draw();
	}, 1000/fps);

} );
