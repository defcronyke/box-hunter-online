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
 * WebGL.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

WebGLConfig = function()
{
	var ident_matrix = mat4.create();
	mat4.identity(ident_matrix);
	
	this.p_matrix = mat4.create();
	mat4.ortho(this.p_matrix, 0.0, 800.0 * 0.02, 0.0, 600.0 * 0.02, 0.0, 10.0);
	
	this.v_matrix = mat4.create();
	mat4.identity(this.v_matrix);
	
	this.m_matrix = mat4.create();
	mat4.identity(this.m_matrix);
};

WebGL = function(WebGLConfig)
{
	if (typeof WebGLConfig === "object" && 
		WebGLConfig.p_matrix &&
		WebGLConfig.v_matrix &&
		WebGLConfig.m_matrix)
	{
		this.p_matrix = WebGLConfig.p_matrix;
		this.v_matrix = WebGLConfig.v_matrix;
		this.m_matrix = WebGLConfig.m_matrix;
		
		this.position_attrib_loc = 0;
		this.color_attrib_loc = 0;
		
		this.p_matrix_u_loc = 0;
		this.v_matrix_u_loc = 0;
		this.m_matrix_u_loc = 0;
		
		this.T_u_loc = 0;
		this.R_u_loc = 0;
		
		this.vbo_positions_ids = new Array();
		this.vbo_colors_ids = new Array();
		
		this.gl = 0;
	}
	else
	{
		throw new TypeError("WebGL Object: Requires an instance of the WebGLConfig object as an argument to the constructor.");
	}
};

WebGL.prototype.init = function()
{
	try
	{
		this.gl = document.getElementById("box-hunter-canvas").getContext("experimental-webgl");
	}
	catch (e)
	{}
	if (!this.gl)
	{
		alert("Your browser doesn't appear to support WebGL. You should try installing the latest video driver from your video card manufacturer's website, and/or try installing a better web browser, such as the latest version of Firefox.")
		return false;
	}
	else
	{
		this.gl.clearColor(0.3, 0.2, 0.7, 1.0);
	}
	
	return true;
};

WebGL.prototype.load_shaders = function(vertex_shader, fragment_shader)
{
	if (typeof vertex_shader === "undefined" || 
		typeof vertex_shader !== "string")
	{
		throw new TypeError("Tried to pass a vertex shader to load_shaders() that isn't of type \"string\".");
	}
	
	if (typeof fragment_shader === "undefined" || 
		typeof fragment_shader !== "string")
	{
		throw new TypeError("Tried to pass a fragment shader to load_shaders() that isn't of type \"string\".");
	}
	
	var vertex_shader_id = this.gl.createShader(this.gl.VERTEX_SHADER);
	this.gl.shaderSource(vertex_shader_id, vertex_shader);
	this.gl.compileShader(vertex_shader_id);
	if (!this.gl.getShaderParameter(vertex_shader_id, this.gl.COMPILE_STATUS))
	{
		alert("Vertex Shader Error:\n" + this.gl.getShaderInfoLog(vertex_shader_id));
		return;
	}
	
	var fragment_shader_id = this.gl.createShader(this.gl.FRAGMENT_SHADER);
	this.gl.shaderSource(fragment_shader_id, fragment_shader);
	this.gl.compileShader(fragment_shader_id);
	if (!this.gl.getShaderParameter(fragment_shader_id, this.gl.COMPILE_STATUS))
	{
		alert("Fragment Shader Error:\n" + this.gl.getShaderInfoLog(fragment_shader_id));
		return;
	}
	
	var shader_program_id = this.gl.createProgram();
	this.gl.attachShader(shader_program_id, vertex_shader_id);
	this.gl.attachShader(shader_program_id, fragment_shader_id);
	this.gl.linkProgram(shader_program_id);
	if (!this.gl.getProgramParameter(shader_program_id, this.gl.LINK_STATUS))
	{
		alert("Error: Linking shaders failed.");
		return;
	}
	
	this.gl.deleteShader(vertex_shader_id);
	this.gl.deleteShader(fragment_shader_id);
	
	return shader_program_id;
};

WebGL.prototype.init_buffers = function(shader_program_id, objects_on_screen)
{
	// VAO support isn't widespread enough to use yet
	
	if (!shader_program_id)
	{
		alert("Error: WebGL init_buffers() requires a shader program id as the first parameter.");
		return false;
	}
	
	if (!objects_on_screen ||
		!(objects_on_screen instanceof Array))
	{
		alert("Error: WebGL init_buffers() requires an array of game objects as the second parameter.");
		return false;
	}
	
	for (var i = 0; i < objects_on_screen.length; i++)
	{
		var vbo_positions_id = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo_positions_id);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(objects_on_screen[i].coords_webgl), this.gl.STATIC_DRAW);
		this.vbo_positions_ids.push(vbo_positions_id);
		
		var vbo_colors_id = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo_colors_id);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(objects_on_screen[i].colors), this.gl.STATIC_DRAW);
		this.vbo_colors_ids.push(vbo_colors_id);
	}
	
	this.position_attrib_loc = this.gl.getAttribLocation(shader_program_id, "in_vertex_position_modelspace");
	this.color_attrib_loc = this.gl.getAttribLocation(shader_program_id, "in_vertex_color");
	if (this.position_attrib_loc == -1 || this.color_attrib_loc == -1)
	{
		alert ("WebGL Error: gl.getAttribLocation() failed");
	}
	
	this.p_matrix_u_loc = this.gl.getUniformLocation(shader_program_id, "u_p_matrix");
	this.v_matrix_u_loc = this.gl.getUniformLocation(shader_program_id, "u_v_matrix");
	this.m_matrix_u_loc = this.gl.getUniformLocation(shader_program_id, "u_m_matrix");
	this.T_u_loc = this.gl.getUniformLocation(shader_program_id, "u_T");
	this.R_u_loc = this.gl.getUniformLocation(shader_program_id, "u_R");
	if (this.p_matrix_u_loc == -1 || this.v_matrix_u_loc == -1 || this.m_matrix_u_loc == -1 || this.T_u_loc == -1 || this.R_u_loc == -1)
	{
		alert("WebGL Error: gl.getUniformLocation() failed");
		return false;
	}
	
	return true;
};

WebGL.prototype.clear = function()
{
	this.gl.clear(this.gl.COLOR_BUFFER_BIT, this.gl.DEPTH_BUFFER_BIT);
	return;
};

WebGL.prototype.draw = function(shader_program_id, objects_on_screen)
{
	if (!shader_program_id)
	{
		alert("WebGL Error: requires the first parameter to be a shader program id");
		return;
	}
	
	if (!objects_on_screen ||
		!objects_on_screen instanceof Array)
	{
		alert("WebGL Error: requires the second parameter to be an Array of GameObjects");
		return;
	}
	
	for (var i = 0; i < objects_on_screen.length; i++)
	{
		this.gl.useProgram(shader_program_id);
		
		this.gl.uniformMatrix4fv(this.p_matrix_u_loc, false, this.p_matrix);
		this.gl.uniformMatrix4fv(this.v_matrix_u_loc, false, this.v_matrix);
		this.gl.uniformMatrix4fv(this.m_matrix_u_loc, false, this.m_matrix);
		
		this.gl.uniformMatrix4fv(this.T_u_loc, false, objects_on_screen[i].T);
		this.gl.uniformMatrix4fv(this.R_u_loc, false, objects_on_screen[i].R);
		
		this.gl.enableVertexAttribArray(this.position_attrib_loc);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo_positions_ids[i]);
		this.gl.vertexAttribPointer(this.position_attrib_loc, 2, this.gl.FLOAT, false, 0, 0);
		
		this.gl.enableVertexAttribArray(this.color_attrib_loc);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vbo_colors_ids[i]);
		this.gl.vertexAttribPointer(this.color_attrib_loc, 4, this.gl.FLOAT, false, 0, 0);
		
		this.gl.drawArrays(this.gl.TRIANGLES, 0, objects_on_screen[i].coords_webgl.length / 2);
		
		this.gl.disableVertexAttribArray(this.position_attrib_loc);
		this.gl.disableVertexAttribArray(this.position_attrib_loc);
	}
	
	return;
};
