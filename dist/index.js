function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import data from "./data";
var testObject = {
    "layer1key1": 1,
    "layer1key2": 2,
    "layer1key3": 3,
    "layer1key4": {
        "layer2key1": {
            "layer3key1": 1,
            "layer3key2": 2
        },
        "layer2key2": 1,
        "layer2key3": {
            "layer3key1": {
                "layer4key1": 1,
                "layer4key2": {
                    "layer5key1": 1,
                    "layer5key2": 2,
                    "layer5key3": 3
                }
            }
        }
    },
    "layer1key5": [
        1,
        2,
        3,
        4,
        5
    ],
    "layer1key6": [
        {
            "layer2key1": 1,
            "layer2key2": 2,
            "layer2key3": 3
        },
        {
            "layer2key1": 1,
            "layer2key2": 2,
            "layer2key3": 3
        },
        {
            "layer2key1": 1,
            "layer2key2": 2,
            "layer2key3": 3
        }
    ]
};
var test2 = {
    "elements": [
        {
            "description": "At first glance, the men's Burton Dunmore Jacket carries a workwear jacket look. Dig deeper and you'll discover some serious ride-ready, storm-busting waterproof performance and breathability. Low-bulk insulation works with a thermo-regulating lining for consistent comfort. A stealth way to shed extra layers, the design consolidates flannel, insulator, and hoodie into one jacket. Add a goggle pocket, removable waist gaiter, and venting, and you're literally ready for everything from deep winter to spring.",
            "effective_price": {
                "amount": 269.95,
                "currency": "USD"
            },
            "extended_attributes": [
                {
                    "key": "created_at",
                    "value": "2020-08-19T00:00:00-05:00"
                },
                {
                    "key": "hs_code",
                    "value": "CA-6210.409000|CH-6210400000|JP-6210.402004|US-6210.402520|default-6210.409000"
                },
                {
                    "key": "hs_desc",
                    "value": "CA-m/b;  Othr snowsuits &amp; wvn gmnts of fab|CH-Andere Bekl. fur Manner o. Knaben aus|JP-Chapt 5906 garments, MM-fiber, M/B|US-RPO-Wvn Chapter 5906 Jacket, MM fiber, M|default-m/b;  Othr snowsuits & wvn gmnts of fab"
                },
                {
                    "key": "is_non_inventoried",
                    "value": "FALSE"
                },
                {
                    "key": "product_type",
                    "value": "regular"
                },
                {
                    "key": "published_scope",
                    "value": "all"
                },
                {
                    "key": "season_code",
                    "value": "W22"
                },
                {
                    "key": "updated_at",
                    "value": "2021-08-25T00:00:00-05:00"
                }
            ],
            "images": [
                {
                    "aspect_ratio": 0,
                    "dominant_color": "",
                    "height": 0,
                    "tags": [
                        "newstore:main"
                    ],
                    "title": "",
                    "url": "https://www.burton.com/static/product/W22/13067107001_1.png",
                    "width": 0
                }
            ],
            "inventory_tracked": false,
            "is_available": true,
            "is_preorder": false,
            "product_id": "13067107001-XXS",
            "serialized_inventory": false,
            "short_description": "The hardest working jacket on the hill. This ride-ready jacket is backed by an insulated, waterproof, breathable design for heavy-duty weather defense.",
            "title": "Men's Dunmore Jacket",
            "variable_pricing": false,
            "variations": []
        }
    ]
};
var numberOfLayer = 1;
function createSubNode(key, value, layernumber) {
    var subDiv = document.createElement("div");
    subDiv.setAttribute("class", "flexboxForObjext");
    var tempP = document.createElement("div");
    var keyForTempP = document.createElement("p");
    keyForTempP.innerHTML = "".concat(key);
    var arrowForTempP = document.createElement("p");
    arrowForTempP.innerHTML = "---> ";
    tempP.appendChild(keyForTempP);
    tempP.appendChild(arrowForTempP);
    tempP.setAttribute("class", "keyPara layer".concat(layernumber, " keyArrowPair"));
    subDiv.appendChild(tempP);
    subDiv.appendChild(appendToTreeDiv(value, layernumber + 1));
    if (numberOfLayer < layernumber + 1) {
        numberOfLayer++;
    }
    return subDiv;
}
var showTreeDiv = document.querySelector('div[data-showTree="showTree"]');
function appendToTreeDiv(elementToAppend) {
    var layernumber = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var divWIthKeyValuePair = document.createElement("div");
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.entries(elementToAppend)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _slicedToArray(_step.value, 2), key = _step_value[0], value = _step_value[1];
            if (typeof value === "object") {
                divWIthKeyValuePair.appendChild(createSubNode(key, value, layernumber));
            } else {
                var tempP = document.createElement("p");
                var keyParagraph = document.createElement("p");
                keyParagraph.innerHTML = "".concat(key, ": ");
                keyParagraph.setAttribute("class", "layer".concat(layernumber));
                var valueParagraph = document.createElement("p");
                if (typeof value === "string") {
                    valueParagraph.innerHTML = "".concat(value.slice(0, 15), "...");
                } else {
                    valueParagraph.innerHTML = "".concat(value);
                }
                tempP.appendChild(keyParagraph);
                tempP.appendChild(valueParagraph);
                tempP.setAttribute("class", "keyValuePair");
                divWIthKeyValuePair.appendChild(tempP);
                divWIthKeyValuePair.setAttribute("class", "valuesomething");
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return divWIthKeyValuePair;
}
function alignKeysAndContent() {
    for(var i = 1; i <= numberOfLayer; i++){
        var _Math;
        var allKeyValuePairs = document.querySelectorAll(".layer".concat(i));
        var listOfWidths = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = allKeyValuePairs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var keyValue = _step.value;
                if (keyValue.parentElement.className === "keyValuePair") {
                    listOfWidths.push(keyValue.parentElement.clientWidth);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        console.log(listOfWidths);
        console.log();
        var maxWidth = (_Math = Math).max.apply(_Math, _toConsumableArray(listOfWidths));
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = allKeyValuePairs[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var keyValue1 = _step1.value;
                if (keyValue1.parentElement.className === "keyValuePair") {
                    keyValue1.parentElement.style.width = "".concat(maxWidth, "px");
                    keyValue1.parentElement.style.background = "lightgray";
                } else {
                    //@ts-ignore
                    keyValue1.style.width = "".concat(maxWidth, "px");
                    keyValue1.style.background = "lightgray";
                }
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
}
function main() {
    showTreeDiv === null || showTreeDiv === void 0 ? void 0 : showTreeDiv.appendChild(appendToTreeDiv(data));
    alignKeysAndContent();
    console.log(numberOfLayer);
}
document.addEventListener("mousemove", function(e) {
    //@ts-ignore
    //document.querySelector(".showTree")!.style.left = e.detail.x 
    //@ts-ignore
    console.log(e);
});
main();
