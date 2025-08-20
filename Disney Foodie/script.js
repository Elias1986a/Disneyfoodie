// Data for the checklist
const foodieData = {
    "Disneyland Park": {
        "Alien Pizza Planet": [
            { name: "Haunted Heatwave Pizza", description: "Spiced blush sauce topped with mozzarella and pepper jack, Italian sausage, classic and crispy cupped pepperoni, smoked bratwurst, and sliced red Fresno chiles garnished with basil and hot honey drizzle", endDate: "2025-10-31" },
            { name: "Spicy Blush Pasta", description: "Italian sausage and bell peppers served on the chef's choice of pasta, tossed in a blush sauce, and garnished with Parmesan and basil", endDate: "2025-11-13" },
            { name: "Apple and Pecan Salad", description: "Mixed greens with frisée, candied pecans, Granny Smith apple, feta crumbles, and maple dressing", endDate: "2026-01-07" },
            { name: "Pumpkin Spiced Breadsticks", description: "Breadsticks rolled in pumpkin spiced sugar served with a caramel cream cheese sauce", endDate: "2026-01-07" },
            { name: "Seasonal Alien Macarooooon", description: "filled with berries and cream", endDate: "2025-10-31" }
        ],
        "Bengal Barbecue": [
            { name: "Iced Pandan Cooler", description: "with brown sugar spheres and ube cold foam", endDate: "2026-01-07" },
            { name: "Iced Pumpkin Chai Latte", description: "with brown sugar spheres and cold foam", endDate: "2025-11-13" }
        ],
        "Blue Bayou Restaurant": [
            { name: "Plant-based Roasted Beet and Citrus Salad", description: "Crema, herbs, almonds, fennel, and poppy seed vinaigrette", endDate: "2025-11-13" },
            { name: "Doberge Cake", description: "Layers of pumpkin spice sponge, chocolate whipped ganache, and salted caramel buttercream", endDate: "2025-11-13" }
        ],
        "Café Daisy": [
            { name: "Daisy's Goody-Goody Donuts", description: "House-made mini apple cider donuts with spiced apple sugar", endDate: "2026-01-07" },
            { name: "Clarabelle Spicy Chipotle Pineapple Lemonade", description: "Minute Maid Zero Sugar Lemonade, chipotle-pineapple syrup, and chile-lime seasoning topped with pineapple", endDate: "2025-11-13" },
            { name: "Pumpkin Tiramisu Cold Brew", description: "Joffrey's French Roast Cold Brew Coffee with pumpkin and tiramisu syrups, topped with whipped cream, chocolate and pumpkin powders, and a ladyfinger cookie", endDate: "2025-11-13" }
        ],
        "Cafe Orleans": [
            { name: "Sweet Potato Hummus", description: "Lemon oil, pomegranate, sunflower seeds, and lavash", endDate: "2026-01-07" },
            { name: "Cherry Cream Soda", description: "Sprite, cherry syrup, and cream", endDate: "2026-01-07" }
        ],
        "Carnation Café": [
            { name: "Alpine Almond Delight", description: "Rolled Danish filled with pastry cream and almond cream finished with sliced almonds", endDate: "2025-11-14" }
        ],
        "Galactic Grill": [
            { name: "Haunted Hound Dog", description: "¼ lb. all beef hot dog on a brioche bun, topped with shredded cheese, pickled mustard, bacon, and fried onions", endDate: "2025-10-31" },
            { name: "Chile Pepper Burger", description: "Angus beef and vegetable patty, ghost pepper salsa verde, pepper jack, green chile pico de gallo, cilantro lime slaw, and crispy onions served on a toasted brioche bun", endDate: "2025-11-13" },
            { name: "Darth by Chocolate", description: "Layers of chocolate pudding, red velvet sponge, chocolate mousse, and crushed chocolate crème-filled cookies", endDate: "2025-11-13" },
            { name: "Bloody Orange Slushy", description: "Blood orange-flavored slush with raspberry drizzle", endDate: "2025-10-31" },
            { name: "Iced Pumpkin Pie Chai Latte", description: "topped with pumpkin pie cold foam", endDate: "2025-11-13" }
        ],
        "Good Boy! Grocers": [
            { name: "Strawberry Slushee", description: "made with Fanta Strawberry", endDate: "2026-01-07" }
        ],
        "Gibson Girl Ice Cream Parlor": [
            { name: "Rest in Chocolate Sundae", description: "Rocky Road ice cream buried in a chocolate-covered waffle cup with chocolate cookie crumbles and gummy worms topped with a chocolate tombstone", endDate: "2025-10-31" }
        ],
        "Harbour Galley": [
            { name: "Fresh-baked Pumpkin Cookies", description: "(Available in a 6 or 13 pack while supplies last)", endDate: "2025-11-13" },
            { name: "Whipped Cream Cheese Dip", description: "", endDate: "2025-11-13" }
        ],
        "Hungry Bear Barbecue Jamboree": [
            { name: "Cherry Cobbler Funnel Cake Fries", description: "Cinnamon sugar-dusted funnel cake fries, cherry pie filling, vanilla ice cream, and streusel", endDate: "2025-11-13" },
            { name: "Mint Chip Cold Brew", description: "Mint chip ice cream, Joffrey's French Roast cold brew coffee, cream topper, and chocolate chips", endDate: "2025-11-13" }
        ],
        "Jolly Holiday Bakery Cafe": [
            { name: "Pear Cherry Cheese Crumble", description: "Pie shell filled with cheesecake, cherry filling and spiced pears finished with sliced pears, streusel, and caramel", endDate: "2025-11-13" },
            { name: "Bulgogi Beef Toasted Sandwich with Corn Cheese Soup", description: "Marinated beef, grilled onion, mozzarella, and kimchi aïoli on sourdough served with corn cheese soup", endDate: "2025-11-13" },
            { name: "Caramel Apple Cheesecake", description: "Caramel cheesecake with caramelized apple filling finished with caramel drip, orange and white chocolate mousse, chocolate flakes, and a chocolate bat", endDate: "2025-11-13" },
            { name: "Hazelnut Brownie Tart", description: "Hazelnut spread and brownie filling topped with purple cream cheese frosting, chocolate moon, bat, and orange sprinkles", endDate: "2025-11-13" },
            { name: "Jack-O'-Lantern Mickey Pumpkin Macaron", description: "Pumpkin macaron shell filled with caramel and pumpkin cheesecake", endDate: "2025-10-31" },
            { name: "Mickey Bat Cookie", description: "Shortbread bat cookie dipped in dark chocolate with a vampire Mickey face", endDate: "2025-10-31" },
            { name: "Pumpkin Muffin", description: "topped with cream cheese icing", endDate: "2026-01-07" },
            { name: "Spiced Bundt Cake", description: "Spiced cake filled with cream cheese frosting and topped with purple glaze, sprinkles, and spiced mousse with a Mickey chocolate decoration", endDate: "2025-11-13" },
            { name: "Joffrey's Pumpkin Cold Brew", description: "topped with vanilla foam and spiced sugar", endDate: "2025-11-13" }
        ],
        "Little Red Wagon": [
            { name: "Chili Cheese Corn Dog", description: "Classic corn dog topped with spicy chili, jalapeño-cilantro crema, cheddar cheese, and crispy onions", endDate: "2026-01-07" },
            { name: "Mango-Strawberry Lemonade", description: "Minute-Maid Lemonade infused with chamoy, strawberry syrup, and mango purée", endDate: "2025-11-13" }
        ],
        "Market House": [
            { name: "Butter Biscuit Cookie", description: "Butter cookie with cookie butter spread, drizzled with colored chocolate", endDate: "2025-11-13" },
            { name: "Mickey Bat Cookie", description: "Shortbread bat cookie dipped in dark chocolate with a vampire Mickey face", endDate: "2025-10-31" }
        ],
        "Maurice's Treats, Fantasyland Fruit Cart, and Lemonade at small world Promenade": [
            { name: "Trick or Treat Trail Mix", description: "Mix of M&M'S Milk Chocolate Candies, pretzel sticks, candy gummy worms, and candy corn", endDate: "2025-11-13" }
        ],
        "Mint Julep Bar": [
            { name: "Pumpkin Spiced-flavored Mickey-shaped Beignet", description: "dusted with pumpkin spice sugar", endDate: "2025-11-13" },
            { name: "Coffee-Caramel Dipping Sauce", description: "", endDate: "2025-11-13" },
            { name: "Cranberry-Pomegranate Mint Julep", description: "with mixed berry-flavored popping spheres", endDate: "2025-11-13" }
        ],
        "Plaza Inn": [
            { name: "German Chocolate Pie", description: "Flaky pie shell filled with layers of chocolate cake, chocolate crémeux, and German chocolate filling topped with chocolate drizzle and chocolate curls", endDate: "2025-11-13" },
            { name: "Poison Apple Cake", description: "Red cinnamon cake with cream cheese and caramelized apple filling finished with red cream cheese buttercream frosting and green ganache", endDate: "2025-10-31" },
            { name: "Tombstone Chocolate Cake", description: "Chocolate pound cake, whipped topping, Oreo dust, and candied worms topped with a tombstone decoration", endDate: "2025-11-13" }
        ],
        "Rancho del Zocalo Restaurante": [
            { name: "Chick-or-Treat Mulita", description: "Cheesy blue corn tortilla with refried beans, chicken tinga, crema, cotija cheese, and spicy pickled onions served with tortilla chips", endDate: "2025-11-13" },
            { name: "Mickey-shaped Pumpkin Salted Dulce Cream Puff", description: "filled with pumpkin mousse and salted dulce de leche", endDate: "2025-11-13" },
            { name: "Hibiscus-Pomegranate Cooler", description: "Spiced hibiscus tea, pomegranate and orange juices, and honey", endDate: "2026-01-07" }
        ],
        "Red Rose Taverne": [
            { name: "Butternut Squash Flatbread", description: "Roasted butternut squash purée, roasted mushrooms, feta, and roasted diced butternut squash topped with garlic miso sauce and fried sage", endDate: "2026-01-07" },
            { name: "Enchanted Pumpkin Stuff", description: "Pumpkin mousse with pumpkin cake and apricot marmalade center topped with green sprinkles, silver stars, and a chocolate branch and leaf", endDate: "2025-11-13" },
            { name: "Pumpkin Cheesecake Cold Brew", description: "Joffrey's caramel, vanilla and cinnamon cold brew with pumpkin cheesecake topper", endDate: "2025-11-13" }
        ],
        "Refreshment Corner": [
            { name: "Chili Potato Dog", description: "Baked potato, all-beef hot dog, spicy chili, cheese sauce, sour cream, green onion, and spicy corn chips", endDate: "2025-11-13" }
        ],
        "River Belle Terrace": [
            { name: "Big Belle Sandwich", description: "Nashville hot chicken, brisket mac and cheese, and house-made slaw", endDate: "2025-11-13" },
            { name: "Mississippi Mud Cake", description: "Toasted marshmallows and candied pecans with vanilla ice cream", endDate: "2025-11-13" },
            { name: "Chocolate-Peanut Butter Pudding", description: "Chocolate pudding with peanut butter chantilly and chocolate-peanut butter pieces", endDate: "2025-11-13" },
            { name: "Pumpkin Spice Pancakes", description: "Pumpkin spice sauce and cream cheese chantilly with choice of bacon or sausage", endDate: "2025-11-13" }
        ],
        "Royal Street Veranda": [
            { name: "Meatball Slider", description: "IMPOSSIBLE meatballs, marinara sauce, and parmesan", endDate: "2026-01-07" },
            { name: "Roasted Vegetable Salad", description: "Roasted brussels sprouts, beets, butternut squash, yams, toasted almonds, pepitas, and burrata cheese topped with herbed balsamic vinaigrette", endDate: "2026-01-07" },
            { name: "Coffee Fritters", description: "rolled in cinnamon sugar, drizzled with white mocha sauce, and garnished with praline sugar streusel", endDate: "2025-11-13" },
            { name: "Pumpkin Crème Brûlée Cold Brew", description: "Joffrey's pumpkin crème brûlée cold brew coffee, pumpkin spiced creamer, and toffee chips", endDate: "2025-11-13" }
        ],
        "Stage Door Café": [
            { name: "The MONSTER Funnel Cake", description: "Green funnel cake with chocolate sauce, crumbled brownie, peanut butter candy pieces, and whipped cream", endDate: "2025-11-13" }
        ],
        "The Golden Horseshoe": [
            { name: "The Bride Sundae", description: "Brownie cake, vanilla ice cream, cookies and crème chocolate crumble, whipped topping, and chocolate sauce", endDate: "2025-11-13" }
        ],
        "Troubadour Tavern": [
            { name: "Bulgogi Potato", description: "Bulgogi-marinated beef, gochujang mayo, spicy cucumber, and green onion", endDate: "2025-11-13" },
            { name: "Celebration Dinner Potato", description: "Baked potato with pulled smoked turkey, whipped cream cheese, stuffing, cranberry sauce, gravy, and fried onions", endDate: "2026-01-07" },
            { name: "Trick or Treat Popcorn", description: "topped with mix of M&M'S Milk Chocolate Candies, candy gummy worms, pretzel sticks, and candy corn", endDate: "2025-11-13" }
        ],
        "Churros near Buzz Lightyear Astro Blasters": [
            { name: "Chocolate Churro", description: "Classic churro rolled in chocolate-flavored sugar", endDate: "2025-10-31" },
            { name: "Creamy Peanut Butter Dipping Sauce", description: "", endDate: "2025-10-31" }
        ],
        "Churros near Casey Jr. Circus Train": [
            { name: "Caramel Apple Dipping Sauce", description: "Diced apples with cinnamon and caramel sauce", endDate: "2025-11-13" }
        ],
        "Churros near Haunted Mansion": [
            { name: "Straw-batty Churro", description: "Strawberry-filled churro rolled in chocolate cookie dust and drizzled with cream cheese sauce, topped with a chocolate bat", endDate: "2026-01-07" }
        ],
        "Churros near Sleeping Beauty Castle and Churros near Town Square": [
            { name: "Citrus Churro", description: "Churro tossed in citrus orange sugar", endDate: "2025-11-13" },
            { name: "Blueberry-Lemon Dipping Sauce", description: "Vanilla frosting mixed with blueberry compote", endDate: "2025-11-13" }
        ],
        "Popcorn near Haunted Mansion": [
            { name: "Halloween Treat Mix-In", description: "Add-on a scoop of Halloween candy mix to classic buttery popcorn complete with green, purple and black M&M'S Milk Chocolate Candies, and candy corn", endDate: "2025-11-13" }
        ],
        "Popcorn near Star Trader": [
            { name: "Spicy Pickle Popcorn", description: "Popcorn tossed with crushed hot cheese puffs and dill pickle seasoning", endDate: "2025-10-31" }
        ],
        "Pretzels at small world Promenade": [
            { name: "Caramel Apple Dipping Sauce", description: "Diced apples with cinnamon and caramel sauce", endDate: "2025-11-13" }
        ],
        "Pretzels near Star Tours – The Adventures Continue": [
            { name: "Supernova Pretzel", description: "Jalapeño cheese-filled pretzel topped with spicy crumble and lime", endDate: "2025-10-31" },
            { name: "Jalapeño Cheese Sauce", description: "", endDate: "2025-10-31" }
        ]
    },
    "Disney California Adventure Park": {
        "Angry Dogs": [
            { name: "Hot Pickle", description: "Spicy Pickle", endDate: "2025-11-13" }
        ],
        "Aunt Cass Café": [
            { name: "Chicken Pot Pie Soup", description: "in a bread bowl with crispy fried egg roll wrappers", endDate: "2026-01-07" },
            { name: "Caramel Apple Bread Pudding", description: "with caramelized apples, whipped topping, and caramel sauce", endDate: "2025-11-13" },
            { name: "Vampire Mickey-shaped Sourdough Bread", description: "", endDate: "2025-10-31" },
            { name: "Cinnamon-Apple Cold Brew", description: "Joffrey's caramel cold brew with apple cinnamon foam and apple cereal dust", endDate: "2025-11-13" }
        ],
        "Award Wieners": [
            { name: "Pambazo Torta", description: "Guajillo-dipped toasted roll stuffed with a hot dog, chorizo con papas, lettuce, cotija cheese, pickled onions, salsa verde, and a pickled jalapeño", endDate: "2025-11-13" },
            { name: "Spell Bar", description: "Batter-fried SNICKERS bar on a stick with chocolate drizzle, whipped topping, and roasted peanuts", endDate: "2025-11-13" }
        ],
        "Bayside Brews": [
            { name: "Brewery X Spiced Sangria Seltzer", description: "", endDate: "2026-01-07" },
            { name: "Golden State Jamaica Cider", description: "", endDate: "2025-11-13" },
            { name: "Rincon Reservation Road Rez Dog Hefeweizen", description: "", endDate: "2026-01-07" },
            { name: "Watermelon Pineapple Margarita", description: "Tequila, watermelon schnapps, and pineapple juice with a chile-lime seasoned rim", endDate: "2026-01-07" }
        ],
        "Boardwalk Pizza & Pasta": [
            { name: "Spicy Pasta Pizza", description: "Andouille sausage, ditalini pasta, tomato and vodka cream sauce, and fresh basil", endDate: "2025-11-02" },
            { name: "Apple Budino", description: "Cinnamon budino topped with caramelized apple filling, apple cider reduction, oatmeal streusel, and vanilla bean chantilly", endDate: "2025-11-13" },
            { name: "Frozen Marble Drip Coffee", description: "Frozen Joffrey's French Roast cold brew coffee drizzled with oat milk and sweetened condensed milk", endDate: "2026-01-07" }
        ],
        "Boudin Bread Cart": [
            { name: "Vampire Mickey-shaped Sourdough Bread", description: "", endDate: "2025-10-31" }
        ],
        "Cappuccino Cart": [
            { name: "Peanut Butter Mocha Cold Brew", description: "Joffrey's mocha cold brew, peanut butter whip, peanut butter drizzle, and M&M'S Peanut Butter Chocolate Candies", endDate: "2025-10-31" },
            { name: "Peanut Butter Whiskey Cold Brew Cocktail", description: "Joffrey's mocha cold brew with peanut butter whiskey, peanut butter foam, and peanut butter drizzle", endDate: "2025-10-31" }
        ],
        "Clarabelle's Hand-Scooped Ice Cream": [
            { name: "Chocolate Lava Cake", description: "Warm chocolate lava cake topped with a scoop of vanilla ice cream, fresh berries, and strawberry sauce", endDate: "2025-11-13" },
            { name: "Witches Hat Sundae", description: "Your choice of ice cream in a cup with a witch's hat cone and seasonal toppings", endDate: "2025-11-13" },
            { name: "Mango Hard Float", description: "Golden Road Brewery Mango Cart, mango sorbet, chamoy, and chile-lime seasoning", endDate: "2026-01-07" }
        ],
        "Cocina Cucamonga Mexican Grill": [
            { name: "Spicy Jamaica", description: "Jamaica agua fresca with chamoy and chile-lime seasoning", endDate: "2025-11-13" },
            { name: "Bottle Logic Brewing Blood Orange Paloma Seltzer", description: "", endDate: "2025-11-13" },
            { name: "Jamaica Tequila Cocktail", description: "", endDate: "2025-11-13" }
        ],
        "Corn Dog Castle": [
            { name: "Fried Elote Corn on the Cob", description: "Whole corn cob dipped in batter and fried to golden brown, drizzled with chipotle aïoli, and topped with chile-lime queso fresco and cilantro", endDate: "2026-01-07" }
        ],
        "Cozy Cone Motel 1 – Churros": [
            { name: "Pumpkin Pie Churro", description: "Classic churro topped with pumpkin cream and pie crust pieces", endDate: "2025-11-13" },
            { name: "Pumpkin Crème Brûlée Cold Brew", description: "Joffrey's pumpkin crème brûlée cold brew with pumpkin sauce topped with cold cream foam", endDate: "2026-01-07" },
            { name: "Pumpkin Crème Brûlée Cold Brew Martini", description: "Joffrey's pumpkin crème brûlée cold brew with Irish cream, vanilla vodka, and pumpkin sauce topped with cold cream foam", endDate: "2026-01-07" }
        ],
        "Cozy Cone Motel 2 – Ice Cream Cones": [
            { name: "Mater Haul-O-Ween Cone", description: "Ube soft-serve with black sprinkles served in a cup or cone", endDate: "2025-11-13" },
            { name: "Ube-Vanilla Twist Soft-serve", description: "with black sprinkles served in a cup or cone", endDate: "2025-11-13" }
        ],
        "Cozy Cone Motel 3 – Chili Cone Queso": [
            { name: "Slow Burnin' Mac and Cheese Cone", description: "Fresh-cooked pasta tossed with a spicy red pepper cheese sauce in a bread cone topped with crushed chile-cheese puffs", endDate: "2025-11-13" }
        ],
        "Cozy Cone Motel 4 – Frozen Cone-Coctions": [
            { name: "Mother Earth Brew Co. Cali Screamin' Pumpkin Vanilla Cream Ale", description: "", endDate: "2025-11-13" },
            { name: "Tarantula Hill El Rey Salt and Lime Mexican Lager", description: "", endDate: "2026-01-07" },
            { name: "Watermelon Michelada", description: "Tarantula Hill El Rey Aalt and Lime Mexican Lager with watermelon chamoy lemonade, rimmed with chile-lime seasoning and chamoy", endDate: "2026-01-07" },
            { name: "Unsung Brewery Poison Apple Seltzer", description: "", endDate: "2025-11-13" }
        ],
        "Cozy Cone Motel 5 – Popcone": [
            { name: "Barbacoa Sope", description: "Fried sope with barbacoa, chorizo beans, lettuce, queso, crema, and salsa roja", endDate: "2025-11-13" }
        ],
        "Flo's V8 Cafe": [
            { name: "Spicy Chicken and Fries", description: "Fries topped with chicken tenders tossed in a mango-habanero sauce, drizzled with ranch dressing, and finished with green onions", endDate: "2025-11-13" },
            { name: "Seaborn Blackberry Margarita", description: "Blackberry Margarita with a chile-lime and black salt rim", endDate: "2025-11-13" }
        ],
        "Hollywood Lounge": [
            { name: "Belching Beaver Phantom Bride IPA", description: "", endDate: "2025-11-13" },
            { name: "Haunted Horchata Cocktail", description: "Horchata with RumChata and cinnamon whiskey", endDate: "2025-11-13" },
            { name: "Keg Craft Berry Sangria", description: "", endDate: "2026-01-07" },
            { name: "2 Towns Ciderhouse Hollow Jack Pumpkin Cider", description: "", endDate: "2025-11-13" },
            { name: "2 Towns Ciderhouse Mango Cosmic Crisp Cider", description: "", endDate: "2026-01-07" },
            { name: "21st Amendment Brewery Citrus Wheat Ale", description: "", endDate: "2025-11-13" },
            { name: "Route 30 Brewing Co. Oktoberfest Lager", description: "", endDate: "2025-11-13" },
            { name: "Seaborn Paranormal Peach Margarita", description: "", endDate: "2025-11-13" }
        ],
        "Lamplight Lounge": [
            { name: "Herb-roasted Chicken", description: "Turnip purée, rainbow carrots, and chicken jus", endDate: "2026-01-07" },
            { name: "Thai Seafood Pasta", description: "Thai curry cioppino, coconut-steamed clams and mussels, shrimp, pan-seared fish, spaghetti, sourdough breadcrumbs, crispy shallots, Thai basil, cilantro, and a lime wedge", endDate: "2026-01-07" },
            { name: "Prime Rib", description: "Herb salt-crusted with whipped potatoes, grilled rainbow carrots, wasabi cream, and au jus", endDate: "2026-01-07" },
            { name: "Gamecraft Marzen", description: "", endDate: "2025-11-13" },
            { name: "Brewery Ommegang All Hallows Treat", description: "", endDate: "2025-11-13" },
            { name: "2 Town Cosmic Crisp", description: "", endDate: "2026-01-07" }
        ],
        "Lamplight Lounge – Boardwalk Dining": [
            { name: "Gamecraft Marzen", description: "", endDate: "2025-11-13" },
            { name: "Brewery Ommegang All Hallows Treat", description: "", endDate: "2025-11-13" }
        ],
        "Lucky Fortune Cookery": [
            { name: "Seasonal Baymax Macaron", description: "filled with ube cream and salted caramel chocolate crunch pearls", endDate: "2025-11-13" }
        ],
        "Mortimers Market": [
            { name: "Vampire Mickey-shaped Sourdough Bread", description: "", endDate: "2025-10-31" }
        ],
        "Outdoor Vending Locations": [
            { name: "Ghost Pepper Turkey Leg", description: "", endDate: "2025-11-13" },
            { name: "Jalapeño-Cream Cheese Bread", description: "", endDate: "2026-01-07" },
            { name: "Pumpkin Spice Cream Cheese Bread", description: "", endDate: "2025-11-13" },
            { name: "Blackberry Cotton Candy", description: "", endDate: "2025-11-13" },
            { name: "Oogie Boogie Chocolate Chip Cookie", description: "", endDate: "2025-11-13" },
            { name: "Bottle Logic Brewing Quarktoberfest Festbier Lager", description: "", endDate: "2025-11-13" },
            { name: "Study Break Blackberry Smash Seltzer", description: "", endDate: "2025-11-13" }
        ],
        "Port of San Fransokyo Cervecería": [
            { name: "Karl Strauss Brewing Company Karlitos Mexican Lager", description: "", endDate: "2025-11-13" },
            { name: "Karl Strauss Brewing Company Karlitos Mexican Lager Michelada", description: "", endDate: "2025-11-13" }
        ],
        "Poultry Palace": [
            { name: "Chipotle Chicken Drumstick Box", description: "served with slaw", endDate: "2026-01-07" }
        ],
        "Pym Tasting Lab": [
            { name: "Karl Strauss Oktoberfest", description: "", endDate: "2025-11-13" }
        ],
        "Pym Test Kitchen": [
            { name: "Asgardian Apple Cold Brew", description: "Joffrey's caramel cold brew, green apple cold foam, and caramel sauce with a caramel apple lollipop", endDate: "2026-01-07" },
            { name: "Blueberry Matcha Iced Latte", description: "Matcha latte topped with blueberry cold foam and blueberry popping spheres", endDate: "2026-01-07" }
        ],
        "Schmoozies!": [
            { name: "Ursula Enchanted Waffles", description: "Dark chocolate Mickey-shaped waffles filled with ube custard and dusted with powdered sugar", endDate: "2025-11-13" },
            { name: "Evil Queen Apple Shake", description: "Matcha-apple shake with whipped topping", endDate: "2025-11-13" },
            { name: "Mickey Mummy Shake", description: "Chocolate cookie shake with whipped topping, chocolate cream-filled cookie ears, and M&M'S Milk Chocolate Candies", endDate: "2025-11-13" },
            { name: "Castellum Ciders Ube Cider", description: "", endDate: "2026-01-07" },
            { name: "Latitude 33 Brewing Honey Hips Ale", description: "", endDate: "2026-01-07" },
            { name: "Seaborn Wild Berry Lime Margarita", description: "", endDate: "2026-01-07" },
            { name: "Unsung Brewing Co. Mimosa Hard Seltzer", description: "", endDate: "2026-01-07" },
            { name: "Pumpkin Espresso Martini", description: "Joffrey's pumpkin cold brew with caramel vodka topped with pumpkin spice cold foam", endDate: "2025-11-13" }
        ],
        "Smokejumpers Grill": [
            { name: "Buffalo Chicken Loaded Onion Rings", description: "Onion rings topped with buffalo chicken, blue cheese, ranch, carrot ribbons, and green onions", endDate: "2025-10-31" },
            { name: "BearPaw Basin Cold Brew", description: "Joffrey's pecan cold brew, salted maple cold foam, caramel drizzle, and waffle pieces", endDate: "2026-01-07" },
            { name: "Boo Berry Shake", description: "Blackberry shake with whipped cream, chocolate cookie dust, orange sprinkles, and fresh berries", endDate: "2025-10-31" },
            { name: "Oogie Boogie Lemonade", description: "Green apple Minute-Maid Lemonade with cherry-flavored popping spheres, and raspberry sauce", endDate: "2025-10-31" },
            { name: "Caramel-Pecan Irish Cream Cold Brew Cocktail", description: "Irish cream liqueur, Joffrey's pecan cold brew, salted maple cold foam, caramel drizzle, and waffle pieces", endDate: "2026-01-07" },
            { name: "Enegren Brewing Company Oktoberfest Moorpark", description: "", endDate: "2025-11-13" },
            { name: "Karl Strauss Aurora Hoppyalis", description: "", endDate: "2025-11-13" },
            { name: "Green Apple Lemonade Cocktail", description: "Vodka with green apple Minute-Maid Lemonade, cherry-flavored popping spheres, and raspberry sauce", endDate: "2025-10-31" }
        ],
        "Sonoma Terrace": [
            { name: "Enegren Brewing Company Oktoberfest Bavarian Marzen Style Lager", description: "", endDate: "2025-11-13" }
        ],
        "Studio Catering Co.": [
            { name: "Oogie Boogie Burrito", description: "Carne asada, French fries, spicy blue tortilla chips, pico de gallo, guacamole, and crema", endDate: "2025-11-13" },
            { name: "Oogie Boogie Splash", description: "House-made watermelon agua fresca with chile-lime seasoning", endDate: "2025-11-13" }
        ],
        "Wine Country Trattoria": [
            { name: "Raspberry Crème Brûlée Tart", description: "", endDate: "2025-11-13" },
            { name: "Pozione Verde", description: "Midori, coconut rum, coconut cream, and pineapple juice", endDate: "2025-11-13" }
        ],
        "Terran Treats": [
            { name: "Celestial Chocolate Churro", description: "Churro rolled in cocoa sugar, topped with pistachio cream, chocolate sauce, crispy phyllo dough crumbles, and crushed pistachios", endDate: "2025-11-13" }
        ],
        "Churros at Hollywood Land": [
            { name: "Halloween Town Mayor Churro", description: "Classic churro rolled in graham cracker sugar with marshmallow crème, and chocolate drizzle", endDate: "2025-11-13" }
        ],
        "Churros near Redwood Creek Challenge Trail": [
            { name: "Peanut Butter-Marshmallow Churro", description: "Classic churro with peanut butter sauce, marshmallow sauce, and chocolate chips", endDate: "2026-01-07" }
        ],
        "Willie's Churros at Buena Vista Street": [
            { name: "Coffee and Donut Churro", description: "Classic churro rolled in coffee sugar topped with coffee-infused chocolate sauce, whipped topping, and seasonal sprinkles", endDate: "2025-11-13" }
        ]
    },
    "Hotels of the Disneyland Resort": {
        "Disneyland Hotel - Broken Spell Lounge": [
            { name: "Green-eyed Sceptre", description: "Pernod Absinthe, Avissi Prosecco, St. George Spiced Pear, cinnamon syrup, lime juice, and blackberry", endDate: "2025-10-31" },
            { name: "Pork Belly Whisky Flip", description: "Pork belly–infused Pendleton Whisky Midnight, Grand Marnier, maple syrup, whole egg, and pork belly garnish", endDate: "2025-10-31" },
            { name: "Squid Ink Martini", description: "Golden Eagle Vodka, Dolin Blanc Vermouth de Chambéry, squid ink, lemon bitters, and fennel sprig", endDate: "2025-10-31" }
        ],
        "Disneyland Hotel - Goofy's Kitchen": [
            { name: "Chai Ginger Latte", description: "Espresso, milk, chai syrup, white chocolate sauce, and gingerbread whipped cream (Non-Alcoholic)", endDate: "2025-10-31" },
            { name: "Pumpkin Spice Latte", description: "Espresso, pumpkin spice syrup, and milk (Non-Alcoholic)", endDate: "2025-10-31" }
        ],
        "Disneyland Hotel - Palm Breeze Bar": [
            { name: "The Dark Heart", description: "Hennessy VS, Plymouth Gin, crème de cacao, chocolate bitters, and lemon bitters", endDate: "2025-10-31" },
            { name: "Tres Brujas", description: "Casamigos Reposado, espresso, Licor 43, Mr. Black Cold Brew Coffee Liqueur, orgeat, and Fee Brothers Fee Foam", endDate: "2025-10-31" }
        ],
        "Disneyland Hotel - The Coffee House": [
            { name: "Mickey Bat Cookie", description: "Shortbread bat cookie dipped in dark chocolate with a vampire Mickey face", endDate: "2025-10-31" },
            { name: "Chai Ginger Latte", description: "Espresso, milk, chai syrup, white chocolate sauce, and gingerbread whipped cream (Non-Alcoholic)", endDate: "2025-11-13" },
            { name: "Pumpkin Spice Latte", description: "Espresso, pumpkin spice syrup, and milk (Non-Alcoholic)", endDate: "2025-11-13" }
        ],
        "Disneyland Hotel - Trader Sam's Enchanted Tiki Bar": [
            { name: "Cursed Caffeine", description: "Herradura Reposado Tequila, Amaro Montenegro, Mr. Black Cold Brew Coffee Liqueur, agave syrup, and chocolate bitters", endDate: "2025-10-31" },
            { name: "Dark Prince of D'Nite", description: "Zacapa rum, El Dorado 8 Rum, sweet vermouth, Amaro Montenegro, Domaine de Canton Ginger Liqueur, and bitters", endDate: "2025-10-31" },
            { name: "Deep Ocean Waters", description: "Buffalo Trace Bourbon, blue curaçao, Campari, grapefruit sherbet syrup, lemon juice, and bitters", endDate: "2025-10-31" }
        ],
        "Grand Californian - GCH Craftsman Grill": [
            { name: "Cappuccino Muffin", description: "", endDate: "2026-01-07" },
            { name: "Minnie Halloween Cupcake", description: "", endDate: "2025-10-31" },
            { name: "Pumpkin Pepita Muffin", description: "", endDate: "2026-01-07" },
            { name: "Filled Long John Donut", description: "", endDate: "2025-10-31" },
            { name: "Vampire Mickey Cake Donut", description: "", endDate: "2025-10-31" }
        ],
        "Grand Californian - Great Hall Cart": [
            { name: "Buttery Pumpkin Bread", description: "Pumpkin bread with sprinkles and pumpkin spiced icing", endDate: "2025-10-31" },
            { name: "Gooey Peanut Butter Chocolate Cookie", description: "Gooey filled cookie topped with gummy worms", endDate: "2025-10-31" },
            { name: "Halloween Gingerbread Skeleton Cookie", description: "Decorated gingerbread cookie", endDate: "2025-10-31" },
            { name: "Halloween Berry Jam Linzer Cookie", description: "Decorated sugar cookie", endDate: "2025-10-31" }
        ],
        "Grand Californian - Storytellers Cafe": [
            { name: "Clarabelle's Enchanted Halloween Dinner", description: "Dine with Clarabelle Cow and her woodland pals, all decked out in their Halloween best.", endDate: "2025-10-31" },
            { name: "Mickey's Autumn Adventures Brunch", description: "Join Mickey Mouse, Minnie Mouse, and their pals dressed in their festive fall best.", endDate: "2025-11-16" }
        ],
        "Pixar Place Hotel - The Sketch Pad Café": [
            { name: "Limited-Edition Giant Chocolate Chip Cookie", description: "Topped with salted caramel, chocolate sauce, and berry jam", endDate: "2025-11-02" },
            { name: "Pumpkin Cheesecake Overnight Oats", description: "Layered with pumpkin cheesecake, chocolate cookie crumbles, granola, cranberries, and gummy worms", endDate: "2025-11-02" },
            { name: "Salted Caramel Whoopie Pie", description: "Dark chocolate and salted caramel buttercream", endDate: "2025-11-02" },
            { name: "Matcha Horchata", description: "Made with rice, condensed milk, vanilla, cinnamon, and topped with matcha tea", endDate: "2025-11-02" },
            { name: "Paradise Tea Lemonade", description: "House-made lemonade, lavender syrup, and hibiscus cooler tea", endDate: "2025-11-02" },
            { name: "Pumpkin Cold Brew", description: "Joffrey's cold brew, caramel syrup, pumpkin purée, and pumpkin spice", endDate: "2025-11-02" }
        ]
    },
    "Downtown Disney District": {
        "Black Tap Craft Burgers & Shakes": [{ name: "Halloween CrazyShake", description: "Chocolate shake with a vanilla frosted rim with candy corn topped with a "spider-web" chocolate cupcake, orange and white twisty pop, orange rock candy, whipped cream, orange sprinkles, and a chocolate drizzle", endDate: "2025-10-31" }],
        "Ballast Point Brewing Co.": [{ name: "Ballast Point Skullcuterie Board", description: "Features a three-cheese skull fondue made with whipped chèvre, blue cheese, brie, chef's choice of cured meats, dragon fruit–berry compote, chimichurri, dried fruits, caperberries, pistachios, and finished with roasted bone marrow and charred baguette", endDate: "2025-10-31" }],
        "Beignets Expressed": [{ name: "Caramel Apple Beignet", description: "Candied apple icing, caramel drizzle, and spooky sprinkles", endDate: "2025-10-31" }],
        "California Churro": [{ name: "Spooky Churro", description: "Cut in half churro rolled in cinnamon sugar, drizzled with peanut butter and chocolate sauce, and topped with peanut butter candy pieces", endDate: "2025-10-31" }],
        "Céntrico": [{ name: "Pumpkin Flan", description: "A rich and creamy twist on the classic Latin dessert, blending the smooth texture of traditional flan with the cozy, spiced flavors of pumpkin pie", endDate: "2025-11-02" }, { name: "La Calavera Roja", description: "Reposado tequila, pomegranate juice, blood orange syrup, lime juice, agave, and cinnamon", endDate: "2025-11-02" }],
        "Jazz Kitchen Coastal Grill & Patio": [{ name: "Sweet Potato Bisque", description: "Topped with maple bacon, squaw bread croutons, and marshmallow "cobweb" drizzle", endDate: "2025-10-31" }, { name: "Pumpkin Spice Margarita", description: "Reposado tequila, orange liqueur, lime, and pumpkin spice syrup", endDate: "2025-10-31" }],
        "Naples Ristorante e Bar": [{ name: "Pumpkin Blooderscotch Cannolis", description: "Filled with pumpkin and butterscotch chip cream, whipped cream, red caramel drizzle, and a sugar knife", endDate: "2025-11-02" }],
        "Paseo": [{ name: "Pumpkin Dulce", description: "Spiced sponge cake, maple syrup ganache, walnut crumble, pumpkin mousse, gruyère, and rosemary ice cream", endDate: "2025-11-02" }, { name: "Miel de los Muertos", description: "Blanco tequila, orange juice, lemon juice, pumpkin purée, honey cinnamon syrup, and foam", endDate: "2025-11-02" }],
        "Splitsville Luxury Lanes": [{ name: "Midnight Roll", description: "Creamy avocado, salmon, and cream cheese wrapped in black rice, topped with masago, pickled onion, micro cilantro, and a smoky chipotle mayo drizzle", endDate: "2025-10-31" }, { name: "Mister Boogie", description: "Reposado Tequila, melon liquor, lime juice, agave nectar, and a splash of soda water with a purple sugar rim and topped with two sour gummy worms", endDate: "2025-10-31" }],
        "Tiendita": [{ name: "Boo-ñuelo", description: "Spiced chocolate, cinnamon sugar, and seasonal corn", endDate: "2025-11-02" }],
        "Parkside Market: GG's Chicken Shop": [{ name: "Graveyard Pudding", description: "Chocolate pudding, chocolate cookie crumble, sprinkles, and gummy worms", endDate: "2025-10-31" }],
        "Parkside Market: Seoul Sister": [{ name: "Dragon's Breath Bokkeum", description: "Spicy pork belly and kimchi stir-fry over rice", endDate: "2025-10-31" }],
        "Parkside Market: Sip & Sonder": [{ name: "Maple Pecan Praline Cinnamon Roll", description: "", endDate: "2025-10-31" }, { name: "Sweet Potato Marshmallow Roll", description: "", endDate: "2025-10-31" }, { name: "Poison Apple Spiced Toffee Crunch Cider", description: "", endDate: "2025-10-31" }, { name: "Spiced Pumpkin Latte", description: "", endDate: "2025-10-31" }, { name: "Spiced Toasted Marshmallow Mocha", description: "", endDate: "2025-10-31" }],
        "Parkside Market: Vista Parkside Market": [{ name: "Sleepy Hollow", description: "Dark rum, almond liqueur, chai simple syrup, lemon juice, vanilla syrup, and bitters, served in the Tree Tiki Glass (available for purchase)", endDate: "2025-10-31" }, { name: "Starry Night", description: "Small batch bourbon, Earl Grey, bitters, and orange bitters", endDate: "2025-10-31" }, { name: "The Raven", description: "Vodka, coffee liqueur, and Sip & Sonder espresso", endDate: "2025-10-31" }],
        "Wetzel's Pretzels": [{ name: "Graveyard Bitz", description: "Original Bitz drizzled in a gooey layer of crème and topped with crunchy cookie pieces", endDate: "2025-11-02" }]
    },
    "Halloween Candy": {
        "Bing Bong's Sweet Stuff": [
            { name: "Devil Donald Cake Pop", description: "Vanilla cake pop dipped in white chocolate, decorated with orange-colored white chocolate, watermelon sour candy horns, yellow M&M'S Minis Chocolate Candy for a beak, and black-colored dark chocolate for the face", endDate: "2025-10-31" },
            { name: "Psychic Minnie Caramel Apple", description: "Granny Smith apple with marshmallow ears, dipped in caramel and milk chocolate, an orange sugar dress, white M&M'S Milk Chocolate Candies, and an orange and gray chocolate psychic witch hat", endDate: "2025-10-31" },
            { name: "Spiderweb Cereal Treat", description: "Cookies and cream flavored rice cereal treat dipped in black-colored dark chocolate and decorated with white chocolate webs with white sanding sugar", endDate: "2025-10-31" },
            { name: "Vampire Bat Cake Pop", description: "Chocolate cake pop decorated with bat wings and Mickey ear chocolate pieces dipped in black-colored dark chocolate, embellished with M&M'S Minis Chocolate Candies, and other chocolate facial features", endDate: "2025-09-27" },
            { name: "Evil Queen Caramel Apple", description: "Granny Smith apple dipped in caramel and decorated with marshmallow ears dipped in red-colored white chocolate, plus a green-colored white chocolate skull face", endDate: "2025-10-31" },
            { name: "Halloween Marshmallow Wand", description: "Marshmallows on a stick dipped in caramel and milk chocolate, drizzled with orange and purple-colored white chocolate", endDate: "2025-10-31" },
            { name: "Mummy Mickey Mallow Pop", description: "Mickey-shaped marshmallow pop dipped and decorated with white chocolate, and dark chocolate chip eyes", endDate: "2025-10-31" },
            { name: "Orange Minnie Bow Cake Pop", description: "Chocolate cake pop, chocolate Minnie ears covered in milk chocolate, finished with an orange Minnie bow", endDate: "2025-10-31" }
        ],
        "Various Candy Shops": [
            { name: "Devil Donald Cake Pop", description: "Vanilla cake pop dipped in white chocolate, decorated with orange-colored white chocolate, watermelon sour candy horns, yellow M&M'S Minis Chocolate Candy for a beak, and black-colored dark chocolate for the face", endDate: "2025-10-31" },
            { name: "Ghost Mickey Cake Pop", description: "Ghost-shaped vanilla cake pop dipped in white chocolate and decorated with a black-colored dark chocolate face", endDate: "2025-10-31" },
            { name: "Spiderweb Cereal Treat", description: "Cookies and cream flavored rice cereal treat dipped in black-colored dark chocolate and decorated with white chocolate webs with white sanding sugar", endDate: "2025-10-31" },
            { name: "Vampire Bat Cake Pop", description: "Chocolate cake pop decorated with bat wings and Mickey ear chocolate pieces dipped in black-colored dark chocolate, embellished with M&M'S Minis Chocolate Candies, and other chocolate facial features", endDate: "2025-09-27" },
            { name: "Wizard Mickey Caramel Apple", description: "Granny Smith apple with marshmallow ears, dipped in caramel and decorated with milk chocolate, an orange sugar robe, white M&M'S Milk Chocolate Candies, and an orange and gray wizard hat", endDate: "2025-10-31" },
            { name: "Psychic Minnie Caramel Apple", description: "Granny Smith apple with marshmallow ears, dipped in caramel and milk chocolate, an orange sugar dress, white M&M'S Milk Chocolate Candies, and an orange and gray chocolate psychic witch hat", endDate: "2025-10-31" },
            { name: "Evil Queen Caramel Apple", description: "Granny Smith apple dipped in caramel and decorated with marshmallow ears dipped in red-colored white chocolate, plus a green-colored white chocolate skull face", endDate: "2025-10-31" },
            { name: "Halloween Marshmallow Wand", description: "Marshmallows on a stick dipped in caramel and milk chocolate, drizzled with orange and purple-colored white chocolate", endDate: "2025-10-31" },
            { name: "Harvest Brittle", description: "Buttery brittle made with pecans, cashews, almonds, craisins, and cinnamon", endDate: "2025-10-31" },
            { name: "Llama Potion Cereal Treat", description: "Bottle-shaped cereal treat dipped in pink and tan-colored chocolate, topped with a white chocolate llama piece", endDate: "2025-10-31" },
            { name: "Mummy Mickey Mallow Pop", description: "Mickey-shaped marshmallow pop dipped and decorated with white chocolate, and dark chocolate chip eyes", endDate: "2025-10-31" },
            { name: "Orange Minnie Bow Cake Pop", description: "Chocolate cake pop, chocolate Minnie ears covered in milk chocolate, finished with an orange Minnie bow", endDate: "2025-10-31" },
            { name: "Skeleton Minnie Caramel Apple", description: "Granny Smith apple dipped in caramel and decorated with white chocolate-covered marshmallow ears, a black sugar dress, white M&M'S Milk Chocolate Candies, and a black and white skull bow", endDate: "2025-10-31" }
        ]
    }
};

let undoStack = [];
const undoButton = document.getElementById('undo-button');

// Welcome Modal Functions
function showWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (!modal) {
        console.warn('Welcome modal element not found');
        return;
    }
    modal.classList.add('show');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    if (!modal) {
        console.warn('Welcome modal element not found');
        return;
    }
    modal.classList.remove('show');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    localStorage.setItem('welcomeModalShown', 'true');
}


// Warning Modal Functions
function showWarningModal() {
    const modal = document.getElementById('warning-modal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeWarningModal() {
    const modal = document.getElementById('warning-modal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function confirmRestoreAll() {
    closeWarningModal();
    restoreDefaults();
}

// Store previous completion states for park completion detection
let previousCompletionStates = {};

function updateCounters() {
    const locations = [
        'all',
        'disneyland-park',
        'disney-california-adventure-park',
        'hotels-of-the-disneyland-resort',
        'downtown-disney',
        'halloween-candy'
    ];
    
    locations.forEach(location => {
        let checkboxes;
        if (location === 'all') {
            checkboxes = document.querySelectorAll('#checklist-container input[type="checkbox"]');
        } else {
            const section = document.getElementById(`${location}-section`);
            if (section) {
                checkboxes = section.querySelectorAll('input[type="checkbox"]');
            }
        }
        
        if (checkboxes) {
            const total = checkboxes.length;
            const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
            const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
            
            // Check for park completion (but skip 'all' location)
            if (location !== 'all' && total > 0) {
                const wasCompleted = previousCompletionStates[location] === 100;
                const isNowCompleted = percentage === 100;
                
                if (!wasCompleted && isNowCompleted) {
                    // Park just became 100% complete!
                    const parkNames = {
                        'disneyland-park': 'Disneyland Park',
                        'disney-california-adventure-park': 'Disney California Adventure',
                        'hotels-of-the-disneyland-resort': 'Hotels of the Disneyland Resort',
                        'downtown-disney': 'Downtown Disney District',
                        'halloween-candy': 'Halloween Candy'
                    };
                    
                    setTimeout(() => {
                        celebrateParkCompletion(parkNames[location], location);
                    }, 300); // Small delay to let other animations finish
                }
                
                // Update previous state
                previousCompletionStates[location] = percentage;
            }
            
            // Update desktop counters
            const checkedElement = document.getElementById(`${location}-checked`);
            const totalElement = document.getElementById(`${location}-total`);
            const percentageElement = document.getElementById(`${location}-percentage`);
            
            if (checkedElement) checkedElement.textContent = checked;
            if (totalElement) totalElement.textContent = total;
            if (percentageElement) percentageElement.textContent = percentage;

            // Update mobile overall progress
            if (location === 'all') {
                const mobileCheckedElement = document.getElementById('mobile-all-checked');
                const mobileTotalElement = document.getElementById('mobile-all-total');
                const mobilePercentageElement = document.getElementById('mobile-all-percentage');
                const mobileProgressBar = document.getElementById('mobile-progress-bar');
                
                if (mobileCheckedElement) mobileCheckedElement.textContent = checked;
                if (mobileTotalElement) mobileTotalElement.textContent = total;
                if (mobilePercentageElement) mobilePercentageElement.textContent = percentage;
                
                // Animate progress bar
                if (mobileProgressBar) {
                    // Small delay to ensure smooth animation
                    setTimeout(() => {
                        mobileProgressBar.style.width = percentage + '%';
                    }, 100);
                }
            }

            // Update park header progress
            const parkProgressElement = document.getElementById(`${location}-progress`);
            if (parkProgressElement) {
                if (percentage === 100 && localStorage.getItem(`completed-${location}`)) {
                    // Maintain completed styling
                    parkProgressElement.innerHTML = `✨ ${checked}/${total} (${percentage}%) 🎃`;
                    parkProgressElement.style.cssText += `
                        background: linear-gradient(135deg, #fb923c, #fbbf24);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.8));
                    `;
                } else {
                    parkProgressElement.textContent = `${checked}/${total} (${percentage}%)`;
                }
            }
        }
    });
}

// Mobile header toggle functionality
function toggleMobileStats() {
    const statsGrid = document.getElementById('stats-grid');
    const overallProgress = document.getElementById('overall-progress');
    
    const isExpanded = statsGrid.classList.contains('expanded');
    
    if (isExpanded) {
        statsGrid.classList.remove('expanded');
        overallProgress.classList.remove('expanded');
    } else {
        statsGrid.classList.add('expanded');
        overallProgress.classList.add('expanded');
    }
}

function createChecklistItem(item, locationId, itemId) {
    const id = `${locationId}-${itemId}`;
    const itemDiv = document.createElement('div');
    itemDiv.className = 'checklist-item bg-gray-800 rounded-lg shadow-md';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id;
    
    const isChecked = localStorage.getItem(id) === 'true';
    checkbox.checked = isChecked;
    checkbox.setAttribute('aria-describedby', `desc-${locationId}-${itemId}`);
    
    checkbox.addEventListener('change', (e) => {
        localStorage.setItem(id, e.target.checked);
        updateCounters();
    });

    // Pumpkin icon
    const pumpkinIcon = document.createElement('div');
    pumpkinIcon.className = 'pumpkin-icon cursor-pointer pumpkin-checkbox';
    pumpkinIcon.textContent = '🎃';
    pumpkinIcon.onclick = () => {
        checkbox.checked = !checkbox.checked;
        localStorage.setItem(id, checkbox.checked);
        
        // Add animation class when checked
        if (checkbox.checked) {
            pumpkinIcon.classList.add('checked');
            
            // Add success sparkles for completion
            createSuccessSparkles(pumpkinIcon);
            
            // Remove animation class after animation completes
            setTimeout(() => {
                pumpkinIcon.classList.remove('checked');
            }, 800);
        } else {
            pumpkinIcon.classList.remove('checked');
        }
        updateCounters();
        
        // Check for milestone achievements
        setTimeout(() => checkMilestones(), 100);
    };

    const label = document.createElement('label');
    label.htmlFor = id;
    label.className = 'cursor-pointer';
    
    // Create content structure within label
    const titleElement = document.createElement('div');
    titleElement.textContent = item.name;
    titleElement.className = 'font-semibold leading-tight text-left';
    label.appendChild(titleElement);

    if (item.description) {
        const desc = document.createElement('p');
        desc.textContent = item.description;
        desc.className = 'text-xs text-gray-400 leading-relaxed text-left';
        desc.style.marginTop = '4px';
        label.appendChild(desc);
    }

    if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.className = 'w-24 h-24 rounded-md object-cover mt-2';
        label.appendChild(img);
    }

    if (item.endDate) {
        const displayEndDate = new Date(item.endDate + 'T00:00:00');
        const formattedDate = displayEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
        const dateInfo = document.createElement('p');
        dateInfo.textContent = `Available until ${formattedDate}`;
        dateInfo.className = 'text-xs text-purple-400 mt-2 text-left';
        label.appendChild(dateInfo);
    }

    // Swipe delete background
    const swipeDeleteBg = document.createElement('div');
    swipeDeleteBg.className = 'swipe-delete-bg';
    swipeDeleteBg.innerHTML = '🗑️ Delete';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 20 L80 80 M20 80 L80 20" stroke="#B91C1C" stroke-width="14" stroke-linecap="round"/><path d="M78 82 C 75 88, 78 95, 84 95 C 90 95, 93 88, 88 82 Z" fill="#B91C1C"/><path d="M18 22 C 22 16, 18 10, 12 10 C 6 10, 3 16, 8 22 Z" fill="#B91C1C"/></svg>`;
    removeButton.setAttribute('aria-label', `Remove ${item.item} from list`);
    removeButton.setAttribute('title', `Remove ${item.item}`);
    
    const removeItem = () => {
        const actualItemId = `${locationId}-${itemId}`;
        undoStack.push({ element: itemDiv, parent: itemDiv.parentNode, nextSibling: itemDiv.nextSibling, itemId: actualItemId });
        undoButton.disabled = false;
        itemDiv.classList.add('removing');
        
        let removedItems = [];
        try {
            removedItems = JSON.parse(localStorage.getItem('removedItems') || '[]');
        } catch (e) {
            console.warn('Failed to parse removedItems from localStorage:', e);
            localStorage.removeItem('removedItems');
        }
        removedItems.push(actualItemId);
        localStorage.setItem('removedItems', JSON.stringify(removedItems));
        
        setTimeout(() => {
            itemDiv.remove();
            updateCounters();
        }, 300);
    };

    removeButton.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        removeItem();
    };

    // Add swipe functionality
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    itemDiv.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = false;
        // Prevent accidental swipes while scrolling
        itemDiv.style.transition = 'none';
    }, { passive: true });

    itemDiv.addEventListener('touchmove', (e) => {
        if (!startX) return;
        currentX = e.touches[0].clientX;
        const diffX = startX - currentX;
        
        if (Math.abs(diffX) > 10) {
            isDragging = true;
            if (diffX > 0 && diffX < 120) {
                itemDiv.style.transform = `translateX(-${diffX}px)`;
            }
        }
    }, { passive: true });

    itemDiv.addEventListener('touchend', (e) => {
        if (!isDragging || !startX) {
            startX = 0;
            return;
        }
        
        const diffX = startX - currentX;
        
        if (diffX > 80) {
            // Swipe far enough - show delete state
            itemDiv.classList.add('swiping');
            itemDiv.style.transform = '';
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                if (itemDiv.classList.contains('swiping')) {
                    itemDiv.classList.remove('swiping');
                }
            }, 3000);
        } else {
            // Snap back
            itemDiv.style.transform = '';
        }
        
        // Re-enable transitions
        setTimeout(() => {
            itemDiv.style.transition = '';
        }, 100);
        
        startX = 0;
        currentX = 0;
        isDragging = false;
    }, { passive: true });

    // Click on swipe delete background to remove
    swipeDeleteBg.onclick = (e) => {
        e.stopPropagation();
        removeItem();
    };

    itemDiv.appendChild(checkbox);
    itemDiv.appendChild(swipeDeleteBg);
    itemDiv.appendChild(pumpkinIcon);
    itemDiv.appendChild(label);
    itemDiv.appendChild(removeButton);

    return itemDiv;
}

function createRestaurantSection(restaurantName, items, parkId) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'restaurant-section bg-gray-800/50 p-2 rounded-md';
    
    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'flex justify-between items-center mb-1';

    const title = document.createElement('h3');
    title.textContent = restaurantName;
    title.className = 'text-xl font-semibold text-purple-300';
    
    const removeRestaurantBtn = document.createElement('button');
    removeRestaurantBtn.className = 'remove-button';
    removeRestaurantBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M20 20 L80 80 M20 80 L80 20" stroke="#B91C1C" stroke-width="14" stroke-linecap="round"/><path d="M78 82 C 75 88, 78 95, 84 95 C 90 95, 93 88, 88 82 Z" fill="#B91C1C"/><path d="M18 22 C 22 16, 18 10, 12 10 C 6 10, 3 16, 8 22 Z" fill="#B91C1C"/></svg>`;
    removeRestaurantBtn.onclick = () => {
        const restaurantId = `${parkId}-${restaurantName.replace(/\s+/g, '-')}`;
        undoStack.push({ element: sectionDiv, parent: sectionDiv.parentNode, nextSibling: sectionDiv.nextSibling, restaurantId });
        undoButton.disabled = false;
        sectionDiv.classList.add('removing');
        
        let removedRestaurants = [];
        try {
            removedRestaurants = JSON.parse(localStorage.getItem('removedRestaurants') || '[]');
        } catch (e) {
            console.warn('Failed to parse removedRestaurants from localStorage:', e);
            localStorage.removeItem('removedRestaurants');
        }
        removedRestaurants.push(restaurantId);
        localStorage.setItem('removedRestaurants', JSON.stringify(removedRestaurants));
        
        setTimeout(() => {
            sectionDiv.remove();
            updateCounters();
        }, 300);
    };

    titleWrapper.appendChild(title);
    titleWrapper.appendChild(removeRestaurantBtn);
    sectionDiv.appendChild(titleWrapper);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'space-y-1';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let visibleItems = 0;
    const restaurantId = `${parkId}-${restaurantName.replace(/\s+/g, '-')}`;
    let removedRestaurants = [];
    try {
        removedRestaurants = JSON.parse(localStorage.getItem('removedRestaurants') || '[]');
    } catch (e) {
        console.warn('Failed to parse removedRestaurants from localStorage:', e);
        localStorage.removeItem('removedRestaurants');
    }
    if (removedRestaurants.includes(restaurantId)) {
        return null;
    }

    items.forEach((item, index) => {
        const endDate = new Date(item.endDate + 'T00:00:00');
        if (endDate >= today) {
            const locationId = `${parkId}-${restaurantName.replace(/\s+/g, '-')}`;
            const itemId = `${locationId}-${index}`;
            
            let removedItems = [];
            try {
                removedItems = JSON.parse(localStorage.getItem('removedItems') || '[]');
            } catch (e) {
                console.warn('Failed to parse removedItems from localStorage:', e);
                localStorage.removeItem('removedItems');
            }
            if (!removedItems.includes(itemId)) {
                itemsContainer.appendChild(createChecklistItem(item, locationId, index));
                visibleItems++;
            }
        }
    });

    if (visibleItems > 0) {
        sectionDiv.appendChild(itemsContainer);
        return sectionDiv;
    }
    return null;
}

function createParkSection(parkName, parkId, parkData) {
    const section = document.createElement('section');
    section.id = `${parkId}-section`;
    section.className = 'park-section';
    section.dataset.parkId = parkId;
    
    const titleContainer = document.createElement('div');
    titleContainer.className = 'park-section-header';
    titleContainer.title = 'Click to collapse/expand section';
    
    // Left side - just title
    const headerContent = document.createElement('div');
    headerContent.className = 'park-header-content';
    
    const title = document.createElement('h2');
    title.className = 'park-header-title';
    title.textContent = parkName;
    
    headerContent.appendChild(title);
    
    // Right side - progress and chevron icon
    const headerControls = document.createElement('div');
    headerControls.className = 'park-header-controls';
    
    const progressText = document.createElement('div');
    progressText.className = 'park-header-progress';
    progressText.id = `${parkId}-progress`;
    progressText.textContent = '0/0 (0%)';
    
    headerControls.appendChild(progressText);
    
    titleContainer.appendChild(headerContent);
    titleContainer.appendChild(headerControls);
    
    titleContainer.addEventListener('click', () => {
        const content = section.querySelector('.park-section-content');
        const isCollapsed = titleContainer.classList.toggle('collapsed');
        content.classList.toggle('collapsed', isCollapsed);
        
        let collapsedSections = [];
        try {
            collapsedSections = JSON.parse(localStorage.getItem('collapsedSections') || '[]');
        } catch (e) {
            console.warn('Failed to parse collapsedSections from localStorage:', e);
            localStorage.removeItem('collapsedSections');
        }
        if (isCollapsed) {
            if (!collapsedSections.includes(parkId)) {
                collapsedSections.push(parkId);
            }
        } else {
            const index = collapsedSections.indexOf(parkId);
            if (index > -1) {
                collapsedSections.splice(index, 1);
            }
        }
        localStorage.setItem('collapsedSections', JSON.stringify(collapsedSections));
    });
    
    section.appendChild(titleContainer);

    const listContainer = document.createElement('div');
    listContainer.className = 'park-section-content space-y-4';
    
    let collapsedSections = [];
    try {
        collapsedSections = JSON.parse(localStorage.getItem('collapsedSections') || '[]');
    } catch (e) {
        console.warn('Failed to parse collapsedSections from localStorage:', e);
        localStorage.removeItem('collapsedSections');
    }
    if (collapsedSections.includes(parkId)) {
        titleContainer.classList.add('collapsed');
        listContainer.classList.add('collapsed');
    }
    
    for (const restaurant in parkData) {
        const restaurantSection = createRestaurantSection(restaurant, parkData[restaurant], parkId);
        if (restaurantSection) {
            listContainer.appendChild(restaurantSection);
        }
    }
    section.appendChild(listContainer);
    return section;
}

function populateChecklist() {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    
    container.appendChild(createParkSection('Disneyland Park', 'disneyland-park', foodieData['Disneyland Park']));
    container.appendChild(createParkSection('Disney California Adventure Park', 'disney-california-adventure-park', foodieData['Disney California Adventure Park']));
    container.appendChild(createParkSection('Hotels of the Disneyland Resort', 'hotels-of-the-disneyland-resort', foodieData['Hotels of the Disneyland Resort']));
    container.appendChild(createParkSection('Downtown Disney District', 'downtown-disney', foodieData['Downtown Disney District']));
    container.appendChild(createParkSection('Halloween Candy', 'halloween-candy', foodieData['Halloween Candy']));
    updateCounters();
    
    // Re-apply button effects to newly created elements
    setTimeout(() => {
        addButtonEffects();
        addMicroInteractions();
    }, 100);
}

function filterAndSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedPark = document.getElementById('park-filter').value;

    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.park-section').forEach(parkSection => {
        const parkId = parkSection.dataset.parkId;
        const parkMatchesFilter = selectedPark === 'all' || selectedPark === parkId;
        let parkHasVisibleContent = false;

        parkSection.querySelectorAll('.restaurant-section').forEach(restaurantSection => {
            const restaurantName = restaurantSection.querySelector('h3').textContent.toLowerCase();
            let restaurantHasVisibleContent = false;

            restaurantSection.querySelectorAll('.checklist-item').forEach(item => {
                const itemName = item.querySelector('label').textContent.toLowerCase();
                const itemDescElement = item.querySelector('p.text-sm');
                const itemDesc = itemDescElement ? itemDescElement.textContent.toLowerCase() : '';
                const matchesSearch = itemName.includes(searchTerm) || restaurantName.includes(searchTerm) || itemDesc.includes(searchTerm);
                
                if (matchesSearch) {
                    item.classList.remove('hidden-section');
                    restaurantHasVisibleContent = true;
                } else {
                    item.classList.add('hidden-section');
                }
            });

            if (restaurantHasVisibleContent) {
                restaurantSection.classList.remove('hidden-section');
                parkHasVisibleContent = true;
            } else {
                restaurantSection.classList.add('hidden-section');
            }
        });

        if (parkMatchesFilter && parkHasVisibleContent) {
            parkSection.classList.remove('hidden-section');
        } else {
            parkSection.classList.add('hidden-section');
        }
    });
    
}

function undoLastRemove() {
    if (undoStack.length === 0) return;
    const lastAction = undoStack.pop();
    
    lastAction.parent.insertBefore(lastAction.element, lastAction.nextSibling);
    
    if (lastAction.itemId) {
        let removedItems = [];
        try {
            removedItems = JSON.parse(localStorage.getItem('removedItems') || '[]');
        } catch (e) {
            console.warn('Failed to parse removedItems from localStorage:', e);
            localStorage.removeItem('removedItems');
        }
        const index = removedItems.indexOf(lastAction.itemId);
        if (index > -1) {
            removedItems.splice(index, 1);
            localStorage.setItem('removedItems', JSON.stringify(removedItems));
        }
    }
    
    if (lastAction.restaurantId) {
        let removedRestaurants = [];
        try {
            removedRestaurants = JSON.parse(localStorage.getItem('removedRestaurants') || '[]');
        } catch (e) {
            console.warn('Failed to parse removedRestaurants from localStorage:', e);
            localStorage.removeItem('removedRestaurants');
        }
        const index = removedRestaurants.indexOf(lastAction.restaurantId);
        if (index > -1) {
            removedRestaurants.splice(index, 1);
            localStorage.setItem('removedRestaurants', JSON.stringify(removedRestaurants));
        }
    }
    
    requestAnimationFrame(() => {
        lastAction.element.classList.remove('removing');
    });

    if (undoStack.length === 0) {
        undoButton.disabled = true;
    }
    updateCounters();
}

function restoreDefaults() {
    document.getElementById('search-input').value = '';
    document.getElementById('park-filter').value = 'all';
    localStorage.clear();
    populateChecklist();
    undoStack = [];
    undoButton.disabled = true;
    updateCounters();
}

// Font loading optimization
function ensureHalloweenFonts() {
    // Check if Creepster font is available
    const testElement = document.createElement('div');
    testElement.style.fontFamily = 'Creepster, cursive';
    testElement.style.position = 'absolute';
    testElement.style.visibility = 'hidden';
    testElement.style.fontSize = '72px';
    testElement.innerHTML = 'TEST';
    document.body.appendChild(testElement);
    
    const creepsterWidth = testElement.offsetWidth;
    
    testElement.style.fontFamily = 'cursive';
    const fallbackWidth = testElement.offsetWidth;
    
    document.body.removeChild(testElement);
    
    // If widths are the same, Creepster didn't load
    if (creepsterWidth === fallbackWidth) {
        console.warn('Creepster font not loaded, applying fallback styles');
        // Add a fallback class to body for different styling
        document.body.classList.add('no-creepster');
        
        // Add fallback CSS for better Halloween feel
        const fallbackStyle = document.createElement('style');
        fallbackStyle.textContent = `
            .no-creepster .title-font,
            .no-creepster .modal-title,
            .no-creepster .warning-title,
            .no-creepster .park-header-title {
                font-family: 'Chiller', 'Papyrus', cursive, fantasy, serif !important;
                font-weight: bold;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                font-style: normal;
            }
            
            .no-creepster .title-font {
                font-size: 3.5rem !important;
                line-height: 1 !important;
            }
            
            @media (max-width: 768px) {
                .no-creepster .title-font {
                    font-size: 2.5rem !important;
                }
            }
        `;
        document.head.appendChild(fallbackStyle);
    }
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

window.onload = () => {
    // Check and fix font loading first
    setTimeout(ensureHalloweenFonts, 100);
    
    populateChecklist();
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    
    if (!searchInput || !clearSearchBtn) {
        console.warn('Required elements not found:', { searchInput: !!searchInput, clearSearchBtn: !!clearSearchBtn });
        return;
    }
    
    searchInput.addEventListener('input', function() {
        filterAndSearch();
        // Show/hide clear button based on input content
        if (this.value.trim()) {
            clearSearchBtn.style.display = 'block';
            clearSearchBtn.style.opacity = '1';
        } else {
            clearSearchBtn.style.display = 'none';
            clearSearchBtn.style.opacity = '0';
        }
    });
    
    clearSearchBtn.addEventListener('click', function() {
        searchInput.value = '';
        this.style.display = 'none';
        this.style.opacity = '0';
        filterAndSearch();
        searchInput.focus();
    });
    
    const parkFilter = document.getElementById('park-filter');
    const restoreButton = document.getElementById('restore-button');
    
    if (parkFilter) {
        parkFilter.addEventListener('change', filterAndSearch);
    }
    if (undoButton) {
        undoButton.addEventListener('click', undoLastRemove);
    }
    if (restoreButton) {
        restoreButton.addEventListener('click', showWarningModal);
    }

    // Check if welcome modal should be shown
    const welcomeModalShown = localStorage.getItem('welcomeModalShown');
    if (!welcomeModalShown) {
        // Small delay to ensure page is fully loaded before showing modal
        setTimeout(() => {
            showWelcomeModal();
        }, 100);
    }

    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
    }

    // Initialize floating Halloween particles
    initHalloweenParticles();
    
    // Add enhanced button interactions
    addButtonEffects();
    
    
    // Add micro-interactions
    addMicroInteractions();
};


// Scroll-triggered animations


// Success feedback animations
function createSuccessSparkles(element) {
    const sparklesContainer = document.createElement('div');
    sparklesContainer.className = 'success-sparkles';
    
    element.style.position = 'relative';
    element.appendChild(sparklesContainer);

    const colors = ['orange', 'purple', 'gold'];
    const sparkleCount = 12;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = `sparkle ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        // Random direction and distance
        const angle = (i / sparkleCount) * Math.PI * 2;
        const distance = 30 + Math.random() * 40;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--spark-x', x + 'px');
        sparkle.style.setProperty('--spark-y', y + 'px');
        sparkle.style.animationDelay = Math.random() * 0.2 + 's';
        
        sparklesContainer.appendChild(sparkle);
    }

    // Clean up after animation
    setTimeout(() => {
        sparklesContainer.remove();
    }, 1500);
}

function checkMilestones() {
    // Get current progress
    const totalItems = document.querySelectorAll('.checklist-item input[type="checkbox"]').length;
    const checkedItems = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked').length;
    const percentage = Math.round((checkedItems / totalItems) * 100);

    // Check for milestone achievements (25%, 50%, 75%, 100%)
    const milestones = [25, 50, 75, 100];
    const achievedMilestone = milestones.find(m => 
        percentage >= m && !localStorage.getItem(`milestone-${m}`)
    );

    if (achievedMilestone) {
        localStorage.setItem(`milestone-${achievedMilestone}`, 'true');
        celebrateMilestone(achievedMilestone);
    }
}

function celebrateMilestone(percentage) {
    // Animate the main progress bar
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        bar.classList.add('milestone-achieved');
    });

    // Show celebration message
    const celebrationMsg = document.createElement('div');
    celebrationMsg.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(251, 146, 60, 0.95), rgba(168, 85, 247, 0.95));
        color: white;
        padding: 2rem;
        border-radius: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        z-index: 2000;
        animation: milestone-popup 3s ease-out forwards;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    `;
    celebrationMsg.innerHTML = `
        🎉 Milestone Achieved! 🎉<br>
        <span style="font-size: 3rem;">🎃</span><br>
        ${percentage}% Complete!
    `;

    document.body.appendChild(celebrationMsg);

    // Remove celebration message
    setTimeout(() => {
        celebrationMsg.remove();
        progressBars.forEach(bar => {
            bar.classList.remove('milestone-achieved');
        });
    }, 3000);
}

function celebrateParkCompletion(parkName, location) {
    // Animate the specific park section with extended glow
    const parkSection = document.getElementById(`${location}-section`);
    if (parkSection) {
        parkSection.classList.add('milestone-achieved');
        
        setTimeout(() => {
            parkSection.classList.remove('milestone-achieved');
        }, 1500);
    }

    // Update the progress indicator with celebration styling
    const parkProgressElement = document.getElementById(`${location}-progress`);
    if (parkProgressElement) {
        // Add completion celebration to progress indicator
        parkProgressElement.style.cssText += `
            background: linear-gradient(135deg, #fb923c, #fbbf24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.8));
            animation: milestone-achieved 2s ease-out;
        `;
        
        // Add completion emoji
        const originalText = parkProgressElement.textContent;
        parkProgressElement.innerHTML = `✨ ${originalText} 🎃`;
        
        // Store that this location is completed for future reference
        localStorage.setItem(`completed-${location}`, 'true');
    }
}

// Enhanced micro-interactions
function addMicroInteractions() {
    // Add hover lift to buttons
    document.querySelectorAll('button, .action-button').forEach(btn => {
        btn.classList.add('hover-lift');
    });

    // Add glow to park headers
    document.querySelectorAll('.park-section-header').forEach(header => {
        header.classList.add('hover-glow');
    });

    // Add focus glow to inputs
    document.querySelectorAll('input, select').forEach(input => {
        input.classList.add('input-focus-glow');
    });

    // Add shimmer effect to main title
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        mainTitle.classList.add('text-shimmer');
    }
}

// Enhanced Button Interactions
function createRippleEffect(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    // Ensure button has ripple-container class
    if (!button.classList.contains('ripple-container')) {
        button.classList.add('ripple-container');
    }
    
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function createParticleBurst(event) {
    if (!event || !event.currentTarget) {
        console.warn('Invalid event or target for particle burst');
        return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect) {
        console.warn('Could not get bounding rect for particle burst');
        return;
    }
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const burst = document.createElement('div');
    burst.className = 'particle-burst';
    burst.style.left = centerX + 'px';
    burst.style.top = centerY + 'px';
    document.body.appendChild(burst);
    
    // Create multiple particles
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = `burst-particle ${Math.random() > 0.5 ? 'orange' : 'purple'}`;
        
        // Random direction
        const angle = (i / 8) * Math.PI * 2;
        const distance = 40 + Math.random() * 30;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.setProperty('--dy', dy + 'px');
        
        burst.appendChild(particle);
    }
    
    // Remove burst after animation
    setTimeout(() => {
        burst.remove();
    }, 800);
}

function addButtonEffects() {
    // Add ripple effects to buttons (only if not already added)
    const buttons = document.querySelectorAll('button:not([data-ripple]), .action-button:not([data-ripple]), .pumpkin-icon:not([data-ripple])');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
        button.setAttribute('data-ripple', 'true');
    });
    
    // Add particle bursts to special actions (only if not already added)
    const specialButtons = document.querySelectorAll('#restore-button:not([data-burst]), #undo-button:not([data-burst])');
    specialButtons.forEach(button => {
        button.addEventListener('click', createParticleBurst);
        button.setAttribute('data-burst', 'true');
    });
    
    // Add particle bursts to pumpkin clicks (when checking off items)
    const pumpkins = document.querySelectorAll('.pumpkin-icon:not([data-pumpkin-burst])');
    pumpkins.forEach(pumpkin => {
        pumpkin.addEventListener('click', (e) => {
            // Small delay to let the checkbox state update first
            setTimeout(() => {
                const checkbox = pumpkin.parentElement.querySelector('input[type="checkbox"]');
                if (checkbox && checkbox.checked) {
                    createParticleBurst(e);
                }
            }, 50);
        });
        pumpkin.setAttribute('data-pumpkin-burst', 'true');
    });
}

// Halloween Particles System
function initHalloweenParticles() {
    const particleContainer = document.getElementById('halloween-particles');
    const particles = ['🦇', '🎃', '🍂', '🍁', '🕷️'];
    const particleClasses = ['bat', 'pumpkin', 'leaf', 'leaf', 'bat'];
    
    function createParticle() {
        const particle = document.createElement('div');
        const randomIndex = Math.floor(Math.random() * particles.length);
        
        particle.className = `particle ${particleClasses[randomIndex]}`;
        particle.textContent = particles[randomIndex];
        
        // Random starting position (left to right)
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (12-18 seconds)
        particle.style.animationDuration = (12 + Math.random() * 6) + 's';
        
        // Random delay before starting
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 23000); // Max duration + delay
    }
    
    // Create initial particles
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createParticle(), i * 2000);
    }
    
    // Continue creating particles every 3-5 seconds
    setInterval(() => {
        if (Math.random() > 0.3) { // 70% chance to create a particle
            createParticle();
        }
    }, 3000 + Math.random() * 2000);
}