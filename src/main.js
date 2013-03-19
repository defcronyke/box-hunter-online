/* Ⓒ Copyright 2013 Jeremy Carter
 *
 * This file is part of Box Hunter Online.
 *
 * Box Hunter Online is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Box Hunter Online is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Box Hunter Online.  If not, see <http://www.gnu.org/licenses/>.
 *
 * main.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

start_game = function()
{	
	var game = new main();
	
	return;
}

var level = 1;
var num_levels = 13;

main = function(game_config)
{
	if (level <= 0)
		level = num_levels;
	
	var webglconfig = new WebGLConfig();
	this.webgl = new WebGL(webglconfig);
	
	if (!this.webgl.init())
		return;
	
	var vertex_shader_element = document.getElementById("vertex-shader");
	if (!vertex_shader_element)
	{
		alert("vertex_shader_element not found");
		return;
	}
	
	var fragment_shader_element = document.getElementById("fragment-shader");
	if (!fragment_shader_element)
	{
		alert("fragment_shader_element not found");
		return;
	}
	
	var vertex_shader = "";
	var fragment_shader = "";
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", vertex_shader_element.src, false);
	xmlhttp.send();
	if (xmlhttp.status != 200)
	{
		xmlhttp.
		alert("Error: " + vertex_shader_element.src + " not found");
		return;
	}
	vertex_shader = xmlhttp.responseText;
	
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", fragment_shader_element.src, false);
	xmlhttp.send();
	if (xmlhttp.status != 200)
	{
		alert("Error: " + fragment_shader_element.src + " not found");
		return;
	}
	fragment_shader = xmlhttp.responseText;
	
	this.shader_program_id = this.webgl.load_shaders(vertex_shader, fragment_shader);
	
	this.objects = new Array(); // feed this to a level object to populate it
	
	if (level == 1)
		var level001 = new Level001(this.objects);
	else if (level == 2)
		var level002 = new Level002(this.objects);
	else if (level == 3)
		var level003 = new Level003(this.objects);
	else if (level == 4)
		var level004 = new Level004(this.objects);
	else if (level == 5)
		var level005 = new Level005(this.objects);
	else if (level == 6)
		var level006 = new Level006(this.objects);
	else if (level == 7)
		var level007 = new Level007(this.objects);
	else if (level == 8)
		var level008 = new Level008(this.objects);
	else if (level == 9)
		var level009 = new Level009(this.objects);
	else if (level == 10)
		var level010 = new Level010(this.objects);
	else if (level == 11)
		var level011 = new Level011(this.objects);
	else if (level == 12)
		var level012 = new Level012(this.objects);
	else if (level == 13)
		var level013 = new Level013(this.objects);
	else
	{
		alert("Congratulations, you beat the game!");
		level = 1;
		this.constructor();
		return;
	}
	
	if (!this.webgl.init_buffers(this.shader_program_id, this.objects))
	{
		return;
	}
	
	physics2dconfig = new Physics2DConfig();
	this.physics2d = new Physics2D(physics2dconfig);
	
	if (!this.physics2d.init(this.objects))
		return;
	
	document.onkeydown = this.physics2d.handle_events.bind(this.physics2d);
	document.onkeyup = this.physics2d.key_up.bind(this.physics2d);

	this.running_inner = 1;
	this.inner_loop(game_config);
};

main.prototype.inner_loop = function()
{
	if (this.running_inner == 1)
	{
		requestAnimFrame(this.inner_loop.bind(this));
		this.running_inner = this.physics2d.step(this.objects);
		this.webgl.clear();
		this.webgl.draw(this.shader_program_id, this.objects);
	}
	
	else if (this.running_inner == 2)
	{
		level++;
		this.constructor();
	}
	
	else if (this.running_inner == 3 || this.running_inner == 4)
	{
		this.constructor();
	}
	
	else if (this.running_inner == 5)
	{
		level--;
		this.constructor();
	}
	
	return;
};
