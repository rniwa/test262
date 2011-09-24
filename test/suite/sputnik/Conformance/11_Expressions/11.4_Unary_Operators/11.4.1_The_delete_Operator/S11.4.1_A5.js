// Copyright 2011 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * A strict delete should either succeed, returning true, or it
 * should fail by throwing a TypeError. Under no circumstances
 * should a strict delete return false.
 *
 * @description See if a strict delete returns false when deleting a
 * non-standard property.
 * @strictOnly
 */

var deleted = 'unassigned';
try {
  deleted = delete RegExp.leftContext;
} catch (err) {

}
if (deleted === false) {
  $ERROR('Strict delete returned false');
}
