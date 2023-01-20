import data from "./data"

const testObject = {
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
                    "layer5key3": 3,
                }
            }
        }
    },
    "layer1key5": [
        1, 2, 3, 4, 5
    ],
    "layer1key6": [
        {
            "layer2key1": 1,
            "layer2key2": 2,
            "layer2key3": 3,
        },
        {
            "layer2key1": 1,
            "layer2key2": 2,
            "layer2key3": 3,
        },
        {
            "layer2key1": 1,
            "layer2key2": 2,
            "layer2key3": 3,
        },
    ]
}

const test2 = {
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
        },
    ]
}



let numberOfLayer = 1

function createSubNode(key: any, value: any, layernumber: number) {
    const subDiv = document.createElement("div")
    subDiv.setAttribute("class", "flexboxForObjext")
    const tempP = document.createElement("div")
    const keyForTempP = document.createElement("p")
    keyForTempP.innerHTML =`${key}`
    const arrowForTempP = document.createElement("p")
    arrowForTempP.innerHTML = `---> `
    tempP.appendChild(keyForTempP)
    tempP.appendChild(arrowForTempP)
    tempP.setAttribute("class", `keyPara layer${layernumber} keyArrowPair`)
    subDiv.appendChild(tempP)
    subDiv.appendChild(appendToTreeDiv(value, layernumber + 1))
    if (numberOfLayer < layernumber + 1) {
        numberOfLayer++
    }
    return subDiv
}


const showTreeDiv = document.querySelector('div[data-showTree="showTree"]')

function appendToTreeDiv(elementToAppend: Object, layernumber: number = 1) {
    const divWIthKeyValuePair = document.createElement("div")
    for (const [key, value] of Object.entries(elementToAppend)) {
        if (typeof value === "object") {
            divWIthKeyValuePair.appendChild(createSubNode(key, value, layernumber))
        } else {
            const tempP = document.createElement("p")
            const keyParagraph = document.createElement("p")
            keyParagraph.innerHTML = `${key}: `
            keyParagraph.setAttribute("class", `layer${layernumber}`)
            const valueParagraph = document.createElement("p")
            if (typeof value === "string") {
                valueParagraph.innerHTML = `${value.slice(0, 15)}...`
            } else {
                valueParagraph.innerHTML = `${value}`
            }
            tempP.appendChild(keyParagraph)
            tempP.appendChild(valueParagraph)
            tempP.setAttribute("class", "keyValuePair")
            divWIthKeyValuePair.appendChild(tempP)
            divWIthKeyValuePair.setAttribute("class", "valuesomething")
        }
    }
    return divWIthKeyValuePair
}

function alignKeysAndContent() {
    for (let i = 1; i <= numberOfLayer; i++) {
        const allKeyValuePairs = document.querySelectorAll(`.layer${i}`)
        const listOfWidths: number[] = []
        for (const keyValue of allKeyValuePairs) {
            if (keyValue.parentElement!.className === "keyValuePair") {
                listOfWidths.push(keyValue.parentElement!.clientWidth)
            }
        }
        console.log(listOfWidths)
        console.log()
        const maxWidth = Math.max(...listOfWidths)
        for (const keyValue of allKeyValuePairs) {
            if (keyValue.parentElement!.className === "keyValuePair") {
                keyValue.parentElement!.style.width = `${maxWidth}px`
                keyValue.parentElement!.style.background = `lightgray`


            } else {
                //@ts-ignore
                keyValue.style.width = `${maxWidth}px`
                //@ts-ignore
                keyValue.style.background = `lightgray`
            }
        }
    }
}

function main() {
    showTreeDiv?.appendChild(appendToTreeDiv(data))
    alignKeysAndContent()
    console.log(numberOfLayer)
}

document.addEventListener("mousemove", e => { 
    //@ts-ignore
    //document.querySelector(".showTree")!.style.left = e.detail.x 
    //@ts-ignore
    console.log(e)
})


main()