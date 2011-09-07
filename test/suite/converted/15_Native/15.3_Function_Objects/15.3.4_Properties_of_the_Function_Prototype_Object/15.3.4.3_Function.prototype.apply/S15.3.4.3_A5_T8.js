// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value
 *
 * @id: S15.3.4.3_A5_T8;
 * @section: 15.3.4.3;
 * @description: thisArg is Function();
 */

var obj=Function();

new Function("this.touched= true; return this;").apply(obj);

//CHECK#1
if (!(obj.touched)) {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}
