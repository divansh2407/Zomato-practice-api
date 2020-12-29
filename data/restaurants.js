exports.SingleRow = {
    "name":"Mahesh Mansarovar",
    "description":"Only vegeterian food",
    "type": "resturant",
    "destinations": [
        {
            "location": "Nirala Nagar",
	        "city": "Lucknow"
        }
    ],
    "includes": [
        {
            "what": "go out",
            "description": "come to enjoy our service at seating resturant"
        },
        {
            "what": "take away",
            "description": "we pack order via zomato"
        }
    ],
    "pricePP": 800,
    "offer": {
        "discount": 0.1,
        "description": "Christmas discount",
        "expires": "1/31/2020"
    }
}

exports.MultipleRows = [
    {
        "name":"Mahalaxmi",
        "description":"Only vegeterian food",
        "type": "resturant",
        "destinations": [
            {
                "location": "aliganj",
                "city": "Lucknow"
            }
        ],
        "includes": [
            {
                "what": "go out",
                "description": "come to enjoy our service at seating resturant"
            },
            {
                "what": "take away",
                "description": "we pack order via zomato"
            }
        ],
        "pricePP": 900,
        "offer": {
            "discount": 0.15,
            "description": "Christmas discount",
            "expires": "1/31/2020"
        }
    },
    {
        "name":"Royal Cafe",
        "description":"Veg and non-veg food",
        "type": "hotel",
        "destinations": [
            {
                "location": "Hazratganj",
                "city": "Lucknow"
            }
        ],
        "includes": [
            {
                "what": "go out",
                "description": "come to enjoy our service at seating resturant as well as enjoy our luxurious staying"
            },
            {
                "what": "take away",
                "description": "we pack order via zomato"
            }
        ],
        "pricePP": 1800,
        "offer": {
            "discount": 0.1,
            "description": "Christmas discount",
            "expires": "1/31/2020"
        }
    },
    {
        "name":"Lebua",
        "description":"Veg and non veg food",
        "type": "hotel",
        "destinations": [
            {
                "location": "MG Road",
                "city": "Lucknow"
            }
        ],
        "includes": [
            {
                "what": "go out",
                "description": "come to enjoy our service at seating resturant as well as enjoy our luxurious staying"
            },
            {
                "what": "take away",
                "description": "we pack order via zomato"
            }
        ],
        "pricePP": 2900,
        "offer": {
            "discount": 0.1,
            "description": "NULL",
            "expires": "NULL"
        }
    }
    ]