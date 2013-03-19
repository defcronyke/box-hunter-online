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
 * Level012.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Level012 = function(objects_on_screen)
{
	objects_on_screen.push(
		new Square((800.0 * 0.02) - 1.0, 1.0, 0.0, 1.0, 24.0, 1000.0, 1.0, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 1.95, 2.0, 0.0, 0.5, 1.0, 1000.0, 1.0, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 3.95, 2.0, 0.0, 0.5, 1.0, 1000.0, 1.0, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) - 3.90, 4.0, 0.0, 2.3, 0.3, 0.1, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(0.0, 1.0, 0.0, 1.0, 24.0, 1000.0, 1.0, 0.0) );

	objects_on_screen.push(
		new Square(1.25, 0.0, 0.0, 0.5, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(1.25, 1.0, 0.0, 2.25, 0.3, 0.1, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(3.0, 0.0, 0.0, 0.5, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Triangle(3.74, 1.8, 180.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(3.24, 1.84, 0.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(3.2, 1.8, 180.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(2.7, 1.84, 0.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(2.65, 1.8, 180.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(2.15, 1.84, 0.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(2.12, 1.8, 180.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle(1.62, 1.84, 0.0, 0.5, 0.5, 0.01, 0.05, 1.5) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) / 2.0 - 1.0, 0.0, 0.0, 2.0, 3.0, 100.0, 1.0, 2.0) );

	objects_on_screen.push(
		new Square(6.75, 3.0, 0.0, 2.5, 0.3, 0.05, 0.05, 1.0) );

	objects_on_screen.push(		// changed from native version: moved down from 4.5 to 4.4
		new Triangle(7.5, 4.4, 180.0, 1.0, 1.0, 0.1, 1.0, 1.5) );	// because they were falling over

	objects_on_screen.push(
		new Triangle(6.5, 4.4, 0.0, 1.0, 1.0, 0.1, 1.0, 1.5) );

	objects_on_screen.push(
		new Triangle(9.5, 4.4, 180.0, 1.0, 1.0, 0.1, 1.0, 1.5) );

	objects_on_screen.push(
		new Triangle(8.5, 4.4, 0.0, 1.0, 1.0, 0.1, 1.0, 1.5) );

	objects_on_screen.push(
		new Goal((800.0 * 0.02) - 3.0, 3.0, 0.0, 0.5, 0.5, 1.0, 0.1, 0.0) );

	objects_on_screen.push(
		new SquarePlayer(2.0, 0.5, 0.0, 0.5, 0.5, 1.0, 0.3, 0.0) );
};
