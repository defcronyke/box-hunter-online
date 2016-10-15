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
 * Physics2D.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

MyContactListener = function()
{
	this.num_foot_contacts = 0;
	this.jump_timeout = 0;
	this.first_goal_drop = true;
	this.break_goal_on_landing = false;
	this.level_failed = false;
	this.level_completed = false;
};
MyContactListener.prototype = new Box2D.Dynamics.b2ContactListener();
MyContactListener.prototype.constructor = MyContactListener;

MyContactListener.prototype.BeginContact = function(contact)
{
	if (contact.GetFixtureA().GetUserData() == 1)	// if up against a surface
		this.num_foot_contacts++;
	if (contact.GetFixtureB().GetUserData() == 1)
		this.num_foot_contacts++;
		
	if (contact.GetFixtureA().GetUserData() == 3 &&	// if we reached the goal
		contact.GetFixtureB().GetUserData() == 1)
	{
		this.level_completed = true;
		return;
	}
	if (contact.GetFixtureA().GetUserData() == 1 &&
		contact.GetFixtureB().GetUserData() == 3)
	{
		this.level_completed = true;
		return;
	}
	
	if (this.break_goal_on_landing)
	{
		if (contact.GetFixtureA().GetUserData() == 3)
		{
			if (!this.first_goal_drop)
			{
				this.level_failed = true;
				return;
			}
			else
			{
				return;
			}
		}
		if (contact.GetFixtureB().GetUserData() == 3)
		{
			if (!this.first_goal_drop)
			{
				this.level_failed = true;
				return;
			}
			else
			{
				return;
			}
		}
	}
	
	return;
};

MyContactListener.prototype.EndContact = function(contact)
{
	if (contact.GetFixtureA().GetUserData() == 1)
		this.num_foot_contacts--;
	if (contact.GetFixtureB().GetUserData() == 1)
		this.num_foot_contacts--;
	
	return;
};


Physics2DConfig = function()
{
	this.gravity = new Box2D.Common.Math.b2Vec2(0.0, -2.0);
	
	this.do_sleep = true;
	this.time_step = 1.0 / 60.0;
	
	this.velocity_iterations = 3; // this number needs to be different from the native version!
	this.position_iterations = 2;
};

Physics2D = function(Physics2DConfig)
{
	if (typeof Physics2DConfig === "object" &&
		Physics2DConfig.gravity &&
		Physics2DConfig.do_sleep &&
		Physics2DConfig.time_step &&
		Physics2DConfig.velocity_iterations &&
		Physics2DConfig.position_iterations)
	{
		this.EVENTS = 
		{
			NOTHING: 0,
			QUIT: 1,
			RELOAD: 2,
			MOVE_RIGHT: 3,
			MOVE_LEFT: 4,
			JUMP: 5,
			NEXT_LEVEL: 6,
			PREVIOUS_LEVEL: 7
		};

		this.gravity = Physics2DConfig.gravity;
		this.do_sleep = Physics2DConfig.do_sleep;
		this.time_step = Physics2DConfig.time_step;
		this.velocity_iterations = Physics2DConfig.velocity_iterations;
		this.position_iterations = Physics2DConfig.position_iterations;
		
		this.cheat_next_level_index = 0;
		this.cheat_timeout = 100;
		this.cheat_timer = this.cheat_timeout;
		
		this.contact_listener = 0;
		this.an_event = this.EVENTS.NOTHING;
		
		this.world = new Box2D.Dynamics.b2World(this.gravity, this.do_sleep);
		this.dynamic_bodies = new Array();
	}
	else
	{
		throw new TypeError("Physics2D Object: Requires an instance of the Physics2DConfig object as an argument to the constructor.");
	}
};
 
Physics2D.prototype.handle_events = function(event)	// this is triggered on every key press
{
	
//	console.log(event.keyCode);
//	console.log(String.fromCharCode(event.keyCode));
	
	this.an_event = this.EVENTS.NOTHING;
	var cheat_next_level = "plus";
	var cheat_previous_level = "minus";
	
	if (String.fromCharCode(event.keyCode) == "'")
		this.an_event = this.EVENTS.MOVE_RIGHT;
	else if (String.fromCharCode(event.keyCode) == "%")
		this.an_event = this.EVENTS.MOVE_LEFT;
	else if (event.keyCode == 17)
		this.an_event = this.EVENTS.JUMP;
	else if (String.fromCharCode(event.keyCode) == "R")
		this.an_event = this.EVENTS.RELOAD;
		
	// cheat: skip to the next level
	else if (String.fromCharCode(event.keyCode) == "P")
	{
		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "L" &&
			 this.cheat_next_level_index == 1)
	{
 		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "U" &&
			 this.cheat_next_level_index == 2)
	{
 		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "S" &&
			 this.cheat_next_level_index == 3)
	{
		this.cheat_timer = this.cheat_timeout;
		this.an_event = this.EVENTS.NEXT_LEVEL;
	}
	
	// cheat: skip to the previous level
	else if (String.fromCharCode(event.keyCode) == "M")
	{
 		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "I" &&
			 this.cheat_next_level_index == 1)
	{
 		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "N" &&
			 this.cheat_next_level_index == 2)
	{
 		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "U" &&
			 this.cheat_next_level_index == 3)
	{
 		this.cheat_next_level_index++;
		this.cheat_timer = this.cheat_timeout;
	}
	
	else if (String.fromCharCode(event.keyCode) == "S" &&
			 this.cheat_next_level_index == 4)
	{
		this.cheat_timer = this.cheat_timeout;
		this.an_event = this.EVENTS.PREVIOUS_LEVEL;
	}
};

Physics2D.prototype.key_up = function(event)
{
	this.an_event = this.EVENTS.NOTHING;
}

Physics2D.prototype.init = function(objects_on_screen)
{
	if (!(objects_on_screen instanceof Array))
	{
		alert("Physics2D Error: init() requires an array of GameObjects as its first parameter.");
		return false;
	}
	
	var ground_body_def = new Box2D.Dynamics.b2BodyDef();
	ground_body_def.position.Set(0.0, 0.0);
	
	var ground_body = this.world.CreateBody(ground_body_def);
	
	var ground_body_shape = new Box2D.Collision.Shapes.b2PolygonShape();
	ground_body_shape.SetAsBox(50.0, 0.0);
	
	var ground_body_fixture_def = new Box2D.Dynamics.b2FixtureDef();
	ground_body_fixture_def.shape = ground_body_shape;
	ground_body_fixture_def.density = 1.0;
	ground_body_fixture_def.friction = 1.0;
	
	ground_body.CreateFixture(ground_body_fixture_def);
	
	for (var i = 0; i < objects_on_screen.length; i++)
	{
		var dynamic_body_def = new Box2D.Dynamics.b2BodyDef();
		dynamic_body_def.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
		
		dynamic_body_def.position.Set(objects_on_screen[i].get_x(), objects_on_screen[i].get_y());
		
		dynamic_body_def.angle = this.deg_to_rad(objects_on_screen[i].get_rot());
		
		var dynamic_body = this.world.CreateBody(dynamic_body_def);
		
		if (!objects_on_screen[i].is_concave)	// if object is convex
		{
			var dynamic_body_shape = new Box2D.Collision.Shapes.b2PolygonShape();
			
			var vertex_count = objects_on_screen[i].coords_physics.length;
			var vertices = new Array();
			for (var j = 0; j < vertex_count; j++)
			{
				vertices.push(
					new Box2D.Common.Math.b2Vec2(
						objects_on_screen[i].coords_physics[j][0],
						objects_on_screen[i].coords_physics[j][1] ));
			}
			dynamic_body_shape.SetAsArray(vertices, vertex_count);
			
			var dynamic_body_fixture_def = new Box2D.Dynamics.b2FixtureDef();
			dynamic_body_fixture_def.shape = dynamic_body_shape;
			dynamic_body_fixture_def.density = objects_on_screen[i].density;
			dynamic_body_fixture_def.friction = objects_on_screen[i].friction;
			dynamic_body_fixture_def.restitution = objects_on_screen[i].restitution;
			
			if (objects_on_screen[i].is_player)
				dynamic_body_fixture_def.userData = 1;
			else if (objects_on_screen[i].is_goal)
				dynamic_body_fixture_def.userData = 3;
			else
				dynamic_body_fixture_def.userData = 2;
			
			dynamic_body.CreateFixture(dynamic_body_fixture_def);
		}
		
		else	// if object is concave
		{
			for (var j = 0; j < objects_on_screen[i].convex_objects.length; j++)
			{
				var dynamic_body_shape = new Box2D.Collision.Shapes.b2PolygonShape();
				
				var vertex_count = objects_on_screen[i].convex_objects[j].coords_physics.length;
				var vertices = new Array();
				for (var k = 0; k < vertex_count; k++)
				{
					vertices.push(
						new Box2D.Common.Math.b2Vec2(
							objects_on_screen[i].convex_objects[j].coords_physics[k][0],
							objects_on_screen[i].convex_objects[j].coords_physics[k][1] ));
				}
				dynamic_body_shape.SetAsArray(vertices, vertex_count);
				
				var dynamic_body_fixture_def = new Box2D.Dynamics.b2FixtureDef();
				dynamic_body_fixture_def.shape = dynamic_body_shape;
				dynamic_body_fixture_def.density = objects_on_screen[i].density;
				dynamic_body_fixture_def.friction = objects_on_screen[i].friction;
				dynamic_body_fixture_def.restitution = objects_on_screen[i].restitution;
				
				if (objects_on_screen[i].is_player)
					dynamic_body_fixture_def.userData = 1;
				else if (objects_on_screen[i].is_goal)
					dynamic_body_fixture_def.userData = 3;
				else
					dynamic_body_fixture_def.userData = 2;
				
				dynamic_body.CreateFixture(dynamic_body_fixture_def);
			}
		}
		
		this.dynamic_bodies.push(dynamic_body);
	}
	
	this.contact_listener = new MyContactListener();	// initialize contact listener here
	this.world.SetContactListener(this.contact_listener);
	
	return true;
};

Physics2D.prototype.step = function(objects_on_screen)
{
	if (!objects_on_screen ||
		!(objects_on_screen instanceof Array))
	{
		alert("Physics2D Error: step() requires an array of GameObjects as its first parameter.");
		return;
	}
	
	var return_val = 1;
	
	this.world.Step(this.time_step, this.velocity_iterations, this.position_iterations);
	this.world.ClearForces();
	
	for (var i = 0; i < objects_on_screen.length; i++)
	{
		var dynamic_body_position = new Box2D.Common.Math.b2Vec2(
			this.dynamic_bodies[i].GetPosition().x, 
			this.dynamic_bodies[i].GetPosition().y );
		
		var dynamic_body_angle = this.rad_to_deg(this.dynamic_bodies[i].GetAngle());
		
		objects_on_screen[i].set_x(dynamic_body_position.x);
		objects_on_screen[i].set_y(dynamic_body_position.y);
		objects_on_screen[i].set_rot(dynamic_body_angle);
		
		this.contact_listener.jump_timeout--;
		
		if (objects_on_screen[i].is_player)
		{
			if (this.an_event == this.EVENTS.MOVE_RIGHT)
			{
				var linear_velocity = this.dynamic_bodies[i].GetLinearVelocity();
				
				if (linear_velocity.x <= 0.0)
				{
					linear_velocity.x = 1.0; // half speed
					this.dynamic_bodies[i].SetLinearVelocity(linear_velocity);
				}
				
				linear_velocity = this.dynamic_bodies[i].GetLinearVelocity();
				if (linear_velocity.x < 2.0)
					this.dynamic_bodies[i].ApplyForce(
						new Box2D.Common.Math.b2Vec2(1.0, 0.0), 
						this.dynamic_bodies[i].GetWorldCenter() );
			}
			
			else if (this.an_event == this.EVENTS.MOVE_LEFT)
			{
				var linear_velocity = this.dynamic_bodies[i].GetLinearVelocity();
				
				if (linear_velocity.x >= 0.0)
				{
					linear_velocity.x = -1.0; // half speed
					this.dynamic_bodies[i].SetLinearVelocity(linear_velocity);
				}
				
				linear_velocity = this.dynamic_bodies[i].GetLinearVelocity();
				if (linear_velocity.x > -2.0)
					this.dynamic_bodies[i].ApplyForce(
						new Box2D.Common.Math.b2Vec2(-1.0, 0.0), 
						this.dynamic_bodies[i].GetWorldCenter() );
			}
			
			else if (this.an_event == this.EVENTS.JUMP)
			{
				if (this.contact_listener.num_foot_contacts >= 1)
				{
					if (this.contact_listener.jump_timeout <= 0)
					{	
						var linear_velocity = this.dynamic_bodies[i].GetLinearVelocity();
						if (linear_velocity.y < 0.5)
						{
							this.dynamic_bodies[i].ApplyForce(
								new Box2D.Common.Math.b2Vec2(0.0, 30.0),
								this.dynamic_bodies[i].GetWorldCenter() );
							
							this.contact_listener.jump_timeout = 15;
						}
					}
				}
			}
			
			else if (this.an_event == this.EVENTS.RELOAD)
			{
				return 4;
			}
		}
		
		else if (objects_on_screen[i].is_goal)
		{
			var linear_velocity = this.dynamic_bodies[i].GetLinearVelocity();
			
			if (this.contact_listener.break_goal_on_landing)
			{
				if (linear_velocity.y == 0.0)
					this.contact_listener.first_goal_drop = false;
				
			}
			
			if (linear_velocity.y < -0.5)
			{
				this.contact_listener.break_goal_on_landing = true;
			}
			
			if (this.contact_listener.level_failed)
			{
				alert("Level Failed!");
				return 3;
			}
			
			if (this.contact_listener.level_completed || this.an_event == this.EVENTS.NEXT_LEVEL)
			{
				alert("Level Completed!");
				return 2;
			}
			
			if (this.an_event == this.EVENTS.PREVIOUS_LEVEL)
			{
				return 5;
			}
		}
	}
	
	return return_val;
};

Physics2D.prototype.rad_to_deg = function(rad)
{
	var deg = rad * (180.0 / Math.PI);
	return deg;
};

Physics2D.prototype.deg_to_rad = function(deg)
{
	var rad = deg * (Math.PI / 180.0);
	return rad;
};
