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
 * Level009.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Level009 = function(objects_on_screen)
{
	objects_on_screen.push(
		new Square(2.1, 3.0, 0.0, 0.3, 1.6, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(5.0, 3.0, 0.0, 0.3, 1.6, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(2.1, 5.0, 0.0, 3.2, 0.3, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 2.4, 0.5, 0.0, 0.3, 1.2, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 0.4, 0.5, 0.0, 0.3, 1.2, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 2.4, 2.5, 0.0, 2.3, 0.3, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(1.0, 2.0, 0.0, 0.5, 0.5, 1.0, 0.05, 1.0) );

	objects_on_screen.push(
		new Square(6.0, 2.0, 0.0, 0.5, 0.5, 1.0, 0.05, 1.0) );

	objects_on_screen.push(
		new Goal(3.0, 4.0, 0.0, 0.5, 0.5, 1.0, 0.1, 0.0) );

	objects_on_screen.push(
		new SquarePlayer((800.0 * 0.02) - 1.5, 0.0, 0.0, 0.5, 0.5, 1.0, 0.3, 0.0) );
};
