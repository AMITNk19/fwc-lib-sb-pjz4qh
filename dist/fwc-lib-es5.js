var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */


var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updatable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

  var walker = document.createTreeWalker(element.content, 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  , null, false); // Keeps track of the last index associated with a part. We try to delete
  // unnecessary nodes, but we never want to associate two different parts
  // to the same index. They must have a constant node between.

  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;

  while (partIndex < length) {
    var node = walker.nextNode();

    if (node === null) {
      // We've exhausted the content inside a nested template element.
      // Because we still have parts (the outer for-loop), we know:
      // - There is a template in the stack
      // - The walker will find a nextNode outside the template
      walker.currentNode = stack.pop();
      continue;
    }

    index++;

    if (node.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) {
      if (node.hasAttributes()) {
        var attributes = node.attributes;
        var _length = attributes.length; // Per
        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
        // attributes are not guaranteed to be returned in document order.
        // In particular, Edge/IE can return them out of order, so we cannot
        // assume a correspondence between part index and attribute index.

        var count = 0;

        for (var i = 0; i < _length; i++) {
          if (endsWith(attributes[i].name, boundAttributeSuffix)) {
            count++;
          }
        }

        while (count-- > 0) {
          // Get the template literal section leading up to the first
          // expression in this attribute
          var stringForPart = strings[partIndex]; // Find the attribute name

          var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
          // All bound attributes have had a suffix added in
          // TemplateResult#getHTML to opt out of special attribute
          // handling. To look up the attribute value we also need to add
          // the suffix.

          var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
          var attributeValue = node.getAttribute(attributeLookupName);
          node.removeAttribute(attributeLookupName);
          var statics = attributeValue.split(markerRegex);
          this.parts.push({
            type: 'attribute',
            index: index,
            name: name,
            strings: statics
          });
          partIndex += statics.length - 1;
        }
      }

      if (node.tagName === 'TEMPLATE') {
        stack.push(node);
        walker.currentNode = node.content;
      }
    } else if (node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
      var data = node.data;

      if (data.indexOf(marker) >= 0) {
        var parent = node.parentNode;

        var _strings = data.split(markerRegex);

        var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
        // These nodes are also used as the markers for node parts

        for (var _i = 0; _i < lastIndex; _i++) {
          var insert = void 0;
          var s = _strings[_i];

          if (s === '') {
            insert = createMarker();
          } else {
            var match = lastAttributeNameRegex.exec(s);

            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
              s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
            }

            insert = document.createTextNode(s);
          }

          parent.insertBefore(insert, node);
          this.parts.push({
            type: 'node',
            index: ++index
          });
        } // If there's no text, we must insert a comment to mark our place.
        // Else, we can trust it will stick around after cloning.


        if (_strings[lastIndex] === '') {
          parent.insertBefore(createMarker(), node);
          nodesToRemove.push(node);
        } else {
          node.data = _strings[lastIndex];
        } // We have a part for each match found


        partIndex += lastIndex;
      }
    } else if (node.nodeType === 8
    /* Node.COMMENT_NODE */
    ) {
      if (node.data === marker) {
        var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
        // the following are true:
        //  * We don't have a previousSibling
        //  * The previousSibling is already the start of a previous part

        if (node.previousSibling === null || index === lastPartIndex) {
          index++;

          _parent.insertBefore(createMarker(), node);
        }

        lastPartIndex = index;
        this.parts.push({
          type: 'node',
          index: index
        }); // If we don't have a nextSibling, keep this node so we have an end.
        // Else, we can remove it to save future costs.

        if (node.nextSibling === null) {
          node.data = '';
        } else {
          nodesToRemove.push(node);
          index--;
        }

        partIndex++;
      } else {
        var _i2 = -1;

        while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
          // Comment node has a binding marker inside, make an inactive part
          // The binding won't work, but subsequent bindings will
          // TODO (justinfagnani): consider whether it's even worth it to
          // make bindings in comments work
          this.parts.push({
            type: 'node',
            index: -1
          });
          partIndex++;
        }
      }
    }
  } // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.


var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */


var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if (isTemplatePartActive(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


var directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives.set(d, true);
    return d;
  };
};

var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives.has(o);
};
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */


var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance = /*#__PURE__*/function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;

      var _iterator = _createForOfIteratorHelper(this.__parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(this.__parts),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari does not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

      var walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length) {
        part = parts[partIndex];

        if (!isTemplatePartActive(part)) {
          this.__parts.push(undefined);

          partIndex++;
          continue;
        } // Progress the tree walker until we find our next part's node.
        // Note that multiple parts may share the same node (attribute parts
        // on a single element), so this loop may not run at all.


        while (nodeIndex < part.index) {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }

          if ((node = walker.nextNode()) === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        } // We've arrived at our part's node.


        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);

          _part2.insertAfterNode(node.previousSibling);

          this.__parts.push(_part2);
        } else {
          var _this$__parts;

          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }

        partIndex++;
      }

      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */


var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
});
var commentMarker = " ".concat(marker, " ");
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult = /*#__PURE__*/function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment position.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = lastAttributeNameRegex.exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      var value = this.getHTML();

      if (policy !== undefined) {
        // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
      }

      template.innerHTML = value;
      return template;
    }
  }]);

  return TemplateResult;
}();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};

var isIterable = function isIterable(value) {
  return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */


var AttributeCommitter = /*#__PURE__*/function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var parts = this.parts; // If we're assigning an attribute via syntax like:
      //    attr="${foo}"  or  attr=${foo}
      // but not
      //    attr="${foo} ${bar}" or attr="${foo} baz"
      // then we don't want to coerce the attribute value into one long
      // string. Instead we want to just return the value itself directly,
      // so that sanitizeDOMValue can get the actual value rather than
      // String(value)
      // The exception is if v is an array, in which case we do want to smash
      // it together into a string without calling String() on the array.
      //
      // This also allows trusted values (when using TrustedTypes) being
      // assigned to DOM sinks without being stringified in the process.

      if (l === 1 && strings[0] === '' && strings[1] === '') {
        var v = parts[0].value;

        if (_typeof(v) === 'symbol') {
          return String(v);
        }

        if (typeof v === 'string' || !isIterable(v)) {
          return v;
        }
      }

      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = parts[i];

        if (part !== undefined) {
          var _v2 = part.value;

          if (isPrimitive(_v2) || !isIterable(_v2)) {
            text += typeof _v2 === 'string' ? _v2 : String(_v2);
          } else {
            var _iterator3 = _createForOfIteratorHelper(_v2),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var t = _step3.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
/**
 * A Part that controls all or part of an attribute value.
 */


var AttributePart = /*#__PURE__*/function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = committer;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.value)) {
        var _directive = this.value;
        this.value = noChange;

        _directive(this);
      }

      if (this.value === noChange) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */


var NodePart = /*#__PURE__*/function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = createMarker());

      part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.startNode.parentNode === null) {
        return;
      }

      while (isDirective(this.__pendingValue)) {
        var _directive2 = this.__pendingValue;
        this.__pendingValue = noChange;

        _directive2(this);
      }

      var value = this.__pendingValue;

      if (value === noChange) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        // Fallback, will render the string representation
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this.__insert(value);

      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
      // it can't be implicitly converted - i.e. it's a symbol.

      var valueAsString = typeof value === 'string' ? value : String(value);

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
      } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }

      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new TemplateInstance(template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this.__commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;

      var _iterator4 = _createForOfIteratorHelper(value),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var item = _step4.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */


var BooleanAttributePart = /*#__PURE__*/function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var _directive3 = this.__pendingValue;
        this.__pendingValue = noChange;

        _directive3(this);
      }

      if (this.__pendingValue === noChange) {
        return;
      }

      var value = !!this.__pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }

        this.value = value;
      }

      this.__pendingValue = noChange;
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */


var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  var _super = _createSuper(PropertyCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this2;

    _classCallCheck(this, PropertyCommitter);

    _this2 = _super.call(this, element, name, strings);
    _this2.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this2;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);

var PropertyPart = /*#__PURE__*/function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  var _super2 = _createSuper(PropertyPart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _super2.apply(this, arguments);
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.


var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module

(function () {
  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }

    }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    window.removeEventListener('test', options, options);
  } catch (_e) {// event options not supported
  }
})();

var EventPart = /*#__PURE__*/function () {
  function EventPart(element, eventName, eventContext) {
    var _this3 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = function (e) {
      return _this3.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var _directive4 = this.__pendingValue;
        this.__pendingValue = noChange;

        _directive4(this);
      }

      if (this.__pendingValue === noChange) {
        return;
      }

      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      this.value = newListener;
      this.__pendingValue = noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.


var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */


function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}

var templateCaches = new Map();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

var parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render$1 = function render$1(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({
      templateFactory: templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Creates Parts when a template is instantiated.
 */


var DefaultTemplateProcessor = /*#__PURE__*/function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",
    value:
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _committer = new PropertyCommitter(element, name.slice(1), strings);

        return _committer.parts;
      }

      if (prefix === '@') {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }

      var committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new NodePart(options);
    }
  }]);

  return DefaultTemplateProcessor;
}();

var defaultTemplateProcessor = new DefaultTemplateProcessor();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

if (typeof window !== 'undefined') {
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
}
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */


var html = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// Get a key to lookup in `templateCaches`.


var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = templateCaches.get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(marker);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new Template(result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};

var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style');
  var length = styles.length; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < length; i++) {
    var _style = styles[i];

    _style.parentNode.removeChild(_style);

    condensedStyle.textContent += _style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  var content = templateElement.content;

  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  var style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render = function render(result, container, options) {
  if (!options || _typeof(options) !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  var scopeName = options.scopeName;
  var hasRendered = parts.has(container);
  var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render$1(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = parts.get(renderContainer);
    parts["delete"](renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.

    var template = part.value instanceof TemplateInstance ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    removeNodes(container, container.firstChild);
    container.appendChild(renderContainer);
    parts.set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */

/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};

var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

var finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */

var UpdatingElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  var _super3 = _createSuper(UpdatingElement);

  function UpdatingElement() {
    var _this4;

    _classCallCheck(this, UpdatingElement);

    _this4 = _super3.call(this);

    _this4.initialize();

    return _this4;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",
    value:
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    function initialize() {
      var _this5 = this;

      this._updateState = 0;
      this._updatePromise = new Promise(function (res) {
        return _this5._enableUpdatingResolver = res;
      });
      this._changedProperties = new Map();

      this._saveInstanceProperties(); // ensures first update will be caught by an early access of
      // `updateComplete`


      this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this6 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this6.hasOwnProperty(p)) {
          var value = _this6[p];
          delete _this6[p];

          if (!_this6._instanceProperties) {
            _this6._instanceProperties = new Map();
          }

          _this6._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this7 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this7[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      // Ensure first connection completes an update. Updates cannot complete
      // before connection.
      this.enableUpdating();
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating() {
      if (this._enableUpdatingResolver !== undefined) {
        this._enableUpdatingResolver();

        this._enableUpdatingResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
      // the type; it has issues with tracking types through statics
      // tslint:disable-next-line:no-unnecessary-type-assertion

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor.getPropertyOptions(propName); // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "requestUpdateInternal",
    value: function requestUpdateInternal(name, oldValue, options) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        options = options || ctor.getPropertyOptions(name);

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._updatePromise = this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this.requestUpdateInternal(name, oldValue);
      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                _context.prev = 1;
                _context.next = 4;
                return this._updatePromise;

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);

              case 8:
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 12;
                return result;

              case 12:
                return _context.abrupt("return", !this._hasRequestedUpdate);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 6]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */

  }, {
    key: "performUpdate",
    value: function performUpdate() {
      // Abort any update if one is not pending when this is called.
      // This can happen if `performUpdate` is called early to "flush"
      // the update.
      if (!this._hasRequestedUpdate) {
        return;
      } // Mixin instance properties once, if they exist.


      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        } else {
          this._markUpdated();
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false; // Ensure element can accept additional updates after an exception.

        this._markUpdated();

        throw e;
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */

  }, {
    key: "_getUpdateComplete",
    value: function _getUpdateComplete() {
      return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */

  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this8 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this8._propertyToAttribute(k, _this8[k], v);
        });

        this._reflectingProperties = undefined;
      }

      this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }], [{
    key: "observedAttributes",
    get: function get() {
      var _this9 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this9._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this9._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */

  }, {
    key: "_ensureClassProperties",
    value: function _ensureClassProperties() {
      var _this10 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this10._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      var descriptor = this.getPropertyDescriptor(name, key, options);

      if (descriptor !== undefined) {
        Object.defineProperty(this.prototype, name, descriptor);
      }
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */

  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(name, key, options) {
      return {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          var oldValue = this[name];
          this[key] = value;
          this.requestUpdateInternal(name, oldValue, options);
        },
        configurable: true,
        enumerable: true
      };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */

  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(name) {
      return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      // finalize any superclasses
      var superCtor = Object.getPrototypeOf(this);

      if (!superCtor.hasOwnProperty(finalized)) {
        superCtor.finalize();
      }

      this[finalized] = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iterator5 = _createForOfIteratorHelper(propKeys),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var p = _step5.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }]);

  return UpdatingElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */

var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();

var CSSResult = /*#__PURE__*/function () {
  function CSSResult(cssText, safeToken) {
    _classCallCheck(this, CSSResult);

    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }

    this.cssText = cssText;
  } // Note, this is a getter so that it's lazy. In practice, this means
  // stylesheets are not created until the first element instance is made.


  _createClass(CSSResult, [{
    key: "styleSheet",
    get: function get() {
      if (this._styleSheet === undefined) {
        // Note, if `supportsAdoptingStyleSheets` is true then we assume
        // CSSStyleSheet is constructable.
        if (supportsAdoptingStyleSheets) {
          this._styleSheet = new CSSStyleSheet();

          this._styleSheet.replaceSync(this.cssText);
        } else {
          this._styleSheet = null;
        }
      }

      return this._styleSheet;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);

  return CSSResult;
}();
/**
 * Wrap a value for interpolation in a [[`css`]] tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */


var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(String(value), constructionToken);
};

var textFromCSSResult = function textFromCSSResult(value) {
  if (value instanceof CSSResult) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
  }
};
/**
 * Template tag which which can be used with LitElement's [[LitElement.styles |
 * `styles`]] property to set element styles. For security reasons, only literal
 * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
 * may be used inside a template string part.
 */


var css = function css(strings) {
  for (var _len2 = arguments.length, values = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    values[_key2 - 1] = arguments[_key2];
  }

  var cssText = values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, constructionToken);
};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time


(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */

var renderNotImplemented = {};
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */

var LitElement = /*#__PURE__*/function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  var _super4 = _createSuper(LitElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _super4.apply(this, arguments);
  }

  _createClass(LitElement, [{
    key: "initialize",
    value:
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */
    function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.constructor._getUniqueStyles();

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s instanceof CSSStyleSheet ? s : s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this11 = this;

      // Setting properties in `render` should not trigger an update. Since
      // updates are allowed after super.update, it's important to call `render`
      // before that.
      var templateResult = this.render();

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties); // If render is not implemented by the component, don't call lit-html render


      if (templateResult !== renderNotImplemented) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this11.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */

  }, {
    key: "render",
    value: function render() {
      return renderNotImplemented;
    }
  }], [{
    key: "getStyles",
    value:
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */
    function getStyles() {
      return this.styles;
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Only gather styles once per class
      if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
        return;
      } // Take care not to call `this.getStyles()` multiple times since this
      // generates new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.


      var userStyles = this.getStyles();

      if (Array.isArray(userStyles)) {
        // De-duplicate styles preserving the _last_ instance in the set.
        // This is a performance optimization to avoid duplicated styles that can
        // occur especially when composing via subclassing.
        // The last item is kept to try to preserve the cascade order with the
        // assumption that it's most important that last added styles override
        // previous styles.
        var addStyles = function addStyles(styles, set) {
          return styles.reduceRight(function (set, s) {
            return (// Note: On IE set.add() does not return the set
              Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
            );
          }, set);
        }; // Array.from does not work on Set in IE, otherwise return
        // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


        var set = addStyles(userStyles, new Set());
        var styles = [];
        set.forEach(function (v) {
          return styles.unshift(v);
        });
        this._styles = styles;
      } else {
        this._styles = userStyles === undefined ? [] : [userStyles];
      } // Ensure that there are no invalid CSSStyleSheet instances here. They are
      // invalid in two conditions.
      // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
      //     this is impossible to check except via .replaceSync or use
      // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
      //     false)


      this._styles = this._styles.map(function (s) {
        if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
          // Flatten the cssText from the passed constructible stylesheet (or
          // undetectable non-constructible stylesheet). The user might have
          // expected to update their stylesheets over time, but the alternative
          // is a crash.
          var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
            return css + rule.cssText;
          }, '');
          return unsafeCSS(cssText);
        }

        return s;
      });
    }
  }]);

  return LitElement;
}(UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */


LitElement['finalized'] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */

LitElement.render = render;
/** @nocollapse */

LitElement.shadowRootOptions = {
  mode: 'open'
};
var sharedStyles = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  :host {\n    display: block;\n    width: 100%;\n    line-height: calc(2.75 * var(--fwcu));\n  }\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    border: 0;\n  }\n"])));

var FwcAlertComponent = /*#__PURE__*/function (_LitElement) {
  _inherits(FwcAlertComponent, _LitElement);

  var _super5 = _createSuper(FwcAlertComponent);

  function FwcAlertComponent() {
    var _this12;

    _classCallCheck(this, FwcAlertComponent);

    _this12 = _super5.call(this);
    _this12._refocusElem = null;
    _this12.type = 'info';
    _this12.area = 'inline';
    _this12.labelAriaCloseBtn = 'Close Alert';
    _this12.bgColor = '';
    _this12.closing = false;

    _this12._onEnd = function () {
      if (_this12.parentElement && _this12.closing) {
        _this12.parentElement.removeChild(_assertThisInitialized(_this12));

        _this12.closing = false;
        var event = new CustomEvent('fwc-alert-closed', {
          detail: _assertThisInitialized(_this12),
          bubbles: true
        });

        _this12.dispatchEvent(event);

        _this12._returnFocus();
      }
    };

    return _this12;
  }

  _createClass(FwcAlertComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var wrapper = this.shadowRoot.getElementById('fwcAlertRow');
      wrapper.addEventListener('transitionend', this._onEnd);
    }
  }, {
    key: "_xIcon",
    value: function _xIcon() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var style = color === 'red' ? 'red-fill' : 'close-fill';
      return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon class=\"", "\" points=\"3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523\" />\n      </svg>\n    "])), style);
    }
  }, {
    key: "_setBackground",
    value: function _setBackground() {
      var bg = '';

      switch (this.bgColor) {
        case 'white':
          bg = 'bg-white';
          break;

        default:
          bg = 'bg-default';
      }

      return bg;
    }
  }, {
    key: "_buildIcon",
    value: function _buildIcon() {
      var success = html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon class=\"success-fill\" points=\"47.38 43.674 15.888 12.182 2.62 25.451 0 22.831 14.579 8.253 15.888 7 17.198 8.253 50 41.055\" transform=\"matrix(1 0 0 -1 0 50.674)\" />\n      </svg>\n    "])));
      var info = html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <path class=\"info-fill\" d=\"M25,50 C11.2154447,50 0,38.7845553 0,25 C0,11.2154447 11.2154447,0 25,0 C38.7845553,0 50,11.2154447 50,25 C50,38.7845553 38.7845553,50 25,50 Z M25,46.1538462 C36.703726,46.1538462 46.1538462,36.703726 46.1538462,25 C46.1538462,13.296274 36.703726,3.84615385 25,3.84615385 C13.296274,3.84615385 3.84615385,13.296274 3.84615385,25 C3.84615385,36.703726 13.296274,46.1538462 25,46.1538462 Z M23.0769231,36.5384615 L23.0769231,32.6923077 L26.9230769,32.6923077 L26.9230769,36.5384615 L23.0769231,36.5384615 Z M23.0769231,28.8461538 L23.0769231,13.4615385 L26.9230769,13.4615385 L26.9230769,28.8461538 L23.0769231,28.8461538 Z\" transform=\"matrix(1 0 0 -1 0 50)\" />\n      </svg>\n    "])));

      var error = this._xIcon('red');

      var urgent = html(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <path class=\"red-fill\" d=\"M25,46.3371298 L23.405467,43.6036446 L1.53758542,5.73348519 L0,3 L50,3 L48.4624146,5.73348519 L26.594533,43.6036446 L25,46.3371298 Z M25,39.047836 L43.6788155,6.64464692 L6.32118451,6.64464692 L25,39.047836 Z M23.1776765,26.690205 L23.1776765,15.7562642 L26.8223235,15.7562642 L26.8223235,26.690205 L23.1776765,26.690205 Z M23.1776765,13.9339408 L23.1776765,10.2892938 L26.8223235,10.2892938 L26.8223235,13.9339408 L23.1776765,13.9339408 Z\" transform=\"matrix(1 0 0 -1 0 49.337)\" />\n      </svg>\n    "])));
      var icons = {
        success: success,
        info: info,
        error: error,
        urgent: urgent
      };
      return icons[this.type];
    }
  }, {
    key: "_onCloseClick",
    value: function _onCloseClick() {
      this.closing = true;
      this.shadowRoot.getElementById('fwcAlertRow').classList.add('remove');
    } // a public func allowing projects to close the alert

  }, {
    key: "closeAlert",
    value: function closeAlert() {
      this._onCloseClick();
    } // a public function allowing projects to put focus on the alert close button when opened

  }, {
    key: "focusOnCloseBtn",
    value: function focusOnCloseBtn() {
      var _this13 = this;

      setTimeout(function () {
        _this13.shadowRoot.getElementById('fwc-alert-close-button').focus();
      }, 250);
    } //private method to return focus to a element

  }, {
    key: "_returnFocus",
    value: function _returnFocus() {
      if (this._refocusElem) {
        // Return focus to calling element
        this._refocusElem.focus();
      }
    } // a public func allowing projects to set the refocus element can call private _returnfocus method

  }, {
    key: "setReFocus",
    value: function setReFocus(elem) {
      this._refocusElem = elem;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div class=\"fwc-alert-row ", " ", "\" id=\"fwcAlertRow\" role=\"alert\">\n        <div class=\"fwc-alert-wrapper\">\n          <div class=\"fwc-alert-flex\">\n            ", "\n            <slot id=\"alertMessage\"></slot>\n          </div>\n          <button id=\"fwc-alert-close-button\" type=\"button\" role=\"button\" aria-label=\"", "\" aria-describedby=\"alertMessage\" @click=\"", "\">", "</button>\n        </div>\n      </div>\n      <div class=\"fwc-alert-highlight ", "\"></div>\n    "])), this.area === 'global' ? 'fwc-alert-row-full' : '', this._setBackground(), this._buildIcon(), this.labelAriaCloseBtn, this._onCloseClick, this._xIcon(), this.area === 'global' ? 'show' : '');
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        :host {\n          max-width: 1920px;\n          margin: 0 auto;\n          display: block;\n          overflow: hidden;\n          position: relative;\n        }\n        .fwc-alert-flex svg {\n          flex-shrink: 0;\n          margin-right: calc(1.5 * var(--fwcu));\n        }\n        .fwc-alert-highlight {\n          position: absolute;\n          box-sizing: content-box;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          pointer-events: none;\n        }\n        .fwc-alert-highlight.show {\n          animation-name: fwcHighlight;\n          animation-delay: 0ms;\n          animation-duration: 2s;\n          animation-timing-function: ease-out;\n          animation-fill-mode: both;\n          transform-origin: 50% 50%;\n        }\n\n        .fwc-alert-row {\n          margin-top: 0;\n          transition: all 1s ease-in;\n          margin-bottom: calc(0.25 * var(--fwcu));\n        }\n\n        .fwc-alert-row-full {\n          animation-name: fwcGrow;\n          animation-delay: 0ms;\n          animation-duration: 2s;\n          animation-timing-function: ease-out;\n          animation-fill-mode: none;\n          transform-origin: 0% 50%;\n        }\n        .fwc-alert-row-full .fwc-alert-wrapper {\n          max-width: calc(144 * var(--fwcu));\n          margin: 0 auto;\n        }\n        .fwc-alert-wrapper {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          line-height: 1;\n          padding: calc(var(--fwcu)) calc(1.5 * var(--fwcu));\n          font-size: calc(2 * var(--fwcu));\n        }\n\n        @media screen and (max-width: 600px) {\n          .fwc-alert-wrapper {\n            /*\n              There is no col padding to add to:\n              4*fwcu = 32px for mobile\n            */\n            padding-right: calc(4 * var(--fwcu));\n            padding-left: calc(4 * var(--fwcu));\n          }\n        }\n\n        .fwc-alert-row.remove {\n          margin-top: -100%;\n          overflow: hidden;\n        }\n        .fwc-alert-flex {\n          display: flex;\n          align-items: center;\n        }\n\n        .success-fill {\n          fill: var(--color-alert-success);\n        }\n        .success-color {\n          color: var(--color-alert-success);\n        }\n\n        .info-fill {\n          fill: var(--color-alert-info);\n        }\n        .info-color {\n          color: var(--color-alert-info);\n        }\n\n        .red-fill {\n          fill: var(--color-alert-error);\n        }\n        .red-color {\n          color: var(--color-alert-error);\n        }\n\n        .close-fill {\n          fill: var(--color-gray-two);\n        }\n\n        .bg-white {\n          background-color: var(--color-white);\n        }\n        .bg-default {\n          background-color: var(--color-gray-five);\n        }\n\n        button {\n          border: none;\n          background: transparent;\n          cursor: pointer;\n          right: var(--fwcu);\n          padding: calc(0.5 * var(--fwcu));\n          display: flex;\n          align-items: center;\n        }\n\n        button svg {\n          width: calc(2 * var(--fwcu));\n          height: calc(2 * var(--fwcu));\n        }\n\n        @keyframes fwcHighlight {\n          from {\n            background: var(--color-dviz-eight);\n            opacity: 1;\n          }\n          to {\n            opacity: 0;\n          }\n        }\n\n        @keyframes fwcGrow {\n          from {\n            max-height: 0;\n          }\n          to {\n            max-height: 25rem;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        // urgent | success | info | error
        area: {
          type: String
        },
        // global | inline
        labelAriaCloseBtn: {
          attribute: 'label-aria-close-btn',
          type: String
        },
        bgColor: {
          attribute: 'bg-color',
          type: String
        } // white | null

      };
    }
  }]);

  return FwcAlertComponent;
}(LitElement);

var FwcBase = /*#__PURE__*/function () {
  function FwcBase(name, component) {
    _classCallCheck(this, FwcBase);

    this.element = customElements.get(name);
    this.name = name;
    this.component = component;
  }

  _createClass(FwcBase, [{
    key: "build",
    value: function build() {
      if (!this.element) {
        customElements.define(this.name, this.component);
      }
    }
  }]);

  return FwcBase;
}();

var FwcAlert = /*#__PURE__*/function (_FwcBase) {
  _inherits(FwcAlert, _FwcBase);

  var _super6 = _createSuper(FwcAlert);

  function FwcAlert() {
    _classCallCheck(this, FwcAlert);

    return _super6.call(this, 'fwc-alert', FwcAlertComponent);
  }

  return FwcAlert;
}(FwcBase);

var FwcAlertSnackbarItemComponent = /*#__PURE__*/function (_LitElement2) {
  _inherits(FwcAlertSnackbarItemComponent, _LitElement2);

  var _super7 = _createSuper(FwcAlertSnackbarItemComponent);

  function FwcAlertSnackbarItemComponent() {
    var _this14;

    _classCallCheck(this, FwcAlertSnackbarItemComponent);

    _this14 = _super7.call(this);
    _this14.type = 'info';
    _this14.labelAriaCloseBtn = 'close snack bar';
    _this14.timer = 30000;
    _this14.labelAriaLive = 'assertive';

    _this14.closeSnackbar = function () {
      if (_this14.parentNode) {
        _this14.parentNode.removeChild(_assertThisInitialized(_this14));
      }
    };

    return _this14;
  }

  _createClass(FwcAlertSnackbarItemComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this15 = this;

      //listen for animation end
      var wrapper = this.shadowRoot.getElementById('fwc-alert-snackbar-item');
      wrapper.addEventListener('animationend', function (e) {
        // on setTimout auto close snackbar
        if (e.animationName.indexOf('show-snackbar') > -1) {
          setTimeout(function () {
            _this15._onCloseClick();
          }, _this15.timer);
        } // if animation close, trigger close function


        if (e.animationName.indexOf('close-snackbar') > -1) {
          _this15.closeSnackbar();
        }
      });
    } // click close function which outputs an event and triggers close animation

  }, {
    key: "_onCloseClick",
    value: function _onCloseClick() {
      this.shadowRoot.getElementById('fwc-alert-snackbar-item').classList.add('remove');
      var event = new CustomEvent('fwc-alert-snackbar-removed', {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <div class=\"fwc-alert-snackbar ", "\" id=\"fwc-alert-snackbar-item\" aria-live=\"", "\">\n        <div class=\"fwc-alert-snackbar-body\">\n          <slot></slot>\n          <button type=\"button\" class=\"dismiss-button\" aria-label=\"", "\" @click=\"", "\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 50 50\" focusable=\"false\">\n              <polygon points=\"3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523\" />\n            </svg>\n          </button>\n        </div>\n      </div>\n    "])), this.type, this.labelAriaLive, this.labelAriaCloseBtn, this._onCloseClick);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      .fwc-alert-snackbar {\n        margin-top: calc(1.5*var(--fwcu));\n        border: 1px solid var(--color-gray-four);\n        border-left: 5px solid var(--color-gray-four);\n        color: var(--color-gray-one);\n        font-size: calc(1.25*var(--fwcu));\n        background: var(--color-white);\n        animation-name: show-snackbar;\n        animation-duration: 500ms;\n        box-shadow: var(--box-shadow);\n      }\n      .fwc-alert-snackbar.remove {\n        animation-name: close-snackbar;\n        animation-duration: 500ms;\n        animation-fill-mode: forwards;\n      }\n      .fwc-alert-snackbar.info {\n        border-left-color: var(--color-alert-info);\n      }\n      .fwc-alert-snackbar.success {\n        border-left-color: var(--color-alert-success);\n      }\n      .fwc-alert-snackbar.error {\n        border-left-color: var(--color-alert-error);\n      }\n      .fwc-alert-snackbar-body {\n        padding: calc(3.75*var(--fwcu)) calc(3.5*var(--fwcu));\n        position: relative;\n      }\n      .dismiss-button {\n        padding: 0px;\n        position: absolute;\n        top: calc(1.25*var(--fwcu));\n        right: calc(1.75*var(--fwcu));\n        background: none;\n        font-size: calc(4.5*var(--fwcu));\n        font-weight: 300;\n        color: gray;\n        border: none;\n        line-height: calc(1.75*var(--fwcu));\n        margin: auto;\n      }\n      .dismiss-button:hover {\n        cursor: pointer;\n      }\n      @keyframes show-snackbar {\n        0% {\n          opacity: 0;\n          transform: scale(0.5);\n          offset: 0;\n        }\n        100% {\n          opacity: 1;\n          transform: scale(1);\n          offset: 1;\n        }\n      }\n      @keyframes close-snackbar {\n        0% {\n          opacity: 1;\n          offset: 0;\n        }\n        100% {\n          opacity: 0;\n          offset: 1;\n        }\n      }\n      "])))];
    } // TODO: Aria live / region, ets

  }, {
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        labelAriaCloseBtn: {
          attribute: 'label-aria-close-btn',
          type: String
        },
        labelAriaLive: {
          attribute: 'label-aria-live',
          type: String
        },
        timer: {
          attribute: 'timer',
          type: Number
        }
      };
    }
  }]);

  return FwcAlertSnackbarItemComponent;
}(LitElement);

var FOCUSABLE_ELEMENT_SELECTORS = ['a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])', 'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'].join(', ');
var KEY_CODE_MAP = {
  TAB: 9
};
var keyboardHandler = null;
var containerElementRef = null;
var ignoredSelectorsRef = null;
var targetTrap = null;

function getActiveElement() {
  var activeElement;

  try {
    activeElement = document.activeElement;
  } catch (e) {
    activeElement = document.body || null;
  }

  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
    activeElement = activeElement.shadowRoot.activeElement;
  }

  return activeElement;
}

function getFocusableElements(containerElement, ignoreSelectors) {
  if (!containerElement) {
    throw new Error('Could not initialize focus-trapping - Container Element Missing');
  } // store a ref for refresh


  containerElementRef = containerElement;
  ignoredSelectorsRef = ignoreSelectors; // convert nodeList to array because ie11

  var focusableElements = [].slice.call(containerElement.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)); // if there is a shadowRoot we need a separate query

  if (containerElement.shadowRoot) {
    var shadowEls = [].slice.call(containerElement.shadowRoot.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)); // shadow elements need to be at the beginning

    focusableElements = shadowEls.concat(focusableElements);
  } // remove ignored elements


  if (ignoreSelectors) {
    var ignoredShadowElements = [].slice.call(containerElement.shadowRoot.querySelectorAll(ignoreSelectors.join(',')));
    var ignoredElements = [].slice.call(containerElement.querySelectorAll(ignoreSelectors.join(','))).concat(ignoredShadowElements);
    focusableElements = focusableElements.filter(function (focusableEl) {
      return !ignoredElements.some(function (ignoredEl) {
        return ignoredEl === focusableEl;
      });
    });
  } // order by tabindex


  return focusableElements.sort(function (a, b) {
    return Number(a.getAttribute('tabindex')) - Number(b.getAttribute('tabindex'));
  });
} // ignoreSelectors is an array of strings, a list of css selectors to be ignored by the focus trap
// ['.someElement button']


function focusTrap(containerElement, ignoreSelectors) {
  var focusableElements = getFocusableElements(containerElement, ignoreSelectors);
  targetTrap = focusTrap;

  if (focusableElements.length > 0) {
    var firstFocusableEl = focusableElements[0];
    var lastFocusableEl = focusableElements[focusableElements.length - 1];

    keyboardHandler = function keyboardHandler(e) {
      var activeElem = getActiveElement();

      if (e.keyCode === KEY_CODE_MAP.TAB) {
        // Rotate Focus
        if (e.shiftKey && activeElem === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        } else if (!e.shiftKey && activeElem === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        }
      }
    };

    firstFocusableEl.focus();
    containerElement.addEventListener('keydown', keyboardHandler);
  }
}

function focusTrapCustomTabs(containerElement, ignoreSelectors) {
  var focusableElements = getFocusableElements(containerElement, ignoreSelectors);
  targetTrap = focusTrapCustomTabs;

  if (focusableElements.length > 0) {
    var firstFocusableEl = focusableElements[0];
    var lastFocusableEl = focusableElements[focusableElements.length - 1];
    firstFocusableEl.focus();

    keyboardHandler = function keyboardHandler(e) {
      var activeElem = getActiveElement();

      if (e.keyCode === KEY_CODE_MAP.TAB) {
        // Rotate Focus
        if (e.shiftKey && activeElem === firstFocusableEl) {
          e.preventDefault();
          lastFocusableEl.focus();
        } else if (!e.shiftKey && activeElem === lastFocusableEl) {
          e.preventDefault();
          firstFocusableEl.focus();
        } else if (e.shiftKey) {
          // custom tabbing, move to previous tab item on keydown
          e.preventDefault();

          for (var i = focusableElements.length; i > 0; i--) {
            if (activeElem === focusableElements[i]) {
              focusableElements[i - 1].focus();
              return;
            }
          }
        } else {
          // this is the custom tabbing, move to next tab item on keydown
          e.preventDefault();

          for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
            if (activeElem === focusableElements[_i4]) {
              focusableElements[_i4 + 1].focus();

              return;
            }
          }
        }
      }
    }; // firstFocusableEl.focus();


    containerElement.addEventListener('keydown', keyboardHandler);
  }
}

function resetFocusTrap() {
  removeFocusTrapListener(containerElementRef);
  setTimeout(function () {
    targetTrap(containerElementRef, ignoredSelectorsRef);
  }, 0);
}

function removeFocusTrapListener(containerElement) {
  if (containerElement && keyboardHandler) {
    containerElement.removeEventListener('keydown', keyboardHandler);
  }
}

var FwcAlertSnackbarComponent = /*#__PURE__*/function (_LitElement3) {
  _inherits(FwcAlertSnackbarComponent, _LitElement3);

  var _super8 = _createSuper(FwcAlertSnackbarComponent);

  function FwcAlertSnackbarComponent() {
    _classCallCheck(this, FwcAlertSnackbarComponent);

    return _super8.call(this);
  }

  _createClass(FwcAlertSnackbarComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      <div class=\"fwc-alert-snackbar-container\">\n        <slot></slot>\n      </div>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        .fwc-alert-snackbar-container {\n          display: flex;\n          flex-direction: column-reverse;\n          position: fixed;\n          left: 0px;\n          bottom: 0;\n          z-index: 5;\n          padding: 0px;\n          margin: 0 calc(3 * var(--fwcu)) calc(3 * var(--fwcu)) calc(3 * var(--fwcu));\n          background: transparent;\n        }\n        @media screen and (min-width: 900px) {\n          .fwc-alert-snackbar-container {\n            width: calc(41.75 * var(--fwcu));\n            margin: 0 0 calc(3 * var(--fwcu)) calc(3 * var(--fwcu));\n          }\n        }\n      "])))];
    }
  }]);

  return FwcAlertSnackbarComponent;
}(LitElement);

var FwcAlertSnackbar = /*#__PURE__*/function (_FwcBase2) {
  _inherits(FwcAlertSnackbar, _FwcBase2);

  var _super9 = _createSuper(FwcAlertSnackbar);

  function FwcAlertSnackbar() {
    var _this16;

    _classCallCheck(this, FwcAlertSnackbar);

    _this16 = _super9.call(this, 'fwc-alert-snackbar', FwcAlertSnackbarComponent);
    var FwcAlertSnackbarItem = new FwcBase('fwc-alert-snackbar-item', FwcAlertSnackbarItemComponent);
    FwcAlertSnackbarItem.build();
    return _this16;
  }

  return FwcAlertSnackbar;
}(FwcBase);

var FwcAnimBlobComponent = /*#__PURE__*/function (_LitElement4) {
  _inherits(FwcAnimBlobComponent, _LitElement4);

  var _super10 = _createSuper(FwcAnimBlobComponent);

  function FwcAnimBlobComponent() {
    _classCallCheck(this, FwcAnimBlobComponent);

    return _super10.call(this);
  }

  _createClass(FwcAnimBlobComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      <div class=\"fwc-anim-wrapper\">\n        <div class=\"fwc-blob-5\">\n          <svg width=\"100%\" viewBox=\"0 0 627 673\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n            <path opacity=\"0.05\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M329.175 0.0542232C397.298 -2.27704 440.409 71.0981 490.729 117.077C534.726 157.277 580.859 195.147 603.172 250.41C626.669 308.601 634.518 372.764 618.466 433.433C601.802 496.418 563.04 550.688 512.764 592.125C459.986 635.624 397.457 667.964 329.175 671.866C258.316 675.915 185.848 657.406 129.681 614.017C74.4426 571.347 46.6163 504.625 26.2512 437.863C6.22109 372.198 -15.0133 299.136 14.7607 237.277C43.5707 177.421 122.431 167.875 175.459 127.866C229.988 86.7239 260.906 2.39047 329.175 0.0542232Z\" fill=\"#E54C80\" />\n          </svg>\n        </div>\n        <div class=\"fwc-blob-4\">\n          <svg width=\"100%\" viewBox=\"0 0 523 592\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n            <path opacity=\"0.05\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M277.948 15.0032C353.422 20.2842 437.12 13.6358 486.242 71.1794C536.697 130.286 521.626 213.778 513.615 291.078C503.356 390.067 519.634 511.141 435.189 563.802C346.494 619.112 226.406 582.698 139.775 524.207C65.8688 474.308 53.7962 379.916 34.0393 292.959C14.3216 206.173 -29.1134 106.12 29.5866 39.2266C87.3079 -26.552 190.648 8.89466 277.948 15.0032Z\" fill=\"#804CE6\" />\n          </svg>\n        </div>\n        <div class=\"fwc-blob-3\">\n          <svg width=\"100%\" viewBox=\"0 0 585 583\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n            <path opacity=\"0.05\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M289.771 0.0541782C394.697 -1.38101 512.454 25.4011 565.681 115.835C614.827 199.335 553.464 297.778 518.093 387.98C491.691 455.311 458.57 519.758 394.293 552.911C327.732 587.241 248.849 593.436 180.929 561.88C111.891 529.804 72.3643 463.002 46.5997 391.369C14.6548 302.554 -26.6525 203.423 23.1651 123.256C77.5289 35.7729 186.782 1.46288 289.771 0.0541782Z\" fill=\"#E54C4D\" />\n          </svg>\n        </div>\n        <div class=\"fwc-blob-2\">\n          <svg width=\"100%\" viewBox=\"0 0 629 617\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n            <path opacity=\"0.05\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M275.349 0.448552C366.623 3.80122 448.347 45.746 510.264 112.891C579.452 187.923 642.99 279.594 625.474 380.143C607.133 485.43 525.805 576.497 423.896 608.69C333.581 637.22 244.299 579.859 167.139 524.931C108.356 483.084 83.3975 417.607 59.7239 349.444C30.0293 263.946 -29.8228 171.798 17.7498 94.8003C68.3186 12.9532 179.205 -3.08302 275.349 0.448552Z\" fill=\"#55BD55\" />\n          </svg>\n        </div>\n        <div class=\"fwc-blob-1\">\n          <svg width=\"100%\" viewBox=\"0 0 649 631\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\">\n            <path opacity=\"0.05\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M311.605 0.0275336C407.042 1.89478 457.166 104.346 516.738 178.932C576.403 253.634 665.635 325.279 646.141 418.876C626.462 513.355 520.003 553.13 431.018 590.483C349.728 624.607 262.184 648.022 180.755 614.232C93.7943 578.147 20.7728 505.41 3.13194 412.927C-13.9178 323.542 41.6916 243.602 96.1534 170.703C153.846 93.4803 215.229 -1.85806 311.605 0.0275336Z\" fill=\"#42AADE\" />\n          </svg>\n        </div>\n        <div class=\"slot-wrapper\">\n          <slot></slot>\n        </div>\n      </div>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        :host {\n          width: 100%;\n          display: block;\n        }\n        .slot-wrapper {\n          position: relative;\n          z-index: 1;\n        }\n        .fwc-anim-wrapper {\n          position: relative;\n          width: 100%;\n          overflow: hidden;\n        }\n        [class*='fwc-blob-'] {\n          position: absolute;\n          top: 50%;\n          transform: translateY(-50%);\n          overflow: visible;\n        }\n        .fwc-blob-5 {\n          left: 85%;\n          opacity: 1;\n          width: 41%;\n          padding-top: 43%;\n        }\n        .fwc-blob-4 {\n          left: 8.5%;\n          opacity: 0.78;\n          width: 38%;\n          padding-top: 38%;\n        }\n        .fwc-blob-3 {\n          left: 54%;\n          opacity: 0.63;\n          width: 60%;\n          padding-top: 38%;\n        }\n        .fwc-blob-2 {\n          left: -20%;\n          opacity: 0.73;\n          width: 43%;\n          padding-top: 40%;\n        }\n        .fwc-blob-1 {\n          left: 31%;\n          opacity: 0.9;\n          width: 50%;\n          padding-top: 41%;\n        }\n        [class*='fwc-blob-'] svg {\n          position: absolute;\n          top: 0;\n          left: 0;\n          animation: rotation 12s infinite linear;\n        }\n        @keyframes rotation {\n          from {\n            transform: rotate(0deg);\n          }\n          to {\n            transform: rotate(359deg);\n          }\n        }\n        @media (max-width: 768px) {\n          .fwc-anim-wrapper {\n            min-height: 512px;\n            background: var(--color-gray-five);\n          }\n          [class*='fwc-blob-'] {\n            width: 150%;\n            left: 50%;\n            transform: translateY(0%) translateX(-50%);\n          }\n          .fwc-blob-1 {\n            top: 50%;\n          }\n          .fwc-blob-2 {\n            top: 35%;\n          }\n          .fwc-blob-3 {\n            display: none;\n          }\n          .fwc-blob-4 {\n            top: 9%;\n          }\n          .fwc-blob-5 {\n            top: 7%;\n          }\n        }\n      "])))];
    }
  }]);

  return FwcAnimBlobComponent;
}(LitElement);

var FwcAnimBlob = /*#__PURE__*/function (_FwcBase3) {
  _inherits(FwcAnimBlob, _FwcBase3);

  var _super11 = _createSuper(FwcAnimBlob);

  function FwcAnimBlob() {
    _classCallCheck(this, FwcAnimBlob);

    return _super11.call(this, 'fwc-anim-blob', FwcAnimBlobComponent);
  }

  return FwcAnimBlob;
}(FwcBase);

var breakpoints = {
  'md': 900,
  'sm': 600
};
var baseUnit = 8;
var supportsCssVars = !!(window.CSS && CSS.supports('color', 'var(--primary)'));

var FwcAnimColDropComponent = /*#__PURE__*/function (_LitElement5) {
  _inherits(FwcAnimColDropComponent, _LitElement5);

  var _super12 = _createSuper(FwcAnimColDropComponent);

  function FwcAnimColDropComponent() {
    var _this17;

    _classCallCheck(this, FwcAnimColDropComponent);

    _this17 = _super12.call(this);
    _this17.delay = 0;
    _this17.bar = null;
    _this17.content = null;
    _this17.disableAnimateMobile = ''; // small, medium

    return _this17;
  }

  _createClass(FwcAnimColDropComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcAnimColDropComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'trigger-animate') {
        this.startAnimation();
      }
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this18 = this;

      var isAnimationDisabled = this.checkAnimationDisabled();
      this.bar = this.shadowRoot.querySelector('.fwc-anim-bar');
      this.content = this.shadowRoot.querySelector('.fwc-anim-content');
      this.bar.addEventListener('transitionend', function (e) {
        _this18.content.classList.add('animate');
      });

      if (!isAnimationDisabled) {
        this.bar.classList.add('prep-animate');
        this.content.classList.add('prep-animate');
      }

      if (this.triggerAnimate) {
        this.startAnimation();
      }
    }
  }, {
    key: "checkAnimationDisabled",
    value: function checkAnimationDisabled() {
      if (window.innerWidth <= breakpoints.md && this.disableAnimateMobile === 'medium') {
        return true;
      }

      if (window.innerWidth <= breakpoints.sm && this.disableAnimateMobile === 'small') {
        return true;
      }

      return false;
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this19 = this;

      setTimeout(function () {
        _this19.bar.classList.add('animate');
      }, this.delay);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      <div class=\"fwc-anim-wrapper\">\n        <div class=\"fwc-anim-bar\"></div>\n        <div class=\"fwc-anim-content\">\n          <slot></slot>\n        </div>\n      </div>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        :host {\n          width: 100%;\n          display: block;\n        }\n        .fwc-anim-wrapper {\n          position: relative;\n          width: 100%;\n          padding-bottom: var(--fwcu2);\n          overflow: hidden;\n        }\n        .fwc-anim-bar {\n          width: 100%;\n          height: 2px;\n          margin: 0 auto;\n          margin-bottom: calc(var(--fwcu) + var(--fwcu05));\n          background: var(--color-gray-five, #f7f7f7);\n        }\n        .fwc-anim-bar.prep-animate {\n          width: 0%;\n        }\n        .fwc-anim-bar.animate {\n          width: 100%;\n          transition: width 500ms ease-in-out;\n        }\n        .fwc-anim-content {\n          padding: calc(1.5 * var(--fwcu)) 0;\n        }\n        .fwc-anim-content.prep-animate {\n          transform: translateY(-125%);\n        }\n        .fwc-anim-content.animate {\n          animation: slideIn 1s ease-in-out 1;\n          transform: translateY(0%);\n        }\n\n        @keyframes slideIn {\n          0% {\n            transform: translateY(-125%);\n          }\n          33% {\n            transform: translateY(20%);\n          }\n          100% {\n            transform: translateY(0%);\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        delay: {
          type: Number
        },
        triggerAnimate: {
          attribute: 'trigger-animate',
          type: Boolean
        },
        disableAnimateMobile: {
          attribute: 'disable-animate-mobile',
          type: String
        } // small, medium

      };
    }
  }]);

  return FwcAnimColDropComponent;
}(LitElement);

var FwcAnimColDrop = /*#__PURE__*/function (_FwcBase4) {
  _inherits(FwcAnimColDrop, _FwcBase4);

  var _super13 = _createSuper(FwcAnimColDrop);

  function FwcAnimColDrop() {
    _classCallCheck(this, FwcAnimColDrop);

    return _super13.call(this, 'fwc-anim-col-drop', FwcAnimColDropComponent);
  }

  return FwcAnimColDrop;
}(FwcBase);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var FwcBackToTopComponent = /*#__PURE__*/function (_LitElement6) {
  _inherits(FwcBackToTopComponent, _LitElement6);

  var _super14 = _createSuper(FwcBackToTopComponent);

  function FwcBackToTopComponent() {
    var _this20;

    _classCallCheck(this, FwcBackToTopComponent);

    _this20 = _super14.call(this);
    _this20._bodyEle = document.documentElement;
    _this20._hideButton = true;
    _this20.labelBtn = 'Back to Top';
    _this20.showButtonAtPx = 1000; //listen for scroll every 250ms

    _this20._handleScroll = debounce(function () {
      _this20.checkScrollPos();
    }, 250);
    return _this20;
  }

  _createClass(FwcBackToTopComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this21 = this;

      _get(_getPrototypeOf(FwcBackToTopComponent.prototype), "connectedCallback", this).call(this);

      window.addEventListener('scroll', function () {
        _this21._handleScroll();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this22 = this;

      window.removeEventListener('scroll', function () {
        _this22._handleScroll();
      });

      _get(_getPrototypeOf(FwcBackToTopComponent.prototype), "disconnectedCallback", this).call(this);
    } // check if we show or hide btn based on if page is scrolled past showButtonAtPx

  }, {
    key: "checkScrollPos",
    value: function checkScrollPos() {
      this._hideButton = window.pageYOffset >= this.showButtonAtPx ? false : true;
    }
  }, {
    key: "scrollToTopOfWindow",
    value: function scrollToTopOfWindow() {
      this._hideButton = true; //passing in reference of (this) since setInterval takes scope of this keyword

      this.fadeOut(this._bodyEle, this.fadeIn, this);
    } //fade out body

  }, {
    key: "fadeOut",
    value: function fadeOut(element, callback, _this) {
      var op = 1; // initial opacity

      var increment = 0.05;
      var timer = setInterval(function () {
        if (op <= 0) {
          clearInterval(timer);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          callback(element, _this);
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op + ')';
        op = op - increment;
      }, 15);
    } //fade in body

  }, {
    key: "fadeIn",
    value: function fadeIn(element, _this) {
      var op = 0; // initial opacity

      var increment = 0.05;
      var timer = setInterval(function () {
        if (op >= 1) {
          clearInterval(timer);
          /* c8 ignore next 2 */

          _this._returnFocus();
        }

        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op + ')';
        op = op + increment;
      }, 15);
    }
  }, {
    key: "_returnFocus",
    value: function _returnFocus() {
      if (this._refocusElem) {
        // Return focus to calling element
        this._refocusElem.focus();
      }
    } // a public func allowing projects to set the refocus element

  }, {
    key: "setReFocus",
    value: function setReFocus(elem) {
      this._refocusElem = elem;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      <button role=\"button\" class=\"back-to-top ", " \" @click=\"", "\">\n        <svg class=\"fwc-icon-arrow\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\" focusable=\"false\">\n          <polygon id=\"Path\" points=\"30.7843137 5 27.7777778 8.00653595 41.9607843 22.1895425 0 22.1895425 0 26.372549 41.9607843 26.372549 27.7777778 40.5555556 30.7843137 43.5620915 48.5620915 25.7843137 50 24.2810458 48.5620915 22.7777778\"></polygon>\n        </svg>\n        <span>", "</span>\n      </button>\n    "])), this._hideButton ? 'hidden' : '', this.scrollToTopOfWindow, this.labelBtn);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        .back-to-top {\n          font-family: var(--font-sans-serif);\n          position: fixed;\n          bottom: 5%;\n          left: 50%;\n          transform: translateX(-50%);\n          color: white;\n          opacity: 0.85;\n          background: var(--color-util-four);\n          display: flex;\n          line-height: calc(2 * var(--fwcu));\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center;\n          padding: calc(1.25 * var(--fwcu)) calc(2 * var(--fwcu));\n          text-decoration: none;\n          border-radius: calc(3.25 * var(--fwcu));\n          z-index: 1;\n          font-weight: 700;\n          font-size: calc(1.75 * var(--fwcu));\n          border: none;\n        }\n        .back-to-top:hover,\n        .back-to-top:focus,\n        .back-to-top:active,\n        .back-to-top:active:focus {\n          color: var(--color-white);\n        }\n        .back-to-top:hover {\n          opacity: 1;\n          background: var(--color-util-four);\n          cursor: pointer;\n        }\n        .fwc-icon-arrow {\n          transform: rotate(-90deg);\n          font-size: calc(2.25 * var(--fwcu));\n          fill: var(--color-white);\n        }\n        .back-to-top.hidden {\n          display: none;\n        }\n        span {\n          display: block;\n          margin-left: calc(1.25 * var(--fwcu));\n        }\n        @media screen and (max-width: 600px) {\n          .back-to-top {\n            bottom: 10%;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        labelBtn: {
          attribute: 'label-btn',
          type: String
        },
        showButtonAtPx: {
          attribute: 'show-button-at-px',
          type: Number
        },
        _hideButton: {}
      };
    }
  }]);

  return FwcBackToTopComponent;
}(LitElement);

var FwcBackToTop = /*#__PURE__*/function (_FwcBase5) {
  _inherits(FwcBackToTop, _FwcBase5);

  var _super15 = _createSuper(FwcBackToTop);

  function FwcBackToTop() {
    _classCallCheck(this, FwcBackToTop);

    return _super15.call(this, 'fwc-back-to-top', FwcBackToTopComponent);
  }

  return FwcBackToTop;
}(FwcBase);

var FwcBarsComponent = /*#__PURE__*/function (_LitElement7) {
  _inherits(FwcBarsComponent, _LitElement7);

  var _super16 = _createSuper(FwcBarsComponent);

  function FwcBarsComponent() {
    var _this23;

    _classCallCheck(this, FwcBarsComponent);

    _this23 = _super16.call(this);
    _this23.bars = [];
    return _this23;
  }

  _createClass(FwcBarsComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldval, newval) {
      if (name === 'bars' && oldval) {
        this.bars = JSON.parse(newval);

        this._buildBars();
      }

      _get(_getPrototypeOf(FwcBarsComponent.prototype), "attributeChangedCallback", this).call(this, name, oldval, newval);
    }
  }, {
    key: "_buildBars",
    value: function _buildBars() {
      // TODO: Num types: $, %, etc
      // TODO: Aria
      var bars = html(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["", ""])), this.bars.map(function (bar) {
        var w = Math.floor(bar.value / bar.max * 100);
        return html(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        <dt>", "</dt>\n        <dd class=\"fwc-cb-flex\">\n          <div class=\"fwc-cb-container\">\n            <div class=\"fwc-cb-bar\" style=\"width:", "%\"></div>\n          </div>\n          <div><strong>", "</strong><span>/", "</span></div>\n        </dd>\n      "])), bar.title, w, bar.value, bar.max);
      }));
      return bars;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([" <dl>", "</dl> "])), this._buildBars());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n        .fwc-cb-flex {\n          width: 100%;\n          display: flex;\n          flex-direction: row;\n        }\n        .fwc-cb-container {\n          width: calc(100% - 1.5 * var(--fwcu));\n          height: calc(2.75 * var(--fwcu));\n          display: flex;\n          align-items: center;\n          justify-content: flex-start;\n          overflow: hidden;\n          border: 1px solid transparent;\n          border-radius: calc(2.75 * var(--fwcu));\n          background-color: var(--color-gray-five);\n        }\n        .fwc-cb-bar {\n          height: calc(2.75 * var(--fwcu));\n          border: 1px solid transparent;\n          border-radius: calc(2.75 * var(--fwcu));\n          transition: width 500ms cubic-bezier(0.2, -0.02, 0.8, 1.4);\n          background-color: var(--color-dviz-one);\n        }\n        dl {\n          color: var(--color-gray-one);\n          font-size: var(--default-font-size);\n        }\n\n        dl .fwc-cb-flex:nth-of-type(2n) .fwc-cb-bar {\n          background-color: var(--color-dviz-four);\n        }\n        dl .fwc-cb-flex:nth-of-type(3n) .fwc-cb-bar {\n          background-color: var(--color-dviz-eight);\n        }\n        dl .fwc-cb-flex:nth-of-type(4n) .fwc-cb-bar {\n          background-color: var(--color-dviz-seven);\n        }\n\n        dl,\n        dt,\n        dd {\n          margin: 0;\n          padding: 0;\n        }\n        strong {\n          padding-left: calc(1.5 * var(--fwcu));\n        }\n        @media screen and (max-width: 900px) {\n          .fwc-cb-flex {\n            flex-direction: column;\n          }\n          .fwc-cb-container {\n            width: 100%;\n          }\n          strong {\n            padding-left: 0;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        bars: {
          type: Array
        }
      };
    }
  }]);

  return FwcBarsComponent;
}(LitElement);

var FwcBars = /*#__PURE__*/function (_FwcBase6) {
  _inherits(FwcBars, _FwcBase6);

  var _super17 = _createSuper(FwcBars);

  function FwcBars() {
    _classCallCheck(this, FwcBars);

    return _super17.call(this, 'fwc-bars', FwcBarsComponent);
  }

  return FwcBars;
}(FwcBase);

var FwcCardCircleComponent = /*#__PURE__*/function (_LitElement8) {
  _inherits(FwcCardCircleComponent, _LitElement8);

  var _super18 = _createSuper(FwcCardCircleComponent);

  function FwcCardCircleComponent() {
    var _this24;

    _classCallCheck(this, FwcCardCircleComponent);

    _this24 = _super18.call(this);
    _this24.image = '';
    _this24.title = '';
    _this24.content = '';
    return _this24;
  }

  _createClass(FwcCardCircleComponent, [{
    key: "contentFromProps",
    value: function contentFromProps() {
      return html(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      <h3>", "</h3>\n      <p>", "</p>\n    "])), this.title, this.content);
    }
  }, {
    key: "contentFromSlot",
    value: function contentFromSlot() {
      return html(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      <h3>", "</h3>\n      <slot name=\"fwc-card-circle-content\"></slot>\n    "])), this.title);
    }
  }, {
    key: "renderProps",
    value: function renderProps() {
      var content = this.content ? this.contentFromProps() : this.contentFromSlot();
      return content;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/components/fwc-cards.css\" />\n      <div class=\"circle-bg\"></div>\n      <div class=\"circle-white\"></div>\n      <div class=\"circle-img\" style=", "></div>\n      <div class=\"fwc-card-generic\">\n        <div class=\"content\">\n          <div>", "</div>\n          <div>\n            <slot class=\"actions\" name=\"fwc-card-circle-actions\"></slot>\n          </div>\n        </div>\n      </div>\n    "])), "background-image: url(".concat(this.image, ")"), this.renderProps());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n        :host {\n          position: relative;\n          padding-top: calc(16 * var(--fwcu));\n          padding-bottom: calc(4 * var(--fwcu));\n          height: 100%;\n        }\n        ::slotted(button) {\n          margin-bottom: calc(2 * var(--fwcu));\n        }\n        p {\n          padding-bottom: calc(3 * var(--fwcu));\n          font-size: var(--default-font-size);\n        }\n        h3 {\n          text-align: center;\n          font-size: calc(3 * var(--fwcu));\n          line-height: calc(3.75 * var(--fwcu));\n          font-weight: 500;\n          font-family: var(--font-serif);\n        }\n        .circle-bg,\n        .circle-white,\n        .circle-img {\n          border-radius: 50%;\n          position: absolute;\n          background-color: var(--color-white);\n        }\n        .circle-bg {\n          border: solid 2px rgba(var(--color-rgb-black), 0.1);\n          z-index: 0;\n          width: calc(30 * var(--fwcu));\n          height: calc(30 * var(--fwcu));\n          left: calc(50% - (15 * var(--fwcu)));\n          top: 0;\n          box-shadow: 0 0 12px 4px rgba(var(--color-rgb-black), 0.08);\n        }\n        .circle-white {\n          z-index: 1;\n          background-color: var(--color-white);\n          width: calc(30 * var(--fwcu) - 2px);\n          height: calc(30 * var(--fwcu) - 2px);\n          left: calc(50% - (15 * var(--fwcu)) + 1px);\n          top: 2px;\n        }\n        .circle-img {\n          width: calc(28 * var(--fwcu));\n          height: calc(28 * var(--fwcu));\n          left: calc(50% - (14 * var(--fwcu)));\n          top: var(--fwcu);\n          background-color: var(--color-gray-four);\n          background-repeat: no-repeat;\n          background-size: cover;\n          background-position: 50%;\n          z-index: 1;\n        }\n\n        .fwc-card-generic {\n          padding: calc(6 * var(--fwcu));\n          position: relative;\n          min-height: calc(16 * var(--fwcu));\n          height: 100%;\n        }\n\n        .fwc-card-generic .content {\n          padding-top: calc(7 * var(--fwcu));\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n        }\n\n        .actions {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          flex-wrap: wrap;\n        }\n\n        @media screen and (max-width: 600px) {\n          .fwc-card-generic {\n            padding: calc(3 * var(--fwcu));\n          }\n          .circle-bg {\n            width: calc(25 * var(--fwcu));\n            height: calc(25 * var(--fwcu));\n            left: calc(50% - (11.5 * var(--fwcu)));\n            top: 0;\n          }\n          .circle-white {\n            width: calc(25 * var(--fwcu) - 2px);\n            height: calc(25 * var(--fwcu) - 2px);\n            left: calc(50% - (11.5 * var(--fwcu)) + 1px);\n            top: 2px;\n          }\n          .circle-img {\n            width: calc(23 * var(--fwcu));\n            height: calc(23 * var(--fwcu));\n            left: calc(50% - (10.5 * var(--fwcu)));\n            top: var(--fwcu);\n          }\n          .fwc-card-generic .content {\n            padding-top: calc(10.5 * var(--fwcu));\n          }\n        }\n        @media screen and (max-width: 600px) and (hover: none) and (pointer: coarse) {\n          h3 {\n            font-size: calc(2.25 * var(--fwcu));\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        image: {
          type: String
        },
        title: {
          type: String
        },
        content: {
          type: String
        }
      };
    }
  }]);

  return FwcCardCircleComponent;
}(LitElement);

var FwcCardCircle = /*#__PURE__*/function (_FwcBase7) {
  _inherits(FwcCardCircle, _FwcBase7);

  var _super19 = _createSuper(FwcCardCircle);

  function FwcCardCircle() {
    _classCallCheck(this, FwcCardCircle);

    return _super19.call(this, 'fwc-card-circle', FwcCardCircleComponent);
  }

  return FwcCardCircle;
}(FwcBase);
/* Deprecate when image and video cards are finished */


var FwcCardMediaComponent = /*#__PURE__*/function (_LitElement9) {
  _inherits(FwcCardMediaComponent, _LitElement9);

  var _super20 = _createSuper(FwcCardMediaComponent);

  function FwcCardMediaComponent() {
    var _this25;

    _classCallCheck(this, FwcCardMediaComponent);

    _this25 = _super20.call(this);
    _this25.image = '';
    _this25.horizontal = false;
    _this25.badge = '';
    _this25.checked = false;
    _this25.labelAriaBookmark = 'Bookmark';
    _this25._hasPhoneSlot = true;
    _this25._hasLinkSlot = true;
    _this25._activeSlots = null;
    return _this25;
  }

  _createClass(FwcCardMediaComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this._hasPhoneSlot = this._slottedChildren(this.shadowRoot.querySelector('slot[name=phone]'));
      this._hasLinkSlot = this._slottedChildren(this.shadowRoot.querySelector('slot[name=link]'));
      this._activeSlots = this._checkActiveSlots();
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this26 = this;

      changedProperties.forEach(function (oldValue, propName) {
        if (propName === 'image') {
          _this26._setImageDimension(_this26.image);
        }

        if (propName === 'checked') {
          _this26._setBookmarkState(_this26.checked);
        }
      });
    }
  }, {
    key: "_slottedChildren",
    value: function _slottedChildren(slot) {
      var childNodes = slot.assignedNodes({
        flatten: true
      });
      return Array.prototype.some.call(childNodes, function (node) {
        return node.nodeType == Node.ELEMENT_NODE;
      });
    }
  }, {
    key: "_checkActiveSlots",
    value: function _checkActiveSlots() {
      var slots = [].slice.call(this.shadowRoot.querySelectorAll('slot'));
      return slots.reduce(function (tot, slot) {
        return tot += slot.assignedNodes({
          flatten: true
        }).length;
      }, 0);
    }
  }, {
    key: "_setImageDimension",
    value: function _setImageDimension(imgPath) {
      var _this27 = this;

      var image = document.createElement('img');

      image.onload = function (e) {
        var imgWrapper = _this27.shadowRoot.querySelector('.fwc-media-image-wrapper');

        imgWrapper.style.paddingTop = image.height / image.width * 100 + '%';
      };

      image.src = imgPath;
    }
  }, {
    key: "_setBookmarkState",
    value: function _setBookmarkState(isChecked) {
      var btn = this.shadowRoot.querySelector('button.fwc-bookmark');

      if (isChecked) {
        btn.classList.add('fwc-active-bookmark');
        return;
      }

      btn.classList.remove('fwc-active-bookmark');
    }
  }, {
    key: "_onBookmarkClick",
    value: function _onBookmarkClick(e) {
      e.target.classList.toggle('fwc-active-bookmark');
      this.checked = !this.checked;
      var event = new CustomEvent('fwc-card-media-bookmark', {
        detail: this.checked,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/components/fwc-badges.css\" />\n      <div class=\"fwc-mcard ", "\">\n        <div class=\"fwc-image-section\">\n          <!-- padding-top controls the height of the image based on its proportions, calculated in _setImageDimension -->\n          <div class=\"fwc-media-image-wrapper\">\n            <div class=\"fwc-media-image\" style=\"background-image: url('", "');\"></div>\n          </div>\n        </div>\n        <div class=\"fwc-description-section ", "\">\n          <div class=\"fwc-badge-bookmark-container\">\n            <div class=\"fwc-badge-bookmark\">\n              <div class=\"fwc-badge success ", "\">", "</div>\n              <button class=\"fwc-bookmark ", "\" @click=", " aria-label=\"", "\" aria-pressed=\"", "\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\">\n                  <path d=\"M5,0 L5,50 L8.46467391,47.4184783 L24.5652174,35.326087 L40.6657609,47.4184783 L44.1304348,50 L44.1304348,0 L5,0 Z M9.34782609,4.34782609 L39.7826087,4.34782609 L39.7826087,41.3043478 L25.8559783,30.8423913 L24.5652174,29.8913043 L23.2744565,30.8423913 L9.34782609,41.3043478 L9.34782609,4.34782609 Z\" />\n                </svg>\n              </button>\n            </div>\n          </div>\n          <slot name=\"title\"></slot>\n          <div class=\"fwc-description-text\">\n            <slot name=\"body\"></slot>\n          </div>\n          <div class=\"fwc-contact-section\">\n            <div class=\"", "\"><slot name=\"link\"></slot></div>\n            <div class=\"", "\"><slot name=\"phone\"></slot></div>\n          </div>\n        </div>\n      </div>\n    "])), this.horizontal ? 'fwc-full' : '', this.image, this._activeSlots === 0 ? 'fwc-hide' : '', this.badge ? '' : 'fwc-hide-vis', this.badge, this.showBookmark ? '' : 'fwc-hide-vis', this._onBookmarkClick, this.labelAriaBookmark, this.checked, this._hasLinkSlot ? '' : 'fwc-hide', this._hasPhoneSlot ? '' : 'fwc-hide');
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        :host {\n          width: 100%;\n          height: 100%;\n          display: block;\n          padding-bottom: calc(4 * var(--fwcu));\n        }\n        .fwc-mcard {\n          height: 100%;\n          box-shadow: var(--box-shadow);\n          border-radius: calc(1.5 * var(--fwcu));\n          overflow: hidden;\n          display: flex;\n          flex-direction: column;\n          background: var(--color-white);\n        }\n        .fwc-mcard.fwc-full {\n          flex-direction: row-reverse;\n          min-height: calc(34 * var(--fwcu));\n        }\n        .fwc-mcard .fwc-image-section {\n          position: relative;\n        }\n        .fwc-mcard.fwc-full .fwc-image-section {\n          flex-grow: 1;\n        }\n        .fwc-mcard .fwc-media-image-wrapper {\n          position: relative;\n          width: 100%;\n        }\n        .fwc-mcard.fwc-full .fwc-media-image-wrapper {\n          height: 100%;\n        }\n        .fwc-mcard .fwc-media-image {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          top: 0;\n          left: 0;\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: center;\n        }\n        .fwc-description-section {\n          position: relative;\n          display: flex;\n          flex-direction: column;\n          flex-grow: 1;\n          font-size: calc(2 * var(--fwcu));\n          font-weight: 300;\n          padding: calc(3 * var(--fwcu)) calc(4 * var(--fwcu)) calc(4 * var(--fwcu));\n        }\n        .fwc-full .fwc-description-section {\n          padding: calc(3 * var(--fwcu));\n          display: flex;\n          flex-basis: 54%;\n          flex-direction: column;\n          flex-grow: 0;\n          justify-content: space-evenly;\n          height: auto;\n        }\n        .fwc-mcard .fwc-description-title {\n          font-size: calc(2 * var(--fwcu));\n          line-height: calc(2.5 * var(--fwcu));\n        }\n        .fwc-mcard button {\n          height: calc(5.5 * var(--fwcu));\n          width: calc(5.5 * var(--fwcu));\n          border: 2px solid var(--color-primary);\n          border-radius: 50%;\n          background-color: var(--color-white);\n          color: var(--color-primary);\n          font-size: calc(2.75 * var(--fwcu));\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .fwc-mcard.fwc-full button {\n          height: calc(4 * var(--fwcu));\n          width: calc(4 * var(--fwcu));\n          font-size: calc(1.75 * var(--fwcu));\n        }\n        .fwc-mcard button:hover {\n          cursor: pointer;\n        }\n        .fwc-mcard fwc-header-sub {\n          margin-bottom: calc(1.5 * var(--fwcu));\n        }\n        .fwc-mcard fwc-header-sub {\n          margin-top: var(--fwcu);\n        }\n        .fwc-mcard .fwc-description-text {\n          font-size: calc(1.5 * var(--fwcu));\n          line-height: calc(2.5 * var(--fwcu));\n          margin: calc(1 * var(--fwcu)) 0 0;\n          flex-grow: 1;\n        }\n        .fwc-mcard .fwc-badge-bookmark-container {\n          position: relative;\n        }\n        .fwc-mcard .fwc-badge-bookmark {\n          position: absolute;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          margin-top: calc(-5.75 * var(--fwcu));\n          z-index: 1;\n          width: 100%;\n        }\n        .fwc-mcard.fwc-full .fwc-badge-bookmark {\n          position: relative;\n          margin-top: 0;\n          margin-bottom: calc(2.5 * var(--fwcu));\n        }\n        .fwc-mcard .fwc-optional-badge {\n          width: auto;\n          max-width: 80%;\n          border-radius: calc(0.5 * var(--fwcu));\n          font-size: calc(1.25 * var(--fwcu));\n          font-weight: 500;\n          text-align: center;\n          color: var(--color-white);\n          background-color: var(--color-alert-success);\n          padding: 0 calc(1*var(--fwcu));\n          letter-spacing: 1px;\n          text-transform: uppercase;\n        }\n\n        .fwc-mcard .fwc-contact-section {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        .fwc-contact-link-margin {\n          margin-right: calc(3 * var(--fwcu));\n        }\n        .fwc-mcard .fwc-contact-section .fwc-icon {\n          padding-right: var(--fwcu);\n          color: var(--color-gray-three);\n        }\n        .fwc-mcard .fwc-contact-section > div {\n          display: block;\n          margin: calc(1.5 * var(--fwcu)) calc(4 * var(--fwcu)) 0 0;\n        }\n        .fwc-mcard .fwc-contact-section > div.fwc-hide {\n          display: none;\n        }\n        .fwc-bookmark svg {\n          fill: var(--color-primary);\n          height: calc(2.75 * var(--fwcu));\n          width: calc(2.75 * var(--fwcu));\n          pointer-events: none;\n          overflow: visible;\n        }\n        .fwc-full .fwc-bookmark svg {\n          height: calc(2 * var(--fwcu));\n          width: calc(2 * var(--fwcu));\n          display: block;\n        }\n        .fwc-mcard .fwc-active-bookmark {\n          background-color: var(--color-primary);\n        }\n        .fwc-mcard .fwc-active-bookmark svg {\n          fill: var(--color-white);\n        }\n        .fwc-hide,\n        .fwc-full .fwc-hide {\n          display: none;\n        }\n        .fwc-hide-vis {\n          visibility: hidden;\n        }\n\n        @media screen and (max-width: 900px) {\n          .fwc-mcard .fwc-description-section {\n            padding: calc(3 * var(--fwcu));\n          }\n          .fwc-mcard.fwc-full {\n            display: block;\n          }\n          .fwc-mcard.fwc-full .fwc-badge-bookmark {\n            position: absolute;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin: calc(-6 * var(--fwcu)) 0 0;\n            z-index: 1;\n            width: 100%;\n          }\n          .fwc-mcard.fwc-full button {\n            height: calc(5.5 * var(--fwcu));\n            width: calc(5.5 * var(--fwcu));\n            font-size: calc(2.75 * var(--fwcu));\n          }\n          .fwc-mcard.fwc-full .fwc-media-image {\n            border-radius: calc(1.5 * var(--fwcu)) calc(1.5 * var(--fwcu)) 0 0;\n          }\n          .fwc-full .fwc-bookmark svg {\n            height: calc(2.75 * var(--fwcu));\n            width: calc(2.75 * var(--fwcu));\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        image: {
          type: String
        },
        horizontal: {
          type: Boolean
        },
        badge: {
          type: String
        },
        checked: {
          type: Boolean
        },
        showBookmark: {
          attribute: 'show-bookmark',
          type: Boolean
        },
        labelAriaBookmark: {
          attribute: 'label-aria-bookmark',
          type: String
        },
        _hasPhoneSlot: {},
        _hasLinkSlot: {}
      };
    }
  }]);

  return FwcCardMediaComponent;
}(LitElement);

var FwcCardMedia = /*#__PURE__*/function (_FwcBase8) {
  _inherits(FwcCardMedia, _FwcBase8);

  var _super21 = _createSuper(FwcCardMedia);

  function FwcCardMedia() {
    _classCallCheck(this, FwcCardMedia);

    return _super21.call(this, 'fwc-card-media', FwcCardMediaComponent);
  }

  return FwcCardMedia;
}(FwcBase);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


var previousValues = new WeakMap();
/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

var ifDefined = directive(function (value) {
  return function (part) {
    var previousValue = previousValues.get(part);

    if (value === undefined && part instanceof AttributePart) {
      // If the value is undefined, remove the attribute, but only if the value
      // was previously defined.
      if (previousValue !== undefined || !previousValues.has(part)) {
        var name = part.committer.name;
        part.committer.element.removeAttribute(name);
      }
    } else if (value !== previousValue) {
      part.setValue(value);
    }

    previousValues.set(part, value);
  };
});

var FwcCardMediaImageComponent = /*#__PURE__*/function (_LitElement10) {
  _inherits(FwcCardMediaImageComponent, _LitElement10);

  var _super22 = _createSuper(FwcCardMediaImageComponent);

  function FwcCardMediaImageComponent() {
    var _this28;

    _classCallCheck(this, FwcCardMediaImageComponent);

    _this28 = _super22.call(this);
    _this28.badge = null;
    _this28.badgeClass = "success";
    _this28.bookmark = null;
    _this28.bookmarkStates = {
      checked: "checked",
      unchecked: "unchecked"
    };
    _this28.sizes = {
      sm: "sm",
      md: "md",
      lg: "lg",
      full: "full"
    };
    _this28.image = null;
    _this28.labelAriaBookmark = 'Bookmark';
    _this28.size = _this28.sizes.sm;
    return _this28;
  }

  _createClass(FwcCardMediaImageComponent, [{
    key: "updated",
    value: function updated(changedProperties) {
      var _this29 = this;

      changedProperties.forEach(function (oldValue, propName) {
        if (propName === 'bookmark' && oldValue) {
          _this29._updateBookmarkState();
        }

        if (propName === 'image') {
          _this29._initImage();

          _this29._onImageLoad();
        }
      });
    }
  }, {
    key: "_updateBookmarkState",
    value: function _updateBookmarkState() {
      var btn = this.shadowRoot.querySelector('#Bookmark');

      switch (this.bookmark) {
        case this.bookmarkStates.unchecked:
          btn.classList.remove('active');
          break;

        case this.bookmarkStates.checked:
          btn.classList.add('active');
          break;
      }
    }
  }, {
    key: "_setBookmarkState",
    value: function _setBookmarkState() {
      var oldVal = this.shadowRoot.querySelector('#Bookmark').classList.contains('active');
      this.bookmark = oldVal ? this.bookmarkStates.unchecked : this.bookmarkStates.checked;
    }
  }, {
    key: "_onBookmarkClick",
    value: function _onBookmarkClick(e) {
      this._setBookmarkState();

      var event = new CustomEvent('fwc-card-media-image-bookmark', {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_initBookmark",
    value: function _initBookmark() {
      return html(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      <button\n        id=\"Bookmark\"\n        class=\"bookmark ", "\"\n        @click=", "\n        aria-label=\"", "\"\n        aria-pressed=\"", "\"\n      >\n        <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\">\n          <path d=\"M5,0 L5,50 L8.46467391,47.4184783 L24.5652174,35.326087 L40.6657609,47.4184783 L44.1304348,50 L44.1304348,0 L5,0 Z M9.34782609,4.34782609 L39.7826087,4.34782609 L39.7826087,41.3043478 L25.8559783,30.8423913 L24.5652174,29.8913043 L23.2744565,30.8423913 L9.34782609,41.3043478 L9.34782609,4.34782609 Z\"/>\n        </svg>\n      </button>\n    "])), this.bookmark === this.bookmarkStates.checked ? 'active' : '', this._onBookmarkClick, this.labelAriaBookmark, this.bookmark === this.bookmarkStates.checked);
    }
  }, {
    key: "_initOptional",
    value: function _initOptional() {
      return html(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      <div class=\"optional ", "\" id=\"Optional\">\n        ", "\n        ", "\n      </div>\n    "])), this.badge ? 'between' : 'end', this._initBadge(), ifDefined(this.bookmark ? this._initBookmark() : null));
    }
  }, {
    key: "_initBadge",
    value: function _initBadge() {
      var badge = this.badge ? html(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["<span class=\"fwc-badge ", "\">", "</span>"])), this.badgeClass, this.badge) : null;
      return badge;
    }
  }, {
    key: "_initBody",
    value: function _initBody() {
      var slot = html(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["<slot name=\"body\"></slot>"])));
      var body = html(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["<p>", "</p>"])), this.body);
      return this.body ? body : slot;
    }
  }, {
    key: "_initTitle",
    value: function _initTitle() {
      var h2 = html(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["<h2>", "</h2>"])), this.title);
      var h3 = html(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["<h3>", "</h3>"])), this.title);
      var title = this.size === this.sizes.lg ? h2 : h3;
      return title;
    }
  }, {
    key: "_onImageLoad",
    value: function _onImageLoad() {
      var img = this.shadowRoot.querySelector('#Image');

      if (img) {
        img.addEventListener("load", function (e) {
          e.target.classList.add('load');
        });
      }
    }
  }, {
    key: "_initImage",
    value: function _initImage() {
      if (this.image) {
        var source = this.image.source ? this.image.source : [];
        var srcset = source.map(function (src) {
          return html(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n          <source srcset=\"", "\" media=\"", "\" type=\"", "\">\n        "])), src.srcset, ifDefined(src.media ? src.media : undefined), ifDefined(src.type ? src.type : undefined));
        });
        return html(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n        <picture>\n          ", "\n          <img id=\"Image\" src=\"", "\" alt=\"", "\" width=\"", "\" height=\"", "\" class=\"", "\" @loadstart=", ">\n        </picture>\n      "])), srcset, this.image.img.src, this.image.img.alt, this.image.img.width, this.image.img.height, this.size, this._onImageLoad);
      }

      return html(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n      <div id=\"Placeholder\" class=\"placeholder ", "\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"51\" viewBox=\"0 0 50 51\">\n          <path d=\"M0,5 L0,43.4615385 L50,43.4615385 L50,5 L0,5 Z M3.84615385,8.84615385 L46.1538462,8.84615385 L46.1538462,34.9278846 L31.1899038,19.9639423 L29.8076923,18.6418269 L28.4254808,19.9639423 L24.0384615,24.3509615 L16.7668269,17.0793269 L15.3846154,15.7572115 L14.0024038,17.0793269 L3.84615385,27.2355769 L3.84615385,8.84615385 Z M37.5,10.7692308 C34.8707942,10.7692308 32.6923077,12.9477173 32.6923077,15.5769231 C32.6923077,18.2061308 34.8707942,20.3846154 37.5,20.3846154 C40.1292077,20.3846154 42.3076923,18.2061308 42.3076923,15.5769231 C42.3076923,12.9477173 40.1292077,10.7692308 37.5,10.7692308 Z M37.5,14.6153846 C38.0558904,14.6153846 38.4615385,15.0210346 38.4615385,15.5769231 C38.4615385,16.1328135 38.0558904,16.5384615 37.5,16.5384615 C36.9441115,16.5384615 36.5384615,16.1328135 36.5384615,15.5769231 C36.5384615,15.0210346 36.9441115,14.6153846 37.5,14.6153846 Z M15.3846154,21.2259615 L21.2740385,27.1153846 L8.77403846,39.6153846 L3.84615385,39.6153846 L3.84615385,32.7644231 L15.3846154,21.2259615 Z M29.8076923,24.1105769 L45.3125,39.6153846 L14.3028846,39.6153846 L29.8076923,24.1105769 Z\" transform=\"translate(0 .23)\"/>\n        </svg>\n      </div>\n    "])), this.size);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/components/fwc-badges.css\">\n      <div class=\"card ", "\">\n        <div class=\"wrapper\">\n          ", "\n          ", "\n        </div>\n        <div class=\"content\" id=\"Content\">\n          ", "\n          ", "\n          ", "\n          ", "\n          <slot name=\"links\"></slot>\n        </div>\n      </div>\n    "])), this.size, this._initImage(), this.size !== this.sizes.full ? this._initOptional() : '', this.size === this.sizes.full ? this._initOptional() : '', this._initTitle(), this.body ? html(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["<p>", "</p>"])), this.body) : null, !this.body ? html(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["<slot name=\"body\" id=\"SlotBody\"></slot>"]))) : null);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n        :host {\n          width: 100%;\n          height: 100%;\n          display: block;\n        }\n        .card {\n          background: var(--color-white);\n          border-radius: var(--border-radius);\n          box-shadow: var(--box-shadow);\n          overflow: hidden;\n          height: 100%;\n        }\n        .card.full {\n          display: flex;\n          flex-direction: row-reverse;\n          align-items: stretch;\n          max-height: calc(34*var(--fwcu)); /* 272px */\n        }\n\n        .wrapper {\n          position: relative;\n        }\n\n        .optional {\n          position: absolute;\n          display:flex;\n          align-items: center;\n          height: calc(4*var(--fwcu));\n          width:100%;\n          bottom: calc(-1*var(--fwcu));\n          padding: 0 calc(3*var(--fwcu));\n        }\n        .optional.end {\n          justify-content: flex-end;\n        }\n        .optional.between {\n          justify-content: space-between;\n        }\n        \n        .content {\n          padding: calc(3*var(--fwcu));\n        }\n  \n        .card.md .content {\n          padding: calc(4*var(--fwcu));\n        }\n        .card.md .optional {\n          padding: 0 calc(4*var(--fwcu));\n        }\n\n        .card.lg .content {\n          padding: calc(4*var(--fwcu)) calc(6*var(--fwcu));\n        }\n        .card.full .content {\n          padding: calc(4*var(--fwcu)) calc(6*var(--fwcu));\n        }\n\n        .card.lg .optional {\n          padding: 0 calc(6*var(--fwcu));\n        }\n\n        .content h3 { \n          margin:0;\n          font-size: calc(3*var(--fwcu));\n          line-height: calc(3.75*var(--fwcu));\n          font-family: var(--font-serif);\n          font-weight: 500;\n        }\n        .content h2 {\n          margin:0;\n          font-size: calc(4 * var(--fwcu));\n          line-height: calc(4.75 * var(--fwcu));\n          font-family: var(--font-serif);\n          font-weight: 600;\n        }\n\n        .content p {\n          padding:calc(1.5*var(--fwcu)) 0 calc(2.5*var(--fwcu));\n          margin:0;\n          font-size: var(--default-font-size);\n          line-height: calc(2.75*var(--fwcu));\n        }\n  \n        /* Full size cards */\n        .content .optional {\n          position: static;\n          height: auto;\n          padding:0 0 calc(3.25*var(--fwcu)) 0;\n        }\n\n        .bookmark {\n          height: calc(3.75*var(--fwcu));\n          width: calc(3.75*var(--fwcu));\n          border: 1px solid var(--color-primary);\n          border-radius: 50%;\n          background-color: var(--color-white);\n          font-size: calc(2.75*var(--fwcu));\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer;\n          padding:0;\n        }\n        .bookmark.active {\n          background-color: var(--color-primary);\n        }\n        .bookmark svg { \n          fill: var(--color-primary);\n          height: calc(1.5*var(--fwcu));\n          width: calc(1.5*var(--fwcu));\n        }\n        .bookmark.active svg {\n          fill: var(--color-white);\n        }\n\n\n        slot[name=\"links\"] {\n          display: flex;\n          align-items: center;\n          justify-content: flex-start;\n          flex-wrap: wrap;\n        }\n        slot[name=\"links\"]::slotted(a) {\n          flex:0 0 auto;\n          padding-right: calc(2*var(--fwcu));\n          padding-bottom: var(--fwcu);\n        }\n        slot[name=\"body\"] {\n          padding:calc(1.5*var(--fwcu)) 0 calc(2.5*var(--fwcu));\n          display: block;\n        }\n        \n        @media screen and (max-width: 600px) and (hover: none) and (pointer: coarse) {\n          .content p {\n            font-size: var(--default-mobile-font-size);\n          }\n        }\n\n        .placeholder { \n          background: var(--color-gray-six);\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n        .placeholder svg {\n          fill: var(--color-gray-four);\n        }\n\n        img {\n          opacity: 0;\n          transition: opacity 250ms ease-out;\n        }\n        img.load {\n          opacity: 1;\n        }\n        img, .placeholder {\n          object-fit: cover;\n          object-position: top center;\n          width:100%;\n          height: auto;\n        }\n        img.full, .placeholder.full {\n          aspect-ratio: 1.68 / 1;\n          height:100%;\n        }\n\n        img.sm, .placeholder.sm {\n          aspect-ratio: 1.6 / 1;\n        }\n        img.md, .placeholder.md {\n          aspect-ratio: 2.45 / 1;\n        }\n        img.lg, .placeholder.lg {\n          aspect-ratio: 2 / 1;\n        }\n\n        @media screen and (max-width: 600px) {\n          .card.md .content,\n          .card.lg .content,\n          .card.full .content {\n            padding: calc(3*var(--fwcu));\n          }\n\n          .card.md .optional,\n          .card.lg .optional {\n            padding: 0 calc(3*var(--fwcu));\n          }\n\n          .card.full { \n            display: block;\n            max-height: none;\n          }\n          .card.full .content {\n            padding-top:0;\n          }\n          .content .optional {\n            position: relative;\n            top: calc(-3*var(--fwcu));\n            padding-bottom:0;\n          }\n\n          img.md,\n          img.lg,\n          img.full,\n          .placeholder.md,\n          .placeholder.lg,\n          .placeholder.full {\n            aspect-ratio: 1.6 / 1;\n          }\n        }\n\n        /* Safari doesn't support aspect-raitio yet */\n        @supports not (aspect-ratio: 1.6 / 1) { \n          img.sm,\n          img.md,\n          .placeholder.sm,\n          .placeholder.md {\n            height: calc(28*var(--fwcu)); /* 224px */\n          }\n          img.lg,\n          .placeholder.lg {\n            height: calc(46.5*var(--fwcu)); /* 372px */\n          }\n          img.full,\n          .placeholder.full {\n            height: calc(34*var(--fwcu)); /* 272px */\n          }\n          @media screen and (max-width: 600px) {\n            img.lg,\n            img.full,\n            .placeholder.lg,\n            .placeholder.full {\n              height: calc(28*var(--fwcu)); /* 224px */\n            }\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        badge: {
          type: String
        },
        badgeClass: {
          attribute: 'badge-class',
          type: String
        },
        body: {
          type: String
        },
        bookmark: {
          type: String,
          reflect: true
        },
        image: {
          type: Object
        },
        labelAriaBookmark: {
          attribute: 'label-aria-bookmark',
          type: String
        },
        size: {
          type: String
        },
        title: {
          type: String
        }
      };
    }
  }]);

  return FwcCardMediaImageComponent;
}(LitElement);

var FwcCardMediaImage = /*#__PURE__*/function (_FwcBase9) {
  _inherits(FwcCardMediaImage, _FwcBase9);

  var _super23 = _createSuper(FwcCardMediaImage);

  function FwcCardMediaImage() {
    _classCallCheck(this, FwcCardMediaImage);

    return _super23.call(this, 'fwc-card-media-image', FwcCardMediaImageComponent);
  }

  return FwcCardMediaImage;
}(FwcBase);

var FwcCarouselCardsComponent = /*#__PURE__*/function (_LitElement11) {
  _inherits(FwcCarouselCardsComponent, _LitElement11);

  var _super24 = _createSuper(FwcCarouselCardsComponent);

  function FwcCarouselCardsComponent() {
    var _this30;

    _classCallCheck(this, FwcCarouselCardsComponent);

    _this30 = _super24.call(this);
    _this30.cards = [];
    _this30.labelAria = 'Carousel';
    _this30.labelAriaPrevBtn = 'Previous Slide';
    _this30.labelAriaNextBtn = 'Next Slide';
    _this30.active = 0;
    _this30.carouselItems = null;
    _this30._hideBtns = false;
    _this30._handleScroll = debounce(function (scrollContainer) {
      _this30._setActivePageFromScroll(scrollContainer);
    }, 100);
    return _this30;
  }

  _createClass(FwcCarouselCardsComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this31 = this;

      var scrollContainer = this.shadowRoot.querySelector('ul');
      var pagerEl = this.shadowRoot.querySelector('.fwc-pager');
      var transitionEndEvent = new CustomEvent('fwc-carousel-cards-animation-end', {
        detail: this,
        bubbles: true,
        composed: false
      });
      this.cards = this._buildCards();
      this.carouselItems = scrollContainer.children;
      this._hideBtns = this.cards.length > 3 ? false : true;
      scrollContainer.addEventListener('scroll', function () {
        return _this31._handleScroll(scrollContainer);
      });

      pagerEl.onanimationend = function () {
        _this31.dispatchEvent(transitionEndEvent);
      };
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this32 = this;

      var scrollContainer = this.shadowRoot.querySelector('ul');
      scrollContainer.removeEventListener('scroll', function () {
        return _this32._handleScroll(scrollContainer);
      });

      _get(_getPrototypeOf(FwcCarouselCardsComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "_handleKeyDown",
    value: function _handleKeyDown(e) {
      if (e.key === 'ArrowLeft' || e.key === 'Left') {
        e.preventDefault();

        this._prev();
      }

      if (e.key === 'ArrowRight' || e.key === 'Right') {
        e.preventDefault();

        this._next();
      }
    }
  }, {
    key: "_setActivePageFromScroll",
    value: function _setActivePageFromScroll(scrollContainer) {
      var posLeft = Math.round(scrollContainer.scrollLeft);
      var cards = [].slice.call(scrollContainer.children);
      var inc = window.innerWidth > breakpoints.sm ? 3 : 1;

      if (posLeft === 0) {
        this.active = 0;
        return;
      }

      this.active = Math.ceil(Math.round(posLeft / cards[0].offsetWidth) / inc);
    }
  }, {
    key: "_getIcon",
    value: function _getIcon(type) {
      var icons = {
        website: html(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral([" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <path d=\"M25,0 C11.2141938,0 0,11.2141938 0,25 C0,38.7858083 11.2141938,50 25,50 C26.953125,50 28.8411458,49.7558604 30.6640625,49.3245437 L27.9947917,42.6676438 C26.9856771,44.6940104 25.9114583,45.8333333 25,45.8333333 C24.8453771,45.8333333 24.6826167,45.7763667 24.5198563,45.7112625 C24.4628917,45.68685 24.405925,45.6705729 24.3408208,45.6380208 C24.2838542,45.6136062 24.2350271,45.5647792 24.1861979,45.5403646 C23.9339188,45.3694667 23.6572271,45.1334646 23.3398438,44.7591146 C23.1445312,44.5393875 22.9573563,44.2789708 22.7620438,43.9860021 C22.5992833,43.7418625 22.4365229,43.4651687 22.2737625,43.1722 C22.2249354,43.0826833 22.1761063,42.9850271 22.1272792,42.8955083 C21.8098958,42.2851562 21.5006521,41.5771479 21.2076833,40.812175 C21.09375,40.5192063 20.9879562,40.2018229 20.8821625,39.8763021 C20.6705729,39.249675 20.4671229,38.5823562 20.2799479,37.8662104 C20.2473958,37.7441417 20.2148438,37.6302083 20.1822917,37.5 L25.9277354,37.5 L24.2594396,33.3333333 L19.3522146,33.3333333 C19.1975917,32.2998042 19.0836583,31.2174479 18.9860021,30.1106771 C18.9453125,29.5817062 18.9127604,29.0445958 18.8802083,28.5074875 C18.8151042,27.3518875 18.75,26.2044271 18.75,25 C18.75,23.8850917 18.8151042,22.8190104 18.8720708,21.7447917 C18.9127604,21.0367833 18.95345,20.3369146 19.0104167,19.6614583 C19.0755208,18.9860021 19.1569021,18.3268229 19.2382812,17.6757812 C19.2871104,17.3339854 19.3359375,17.000325 19.3847667,16.6666667 L30.6152354,16.6666667 C30.9082042,18.5953771 31.1360687,20.6461583 31.2093104,22.9166667 L20.8333333,22.9166667 L20.8496104,22.9492188 L24.1455083,23.9339188 L35.3678396,27.3030604 C35.3678396,27.2298187 35.3759771,27.156575 35.3841146,27.0833333 L45.7275396,27.0833333 C45.6217458,28.1656896 45.4264333,29.2154958 45.1578771,30.2408854 L49.1292312,31.437175 C49.6826167,29.3782562 50,27.2298187 50,25 C50,11.2141938 38.7858083,0 25,0 Z M25,4.16666667 C26.5136729,4.16666667 28.4912104,7.27539167 29.8095708,12.5 L20.1904292,12.5 C20.2148438,12.4186208 20.2229813,12.3209646 20.2473958,12.2395833 C20.3694667,11.7675792 20.51595,11.3444021 20.6461583,10.8968104 C20.8170583,10.3597 20.9716792,9.79817708 21.1507167,9.32617292 C21.5087896,8.34961042 21.9075521,7.48697917 22.3063146,6.77083333 C22.4934896,6.4453125 22.6725271,6.15234375 22.8515625,5.89192708 C23.0143229,5.655925 23.1770833,5.42806042 23.3398438,5.24088542 C23.6897792,4.82584583 23.9990229,4.56542917 24.2594396,4.41080833 C24.3001312,4.38639375 24.3408208,4.36197917 24.3815104,4.34570417 C24.4710292,4.296875 24.5524083,4.26432292 24.6256521,4.23177083 C24.7558604,4.19921875 24.8779292,4.16666667 25,4.16666667 Z M18.3837896,5.2653 C18.1233729,5.76171875 17.8873708,6.28255208 17.6513667,6.8196625 C17.578125,6.99869792 17.5048833,7.18587292 17.4397792,7.37304792 C17.3421229,7.60905 17.2444667,7.83691458 17.1549479,8.08919375 C17.1142583,8.18685 17.0898438,8.30078125 17.0572917,8.3984375 C16.7236333,9.33431042 16.4306646,10.3271479 16.1702479,11.3606771 C16.0888667,11.6699229 16.015625,11.9791667 15.9505208,12.29655 C15.9342458,12.3616542 15.9098312,12.4348958 15.8935542,12.5 L8.36588542,12.5 C10.8805333,9.1796875 14.3554687,6.62435 18.3837896,5.2653 Z M31.62435,5.2653 C35.6526687,6.62435 39.1276042,9.1796875 41.6341146,12.5 L34.1064458,12.5 C33.4879562,9.7574875 32.6660167,7.27539167 31.62435,5.2653 Z M5.92447917,16.6666667 L15.1529958,16.6666667 C15.0634771,17.3421229 14.9983729,18.0338542 14.9251313,18.7255854 C14.8193354,19.7591146 14.7460938,20.8007812 14.6891271,21.8831375 C14.6728521,22.2330729 14.6321625,22.5667312 14.6158854,22.9166667 L4.27246042,22.9166667 C4.4921875,20.7112625 5.0699875,18.6116542 5.92447917,16.6666667 Z M34.8470062,16.6666667 L44.0755208,16.6666667 C44.9300125,18.6116542 45.5078125,20.7112625 45.7275396,22.9166667 L35.3841146,22.9166667 C35.3108729,20.7926437 35.1236979,18.6930333 34.8470062,16.6666667 Z M4.27246042,27.0833333 L14.6158854,27.0833333 C14.6403,27.6611333 14.6891271,28.2307937 14.7216792,28.8085937 C14.7460937,29.2561854 14.7623708,29.7119146 14.8030604,30.1513667 C14.8844396,31.2255854 14.9983729,32.2916667 15.1448563,33.3333333 L5.92447917,33.3333333 C5.0699875,31.3883458 4.4921875,29.2887375 4.27246042,27.0833333 Z M27.0833333,29.1666667 L35.4166667,50 L39.3310542,44.4010417 L45.8333333,50 L50,45.3206375 L43.1396479,39.6240229 L47.9166667,35.4166667 L27.0833333,29.1666667 Z M8.37402292,37.5 L15.8854167,37.5 C15.9179688,37.6302083 15.9505208,37.7522792 15.9830729,37.8824875 C16.0481771,38.1754562 16.1214188,38.4521479 16.1946625,38.7369792 C16.4550792,39.7623708 16.7561854,40.7552083 17.0817062,41.6748042 C17.1061208,41.7561854 17.1223958,41.8457042 17.1549479,41.9189458 C17.2607417,42.2200521 17.3828125,42.5048833 17.5048833,42.7978521 C17.56185,42.9443354 17.6269542,43.1070958 17.6839188,43.2535812 C17.8873708,43.7174479 18.0908208,44.1569021 18.3024083,44.5800792 C18.3268229,44.6289062 18.3512375,44.6858729 18.3756521,44.7347 C14.3473312,43.3837896 10.8805333,40.82845 8.37402292,37.5 Z\" />\n      </svg>"]))),
        phone: html(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral([" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <path d=\"M10.9054734,49.9309817 C9.90127673,49.9309817 8.91206809,49.5712695 8.08772757,48.9117971 L7.96782349,48.8518451 L7.90787145,48.791893 L1.91266762,42.6168331 L1.97261965,42.556881 C0.121600469,40.8482479 -0.447943896,38.2927923 0.353914618,36.0820609 C0.361408622,36.0670729 0.346420613,36.0370969 0.353914618,36.0221088 C1.98011366,31.3683319 6.13928632,22.3830201 14.2627875,14.2595189 C22.4162647,6.1060417 31.5214806,2.11173715 36.0253774,0.350646019 L36.0853295,0.350646019 C38.415965,-0.42873048 40.9414446,0.125825875 42.7400057,1.66959086 L48.7951616,7.72474674 C50.3838906,9.31347575 50.3838906,12.0712695 48.7951616,13.6599985 L41.0013966,21.4537635 L40.9414446,21.5736676 C39.3527156,23.1623966 36.5349698,23.1623966 34.9462408,21.5736676 L31.1093103,17.7367371 C29.7229194,18.4037036 26.4180633,20.1123367 23.2555933,23.1324206 C20.1156053,26.1300225 18.5118882,29.5772647 17.9198619,30.9261856 L21.7567923,34.763116 C23.3680033,36.3743271 23.3979794,39.0571808 21.6968403,40.6384158 L21.7567923,40.6983678 L21.5769362,40.878224 L13.8431233,48.8518451 L13.7232192,48.9117971 C12.8988786,49.5712695 11.90967,49.9309817 10.9054734,49.9309817 Z M10.9054734,46.0940513 C11.0478595,46.0940513 11.1902456,46.0266053 11.3251376,45.9141952 L19.1788547,37.880622 C19.1638667,37.89561 19.2912647,37.6932719 19.0589506,37.4609578 L14.2627875,32.6647947 L13.3635069,31.8254662 L13.7831712,30.6264254 C13.7831712,30.6264254 15.9864086,24.7286436 20.6177036,20.3146748 L21.0373679,19.9549626 C25.4963007,15.885718 30.7495981,13.6599985 30.7495981,13.6599985 L31.9486388,13.1204302 L37.6440825,18.8158738 C37.9738187,19.14561 37.9138667,19.14561 38.2436029,18.8158738 L46.0973199,10.9621568 C46.4270561,10.6324206 46.4270561,10.7523247 46.0973199,10.4225885 L40.2220201,4.5472887 C39.3377276,3.79039422 38.400977,3.63302012 37.2843703,4.00772036 C32.9378475,5.71635345 24.4921041,9.42588583 16.9606292,16.9573606 C9.36920239,24.5487875 5.40487385,33.159399 3.95103692,37.3410537 C3.65877073,38.1204302 3.86860287,39.2745069 4.5505573,39.8590393 L4.67046138,39.9789434 L10.4858091,45.9141952 C10.6207012,46.0266053 10.7630873,46.0940513 10.9054734,46.0940513 Z\" transform=\"matrix(1 0 0 -1 0 49.931)\" />\n      </svg>"]))),
        link: html(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral([" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <path d=\"M25,0 C11.2154442,0 0,11.2154442 0,25 C0,38.7845558 11.2154442,50 25,50 C38.7845558,50 50,38.7845558 50,25 C50,11.2154442 38.7845558,0 25,0 Z M25,3.84615385 C36.7037269,3.84615385 46.1538462,13.296275 46.1538462,25 C46.1538462,36.7037269 36.7037269,46.1538462 25,46.1538462 C13.296275,46.1538462 3.84615385,36.7037269 3.84615385,25 C3.84615385,13.296275 13.296275,3.84615385 25,3.84615385 Z M26.3822115,12.6802885 L23.6177885,15.3846154 L31.3100962,23.0769231 L11.5384615,23.0769231 L11.5384615,26.9230769 L31.3100962,26.9230769 L23.6177885,34.6153846 L26.3822115,37.3197115 L38.7019231,25 L26.3822115,12.6802885 Z\" />\n      </svg>"])))
      };
      return icons[type];
    }
  }, {
    key: "_getPager",
    value: function _getPager(cards) {
      var length = window.innerWidth > breakpoints.sm ? 3 : 1;
      var numPagers = Math.ceil(cards.length / length);
      var items = [];

      for (var i = 0; i < numPagers; i++) {
        items.push(html(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["<span class=\"", "\"></span>"])), this.active === i ? 'active' : ''));
      }

      return items;
    }
  }, {
    key: "_buildCards",
    value: function _buildCards() {
      var _this33 = this;

      var cards = [];

      for (var i = 0; i < this.cards.length; i++) {
        cards.push(html(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n        <li aria-roledescription=\"slide\"  aria-label=\"", " of ", "\">\n          <div class=\"fwc-carousel-card\">\n            <div class=\"fwc-image\" style=\"background-image: url(", ")\"></div>\n            <div class=\"fwc-body-wrapper\">\n              <h3 class=\"fwc-title\">", "</h4>\n              <div class=\"fwc-body\">", "</div>\n              ", "\n            </div>\n          </div>\n        </li>\n      "])), i + 1, this.cards.length, this.cards[i].image, this.cards[i].title, this.cards[i].body, this.cards[i].links.map(function (link, index) {
          return html(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n                  <div class=\"fwc-link\">\n                    <a class=\"", "\" href=\"", "\" aria-describedby=\"fwc-carousel-link-text-", "\">", " <span id=\"fwc-carousel-link-text-", "\">", "</span></a>\n                  </div>\n                "])), link.type, link.href, index, _this33._getIcon(link.type), index, link.text);
        })));
      }

      return cards;
    }
  }, {
    key: "_next",
    value: function _next() {
      var inc = window.innerWidth > breakpoints.sm ? 3 : 1;
      var nextEvent = new CustomEvent('fwc-carousel-cards-next', {
        detail: this,
        bubbles: true,
        composed: false
      });
      var targetIndx = 0;

      if (this.active + 1 >= Math.ceil(this.carouselItems.length / inc)) {
        return;
      }

      this.active += 1;
      targetIndx = inc === 3 ? 3 * this.active : this.active; // scrollIntoView inline:start is needed for ie, that is its default

      this.carouselItems[targetIndx].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      this.dispatchEvent(nextEvent);
    }
  }, {
    key: "_prev",
    value: function _prev() {
      var inc = window.innerWidth > breakpoints.sm ? 3 : 1;
      var prevEvent = new CustomEvent('fwc-carousel-cards-prev', {
        detail: this,
        bubbles: true,
        composed: false
      });
      var targetIndx = 0;

      if (this.active - 1 < 0) {
        return;
      }

      this.active -= 1;
      targetIndx = inc === 3 ? 3 * this.active : this.active; // scrollIntoView inline:start is needed for ie, that is its default

      this.carouselItems[targetIndx].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      this.dispatchEvent(prevEvent);
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      this._next();
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      this._prev();
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n      <section @keydown=\"", "\" tabindex=\"0\" aria-roledescription=\"carousel\" aria-label=\"", "\">\n        <button class=\"fwc-prev ", " ", "\" @click=\"", "\" aria-label=\"", "\" aria-hidden=\"", "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n            <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\"></polygon>\n          </svg>\n        </button>\n        <ul role=\"list\">\n          ", "\n        </ul>\n        <button class=\"fwc-next ", " ", "\" @click=\"", "\" aria-label=\"", "\" aria-hidden=\"", "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n            <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\"></polygon>\n          </svg>\n        </button>\n        <div class=\"fwc-pager\">", "</div>\n      </section>\n    "])), this._handleKeyDown, this.labelAria, this._hideBtns ? 'hidden' : '', this.active - 1 < 0 ? 'disabled' : '', this._prev, this.labelAriaPrevBtn, this._hideBtns, this.cards, this._hideBtns ? 'hidden' : '', (this.active + 1) * 3 >= this.cards.length ? 'disabled' : '', this._next, this.labelAriaNextBtn, this._hideBtns, this._getPager(this.cards));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n        @keyframes carouselSlide {\n          from {\n            width: calc(0.5 * var(--fwcu));\n          }\n          to {\n            width: calc(1.75 * var(--fwcu));\n          }\n        }\n        :host {\n          max-width: 1920px;\n          margin: 0 auto;\n        }\n        section {\n          display: flex;\n          max-width: calc(144 * var(--fwcu));\n          margin: 0 auto;\n          align-items: center;\n          position: relative;\n        }\n\n        section:focus {\n          outline: none;\n        }\n\n        section ul {\n          flex-grow: 1;\n          flex-shrink: 1;\n          flex-basis: calc(100% - (6 * var(--fwcu)));\n          padding: calc(2 * var(--fwcu)) 0 calc(3 * var(--fwcu));\n          overflow-x: auto;\n          overflow-y: hidden;\n          -webkit-overflow-scrolling: touch;\n          scroll-snap-type: x mandatory;\n          -ms-scroll-snap-type: proximity;\n          scroll-behavior: smooth;\n          scrollbar-width: none;\n          display: flex;\n          max-width: calc(144 * var(--fwcu));\n          margin: 0 auto;\n          align-items: stretch;\n          justify-content: flex-start;\n          flex-wrap: nowrap;\n          width: 100%;\n          -ms-overflow-style: none;\n        }\n        ul::-webkit-scrollbar {\n          width: 0;\n          height: 0;\n          display: none;\n        }\n\n        li {\n          list-style: none;\n          flex: 1 0 auto;\n          scroll-snap-align: center;\n          width: 33.3333%;\n          padding: 0 calc(1.5 * var(--fwcu));\n        }\n\n        li > div {\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n        }\n\n        button {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: calc(4.5 * var(--fwcu));\n          width: calc(4.5 * var(--fwcu));\n          background: white;\n          border-radius: 50%;\n          border: 1px solid var(--color-gray-four);\n          flex-basis: calc(4.5 * var(--fwcu));\n          box-shadow: var(--box-shadow);\n          padding: 0;\n          cursor: pointer;\n        }\n        button.hidden {\n          visibility: hidden;\n          opacity: 0;\n        }\n        button.disabled {\n          border-color: var(--color-gray-five);\n          pointer-events: none;\n          color: var(--color-gray-three);\n          box-shadow: none;\n        }\n        button.disabled svg {\n          fill: var(--color-gray-three);\n        }\n        button svg {\n          width: calc(1.75 * var(--fwcu));\n          height: calc(1.75 * var(--fwcu));\n          fill: var(--color-primary);\n        }\n        button.fwc-prev svg {\n          transform: rotate(90deg);\n          margin-left: calc(-0.25 * var(--fwcu));\n        }\n        button.fwc-next svg {\n          transform: rotate(-90deg);\n        }\n        .fwc-carousel-card {\n          border: solid 1px rgba(var(--color-rgb-black), 0.1);\n          background-color: rgba(var(--color-rgb-white), 1);\n          box-shadow: 0 6px 12px 0 rgba(var(--color-rgb-black), 0.08);\n          border-radius: var(--border-radius);\n        }\n        .fwc-pager {\n          display: flex;\n          position: absolute;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          display: flex;\n          justify-content: center;\n        }\n        .fwc-pager span {\n          width: calc(0.5 * var(--fwcu));\n          height: calc(0.5 * var(--fwcu));\n          background: var(--color-gray-four);\n          display: inline-block;\n          margin: 0 calc(0.25 * var(--fwcu));\n          border-radius: var(--border-radius);\n          transition: all 0.25s ease-in-out;\n        }\n        .fwc-pager span.active {\n          animation-name: carouselSlide;\n          animation-duration: 250ms;\n          width: calc(1.75 * var(--fwcu));\n          background: var(--color-primary);\n        }\n        .fwc-image {\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-color: transparent;\n          height: calc(11.75 * var(--fwcu));\n          border-radius: var(--border-radius) var(--border-radius) 0 0;\n        }\n        .fwc-body-wrapper {\n          padding: calc(2.5 * var(--fwcu));\n          flex: 1 0 auto;\n          display: flex;\n          flex-direction: column;\n        }\n        .fwc-title {\n          font-size: calc(2.5 * var(--fwcu));\n          line-height: calc(2.75 * var(--fwcu));\n          font-weight: 600;\n          font-family: var(--font-serif);\n          margin: calc(2 * var(--fwcu)) 0;\n          color: var(--color-gray-one);\n        }\n        .fwc-body {\n          font-size: calc(1.5 * var(--fwcu));\n          line-height: calc(2.75 * var(--fwcu));\n          margin-bottom: calc(2 * var(--fwcu));\n          flex: 1 0 auto;\n          color: var(--color-gray-one);\n        }\n        .fwc-link {\n          margin-bottom: calc(1.25 * var(--fwcu));\n        }\n        .fwc-link a {\n          display: inline-flex;\n          align-items: center;\n          font-weight: 700;\n          color: var(--color-primary);\n          text-decoration: none;\n        }\n        .fwc-link a:hover {\n          color: var(--color-primary-hover);\n        }\n        .fwc-link svg {\n          min-width: calc(2.25 * var(--fwcu));\n          height: calc(2.25 * var(--fwcu));\n          margin-right: var(--fwcu);\n          fill: var(--color-gray-three);\n          flex-basis: calc(2.25 * var(--fwcu));\n        }\n\n        @media screen and (max-width: 600px) {\n          li {\n            width: 100%;\n            flex: 0 0 auto;\n            scroll-snap-align: center;\n          }\n          button {\n            display: none;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        cards: {
          type: Array
        },
        labelAria: {
          attribute: 'label-aria',
          type: String
        },
        labelAriaPrevBtn: {
          attribute: 'label-aria-prev-btn',
          type: String
        },
        labelAriaNextBtn: {
          attribute: 'label-aria-next-btn',
          type: String
        },
        active: {}
      };
    }
  }]);

  return FwcCarouselCardsComponent;
}(LitElement);

var FwcCarouselCards = /*#__PURE__*/function (_FwcBase10) {
  _inherits(FwcCarouselCards, _FwcBase10);

  var _super25 = _createSuper(FwcCarouselCards);

  function FwcCarouselCards() {
    _classCallCheck(this, FwcCarouselCards);

    return _super25.call(this, 'fwc-carousel-cards', FwcCarouselCardsComponent);
  }

  return FwcCarouselCards;
}(FwcBase);

var FwcCarouselGenericComponent = /*#__PURE__*/function (_LitElement12) {
  _inherits(FwcCarouselGenericComponent, _LitElement12);

  var _super26 = _createSuper(FwcCarouselGenericComponent);

  function FwcCarouselGenericComponent() {
    var _this34;

    _classCallCheck(this, FwcCarouselGenericComponent);

    _this34 = _super26.call(this);
    _this34.labelAria = 'Carousel';
    _this34.labelAriaPrevBtn = 'Previous Slide';
    _this34.labelAriaNextBtn = 'Next Slide';
    _this34.active = 0;
    _this34.carouselItems = [];
    _this34._hideBtns = false;
    _this34._handleScroll = debounce(function (scrollContainer) {
      _this34._setActivePageFromScroll(scrollContainer);
    }, 100);
    return _this34;
  }

  _createClass(FwcCarouselGenericComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this35 = this;

      var scrollContainer = this.shadowRoot.querySelector('.fwc-list-cont');
      var pagerEl = this.shadowRoot.querySelector('.fwc-pager');
      var animationEndEvent = new CustomEvent('fwc-carousel-generic-animation-end', {
        detail: this,
        bubbles: true,
        composed: false
      });
      this.carouselItems = this._getSlotted();
      this._hideBtns = this.carouselItems.length > 1 ? false : true;
      scrollContainer.addEventListener('scroll', function () {
        return _this35._handleScroll(scrollContainer);
      });
      this.requestUpdate();

      pagerEl.onanimationend = function () {
        _this35.dispatchEvent(animationEndEvent);
      };
    }
  }, {
    key: "_handleKeyDown",
    value: function _handleKeyDown(e) {
      if (e.key === 'ArrowLeft' || e.key === 'Left') {
        e.preventDefault();

        this._prev();
      }

      if (e.key === 'ArrowRight' || e.key === 'Right') {
        e.preventDefault();

        this._next();
      }
    }
  }, {
    key: "_setActivePageFromScroll",
    value: function _setActivePageFromScroll(scrollContainer) {
      var posLeft = Math.round(scrollContainer.scrollLeft);

      if (posLeft === 0) {
        this.active = 0;
        return;
      }

      this.active = Math.ceil(Math.round(posLeft / this.carouselItems[0].offsetWidth));
    }
  }, {
    key: "_getPager",
    value: function _getPager(cards) {
      var numPagers = Math.ceil(cards.length);
      var items = [];

      for (var i = 0; i < numPagers; i++) {
        items.push(html(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["<span class=\"", "\"></span>"])), this.active === i ? 'active' : ''));
      }

      return items;
    }
  }, {
    key: "_next",
    value: function _next() {
      var nextEvent = new CustomEvent('fwc-carousel-generic-next', {
        detail: this,
        bubbles: true,
        composed: false
      });

      if (this.active + 1 >= Math.ceil(this.carouselItems.length)) {
        return;
      }

      this.active += 1; // scrollIntoView inline:start is needed for ie, that is its default

      this.carouselItems[this.active].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      this.dispatchEvent(nextEvent);
    }
  }, {
    key: "_prev",
    value: function _prev() {
      var prevEvent = new CustomEvent('fwc-carousel-generic-prev', {
        detail: this,
        bubbles: true,
        composed: false
      });

      if (this.active - 1 < 0) {
        return;
      }

      this.active -= 1; // scrollIntoView inline:start is needed for ie, that is its default

      this.carouselItems[this.active].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
      this.dispatchEvent(prevEvent);
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      this._next();
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      this._prev();
    }
  }, {
    key: "slideToId",
    value: function slideToId(id) {
      if (this.isValidData(id)) {
        this.active = id; // scrollIntoView inline:start is needed for ie, that is its default

        this.carouselItems[this.active].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
    }
  }, {
    key: "_getSlotted",
    value: function _getSlotted() {
      var slot = this.shadowRoot.querySelector('slot');
      var childNodes = slot ? slot.assignedNodes({
        flatten: true
      }) : [];
      return Array.prototype.filter.call(childNodes, function (node) {
        return node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'FWC-CAROUSEL-GENERIC-ITEM';
      });
    }
    /* c8 ignore next 21 */

  }, {
    key: "isValidData",
    value: function isValidData(id) {
      var errors = false;

      try {
        if (id > this.carouselItems.length - 1) {
          errors = true;
          throw new Error("slideToId: ".concat(id, " is greater than this.carouselItems.length. Max: ").concat(this.carouselItems.length - 1, " "));
        }
      } catch (error) {
        console.error(error);
      }

      try {
        if (id < 0) {
          errors = true;
          throw new Error("slideToId: ".concat(id, " is not valid. Min: 0 or greater is required "));
        }
      } catch (error) {
        console.error(error);
      }

      return !errors;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n      <section class=\"fwc-carousel-generic-wrapper\" aria-roledescription=\"carousel\" aria-label=\"", "\">\n        <div class=\"fwc-carousal-wrapper\">\n          <button class=\"fwc-prev ", "", "\" @click=\"", "\" aria-label=\"", "\" aria-hidden=\"", "\" aria-disabled=\"", "\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n              <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\"></polygon>\n            </svg>\n          </button>\n          <div class=\"fwc-list-cont\" @keydown=\"", "\" tabindex=\"0\">\n            <slot role=\"list\" aria-label=\"carousel\"></slot>\n          </div>\n          <button class=\"fwc-next ", "", "\" @click=\"", "\" aria-label=\"", "\" aria-hidden=\"", "\" aria-disabled=\"", "\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n              <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\"></polygon>\n            </svg>\n          </button>\n        </div>\n        <div class=\"fwc-pager\">", "</div>\n      </section>\n    "])), this.labelAria, this._hideBtns ? 'hidden' : '', this.active - 1 < 0 ? ' disabled' : '', this._prev, this.labelAriaPrevBtn, this._hideBtns, this.active - 1 < 0 ? 'true' : 'false', this._handleKeyDown, this._hideBtns ? 'hidden' : '', this.active + 1 >= this.carouselItems.length ? ' disabled' : '', this._next, this.labelAriaNextBtn, this._hideBtns, this.active - 1 < 0 ? 'false' : 'true', this._getPager(this.carouselItems));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n        :host {\n          width: 100%;\n          display: block;\n        }\n        .fwc-carousel-generic-wrapper {\n          position: relative;\n        }\n\n        .fwc-carousel-generic-wrapper:focus {\n          outline: none;\n        }\n\n        .fwc-list-cont {\n          flex-grow: 1;\n          flex-shrink: 1;\n          flex-basis: calc(100% - (6 * var(--fwcu)));\n          padding: 0;\n          overflow-x: auto;\n          overflow-y: hidden;\n          -webkit-overflow-scrolling: touch;\n          scroll-snap-type: x mandatory;\n          -ms-scroll-snap-type: proximity;\n          scroll-behavior: smooth;\n          scrollbar-width: none;\n          display: flex;\n          max-width: calc(144 * var(--fwcu));\n          margin: 0 auto;\n          align-items: stretch;\n          justify-content: flex-start;\n          flex-wrap: nowrap;\n          -ms-overflow-style: none;\n        }\n        .fwc-list-cont::-webkit-scrollbar,\n        .fwc-list-cont::-webkit-scrollbar-track,\n        .fwc-list-cont::-webkit-scrollbar-thumb {\n          width: 0;\n          height: 0;\n          display: none;\n        }\n\n        .fwc-carousal-wrapper {\n          background-color: transparent;\n          padding: calc(8 * var(--fwcu)) 0;\n          display: flex;\n          align-items: center;\n          width: 100%;\n          margin: 0 auto;\n        }\n\n        button {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: calc(4.5 * var(--fwcu));\n          width: calc(4.5 * var(--fwcu));\n          background: var(--color-white);\n          border-radius: 50%;\n          border: 1px solid var(--color-gray-four);\n          flex-basis: calc(4.5 * var(--fwcu));\n          box-shadow: var(--box-shadow);\n          padding: 0;\n          cursor: pointer;\n        }\n        button.disabled {\n          border-color: var(--color-gray-five);\n          pointer-events: none;\n          color: var(--color-gray-three);\n          box-shadow: none;\n        }\n        button.disabled svg {\n          fill: var(--color-gray-three);\n        }\n        button.hidden {\n          visibility: hidden;\n          opacity: 0;\n        }\n        button svg {\n          width: calc(1.75 * var(--fwcu));\n          height: calc(1.75 * var(--fwcu));\n          fill: var(--color-primary);\n        }\n        button.fwc-prev svg {\n          transform: rotate(90deg);\n          margin-left: calc(-0.25 * var(--fwcu));\n        }\n        button.fwc-next svg {\n          transform: rotate(-90deg);\n        }\n        .fwc-pager {\n          display: flex;\n          position: absolute;\n          bottom: calc(0.75 * var(--fwcu));\n          left: 0;\n          right: 0;\n          justify-content: center;\n        }\n        .fwc-pager span {\n          width: calc(0.5 * var(--fwcu));\n          height: calc(0.5 * var(--fwcu));\n          background: var(--color-gray-four);\n          display: inline-block;\n          margin: 0 calc(0.25 * var(--fwcu));\n          border-radius: var(--border-radius);\n          transition: all 0.25s ease-in-out;\n        }\n        .fwc-pager span.active {\n          animation-name: carouselSlide;\n          animation-duration: 250ms;\n          background: var(--color-primary);\n          width: calc(1.75 * var(--fwcu));\n        }\n        .fwc-list-cont {\n          width: calc(100% - (8.5 * var(--fwcu)));\n        }\n        @keyframes carouselSlide {\n          from {\n            width: calc(0.5 * var(--fwcu));\n          }\n          to {\n            width: calc(1.75 * var(--fwcu));\n          }\n        }\n        @media screen and (max-width: 600px) {\n          .fwc-carousal-wrapper {\n            padding: calc(4.5 * var(--fwcu)) 0;\n          }\n          .fwc-list-cont {\n            width: 100%;\n          }\n          button {\n            display: none;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        labelAria: {
          attribute: 'label-aria',
          type: String
        },
        labelAriaPrevBtn: {
          attribute: 'label-aria-prev-btn',
          type: String
        },
        labelAriaNextBtn: {
          attribute: 'label-aria-next-btn',
          type: String
        },
        active: {}
      };
    }
  }]);

  return FwcCarouselGenericComponent;
}(LitElement);

var FwcCarouselGenericItemComponent = /*#__PURE__*/function (_LitElement13) {
  _inherits(FwcCarouselGenericItemComponent, _LitElement13);

  var _super27 = _createSuper(FwcCarouselGenericItemComponent);

  function FwcCarouselGenericItemComponent() {
    _classCallCheck(this, FwcCarouselGenericItemComponent);

    return _super27.call(this);
  }

  _createClass(FwcCarouselGenericItemComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral([" <slot></slot>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n        :host {\n          flex: 0 0 100%;\n          scroll-snap-align: start;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {};
    }
  }]);

  return FwcCarouselGenericItemComponent;
}(LitElement);

var FwcCarouselGeneric = /*#__PURE__*/function (_FwcBase11) {
  _inherits(FwcCarouselGeneric, _FwcBase11);

  var _super28 = _createSuper(FwcCarouselGeneric);

  function FwcCarouselGeneric() {
    var _this36;

    _classCallCheck(this, FwcCarouselGeneric);

    _this36 = _super28.call(this, 'fwc-carousel-generic', FwcCarouselGenericComponent);
    var FwcCarouselGenericItem = new FwcBase('fwc-carousel-generic-item', FwcCarouselGenericItemComponent);
    FwcCarouselGenericItem.build();
    return _this36;
  }

  return FwcCarouselGeneric;
}(FwcBase);

var MobileViewComponent = /*#__PURE__*/function (_LitElement14) {
  _inherits(MobileViewComponent, _LitElement14);

  var _super29 = _createSuper(MobileViewComponent);

  function MobileViewComponent() {
    var _this37;

    _classCallCheck(this, MobileViewComponent);

    _this37 = _super29.call(this);
    _this37.mobileHeaderText = '';
    _this37.open = false;
    return _this37;
  }

  _createClass(MobileViewComponent, [{
    key: "_mobileHeader",
    value: function _mobileHeader() {
      return html(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"73\" width=\"378\" viewBox=\"0 0 378 73\" focusable=\"false\">\n        <defs>\n          <linearGradient id=\"header_bg-a\" x1=\"13.25%\" x2=\"102.965%\" y1=\"58.306%\" y2=\"19.726%\">\n            <stop offset=\"0%\"/>\n            <stop offset=\"39.161%\" stop-color=\"#7C7C7C\"/>\n            <stop offset=\"100%\"/>\n          </linearGradient>\n          <linearGradient id=\"header_bg-b\" x1=\"-82.687%\" x2=\"71.67%\" y1=\"20.748%\" y2=\"75.006%\">\n            <stop offset=\"0%\"/>\n            <stop offset=\"31.645%\" stop-color=\"#FFF\"/>\n            <stop offset=\"100%\"/>\n            <stop offset=\"100%\"/>\n          </linearGradient>\n          <linearGradient id=\"header_bg-c\" x1=\"-21.551%\" x2=\"107.327%\" y1=\"124.03%\" y2=\"124.03%\">\n            <stop offset=\"0%\"/>\n            <stop offset=\"0%\" stop-opacity=\".826\"/>\n            <stop offset=\"100%\" stop-opacity=\"0\"/>\n            <stop offset=\"100%\" stop-opacity=\"0\"/>\n          </linearGradient>\n          <linearGradient id=\"header_bg-d\" x1=\"274.081%\" x2=\"-74.831%\" y1=\"-137.164%\" y2=\"271.264%\">\n            <stop offset=\"0%\"/>\n            <stop offset=\"26.113%\" stop-color=\"#8E8E8E\"/>\n            <stop offset=\"100%\"/>\n            <stop offset=\"100%\"/>\n          </linearGradient>\n        </defs>\n        <g fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1)\">\n          <path fill=\"url(#header_bg-a)\" d=\"M168.970164,50.5456334 L167.43413,52.859419 C162.951276,59.6121119 158.121703,65.9965521 152.984637,72.0048148 L1.42108547e-14,71.9992986 L1.42108547e-14,0.999298638 L192.863478,1.00007944 C187.34699,18.141195 179.413324,34.8147055 168.970164,50.5456334 Z\" opacity=\".05\"/>\n          <path fill=\"url(#header_bg-b)\" d=\"M101.264696,34.7007705 C102.099494,35.2563768 102.931241,35.816573 103.759831,36.3813677 L104.728171,37.0440211 C119.999622,47.4945669 133.450273,59.6160261 145,72.9967476 L1.25000042e-07,72.9992991 L1.25000042e-07,0.999299052 C34.997284,2.95268473 69.9525243,13.944363 101.264696,34.7007705 Z\" opacity=\".031\"/>\n          <path fill=\"url(#header_bg-c)\" d=\"M376.001128,0.999298787 L376.001128,28.9733646 C319.024429,50.5601962 252.830459,45.3171091 198.195226,9.04687168 C197.39418,8.51294489 196.596062,7.97460709 195.800972,7.43185035 L194.871783,6.79505304 C192.133705,4.91857667 189.456625,2.98604102 186.841045,1.00002666 L376.001128,0.999298787 Z\" opacity=\".057\"/>\n          <path fill=\"url(#header_bg-d)\" d=\"M377,0.00288664317 L377,72.9992991 L303.999904,72.9992991 C307.442515,47.9133822 315.355402,23.1547129 327.978477,-7.10542736e-15 L377,0.00288664317 Z\" opacity=\".097\"/>\n        </g>\n      </svg>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n    <div class=\"mobile-view-wrapper ", "\">\n      <div class=\"mobile-view-header\">\n        ", "\n        <h1>", "</h1>\n      </div>\n      <div class=\"mobile-view-body\">\n        <slot name=\"body\"></slot>\n      </div>\n      <div class=\"mobile-view-footer\">\n        <div>\n          <slot name=\"mobile-footer-secondary-button\"></slot>\n        </div>\n        <div>\n          <slot name=\"mobile-footer-primary-button\"></slot>\n        </div>\n      </div>\n    </div>\n    "])), this.open ? 'open' : '', this._mobileHeader(), this.mobileHeaderText);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n        .mobile-view-header,\n        .mobile-view-footer{\n          display: none;\n        }\n\n        @media screen and (max-width: 600px) {\n          .mobile-view-wrapper.open{\n            position: fixed;\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n            top: 0;\n            left: 0;\n            background: var(--color-white);\n            height: 100%;\n            z-index: 3\n          }\n          .open .mobile-view-header{\n            display: block;\n            position: relative;\n            width: 100%;\n            background: var(--color-primary);\n          }\n          .open .mobile-view-body{\n            flex-grow: 1;\n            flex-shrink: 1;\n            flex-basis: auto;\n            overflow: auto;\n            -webkit-overflow-scrolling: touch;\n            position: relative;\n            margin-bottom: calc(9.75 * var(--fwcu));\n            z-index: 3;\n          }\n          .open .mobile-view-footer{\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            height: calc(9.75 * var(--fwcu));\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            align-items: center;\n            padding: calc(2.5 * var(--fwcu));\n            background: var(--color-white);\n            box-shadow: 0px -4px 3px 0 rgba(50, 50, 50, 0.1);\n            z-index: 3;\n          }\n          .mobile-view-header svg{\n            width: 100%;\n            display: block;\n            min-height: 0;\n          }\n          .mobile-view-header h1{\n            position: absolute;\n            color: var(--color-white);\n            left: calc(2 * var(--fwcu));\n            top: 0;\n            bottom: 0;\n            margin: 0;\n            font-family: var(--font-serif);\n            display: flex;\n            align-items: center;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Boolean
        },
        mobileHeaderText: {
          attribute: 'mobile-header-text',
          type: String
        }
      };
    }
  }]);

  return MobileViewComponent;
}(LitElement);

var MobileView = /*#__PURE__*/function (_FwcBase12) {
  _inherits(MobileView, _FwcBase12);

  var _super30 = _createSuper(MobileView);

  function MobileView() {
    _classCallCheck(this, MobileView);

    return _super30.call(this, 'mobile-view', MobileViewComponent);
  }

  return MobileView;
}(FwcBase);

var FwcDatePickerComponent = /*#__PURE__*/function (_LitElement15) {
  _inherits(FwcDatePickerComponent, _LitElement15);

  var _super31 = _createSuper(FwcDatePickerComponent);

  function FwcDatePickerComponent() {
    var _this38;

    _classCallCheck(this, FwcDatePickerComponent);

    _this38 = _super31.call(this);
    _this38.mobileView = new MobileView();

    _this38.mobileView.build();

    _this38.startDate = new Date();
    _this38._startDate = new Date();
    _this38.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    _this38.dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    _this38.dateRange = [null, null];
    _this38.disabledDates = [];
    _this38.inputLabel = 'Select a Date', _this38.labelAriaClose = 'Cancel';
    _this38.btnMobileApply = "Apply";
    _this38.btnMobileCancel = "Cancel";
    _this38.labelAriaNext = 'Next Month';
    _this38.labelAriaMobileCancel = 'Cancel';
    _this38.labelAriaMobileApply = 'Apply';
    _this38.labelAriaPrevious = 'Previous Month';
    _this38.labelAriaCalendarIcon = 'Toggle Calendar';
    _this38.labelAriaDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    _this38._calendarMonths = [];
    _this38._calendarTableRows = [];
    _this38.selectedDate = '';
    _this38._isCalendarOpen = false;
    _this38._rangeEnd = false;
    _this38._rangeStart = false;
    _this38._calendarMaxDate = new Date();
    _this38._calendarMinDate = new Date('01/01/1900');
    _this38._numMonthsToDisplay = 2;
    _this38._maxFutureYears = 20;
    _this38._tempDateStorage = null;
    _this38.isIE = !supportsCssVars;

    _this38._calendarMaxDate.setFullYear(_this38._calendarMaxDate.getFullYear() + _this38._maxFutureYears);

    _this38.focusTrapDesk = ['button.fwc-hide', '.fwc-btn-primary', '.fwc-btn-secondary', '.fwc-calendar-mobile-nav .fwc-btn-prev', '.fwc-calendar-mobile-nav .fwc-btn-next', '.fwc-selected-date', '.fwc-icon-calendar'];
    _this38.focusTrapMobile = ['button.fwc-hide', '.fwc-calendar-header button', '.fwc-selected-date', '.fwc-icon-calendar'];
    return _this38;
  }

  _createClass(FwcDatePickerComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this39 = this;

      var calendar = this.shadowRoot.querySelector('.fwc-calendar');
      var overlay = this.shadowRoot.querySelector('.fwc-overlay');
      calendar.addEventListener('transitionend', function (e) {
        // set the focus trap inside the calendar after open
        if (_this39._isCalendarOpen && e.propertyName === 'opacity') {
          var ignoredFocusTrapSelectors = window.innerWidth > breakpoints.sm ? _this39.focusTrapDesk : _this39.focusTrapMobile;
          focusTrapCustomTabs(_this39, ignoredFocusTrapSelectors);
        } // set the focus back to the open button on calendar close


        if (!_this39._isCalendarOpen && e.propertyName === 'opacity') {
          var iconBtn = _this39.shadowRoot.querySelector('.fwc-icon-calendar');

          iconBtn.focus();
          removeFocusTrapListener(_this39);
        }
      }); // allow esc to close the calendar

      this.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          _this39.toggleCalendarOpen();
        }
      }); // handle background click close

      overlay.addEventListener('click', function (e) {
        if (e.target === overlay && _this39._isCalendarOpen) {
          _this39.toggleCalendarOpen();
        }
      });

      this._setMinMaxDates();
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this40 = this;

      changedProperties.forEach(function (oldValue, propName) {
        if (propName === 'startDate') {
          var parsedDate = new Date(_this40.startDate); // check if a valid date string was passed as an attribute

          if (parsedDate instanceof Date && !isNaN(parsedDate)) {
            _this40._startDate = new Date(_this40.startDate);

            _this40._setInputDate();

            _this40._buildCalendar();
          } else {
            try {
              throw new Error('Invalid date string passed to "start-date" attribute');
            } catch (e) {
              /* eslint-disable no-console */
              console.error(e);
              /* eslint-enable no-console */
            }
          }
        } // when the calendar view changes
        // check and set the selectedDate corresponding button to active


        if (propName === '_calendarTableRows') {
          _this40._setActiveBtnState(_this40.selectedDate);
        }
      });
    }
  }, {
    key: "_setInputDate",
    value: function _setInputDate() {
      // Set date on init with show-date attribute
      if (!this.showDate) return;

      this._handleSelectedDate(this._startDate);
    }
  }, {
    key: "_buildCalendar",
    value: function _buildCalendar() {
      var _this41 = this;

      // show one month in the calendar view between 600 and 900 viewport
      if (window.innerWidth > breakpoints.sm && window.innerWidth <= breakpoints.md) {
        this._numMonthsToDisplay = 1;
      } else {
        this._numMonthsToDisplay = 2;
      } // only show 1 calendar in ie 11


      if (this.isIE) {
        this._numMonthsToDisplay = 1;
      }

      this._calendarMonths = this._getDaysInMonths(this._startDate, this._numMonthsToDisplay);
      this._calendarTableRows = this._calendarMonths.map(function (month) {
        return _this41._breakDaysIntoTableRows(month);
      }); //disable all date outside of dateRange and individual dates passed

      this._rangeEnd = this._isEndOfRange();
      this._rangeStart = this._isStartOfRange();

      this._disableDates();
    }
  }, {
    key: "_getDaysInMonths",
    value: function _getDaysInMonths(date, numMonths) {
      var months = [];
      var dt = new Date(date);

      for (var i = 0; i < numMonths; i++) {
        var month = dt.getMonth();
        var days = [];
        dt.setDate(1);

        while (dt.getMonth() === month) {
          days.push(new Date(dt));
          dt.setDate(dt.getDate() + 1);
        }

        months.push(days); // set date to 1st day of next month

        dt.setDate(dt.getMonth() + 1);
        dt.setDate(1);
      }

      return months;
    }
  }, {
    key: "_isEndOfRange",
    value: function _isEndOfRange() {
      // check if we can move to a calendar in the future
      if (this._calendarMonths.length) {
        var i = this._calendarMonths.length - 1;
        var lastDayInCalendarView = this._calendarMonths[i][this._calendarMonths[i].length - 1];
        return lastDayInCalendarView.getFullYear() === this._calendarMaxDate.getFullYear() && lastDayInCalendarView.getMonth() >= this._calendarMaxDate.getMonth();
      }

      return false;
    }
  }, {
    key: "_isStartOfRange",
    value: function _isStartOfRange() {
      // check if we can move to a calendar in the past
      if (this._calendarMonths.length) {
        var firstDayInCalendarView = this._calendarMonths[0][0];
        return firstDayInCalendarView.getFullYear() === this._calendarMinDate.getFullYear() && firstDayInCalendarView.getMonth() <= this._calendarMinDate.getMonth();
      }

      return false;
    }
  }, {
    key: "_disableDates",
    value: function _disableDates() {
      var _this42 = this;

      setTimeout(function () {
        var dateButtons = _this42.shadowRoot.querySelectorAll('[data-date]');

        dateButtons.forEach(function (btn) {
          var btnDate = new Date(btn.getAttribute('data-date'));
          btnDate.setHours(0, 0, 0); // remove disabled for all active buttons, ignore empty placeholders
          // all active date buttons need a tabindex of 4 by default

          if (btn.getAttribute('data-date')) {
            btn.removeAttribute('disabled');
            btn.setAttribute('tabindex', 4);
          } // check list from attribute disabled-dates


          _this42.disabledDates.forEach(function (disabledDate) {
            disabledDate = new Date(disabledDate);

            if (btnDate.getFullYear() === disabledDate.getFullYear() && btnDate.getMonth() === disabledDate.getMonth() && btnDate.getDate() === disabledDate.getDate()) {
              btn.setAttribute('disabled', '');
              btn.setAttribute('tabindex', -1);
            }
          }); // check against date range
          // move time to seconds vs milliseconds


          if (Math.floor(_this42._calendarMinDate.getTime() / 1000) > Math.floor(btnDate.getTime() / 1000) || Math.floor(_this42._calendarMaxDate.getTime() / 1000) < Math.floor(btnDate.getTime() / 1000)) {
            btn.setAttribute('disabled', '');
            btn.setAttribute('tabindex', -1);
          }
        });
      }, 0);
    }
  }, {
    key: "_setMinMaxDates",
    value: function _setMinMaxDates() {
      // if null is passed for start date set it to year 1900
      this._calendarMinDate = !this.dateRange[0] ? new Date('01/01/1900') : new Date(this.dateRange[0]); // if null is passed for end date set it to 20 years from now

      if (!this.dateRange[1]) {
        this._calendarMaxDate = new Date();

        this._calendarMaxDate.setFullYear(this._calendarMaxDate.getFullYear() + this._maxFutureYears);
      } else {
        this._calendarMaxDate = new Date(this.dateRange[1]);
      }

      this._calendarMinDate.setHours(0, 0, 0);

      this._calendarMaxDate.setHours(0, 0, 0);
    }
  }, {
    key: "_buildTableHeaders",
    value: function _buildTableHeaders() {
      return html(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n      <tr>\n        <th aria-label=\"", "\">", "</th>\n        <th aria-label=\"", "\">", "</th>\n        <th aria-label=\"", "\">", "</th>\n        <th aria-label=\"", "\">", "</th>\n        <th aria-label=\"", "\">", "</th>\n        <th aria-label=\"", "\">", "</th>\n        <th aria-label=\"", "\">", "</th>\n      </tr>\n    "])), this.labelAriaDayNames[0], this.dayNames[0], this.labelAriaDayNames[1], this.dayNames[1], this.labelAriaDayNames[2], this.dayNames[2], this.labelAriaDayNames[3], this.dayNames[3], this.labelAriaDayNames[4], this.dayNames[4], this.labelAriaDayNames[5], this.dayNames[5], this.labelAriaDayNames[6], this.dayNames[6]);
    }
  }, {
    key: "_breakDaysIntoTableRows",
    value: function _breakDaysIntoTableRows(days) {
      var daysArr = _toConsumableArray(days);

      var rows = [];
      var week = [];
      var startDay = days[0].getDay();
      var lastDay = days[days.length - 1].getDay(); // we need to add empty slots to the beginning and end of each month to fill out the table rows
      // add empty values to beginning

      for (var i = 0; i < startDay; i++) {
        daysArr.unshift(null);
      } // add empty values to the end


      for (var _i5 = 0; _i5 < 6 - lastDay; _i5++) {
        daysArr.push(null);
      } // break daysArr into rows by week, sunday to saturday


      for (var _i6 = 1; _i6 <= daysArr.length; _i6++) {
        week.push(daysArr[_i6 - 1]);

        if (_i6 % 7 === 0) {
          rows.push(week);
          week = [];
        }
      }

      return rows;
    }
  }, {
    key: "_getMonthAndYear",
    value: function _getMonthAndYear(date) {
      if (window.innerWidth > breakpoints.sm) {
        return "".concat(this.monthNames[date.getMonth()], " ").concat(date.getFullYear());
      } else {
        return "".concat(this.monthNames[date.getMonth()]);
      }
    }
  }, {
    key: "_formatDate",
    value: function _formatDate(date) {
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();
      return month + '/' + day + '/' + year;
    }
  }, {
    key: "_changeCalendarMonths",
    value: function _changeCalendarMonths(dir) {
      var num = dir === 'next' ? this._numMonthsToDisplay : -this._numMonthsToDisplay;
      this._startDate = new Date(this._calendarMonths[0][0].getFullYear(), this._calendarMonths[0][0].getMonth() + num, 1);

      this._buildCalendar();

      resetFocusTrap();
    }
  }, {
    key: "_handleSelectedDate",
    value: function _handleSelectedDate(date) {
      // let the mobile apply button handle the event emit and updating the selected value, cause you need a cancel option
      if (window.innerWidth <= breakpoints.sm) {
        this._tempDateStorage = date;

        this._setActiveBtnState(date);

        return;
      }

      var input = this.shadowRoot.querySelector('.fwc-selected-date');
      this.selectedDate = date;
      input.value = this._formatDate(date);

      this._setActiveBtnState(date);

      this._emitSelectedEvent(date);
    }
  }, {
    key: "_handleMobileApply",
    value: function _handleMobileApply() {
      var input = this.shadowRoot.querySelector('.fwc-selected-date');

      if (this._tempDateStorage) {
        this.selectedDate = this._tempDateStorage;
        input.value = this._formatDate(this._tempDateStorage);

        this._emitSelectedEvent(this._tempDateStorage);
      }

      this.toggleCalendarOpen();
    }
  }, {
    key: "_resetDate",
    value: function _resetDate() {
      this.selectedDate = '';

      this._setActiveBtnState('');

      this._emitSelectedEvent('');
    }
  }, {
    key: "_parseDate",
    value: function _parseDate(e) {
      if (!e.target.value) {
        this._resetDate();

        this._emitBlurEvent();

        return;
      } // some browsers do not like to parse dates as 01-01-2020
      // so we replace all the dashes with slashes, if a user typed in that format


      var parsedDate = new Date(e.target.value.replace(/-/g, '/')); // check manual entered date against disabled dates & min/max range

      if (this._checkDisabledDate(parsedDate)) {
        this._invalidDate(e);

        return false;
      }

      this._emitBlurEvent();

      if (parsedDate instanceof Date && !isNaN(parsedDate)) {
        this._startDate = parsedDate; // build the calendar view to reflect the new typed starting date

        this._buildCalendar(); // highlight the date


        this._handleSelectedDate(parsedDate);
      } else {
        this._invalidDate(e);
      }
    } //returns true if date is disabled or out of min/max range

  }, {
    key: "_checkDisabledDate",
    value: function _checkDisabledDate(date) {
      var _this43 = this;

      return this.disabledDates.some(function (disabledDate) {
        disabledDate = new Date(disabledDate);
        return date.getFullYear() === disabledDate.getFullYear() && date.getMonth() === disabledDate.getMonth() && date.getDate() === disabledDate.getDate() || Math.floor(_this43._calendarMinDate.getTime() / 1000) > Math.floor(date.getTime() / 1000) || Math.floor(_this43._calendarMaxDate.getTime() / 1000) < Math.floor(date.getTime() / 1000);
      });
    }
  }, {
    key: "_invalidDate",
    value: function _invalidDate(e) {
      // emit date parse error, date entered into input field was not valid
      var event = new CustomEvent('fwc-date-picker-error', {
        detail: 'invalid date',
        bubbles: true
      });
      this.dispatchEvent(event);
      e.target.value = '';
    }
  }, {
    key: "_emitFocusEvent",
    value: function _emitFocusEvent() {
      var event = new CustomEvent('fwc-date-picker-focus', {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_emitBlurEvent",
    value: function _emitBlurEvent() {
      var event = new CustomEvent('fwc-date-picker-blur', {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_emitSelectedEvent",
    value: function _emitSelectedEvent(data) {
      var event = new CustomEvent('fwc-date-picker-selected', {
        detail: data,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_setActiveBtnState",
    value: function _setActiveBtnState(curDate) {
      // loop all the buttons and match their data-date attr to the selectedDate to add an active state
      // this happens cause we need to check/set the active date when switching calendar months, typing in a date, and clicking one
      var btns = this.shadowRoot.querySelectorAll('.fwc-calendar-body button');
      var lastActiveBtn = this.shadowRoot.querySelector('button.active');

      if (lastActiveBtn) {
        lastActiveBtn.classList.remove('active');
      }

      if (btns && curDate) {
        var curDateFormatted = this._formatDate(curDate);

        btns.forEach(function (btn) {
          var dt = btn.getAttribute('data-date');

          if (dt === curDateFormatted) {
            btn.classList.add('active');
          }
        });
      }
    }
  }, {
    key: "toggleCalendarOpen",
    value: function toggleCalendarOpen() {
      var _this44 = this;

      this._buildCalendar(); // check the calendar before it opens and set its position


      if (!this._isCalendarOpen && window.innerWidth > breakpoints.sm) {
        setTimeout(function () {
          _this44._setCalendarPosition();
        }, 0);
      } else {
        // remove transform positioning from calendar on close
        // because the getBoundingClientRect will now be changed with the new transform styling
        this._removeCalendarPositioning();
      }

      this._isCalendarOpen = !this._isCalendarOpen;

      if (this._isCalendarOpen && this.selectedDate) {
        this._setActiveBtnState(this.selectedDate);
      } else {
        this._tempDateStorage = null;
      }

      this._toggleBodyScrollClass(this._isCalendarOpen);
    }
  }, {
    key: "_toggleBodyScrollClass",
    value: function _toggleBodyScrollClass(isOpen) {
      if (isOpen && window.innerWidth <= breakpoints.sm) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }, {
    key: "_setCalendarPosition",
    value: function _setCalendarPosition() {
      var calendar = this.shadowRoot.querySelector('.fwc-calendar');
      var input = this.shadowRoot.querySelector('.fwc-date-picker-input');
      var viewportWidth = document.documentElement.clientWidth;
      var viewportHeight = document.documentElement.clientHeight;
      var CALENDAR_VERTICAL_MARGIN = baseUnit * 2;
      var inputRect = null;
      var calendarRect = null; // this sets the calendar width and height to auto so we can get its dimensions

      calendar.classList.add('pre-open');
      inputRect = input.getBoundingClientRect();
      calendarRect = calendar.getBoundingClientRect(); // check and set left and right positioning

      if (viewportWidth - inputRect.left > calendarRect.width) {
        // set left positioned
        // check first if there is space right as initial option
        calendar.style.left = '0px';
      } else if (inputRect.right > calendarRect.width) {
        // set right positioned
        calendar.style.right = '0px';
      } else {
        // fallback left positioned
        calendar.style.left = '0px';
      }

      if (viewportHeight - inputRect.bottom > calendarRect.height) {
        // set bottom positioned
        // check first if there is space below as initial option
        calendar.style.top = "calc(100% + ".concat(CALENDAR_VERTICAL_MARGIN, "px");
      } else if (inputRect.top > calendarRect.height) {
        // set top positioned
        calendar.style.bottom = "calc(100% - ".concat(CALENDAR_VERTICAL_MARGIN, "px)");
      } else {
        // fallback bottom positioned
        calendar.style.top = "calc(100% + ".concat(CALENDAR_VERTICAL_MARGIN, "px");
      }

      calendar.classList.remove('pre-open');
    }
  }, {
    key: "_removeCalendarPositioning",
    value: function _removeCalendarPositioning() {
      var calendar = this.shadowRoot.querySelector('.fwc-calendar');
      calendar.style.removeProperty('left');
      calendar.style.removeProperty('right');
      calendar.style.removeProperty('bottom');
      calendar.style.removeProperty('top');
    }
  }, {
    key: "_mobileApplyButton",
    value: function _mobileApplyButton() {
      return html(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral([" <button class=\"fwc-btn fwc-btn-primary\" aria-label=\"", "\" @click=\"", "\" tabindex=\"6\">", "</button> "])), this.labelAriaMobileApply, this._handleMobileApply, this.btnMobileApply);
    }
  }, {
    key: "_mobileCancelButton",
    value: function _mobileCancelButton() {
      return html(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral([" <button class=\"fwc-btn fwc-btn-secondary\" aria-label=\"", "\" @click=\"", "\" tabindex=\"5\">", "</button> "])), this.labelAriaMobileCancel, this.toggleCalendarOpen, this.btnMobileCancel);
    }
  }, {
    key: "_arrowSvg",
    value: function _arrowSvg() {
      return html(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon points=\"14.067 50 11 46.933 32.933 25 11 3.067 14.067 0 37.533 23.467 39 25 37.533 26.533\" />\n      </svg>\n    "])));
    }
  }, {
    key: "_buttonPrev",
    value: function _buttonPrev() {
      var _this45 = this;

      return html(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral([" <button class=\"fwc-btn-prev ", "\" @click=\"", "\" aria-label=\"", "\" tabindex=\"1\">", "</button> "])), this._rangeStart ? 'fwc-hide' : '', function () {
        return _this45._changeCalendarMonths('prev');
      }, this.labelAriaPrevious, this._arrowSvg());
    }
  }, {
    key: "_buttonNext",
    value: function _buttonNext() {
      var _this46 = this;

      return html(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral([" <button class=\"fwc-btn-next ", "\" aria-label=\"", "\" @click=\"", "\" tabindex=\"2\">", "</button> "])), this._rangeEnd ? 'fwc-hide' : '', this.labelAriaNext, function () {
        return _this46._changeCalendarMonths('next');
      }, this._arrowSvg());
    }
  }, {
    key: "render",
    value: function render() {
      var _this47 = this;

      return html(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/buttons-links.css\" />\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/components/fwc-input.css\" />\n      <div class=\"fwc-overlay  ", "\"></div>\n      <mobile-view mobile-header-text=\"", "\" ?open=", ">\n        <!-- START MOBILE VIEW SLOT BODY -->\n        <div slot=\"body\">\n          <div class=\"fwc-date-picker-wrapper\">\n            <div class=\"fwc-input ", "\">\n              <label for=\"date-select\">", "</label>\n              <div class=\"fwc-date-picker-input\">\n                <input type=\"text\" id=\"date-select\" class=\"fwc-selected-date\" aria-haspopup=\"dialog\" aria-describedby=\"date_error\" @blur=\"", "\" @focus=\"", "\" />\n                <button class=\"fwc-icon-calendar\" @click=\"", "\" aria-label=\"", "\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" focusable=\"false\" width=\"20px\" height=\"20px\" viewBox=\"0 0 36.449 36.448\" xml:space=\"preserve\">\n                    <g>\n                      <g>\n                        <rect x=\"12.858\" y=\"14.626\" width=\"4.596\" height=\"4.089\" />\n                        <rect x=\"18.996\" y=\"14.626\" width=\"4.595\" height=\"4.089\" />\n                        <rect x=\"25.128\" y=\"14.626\" width=\"4.596\" height=\"4.089\" />\n                        <rect x=\"6.724\" y=\"20.084\" width=\"4.595\" height=\"4.086\" />\n                        <rect x=\"12.858\" y=\"20.084\" width=\"4.596\" height=\"4.086\" />\n                        <rect x=\"18.996\" y=\"20.084\" width=\"4.595\" height=\"4.086\" />\n                        <rect x=\"25.128\" y=\"20.084\" width=\"4.596\" height=\"4.086\" />\n                        <rect x=\"6.724\" y=\"25.54\" width=\"4.595\" height=\"4.086\" />\n                        <rect x=\"12.858\" y=\"25.54\" width=\"4.596\" height=\"4.086\" />\n                        <rect x=\"18.996\" y=\"25.54\" width=\"4.595\" height=\"4.086\" />\n                        <rect x=\"25.128\" y=\"25.54\" width=\"4.596\" height=\"4.086\" />\n                        <path\n                          d=\"M31.974,32.198c0,0.965-0.785,1.75-1.75,1.75h-24c-0.965,0-1.75-0.785-1.75-1.75V12.099h-2.5v20.099\n                          c0,2.343,1.907,4.25,4.25,4.25h24c2.344,0,4.25-1.907,4.25-4.25V12.099h-2.5V32.198z\"\n                        />\n                        <path\n                          d=\"M30.224,3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75c-1.474,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75\n                          c0-1.517-1.197-2.75-2.67-2.75c-1.473,0-2.67,1.233-2.67,2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75\n                          c-1.473,0-2.67,1.233-2.67,2.75v1.197H6.224c-2.343,0-4.25,1.907-4.25,4.25v2h2.5h27.5h2.5v-2\n                          C34.474,5.855,32.568,3.948,30.224,3.948z M11.466,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25V2.75\n                          c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M19.546,7.646c0,0.689-0.525,1.25-1.17,1.25s-1.17-0.561-1.17-1.25\n                          V2.75c0-0.689,0.525-1.25,1.17-1.25s1.17,0.561,1.17,1.25V7.646z M27.626,7.646c0,0.689-0.525,1.25-1.17,1.25\n                          c-0.646,0-1.17-0.561-1.17-1.25V2.75c0-0.689,0.524-1.25,1.17-1.25c0.645,0,1.17,0.561,1.17,1.25V7.646z\"\n                        />\n                      </g>\n                    </g>\n                  </svg>\n                </button>\n              </div>\n            </div>\n            <div class=\"fwc-calendar ", " ", "\">\n              ", "\n            </div>\n          </div>\n        </div>\n        <!-- END MOBILE VIEW SLOT BODY -->\n\n        <!-- START MOBILE VIEW SLOT FOOTER BUTTONS -->\n        <div slot=\"mobile-footer-primary-button\">", "</div>\n        <div slot=\"mobile-footer-secondary-button\">", "</div>\n        <!-- END MOBILE VIEW SLOT FOOTER BUTTONS -->\n      </mobile-view>\n    "])), this._isCalendarOpen ? '' : 'fwc-hide', this.inputLabel, this._isCalendarOpen, this._isCalendarOpen ? 'open' : '', this.inputLabel, function (e) {
        return _this47._parseDate(e);
      }, function (e) {
        return _this47._emitFocusEvent(e);
      }, this.toggleCalendarOpen, this.labelAriaCalendarIcon, this._isCalendarOpen ? 'open' : '', this.isIE ? 'ie-11' : '', this._calendarTableRows.map(function (month, i) {
        return html(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n                  ", "\n                  <div class=\"fwc-calendar-month\">\n                    <div class=\"fwc-calendar-header\">\n                      ", "\n                      <span class=\"fwc-month-year\" id=\"", "", "\"> ", " </span>\n                      ", "\n                    </div>\n                    <div class=\"fwc-calendar-body\">\n                      <table role=\"table\" width=\"100%\" aria-labelledby=\"", "", "\">\n                        ", "\n                        ", "\n                      </table>\n                    </div>\n                  </div>\n                "])), i === 0 ? html(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n                        <div class=\"fwc-calendar-mobile-nav\">\n                          <span>", "</span>\n                          <span>", "</span>\n                          <span>", "</span>\n                        </div>\n                      "])), _this47._buttonPrev(), _this47._calendarMonths[i][0].getFullYear(), _this47._buttonNext()) : '', i === 0 ? _this47._buttonPrev() : '', _this47.monthNames[_this47._calendarMonths[i][0].getMonth()], _this47._calendarMonths[i][0].getFullYear(), _this47._calendarMonths ? _this47._getMonthAndYear(_this47._calendarMonths[i][0]) : '', i === _this47._calendarTableRows.length - 1 ? _this47._buttonNext() : '', _this47.monthNames[_this47._calendarMonths[i][0].getMonth()], _this47._calendarMonths[i][0].getFullYear(), _this47._buildTableHeaders(), month.map(function (row) {
          return html(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n                            <tr role=\"row\">\n                              ", "\n                            </tr>\n                          "])), row.map(function (day) {
            return html(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n                                  <td>\n                                    <button\n                                      tabindex=\"", "\"\n                                      ?disabled=\"", "\"\n                                      aria-hidden=\"", "\"\n                                      aria-pressed=\"", "\"\n                                      aria-label=\"", "\"\n                                      data-date=\"", "\"\n                                      @click=\"", "\"\n                                    >\n                                      <span>", "</span>\n                                    </button>\n                                  </td>\n                                "])), day ? 4 : -1, day ? false : true, day ? false : true, day === _this47.selectedDate, day ? "".concat(_this47._formatDate(day)) : '', day ? _this47._formatDate(day) : '', function () {
              _this47._handleSelectedDate(day);
            }, day ? day.getDate() : '');
          }));
        }));
      }), this._mobileApplyButton(), this._mobileCancelButton());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n        :host {\n          position: relative;\n        }\n        button[disabled] {\n          appearance: none;\n          border: none;\n          background: transparent;\n        }\n        .fwc-overlay {\n          position: fixed;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n        }\n        .fwc-date-picker-wrapper {\n          width: 100%;\n        }\n        .fwc-calendar {\n          position: absolute;\n          display: flex;\n          flex-direction: row;\n          visibility: hidden;\n          opacity: 0;\n          transition: opacity 0.3s ease-in-out;\n          box-shadow: var(--box-shadow);\n          border: none;\n          background: white;\n          margin-top: 0;\n          height: 0;\n          width: 0;\n          overflow: hidden;\n        }\n        .fwc-calendar-mobile-nav {\n          display: none;\n        }\n        .fwc-calendar-month {\n          padding: calc(2.5 * var(--fwcu)) calc(1.5 * var(--fwcu)) calc(1.5 * var(--fwcu));\n        }\n        .fwc-calendar.open {\n          z-index: 3;\n          visibility: visible;\n          opacity: 1;\n          height: auto;\n          width: auto;\n          border: solid 1px var(--color-btn-second-border);\n          overflow: visible;\n        }\n        /* give ie-11 a static width */\n        .fwc-calendar.open.ie-11 {\n          width: calc(45.25 * var(--fwcu));\n        }\n        /* we use this class to get the calendar dimensions and set it position before it opens _setCalendarPosition()*/\n        .fwc-calendar.pre-open {\n          height: auto;\n          width: auto;\n        }\n        .fwc-calendar-header {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          position: relative;\n          margin-bottom: calc(2.5 * var(--fwcu));\n        }\n        .fwc-date-picker-input {\n          position: relative;\n        }\n        .fwc-date-picker-input span {\n          position: absolute;\n        }\n        .fwc-date-picker-input input {\n          width: 100%;\n        }\n        .fwc-icon-calendar {\n          border: none;\n          appearance: none;\n          background: none;\n          position: absolute;\n          right: calc(1.25 * var(--fwcu));\n          top: 0;\n          bottom: 0;\n        }\n        .fwc-icon-calendar:hover {\n          cursor: pointer;\n        }\n        .fwc-icon-calendar svg {\n          fill: var(--color-primary);\n        }\n        .fwc-btn-prev,\n        .fwc-btn-next {\n          border: none;\n          appearance: none;\n          background: transparent;\n          position: absolute;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          height: calc(3 * var(--fwcu));\n          width: calc(3 * var(--fwcu));\n          padding: 0;\n        }\n        .fwc-btn-prev svg,\n        .fwc-btn-next svg {\n          fill: var(--color-primary);\n          height: auto;\n          width: 100%;\n        }\n        .fwc-btn-next {\n          right: calc(1.5 * var(--fwcu));\n          top: 0;\n          bottom: 0;\n          margin: auto;\n        }\n        .fwc-btn-prev {\n          transform: rotate(180deg);\n          left: calc(1.5 * var(--fwcu));\n          top: 0;\n          bottom: 0;\n          margin: auto;\n        }\n        .fwc-btn-next:hover,\n        .fwc-btn-prev:hover {\n          cursor: pointer;\n        }\n        .fwc-month-year {\n          font-weight: 700;\n          text-transform: uppercase;\n          color: var(--color-gray-one);\n        }\n        .fwc-calendar-body th {\n          font-size: calc(1.5 * var(--fwcu));\n          padding-bottom: calc(1.5 * var(--fwcu));\n          color: var(--color-gray-one);\n        }\n        .fwc-calendar-body button {\n          appearance: none;\n          border: none;\n          background: transparent;\n          width: calc(5.5 * var(--fwcu));\n          height: calc(5.5 * var(--fwcu));\n          border-radius: 50%;\n          font-size: calc(1.5 * var(--fwcu));\n          color: var(--color-gray-one);\n        }\n        .fwc-calendar-body button:hover {\n          cursor: pointer;\n        }\n        .fwc-calendar-body button:hover,\n        .fwc-calendar-body button:focus {\n          border: 2px solid var(--color-primary);\n          font-size: calc(2 * var(--fwcu));\n          font-weight: 700;\n          color: var(--color-primary);\n          outline: none;\n        }\n        .fwc-calendar-body button:disabled {\n          color: var(--color-gray-four);\n        }\n        .fwc-calendar-body button:disabled {\n          cursor: auto;\n        }\n        .fwc-calendar-body button:disabled:hover,\n        .fwc-calendar-body button:disabled:focus {\n          border: 2px solid transparent;\n          color: var(--color-gray-four);\n          outline: none;\n          font-size: calc(1.5 * var(--fwcu));\n          font-weight: 400;\n        }\n        .fwc-calendar-body button.active {\n          background: var(--color-primary);\n          color: var(--color-white);\n          font-size: calc(2 * var(--fwcu));\n        }\n        .fwc-calendar-body button.active:hover {\n          border: 2px solid transparent;\n          color: var(--color-white);\n        }\n        .fwc-calendar-body button span {\n          pointer-events: none;\n        }\n        .fwc-calendar-body button[data-date=''] {\n          visibility: hidden;\n        }\n        .fwc-hide {\n          display: none;\n          visibility: hidden;\n        }\n        .fwc-footer-container {\n          position: relative;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        ::-ms-clear {\n          display: none;\n        }\n        @media screen and (max-width: 900px) {\n          .fwc-calendar {\n            display: block;\n          }\n          .fwc-calendar-month:nth-of-type(3) {\n            padding-top: 0;\n          }\n        }\n        @media screen and (max-width: 600px) {\n          .fwc-overlay {\n            background-color: var(--color-white);\n          }\n          .fwc-input.open {\n            opacity: 0;\n          }\n          .fwc-calendar-header .fwc-btn-prev,\n          .fwc-calendar-header .fwc-btn-next {\n            display: none;\n          }\n          .fwc-calendar.open {\n            width: 100%;\n            margin-top: 0;\n            /* important is needed to override the inline positioning */\n            top: 0 !important;\n            bottom: 0 !important;\n            left: 0 !important;\n            right: 0 !important;\n            box-shadow: none;\n            border: none;\n          }\n          .fwc-btn-prev,\n          .fwc-btn-next {\n            position: relative;\n          }\n          .fwc-calendar-mobile-nav {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: calc(2.5 * var(--fwcu)) 0 0;\n            font-size: calc(2 * var(--fwcu));\n            color: var(--color-gray-one);\n            font-weight: 700;\n          }\n          .fwc-calendar-mobile-nav span {\n            display: inline-block;\n            min-width: calc(4 * var(--fwcu));\n          }\n          .fwc-calendar-mobile-nav span:nth-child(2) {\n            margin: 0 calc(4 * var(--fwcu));\n          }\n          /* ie11/ios flex padding bottom hack */\n          .fwc-calendar:after {\n            content: '';\n            display: block;\n            padding-bottom: calc(12.5 * var(--fwcu));\n          }\n          .fwc-calendar-month {\n            flex-basis: 100%;\n            padding: calc(2.5 * var(--fwcu)) calc(2.5 * var(--fwcu)) calc(1.5 * var(--fwcu));\n          }\n          .fwc-calendar-body table {\n            width: 100%;\n          }\n          .fwc-calendar-body td {\n            width: 14.29%;\n          }\n          .fwc-calendar-body button {\n            width: 100%;\n            padding-top: 90%;\n            position: relative;\n            border: 2px solid transparent;\n          }\n          .fwc-calendar-body button > span {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        startDate: {
          attribute: 'start-date',
          type: String
        },
        showDate: {
          attribute: 'show-date',
          type: Boolean
        },
        monthNames: {
          attribute: 'month-names',
          type: Array
        },
        dayNames: {
          attribute: 'day-names',
          type: Array
        },
        dateRange: {
          attribute: 'date-range',
          type: Array
        },
        disabledDates: {
          attribute: 'disabled-dates',
          type: Array
        },
        btnMobileCancel: {
          attribute: 'btn-mobile-cancel',
          type: String
        },
        btnMobileApply: {
          attribute: 'btn-mobile-apply',
          type: String
        },
        inputLabel: {
          attribute: 'input-label',
          type: String
        },
        labelAriaNext: {
          attribute: 'label-aria-next',
          type: String
        },
        labelAriaPrevious: {
          attribute: 'label-aria-previous',
          type: String
        },
        labelAriaMobileCancel: {
          attribute: 'label-aria-mobile-cancel',
          type: String
        },
        labelAriaMobileApply: {
          attribute: 'label-aria-mobile-apply',
          type: String
        },
        labelAriaCalendarIcon: {
          attribute: 'label-aria-calendar-icon',
          type: String
        },
        labelAriaDayNames: {
          attribute: 'label-aria-day-names',
          type: Array
        },
        selectedDate: {},
        _calendarTableRows: {},
        _isCalendarOpen: {},
        _rangeStart: {},
        _rangeEnd: {}
      };
    }
  }]);

  return FwcDatePickerComponent;
}(LitElement);

var FwcDatePicker = /*#__PURE__*/function (_FwcBase13) {
  _inherits(FwcDatePicker, _FwcBase13);

  var _super32 = _createSuper(FwcDatePicker);

  function FwcDatePicker() {
    _classCallCheck(this, FwcDatePicker);

    return _super32.call(this, 'fwc-date-picker', FwcDatePickerComponent);
  }

  return FwcDatePicker;
}(FwcBase);

var FwcPreloaderComponent = /*#__PURE__*/function (_LitElement16) {
  _inherits(FwcPreloaderComponent, _LitElement16);

  var _super33 = _createSuper(FwcPreloaderComponent);

  function FwcPreloaderComponent() {
    var _this48;

    _classCallCheck(this, FwcPreloaderComponent);

    _this48 = _super33.call(this);
    _this48.labelAriaValueText = 'Loading';
    return _this48;
  }

  _createClass(FwcPreloaderComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n      <div class=\"fwc-preloader\">\n        <div class=\"fwc-preloader-heart\" role=\"progressbar\" aria-label=\"", "\">\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </div>\n    "])), this.labelAriaValueText);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n       @keyframes slideDown {\n            0% {\n              top: 0%;\n              bottom: 100%;\n              opacity: 0;\n            }\n\n            5% {\n              top: 0%;\n              bottom: 0%;\n            }\n\n            12% {\n              opacity: 1;\n            }\n\n            50% {\n              top: 0%;\n              bottom: 0%;\n              opacity: 1;\n            }\n\n            55% {\n              top: 0%;\n              bottom: 100%;\n            }\n\n            62% {\n              opacity: 0;\n            }\n\n            100% {\n              top: 0%;\n              bottom: 100%;\n              opacity: 0%;\n            }\n          }\n\n          @keyframes slideUp {\n            0% {\n              top: 100%;\n              bottom: 0%;\n              opacity: 0;\n            }\n\n            5% {\n              top: 0%;\n              bottom: 0%;\n            }\n\n            12% {\n              opacity: 1;\n            }\n\n            50% {\n              top: 0%;\n              bottom: 0%;\n            }\n\n            55% {\n              top: 100%;\n              bottom: 0%;\n              opacity: 1;\n            }\n\n            62% {\n              opacity: 0;\n            }\n\n            100% {\n              top: 100%;\n              bottom: 0%;\n            }\n          }\n          .fwc-preloader {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n          }\n          .fwc-preloader .fwc-preloader-heart {\n            display: flex;\n            padding: calc(1.5*var(--fwcu));\n            height: calc(15*var(--fwcu));\n          }\n          .fwc-preloader .fwc-preloader-heart span {\n            position: relative;\n            background: var(--color-gray-five, #eee);\n            width: var(--fwcu);\n            display: flex;\n            margin: calc(0.5*var(--fwcu));\n            border-radius: calc(0.5*var(--fwcu));\n            height: calc(10*var(--fwcu));\n            top: calc(3*var(--fwcu));\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(even)::before {\n            animation: slideUp 5s ease-out infinite;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(odd)::before {\n            animation: slideDown 5s ease-out infinite;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(2)::before {\n            animation-delay: 0.286s;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(3)::before {\n            animation-delay: 0.572s;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(4)::before {\n            animation-delay: 0.858s;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(5)::before {\n            animation-delay: 1.144s;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(6)::before {\n            animation-delay: 1.43s;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(7)::before {\n            animation-delay: 1.716s;\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(1), .fwc-preloader .fwc-preloader-heart span:nth-child(7) {\n            height: calc(3.75*var(--fwcu));\n            top: calc(2.5*var(--fwcu));\n          }\n          .fwc-preloader .fwc-preloader-heart span:nth-child(2), .fwc-preloader .fwc-preloader-heart span:nth-child(6) {\n            height: calc(7.5*var(--fwcu));\n            top: calc(1.25*var(--fwcu));\n          }\n        }\n        .fwc-preloader {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n        }\n        .fwc-preloader .fwc-preloader-heart {\n          display: flex;\n          padding: calc(1.5*var(--fwcu));\n          height: calc(15*var(--fwcu));\n        }\n        .fwc-preloader .fwc-preloader-heart span {\n          position: relative;\n          background: var(--color-gray-five, #eee);\n          width: var(--fwcu);\n          display: flex;\n          margin: calc(0.5*var(--fwcu));\n          border-radius: calc(0.5*var(--fwcu));\n          height: calc(10*var(--fwcu));\n          top: calc(3*var(--fwcu));\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(even)::before {\n          animation: slideUp 5s ease-out infinite;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(odd)::before {\n          animation: slideDown 5s ease-out infinite;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(2)::before {\n          animation-delay: 0.286s;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(3)::before {\n          animation-delay: 0.572s;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(4)::before {\n          animation-delay: 0.858s;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(5)::before {\n          animation-delay: 1.144s;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(6)::before {\n          animation-delay: 1.43s;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(7)::before {\n          animation-delay: 1.716s;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(1),\n        .fwc-preloader .fwc-preloader-heart span:nth-child(7) {\n          height: calc(3.75*var(--fwcu));\n          top: calc(2.5*var(--fwcu));\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(2),\n        .fwc-preloader .fwc-preloader-heart span:nth-child(6) {\n          height:calc(7.5*var(--fwcu));\n          top: calc(1.25*var(--fwcu));\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(3),\n        .fwc-preloader .fwc-preloader-heart span:nth-child(5) {\n          height: calc(10*var(--fwcu));\n          top: calc(1.25*var(--fwcu));\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(odd)::before {\n          content: '';\n          position: absolute;\n          left: 0;\n          right: 0;\n          background: linear-gradient(0deg, var(--color-primary), var(--color-primary-hover));\n          border-radius: calc(0.5*var(--fwcu));\n          top: 0%;\n        }\n        .fwc-preloader .fwc-preloader-heart span:nth-child(even)::before {\n          content: '';\n          position: absolute;\n          left: 0;\n          right: 0;\n          background: linear-gradient(180deg, var(--color-primary), var(--color-primary-hover));\n          border-radius: calc(0.5*var(--fwcu));\n          bottom: 0%;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        labelAriaValueText: {
          attribute: 'label-aria-value-text',
          type: String
        }
      };
    }
  }]);

  return FwcPreloaderComponent;
}(LitElement);

var FwcPreloader = /*#__PURE__*/function (_FwcBase14) {
  _inherits(FwcPreloader, _FwcBase14);

  var _super34 = _createSuper(FwcPreloader);

  function FwcPreloader() {
    _classCallCheck(this, FwcPreloader);

    return _super34.call(this, 'fwc-preloader', FwcPreloaderComponent);
  }

  return FwcPreloader;
}(FwcBase);

var FwcDateTimePickerComponent = /*#__PURE__*/function (_LitElement17) {
  _inherits(FwcDateTimePickerComponent, _LitElement17);

  var _super35 = _createSuper(FwcDateTimePickerComponent);

  function FwcDateTimePickerComponent() {
    var _this49;

    _classCallCheck(this, FwcDateTimePickerComponent);

    _this49 = _super35.call(this);
    _this49._schedule = [];
    _this49.labelNextWeek = 'Next Week';
    _this49.labelPrevWeek = 'Previous Week';
    _this49.labelNoResults = 'No Results';
    _this49.hidePreviousButton = false;
    _this49.hideNextButton = false;
    _this49.labelDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    _this49.labelMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    _this49.pressedButton = null;
    _this49.maxNumberTimeSlots = 0;
    _this49.initialLoad = true;
    _this49.fwcPreloaderCmp = new FwcPreloader();

    _this49.fwcPreloaderCmp.build();

    _this49._showPreloader = true;
    _this49._disableNextWeekBtn = false;
    _this49._disablePrevWeekBtn = false;
    return _this49;
  }

  _createClass(FwcDateTimePickerComponent, [{
    key: "schedule",
    get: function get() {
      return this._schedule;
    },
    set: function set(value) {
      var oldVal = this._schedule;
      this._schedule = !value ? [] : value;

      this._init();

      this.requestUpdate('schedule', oldVal);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this._init();

      this.initialLoad = false;
      this._showPreloader = false;
    }
  }, {
    key: "showPreloader",
    value: function showPreloader() {
      this._showPreloader = true;
      this._disablePrevWeekBtn = this._disableNextWeekBtn = true;
      this.requestUpdate();
    }
  }, {
    key: "hidePreloader",
    value: function hidePreloader() {
      this._showPreloader = false;
      this._disablePrevWeekBtn = this._disableNextWeekBtn = false;
      this.requestUpdate();
    }
  }, {
    key: "updated",
    value: function updated() {
      this._init();
    }
  }, {
    key: "_init",
    value: function _init() {
      this.maxNumberTimeSlots = this._getMaxNumberTimeSlots();
    }
  }, {
    key: "_getMaxNumberTimeSlots",
    value: function _getMaxNumberTimeSlots() {
      return this._schedule.reduce(function (tot, cur) {
        if (cur.slots.length > tot) {
          return cur.slots.length;
        }

        return tot;
      }, 0);
    }
  }, {
    key: "_emitWeekChange",
    value: function _emitWeekChange(dir) {
      var _this50 = this;

      var event = new CustomEvent('fwc-date-time-picker-week-change', {
        detail: {
          week: dir,
          data: this._schedule
        },
        bubbles: true
      });
      this.showPreloader();
      /** TODO: Replace setTimeout with async callback to simulate actual loading */

      setTimeout(function () {
        _this50.hidePreloader();
      }, 1000);
      this.dispatchEvent(event);
    }
  }, {
    key: "_emitSelectedDateTime",
    value: function _emitSelectedDateTime(date) {
      var event = new CustomEvent('fwc-date-time-picker-selected', {
        detail: date,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_selectedTime",
    value: function _selectedTime(time) {
      var start = new Date(time.start);
      var end = new Date(time.end);

      if (this.pressedButton === start.getTime()) {
        this.pressedButton = null;

        this._emitSelectedDateTime({
          start: null,
          end: null
        });
      } else {
        this.pressedButton = start.getTime();

        this._emitSelectedDateTime({
          start: start,
          end: end
        });
      }
    }
  }, {
    key: "_getDayName",
    value: function _getDayName(date) {
      var dt = new Date(date);
      return this.labelDays[dt.getDay()];
    }
  }, {
    key: "_getMonthName",
    value: function _getMonthName(date) {
      var dt = new Date(date);
      return this.labelMonths[dt.getMonth()];
    }
  }, {
    key: "_getTime",
    value: function _getTime(date) {
      var periods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var hours = new Date(date).getHours();
      var minutes = new Date(date).getMinutes();
      var ampm = periods ? hours >= 12 ? ' pm' : ' am' : '';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return "".concat(hours, ":").concat(minutes).concat(ampm);
    }
  }, {
    key: "_getSvgArrow",
    value: function _getSvgArrow() {
      return html(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon points=\"14.067 50 11 46.933 32.933 25 11 3.067 14.067 0 37.533 23.467 39 25 37.533 26.533\" />\n      </svg>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      var _this51 = this;

      return html(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/buttons-links.css\" />\n      <div class=\"date-time-picker-container\">\n        <div class=\"week-btns\">\n          <button\n            class=\"prev ", "\"\n            aria-label=\"", "\"\n            aria-hidden=\"", "\"\n            ?disabled=", "\n            @click=", "\n          >\n            ", " ", "\n          </button>\n          <button\n            class=\"next  ", "\"\n            aria-label=\"", "\"\n            aria-hidden=\"", "\"\n            ?disabled=", "\n            @click=", "\n          >\n            ", " ", "\n          </button>\n        </div>\n        ", "\n        <div class=\"dates ", "\">\n          ", "\n        </div>\n        <div class=\"no-results ", " ", "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"150\" height=\"150\" viewBox=\"0 0 150 150\">\n            <g fill=\"#D8D8D8\" transform=\"translate(5)\">\n              <path d=\"M18.3054585 68.8356164L40.2561854 68.8356164C41.8551069 68.8356164 43.1506849 67.4557192 43.1506849 65.7534247 43.1506849 64.0520548 41.8551069 62.6712329 40.2561854 62.6712329L18.3054585 62.6712329C16.7068264 62.6712329 15.4109589 64.0520548 15.4109589 65.7534247 15.4109589 67.4557192 16.7068264 68.8356164 18.3054585 68.8356164zM18.317628 83.2191781L42.2988104 83.2191781C43.9032917 83.2191781 45.2054795 81.8380479 45.2054795 80.1369863 45.2054795 78.4343836 43.9032917 77.0547945 42.2988104 77.0547945L18.317628 77.0547945C16.7122747 77.0547945 15.4109589 78.4343836 15.4109589 80.1369863 15.4109589 81.8380479 16.7122747 83.2191781 18.317628 83.2191781zM54.4520548 83.2191781C55.262363 83.2191781 56.0581849 82.892774 56.6311644 82.3160959 57.2044521 81.7431164 57.5342466 80.9506849 57.5342466 80.1369863 57.5342466 79.3266781 57.2044521 78.5308562 56.6311644 77.9575685 56.0581849 77.384589 55.262363 77.0547945 54.4520548 77.0547945 53.6417466 77.0547945 52.8459247 77.384589 52.2729452 77.9575685 51.6962671 78.5308562 51.369863 79.3266781 51.369863 80.1369863 51.369863 80.9506849 51.6962671 81.7431164 52.2729452 82.3160959 52.8459247 82.892774 53.6380479 83.2191781 54.4520548 83.2191781zM81.3604541 63.8695312C95.5607481 63.8695312 107.112771 52.3040039 107.112771 38.0871093 107.112771 23.8710937 95.5607481 12.3046875 81.3604541 12.3046875 67.1613305 12.3046875 55.6081373 23.8710937 55.6081373 38.0871093 55.6081373 52.3040039 67.1613305 63.8695312 81.3604541 63.8695312zM81.3604541 18.1652343C92.3327835 18.1652343 101.260238 27.1019532 101.260238 38.0871093 101.260238 49.0722657 92.3327835 58.0101562 81.3604541 58.0101562 70.3881248 58.0101562 61.461841 49.0722657 61.461841 38.0871093 61.461841 27.1019532 70.3881248 18.1652343 81.3604541 18.1652343z\" />\n              <path d=\"M137.566428,80.3100586 L134.028864,76.7680664 L134.028864,36.909375 C134.028864,28.8322266 127.464077,22.2597657 119.39636,22.2597657 L115.960046,22.2597657 C109.946567,9.13710937 96.700529,0 81.3604541,0 C66.0215498,0 52.7746334,9.13710937 46.7620333,22.2597657 L14.6325036,22.2597657 C6.56361604,22.2597657 0,28.8322266 0,36.909375 L0,110.739843 C0,118.818164 6.56361604,125.389453 14.6325036,125.389453 L52.3722717,125.389453 L52.3722717,132.427734 C44.4347735,132.580957 38.0253716,139.088086 38.0253716,147.070313 C38.0253716,148.688378 39.3354612,150 40.9516383,150 L93.0552787,150 C94.6714558,150 95.9815453,148.688378 95.9815453,147.070313 C95.9815453,139.088086 89.5724361,132.582128 81.6361084,132.427734 L81.6361084,125.389453 L119.39636,125.389453 C127.465248,125.389453 134.028864,118.818164 134.028864,110.739843 L134.028864,96.6418945 C135.341002,96.1508789 136.545746,95.3818359 137.566428,94.3599609 C141.43466,90.4860351 141.43466,84.1839843 137.566428,80.3100586 Z M119.39636,28.1203125 C124.237283,28.1203125 128.17633,32.062793 128.17633,36.909375 L128.17633,70.9086914 L114.340357,57.0568359 C117.560421,51.46875 119.404262,44.9900391 119.404262,38.0871093 C119.404262,34.6400391 118.941326,31.2984375 118.079541,28.1203125 L119.39636,28.1203125 Z M81.3604541,5.859375 C99.110017,5.859375 113.550558,20.3167968 113.550558,38.0871093 C113.550558,55.8574218 99.110017,70.3148438 81.3604541,70.3148438 C63.6108912,70.3148438 49.1703508,55.8574218 49.1703508,38.0871093 C49.1703508,20.3167968 63.6108912,5.859375 81.3604541,5.859375 Z M14.6325036,28.1203125 L44.642831,28.1203125 C43.7807528,31.2984375 43.3178175,34.6400391 43.3178175,38.0871093 C43.3178175,41.8040039 43.85508,45.3952149 44.8508886,48.7942383 L17.8970467,48.7942383 C16.2808696,48.7942383 14.9707801,50.1055664 14.9707801,51.7239258 C14.9707801,53.3408203 16.2808696,54.6536133 17.8970467,54.6536133 L47.1082107,54.6536133 C53.274147,67.3792968 66.3106649,76.1753907 81.3604541,76.1753907 C88.2544457,76.1753907 94.7252991,74.3293945 100.30686,71.1067383 L123.53293,94.3599609 C124.833949,95.662207 126.432861,96.5572266 128.17633,96.984082 L128.17633,99.6070313 L5.85253325,99.6070313 L5.85253325,36.909375 C5.85253325,32.062793 9.79158075,28.1203125 14.6325036,28.1203125 Z M89.6283278,144.140625 L44.3797597,144.140625 C45.5868446,140.729003 48.8423163,138.280078 52.6578753,138.280078 L81.3490417,138.280078 C85.1646007,138.280078 88.4200723,140.729003 89.6283278,144.140625 Z M58.224805,132.420703 L75.7835751,132.420703 L75.7835751,125.389453 L58.224805,125.389453 L58.224805,132.420703 Z M119.39636,119.530078 L14.6325036,119.530078 C9.79158075,119.530078 5.85253325,115.586426 5.85253325,110.739843 L5.85253325,105.466407 L128.17633,105.466407 L128.17633,110.739843 C128.17633,115.586426 124.237283,119.530078 119.39636,119.530078 Z M133.427516,90.2162109 C131.840894,91.8055664 129.257586,91.8043945 127.670964,90.2162109 L105.215379,67.7329101 C107.332241,66.0231445 109.262992,64.0904297 110.970761,61.9708008 L133.427516,84.4541016 C135.014138,86.0422851 135.014138,88.6277343 133.427516,90.2162109 Z\" />\n              <path d=\"M81.0709838,30.6355531 C85.1910336,30.6355531 88.5429639,33.9877271 88.5429639,38.106881 C88.5429639,39.7577109 89.8810461,41.0958904 91.5317559,41.0958904 C93.1827646,41.0958904 94.5205479,39.7577109 94.5205479,38.106881 C94.5205479,30.6902519 88.4870735,24.6575342 81.0709838,24.6575342 C79.420274,24.6575342 78.0821918,25.9966104 78.0821918,27.6465437 C78.0821918,29.2973736 79.420274,30.6355531 81.0709838,30.6355531 Z\" />\n            </g>\n          </svg>\n          <div>", "</div>\n        </div>\n      </div>\n    "])), this.hidePreviousButton ? 'hide' : '', this.labelPrevWeek, this.hidePreviousButton, this._disablePrevWeekBtn, function () {
        _this51._emitWeekChange('prev');
      }, this._getSvgArrow(), this.labelPrevWeek, this.hideNextButton ? 'hide' : '', this.labelNextWeek, this.hideNextButton, this._disableNextWeekBtn, function () {
        _this51._emitWeekChange('next');
      }, this.labelNextWeek, this._getSvgArrow(), this._showPreloader ? html(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["<fwc-preloader></fwc-preloader>"]))) : '', !this._schedule.length || this._showPreloader ? 'hide' : '', this._schedule.map(function (item, i) {
        return html(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n              <div class=\"date-col\">\n                <h6 id=\"fwc_heading_", "\"><span>", "</span> ", " ", "</h6>\n                <ul aria-labelledby=\"fwc_heading_", "\">\n                  ", "\n                  <!-- add the empty dashes -->\n                  ", "\n                </ul>\n              </div>\n            "])), i, _this51._getDayName(item.date), _this51._getMonthName(item.date), new Date(item.date).getDate(), i, item.slots.map(function (time) {
          return html(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n                      <li class=\"", "\">\n                        <button\n                          @click=\"", "\"\n                          aria-label=\"", " - ", "\"\n                          aria-pressed=\"", "\"\n                        >\n                          ", " - ", "\n                        </button>\n                      </li>\n                    "])), _this51.pressedButton === new Date(time.start).getTime() ? 'selected' : '', function () {
            _this51._selectedTime(time);
          }, _this51._getTime(time.start, false), _this51._getTime(time.end, true), _this51.pressedButton === new Date(time.start).getTime(), _this51._getTime(time.start, false), _this51._getTime(time.end, true));
        }), _toConsumableArray(Array(_this51.maxNumberTimeSlots - item.slots.length)).map(function (num, i) {
          return html(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n                      <li class=\"empty-time\" aria-hidden=\"true\">\n                        <span>&mdash;</span>\n                      </li>\n                    "])));
        }));
      }), !this._schedule.length && !this.initialLoad ? '' : 'hide', this._showPreloader ? 'hide' : '', this.labelNoResults);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n        .date-time-picker-container {\n          width: 100%;\n        }\n        .week-btns {\n          display: flex;\n          justify-content: space-between;\n          border-bottom: 1px solid var(--color-gray-four);\n          padding-bottom: calc(0.5 * var(--fwcu));\n          margin-bottom: var(--fwcu);\n        }\n        .week-btns button {\n          display: flex;\n          align-items: center;\n          font-weight: 700;\n          font-size: calc(2 * var(--fwcu));\n          color: var(--color-primary);\n          border: none;\n          background: transparent;\n          padding: var(--fwcu) 0;\n          line-height: calc(2 * var(--fwcu));\n          transition: background-color 250ms ease, color 250ms ease;\n          cursor: pointer;\n        }\n        .week-btns button[disabled],\n        .week-btns button[disabled]:hover {\n          border-color: var(--color-gray-five);\n          color: var(--color-gray-three);\n          pointer-events: none;\n        }\n        .week-btns button[disabled] svg,\n        .week-btns button[disabled]:hover svg {\n          fill: var(--color-gray-three);\n        }\n        .week-btns svg {\n          display: inline-block;\n          width: calc(2 * var(--fwcu));\n          height: calc(2 * var(--fwcu));\n          fill: var(--color-primary);\n        }\n        /* TODO Needs to be updated to use overlay */\n        .week-btns button:hover,\n        .week-btns button:hover svg {\n          color: var(--color-primary-hover);\n          fill: var(--color-primary-hover);\n        }\n        .week-btns button:focus {\n          outline-offset: 4px;\n        }\n        .prev svg {\n          transform: rotate(180deg);\n          margin-right: var(--fwcu);\n        }\n        .next svg {\n          margin-left: var(--fwcu);\n        }\n        .dates {\n          display: flex;\n          justify-content: space-between;\n        }\n        .dates button {\n          text-align: center;\n          border: 1px solid var(--color-primary);\n          font-size: calc(1.5 * var(--fwcu));\n          padding: calc(0.5 * var(--fwcu));\n          line-height: calc(1.5 * var(--fwcu));\n          width: 100%;\n          appearance: none;\n          background: var(--color-white);\n          min-height: calc(3.75 * var(--fwcu));\n          border-radius: var(--border-radius);\n          color: var(--color-primary);\n          transition: background 250ms ease-in-out;\n          font-weight: 700;\n          cursor: pointer;\n        }\n        .dates button:focus {\n          /* TODO: change if necessary */\n          outline: none;\n          box-shadow: 0 0 0 1.5px var(--color-primary);\n        }\n        .dates button:hover {\n          color: var(--color-white);\n          background-image: linear-gradient(180deg, rgba(var(--color-rgb-black), 0), rgba(var(--color-rgb-black), 0.2)), linear-gradient(180deg, var(--color-primary), var(--color-primary));\n          border-color: var(--color-primary);\n        }\n        .date-col {\n          width: calc(14 * var(--fwcu));\n          margin-right: calc(2 * var(--fwcu));\n        }\n        .date-col:last-child {\n          margin-right: 0;\n        }\n        h6 {\n          text-align: center;\n          font-weight: 700;\n          font-size: calc(1.75 * var(--fwcu));\n          margin: calc(2.5 * var(--fwcu)) 0;\n          color: var(--color-gray-one);\n        }\n        h6 span {\n          display: block;\n          font-size: calc(1.75 * var(--fwcu));\n          font-weight: 400;\n          margin-bottom: calc(0.5 * var(--fwcu));\n        }\n        ul {\n          list-style-type: none;\n          padding: 0;\n          margin: 0;\n        }\n        li {\n          margin-bottom: calc(2 * var(--fwcu));\n          width: 100%;\n        }\n        li:hover button {\n          background-color: var(--color-primary);\n          color: var(--color-white);\n        }\n        li.selected button {\n          background-color: var(--color-primary);\n          color: var(--color-white);\n        }\n        li.empty-time {\n          text-align: center;\n          color: var(--color-gray-three);\n          height: calc(3.75 * var(--fwcu));\n          margin-bottom: calc(2 * var(--fwcu));\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n        li span {\n          display: block;\n          height: calc(2 * var(--fwcu));\n          line-height: calc(2 * var(--fwcu));\n        }\n        .no-results {\n          text-align: center;\n          font-size: calc(2.25 * var(--fwcu));\n          font-weight: 700;\n          font-family: var(--font-serif);\n          color: var(--color-gray-one);\n        }\n        .hide {\n          display: none;\n        }\n        .week-btns .hide {\n          opacity: 0;\n          visibility: hidden;\n          cursor: none;\n        }\n        @media only screen and (max-width: 900px) {\n          .week-btns {\n            border-bottom: none;\n          }\n          .dates {\n            flex-direction: column;\n            width: 100%;\n          }\n          .date-col {\n            width: 100%;\n          }\n          ul {\n            display: flex;\n            flex-wrap: wrap;\n            margin-bottom: calc(2.5 * var(--fwcu));\n          }\n          li {\n            width: calc(50% - var(--fwcu));\n            margin-bottom: calc(1.5 * var(--fwcu));\n          }\n          li:nth-child(odd) {\n            margin-right: calc(1.5 * var(--fwcu));\n          }\n          li:hover button,\n          .dates button:hover {\n            outline: none;\n            box-shadow: var(--box-shadow);\n            background-image: none;\n            color: var(--color-primary);\n            background-color: var(--color-white);\n          }\n          li.selected:hover button {\n            background-color: var(--color-primary);\n            color: var(--color-white);\n            background-image: linear-gradient(180deg, rgba(var(--color-rgb-black), 0), rgba(var(--color-rgb-black), 0.2)), linear-gradient(180deg, var(--color-primary), var(--color-primary));\n          }\n          h6 {\n            text-align: left;\n            font-size: calc(1.75 * var(--fwcu));\n            margin-bottom: calc(2 * var(--fwcu));\n          }\n          h6 span {\n            font-size: calc(1.75 * var(--fwcu));\n          }\n          li.empty-time {\n            display: none;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        schedule: {
          type: Array
        },
        labelNextWeek: {
          attribute: 'label-next-week',
          type: String
        },
        labelPrevWeek: {
          attribute: 'label-prev-week',
          type: String
        },
        labelDays: {
          attribute: 'label-days',
          type: Array
        },
        labelMonths: {
          attribute: 'label-months',
          type: Array
        },
        labelNoResults: {
          attribute: 'label-no-results',
          type: String
        },
        hidePreviousButton: {
          attribute: 'hide-previous-button',
          type: Boolean
        },
        hideNextButton: {
          attribute: 'hide-next-button',
          type: Boolean
        },
        pressedButton: {}
      };
    }
  }]);

  return FwcDateTimePickerComponent;
}(LitElement);

var FwcDateTimePicker = /*#__PURE__*/function (_FwcBase15) {
  _inherits(FwcDateTimePicker, _FwcBase15);

  var _super36 = _createSuper(FwcDateTimePicker);

  function FwcDateTimePicker() {
    _classCallCheck(this, FwcDateTimePicker);

    return _super36.call(this, 'fwc-date-time-picker', FwcDateTimePickerComponent);
  }

  return FwcDateTimePicker;
}(FwcBase); // Helper class to allow transitions from display:none/block
// Used by: FwcExpandMultiItem


var ExpandCollapse = /*#__PURE__*/function () {
  function ExpandCollapse(content) {
    var _this52 = this;

    _classCallCheck(this, ExpandCollapse);

    this.content = content;
    this.drawer = content.firstElementChild;
    this.isExpanded = false; // when the panel closes

    this.content.addEventListener('transitionend', function () {
      if (!_this52.isExpanded) {
        // hides content from tab order when closed.
        _this52.drawer.style.display = 'none';
      }
    });
  }

  _createClass(ExpandCollapse, [{
    key: "collapsePanel",
    value: function collapsePanel() {
      var _this53 = this;

      var sectionHeight = this.content.scrollHeight; // temporarily disable all css transitions

      var elementTransition = this.content.style.transition;
      this.content.style.transition = '';
      this.isExpanded = false; // on the next frame (as soon as the previous style change has taken effect),
      // explicitly set the element's height to its current pixel height, so we
      // aren't transitioning out of 'auto'

      requestAnimationFrame(function () {
        _this53.content.style.height = "".concat(sectionHeight, "px");
        _this53.content.style.transition = elementTransition; // on the next frame (as soon as the previous style change has taken effect),

        requestAnimationFrame(function () {
          _this53.content.style.height = "".concat(0, "px");
        });
      });
    }
  }, {
    key: "expandPanel",
    value: function expandPanel() {
      var element;
      var sectionHeight; // set inner drawer to block so we can get the height

      this.drawer.style.display = 'block';
      element = this.content;
      sectionHeight = this.content.scrollHeight; // have the element transition to the height of its inner content

      element.style.height = "".concat(sectionHeight, "px");
      element.addEventListener('transitionend', function handler() {
        element.removeEventListener('transitionend', handler);
        element.style.height = 'auto';
      });
      this.isExpanded = true;
    }
  }]);

  return ExpandCollapse;
}();

var FwcExpandComponent = /*#__PURE__*/function (_LitElement18) {
  _inherits(FwcExpandComponent, _LitElement18);

  var _super37 = _createSuper(FwcExpandComponent);

  function FwcExpandComponent() {
    var _this54;

    _classCallCheck(this, FwcExpandComponent);

    _this54 = _super37.call(this);
    _this54.expanded = false;
    _this54.label = 'Toggle';
    _this54.last = false;
    return _this54;
  }

  _createClass(FwcExpandComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var content = this.shadowRoot.querySelector('.fwc-expand-content');
      this.expandCollapse = new ExpandCollapse(content);

      if (this.expanded) {
        this._expandPanel();
      }
    }
  }, {
    key: "_collapsePanel",
    value: function _collapsePanel() {
      this.expandCollapse.collapsePanel();
    }
  }, {
    key: "_expandPanel",
    value: function _expandPanel() {
      this.expandCollapse.expandPanel();
    }
  }, {
    key: "expand",
    value: function expand() {
      this._expand();
    } // use to toggle outside of component

  }, {
    key: "_expand",
    value: function _expand() {
      if (this.expanded) {
        this._collapsePanel();
      } else {
        this._expandPanel();
      }

      this.expanded = !this.expanded;
      var event = new CustomEvent('fwc-expand-expanded', {
        detail: this.expanded,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n      <div class=\"fwc-expand-wrapper ", "\">\n        <div class=\"fwc-expand-header\">\n          <button id=\"expandBtn_", "\" class=\"fwc-expand-button\" type=\"button\" role=\"button\" aria-controls=\"panel_", "\" aria-label=\"", "\" aria-expanded=\"", "\" @click=", ">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"51\" height=\"50\" viewBox=\"0 0 50 50\" class=\"fwc-expand-icon ", "\" focusable=\"false\">\n              <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\" />\n            </svg>\n          </button>\n          <span class=\"fwc-expand-label\">", "</span>\n        </div>\n        <div class=\"fwc-expand-content ", "\">\n          <div role=\"region\" class=\"fwc-expand-drawer\" id=\"panel_", "\" aria-labelledby=\"expandBtn_", "\">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n    "])), this.last ? 'fwc-expand-last' : '', this.id, this.id, this.labelAriaExpandBtn ? this.labelAriaExpandBtn : this.label, this.expanded, this._expand, this.expanded ? 'expanded' : '', this.label, this.expanded ? 'expanded' : '', this.id, this.id);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n        .fwc-expand-wrapper {\n          border-top: 1px solid var(--color-gray-four);\n        }\n        .fwc-expand-last {\n          border-bottom: 1px solid var(--color-gray-four);\n        }\n        .fwc-expand-header {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          padding: calc(4 * var(--fwcu)) calc(1.5 * var(--fwcu));\n        }\n        .fwc-expand-label {\n          color: var(--color-gray-one);\n          font-size: var(--default-font-size);\n          font-family: var(--font-sans-serif, sans-serif);\n        }\n        .fwc-expand-button {\n          border: none;\n          background: none;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          margin: 0;\n          padding: calc(0.5 * var(--fwcu));\n          margin-right: calc(1.5 * var(--fwcu));\n          border-radius: 0;\n        }\n        .fwc-expand-icon {\n          fill: var(--color-primary, #286ce2);\n          height: calc(2 * var(--fwcu));\n          width: calc(2 * var(--fwcu));\n        }\n        .fwc-expand-icon.expanded {\n          transform: rotateX(180deg);\n        }\n        .fwc-expand-content {\n          overflow: hidden;\n          transition: height 0.3s ease;\n          padding-right: calc(1.5 * var(--fwcu));\n          padding-left: calc(1.5 * var(--fwcu));\n          height: 0;\n        }\n        .fwc-expand-drawer {\n          display: none;\n          padding-bottom: calc(3 * var(--fwcu));\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        label: {
          type: String
        },
        labelAriaExpandBtn: {
          attribute: 'label-aria-expand-btn',
          type: String
        },
        expanded: {
          type: Boolean
        },
        last: {
          type: Boolean
        }
      };
    }
  }]);

  return FwcExpandComponent;
}(LitElement);

var FwcExpand = /*#__PURE__*/function (_FwcBase16) {
  _inherits(FwcExpand, _FwcBase16);

  var _super38 = _createSuper(FwcExpand);

  function FwcExpand() {
    _classCallCheck(this, FwcExpand);

    return _super38.call(this, 'fwc-expand', FwcExpandComponent);
  }

  return FwcExpand;
}(FwcBase);

var FwcExpandMultiComponent = /*#__PURE__*/function (_LitElement19) {
  _inherits(FwcExpandMultiComponent, _LitElement19);

  var _super39 = _createSuper(FwcExpandMultiComponent);

  function FwcExpandMultiComponent() {
    var _this55;

    _classCallCheck(this, FwcExpandMultiComponent);

    _this55 = _super39.call(this);
    _this55.slotItems = null;
    _this55.slotItemActiveIndex = null; // used for setting an index on <fwc-expand-multi-item>

    _this55.childIndexTracker = 0;
    return _this55;
  }

  _createClass(FwcExpandMultiComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // dispatch an event when the component has connected
      _get(_getPrototypeOf(FwcExpandMultiComponent.prototype), "connectedCallback", this).call(this);

      var componentName = this.tagName.toLowerCase();
      var event = new CustomEvent("".concat(componentName, "-connected"), {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      // get slotted children
      this.slotItems = this._slottedChildren();

      if (this.slotItemActiveIndex) {
        this._expandSlotByActiveIndex();
      }
    }
  }, {
    key: "_expandSlotByActiveIndex",
    value: function _expandSlotByActiveIndex() {
      var _this56 = this;

      // expand a child by index
      this.slotItems.forEach(function (item, index) {
        if (_this56.slotItemActiveIndex === index) {
          item.expandPanel();
        } else {
          item.closePanel();
        }
      });
    }
  }, {
    key: "expandByIndex",
    value: function expandByIndex(index) {
      this.slotItemActiveIndex = index;

      if (this.slotItems) {
        this._expandSlotByActiveIndex();
      }
    }
  }, {
    key: "_slottedChildren",
    value: function _slottedChildren() {
      var slot = this.shadowRoot.querySelector('slot');
      var childNodes = slot.assignedNodes({
        flatten: true
      });
      return Array.prototype.filter.call(childNodes, function (node) {
        return node.nodeType === Node.ELEMENT_NODE;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n      <div class=\"fwc-expand-multi-wrapper\">\n        <slot></slot>\n      </div>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral([""])))];
    }
  }]);

  return FwcExpandMultiComponent;
}(LitElement);

var FwcExpandMultiItemComponent = /*#__PURE__*/function (_LitElement20) {
  _inherits(FwcExpandMultiItemComponent, _LitElement20);

  var _super40 = _createSuper(FwcExpandMultiItemComponent);

  function FwcExpandMultiItemComponent() {
    var _this57;

    _classCallCheck(this, FwcExpandMultiItemComponent);

    _this57 = _super40.call(this);
    _this57.expanded = false;
    _this57.index = 0;
    return _this57;
  }

  _createClass(FwcExpandMultiItemComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this58 = this;

      var content = this.shadowRoot.querySelector('.fwc-expand-content');
      this.expandCollapse = new ExpandCollapse(content); // set the stored index from the parent and then increment it for next instance

      this.index = this.parentNode.childIndexTracker;
      this.parentNode.childIndexTracker += 1; // if the property is passed in

      if (this.expanded) {
        this.expandPanel();
      }

      this.parentNode.addEventListener('fwc-expand-multi-expanded', function (e) {
        // if the event is dispatched from a sibling component, close its panel
        if (e.target !== _this58) {
          _this58.closePanel();

          return;
        } // if the event is dispatched from itself, toggle the panel


        if (_this58.expanded) {
          _this58.closePanel();
        } else {
          _this58.expandPanel();
        } // stop the event from bubbling outside fwc-expand-multi


        e.cancelBubble = true;
      });
    }
  }, {
    key: "expandPanel",
    value: function expandPanel() {
      this.setAttribute('expanded', 'true');
      this.expandCollapse.expandPanel();
    }
  }, {
    key: "closePanel",
    value: function closePanel() {
      this.removeAttribute('expanded');
      this.expandCollapse.collapsePanel();
    } //TODO send index in details
    //Send on expandPanel

  }, {
    key: "_dispatchExpandEvent",
    value: function _dispatchExpandEvent() {
      var event = new CustomEvent('fwc-expand-multi-expanded', {
        detail: !this.expanded,
        bubbles: true,
        composed: false
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["\n      <div class=\"fwc-expand-multi-item\">\n        <div class=\"fwc-expand-header\">\n          <button class=\"fwc-expand-button\" type=\"button\" id=\"expand_", "\" aria-expanded=\"", "\" aria-controls=\"panel_", "\" aria-label=\"", "\" @click=", ">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" class=\"fwc-expand-icon ", "\" focusable=\"false\">\n              <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\" />\n            </svg>\n          </button>\n          <slot name=\"expand-header\"></slot>\n        </div>\n        <div class=\"fwc-expand-content\">\n          <div class=\"fwc-expand-drawer\" role=\"region\" id=\"panel_", "\" aria-labelledby=\"expand_", "\" style=\"display: none;\">\n            <slot name=\"expand-panel\"></slot>\n          </div>\n        </div>\n      </div>\n    "])), this.index, this.expanded, this.index, this.expandButtonAriaLabel, this._dispatchExpandEvent, this.expanded ? 'expanded' : '', this.index, this.index);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["\n        .fwc-expand-multi-item {\n        }\n        .fwc-expand-header {\n          position: relative;\n          padding: var(--fwcu);\n          display: flex;\n        }\n        .fwc-expand-button {\n          flex-basis: calc(3 * var(--fwcu));\n          border: none;\n          background: none;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          border-radius: 0;\n        }\n        .fwc-expand-icon {\n          height: calc(2 * var(--fwcu));\n          width: calc(2 * var(--fwcu));\n        }\n        .fwc-expand-icon.expanded {\n          transform: rotateX(180deg);\n        }\n        .fwc-expand-content {\n          overflow: hidden;\n          transition: height 0.3s ease 0s;\n          height: 0px;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        expanded: {
          type: Boolean
        },
        expandButtonAriaLabel: {
          attribute: 'label-aria-expand-text',
          type: String
        }
      };
    }
  }]);

  return FwcExpandMultiItemComponent;
}(LitElement);

var FwcExpandMulti = /*#__PURE__*/function (_FwcBase17) {
  _inherits(FwcExpandMulti, _FwcBase17);

  var _super41 = _createSuper(FwcExpandMulti);

  function FwcExpandMulti() {
    var _this59;

    _classCallCheck(this, FwcExpandMulti);

    _this59 = _super41.call(this, 'fwc-expand-multi', FwcExpandMultiComponent);
    var FwcExpandMultiItem = new FwcBase('fwc-expand-multi-item', FwcExpandMultiItemComponent);
    FwcExpandMultiItem.build();
    return _this59;
  }

  return FwcExpandMulti;
}(FwcBase);

var FwcExpandMobileColComponent = /*#__PURE__*/function (_LitElement21) {
  _inherits(FwcExpandMobileColComponent, _LitElement21);

  var _super42 = _createSuper(FwcExpandMobileColComponent);

  function FwcExpandMobileColComponent() {
    var _this60;

    _classCallCheck(this, FwcExpandMobileColComponent);

    _this60 = _super42.call(this);
    _this60.mobileTitle = '';
    _this60.horizontal = false;
    _this60.isExpanded = false;
    return _this60;
  }

  _createClass(FwcExpandMobileColComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      if (this.horizontal) {
        var slotItems = this._getSlotted();

        slotItems.forEach(function (slotItem, i) {
          slotItem.setAttribute('horizontal', '');
        });
      }
    }
  }, {
    key: "_getSlotted",
    value: function _getSlotted() {
      var slot = this.shadowRoot.querySelector('slot');
      var childNodes = slot ? slot.assignedNodes({
        flatten: true
      }) : [];
      return Array.prototype.filter.call(childNodes, function (node) {
        return node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'FWC-EXPAND-MOBILE-COL-ITEM';
      });
    }
  }, {
    key: "_mobileExpandToggle",
    value: function _mobileExpandToggle(e) {
      var slotItems = this._getSlotted();

      slotItems.forEach(function (slotItem, i) {
        if (slotItem.hasAttribute('expanded')) {
          slotItem.removeAttribute('expanded');
        } else {
          slotItem.setAttribute('expanded', '');
        }
      });
      this.classList.toggle('expanded');
      this.isExpanded = !this.isExpanded; // aria-expanded does not update without this?

      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["\n      <div class=\"fwc-expand-mobile-col-wrapper\">\n        <div class=\"fwc-mobile-title\">\n          <span>", "</span>\n          <button class=\"fwc-expand-icon\" @click=\"", "\" aria-expanded=\"", "\" aria-label=\"", "\"></button>\n        </div>\n        <ul>\n          <slot class=\"", "\"></slot>\n        </ul>\n      </div>\n    "])), this.mobileTitle, this._mobileExpandToggle, this.isExpanded, this.mobileTitle, this.horizontal ? 'horizontal' : '');
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n          width: 100%;\n          padding: calc(2 * var(--fwcu)) 0;\n        }\n        ul {\n          list-style-type: none;\n          margin: 0;\n          padding: 0;\n          background: transparent;\n          overflow: hidden;\n          transition: all 500ms ease;\n        }\n        .fwc-mobile-title {\n          font-size: var(--default-font-size);\n          color: var(--color-white);\n          justify-content: space-between;\n          display: none;\n        }\n        .fwc-expand-icon {\n          height: calc(2.75 * var(--fwcu));\n          width: calc(2.75 * var(--fwcu));\n          background: var(--color-white);\n          border-radius: 50%;\n          position: relative;\n          border: none;\n          display: none;\n        }\n        .horizontal {\n          display: flex;\n          flex-direction: row;\n        }\n        .fwc-expand-icon:before {\n          content: '';\n          position: absolute;\n          background: var(--color-black);\n          height: calc(0.25 * var(--fwcu));\n          width: calc(1.5 * var(--fwcu));\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n        }\n        .fwc-expand-icon:after {\n          content: '';\n          position: absolute;\n          background: var(--color-black);\n          height: calc(0.25 * var(--fwcu));\n          width: calc(1.5 * var(--fwcu));\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          transform: rotate(90deg);\n          opacity: 1;\n          transition: opacity 500ms ease;\n        }\n        :host(.expanded) ul {\n          margin-top: calc(2 * var(--fwcu));\n        }\n        :host(.expanded) .fwc-expand-icon:after {\n          opacity: 0;\n        }\n        @media screen and (max-width: 900px) {\n          .fwc-expand-icon {\n            display: inline-block;\n          }\n          .fwc-mobile-title {\n            display: flex;\n          }\n          .horizontal {\n            display: flex;\n            flex-direction: column;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        mobileTitle: {
          attribute: 'mobile-title',
          type: String
        },
        horizontal: {
          attribute: 'horizontal',
          type: Boolean
        }
      };
    }
  }]);

  return FwcExpandMobileColComponent;
}(LitElement);

var FwcExpandMobileColItemComponent = /*#__PURE__*/function (_LitElement22) {
  _inherits(FwcExpandMobileColItemComponent, _LitElement22);

  var _super43 = _createSuper(FwcExpandMobileColItemComponent);

  function FwcExpandMobileColItemComponent() {
    _classCallCheck(this, FwcExpandMobileColItemComponent);

    return _super43.call(this);
  }

  _createClass(FwcExpandMobileColItemComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      // for ie11 and edge
      var slotItem = this._getSlotted();

      slotItem.style.color = '#fff';
      slotItem.style.textDecoration = 'none';
      slotItem.style.fontSize = this.horizontal ? '12px' : '';
    }
  }, {
    key: "_getSlotted",
    value: function _getSlotted() {
      var slot = this.shadowRoot.querySelector('slot');
      var childNode = slot ? slot.assignedNodes({
        flatten: true
      }) : [];
      return childNode[0];
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcExpandMobileColItemComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'expanded') {
        var liElem = this.shadowRoot.querySelector('li');

        if (this.expanded) {
          liElem.classList.add('expanded');
        } else {
          liElem.classList.remove('expanded');
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["\n      <li class=\"list-item ", "\">\n        <span>\n          <slot></slot>\n        </span>\n      </li>\n    "])), this.horizontal ? 'horizontal' : '');
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n          width: 100%;\n        }\n        ::slotted(*) {\n          color: var(--color-white) !important;\n          text-decoration: none !important;\n        }\n        span {\n          color: var(--color-white);\n          text-decoration: none;\n          display: flex;\n          align-items: center;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          width: 100%;\n        }\n        li {\n          transition: all 0.5s cubic-bezier(0.36, 0, 0.44, 0.2);\n          position: relative;\n          overflow: hidden;\n          padding-top: calc(3.5 * var(--fwcu));\n          top: 0;\n        }\n        li.list-item {\n          margin-bottom: calc(var(--fwcu));\n        }\n        li.horizontal {\n          padding-top: calc(6.75 * var(--fwcu));\n          margin: 0 calc(var(--fwcu));\n        }\n        @media screen and (max-width: 900px) {\n          li,\n          li.horizontal {\n            padding-top: 0;\n            top: calc(-12.25 * var(--fwcu));\n          }\n          li.expanded,\n          li.expanded.horizontal {\n            padding-top: calc(6.75 * var(--fwcu));\n            top: 0;\n          }\n          span {\n            border-top: 1px solid rgba(var(--color-rgb-gray-five), 0.2);\n            padding-left: calc(2 * var(--fwcu));\n          }\n          li.list-item {\n            visibility: hidden;\n          }\n          li.list-item.expanded {\n            visibility: visible;\n          }\n          li.list-item {\n            margin-bottom: 0;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        expanded: {
          type: Boolean
        },
        horizontal: {
          type: Boolean
        }
      };
    }
  }]);

  return FwcExpandMobileColItemComponent;
}(LitElement);

var FwcExpandMobileCol = /*#__PURE__*/function (_FwcBase18) {
  _inherits(FwcExpandMobileCol, _FwcBase18);

  var _super44 = _createSuper(FwcExpandMobileCol);

  function FwcExpandMobileCol() {
    var _this61;

    _classCallCheck(this, FwcExpandMobileCol);

    _this61 = _super44.call(this, 'fwc-expand-mobile-col', FwcExpandMobileColComponent);
    var FwcExpandMobilColItem = new FwcBase('fwc-expand-mobile-col-item', FwcExpandMobileColItemComponent);
    FwcExpandMobilColItem.build();
    return _this61;
  }

  return FwcExpandMobileCol;
}(FwcBase);

var FwcFeaturetteComponent = /*#__PURE__*/function (_LitElement23) {
  _inherits(FwcFeaturetteComponent, _LitElement23);

  var _super45 = _createSuper(FwcFeaturetteComponent);

  function FwcFeaturetteComponent() {
    var _this62;

    _classCallCheck(this, FwcFeaturetteComponent);

    _this62 = _super45.call(this);
    _this62.featuretteItems = [];
    _this62.isAnimateEnabled = false;
    return _this62;
  }
  /** Checks if trigger-animate was updated to 'start' or already equal to 'start' */


  _createClass(FwcFeaturetteComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcFeaturetteComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'trigger-animate' && newVal === 'start') {
        if (oldVal) {
          this._startAnimation();
        } else {
          this.isAnimateEnabled = true;
        }
      }
    }
    /** Checks if isAnimateEnabled is true on page load and starts animation */

  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.featuretteItems = this._getSlottedChildren();

      if (this.isAnimateEnabled) {
        this._setAnimation();
      }
    }
    /** Dispatches an event when the component has rendered in the DOM */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(FwcFeaturetteComponent.prototype), "connectedCallback", this).call(this);

      var componentName = this.tagName.toLowerCase();
      var event = new CustomEvent("".concat(componentName, "-connected"), {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
    /** Retrieves the slotted children in the view and condenses it into an array of elements */

  }, {
    key: "_getSlottedChildren",
    value: function _getSlottedChildren() {
      var slot = this.shadowRoot.querySelector('slot');
      var childNodes = slot.assignedNodes({
        flatten: true
      });
      return Array.prototype.filter.call(childNodes, function (node) {
        return node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'FWC-FEATURETTE-ITEM';
      });
    }
    /** Manually fires the animations on attribute change outside of lifecycle */

  }, {
    key: "_startAnimation",
    value: function _startAnimation() {
      if (this.featuretteItems) {
        this.featuretteItems.forEach(function (item, index) {
          item.setAnimation(true, index * 300);
          item.startAnimation();
        });
      }
    }
    /** Sets the animate bool to true on child featurette items that will animate after they finish loading */

  }, {
    key: "_setAnimation",
    value: function _setAnimation() {
      if (this.featuretteItems) {
        this.featuretteItems.forEach(function (item, index) {
          item.setAnimation(true, index * 300);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral([" <slot></slot> "])));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        triggerAnimate: {
          attribute: 'trigger-animate',
          type: String
        }
      };
    }
  }]);

  return FwcFeaturetteComponent;
}(LitElement);

var FwcFeaturetteItemComponent = /*#__PURE__*/function (_LitElement24) {
  _inherits(FwcFeaturetteItemComponent, _LitElement24);

  var _super46 = _createSuper(FwcFeaturetteItemComponent);

  function FwcFeaturetteItemComponent() {
    var _this63;

    _classCallCheck(this, FwcFeaturetteItemComponent);

    _this63 = _super46.call(this);
    _this63.delay = 0;
    _this63.animate = false;
    return _this63;
  }
  /** Starts fade-up animation if 'animate' bool was already set to true by parent component */


  _createClass(FwcFeaturetteItemComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      if (this.animate) {
        this.startAnimation();
      }
    }
    /** Set animate bool and the delay time on this featurette item */

  }, {
    key: "setAnimation",
    value: function setAnimation(val, delay) {
      this.animate = val;
      this.delay = delay;
    }
    /** Starts fade-up animation but also checks the parent container exists before animating */

  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var featurette = this.shadowRoot.querySelector('.featurette');

      if (featurette) {
        setTimeout(function () {
          featurette.classList.add('animate');
        }, this.delay);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["\n      <div class=\"featurette\">\n        <div class=\"featurette-image\">\n          <slot name=\"fwc-featurette-image\"></slot>\n        </div>\n        <div class=\"featurette-content\">\n          <slot name=\"fwc-featurette-content\"></slot>\n        </div>\n      </div>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["\n        @keyframes fadeInUp {\n          0% {\n            opacity: 0;\n            transform: translateY(90%);\n          }\n          50% {\n            opacity: 1;\n          }\n          100% {\n            transform: translateY(0);\n          }\n        }\n        .featurette {\n          position: relative;\n          display: flex;\n          flex-direction: row;\n          margin-bottom: calc(5 * var(--fwcu));\n          transform: translateY(90%);\n          opacity: 0;\n        }\n        .animate {\n          animation-name: fadeInUp;\n          animation-delay: 0ms;\n          animation-duration: 1s;\n          animation-timing-function: ease-out;\n          animation-fill-mode: both;\n          opacity: 1;\n        }\n        .featurette-image {\n          display: flex;\n          justify-content: flex-start;\n          opacity: 1;\n          width: calc(6.25 * var(--fwcu));\n          align-items: center;\n          flex: 1 0 auto;\n        }\n        .featurette-image ::slotted(img),\n        .featurette-image ::slotted(svg) {\n          width: calc(6.25 * var(--fwcu));\n          height: calc(6.25 * var(--fwcu));\n        }\n        .featurette-content {\n          flex: 50 0 0;\n          padding-left: calc(1.5 * var(--fwcu));\n        }\n        @media screen and (max-width: 600px) {\n          .featurette {\n            transform: none;\n            margin-bottom: calc(6 * var(--fwcu));\n            opacity: 1;\n          }\n          .animate {\n            animation-duration: 0s;\n          }\n          .featurette-image {\n            opacity: 0.1;\n            position: absolute;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            top: 50%;\n            display: flex;\n            width: 100%;\n            align-items: center;\n            justify-content: center;\n          }\n          .featurette-image ::slotted(img),\n          .featurette-image ::slotted(svg) {\n            width: calc(11.5 * var(--fwcu));\n            height: calc(11.5 * var(--fwcu));\n          }\n        }\n        @media screen and (max-width: 900px) {\n          .featurette-image {\n            align-items: flex-start;\n          }\n        }\n      "])))];
    }
  }]);

  return FwcFeaturetteItemComponent;
}(LitElement);

var FwcFeaturette = /*#__PURE__*/function (_FwcBase19) {
  _inherits(FwcFeaturette, _FwcBase19);

  var _super47 = _createSuper(FwcFeaturette);

  function FwcFeaturette() {
    var _this64;

    _classCallCheck(this, FwcFeaturette);

    _this64 = _super47.call(this, 'fwc-featurette', FwcFeaturetteComponent);
    var FwcFeaturetteItem = new FwcBase('fwc-featurette-item', FwcFeaturetteItemComponent);
    FwcFeaturetteItem.build();
    return _this64;
  }

  return FwcFeaturette;
}(FwcBase);

var FwcFooterStickyComponent = /*#__PURE__*/function (_LitElement25) {
  _inherits(FwcFooterStickyComponent, _LitElement25);

  var _super48 = _createSuper(FwcFooterStickyComponent);

  function FwcFooterStickyComponent() {
    var _this65;

    _classCallCheck(this, FwcFooterStickyComponent);

    _this65 = _super48.call(this);
    _this65.left = false;
    return _this65;
  }

  _createClass(FwcFooterStickyComponent, [{
    key: "_onSlotChange",
    value: function _onSlotChange() {
      this._checkLeftSlot();
    }
  }, {
    key: "_checkLeftSlot",
    value: function _checkLeftSlot() {
      var slot = this.shadowRoot.querySelector('#leftSlot');
      var nodes = slot.assignedNodes();

      if (nodes.length) {
        this.left = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["\n      <footer class=", ">\n        <slot @slotchange=", " id=\"leftSlot\" name=\"fwc-footer-sticky-left\"></slot>\n        <slot id=\"rightSlot\" name=\"fwc-footer-sticky-right\"></slot>\n      </footer>\n    "])), "".concat(this.left ? 'space' : ''), this._onSlotChange);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["\n        :host {\n          width: auto;\n          position: fixed;\n          background-color: var(--color-white);\n          border: 1px solid var(--color-gray-four);\n          left: 0;\n          right: 0;\n          bottom: 0;\n          z-index: 1;\n        }\n        footer {\n          display: flex;\n          align-items: center;\n          justify-content: flex-end;\n          min-height: calc(3 * var(--fwcu));\n          padding: calc(3 * var(--fwcu)) calc(1.5 * var(--fwcu));\n          max-width: calc(144 * var(--fwcu));\n          margin: 0 auto;\n        }\n        footer.space {\n          justify-content: space-between;\n        }\n\n        @media screen and (max-width: 600px) {\n          slot[name='fwc-footer-sticky-left'] {\n            display: none;\n          }\n          footer {\n            padding-right: calc(4 * var(--fwcu));\n            padding-left: calc(4 * var(--fwcu));\n          }\n          footer,\n          footer.space {\n            justify-content: center;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        left: {
          type: Boolean
        }
      };
    }
  }]);

  return FwcFooterStickyComponent;
}(LitElement);

var FwcFooterSticky = /*#__PURE__*/function (_FwcBase20) {
  _inherits(FwcFooterSticky, _FwcBase20);

  var _super49 = _createSuper(FwcFooterSticky);

  function FwcFooterSticky() {
    _classCallCheck(this, FwcFooterSticky);

    return _super49.call(this, 'fwc-footer-sticky', FwcFooterStickyComponent);
  }

  return FwcFooterSticky;
}(FwcBase);

var FwcHeaderCompoundComponent = /*#__PURE__*/function (_LitElement26) {
  _inherits(FwcHeaderCompoundComponent, _LitElement26);

  var _super50 = _createSuper(FwcHeaderCompoundComponent);

  function FwcHeaderCompoundComponent() {
    var _this66;

    _classCallCheck(this, FwcHeaderCompoundComponent);

    _this66 = _super50.call(this);
    /* Accessiblity concern if h4 is empty */

    _this66.textTop = '-';
    _this66.textBtm = '--';
    return _this66;
  }

  _createClass(FwcHeaderCompoundComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral([" <h4>\n      <span class=\"line\"></span>\n      <span class=\"top\">", "</span>\n      <span class=\"btm\">", "</span>\n    </h4>"])), this.textTop, this.textBtm);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["\n        :host {\n          margin-bottom: calc(6 * var(--fwcu));\n        }\n        h4 {\n          font-family: var(--font-serif);\n          color: var(--color-gray-one);\n          font-size: var(--fwcu);\n          margin: 0;\n          padding: 0;\n          display: flex;\n          justify-content: flex-start;\n          flex-direction: column;\n          display: inline-block;\n        }\n\n        span.top {\n          color: var(--color-gray-two);\n          font-size: calc(2 * var(--fwcu));\n          line-height: calc(2.25 * var(--fwcu));\n          font-family: var(--font-sans-serif);\n          font-weight: 400;\n          display: block;\n        }\n        span.btm {\n          color: var(--color-gray-one);\n          font-size: calc(2.5 * var(--fwcu));\n          line-height: calc(3 * var(--fwcu));\n          font-family: var(--font-serif);\n          font-weight: 600;\n        }\n        span.line {\n          content: '';\n          display: block;\n          align-self: stretch;\n          flex-shrink: 0;\n          width: auto;\n          height: 1px;\n          margin-bottom: calc(2.25 * var(--fwcu));\n          background-color: var(--color-dviz-two);\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        textTop: {
          attribute: 'text-top',
          type: String
        },
        textBtm: {
          attribute: 'text-btm',
          type: String
        }
      };
    }
  }]);

  return FwcHeaderCompoundComponent;
}(LitElement);

var FwcHeaderCompound = /*#__PURE__*/function (_FwcBase21) {
  _inherits(FwcHeaderCompound, _FwcBase21);

  var _super51 = _createSuper(FwcHeaderCompound);

  function FwcHeaderCompound() {
    _classCallCheck(this, FwcHeaderCompound);

    return _super51.call(this, 'fwc-header-compound', FwcHeaderCompoundComponent);
  }

  return FwcHeaderCompound;
}(FwcBase);

var FwcHeaderPageComponent = /*#__PURE__*/function (_LitElement27) {
  _inherits(FwcHeaderPageComponent, _LitElement27);

  var _super52 = _createSuper(FwcHeaderPageComponent);

  function FwcHeaderPageComponent() {
    var _this67;

    _classCallCheck(this, FwcHeaderPageComponent);

    _this67 = _super52.call(this);
    _this67.title = null;
    return _this67;
  }

  _createClass(FwcHeaderPageComponent, [{
    key: "_blobs",
    value: function _blobs() {
      var leftBlob = html(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["\n      <svg class=\"left\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"450\" height=\"550\" viewBox=\"0 0 450 550\">\n        <defs>\n          <linearGradient id=\"left-a\" x1=\"29.451%\" x2=\"73.736%\" y1=\"15.098%\" y2=\"84.421%\">\n            <stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".408\" />\n            <stop offset=\"58.024%\" stop-color=\"#FFF\" stop-opacity=\".182\" />\n            <stop offset=\"100%\" stop-opacity=\".09\" />\n          </linearGradient>\n        </defs>\n        <path fill=\"url(#left-a)\" d=\"M206.715387,10.3410556 L235.347677,9.18888856 C343.848361,4.8228068 435.344954,89.2405817 439.711035,197.741266 C439.926588,203.097915 439.922967,208.461138 439.700183,213.817491 L434.117864,348.031848 C429.780097,452.323739 346.15034,535.840657 241.852688,540.037608 L213.220398,541.189775 C104.719713,545.555857 13.2231213,461.138082 8.85703955,352.637398 C8.64148731,347.280749 8.64510794,341.917526 8.86789236,336.561173 L14.4502111,202.346816 C18.7879779,98.0549252 102.417734,14.5380069 206.715387,10.3410556 Z\" opacity=\".8\" transform=\"translate(.346)\" />\n      </svg>\n    "])));
      var rightBlob = html(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["\n      <svg class=\"right\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"450\" height=\"549\" viewBox=\"0 0 450 549\">\n        <path fill=\"#FFF\" fill-opacity=\".2\" d=\"M1243.71539,9.73218384 L1272.34768,8.58001675 C1380.84836,4.21393499 1472.34495,88.6317099 1476.71104,197.132394 C1476.92659,202.489043 1476.92297,207.852266 1476.70018,213.208619 L1471.11786,347.422976 C1466.7801,451.714867 1383.15034,535.231785 1278.85269,539.428737 L1250.2204,540.580904 C1141.71971,544.946985 1050.22312,460.52921 1045.85704,352.028526 C1045.64149,346.671877 1045.64511,341.308654 1045.86789,335.952301 L1051.45021,201.737945 C1055.78798,97.4460534 1139.41773,13.929135 1243.71539,9.73218384 Z\" transform=\"translate(-1036.654)\" />\n      </svg>\n    "])));
      var midBottomBlob = html(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["\n      <svg class=\"mid-bottom\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"454\" height=\"547\" viewBox=\"0 0 454 547\">\n        <defs>\n          <linearGradient id=\"mid-bottom-a\" x1=\"26%\" x2=\"79.518%\" y1=\"36.887%\" y2=\"89.438%\">\n            <stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".21\" />\n            <stop offset=\"100%\" stop-opacity=\".15\" />\n          </linearGradient>\n        </defs>\n        <path fill=\"url(#mid-bottom-a)\" d=\"M1786.71539,15.7321838 L1815.34768,14.5800167 C1923.84836,10.213935 2015.34495,94.6317099 2019.71104,203.132394 C2019.92659,208.489043 2019.92297,213.852266 2019.70018,219.208619 L2014.11786,353.422976 C2009.7801,457.714867 1926.15034,541.231785 1821.85269,545.428737 L1793.2204,546.580904 C1684.71971,550.946985 1593.22312,466.52921 1588.85704,358.028526 C1588.64149,352.671877 1588.64511,347.308654 1588.86789,341.952301 L1594.45021,207.737945 C1598.78798,103.446053 1682.41773,19.929135 1786.71539,15.7321838 Z\" transform=\"translate(-1577.654 -7)\" style=\"mix-blend-mode:color\" />\n      </svg>\n    "])));
      var midTopBlob = html(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["\n      <svg class=\"mid-top\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"454\" height=\"548\" viewBox=\"0 0 454 548\">\n        <defs>\n          <linearGradient id=\"mid-top-a\" x1=\"79.518%\" x2=\"26%\" y1=\"89.438%\" y2=\"36.887%\">\n            <stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".15\" />\n            <stop offset=\"100%\" stop-opacity=\".15\" />\n          </linearGradient>\n        </defs>\n        <path fill=\"url(#mid-top-a)\" d=\"M738.715387,10.7776312 L767.347677,9.62546415 C875.848361,5.25938239 967.344954,89.6771573 971.711035,198.177842 C971.926588,203.53449 971.922967,208.897714 971.700183,214.254067 L966.117864,348.468423 C961.780097,452.760314 878.15034,536.277233 773.852688,540.474184 L745.220398,541.626351 C636.719713,545.992433 545.223121,461.574658 540.85704,353.073973 C540.641487,347.717325 540.645108,342.354101 540.867892,336.997749 L546.450211,202.783392 C550.787978,98.4915008 634.417734,14.9745825 738.715387,10.7776312 Z\" transform=\"translate(-527.654 -3)\" style=\"mix-blend-mode:color\" />\n      </svg>\n    "])));
      return {
        right: rightBlob,
        left: leftBlob,
        midTop: midTopBlob,
        midBottom: midBottomBlob
      };
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["\n      <section>\n        <div class=\"blobs\">", " ", " ", " ", "</div>\n        <div class=", ">\n          ", "\n          <slot></slot>\n        </div>\n      </section>\n    "])), this._blobs().right, this._blobs().midBottom, this._blobs().midTop, this._blobs().left, this.title ? 'shadowed' : 'slotted', this.title ? html(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["<h1>", "</h1>"])), this.title) : html(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral([""]))));
    }
  }], [{
    key: "styles",
    get:
    /* For slotted content, use ./fwc-assets/styles/components/fwc-header-page.css */
    function get() {
      return [sharedStyles, css(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["\n        @keyframes rotation {\n          0% {\n            transform: rotate(0deg) scale(1);\n          }\n          50% {\n            transform: scale(2);\n          }\n          100% {\n            transform: rotate(359deg) scale(1);\n          }\n        }\n        :host {\n          max-width: 1920px;\n          margin: 0 auto;\n          position: relative;\n        }\n        section {\n          background-color: var(--color-primary);\n          padding: calc(6 * var(--fwcu)) 0;\n        }\n        .blobs {\n          overflow: hidden;\n          position: absolute;\n          inset: 0;\n          z-index: 0;\n          pointer-events: none;\n        }\n        div.shadowed:not(.slotted) {\n          display: flex;\n          max-width: calc(144 * var(--fwcu));\n          margin: 0 auto;\n          align-items: flex-start;\n          justify-content: flex-start;\n          flex-wrap: nowrap;\n        }\n        .shadowed h1,\n        .slotted h1 {\n          margin: 0;\n        }\n        svg {\n          position: absolute;\n          opacity: 0.2;\n          animation-name: rotation;\n          animation-fill-mode: none;\n          animation-duration: 20s;\n          animation-iteration-count: infinite;\n          transform-origin: center;\n          animation-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);\n        }\n        svg.left {\n          left: -115px;\n          top: -70px;\n          transform: rotate(293deg);\n        }\n        svg.mid-top {\n          left: 37%;\n          top: -375px;\n          transform: rotate(-50deg);\n        }\n        svg.mid-bottom {\n          left: 47%;\n          transform: rotate(302deg);\n          top: 36%;\n        }\n        svg.right {\n          right: -348px;\n          transform: rotateX(180deg);\n        }\n        h1 {\n          font-size: calc(4.75 * var(--fwcu));\n          line-height: calc(5.75 * var(--fwcu));\n          font-weight: 600;\n          font-family: var(--font-serif, sans-serif);\n          color: white;\n          padding: 0 calc(1.5 * var(--fwcu));\n          margin: calc(4 * var(--fwcu)) 0;\n        }\n        @media screen and (max-width: 600px) and (hover: none) and (pointer: coarse) {\n          h1 {\n            font-size: calc(3.75 * var(--fwcu));\n            line-height: calc(4.75 * var(--fwcu));\n          }\n        }\n        @media screen and (max-width: 600px) {\n          div.shadowed:not(.slotted) {\n            /* Match fwc-row */\n            width: calc(100% - (5 * var(--fwcu)));\n          }\n          section {\n            padding: calc(2 * var(--fwcu)) 0;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        title: {
          type: String
        }
      };
    }
  }]);

  return FwcHeaderPageComponent;
}(LitElement);

var FwcHeaderPage = /*#__PURE__*/function (_FwcBase22) {
  _inherits(FwcHeaderPage, _FwcBase22);

  var _super53 = _createSuper(FwcHeaderPage);

  function FwcHeaderPage() {
    _classCallCheck(this, FwcHeaderPage);

    return _super53.call(this, 'fwc-header-page', FwcHeaderPageComponent);
  }

  return FwcHeaderPage;
}(FwcBase);

var FwcHeaderSectionComponent = /*#__PURE__*/function (_LitElement28) {
  _inherits(FwcHeaderSectionComponent, _LitElement28);

  var _super54 = _createSuper(FwcHeaderSectionComponent);

  function FwcHeaderSectionComponent() {
    _classCallCheck(this, FwcHeaderSectionComponent);

    return _super54.apply(this, arguments);
  }

  _createClass(FwcHeaderSectionComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["<h2><slot></slot></h2>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["\n        :host {\n          margin-bottom: calc(3 * var(--fwcu));\n        }\n        h2 {\n          font-size: calc(4 * var(--fwcu));\n          font-family: var(--font-serif);\n          color: var(--color-gray-two);\n          font-weight: 300;\n          line-height: 1.5;\n          margin: 0;\n          padding: 0;\n        }\n      "])))];
    }
  }]);

  return FwcHeaderSectionComponent;
}(LitElement);

var FwcHeaderSection = /*#__PURE__*/function (_FwcBase23) {
  _inherits(FwcHeaderSection, _FwcBase23);

  var _super55 = _createSuper(FwcHeaderSection);

  function FwcHeaderSection() {
    _classCallCheck(this, FwcHeaderSection);

    return _super55.call(this, 'fwc-header-section', FwcHeaderSectionComponent);
  }

  return FwcHeaderSection;
}(FwcBase);

var FwcHeaderSubComponent = /*#__PURE__*/function (_LitElement29) {
  _inherits(FwcHeaderSubComponent, _LitElement29);

  var _super56 = _createSuper(FwcHeaderSubComponent);

  function FwcHeaderSubComponent() {
    _classCallCheck(this, FwcHeaderSubComponent);

    return _super56.apply(this, arguments);
  }

  _createClass(FwcHeaderSubComponent, [{
    key: "render",
    value: function render() {
      return html(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral([" ", " "])), this.small ? html(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral([" <h4><slot></slot></h4> "]))) : html(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral([" <h3><slot></slot></h3> "]))));
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["\n        :host {\n          margin-bottom: calc(3 * var(--fwcu));\n        }\n        h3,\n        h4 {\n          font-family: var(--font-serif);\n          color: var(--color-gray-one);\n          font-weight: 300;\n          line-height: 1.5;\n          margin: 0;\n          padding: 0;\n        }\n        h3 {\n          font-size: calc(2.75 * var(--fwcu));\n        }\n        h4 {\n          font-size: calc(2.5 * var(--fwcu));\n          color: var(--color-gray-two);\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        small: {
          type: Boolean
        }
      };
    }
  }]);

  return FwcHeaderSubComponent;
}(LitElement);

var FwcHeaderSub = /*#__PURE__*/function (_FwcBase24) {
  _inherits(FwcHeaderSub, _FwcBase24);

  var _super57 = _createSuper(FwcHeaderSub);

  function FwcHeaderSub() {
    _classCallCheck(this, FwcHeaderSub);

    return _super57.call(this, 'fwc-header-sub', FwcHeaderSubComponent);
  }

  return FwcHeaderSub;
}(FwcBase);

var FwcHeroComponent = /*#__PURE__*/function (_LitElement30) {
  _inherits(FwcHeroComponent, _LitElement30);

  var _super58 = _createSuper(FwcHeroComponent);

  function FwcHeroComponent() {
    var _this68;

    _classCallCheck(this, FwcHeroComponent);

    _this68 = _super58.call(this);
    _this68.image = null;
    _this68.mobileImage = null;
    _this68._handleResize = null;
    _this68.imagePositionX = 'center';
    _this68.imagePositionY = 'center';
    return _this68;
  }

  _createClass(FwcHeroComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this69 = this;

      this._handleResize = debounce(function () {
        _this69._resize.call(_this69);
      }, 250);
      window.addEventListener('resize', this._handleResize);

      if (this.mobileImage === null) {
        this.mobileImage = this.image;
      }

      this._setImageClassAfterLoad();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcHeroComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'image' || name === 'mobile-image') {
        if (oldVal !== null) {
          this._setImageClassAfterLoad();
        }
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this._handleResize);

      _get(_getPrototypeOf(FwcHeroComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "_setImageClassAfterLoad",
    value: function _setImageClassAfterLoad() {
      var img = document.createElement('img');
      var heroImgElem = this.shadowRoot.querySelector('.hero-image');
      heroImgElem.classList.remove('hero-scale-in');

      img.onload = function () {
        heroImgElem.classList.add('hero-scale-in');
      };

      img.src = window.innerWidth > breakpoints.sm ? this.image : this.mobileImage;
    }
  }, {
    key: "_resize",
    value: function _resize() {
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/grid.css\" />\n      <div class=\"hero-container\">\n        <div class=\"hero-image\" style=\"background-image: url('", "'); animation-delay: 0ms; background-position: ", " ", "\">\n          <div class=\"hero-fade\"></div>\n        </div>\n        <div class=\"fwc-container\">\n          <div class=\"fwc-row\">\n            <div class=\"fwc-col-8 sm-12\">\n              <div class=\"hero-content\">\n                <h1>", "</h1>\n                <slot name=\"fwc-hero-content\"></slot>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    "])), window.innerWidth > breakpoints.sm ? this.image : this.mobileImage, this.imagePositionX, this.imagePositionY, this.title);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["\n        @keyframes scaleIn {\n          0% {\n            transform: scale(1.75);\n            opacity: 0;\n          }\n          10% {\n            opacity: 1;\n          }\n          100% {\n            transform: scale(1);\n            opacity: 1;\n          }\n        }\n        :host {\n          width: 100%;\n          position: relative;\n          max-width: 1920px;\n          margin: 0 auto;\n          overflow: hidden;\n        }\n        .hero-container {\n          max-width: calc(144 * var(--fwcu)); /** 1152px */\n          margin: 0 auto;\n          display: flex;\n          align-items: center;\n          padding: calc(7.25 * var(--fwcu)) 0;\n        }\n        .hero-image {\n          background-color: var(--color-white);\n          background-size: cover;\n          background-repeat: no-repeat;\n          width: 100%;\n          min-height: 0;\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          left: 0;\n          min-height: calc(45 * var(--fwcu));\n          opacity: 0;\n        }\n        .hero-fade {\n          position: absolute;\n          bottom: 0px;\n          display: none;\n          width: 100%;\n          height: 50%;\n          background-image: linear-gradient(to bottom, rgba(var(--color-rgb-white), 0), rgba(var(--color-rgb-white), 1) 100%);\n        }\n        .hero-scale-in {\n          animation-fill-mode: forwards;\n          animation-name: scaleIn;\n          animation-duration: 7s;\n          animation-timing-function: ease-out;\n          width: 100%;\n          height: auto;\n        }\n        .hero-content {\n          padding: 0;\n          margin-top: 0;\n          position: relative;\n          z-index: 1;\n        }\n        h1 {\n          margin-top: 0;\n          margin-bottom: var(--fwcu);\n          font-size: calc(4.75 * var(--fwcu));\n          line-height: calc(5.75 * var(--fwcu));\n          font-family: var(--font-serif);\n          color: var(--color-gray-one);\n        }\n        @media screen and (max-width: 900px) {\n          h1 {\n            font-size: calc(3.5 * var(--fwcu));\n          }\n          .hero-container {\n            padding: calc(3.25 * var(--fwcu)) 0;\n          }\n        }\n        @media screen and (max-width: 600px) {\n          .hero-fade {\n            display: block;\n          }\n          .hero-image {\n            position: relative;\n          }\n          .hero-container {\n            display: block;\n            padding: 0;\n          }\n          .hero-content {\n            position: relative;\n            z-index: 1;\n            margin-top: -8%;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        title: {
          type: String
        },
        image: {
          type: String
        },
        mobileImage: {
          attribute: 'mobile-image',
          type: String
        },
        imagePositionX: {
          attribute: 'image-position-x',
          type: String
        },
        imagePositionY: {
          attribute: 'image-position-y',
          type: String
        }
      };
    }
  }]);

  return FwcHeroComponent;
}(LitElement);

var FwcHero = /*#__PURE__*/function (_FwcBase25) {
  _inherits(FwcHero, _FwcBase25);

  var _super59 = _createSuper(FwcHero);

  function FwcHero() {
    _classCallCheck(this, FwcHero);

    return _super59.call(this, 'fwc-hero', FwcHeroComponent);
  }

  return FwcHero;
}(FwcBase);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */


var previousStylePropertyCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS properties. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

var styleMap = directive(function (styleInfo) {
  return function (part) {
    if (!(part instanceof AttributePart) || part instanceof PropertyPart || part.committer.name !== 'style' || part.committer.parts.length > 1) {
      throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var style = committer.element.style;
    var previousStyleProperties = previousStylePropertyCache.get(part);

    if (previousStyleProperties === undefined) {
      // Write static styles once
      style.cssText = committer.strings.join(' ');
      previousStylePropertyCache.set(part, previousStyleProperties = new Set());
    } // Remove old properties that no longer exist in styleInfo
    // We use forEach() instead of for-of so that re don't require down-level
    // iteration.


    previousStyleProperties.forEach(function (name) {
      if (!(name in styleInfo)) {
        previousStyleProperties["delete"](name);

        if (name.indexOf('-') === -1) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style[name] = null;
        } else {
          style.removeProperty(name);
        }
      }
    }); // Add or update properties

    for (var name in styleInfo) {
      previousStyleProperties.add(name);

      if (name.indexOf('-') === -1) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style[name] = styleInfo[name];
      } else {
        style.setProperty(name, styleInfo[name]);
      }
    }
  };
});

var FwcMilestonesComponent = /*#__PURE__*/function (_LitElement31) {
  _inherits(FwcMilestonesComponent, _LitElement31);

  var _super60 = _createSuper(FwcMilestonesComponent);

  function FwcMilestonesComponent() {
    var _this70;

    _classCallCheck(this, FwcMilestonesComponent);

    _this70 = _super60.call(this);
    _this70.milestones = [];
    _this70.vertical = false;
    _this70.title = 'milestones';
    _this70.labelIncomplete = 'incomplete';
    _this70.labelComplete = 'complete';
    return _this70;
  }

  _createClass(FwcMilestonesComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcMilestonesComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'milestones' && oldVal !== newVal) {
        this._renderMilestones();
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      this._animateBars();
    }
  }, {
    key: "_renderMilestones",
    value: function _renderMilestones() {
      var _this71 = this;

      var count = this.milestones.length;
      var percent = 100 / count;
      var Info = this.milestones.map(function (info, i) {
        var iStyle = {
          // have to hard code pixels here for ie11: 9.5*fwcu = 76px
          left: "calc(".concat((i + 1) * percent, "% - 76px)")
        };
        return html(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["\n        <h5 class=\"info ", "\" style=", ">\n          <span class=\"amount\">", "</span>\n          <span class=\"label\">", "</span>\n          <span class=\"sr-only\">", "</span>\n        </h5>\n      "])), info.complete ? '' : 'incomplete', styleMap(iStyle), '$' + info.amount, info.label, info.complete ? _this71.labelComplete : _this71.labelIncomplete);
      });
      var Bars = this.milestones.map(function (bar) {
        return html(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral([" <div class=\"bar ", "\"></div> "])), bar.complete ? '' : 'incomplete');
      });
      var Legend = this.milestones.map(function (l) {
        return html(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["<li>", "</li>"])), l.label);
      });
      return {
        bars: Bars,
        info: Info,
        legend: Legend
      };
    }
  }, {
    key: "_animateBars",
    value: function _animateBars() {
      var childNodes = this.shadowRoot.querySelector('.bar-container').childNodes;
      var bars = Array.prototype.filter.call(childNodes, function (node) {
        return node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'DIV';
      });
      var percent = 100 / bars.length;

      var _loop = function _loop(b) {
        bars[b].style.width = '0%';
        bars[b].style.left = '0%'; // need a 'state' change to apply CSS transitions

        setTimeout(function () {
          bars[b].style.width = percent + '%';
          bars[b].style.left = b * percent + '%';
        }, 0);
      };

      for (var b in bars) {
        _loop(b);
      }

      if (bars.length > 4) {
        /* eslint-disable no-console */
        console.error('Maximum of 4 Milestones has been exeeced. Component will not render properly.');
        /* eslint-enable no-console */
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["\n      <ul>\n        ", "\n      </ul>\n      <section class=", ">\n        <h4 class=\"sr-only\">", "</h4>\n        <div class=\"info-container\">", "</div>\n        <div class=\"bar-container\">", "</div>\n      </section>\n    "])), this._renderMilestones().legend, this.vertical ? 'vertical' : '', this.title, this._renderMilestones().info, this._renderMilestones().bars);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["\n        @keyframes dot {\n          0% {\n            width: 0;\n            height: 0;\n            opacity: 0;\n          }\n          50% {\n            opacity: 1;\n          }\n          100% {\n            width: calc(2.5 * var(--fwcu));\n            height: calc(2.5 * var(--fwcu));\n          }\n        }\n\n        @keyframes info {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n\n        :host {\n          position: relative;\n          color: var(--color-gray-one);\n        }\n\n        ul {\n          list-style: none;\n          padding: 0;\n          margin: 0;\n          display: flex;\n          justify-content: flex-end;\n          margin-bottom: calc(12 * var(--fwcu));\n          flex-wrap: wrap;\n        }\n        ul li {\n          display: flex;\n          align-items: center;\n          padding-right: calc(2 * var(--fwcu));\n        }\n\n        ul li::before {\n          content: '';\n          flex: 1 0 auto;\n          margin-right: var(--fwcu);\n          width: var(--default-font-size);\n          height: var(--default-font-size);\n          background-color: green;\n          border-radius: 50%;\n        }\n\n        .bar-container,\n        .info-container {\n          width: 100%;\n          position: relative;\n          background-color: var(--color-gray-five);\n          height: calc(2.5 * var(--fwcu));\n          border: 1px solid rgba(var(--color-rgb-white), 0);\n          border-radius: var(--border-radius);\n        }\n\n        .info-container {\n          bottom: 0;\n          background: none;\n        }\n\n        .info {\n          position: absolute;\n          display: flex;\n          justify-content: center;\n          flex-direction: column;\n          top: calc(-5 * var(--fwcu));\n          text-align: center;\n          margin: 0;\n          font-size: var(--default-font-size);\n          width: calc(19 * var(--fwcu));\n          color: var(--color-gray-one);\n          animation-name: info;\n          animation-fill-mode: both;\n          animation-duration: 500ms;\n          animation-delay: 750ms;\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n        }\n        .info span.label {\n          padding: 0;\n          margin: 0;\n          line-height: 1;\n          font-weight: 400;\n        }\n\n        .info:nth-of-type(odd) {\n          top: calc(6.5 * var(--fwcu));\n        }\n        .info::after {\n          content: '';\n          left: calc(50% - 1px);\n          position: absolute;\n          width: 2px;\n          height: calc(3 * var(--fwcu));\n          background-color: var(--color-gray-five);\n        }\n        .info:nth-of-type(even)::after {\n          top: 100%;\n        }\n        .info:nth-of-type(odd)::after {\n          bottom: 100%;\n        }\n\n        .info:nth-child(1):not(.incomplete)::after,\n        ul li:nth-child(1)::before {\n          background-color: var(--color-dviz-two);\n        }\n        .info:nth-child(2):not(.incomplete)::after,\n        ul li:nth-child(2)::before {\n          background-color: var(--color-dviz-seven);\n        }\n        .info:nth-child(3):not(.incomplete)::after,\n        ul li:nth-child(3)::before {\n          background-color: var(--color-dviz-four);\n        }\n        .info:nth-child(4):not(.incomplete)::after,\n        ul li:nth-child(4)::before {\n          background-color: var(--color-dviz-eight);\n        }\n\n        .bar {\n          position: absolute;\n          background-color: var(--color-gray-five);\n          border: 1px solid rgba(var(--color-rgb-white), 0);\n          border-radius: var(--border-radius);\n          top: 0;\n          bottom: 0;\n          left: 0;\n          width: 0;\n          transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);\n        }\n        .bar::after {\n          content: '';\n          display: block;\n          position: absolute;\n          right: calc(-1.25 * var(--fwcu)); /* half of width */\n          top: -2px;\n          border-style: solid;\n          border-color: black;\n          background-color: var(--color-white);\n          border-color: var(--color-gray-five);\n          border-radius: 50%;\n          z-index: 1;\n          width: calc(2.5 * var(--fwcu));\n          height: calc(2.5 * var(--fwcu));\n          animation-name: dot;\n          animation-fill-mode: both;\n          animation-duration: 500ms;\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transform-origin: 50% 50%;\n        }\n\n        .bar:nth-of-type(1):not(.incomplete) {\n          z-index: 4;\n          background-color: var(--color-dviz-two);\n        }\n        .bar:nth-of-type(1):not(.incomplete)::after {\n          animation-delay: 100ms;\n          border-color: var(--color-dviz-two);\n        }\n\n        .bar:nth-of-type(2):not(.incomplete) {\n          transition-delay: 100ms;\n          background-color: var(--color-dviz-seven);\n          z-index: 3;\n        }\n        .bar:nth-of-type(2):not(.incomplete)::after {\n          border-color: var(--color-dviz-seven);\n          animation-delay: 300ms;\n        }\n\n        .bar:nth-of-type(3):not(.incomplete) {\n          transition-delay: 200ms;\n          background-color: var(--color-dviz-four);\n          z-index: 2;\n        }\n        .bar:nth-of-type(3):not(.incomplete)::after {\n          border-color: var(--color-dviz-four);\n          animation-delay: 400ms;\n        }\n\n        .bar:nth-of-type(4):not(.incomplete) {\n          transition-delay: 300ms;\n          background-color: var(--color-dviz-eight);\n          z-index: 1;\n        }\n        .bar:nth-of-type(4):not(.incomplete)::after {\n          border-color: var(--color-dviz-eight);\n          animation-delay: 500ms;\n        }\n\n        @media screen and (max-width: 600px) {\n          ul {\n            justify-content: center;\n          }\n          section.vertical {\n            transform: rotate(-90deg);\n            transform-origin: left;\n            margin-top: calc(66.5 * var(--fwcu)); /* 500px + 32px of margin hard to match 'height' and legend */\n            margin-left: 50%;\n          }\n          section.vertical .bar-container,\n          section.vertical .info-container {\n            width: calc(62.5 * var(--fwcu));\n            /* component is rotated 90 degrees with transform, width here is acting as height */\n          }\n\n          section.vertical .info {\n            transform: rotate(90deg);\n          }\n          section.vertical .info:nth-of-type(even) {\n            top: calc(-12 * var(--fwcu));\n          }\n          section.vertical .info:nth-of-type(odd) {\n            top: calc(12 * var(--fwcu));\n          }\n\n          section.vertical .info::after {\n            top: calc(50% - 1px);\n            left: 100%;\n            height: 2px;\n            width: calc(3 * var(--fwcu));\n          }\n\n          section.vertical .info:nth-of-type(even)::after {\n            left: 100%;\n          }\n          section.vertical .info:nth-of-type(odd)::after {\n            left: 0;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        milestones: {
          type: Array
        },
        vertical: {
          type: Boolean
        },
        title: {
          type: String
        },
        labelIncomplete: {
          attribute: 'label-incomplete',
          type: String
        },
        labelComplete: {
          attribute: 'label-complete',
          type: String
        }
      };
    }
  }]);

  return FwcMilestonesComponent;
}(LitElement);

var FwcMilestones = /*#__PURE__*/function (_FwcBase26) {
  _inherits(FwcMilestones, _FwcBase26);

  var _super61 = _createSuper(FwcMilestones);

  function FwcMilestones() {
    _classCallCheck(this, FwcMilestones);

    return _super61.call(this, 'fwc-milestones', FwcMilestonesComponent);
  }

  return FwcMilestones;
}(FwcBase);

var FwcModalBaseComponent = /*#__PURE__*/function (_LitElement32) {
  _inherits(FwcModalBaseComponent, _LitElement32);

  var _super62 = _createSuper(FwcModalBaseComponent);

  function FwcModalBaseComponent() {
    var _this72;

    _classCallCheck(this, FwcModalBaseComponent);

    _this72 = _super62.call(this);
    _this72._open = false;
    _this72._dispatchOpenName = 'fwc-modal-open';
    _this72._dispatchCloseName = 'fwc-modal-close';
    _this72.labelAria = '';
    return _this72;
  }

  _createClass(FwcModalBaseComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this73 = this;

      // set event listener to dispatch event back to parent
      var modal = this.shadowRoot.querySelector('.fwc-modal-wrapper');
      modal.addEventListener('transitionend', function (e) {
        if (_this73._open && e.propertyName === 'opacity') {
          _this73._dispatch(_this73._dispatchOpenName);
        }

        if (!_this73._open && e.propertyName === 'opacity') {
          _this73._dispatch(_this73._dispatchCloseName);
        }
      }); // handle background click close

      this.addEventListener('keydown', function (e) {
        return _this73._escapeClose(e);
      });
    }
  }, {
    key: "_escapeClose",
    value: function _escapeClose(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this._closeModal();
      }
    }
  }, {
    key: "_dispatch",
    value: function _dispatch(name) {
      var event = new CustomEvent(name, {
        detail: this,
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_onBackgroundPress",
    value: function _onBackgroundPress() {
      this._closeModal();
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this._openModal();
    }
  }, {
    key: "_openModal",
    value: function _openModal() {
      var _this74 = this;

      setTimeout(function () {
        _this74._open = true;
        document.body.classList.add('no-scroll');
      }, 0);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this._closeModal();
    }
  }, {
    key: "_closeModal",
    value: function _closeModal() {
      this._open = false;
      document.body.classList.remove('no-scroll');
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["\n      <div class=\"fwc-modal-wrapper ", "\" aria-modal=\"", "\" role=\"dialog\" aria-label=\"", "\">\n        <div class=\"fwc-modal-bg\" @click=\"", "\"></div>\n        <div class=\"fwc-modal-container\">\n          <slot></slot>\n        </div>\n      </div>\n    "])), this._open ? 'open' : '', this._open, this.labelAria, this._onBackgroundPress);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["\n        .fwc-modal-wrapper {\n          position: fixed;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          align-items: center;\n          justify-content: center;\n          z-index: 9999;\n          pointer-events: none;\n          display: flex;\n          visibility: hidden;\n          transition: all 300ms ease;\n        }\n        .fwc-modal-wrapper.open {\n          pointer-events: all;\n          visibility: visible;\n        }\n        .fwc-modal-bg {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background: rgba(var(--color-rgb-util-four), 0.2);\n          transition: opacity 300ms ease;\n          opacity: 0;\n          visibility: hidden;\n        }\n        .fwc-modal-wrapper.open .fwc-modal-bg {\n          opacity: 1;\n          visibility: visible;\n        }\n        .fwc-modal-container {\n          background: var(--color-white);\n          position: relative;\n          opacity: 0;\n          border-radius: var(--border-radius);\n          box-shadow: var(--box-shadow);\n          animation: fwcClose 0.3s ease-in-out forwards;\n          overflow: hidden;\n        }\n        .fwc-modal-wrapper.open .fwc-modal-container {\n          animation: fwcOpen 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;\n          opacity: 1;\n        }\n        @-webkit-keyframes fwcOpen {\n          0% {\n            transform: scale(0);\n            opacity: 0;\n          }\n          100% {\n            transform: scale(1);\n            opacity: 1;\n          }\n        }\n        @-webkit-keyframes fwcClose {\n          0% {\n            transform: scale(1);\n            opacity: 1;\n          }\n          100% {\n            transform: scale(0);\n            opacity: 0;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        _open: {
          type: Boolean
        },
        labelAria: {
          attribute: 'label-aria',
          type: String
        }
      };
    }
  }]);

  return FwcModalBaseComponent;
}(LitElement);

var FwcModalBase = /*#__PURE__*/function (_FwcBase27) {
  _inherits(FwcModalBase, _FwcBase27);

  var _super63 = _createSuper(FwcModalBase);

  function FwcModalBase() {
    _classCallCheck(this, FwcModalBase);

    return _super63.call(this, 'fwc-modal-base', FwcModalBaseComponent);
  }

  return FwcModalBase;
}(FwcBase);

var FwcModalComponent = /*#__PURE__*/function (_LitElement33) {
  _inherits(FwcModalComponent, _LitElement33);

  var _super64 = _createSuper(FwcModalComponent);

  function FwcModalComponent() {
    var _this75;

    _classCallCheck(this, FwcModalComponent);

    _this75 = _super64.call(this);
    _this75._fwcModalBase = new FwcModalBase();

    _this75._fwcModalBase.build();

    _this75._modalBaseElement = null;
    _this75.open = false;
    _this75.textHeader = '';
    _this75.textBody = '';
    _this75.refocusElem = null;
    _this75.openBySlot = false;
    _this75.labelAriaCloseBtn = 'Close Modal';
    _this75._bodySlotChildren = 0;
    _this75._actionsSlotChildren = 0;
    return _this75;
  }

  _createClass(FwcModalComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this76 = this;

      this._modalBaseElement = this.shadowRoot.querySelector('fwc-modal-base'); // grab the open/close event from fwc-modal-base and remove the slot items

      this.addEventListener('fwc-modal-open', function () {
        setTimeout(function () {
          focusTrap(_this76);
        }, 0);
      });
      this.addEventListener('fwc-modal-close', function () {
        if (_this76.openBySlot) {
          setTimeout(function () {
            var slot = _this76.shadowRoot.querySelector('slot');

            var nodes = slot.assignedNodes();

            if (nodes.length) {
              nodes.forEach(function (n) {
                n.parentNode.removeChild(n);
              });
            }
          }, 0);
        } else {
          _this76.removeAttribute('open');
        }

        setTimeout(function () {
          _this76._returnFocus();
        }, 0);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      var _this77 = this;

      if (name === 'open') {
        setTimeout(function () {
          if (_this77.open) {
            _this77._open();
          } else {
            _this77._close();
          }
        }, 0);
      }

      _get(_getPrototypeOf(FwcModalComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);
    }
  }, {
    key: "_onSlotChange",
    value: function _onSlotChange() {
      var bodySlot = this.shadowRoot.querySelector('slot[name="body"]');
      var bodySlotNodes = bodySlot.assignedNodes();
      var actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
      var actionsSlotNodes = actionsSlot.assignedNodes();
      this._bodySlotChildren = bodySlotNodes.length;
      this._actionsSlotChildren = actionsSlotNodes.length; // do not do anything on slotchange when opening by attribute

      if (!this.openBySlot) return;

      if (bodySlotNodes.length) {
        this._open();
      } else {
        this._close();
      }
    }
  }, {
    key: "_returnFocus",
    value: function _returnFocus() {
      if (this._refocusElem) {
        // Return focus to calling element
        this._refocusElem.focus();
      }
    } // a public func allowing projects to set the refocus element

  }, {
    key: "setReFocus",
    value: function setReFocus(elem) {
      this._refocusElem = elem;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this._modalBaseElement.closeModal();
    }
  }, {
    key: "_close",
    value: function _close() {
      this.closeModal();
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this._modalBaseElement.openModal();
    }
  }, {
    key: "_open",
    value: function _open() {
      this.openModal();
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/typography.css\" />\n      <fwc-modal-base label-aria=\"", "\">\n        <div class=\"fwc-modal-wrapper\">\n          <div class=\"fwc-modal-header\">\n            <h3 id=\"modalHeader\">", "</h3>\n            <button type=\"button\" class=\"fwc-modal-close\" aria-label=\"", "\" @click=\"", "\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\">\n                <polygon points=\"3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523\" />\n              </svg>\n            </button>\n          </div>\n\n          <div class=\"fwc-modal-body\">\n            <div class=\"", "\">", "</div>\n            <slot name=\"body\" @slotchange=\"", "\"></slot>\n          </div>\n\n          <div class=\"fwc-modal-actions ", "\">\n            <slot name=\"actions\" @slotchange=\"", "\"></slot>\n          </div>\n        </div>\n      </fwc-modal-base>\n    "])), this.textHeader, this.textHeader, this.labelAriaCloseBtn, this._close, this._bodySlotChildren > 0 ? 'fwc-hide' : '', this.textBody, this._onSlotChange, this._actionsSlotChildren > 0 ? '' : 'fwc-hide', this._onSlotChange);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["\n        .fwc-modal-wrapper {\n          width: 92vw;\n          max-width: calc(100 * var(--fwcu));\n        }\n        .fwc-modal-header {\n          background: linear-gradient(180deg, var(--color-white) 0%, var(--color-gray-five) 100%);\n          padding: calc(4 * var(--fwcu));\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding: calc(4 * var(--fwcu));\n          border-radius: var(--border-radius) var(--border-radius) 0 0;\n        }\n        h3 {\n          color: var(--color-gray-one);\n          margin: 0;\n          margin-right: calc(3 * var(--fwcu));\n        }\n        .fwc-modal-close {\n          background: transparent;\n          border: none;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: 0;\n          width: calc(3 * var(--fwcu));\n          height: calc(3 * var(--fwcu));\n        }\n        .fwc-modal-close svg {\n          fill: var(--color-gray-two);\n        }\n        .fwc-modal-body {\n          padding: calc(3 * var(--fwcu)) calc(4 * var(--fwcu)) 0 calc(4 * var(--fwcu));\n        }\n        .fwc-modal-actions {\n          display: flex;\n          justify-content: flex-end;\n          padding: calc(4 * var(--fwcu));\n        }\n        .fwc-hide {\n          display: none;\n        }\n        @media screen and (max-width: 600px) {\n          ::slotted([slot='actions']) {\n            display: flex;\n            justify-content: space-between;\n            width: 100%;\n          }\n          .fwc-modal-header {\n            align-items: flex-start;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Boolean
        },
        textHeader: {
          attribute: 'text-header',
          type: String
        },
        textBody: {
          attribute: 'text-body',
          type: String
        },
        openBySlot: {
          attribute: 'open-by-slot',
          type: Boolean
        },
        labelAriaCloseBtn: {
          attribute: 'label-aria-close-btn',
          type: String
        },
        // below are props added for watch/update, they are not an option to pass as attributes
        _bodySlotChildren: {
          type: Number
        },
        _actionsSlotChildren: {
          type: Number
        }
      };
    }
  }]);

  return FwcModalComponent;
}(LitElement);

var FwcModal = /*#__PURE__*/function (_FwcBase28) {
  _inherits(FwcModal, _FwcBase28);

  var _super65 = _createSuper(FwcModal);

  function FwcModal() {
    _classCallCheck(this, FwcModal);

    return _super65.call(this, 'fwc-modal', FwcModalComponent);
  }

  return FwcModal;
}(FwcBase);

var FwcModalCelebratoryComponent = /*#__PURE__*/function (_LitElement34) {
  _inherits(FwcModalCelebratoryComponent, _LitElement34);

  var _super66 = _createSuper(FwcModalCelebratoryComponent);

  function FwcModalCelebratoryComponent() {
    var _this78;

    _classCallCheck(this, FwcModalCelebratoryComponent);

    _this78 = _super66.call(this);
    _this78._fwcModalBase = new FwcModalBase();

    _this78._fwcModalBase.build();

    _this78._modalBaseElement = null;
    _this78.open = false;
    _this78.textHeader = '';
    _this78.refocusElem = null;
    _this78.openBySlot = false;
    _this78._actionsSlotChildren = 0;
    _this78.delay = 0;
    _this78.canvas = null;
    _this78.ctx = null;
    _this78.cx = null;
    _this78.cy = null;
    _this78.confettiAnimation = null;
    _this78.confetti = [];
    _this78.confettiCount = 300;
    _this78.gravity = 0.5;
    _this78.terminalVelocity = 4;
    _this78.drag = 0.1;
    _this78.colors = ['#FFE43B', '#B3FAFF', '#FF7CEC', '#D8D8D8'];
    _this78.shapes = [{
      x: 4,
      y: 4,
      type: 'circle'
    }, {
      x: 8,
      y: 8,
      type: 'circle'
    }, {
      x: 10,
      y: 10,
      type: 'circle'
    }, {
      x: 4,
      y: 4,
      type: 'triangle'
    }, {
      x: 10,
      y: 10,
      type: 'triangle'
    }, {
      x: 16,
      y: 16,
      type: 'triangle'
    }, {
      x: 8,
      y: 2,
      type: 'rod'
    }, {
      x: 10,
      y: 4,
      type: 'rod'
    }, {
      x: 16,
      y: 4,
      type: 'rod'
    }];
    return _this78;
  }

  _createClass(FwcModalCelebratoryComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this79 = this;

      this._modalBaseElement = this.shadowRoot.querySelector('fwc-modal-base');
      this.addEventListener('fwc-modal-open', function () {
        setTimeout(function () {
          focusTrap(_this79); // init the confetti after the modal open, the canvas needs the modals full height and width

          _this79._initConfetti();
        }, 0);
      }); // grab the close event from fwc-modal-base and remove the slot items

      this.addEventListener('fwc-modal-close', function () {
        if (_this79.openBySlot) {
          setTimeout(function () {
            var slot = _this79.shadowRoot.querySelector('slot');

            var nodes = slot.assignedNodes();

            if (nodes.length) {
              nodes.forEach(function (n) {
                n.parentNode.removeChild(n);
              });
            }
          }, 0);
        } else {
          _this79.removeAttribute('open');
        }

        setTimeout(function () {
          _this79._returnFocus();
        }, 0);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      var _this80 = this;

      if (name === 'open') {
        setTimeout(function () {
          if (_this80.open) {
            _this80._open();
          } else {
            _this80._close();
          }
        }, 0);
      }

      _get(_getPrototypeOf(FwcModalCelebratoryComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);
    }
  }, {
    key: "_initCanvas",
    value: function _initCanvas() {
      var wrapper = this.shadowRoot.querySelector('.fwc-modal-wrapper');
      this.canvas = this.shadowRoot.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.canvas.width = wrapper.clientWidth;
      this.canvas.height = wrapper.clientHeight;
      this.cx = this.ctx.canvas.width / 2;
      this.cy = this.ctx.canvas.height / 2;
    }
  }, {
    key: "_randomRange",
    value: function _randomRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, {
    key: "_initConfetti",
    value: function _initConfetti() {
      var _this81 = this;

      this._initCanvas();

      this.confetti = [];

      for (var i = 0; i < this.confettiCount; i++) {
        this.confetti.push({
          color: this.colors[Math.floor(this._randomRange(0, this.colors.length))],
          dimensions: this.shapes[Math.floor(this._randomRange(0, this.shapes.length))],
          position: {
            x: this._randomRange(0, this.canvas.width),
            y: this.canvas.height - 1
          },
          rotation: this._randomRange(0, 2 * Math.PI),
          scale: {
            x: 1,
            y: 1
          },
          velocity: {
            x: this._randomRange(-25, 25),
            y: this._randomRange(0, -50)
          }
        });
      } // use optional delay attribute


      setTimeout(function () {
        _this81._renderConfetti();
      }, this.delay);
    }
  }, {
    key: "_renderConfetti",
    value: function _renderConfetti() {
      var _this82 = this;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.confetti.forEach(function (confetto, index) {
        var width = confetto.dimensions.x * confetto.scale.x;
        var height = confetto.dimensions.y * confetto.scale.y; // Move canvas to position and rotate

        _this82.ctx.translate(confetto.position.x, confetto.position.y);

        _this82.ctx.rotate(confetto.rotation); // Apply forces to velocity


        confetto.velocity.x -= confetto.velocity.x * _this82.drag;
        confetto.velocity.y = Math.min(confetto.velocity.y + _this82.gravity, _this82.terminalVelocity);
        confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random(); // Set position

        confetto.position.x += confetto.velocity.x;
        confetto.position.y += confetto.velocity.y; // Delete confetti when out of frame

        if (confetto.position.y >= _this82.canvas.height) _this82.confetti.splice(index, 1); // Loop confetto x position

        if (confetto.position.x > _this82.canvas.width) confetto.position.x = 0;
        if (confetto.position.x < 0) confetto.position.x = _this82.canvas.width; // Spin confetto by scaling y

        confetto.scale.y = Math.cos(confetto.position.y * 0.1);
        _this82.ctx.fillStyle = confetto.color; // Draw confetto

        if (confetto.dimensions.type === 'circle') {
          _this82.ctx.beginPath();

          _this82.ctx.arc(width / 2, height / 2, width / 2, 0, 2 * Math.PI, false);

          _this82.ctx.fill();
        }

        if (confetto.dimensions.type === 'rod') {
          _this82.ctx.fillRect(-width / 2, -height / 2, width, height);
        }

        if (confetto.dimensions.type === 'triangle') {
          _this82.ctx.beginPath();

          _this82.ctx.moveTo(width, height);

          _this82.ctx.lineTo(width * 0.75, height * 0.25);

          _this82.ctx.lineTo(width * 1.5, height * 0.5);

          _this82.ctx.fill();
        } // Reset transform matrix


        _this82.ctx.setTransform(1, 0, 0, 1, 0, 0);
      });
      this.confettiAnimation = window.requestAnimationFrame(this._renderConfetti.bind(this));
    }
  }, {
    key: "_onSlotChange",
    value: function _onSlotChange() {
      var bodySlot = this.shadowRoot.querySelector('slot[name="body"]');
      var bodySlotNodes = bodySlot.assignedNodes();
      var actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
      var actionsSlotNodes = actionsSlot.assignedNodes();
      this._actionsSlotChildren = actionsSlotNodes.length; // do not do anything on slotchange when opening by attribute

      if (!this.openBySlot) return;

      if (bodySlotNodes.length) {
        this._open();
      } else {
        this._close();
      }
    }
  }, {
    key: "_returnFocus",
    value: function _returnFocus() {
      if (this._refocusElem) {
        // Return focus to calling element
        this._refocusElem.focus();
      }
    } // a public func allowing projects to set the refocus element

  }, {
    key: "setReFocus",
    value: function setReFocus(elem) {
      this._refocusElem = elem;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this._modalBaseElement.closeModal();
    }
  }, {
    key: "_close",
    value: function _close() {
      this.closeModal();
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this._modalBaseElement.openModal();

      window.cancelAnimationFrame(this.confettiAnimation);
    }
  }, {
    key: "_open",
    value: function _open() {
      this.openModal();
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/typography.css\" />\n      <fwc-modal-base label-aria=\"", "\">\n        <div class=\"fwc-modal-wrapper\">\n          <div class=\"fwc-modal-header\">\n            <h2 id=\"modalHeader\">", "</h2>\n          </div>\n\n          <div class=\"fwc-modal-body\">\n            <slot name=\"body\" @slotchange=\"", "\"></slot>\n          </div>\n\n          <div class=\"fwc-modal-actions ", "\">\n            <slot name=\"actions\" @slotchange=\"", "\"></slot>\n          </div>\n          <canvas id=\"canvas\" aria-hidden=\"true\"></canvas>\n        </div>\n      </fwc-modal-base>\n    "])), this.textHeader, this.textHeader, this._onSlotChange, this._actionsSlotChildren > 0 ? '' : 'fwc-hide', this._onSlotChange);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["\n        .fwc-modal-wrapper {\n          width: 92vw;\n          max-width: calc(100 * var(--fwcu));\n        }\n        .fwc-modal-header {\n          padding: calc(4 * var(--fwcu));\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: calc(4 * var(--fwcu)) calc(4 * var(--fwcu)) calc(4 * var(--fwcu)) calc(6 * var(--fwcu));\n          border-radius: var(--border-radius) var(--border-radius) 0 0;\n        }\n        h2 {\n          color: var(--color-gray-one);\n          margin: 0;\n        }\n        .fwc-modal-close {\n          background: transparent;\n          border: none;\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          padding: 0;\n          width: calc(3 * var(--fwcu));\n          height: calc(3 * var(--fwcu));\n        }\n        .fwc-modal-body {\n          padding: 0 calc(6 * var(--fwcu)) 0 calc(6 * var(--fwcu));\n        }\n        .fwc-modal-actions {\n          display: flex;\n          justify-content: flex-end;\n          padding: calc(6 * var(--fwcu));\n        }\n        .fwc-hide {\n          display: none;\n        }\n        ::slotted([slot='actions']) {\n          display: flex;\n          justify-content: center;\n          flex-wrap: wrap;\n          width: 100%;\n          position: relative;\n          z-index: 1;\n        }\n        @media screen and (max-width: 600px) {\n          .fwc-modal-header {\n            align-items: flex-start;\n          }\n          .fwc-modal-body {\n            padding: 0 calc(2 * var(--fwcu)) 0 calc(2 * var(--fwcu));\n          }\n        }\n        canvas {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          top: 0;\n          left: 0;\n          pointer-events: none;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Boolean
        },
        delay: {
          type: Number
        },
        textHeader: {
          attribute: 'text-header',
          type: String
        },
        openBySlot: {
          attribute: 'open-by-slot',
          type: Boolean
        },
        // below are props added for watch/update, they are not an option to pass as attributes
        _actionsSlotChildren: {
          type: Number
        }
      };
    }
  }]);

  return FwcModalCelebratoryComponent;
}(LitElement);

var FwcModalCelebratory = /*#__PURE__*/function (_FwcBase29) {
  _inherits(FwcModalCelebratory, _FwcBase29);

  var _super67 = _createSuper(FwcModalCelebratory);

  function FwcModalCelebratory() {
    _classCallCheck(this, FwcModalCelebratory);

    return _super67.call(this, 'fwc-modal-celebratory', FwcModalCelebratoryComponent);
  }

  return FwcModalCelebratory;
}(FwcBase);

var FwcModalIllustrationComponent = /*#__PURE__*/function (_LitElement35) {
  _inherits(FwcModalIllustrationComponent, _LitElement35);

  var _super68 = _createSuper(FwcModalIllustrationComponent);

  function FwcModalIllustrationComponent() {
    var _this83;

    _classCallCheck(this, FwcModalIllustrationComponent);

    _this83 = _super68.call(this);
    _this83._fwcModalBase = new FwcModalBase();

    _this83._fwcModalBase.build();

    _this83._modalBaseElement = null;
    _this83._refocusElem = null;
    _this83.textHeader = '';
    _this83.textBody = '';
    _this83.image = '';
    _this83.open = false;
    _this83.openBySlot = false;
    _this83._bodySlotChildren = 0;
    _this83._actionsSlotChildren = 0;
    return _this83;
  }

  _createClass(FwcModalIllustrationComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this84 = this;

      this._modalBaseElement = this.shadowRoot.querySelector('fwc-modal-base'); // grab the open/close event from fwc-modal-base and remove the slot items

      window.addEventListener('fwc-modal-open', function () {
        focusTrap(_this84);
      });
      window.addEventListener('fwc-modal-close', function () {
        var slot = _this84.shadowRoot.querySelector('slot');

        var nodes = slot.assignedNodes();

        if (_this84.openBySlot) {
          nodes.forEach(function (n) {
            n.parentNode.removeChild(n);
          });
        } else {
          _this84.removeAttribute('open');
        }

        _this84._returnFocus();
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      var _this85 = this;

      if (name === 'open') {
        setTimeout(function () {
          if (_this85.open) {
            _this85._modalBaseElement.openModal();
          } else {
            _this85._modalBaseElement.closeModal();
          }
        }, 0);
      }

      _get(_getPrototypeOf(FwcModalIllustrationComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);
    }
  }, {
    key: "_onSlotChange",
    value: function _onSlotChange() {
      var bodySlot = this.shadowRoot.querySelector('slot[name="body"]');
      var bodySlotNodes = bodySlot.assignedNodes();
      var actionsSlot = this.shadowRoot.querySelector('slot[name="actions"]');
      var actionsSlotNodes = actionsSlot.assignedNodes();
      this._bodySlotChildren = bodySlotNodes.length;
      this._actionsSlotChildren = actionsSlotNodes.length; // do not do anything on slotchange when opening by attribute

      if (!this.openBySlot) return;

      if (bodySlotNodes.length) {
        this._modalBaseElement.openModal();
      } else {
        this._modalBaseElement.closeModal();
      }
    }
  }, {
    key: "_returnFocus",
    value: function _returnFocus() {
      if (this._refocusElem) {
        // Return focus to calling element
        this._refocusElem.focus();
      }
    } // a public func allowing projects to set the refocus element

  }, {
    key: "setReFocus",
    value: function setReFocus(elem) {
      this._refocusElem = elem;
    }
  }, {
    key: "_dispatch",
    value: function _dispatch(e, name) {
      var event = new CustomEvent(name, {
        detail: {
          target: e.target,
          component: this
        },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this._modalBaseElement.closeModal();
    }
  }, {
    key: "_close",
    value: function _close() {
      this.closeModal();
    }
  }, {
    key: "openModal",
    value: function openModal() {
      this._modalBaseElement.openModal();
    }
  }, {
    key: "_open",
    value: function _open() {
      this.openModal();
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/typography.css\" />\n      <fwc-modal-base label-aria=\"", "\">\n        <div class=\"illustration-modal\" style=\"background-image: url(", ")\">\n          <div class=\"illustration-wrapper\">\n            <div class=\"illustration-content\">\n              <h2 id=\"illustration\">", "</h2>\n              <div class=\"illustration-body\">\n                <div class=\"", "\">", "</div>\n                <slot name=\"body\" @slotchange=\"", "\"></slot>\n              </div>\n              <div class=\"illustration-actions ", "\">\n                <slot name=\"actions\" @slotchange=\"", "\"></slot>\n              </div>\n            </div>\n          </div>\n        </div>\n      </fwc-modal-base>\n    "])), this.textHeader, this.image, this.textHeader, this._bodySlotChildren > 0 ? 'fwc-hide' : '', this.textBody, this._onSlotChange, this._actionsSlotChildren > 0 ? '' : 'fwc-hide', this._onSlotChange);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["\n        .illustration-modal {\n          display: block;\n          position: relative;\n          background-color: transparent;\n          background-repeat: no-repeat;\n          background-size: cover;\n          background-position: right;\n          overflow: hidden;\n          width: 92vw;\n          max-width: calc(100 * var(--fwcu));\n          padding: calc(6 * var(--fwcu));\n        }\n        .illustration-modal:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 100%;\n          width: calc(100 * var(--fwcu));\n          background: linear-gradient(to left, rgba(var(--color-rgb-black), 0) 0%, rgba(var(--color-rgb-black), 0.5) 47.63%, rgba(var(--color-rgb-black), 0.6) 100%);\n        }\n        .illustration-wrapper {\n          position: relative;\n          width: 100%;\n        }\n        .illustration-content {\n          position: relative;\n          top: 0;\n          left: 0;\n          width: calc(44 * var(--fwcu));\n        }\n        h2 {\n          color: var(--color-white);\n          margin: 0;\n        }\n        .illustration-body {\n          font-size: calc(1.75 * var(--fwcu));\n          line-height: calc(2.75 * var(--fwcu));\n          color: var(--color-white);\n          margin-top: calc(3 * var(--fwcu));\n        }\n        .illustration-actions {\n          margin-top: calc(3 * var(--fwcu));\n        }\n\n        @media screen and (max-width: 600px) {\n          .illustration-modal {\n            padding: calc(6 * var(--fwcu)) calc(4 * var(--fwcu));\n          }\n          .illustration-content {\n            left: 0;\n            right: 0;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            width: 100%;\n            position: relative;\n          }\n          ::slotted([slot='actions']) {\n            display: flex;\n            justify-content: space-between;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Boolean
        },
        textHeader: {
          attribute: 'text-header',
          type: String
        },
        textBody: {
          attribute: 'text-body',
          type: String
        },
        image: {
          type: String
        },
        openBySlot: {
          attribute: 'open-by-slot',
          type: Boolean
        },
        // below are props added for watch/update, they are not an option to pass as attributes
        _bodySlotChildren: {
          type: Number
        },
        _actionsSlotChildren: {
          type: Number
        }
      };
    }
  }]);

  return FwcModalIllustrationComponent;
}(LitElement);

var FwcModalIllustration = /*#__PURE__*/function (_FwcBase30) {
  _inherits(FwcModalIllustration, _FwcBase30);

  var _super69 = _createSuper(FwcModalIllustration);

  function FwcModalIllustration() {
    _classCallCheck(this, FwcModalIllustration);

    return _super69.call(this, 'fwc-modal-illustration', FwcModalIllustrationComponent);
  }

  return FwcModalIllustration;
}(FwcBase);

var FwcModalSlideComponent = /*#__PURE__*/function (_LitElement36) {
  _inherits(FwcModalSlideComponent, _LitElement36);

  var _super70 = _createSuper(FwcModalSlideComponent);

  function FwcModalSlideComponent() {
    var _this86;

    _classCallCheck(this, FwcModalSlideComponent);

    _this86 = _super70.call(this);
    _this86.open = false;
    _this86.full = false;
    _this86.callerId = null;
    _this86.direction = 'left';
    _this86.refocusElem = null;
    _this86.validDirections = ['left', 'right', 'top', 'bottom'];
    _this86.openByAttribute = false;
    _this86.labelAriaCloseBtn = 'Close Modal';
    _this86.preventOpenBySlotChange = false;
    return _this86;
  }

  _createClass(FwcModalSlideComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this87 = this;

      var modal = this.shadowRoot.querySelector('.fwc-modal-wrapper'); // if an invalid direction is passed

      if (!this.validDirections.includes(this.direction)) {
        this.direction = 'left';
      } // set event listener to init focus trap after transition ends


      modal.addEventListener('transitionend', function (e) {
        if (_this87.open && e.propertyName !== 'opacity') {
          focusTrap(_this87);
        }
      });
      modal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          _this87._onClosePress();
        }
      });
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this88 = this;

      changedProperties.forEach(function (oldValue, propName) {
        if (propName === 'openByAttribute') {
          _this88.preventOpenBySlotChange = _this88.openByAttribute;
        }

        if (propName === 'open') {
          _this88._toggleBodyScrollClass(oldValue !== undefined ? !oldValue : false);
        }
      });
    }
  }, {
    key: "_onSlotChange",
    value: function _onSlotChange(e) {
      var slot = this.shadowRoot.querySelector('slot');
      var slotNodes = slot.assignedNodes(); // do not close the modal if slotted content updates, only if it is empty/removed

      if (this.open && slotNodes.length > 0) {
        return;
      }

      if (!this.preventOpenBySlotChange) {
        this._toggleModal();
      }
    }
  }, {
    key: "_toggleModal",
    value: function _toggleModal() {
      this.open = !this.open;

      this._refocusElem();
    }
  }, {
    key: "_toggleBodyScrollClass",
    value: function _toggleBodyScrollClass(isOpen) {
      if (isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }, {
    key: "_onClosePress",
    value: function _onClosePress() {
      var event = new CustomEvent('fwc-modal-close', {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);

      this._closeModal();
    }
  }, {
    key: "_closeModal",
    value: function _closeModal() {
      if (this.preventOpenBySlotChange) {
        this.open = false;
        this.removeAttribute('open');

        this._refocusElem();

        return;
      }

      if (this.open) {
        var slot = this.shadowRoot.querySelector('slot');
        var nodes = slot.assignedNodes(); // remove everything inside the slot

        nodes.forEach(function (n) {
          n.parentNode.removeChild(n);
        });
      }
    }
  }, {
    key: "closeSlideModal",
    value: function closeSlideModal() {
      this._closeModal();
    }
  }, {
    key: "_refocusElem",
    value: function _refocusElem() {
      var _this89 = this;

      if (!this.open && this.refocusElem) {
        // Return focus to calling element
        setTimeout(function () {
          _this89.refocusElem.focus();
        }, 0);
      }
    }
  }, {
    key: "setReFocus",
    value: function setReFocus(elem) {
      this.refocusElem = elem;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["\n      <div class=\"fwc-modal-wrapper ", "\" role=\"dialog\" aria-modal=\"", "\" aria-label=\"", "\">\n        <div class=\"fwc-modal-bg\"></div>\n        <div class=\"fwc-modal-container ", " ", "\">\n            <button type=\"button\" class=\"fwc-modal-close\" aria-label=\"", "\" @click=\"", "\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21\" height=\"21\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                <polygon points=\"19.216 44.562 1.438 26.784 0 25.281 1.438 23.778 19.216 6 22.222 9.007 8.039 23.19 50 23.19 50 27.373 8.039 27.373 22.222 41.556\"/>\n              </svg>\n            </button>\n            <slot @slotchange=\"", "\"></slot>\n          </div>\n        </div>\n      </div>\n    "])), this.open ? 'open' : '', this.open, this.labelAriaModalHeader, this.direction, this.full ? 'full' : '', this.labelAriaCloseBtn, this._onClosePress, this._onSlotChange);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["\n        .fwc-modal-wrapper {\n          position: fixed;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          z-index: 9999;\n          pointer-events: none;\n          width: 100%;\n          visibility: hidden;\n        }\n        .fwc-modal-wrapper.open {\n          pointer-events: all;\n          visibility: visible;\n        }\n        .fwc-modal-bg {\n          position: absolute;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          background: rgba(var(--color-rgb-util-four), 0.9);\n          transition: opacity 250ms ease;\n          opacity: 0;\n          visibility: hidden;\n        }\n        .fwc-modal-wrapper.open .fwc-modal-bg {\n          opacity: 1;\n          visibility: visible;\n        }\n        .fwc-modal-container {\n          background: var(--color-white);\n          border: 1px solid var(--color-white);\n          width: 60%;\n          height: 100%;\n          position: absolute;\n          opacity: 0;\n          transition: all 350ms cubic-bezier(0.55, 0.085, 0.68, 0.53);\n          font-size: var(--default-font-size);\n          padding-top: calc(9 * var(--fwcu)); /* 7.5height + 1.5top of close btn */\n          overflow-x: hidden;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        .fwc-modal-container.open {\n          transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n        }\n\n        .fwc-modal-container.left {\n          left: -100%;\n          border-top-right-radius: var(--border-radius);\n          border-bottom-right-radius: var(--border-radius);\n        }\n        .fwc-modal-container.right {\n          right: -100%;\n          border-top-left-radius: var(--border-radius);\n          border-bottom-left-radius: var(--border-radius);\n        }\n        .fwc-modal-container.top {\n          top: -100%;\n          left: 0;\n          width: 100%;\n          height: 60%;\n          border-bottom-left-radius: var(--border-radius);\n          border-bottom-right-radius: var(--border-radius);\n        }\n        .fwc-modal-container.bottom {\n          bottom: -100%;\n          left: 0;\n          width: 100%;\n          height: 60%;\n          border-top-left-radius: var(--border-radius);\n          border-top-right-radius: var(--border-radius);\n        }\n        .fwc-modal-container.bottom.full,\n        .fwc-modal-container.top.full {\n          height: 100%;\n          border-radius: none;\n        }\n        .open .fwc-modal-container {\n          opacity: 1;\n        }\n        .open .fwc-modal-container.left {\n          left: 0%;\n        }\n        .open .fwc-modal-container.right {\n          right: 0%;\n        }\n        .open .fwc-modal-container.top {\n          top: 0%;\n        }\n        .open .fwc-modal-container.bottom {\n          bottom: 0%;\n        }\n\n        .fwc-modal-close {\n          background: var(--color-gray-five);\n          border: none;\n          cursor: pointer;\n          position: absolute;\n          top: calc(1.5 * var(--fwcu));\n          padding: calc(0.75 * var(--fwcu));\n          width: calc(7.5 * var(--fwcu));\n          height: calc(7.5 * var(--fwcu));\n          border-radius: var(--border-radius);\n        }\n\n        .fwc-modal-close svg {\n          fill: var(--color-primary);\n        }\n\n        .left .fwc-modal-close {\n          right: calc(1.5 * var(--fwcu));\n        }\n        .right .fwc-modal-close {\n          left: calc(1.5 * var(--fwcu));\n          transform: rotate(180deg);\n        }\n        .top .fwc-modal-close {\n          right: calc(1.5 * var(--fwcu));\n          transform: rotate(90deg);\n        }\n        .bottom .fwc-modal-close {\n          right: calc(1.5 * var(--fwcu));\n          transform: rotate(-90deg);\n        }\n\n        @media screen and (max-width: 900px) {\n          .fwc-modal-container.left,\n          .fwc-modal-container.right {\n            width: 95%;\n          }\n          .fwc-modal-container.top,\n          .fwc-modal-container.bottom {\n            height: 95%;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Boolean
        },
        direction: {
          type: String
        },
        full: {
          type: Boolean
        },
        openByAttribute: {
          attribute: 'open-by-attribute',
          type: Boolean
        },
        labelAriaCloseBtn: {
          attribute: 'label-aria-close-button',
          type: String
        },
        labelAriaModalHeader: {
          attribute: 'label-aria-modal-header',
          type: String
        }
      };
    }
  }]);

  return FwcModalSlideComponent;
}(LitElement);

var FwcModalSlide = /*#__PURE__*/function (_FwcBase31) {
  _inherits(FwcModalSlide, _FwcBase31);

  var _super71 = _createSuper(FwcModalSlide);

  function FwcModalSlide() {
    _classCallCheck(this, FwcModalSlide);

    return _super71.call(this, 'fwc-modal-slide', FwcModalSlideComponent);
  }

  return FwcModalSlide;
}(FwcBase);

var FwcPaginationComponent = /*#__PURE__*/function (_LitElement37) {
  _inherits(FwcPaginationComponent, _LitElement37);

  var _super72 = _createSuper(FwcPaginationComponent);

  function FwcPaginationComponent() {
    var _this90;

    _classCallCheck(this, FwcPaginationComponent);

    _this90 = _super72.call(this);
    _this90.model = null;
    _this90.ariaLabels = {
      navLabel: 'Pagination',
      nextPageLabel: 'Next Page',
      prevPageLabel: 'Previous Page'
    };
    _this90.labelAriaNav = 'Pagination', _this90.labelAriaNext = 'Next Page', _this90.labelAriaPrev = 'Previous Page', _this90._viewMax = 5;
    _this90._startPage = 0;
    _this90._endPage = 5;
    _this90._pages = [];
    _this90._showNextBtn = true;
    _this90._showNextEllipsis = false;
    _this90._showPrevEllipsis = false;
    _this90._linkStart = 0;
    _this90._linkEnd = 0;
    _this90._totalPages = 0;
    return _this90;
  }

  _createClass(FwcPaginationComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      // 508 keyboard, set active page
      this.shadowRoot.addEventListener('keydown', function (e) {
        var _this91 = this;

        var isArrowBtn = e.target.classList.contains('fwc-next') || e.target.classList.contains('fwc-prev');

        if (e.key === 'Enter' && !isArrowBtn) {
          // wait for dom to update
          setTimeout(function () {
            var host = _this91.getRootNode().host;

            host._setFocusOnCurrentElement();
          }, 100);
        }
      });

      this._initPager();
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcPaginationComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'model' && oldVal) {
        this._initPager();
      }
    }
  }, {
    key: "_initPager",
    value: function _initPager() {
      this._totalPages = this.model.totalPages;
      this._linkStart = this._startPage;
      this._linkEnd = this._totalPages > this._endPage ? this._endPage : this._totalPages;
      this._pages = [];

      for (var i = 0; i < this._totalPages; i++) {
        this._pages.push({
          id: i + 1
        });
      }

      this._slicer(this.model.activePage, false);

      this._updateNavButtons();
    }
  }, {
    key: "_thisPage",
    value: function _thisPage(page) {
      this._slicer(page.id, true);
    }
  }, {
    key: "_prevPage",
    value: function _prevPage() {
      if (this.model.activePage > 1) {
        this._slicer(this.model.activePage - 1, true); // 508, reset focus to first item when prev arrow is hidden


        if (this.model.activePage === 1) {
          var btns = this.shadowRoot.querySelectorAll('.fwc-page-num');
          var first = btns[1];
          first.focus();
        }
      }
    }
  }, {
    key: "_nextPage",
    value: function _nextPage() {
      if (this.model.activePage < this._pages.length) {
        this._slicer(this.model.activePage + 1, true); // 508, reset focus to last item when next arrow is hidden


        if (this.model.activePage === this._pages.length) {
          var btns = this.shadowRoot.querySelectorAll('.fwc-page-num');
          var last = btns[btns.length - 2];
          last.focus();
        }
      }
    }
  }, {
    key: "_getNextEllipsisStatus",
    value: function _getNextEllipsisStatus() {
      return this._linkEnd < this.model.totalPages;
    }
  }, {
    key: "_getPrevEllipsisStatus",
    value: function _getPrevEllipsisStatus(page) {
      return page > 3 && this.model.totalPages > 5;
    }
  }, {
    key: "_getNextBtnStatus",
    value: function _getNextBtnStatus(page) {
      return page === this._pages.length ? false : true;
    }
  }, {
    key: "_updateNavButtons",
    value: function _updateNavButtons() {
      this._showNextBtn = this._getNextBtnStatus(this.model.activePage);
      this._showNextEllipsis = this._getNextEllipsisStatus();
      this._showPrevEllipsis = this._getPrevEllipsisStatus(this.model.activePage);
    }
  }, {
    key: "_slicer",
    value: function _slicer(next, emit) {
      var half = Math.ceil(this._viewMax / 2);
      var pen = this._pages.length - 1; // Keeps active page centered when half point is reached

      if (next >= half && next < pen) {
        this._linkStart = next - half;
        this._linkEnd = next + (half - 1);
      } // Moves active page off center if penultimate page is selected.


      if (this._pages.length > this._viewMax) {
        // last
        if (this._pages.length === next) {
          this._linkStart = next - this._viewMax;
          this._linkEnd = this._pages.length;
        } // first


        if (this.model.activePage - next > 1 && next < half) {
          this._linkStart = 0;
          this._linkEnd = this._viewMax;
        }
      }

      this.model.activePage = next; // trigger update on model

      this.model = _objectSpread({}, this.model);

      if (emit) {
        this._emitEvent(this.model);
      }

      this._updateNavButtons();
    }
  }, {
    key: "_setFocusOnCurrentElement",
    value: function _setFocusOnCurrentElement() {
      var page = this.shadowRoot.querySelector('.fwc-page-num.active');
      page.focus();
    }
  }, {
    key: "_emitEvent",
    value: function _emitEvent(model) {
      var event = new CustomEvent('fwc-pagination-update', {
        detail: model,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this92 = this;

      return html(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["\n      <nav class=\"fwc-pagination\" id=\"er-pagination-testing\" role=\"navigation\" aria-label=\"", "\">\n        <a href=\"javascript:void(0)\" role=\"button\" class=\"fwc-page-icon fwc-page-item fwc-prev\" @click=\"", "\" style=\"", "\" aria-hidden=\"", "\" aria-label=\"", "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\" focusable=\"false\">\n            <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\" />\n          </svg>\n        </a>\n\n        <a href=\"javascript:void(0)\" role=\"button\" aria-label=\"go to page ", "\" class=\"fwc-page-num fwc-page-item ", "\" @click=\"", "\">\n          <span><span>", "</span></span>\n        </a>\n\n        <span class=\"fwc-ellipsis fwc-page-item ", "\"><span>...</span></span>\n\n        ", "\n\n        <span class=\"fwc-ellipsis fwc-page-item ", "\"><span>...</span></span>\n\n        <a href=\"javascript:void(0)\" role=\"button\" aria-label=\"go to page ", "\" class=\"fwc-page-num fwc-page-item ", "\" @click=\"", "\">\n          <span><span>", "</span></span>\n        </a>\n\n        <a href=\"javascript:void(0)\" role=\"button\" class=\"fwc-page-icon fwc-page-item fwc-next\" @click=\"", "\" style=\"", "\" aria-hidden=\"", "\" aria-label=\"", "\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 50 50\">\n            <polygon points=\"2.719 39.66 0 36.941 23.641 13.3 25 12 26.359 13.3 50 36.941 47.281 39.66 25 17.378\" transform=\"matrix(1 0 0 -1 0 51.66)\" />\n          </svg>\n        </a>\n      </nav>\n    "])), this.labelAriaNav, this._prevPage, this.model.activePage <= 1 ? 'visibility: hidden' : 'visibility: visible', this.model.activePage <= 1 ? true : false, this.labelAriaPrev, this._pages.length ? this._pages[0].id : '', this._showPrevEllipsis ? '' : 'hide', function () {
        return _this92._thisPage(_this92._pages[0]);
      }, this._pages.length ? this._pages[0].id : '', this._showPrevEllipsis ? '' : 'hide', this._pages.filter(function (page) {
        return _this92._linkStart < page.id && _this92._linkEnd >= page.id;
      }).map(function (page) {
        return html(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["\n              <a href=\"javascript:void(0)\" role=\"button\" aria-label=\"go to page ", "\" class=\"fwc-page-num fwc-page-item ", "\" @click=\"", "\" aria-current=", ">\n                <span><span>", "</span></span>\n              </a>\n            "])), page.id, page.id === _this92.model.activePage ? 'active' : '', function () {
          return _this92._thisPage(page);
        }, page.id === _this92.model.activePage ? 'page' : false, page.id);
      }), this._showNextEllipsis ? '' : 'hide', this._pages.length ? this._pages[this._pages.length - 1].id : '', this._showNextEllipsis ? '' : 'hide', function () {
        return _this92._thisPage(_this92._pages[_this92._pages.length - 1]);
      }, this._pages.length ? this._pages[this._pages.length - 1].id : '', this._nextPage, this._showNextBtn && this._pages.length > 0 ? 'visibility: visible' : 'visibility: hidden', this._showNextBtn && this._pages.length > 0 ? false : true, this.labelAriaNext);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["\n        .fwc-pagination {\n          display: flex;\n          flex-wrap: nowrap;\n        }\n\n        .fwc-page-item {\n          width: 11.11%;\n          max-width: calc(4.75 * var(--fwcu));\n          margin-right: 1.5%;\n          border-radius: 50%;\n          text-decoration: none;\n        }\n        .fwc-page-num {\n          background: var(--color-gray-five);\n          text-decoration: none;\n          font-size: calc(1.75 * var(--fwcu));\n          font-weight: 700;\n        }\n        @media only screen and (max-width: 767px) {\n          .fwc-page-num {\n            font-size: calc(1.5 * var(--fwcu));\n          }\n        }\n        .fwc-page-num.active,\n        .fwc-page-num:hover {\n          background: var(--color-primary);\n        }\n        .fwc-page-num > span {\n          padding-top: 100%;\n          width: 100%;\n          position: relative;\n          display: block;\n        }\n        .fwc-page-num > span > span {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-56%, -51%);\n          color: var(--color-primary);\n        }\n        .fwc-page-num.active > span > span,\n        .fwc-page-num:hover > span > span {\n          color: var(--color-white);\n        }\n        .fwc-page-icon {\n          position: relative;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          text-decoration: none;\n        }\n        .fwc-page-icon svg {\n          fill: var(--color-primary);\n        }\n        .fwc-prev {\n          margin-right: 1.5%;\n          margin-left: 0;\n          transform: rotate(90deg);\n        }\n        .fwc-next {\n          transform: rotate(-90deg);\n        }\n        .fwc-page-icon span {\n          color: var(--color-primary);\n          text-decoration: none;\n          font-size: calc(2.5 * var(--fwcu));\n          display: block;\n          height: 100%;\n          width: 100%;\n        }\n        .fwc-ellipsis {\n          display: flex;\n          justify-content: center;\n        }\n        .fwc-ellipsis span {\n          align-self: flex-end;\n        }\n        .hide {\n          display: none;\n          visibility: hidden;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        model: {
          type: Object
        },
        labelAriaNav: {
          attribute: 'label-aria-nav',
          type: String
        },
        labelAriaNext: {
          attribute: 'label-aria-next',
          type: String
        },
        labelAriaPrev: {
          attribute: 'label-aria-prev',
          type: String
        },
        _pages: {
          type: Array
        },
        _showPrevEllipsis: {},
        _showNextEllipsis: {},
        _showNextBtn: {},
        _linkStart: {
          type: Number
        },
        _linkEnd: {
          type: Number
        },
        _startPage: {
          type: Number
        },
        _endPage: {
          type: Number
        }
      };
    }
  }]);

  return FwcPaginationComponent;
}(LitElement);

var FwcPagination = /*#__PURE__*/function (_FwcBase32) {
  _inherits(FwcPagination, _FwcBase32);

  var _super73 = _createSuper(FwcPagination);

  function FwcPagination() {
    _classCallCheck(this, FwcPagination);

    return _super73.call(this, 'fwc-pagination', FwcPaginationComponent);
  }

  return FwcPagination;
}(FwcBase);

var FwcPanelComponent = /*#__PURE__*/function (_LitElement38) {
  _inherits(FwcPanelComponent, _LitElement38);

  var _super74 = _createSuper(FwcPanelComponent);

  function FwcPanelComponent() {
    var _this93;

    _classCallCheck(this, FwcPanelComponent);

    _this93 = _super74.call(this);
    _this93.labelMobileHeader = '';
    _this93.mobileView = new MobileView();

    _this93.mobileView.build();

    _this93.open = false;
    _this93.labelApplyBtn = 'Okay';
    _this93.labelCancelBtn = 'Cancel';
    _this93.labelResetBtn = 'Reset';
    _this93.returnEl = null;
    return _this93;
  }

  _createClass(FwcPanelComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this94 = this;

      var panel = this.shadowRoot.querySelector('#fwc-panel-wrapper');
      panel.addEventListener('transitionend', function (e) {
        // set the focus trap inside the panel after open
        if (_this94.open && e.propertyName === 'opacity') {
          var ignoredFocusTrapSelectors = window.innerWidth <= breakpoints.sm ? ['.fwc-link-icon.hide-sm', '.fwc-panel-footer button'] : ['.fwc-link-icon.hide-lg', '.mobile-footer-btn button'];
          setTimeout(function () {
            focusTrapCustomTabs(_this94, ignoredFocusTrapSelectors);
          }, 0);
        } // set the focus back to the open button on panel close


        if (!_this94.open && e.propertyName === 'opacity') {
          removeFocusTrapListener(_this94);

          _this94._returnFocus();
        }
      }); // listen for Escape keydown

      this.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
          _this94._closePanel();
        }
      });
    }
  }, {
    key: "setReturnEl",
    value: function setReturnEl(el) {
      this.returnEl = el;
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      var _this95 = this;

      this.open = !this.open;

      this._toggleBodyScrollClass();

      setTimeout(function () {
        _this95._setPanelPosition();
      }, 0);
    }
  }, {
    key: "_closePanel",
    value: function _closePanel() {
      this.open = false;

      this._toggleBodyScrollClass();

      this._returnFocus();

      this._clearPanelPosition();
    }
  }, {
    key: "_toggleBodyScrollClass",
    value: function _toggleBodyScrollClass() {
      if (this.open && window.innerWidth <= breakpoints.sm) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  }, {
    key: "_returnFocus",
    value: function _returnFocus() {
      var _this96 = this;

      if (!this.open && this.returnEl) {
        setTimeout(function () {
          _this96.returnEl.focus();
        }, 0);
      }
    } // emit an event on hitting the apply button

  }, {
    key: "_dispatchApply",
    value: function _dispatchApply() {
      var applyEvent = new CustomEvent('fwc-panel-apply', {
        detail: this.labelApplyBtn,
        bubbles: true
      });
      this.dispatchEvent(applyEvent);

      this._closePanel();
    } // emit an event on hitting the cancel button

  }, {
    key: "_dispatchCancel",
    value: function _dispatchCancel() {
      var cancelEvent = new CustomEvent('fwc-panel-cancel', {
        detail: this.labelCancelBtn,
        bubbles: true
      });
      this.dispatchEvent(cancelEvent);

      this._closePanel();
    } // emit an event on hitting the reset button

  }, {
    key: "_dispatchReset",
    value: function _dispatchReset() {
      var resetEvent = new CustomEvent('fwc-panel-reset', {
        detail: this.labelResetBtn,
        bubbles: true
      });
      this.dispatchEvent(resetEvent);
    }
  }, {
    key: "_setPanelPosition",
    value: function _setPanelPosition() {
      var panel = this.shadowRoot.querySelector('#fwc-panel-wrapper');
      var viewportWidth = document.documentElement.clientWidth;

      if (this.open) {
        if (panel.getBoundingClientRect().right < viewportWidth) {
          // if rightmost right-side is can fit within viewport
          panel.style.left = 0;
        } else if (panel.getBoundingClientRect().right > viewportWidth) {
          // if rightmost right-side is beyond viewport
          panel.style.right = 0;
        }
      } else {
        this._clearPanelPosition();
      }
    }
  }, {
    key: "_clearPanelPosition",
    value: function _clearPanelPosition() {
      var panel = this.shadowRoot.querySelector('#fwc-panel-wrapper');
      panel.style.removeProperty('left');
      panel.style.removeProperty('right');
    }
    /** Stores svg htmlement for Restart icon */

  }, {
    key: "_getRestartSVG",
    value: function _getRestartSVG() {
      return html(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <path d=\"M25,0 L25,4.16666667 C36.531575,4.16666667 45.8333333,13.468425 45.8333333,25 C45.8333333,36.531575 36.531575,45.8333333 25,45.8333333 C13.468425,45.8333333 4.16666667,36.531575 4.16666667,25 C4.16666667,18.1966146 7.47070417,12.1907563 12.5,8.3984375 L12.5,18.75 L16.6666667,18.75 L16.6666667,2.08333333 L0,2.08333333 L0,6.25 L8.52864583,6.25 C3.3203125,10.8317062 0,17.5374354 0,25 C0,38.7858083 11.2141938,50 25,50 C38.7858083,50 50,38.7858083 50,25 C50,11.2141938 38.7858083,0 25,0 Z\" />\n      </svg>\n    "])));
    }
  }, {
    key: "_mobileCancelButton",
    value: function _mobileCancelButton() {
      return html(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral([" <button tabindex=\"1\" class=\"fwc-btn fwc-btn-secondary fwc-panel-cancel\" @click=\"", "\" aria-label=\"", "\">", "</button> "])), this._dispatchCancel, this.labelCancelBtn, this.labelCancelBtn);
    }
  }, {
    key: "_mobileApplyButton",
    value: function _mobileApplyButton() {
      return html(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral([" <button tabindex=\"1\" class=\"fwc-btn fwc-btn-primary fwc-panel-apply\" @click=\"", "\" aria-label=\"", "\">", "</button> "])), this._dispatchApply, this.labelApplyBtn, this.labelApplyBtn);
    }
  }, {
    key: "_resetButton",
    value: function _resetButton(hide) {
      return html(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["\n      <a href=\"javascript:void(0);\" tabindex=\"1\" class=\"fwc-link-icon left ", "\" @click=\"", "\" role=\"button\" aria-label=\"", "\">\n        <span class=\"fwc-panel-restart\">", "</span>\n        <span>", "</span>\n      </a>\n    "])), hide, this._dispatchReset, this.labelResetBtn, this._getRestartSVG(), this.labelResetBtn);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/buttons-links.css\" />\n      <slot name=\"fwc-panel-action\" id=\"FwcActionSlot\"></slot>\n      <mobile-view mobile-header-text=\"", "\" ?open=", ">\n        <!-- START MOBILE VIEW SLOT BODY -->\n        <div slot=\"body\">\n          <div class=\"fwc-panel-container\">\n            <div id=\"fwc-panel-wrapper\" aria-expanded=\"", "\" class=\"fwc-panel-wrapper ", "\">\n              <div class=\"fwc-panel-content\">\n                <slot name=\"fwc-panel-content\" role=\"region\"></slot>\n                ", "\n              </div>\n              <div class=\"fwc-panel-footer\">\n                <div class=\"fwc-panel-reset-wrapper\">", "</div>\n                <div class=\"fwc-panel-apply-cancel-wrapper\">", " ", "</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- END MOBILE VIEW SLOT BODY -->\n\n        <!-- START MOBILE VIEW SLOT FOOTER BUTTONS -->\n        <div slot=\"mobile-footer-primary-button\" class=\"mobile-footer-btn\">", "</div>\n        <div slot=\"mobile-footer-secondary-button\" class=\"mobile-footer-btn\">", "</div>\n        <!-- END MOBILE VIEW SLOT FOOTER BUTTONS -->\n      </mobile-view>\n    "])), this.labelMobileHeader, this.open, this.open, this.open ? 'open' : '', this._resetButton('hide-lg'), this._resetButton('hide-sm'), this._mobileCancelButton(), this._mobileApplyButton(), this._mobileApplyButton(), this._mobileCancelButton());
    }
  }], [{
    key: "styles",
    get: function get() {
      return css(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["\n      .fwc-panel-container {\n        position: relative;\n      }\n      .fwc-panel-wrapper {\n        overflow: hidden;\n        opacity: 0;\n        height: 0;\n        visibility: hidden;\n        transition: all 200ms ease;\n      }\n      .fwc-panel-wrapper.open {\n        z-index: 1;\n        opacity: 1;\n        visibility: visible;\n        height: auto;\n        position: absolute;\n        top: calc(1.25 * var(--fwcu));\n        border: 1px solid var(--color-gray-four);\n        border-radius: var(--border-radius);\n        background-color: var(--color-white);\n        width: calc(105 * var(--fwcu));\n      }\n      .fwc-panel-footer {\n        position: relative;\n        padding: calc(2.5 * var(--fwcu));\n        background-color: var(--color-white);\n        box-shadow: var(--box-shadow);\n        display: flex;\n        justify-content: space-between;\n      }\n      .fwc-panel-apply-cancel-wrapper {\n        display: flex;\n        justify-content: space-between;\n        width: auto;\n      }\n      .fwc-panel-restart svg {\n        width: calc(1.5 * var(--fwcu));\n        height: calc(1.5 * var(--fwcu));\n        margin-right: calc(0.5 * var(--fwcu));\n        fill: var(--color-gray-three);\n        transform: rotateZ(90deg);\n      }\n      .fwc-panel-content {\n        padding: calc(3.5 * var(--fwcu));\n        height: calc(35.5 * var(--fwcu));\n        overflow-y: auto;\n        overflow-x: hidden;\n      }\n      .hide-sm {\n        display: block;\n      }\n      .hide-lg {\n        display: none;\n      }\n      .fwc-panel-reset-wrapper {\n        display: flex;\n        align-items: center;\n      }\n      @media screen and (max-width: 900px) {\n        .fwc-panel-wrapper.open {\n          width: calc(75 * var(--fwcu));\n        }\n      }\n      @media screen and (max-width: 600px) {\n        .fwc-panel-content {\n          padding: calc(2 * var(--fwcu));\n          padding-bottom: calc(12 * var(--fwcu));\n        }\n        .fwc-panel-footer {\n          display: none;\n        }\n        .hide-sm {\n          display: none;\n        }\n        .hide-lg {\n          display: block;\n        }\n        .fwc-panel-wrapper.open {\n          position: relative;\n          top: 0;\n          border: none;\n          width: auto;\n        }\n        .fwc-panel-content {\n          height: auto;\n        }\n      }\n    "])));
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        open: {
          type: Boolean
        },
        text: {
          type: String
        },
        labelMobileHeader: {
          attribute: 'label-mobile-header',
          type: String
        },
        labelResetBtn: {
          attribute: 'label-reset-button',
          type: String
        },
        labelCancelBtn: {
          attribute: 'label-cancel-button',
          type: String
        },
        labelApplyBtn: {
          attribute: 'label-apply-button',
          type: String
        }
      };
    }
  }]);

  return FwcPanelComponent;
}(LitElement);

var FwcPanel = /*#__PURE__*/function (_FwcBase33) {
  _inherits(FwcPanel, _FwcBase33);

  var _super75 = _createSuper(FwcPanel);

  function FwcPanel() {
    _classCallCheck(this, FwcPanel);

    return _super75.call(this, 'fwc-panel', FwcPanelComponent);
  }

  return FwcPanel;
}(FwcBase);

var FwcProgressLinearComponent = /*#__PURE__*/function (_LitElement39) {
  _inherits(FwcProgressLinearComponent, _LitElement39);

  var _super76 = _createSuper(FwcProgressLinearComponent);

  function FwcProgressLinearComponent() {
    var _this97;

    _classCallCheck(this, FwcProgressLinearComponent);

    _this97 = _super76.call(this);
    _this97.steps = [];
    _this97.data = null;
    return _this97;
  }

  _createClass(FwcProgressLinearComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      if (this.data) {
        this._buildSteps();
      }
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this98 = this;

      changedProperties.forEach(function (oldValue, propName) {
        if (propName === 'data') {
          _this98._buildSteps();
        }
      });
    }
  }, {
    key: "_buildSteps",
    value: function _buildSteps() {
      var _this99 = this;

      var steps = html(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["", ""])), this.data.map(function (step) {
        return html(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["\n        <li aria-label=\"", "\">\n          <div>\n            <div class=\"check ", "\">", "</div>\n            <div class=\"connector ", "\"></div>\n          </div>\n          <dl>\n            <dt>\n              <strong>", "</strong>\n              <div>", "</div>\n            </dt>\n            <dd>\n              <span class=\"fwc-badge ", "\">\n                <span class=\"sr-only\">", "</span>\n                ", "\n              </span>\n            </dd>\n          </dl>\n        </li>\n      "])), step.state === 'success' ? 'complete' : 'incomplete', step.state === 'success' ? 'check-complete' : '', _this99._drawCheckMark(), step.state === 'success' ? 'connector-complete' : '', step.label, step.date, step.state, step.label, step.badge.replace('-', ' '));
      }));
      this.steps = steps;
    }
  }, {
    key: "_drawCheckMark",
    value: function _drawCheckMark() {
      return html(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon fill=\"#ffffff\" points=\"40.771 7 19.443 26.724 9.229 17.197 0 26.109 18.365 43.545 19.443 44.5 20.519 43.545 50 15.912\" />\n      </svg>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"/fwc-assets/styles/components/fwc-badges.css\" />\n      <ol>\n        ", "\n      </ol>\n    "])), this.steps);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["\n        :host * {\n          box-sizing: border-box;\n        }\n        dt {\n          color: var(--color-gray-one);\n        }\n        ol {\n          display: flex;\n          flex-direction: column;\n          margin: 0;\n          padding: 0;\n        }\n        li {\n          list-style: none;\n          display: flex;\n          align-items: stretch;\n        }\n        li:last-child .connector {\n          display: none;\n        }\n        li:last-child dl {\n          border: none;\n        }\n        .check {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex: 1 0 100%;\n          flex-grow: 1;\n          flex-shrink: 0;\n          flex-basis: 100%;\n          height: calc(2.5 * var(--fwcu));\n          width: calc(2.5 * var(--fwcu));\n          margin-top: calc(1.75 * var(--fwcu));\n          border-radius: 100%;\n          border: 1px solid var(--color-gray-four);\n        }\n        .check svg {\n          width: calc(1.75 * var(--fwcu));\n          height: calc(1.75 * var(--fwcu));\n          display: none;\n        }\n        .check.check-complete {\n          border: 1px solid var(--color-alert-success);\n          background: var(--color-alert-success);\n        }\n        .check.check-complete svg {\n          display: block;\n        }\n        .connector {\n          width: calc(0.25 * var(--fwcu));\n          height: calc(100% - calc(4.5 * var(--fwcu)));\n          margin: var(--fwcu) 0 var(--fwcu) calc(1.25 * var(--fwcu));\n          padding: var(--fwcu) 0;\n          background: var(--color-gray-four);\n        }\n        .connector.connector-complete {\n          background: var(--color-alert-success);\n        }\n        dl {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          flex-wrap: wrap;\n          width: 100%;\n          margin: 0 0 calc(0.75 * var(--fwcu)) calc(1.75 * var(--fwcu));\n          padding-bottom: calc(0.75 * var(--fwcu));\n          font-size: var(--default-font-size);\n          border-bottom: 1px solid var(--color-gray-four, #cccccc);\n        }\n        dt strong {\n          padding: calc(0.5 * var(--fwcu)) calc(1.5 * var(--fwcu)) calc(0.5 * var(--fwcu)) 0;\n          line-height: calc(2.25 * var(--fwcu));\n        }\n        dd {\n          margin-left: 0;\n        }\n        dd strong {\n          white-space: nowrap;\n          text-transform: uppercase;\n          color: #fff;\n          font-size: calc(1.25 * var(--fwcu));\n          border-radius: calc(0.25 * var(--fwcu));\n          line-height: 1;\n          padding: calc(0.25 * var(--fwcu)) var(--fwcu);\n          letter-spacing: 1px;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        data: {
          type: Array
        },
        steps: {
          type: Array
        }
      };
    }
  }]);

  return FwcProgressLinearComponent;
}(LitElement);

customElements.define('fwc-progress-linear', FwcProgressLinearComponent);

var FwcProgressLinear = /*#__PURE__*/function (_FwcBase34) {
  _inherits(FwcProgressLinear, _FwcBase34);

  var _super77 = _createSuper(FwcProgressLinear);

  function FwcProgressLinear() {
    _classCallCheck(this, FwcProgressLinear);

    return _super77.call(this, 'fwc-progress-linear', FwcProgressLinearComponent);
  }

  return FwcProgressLinear;
}(FwcBase);

var FwcProgressStandardComponent = /*#__PURE__*/function (_LitElement40) {
  _inherits(FwcProgressStandardComponent, _LitElement40);

  var _super78 = _createSuper(FwcProgressStandardComponent);

  function FwcProgressStandardComponent() {
    var _this100;

    _classCallCheck(this, FwcProgressStandardComponent);

    _this100 = _super78.call(this);
    _this100.type = 'horizontal';
    _this100.steps = [];
    _this100.data = null;
    return _this100;
  }

  _createClass(FwcProgressStandardComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      if (this.data) {
        this._buildSteps();
      }
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      var _this101 = this;

      changedProperties.forEach(function (oldValue, propName) {
        if (propName === 'data') {
          _this101._buildSteps();
        }
      });
    }
  }, {
    key: "_buildSteps",
    value: function _buildSteps() {
      var _this102 = this;

      var steps = html(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["", ""])), this.data.map(function (step) {
        return html(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["\n        <li aria-label=\"", "\">\n          <div class=", ">", "</div>\n          <span></span>\n          <p>", "</p>\n        </li>\n      "])), step.complete ? 'complete' : 'incomplete', step.complete ? 'complete' : '', _this102._drawCheckMark(), step.label);
      }));
      this.steps = steps;
    }
  }, {
    key: "_drawCheckMark",
    value: function _drawCheckMark() {
      return html(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon fill=\"#ffffff\" points=\"40.771 7 19.443 26.724 9.229 17.197 0 26.109 18.365 43.545 19.443 44.5 20.519 43.545 50 15.912\" />\n      </svg>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["\n      <ol class=\"", "\">\n        ", "\n      </ol>\n    "])), this.type === 'vertical' ? 'vert' : '', this.steps);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["\n        :host {\n          display: inline;\n          color: var(--color-gray-one);\n        }\n        ol {\n          margin: 0;\n          padding: 0;\n          display: flex;\n          align-items: center;\n          justify-content: flex-start;\n          font-size: var(--default-font-size);\n        }\n        li {\n          flex: 0 0 33%;\n          display: flex;\n          align-items: center;\n          position: relative;\n        }\n        li:last-child {\n          flex: 0 0 auto;\n        }\n        div {\n          height: calc(2.5 * var(--fwcu));\n          width: calc(2.5 * var(--fwcu));\n          background: white;\n          border: 1px solid var(--color-primary);\n          border-radius: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex: 0 0 auto;\n        }\n        div.complete {\n          background: var(--color-primary);\n        }\n        svg {\n          width: calc(1.5 * var(--fwcu));\n          height: calc(1.5 * var(--fwcu));\n          display: none;\n        }\n        div.complete svg {\n          display: inline;\n        }\n        span {\n          height: 2px;\n          display: block;\n          margin-left: calc(0.5 * var(--fwcu));\n          margin-right: calc(0.5 * var(--fwcu));\n          width: calc(100% - calc(3.5 * var(--fwcu)));\n          background: var(--color-primary);\n        }\n        p {\n          position: absolute;\n          text-align: center;\n          width: calc(15.5 * var(--fwcu));\n          left: calc(-6.75 * var(--fwcu)); /*  15.5/2-1 */\n          top: 100%;\n          margin: 0;\n          padding-top: var(--fwcu);\n        }\n\n        /* vertical */\n        ol.vert {\n          flex-direction: column;\n          align-items: flex-start;\n          height: 100%;\n        }\n        ol.vert span {\n          width: calc(0.25 * var(--fwcu));\n          height: calc(100% - calc(3.75 * var(--fwcu)));\n          margin: calc(0.5 * var(--fwcu)) 0;\n          margin-left: calc(1.25 * var(--fwcu));\n          /* box-sizing: content-box; */\n        }\n        ol.vert li {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-start;\n          justify-content: flex-start;\n          width: 100%;\n        }\n        ol.vert p {\n          top: 0;\n          bottom: calc(50% - calc(1.5 * var(--fwcu))); /* centers border on vertical line, not parent. Takes into account half of check circle height) */\n          padding: 0;\n          width: calc(100% - calc(3 * var(--fwcu)));\n          left: calc(4 * var(--fwcu));\n          text-align: left;\n          border-bottom: 1px solid var(--color-gray-four, #cccccc);\n        }\n        ol.vert li:last-child p {\n          border-bottom: none;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        type: {
          type: String
        },
        data: {
          type: Array
        },
        steps: {
          type: Array
        }
      };
    }
  }]);

  return FwcProgressStandardComponent;
}(LitElement);

var FwcProgressStandard = /*#__PURE__*/function (_FwcBase35) {
  _inherits(FwcProgressStandard, _FwcBase35);

  var _super79 = _createSuper(FwcProgressStandard);

  function FwcProgressStandard() {
    _classCallCheck(this, FwcProgressStandard);

    return _super79.call(this, 'fwc-progress-standard', FwcProgressStandardComponent);
  }

  return FwcProgressStandard;
}(FwcBase);

var FwcRailMessagesComponent = /*#__PURE__*/function (_LitElement41) {
  _inherits(FwcRailMessagesComponent, _LitElement41);

  var _super80 = _createSuper(FwcRailMessagesComponent);

  function FwcRailMessagesComponent() {
    var _this103;

    _classCallCheck(this, FwcRailMessagesComponent);

    _this103 = _super80.call(this);
    _this103.mobileToggle = false;
    return _this103;
  }

  _createClass(FwcRailMessagesComponent, [{
    key: "toggleMobileNav",
    value: function toggleMobileNav() {
      this.mobileToggle = !this.mobileToggle;
      var event = new CustomEvent("fwc-rail-messages-toggle", {
        detail: this,
        bubbles: true,
        mobileToggle: this.mobileToggle
      });
      this.dispatchEvent(event);
    }
    /* eslint-enable no-console */

  }, {
    key: "_svg",
    value: function _svg() {
      return html(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral([" <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n      <polygon points=\"30.784 5 27.778 8.007 41.961 22.19 0 22.19 0 26.373 41.961 26.373 27.778 40.556 30.784 43.562 48.562 25.784 50 24.281 48.562 22.778\" />\n    </svg>"])));
    }
  }, {
    key: "_closeSvg",
    value: function _closeSvg() {
      return html(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon points=\"3.523 50 0 46.477 21.477 25 0 3.523 3.523 0 25 21.477 46.477 0 50 3.523 28.523 25 50 46.477 46.477 50 25 28.523\" />\n      </svg>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["\n      <div class=\"fwc-sidebar-element ", "\">\n        <div class=\"fwc-sidebar-compose\">\n          <button class=\"fwc-nav-toggle hidden\" @click=\"", "\">\n            <span class=\"fwc-arrow-long-right\">", "</span>\n            <span class=\"sr-only\">Toggle Nav</span>\n          </button>\n        </div>\n        <div class=\"fwc-icon-wrapper\">\n          <div>\n            <slot name=\"fwc-sidebar-header\" id=\"FwcSidebarHeaderSlot\"></slot>\n            <slot name=\"fwc-sidebar-icons-list\" id=\"FwcSidebarIconsSlot\"></slot>\n          </div>\n        </div>\n      </div>\n    "])), this.mobileToggle ? 'open' : '', this.toggleMobileNav, this.mobileToggle ? this._closeSvg() : this._svg());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["\n        :host {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n        }\n        .hidden {\n          display: none;\n        }\n        .fwc-sidebar-compose {\n          width: 100%;\n          padding-bottom: calc(2 * var(--fwcu));\n        }\n        .fwc-sidebar-element {\n          padding-right: calc(2 * var(--fwcu));\n          position: absolute;\n          color: var(--color-gray-one);\n          background: var(--color-white);\n          width: calc(24 * var(--fwcu));\n          transition: width 200ms;\n          transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n          border-right: 1px solid var(--color-gray-five);\n          height: 100%;\n          left: -1px;\n          top: -1px;\n        }\n        .fwc-nav-toggle {\n          padding: 0;\n          border: none;\n          background-color: white;\n          width: 100%;\n        }\n        .fwc-nav-toggle:focus {\n          outline: none;\n        }\n        .fwc-arrow-long-right {\n          transition: transform 300ms;\n          transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n          display: inline-block;\n        }\n        .fwc-arrow-long-right svg {\n          fill: var(--color-gray-three);\n          width: calc(2 * var(--fwcu));\n          height: calc(2 * var(--fwcu));\n        }\n        @media screen and (max-width: 600px) {\n          .hidden {\n            display: inline-block;\n          }\n          .fwc-sidebar-compose {\n            padding-bottom: 0;\n            padding-top: calc(2 * var(--fwcu));\n            border: none;\n          }\n          .fwc-sidebar-element {\n            width: calc(4 * var(--fwcu));\n          }\n          .fwc-sidebar-element.open {\n            width: calc(25 * var(--fwcu));\n            z-index: 2;\n            border-radius: 0 calc(2 * var(--fwcu)) calc(2 * var(--fwcu)) 0;\n          }\n          .fwc-sidebar-element.open .fwc-nav-toggle {\n            text-align: right;\n          }\n          .open .fwc-arrow-long-right {\n            position: absolute;\n            top: 15px;\n            right: -30px;\n          }\n          .open .fwc-arrow-long-right svg {\n            fill: var(--color-white);\n          }\n          .open.fwc-sidebar-element::before {\n            content: '';\n            position: fixed;\n          }\n          .open .fwc-icon-wrapper {\n            overflow: hidden;\n          }\n          .open .fwc-icon-wrapper > div {\n            width: calc(22.5 * var(--fwcu));\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        mobileToggle: {
          type: Boolean
        }
      };
    }
  }]);

  return FwcRailMessagesComponent;
}(LitElement);

var FwcRailMessages = /*#__PURE__*/function (_FwcBase36) {
  _inherits(FwcRailMessages, _FwcBase36);

  var _super81 = _createSuper(FwcRailMessages);

  function FwcRailMessages() {
    _classCallCheck(this, FwcRailMessages);

    return _super81.call(this, 'fwc-rail-messages', FwcRailMessagesComponent);
  }

  return FwcRailMessages;
}(FwcBase);

var FwcRailTabProgressComponent = /*#__PURE__*/function (_LitElement42) {
  _inherits(FwcRailTabProgressComponent, _LitElement42);

  var _super82 = _createSuper(FwcRailTabProgressComponent);

  function FwcRailTabProgressComponent() {
    var _this104;

    _classCallCheck(this, FwcRailTabProgressComponent);

    _this104 = _super82.call(this);
    _this104.data = [];
    _this104.labelProgress = 'in progress';
    return _this104;
  }

  _createClass(FwcRailTabProgressComponent, [{
    key: "_drawCheckMark",
    value: function _drawCheckMark() {
      return html(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 50 50\" focusable=\"false\">\n        <polygon fill=\"#ffffff\" points=\"40.771 7 19.443 26.724 9.229 17.197 0 26.109 18.365 43.545 19.443 44.5 20.519 43.545 50 15.912\" />\n      </svg>\n    "])));
    }
  }, {
    key: "_onButtonClick",
    value: function _onButtonClick(rail) {
      if (rail !== this.current) {
        this.current = rail;
      }

      var event = new CustomEvent("fwc-rail-tab-clicked", {
        detail: this,
        bubbles: true
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var ele = this.data.find(function (item) {
        return item.selected;
      });
      this.current = ele && ele.id;
    }
  }, {
    key: "_buildBadge",
    value: function _buildBadge() {
      return html(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["<div class=\"fwc-badge\">", "</div>"])), this.labelProgress);
    }
  }, {
    key: "_buildTabs",
    value: function _buildTabs() {
      var _this105 = this;

      var data = html(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["", ""])), this.data.map(function (rail) {
        var selected = rail.id === _this105.current;
        return html(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["\n        <button type=\"button\" role=\"tab\" aria-setsize=\"", "\" aria-controls=\"fwc-rail-tab_", "\" aria-selected=\"", "\" aria-label=\"", "\" aria-labelledby=\"", "\" id=\"fwc-rail-tab-", "\" class=\"", " fwc-rail-tab\" @click=\"", "\">\n          <div class=\"fwc-rail-cont\">\n            <div class=\"fwc-sideLeft\">\n              <div class=\"", " fwc-status-bar\" aria-label=\"", "\">", "</div>\n            </div>\n            <div class=\"fwc-sideRight\">\n              ", "\n              <p>", "</p>\n              <p class=\"fwc-rail-title-cont\">", "</p>\n            </div>\n          </div>\n        </button>\n      "])), _this105.data.length, rail.id, selected, rail.ariaLabel ? rail.ariaLabel : '', rail.id, rail.id, selected ? 'is-active' : '', function () {
          return _this105._onButtonClick(rail.id);
        }, rail.status === 'complete' ? 'complete' : '', rail.status === 'complete' ? 'Completed' : 'Not Completed', _this105._drawCheckMark(), rail.status === 'inProgress' ? _this105._buildBadge() : '', rail.title, rail.description);
      }));
      return data;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral([" <div class=\"fwc-rail-tabs\" role=\"tablist\">", "</div> "])), this._buildTabs());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["\n        :host {\n          display: flex;\n          height: 100%;\n        }\n        .fwc-rail-tabs {\n          color: var(--color-gray-one);\n          display: flex;\n          flex: 1;\n          flex-direction: column;\n          flex: 1;\n        }\n        .fwc-rail-tab {\n          flex: 1 1 auto;\n          padding: calc(2.5 * var(--fwcu));\n          background: transparent;\n          text-decoration: none;\n          text-align: inherit;\n          cursor: pointer;\n          border: 1px solid var(--color-gray-four);\n          border-top: none;\n          position: relative;\n          color: var(--color-gray-one);\n        }\n        .fwc-rail-tab:first-of-type {\n          border-top: 1px solid var(--color-gray-four);\n        }\n        .fwc-rail-cont {\n          display: flex;\n        }\n        .fwc-rail-tab.is-active {\n          background: linear-gradient(to left, rgba(var(--color-rgb-gray-six), 0.75), var(--color-white));\n          font-weight: bold;\n        }\n        .fwc-rail-tab.is-active::after {\n          content: '';\n          border-left: calc(0.625 * var(--fwcu)) solid var(--color-primary);\n          width: calc(0.625 * var(--fwcu));\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 100%;\n        }\n        .fwc-rail-tab:hover {\n          background: linear-gradient(to left, rgba(var(--color-rgb-gray-six), 0.75), var(--color-white));\n        }\n        .fwc-rail-tab:hover::after {\n          content: '';\n          border-left: calc(0.25 * var(--fwcu)) solid var(--color-primary);\n          width: calc(0.25 * var(--fwcu));\n          position: absolute;\n          top: 0;\n          left: 0;\n          height: 100%;\n        }\n        .fwc-status-bar {\n          height: calc(2.5 * var(--fwcu));\n          width: calc(2.5 * var(--fwcu));\n          background: var(--color-white);\n          border: 1px solid var(--color-primary);\n          border-radius: 100%;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex: 0 0 auto;\n        }\n        .fwc-status-bar.complete {\n          background: var(--color-primary);\n        }\n        svg {\n          width: calc(1.5 * var(--fwcu));\n          height: calc(1.5 * var(--fwcu));\n          display: none;\n        }\n        .fwc-status-bar.complete svg {\n          display: inline;\n        }\n        .fwc-sideLeft {\n          padding-right: calc(2 * var(--fwcu));\n        }\n        .fwc-sideRight p {\n          margin: 0 0 calc(0.5 * var(--fwcu)) 0;\n          font-size: var(--default-font-size);\n          line-height: calc(2.75 * var(--fwcu));\n        }\n        .fwc-badge {\n          display: inline-block;\n          min-width: calc(1.25 * var(--fwcu));\n          padding: calc(0.5 * var(--fwcu)) calc(1 * var(--fwcu));\n          font-weight: bold;\n          color: var(--color-white);\n          vertical-align: middle;\n          white-space: nowrap;\n          text-align: center;\n          background-color: var(--color-primary);\n          border-radius: calc(0.25 * var(--fwcu));\n          font-weight: 700;\n          text-transform: uppercase;\n          font-size: calc(1.25 * var(--fwcu));\n          margin-bottom: calc(1 * var(--fwcu));\n        }\n        @media (max-width: 600px) {\n          .fwc-rail-tabs {\n            margin-bottom: calc(2 * var(--fwcu));\n          }\n        }\n      "])))];
    } // TODO: Aria live / region, ets

  }, {
    key: "properties",
    get: function get() {
      return {
        data: {
          type: Array
        },
        current: {
          type: String
        },
        labelProgress: {
          attribute: 'label-progress',
          type: String
        }
      };
    }
  }]);

  return FwcRailTabProgressComponent;
}(LitElement);

var FwcRailTabProgress = /*#__PURE__*/function (_FwcBase37) {
  _inherits(FwcRailTabProgress, _FwcBase37);

  var _super83 = _createSuper(FwcRailTabProgress);

  function FwcRailTabProgress() {
    _classCallCheck(this, FwcRailTabProgress);

    return _super83.call(this, 'fwc-rail-tab-progress', FwcRailTabProgressComponent);
  }

  return FwcRailTabProgress;
}(FwcBase);

var FwcScrubberComponent = /*#__PURE__*/function (_LitElement43) {
  _inherits(FwcScrubberComponent, _LitElement43);

  var _super84 = _createSuper(FwcScrubberComponent);

  function FwcScrubberComponent() {
    var _this106;

    _classCallCheck(this, FwcScrubberComponent);

    _this106 = _super84.call(this);
    _this106.SCALE_MIN = 0;
    _this106.SCALE_MAX = 100;
    _this106.isPercent = false; // the scale values are in relation to %, 0 to 100% of the bar
    // we adjust these based on the custom range in initValues()

    _this106.minScale = _this106.SCALE_MIN;
    _this106.maxScale = _this106.SCALE_MAX; // the adjusted values are used to display the adjusted value for a custom range other than 0 - 100
    // we are not changing the scale, just the numbers that are displayed/output

    _this106.displayMinValue = _this106.SCALE_MIN;
    _this106.displayMaxValue = _this106.SCALE_MAX; // active property true on mousedown and false on mouseup

    _this106.isLeftChipActive = false;
    _this106.isRightChipActive = false; // total width of slider bar in px

    _this106.totalWidth; // distance between slider bar and left edge of document

    _this106.offSetLeft; //the last chip/handle that was used, used to position chips on top off each other

    _this106.lastActive = null;
    _this106.rangeMinimum;
    _this106.rangeMaximum;
    _this106.stepSize = 1;
    _this106.hasSingleChip = false;
    _this106.hasValidInputs = true;
    _this106.isScaleHidden = false;
    _this106.elementRef = '';
    _this106.barContainerRef = '';
    _this106.isDragging = false;
    _this106.rangeLabel = '';
    _this106.screenReaderCaption = '';
    _this106.hideHandleLabel = false;
    _this106.dataAnalyticsMin = '';
    _this106.hideRangeLabel = false;
    _this106.dataAnalyticsMax = '';
    return _this106;
  }

  _createClass(FwcScrubberComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.initDragging();
      this.setWidthProperties = this.setWidthProperties.bind(this);
      window.addEventListener('resize', this.setWidthProperties);
      this.elementRef = this;
      this.barContainerRef = this.shadowRoot.querySelector('.fwc-scrubber-barContainer');
      this.initValues();
      this.validateInputs();

      if (this.hasValidInputs) {
        this.isScaleHidden = false;
        this.initOptions();
        this.setWidthProperties();
      } else {
        this.isScaleHidden = true;
      }
    }
  }, {
    key: "initDragging",
    value: function initDragging() {
      var _this107 = this;

      var leftChip = this.shadowRoot.querySelector('.fwc-left-chip') || null;
      var rightChip = this.shadowRoot.querySelector('.fwc-right-chip') || null;
      var isDraggingLeftChip = false;
      var isDraggingRightChip = false;
      this.addEventListener('mousedown', function (e) {
        isDraggingLeftChip = e.composedPath().some(function (path) {
          return path === leftChip;
        });
        isDraggingRightChip = e.composedPath().some(function (path) {
          return path === rightChip;
        });

        if (isDraggingLeftChip || isDraggingRightChip) {
          _this107.isDragging = true;
        }
      });
      this.addEventListener('touchstart', function (e) {
        // https://stackoverflow.com/questions/7056026/variation-of-e-touches-e-targettouches-and-e-changedtouches
        if (e.changedTouches && e.changedTouches.length == 1) {
          isDraggingLeftChip = e.composedPath().some(function (path) {
            return path === leftChip;
          });
          isDraggingRightChip = e.composedPath().some(function (path) {
            return path === rightChip;
          });

          if (isDraggingLeftChip || isDraggingRightChip) {
            _this107.isDragging = true;
          }
        }
      });
      this.addEventListener('mousemove', function (e) {
        if (_this107.isDragging && (isDraggingLeftChip || isDraggingRightChip)) {
          _this107.handleChipMove(e, isDraggingLeftChip ? 'min' : 'max');
        }
      });
      this.addEventListener('touchmove', function (e) {
        if (e.changedTouches && e.changedTouches.length == 1) {
          if (_this107.isDragging && (isDraggingLeftChip || isDraggingRightChip)) {
            e.preventDefault();

            _this107.handleChipMove(e, isDraggingLeftChip ? 'min' : 'max');
          }
        }
      }, {
        passive: false
      });
      this.addEventListener('mouseup', function () {
        _this107.isDragging = false;

        if (isDraggingLeftChip || isDraggingRightChip) {
          _this107.dispatchChipPositions();
        }

        isDraggingLeftChip = false;
        isDraggingRightChip = false;
      });
      this.addEventListener('touchend', function (e) {
        if (e.changedTouches && e.changedTouches.length == 1) {
          _this107.isDragging = false;

          if (isDraggingLeftChip || isDraggingRightChip) {
            _this107.dispatchChipPositions();
          }

          isDraggingLeftChip = false;
          isDraggingRightChip = false;
        }
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this.setWidthProperties);

      _get(_getPrototypeOf(FwcScrubberComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "initValues",
    value: function initValues() {
      this.leftChipValue = this.leftChipValue !== undefined ? parseInt(this.leftChipValue) : undefined;
      this.rightChipValue = this.rightChipValue !== undefined ? parseInt(this.rightChipValue) : undefined; // allows for custom range other than 0 - 100

      this.rangeMinimum = this.range ? this.range[0] : this.SCALE_MIN;
      this.rangeMaximum = this.range ? this.range[1] : this.SCALE_MAX; //hide the min chip if no value is passed

      this.hasSingleChip = this.leftChipValue === undefined; // the min and max values set by the project, will default to 0 and 100

      this.leftChipValue = this.leftChipValue !== undefined || null ? this.leftChipValue : this.rangeMinimum;
      this.rightChipValue = this.rightChipValue !== undefined ? this.rightChipValue : this.rangeMaximum; // the base values are used to keep the slider scale from 0 - 100

      this.minScale = (this.leftChipValue - this.rangeMinimum) / (this.rangeMaximum - this.rangeMinimum) * 100;
      this.maxScale = (this.rightChipValue - this.rangeMinimum) / (this.rangeMaximum - this.rangeMinimum) * 100; // Move Chip in stepSize increments;

      this.stepSize = 100 / (this.rangeMaximum - this.rangeMinimum);
      this.setDisplayValues();
    }
  }, {
    key: "initOptions",
    value: function initOptions() {
      // set fieldset legend caption for screen readers
      this.screenReaderCaption = this.screenReaderCaption ? this.screenReaderCaption : 'use arrow keys to set minimum and maximum slider values'; // set data-analytics attributes

      this.dataAnalyticsMin = this.dataAnalyticsMin || '';
      this.dataAnalyticsMax = this.dataAnalyticsMax || ''; // set aria-ariaLabelledby attribute

      this.labelAriaLabelledby = this.labelAriaLabelledby || '';
    } // DOM event handlers

  }, {
    key: "handleChipMove",
    value: function handleChipMove(e, chip) {
      var val = chip === 'min' ? 'minScale' : 'maxScale';
      var valActive = chip === 'min' ? 'isLeftChipActive' : 'isRightChipActive';
      var valActiveAlt = chip === 'min' ? 'isRightChipActive' : 'isLeftChipActive';
      this.lastActive = chip;
      this.offSetLeft = this.calculateOffset(this.elementRef);

      if (this.isDragging) {
        this[valActive] = true;
        this[valActiveAlt] = false;
        var offsetInPixels;

        if (e.type === 'touchmove') {
          offsetInPixels = e.changedTouches[0].pageX - this.offSetLeft;
        } else {
          offsetInPixels = e.clientX - this.offSetLeft;
        }

        var offsetPercentage = offsetInPixels / this.totalWidth * 100;

        if (this.canMove(offsetPercentage)) {
          this[val] = offsetPercentage;
        } else {
          this.handleChipOverlap(offsetPercentage, chip);
          this.handleChipRangeEnds(offsetPercentage, chip);
        }

        this.setDisplayValues();
        this.requestUpdate();
      }
    }
  }, {
    key: "handleChipOverlap",
    value: function handleChipOverlap(offsetPercentage, chip) {
      //lay the chips on top off each other when you drag past the other chip
      if (chip === 'min') {
        this.minScale = offsetPercentage > this.minScale ? this.maxScale : this.minScale;
      } else {
        this.maxScale = offsetPercentage < this.maxScale ? this.minScale : this.maxScale;
      }
    }
  }, {
    key: "handleChipRangeEnds",
    value: function handleChipRangeEnds(offsetPercentage, chip) {
      // position chip to very end of range if you drag outside the range/component/page
      var val = chip === 'min' ? 'minScale' : 'maxScale';
      var valAlt = chip === 'min' ? 'maxScale' : 'minScale';

      if (offsetPercentage >= 100 && this[val] > this[valAlt]) {
        this[val] = this.SCALE_MAX;
      }

      if (offsetPercentage <= 0 && this[val] < this[valAlt]) {
        this[val] = this.SCALE_MIN;
      }
    }
  }, {
    key: "handleSliderKey",
    value: function handleSliderKey(e, chip) {
      //keyboard interaction to move the slider
      var val = chip === 'min' ? 'minScale' : 'maxScale';
      var valAlt = chip === 'min' ? 'maxScale' : 'minScale';
      var valActive = chip === 'min' ? 'isLeftChipActive' : 'isRightChipActive';
      var valActiveAlt = chip === 'min' ? 'isRightChipActive' : 'isLeftChipActive';
      var newPos = 0;
      this[valActive] = true;
      this[valActiveAlt] = false;
      this.lastActive = chip;

      switch (e.key) {
        case 'Left': // IE/Edge specific value

        case 'ArrowLeft':
        case 'Down': // IE/Edge specific value

        case 'ArrowDown':
          newPos = Math.round((this[val] - this.stepSize) * 100 / 100);

          if (this.canMove(newPos) && newPos >= this.SCALE_MIN) {
            this[val] -= this.stepSize;
            this.setDisplayValues();
          }

          e.preventDefault();
          break;

        case 'Right': // IE/Edge specific value

        case 'ArrowRight':
        case 'Up': // IE/Edge specific value

        case 'ArrowUp':
          newPos = Math.round((this[val] + this.stepSize) * 100 / 100);

          if (this.canMove(newPos) && newPos <= this.SCALE_MAX) {
            this[val] += this.stepSize;
            this.setDisplayValues();
          }

          e.preventDefault();
          break;

        case 'Home':
          if (this.hasSingleChip || chip === 'min') {
            this[val] = this.SCALE_MIN;
          }

          if (chip === 'max') {
            this[val] = this.canMove(this.SCALE_MIN) ? this.SCALE_MIN : this[valAlt];
          }

          this.setDisplayValues();
          e.preventDefault();
          break;

        case 'End':
          if (this.hasSingleChip || chip === 'max') {
            this[val] = this.SCALE_MAX;
          }

          if (chip === 'min') {
            this[val] = this.canMove(this.SCALE_MAX) ? this.SCALE_MAX : this[valAlt];
          }

          this.setDisplayValues();
          e.preventDefault();
          break;

        case 'PageUp':
          newPos = Math.round((this[val] + this.stepSize * 10) * 100 / 100);

          if (chip === 'min') {
            this[val] = this.canMove(newPos) ? this[val] + this.stepSize * 10 : this[valAlt];
          } else {
            this[val] = this.canMove(newPos) ? this[val] + this.stepSize * 10 : this.SCALE_MAX;
          }

          this.setDisplayValues();
          e.preventDefault();
          break;

        case 'PageDown':
          newPos = Math.round((this[val] - this.stepSize * 10) * 100 / 100);

          if (chip === 'max') {
            this[val] = this.canMove(newPos) ? this[val] - this.stepSize * 10 : this[valAlt];
          } else {
            this[val] = this.canMove(newPos) ? this[val] - this.stepSize * 10 : this.SCALE_MIN;
          }

          this.setDisplayValues();
          e.preventDefault();
          break;
      }

      this.dispatchChipPositions();
    }
  }, {
    key: "canMove",
    value: function canMove(newPos) {
      var canMove = true; //only one chip handler active

      if (this.hasSingleChip) {
        canMove = newPos >= this.SCALE_MIN && newPos <= this.SCALE_MAX;
        return canMove;
      } //if 2 chip handlers are active


      if (this.isLeftChipActive) {
        canMove = newPos >= this.SCALE_MIN && newPos <= this.maxScale;
      } else {
        canMove = newPos <= this.SCALE_MAX && newPos >= this.minScale;
      }

      return canMove;
    }
  }, {
    key: "setWidthProperties",
    value: function setWidthProperties() {
      this.totalWidth = this.barContainerRef && this.barContainerRef.clientWidth;
    }
  }, {
    key: "setDisplayValues",
    value: function setDisplayValues() {
      var range = this.rangeMaximum - this.rangeMinimum;

      if (this.isPercent) {
        this.displayMinValue = Math.round(this.minScale);
        this.displayMaxValue = Math.round(this.maxScale);
      } else {
        this.displayMinValue = Math.round(this.minScale * range / 100 + this.rangeMinimum);
        this.displayMaxValue = Math.round(this.maxScale * range / 100 + this.rangeMinimum);
      }

      this.requestUpdate();
    }
  }, {
    key: "dispatchChipPositions",
    value: function dispatchChipPositions() {
      this.dispatchEvent(new CustomEvent('fwc-scrubber-values', {
        detail: {
          min: this.displayMinValue,
          max: this.displayMaxValue
        },
        bubbles: true,
        displayMinValue: this.displayMinValue
      }));
    }
  }, {
    key: "updateChip",
    value: function updateChip(activeChip) {
      if (activeChip === 'leftChip') {
        this.isLeftChipActive = false;
      } else {
        this.isRightChipActive = false;
      }

      this.requestUpdate();
    }
  }, {
    key: "setFocus",
    value: function setFocus(e) {
      setTimeout(function () {
        e && e.target && e.target.focus();
      }, 0);
    }
  }, {
    key: "calculateOffset",
    value: function calculateOffset(elementRef) {
      var rect = elementRef.getBoundingClientRect();
      return rect.left;
    }
  }, {
    key: "handleRangeClick",
    value: function handleRangeClick(e) {
      //clicks inside of range bar
      this.offSetLeft = this.calculateOffset(this.elementRef);
      var offsetInPixels = e.clientX - this.offSetLeft;
      var offsetPercentage = offsetInPixels / this.totalWidth * 100;

      if (Math.abs(offsetPercentage - this.minScale) < Math.abs(offsetPercentage - this.maxScale) && !this.hasSingleChip) {
        this.minScale = offsetPercentage;
      } else {
        this.maxScale = offsetPercentage;
      }

      this.setDisplayValues();
      this.dispatchChipPositions();
    }
  }, {
    key: "handleBarClick",
    value: function handleBarClick(e) {
      //clicks outside of range bar
      this.offSetLeft = this.calculateOffset(this.elementRef);
      var offsetInPixels = e.clientX - this.offSetLeft;
      var offsetPercentage = offsetInPixels / this.totalWidth * 100;

      if (offsetPercentage < this.minScale && !this.hasSingleChip) {
        this.minScale = offsetPercentage;
      } else {
        this.maxScale = offsetPercentage;
      }

      this.setDisplayValues();
      this.dispatchChipPositions();
    }
    /* eslint-disable no-console */

  }, {
    key: "validateInputs",
    value: function validateInputs() {
      var isLeftChipNaN = isNaN(parseInt(this.leftChipValue));
      var isRightChipNaN = isNaN(parseInt(this.rightChipValue)); // checks if range is in correct tuple (min, max) format;

      try {
        if (this.rangeMinimum > this.rangeMaximum) {
          this.hasValidInputs = false;
          throw new Error("Range minimum (".concat(this.rangeMinimum, ") must be less than range maximum (").concat(this.rangeMaximum, ") \n\n          Did you mean [").concat(this.rangeMaximum, ", ").concat(this.rangeMinimum, "]?\n          "));
        }
      } catch (error) {
        console.error(error);
        return;
      } // checks if left chip value is a number


      try {
        if (isLeftChipNaN) {
          this.hasValidInputs = false;
          throw new Error('Invalid type given for left chip value.');
        }
      } catch (error) {
        console.error(error);
        return;
      } // checks if right chip value is a number


      try {
        if (isRightChipNaN) {
          this.hasValidInputs = false;
          throw new Error('Invalid type given for right chip value.');
        }
      } catch (error) {
        console.error(error);
        return;
      } // checks if left chip start val is within the specified range


      try {
        if (this.leftChipValue < this.rangeMinimum || this.leftChipValue > this.rangeMaximum) {
          this.hasValidInputs = false;
          throw new Error("Left chip start value (".concat(this.leftChipValue, ") must be within range (").concat(this.rangeMinimum, " ~ ").concat(this.rangeMaximum, ")."));
        }
      } catch (error) {
        console.error(error);
      } // checks if left chip start val is less than right chip start val


      try {
        if (this.leftChipValue > this.rightChipValue) {
          this.hasValidInputs = false;
          throw new Error("Left chip value (".concat(this.leftChipValue, ") needs to be less than right chip start value (").concat(this.rightChipValue, ")."));
        }
      } catch (error) {
        console.error(error);
        return;
      } // checks if right chip start val is greater than left chip start val


      try {
        if (this.rightChipValue < this.leftChipValue) {
          this.hasValidInputs = false;
          throw new Error("Right chip value (".concat(this.rightChipValue, ") needs to be greater than left chip start value (").concat(this.leftChipValue, ")."));
        }
      } catch (error) {
        console.error(error);
      } // checks if right chip start val is within  the specified range


      try {
        if (this.rightChipValue > this.rangeMaximum || this.rightChipValue < this.rangeMinimum) {
          this.hasValidInputs = false;
          throw new Error("Right chip start value (".concat(this.rightChipValue, ") must be within range (").concat(this.rangeMinimum, " ~ ").concat(this.rangeMaximum, ")."));
        }
      } catch (error) {
        console.error(error);
      }
    }
    /* eslint-enable no-console */

  }, {
    key: "_drawChipSvg",
    value: function _drawChipSvg() {
      return html(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["\n      <svg focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" focusable=\"false\">\n        <path d=\"M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M16,7 C14.9456382,7 14.0818349,7.81587779 14.0054857,8.85073766 L14,9 L14,24 C14,25.1045695 14.8954305,26 16,26 C17.0543618,26 17.9181651,25.1841222 17.9945143,24.1492623 L18,24 L18,9 C18,7.8954305 17.1045695,7 16,7 Z M8,11 C6.9456382,11 6.08183488,11.8158778 6.00548574,12.8507377 L6,13 L6,20 C6,21.1045695 6.8954305,22 8,22 C9.0543618,22 9.91816512,21.1841222 9.99451426,20.1492623 L10,20 L10,13 C10,11.8954305 9.1045695,11 8,11 Z M24,11 C22.9456382,11 22.0818349,11.8158778 22.0054857,12.8507377 L22,13 L22,20 C22,21.1045695 22.8954305,22 24,22 C25.0543618,22 25.9181651,21.1841222 25.9945143,20.1492623 L26,20 L26,13 C26,11.8954305 25.1045695,11 24,11 Z\" />\n      </svg>\n    "])));
    }
  }, {
    key: "render",
    value: function render() {
      var _this108 = this;

      return html(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["\n      <div class=\"fwc-scrubber-wrapper ", "\">\n        <fieldset>\n          <legend class=\"sr-only\">", "</legend>\n\n          <div class=\"fwc-scrubber-slider-wrapper\">\n            <div class=\"fwc-scrubber-barContainer\" #barContainerRef>\n              <div class=\"fwc-scrubber-bar\" @click=\"", "\"></div>\n              <div class=\"fwc-scrubber-range\" @click=\"", "\" style=\"left: ", "%; right:", "% \"></div>\n            </div>\n\n            <div role=\"slider\" tabindex=\"0\" style=\"left: ", "%\" class=\"fwc-left-chip fwc-scrubber-chip min ", " ", " ", "\" @keydown=\"", "\" @blur=\"", "\" @focusout=\"", "\" @mousedown=\"", "\" aria-valuemax=\"", "\" aria-valuemin=\"", "\" aria-valueNow=\"", "\" aria-disabled=\"", "\" aria-valueText=\"", "\" aria-labelledBy=\"", "\" data-analytics=\"", "\" aria-orientation=\"horizontal\">\n              ", "\n              <span class=\"fwc-arrow-box ", "\" role=\"presentation\">\n                <span class=\"left-chip-val\">", "</span>\n                ", "\n              </span>\n            </div>\n\n            <div role=\"slider\" tabindex=\"0\" style=\"left: ", "%\" class=\"fwc-right-chip fwc-scrubber-chip max ", " ", "\" @keydown=\"", "\" @blur=\"", "\" @focusout=\"", "\" @mousedown=\"", "\" aria-valuemax=\"", "\" aria-valuemin=\"", "\" aria-valueNow=\"", "\" aria-disabled=\"false\" aria-valueText=\"", "\" aria-labelledBy=\"", "\" data-analytics=\"", "\" aria-orientation=\"horizontal\">\n              ", "\n              <span class=\"fwc-arrow-box ", "\" role=\"presentation\">\n                <span class=\"right-chip-val\">", "</span>\n                ", "\n              </span>\n            </div>\n          </div>\n\n          <div class=\"fwc-scrubber-range-labels ", "\">\n            <span class=\"min\">", " ", "</span>\n            <span class=\"max\">", " ", "</span>\n          </div>\n        </fieldset>\n      </div>\n    "])), this.isScaleHidden && 'hide', this.screenReaderCaption, function (event) {
        return _this108.handleBarClick(event);
      }, function (event) {
        return _this108.handleRangeClick(event);
      }, this.minScale, 100 - this.maxScale, this.minScale, this.hasSingleChip ? 'hide' : '', this.isLeftChipActive ? 'active' : '', this.lastActive === 'min' ? 'last-active' : '', function (event) {
        return _this108.handleSliderKey(event, 'min');
      }, function () {
        return _this108.updateChip('leftChip');
      }, function () {
        return _this108.updateChip('leftChip');
      }, function (event) {
        return _this108.setFocus(event);
      }, this.rangeMaximum, this.rangeMinimum, this.displayMinValue, this.hasSingleChip, this.isPercent ? this.displayMinValue + ' Percent' : this.displayMinValue, this.labelAriaLabelledby, this.dataAnalyticsMin, this._drawChipSvg(), this.hideHandleLabel ? 'hide' : '', this.displayMinValue, this.isPercent ? html(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["%"]))) : '', this.maxScale, this.isRightChipActive ? 'active' : '', this.lastActive === 'max' ? 'last-active' : '', function (event) {
        return _this108.handleSliderKey(event, 'max');
      }, function () {
        return _this108.updateChip('rightChip');
      }, function () {
        return _this108.updateChip('rightChip');
      }, function (event) {
        return _this108.setFocus(event);
      }, this.rangeMaximum, this.rangeMinimum, this.displayMaxValue, this.isPercent ? this.displayMaxValue + ' Percent' : this.displayMaxValue, this.labelAriaLabelledby, this.dataAnalyticsMax, this._drawChipSvg(), this.hideHandleLabel ? 'hide' : '', this.displayMaxValue, this.isPercent ? html(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["%"]))) : '', this.hideRangeLabel ? 'hide' : '', this.rangeMinimum, this.rangeLabel, this.rangeMaximum, this.rangeLabel);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["\n        .fwc-scrubber-wrapper {\n          padding: 0 calc(1 * var(--fwcu)) calc(8 * var(--fwcu)) calc(1 * var(--fwcu));\n          display: block;\n          width: 100%;\n        }\n        fieldset {\n          padding: 0;\n          margin: 0;\n          border: 0;\n          min-width: 0;\n        }\n        .fwc-scrubber-slider-wrapper {\n          height: calc(4 * var(--fwcu));\n          position: relative;\n          transition: all 250ms ease;\n        }\n        .fwc-scrubber-chip {\n          height: calc(4 * var(--fwcu));\n          width: calc(4 * var(--fwcu));\n          border-radius: 50%;\n          position: absolute;\n          top: 3px;\n          padding: 0;\n          margin: 0;\n          box-shadow: var(--box-shadow);\n          border: 1px solid transparent;\n          appearance: none;\n          margin-left: calc(-2 * var(--fwcu));\n          overflow: visible;\n          cursor: grab;\n          cursor: -webkit-grab;\n          background-color: var(--color-gray-four);\n        }\n        .fwc-scrubber-chip.last-active {\n          z-index: 10;\n        }\n        .fwc-scrubber-chip.active {\n          cursor: grabbing;\n          cursor: -webkit-grabbing;\n          z-index: 10;\n        }\n        .fwc-scrubber-chip:focus {\n          border: 1px solid var(--color-primary);\n          outline: none;\n          box-shadow: none;\n        }\n        .fwc-scrubber-chip.pass-through {\n          pointer-events: none;\n        }\n        .fwc-scrubber-bar {\n          position: absolute;\n          border-radius: calc(0.5 * var(--fwcu));\n          border-bottom: calc(1.25 * var(--fwcu)) solid var(--color-gray-five);\n          top: calc(2 * var(--fwcu));\n          width: 100%;\n        }\n        .fwc-scrubber-range {\n          position: absolute;\n          top: calc(2 * var(--fwcu));\n          background-color: var(--color-primary);\n          border-radius: calc(0.5 * var(--fwcu));\n          height: calc(1.25 * var(--fwcu));\n        }\n        .fwc-scrubber-range-labels {\n          display: flex;\n          justify-content: space-between;\n          font-size: calc(1.75 * var(--fwcu));\n          color: var(--color-gray-one);\n          margin-top: calc(3 * var(--fwcu));\n        }\n        .fwc-scrubber-wrapper.hide,\n        .fwc-scrubber-wrapper .hide {\n          display: none;\n        }\n        .fwc-arrow-box {\n          position: absolute;\n          top: calc(-9.25 * var(--fwcu));\n          left: calc(-2.5 * var(--fwcu));\n          background: var(--color-white);\n          border: 1px solid var(--color-primary);\n          padding: calc(0.75 * var(--fwcu));\n          min-width: calc(8.75 * var(--fwcu));\n          height: calc(6.75 * var(--fwcu));\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-size: calc(2.25 * var(--fwcu));\n          color: var(--color-gray-one);\n        }\n        .fwc-arrow-box:after,\n        .fwc-arrow-box:before {\n          top: 100%;\n          left: 50%;\n          border: solid transparent;\n          content: ' ';\n          height: 0;\n          width: 0;\n          position: absolute;\n          pointer-events: none;\n        }\n        .fwc-arrow-box:after {\n          border-color: transparent;\n          border-top-color: var(--color-white);\n          border-width: calc(1.25 * var(--fwcu));\n          margin-left: calc(-1.25 * var(--fwcu));\n        }\n        .fwc-arrow-box:before {\n          border-color: transparent;\n          border-top-color: var(--color-primary);\n          border-width: calc(1.375 * var(--fwcu));\n          margin-left: calc(-1.375 * var(--fwcu));\n        }\n        svg {\n          fill: var(--color-white);\n          position: absolute;\n          width: 100%;\n          top: -1px;\n          left: 0px;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        isPercent: {
          attribute: 'is-percent',
          type: Boolean
        },
        hideHandleLabel: {
          attribute: 'hide-handle-label',
          type: Boolean
        },
        range: {
          type: Array
        },
        rangeLabel: {
          attribute: 'range-label',
          type: String
        },
        leftChipValue: {
          attribute: 'left-chip',
          type: Number
        },
        rightChipValue: {
          attribute: 'right-chip',
          type: Number
        },
        screenReaderCaption: {
          attribute: 'screen-reader-caption',
          type: String
        },
        dataAnalyticsMin: {
          attribute: 'data-analytics-min',
          type: String
        },
        dataAnalyticsMax: {
          attribute: 'data-analytics-max',
          type: String
        },
        hideRangeLabel: {
          attribute: 'hide-range-label',
          type: Boolean
        },
        labelAriaLabelledby: {
          attribute: 'label-aria-labelledby',
          type: String
        }
      };
    }
  }]);

  return FwcScrubberComponent;
}(LitElement);

var FwcScrubber = /*#__PURE__*/function (_FwcBase38) {
  _inherits(FwcScrubber, _FwcBase38);

  var _super85 = _createSuper(FwcScrubber);

  function FwcScrubber() {
    _classCallCheck(this, FwcScrubber);

    return _super85.call(this, 'fwc-scrubber', FwcScrubberComponent);
  }

  return FwcScrubber;
}(FwcBase);

var FwcTabsComponent = /*#__PURE__*/function (_LitElement44) {
  _inherits(FwcTabsComponent, _LitElement44);

  var _super86 = _createSuper(FwcTabsComponent);

  function FwcTabsComponent() {
    var _this109;

    _classCallCheck(this, FwcTabsComponent);

    _this109 = _super86.call(this);
    _this109.tabs = [];
    return _this109;
  } // TODO: Broadcast tab change event


  _createClass(FwcTabsComponent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.current = this.tabs[0].title;
    }
  }, {
    key: "_onButtonClick",
    value: function _onButtonClick(tab) {
      if (tab.title !== this.current) {
        this.current = tab.title;
      }
    }
  }, {
    key: "_buildSlots",
    value: function _buildSlots() {
      var _this110 = this;

      var slots = html(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["", ""])), this.tabs.map(function (slot) {
        return html(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["\n        <div class=\"slot-container ", "\">\n          <slot aria-labelledby=\"fwcTabBtn_", "\" role=\"tabpanel\" id=\"fwcTabBody_", "\" name=\"fwc-tab-", "\"></slot>\n        </div>\n      "])), slot.title === _this110.current ? 'selected' : '', slot.title, slot.title, slot.title);
      }));
      return slots;
    }
  }, {
    key: "_buildTabs",
    value: function _buildTabs() {
      var _this111 = this;

      var tabs = html(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["", ""])), this.tabs.map(function (tab) {
        var selected = tab.title === _this111.current;
        var title = tab.title.replace(/-/g, ' ');
        return html(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral([" <button id=\"fwcTabBtn_", "\" type=\"button\" role=\"tab\" aria-setsize=\"", "\" aria-selected=\"", "\" aria-controls=\"fwcTabBody_", "\" aria-label=\"", "\" class=\"", "\" @click=\"", "\">", "</button> "])), tab.title, _this111.tabs.length, selected, tab.title, tab.title, selected ? 'selected' : '', function () {
          return _this111._onButtonClick(tab);
        }, title);
      }));
      return tabs;
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["\n      <div role=\"tablist\" aria-label=\"", "\">", "</div>\n      <section>", "</section>\n    "])), this.labelAriaTabList, this._buildTabs(), this._buildSlots());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["\n        .slot-container {\n          display: none;\n        }\n        .slot-container.selected {\n          display: block;\n        }\n        :host > div {\n          display: flex;\n          align-items: stretch;\n          justify-content: flex-start;\n        }\n        section {\n          padding: calc(1.25 * var(--fwcu));\n          padding-top: calc(2.75 * var(--fwcu));\n        }\n        button {\n          flex: 1 1 auto;\n          background: white;\n          color: var(--color-primary);\n          border: 1px solid var(--color-primary);\n          padding: calc(1.5 * var(--fwcu)) var(--fwcu);\n          border-right: none;\n          margin: 0;\n          border-radius: 0;\n          cursor: pointer;\n          position: relative;\n          font-family: var(--font-sans-serif);\n          font-size: calc(2 * var(--fwcu));\n          font-weight: 600;\n        }\n        button:first-child {\n          border-top-left-radius: var(--border-radius);\n          border-bottom-left-radius: var(--border-radius);\n        }\n        button:last-child {\n          border-right: 1px solid var(--color-primary);\n          border-top-right-radius: var(--border-radius);\n          border-bottom-right-radius: var(--border-radius);\n        }\n        button.selected {\n          background: var(--color-primary);\n          color: white;\n        }\n        button:hover:not(.selected) {\n          background-image: linear-gradient(180deg, rgba(var(--color-rgb-black), 0), rgba(var(--color-rgb-black), 0.2)), linear-gradient(180deg, var(--color-primary), var(--color-primary));\n          color: white;\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        tabs: {
          type: Array
        },
        current: {
          type: String
        },
        labelAriaTabList: {
          attribute: 'label-aria-tab-list',
          type: String
        }
      };
    }
  }]);

  return FwcTabsComponent;
}(LitElement);

var FwcTabs = /*#__PURE__*/function (_FwcBase39) {
  _inherits(FwcTabs, _FwcBase39);

  var _super87 = _createSuper(FwcTabs);

  function FwcTabs() {
    _classCallCheck(this, FwcTabs);

    return _super87.call(this, 'fwc-tabs', FwcTabsComponent);
  }

  return FwcTabs;
}(FwcBase);

var FwcTimelineComponent = /*#__PURE__*/function (_LitElement45) {
  _inherits(FwcTimelineComponent, _LitElement45);

  var _super88 = _createSuper(FwcTimelineComponent);

  function FwcTimelineComponent() {
    var _this112;

    _classCallCheck(this, FwcTimelineComponent);

    _this112 = _super88.call(this);
    _this112.milestones = [];
    _this112.vertical = false;
    _this112.title = 'milestones';
    _this112.urgent = false;
    _this112.labelIncomplete = 'incomplete';
    _this112.labelComplete = 'complete';
    return _this112;
  }

  _createClass(FwcTimelineComponent, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {
      _get(_getPrototypeOf(FwcTimelineComponent.prototype), "attributeChangedCallback", this).call(this, name, oldVal, newVal);

      if (name === 'milestones' && oldVal !== newVal) {
        this._renderMilestones();
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      this._animateItems();
    }
  }, {
    key: "_renderMilestones",
    value: function _renderMilestones() {
      var _this113 = this;

      var count = this.milestones.length - 1;
      var percent = 100 / count;
      var Info = this.milestones.map(function (info, i) {
        var iStyle = {
          // have to hard code pixels here for ie11: 9.5*fwcu = 76-1 = 75px
          left: "calc(".concat(i * percent, "% - 75px)")
        };
        return html(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["\n        <h5 class=\"info ", "\" style=", ">\n          <span class=\"label\">", "</span>\n          <span class=\"date\">", "</span>\n          <span class=\"sr-only\">", "</span>\n        </h5>\n      "])), _this113.urgent ? 'urgent' : '', styleMap(iStyle), info.label, info.date, info.complete ? _this113.labelComplete : _this113.labelIncomplete);
      });
      var Dots = this.milestones.map(function (dot, i) {
        if (!dot.start && i !== 0) {
          return html(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral([" <div class=\"dot ", "\"></div> "])), _this113.urgent ? 'urgent' : '');
        }
      });
      var Bar = html(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["<div class=\"bar ", "\"></div>"])), this.urgent ? 'urgent' : '');
      return {
        bar: Bar,
        dots: Dots,
        info: Info
      };
    }
  }, {
    key: "_animateItems",
    value: function _animateItems() {
      var childNodes = this.shadowRoot.querySelector('.dot-container').childNodes;
      var bar = this.shadowRoot.querySelector('.bar');
      var complete = 0;
      var dots = Array.prototype.filter.call(childNodes, function (node) {
        return node.nodeType == Node.ELEMENT_NODE && node.nodeName === 'DIV';
      });
      var len = dots.length;

      var _loop2 = function _loop2(d) {
        var percent = 0;
        var num = Number(1 + +d);
        percent = num / len * 100;
        dots[d].style.left = '0%'; // need a 'state' change to apply CSS transitions
        // have to hard code pixels here for ie11: 1.25*fwcu = 10px | half of dot width

        setTimeout(function () {
          dots[d].style.left = "calc(".concat(percent, "% - 10px)");
        }, 0);
      };

      for (var d in dots) {
        _loop2(d);
      }

      this.milestones.forEach(function (c, i) {
        if (c.complete && !c.start && i !== 0) complete++;
      });
      complete = complete / (this.milestones.length - 1) * 100;
      setTimeout(function () {
        bar.style.width = complete + '%';
      }, 0); //No dot for 1st milestone

      if (dots.length > 3) {
        console.error('Maximum of 4 Milestones has been exceeded. Component may not render properly.');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["\n      <section class=", ">\n        <h4 class=\"sr-only\">", "</h4>\n        <div class=\"info-container\">", "</div>\n        <div class=\"bar-container\">", "</div>\n        <div class=\"dot-container\">", "</div>\n      </section>\n    "])), this.vertical ? 'vertical' : '', this.title, this._renderMilestones().info, this._renderMilestones().bar, this._renderMilestones().dots);
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["\n        @keyframes dot {\n          0% {\n            width: 0;\n            height: 0;\n            opacity: 0;\n          }\n          50% {\n            opacity: 1;\n          }\n          100% {\n            width: calc(2.5 * var(--fwcu));\n            height: calc(2.5 * var(--fwcu));\n          }\n        }\n\n        @keyframes info {\n          0% {\n            opacity: 0;\n          }\n          100% {\n            opacity: 1;\n          }\n        }\n\n        :host {\n          position: relative;\n        }\n\n        .dot-container,\n        .info-container {\n          width: 100%;\n          position: relative;\n          height: calc(2.5 * var(--fwcu));\n        }\n\n        .info-container {\n          bottom: 0;\n          background: none;\n        }\n\n        .bar-container {\n          background-color: var(--color-gray-five);\n          position: absolute;\n          width: 100%;\n          height: calc(2.5 * var(--fwcu));\n        }\n\n        .info {\n          position: absolute;\n          display: flex;\n          justify-content: center;\n          flex-direction: column;\n          top: calc(-5 * var(--fwcu));\n          text-align: center;\n          margin: 0;\n          font-size: var(--default-font-size);\n          width: calc(19 * var(--fwcu));\n          color: var(--color-gray-one);\n          animation-name: info;\n          animation-fill-mode: both;\n          animation-duration: 500ms;\n          animation-delay: 750ms;\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n        }\n        .info span.date {\n          padding: 0;\n          margin: 0;\n          line-height: 1;\n          font-weight: 400;\n        }\n\n        .info:nth-of-type(odd) {\n          top: calc(7.5 * var(--fwcu));\n        }\n        .info::after {\n          content: '';\n          left: calc(50% - 1px);\n          position: absolute;\n          width: calc(0.25 * var(--fwcu));\n          height: calc(3 * var(--fwcu));\n          background-color: var(--color-alert-info);\n        }\n        .info.urgent::after {\n          background-color: var(--color-alert-error);\n        }\n\n        .info:nth-of-type(even)::after {\n          top: 100%;\n        }\n        .info:nth-of-type(odd)::after {\n          bottom: 100%;\n        }\n\n        .bar {\n          height: calc(2.5 * var(--fwcu));\n          background: var(--color-primary);\n          position: absolute;\n          width: 0%;\n          transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);\n        }\n\n        .bar.urgent {\n          background-color: var(--color-alert-error);\n        }\n\n        .dot {\n          position: absolute;\n          background-color: none;\n          border-style: solid;\n          border-color: black;\n          background-color: var(--color-white);\n          border-color: var(--color-primary);\n          border-radius: 50%;\n          width: calc(2.5 * var(--fwcu));\n          height: calc(2.5 * var(--fwcu));\n          animation-name: dot;\n          animation-fill-mode: both;\n          animation-duration: 500ms;\n          animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transform-origin: center;\n        }\n\n        .dot.urgent {\n          border-color: var(--color-util-one);\n        }\n\n        .dot:nth-of-type(2) {\n          transition-delay: 100ms;\n        }\n\n        .dot:nth-of-type(3) {\n          transition-delay: 200ms;\n        }\n\n        .dot:nth-of-type(4) {\n          transition-delay: 300ms;\n        }\n\n        @media screen and (max-width: 600px) {\n          ul {\n            justify-content: center;\n          }\n          section.vertical {\n            transform: rotate(90deg);\n            transform-origin: center;\n            margin-top: calc(18.75 * var(--fwcu)); /* 150px  */\n            margin-bottom: calc(43.75 * var(--fwcu)); /* 350px  */\n          }\n          section.vertical .dot-container,\n          section.vertical .info-container,\n          section.vertical .bar-container {\n            width: calc(62.5 * var(--fwcu));\n            /* component is rotated 90 degrees with transform, width here is acting as height */\n          }\n\n          section.vertical .info {\n            transform: rotate(-90deg);\n          }\n          section.vertical .info:nth-of-type(even) {\n            top: calc(-12 * var(--fwcu));\n          }\n          section.vertical .info:nth-of-type(odd) {\n            top: calc(12 * var(--fwcu));\n          }\n\n          section.vertical .info::after {\n            top: calc(50% - 1px);\n            height: calc(0.25 * var(--fwcu));\n            width: calc(3 * var(--fwcu));\n          }\n\n          section.vertical .info:nth-of-type(even)::after {\n            left: auto;\n            right: 100%;\n          }\n          section.vertical .info:nth-of-type(odd)::after {\n            left: auto;\n            right: 0;\n          }\n        }\n      "])))];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        milestones: {
          type: Array
        },
        vertical: {
          type: Boolean
        },
        title: {
          type: String
        },
        urgent: {
          type: Boolean
        },
        labelIncomplete: {
          attribute: 'label-incomplete',
          type: String
        },
        labelComplete: {
          attribute: 'label-complete',
          type: String
        }
      };
    }
  }]);

  return FwcTimelineComponent;
}(LitElement);

var FwcTimeline = /*#__PURE__*/function (_FwcBase40) {
  _inherits(FwcTimeline, _FwcBase40);

  var _super89 = _createSuper(FwcTimeline);

  function FwcTimeline() {
    _classCallCheck(this, FwcTimeline);

    return _super89.call(this, 'fwc-timeline', FwcTimelineComponent);
  }

  return FwcTimeline;
}(FwcBase);

var FwcTooltipComponent = /*#__PURE__*/function (_LitElement46) {
  _inherits(FwcTooltipComponent, _LitElement46);

  var _super90 = _createSuper(FwcTooltipComponent);

  function FwcTooltipComponent() {
    var _this114;

    _classCallCheck(this, FwcTooltipComponent);

    _this114 = _super90.call(this);
    _this114._fwcModal = new FwcModal();

    _this114._fwcModal.build();

    _this114.show = false;
    _this114.icon = false;
    _this114.isMobile = false;
    _this114.message = '';
    _this114.tip = '';
    _this114.term = '';
    _this114.position = {
      transform: 'translate(0,0)'
    };
    _this114.mobileBreak = breakpoints.sm;
    _this114._defaultSvg = '';
    _this114.labelAriaTipTerm = 'Tooltip:';
    _this114._handleWindowResize = debounce(function () {
      _this114.isMobile = window.innerWidth <= _this114.mobileBreak ? true : false;

      if (_this114.isMobile) {
        _this114.show = false;

        _this114.requestUpdate();

        _this114._attachModalEvent();
      } else {
        _this114.requestUpdate();

        _this114.updateComplete.then(function () {
          _this114._positionTooltip();
        });
      }
    }, 250);
    _this114._handleScroll = debounce(function () {
      _this114.requestUpdate();

      if (!_this114.isMobile) {
        _this114._positionTooltip();
      }
    }, 150);
    return _this114;
  }

  _createClass(FwcTooltipComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(FwcTooltipComponent.prototype), "connectedCallback", this).call(this);

      window.addEventListener('resize', this._handleWindowResize);
      window.addEventListener('scroll', this._handleScroll);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      window.removeEventListener('resize', this._handleWindowResize);
      window.removeEventListener('scroll', this._handleScroll);

      _get(_getPrototypeOf(FwcTooltipComponent.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this._positionTooltip();

      this.tip = this.message;

      this._setSvg();

      if (this.isMobile) {
        this._attachModalEvent();
      }
    }
  }, {
    key: "_svg",
    value: function _svg() {
      return html(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"51\" height=\"50\" viewBox=\"0 0 51 50\" focusable=\"false\" aria-hidden=\"true\">\n        <path d=\"M25,50 C11.2141927,50 0,38.7858073 0,25 C0,11.2141927 11.2141927,0 25,0 C38.7858073,0 50,11.2141927 50,25 C50,38.7858073 38.7858073,50 25,50 Z M25,45.8333333 C36.5315755,45.8333333 45.8333333,36.5315755 45.8333333,25 C45.8333333,13.4684245 36.5315755,4.16666667 25,4.16666667 C13.4684245,4.16666667 4.16666667,13.4684245 4.16666667,25 C4.16666667,36.5315755 13.4684245,45.8333333 25,45.8333333 Z M25,37.5 C20.4182943,37.5 16.6666667,33.7483724 16.6666667,29.1666667 L20.8333333,29.1666667 C20.8333333,31.4941406 22.672526,33.3333333 25,33.3333333 C27.327474,33.3333333 29.1666667,31.4941406 29.1666667,29.1666667 C29.1666667,27.5716146 28.141276,26.155599 26.6276042,25.6510417 L25.78125,25.390625 C24.0804036,24.8291016 22.9166667,23.2014974 22.9166667,21.4192708 L22.9166667,18.75 L27.0833333,18.75 L27.0833333,21.4192708 L27.9296875,21.6796875 C31.1360677,22.7457682 33.3333333,25.789388 33.3333333,29.1666667 C33.3333333,33.7483724 29.5817057,37.5 25,37.5 Z M22.9166667,16.6666667 L22.9166667,12.5 L27.0833333,12.5 L27.0833333,16.6666667 L22.9166667,16.6666667 Z\" transform=\"matrix(1 0 0 -1 0 50)\" />\n      </svg>\n    "])));
    }
  }, {
    key: "_setSvg",
    value: function _setSvg() {
      if (this._hasSlottedSvg() || !this.icon) {
        this._defaultSvg = '';
        return;
      }

      this._defaultSvg = this._svg();
    }
  }, {
    key: "_hasSlottedSvg",
    value: function _hasSlottedSvg() {
      var slot = this.shadowRoot.querySelector('slot');
      var childNodes = slot ? slot.assignedNodes({
        flatten: true
      }) : [];
      return Array.prototype.some.call(childNodes, function (node) {
        return node.nodeName === 'svg';
      });
    }
  }, {
    key: "_attachModalEvent",
    value: function _attachModalEvent() {
      var _this115 = this;

      this.updateComplete.then(function () {
        var modalDOM = _this115.shadowRoot.querySelector("#Modal");

        var tooltipDOM = _this115.shadowRoot.querySelector("#Tooltip");

        modalDOM.addEventListener("fwc-modal-close", function () {
          modalDOM.setReFocus(tooltipDOM);
        }, {
          once: true
        });
      });
    }
  }, {
    key: "_handleBlur",
    value: function _handleBlur() {
      if (this.show) {
        this._closeTooltip();
      }
    }
  }, {
    key: "_handleKeyDown",
    value: function _handleKeyDown(event) {
      switch (event.code) {
        case 'Escape':
          if (this.show) {
            this._closeTooltip();
          }

          break;

        case 'Enter':
        case 'Space':
          if (!this.show) {
            this._openTooltip();
          }

          break;
      }
    }
  }, {
    key: "_openTooltip",
    value: function _openTooltip() {
      this.tip = this.message;

      this._positionTooltip();

      if (this.isMobile) {
        this._modalEle.openModal();
      } else {
        this.show = true;
      }
    }
  }, {
    key: "_closeTooltip",
    value: function _closeTooltip() {
      this.show = false;

      if (this.isMobile) {
        this._modalEle.closeModal();
      }

      var event = new CustomEvent('fwc-tooltip-close', {
        detail: this,
        bubbles: false
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "_positionTooltip",
    value: function _positionTooltip() {
      this.isMobile = window.innerWidth <= this.mobileBreak ? true : false;

      if (!this.isMobile) {
        var host = this.getBoundingClientRect(); // need to figure out why the tip getBoundingClientRect is off when resizing screen from mobile to desktop

        var tip = this.shadowRoot.querySelector('.tip').getBoundingClientRect();
        var left = 0;
        var top = 0;
        top = host.top - (tip.height + host.height);
        left = host.left;

        if (top <= 0) {
          top = host.top + host.height * 2;
        }

        if (host.left + tip.width > window.innerWidth) {
          left = host.left - (tip.width - host.width);
        }

        top = top + 'px';
        left = left + 'px';
        this.position.transform = "translate(".concat(left, ",").concat(top, ")");
        this.requestUpdate();
      } else {
        this.requestUpdate();
        this._modalEle = this.shadowRoot.querySelector('fwc-modal');
      }
    }
  }, {
    key: "_toggleTooltip",
    value: function _toggleTooltip() {
      if (this.show) {
        this._closeTooltip();
      } else {
        this._openTooltip();
      }
    }
  }, {
    key: "_initMobile",
    value: function _initMobile() {
      return html(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral([" <fwc-modal id=\"Modal\" text-header=\"", "\">\n      <div slot=\"body\">\n        <p>", "</p>\n      </div>\n    </fwc-modal>"])), this.term, this.tip);
    }
  }, {
    key: "_initDesktop",
    value: function _initDesktop() {
      return html(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral([" <div class=\"tip-container ", "\" aria-hidden=\"", "\">\n      <div class=\"tip\" style=", ">\n        <span id=\"TooltipDef\" role=\"tooltip\" aria-label=\"", " ", "\">", "</span>\n      </div>\n    </div>"])), this.show ? 'show' : '', !this.show, styleMap(this.position), this.labelAriaTipTerm, this.tip, this.tip);
    }
  }, {
    key: "_tooltipBtn",
    value: function _tooltipBtn() {
      return html(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["\n      <div id=\"Tooltip\" class=\"tip-btn ", " ", "\" tabindex=\"", "\" aria-describedby=\"TooltipDef\" @click=", " @keydown=", " @blur=", " aria-hidden=\"", "\">\n        <span class=\"", "\">", "</span>\n        ", "\n        <!-- slot is used for custom svg -->\n        <slot></slot>\n      </div>\n    "])), this.light ? 'light' : '', this.disabled ? 'disabled' : '', this.disabled ? -1 : 0, this._toggleTooltip, this._handleKeyDown, this._handleBlur, this.disabled, this.icon || this._hasSlottedSvg() ? 'sr-only' : '', this.term, this._defaultSvg);
    }
  }, {
    key: "render",
    value: function render() {
      return html(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["\n      ", "\n      <div @click=", " class=\"fwc-click-out ", "\"></div>\n      ", "\n    "])), this._tooltipBtn(), this._closeTooltip, this.show ? 'show' : '', !this.isMobile ? this._initDesktop() : this._initMobile());
    }
  }], [{
    key: "styles",
    get: function get() {
      return [sharedStyles, css(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["\n        :host {\n          display: inline;\n        }\n        :host *:not(h2) {\n          font-family: var(--font-sans-serif);\n        }\n        .hidden {\n          display: none;\n        }\n        section {\n          display: none;\n        }\n        h2 {\n          font-size: calc(3.25 * var(--fwcu));\n          font-family: var(--font-serif);\n          color: var(--color-gray-one);\n          margin-top: 0;\n          text-transform: capitalize;\n        }\n        .term {\n          display: inline;\n        }\n        .term span {\n          font-size: var(--default-font-size);\n          padding-right: calc(0.5 * var(--fwcu));\n        }\n        .tip {\n          opacity: 0;\n          border: 1px solid var(--color-primary);\n          border-radius: var(--border-radius);\n          padding: calc(2 * var(--fwcu));\n          max-width: calc(35 * var(--fwcu));\n          max-height: calc(18 * var(--fwcu));\n          background: white;\n          box-shadow: var(--box-shadow);\n          transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);\n        }\n        .tip span {\n          font-size: var(--default-font-size);\n          color: var(--color-gray-one);\n        }\n        .tip-container {\n          position: fixed;\n          display: inline;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          pointer-events: none;\n          z-index: 10;\n          overflow: hidden;\n        }\n        .tip-container.show {\n          overflow: visible;\n        }\n        .tip-container.show .tip {\n          opacity: 1;\n          pointer-events: all;\n        }\n        .tip-btn {\n          border: none;\n          background: none;\n          padding: 0;\n          cursor: pointer;\n          display: inline;\n        }\n        .tip-btn span {\n          color: var(--color-primary);\n          border-bottom: 1px dotted var(--color-primary);\n          font-size: var(--default-font-size);\n          font-weight: 600;\n        }\n\n        .tip-btn.light span {\n          color: var(--color-white);\n          border-bottom: 1px dotted var(--color-white);\n        }\n\n        .tip-btn svg,\n        ::slotted(svg) {\n          height: calc(1.75 * var(--fwcu));\n          width: calc(1.75 * var(--fwcu));\n          fill: var(--color-primary);\n        }\n        .tip-btn.light svg,\n        ::slotted(svg.light) {\n          fill: var(--color-white);\n        }\n\n        .fwc-click-out {\n          display: inline;\n          position: fixed;\n        }\n        .fwc-click-out.show {\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          z-index: 1;\n        }\n\n        .tip-mobile-btn {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          margin-top: calc(2 * var(--fwcu));\n        }\n        .disabled {\n          opacity: 0.3;\n          cursor: default;\n          pointer-events: none;\n        }\n      "])))];
    } //TODO: small bug after opening 1st time after open on 'mobile' (isMobile)

  }, {
    key: "properties",
    get: function get() {
      return {
        icon: {
          type: Boolean
        },
        position: {
          type: Object
        },
        message: {
          type: String
        },
        show: {
          type: Boolean
        },
        term: {
          type: String
        },
        disabled: {
          attribute: 'disabled',
          type: Boolean
        },
        light: {
          attribute: 'light',
          type: Boolean
        },
        labelAriaTipTerm: {
          attribute: 'label-aria-tip-term',
          type: String
        }
      };
    }
  }]);

  return FwcTooltipComponent;
}(LitElement);

var FwcTooltip = /*#__PURE__*/function (_FwcBase41) {
  _inherits(FwcTooltip, _FwcBase41);

  var _super91 = _createSuper(FwcTooltip);

  function FwcTooltip() {
    _classCallCheck(this, FwcTooltip);

    return _super91.call(this, 'fwc-tooltip', FwcTooltipComponent);
  }

  return FwcTooltip;
}(FwcBase);

export { FwcAlert, FwcAlertSnackbar, FwcAnimBlob, FwcAnimColDrop, FwcBackToTop, FwcBars, FwcCardCircle, FwcCardMedia, FwcCardMediaImage, FwcCarouselCards, FwcCarouselGeneric, FwcDatePicker, FwcDateTimePicker, FwcExpand, FwcExpandMobileCol, FwcExpandMulti, FwcFeaturette, FwcFooterSticky, FwcHeaderCompound, FwcHeaderPage, FwcHeaderSection, FwcHeaderSub, FwcHero, FwcMilestones, FwcModal, FwcModalCelebratory, FwcModalIllustration, FwcModalSlide, FwcPagination, FwcPanel, FwcPreloader, FwcProgressLinear, FwcProgressStandard, FwcRailMessages, FwcRailTabProgress, FwcScrubber, FwcTabs, FwcTimeline, FwcTooltip };
