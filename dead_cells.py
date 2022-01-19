# ENTER IN YOUR INFORMATION HERE
runes = {
    "vine":True,
    "teleport":True,
    "spider":True,
    "ram":True,
    "homunculus":True,    
    }
dlc = {
    "rise_of_the_giant":True,
    "bad_seed":True,
    "fatal_falls":True,
    "queen_of_the_sea":True
}
visited_biomes = {
    "morass_of_the_banished":True,
    "undying_shores":True,
    "cavern":True,
    "guardians_haven":True,
    "mausoleum":True,
    "infested_shipwreck":True,
    "lighthouse":True,    
}



# code is below

import random

biome_map = {
    "prisoners_quarters": {
        "dilapidated_arboretum":{"runes":"teleport"},
        "promenade_of_the_condemned":{},
        "toxic_sewers":{"runes":"teleport"}
    }

}

boss_cell = 5

class Biome():
    def __init__(self, name):
        self.name = name
        self.exits = []
    def exit(self, exit : Biome):
        print(f"Leaving {self.name} to go to {exit.name}")
