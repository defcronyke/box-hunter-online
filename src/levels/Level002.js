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
 * Level002.js
 *
 *  Created on: 2013-03-19
 *      Author: Jeremy Carter
 *     Contact: Jeremy [at] JeremyCarter [dot] ca
 */

Level002 = function(objects_on_screen)
{
	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0, 1.0, 0.0, (800.0 * 0.02) / 2.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 1.0, 3.0, 0.0, (800.0 * 0.02) / 2.0 - 1.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 2.0, 5.0, 0.0, (800.0 * 0.02) / 2.0 - 2.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 3.0, 7.0, 0.0, (800.0 * 0.02) / 2.0 - 3.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 4.0, 9.0, 0.0, (800.0 * 0.02) / 2.0 - 4.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 5.0, 11.0, 0.0, (800.0 * 0.02) / 2.0 - 5.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 6.0, 13.0, 0.0, (800.0 * 0.02) / 2.0 - 6.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Square((800.0 * 0.02) / 2.0 - 3.0 + 7.0, 15.0, 0.0, (800.0 * 0.02) / 2.0 - 7.0, 1.0, 1.0, 0.05, 0.0) );

	objects_on_screen.push(
		new Goal((800.0 * 0.02) / 2.0 - 3.5 + 8.0, 17.0, 0.0, 0.5, 0.5, 1.0, 0.1, 0.0) );

	objects_on_screen.push(
		new SquarePlayer((800.0 * 0.02) - 0.5, 0.0, 0.0, 0.5, 0.5, 1.0, 0.3, 0.0) );
};
