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
 * Level007.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Level007 = function(objects_on_screen)
{
	objects_on_screen.push(
		new Square((800.0 * 0.02) - 3.0, 3.0, 0.0, 0.5, ((600.0 * 0.02) - 0.5) / 2.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 3.0, ((600.0 * 0.02) - 0.5) / 2.0 + 4.0, 0.0, 0.5, ((600.0 * 0.02) - 0.5) / 2.0 + 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 2.0, 3.0, 0.0, 0.5, (600.0 * 0.02) - 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(2.0, 9.0, 0.0, 0.25, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(3.0, 9.0, 0.0, 0.25, 1.5, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(4.0, 9.0, 0.0, 0.25, 2.5, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(5.0, 9.0, 0.0, 0.25, 3.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(6.0, 9.0, 0.0, 0.25, 4.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(7.0, 9.0, 0.0, 0.25, 4.5, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(8.0, 9.0, 0.0, 0.25, 5.5, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(9.0, 9.0, 0.0, 0.25, 6.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(10.0, 9.0, 0.0, 0.25, 7.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(11.0, 9.0, 0.0, 0.25, 7.5, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Goal((800.0 * 0.02) - 2.0, (600.0 * 0.02) - 1.0 + 10.0, 0.0, 0.5, 0.5, 1.0, 0.1, 0.0));

	objects_on_screen.push(
		new SquarePlayer(0.0, 0.0, 0.0, 0.5, 0.5, 1.0, 0.3, 0.0) );
};
