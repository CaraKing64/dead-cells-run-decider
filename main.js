function generateRun(runes, dlc, visited_biomes){
    biome_exit_requirements = {
        "prisoners_quarters": {
            "dilapidated_arboretum":{"runes":"teleport", "dlc":"bad_seed"},
            "promenade_of_the_condemned":{},
            "toxic_sewers":{"runes":"teleport"}
        },
        "dilapidated_arboretum":{
            "prison_depths":{"runes":"spider"},
            "morass_of_the_banished":{},
            "ramparts":{}
        },
        "promenade_of_the_condemned":{
            "morass_of_the_banished":{"visited":true},
            "ossuary":{"runes":"teleport"},
            "ramparts":{},
            "prison_depths":{"runes":"spider"}
        },
        "toxic_sewers":{
            "corrupted_prison":{"runes":"spider"},
            "ramparts":{},
            "ancient_sewers":{"runes":"ram"}
        },
        "prison_depths":{
            "morass_of_the_banished":{"visited":true},
            "ossuary":{},
            "ancient_sewers":{"bc":1}
        },
        "corrupted_prison":{
            "ramparts":{"bc":1},
            "ancient_sewers":{}
        },
        "morass_of_the_banished":{
            "nest":{}
        },
        "ossuary":{
            "black_bridge":{}
        },
        "ramparts":{
            "black_bridge":{},
            "insufferable_crypt":{"bc":3}
        },
        "ancient_sewers":{
            "insufferable_crypt":{}
        },
        "nest":{
            "fractured_shrines":{"dlc":"fatal_falls"},
            "stilt_village":{},
            "graveyard":{"runes":"spider"}
        },
        "black_bridge":{
            "fractured_shrines":{"dlc":"fatal_falls"},
            "stilt_village":{},
            "slumbering_sanctuary":{"runes":"spider"}
        },
        "insufferable_crypt":{
            "slumbering_sanctuary":{},
            "graveyard":{"runes":"spider"}
        },
        "fractured_shrines":{
            "undying_shores":{"visited":true},
            "clock_tower":{},
            "forgotten_sepulcher":{"runes":"teleport"}
        },
        "stilt_village":{
            "undying_shores":{"visited":true},
            "clock_tower":{},
            "forgotten_sepulcher":{"runes":"teleport"}
        },
        "slumbering_sanctuary":{
            "clock_tower":{},
            "forgotten_sepulcher":{},
            "cavern":{"visited":true,"bc":2}
        },
        "graveyard":{
            "undying_shores":{"visited":true},
            "forgotten_sepulcher":{},
            "cavern":{"visited":true}
        },
        "undying_shores":{
            "mausoleum":{}
        },
        "clock_tower":{
            "clock_room":{}
        },
        "forgotten_sepulcher":{
            "clock_room":{},
            "guardians_haven":{"visited":true, "bc":2}
        },
        "cavern":{
            "mausoleum":{"visited":true},
            "guardians_haven":{}
        },
        "mausoleum":{
            "infested_shipwreck":{"visited":true, "dlc":"queen_of_the_sea"},
            "derelict_distillery":{},
            "high_peak_castle":{}
        },
        "clock room":{
            "infested_shipwreck":{"visited":true, "dlc":"queen_of_the_sea"},
            "derelict_distillery":{},
            "high_peak_castle":{}
        },
        "guardians_haven":{
            "infested_shipwreck":{"visited":true, "dlc":"queen_of_the_sea"},
            "derelict_distillery":{},
            "high_peak_castle":{},
            "throne_room":{}
        },
        "infested_shipwreck":{
            "lighthouse":{}
        },
        "derelict_distillery":{
            "lighthouse":{"visited":true},
            "throne_room":{}
        },
        "high_peak_castle":{
            "throne_room":{}
        },
        "lighthouse":{
            "crown":{}
        }
    }



    return("prisoners mogussers -> mogussy of the condemned")
}
function randint(minimum, maximum){
    var x = Math.floor(Math.random()*(maximum-minimum))+minimum
    return x
}