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
 * Level011.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Level011 = function(objects_on_screen)
{
	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 1.5, 0.5, 180.0, 1.0, 0.5, 3.0, 1.0, 2.4) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 3.5, 2.0, 180.0, 1.0, 2.0, 0.01, 0.5, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 4.5, 2.0, 0.0, 1.0, 1.0, 0.01, 0.5, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 5.5, 0.5, 180.0, 1.0, 0.5, 3.0, 1.0, 1.8) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 7.5, 4.0, 180.0, 1.0, 4.0, 0.01, 0.5, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 8.5, 4.0, 0.0, 1.0, 2.0, 0.01, 0.5, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 9.5, 0.5, 180.0, 1.0, 0.5, 3.0, 1.0, 1.2) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 11.5, 6.0, 180.0, 1.0, 6.0, 0.01, 0.5, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 12.5, 6.0, 0.0, 1.0, 3.0, 0.01, 0.5, 1.0) );

	objects_on_screen.push(
		new Triangle((800.0 * 0.02) - 13.5, 0.5, 180.0, 1.0, 0.5, 3.0, 1.0, 2.0) );

	objects_on_screen.push(
		new Square(0.5, 0.1, 0.0, 0.5, 5.0, 0.01, 0.05, 0.0) );

	objects_on_screen.push(
		new Square(0.5, 5.1, 0.0, 0.5, 5.0, 0.01, 0.05, 0.0) );

	objects_on_screen.push(
		new Goal(0.5, 10.6, 0.0, 0.5, 0.5, 0.01, 0.1, 0.0) );

	objects_on_screen.push(
		new Square(0.5, 11.6, 0.0, 0.5, 1.0, 0.01, 0.05, 0.0) );

	objects_on_screen.push(
		new SquarePlayer((800.0 * 0.02) - 0.5, 1.0, 0.0, 0.5, 0.5, 1.0, 0.3, 0.0) );
};
