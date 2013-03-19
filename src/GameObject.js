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
 * GameObject.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

GameObject = function()
{
	this.x = 0.0;
	this.y = 0.0;
	this.rot = 0.0;
	this.width = 1.0;
	this.height = 1.0;
	this.density = 1.0;
	this.friction = 0.05;
	this.restitution = 0.0;
	
	this.is_player = false;
	this.is_deadly = false;
	this.is_goal = false;
	this.is_concave = false;
	
	this.convex_objects = new Array();
	
	this.coords_webgl = new Array();
	this.coords_physics = new Array();
	this.colors = new Array();
	
	this.T = mat4.create();
	this.R = mat4.create();
};

GameObject.prototype.get_x = function()
{
	return this.x;
};

GameObject.prototype.set_x = function(x)
{
	this.x = x;
	
	var ident_matrix = mat4.create();
	mat4.identity(ident_matrix);
	
	mat4.translate(this.T, ident_matrix, [this.x, this.y, 0.0]);
	
	return;
};

GameObject.prototype.get_y = function()
{
	return this.y;
};

GameObject.prototype.set_y = function(y)
{
	this.y = y;
	
	var ident_matrix = mat4.create();
	mat4.identity(ident_matrix);
	
	mat4.translate(this.T, ident_matrix, [this.x, this.y, 0.0]);
	
	return;
};

GameObject.prototype.get_rot = function()
{
	return this.rot;
};

GameObject.prototype.set_rot = function(rot)
{
	if (this.rot >= 360.0)
		this.rot = 0.0;
	
	if (this.rot < 0.0)
		this.rot = 360.0;
	
	if (rot != this.rot)
	{
		this.rot = rot;
		
		var ident_matrix = mat4.create();
		mat4.identity(ident_matrix);
		mat4.rotate(this.R, ident_matrix, this.deg_to_rad(this.rot), [0.0, 0.0, 1.0]);
	}
	
	return;
};

GameObject.prototype.rad_to_deg = function(rad)
{
	var deg = rad * (180.0 / Math.PI);
	return deg;
};

GameObject.prototype.deg_to_rad = function(deg)
{
	var rad = deg * (Math.PI / 180.0);
	return rad;
};
