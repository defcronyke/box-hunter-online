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
 * Triangle.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Triangle = function(x, y, rot, width, height, density, friction, restitution)
{
	this.x = typeof x !== "undefined" ? x : 0.0;	// default parameters
	this.y = typeof y !== "undefined" ? y : 0.0;
	this.rot = typeof rot !== "undefined" ? rot : 0.0;
	this.width = typeof width !== "undefined" ? width : 1.0;
	this.height = typeof height !== "undefined" ? height : 1.0;
	this.density = typeof density !== "undefined" ? density : 1.0;
	this.friction = typeof friction !== "undefined" ? friction : 0.05;
	this.restitution = typeof restitution !== "undefined" ? restitution : 0.0;
	
	this.is_player = false;
	this.is_deadly = false;
	this.is_goal = false;
	this.is_concave = false;
	
	this.convex_objects = new Array();
	
	this.coords_webgl = new Array();
	this.coords_physics = new Array();
	this.colors = new Array();
	
	this.T = mat4.create();
	mat4.identity(this.T);
	var ident_matrix = mat4.create();
	mat4.identity(ident_matrix);
	
	this.R = mat4.create();
	mat4.identity(this.R);
	
	mat4.translate(this.T, ident_matrix, [this.x, this.y, 0.0]);
	mat4.rotate(this.R, ident_matrix, this.deg_to_rad(this.rot), [0.0, 0.0, 1.0]);
	
	this.coords_webgl.push(
		this.width / 2.0, height,
		0.0, 0.0,
		this.width, 0.0 );
	
	this.coords_physics.push([this.width / 2.0, height]);
	this.coords_physics.push([0.0, 0.0]);
	this.coords_physics.push([width, 0.0]);
	
	this.colors.push(
		0.1, 0.5, 0.5, 1.0,
		0.5, 0.1, 0.5, 1.0,
		0.5, 0.5, 0.1, 1.0 );
};

Triangle.prototype = new GameObject();	// inherit from GameObject
Triangle.prototype.constructor = Triangle;