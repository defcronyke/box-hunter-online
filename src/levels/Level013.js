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
 * Level013.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Level013 = function(objects_on_screen)
{
	objects_on_screen.push(
		new Square(0.0, 0.0, 0.0, 2.0, 8.0, 1000.0, 1.0, 0.0) );

	objects_on_screen.push(
		new Square(0.3, 8.0, 0.0, 0.1, 3.3, 0.5, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(0.5, 8.0, 0.0, 0.5, 1.0, 0.1, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(0.5, 9.0, 0.0, 0.5, 2.0, 0.1, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(1.0, 8.0, 0.0, 0.1, 3.0, 1000.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(0.5, 11.0, 0.0, 1.0, 0.3, 0.1, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(3.5, 0.0, 10.0, 0.1, 8.0, 1000.0, 0.0, 0.0) );

	objects_on_screen.push(
		new Square(3.8, 0.0, 0.0, 0.5, 0.1, 100000.0, 1.0, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 3.5, 0.5, 0.0, 1.0, 0.5, 1000.0, 1.0, 1.9) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 3.5, 0.0, 0.0, 1.0, 0.5, 100000.0, 1.0, 0.0) );

	objects_on_screen.push(
		new Goal(0.3, 12.3, 0.0, 0.5, 0.5, 0.1, 0.05, 0.0) );

	objects_on_screen.push(
		new SquarePlayer(1.4, 8.0, 0.0, 0.5, 0.5, 1.0, 0.3, 0.0) );
};
